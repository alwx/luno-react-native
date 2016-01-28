(ns luno.ios.controls
  (:require [reagent.core :as r]))

(def linking
  (.-LinkingIOS js/React))

(def tab-bar
  (r/adapt-react-class (.-TabBarIOS js/React)))

(def tab-bar-item
  (r/adapt-react-class (.-TabBarIOS.Item js/React)))

(defn show-dialog [{text     :text
                    callback :callback}]
  (.prompt (.-AlertIOS js/React) text nil callback))


