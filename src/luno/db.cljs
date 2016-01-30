(ns luno.db)

(set! js/Store (js/require "react-native-store"))

(defn model [type]
  (.model js/Store (name type)))

(defn upsert! [type filter data]
  (let [model  (model type)
        filter (clj->js filter)
        data   (clj->js data)]
    (-> (.find model filter)
        (.then (fn [res]
                 (if res
                   (.update model data filter)
                   (.add model data)))))))

(defn remove! [type filter]
  (let [model (model type)]
    (.remove model)))

(defn load [type result-fn]
  (let [model (model type)]
    (-> (.find model)
        (.then result-fn))))