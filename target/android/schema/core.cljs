(ns schema.core
  "A library for data shape definition and validation. A Schema is just Clojure data,
   which can be used to document and validate Clojure functions and data.

   For example,

   (def FooBar {:foo Keyword :bar [Number]}) ;; a schema

   (check FooBar {:foo :k :bar [1.0 2.0 3.0]})
   ==> nil

   representing successful validation, but the following all return helpful errors
   describing how the provided data fails to measure up to schema FooBar's standards.

   (check FooBar {:bar [1.0 2.0 3.0]})
   ==> {:foo missing-required-key}

   (check FooBar {:foo 1 :bar [1.0 2.0 3.0]})
   ==> {:foo (not (keyword? 1))}

   (check FooBar {:foo :k :bar [1.0 2.0 3.0] :baz 1})
   ==> {:baz disallowed-key}

   Schema lets you describe your leaf values using the Any, Keyword, Symbol, Number,
   String, and Int definitions below, or (in Clojure) you can use arbitrary Java
   classes or primitive casts to describe simple values.

   From there, you can build up schemas for complex types using Clojure syntax
   (map literals for maps, set literals for sets, vector literals for sequences,
   with details described below), plus helpers below that provide optional values,
   enumerations, arbitrary predicates, and more.

   Assuming you (:require [schema.core :as s :include-macros true]),
   Schema also provides macros for defining records with schematized elements
   (s/defrecord), and named or anonymous functions (s/fn and s/defn) with
   schematized inputs and return values.  In addition to producing better-documented
   records and functions, these macros allow you to retrieve the schema associated
   with the defined record or function.  Moreover, functions include optional
   *validation*, which will throw an error if the inputs or outputs do not
   match the provided schemas:

   (s/defrecord FooBar
    [foo :- Int
     bar :- String])

   (s/defn quux :- Int
    [foobar :- Foobar
     mogrifier :- Number]
    (* mogrifier (+ (:foo foobar) (Long/parseLong (:bar foobar)))))

   (quux (FooBar. 10 \"5\") 2)
   ==> 30

   (fn-schema quux)
   ==> (=> Int (record user.FooBar {:foo Int, :bar java.lang.String}) java.lang.Number)

   (s/with-fn-validation (quux (FooBar. 10.2 \"5\") 2))
   ==> Input to quux does not match schema: [(named {:foo (not (integer? 10.2))} foobar) nil]

   As you can see, the preferred syntax for providing type hints to schema's defrecord,
   fn, and defn macros is to follow each element, argument, or function name with a
   :- schema.  Symbols without schemas default to a schema of Any.  In Clojure,
   class (e.g., clojure.lang.String) and primitive schemas (long, double) are also
   propagated to tag metadata to ensure you get the type hinting and primitive
   behavior you ask for.

   If you don't like this style, standard Clojure-style typehints are also supported:

   (fn-schema (s/fn [^String x]))
   ==> (=> Any java.lang.String)

   You can directly type hint a symbol as a class, primitive, or simple
   schema.

   See the docstrings of defrecord, fn, and defn for more details about how
   to use these macros."
  ;; don't exclude def because it's not a var.
  (:refer-clojure :exclude [Keyword Symbol atom defrecord defn letfn defmethod fn])
  (:require
   [clojure.string :as str]
                                   
   [schema.utils :as utils]
   [schema.spec.core :as spec :include-macros true]
   [schema.spec.leaf :as leaf]
   [schema.spec.variant :as variant]
   [schema.spec.collection :as collection])
         (:require-macros [schema.macros :as macros]
                          schema.core))

                          
                                     
                                    
                
                                                      
                                                          
                  
                                       
                         

                               
                                                             
                                                                                       

                                      

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Schema protocol

(defprotocol Schema
  (spec [this]
    "A spec is a record of some type that expresses the structure of this schema
     in a declarative and/or imperative way.  See schema.spec.* for examples.")
  (explain [this]
    "Expand this schema to a human-readable format suitable for pprinting,
     also expanding class schematas at the leaves.  Example:

     user> (s/explain {:a s/Keyword :b [s/Int]} )
     {:a Keyword, :b [Int]}"))

;; Schemas print as their explains
     
                                                                      
                                        
                                                                        
                                                                 
                                                                                

(clojure.core/defn checker
  "Compile an efficient checker for schema, which returns nil for valid values and
   error descriptions otherwise."
  [schema]
  (comp utils/error-val
        (spec/run-checker
         (clojure.core/fn [s params] (spec/checker (spec s) params)) false schema)))

(clojure.core/defn check
  "Return nil if x matches schema; otherwise, returns a value that looks like the
   'bad' parts of x with ValidationErrors at the leaves describing the failures.

   If you will be checking many datums, it is much more efficient to create
   a 'checker' once and call it on each of them."
  [schema x]
  ((checker schema) x))

(clojure.core/defn validator
  "Compile an efficient validator for schema."
  [schema]
  (let [c (checker schema)]
    (clojure.core/fn [value]
      (when-let [error (c value)]
        (macros/error! (utils/format* "Value does not match schema: %s" (pr-str error))
                       {:schema schema :value value :error error}))
      value)))

(clojure.core/defn validate
  "Throw an exception if value does not satisfy schema; otherwise, return value.
   If you will be validating many datums, it is much more efficient to create
   a 'validator' once and call it on each of them."
  [schema value]
  ((validator schema) value))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Platform-specific leaf Schemas

;; On the JVM, a Class itself is a schema. In JS, we treat functions as prototypes so any
;; function prototype checks objects for compatibility.

(clojure.core/defn instance-precondition [s klass]
  (spec/precondition
   s
                             
          #(and (not (nil? %))
                (or (identical? klass (.-constructor %))
                    (js* "~{} instanceof ~{}" % klass)))
   #(list 'instance? klass %)))

(extend-protocol Schema
             
         function
  (spec [this]
    (let [pre (instance-precondition this this)]
      (if-let [class-schema (utils/class-schema this)]
        (variant/variant-spec pre [{:schema class-schema}])
        (leaf/leaf-spec pre))))
  (explain [this]
    (if-let [more-schema (utils/class-schema this)]
      (explain more-schema)
      (condp = this
                                      nil 'Str
                                       js/Boolean 'Bool
                                      js/Number 'Num
                                             nil 'Regex
                                    js/Date 'Inst
                                    cljs.core/UUID 'Uuid
                                                     this))))


;; On the JVM, the primitive coercion functions (double, long, etc)
;; alias to the corresponding boxed number classes

     
   
                                                 
                                                            
                              
                            
                      
                                                                                
                         
                         

                                  
                                
                              
                                
                                
                                   
                              
                                    

                                                 
                                                
                                               
                                              
                                                
                                               
                                               
                                                   

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Cross-platform Schema leaves

;;; Any matches anything (including nil)

(clojure.core/defrecord AnythingSchema [_]
  ;; _ is to work around bug in Clojure where eval-ing defrecord with no fields
  ;; loses type info, which makes this unusable in schema-fn.
  ;; http://dev.clojure.org/jira/browse/CLJ-1093
  Schema
  (spec [this] (leaf/leaf-spec spec/+no-precondition+))
  (explain [this] 'Any))

(def Any
  "Any value, including nil."
  (AnythingSchema. nil))


;;; eq (to a single allowed value)

(clojure.core/defrecord EqSchema [v]
  Schema
  (spec [this] (leaf/leaf-spec (spec/precondition this #(= v %) #(list '= v %))))
  (explain [this] (list 'eq v)))

(clojure.core/defn eq
  "A value that must be (= v)."
  [v]
  (EqSchema. v))


;;; isa (a child of parent)

(clojure.core/defrecord Isa [h parent]
  Schema
  (spec [this] (leaf/leaf-spec (spec/precondition this #(isa? h % parent) #(list 'isa? % parent))))
  (explain [this] (list 'isa? parent)))

(clojure.core/defn isa
  "A value that must be a child of parent."
  ([parent]
     (Isa. nil parent))
  ([h parent]
     (Isa. h parent)))


;;; enum (in a set of allowed values)

(clojure.core/defrecord EnumSchema [vs]
  Schema
  (spec [this] (leaf/leaf-spec (spec/precondition this #(contains? vs %) #(list vs %))))
  (explain [this] (cons 'enum vs)))

(clojure.core/defn enum
  "A value that must be = to some element of vs."
  [& vs]
  (EnumSchema. (set vs)))


;;; pred (matches all values for which p? returns truthy)

(clojure.core/defrecord Predicate [p? pred-name]
  Schema
  (spec [this] (leaf/leaf-spec (spec/precondition this p? #(list pred-name %))))
  (explain [this]
    (cond (= p? integer?) 'Int
          (= p? keyword?) 'Keyword
          (= p? symbol?) 'Symbol
          (= p? string?) 'Str
          :else (list 'pred pred-name))))

(clojure.core/defn pred
  "A value for which p? returns true (and does not throw).
   Optional pred-name can be passed for nicer validation errors."
  ([p?] (pred p? (symbol (utils/fn-name p?))))
  ([p? pred-name]
     (when-not (ifn? p?)
       (macros/error! (utils/format* "Not a function: %s" p?)))
     (Predicate. p? pred-name)))


;;; protocol (which value must `satisfies?`)

(clojure.core/defn protocol-name [protocol]
  (-> protocol meta :proto-sym))

;; In cljs, satisfies? is a macro so we must precompile (partial satisfies? p)
;; and put it in metadata of the record so that equality is preserved, along with the name.
(clojure.core/defrecord Protocol [p]
  Schema
  (spec [this]
    (leaf/leaf-spec
     (spec/precondition
      this
      #((:proto-pred (meta this)) %)
      #(list 'satisfies? (protocol-name this) %))))
  (explain [this] (list 'protocol (protocol-name this))))

;; The cljs version is macros/protocol by necessity, since cljs `satisfies?` is a macro.
                  
                                         

                                                                           
                                                                         
                      

                                                                 
     
                             
                                    
                       


;;; regex (validates matching Strings)

(extend-protocol Schema
                               
         js/RegExp
  (spec [this]
    (leaf/leaf-spec
     (some-fn
      (spec/simple-precondition this string?)
      (spec/precondition this #(re-find this %) #(list 're-find (explain this) %)))))
  (explain [this]
                                        
           (symbol (str "#\"" (.slice (str this) 1 -1) "\""))))


;;; Cross-platform Schemas for atomic value types

(def Str
  "Satisfied only by String.
   Is (pred string?) and not js/String in cljs because of keywords."
                                (pred string?))

(def Bool
  "Boolean true or false"
                                 js/Boolean)

(def Num
  "Any number"
                                js/Number)

(def Int
  "Any integral number"
  (pred integer?))

(def Keyword
  "A keyword"
  (pred keyword?))

(def Symbol
  "A symbol"
  (pred symbol?))

(def Regex
  "A regular expression"
                               
         (reify Schema ;; Closure doesn't like if you just def as js/RegExp
           (spec [this]
             (leaf/leaf-spec
              (spec/precondition this #(instance? js/RegExp %) #(list 'instance? 'js/RegExp %))))
           (explain [this] 'Regex)))

(def Inst
  "The local representation of #inst ..."
                              js/Date)

(def Uuid
  "The local representation of #uuid ..."
                              cljs.core/UUID)



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Variant schemas (and other unit containers)

;;; maybe (nil)

(clojure.core/defrecord Maybe [schema]
  Schema
  (spec [this]
    (variant/variant-spec
     spec/+no-precondition+
     [{:guard nil? :schema (eq nil)}
      {:schema schema}]))
  (explain [this] (list 'maybe (explain schema))))

(clojure.core/defn maybe
  "A value that must either be nil or satisfy schema"
  [schema]
  (Maybe. schema))


;;; named (schema elements)

(clojure.core/defrecord NamedSchema [schema name]
  Schema
  (spec [this]
    (variant/variant-spec
     spec/+no-precondition+
     [{:schema schema :wrap-error #(utils/->NamedError name %)}]))
  (explain [this] (list 'named (explain schema) name)))

(clojure.core/defn named
  "A value that must satisfy schema, and has a name for documentation purposes."
  [schema name]
  (NamedSchema. schema name))


;;; either (satisfies this schema or that one)

(clojure.core/defrecord Either [schemas]
  Schema
  (spec [this]
    (variant/variant-spec
     spec/+no-precondition+
     (for [s schemas]
       {:guard (complement (checker s)) ;; since the guard determines which option we check against
        :schema s})
     #(list 'some-matching-either-clause? %)))
  (explain [this] (cons 'either (map explain schemas))))

(clojure.core/defn ^{:deprecated "1.0.0"} either
  "A value that must satisfy at least one schema in schemas.
   Note that `either` does not work properly with coercion

   DEPRECATED: prefer `conditional` or `cond-pre`

   WARNING: either does not work with coercion.  It is also slow and gives
   bad error messages.  Please consider using `conditional` and friends
   instead; they are more efficient, provide better error messages,
   and work with coercion."
  [& schemas]
  (Either. schemas))


;;; conditional (choice of schema, based on predicates on the value)

(clojure.core/defrecord ConditionalSchema [preds-and-schemas error-symbol]
  Schema
  (spec [this]
    (variant/variant-spec
     spec/+no-precondition+
     (for [[p s] preds-and-schemas]
       {:guard p :schema s})
     #(list (or error-symbol
                (if (= 1 (count preds-and-schemas))
                  (symbol (utils/fn-name (ffirst preds-and-schemas)))
                  'some-matching-condition?))
            %)))
  (explain [this]
    (cons 'conditional
          (concat
           (mapcat (clojure.core/fn [[pred schema]] [(symbol (utils/fn-name pred)) (explain schema)])
                   preds-and-schemas)
           (when error-symbol [error-symbol])))))

(clojure.core/defn conditional
  "Define a conditional schema.  Takes args like cond,
   (conditional pred1 schema1 pred2 schema2 ...),
   and checks the first schema where pred is true on the value.
   Unlike cond, throws if the value does not match any condition.
   :else may be used as a final condition in the place of (constantly true).
   More efficient than either, since only one schema must be checked.
   An optional final argument can be passed, a symbol to appear in
   error messages when none of the conditions match."
  [& preds-and-schemas]
  (macros/assert!
   (and (seq preds-and-schemas)
        (or (even? (count preds-and-schemas))
            (symbol? (last preds-and-schemas))))
   "Expected even, nonzero number of args (with optional trailing symbol); got %s"
   (count preds-and-schemas))
  (ConditionalSchema.
   (for [[pred schema] (partition 2 preds-and-schemas)]
     [(if (= pred :else) (constantly true) pred) schema])
   (if (odd? (count preds-and-schemas)) (last preds-and-schemas))))


;; cond-pre (conditional based on surface type)

(defprotocol HasPrecondition
  (precondition [this]
    "Return a predicate representing the Precondition for this schema:
     the predicate returns true if the precondition is satisfied.
     (See spec.core for more details)"))

(extend-protocol HasPrecondition
  schema.spec.leaf.LeafSpec
  (precondition [this]
    (complement (.-pre ^schema.spec.leaf.LeafSpec this)))

  schema.spec.variant.VariantSpec
  (precondition [^schema.spec.variant.VariantSpec this]
    (every-pred
     (complement (.-pre this))
     (apply some-fn
            (for [{:keys [guard schema]} (.-options this)]
              (if guard
                (every-pred guard (precondition (spec schema)))
                (precondition (spec schema)))))))

  schema.spec.collection.CollectionSpec
  (precondition [this]
    (complement (.-pre ^schema.spec.collection.CollectionSpec this))))

(clojure.core/defrecord CondPre [schemas]
  Schema
  (spec [this]
    (variant/variant-spec
     spec/+no-precondition+
     (for [s schemas]
       {:guard (precondition (spec s))
        :schema s})
     #(list 'matches-some-precondition? %)))
  (explain [this]
    (cons 'cond-pre
          (map explain schemas))))

(clojure.core/defn cond-pre
  "A replacement for `either` that constructs a conditional schema
   based on the schema spec preconditions of the component schemas.

   EXPERIMENTAL"
  [& schemas]
  (CondPre. schemas))

;; constrained (post-condition on schema)

(clojure.core/defrecord Constrained [schema postcondition post-name]
  Schema
  (spec [this]
    (variant/variant-spec
     spec/+no-precondition+
     [{:schema schema}]
     nil
     (spec/precondition this postcondition #(list post-name %))))
  (explain [this]
    (list 'constrained (explain schema) post-name)))

(clojure.core/defn constrained
  "A schema with an additional post-condition.  Differs from `conditional`
   with a single schema, in that the predicate checked *after* the main
   schema.  This can lead to better error messages, and is often better
   suited for coercion."
  ([s p?] (constrained s p? (symbol (utils/fn-name p?))))
  ([s p? pred-name]
     (when-not (ifn? p?)
       (macros/error! (utils/format* "Not a function: %s" p?)))
     (Constrained. s p? pred-name)))

;;; both (satisfies this schema and that one)

(clojure.core/defrecord Both [schemas]
  Schema
  (spec [this] this)
  (explain [this] (cons 'both (map explain schemas)))
  HasPrecondition
  (precondition [this]
    (apply every-pred (map (comp precondition spec) schemas)))
  spec/CoreSpec
  (subschemas [this] schemas)
  (checker [this params]
    (reduce
     (clojure.core/fn [f t]
       (clojure.core/fn [x]
         (let [tx (t x)]
           (if (utils/error? tx)
             tx
             (f (or tx x))))))
     (map #(spec/sub-checker {:schema %} params) (reverse schemas)))))

(clojure.core/defn ^{:deprecated "1.0.0"} both
  "A value that must satisfy every schema in schemas.

   DEPRECATED: prefer 'conditional' with a single condition
   instead, or `constrained`.

   When used with coercion, coerces each schema in sequence."
  [& schemas]
  (Both. schemas))


(clojure.core/defn if
  "if the predicate returns truthy, use the if-schema, otherwise use the else-schema"
  [pred if-schema else-schema]
  (conditional pred if-schema (constantly true) else-schema))


;;; Recursive schemas
;; Supports recursively defined schemas by using the level of indirection offered by by
;; Clojure and ClojureScript vars.

(clojure.core/defn var-name [v]
  (let [{:keys [ns name]} (meta v)]
    (symbol (str                           ns "/" name))))

(clojure.core/defrecord Recursive [derefable]
  Schema
  (spec [this] (variant/variant-spec spec/+no-precondition+ [{:schema @derefable}]))
  (explain [this]
    (list 'recursive
          (if                               (instance? Var derefable)
              (list 'var (var-name derefable))
                   
                             
                                                  
                                                          
                    
              '...))))

(clojure.core/defn recursive
  "Support for (mutually) recursive schemas by passing a var that points to a schema,
   e.g (recursive #'ExampleRecursiveSchema)."
  [schema]
  (when-not                                                     (satisfies? IDeref schema)
            (macros/error! (utils/format* "Not an IDeref: %s" schema)))
  (Recursive. schema))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Atom schema

(defn- atom? [x]
                                       
         (satisfies? IAtom x))

(clojure.core/defrecord Atomic [schema]
  Schema
  (spec [this]
    (collection/collection-spec
     (spec/simple-precondition this atom?)
     clojure.core/atom
     [(collection/one-element true schema (clojure.core/fn [item-fn coll] (item-fn @coll) nil))]
     (clojure.core/fn [_ xs _] (clojure.core/atom (first xs)))))
  (explain [this] (list 'atom (explain schema))))

(clojure.core/defn atom
  "An atom containing a value matching 'schema'."
  [schema]
  (->Atomic schema))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Map Schemas

;; A map schema is itself a Clojure map, which can provide value schemas for specific required
;; and optional keys, as well as a single, optional schema for additional key-value pairs.

;; Specific keys are mapped to value schemas, and given as either:
;;  - (required-key k), a required key (= k)
;;  - a keyword, also a required key
;;  - (optional-key k), an optional key (= k)
;; For example, {:a Int (optional-key :b) String} describes a map with key :a mapping to an
;; integer, an optional key :b mapping to a String, and no other keys.

;; There can also be a single additional key, itself a schema, mapped to the schema for
;; corresponding values, which applies to all key-value pairs not covered by an explicit
;; key.
;; For example, {Int String} is a mapping from integers to strings, and
;; {:a Int Int String} is a mapping from :a to an integer, plus zero or more additional
;; mappings from integers to strings.


;;; Definitions for required and optional keys, and single entry validators

(clojure.core/defrecord RequiredKey [k])

(clojure.core/defn required-key
  "A required key in a map"
  [k]
  (if (keyword? k)
    k
    (RequiredKey. k)))

(clojure.core/defn required-key? [ks]
  (or (keyword? ks)
      (instance? RequiredKey ks)))

(clojure.core/defrecord OptionalKey [k])

(clojure.core/defn optional-key
  "An optional key in a map"
  [k]
  (OptionalKey. k))

(clojure.core/defn optional-key? [ks]
  (instance? OptionalKey ks))


(clojure.core/defn explicit-schema-key [ks]
  (cond (keyword? ks) ks
        (instance? RequiredKey ks) (.-k ^RequiredKey ks)
        (optional-key? ks) (.-k ^OptionalKey ks)
        :else (macros/error! (utils/format* "Bad explicit key: %s" ks))))

(clojure.core/defn specific-key? [ks]
  (or (required-key? ks)
      (optional-key? ks)))

;; A schema for a single map entry.
(clojure.core/defrecord MapEntry [key-schema val-schema]
  Schema
  (spec [this]
    (collection/collection-spec
     spec/+no-precondition+
     vec
     [(collection/one-element true key-schema (clojure.core/fn [item-fn e] (item-fn (key e)) e))
      (collection/one-element true val-schema (clojure.core/fn [item-fn e] (item-fn (val e)) nil))]
     (clojure.core/fn [[k] [xk xv] _]
       (if-let [k-err (utils/error-val xk)]
         [k-err 'invalid-key]
         [k (utils/error-val xv)]))))
  (explain [this]
    (list
     'map-entry
     (explain key-schema)
     (explain val-schema))))

(clojure.core/defn map-entry [key-schema val-schema]
  (MapEntry. key-schema val-schema))

(clojure.core/defn find-extra-keys-schema [map-schema]
  (let [key-schemata (remove specific-key? (keys map-schema))]
    (macros/assert! (< (count key-schemata) 2)
                    "More than one non-optional/required key schemata: %s"
                    (vec key-schemata))
    (first key-schemata)))

(clojure.core/defn- explain-kspec [kspec]
  (if (specific-key? kspec)
    (if (keyword? kspec)
      kspec
      (list (cond (required-key? kspec) 'required-key
                  (optional-key? kspec) 'optional-key)
            (explicit-schema-key kspec)))
    (explain kspec)))

(defn- map-elements [this]
  (let [extra-keys-schema (find-extra-keys-schema this)]
    (let [duplicate-keys (->> (dissoc this extra-keys-schema)
                              keys
                              (group-by explicit-schema-key)
                              vals
                              (filter #(> (count %) 1))
                              (apply concat)
                              (mapv explain-kspec))]
      (macros/assert! (empty? duplicate-keys)
                      "Schema has multiple variants of the same explicit key: %s" duplicate-keys))
    (concat
     (for [[k v] (dissoc this extra-keys-schema)]
       (let [rk (explicit-schema-key k)
             required? (required-key? k)]
         (collection/one-element
          required? (map-entry (eq rk) v)
          (clojure.core/fn [item-fn m]
            (let [e (find m rk)]
              (cond e (item-fn e)
                    required? (item-fn (utils/error [rk 'missing-required-key])))
              (if e
                (dissoc                                                                                m
                        rk)
                m))))))
     (when extra-keys-schema
       [(collection/all-elements (apply map-entry (find this extra-keys-schema)))]))))

(defn- map-error []
  (clojure.core/fn [_ elts extra]
    (into {} (concat (keep utils/error-val elts) (for [[k _] extra] [k 'disallowed-key])))))

(defn- map-spec [this]
  (collection/collection-spec
   (spec/simple-precondition this map?)
   #(into {} %)
   (map-elements this)
   (map-error)))

(clojure.core/defn- map-explain [this]
  (into {} (for [[k v] this] [(explain-kspec k) (explain v)])))

(extend-protocol Schema
                                   
         cljs.core.PersistentArrayMap
  (spec [this] (map-spec this))
  (explain [this] (map-explain this))
         cljs.core.PersistentHashMap
         (spec [this] (map-spec this))
         (explain [this] (map-explain this)))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Set schemas

;; A set schema is a Clojure set with a single element, a schema that all values must satisfy

(extend-protocol Schema
                                   
         cljs.core.PersistentHashSet
  (spec [this]
    (macros/assert! (= (count this) 1) "Set schema must have exactly one element")
    (collection/collection-spec
     (spec/simple-precondition this set?)
     set
     [(collection/all-elements (first this))]
     (clojure.core/fn [_ xs _] (set (keep utils/error-val xs)))))
  (explain [this] (set [(explain (first this))])))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Queue schemas

;; A queue schema is satisfied by PersistentQueues containing values that all satisfy
;; a specific sub-schema.

(clojure.core/defn queue? [x]
  (instance?
                                     
          cljs.core/PersistentQueue
   x))

(clojure.core/defn as-queue [col]
  (reduce
   conj
                                           
          cljs.core/PersistentQueue.EMPTY
   col))

(clojure.core/defrecord Queue [schema]
  Schema
  (spec [this]
    (collection/collection-spec
     (spec/simple-precondition this queue?)
     as-queue
     [(collection/all-elements schema)]
     (clojure.core/fn [_ xs _] (as-queue (keep utils/error-val xs)))))
  (explain [this] (list 'queue (explain schema))))

(clojure.core/defn queue
  "Defines a schema satisfied by instances of clojure.lang.PersistentQueue
  (clj.core/PersistentQueue in ClojureScript) whose values satisfy x."
  [x]
  (Queue. x))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Sequence Schemas

;; A sequence schema looks like [one* optional* rest-schema?].
;; one matches a single required element, and must be the output of 'one' below.
;; optional matches a single optional element, and must be the output of 'optional' below.
;; Finally, rest-schema is any schema, which must match any remaining elements.
;; (if optional elements are present, they must be matched before the rest-schema is applied).

(clojure.core/defrecord One [schema optional? name])

(clojure.core/defn one
  "A single required element of a sequence (not repeated, the implicit default)"
  ([schema name]
     (One. schema false name)))

(clojure.core/defn optional
  "A single optional element of a sequence (not repeated, the implicit default)"
  ([schema name]
     (One. schema true name)))

(clojure.core/defn parse-sequence-schema [s]
  "Parses and validates a sequence schema, returning a vector in the form
  [singles multi] where singles is a sequence of 'one' and 'optional' schemas
  and multi is the rest-schema (which may be nil). A valid sequence schema is
  a vector in the form [one* optional* rest-schema?]."
  (let [[required more] (split-with #(and (instance? One %) (not (:optional? %))) s)
        [optional more] (split-with #(and (instance? One %) (:optional? %)) more)]
    (macros/assert!
     (and (<= (count more) 1) (every? #(not (instance? One %)) more))
     "%s is not a valid sequence schema; %s%s%s" s
     "a valid sequence schema consists of zero or more `one` elements, "
     "followed by zero or more `optional` elements, followed by an optional "
     "schema that will match the remaining elements.")
    [(concat required optional) (first more)]))

(extend-protocol Schema
                                      
         cljs.core.PersistentVector
  (spec [this]
    (collection/collection-spec
     (spec/precondition
      this
      (clojure.core/fn [x] (or (nil? x) (sequential? x)                                   ))
      #(list 'sequential? %))
     vec
     (let [[singles multi] (parse-sequence-schema this)]
       (concat
        (for [^One s singles]
          (let [required? (not (.-optional? s))]
            (collection/one-element
             required? (named (.-schema s) (.-name s))
             (clojure.core/fn [item-fn x]
               (if-let [x (seq x)]
                 (do (item-fn (first x))
                     (rest x))
                 (do (when required?
                       (item-fn
                        (macros/validation-error
                         (.-schema s) ::missing
                         (list 'present? (.-name s)))))
                     nil))))))
        (when multi
          [(collection/all-elements multi)])))
     (clojure.core/fn [_ elts extra]
       (let [head (mapv utils/error-val elts)]
         (if (seq extra)
           (conj head (utils/error-val (macros/validation-error nil extra (list 'has-extra-elts? (count extra)))))
           head)))))
  (explain [this]
    (let [[singles multi] (parse-sequence-schema this)]
      (vec
       (concat
        (for [^One s singles]
          (list (if (.-optional? s) 'optional 'one) (explain (:schema s)) (:name s)))
        (when multi
          [(explain multi)]))))))

(clojure.core/defn pair
  "A schema for a pair of schemas and their names"
  [first-schema first-name second-schema second-name]
  [(one first-schema first-name)
   (one second-schema second-name)])

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Record Schemas

;; A Record schema describes a value that must have the correct type, and its body must
;; also satisfy a map schema.  An optional :extra-validator-fn can also be attached to do
;; additional validation.

(clojure.core/defrecord Record [klass schema]
  Schema
  (spec [this]
    (collection/collection-spec
     (let [p (spec/precondition this #(instance? klass %) #(list 'instance? klass %))]
       (if-let [evf (:extra-validator-fn this)]
         (some-fn p (spec/precondition this evf #(list 'passes-extra-validation? %)))
         p))
     (:constructor (meta this))
     (map-elements schema)
     (map-error)))
  (explain [this]
    (list 'record                                               (symbol (pr-str klass)) (explain schema))))

(clojure.core/defn record* [klass schema map-constructor]
                                                                                             
  (macros/assert! (map? schema) "Expected map, got %s" (utils/type-of schema))
  (with-meta (Record. klass schema) {:constructor map-constructor}))

                
                                                                             

                                                                          
                                                                      
                                                
                 
                            
                             
                                                         
                                                                                              
                                                             
                                 
                                                                


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Function Schemas

;; A function schema describes a function of one or more arities.
;; The function can only have a single output schema (across all arities), and each input
;; schema is a sequence schema describing the argument vector.

;; Currently function schemas are purely descriptive, and do not carry any validation logic.

(clojure.core/defn explain-input-schema [input-schema]
  (let [[required more] (split-with #(instance? One %) input-schema)]
    (concat (map #(explain (.-schema ^One %)) required)
            (when (seq more)
              ['& (mapv explain more)]))))

(clojure.core/defrecord FnSchema [output-schema input-schemas] ;; input-schemas sorted by arity
  Schema
  (spec [this] (leaf/leaf-spec (spec/simple-precondition this ifn?)))
  (explain [this]
    (if (> (count input-schemas) 1)
      (list* '=>* (explain output-schema) (map explain-input-schema input-schemas))
      (list* '=> (explain output-schema) (explain-input-schema (first input-schemas))))))

(clojure.core/defn- arity [input-schema]
  (if (seq input-schema)
    (if (instance? One (last input-schema))
      (count input-schema)
                                  js/Number.MAX_VALUE)
    0))

(clojure.core/defn make-fn-schema
  "A function outputting a value in output schema, whose argument vector must match one of
   input-schemas, each of which should be a sequence schema.
   Currently function schemas are purely descriptive; they validate against any function,
   regardless of actual input and output types."
  [output-schema input-schemas]
  (macros/assert! (seq input-schemas) "Function must have at least one input schema")
  (macros/assert! (every? vector? input-schemas) "Each arity must be a vector.")
  (macros/assert! (apply distinct? (map arity input-schemas)) "Arities must be distinct")
  (FnSchema. output-schema (sort-by arity input-schemas)))


             
                                                                                          
                                                                                         
                                                             

                                                                                       
                                                
                                      
                                                                                      

            
                                                                                     
                                                                  
                               
                                           


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Helpers for defining schemas (used in in-progress work, explanation coming soon)

(clojure.core/defn schema-with-name
  "Records name in schema's metadata."
  [schema name]
  (vary-meta schema assoc :name name))

(clojure.core/defn schema-name
  "Returns the name of a schema attached via schema-with-name (or defschema)."
  [schema]
  (-> schema meta :name))

(clojure.core/defn schema-ns
  "Returns the namespace of a schema attached via defschema."
  [schema]
  (-> schema meta :ns))

                   
                                                                                          
                                                       
              
                                 
                        
                           
                  
                                        
                                       


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Schematized defrecord and (de,let)fn macros

                   
                                 

                                                                                  
                                                                                
                    

                      
               
                    

                                     
                                                             

                                               
                                                                                         

                                                                          

                                                                                
                                       
                                                                             
                                                                               
                 
                                                                              
                                     

                                                                              
                                        

                                                                                
                                                                             
                                                                              
                
                                                                                       
                                 
                                                                                         

     
                    
                                                           
                                                                                  
                                                
                                                                                       
                                 
                                                                                      

                                    
       
                                         
      

(clojure.core/defn fn-validation?
  "Get the current global schema validation setting."
  []
  (.get_cell ^schema.utils.PSimpleCell utils/use-fn-validation))

(clojure.core/defn set-fn-validation!
  "Globally turn on (or off) schema validation for all s/fn and s/defn instances."
  [on?]
  (.set_cell ^schema.utils.PSimpleCell utils/use-fn-validation on?))

                            
                                                                     
                                                                     
                                                                  
                                               
          
                              
                         
              
          
                                  
                                                               

                               
                                                                      
                                                                     
                                                                  
                                               
          
                              
                         
          
                                   
                                                           
                 

(clojure.core/defn schematize-fn
  "Attach the schema to fn f at runtime, extractable by fn-schema."
  [f schema]
  (vary-meta f assoc :schema schema))

(clojure.core/defn ^FnSchema fn-schema
  "Produce the schema for a function defined with s/fn or s/defn."
  [f]
  (macros/assert! (fn? f) "Non-function %s" (utils/type-of f))
  (or (utils/class-schema (utils/fn-schema-bearer f))
      (macros/safe-get (meta f) :schema)))

;; work around bug in extend-protocol (refers to bare 'fn, so we can't exclude it).
                                                    

            
                                                       

                                

                                      
                                                                   
                                                                    
                 
                                                                     
                                                                 
                                                                
                                                             
                       
             
                                             
                         
                                               
                                                                                   
                                                                                                 
                         
                     
                                                                               
                        

              
                                                                             
                                                                        

                                                                              
                                                                           
           

                       
               
                
            

                    
                                                 

                                   
        

                                     
                                                                               

                                                                              
           

                                                                          
                                                                     
                                  

                                                                      
                                                     

                           
                                                                            
                                                                           
                                                                               
                                                                           
                                                                            
                                                             
                               
                                                                              
                                                                   
                                                                              
                                                                          
                                                

                                               
                                                    
                                                                    
                                
                                                                                      
                                          
                              
                                                                         
                        
               
                                                                            
                                                       
                                                                                                                         
                         
                                                         
                                                                                                  
                                
                                                                           
                                                                   
                                                                          
                                                                                               
                                                         
                                                            
                                                               
                                                       
                                           
                               
                                                                                  
                 

                   
                                                                                  
                                                                          

                                

            

                                                                                        

                                                                         
                                      

                                                                                
                                  
                  
                          
                                                   
                  
                                                         
                                                        
                
                    
                                                             

               
                                                          
                  
            
                                            
                                                      
                      

             
                                                                     
                                                                  
                                                                    
                                                            
                                                                     
                                                                      
                      

           

                                    
              
                                                                                     
                                                                   
                                                                                      
                                                          
                                   
                                                                                                 
                                                             
                 
                                           
                                            

     
                                 

(clojure.core/defn set-max-value-length!
  "Sets the maximum length of value to be output before it is contracted to a prettier name."
  [max-length]
  (reset! utils/max-value-length max-length))

;;;;;;;;;;;; This file autogenerated from src/cljx/schema/core.cljx
