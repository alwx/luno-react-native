// Compiled by ClojureScript 1.7.170 {}
goog.provide('luno.shared.scenes.main');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('luno.shared.ui');
goog.require('luno.shared.components.city');
luno.shared.scenes.main.main_scene = (function luno$shared$scenes$main$main_scene(p__21607){
var map__21614 = p__21607;
var map__21614__$1 = ((((!((map__21614 == null)))?((((map__21614.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21614.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21614):map__21614);
var city_wrapper_fn = cljs.core.get.call(null,map__21614__$1,new cljs.core.Keyword(null,"city-wrapper-fn","city-wrapper-fn",-925052295));
var style = cljs.core.get.call(null,map__21614__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var data = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-data","get-data",454586681)], null));
var cities = cljs.core.vals.call(null,cljs.core.deref.call(null,data));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.shared.ui.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.shared.ui.view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get.call(null,style,new cljs.core.Keyword(null,"view","view",1247994814)),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.shared.ui.scroll,(function (){var iter__17627__auto__ = ((function (data,cities,map__21614,map__21614__$1,city_wrapper_fn,style){
return (function luno$shared$scenes$main$main_scene_$_iter__21616(s__21617){
return (new cljs.core.LazySeq(null,((function (data,cities,map__21614,map__21614__$1,city_wrapper_fn,style){
return (function (){
var s__21617__$1 = s__21617;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__21617__$1);
if(temp__4425__auto__){
var s__21617__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21617__$2)){
var c__17625__auto__ = cljs.core.chunk_first.call(null,s__21617__$2);
var size__17626__auto__ = cljs.core.count.call(null,c__17625__auto__);
var b__21619 = cljs.core.chunk_buffer.call(null,size__17626__auto__);
if((function (){var i__21618 = (0);
while(true){
if((i__21618 < size__17626__auto__)){
var city = cljs.core._nth.call(null,c__17625__auto__,i__21618);
cljs.core.chunk_append.call(null,b__21619,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.shared.components.city.city_component,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"city","city",-393302614),city,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get.call(null,style,new cljs.core.Keyword(null,"city-card","city-card",-1551546257)),new cljs.core.Keyword(null,"wrapper-fn","wrapper-fn",-274636345),city_wrapper_fn], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("container-"),cljs.core.str(city)].join('')], null)));

var G__21620 = (i__21618 + (1));
i__21618 = G__21620;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21619),luno$shared$scenes$main$main_scene_$_iter__21616.call(null,cljs.core.chunk_rest.call(null,s__21617__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21619),null);
}
} else {
var city = cljs.core.first.call(null,s__21617__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.shared.components.city.city_component,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"city","city",-393302614),city,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get.call(null,style,new cljs.core.Keyword(null,"city-card","city-card",-1551546257)),new cljs.core.Keyword(null,"wrapper-fn","wrapper-fn",-274636345),city_wrapper_fn], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("container-"),cljs.core.str(city)].join('')], null)),luno$shared$scenes$main$main_scene_$_iter__21616.call(null,cljs.core.rest.call(null,s__21617__$2)));
}
} else {
return null;
}
break;
}
});})(data,cities,map__21614,map__21614__$1,city_wrapper_fn,style))
,null,null));
});})(data,cities,map__21614,map__21614__$1,city_wrapper_fn,style))
;
return iter__17627__auto__.call(null,cities);
})()], null)], null)], null);
});

//# sourceMappingURL=main.js.map