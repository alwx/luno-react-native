// Compiled by ClojureScript 1.7.170 {}
goog.provide('luno.handlers');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('schema.core');
goog.require('clojure.walk');
goog.require('ajax.core');
goog.require('luno.config');
goog.require('luno.schema');
goog.require('luno.db');
/**
 * throw an exception if db doesn't match the schema.
 */
luno.handlers.check_and_throw = (function luno$handlers$check_and_throw(a_schema,db){
var temp__4423__auto__ = schema.core.check.call(null,a_schema,db);
if(cljs.core.truth_(temp__4423__auto__)){
var problems = temp__4423__auto__;
throw (new Error([cljs.core.str("schema check failed: "),cljs.core.str(problems)].join('')));
} else {
return null;
}
});
luno.handlers.validate_schema_mw = re_frame.core.after.call(null,cljs.core.partial.call(null,luno.handlers.check_and_throw,luno.schema.schema));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize-schema","initialize-schema",1070193238),luno.handlers.validate_schema_mw,(function (_,___$1){
return luno.schema.app_db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"load-from-db","load-from-db",-1589655162),(function (db,p__21564){
var vec__21565 = p__21564;
var _ = cljs.core.nth.call(null,vec__21565,(0),null);
var model_type = cljs.core.nth.call(null,vec__21565,(1),null);
luno.db.load.call(null,model_type,((function (vec__21565,_,model_type){
return (function (response){
var handler_name = cljs.core.keyword.call(null,[cljs.core.str("load-from-db-"),cljs.core.str(cljs.core.name.call(null,model_type))].join(''));
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [handler_name,response], null));
});})(vec__21565,_,model_type))
);

return db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"load-from-db-city","load-from-db-city",-874216343),(function (db,p__21566){
var vec__21567 = p__21566;
var _ = cljs.core.nth.call(null,vec__21567,(0),null);
var data = cljs.core.nth.call(null,vec__21567,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (vec__21567,_,data){
return (function (city){
var map__21568 = clojure.walk.keywordize_keys.call(null,cljs.core.js__GT_clj.call(null,city));
var map__21568__$1 = ((((!((map__21568 == null)))?((((map__21568.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21568.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21568):map__21568);
var city__$1 = map__21568__$1;
var name = cljs.core.get.call(null,map__21568__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,city__$1], null);
});})(vec__21567,_,data))
,data)));
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"load-weather","load-weather",786153970),(function (db,p__21572){
var vec__21573 = p__21572;
var _ = cljs.core.nth.call(null,vec__21573,(0),null);
var city = cljs.core.nth.call(null,vec__21573,(1),null);
ajax.core.POST.call(null,[cljs.core.str("http://api.openweathermap.org/data/2.5/weather?q="),cljs.core.str(city),cljs.core.str("&appid="),cljs.core.str(luno.config.openweathermap_appid)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__21573,_,city){
return (function (p1__21570_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-weather-success","load-weather-success",8344124),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21570_SHARP_,city], null)], null));
});})(vec__21573,_,city))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (vec__21573,_,city){
return (function (p1__21571_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-weather-failure","load-weather-failure",-1634054401),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21571_SHARP_,city], null)], null));
});})(vec__21573,_,city))
], null));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"load-weather-success","load-weather-success",8344124),(function (db,p__21574){
var vec__21575 = p__21574;
var _ = cljs.core.nth.call(null,vec__21575,(0),null);
var vec__21576 = cljs.core.nth.call(null,vec__21575,(1),null);
var response = cljs.core.nth.call(null,vec__21576,(0),null);
var city = cljs.core.nth.call(null,vec__21576,(1),null);
var city_object = clojure.walk.keywordize_keys.call(null,response);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-city-image","load-city-image",-595084832),city], null));

luno.db.upsert_BANG_.call(null,new cljs.core.Keyword(null,"city","city",-393302614),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eq","eq",-618539067),city], null)], null)], null),city_object);

return cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"error","error",-978969032),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),city], null),city_object),new cljs.core.Keyword(null,"loading?","loading?",1905707049),false);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"load-weather-failure","load-weather-failure",-1634054401),(function (db,p__21577){
var vec__21578 = p__21577;
var _ = cljs.core.nth.call(null,vec__21578,(0),null);
var vec__21579 = cljs.core.nth.call(null,vec__21578,(1),null);
var e = cljs.core.nth.call(null,vec__21579,(0),null);
var city = cljs.core.nth.call(null,vec__21579,(1),null);
return cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),city], null),e),new cljs.core.Keyword(null,"loading?","loading?",1905707049),false);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"load-city-image","load-city-image",-595084832),(function (db,p__21582){
var vec__21583 = p__21582;
var _ = cljs.core.nth.call(null,vec__21583,(0),null);
var city = cljs.core.nth.call(null,vec__21583,(1),null);
ajax.core.POST.call(null,[cljs.core.str("https://api.datamarket.azure.com/Bing/Search/Image?$format=json&Query=%27"),cljs.core.str(city),cljs.core.str("%27")].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Authorization",[cljs.core.str("Basic "),cljs.core.str(luno.config.bing_appid)].join('')], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__21583,_,city){
return (function (p1__21580_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-city-image-success","load-city-image-success",-770767593),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21580_SHARP_,city], null)], null));
});})(vec__21583,_,city))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (vec__21583,_,city){
return (function (p1__21581_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-city-image-failure","load-city-image-failure",-1243284689),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21581_SHARP_,city], null)], null));
});})(vec__21583,_,city))
], null));

