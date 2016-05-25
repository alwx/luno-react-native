// Compiled by ClojureScript 1.7.170 {}
goog.provide('re_frame.undo');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.utils');
goog.require('re_frame.db');
goog.require('re_frame.handlers');
goog.require('re_frame.subs');
/**
 * Maximum number of undo states maintained
 */
re_frame.undo.max_undos = cljs.core.atom.call(null,(50));
re_frame.undo.set_max_undos_BANG_ = (function re_frame$undo$set_max_undos_BANG_(n){
return cljs.core.reset_BANG_.call(null,re_frame.undo.max_undos,n);
});
/**
 * A list of history states
 */
re_frame.undo.undo_list = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
/**
 * A list of future states, caused by undoing
 */
re_frame.undo.redo_list = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
/**
 * Mirrors app-db
 */
re_frame.undo.app_explain = reagent.core.atom.call(null,"");
/**
 * Mirrors undo-list
 */
re_frame.undo.undo_explain_list = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
/**
 * Mirrors redo-list
 */
re_frame.undo.redo_explain_list = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
re_frame.undo.clear_undos_BANG_ = (function re_frame$undo$clear_undos_BANG_(){
cljs.core.reset_BANG_.call(null,re_frame.undo.undo_list,cljs.core.PersistentVector.EMPTY);

return cljs.core.reset_BANG_.call(null,re_frame.undo.undo_explain_list,cljs.core.PersistentVector.EMPTY);
});
re_frame.undo.clear_redos_BANG_ = (function re_frame$undo$clear_redos_BANG_(){
cljs.core.reset_BANG_.call(null,re_frame.undo.redo_list,cljs.core.PersistentVector.EMPTY);

return cljs.core.reset_BANG_.call(null,re_frame.undo.redo_explain_list,cljs.core.PersistentVector.EMPTY);
});
re_frame.undo.clear_history_BANG_ = (function re_frame$undo$clear_history_BANG_(){
re_frame.undo.clear_undos_BANG_.call(null);

re_frame.undo.clear_redos_BANG_.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.undo.app_explain,"");
});
/**
 * Stores the value currently in app-db, so the user can later undo
 */
re_frame.undo.store_now_BANG_ = (function re_frame$undo$store_now_BANG_(explanation){
re_frame.undo.clear_redos_BANG_.call(null);

cljs.core.reset_BANG_.call(null,re_frame.undo.undo_list,cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.deref.call(null,re_frame.undo.max_undos),cljs.core.conj.call(null,cljs.core.deref.call(null,re_frame.undo.undo_list),cljs.core.deref.call(null,re_frame.db.app_db)))));

cljs.core.reset_BANG_.call(null,re_frame.undo.undo_explain_list,cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.deref.call(null,re_frame.undo.max_undos),cljs.core.conj.call(null,cljs.core.deref.call(null,re_frame.undo.undo_explain_list),cljs.core.deref.call(null,re_frame.undo.app_explain)))));

return cljs.core.reset_BANG_.call(null,re_frame.undo.app_explain,explanation);
});
/**
 * Returns true if undos exist, false otherwise
 */
re_frame.undo.undos_QMARK_ = (function re_frame$undo$undos_QMARK_(){
return (cljs.core.count.call(null,cljs.core.deref.call(null,re_frame.undo.undo_list)) > (0));
});
/**
 * Returns true if redos exist, false otherwise
 */
re_frame.undo.redos_QMARK_ = (function re_frame$undo$redos_QMARK_(){
return (cljs.core.count.call(null,cljs.core.deref.call(null,re_frame.undo.redo_list)) > (0));
});
/**
 * Returns list of undo descriptions or empty list if no undos
 */
re_frame.undo.undo_explanations = (function re_frame$undo$undo_explanations(){
if(cljs.core.truth_(re_frame.undo.undos_QMARK_.call(null))){
return cljs.core.conj.call(null,cljs.core.deref.call(null,re_frame.undo.undo_explain_list),cljs.core.deref.call(null,re_frame.undo.app_explain));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
re_frame.subs.register.call(null,new cljs.core.Keyword(null,"undos?","undos?",-1094259081),(function re_frame$undo$handler(_,___$1){
return reagent.ratom.make_reaction.call(null,(function (){
return re_frame.undo.undos_QMARK_.call(null);
}));
}));
re_frame.subs.register.call(null,new cljs.core.Keyword(null,"redos?","redos?",1340247550),(function re_frame$undo$handler(_,___$1){
return reagent.ratom.make_reaction.call(null,(function (){
return re_frame.undo.redos_QMARK_.call(null);
}));
}));
re_frame.subs.register.call(null,new cljs.core.Keyword(null,"undo-explanations","undo-explanations",942251259),(function re_frame$undo$handler(_,___$1){
return reagent.ratom.make_reaction.call(null,(function (){
return re_frame.undo.undo_explanations.call(null);
}));
}));
re_frame.subs.register.call(null,new cljs.core.Keyword(null,"redo-explanations","redo-explanations",-1933832741),(function re_frame$undo$handler(_,___$1){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.deref.call(null,re_frame.undo.redo_explain_list);
}));
}));
re_frame.undo.undo = (function re_frame$undo$undo(undos,cur,redos){
var u = cljs.core.deref.call(null,undos);
var r = cljs.core.cons.call(null,cljs.core.deref.call(null,cur),cljs.core.deref.call(null,redos));
cljs.core.reset_BANG_.call(null,cur,cljs.core.last.call(null,u));

cljs.core.reset_BANG_.call(null,redos,r);

return cljs.core.reset_BANG_.call(null,undos,cljs.core.pop.call(null,u));
});
/**
 * undo n steps or until we run out of undos
 */
