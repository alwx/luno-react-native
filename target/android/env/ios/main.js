// Compiled by ClojureScript 1.7.170 {}
goog.provide('env.ios.main');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('luno.ios.core');
goog.require('figwheel.client');
cljs.core.enable_console_print_BANG_.call(null);
env.ios.main.cnt = reagent.core.atom.call(null,(0));
env.ios.main.reloader = (function env$ios$main$reloader(){
cljs.core.deref.call(null,env.ios.main.cnt);

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.ios.core.app_root], null);
});
env.ios.main.root_el = reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [env.ios.main.reloader], null));
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),false,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),(function (){
return cljs.core.swap_BANG_.call(null,env.ios.main.cnt,cljs.core.inc);
}));
luno.ios.core.init.call(null);

//# sourceMappingURL=main.js.map