// Compiled by ClojureScript 1.7.170 {}
goog.provide('luno.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-android-drawer","get-android-drawer",847592746),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"android","android",-2084094573),new cljs.core.Keyword(null,"drawer","drawer",-1346127858)], null));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-shared-tab","get-shared-tab",-1180381693),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"tab","tab",-559583621)], null));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-data","get-data",454586681),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword(null,"data","data",-232669377));
}));
}));

//# sourceMappingURL=subs.js.map