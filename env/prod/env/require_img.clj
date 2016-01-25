(ns env.require-img)

(defmacro require-img
  "Creates 'require' statements for images"
  [src]
  (list 'js/require src))
