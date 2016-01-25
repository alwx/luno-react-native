// Compiled by ClojureScript 1.7.170 {}
goog.provide('luno.ui');
goog.require('cljs.core');
goog.require('reagent.core');
React = require("react-native");
MaterialDesign = require("react-native-material-design");
IOSButton = require("react-native-button");
AndroidDialog = require("react-native-dialogs");
luno.ui.app_registry = React.AppRegistry;
luno.ui.navigator = reagent.core.adapt_react_class.call(null,React.Navigator);
luno.ui.navigator_ios = reagent.core.adapt_react_class.call(null,React.NavigatorIOS);
luno.ui.view = reagent.core.adapt_react_class.call(null,React.View);
luno.ui.scroll = reagent.core.adapt_react_class.call(null,React.ScrollView);
luno.ui.image = reagent.core.adapt_react_class.call(null,React.Image);
luno.ui.progress_bar = reagent.core.adapt_react_class.call(null,React.ProgressBarAndroid);
luno.ui.text = reagent.core.adapt_react_class.call(null,React.Text);
luno.ui.button = reagent.core.adapt_react_class.call(null,MaterialDesign.Button);
luno.ui.button_ios = reagent.core.adapt_react_class.call(null,IOSButton);
luno.ui.input = reagent.core.adapt_react_class.call(null,React.TextInput);
luno.ui.card = reagent.core.adapt_react_class.call(null,MaterialDesign.Card);
luno.ui.card_media = reagent.core.adapt_react_class.call(null,MaterialDesign.Card.Media);
luno.ui.card_body = reagent.core.adapt_react_class.call(null,MaterialDesign.Card.Body);
luno.ui.card_actions = reagent.core.adapt_react_class.call(null,MaterialDesign.Card.Actions);
luno.ui.toolbar = reagent.core.adapt_react_class.call(null,MaterialDesign.Toolbar);
luno.ui.drawer_layout = reagent.core.adapt_react_class.call(null,React.DrawerLayoutAndroid);
luno.ui.drawer = reagent.core.adapt_react_class.call(null,MaterialDesign.Drawer);
luno.ui.drawer_header = reagent.core.adapt_react_class.call(null,MaterialDesign.Drawer.Header);
luno.ui.drawer_section = reagent.core.adapt_react_class.call(null,MaterialDesign.Drawer.Section);
luno.ui.intent_android = React.IntentAndroid;
luno.ui.show_dialog_android = (function luno$ui$show_dialog_android(props){
var dialog = (new AndroidDialog());
dialog.set(cljs.core.clj__GT_js.call(null,props));

return dialog.show();
});
luno.ui.show_dialog_ios = (function luno$ui$show_dialog_ios(p__18045){
var map__18048 = p__18045;
var map__18048__$1 = ((((!((map__18048 == null)))?((((map__18048.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18048.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18048):map__18048);
var text = cljs.core.get.call(null,map__18048__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var callback = cljs.core.get.call(null,map__18048__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
return React.AlertIOS.prompt(text,null,callback);
});

//# sourceMappingURL=ui.js.map