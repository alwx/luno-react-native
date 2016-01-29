(ns luno.shared.scenes.about
  (:require
    [re-frame.core :refer [subscribe dispatch dispatch-sync]]
    [reagent.core :as r]
    [luno.shared.ui :as ui]
    [luno.android.ui :as android-ui]
    [luno.ios.ui :as ios-ui]))

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
     :android [android-ui/button {:text     "GITHUB"
                                  :on-press #(.openURL android-ui/intent github-link)}]
     :ios [ios-ui/button {:on-press #(.openURL ios-ui/linking github-link)}
           "GitHub"])])