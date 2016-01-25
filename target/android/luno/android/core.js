// Compiled by ClojureScript 1.7.170 {}
goog.provide('luno.android.core');
goog.require('cljs.core');
goog.require('luno.android.routes');
goog.require('luno.handlers');
goog.require('reagent.core');
goog.require('luno.android.components.drawer');
goog.require('luno.shared.scenes.main');
goog.require('luno.android.styles');
goog.require('luno.ui');
goog.require('luno.shared.scenes.about');
goog.require('luno.subs');
goog.require('re_frame.core');
luno.android.core.show_add_dialog = (function luno$android$core$show_add_dialog(){
return luno.ui.show_dialog_android.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Add city",new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hint","hint",439639918),"Please, input city's name",new cljs.core.Keyword(null,"callback","callback",-705136228),(function (text){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-weather","load-weather",786153970),text], null));
})], null),new cljs.core.Keyword(null,"positiveText","positiveText",-1769773950),"Add"], null));
});
luno.android.core.wrapped_main_scene = (function luno$android$core$wrapped_main_scene(p__21138){
var map__21141 = p__21138;
var map__21141__$1 = ((((!((map__21141 == null)))?((((map__21141.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21141.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21141):map__21141);
var navigator = cljs.core.get.call(null,map__21141__$1,new cljs.core.Keyword(null,"navigator","navigator",2050004181));
var drawer = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-android-drawer","get-android-drawer",847592746)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.ui.drawer_layout,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"drawer-width","drawer-width",-518936734),(300),new cljs.core.Keyword(null,"drawer-position","drawer-position",-1682931539),React.DrawerLayoutAndroid.positions.Left,new cljs.core.Keyword(null,"render-navigation-view","render-navigation-view",-1017127524),((function (drawer,map__21141,map__21141__$1,navigator){
return (function (){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.android.components.drawer.drawer_component,navigator], null));
});})(drawer,map__21141,map__21141__$1,navigator))
,new cljs.core.Keyword(null,"ref","ref",1289896967),((function (drawer,map__21141,map__21141__$1,navigator){
return (function (drawer__$1){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-android-drawer","set-android-drawer",-459616806),drawer__$1], null));
});})(drawer,map__21141,map__21141__$1,navigator))
], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.ui.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.ui.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.call(null,luno.android.styles.styles,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"statusbar","statusbar",-680036405)], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.ui.toolbar,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),"Luno",new cljs.core.Keyword(null,"icon","icon",1679606541),"menu",new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),"add-circle",new cljs.core.Keyword(null,"onPress","onPress",-1383694171),((function (drawer,map__21141,map__21141__$1,navigator){
return (function (_){
return luno.android.core.show_add_dialog.call(null);
});})(drawer,map__21141,map__21141__$1,navigator))
], null)], null),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.call(null,luno.android.styles.styles,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toolbar","toolbar",-1172789065)], null)),new cljs.core.Keyword(null,"on-icon-press","on-icon-press",-1079106825),((function (drawer,map__21141,map__21141__$1,navigator){
return (function (_){
return cljs.core.deref.call(null,drawer).openDrawer();
});})(drawer,map__21141,map__21141__$1,navigator))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.shared.scenes.main.main_scene,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"platform","platform",-1086422114),new cljs.core.Keyword(null,"android","android",-2084094573),new cljs.core.Keyword(null,"navigator","navigator",2050004181),navigator,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.call(null,luno.android.styles.styles,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scenes","scenes",-425219404),new cljs.core.Keyword(null,"main","main",-2117802661)], null)),new cljs.core.Keyword(null,"city-wrapper-fn","city-wrapper-fn",-925052295),((function (drawer,map__21141,map__21141__$1,navigator){
return (function (city,component){
var media_url = [cljs.core.str(cljs.core.get_in.call(null,city,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bing-image","bing-image",-390099202),new cljs.core.Keyword(null,"MediaUrl","MediaUrl",251013483)], null)))].join('');
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.ui.card,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.call(null,luno.android.styles.styles,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scenes","scenes",-425219404),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"city-card","city-card",-1551546257),new cljs.core.Keyword(null,"card","card",-1430355152)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.ui.card_media,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"image","image",-58725096),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.ui.image,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uri","uri",-774711847),media_url], null)], null)], null))], null),component], null)], null);
});})(drawer,map__21141,map__21141__$1,navigator))
], null)], null)], null)], null);
});
luno.android.core.wrapped_about_scene = (function luno$android$core$wrapped_about_scene(p__21143){
var map__21146 = p__21143;
var map__21146__$1 = ((((!((map__21146 == null)))?((((map__21146.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21146.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21146):map__21146);
var navigator = cljs.core.get.call(null,map__21146__$1,new cljs.core.Keyword(null,"navigator","navigator",2050004181));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.ui.view,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.ui.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.call(null,luno.android.styles.styles,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"statusbar","statusbar",-680036405)], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.ui.toolbar,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"About Luno",new cljs.core.Keyword(null,"icon","icon",1679606541),"arrow-back",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.call(null,luno.android.styles.styles,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toolbar","toolbar",-1172789065)], null)),new cljs.core.Keyword(null,"on-icon-press","on-icon-press",-1079106825),((function (map__21146,map__21146__$1,navigator){
return (function (_){
return navigator.pop();
});})(map__21146,map__21146__$1,navigator))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.shared.scenes.about.about_scene,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"platform","platform",-1086422114),new cljs.core.Keyword(null,"android","android",-2084094573),new cljs.core.Keyword(null,"navigator","navigator",2050004181),navigator,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.call(null,luno.android.styles.styles,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scenes","scenes",-425219404),new cljs.core.Keyword(null,"about","about",1423892543)], null))], null)], null)], null);
});
luno.android.core.root = (function luno$android$core$root(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.ui.navigator,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"initial-route","initial-route",-622635808),luno.android.routes.routes.call(null,new cljs.core.Keyword(null,"main","main",-2117802661)),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.call(null,luno.android.styles.styles,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707)], null)),new cljs.core.Keyword(null,"configure-scene","configure-scene",-1674748709),(function (_,___$1){
return React.Navigator.SceneConfigs.FloatFromBottomAndroid;
}),new cljs.core.Keyword(null,"render-scene","render-scene",-471969412),(function (route,navigator){
var route__$1 = cljs.core.js__GT_clj.call(null,route,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
return reagent.core.as_element.call(null,(function (){var pred__21151 = cljs.core._EQ_;
var expr__21152 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(route__$1);
if(cljs.core.truth_(pred__21151.call(null,"main",expr__21152))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.android.core.wrapped_main_scene,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigator","navigator",2050004181),navigator], null)], null);
} else {
if(cljs.core.truth_(pred__21151.call(null,"about",expr__21152))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.android.core.wrapped_about_scene,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigator","navigator",2050004181),navigator], null)], null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__21152)].join('')));
}
}
})());
})], null)], null);
});
luno.android.core.mount_root = (function luno$android$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.android.core.root], null),(1));
});
luno.android.core.init = (function luno$android$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

return (function (){
return luno.ui.app_registry.registerRunnable("Luno",(function (){
return luno.android.core.mount_root.call(null);
}));
});
});
goog.exportSymbol('luno.android.core.init', luno.android.core.init);

//# sourceMappingURL=core.js.map