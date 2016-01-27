(ns luno.shared.scenes.main
  (:require
    [re-frame.core :refer [subscribe dispatch dispatch-sync]]
    [reagent.core :as r]
    [luno.ui :as ui]
    [luno.shared.components.city :refer [city-component]]))

(defn main-scene [{platform        :platform
                   navigator       :navigator
                   city-wrapper-fn :city-wrapper-fn
                   style           :style}]
  (let [data   (subscribe [:get-data])
        cities (vals @data)]
    [ui/view {:flex 1}
     (if cities
       [ui/view {:style (get style :view)
                 :flex  1}
        [ui/scroll
         (for [city cities]
           ^{:key (str "container-" city)}
           [city-component {:city       city
                            :style      (get style :city-card)
                            :wrapper-fn city-wrapper-fn}])]]
       [ui/view {:flex            1
                 :flex-direction  "row"
                 :justify-content "center"
                 :align-items     "center"}
        [ui/text "Please, add a couple of cities"]])]))