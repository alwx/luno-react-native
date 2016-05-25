// Compiled by ClojureScript 1.7.170 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__18215,handler){
var map__18216 = p__18215;
var map__18216__$1 = ((((!((map__18216 == null)))?((((map__18216.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18216.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18216):map__18216);
var uri = cljs.core.get.call(null,map__18216__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__18216__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__18216__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__18216__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__18216__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__18216__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__18216__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__18216,map__18216__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__18214_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__18214_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__18216,map__18216__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___18224 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___18224)){
var response_type_18225 = temp__4425__auto___18224;
this$__$1.responseType = cljs.core.name.call(null,response_type_18225);
} else {
}

var seq__18218_18226 = cljs.core.seq.call(null,headers);
var chunk__18219_18227 = null;
var count__18220_18228 = (0);
var i__18221_18229 = (0);
while(true){
if((i__18221_18229 < count__18220_18228)){
var vec__18222_18230 = cljs.core._nth.call(null,chunk__18219_18227,i__18221_18229);
var k_18231 = cljs.core.nth.call(null,vec__18222_18230,(0),null);
var v_18232 = cljs.core.nth.call(null,vec__18222_18230,(1),null);
this$__$1.setRequestHeader(k_18231,v_18232);

var G__18233 = seq__18218_18226;
var G__18234 = chunk__18219_18227;
var G__18235 = count__18220_18228;
var G__18236 = (i__18221_18229 + (1));
seq__18218_18226 = G__18233;
chunk__18219_18227 = G__18234;
count__18220_18228 = G__18235;
i__18221_18229 = G__18236;
continue;
} else {
var temp__4425__auto___18237 = cljs.core.seq.call(null,seq__18218_18226);
if(temp__4425__auto___18237){
var seq__18218_18238__$1 = temp__4425__auto___18237;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18218_18238__$1)){
var c__17658__auto___18239 = cljs.core.chunk_first.call(null,seq__18218_18238__$1);
var G__18240 = cljs.core.chunk_rest.call(null,seq__18218_18238__$1);
var G__18241 = c__17658__auto___18239;
var G__18242 = cljs.core.count.call(null,c__17658__auto___18239);
var G__18243 = (0);
seq__18218_18226 = G__18240;
chunk__18219_18227 = G__18241;
count__18220_18228 = G__18242;
i__18221_18229 = G__18243;
continue;
} else {
var vec__18223_18244 = cljs.core.first.call(null,seq__18218_18238__$1);
var k_18245 = cljs.core.nth.call(null,vec__18223_18244,(0),null);
var v_18246 = cljs.core.nth.call(null,vec__18223_18244,(1),null);
this$__$1.setRequestHeader(k_18245,v_18246);

var G__18247 = cljs.core.next.call(null,seq__18218_18238__$1);
var G__18248 = null;
var G__18249 = (0);
var G__18250 = (0);
seq__18218_18226 = G__18247;
chunk__18219_18227 = G__18248;
count__18220_18228 = G__18249;
i__18221_18229 = G__18250;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__16855__auto__ = body;
if(cljs.core.truth_(or__16855__auto__)){
return or__16855__auto__;
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