// Compiled by ClojureScript 1.7.170 {}
goog.provide('luno.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-android-drawer","get-android-drawer",847592746),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword(null,"android-drawer","android-drawer",-1076538023));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-ios-tab","get-ios-tab",1764172075),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword(null,"ios-tab","ios-tab",420742595));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-data","get-data",454586681),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword(null,"data","data",-232669377));
}));
}));

//# sourceMappingURL=subs.js.map