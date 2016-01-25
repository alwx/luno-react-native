(ns luno.ui
  (:require [reagent.core :as r]))

(set! js/React (js/require "react-native"))
(set! js/MaterialDesign (js/require "react-native-material-design"))
(set! js/IOSButton (js/require "react-native-button"))
(set! js/AndroidDialog (js/require "react-native-dialogs"))

(def app-registry
  (.-AppRegistry js/React))

;; Navigators

(def navigator
  (r/adapt-react-class (.-Navigator js/React)))
(def navigator-ios
  (r/adapt-react-class (.-NavigatorIOS js/React)))

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
(def button
  (r/adapt-react-class (.-Button js/MaterialDesign)))
(def button-ios
  (r/adapt-react-class js/IOSButton))
(def input
  (r/adapt-react-class (.-TextInput js/React)))

;; Android Cards

(def card
  (r/adapt-react-class (.-Card js/MaterialDesign)))
(def card-media
  (r/adapt-react-class (.-Card.Media js/MaterialDesign)))
(def card-body
  (r/adapt-react-class (.-Card.Body js/MaterialDesign)))
(def card-actions
  (r/adapt-react-class (.-Card.Actions js/MaterialDesign)))

;; Navigation controls

(def toolbar
  (r/adapt-react-class (.-Toolbar js/MaterialDesign)))
(def drawer-layout
  (r/adapt-react-class (.-DrawerLayoutAndroid js/React)))
(def drawer
  (r/adapt-react-class (.-Drawer js/MaterialDesign)))
(def drawer-header
  (r/adapt-react-class (.-Drawer.Header js/MaterialDesign)))
(def drawer-section
  (r/adapt-react-class (.-Drawer.Section js/MaterialDesign)))


;; Other

(def intent-android
  (.-IntentAndroid js/React))

(def linking-ios
  (.-LinkingIOS js/React))

;; Dialogs

(defn show-dialog-android [props]
  (let [dialog (new js/AndroidDialog)]
    (.set dialog (clj->js props))
    (.show dialog)))

(defn show-dialog-ios [{text     :text
                        callback :callback}]
  (.prompt (.-AlertIOS js/React) text nil callback))

