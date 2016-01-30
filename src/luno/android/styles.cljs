(ns luno.android.styles)

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
   :scenes    {:main  {:view      {:align-items    "stretch"
                                   :padding-top    4
                                   :padding-bottom 4}
                       :city-card {:card        {:margin-left   8
                                                 :margin-right  8
                                                 :margin-top    4
                                                 :margin-bottom 4}
                                   :title       {:font-size 22
                                                 :color     "white"}
                                   :temp        {:font-size   22
                                                 :color       "white"
                                                 :font-weight "bold"}
                                   :description {:font-weight "bold"
                                                 :margin-top  35
                                                 :color       "white"}
                                   :key         {:color "white"}
                                   :value       {:font-weight "bold"
                                                 :color       "white"}}}
               :about {:view            {:padding 16}
                       :title           {:font-weight   "bold"
                                         :margin-bottom 4}
                       :author          {:margin-top    4
                                         :margin-bottom 20}}}})