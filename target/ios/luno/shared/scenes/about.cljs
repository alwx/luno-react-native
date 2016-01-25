(ns luno.shared.scenes.about
  (:require
    [re-frame.core :refer [subscribe dispatch dispatch-sync]]
    [reagent.core :as r]
    [luno.ui :as ui]))

(def github-link
  "http://github.com/alwx/luno-react-native")

(defn about-scene [{platform  :platform
                    navigator :navigator
                    style     :style}]
  [ui/view {:style (get style :view)
            :flex  1}
   [ui/text {:style (get style :title)}
    "Luno 0.1"]
   [ui/text "Cross-platform React Native application written in ClojureScript"]
   [ui/text {:style (get style :author)}
    "By alwx (alwxndr@gmail.com)"]
   (condp = platform
     :android [ui/button {:text     "GITHUB"
                          :on-press #(.openURL ui/intent-android github-link)}]
     :ios [ui/button-ios {:on-press #(.openURL ui/linking-ios github-link)}
           "GitHub"])])