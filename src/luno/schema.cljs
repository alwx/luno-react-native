(ns luno.schema
  (:require [schema.core :as s :include-macros true]))

;; schema of app-db
(def schema {:android-drawer s/Any
             :ios-tab        s/Str
             :data           s/Any
             :error          s/Any
             :loading?       s/Bool})

;; initial state of app-db
(def app-db {:android-drawer nil
             :ios-tab        "main"
             :data           nil
             :error          nil
             :loading?       false})
