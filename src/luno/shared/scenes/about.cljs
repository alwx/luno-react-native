(ns luno.shared.scenes.about
  (:require
    [re-frame.core :refer [subscribe dispatch dispatch-sync]]
    [reagent.core :as r]
    [luno.shared.ui :as ui]))

(def github-link
  "http://github.com/alwx/luno-react-native")

(defn about-scene [{style            :style
                    github-button-fn :github-button-fn}]
  [ui/view {:style (get style :view)
            :flex  1}
   [ui/text {:style (get style :title)}
    "Luno 0.1"]
   [ui/text "Cross-platform React Native application written in ClojureScript"]
   [ui/text {:style (get style :author)}
    "By alwx (alwxndr@gmail.com)"]
   (github-button-fn github-link)])