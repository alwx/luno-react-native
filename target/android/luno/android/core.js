// Compiled by ClojureScript 1.7.170 {}
goog.provide('luno.android.core');
goog.require('cljs.core');
goog.require('luno.handlers');
goog.require('reagent.core');
goog.require('luno.android.ui');
goog.require('luno.android.scenes.root');
goog.require('luno.android.styles');
goog.require('luno.shared.ui');
goog.require('luno.subs');
goog.require('re_frame.core');
luno.android.core.app_root = (function luno$android$core$app_root(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.android.ui.navigator,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"initial-route","initial-route",-622635808),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"main",new cljs.core.Keyword(null,"index","index",-1531685915),(1)], null),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.call(null,luno.android.styles.styles,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707)], null)),new cljs.core.Keyword(null,"configure-scene","configure-scene",-1674748709),(function (_,___$1){
return React.Navigator.SceneConfigs.FloatFromBottomAndroid;
}),new cljs.core.Keyword(null,"render-scene","render-scene",-471969412),(function (_,navigator){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.android.scenes.root.root_scene,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigator","navigator",2050004181),navigator], null)], null));
})], null)], null);
});
luno.android.core.init = (function luno$android$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-schema","initialize-schema",1070193238)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-from-db","load-from-db",-1589655162),new cljs.core.Keyword(null,"city","city",-393302614)], null));

return luno.shared.ui.app_registry.registerComponent("luno",(function (){
return reagent.core.reactify_component.call(null,luno.android.core.app_root);
}));
});

//# sourceMappingURL=core.js.map