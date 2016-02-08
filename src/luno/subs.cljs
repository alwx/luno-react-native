(ns luno.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :refer [register-sub]]))

(register-sub
  :get-android-drawer
  (fn [db _]
    (reaction
      (get-in @db [:android :drawer]))))

(register-sub
  :get-shared-tab
  (fn [db _]
    (reaction
      (get-in @db [:shared :tab]))))

(register-sub
  :get-data
  (fn [db _]
    (reaction
      (get @db :data))))