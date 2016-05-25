// Compiled by ClojureScript 1.7.170 {}
goog.provide('luno.android.components.drawer');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('luno.shared.ui');
goog.require('luno.android.ui');
luno.android.components.drawer.logo_img = require("./images/luno_drawer.png");
luno.android.components.drawer.drawer_component = (function luno$android$components$drawer$drawer_component(navigator,drawer){
var tab = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-shared-tab","get-shared-tab",-1180381693)], null));
var drawer__$1 = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-android-drawer","get-android-drawer",847592746)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.android.ui.drawer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.android.ui.drawer_header,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"image","image",-58725096),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.shared.ui.image,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),luno.android.components.drawer.logo_img], null)], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.android.ui.drawer_section,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon","icon",1679606541),"cloud-queue",new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.call(null,cljs.core.deref.call(null,tab),"main"),new cljs.core.Keyword(null,"value","value",305978217),"Weather",new cljs.core.Keyword(null,"onPress","onPress",-1383694171),((function (tab,drawer__$1){
return (function (_){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-shared-tab","set-shared-tab",415217295),"main"], null));

return cljs.core.deref.call(null,drawer__$1).closeDrawer();
});})(tab,drawer__$1))
], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon","icon",1679606541),"face",new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.call(null,cljs.core.deref.call(null,tab),"about"),new cljs.core.Keyword(null,"value","value",305978217),"About",new cljs.core.Keyword(null,"onPress","onPress",-1383694171),((function (tab,drawer__$1){
return (function (_){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-shared-tab","set-shared-tab",415217295),"about"], null));

return cljs.core.deref.call(null,drawer__$1).closeDrawer();
});})(tab,drawer__$1))
], null)], null)], null)], null)], null);
});

//# sourceMappingURL=drawer.js.map