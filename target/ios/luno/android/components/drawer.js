// Compiled by ClojureScript 1.7.170 {}
goog.provide('luno.android.components.drawer');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('luno.ui');
goog.require('luno.android.routes');
luno.android.components.drawer.logo_img = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:8081/./images/luno_drawer.png"], null);
luno.android.components.drawer.drawer_component = (function luno$android$components$drawer$drawer_component(navigator){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.ui.drawer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.ui.drawer_header,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"image","image",-58725096),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.ui.image,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),luno.android.components.drawer.logo_img], null)], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.ui.drawer_section,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1679606541),"cloud-queue",new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"value","value",305978217),"Weather"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1679606541),"face",new cljs.core.Keyword(null,"value","value",305978217),"About",new cljs.core.Keyword(null,"onPress","onPress",-1383694171),(function (_){
return navigator.push(cljs.core.clj__GT_js.call(null,luno.android.routes.routes.call(null,new cljs.core.Keyword(null,"about","about",1423892543))));
})], null)], null)], null)], null)], null);
});

//# sourceMappingURL=drawer.js.map