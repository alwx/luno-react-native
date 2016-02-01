(ns luno.handlers
  (:require
    [re-frame.core :refer [register-handler dispatch after]]
    [schema.core :as s :include-macros true]
    [clojure.walk :refer [keywordize-keys]]
    [ajax.core :refer [GET POST]]
    [luno.config :refer [openweathermap-appid bing-appid]]
    [luno.schema :refer [app-db schema]]
    [luno.db :as db]))

;; -- Middleware ------------------------------------------------------------

(defn check-and-throw
  "throw an exception if db doesn't match the schema."
  [a-schema db]
  (if-let [problems (s/check a-schema db)]
    (throw (js/Error. (str "schema check failed: " problems)))))

(def validate-schema-mw
  (after (partial check-and-throw schema)))

(register-handler
  :initialize-schema
  validate-schema-mw
  (fn [_ _]
    app-db))

;; -- DB handlers -------------------------------------------------------------

(register-handler
  :load-from-db
  (fn [db [_ model-type]]
    (db/load model-type (fn [response]
                          (let [handler-name (->> (name model-type)
                                                  (str "load-from-db-")
                                                  (keyword))]
                            (dispatch [handler-name response]))))
    db))

(register-handler
  :load-from-db-city
  (fn [db [_ data]]
    (->> data
         (map (fn [city]
                (let [{:keys [name]
                       :as   city} (keywordize-keys (js->clj city))]
                  [name city])))
         (into {})
         (assoc db :data))))

;; -- Network handlers --------------------------------------------------------

(register-handler
  :load-weather
  (fn [db [_ city]]
    (POST (str "http://api.openweathermap.org/data/2.5/weather?q=" city "&appid=" openweathermap-appid)
          {:response-format :json
           :handler         #(dispatch [:load-weather-success [%1 city]])
           :error-handler   #(dispatch [:load-weather-failure [%1 city]])})
    (assoc db :loading? true)))

(register-handler
  :load-weather-success
  (fn [db [_ [response city]]]
    (let [city-object (keywordize-keys response)]
      (dispatch [:load-city-image city])
      (db/upsert! :city {:where {:name {:eq city}}} city-object)
      (-> db
          (assoc :error nil)
          (assoc-in [:data city] city-object)
          (assoc :loading? false)))))

(register-handler
  :load-weather-failure
  (fn [db [_ [e city]]]
    (-> db
        (assoc-in [:error city] e)
        (assoc :loading? false))))

(register-handler
  :load-city-image
  (fn [db [_ city]]
    (POST (str "https://api.datamarket.azure.com/Bing/Search/Image?$format=json&Query=%27" city "%27")
          {:response-format :json
           :headers         {"Authorization" (str "Basic " bing-appid)}
           :handler         #(dispatch [:load-city-image-success [%1 city]])
           :error-handler   #(dispatch [:load-city-image-failure [%1 city]])})
    db))

(register-handler
  :load-city-image-success
  (fn [db [_ [response city]]]
    (let [result      (-> response
                          (keywordize-keys)
                          :d
                          :results
                          (first))
          city-object (-> (get-in db [:data city])
                          (assoc :bing-image result))]
      (db/upsert! :city {:where {:name {:eq city}}} city-object)
      (assoc-in db [:data city] city-object))))

(register-handler
  :load-city-image-failure
  (fn [db [_ [e city]]]
    (assoc-in db [:data city :bing-image] nil)))

;; -- Other handlers ----------------------------------------------------------

(register-handler
  :set-android-drawer
  validate-schema-mw
  (fn [db [_ value]]
    (assoc-in db [:android :drawer] value)))

(register-handler
  :set-ios-tab
  validate-schema-mw
  (fn [db [_ value]]
    (assoc-in db [:ios :tab] value)))

(register-handler
  :delete-city
  (fn [db [_ city]]
    (db/remove! :city {:where {:name {:eq city}}})
    (update db :data (fn [v]
                       (dissoc v city)))))