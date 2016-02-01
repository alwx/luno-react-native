(ns luno.db)

(set! js/Store (js/require "react-native-store"))

(defn model [type]
  (.model js/Store (name type)))

(defn load [type result-fn]
  (let [model (model type)]
    (-> (.find model)
        (.then result-fn))))

(defn upsert! [type filter data]
  (let [model  (model type)
        filter (clj->js filter)
        data   (clj->js data)]
    (-> (.find model filter)
        (.then (fn [res]
                 (if res
                   (.update model data filter)
                   (.add model data)))))))

(defn insert! [type data]
  (let [model (model type)]
    (.add model (clj->js data))))

(defn remove! [type filter]
  (let [model (model type)]
    (.remove model)))

(defn remove-all! [type]
  (let [model (model type)]
    (.destroy model)))