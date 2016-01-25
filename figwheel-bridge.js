/*
 * Originally taken from https://github.com/decker405/figwheel-react-native
 *
 * @providesModule figwheel-bridge
 */

var CLOSURE_UNCOMPILED_DEFINES = null;

var React = require('react-native');

var config = {
    basePath: "target/",
    googBasePath: 'goog/',
    splash: React.createClass({
        render: function () {
            var plainStyle = {flex: 1, alignItems: 'center', justifyContent: 'center'};
            return (
                <React.View style={plainStyle}>
                    <React.Text>Waiting for Figwheel to load files.</React.Text>
                </React.View>
            );
        }
    })
};

var self;
var scriptQueue = [];
var server = null; // will be set dynamically
var fileBasePath = null; // will be set dynamically
var evaluate = eval; // This is needed, direct calls to eval does not work (RN packager???)
var externalModules = {};

// evaluates js code ensuring proper ordering
function customEval(url, javascript, success, error) {
    if (scriptQueue.length > 0) {
        if (scriptQueue[0] === url) {
            try {
                evaluate(javascript);
                console.info('Evaluated: ' + url);
                scriptQueue.shift();
                if (url.indexOf('jsloader') > -1) {
                    shimJsLoader();
                }
                success();
            } catch (e) {
                console.error('Evaluation error in: ' + url);
                console.error(e);
                error();
            }
        } else {
            setTimeout(function () {
                customEval(url, javascript, success, error)
            }, 5);
        }
    } else {
        console.error('Something bad happened...');
        error()
    }
}
function asyncImportScripts(path, success, error) {
    var url = server + '/' + path;

    console.info('(asyncImportScripts) Importing: ' + url);
    scriptQueue.push(url);
    fetch(url)
        .then(function (response) {
            return response.text()
        })
        .then(function (responseText) {
            return customEval(url, responseText, success, error);
        })
        .catch(function (error) {
            console.error('Error loading script, please check your config setup.');
            console.error(error);
            return error();
        });
}

// Async load of javascript files
function importJs(src, success, error) {
    if (typeof success !== 'function') {
        success = function () {
        };
    }
    if (typeof error !== 'function') {
        error = function () {
        };
    }

    var filePath = fileBasePath + '/' + src;

    console.info('(importJs) Importing: ' + filePath);
    asyncImportScripts(filePath, success, error);
}


function interceptRequire() {
    var oldRequire = window.require;
    console.info("Shimming require");
    window.require = function (id) {
        console.info("Requiring: " + id);
        if (externalModules[id]) {
            return externalModules[id];
        }
        return oldRequire(id);
    };
}

function loadApp(platform, devHost) {
    server = "http://" + devHost + ":8081";
    fileBasePath = config.basePath + platform;

    if (typeof goog === "undefined") {
        console.log('Loading Closure base.');
        interceptRequire();
        importJs('goog/base.js', function () {
            shimBaseGoog();
            fakeLocalStorageAndDocument();
            importJs('cljs_deps.js');
            importJs('goog/deps.js', function () {

                // This is needed because of RN packager
                // seriously React packager? why.
                var googreq = goog.require;

                googreq('figwheel.connect');
                googreq('env.' + platform + '.main');

                console.log('Done loading Clojure app');
            });
        });
    }
}

function startApp(appName, platform, devHost) {
    React.AppRegistry.registerComponent(appName, () => config.splash);
    if (typeof goog === "undefined") {
        loadApp(platform, devHost);
    }
}

function withModules(moduleById) {
    externalModules = moduleById;
    return self;
}

// Goog fixes
function shimBaseGoog() {
    console.info('Shimming goog functions.');
    goog.basePath = 'goog/';
    goog.writeScriptSrcNode = importJs;
    goog.writeScriptTag_ = function (src, optSourceText) {
        importJs(src);
        return true;
    };
    goog.inHtmlDocument_ = function () {
        return true;
    };
}

function fakeLocalStorageAndDocument() {
    window.localStorage = {};
    window.localStorage.getItem = function () {
        return 'true';
    };
    window.localStorage.setItem = function () {
    };

    window.document = {};
    window.document.body = {};
    window.document.body.dispatchEvent = function () {
    };
    window.document.createElement = function () {
    };

    if (typeof window.location === 'undefined') {
        window.location = {};
    }
    console.debug = console.warn;
    window.addEventListener = function () {
    };
}

// Figwheel fixes
// Used by figwheel - uses importScript to load JS rather than <script>'s
function shimJsLoader() {
    console.info('==== Shimming jsloader ====');
    goog.net.jsloader.load = function (uri, options) {
        var deferred = {
            callbacks: [],
            errbacks: [],
            addCallback: function (cb) {
                deferred.callbacks.push(cb);
            },
            addErrback: function (cb) {
                deferred.errbacks.push(cb);
            },
            callAllCallbacks: function () {
                while (deferred.callbacks.length > 0) {
                    deferred.callbacks.shift()();
                }
            },
            callAllErrbacks: function () {
                while (deferred.errbacks.length > 0) {
                    deferred.errbacks.shift()();
                }
            }
        };

        // Figwheel needs this to be an async call,
        //    so that it can add callbacks to deferred
        setTimeout(function () {
            importJs(uri.getPath(),
                deferred.callAllCallbacks,
                deferred.callAllErrbacks);
        }, 1);

        return deferred;
    };
}

self = {
    withModules: withModules,
    start: startApp
};

module.exports = self;