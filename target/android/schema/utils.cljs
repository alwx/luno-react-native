(ns schema.utils
  "Private utilities used in schema implementation."
  (:refer-clojure :exclude [record?])
                                              
         (:require
          goog.string.format
          [goog.string :as gstring]
          [clojure.string :as string])
         (:require-macros [schema.utils :refer [char-map]]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Miscellaneous helpers

(defn assoc-when
  "Like assoc but only assocs when value is truthy.  Copied from plumbing.core so that
   schema need not depend on plumbing."
  [m & kvs]
  (assert (even? (count kvs)))
  (into (or m {})
        (for [[k v] (partition 2 kvs)
              :when v]
          [k v])))

(defn type-of [x]
                 
         (js* "typeof ~{}" x))

(defn fn-schema-bearer
  "What class can we associate the fn schema with? In Clojure use the class of the fn; in
   cljs just use the fn itself."
  [f]
                 
         f)

(defn format* [fmt & args]
  (apply                     gstring/format fmt args))

(def max-value-length (atom 19))

(defn value-name
  "Provide a descriptive short name for a value."
  [value]
  (let [t (type-of value)]
    (if (<= (count (str value)) @max-value-length)
      value
      (symbol (str "a-"                                  t)))))

                     
                                 

(defn unmunge
  "TODO: eventually use built in demunge in latest cljs."
  [s]
  (->> (char-map)
       (sort-by #(- (count (second %))))
       (reduce (fn [^String s [to from]] (string/replace s from (str to))) s)))

(defn fn-name
  "A meaningful name for a function that looks like its symbol, if applicable."
  [f]
         (unmunge
          (or (not-empty (second (re-find #"function ([^\(]*)\(" (str f))))
              "function"))
                                    
                                        
                          
                                   
                                                                    
                         
                                                    )

(defn record? [x]
                                          
         (satisfies? IRecord x))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Error descriptions

;; A leaf schema validation error, describing the schema and value and why it failed to
;; match the schema.  In Clojure, prints like a form describing the failure that would
;; return true.

(declare validation-error-explain)

(deftype ValidationError [schema value expectation-delay fail-explanation]
         IPrintWithWriter
         (-pr-writer [this writer opts]
           (-pr-writer (validation-error-explain this) writer opts)))

(defn validation-error-explain [^ValidationError err]
  (list (or (.-fail-explanation err) 'not) @(.-expectation-delay err)))

                                                                   
                                                    
                                                       

(defn make-ValidationError
  "for cljs sake (easier than normalizing imports in macros.clj)"
  [schema value expectation-delay fail-explanation]
  (ValidationError. schema value expectation-delay fail-explanation))


;; Attach a name to an error from a named schema.
(declare named-error-explain)

(deftype NamedError [name error]
         IPrintWithWriter
         (-pr-writer [this writer opts]
           (-pr-writer (named-error-explain this) writer opts)))

(defn named-error-explain [^NamedError err]
  (list 'named (.-error err) (.-name err)))

                                                                   
                                               
                                                  


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Monoidish error containers, which wrap errors (to distinguish from success values).

(defrecord ErrorContainer [error])

(defn error
  "Distinguish a value (must be non-nil) as an error."
  [x] (assert x) (->ErrorContainer x))

(defn error? [x]
  (instance? ErrorContainer x))

(defn error-val [x]
  (when (error? x)
    (.-error ^ErrorContainer x)))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Registry for attaching schemas to classes, used for defn and defrecord

     
                                                                                                       
                                            
                                                                                     
                                                                              
                                                                      
                                                 
                          
                                                                                   
                                         

                            
                                                                       
                                   

      
(do
  (defn declare-class-schema! [klass schema]
    (aset klass "schema$utils$schema" schema))

  (defn class-schema [klass]
    (aget klass "schema$utils$schema")))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Utilities for fast-as-possible reference to use to turn fn schema validation on/off

     
                         
                        
                          

      
(defprotocol PSimpleCell
  (get_cell [this])
  (set_cell [this x]))


;; adds ~5% overhead compared to no check
(deftype SimpleVCell [^:volatile-mutable ^boolean q]
  PSimpleCell
  (get_cell [this] q)
  (set_cell [this x] (set! q x)))

(def use-fn-validation
  "Turn on run-time function validation for functions compiled when
   s/compile-fn-validation was true -- has no effect for functions compiled
   when it is false."
  (SimpleVCell. false))

      
(do
  (set! (.-get_cell use-fn-validation) (partial get_cell use-fn-validation))
  (set! (.-set_cell use-fn-validation) (partial set_cell use-fn-validation)))

;;;;;;;;;;;; This file autogenerated from src/cljx/schema/utils.cljx
