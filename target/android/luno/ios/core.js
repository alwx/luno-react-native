// Compiled by ClojureScript 1.7.170 {}
goog.provide('luno.ios.core');
goog.require('cljs.core');
goog.require('luno.db');
goog.require('luno.ios.ui');
goog.require('luno.handlers');
goog.require('reagent.core');
goog.require('luno.ios.scenes.root');
goog.require('luno.ios.styles');
goog.require('luno.shared.ui');
goog.require('clojure.string');
goog.require('luno.subs');
goog.require('re_frame.core');
luno.ios.core.app_root = (function luno$ios$core$app_root(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.ios.ui.navigator,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial-route","initial-route",-622635808),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Luno",new cljs.core.Keyword(null,"component","component",1555936782),reagent.core.reactify_component.call(null,luno.ios.scenes.root.root_scene),new cljs.core.Keyword(null,"right-button-title","right-button-title",371328175),"Add city",new cljs.core.Keyword(null,"on-right-button-press","on-right-button-press",2036478573),(function (_){
return luno.ios.ui.show_dialog.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Please, input city's name",new cljs.core.Keyword(null,"callback","callback",-705136228),(function (city){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-weather","load-weather",786153970),city], null));
})], null));
})], null),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.call(null,luno.ios.styles.styles,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707)], null))], null)], null);
});
luno.ios.core.init = (function luno$ios$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-schema","initialize-schema",1070193238)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-from-db","load-from-db",-1589655162),new cljs.core.Keyword(null,"city","city",-393302614)], null));

return luno.shared.ui.app_registry.registerComponent("luno",(function (){
return reagent.core.reactify_component.call(null,luno.ios.core.app_root);
}));
});

//# sourceMappingURL=core.js.map