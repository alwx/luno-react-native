# Change Log
All notable changes to this project will be documented in this file.

## [0.3.0] - 2016-02-08
### Added
- Linking class instead of combination of IntentAndroid + LinkingIOS;
- Android: Improved and much easier way of switching between scenes;

### Changed
- Updated version of React Native (0.20.0-rc1);

## [0.2.0] - 2016-01-31
### Added
- Internal database (react-native-store) — now Luno saves your cities and loads them on relaunch;
- Ability to delete cities;
- "Changelog" button on "About" screen;
- iOS only: ActionSheetIOS for deletion;
- Android only: MaterialDialog for deletion;

### Changed
- Updated version of Re-natal (0.2.19);
- Updated version of React Native (0.18.1);
- [refactor] Improved code structure;

### Removed
- ^:figwheel-load annotation from core.cljs;
— "Please, add cities" message;

## 0.1.0 - 2016-01-26
### Added
- Basic UI;
- Reusable components for iOS and Android;
- HTTP Client with ability to load images and weather information from different sources.

[0.2.0]: https://github.com/alwx/luno-react-native/compare/d3242d92638816ab285ddc53546c4a70404e8dd1...0.2.0
[0.3.0]: https://github.com/alwx/luno-react-native/compare/0.2.0...0.3.0
