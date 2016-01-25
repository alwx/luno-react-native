(ns luno.shared.components.city
  (:require
    [reagent.core :as r]
    [luno.ui :as ui]))

(defn to-celsius [temp]
  (.toFixed (- temp 273.15) 2))

(defn city-component [{:keys [city style wrapper-fn]}]
  (wrapper-fn
    city
    [ui/view
     [ui/view {:flex-direction  "row"
               :justify-content "space-between"}
      [ui/text {:style (get style :title)} (get city :name)]
      [ui/text {:right 0
                :style (get style :temp)} (-> (get-in city [:main :temp])
                                              (to-celsius)) "℃"]]
     [ui/view {:flex-direction "row"}
      [ui/text {:style (get-in style [:description])}
       (-> city :weather (first) :main)]]
     [ui/view {:flex-direction "row"}
      [ui/text {:style (get-in style [:key])}
       "Humidity: "]
      [ui/text {:style (get-in style [:value])}
       (-> city :main :humidity) "%"]]
     [ui/view {:flex-direction "row"}
      [ui/text {:style (get-in style [:key])}
       "Pressure: "]
      [ui/text {:style (get-in style [:value])}
       (-> city :main :pressure) " in"]]]))