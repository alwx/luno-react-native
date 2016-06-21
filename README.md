# What is Luno?

**Luno** is a demo mobile application written in ClojureScript.
It uses
[React Native](https://facebook.github.io/react-native/),
[Reagent](https://reagent-project.github.io/),
[Re-natal](https://github.com/drapanjanas/re-natal)
and a couple of React Native libraries, for example, awesome
[React Native Material Design](http://react-native-material-design.github.io/).

It is just proof of concept, and main purpose of Luno is to demonstrate how to create reusable components,
use Navigation Drawer, Navigator and NavigatorIOS, how to work with native libraries
(it uses [Material Dialogs](https://github.com/afollestad/material-dialogs) for Android)
and how to create apps indistinguishable from native Android or iOS apps.

Luno is not completed, but may be used like a demonstration of how to use react-native in your project.

## Screenshots

![Android & iOS](https://raw.githubusercontent.com/alwx/luno-react-native/master/_screenshots/android-ios.png)

## API

Luno uses OpenWeatherMap API to load information about weather, and Bing Search API to load images.
Both APIs require application IDs, but I don't mind of using my AppIDs (see src/luno/config.cljs for keys)

But these APIs have some limits — for example Bing API allows you to perform 5000 searches per month.
In the case you don't see pictures or something works not the way you want it to work, please, obtain your own
API keys and try running app again.

## How to run
```
$ npm i
$ lein prod-build
```
Then run in iOS from xcode or android by `react-native run-android`

## How to develop
Luno is based on re-natal.

1. Select your preferred android device
```
$ re-natal use-android-device real|avd|genymotion
```
2. Start figwheel
```
$ re-natal use-figwheel
$ lein figwheel ios|android
```
3. Run app from xcode (iOS) or `react-native run-android`

Please, refer to [re-natal documentation](https://github.com/drapanjanas/re-natal/blob/master/README.md) for more information.

## Future plans

* Error handling and more responsive UI;
* Experiments with Toolbar on Android (it is good idea to move Add field to Toolbar);
* Pull to refresh to update weather;
* Widgets (?)

## Contributors

* Alexander Pantyukhov (@alwx)
* Artūr Girenko (@drapanjanas)
* Alexander Kirillov (@saratovsource)
* Markku Rontu (@Macroz)

Feel free to send pull request with any additions. And, of course, I am open for any suggestions for code style,
architecture or UI.
