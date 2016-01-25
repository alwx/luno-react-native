// Compiled by ClojureScript 1.7.170 {}
goog.provide('luno.shared.scenes.about');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('luno.ui');
luno.shared.scenes.about.github_link = "http://github.com/alwx/luno-react-native";
luno.shared.scenes.about.about_scene = (function luno$shared$scenes$about$about_scene(p__29518){
var map__29524 = p__29518;
var map__29524__$1 = ((((!((map__29524 == null)))?((((map__29524.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29524.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29524):map__29524);
var platform = cljs.core.get.call(null,map__29524__$1,new cljs.core.Keyword(null,"platform","platform",-1086422114));
var navigator = cljs.core.get.call(null,map__29524__$1,new cljs.core.Keyword(null,"navigator","navigator",2050004181));
var style = cljs.core.get.call(null,map__29524__$1,new cljs.core.Keyword(null,"style","style",-496642736));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.ui.view,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get.call(null,style,new cljs.core.Keyword(null,"view","view",1247994814)),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.ui.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get.call(null,style,new cljs.core.Keyword(null,"title","title",636505583))], null),"Luno 0.1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.ui.text,"Cross-platform React Native application written in ClojureScript"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.ui.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get.call(null,style,new cljs.core.Keyword(null,"author","author",2111686192))], null),"By alwx (alwxndr@gmail.com)"], null),(function (){var pred__29526 = cljs.core._EQ_;
var expr__29527 = platform;
if(cljs.core.truth_(pred__29526.call(null,new cljs.core.Keyword(null,"android","android",-2084094573),expr__29527))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.ui.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"GITHUB",new cljs.core.Keyword(null,"on-press","on-press",-1763585856),((function (pred__29526,expr__29527,map__29524,map__29524__$1,platform,navigator,style){
return (function (){
return luno.ui.intent_android.openURL(luno.shared.scenes.about.github_link);
});})(pred__29526,expr__29527,map__29524,map__29524__$1,platform,navigator,style))
], null)], null);
} else {
if(cljs.core.truth_(pred__29526.call(null,new cljs.core.Keyword(null,"ios","ios",-778010715),expr__29527))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.ui.button_ios,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-press","on-press",-1763585856),((function (pred__29526,expr__29527,map__29524,map__29524__$1,platform,navigator,style){
return (function (){
return luno.ui.linking_ios.openURL(luno.shared.scenes.about.github_link);
});})(pred__29526,expr__29527,map__29524,map__29524__$1,platform,navigator,style))
], null),"GitHub"], null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__29527)].join('')));
}
}
})()], null);
});

//# sourceMappingURL=about.js.map