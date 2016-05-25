(ns figwheel.connect (:require [figwheel.client] [env.android.main] [figwheel.client.utils]))
(figwheel.client/start {:build-id "android", :websocket-url "ws://localhost:3449/figwheel-ws"})

