// Compiled by ClojureScript 1.7.170 {}
goog.provide('luno.shared.scenes.main');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('luno.ui');
goog.require('luno.shared.components.city');
luno.shared.scenes.main.main_scene = (function luno$shared$scenes$main$main_scene(p__21250){
var map__21257 = p__21250;
var map__21257__$1 = ((((!((map__21257 == null)))?((((map__21257.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21257.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21257):map__21257);
var platform = cljs.core.get.call(null,map__21257__$1,new cljs.core.Keyword(null,"platform","platform",-1086422114));
var navigator = cljs.core.get.call(null,map__21257__$1,new cljs.core.Keyword(null,"navigator","navigator",2050004181));
var city_wrapper_fn = cljs.core.get.call(null,map__21257__$1,new cljs.core.Keyword(null,"city-wrapper-fn","city-wrapper-fn",-925052295));
var style = cljs.core.get.call(null,map__21257__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var data = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-data","get-data",454586681)], null));
var cities = cljs.core.vals.call(null,cljs.core.deref.call(null,data));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.ui.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null),(cljs.core.truth_(cities)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.ui.view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get.call(null,style,new cljs.core.Keyword(null,"view","view",1247994814)),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.ui.scroll,(function (){var iter__17613__auto__ = ((function (data,cities,map__21257,map__21257__$1,platform,navigator,city_wrapper_fn,style){
return (function luno$shared$scenes$main$main_scene_$_iter__21259(s__21260){
return (new cljs.core.LazySeq(null,((function (data,cities,map__21257,map__21257__$1,platform,navigator,city_wrapper_fn,style){
return (function (){
var s__21260__$1 = s__21260;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__21260__$1);
if(temp__4425__auto__){
var s__21260__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21260__$2)){
var c__17611__auto__ = cljs.core.chunk_first.call(null,s__21260__$2);
var size__17612__auto__ = cljs.core.count.call(null,c__17611__auto__);
var b__21262 = cljs.core.chunk_buffer.call(null,size__17612__auto__);
if((function (){var i__21261 = (0);
while(true){
if((i__21261 < size__17612__auto__)){
var city = cljs.core._nth.call(null,c__17611__auto__,i__21261);
cljs.core.chunk_append.call(null,b__21262,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.shared.components.city.city_component,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"city","city",-393302614),city,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get.call(null,style,new cljs.core.Keyword(null,"city-card","city-card",-1551546257)),new cljs.core.Keyword(null,"wrapper-fn","wrapper-fn",-274636345),city_wrapper_fn], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("container-"),cljs.core.str(city)].join('')], null)));

var G__21263 = (i__21261 + (1));
i__21261 = G__21263;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21262),luno$shared$scenes$main$main_scene_$_iter__21259.call(null,cljs.core.chunk_rest.call(null,s__21260__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21262),null);
}
} else {
var city = cljs.core.first.call(null,s__21260__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.shared.components.city.city_component,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"city","city",-393302614),city,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get.call(null,style,new cljs.core.Keyword(null,"city-card","city-card",-1551546257)),new cljs.core.Keyword(null,"wrapper-fn","wrapper-fn",-274636345),city_wrapper_fn], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("container-"),cljs.core.str(city)].join('')], null)),luno$shared$scenes$main$main_scene_$_iter__21259.call(null,cljs.core.rest.call(null,s__21260__$2)));
}
} else {
return null;
}
break;
}
});})(data,cities,map__21257,map__21257__$1,platform,navigator,city_wrapper_fn,style))
,null,null));
});})(data,cities,map__21257,map__21257__$1,platform,navigator,city_wrapper_fn,style))
;
return iter__17613__auto__.call(null,cities);
})()], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.ui.view,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.ui.text,"Please, add a couple of cities"], null)], null))], null);
});

//# sourceMappingURL=main.js.map