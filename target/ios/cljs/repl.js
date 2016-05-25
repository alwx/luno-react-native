// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26518_26532 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26519_26533 = null;
var count__26520_26534 = (0);
var i__26521_26535 = (0);
while(true){
if((i__26521_26535 < count__26520_26534)){
var f_26536 = cljs.core._nth.call(null,chunk__26519_26533,i__26521_26535);
cljs.core.println.call(null,"  ",f_26536);

var G__26537 = seq__26518_26532;
var G__26538 = chunk__26519_26533;
var G__26539 = count__26520_26534;
var G__26540 = (i__26521_26535 + (1));
seq__26518_26532 = G__26537;
chunk__26519_26533 = G__26538;
count__26520_26534 = G__26539;
i__26521_26535 = G__26540;
continue;
} else {
var temp__4425__auto___26541 = cljs.core.seq.call(null,seq__26518_26532);
if(temp__4425__auto___26541){
var seq__26518_26542__$1 = temp__4425__auto___26541;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26518_26542__$1)){
var c__17658__auto___26543 = cljs.core.chunk_first.call(null,seq__26518_26542__$1);
var G__26544 = cljs.core.chunk_rest.call(null,seq__26518_26542__$1);
var G__26545 = c__17658__auto___26543;
var G__26546 = cljs.core.count.call(null,c__17658__auto___26543);
var G__26547 = (0);
seq__26518_26532 = G__26544;
chunk__26519_26533 = G__26545;
count__26520_26534 = G__26546;
i__26521_26535 = G__26547;
continue;
} else {
var f_26548 = cljs.core.first.call(null,seq__26518_26542__$1);
cljs.core.println.call(null,"  ",f_26548);

var G__26549 = cljs.core.next.call(null,seq__26518_26542__$1);
var G__26550 = null;
var G__26551 = (0);
var G__26552 = (0);
seq__26518_26532 = G__26549;
chunk__26519_26533 = G__26550;
count__26520_26534 = G__26551;
i__26521_26535 = G__26552;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26553 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16855__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16855__auto__)){
return or__16855__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26553);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26553)))?cljs.core.second.call(null,arglists_26553):arglists_26553));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26522 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26523 = null;
var count__26524 = (0);
var i__26525 = (0);
while(true){
if((i__26525 < count__26524)){
var vec__26526 = cljs.core._nth.call(null,chunk__26523,i__26525);
var name = cljs.core.nth.call(null,vec__26526,(0),null);
var map__26527 = cljs.core.nth.call(null,vec__26526,(1),null);
var map__26527__$1 = ((((!((map__26527 == null)))?((((map__26527.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26527.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26527):map__26527);
var doc = cljs.core.get.call(null,map__26527__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26527__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26554 = seq__26522;
var G__26555 = chunk__26523;
var G__26556 = count__26524;
var G__26557 = (i__26525 + (1));
seq__26522 = G__26554;
chunk__26523 = G__26555;
count__26524 = G__26556;
i__26525 = G__26557;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26522);
if(temp__4425__auto__){
var seq__26522__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26522__$1)){
var c__17658__auto__ = cljs.core.chunk_first.call(null,seq__26522__$1);
var G__26558 = cljs.core.chunk_rest.call(null,seq__26522__$1);
var G__26559 = c__17658__auto__;
var G__26560 = cljs.core.count.call(null,c__17658__auto__);
var G__26561 = (0);
seq__26522 = G__26558;
chunk__26523 = G__26559;
count__26524 = G__26560;
i__26525 = G__26561;
continue;
} else {
var vec__26529 = cljs.core.first.call(null,seq__26522__$1);
var name = cljs.core.nth.call(null,vec__26529,(0),null);
var map__26530 = cljs.core.nth.call(null,vec__26529,(1),null);
var map__26530__$1 = ((((!((map__26530 == null)))?((((map__26530.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26530.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26530):map__26530);
var doc = cljs.core.get.call(null,map__26530__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26530__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26562 = cljs.core.next.call(null,seq__26522__$1);
var G__26563 = null;
var G__26564 = (0);
var G__26565 = (0);
seq__26522 = G__26562;
chunk__26523 = G__26563;
count__26524 = G__26564;
i__26525 = G__26565;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map