// Compiled by ClojureScript 1.7.170 {}
goog.provide('luno.shared.ui');
goog.require('cljs.core');
goog.require('reagent.core');
React = require("react-native");
luno.shared.ui.app_registry = React.AppRegistry;
luno.shared.ui.view = reagent.core.adapt_react_class.call(null,React.View);
luno.shared.ui.scroll = reagent.core.adapt_react_class.call(null,React.ScrollView);
luno.shared.ui.image = reagent.core.adapt_react_class.call(null,React.Image);
luno.shared.ui.progress_bar = reagent.core.adapt_react_class.call(null,React.ProgressBarAndroid);
luno.shared.ui.text = reagent.core.adapt_react_class.call(null,React.Text);
luno.shared.ui.input = reagent.core.adapt_react_class.call(null,React.TextInput);
luno.shared.ui.touchable = reagent.core.adapt_react_class.call(null,React.TouchableWithoutFeedback);
luno.shared.ui.linking = React.Linking;

//# sourceMappingURL=ui.js.map