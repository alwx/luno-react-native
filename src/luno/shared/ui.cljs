(ns luno.shared.ui
  (:require [reagent.core :as r]))

(set! js/React (js/require "react-native"))

(def app-registry
  (.-AppRegistry js/React))

;; Basic views

(def view
  (r/adapt-react-class (.-View js/React)))
(def scroll
  (r/adapt-react-class (.-ScrollView js/React)))
(def image
  (r/adapt-react-class (.-Image js/React)))
(def progress-bar
  (r/adapt-react-class (.-ProgressBarAndroid js/React)))
(def text
  (r/adapt-react-class (.-Text js/React)))
(def input
  (r/adapt-react-class (.-TextInput js/React)))



