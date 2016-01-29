(ns luno.android.components.drawer
  (:require
    [reagent.core :as r]
    [luno.shared.ui :as ui]
    [luno.android.routes :refer [routes]]
    [luno.android.ui :as android-ui]))

(def logo-img
  (js/require "./images/luno_drawer.png"))

(defn drawer-component [navigator]
  [android-ui/drawer
   [android-ui/drawer-header {:image (r/as-element [ui/image {:source logo-img}])}]
   [android-ui/drawer-section {:items [{:icon   "cloud-queue"
                                        :active true
                                        :value  "Weather"}
                                       {:icon    "face"
                                        :value   "About"
                                        :onPress (fn [_]
                                                   (.push navigator (clj->js (routes :about))))}]}]])
