// Compiled by ClojureScript 1.7.170 {}
goog.provide('luno.shared.scenes.about');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('luno.shared.ui');
luno.shared.scenes.about.github_link = "http://github.com/alwx/luno-react-native";
luno.shared.scenes.about.changelog_link = "https://github.com/alwx/luno-react-native/blob/master/CHANGELOG.md";
luno.shared.scenes.about.about_scene = (function luno$shared$scenes$about$about_scene(p__21632){
var map__21635 = p__21632;
var map__21635__$1 = ((((!((map__21635 == null)))?((((map__21635.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21635.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21635):map__21635);
var style = cljs.core.get.call(null,map__21635__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var github_button_fn = cljs.core.get.call(null,map__21635__$1,new cljs.core.Keyword(null,"github-button-fn","github-button-fn",-835817100));
var changelog_button_fn = cljs.core.get.call(null,map__21635__$1,new cljs.core.Keyword(null,"changelog-button-fn","changelog-button-fn",-855437487));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.shared.ui.scroll,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get.call(null,style,new cljs.core.Keyword(null,"view","view",1247994814))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.shared.ui.view,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.shared.ui.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get.call(null,style,new cljs.core.Keyword(null,"title","title",636505583))], null),"Luno 0.3.1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.shared.ui.text,"Cross-platform React Native application written in ClojureScript"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [luno.shared.ui.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get.call(null,style,new cljs.core.Keyword(null,"author","author",2111686192))], null),"By alwx (alwxndr@gmail.com)"], null),github_button_fn.call(null,luno.shared.scenes.about.github_link),changelog_button_fn.call(null,luno.shared.scenes.about.changelog_link)], null)], null);
});

//# sourceMappingURL=about.js.map