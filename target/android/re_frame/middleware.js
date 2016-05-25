// Compiled by ClojureScript 1.7.170 {}
goog.provide('re_frame.middleware');
goog.require('cljs.core');
goog.require('reagent.ratom');
goog.require('re_frame.undo');
goog.require('re_frame.utils');
goog.require('clojure.data');
/**
 * Acts as an adaptor, allowing handlers to be writen as pure functions.
 *   The re-frame router passes the `app-db` atom as the first parameter to any handler.
 *   This middleware adapts that atom to be the value within the atom.
 *   If you strip away the error/efficiency checks, this middleware is doing:
 *   (reset! app-db (handler @app-db event-vec))
 *   You don't have to use this middleware directly. It is automatically applied to
 *   your handler's middleware when you use "register-handler".
 *   In fact, the only way to by-pass automatic use of "pure" in your middleware
 *   is to use the low level registration function "re-frame.handlers/register-handler-base"
 */
re_frame.middleware.pure = (function re_frame$middleware$pure(handler){
return (function re_frame$middleware$pure_$_pure_handler(app_db,event_vec){
if(!(((!((app_db == null)))?(((false) || (app_db.reagent$ratom$IReactiveAtom$))?true:(((!app_db.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,app_db):false)):cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,app_db)))){
if(cljs.core.map_QMARK_.call(null,app_db)){
re_frame.utils.warn.call(null,"re-frame: Looks like \"pure\" is in the middleware pipeline twice. Ignoring.");
} else {
re_frame.utils.warn.call(null,"re-frame: \"pure\" middleware not given a Ratom.  Got: ",app_db);
}

return handler;
} else {
var db = cljs.core.deref.call(null,app_db);
var new_db = handler.call(null,db,event_vec);
if((new_db == null)){
return re_frame.utils.error.call(null,"re-frame: your pure handler returned nil. It should return the new db state.");
} else {
if(!((db === new_db))){
return cljs.core.reset_BANG_.call(null,app_db,new_db);
} else {
return null;
}
}
}
});
});
/**
 * Middleware which catches and prints any handler-generated exceptions to console.
 *   Handlers are called from within a core.async go-loop, and core.async produces
 *   a special kind of hell when in comes to stacktraces. By the time an exception
 *   has passed through a go-loop its stack is mangled beyond repair and you'll
 *   have no idea where the exception was thrown.
 *   So this middleware catches and prints to stacktrace before the core.async sausage
 *   machine has done its work.
 *   
 */
re_frame.middleware.log_ex = (function re_frame$middleware$log_ex(handler){
return (function re_frame$middleware$log_ex_$_log_ex_handler(db,v){
re_frame.utils.warn.call(null,"re-frame: use of \"log-ex\" is deprecated. You don't need it any more IF YOU ARE USING CHROME 44. Chrome now seems to now produce good stack traces.");

try{return handler.call(null,db,v);
}catch (e21546){var e = e21546;
console.error(e.stack);

throw e;
}});
});
/**
 * Middleware which logs debug information to js/console for each event.
 *   Includes a clojure.data/diff of the db, before vs after, showing the changes
 *   caused by the event.
 */
re_frame.middleware.debug = (function re_frame$middleware$debug(handler){
return (function re_frame$middleware$debug_$_debug_handler(db,v){
re_frame.utils.group.call(null,"re-frame event: ",v);

var new_db = handler.call(null,db,v);
var diff = clojure.data.diff.call(null,db,new_db);
re_frame.utils.log.call(null,"only before: ",cljs.core.first.call(null,diff));

re_frame.utils.log.call(null,"only after : ",cljs.core.second.call(null,diff));

re_frame.utils.groupEnd.call(null);

return new_db;
});
});
/**
 * Middleware which removes the first element of v, allowing you to write
 *   more aesthetically pleasing handlers. No leading underscore on the event-v!
 *   Your handlers will look like this:
 *    (defn my-handler
 *      [db [x y z]]    ;; <-- instead of [_ x y z]
 *      ....)
 *   
 */
