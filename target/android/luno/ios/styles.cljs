(ns luno.ios.styles)

(def styles
  {:app       {:position "absolute"
               :top      0
               :left     0
               :bottom   0
               :right    0}
   :statusbar {:background-color "#01579B"
               :height           26}
   :toolbar   {:position         "relative"
               :background-color "#01579B"}
   :scenes    {:main  {:view      {:align-items "stretch"
                                   :margin-top 64}
                       :city-card {:title       {:font-size 22
                                                 :color     "white"}
                                   :temp        {:font-size   22
                                                 :font-weight "bold"
                                                 :color       "white"}
                                   :description {:font-weight   "bold"
                                                 :margin-bottom 5
                                                 :color         "white"}
                                   :key         {:color "white"}
                                   :value       {:font-weight "bold"
                                                 :color       "white"}}}
               :about {:view   {:margin-top 64
                                :padding    16}
                       :title  {:font-weight   "bold"
                                :margin-bottom 4}
                       :author {:margin-top    4
                                :margin-bottom 20}}}})