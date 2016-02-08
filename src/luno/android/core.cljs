(ns luno.android.core
  (:require [reagent.core :as r]
            [re-frame.core :refer [subscribe dispatch dispatch-sync]]
            [luno.handlers]
            [luno.subs]
            [luno.shared.ui :as ui]
            [luno.android.ui :as android-ui]
            [luno.android.styles :as s]
            [luno.android.scenes.root :refer [root-scene]]))

(defn app-root []
  [android-ui/navigator {:initial-route   {:name "main" :index 1}
                         :style           (get-in s/styles [:app])
                         :configure-scene (fn [_ _]
                                            js/React.Navigator.SceneConfigs.FloatFromBottomAndroid)
                         :render-scene    (fn [_ navigator]
                                            (r/as-element [root-scene {:navigator navigator}]))}])

(defn init []
  (dispatch-sync [:initialize-schema])
  (dispatch [:load-from-db :city])
  (.registerComponent ui/app-registry "luno" #(r/reactify-component app-root)))
