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
var pred__26938 = cljs.core._EQ_;
var expr__26939 = (function (){var or__16855__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16855__auto__)){
return or__16855__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__26938.call(null,"true",expr__26939))){
return true;
} else {
if(cljs.core.truth_(pred__26938.call(null,"false",expr__26939))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__26939)].join('')));
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
var args__17920__auto__ = [];
var len__17913__auto___26942 = arguments.length;
var i__17914__auto___26943 = (0);
while(true){
if((i__17914__auto___26943 < len__17913__auto___26942)){
args__17920__auto__.push((arguments[i__17914__auto___26943]));

var G__26944 = (i__17914__auto___26943 + (1));
i__17914__auto___26943 = G__26944;
continue;
} else {
}
break;
}

var argseq__17921__auto__ = ((((0) < args__17920__auto__.length))?(new cljs.core.IndexedSeq(args__17920__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__17921__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq26941){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26941));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26945){
var map__26948 = p__26945;
var map__26948__$1 = ((((!((map__26948 == null)))?((((map__26948.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26948.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26948):map__26948);
var message = cljs.core.get.call(null,map__26948__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26948__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16855__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16855__auto__)){
return or__16855__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16843__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16843__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16843__auto__;
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
var c__22662__auto___27110 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22662__auto___27110,ch){
return (function (){
var f__22663__auto__ = (function (){var switch__22550__auto__ = ((function (c__22662__auto___27110,ch){
return (function (state_27079){
var state_val_27080 = (state_27079[(1)]);
if((state_val_27080 === (7))){
var inst_27075 = (state_27079[(2)]);
var state_27079__$1 = state_27079;
var statearr_27081_27111 = state_27079__$1;
(statearr_27081_27111[(2)] = inst_27075);

(statearr_27081_27111[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27080 === (1))){
var state_27079__$1 = state_27079;
var statearr_27082_27112 = state_27079__$1;
(statearr_27082_27112[(2)] = null);

(statearr_27082_27112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27080 === (4))){
var inst_27032 = (state_27079[(7)]);
var inst_27032__$1 = (state_27079[(2)]);
var state_27079__$1 = (function (){var statearr_27083 = state_27079;
(statearr_27083[(7)] = inst_27032__$1);

return statearr_27083;
})();
if(cljs.core.truth_(inst_27032__$1)){
var statearr_27084_27113 = state_27079__$1;
(statearr_27084_27113[(1)] = (5));

} else {
var statearr_27085_27114 = state_27079__$1;
(statearr_27085_27114[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27080 === (15))){
var inst_27039 = (state_27079[(8)]);
var inst_27054 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27039);
var inst_27055 = cljs.core.first.call(null,inst_27054);
var inst_27056 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_27055);
var inst_27057 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_27056)].join('');
var inst_27058 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_27057);
var state_27079__$1 = state_27079;
var statearr_27086_27115 = state_27079__$1;
(statearr_27086_27115[(2)] = inst_27058);

(statearr_27086_27115[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27080 === (13))){
var inst_27063 = (state_27079[(2)]);
var state_27079__$1 = state_27079;
var statearr_27087_27116 = state_27079__$1;
(statearr_27087_27116[(2)] = inst_27063);

(statearr_27087_27116[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27080 === (6))){
var state_27079__$1 = state_27079;
var statearr_27088_27117 = state_27079__$1;
(statearr_27088_27117[(2)] = null);

(statearr_27088_27117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27080 === (17))){
var inst_27061 = (state_27079[(2)]);
var state_27079__$1 = state_27079;
var statearr_27089_27118 = state_27079__$1;
(statearr_27089_27118[(2)] = inst_27061);

(statearr_27089_27118[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27080 === (3))){
var inst_27077 = (state_27079[(2)]);
var state_27079__$1 = state_27079;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27079__$1,inst_27077);
} else {
if((state_val_27080 === (12))){
var inst_27038 = (state_27079[(9)]);
var inst_27052 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_27038,opts);
var state_27079__$1 = state_27079;
if(cljs.core.truth_(inst_27052)){
var statearr_27090_27119 = state_27079__$1;
(statearr_27090_27119[(1)] = (15));

} else {
var statearr_27091_27120 = state_27079__$1;
(statearr_27091_27120[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27080 === (2))){
var state_27079__$1 = state_27079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27079__$1,(4),ch);
} else {
if((state_val_27080 === (11))){
var inst_27039 = (state_27079[(8)]);
var inst_27044 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27045 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_27039);
var inst_27046 = cljs.core.async.timeout.call(null,(1000));
var inst_27047 = [inst_27045,inst_27046];
var inst_27048 = (new cljs.core.PersistentVector(null,2,(5),inst_27044,inst_27047,null));
var state_27079__$1 = state_27079;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27079__$1,(14),inst_27048);
} else {
if((state_val_27080 === (9))){
var inst_27039 = (state_27079[(8)]);
var inst_27065 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_27066 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27039);
var inst_27067 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27066);
var inst_27068 = [cljs.core.str("Not loading: "),cljs.core.str(inst_27067)].join('');
var inst_27069 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_27068);
var state_27079__$1 = (function (){var statearr_27092 = state_27079;
(statearr_27092[(10)] = inst_27065);

return statearr_27092;
})();
var statearr_27093_27121 = state_27079__$1;
(statearr_27093_27121[(2)] = inst_27069);

(statearr_27093_27121[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27080 === (5))){
var inst_27032 = (state_27079[(7)]);
var inst_27034 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_27035 = (new cljs.core.PersistentArrayMap(null,2,inst_27034,null));
var inst_27036 = (new cljs.core.PersistentHashSet(null,inst_27035,null));
var inst_27037 = figwheel.client.focus_msgs.call(null,inst_27036,inst_27032);
var inst_27038 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_27037);
var inst_27039 = cljs.core.first.call(null,inst_27037);
var inst_27040 = figwheel.client.autoload_QMARK_.call(null);
var state_27079__$1 = (function (){var statearr_27094 = state_27079;
(statearr_27094[(8)] = inst_27039);

(statearr_27094[(9)] = inst_27038);

return statearr_27094;
})();
if(cljs.core.truth_(inst_27040)){
var statearr_27095_27122 = state_27079__$1;
(statearr_27095_27122[(1)] = (8));

} else {
var statearr_27096_27123 = state_27079__$1;
(statearr_27096_27123[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27080 === (14))){
var inst_27050 = (state_27079[(2)]);
var state_27079__$1 = state_27079;
var statearr_27097_27124 = state_27079__$1;
(statearr_27097_27124[(2)] = inst_27050);

(statearr_27097_27124[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27080 === (16))){
var state_27079__$1 = state_27079;
var statearr_27098_27125 = state_27079__$1;
(statearr_27098_27125[(2)] = null);

(statearr_27098_27125[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27080 === (10))){
var inst_27071 = (state_27079[(2)]);
var state_27079__$1 = (function (){var statearr_27099 = state_27079;
(statearr_27099[(11)] = inst_27071);

return statearr_27099;
})();
var statearr_27100_27126 = state_27079__$1;
(statearr_27100_27126[(2)] = null);

(statearr_27100_27126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27080 === (8))){
var inst_27038 = (state_27079[(9)]);
var inst_27042 = figwheel.client.reload_file_state_QMARK_.call(null,inst_27038,opts);
var state_27079__$1 = state_27079;
if(cljs.core.truth_(inst_27042)){
var statearr_27101_27127 = state_27079__$1;
(statearr_27101_27127[(1)] = (11));

} else {
var statearr_27102_27128 = state_27079__$1;
(statearr_27102_27128[(1)] = (12));

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
});})(c__22662__auto___27110,ch))
;
return ((function (switch__22550__auto__,c__22662__auto___27110,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22551__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22551__auto____0 = (function (){
var statearr_27106 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27106[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22551__auto__);

(statearr_27106[(1)] = (1));

return statearr_27106;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22551__auto____1 = (function (state_27079){
while(true){
var ret_value__22552__auto__ = (function (){try{while(true){
var result__22553__auto__ = switch__22550__auto__.call(null,state_27079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22553__auto__;
}
break;
}
}catch (e27107){if((e27107 instanceof Object)){
var ex__22554__auto__ = e27107;
var statearr_27108_27129 = state_27079;
(statearr_27108_27129[(5)] = ex__22554__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27130 = state_27079;
state_27079 = G__27130;
continue;
} else {
return ret_value__22552__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22551__auto__ = function(state_27079){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22551__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22551__auto____1.call(this,state_27079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22551__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22551__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22551__auto__;
})()
;})(switch__22550__auto__,c__22662__auto___27110,ch))
})();
var state__22664__auto__ = (function (){var statearr_27109 = f__22663__auto__.call(null);
(statearr_27109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22662__auto___27110);

return statearr_27109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22664__auto__);
});})(c__22662__auto___27110,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__27131_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__27131_SHARP_));
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
var base_path_27138 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_27138){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_27136 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_27137 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_27137;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_27136;
}}catch (e27135){if((e27135 instanceof Error)){
var e = e27135;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_27138], null));
} else {
var e = e27135;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_27138))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__27139){
var map__27146 = p__27139;
var map__27146__$1 = ((((!((map__27146 == null)))?((((map__27146.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27146.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27146):map__27146);
var opts = map__27146__$1;
var build_id = cljs.core.get.call(null,map__27146__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__27146,map__27146__$1,opts,build_id){
return (function (p__27148){
var vec__27149 = p__27148;
var map__27150 = cljs.core.nth.call(null,vec__27149,(0),null);
var map__27150__$1 = ((((!((map__27150 == null)))?((((map__27150.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27150.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27150):map__27150);
var msg = map__27150__$1;
var msg_name = cljs.core.get.call(null,map__27150__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27149,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__27149,map__27150,map__27150__$1,msg,msg_name,_,map__27146,map__27146__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__27149,map__27150,map__27150__$1,msg,msg_name,_,map__27146,map__27146__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__27146,map__27146__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__27156){
var vec__27157 = p__27156;
var map__27158 = cljs.core.nth.call(null,vec__27157,(0),null);
var map__27158__$1 = ((((!((map__27158 == null)))?((((map__27158.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27158.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27158):map__27158);
var msg = map__27158__$1;
var msg_name = cljs.core.get.call(null,map__27158__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27157,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__27160){
var map__27170 = p__27160;
var map__27170__$1 = ((((!((map__27170 == null)))?((((map__27170.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27170.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27170):map__27170);
var on_compile_warning = cljs.core.get.call(null,map__27170__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__27170__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__27170,map__27170__$1,on_compile_warning,on_compile_fail){
return (function (p__27172){
var vec__27173 = p__27172;
var map__27174 = cljs.core.nth.call(null,vec__27173,(0),null);
var map__27174__$1 = ((((!((map__27174 == null)))?((((map__27174.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27174.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27174):map__27174);
var msg = map__27174__$1;
var msg_name = cljs.core.get.call(null,map__27174__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27173,(1));
var pred__27176 = cljs.core._EQ_;
var expr__27177 = msg_name;
if(cljs.core.truth_(pred__27176.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__27177))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__27176.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__27177))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__27170,map__27170__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22662__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22662__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22663__auto__ = (function (){var switch__22550__auto__ = ((function (c__22662__auto__,msg_hist,msg_names,msg){
return (function (state_27393){
var state_val_27394 = (state_27393[(1)]);
if((state_val_27394 === (7))){
var inst_27317 = (state_27393[(2)]);
var state_27393__$1 = state_27393;
if(cljs.core.truth_(inst_27317)){
var statearr_27395_27441 = state_27393__$1;
(statearr_27395_27441[(1)] = (8));

} else {
var statearr_27396_27442 = state_27393__$1;
(statearr_27396_27442[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (20))){
var inst_27387 = (state_27393[(2)]);
var state_27393__$1 = state_27393;
var statearr_27397_27443 = state_27393__$1;
(statearr_27397_27443[(2)] = inst_27387);

(statearr_27397_27443[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (27))){
var inst_27383 = (state_27393[(2)]);
var state_27393__$1 = state_27393;
var statearr_27398_27444 = state_27393__$1;
(statearr_27398_27444[(2)] = inst_27383);

(statearr_27398_27444[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (1))){
var inst_27310 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_27393__$1 = state_27393;
if(cljs.core.truth_(inst_27310)){
var statearr_27399_27445 = state_27393__$1;
(statearr_27399_27445[(1)] = (2));

} else {
var statearr_27400_27446 = state_27393__$1;
(statearr_27400_27446[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (24))){
var inst_27385 = (state_27393[(2)]);
var state_27393__$1 = state_27393;
var statearr_27401_27447 = state_27393__$1;
(statearr_27401_27447[(2)] = inst_27385);

(statearr_27401_27447[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (4))){
var inst_27391 = (state_27393[(2)]);
var state_27393__$1 = state_27393;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27393__$1,inst_27391);
} else {
if((state_val_27394 === (15))){
var inst_27389 = (state_27393[(2)]);
var state_27393__$1 = state_27393;
var statearr_27402_27448 = state_27393__$1;
(statearr_27402_27448[(2)] = inst_27389);

(statearr_27402_27448[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (21))){
var inst_27348 = (state_27393[(2)]);
var state_27393__$1 = state_27393;
var statearr_27403_27449 = state_27393__$1;
(statearr_27403_27449[(2)] = inst_27348);

(statearr_27403_27449[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (31))){
var inst_27372 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_27393__$1 = state_27393;
if(cljs.core.truth_(inst_27372)){
var statearr_27404_27450 = state_27393__$1;
(statearr_27404_27450[(1)] = (34));

} else {
var statearr_27405_27451 = state_27393__$1;
(statearr_27405_27451[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (32))){
var inst_27381 = (state_27393[(2)]);
var state_27393__$1 = state_27393;
var statearr_27406_27452 = state_27393__$1;
(statearr_27406_27452[(2)] = inst_27381);

(statearr_27406_27452[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (33))){
var inst_27370 = (state_27393[(2)]);
var state_27393__$1 = state_27393;
var statearr_27407_27453 = state_27393__$1;
(statearr_27407_27453[(2)] = inst_27370);

(statearr_27407_27453[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (13))){
var inst_27331 = figwheel.client.heads_up.clear.call(null);
var state_27393__$1 = state_27393;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27393__$1,(16),inst_27331);
} else {
if((state_val_27394 === (22))){
var inst_27352 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27353 = figwheel.client.heads_up.append_message.call(null,inst_27352);
var state_27393__$1 = state_27393;
var statearr_27408_27454 = state_27393__$1;
(statearr_27408_27454[(2)] = inst_27353);

(statearr_27408_27454[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (36))){
var inst_27379 = (state_27393[(2)]);
var state_27393__$1 = state_27393;
var statearr_27409_27455 = state_27393__$1;
(statearr_27409_27455[(2)] = inst_27379);

(statearr_27409_27455[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (29))){
var inst_27363 = (state_27393[(2)]);
var state_27393__$1 = state_27393;
var statearr_27410_27456 = state_27393__$1;
(statearr_27410_27456[(2)] = inst_27363);

(statearr_27410_27456[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (6))){
var inst_27312 = (state_27393[(7)]);
var state_27393__$1 = state_27393;
var statearr_27411_27457 = state_27393__$1;
(statearr_27411_27457[(2)] = inst_27312);

(statearr_27411_27457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (28))){
var inst_27359 = (state_27393[(2)]);
var inst_27360 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27361 = figwheel.client.heads_up.display_warning.call(null,inst_27360);
var state_27393__$1 = (function (){var statearr_27412 = state_27393;
(statearr_27412[(8)] = inst_27359);

return statearr_27412;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27393__$1,(29),inst_27361);
} else {
if((state_val_27394 === (25))){
var inst_27357 = figwheel.client.heads_up.clear.call(null);
var state_27393__$1 = state_27393;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27393__$1,(28),inst_27357);
} else {
if((state_val_27394 === (34))){
var inst_27374 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27393__$1 = state_27393;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27393__$1,(37),inst_27374);
} else {
if((state_val_27394 === (17))){
var inst_27339 = (state_27393[(2)]);
var state_27393__$1 = state_27393;
var statearr_27413_27458 = state_27393__$1;
(statearr_27413_27458[(2)] = inst_27339);

(statearr_27413_27458[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (3))){
var inst_27329 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_27393__$1 = state_27393;
if(cljs.core.truth_(inst_27329)){
var statearr_27414_27459 = state_27393__$1;
(statearr_27414_27459[(1)] = (13));

} else {
var statearr_27415_27460 = state_27393__$1;
(statearr_27415_27460[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (12))){
var inst_27325 = (state_27393[(2)]);
var state_27393__$1 = state_27393;
var statearr_27416_27461 = state_27393__$1;
(statearr_27416_27461[(2)] = inst_27325);

(statearr_27416_27461[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (2))){
var inst_27312 = (state_27393[(7)]);
var inst_27312__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_27393__$1 = (function (){var statearr_27417 = state_27393;
(statearr_27417[(7)] = inst_27312__$1);

return statearr_27417;
})();
if(cljs.core.truth_(inst_27312__$1)){
var statearr_27418_27462 = state_27393__$1;
(statearr_27418_27462[(1)] = (5));

} else {
var statearr_27419_27463 = state_27393__$1;
(statearr_27419_27463[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (23))){
var inst_27355 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_27393__$1 = state_27393;
if(cljs.core.truth_(inst_27355)){
var statearr_27420_27464 = state_27393__$1;
(statearr_27420_27464[(1)] = (25));

} else {
var statearr_27421_27465 = state_27393__$1;
(statearr_27421_27465[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (35))){
var state_27393__$1 = state_27393;
var statearr_27422_27466 = state_27393__$1;
(statearr_27422_27466[(2)] = null);

(statearr_27422_27466[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (19))){
var inst_27350 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_27393__$1 = state_27393;
if(cljs.core.truth_(inst_27350)){
var statearr_27423_27467 = state_27393__$1;
(statearr_27423_27467[(1)] = (22));

} else {
var statearr_27424_27468 = state_27393__$1;
(statearr_27424_27468[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (11))){
var inst_27321 = (state_27393[(2)]);
var state_27393__$1 = state_27393;
var statearr_27425_27469 = state_27393__$1;
(statearr_27425_27469[(2)] = inst_27321);

(statearr_27425_27469[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (9))){
var inst_27323 = figwheel.client.heads_up.clear.call(null);
var state_27393__$1 = state_27393;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27393__$1,(12),inst_27323);
} else {
if((state_val_27394 === (5))){
var inst_27314 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_27393__$1 = state_27393;
var statearr_27426_27470 = state_27393__$1;
(statearr_27426_27470[(2)] = inst_27314);

(statearr_27426_27470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (14))){
var inst_27341 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_27393__$1 = state_27393;
if(cljs.core.truth_(inst_27341)){
var statearr_27427_27471 = state_27393__$1;
(statearr_27427_27471[(1)] = (18));

} else {
var statearr_27428_27472 = state_27393__$1;
(statearr_27428_27472[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (26))){
var inst_27365 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_27393__$1 = state_27393;
if(cljs.core.truth_(inst_27365)){
var statearr_27429_27473 = state_27393__$1;
(statearr_27429_27473[(1)] = (30));

} else {
var statearr_27430_27474 = state_27393__$1;
(statearr_27430_27474[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (16))){
var inst_27333 = (state_27393[(2)]);
var inst_27334 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27335 = figwheel.client.format_messages.call(null,inst_27334);
var inst_27336 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27337 = figwheel.client.heads_up.display_error.call(null,inst_27335,inst_27336);
var state_27393__$1 = (function (){var statearr_27431 = state_27393;
(statearr_27431[(9)] = inst_27333);

return statearr_27431;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27393__$1,(17),inst_27337);
} else {
if((state_val_27394 === (30))){
var inst_27367 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27368 = figwheel.client.heads_up.display_warning.call(null,inst_27367);
var state_27393__$1 = state_27393;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27393__$1,(33),inst_27368);
} else {
if((state_val_27394 === (10))){
var inst_27327 = (state_27393[(2)]);
var state_27393__$1 = state_27393;
var statearr_27432_27475 = state_27393__$1;
(statearr_27432_27475[(2)] = inst_27327);

(statearr_27432_27475[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (18))){
var inst_27343 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27344 = figwheel.client.format_messages.call(null,inst_27343);
var inst_27345 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27346 = figwheel.client.heads_up.display_error.call(null,inst_27344,inst_27345);
var state_27393__$1 = state_27393;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27393__$1,(21),inst_27346);
} else {
if((state_val_27394 === (37))){
var inst_27376 = (state_27393[(2)]);
var state_27393__$1 = state_27393;
var statearr_27433_27476 = state_27393__$1;
(statearr_27433_27476[(2)] = inst_27376);

(statearr_27433_27476[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27394 === (8))){
var inst_27319 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27393__$1 = state_27393;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27393__$1,(11),inst_27319);
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
});})(c__22662__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22550__auto__,c__22662__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22551__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22551__auto____0 = (function (){
var statearr_27437 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27437[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22551__auto__);

(statearr_27437[(1)] = (1));

return statearr_27437;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22551__auto____1 = (function (state_27393){
while(true){
var ret_value__22552__auto__ = (function (){try{while(true){
var result__22553__auto__ = switch__22550__auto__.call(null,state_27393);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22553__auto__;
}
break;
}
}catch (e27438){if((e27438 instanceof Object)){
var ex__22554__auto__ = e27438;
var statearr_27439_27477 = state_27393;
(statearr_27439_27477[(5)] = ex__22554__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27478 = state_27393;
state_27393 = G__27478;
continue;
} else {
return ret_value__22552__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22551__auto__ = function(state_27393){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22551__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22551__auto____1.call(this,state_27393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22551__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22551__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22551__auto__;
})()
;})(switch__22550__auto__,c__22662__auto__,msg_hist,msg_names,msg))
})();
var state__22664__auto__ = (function (){var statearr_27440 = f__22663__auto__.call(null);
(statearr_27440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22662__auto__);

return statearr_27440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22664__auto__);
});})(c__22662__auto__,msg_hist,msg_names,msg))
);

return c__22662__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22662__auto___27541 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22662__auto___27541,ch){
return (function (){
var f__22663__auto__ = (function (){var switch__22550__auto__ = ((function (c__22662__auto___27541,ch){
return (function (state_27524){
var state_val_27525 = (state_27524[(1)]);
if((state_val_27525 === (1))){
var state_27524__$1 = state_27524;
var statearr_27526_27542 = state_27524__$1;
(statearr_27526_27542[(2)] = null);

(statearr_27526_27542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (2))){
var state_27524__$1 = state_27524;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27524__$1,(4),ch);
} else {
if((state_val_27525 === (3))){
var inst_27522 = (state_27524[(2)]);
var state_27524__$1 = state_27524;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27524__$1,inst_27522);
} else {
if((state_val_27525 === (4))){
var inst_27512 = (state_27524[(7)]);
var inst_27512__$1 = (state_27524[(2)]);
var state_27524__$1 = (function (){var statearr_27527 = state_27524;
(statearr_27527[(7)] = inst_27512__$1);

return statearr_27527;
})();
if(cljs.core.truth_(inst_27512__$1)){
var statearr_27528_27543 = state_27524__$1;
(statearr_27528_27543[(1)] = (5));

} else {
var statearr_27529_27544 = state_27524__$1;
(statearr_27529_27544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (5))){
var inst_27512 = (state_27524[(7)]);
var inst_27514 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_27512);
var state_27524__$1 = state_27524;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27524__$1,(8),inst_27514);
} else {
if((state_val_27525 === (6))){
var state_27524__$1 = state_27524;
var statearr_27530_27545 = state_27524__$1;
(statearr_27530_27545[(2)] = null);

(statearr_27530_27545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (7))){
var inst_27520 = (state_27524[(2)]);
var state_27524__$1 = state_27524;
var statearr_27531_27546 = state_27524__$1;
(statearr_27531_27546[(2)] = inst_27520);

(statearr_27531_27546[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27525 === (8))){
var inst_27516 = (state_27524[(2)]);
var state_27524__$1 = (function (){var statearr_27532 = state_27524;
(statearr_27532[(8)] = inst_27516);

return statearr_27532;
})();
var statearr_27533_27547 = state_27524__$1;
(statearr_27533_27547[(2)] = null);

(statearr_27533_27547[(1)] = (2));


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
});})(c__22662__auto___27541,ch))
;
return ((function (switch__22550__auto__,c__22662__auto___27541,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22551__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22551__auto____0 = (function (){
var statearr_27537 = [null,null,null,null,null,null,null,null,null];
(statearr_27537[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22551__auto__);

(statearr_27537[(1)] = (1));

return statearr_27537;
});
var figwheel$client$heads_up_plugin_$_state_machine__22551__auto____1 = (function (state_27524){
while(true){
var ret_value__22552__auto__ = (function (){try{while(true){
var result__22553__auto__ = switch__22550__auto__.call(null,state_27524);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22553__auto__;
}
break;
}
}catch (e27538){if((e27538 instanceof Object)){
var ex__22554__auto__ = e27538;
var statearr_27539_27548 = state_27524;
(statearr_27539_27548[(5)] = ex__22554__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27549 = state_27524;
state_27524 = G__27549;
continue;
} else {
return ret_value__22552__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22551__auto__ = function(state_27524){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22551__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22551__auto____1.call(this,state_27524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22551__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22551__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22551__auto__;
})()
;})(switch__22550__auto__,c__22662__auto___27541,ch))
})();
var state__22664__auto__ = (function (){var statearr_27540 = f__22663__auto__.call(null);
(statearr_27540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22662__auto___27541);

return statearr_27540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22664__auto__);
});})(c__22662__auto___27541,ch))
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
var c__22662__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22662__auto__){
return (function (){
var f__22663__auto__ = (function (){var switch__22550__auto__ = ((function (c__22662__auto__){
return (function (state_27570){
var state_val_27571 = (state_27570[(1)]);
if((state_val_27571 === (1))){
var inst_27565 = cljs.core.async.timeout.call(null,(3000));
var state_27570__$1 = state_27570;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27570__$1,(2),inst_27565);
} else {
if((state_val_27571 === (2))){
var inst_27567 = (state_27570[(2)]);
var inst_27568 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_27570__$1 = (function (){var statearr_27572 = state_27570;
(statearr_27572[(7)] = inst_27567);

return statearr_27572;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27570__$1,inst_27568);
} else {
return null;
}
}
});})(c__22662__auto__))
;
return ((function (switch__22550__auto__,c__22662__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22551__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22551__auto____0 = (function (){
var statearr_27576 = [null,null,null,null,null,null,null,null];
(statearr_27576[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22551__auto__);

(statearr_27576[(1)] = (1));

return statearr_27576;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22551__auto____1 = (function (state_27570){
while(true){
var ret_value__22552__auto__ = (function (){try{while(true){
var result__22553__auto__ = switch__22550__auto__.call(null,state_27570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22553__auto__;
}
break;
}
}catch (e27577){if((e27577 instanceof Object)){
var ex__22554__auto__ = e27577;
var statearr_27578_27580 = state_27570;
(statearr_27578_27580[(5)] = ex__22554__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27581 = state_27570;
state_27570 = G__27581;
continue;
} else {
return ret_value__22552__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22551__auto__ = function(state_27570){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22551__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22551__auto____1.call(this,state_27570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22551__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22551__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22551__auto__;
})()
;})(switch__22550__auto__,c__22662__auto__))
})();
var state__22664__auto__ = (function (){var statearr_27579 = f__22663__auto__.call(null);
(statearr_27579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22662__auto__);

return statearr_27579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22664__auto__);
});})(c__22662__auto__))
);

return c__22662__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__27582){
var map__27589 = p__27582;
var map__27589__$1 = ((((!((map__27589 == null)))?((((map__27589.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27589.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27589):map__27589);
var ed = map__27589__$1;
var formatted_exception = cljs.core.get.call(null,map__27589__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__27589__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__27589__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__27591_27595 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__27592_27596 = null;
var count__27593_27597 = (0);
var i__27594_27598 = (0);
while(true){
if((i__27594_27598 < count__27593_27597)){
var msg_27599 = cljs.core._nth.call(null,chunk__27592_27596,i__27594_27598);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27599);

var G__27600 = seq__27591_27595;
var G__27601 = chunk__27592_27596;
var G__27602 = count__27593_27597;
var G__27603 = (i__27594_27598 + (1));
seq__27591_27595 = G__27600;
chunk__27592_27596 = G__27601;
count__27593_27597 = G__27602;
i__27594_27598 = G__27603;
continue;
} else {
var temp__4425__auto___27604 = cljs.core.seq.call(null,seq__27591_27595);
if(temp__4425__auto___27604){
var seq__27591_27605__$1 = temp__4425__auto___27604;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27591_27605__$1)){
var c__17658__auto___27606 = cljs.core.chunk_first.call(null,seq__27591_27605__$1);
var G__27607 = cljs.core.chunk_rest.call(null,seq__27591_27605__$1);
var G__27608 = c__17658__auto___27606;
var G__27609 = cljs.core.count.call(null,c__17658__auto___27606);
var G__27610 = (0);
seq__27591_27595 = G__27607;
chunk__27592_27596 = G__27608;
count__27593_27597 = G__27609;
i__27594_27598 = G__27610;
continue;
} else {
var msg_27611 = cljs.core.first.call(null,seq__27591_27605__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27611);

var G__27612 = cljs.core.next.call(null,seq__27591_27605__$1);
var G__27613 = null;
var G__27614 = (0);
var G__27615 = (0);
seq__27591_27595 = G__27612;
chunk__27592_27596 = G__27613;
count__27593_27597 = G__27614;
i__27594_27598 = G__27615;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__27616){
var map__27619 = p__27616;
var map__27619__$1 = ((((!((map__27619 == null)))?((((map__27619.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27619.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27619):map__27619);
var w = map__27619__$1;
var message = cljs.core.get.call(null,map__27619__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__16843__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16843__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16843__auto__;
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
var seq__27627 = cljs.core.seq.call(null,plugins);
var chunk__27628 = null;
var count__27629 = (0);
var i__27630 = (0);
while(true){
if((i__27630 < count__27629)){
var vec__27631 = cljs.core._nth.call(null,chunk__27628,i__27630);
var k = cljs.core.nth.call(null,vec__27631,(0),null);
var plugin = cljs.core.nth.call(null,vec__27631,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27633 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27627,chunk__27628,count__27629,i__27630,pl_27633,vec__27631,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_27633.call(null,msg_hist);
});})(seq__27627,chunk__27628,count__27629,i__27630,pl_27633,vec__27631,k,plugin))
);
} else {
}

var G__27634 = seq__27627;
var G__27635 = chunk__27628;
var G__27636 = count__27629;
var G__27637 = (i__27630 + (1));
seq__27627 = G__27634;
chunk__27628 = G__27635;
count__27629 = G__27636;
i__27630 = G__27637;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27627);
if(temp__4425__auto__){
var seq__27627__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27627__$1)){
var c__17658__auto__ = cljs.core.chunk_first.call(null,seq__27627__$1);
var G__27638 = cljs.core.chunk_rest.call(null,seq__27627__$1);
var G__27639 = c__17658__auto__;
var G__27640 = cljs.core.count.call(null,c__17658__auto__);
var G__27641 = (0);
seq__27627 = G__27638;
chunk__27628 = G__27639;
count__27629 = G__27640;
i__27630 = G__27641;
continue;
} else {
var vec__27632 = cljs.core.first.call(null,seq__27627__$1);
var k = cljs.core.nth.call(null,vec__27632,(0),null);
var plugin = cljs.core.nth.call(null,vec__27632,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27642 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27627,chunk__27628,count__27629,i__27630,pl_27642,vec__27632,k,plugin,seq__27627__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_27642.call(null,msg_hist);
});})(seq__27627,chunk__27628,count__27629,i__27630,pl_27642,vec__27632,k,plugin,seq__27627__$1,temp__4425__auto__))
);
} else {
}

var G__27643 = cljs.core.next.call(null,seq__27627__$1);
var G__27644 = null;
var G__27645 = (0);
var G__27646 = (0);
seq__27627 = G__27643;
chunk__27628 = G__27644;
count__27629 = G__27645;
i__27630 = G__27646;
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
var args27647 = [];
var len__17913__auto___27650 = arguments.length;
var i__17914__auto___27651 = (0);
while(true){
if((i__17914__auto___27651 < len__17913__auto___27650)){
args27647.push((arguments[i__17914__auto___27651]));

var G__27652 = (i__17914__auto___27651 + (1));
i__17914__auto___27651 = G__27652;
continue;
} else {
}
break;
}

var G__27649 = args27647.length;
switch (G__27649) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27647.length)].join('')));

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
var args__17920__auto__ = [];
var len__17913__auto___27658 = arguments.length;
var i__17914__auto___27659 = (0);
while(true){
if((i__17914__auto___27659 < len__17913__auto___27658)){
args__17920__auto__.push((arguments[i__17914__auto___27659]));

var G__27660 = (i__17914__auto___27659 + (1));
i__17914__auto___27659 = G__27660;
continue;
} else {
}
break;
}

var argseq__17921__auto__ = ((((0) < args__17920__auto__.length))?(new cljs.core.IndexedSeq(args__17920__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17921__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__27655){
var map__27656 = p__27655;
var map__27656__$1 = ((((!((map__27656 == null)))?((((map__27656.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27656.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27656):map__27656);
var opts = map__27656__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq27654){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27654));
});

//# sourceMappingURL=client.js.map