// Compiled by ClojureScript 1.7.170 {}
goog.provide('luno.android.ui');
goog.require('cljs.core');
goog.require('reagent.core');
React = require("react-native");
MaterialDesign = require("react-native-material-design");
AndroidDialog = require("react-native-dialogs");
luno.android.ui.navigator = reagent.core.adapt_react_class.call(null,React.Navigator);
luno.android.ui.toolbar = reagent.core.adapt_react_class.call(null,MaterialDesign.Toolbar);
luno.android.ui.button = reagent.core.adapt_react_class.call(null,MaterialDesign.Button);
luno.android.ui.card = reagent.core.adapt_react_class.call(null,MaterialDesign.Card);
luno.android.ui.card_media = reagent.core.adapt_react_class.call(null,MaterialDesign.Card.Media);
luno.android.ui.card_body = reagent.core.adapt_react_class.call(null,MaterialDesign.Card.Body);
luno.android.ui.card_actions = reagent.core.adapt_react_class.call(null,MaterialDesign.Card.Actions);
luno.android.ui.drawer_layout = reagent.core.adapt_react_class.call(null,React.DrawerLayoutAndroid);
luno.android.ui.drawer = reagent.core.adapt_react_class.call(null,MaterialDesign.Drawer);
luno.android.ui.drawer_header = reagent.core.adapt_react_class.call(null,MaterialDesign.Drawer.Header);
luno.android.ui.drawer_section = reagent.core.adapt_react_class.call(null,MaterialDesign.Drawer.Section);
luno.android.ui.show_dialog = (function luno$android$ui$show_dialog(props){
var dialog = (new AndroidDialog());
dialog.set(cljs.core.clj__GT_js.call(null,props));

return dialog.show();
});

//# sourceMappingURL=ui.js.map