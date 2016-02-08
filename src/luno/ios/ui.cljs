(ns luno.ios.ui
  (:require [reagent.core :as r]))

(set! js/IOSButton (js/require "react-native-button"))

(def navigator
  (r/adapt-react-class (.-NavigatorIOS js/React)))
(def tab-bar
  (r/adapt-react-class (.-TabBarIOS js/React)))
(def tab-bar-item
  (r/adapt-react-class (.-TabBarIOS.Item js/React)))

(def button
  (r/adapt-react-class js/IOSButton))

(defn show-dialog [{text     :text
                    callback :callback}]
  (.prompt (.-AlertIOS js/React) text nil callback))

(defn show-action-sheet [options callback]
  (.showActionSheetWithOptions (.-ActionSheetIOS js/React)
                               (clj->js options)
                               callback))