re_frame.middleware.trim_v = (function re_frame$middleware$trim_v(handler){
return (function re_frame$middleware$trim_v_$_trim_v_handler(db,v){
return handler.call(null,db,cljs.core.vec.call(null,cljs.core.rest.call(null,v)));
});
});
/**
 * A middleware factory which supplies a sub-tree of `db` to the handler.
 * Works a bit like update-in. Supplies a narrowed data structure for the handler.
 * Afterwards, grafts the result of the handler back into db.
 * Usage:
 *   (path :some :path)
 *   (path [:some :path])
 *   (path [:some :path] :to :here)
 *   (path [:some :path] [:to] :here)
 *   
 */
re_frame.middleware.path = cljs.core.with_meta((function() { 
var re_frame$middleware$path__delegate = function (args){
var path__$1 = cljs.core.flatten.call(null,args);
if(cljs.core.empty_QMARK_.call(null,path__$1)){
re_frame.utils.error.call(null,"re-frame: \"path\" middleware given no params.");
} else {
}

return ((function (path__$1){
return (function re_frame$middleware$path_$_path_middleware(handler){
return ((function (path__$1){
return (function re_frame$middleware$path_$_path_middleware_$_path_handler(db,v){
return cljs.core.update_in.call(null,db,path__$1,handler,v);
});
;})(path__$1))
});
;})(path__$1))
};
var re_frame$middleware$path = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21547__i = 0, G__21547__a = new Array(arguments.length -  0);
while (G__21547__i < G__21547__a.length) {G__21547__a[G__21547__i] = arguments[G__21547__i + 0]; ++G__21547__i;}
  args = new cljs.core.IndexedSeq(G__21547__a,0);
} 
return re_frame$middleware$path__delegate.call(this,args);};
re_frame$middleware$path.cljs$lang$maxFixedArity = 0;
re_frame$middleware$path.cljs$lang$applyTo = (function (arglist__21548){
var args = cljs.core.seq(arglist__21548);
return re_frame$middleware$path__delegate(args);
});
re_frame$middleware$path.cljs$core$IFn$_invoke$arity$variadic = re_frame$middleware$path__delegate;
return re_frame$middleware$path;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"re-frame-factory-name","re-frame-factory-name",-1205706462),"path"], null));
/**
 * A Middleware factory which stores an undo checkpoint.
 *   "explanation" can be either a string or a function. If it is a
 *   function then must be:  (db event-vec) -> string.
 *   "explanation" can be nil. in which case "" is recorded.
 *   
 */
re_frame.middleware.undoable = cljs.core.with_meta((function re_frame$middleware$undoable(explanation){
return (function re_frame$middleware$undoable_$_undoable_middleware(handler){
return (function re_frame$middleware$undoable_$_undoable_middleware_$_undoable_handler(db,event_vec){
var explanation__$1 = ((cljs.core.fn_QMARK_.call(null,explanation))?explanation.call(null,db,event_vec):((typeof explanation === 'string')?explanation:(((explanation == null))?"":re_frame.utils.error.call(null,"re-frame: \"undoable\" middleware given a bad parameter. Got: ",explanation)
)));
re_frame.undo.store_now_BANG_.call(null,explanation__$1);

return handler.call(null,db,event_vec);
});
});
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"re-frame-factory-name","re-frame-factory-name",-1205706462),"undoable"], null));
/**
 * Middleware factory which runs a given function "f" in the after position.
 *   "f" is (db v) -> db
 *   Unlike "after" which is about side effects, "enrich" expects f to process and alter
 *   db in some useful way, contributing to the derived data, flowing vibe.
 *   Imagine that todomvc needed to do duplicate detection - if any two todos had
 *   the same text, then highlight their background, and report them in a warning
 *   down the bottom.
 *   Almost any action (edit text, add new todo, remove a todo) requires a
 *   complete reassesment of duplication errors and warnings. Eg: that edit
 *   update might have introduced a new duplicate or removed one. Same with a
 *   todo removal.
 *   And to perform this enrichment, a function has to inspect all the todos,
 *   possibly set flags on each, and set some overall list of duplicates.
 *   And this duplication check might just be one check amoung many.
 *   "f" would need to be both adding and removing the duplicate warnings.
 *   By applying "f" in middleware, we keep the handlers simple and yet we
 *   ensure this important step is not missed.
 */