return db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"load-city-image-success","load-city-image-success",-770767593),(function (db,p__21584){
var vec__21585 = p__21584;
var _ = cljs.core.nth.call(null,vec__21585,(0),null);
var vec__21586 = cljs.core.nth.call(null,vec__21585,(1),null);
var response = cljs.core.nth.call(null,vec__21586,(0),null);
var city = cljs.core.nth.call(null,vec__21586,(1),null);
var result = cljs.core.first.call(null,new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(clojure.walk.keywordize_keys.call(null,response))));
var city_object = cljs.core.assoc.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),city], null)),new cljs.core.Keyword(null,"bing-image","bing-image",-390099202),result);
luno.db.upsert_BANG_.call(null,new cljs.core.Keyword(null,"city","city",-393302614),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eq","eq",-618539067),city], null)], null)], null),city_object);

return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),city], null),city_object);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"load-city-image-failure","load-city-image-failure",-1243284689),(function (db,p__21587){
var vec__21588 = p__21587;
var _ = cljs.core.nth.call(null,vec__21588,(0),null);
var vec__21589 = cljs.core.nth.call(null,vec__21588,(1),null);
var e = cljs.core.nth.call(null,vec__21589,(0),null);
var city = cljs.core.nth.call(null,vec__21589,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),city,new cljs.core.Keyword(null,"bing-image","bing-image",-390099202)], null),null);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-android-drawer","set-android-drawer",-459616806),luno.handlers.validate_schema_mw,(function (db,p__21590){
var vec__21591 = p__21590;
var _ = cljs.core.nth.call(null,vec__21591,(0),null);
var value = cljs.core.nth.call(null,vec__21591,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"android","android",-2084094573),new cljs.core.Keyword(null,"drawer","drawer",-1346127858)], null),value);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-shared-tab","set-shared-tab",415217295),luno.handlers.validate_schema_mw,(function (db,p__21592){
var vec__21593 = p__21592;
var _ = cljs.core.nth.call(null,vec__21593,(0),null);
var value = cljs.core.nth.call(null,vec__21593,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"tab","tab",-559583621)], null),value);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"delete-city","delete-city",391403040),(function (db,p__21594){
var vec__21595 = p__21594;
var _ = cljs.core.nth.call(null,vec__21595,(0),null);
var city = cljs.core.nth.call(null,vec__21595,(1),null);
luno.db.remove_BANG_.call(null,new cljs.core.Keyword(null,"city","city",-393302614),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eq","eq",-618539067),city], null)], null)], null));

return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"data","data",-232669377),((function (vec__21595,_,city){
return (function (v){
return cljs.core.dissoc.call(null,v,city);
});})(vec__21595,_,city))
);
}));

//# sourceMappingURL=handlers.js.map