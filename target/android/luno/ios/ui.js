// Compiled by ClojureScript 1.7.170 {}
goog.provide('luno.ios.ui');
goog.require('cljs.core');
goog.require('reagent.core');
IOSButton = require("react-native-button");
luno.ios.ui.navigator = reagent.core.adapt_react_class.call(null,React.NavigatorIOS);
luno.ios.ui.tab_bar = reagent.core.adapt_react_class.call(null,React.TabBarIOS);
luno.ios.ui.tab_bar_item = reagent.core.adapt_react_class.call(null,React.TabBarIOS.Item);
luno.ios.ui.button = reagent.core.adapt_react_class.call(null,IOSButton);
luno.ios.ui.show_dialog = (function luno$ios$ui$show_dialog(p__21625){
var map__21628 = p__21625;
var map__21628__$1 = ((((!((map__21628 == null)))?((((map__21628.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21628.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21628):map__21628);
var text = cljs.core.get.call(null,map__21628__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var callback = cljs.core.get.call(null,map__21628__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
return React.AlertIOS.prompt(text,null,callback);
});
luno.ios.ui.show_action_sheet = (function luno$ios$ui$show_action_sheet(options,callback){
return React.ActionSheetIOS.showActionSheetWithOptions(cljs.core.clj__GT_js.call(null,options),callback);
});

//# sourceMappingURL=ui.js.map