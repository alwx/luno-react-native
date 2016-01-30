(ns luno.shared.scenes.about
  (:require
    [re-frame.core :refer [subscribe dispatch dispatch-sync]]
    [reagent.core :as r]
    [luno.shared.ui :as ui]))

(def github-link
  "http://github.com/alwx/luno-react-native")

(def changelog-link
  "https://github.com/alwx/luno-react-native/blob/master/CHANGELOG.md")

(defn about-scene [{style            :style
                    github-button-fn :github-button-fn
                    changelog-button-fn :changelog-button-fn}]
  [ui/scroll {:style (get style :view)}
   [ui/view
    [ui/text {:style (get style :title)}
     "Luno 0.2.0"]
    [ui/text "Cross-platform React Native application written in ClojureScript"]
    [ui/text {:style (get style :author)}
     "By alwx (alwxndr@gmail.com)"]
    (github-button-fn github-link)
    (changelog-button-fn changelog-link)]])