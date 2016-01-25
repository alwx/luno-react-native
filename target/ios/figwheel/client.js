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
var pred__26926 = cljs.core._EQ_;
var expr__26927 = (function (){var or__16841__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16841__auto__)){
return or__16841__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__26926.call(null,"true",expr__26927))){
return true;
} else {
if(cljs.core.truth_(pred__26926.call(null,"false",expr__26927))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__26927)].join('')));
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
var len__17899__auto___26930 = arguments.length;
var i__17900__auto___26931 = (0);
while(true){
if((i__17900__auto___26931 < len__17899__auto___26930)){
args__17906__auto__.push((arguments[i__17900__auto___26931]));

var G__26932 = (i__17900__auto___26931 + (1));
i__17900__auto___26931 = G__26932;
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

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq26929){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26929));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26933){
var map__26936 = p__26933;
var map__26936__$1 = ((((!((map__26936 == null)))?((((map__26936.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26936.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26936):map__26936);
var message = cljs.core.get.call(null,map__26936__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26936__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__22650__auto___27098 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22650__auto___27098,ch){
return (function (){
var f__22651__auto__ = (function (){var switch__22538__auto__ = ((function (c__22650__auto___27098,ch){
return (function (state_27067){
var state_val_27068 = (state_27067[(1)]);
if((state_val_27068 === (7))){
var inst_27063 = (state_27067[(2)]);
var state_27067__$1 = state_27067;
var statearr_27069_27099 = state_27067__$1;
(statearr_27069_27099[(2)] = inst_27063);

(statearr_27069_27099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27068 === (1))){
var state_27067__$1 = state_27067;
var statearr_27070_27100 = state_27067__$1;
(statearr_27070_27100[(2)] = null);

(statearr_27070_27100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27068 === (4))){
var inst_27020 = (state_27067[(7)]);
var inst_27020__$1 = (state_27067[(2)]);
var state_27067__$1 = (function (){var statearr_27071 = state_27067;
(statearr_27071[(7)] = inst_27020__$1);

return statearr_27071;
})();
if(cljs.core.truth_(inst_27020__$1)){
var statearr_27072_27101 = state_27067__$1;
(statearr_27072_27101[(1)] = (5));

} else {
var statearr_27073_27102 = state_27067__$1;
(statearr_27073_27102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27068 === (15))){
var inst_27027 = (state_27067[(8)]);
var inst_27042 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27027);
var inst_27043 = cljs.core.first.call(null,inst_27042);
var inst_27044 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_27043);
var inst_27045 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_27044)].join('');
var inst_27046 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_27045);
var state_27067__$1 = state_27067;
var statearr_27074_27103 = state_27067__$1;
(statearr_27074_27103[(2)] = inst_27046);

(statearr_27074_27103[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27068 === (13))){
var inst_27051 = (state_27067[(2)]);
var state_27067__$1 = state_27067;
var statearr_27075_27104 = state_27067__$1;
(statearr_27075_27104[(2)] = inst_27051);

(statearr_27075_27104[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27068 === (6))){
var state_27067__$1 = state_27067;
var statearr_27076_27105 = state_27067__$1;
(statearr_27076_27105[(2)] = null);

(statearr_27076_27105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27068 === (17))){
var inst_27049 = (state_27067[(2)]);
var state_27067__$1 = state_27067;
var statearr_27077_27106 = state_27067__$1;
(statearr_27077_27106[(2)] = inst_27049);

(statearr_27077_27106[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27068 === (3))){
var inst_27065 = (state_27067[(2)]);
var state_27067__$1 = state_27067;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27067__$1,inst_27065);
} else {
if((state_val_27068 === (12))){
var inst_27026 = (state_27067[(9)]);
var inst_27040 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_27026,opts);
var state_27067__$1 = state_27067;
if(cljs.core.truth_(inst_27040)){
var statearr_27078_27107 = state_27067__$1;
(statearr_27078_27107[(1)] = (15));

} else {
var statearr_27079_27108 = state_27067__$1;
(statearr_27079_27108[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27068 === (2))){
var state_27067__$1 = state_27067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27067__$1,(4),ch);
} else {
if((state_val_27068 === (11))){
var inst_27027 = (state_27067[(8)]);
var inst_27032 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27033 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_27027);
var inst_27034 = cljs.core.async.timeout.call(null,(1000));
var inst_27035 = [inst_27033,inst_27034];
var inst_27036 = (new cljs.core.PersistentVector(null,2,(5),inst_27032,inst_27035,null));
var state_27067__$1 = state_27067;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27067__$1,(14),inst_27036);
} else {
if((state_val_27068 === (9))){
var inst_27027 = (state_27067[(8)]);
var inst_27053 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_27054 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27027);
var inst_27055 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27054);
var inst_27056 = [cljs.core.str("Not loading: "),cljs.core.str(inst_27055)].join('');
var inst_27057 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_27056);
var state_27067__$1 = (function (){var statearr_27080 = state_27067;
(statearr_27080[(10)] = inst_27053);

return statearr_27080;
})();
var statearr_27081_27109 = state_27067__$1;
(statearr_27081_27109[(2)] = inst_27057);

(statearr_27081_27109[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27068 === (5))){
var inst_27020 = (state_27067[(7)]);
var inst_27022 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_27023 = (new cljs.core.PersistentArrayMap(null,2,inst_27022,null));
var inst_27024 = (new cljs.core.PersistentHashSet(null,inst_27023,null));
var inst_27025 = figwheel.client.focus_msgs.call(null,inst_27024,inst_27020);
var inst_27026 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_27025);
var inst_27027 = cljs.core.first.call(null,inst_27025);
var inst_27028 = figwheel.client.autoload_QMARK_.call(null);
var state_27067__$1 = (function (){var statearr_27082 = state_27067;
(statearr_27082[(9)] = inst_27026);

(statearr_27082[(8)] = inst_27027);

return statearr_27082;
})();
if(cljs.core.truth_(inst_27028)){
var statearr_27083_27110 = state_27067__$1;
(statearr_27083_27110[(1)] = (8));

} else {
var statearr_27084_27111 = state_27067__$1;
(statearr_27084_27111[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27068 === (14))){
var inst_27038 = (state_27067[(2)]);
var state_27067__$1 = state_27067;
var statearr_27085_27112 = state_27067__$1;
(statearr_27085_27112[(2)] = inst_27038);

(statearr_27085_27112[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27068 === (16))){
var state_27067__$1 = state_27067;
var statearr_27086_27113 = state_27067__$1;
(statearr_27086_27113[(2)] = null);

(statearr_27086_27113[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27068 === (10))){
var inst_27059 = (state_27067[(2)]);
var state_27067__$1 = (function (){var statearr_27087 = state_27067;
(statearr_27087[(11)] = inst_27059);

return statearr_27087;
})();
var statearr_27088_27114 = state_27067__$1;
(statearr_27088_27114[(2)] = null);

(statearr_27088_27114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27068 === (8))){
var inst_27026 = (state_27067[(9)]);
var inst_27030 = figwheel.client.reload_file_state_QMARK_.call(null,inst_27026,opts);
var state_27067__$1 = state_27067;
if(cljs.core.truth_(inst_27030)){
var statearr_27089_27115 = state_27067__$1;
(statearr_27089_27115[(1)] = (11));

} else {
var statearr_27090_27116 = state_27067__$1;
(statearr_27090_27116[(1)] = (12));

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
});})(c__22650__auto___27098,ch))
;
return ((function (switch__22538__auto__,c__22650__auto___27098,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22539__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22539__auto____0 = (function (){
var statearr_27094 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27094[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22539__auto__);

(statearr_27094[(1)] = (1));

return statearr_27094;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22539__auto____1 = (function (state_27067){
while(true){
var ret_value__22540__auto__ = (function (){try{while(true){
var result__22541__auto__ = switch__22538__auto__.call(null,state_27067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22541__auto__;
}
break;
}
}catch (e27095){if((e27095 instanceof Object)){
var ex__22542__auto__ = e27095;
var statearr_27096_27117 = state_27067;
(statearr_27096_27117[(5)] = ex__22542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27118 = state_27067;
state_27067 = G__27118;
continue;
} else {
return ret_value__22540__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22539__auto__ = function(state_27067){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22539__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22539__auto____1.call(this,state_27067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22539__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22539__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22539__auto__;
})()
;})(switch__22538__auto__,c__22650__auto___27098,ch))
})();
var state__22652__auto__ = (function (){var statearr_27097 = f__22651__auto__.call(null);
(statearr_27097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22650__auto___27098);

return statearr_27097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22652__auto__);
});})(c__22650__auto___27098,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__27119_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__27119_SHARP_));
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
var base_path_27126 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_27126){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_27124 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_27125 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_27125;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_27124;
}}catch (e27123){if((e27123 instanceof Error)){
var e = e27123;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_27126], null));
} else {
var e = e27123;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_27126))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__27127){
var map__27134 = p__27127;
var map__27134__$1 = ((((!((map__27134 == null)))?((((map__27134.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27134.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27134):map__27134);
var opts = map__27134__$1;
var build_id = cljs.core.get.call(null,map__27134__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__27134,map__27134__$1,opts,build_id){
return (function (p__27136){
var vec__27137 = p__27136;
var map__27138 = cljs.core.nth.call(null,vec__27137,(0),null);
var map__27138__$1 = ((((!((map__27138 == null)))?((((map__27138.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27138.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27138):map__27138);
var msg = map__27138__$1;
var msg_name = cljs.core.get.call(null,map__27138__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27137,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__27137,map__27138,map__27138__$1,msg,msg_name,_,map__27134,map__27134__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__27137,map__27138,map__27138__$1,msg,msg_name,_,map__27134,map__27134__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__27134,map__27134__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__27144){
var vec__27145 = p__27144;
var map__27146 = cljs.core.nth.call(null,vec__27145,(0),null);
var map__27146__$1 = ((((!((map__27146 == null)))?((((map__27146.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27146.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27146):map__27146);
var msg = map__27146__$1;
var msg_name = cljs.core.get.call(null,map__27146__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27145,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__27148){
var map__27158 = p__27148;
var map__27158__$1 = ((((!((map__27158 == null)))?((((map__27158.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27158.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27158):map__27158);
var on_compile_warning = cljs.core.get.call(null,map__27158__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__27158__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__27158,map__27158__$1,on_compile_warning,on_compile_fail){
return (function (p__27160){
var vec__27161 = p__27160;
var map__27162 = cljs.core.nth.call(null,vec__27161,(0),null);
var map__27162__$1 = ((((!((map__27162 == null)))?((((map__27162.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27162.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27162):map__27162);
var msg = map__27162__$1;
var msg_name = cljs.core.get.call(null,map__27162__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27161,(1));
var pred__27164 = cljs.core._EQ_;
var expr__27165 = msg_name;
if(cljs.core.truth_(pred__27164.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__27165))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__27164.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__27165))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__27158,map__27158__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22650__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22651__auto__ = (function (){var switch__22538__auto__ = ((function (c__22650__auto__,msg_hist,msg_names,msg){
return (function (state_27381){
var state_val_27382 = (state_27381[(1)]);
if((state_val_27382 === (7))){
var inst_27305 = (state_27381[(2)]);
var state_27381__$1 = state_27381;
if(cljs.core.truth_(inst_27305)){
var statearr_27383_27429 = state_27381__$1;
(statearr_27383_27429[(1)] = (8));

} else {
var statearr_27384_27430 = state_27381__$1;
(statearr_27384_27430[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27382 === (20))){
var inst_27375 = (state_27381[(2)]);
var state_27381__$1 = state_27381;
var statearr_27385_27431 = state_27381__$1;
(statearr_27385_27431[(2)] = inst_27375);

(statearr_27385_27431[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27382 === (27))){
var inst_27371 = (state_27381[(2)]);
var state_27381__$1 = state_27381;
var statearr_27386_27432 = state_27381__$1;
(statearr_27386_27432[(2)] = inst_27371);

(statearr_27386_27432[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27382 === (1))){
var inst_27298 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_27381__$1 = state_27381;
if(cljs.core.truth_(inst_27298)){
var statearr_27387_27433 = state_27381__$1;
(statearr_27387_27433[(1)] = (2));

} else {
var statearr_27388_27434 = state_27381__$1;
(statearr_27388_27434[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27382 === (24))){
var inst_27373 = (state_27381[(2)]);
var state_27381__$1 = state_27381;
var statearr_27389_27435 = state_27381__$1;
(statearr_27389_27435[(2)] = inst_27373);

(statearr_27389_27435[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27382 === (4))){
var inst_27379 = (state_27381[(2)]);
var state_27381__$1 = state_27381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27381__$1,inst_27379);
} else {
if((state_val_27382 === (15))){
var inst_27377 = (state_27381[(2)]);
var state_27381__$1 = state_27381;
var statearr_27390_27436 = state_27381__$1;
(statearr_27390_27436[(2)] = inst_27377);

(statearr_27390_27436[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27382 === (21))){
var inst_27336 = (state_27381[(2)]);
var state_27381__$1 = state_27381;
var statearr_27391_27437 = state_27381__$1;
(statearr_27391_27437[(2)] = inst_27336);

(statearr_27391_27437[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27382 === (31))){
var inst_27360 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_27381__$1 = state_27381;
if(cljs.core.truth_(inst_27360)){
var statearr_27392_27438 = state_27381__$1;
(statearr_27392_27438[(1)] = (34));

} else {
var statearr_27393_27439 = state_27381__$1;
(statearr_27393_27439[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27382 === (32))){
var inst_27369 = (state_27381[(2)]);
var state_27381__$1 = state_27381;
var statearr_27394_27440 = state_27381__$1;
(statearr_27394_27440[(2)] = inst_27369);

(statearr_27394_27440[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27382 === (33))){
var inst_27358 = (state_27381[(2)]);
var state_27381__$1 = state_27381;
var statearr_27395_27441 = state_27381__$1;
(statearr_27395_27441[(2)] = inst_27358);

(statearr_27395_27441[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27382 === (13))){
var inst_27319 = figwheel.client.heads_up.clear.call(null);
var state_27381__$1 = state_27381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27381__$1,(16),inst_27319);
} else {
if((state_val_27382 === (22))){
var inst_27340 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27341 = figwheel.client.heads_up.append_message.call(null,inst_27340);
var state_27381__$1 = state_27381;
var statearr_27396_27442 = state_27381__$1;
(statearr_27396_27442[(2)] = inst_27341);

(statearr_27396_27442[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27382 === (36))){
var inst_27367 = (state_27381[(2)]);
var state_27381__$1 = state_27381;
var statearr_27397_27443 = state_27381__$1;
(statearr_27397_27443[(2)] = inst_27367);

(statearr_27397_27443[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27382 === (29))){
var inst_27351 = (state_27381[(2)]);
var state_27381__$1 = state_27381;
var statearr_27398_27444 = state_27381__$1;
(statearr_27398_27444[(2)] = inst_27351);

(statearr_27398_27444[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27382 === (6))){
var inst_27300 = (state_27381[(7)]);
var state_27381__$1 = state_27381;
var statearr_27399_27445 = state_27381__$1;
(statearr_27399_27445[(2)] = inst_27300);

(statearr_27399_27445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27382 === (28))){
var inst_27347 = (state_27381[(2)]);
var inst_27348 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27349 = figwheel.client.heads_up.display_warning.call(null,inst_27348);
var state_27381__$1 = (function (){var statearr_27400 = state_27381;
(statearr_27400[(8)] = inst_27347);

return statearr_27400;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27381__$1,(29),inst_27349);
} else {
if((state_val_27382 === (25))){
var inst_27345 = figwheel.client.heads_up.clear.call(null);
var state_27381__$1 = state_27381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27381__$1,(28),inst_27345);
} else {
if((state_val_27382 === (34))){
var inst_27362 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27381__$1 = state_27381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27381__$1,(37),inst_27362);
} else {
if((state_val_27382 === (17))){
var inst_27327 = (state_27381[(2)]);
var state_27381__$1 = state_27381;
var statearr_27401_27446 = state_27381__$1;
(statearr_27401_27446[(2)] = inst_27327);

(statearr_27401_27446[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27382 === (3))){
var inst_27317 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_27381__$1 = state_27381;
if(cljs.core.truth_(inst_27317)){
var statearr_27402_27447 = state_27381__$1;
(statearr_27402_27447[(1)] = (13));

} else {
var statearr_27403_27448 = state_27381__$1;
(statearr_27403_27448[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27382 === (12))){
var inst_27313 = (state_27381[(2)]);
var state_27381__$1 = state_27381;
var statearr_27404_27449 = state_27381__$1;
(statearr_27404_27449[(2)] = inst_27313);

(statearr_27404_27449[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27382 === (2))){
var inst_27300 = (state_27381[(7)]);
var inst_27300__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_27381__$1 = (function (){var statearr_27405 = state_27381;
(statearr_27405[(7)] = inst_27300__$1);

return statearr_27405;
})();
if(cljs.core.truth_(inst_27300__$1)){
var statearr_27406_27450 = state_27381__$1;
(statearr_27406_27450[(1)] = (5));

} else {
var statearr_27407_27451 = state_27381__$1;
(statearr_27407_27451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27382 === (23))){
var inst_27343 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_27381__$1 = state_27381;
if(cljs.core.truth_(inst_27343)){
var statearr_27408_27452 = state_27381__$1;
(statearr_27408_27452[(1)] = (25));

} else {
var statearr_27409_27453 = state_27381__$1;
(statearr_27409_27453[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27382 === (35))){
var state_27381__$1 = state_27381;
var statearr_27410_27454 = state_27381__$1;
(statearr_27410_27454[(2)] = null);

(statearr_27410_27454[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27382 === (19))){
var inst_27338 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_27381__$1 = state_27381;
if(cljs.core.truth_(inst_27338)){
var statearr_27411_27455 = state_27381__$1;
(statearr_27411_27455[(1)] = (22));

} else {
var statearr_27412_27456 = state_27381__$1;
(statearr_27412_27456[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27382 === (11))){
var inst_27309 = (state_27381[(2)]);
var state_27381__$1 = state_27381;
var statearr_27413_27457 = state_27381__$1;
(statearr_27413_27457[(2)] = inst_27309);

(statearr_27413_27457[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27382 === (9))){
var inst_27311 = figwheel.client.heads_up.clear.call(null);
var state_27381__$1 = state_27381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27381__$1,(12),inst_27311);
} else {
if((state_val_27382 === (5))){
var inst_27302 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_27381__$1 = state_27381;
var statearr_27414_27458 = state_27381__$1;
(statearr_27414_27458[(2)] = inst_27302);

(statearr_27414_27458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27382 === (14))){
var inst_27329 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_27381__$1 = state_27381;
if(cljs.core.truth_(inst_27329)){
var statearr_27415_27459 = state_27381__$1;
(statearr_27415_27459[(1)] = (18));

} else {
var statearr_27416_27460 = state_27381__$1;
(statearr_27416_27460[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27382 === (26))){
var inst_27353 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_27381__$1 = state_27381;
if(cljs.core.truth_(inst_27353)){
var statearr_27417_27461 = state_27381__$1;
(statearr_27417_27461[(1)] = (30));

} else {
var statearr_27418_27462 = state_27381__$1;
(statearr_27418_27462[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27382 === (16))){
var inst_27321 = (state_27381[(2)]);
var inst_27322 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27323 = figwheel.client.format_messages.call(null,inst_27322);
var inst_27324 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27325 = figwheel.client.heads_up.display_error.call(null,inst_27323,inst_27324);
var state_27381__$1 = (function (){var statearr_27419 = state_27381;
(statearr_27419[(9)] = inst_27321);

return statearr_27419;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27381__$1,(17),inst_27325);
} else {
if((state_val_27382 === (30))){
var inst_27355 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27356 = figwheel.client.heads_up.display_warning.call(null,inst_27355);
var state_27381__$1 = state_27381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27381__$1,(33),inst_27356);
} else {
if((state_val_27382 === (10))){
var inst_27315 = (state_27381[(2)]);
var state_27381__$1 = state_27381;
var statearr_27420_27463 = state_27381__$1;
(statearr_27420_27463[(2)] = inst_27315);

(statearr_27420_27463[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27382 === (18))){
var inst_27331 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27332 = figwheel.client.format_messages.call(null,inst_27331);
var inst_27333 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27334 = figwheel.client.heads_up.display_error.call(null,inst_27332,inst_27333);
var state_27381__$1 = state_27381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27381__$1,(21),inst_27334);
} else {
if((state_val_27382 === (37))){
var inst_27364 = (state_27381[(2)]);
var state_27381__$1 = state_27381;
var statearr_27421_27464 = state_27381__$1;
(statearr_27421_27464[(2)] = inst_27364);

(statearr_27421_27464[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27382 === (8))){
var inst_27307 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27381__$1 = state_27381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27381__$1,(11),inst_27307);
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
});})(c__22650__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22538__auto__,c__22650__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22539__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22539__auto____0 = (function (){
var statearr_27425 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27425[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22539__auto__);

(statearr_27425[(1)] = (1));

return statearr_27425;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22539__auto____1 = (function (state_27381){
while(true){
var ret_value__22540__auto__ = (function (){try{while(true){
var result__22541__auto__ = switch__22538__auto__.call(null,state_27381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22541__auto__;
}
break;
}
}catch (e27426){if((e27426 instanceof Object)){
var ex__22542__auto__ = e27426;
var statearr_27427_27465 = state_27381;
(statearr_27427_27465[(5)] = ex__22542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27466 = state_27381;
state_27381 = G__27466;
continue;
} else {
return ret_value__22540__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22539__auto__ = function(state_27381){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22539__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22539__auto____1.call(this,state_27381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22539__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22539__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22539__auto__;
})()
;})(switch__22538__auto__,c__22650__auto__,msg_hist,msg_names,msg))
})();
var state__22652__auto__ = (function (){var statearr_27428 = f__22651__auto__.call(null);
(statearr_27428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22650__auto__);

return statearr_27428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22652__auto__);
});})(c__22650__auto__,msg_hist,msg_names,msg))
);

return c__22650__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22650__auto___27529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22650__auto___27529,ch){
return (function (){
var f__22651__auto__ = (function (){var switch__22538__auto__ = ((function (c__22650__auto___27529,ch){
return (function (state_27512){
var state_val_27513 = (state_27512[(1)]);
if((state_val_27513 === (1))){
var state_27512__$1 = state_27512;
var statearr_27514_27530 = state_27512__$1;
(statearr_27514_27530[(2)] = null);

(statearr_27514_27530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27513 === (2))){
var state_27512__$1 = state_27512;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27512__$1,(4),ch);
} else {
if((state_val_27513 === (3))){
var inst_27510 = (state_27512[(2)]);
var state_27512__$1 = state_27512;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27512__$1,inst_27510);
} else {
if((state_val_27513 === (4))){
var inst_27500 = (state_27512[(7)]);
var inst_27500__$1 = (state_27512[(2)]);
var state_27512__$1 = (function (){var statearr_27515 = state_27512;
(statearr_27515[(7)] = inst_27500__$1);

return statearr_27515;
})();
if(cljs.core.truth_(inst_27500__$1)){
var statearr_27516_27531 = state_27512__$1;
(statearr_27516_27531[(1)] = (5));

} else {
var statearr_27517_27532 = state_27512__$1;
(statearr_27517_27532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27513 === (5))){
var inst_27500 = (state_27512[(7)]);
var inst_27502 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_27500);
var state_27512__$1 = state_27512;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27512__$1,(8),inst_27502);
} else {
if((state_val_27513 === (6))){
var state_27512__$1 = state_27512;
var statearr_27518_27533 = state_27512__$1;
(statearr_27518_27533[(2)] = null);

(statearr_27518_27533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27513 === (7))){
var inst_27508 = (state_27512[(2)]);
var state_27512__$1 = state_27512;
var statearr_27519_27534 = state_27512__$1;
(statearr_27519_27534[(2)] = inst_27508);

(statearr_27519_27534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27513 === (8))){
var inst_27504 = (state_27512[(2)]);
var state_27512__$1 = (function (){var statearr_27520 = state_27512;
(statearr_27520[(8)] = inst_27504);

return statearr_27520;
})();
var statearr_27521_27535 = state_27512__$1;
(statearr_27521_27535[(2)] = null);

(statearr_27521_27535[(1)] = (2));


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
});})(c__22650__auto___27529,ch))
;
return ((function (switch__22538__auto__,c__22650__auto___27529,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22539__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22539__auto____0 = (function (){
var statearr_27525 = [null,null,null,null,null,null,null,null,null];
(statearr_27525[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22539__auto__);

(statearr_27525[(1)] = (1));

return statearr_27525;
});
var figwheel$client$heads_up_plugin_$_state_machine__22539__auto____1 = (function (state_27512){
while(true){
var ret_value__22540__auto__ = (function (){try{while(true){
var result__22541__auto__ = switch__22538__auto__.call(null,state_27512);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22541__auto__;
}
break;
}
}catch (e27526){if((e27526 instanceof Object)){
var ex__22542__auto__ = e27526;
var statearr_27527_27536 = state_27512;
(statearr_27527_27536[(5)] = ex__22542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27512);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27537 = state_27512;
state_27512 = G__27537;
continue;
} else {
return ret_value__22540__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22539__auto__ = function(state_27512){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22539__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22539__auto____1.call(this,state_27512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22539__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22539__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22539__auto__;
})()
;})(switch__22538__auto__,c__22650__auto___27529,ch))
})();
var state__22652__auto__ = (function (){var statearr_27528 = f__22651__auto__.call(null);
(statearr_27528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22650__auto___27529);

return statearr_27528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22652__auto__);
});})(c__22650__auto___27529,ch))
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
var c__22650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22650__auto__){
return (function (){
var f__22651__auto__ = (function (){var switch__22538__auto__ = ((function (c__22650__auto__){
return (function (state_27558){
var state_val_27559 = (state_27558[(1)]);
if((state_val_27559 === (1))){
var inst_27553 = cljs.core.async.timeout.call(null,(3000));
var state_27558__$1 = state_27558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27558__$1,(2),inst_27553);
} else {
if((state_val_27559 === (2))){
var inst_27555 = (state_27558[(2)]);
var inst_27556 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_27558__$1 = (function (){var statearr_27560 = state_27558;
(statearr_27560[(7)] = inst_27555);

return statearr_27560;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27558__$1,inst_27556);
} else {
return null;
}
}
});})(c__22650__auto__))
;
return ((function (switch__22538__auto__,c__22650__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22539__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22539__auto____0 = (function (){
var statearr_27564 = [null,null,null,null,null,null,null,null];
(statearr_27564[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22539__auto__);

(statearr_27564[(1)] = (1));

return statearr_27564;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22539__auto____1 = (function (state_27558){
while(true){
var ret_value__22540__auto__ = (function (){try{while(true){
var result__22541__auto__ = switch__22538__auto__.call(null,state_27558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22541__auto__;
}
break;
}
}catch (e27565){if((e27565 instanceof Object)){
var ex__22542__auto__ = e27565;
var statearr_27566_27568 = state_27558;
(statearr_27566_27568[(5)] = ex__22542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27569 = state_27558;
state_27558 = G__27569;
continue;
} else {
return ret_value__22540__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22539__auto__ = function(state_27558){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22539__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22539__auto____1.call(this,state_27558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22539__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22539__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22539__auto__;
})()
;})(switch__22538__auto__,c__22650__auto__))
})();
var state__22652__auto__ = (function (){var statearr_27567 = f__22651__auto__.call(null);
(statearr_27567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22650__auto__);

return statearr_27567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22652__auto__);
});})(c__22650__auto__))
);

return c__22650__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__27570){
var map__27577 = p__27570;
var map__27577__$1 = ((((!((map__27577 == null)))?((((map__27577.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27577.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27577):map__27577);
var ed = map__27577__$1;
var formatted_exception = cljs.core.get.call(null,map__27577__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__27577__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__27577__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__27579_27583 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__27580_27584 = null;
var count__27581_27585 = (0);
var i__27582_27586 = (0);
while(true){
if((i__27582_27586 < count__27581_27585)){
var msg_27587 = cljs.core._nth.call(null,chunk__27580_27584,i__27582_27586);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27587);

var G__27588 = seq__27579_27583;
var G__27589 = chunk__27580_27584;
var G__27590 = count__27581_27585;
var G__27591 = (i__27582_27586 + (1));
seq__27579_27583 = G__27588;
chunk__27580_27584 = G__27589;
count__27581_27585 = G__27590;
i__27582_27586 = G__27591;
continue;
} else {
var temp__4425__auto___27592 = cljs.core.seq.call(null,seq__27579_27583);
if(temp__4425__auto___27592){
var seq__27579_27593__$1 = temp__4425__auto___27592;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27579_27593__$1)){
var c__17644__auto___27594 = cljs.core.chunk_first.call(null,seq__27579_27593__$1);
var G__27595 = cljs.core.chunk_rest.call(null,seq__27579_27593__$1);
var G__27596 = c__17644__auto___27594;
var G__27597 = cljs.core.count.call(null,c__17644__auto___27594);
var G__27598 = (0);
seq__27579_27583 = G__27595;
chunk__27580_27584 = G__27596;
count__27581_27585 = G__27597;
i__27582_27586 = G__27598;
continue;
} else {
var msg_27599 = cljs.core.first.call(null,seq__27579_27593__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27599);

var G__27600 = cljs.core.next.call(null,seq__27579_27593__$1);
var G__27601 = null;
var G__27602 = (0);
var G__27603 = (0);
seq__27579_27583 = G__27600;
chunk__27580_27584 = G__27601;
count__27581_27585 = G__27602;
i__27582_27586 = G__27603;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__27604){
var map__27607 = p__27604;
var map__27607__$1 = ((((!((map__27607 == null)))?((((map__27607.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27607.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27607):map__27607);
var w = map__27607__$1;
var message = cljs.core.get.call(null,map__27607__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__27615 = cljs.core.seq.call(null,plugins);
var chunk__27616 = null;
var count__27617 = (0);
var i__27618 = (0);
while(true){
if((i__27618 < count__27617)){
var vec__27619 = cljs.core._nth.call(null,chunk__27616,i__27618);
var k = cljs.core.nth.call(null,vec__27619,(0),null);
var plugin = cljs.core.nth.call(null,vec__27619,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27621 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27615,chunk__27616,count__27617,i__27618,pl_27621,vec__27619,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_27621.call(null,msg_hist);
});})(seq__27615,chunk__27616,count__27617,i__27618,pl_27621,vec__27619,k,plugin))
);
} else {
}

var G__27622 = seq__27615;
var G__27623 = chunk__27616;
var G__27624 = count__27617;
var G__27625 = (i__27618 + (1));
seq__27615 = G__27622;
chunk__27616 = G__27623;
count__27617 = G__27624;
i__27618 = G__27625;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27615);
if(temp__4425__auto__){
var seq__27615__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27615__$1)){
var c__17644__auto__ = cljs.core.chunk_first.call(null,seq__27615__$1);
var G__27626 = cljs.core.chunk_rest.call(null,seq__27615__$1);
var G__27627 = c__17644__auto__;
var G__27628 = cljs.core.count.call(null,c__17644__auto__);
var G__27629 = (0);
seq__27615 = G__27626;
chunk__27616 = G__27627;
count__27617 = G__27628;
i__27618 = G__27629;
continue;
} else {
var vec__27620 = cljs.core.first.call(null,seq__27615__$1);
var k = cljs.core.nth.call(null,vec__27620,(0),null);
var plugin = cljs.core.nth.call(null,vec__27620,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27630 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27615,chunk__27616,count__27617,i__27618,pl_27630,vec__27620,k,plugin,seq__27615__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_27630.call(null,msg_hist);
});})(seq__27615,chunk__27616,count__27617,i__27618,pl_27630,vec__27620,k,plugin,seq__27615__$1,temp__4425__auto__))
);
} else {
}

var G__27631 = cljs.core.next.call(null,seq__27615__$1);
var G__27632 = null;
var G__27633 = (0);
var G__27634 = (0);
seq__27615 = G__27631;
chunk__27616 = G__27632;
count__27617 = G__27633;
i__27618 = G__27634;
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
var args27635 = [];
var len__17899__auto___27638 = arguments.length;
var i__17900__auto___27639 = (0);
while(true){
if((i__17900__auto___27639 < len__17899__auto___27638)){
args27635.push((arguments[i__17900__auto___27639]));

var G__27640 = (i__17900__auto___27639 + (1));
i__17900__auto___27639 = G__27640;
continue;
} else {
}
break;
}

var G__27637 = args27635.length;
switch (G__27637) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27635.length)].join('')));

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
var len__17899__auto___27646 = arguments.length;
var i__17900__auto___27647 = (0);
while(true){
if((i__17900__auto___27647 < len__17899__auto___27646)){
args__17906__auto__.push((arguments[i__17900__auto___27647]));

var G__27648 = (i__17900__auto___27647 + (1));
i__17900__auto___27647 = G__27648;
continue;
} else {
}
break;
}

var argseq__17907__auto__ = ((((0) < args__17906__auto__.length))?(new cljs.core.IndexedSeq(args__17906__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17907__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__27643){
var map__27644 = p__27643;
var map__27644__$1 = ((((!((map__27644 == null)))?((((map__27644.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27644.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27644):map__27644);
var opts = map__27644__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq27642){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27642));
});

//# sourceMappingURL=client.js.map