re_frame.middleware.enrich = cljs.core.with_meta((function re_frame$middleware$enrich(f){
return (function re_frame$middleware$enrich_$_enrich_middleware(handler){
return (function re_frame$middleware$enrich_$_enrich_middleware_$_enrich_handler(db,v){
return f.call(null,handler.call(null,db,v),v);
});
});
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"re-frame-factory-name","re-frame-factory-name",-1205706462),"enrich"], null));
/**
 * Middleware factory which runs a function "f" in the "after handler"
 *   position presumably for side effects.
 *   "f" is given the new value of "db". It's return value is ignored.
 *   Examples: "f" can run schema validation. Or write current state to localstorage. etc.
 *   In effect, "f" is meant to sideeffect. It gets no chance to change db. See "enrich"
 *   (if you need that.)
 */
re_frame.middleware.after = cljs.core.with_meta((function re_frame$middleware$after(f){
return (function re_frame$middleware$after_$_after_middleware(handler){
return (function re_frame$middleware$after_$_after_middleware_$_after_handler(db,v){
var new_db = handler.call(null,db,v);
f.call(null,new_db,v);

return new_db;
});
});
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"re-frame-factory-name","re-frame-factory-name",-1205706462),"after"], null));
/**
 * Middleware factory which acts a bit like "reaction"  (but it flows into db , rather than out)
 *   It observes N  inputs (paths into db) and if any of them change (as a result of the
 *   handler being run) then it runs 'f' to compute a new value, which is
 *   then assoced into the given out-path within app-db.
 * 
 *   Usage:
 * 
 *   (defn my-f
 *  [a-val b-val]
 *  ... some computation on a and b in here)
 * 
 *   (on-changes my-f [:c]  [:a] [:b])
 * 
 *   Put the middlware above on the right handlers (ones which might change :a or :b).
 *   It will:
 *   - call 'f' each time the value at path [:a] or [:b] changes
 *   - call 'f' with the values extracted from [:a] [:b]
 *   - assoc the return value from 'f' into the path  [:c]
 *   
 */
re_frame.middleware.on_changes = cljs.core.with_meta((function() { 
var re_frame$middleware$on_changes__delegate = function (f,out_path,in_paths){
return (function re_frame$middleware$on_changes_$_on_changed_middleware(handler){
return (function re_frame$middleware$on_changes_$_on_changed_middleware_$_on_changed_handler(db,v){
var new_db = handler.call(null,db,v);
var new_ins = cljs.core.map.call(null,((function (new_db){
return (function (p1__21549_SHARP_){
return cljs.core.get_in.call(null,new_db,p1__21549_SHARP_);
});})(new_db))
,in_paths);
var old_ins = cljs.core.map.call(null,((function (new_db,new_ins){
return (function (p1__21550_SHARP_){
return cljs.core.get_in.call(null,db,p1__21550_SHARP_);
});})(new_db,new_ins))
,in_paths);
var changed_ins_QMARK_ = cljs.core.some.call(null,cljs.core.false_QMARK_,cljs.core.map.call(null,cljs.core.identical_QMARK_,new_ins,old_ins));
if(cljs.core.truth_(changed_ins_QMARK_)){
return cljs.core.assoc_in.call(null,new_db,out_path,cljs.core.apply.call(null,f,new_ins));
} else {
return new_db;
}
});
});
};
var re_frame$middleware$on_changes = function (f,out_path,var_args){
var in_paths = null;
if (arguments.length > 2) {
var G__21551__i = 0, G__21551__a = new Array(arguments.length -  2);
while (G__21551__i < G__21551__a.length) {G__21551__a[G__21551__i] = arguments[G__21551__i + 2]; ++G__21551__i;}
  in_paths = new cljs.core.IndexedSeq(G__21551__a,0);
} 
return re_frame$middleware$on_changes__delegate.call(this,f,out_path,in_paths);};
re_frame$middleware$on_changes.cljs$lang$maxFixedArity = 2;
re_frame$middleware$on_changes.cljs$lang$applyTo = (function (arglist__21552){
var f = cljs.core.first(arglist__21552);
arglist__21552 = cljs.core.next(arglist__21552);
var out_path = cljs.core.first(arglist__21552);
var in_paths = cljs.core.rest(arglist__21552);
return re_frame$middleware$on_changes__delegate(f,out_path,in_paths);
});
re_frame$middleware$on_changes.cljs$core$IFn$_invoke$arity$variadic = re_frame$middleware$on_changes__delegate;
return re_frame$middleware$on_changes;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"re-frame-factory-name","re-frame-factory-name",-1205706462),"on-changes"], null));

//# sourceMappingURL=middleware.js.map