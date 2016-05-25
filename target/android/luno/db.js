// Compiled by ClojureScript 1.7.170 {}
goog.provide('luno.db');
goog.require('cljs.core');
Store = require("react-native-store");
luno.db.model = (function luno$db$model(type){
return Store.model(cljs.core.name.call(null,type));
});
luno.db.load = (function luno$db$load(type,result_fn){
var model = luno.db.model.call(null,type);
return model.find().then(result_fn);
});
luno.db.upsert_BANG_ = (function luno$db$upsert_BANG_(type,filter,data){
var model = luno.db.model.call(null,type);
var filter__$1 = cljs.core.clj__GT_js.call(null,filter);
var data__$1 = cljs.core.clj__GT_js.call(null,data);
return model.find(filter__$1).then(((function (model,filter__$1,data__$1){
return (function (res){
if(cljs.core.truth_(res)){
return model.update(data__$1,filter__$1);
} else {
return model.add(data__$1);
}
});})(model,filter__$1,data__$1))
);
});
luno.db.insert_BANG_ = (function luno$db$insert_BANG_(type,data){
var model = luno.db.model.call(null,type);
return model.add(cljs.core.clj__GT_js.call(null,data));
});
luno.db.remove_BANG_ = (function luno$db$remove_BANG_(type,filter){
var model = luno.db.model.call(null,type);
return model.remove();
});
luno.db.remove_all_BANG_ = (function luno$db$remove_all_BANG_(type){
var model = luno.db.model.call(null,type);
return model.destroy();
});

//# sourceMappingURL=db.js.map