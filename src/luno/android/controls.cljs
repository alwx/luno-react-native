(ns luno.android.controls)

(def intent
  (.-IntentAndroid js/React))

(defn show-dialog [props]
  (let [dialog (new js/AndroidDialog)]
    (.set dialog (clj->js props))
    (.show dialog)))