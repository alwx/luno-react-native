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
var seq__26519_26533 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26520_26534 = null;
var count__26521_26535 = (0);
var i__26522_26536 = (0);
while(true){
if((i__26522_26536 < count__26521_26535)){
var f_26537 = cljs.core._nth.call(null,chunk__26520_26534,i__26522_26536);
cljs.core.println.call(null,"  ",f_26537);

var G__26538 = seq__26519_26533;
var G__26539 = chunk__26520_26534;
var G__26540 = count__26521_26535;
var G__26541 = (i__26522_26536 + (1));
seq__26519_26533 = G__26538;
chunk__26520_26534 = G__26539;
count__26521_26535 = G__26540;
i__26522_26536 = G__26541;
continue;
} else {
var temp__4425__auto___26542 = cljs.core.seq.call(null,seq__26519_26533);
if(temp__4425__auto___26542){
var seq__26519_26543__$1 = temp__4425__auto___26542;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26519_26543__$1)){
var c__17658__auto___26544 = cljs.core.chunk_first.call(null,seq__26519_26543__$1);
var G__26545 = cljs.core.chunk_rest.call(null,seq__26519_26543__$1);
var G__26546 = c__17658__auto___26544;
var G__26547 = cljs.core.count.call(null,c__17658__auto___26544);
var G__26548 = (0);
seq__26519_26533 = G__26545;
chunk__26520_26534 = G__26546;
count__26521_26535 = G__26547;
i__26522_26536 = G__26548;
continue;
} else {
var f_26549 = cljs.core.first.call(null,seq__26519_26543__$1);
cljs.core.println.call(null,"  ",f_26549);

var G__26550 = cljs.core.next.call(null,seq__26519_26543__$1);
var G__26551 = null;
var G__26552 = (0);
var G__26553 = (0);
seq__26519_26533 = G__26550;
chunk__26520_26534 = G__26551;
count__26521_26535 = G__26552;
i__26522_26536 = G__26553;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26554 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16855__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16855__auto__)){
return or__16855__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26554);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26554)))?cljs.core.second.call(null,arglists_26554):arglists_26554));
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
var seq__26523 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26524 = null;
var count__26525 = (0);
var i__26526 = (0);
while(true){
if((i__26526 < count__26525)){
var vec__26527 = cljs.core._nth.call(null,chunk__26524,i__26526);
var name = cljs.core.nth.call(null,vec__26527,(0),null);
var map__26528 = cljs.core.nth.call(null,vec__26527,(1),null);
var map__26528__$1 = ((((!((map__26528 == null)))?((((map__26528.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26528.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26528):map__26528);
var doc = cljs.core.get.call(null,map__26528__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26528__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26555 = seq__26523;
var G__26556 = chunk__26524;
var G__26557 = count__26525;
var G__26558 = (i__26526 + (1));
seq__26523 = G__26555;
chunk__26524 = G__26556;
count__26525 = G__26557;
i__26526 = G__26558;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26523);
if(temp__4425__auto__){
var seq__26523__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26523__$1)){
var c__17658__auto__ = cljs.core.chunk_first.call(null,seq__26523__$1);
var G__26559 = cljs.core.chunk_rest.call(null,seq__26523__$1);
var G__26560 = c__17658__auto__;
var G__26561 = cljs.core.count.call(null,c__17658__auto__);
var G__26562 = (0);
seq__26523 = G__26559;
chunk__26524 = G__26560;
count__26525 = G__26561;
i__26526 = G__26562;
continue;
} else {
var vec__26530 = cljs.core.first.call(null,seq__26523__$1);
var name = cljs.core.nth.call(null,vec__26530,(0),null);
var map__26531 = cljs.core.nth.call(null,vec__26530,(1),null);
var map__26531__$1 = ((((!((map__26531 == null)))?((((map__26531.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26531.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26531):map__26531);
var doc = cljs.core.get.call(null,map__26531__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26531__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26563 = cljs.core.next.call(null,seq__26523__$1);
var G__26564 = null;
var G__26565 = (0);
var G__26566 = (0);
seq__26523 = G__26563;
chunk__26524 = G__26564;
count__26525 = G__26565;
i__26526 = G__26566;
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