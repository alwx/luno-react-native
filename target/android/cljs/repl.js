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
var seq__26505_26519 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26506_26520 = null;
var count__26507_26521 = (0);
var i__26508_26522 = (0);
while(true){
if((i__26508_26522 < count__26507_26521)){
var f_26523 = cljs.core._nth.call(null,chunk__26506_26520,i__26508_26522);
cljs.core.println.call(null,"  ",f_26523);

var G__26524 = seq__26505_26519;
var G__26525 = chunk__26506_26520;
var G__26526 = count__26507_26521;
var G__26527 = (i__26508_26522 + (1));
seq__26505_26519 = G__26524;
chunk__26506_26520 = G__26525;
count__26507_26521 = G__26526;
i__26508_26522 = G__26527;
continue;
} else {
var temp__4425__auto___26528 = cljs.core.seq.call(null,seq__26505_26519);
if(temp__4425__auto___26528){
var seq__26505_26529__$1 = temp__4425__auto___26528;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26505_26529__$1)){
var c__17644__auto___26530 = cljs.core.chunk_first.call(null,seq__26505_26529__$1);
var G__26531 = cljs.core.chunk_rest.call(null,seq__26505_26529__$1);
var G__26532 = c__17644__auto___26530;
var G__26533 = cljs.core.count.call(null,c__17644__auto___26530);
var G__26534 = (0);
seq__26505_26519 = G__26531;
chunk__26506_26520 = G__26532;
count__26507_26521 = G__26533;
i__26508_26522 = G__26534;
continue;
} else {
var f_26535 = cljs.core.first.call(null,seq__26505_26529__$1);
cljs.core.println.call(null,"  ",f_26535);

var G__26536 = cljs.core.next.call(null,seq__26505_26529__$1);
var G__26537 = null;
var G__26538 = (0);
var G__26539 = (0);
seq__26505_26519 = G__26536;
chunk__26506_26520 = G__26537;
count__26507_26521 = G__26538;
i__26508_26522 = G__26539;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26540 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16841__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16841__auto__)){
return or__16841__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26540);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26540)))?cljs.core.second.call(null,arglists_26540):arglists_26540));
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
var seq__26509 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26510 = null;
var count__26511 = (0);
var i__26512 = (0);
while(true){
if((i__26512 < count__26511)){
var vec__26513 = cljs.core._nth.call(null,chunk__26510,i__26512);
var name = cljs.core.nth.call(null,vec__26513,(0),null);
var map__26514 = cljs.core.nth.call(null,vec__26513,(1),null);
var map__26514__$1 = ((((!((map__26514 == null)))?((((map__26514.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26514.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26514):map__26514);
var doc = cljs.core.get.call(null,map__26514__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26514__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26541 = seq__26509;
var G__26542 = chunk__26510;
var G__26543 = count__26511;
var G__26544 = (i__26512 + (1));
seq__26509 = G__26541;
chunk__26510 = G__26542;
count__26511 = G__26543;
i__26512 = G__26544;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26509);
if(temp__4425__auto__){
var seq__26509__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26509__$1)){
var c__17644__auto__ = cljs.core.chunk_first.call(null,seq__26509__$1);
var G__26545 = cljs.core.chunk_rest.call(null,seq__26509__$1);
var G__26546 = c__17644__auto__;
var G__26547 = cljs.core.count.call(null,c__17644__auto__);
var G__26548 = (0);
seq__26509 = G__26545;
chunk__26510 = G__26546;
count__26511 = G__26547;
i__26512 = G__26548;
continue;
} else {
var vec__26516 = cljs.core.first.call(null,seq__26509__$1);
var name = cljs.core.nth.call(null,vec__26516,(0),null);
var map__26517 = cljs.core.nth.call(null,vec__26516,(1),null);
var map__26517__$1 = ((((!((map__26517 == null)))?((((map__26517.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26517.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26517):map__26517);
var doc = cljs.core.get.call(null,map__26517__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26517__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26549 = cljs.core.next.call(null,seq__26509__$1);
var G__26550 = null;
var G__26551 = (0);
var G__26552 = (0);
seq__26509 = G__26549;
chunk__26510 = G__26550;
count__26511 = G__26551;
i__26512 = G__26552;
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