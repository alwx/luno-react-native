// Compiled by ClojureScript 1.7.170 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__18201,handler){
var map__18202 = p__18201;
var map__18202__$1 = ((((!((map__18202 == null)))?((((map__18202.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18202.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18202):map__18202);
var uri = cljs.core.get.call(null,map__18202__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__18202__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__18202__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__18202__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__18202__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__18202__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__18202__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__18202,map__18202__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__18200_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__18200_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__18202,map__18202__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___18210 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___18210)){
var response_type_18211 = temp__4425__auto___18210;
this$__$1.responseType = cljs.core.name.call(null,response_type_18211);
} else {
}

var seq__18204_18212 = cljs.core.seq.call(null,headers);
var chunk__18205_18213 = null;
var count__18206_18214 = (0);
var i__18207_18215 = (0);
while(true){
if((i__18207_18215 < count__18206_18214)){
var vec__18208_18216 = cljs.core._nth.call(null,chunk__18205_18213,i__18207_18215);
var k_18217 = cljs.core.nth.call(null,vec__18208_18216,(0),null);
var v_18218 = cljs.core.nth.call(null,vec__18208_18216,(1),null);
this$__$1.setRequestHeader(k_18217,v_18218);

var G__18219 = seq__18204_18212;
var G__18220 = chunk__18205_18213;
var G__18221 = count__18206_18214;
var G__18222 = (i__18207_18215 + (1));
seq__18204_18212 = G__18219;
chunk__18205_18213 = G__18220;
count__18206_18214 = G__18221;
i__18207_18215 = G__18222;
continue;
} else {
var temp__4425__auto___18223 = cljs.core.seq.call(null,seq__18204_18212);
if(temp__4425__auto___18223){
var seq__18204_18224__$1 = temp__4425__auto___18223;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18204_18224__$1)){
var c__17644__auto___18225 = cljs.core.chunk_first.call(null,seq__18204_18224__$1);
var G__18226 = cljs.core.chunk_rest.call(null,seq__18204_18224__$1);
var G__18227 = c__17644__auto___18225;
var G__18228 = cljs.core.count.call(null,c__17644__auto___18225);
var G__18229 = (0);
seq__18204_18212 = G__18226;
chunk__18205_18213 = G__18227;
count__18206_18214 = G__18228;
i__18207_18215 = G__18229;
continue;
} else {
var vec__18209_18230 = cljs.core.first.call(null,seq__18204_18224__$1);
var k_18231 = cljs.core.nth.call(null,vec__18209_18230,(0),null);
var v_18232 = cljs.core.nth.call(null,vec__18209_18230,(1),null);
this$__$1.setRequestHeader(k_18231,v_18232);

var G__18233 = cljs.core.next.call(null,seq__18204_18224__$1);
var G__18234 = null;
var G__18235 = (0);
var G__18236 = (0);
seq__18204_18212 = G__18233;
chunk__18205_18213 = G__18234;
count__18206_18214 = G__18235;
i__18207_18215 = G__18236;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__16841__auto__ = body;
if(cljs.core.truth_(or__16841__auto__)){
return or__16841__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map