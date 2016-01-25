# What is Luno?

**Luno** is a demo mobile application written in ClojureScript.
It uses [React Native](https://facebook.github.io/react-native/), [Reagent](https://reagent-project.github.io/), [Re-natal](https://github.com/drapanjanas/re-natal) and a couple of React Native libraries, for example, awesome [React Native Material Design](http://react-native-material-design.github.io/).

It is just proof of concept, and main purpose of Luno is to demonstrate how to create reusable components,
use Navigation Drawer, Navigator and NavigatorIOS, how to work with native libraries (it uses [Material Dialogs](https://github.com/afollestad/material-dialogs) for Android)
and how to create apps indistinguishable from native Android or iOS apps.

Luno is not completed, more features are coming.

## Screenshots

![Android & iOS](https://raw.githubusercontent.com/alwx/luno-react-native/master/_screenshots/android-ios.png)

## API

Luno uses OpenWeatherMap API to load information about weather, and Bing Search API to load images.
Both APIs require application IDs, but I don't mind of using my AppIDs (see src/luno/config.cljs for keys)

But these APIs have some limits — for example Bing API allows you to perform 5000 searches per month. In the case you don't
see pictures or something works not the way you want it to work, please, obtain your own API keys and try running app again.

## How to run?

Luno is based on re-natal. Please, refer to [re-natal documentation](https://github.com/drapanjanas/re-natal/blob/master/README.md) to run this app on iOS or Android.

## TODO

* Ability to save cities to internal database
* Error handling

Feel free to send pull request with any additions. And, of course, I am open for any suggestions for code style, architecture or UI.
