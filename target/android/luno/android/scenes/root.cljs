(ns luno.android.scenes.root
  (:require [reagent.core :as r]
            [clojure.string :refer [blank?]]
            [re-frame.core :refer [subscribe dispatch dispatch-sync]]
            [luno.shared.ui :as ui]
            [luno.shared.scenes.main :refer [main-scene]]
            [luno.shared.scenes.about :refer [about-scene]]
            [luno.android.ui :as android-ui]
            [luno.android.styles :as s]
            [luno.android.components.drawer :refer [drawer-component]]))

(defn show-add-dialog []
  (android-ui/show-dialog {:title        "Add city"
                           :input        {:hint     "Please, input city's name"
                                          :callback (fn [text]
                                                      (dispatch [:load-weather text]))}
                           :positiveText "Add"}))

(defn city-click [name]
  (android-ui/show-dialog {:content      "Do you want to delete this city?"
                           :positiveText "Yes"
                           :negativeText "No"
                           :onPositive   (fn []
                                           (dispatch [:delete-city name]))}))

(defn root-scene [{navigator :navigator}]
  (let [drawer (subscribe [:get-android-drawer])
        tab    (subscribe [:get-shared-tab])]
    [android-ui/drawer-layout {:drawer-width           300
                               :drawer-position        js/React.DrawerLayoutAndroid.positions.Left
                               :render-navigation-view #(r/as-element [drawer-component navigator])
                               :ref                    (fn [drawer]
                                                         (dispatch [:set-android-drawer drawer]))}
     [ui/view {:flex 1}
      [ui/view {:style (get-in s/styles [:statusbar])}]
      [android-ui/toolbar {:title         "Luno"
                           :icon          "menu"
                           :actions       [{:icon    "add-circle"
                                            :onPress (fn [_]
                                                       (show-add-dialog))}]
                           :style         (get-in s/styles [:toolbar])
                           :on-icon-press (fn [_]
                                            (.openDrawer @drawer))}]
      (case @tab
        "main" [main-scene
                {:style           (get-in s/styles [:scenes :main])
                 :city-wrapper-fn (fn [{city-name :name :as city} component]
                                    (let [media-url (-> (get-in city [:bing-image :MediaUrl]) (str))]
                                      (if (blank? media-url)
                                        [android-ui/card
                                         [android-ui/card-body
                                          [ui/text (str "Fetching weather for " city-name "...")]]]
                                        [android-ui/card {:style (get-in s/styles [:scenes :main :city-card :card])}
                                         [android-ui/card-media {:image (r/as-element [ui/image {:source {:uri media-url}}])}
                                          [ui/touchable {:on-long-press (fn [_] (city-click city-name))}
                                           component]]])))}]
        "about" [about-scene
                 {:style               (get-in s/styles [:scenes :about])
                  :github-button-fn    (fn [link]
                                         [android-ui/button {:text     "GITHUB"
                                                             :on-press #(.openURL ui/linking link)}])
                  :changelog-button-fn (fn [link]
                                         [android-ui/button {:text     "CHANGELOG"
                                                             :on-press #(.openURL ui/linking link)}])}])]]))