re_frame.undo.undo_n = (function re_frame$undo$undo_n(n){
while(true){
if(cljs.core.truth_((function (){var and__16843__auto__ = (n > (0));
if(and__16843__auto__){
return re_frame.undo.undos_QMARK_.call(null);
} else {
return and__16843__auto__;
}
})())){
re_frame.undo.undo.call(null,re_frame.undo.undo_list,re_frame.db.app_db,re_frame.undo.redo_list);

re_frame.undo.undo.call(null,re_frame.undo.undo_explain_list,re_frame.undo.app_explain,re_frame.undo.redo_explain_list);

var G__21509 = (n - (1));
n = G__21509;
continue;
} else {
return null;
}
break;
}
});
re_frame.handlers.register_base.call(null,new cljs.core.Keyword(null,"undo","undo",-1818036302),(function re_frame$undo$handler(_,p__21510){
var vec__21512 = p__21510;
var ___$1 = cljs.core.nth.call(null,vec__21512,(0),null);
var n = cljs.core.nth.call(null,vec__21512,(1),null);
if(cljs.core.not.call(null,re_frame.undo.undos_QMARK_.call(null))){
return re_frame.utils.warn.call(null,"re-frame: you did a (dispatch [:undo]), but there is nothing to undo.");
} else {
return re_frame.undo.undo_n.call(null,(function (){var or__16855__auto__ = n;
if(cljs.core.truth_(or__16855__auto__)){
return or__16855__auto__;
} else {
return (1);
}
})());
}
}));
re_frame.undo.redo = (function re_frame$undo$redo(undos,cur,redos){
var u = cljs.core.conj.call(null,cljs.core.deref.call(null,undos),cljs.core.deref.call(null,cur));
var r = cljs.core.deref.call(null,redos);
cljs.core.reset_BANG_.call(null,cur,cljs.core.first.call(null,r));

cljs.core.reset_BANG_.call(null,redos,cljs.core.rest.call(null,r));

return cljs.core.reset_BANG_.call(null,undos,u);
});
/**
 * redo n steps or until we run out of redos
 */
re_frame.undo.redo_n = (function re_frame$undo$redo_n(n){
while(true){
if(cljs.core.truth_((function (){var and__16843__auto__ = (n > (0));
if(and__16843__auto__){
return re_frame.undo.redos_QMARK_.call(null);
} else {
return and__16843__auto__;
}
})())){
re_frame.undo.redo.call(null,re_frame.undo.undo_list,re_frame.db.app_db,re_frame.undo.redo_list);

re_frame.undo.redo.call(null,re_frame.undo.undo_explain_list,re_frame.undo.app_explain,re_frame.undo.redo_explain_list);

var G__21513 = (n - (1));
n = G__21513;
continue;
} else {
return null;
}
break;
}
});
re_frame.handlers.register_base.call(null,new cljs.core.Keyword(null,"redo","redo",501190664),(function re_frame$undo$handler(_,p__21514){
var vec__21516 = p__21514;
var ___$1 = cljs.core.nth.call(null,vec__21516,(0),null);
var n = cljs.core.nth.call(null,vec__21516,(1),null);
if(cljs.core.not.call(null,re_frame.undo.redos_QMARK_.call(null))){
return re_frame.utils.warn.call(null,"re-frame: you did a (dispatch [:redo]), but there is nothing to redo.");
} else {
return re_frame.undo.redo_n.call(null,(function (){var or__16855__auto__ = n;
if(cljs.core.truth_(or__16855__auto__)){
return or__16855__auto__;
} else {
return (1);
}
})());
}
}));
re_frame.handlers.register_base.call(null,new cljs.core.Keyword(null,"purge-redos","purge-redos",1815721624),(function re_frame$undo$handler(_,___$1){
if(cljs.core.not.call(null,re_frame.undo.redos_QMARK_.call(null))){
return re_frame.utils.warn.call(null,"re-frame: you did a (dispatch [:purge-redos]), but there is nothing to redo.");
} else {
return re_frame.undo.clear_redos_BANG_.call(null);
}
}));

//# sourceMappingURL=undo.js.map