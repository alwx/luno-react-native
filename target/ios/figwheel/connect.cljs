(ns figwheel.connect (:require [env.ios.main] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:build-id "ios", :websocket-url "ws://localhost:3449/figwheel-ws"})

