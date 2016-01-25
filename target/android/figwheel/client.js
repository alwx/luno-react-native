// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__26924 = cljs.core._EQ_;
var expr__26925 = (function (){var or__16841__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16841__auto__)){
return or__16841__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__26924.call(null,"true",expr__26925))){
return true;
} else {
if(cljs.core.truth_(pred__26924.call(null,"false",expr__26925))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__26925)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__17906__auto__ = [];
var len__17899__auto___26928 = arguments.length;
var i__17900__auto___26929 = (0);
while(true){
if((i__17900__auto___26929 < len__17899__auto___26928)){
args__17906__auto__.push((arguments[i__17900__auto___26929]));

var G__26930 = (i__17900__auto___26929 + (1));
i__17900__auto___26929 = G__26930;
continue;
} else {
}
break;
}

var argseq__17907__auto__ = ((((0) < args__17906__auto__.length))?(new cljs.core.IndexedSeq(args__17906__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__17907__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq26927){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26927));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26931){
var map__26934 = p__26931;
var map__26934__$1 = ((((!((map__26934 == null)))?((((map__26934.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26934.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26934):map__26934);
var message = cljs.core.get.call(null,map__26934__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26934__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16841__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16841__auto__)){
return or__16841__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16829__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16829__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16829__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__22648__auto___27096 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22648__auto___27096,ch){
return (function (){
var f__22649__auto__ = (function (){var switch__22536__auto__ = ((function (c__22648__auto___27096,ch){
return (function (state_27065){
var state_val_27066 = (state_27065[(1)]);
if((state_val_27066 === (7))){
var inst_27061 = (state_27065[(2)]);
var state_27065__$1 = state_27065;
var statearr_27067_27097 = state_27065__$1;
(statearr_27067_27097[(2)] = inst_27061);

(statearr_27067_27097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27066 === (1))){
var state_27065__$1 = state_27065;
var statearr_27068_27098 = state_27065__$1;
(statearr_27068_27098[(2)] = null);

(statearr_27068_27098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27066 === (4))){
var inst_27018 = (state_27065[(7)]);
var inst_27018__$1 = (state_27065[(2)]);
var state_27065__$1 = (function (){var statearr_27069 = state_27065;
(statearr_27069[(7)] = inst_27018__$1);

return statearr_27069;
})();
if(cljs.core.truth_(inst_27018__$1)){
var statearr_27070_27099 = state_27065__$1;
(statearr_27070_27099[(1)] = (5));

} else {
var statearr_27071_27100 = state_27065__$1;
(statearr_27071_27100[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27066 === (15))){
var inst_27025 = (state_27065[(8)]);
var inst_27040 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27025);
var inst_27041 = cljs.core.first.call(null,inst_27040);
var inst_27042 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_27041);
var inst_27043 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_27042)].join('');
var inst_27044 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_27043);
var state_27065__$1 = state_27065;
var statearr_27072_27101 = state_27065__$1;
(statearr_27072_27101[(2)] = inst_27044);

(statearr_27072_27101[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27066 === (13))){
var inst_27049 = (state_27065[(2)]);
var state_27065__$1 = state_27065;
var statearr_27073_27102 = state_27065__$1;
(statearr_27073_27102[(2)] = inst_27049);

(statearr_27073_27102[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27066 === (6))){
var state_27065__$1 = state_27065;
var statearr_27074_27103 = state_27065__$1;
(statearr_27074_27103[(2)] = null);

(statearr_27074_27103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27066 === (17))){
var inst_27047 = (state_27065[(2)]);
var state_27065__$1 = state_27065;
var statearr_27075_27104 = state_27065__$1;
(statearr_27075_27104[(2)] = inst_27047);

(statearr_27075_27104[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27066 === (3))){
var inst_27063 = (state_27065[(2)]);
var state_27065__$1 = state_27065;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27065__$1,inst_27063);
} else {
if((state_val_27066 === (12))){
var inst_27024 = (state_27065[(9)]);
var inst_27038 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_27024,opts);
var state_27065__$1 = state_27065;
if(cljs.core.truth_(inst_27038)){
var statearr_27076_27105 = state_27065__$1;
(statearr_27076_27105[(1)] = (15));

} else {
var statearr_27077_27106 = state_27065__$1;
(statearr_27077_27106[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27066 === (2))){
var state_27065__$1 = state_27065;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27065__$1,(4),ch);
} else {
if((state_val_27066 === (11))){
var inst_27025 = (state_27065[(8)]);
var inst_27030 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27031 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_27025);
var inst_27032 = cljs.core.async.timeout.call(null,(1000));
var inst_27033 = [inst_27031,inst_27032];
var inst_27034 = (new cljs.core.PersistentVector(null,2,(5),inst_27030,inst_27033,null));
var state_27065__$1 = state_27065;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27065__$1,(14),inst_27034);
} else {
if((state_val_27066 === (9))){
var inst_27025 = (state_27065[(8)]);
var inst_27051 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_27052 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27025);
var inst_27053 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27052);
var inst_27054 = [cljs.core.str("Not loading: "),cljs.core.str(inst_27053)].join('');
var inst_27055 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_27054);
var state_27065__$1 = (function (){var statearr_27078 = state_27065;
(statearr_27078[(10)] = inst_27051);

return statearr_27078;
})();
var statearr_27079_27107 = state_27065__$1;
(statearr_27079_27107[(2)] = inst_27055);

(statearr_27079_27107[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27066 === (5))){
var inst_27018 = (state_27065[(7)]);
var inst_27020 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_27021 = (new cljs.core.PersistentArrayMap(null,2,inst_27020,null));
var inst_27022 = (new cljs.core.PersistentHashSet(null,inst_27021,null));
var inst_27023 = figwheel.client.focus_msgs.call(null,inst_27022,inst_27018);
var inst_27024 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_27023);
var inst_27025 = cljs.core.first.call(null,inst_27023);
var inst_27026 = figwheel.client.autoload_QMARK_.call(null);
var state_27065__$1 = (function (){var statearr_27080 = state_27065;
(statearr_27080[(8)] = inst_27025);

(statearr_27080[(9)] = inst_27024);

return statearr_27080;
})();
if(cljs.core.truth_(inst_27026)){
var statearr_27081_27108 = state_27065__$1;
(statearr_27081_27108[(1)] = (8));

} else {
var statearr_27082_27109 = state_27065__$1;
(statearr_27082_27109[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27066 === (14))){
var inst_27036 = (state_27065[(2)]);
var state_27065__$1 = state_27065;
var statearr_27083_27110 = state_27065__$1;
(statearr_27083_27110[(2)] = inst_27036);

(statearr_27083_27110[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27066 === (16))){
var state_27065__$1 = state_27065;
var statearr_27084_27111 = state_27065__$1;
(statearr_27084_27111[(2)] = null);

(statearr_27084_27111[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27066 === (10))){
var inst_27057 = (state_27065[(2)]);
var state_27065__$1 = (function (){var statearr_27085 = state_27065;
(statearr_27085[(11)] = inst_27057);

return statearr_27085;
})();
var statearr_27086_27112 = state_27065__$1;
(statearr_27086_27112[(2)] = null);

(statearr_27086_27112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27066 === (8))){
var inst_27024 = (state_27065[(9)]);
var inst_27028 = figwheel.client.reload_file_state_QMARK_.call(null,inst_27024,opts);
var state_27065__$1 = state_27065;
if(cljs.core.truth_(inst_27028)){
var statearr_27087_27113 = state_27065__$1;
(statearr_27087_27113[(1)] = (11));

} else {
var statearr_27088_27114 = state_27065__$1;
(statearr_27088_27114[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22648__auto___27096,ch))
;
return ((function (switch__22536__auto__,c__22648__auto___27096,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22537__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22537__auto____0 = (function (){
var statearr_27092 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27092[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22537__auto__);

(statearr_27092[(1)] = (1));

return statearr_27092;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22537__auto____1 = (function (state_27065){
while(true){
var ret_value__22538__auto__ = (function (){try{while(true){
var result__22539__auto__ = switch__22536__auto__.call(null,state_27065);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22539__auto__;
}
break;
}
}catch (e27093){if((e27093 instanceof Object)){
var ex__22540__auto__ = e27093;
var statearr_27094_27115 = state_27065;
(statearr_27094_27115[(5)] = ex__22540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27116 = state_27065;
state_27065 = G__27116;
continue;
} else {
return ret_value__22538__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22537__auto__ = function(state_27065){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22537__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22537__auto____1.call(this,state_27065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22537__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22537__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22537__auto__;
})()
;})(switch__22536__auto__,c__22648__auto___27096,ch))
})();
var state__22650__auto__ = (function (){var statearr_27095 = f__22649__auto__.call(null);
(statearr_27095[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22648__auto___27096);

return statearr_27095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22650__auto__);
});})(c__22648__auto___27096,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__27117_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__27117_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_27124 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_27124){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_27122 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_27123 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_27123;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_27122;
}}catch (e27121){if((e27121 instanceof Error)){
var e = e27121;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_27124], null));
} else {
var e = e27121;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_27124))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__27125){
var map__27132 = p__27125;
var map__27132__$1 = ((((!((map__27132 == null)))?((((map__27132.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27132.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27132):map__27132);
var opts = map__27132__$1;
var build_id = cljs.core.get.call(null,map__27132__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__27132,map__27132__$1,opts,build_id){
return (function (p__27134){
var vec__27135 = p__27134;
var map__27136 = cljs.core.nth.call(null,vec__27135,(0),null);
var map__27136__$1 = ((((!((map__27136 == null)))?((((map__27136.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27136.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27136):map__27136);
var msg = map__27136__$1;
var msg_name = cljs.core.get.call(null,map__27136__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27135,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__27135,map__27136,map__27136__$1,msg,msg_name,_,map__27132,map__27132__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__27135,map__27136,map__27136__$1,msg,msg_name,_,map__27132,map__27132__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__27132,map__27132__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__27142){
var vec__27143 = p__27142;
var map__27144 = cljs.core.nth.call(null,vec__27143,(0),null);
var map__27144__$1 = ((((!((map__27144 == null)))?((((map__27144.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27144.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27144):map__27144);
var msg = map__27144__$1;
var msg_name = cljs.core.get.call(null,map__27144__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27143,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__27146){
var map__27156 = p__27146;
var map__27156__$1 = ((((!((map__27156 == null)))?((((map__27156.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27156.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27156):map__27156);
var on_compile_warning = cljs.core.get.call(null,map__27156__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__27156__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__27156,map__27156__$1,on_compile_warning,on_compile_fail){
return (function (p__27158){
var vec__27159 = p__27158;
var map__27160 = cljs.core.nth.call(null,vec__27159,(0),null);
var map__27160__$1 = ((((!((map__27160 == null)))?((((map__27160.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27160.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27160):map__27160);
var msg = map__27160__$1;
var msg_name = cljs.core.get.call(null,map__27160__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27159,(1));
var pred__27162 = cljs.core._EQ_;
var expr__27163 = msg_name;
if(cljs.core.truth_(pred__27162.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__27163))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__27162.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__27163))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__27156,map__27156__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22648__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22648__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22649__auto__ = (function (){var switch__22536__auto__ = ((function (c__22648__auto__,msg_hist,msg_names,msg){
return (function (state_27379){
var state_val_27380 = (state_27379[(1)]);
if((state_val_27380 === (7))){
var inst_27303 = (state_27379[(2)]);
var state_27379__$1 = state_27379;
if(cljs.core.truth_(inst_27303)){
var statearr_27381_27427 = state_27379__$1;
(statearr_27381_27427[(1)] = (8));

} else {
var statearr_27382_27428 = state_27379__$1;
(statearr_27382_27428[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27380 === (20))){
var inst_27373 = (state_27379[(2)]);
var state_27379__$1 = state_27379;
var statearr_27383_27429 = state_27379__$1;
(statearr_27383_27429[(2)] = inst_27373);

(statearr_27383_27429[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27380 === (27))){
var inst_27369 = (state_27379[(2)]);
var state_27379__$1 = state_27379;
var statearr_27384_27430 = state_27379__$1;
(statearr_27384_27430[(2)] = inst_27369);

(statearr_27384_27430[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27380 === (1))){
var inst_27296 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_27379__$1 = state_27379;
if(cljs.core.truth_(inst_27296)){
var statearr_27385_27431 = state_27379__$1;
(statearr_27385_27431[(1)] = (2));

} else {
var statearr_27386_27432 = state_27379__$1;
(statearr_27386_27432[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27380 === (24))){
var inst_27371 = (state_27379[(2)]);
var state_27379__$1 = state_27379;
var statearr_27387_27433 = state_27379__$1;
(statearr_27387_27433[(2)] = inst_27371);

(statearr_27387_27433[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27380 === (4))){
var inst_27377 = (state_27379[(2)]);
var state_27379__$1 = state_27379;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27379__$1,inst_27377);
} else {
if((state_val_27380 === (15))){
var inst_27375 = (state_27379[(2)]);
var state_27379__$1 = state_27379;
var statearr_27388_27434 = state_27379__$1;
(statearr_27388_27434[(2)] = inst_27375);

(statearr_27388_27434[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27380 === (21))){
var inst_27334 = (state_27379[(2)]);
var state_27379__$1 = state_27379;
var statearr_27389_27435 = state_27379__$1;
(statearr_27389_27435[(2)] = inst_27334);

(statearr_27389_27435[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27380 === (31))){
var inst_27358 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_27379__$1 = state_27379;
if(cljs.core.truth_(inst_27358)){
var statearr_27390_27436 = state_27379__$1;
(statearr_27390_27436[(1)] = (34));

} else {
var statearr_27391_27437 = state_27379__$1;
(statearr_27391_27437[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27380 === (32))){
var inst_27367 = (state_27379[(2)]);
var state_27379__$1 = state_27379;
var statearr_27392_27438 = state_27379__$1;
(statearr_27392_27438[(2)] = inst_27367);

(statearr_27392_27438[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27380 === (33))){
var inst_27356 = (state_27379[(2)]);
var state_27379__$1 = state_27379;
var statearr_27393_27439 = state_27379__$1;
(statearr_27393_27439[(2)] = inst_27356);

(statearr_27393_27439[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27380 === (13))){
var inst_27317 = figwheel.client.heads_up.clear.call(null);
var state_27379__$1 = state_27379;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27379__$1,(16),inst_27317);
} else {
if((state_val_27380 === (22))){
var inst_27338 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27339 = figwheel.client.heads_up.append_message.call(null,inst_27338);
var state_27379__$1 = state_27379;
var statearr_27394_27440 = state_27379__$1;
(statearr_27394_27440[(2)] = inst_27339);

(statearr_27394_27440[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27380 === (36))){
var inst_27365 = (state_27379[(2)]);
var state_27379__$1 = state_27379;
var statearr_27395_27441 = state_27379__$1;
(statearr_27395_27441[(2)] = inst_27365);

(statearr_27395_27441[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27380 === (29))){
var inst_27349 = (state_27379[(2)]);
var state_27379__$1 = state_27379;
var statearr_27396_27442 = state_27379__$1;
(statearr_27396_27442[(2)] = inst_27349);

(statearr_27396_27442[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27380 === (6))){
var inst_27298 = (state_27379[(7)]);
var state_27379__$1 = state_27379;
var statearr_27397_27443 = state_27379__$1;
(statearr_27397_27443[(2)] = inst_27298);

(statearr_27397_27443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27380 === (28))){
var inst_27345 = (state_27379[(2)]);
var inst_27346 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27347 = figwheel.client.heads_up.display_warning.call(null,inst_27346);
var state_27379__$1 = (function (){var statearr_27398 = state_27379;
(statearr_27398[(8)] = inst_27345);

return statearr_27398;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27379__$1,(29),inst_27347);
} else {
if((state_val_27380 === (25))){
var inst_27343 = figwheel.client.heads_up.clear.call(null);
var state_27379__$1 = state_27379;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27379__$1,(28),inst_27343);
} else {
if((state_val_27380 === (34))){
var inst_27360 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27379__$1 = state_27379;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27379__$1,(37),inst_27360);
} else {
if((state_val_27380 === (17))){
var inst_27325 = (state_27379[(2)]);
var state_27379__$1 = state_27379;
var statearr_27399_27444 = state_27379__$1;
(statearr_27399_27444[(2)] = inst_27325);

(statearr_27399_27444[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27380 === (3))){
var inst_27315 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_27379__$1 = state_27379;
if(cljs.core.truth_(inst_27315)){
var statearr_27400_27445 = state_27379__$1;
(statearr_27400_27445[(1)] = (13));

} else {
var statearr_27401_27446 = state_27379__$1;
(statearr_27401_27446[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27380 === (12))){
var inst_27311 = (state_27379[(2)]);
var state_27379__$1 = state_27379;
var statearr_27402_27447 = state_27379__$1;
(statearr_27402_27447[(2)] = inst_27311);

(statearr_27402_27447[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27380 === (2))){
var inst_27298 = (state_27379[(7)]);
var inst_27298__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_27379__$1 = (function (){var statearr_27403 = state_27379;
(statearr_27403[(7)] = inst_27298__$1);

return statearr_27403;
})();
if(cljs.core.truth_(inst_27298__$1)){
var statearr_27404_27448 = state_27379__$1;
(statearr_27404_27448[(1)] = (5));

} else {
var statearr_27405_27449 = state_27379__$1;
(statearr_27405_27449[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27380 === (23))){
var inst_27341 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_27379__$1 = state_27379;
if(cljs.core.truth_(inst_27341)){
var statearr_27406_27450 = state_27379__$1;
(statearr_27406_27450[(1)] = (25));

} else {
var statearr_27407_27451 = state_27379__$1;
(statearr_27407_27451[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27380 === (35))){
var state_27379__$1 = state_27379;
var statearr_27408_27452 = state_27379__$1;
(statearr_27408_27452[(2)] = null);

(statearr_27408_27452[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27380 === (19))){
var inst_27336 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_27379__$1 = state_27379;
if(cljs.core.truth_(inst_27336)){
var statearr_27409_27453 = state_27379__$1;
(statearr_27409_27453[(1)] = (22));

} else {
var statearr_27410_27454 = state_27379__$1;
(statearr_27410_27454[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27380 === (11))){
var inst_27307 = (state_27379[(2)]);
var state_27379__$1 = state_27379;
var statearr_27411_27455 = state_27379__$1;
(statearr_27411_27455[(2)] = inst_27307);

(statearr_27411_27455[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27380 === (9))){
var inst_27309 = figwheel.client.heads_up.clear.call(null);
var state_27379__$1 = state_27379;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27379__$1,(12),inst_27309);
} else {
if((state_val_27380 === (5))){
var inst_27300 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_27379__$1 = state_27379;
var statearr_27412_27456 = state_27379__$1;
(statearr_27412_27456[(2)] = inst_27300);

(statearr_27412_27456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27380 === (14))){
var inst_27327 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_27379__$1 = state_27379;
if(cljs.core.truth_(inst_27327)){
var statearr_27413_27457 = state_27379__$1;
(statearr_27413_27457[(1)] = (18));

} else {
var statearr_27414_27458 = state_27379__$1;
(statearr_27414_27458[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27380 === (26))){
var inst_27351 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_27379__$1 = state_27379;
if(cljs.core.truth_(inst_27351)){
var statearr_27415_27459 = state_27379__$1;
(statearr_27415_27459[(1)] = (30));

} else {
var statearr_27416_27460 = state_27379__$1;
(statearr_27416_27460[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27380 === (16))){
var inst_27319 = (state_27379[(2)]);
var inst_27320 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27321 = figwheel.client.format_messages.call(null,inst_27320);
var inst_27322 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27323 = figwheel.client.heads_up.display_error.call(null,inst_27321,inst_27322);
var state_27379__$1 = (function (){var statearr_27417 = state_27379;
(statearr_27417[(9)] = inst_27319);

return statearr_27417;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27379__$1,(17),inst_27323);
} else {
if((state_val_27380 === (30))){
var inst_27353 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27354 = figwheel.client.heads_up.display_warning.call(null,inst_27353);
var state_27379__$1 = state_27379;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27379__$1,(33),inst_27354);
} else {
if((state_val_27380 === (10))){
var inst_27313 = (state_27379[(2)]);
var state_27379__$1 = state_27379;
var statearr_27418_27461 = state_27379__$1;
(statearr_27418_27461[(2)] = inst_27313);

(statearr_27418_27461[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27380 === (18))){
var inst_27329 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27330 = figwheel.client.format_messages.call(null,inst_27329);
var inst_27331 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27332 = figwheel.client.heads_up.display_error.call(null,inst_27330,inst_27331);
var state_27379__$1 = state_27379;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27379__$1,(21),inst_27332);
} else {
if((state_val_27380 === (37))){
var inst_27362 = (state_27379[(2)]);
var state_27379__$1 = state_27379;
var statearr_27419_27462 = state_27379__$1;
(statearr_27419_27462[(2)] = inst_27362);

(statearr_27419_27462[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27380 === (8))){
var inst_27305 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27379__$1 = state_27379;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27379__$1,(11),inst_27305);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22648__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22536__auto__,c__22648__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22537__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22537__auto____0 = (function (){
var statearr_27423 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27423[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22537__auto__);

(statearr_27423[(1)] = (1));

return statearr_27423;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22537__auto____1 = (function (state_27379){
while(true){
var ret_value__22538__auto__ = (function (){try{while(true){
var result__22539__auto__ = switch__22536__auto__.call(null,state_27379);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22539__auto__;
}
break;
}
}catch (e27424){if((e27424 instanceof Object)){
var ex__22540__auto__ = e27424;
var statearr_27425_27463 = state_27379;
(statearr_27425_27463[(5)] = ex__22540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27379);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27464 = state_27379;
state_27379 = G__27464;
continue;
} else {
return ret_value__22538__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22537__auto__ = function(state_27379){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22537__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22537__auto____1.call(this,state_27379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22537__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22537__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22537__auto__;
})()
;})(switch__22536__auto__,c__22648__auto__,msg_hist,msg_names,msg))
})();
var state__22650__auto__ = (function (){var statearr_27426 = f__22649__auto__.call(null);
(statearr_27426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22648__auto__);

return statearr_27426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22650__auto__);
});})(c__22648__auto__,msg_hist,msg_names,msg))
);

return c__22648__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22648__auto___27527 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22648__auto___27527,ch){
return (function (){
var f__22649__auto__ = (function (){var switch__22536__auto__ = ((function (c__22648__auto___27527,ch){
return (function (state_27510){
var state_val_27511 = (state_27510[(1)]);
if((state_val_27511 === (1))){
var state_27510__$1 = state_27510;
var statearr_27512_27528 = state_27510__$1;
(statearr_27512_27528[(2)] = null);

(statearr_27512_27528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (2))){
var state_27510__$1 = state_27510;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27510__$1,(4),ch);
} else {
if((state_val_27511 === (3))){
var inst_27508 = (state_27510[(2)]);
var state_27510__$1 = state_27510;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27510__$1,inst_27508);
} else {
if((state_val_27511 === (4))){
var inst_27498 = (state_27510[(7)]);
var inst_27498__$1 = (state_27510[(2)]);
var state_27510__$1 = (function (){var statearr_27513 = state_27510;
(statearr_27513[(7)] = inst_27498__$1);

return statearr_27513;
})();
if(cljs.core.truth_(inst_27498__$1)){
var statearr_27514_27529 = state_27510__$1;
(statearr_27514_27529[(1)] = (5));

} else {
var statearr_27515_27530 = state_27510__$1;
(statearr_27515_27530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (5))){
var inst_27498 = (state_27510[(7)]);
var inst_27500 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_27498);
var state_27510__$1 = state_27510;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27510__$1,(8),inst_27500);
} else {
if((state_val_27511 === (6))){
var state_27510__$1 = state_27510;
var statearr_27516_27531 = state_27510__$1;
(statearr_27516_27531[(2)] = null);

(statearr_27516_27531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (7))){
var inst_27506 = (state_27510[(2)]);
var state_27510__$1 = state_27510;
var statearr_27517_27532 = state_27510__$1;
(statearr_27517_27532[(2)] = inst_27506);

(statearr_27517_27532[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (8))){
var inst_27502 = (state_27510[(2)]);
var state_27510__$1 = (function (){var statearr_27518 = state_27510;
(statearr_27518[(8)] = inst_27502);

return statearr_27518;
})();
var statearr_27519_27533 = state_27510__$1;
(statearr_27519_27533[(2)] = null);

(statearr_27519_27533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__22648__auto___27527,ch))
;
return ((function (switch__22536__auto__,c__22648__auto___27527,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22537__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22537__auto____0 = (function (){
var statearr_27523 = [null,null,null,null,null,null,null,null,null];
(statearr_27523[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22537__auto__);

(statearr_27523[(1)] = (1));

return statearr_27523;
});
var figwheel$client$heads_up_plugin_$_state_machine__22537__auto____1 = (function (state_27510){
while(true){
var ret_value__22538__auto__ = (function (){try{while(true){
var result__22539__auto__ = switch__22536__auto__.call(null,state_27510);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22539__auto__;
}
break;
}
}catch (e27524){if((e27524 instanceof Object)){
var ex__22540__auto__ = e27524;
var statearr_27525_27534 = state_27510;
(statearr_27525_27534[(5)] = ex__22540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27510);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27524;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27535 = state_27510;
state_27510 = G__27535;
continue;
} else {
return ret_value__22538__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22537__auto__ = function(state_27510){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22537__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22537__auto____1.call(this,state_27510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22537__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22537__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22537__auto__;
})()
;})(switch__22536__auto__,c__22648__auto___27527,ch))
})();
var state__22650__auto__ = (function (){var statearr_27526 = f__22649__auto__.call(null);
(statearr_27526[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22648__auto___27527);

return statearr_27526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22650__auto__);
});})(c__22648__auto___27527,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22648__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22648__auto__){
return (function (){
var f__22649__auto__ = (function (){var switch__22536__auto__ = ((function (c__22648__auto__){
return (function (state_27556){
var state_val_27557 = (state_27556[(1)]);
if((state_val_27557 === (1))){
var inst_27551 = cljs.core.async.timeout.call(null,(3000));
var state_27556__$1 = state_27556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27556__$1,(2),inst_27551);
} else {
if((state_val_27557 === (2))){
var inst_27553 = (state_27556[(2)]);
var inst_27554 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_27556__$1 = (function (){var statearr_27558 = state_27556;
(statearr_27558[(7)] = inst_27553);

return statearr_27558;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27556__$1,inst_27554);
} else {
return null;
}
}
});})(c__22648__auto__))
;
return ((function (switch__22536__auto__,c__22648__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22537__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22537__auto____0 = (function (){
var statearr_27562 = [null,null,null,null,null,null,null,null];
(statearr_27562[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22537__auto__);

(statearr_27562[(1)] = (1));

return statearr_27562;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22537__auto____1 = (function (state_27556){
while(true){
var ret_value__22538__auto__ = (function (){try{while(true){
var result__22539__auto__ = switch__22536__auto__.call(null,state_27556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22539__auto__;
}
break;
}
}catch (e27563){if((e27563 instanceof Object)){
var ex__22540__auto__ = e27563;
var statearr_27564_27566 = state_27556;
(statearr_27564_27566[(5)] = ex__22540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27563;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27567 = state_27556;
state_27556 = G__27567;
continue;
} else {
return ret_value__22538__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22537__auto__ = function(state_27556){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22537__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22537__auto____1.call(this,state_27556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22537__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22537__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22537__auto__;
})()
;})(switch__22536__auto__,c__22648__auto__))
})();
var state__22650__auto__ = (function (){var statearr_27565 = f__22649__auto__.call(null);
(statearr_27565[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22648__auto__);

return statearr_27565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22650__auto__);
});})(c__22648__auto__))
);

return c__22648__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__27568){
var map__27575 = p__27568;
var map__27575__$1 = ((((!((map__27575 == null)))?((((map__27575.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27575.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27575):map__27575);
var ed = map__27575__$1;
var formatted_exception = cljs.core.get.call(null,map__27575__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__27575__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__27575__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__27577_27581 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__27578_27582 = null;
var count__27579_27583 = (0);
var i__27580_27584 = (0);
while(true){
if((i__27580_27584 < count__27579_27583)){
var msg_27585 = cljs.core._nth.call(null,chunk__27578_27582,i__27580_27584);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27585);

var G__27586 = seq__27577_27581;
var G__27587 = chunk__27578_27582;
var G__27588 = count__27579_27583;
var G__27589 = (i__27580_27584 + (1));
seq__27577_27581 = G__27586;
chunk__27578_27582 = G__27587;
count__27579_27583 = G__27588;
i__27580_27584 = G__27589;
continue;
} else {
var temp__4425__auto___27590 = cljs.core.seq.call(null,seq__27577_27581);
if(temp__4425__auto___27590){
var seq__27577_27591__$1 = temp__4425__auto___27590;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27577_27591__$1)){
var c__17644__auto___27592 = cljs.core.chunk_first.call(null,seq__27577_27591__$1);
var G__27593 = cljs.core.chunk_rest.call(null,seq__27577_27591__$1);
var G__27594 = c__17644__auto___27592;
var G__27595 = cljs.core.count.call(null,c__17644__auto___27592);
var G__27596 = (0);
seq__27577_27581 = G__27593;
chunk__27578_27582 = G__27594;
count__27579_27583 = G__27595;
i__27580_27584 = G__27596;
continue;
} else {
var msg_27597 = cljs.core.first.call(null,seq__27577_27591__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27597);

var G__27598 = cljs.core.next.call(null,seq__27577_27591__$1);
var G__27599 = null;
var G__27600 = (0);
var G__27601 = (0);
seq__27577_27581 = G__27598;
chunk__27578_27582 = G__27599;
count__27579_27583 = G__27600;
i__27580_27584 = G__27601;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__27602){
var map__27605 = p__27602;
var map__27605__$1 = ((((!((map__27605 == null)))?((((map__27605.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27605.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27605):map__27605);
var w = map__27605__$1;
var message = cljs.core.get.call(null,map__27605__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16829__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16829__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16829__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__27613 = cljs.core.seq.call(null,plugins);
var chunk__27614 = null;
var count__27615 = (0);
var i__27616 = (0);
while(true){
if((i__27616 < count__27615)){
var vec__27617 = cljs.core._nth.call(null,chunk__27614,i__27616);
var k = cljs.core.nth.call(null,vec__27617,(0),null);
var plugin = cljs.core.nth.call(null,vec__27617,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27619 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27613,chunk__27614,count__27615,i__27616,pl_27619,vec__27617,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_27619.call(null,msg_hist);
});})(seq__27613,chunk__27614,count__27615,i__27616,pl_27619,vec__27617,k,plugin))
);
} else {
}

var G__27620 = seq__27613;
var G__27621 = chunk__27614;
var G__27622 = count__27615;
var G__27623 = (i__27616 + (1));
seq__27613 = G__27620;
chunk__27614 = G__27621;
count__27615 = G__27622;
i__27616 = G__27623;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27613);
if(temp__4425__auto__){
var seq__27613__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27613__$1)){
var c__17644__auto__ = cljs.core.chunk_first.call(null,seq__27613__$1);
var G__27624 = cljs.core.chunk_rest.call(null,seq__27613__$1);
var G__27625 = c__17644__auto__;
var G__27626 = cljs.core.count.call(null,c__17644__auto__);
var G__27627 = (0);
seq__27613 = G__27624;
chunk__27614 = G__27625;
count__27615 = G__27626;
i__27616 = G__27627;
continue;
} else {
var vec__27618 = cljs.core.first.call(null,seq__27613__$1);
var k = cljs.core.nth.call(null,vec__27618,(0),null);
var plugin = cljs.core.nth.call(null,vec__27618,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27628 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27613,chunk__27614,count__27615,i__27616,pl_27628,vec__27618,k,plugin,seq__27613__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_27628.call(null,msg_hist);
});})(seq__27613,chunk__27614,count__27615,i__27616,pl_27628,vec__27618,k,plugin,seq__27613__$1,temp__4425__auto__))
);
} else {
}

var G__27629 = cljs.core.next.call(null,seq__27613__$1);
var G__27630 = null;
var G__27631 = (0);
var G__27632 = (0);
seq__27613 = G__27629;
chunk__27614 = G__27630;
count__27615 = G__27631;
i__27616 = G__27632;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args27633 = [];
var len__17899__auto___27636 = arguments.length;
var i__17900__auto___27637 = (0);
while(true){
if((i__17900__auto___27637 < len__17899__auto___27636)){
args27633.push((arguments[i__17900__auto___27637]));

var G__27638 = (i__17900__auto___27637 + (1));
i__17900__auto___27637 = G__27638;
continue;
} else {
}
break;
}

var G__27635 = args27633.length;
switch (G__27635) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27633.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17906__auto__ = [];
var len__17899__auto___27644 = arguments.length;
var i__17900__auto___27645 = (0);
while(true){
if((i__17900__auto___27645 < len__17899__auto___27644)){
args__17906__auto__.push((arguments[i__17900__auto___27645]));

var G__27646 = (i__17900__auto___27645 + (1));
i__17900__auto___27645 = G__27646;
continue;
} else {
}
break;
}

var argseq__17907__auto__ = ((((0) < args__17906__auto__.length))?(new cljs.core.IndexedSeq(args__17906__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17907__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__27641){
var map__27642 = p__27641;
var map__27642__$1 = ((((!((map__27642 == null)))?((((map__27642.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27642.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27642):map__27642);
var opts = map__27642__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq27640){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27640));
});

//# sourceMappingURL=client.js.map