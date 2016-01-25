// Compiled by ClojureScript 1.7.170 {}
goog.provide('luno.handlers');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('schema.core');
goog.require('clojure.walk');
goog.require('ajax.core');
goog.require('luno.config');
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
luno.handlers.validate_schema_mw = re_frame.core.after.call(null,cljs.core.partial.call(null,luno.handlers.check_and_throw,luno.db.schema));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),luno.handlers.validate_schema_mw,(function (_,___$1){
return luno.db.app_db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-android-drawer","set-android-drawer",-459616806),luno.handlers.validate_schema_mw,(function (db,p__20861){
var vec__20862 = p__20861;
var _ = cljs.core.nth.call(null,vec__20862,(0),null);
var value = cljs.core.nth.call(null,vec__20862,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"android-drawer","android-drawer",-1076538023),value);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-ios-tab","set-ios-tab",-1919756435),luno.handlers.validate_schema_mw,(function (db,p__20863){
var vec__20864 = p__20863;
var _ = cljs.core.nth.call(null,vec__20864,(0),null);
var value = cljs.core.nth.call(null,vec__20864,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"ios-tab","ios-tab",420742595),value);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"load-weather","load-weather",786153970),(function (db,p__20867){
var vec__20868 = p__20867;
var _ = cljs.core.nth.call(null,vec__20868,(0),null);
var city = cljs.core.nth.call(null,vec__20868,(1),null);
ajax.core.POST.call(null,[cljs.core.str("http://api.openweathermap.org/data/2.5/weather?q="),cljs.core.str(city),cljs.core.str("&appid="),cljs.core.str(luno.config.openweathermap_appid)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__20868,_,city){
return (function (p1__20865_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-weather-success","load-weather-success",8344124),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20865_SHARP_,city], null)], null));
});})(vec__20868,_,city))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (vec__20868,_,city){
return (function (p1__20866_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-weather-failure","load-weather-failure",-1634054401),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20866_SHARP_,city], null)], null));
});})(vec__20868,_,city))
], null));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"load-weather-success","load-weather-success",8344124),(function (db,p__20869){
var vec__20870 = p__20869;
var _ = cljs.core.nth.call(null,vec__20870,(0),null);
var vec__20871 = cljs.core.nth.call(null,vec__20870,(1),null);
var response = cljs.core.nth.call(null,vec__20871,(0),null);
var city = cljs.core.nth.call(null,vec__20871,(1),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-city-image","load-city-image",-595084832),city], null));

return cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"error","error",-978969032),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),city], null),clojure.walk.keywordize_keys.call(null,response)),new cljs.core.Keyword(null,"loading?","loading?",1905707049),false);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"load-weather-failure","load-weather-failure",-1634054401),(function (db,p__20872){
var vec__20873 = p__20872;
var _ = cljs.core.nth.call(null,vec__20873,(0),null);
var vec__20874 = cljs.core.nth.call(null,vec__20873,(1),null);
var e = cljs.core.nth.call(null,vec__20874,(0),null);
var city = cljs.core.nth.call(null,vec__20874,(1),null);
return cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),city], null),e),new cljs.core.Keyword(null,"loading?","loading?",1905707049),false);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"load-city-image","load-city-image",-595084832),(function (db,p__20877){
var vec__20878 = p__20877;
var _ = cljs.core.nth.call(null,vec__20878,(0),null);
var city = cljs.core.nth.call(null,vec__20878,(1),null);
ajax.core.POST.call(null,[cljs.core.str("https://api.datamarket.azure.com/Bing/Search/Image?$format=json&Query=%27"),cljs.core.str(city),cljs.core.str("%27")].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Authorization",[cljs.core.str("Basic "),cljs.core.str(luno.config.bing_appid)].join('')], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__20878,_,city){
return (function (p1__20875_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-city-image-success","load-city-image-success",-770767593),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20875_SHARP_,city], null)], null));
});})(vec__20878,_,city))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (vec__20878,_,city){
return (function (p1__20876_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-city-image-failure","load-city-image-failure",-1243284689),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20876_SHARP_,city], null)], null));
});})(vec__20878,_,city))
], null));

return db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"load-city-image-success","load-city-image-success",-770767593),(function (db,p__20879){
var vec__20880 = p__20879;
var _ = cljs.core.nth.call(null,vec__20880,(0),null);
var vec__20881 = cljs.core.nth.call(null,vec__20880,(1),null);
var response = cljs.core.nth.call(null,vec__20881,(0),null);
var city = cljs.core.nth.call(null,vec__20881,(1),null);
var result = cljs.core.first.call(null,new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(clojure.walk.keywordize_keys.call(null,response))));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),city,new cljs.core.Keyword(null,"bing-image","bing-image",-390099202)], null),result);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"load-city-image-failure","load-city-image-failure",-1243284689),(function (db,p__20882){
var vec__20883 = p__20882;
var _ = cljs.core.nth.call(null,vec__20883,(0),null);
var vec__20884 = cljs.core.nth.call(null,vec__20883,(1),null);
var e = cljs.core.nth.call(null,vec__20884,(0),null);
var city = cljs.core.nth.call(null,vec__20884,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),city,new cljs.core.Keyword(null,"bing-image","bing-image",-390099202)], null),null);
}));

//# sourceMappingURL=handlers.js.map