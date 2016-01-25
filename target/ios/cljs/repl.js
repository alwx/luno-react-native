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
var seq__26507_26521 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26508_26522 = null;
var count__26509_26523 = (0);
var i__26510_26524 = (0);
while(true){
if((i__26510_26524 < count__26509_26523)){
var f_26525 = cljs.core._nth.call(null,chunk__26508_26522,i__26510_26524);
cljs.core.println.call(null,"  ",f_26525);

var G__26526 = seq__26507_26521;
var G__26527 = chunk__26508_26522;
var G__26528 = count__26509_26523;
var G__26529 = (i__26510_26524 + (1));
seq__26507_26521 = G__26526;
chunk__26508_26522 = G__26527;
count__26509_26523 = G__26528;
i__26510_26524 = G__26529;
continue;
} else {
var temp__4425__auto___26530 = cljs.core.seq.call(null,seq__26507_26521);
if(temp__4425__auto___26530){
var seq__26507_26531__$1 = temp__4425__auto___26530;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26507_26531__$1)){
var c__17644__auto___26532 = cljs.core.chunk_first.call(null,seq__26507_26531__$1);
var G__26533 = cljs.core.chunk_rest.call(null,seq__26507_26531__$1);
var G__26534 = c__17644__auto___26532;
var G__26535 = cljs.core.count.call(null,c__17644__auto___26532);
var G__26536 = (0);
seq__26507_26521 = G__26533;
chunk__26508_26522 = G__26534;
count__26509_26523 = G__26535;
i__26510_26524 = G__26536;
continue;
} else {
var f_26537 = cljs.core.first.call(null,seq__26507_26531__$1);
cljs.core.println.call(null,"  ",f_26537);

var G__26538 = cljs.core.next.call(null,seq__26507_26531__$1);
var G__26539 = null;
var G__26540 = (0);
var G__26541 = (0);
seq__26507_26521 = G__26538;
chunk__26508_26522 = G__26539;
count__26509_26523 = G__26540;
i__26510_26524 = G__26541;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26542 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16841__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16841__auto__)){
return or__16841__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26542);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26542)))?cljs.core.second.call(null,arglists_26542):arglists_26542));
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
var seq__26511 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26512 = null;
var count__26513 = (0);
var i__26514 = (0);
while(true){
if((i__26514 < count__26513)){
var vec__26515 = cljs.core._nth.call(null,chunk__26512,i__26514);
var name = cljs.core.nth.call(null,vec__26515,(0),null);
var map__26516 = cljs.core.nth.call(null,vec__26515,(1),null);
var map__26516__$1 = ((((!((map__26516 == null)))?((((map__26516.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26516.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26516):map__26516);
var doc = cljs.core.get.call(null,map__26516__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26516__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26543 = seq__26511;
var G__26544 = chunk__26512;
var G__26545 = count__26513;
var G__26546 = (i__26514 + (1));
seq__26511 = G__26543;
chunk__26512 = G__26544;
count__26513 = G__26545;
i__26514 = G__26546;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26511);
if(temp__4425__auto__){
var seq__26511__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26511__$1)){
var c__17644__auto__ = cljs.core.chunk_first.call(null,seq__26511__$1);
var G__26547 = cljs.core.chunk_rest.call(null,seq__26511__$1);
var G__26548 = c__17644__auto__;
var G__26549 = cljs.core.count.call(null,c__17644__auto__);
var G__26550 = (0);
seq__26511 = G__26547;
chunk__26512 = G__26548;
count__26513 = G__26549;
i__26514 = G__26550;
continue;
} else {
var vec__26518 = cljs.core.first.call(null,seq__26511__$1);
var name = cljs.core.nth.call(null,vec__26518,(0),null);
var map__26519 = cljs.core.nth.call(null,vec__26518,(1),null);
var map__26519__$1 = ((((!((map__26519 == null)))?((((map__26519.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26519.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26519):map__26519);
var doc = cljs.core.get.call(null,map__26519__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26519__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26551 = cljs.core.next.call(null,seq__26511__$1);
var G__26552 = null;
var G__26553 = (0);
var G__26554 = (0);
seq__26511 = G__26551;
chunk__26512 = G__26552;
count__26513 = G__26553;
i__26514 = G__26554;
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