// Compiled by ClojureScript 1.7.170 {}
goog.provide('luno.android.scenes.root');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('luno.android.components.drawer');
goog.require('luno.android.ui');
goog.require('luno.shared.scenes.main');
goog.require('luno.android.styles');
goog.require('luno.shared.ui');
goog.require('luno.shared.scenes.about');
goog.require('clojure.string');
goog.require('re_frame.core');
luno.android.scenes.root.show_add_dialog = (function luno$android$scenes$root$show_add_dialog(){
return luno.android.ui.show_dialog.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Add city",new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hint","hint",439639918),"Please, input city's name",new cljs.core.Keyword(null,"callback","callback",-705136228),(function (text){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-weather","load-weather",786153970),text], null));
})], null),new cljs.core.Keyword(null,"positiveText","positiveText",-1769773950),"Add"], null));
});
luno.android.scenes.root.city_click = (function luno$android$scenes$root$city_click(name){
return luno.android.ui.show_dialog.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content","content",15833224),"Do you want to delete this city?",new cljs.core.Keyword(null,"positiveText","positiveText",-1769773950),"Yes",new cljs.core.Keyword(null,"negativeText","negativeText",-1063702433),"No",new cljs.core.Keyword(null,"onPositive","onPositive",397400658),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-city","delete-city",391403040),name], null));
})], null));
});
luno.android.scenes.root.root_scene = (function luno$android$scenes$root$root_scene(p__27682){
var map__27689 = p__27682;
var map__27689__$1 = ((((!((map__27689 == null)))?((((map__27689.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27689.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27689):map__27689);
var navigator = cljs.core.get.call(null,map__27689__$1,new cljs.core.Keyword(null,"navigator","navigator",2050004181));
var drawer = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-android-drawer","get-android-drawer",847592746)], null));
var tab = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-shared-tab","get-shared-tab",-1180381693)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.android.ui.drawer_layout,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"drawer-width","drawer-width",-518936734),(300),new cljs.core.Keyword(null,"drawer-position","drawer-position",-1682931539),React.DrawerLayoutAndroid.positions.Left,new cljs.core.Keyword(null,"render-navigation-view","render-navigation-view",-1017127524),((function (drawer,tab,map__27689,map__27689__$1,navigator){
return (function (){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.android.components.drawer.drawer_component,navigator], null));
});})(drawer,tab,map__27689,map__27689__$1,navigator))
,new cljs.core.Keyword(null,"ref","ref",1289896967),((function (drawer,tab,map__27689,map__27689__$1,navigator){
return (function (drawer__$1){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-android-drawer","set-android-drawer",-459616806),drawer__$1], null));
});})(drawer,tab,map__27689,map__27689__$1,navigator))
], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.shared.ui.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.shared.ui.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.call(null,luno.android.styles.styles,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"statusbar","statusbar",-680036405)], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.android.ui.toolbar,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),"Luno",new cljs.core.Keyword(null,"icon","icon",1679606541),"menu",new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),"add-circle",new cljs.core.Keyword(null,"onPress","onPress",-1383694171),((function (drawer,tab,map__27689,map__27689__$1,navigator){
return (function (_){
return luno.android.scenes.root.show_add_dialog.call(null);
});})(drawer,tab,map__27689,map__27689__$1,navigator))
], null)], null),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.call(null,luno.android.styles.styles,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toolbar","toolbar",-1172789065)], null)),new cljs.core.Keyword(null,"on-icon-press","on-icon-press",-1079106825),((function (drawer,tab,map__27689,map__27689__$1,navigator){
return (function (_){
return cljs.core.deref.call(null,drawer).openDrawer();
});})(drawer,tab,map__27689,map__27689__$1,navigator))
], null)], null),(function (){var G__27691 = cljs.core.deref.call(null,tab);
switch (G__27691) {
case "main":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.shared.scenes.main.main_scene,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.call(null,luno.android.styles.styles,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scenes","scenes",-425219404),new cljs.core.Keyword(null,"main","main",-2117802661)], null)),new cljs.core.Keyword(null,"city-wrapper-fn","city-wrapper-fn",-925052295),((function (G__27691,drawer,tab,map__27689,map__27689__$1,navigator){
return (function (p__27692,component){
var map__27693 = p__27692;
var map__27693__$1 = ((((!((map__27693 == null)))?((((map__27693.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27693.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27693):map__27693);
var city = map__27693__$1;
var city_name = cljs.core.get.call(null,map__27693__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var media_url = [cljs.core.str(cljs.core.get_in.call(null,city,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bing-image","bing-image",-390099202),new cljs.core.Keyword(null,"MediaUrl","MediaUrl",251013483)], null)))].join('');
if(clojure.string.blank_QMARK_.call(null,media_url)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.android.ui.card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.android.ui.card_body,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.shared.ui.text,[cljs.core.str("Fetching weather for "),cljs.core.str(city_name),cljs.core.str("...")].join('')], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.android.ui.card,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.call(null,luno.android.styles.styles,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scenes","scenes",-425219404),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"city-card","city-card",-1551546257),new cljs.core.Keyword(null,"card","card",-1430355152)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.android.ui.card_media,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"image","image",-58725096),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.shared.ui.image,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uri","uri",-774711847),media_url], null)], null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.shared.ui.touchable,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-long-press","on-long-press",-1256774209),((function (media_url,map__27693,map__27693__$1,city,city_name,G__27691,drawer,tab,map__27689,map__27689__$1,navigator){
return (function (_){
return luno.android.scenes.root.city_click.call(null,city_name);
});})(media_url,map__27693,map__27693__$1,city,city_name,G__27691,drawer,tab,map__27689,map__27689__$1,navigator))
], null),component], null)], null)], null);
}
});})(G__27691,drawer,tab,map__27689,map__27689__$1,navigator))
], null)], null);

break;
case "about":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.shared.scenes.about.about_scene,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.call(null,luno.android.styles.styles,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scenes","scenes",-425219404),new cljs.core.Keyword(null,"about","about",1423892543)], null)),new cljs.core.Keyword(null,"github-button-fn","github-button-fn",-835817100),((function (G__27691,drawer,tab,map__27689,map__27689__$1,navigator){
return (function (link){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.android.ui.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"GITHUB",new cljs.core.Keyword(null,"on-press","on-press",-1763585856),((function (G__27691,drawer,tab,map__27689,map__27689__$1,navigator){
return (function (){
return luno.shared.ui.linking.openURL(link);
});})(G__27691,drawer,tab,map__27689,map__27689__$1,navigator))
], null)], null);
});})(G__27691,drawer,tab,map__27689,map__27689__$1,navigator))
,new cljs.core.Keyword(null,"changelog-button-fn","changelog-button-fn",-855437487),((function (G__27691,drawer,tab,map__27689,map__27689__$1,navigator){
return (function (link){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.android.ui.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"CHANGELOG",new cljs.core.Keyword(null,"on-press","on-press",-1763585856),((function (G__27691,drawer,tab,map__27689,map__27689__$1,navigator){
return (function (){
return luno.shared.ui.linking.openURL(link);
});})(G__27691,drawer,tab,map__27689,map__27689__$1,navigator))
], null)], null);
});})(G__27691,drawer,tab,map__27689,map__27689__$1,navigator))
], null)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.deref.call(null,tab))].join('')));

}
})()], null)], null);
});

//# sourceMappingURL=root.js.map