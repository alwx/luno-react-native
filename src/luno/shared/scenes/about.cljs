(ns luno.shared.scenes.about
  (:require
    [re-frame.core :refer [subscribe dispatch dispatch-sync]]
    [reagent.core :as r]
    [luno.ui :as ui]
    [luno.android.controls :refer [intent]]
    [luno.ios.controls :refer [linking]]))

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
                          :on-press #(.openURL intent github-link)}]
     :ios [ui/button-ios {:on-press #(.openURL linking github-link)}
           "GitHub"])])