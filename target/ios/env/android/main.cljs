 (ns ^:figwheel-no-load env.android.main
  (:require [luno.android.core :as core]
            [figwheel.client :as figwheel :include-macros true]))

 (enable-console-print!)

(figwheel/watch-and-reload
 :websocket-url "ws://localhost:3449/figwheel-ws"
 :heads-up-display false
 :jsload-callback core/mount-root)

 (core/init)
 (core/mount-root)


