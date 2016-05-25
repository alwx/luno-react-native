// Compiled by ClojureScript 1.7.170 {}
goog.provide('env.android.main');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('luno.android.core');
goog.require('figwheel.client');
cljs.core.enable_console_print_BANG_.call(null);
env.android.main.cnt = reagent.core.atom.call(null,(0));
env.android.main.reloader = (function env$android$main$reloader(){
cljs.core.deref.call(null,env.android.main.cnt);

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.android.core.app_root], null);
});
env.android.main.root_el = reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [env.android.main.reloader], null));
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),false,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),(function (){
return cljs.core.swap_BANG_.call(null,env.android.main.cnt,cljs.core.inc);
}));
luno.android.core.init.call(null);

//# sourceMappingURL=main.js.map