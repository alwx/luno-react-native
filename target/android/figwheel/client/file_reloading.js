// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16841__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16841__auto__){
return or__16841__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16841__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16841__auto__)){
return or__16841__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__25481_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__25481_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__25486 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__25487 = null;
var count__25488 = (0);
var i__25489 = (0);
while(true){
if((i__25489 < count__25488)){
var n = cljs.core._nth.call(null,chunk__25487,i__25489);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25490 = seq__25486;
var G__25491 = chunk__25487;
var G__25492 = count__25488;
var G__25493 = (i__25489 + (1));
seq__25486 = G__25490;
chunk__25487 = G__25491;
count__25488 = G__25492;
i__25489 = G__25493;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25486);
if(temp__4425__auto__){
var seq__25486__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25486__$1)){
var c__17644__auto__ = cljs.core.chunk_first.call(null,seq__25486__$1);
var G__25494 = cljs.core.chunk_rest.call(null,seq__25486__$1);
var G__25495 = c__17644__auto__;
var G__25496 = cljs.core.count.call(null,c__17644__auto__);
var G__25497 = (0);
seq__25486 = G__25494;
chunk__25487 = G__25495;
count__25488 = G__25496;
i__25489 = G__25497;
continue;
} else {
var n = cljs.core.first.call(null,seq__25486__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25498 = cljs.core.next.call(null,seq__25486__$1);
var G__25499 = null;
var G__25500 = (0);
var G__25501 = (0);
seq__25486 = G__25498;
chunk__25487 = G__25499;
count__25488 = G__25500;
i__25489 = G__25501;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__25540_25547 = cljs.core.seq.call(null,deps);
var chunk__25541_25548 = null;
var count__25542_25549 = (0);
var i__25543_25550 = (0);
while(true){
if((i__25543_25550 < count__25542_25549)){
var dep_25551 = cljs.core._nth.call(null,chunk__25541_25548,i__25543_25550);
topo_sort_helper_STAR_.call(null,dep_25551,(depth + (1)),state);

var G__25552 = seq__25540_25547;
var G__25553 = chunk__25541_25548;
var G__25554 = count__25542_25549;
var G__25555 = (i__25543_25550 + (1));
seq__25540_25547 = G__25552;
chunk__25541_25548 = G__25553;
count__25542_25549 = G__25554;
i__25543_25550 = G__25555;
continue;
} else {
var temp__4425__auto___25556 = cljs.core.seq.call(null,seq__25540_25547);
if(temp__4425__auto___25556){
var seq__25540_25557__$1 = temp__4425__auto___25556;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25540_25557__$1)){
var c__17644__auto___25558 = cljs.core.chunk_first.call(null,seq__25540_25557__$1);
var G__25559 = cljs.core.chunk_rest.call(null,seq__25540_25557__$1);
var G__25560 = c__17644__auto___25558;
var G__25561 = cljs.core.count.call(null,c__17644__auto___25558);
var G__25562 = (0);
seq__25540_25547 = G__25559;
chunk__25541_25548 = G__25560;
count__25542_25549 = G__25561;
i__25543_25550 = G__25562;
continue;
} else {
var dep_25563 = cljs.core.first.call(null,seq__25540_25557__$1);
topo_sort_helper_STAR_.call(null,dep_25563,(depth + (1)),state);

var G__25564 = cljs.core.next.call(null,seq__25540_25557__$1);
var G__25565 = null;
var G__25566 = (0);
var G__25567 = (0);
seq__25540_25547 = G__25564;
chunk__25541_25548 = G__25565;
count__25542_25549 = G__25566;
i__25543_25550 = G__25567;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__25544){
var vec__25546 = p__25544;
var x = cljs.core.nth.call(null,vec__25546,(0),null);
var xs = cljs.core.nthnext.call(null,vec__25546,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__25546,x,xs,get_deps__$1){
return (function (p1__25502_SHARP_){
return clojure.set.difference.call(null,p1__25502_SHARP_,x);
});})(vec__25546,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__25580 = cljs.core.seq.call(null,provides);
var chunk__25581 = null;
var count__25582 = (0);
var i__25583 = (0);
while(true){
if((i__25583 < count__25582)){
var prov = cljs.core._nth.call(null,chunk__25581,i__25583);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25584_25592 = cljs.core.seq.call(null,requires);
var chunk__25585_25593 = null;
var count__25586_25594 = (0);
var i__25587_25595 = (0);
while(true){
if((i__25587_25595 < count__25586_25594)){
var req_25596 = cljs.core._nth.call(null,chunk__25585_25593,i__25587_25595);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25596,prov);

var G__25597 = seq__25584_25592;
var G__25598 = chunk__25585_25593;
var G__25599 = count__25586_25594;
var G__25600 = (i__25587_25595 + (1));
seq__25584_25592 = G__25597;
chunk__25585_25593 = G__25598;
count__25586_25594 = G__25599;
i__25587_25595 = G__25600;
continue;
} else {
var temp__4425__auto___25601 = cljs.core.seq.call(null,seq__25584_25592);
if(temp__4425__auto___25601){
var seq__25584_25602__$1 = temp__4425__auto___25601;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25584_25602__$1)){
var c__17644__auto___25603 = cljs.core.chunk_first.call(null,seq__25584_25602__$1);
var G__25604 = cljs.core.chunk_rest.call(null,seq__25584_25602__$1);
var G__25605 = c__17644__auto___25603;
var G__25606 = cljs.core.count.call(null,c__17644__auto___25603);
var G__25607 = (0);
seq__25584_25592 = G__25604;
chunk__25585_25593 = G__25605;
count__25586_25594 = G__25606;
i__25587_25595 = G__25607;
continue;
} else {
var req_25608 = cljs.core.first.call(null,seq__25584_25602__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25608,prov);

var G__25609 = cljs.core.next.call(null,seq__25584_25602__$1);
var G__25610 = null;
var G__25611 = (0);
var G__25612 = (0);
seq__25584_25592 = G__25609;
chunk__25585_25593 = G__25610;
count__25586_25594 = G__25611;
i__25587_25595 = G__25612;
continue;
}
} else {
}
}
break;
}

var G__25613 = seq__25580;
var G__25614 = chunk__25581;
var G__25615 = count__25582;
var G__25616 = (i__25583 + (1));
seq__25580 = G__25613;
chunk__25581 = G__25614;
count__25582 = G__25615;
i__25583 = G__25616;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25580);
if(temp__4425__auto__){
var seq__25580__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25580__$1)){
var c__17644__auto__ = cljs.core.chunk_first.call(null,seq__25580__$1);
var G__25617 = cljs.core.chunk_rest.call(null,seq__25580__$1);
var G__25618 = c__17644__auto__;
var G__25619 = cljs.core.count.call(null,c__17644__auto__);
var G__25620 = (0);
seq__25580 = G__25617;
chunk__25581 = G__25618;
count__25582 = G__25619;
i__25583 = G__25620;
continue;
} else {
var prov = cljs.core.first.call(null,seq__25580__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25588_25621 = cljs.core.seq.call(null,requires);
var chunk__25589_25622 = null;
var count__25590_25623 = (0);
var i__25591_25624 = (0);
while(true){
if((i__25591_25624 < count__25590_25623)){
var req_25625 = cljs.core._nth.call(null,chunk__25589_25622,i__25591_25624);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25625,prov);

var G__25626 = seq__25588_25621;
var G__25627 = chunk__25589_25622;
var G__25628 = count__25590_25623;
var G__25629 = (i__25591_25624 + (1));
seq__25588_25621 = G__25626;
chunk__25589_25622 = G__25627;
count__25590_25623 = G__25628;
i__25591_25624 = G__25629;
continue;
} else {
var temp__4425__auto___25630__$1 = cljs.core.seq.call(null,seq__25588_25621);
if(temp__4425__auto___25630__$1){
var seq__25588_25631__$1 = temp__4425__auto___25630__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25588_25631__$1)){
var c__17644__auto___25632 = cljs.core.chunk_first.call(null,seq__25588_25631__$1);
var G__25633 = cljs.core.chunk_rest.call(null,seq__25588_25631__$1);
var G__25634 = c__17644__auto___25632;
var G__25635 = cljs.core.count.call(null,c__17644__auto___25632);
var G__25636 = (0);
seq__25588_25621 = G__25633;
chunk__25589_25622 = G__25634;
count__25590_25623 = G__25635;
i__25591_25624 = G__25636;
continue;
} else {
var req_25637 = cljs.core.first.call(null,seq__25588_25631__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25637,prov);

var G__25638 = cljs.core.next.call(null,seq__25588_25631__$1);
var G__25639 = null;
var G__25640 = (0);
var G__25641 = (0);
seq__25588_25621 = G__25638;
chunk__25589_25622 = G__25639;
count__25590_25623 = G__25640;
i__25591_25624 = G__25641;
continue;
}
} else {
}
}
break;
}

var G__25642 = cljs.core.next.call(null,seq__25580__$1);
var G__25643 = null;
var G__25644 = (0);
var G__25645 = (0);
seq__25580 = G__25642;
chunk__25581 = G__25643;
count__25582 = G__25644;
i__25583 = G__25645;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__25650_25654 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__25651_25655 = null;
var count__25652_25656 = (0);
var i__25653_25657 = (0);
while(true){
if((i__25653_25657 < count__25652_25656)){
var ns_25658 = cljs.core._nth.call(null,chunk__25651_25655,i__25653_25657);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25658);

var G__25659 = seq__25650_25654;
var G__25660 = chunk__25651_25655;
var G__25661 = count__25652_25656;
var G__25662 = (i__25653_25657 + (1));
seq__25650_25654 = G__25659;
chunk__25651_25655 = G__25660;
count__25652_25656 = G__25661;
i__25653_25657 = G__25662;
continue;
} else {
var temp__4425__auto___25663 = cljs.core.seq.call(null,seq__25650_25654);
if(temp__4425__auto___25663){
var seq__25650_25664__$1 = temp__4425__auto___25663;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25650_25664__$1)){
var c__17644__auto___25665 = cljs.core.chunk_first.call(null,seq__25650_25664__$1);
var G__25666 = cljs.core.chunk_rest.call(null,seq__25650_25664__$1);
var G__25667 = c__17644__auto___25665;
var G__25668 = cljs.core.count.call(null,c__17644__auto___25665);
var G__25669 = (0);
seq__25650_25654 = G__25666;
chunk__25651_25655 = G__25667;
count__25652_25656 = G__25668;
i__25653_25657 = G__25669;
continue;
} else {
var ns_25670 = cljs.core.first.call(null,seq__25650_25664__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25670);

var G__25671 = cljs.core.next.call(null,seq__25650_25664__$1);
var G__25672 = null;
var G__25673 = (0);
var G__25674 = (0);
seq__25650_25654 = G__25671;
chunk__25651_25655 = G__25672;
count__25652_25656 = G__25673;
i__25653_25657 = G__25674;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16841__auto__ = goog.require__;
if(cljs.core.truth_(or__16841__auto__)){
return or__16841__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__25675__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__25675 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25676__i = 0, G__25676__a = new Array(arguments.length -  0);
while (G__25676__i < G__25676__a.length) {G__25676__a[G__25676__i] = arguments[G__25676__i + 0]; ++G__25676__i;}
  args = new cljs.core.IndexedSeq(G__25676__a,0);
} 
return G__25675__delegate.call(this,args);};
G__25675.cljs$lang$maxFixedArity = 0;
G__25675.cljs$lang$applyTo = (function (arglist__25677){
var args = cljs.core.seq(arglist__25677);
return G__25675__delegate(args);
});
G__25675.cljs$core$IFn$_invoke$arity$variadic = G__25675__delegate;
return G__25675;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__25679 = cljs.core._EQ_;
var expr__25680 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__25679.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__25680))){
var path_parts = ((function (pred__25679,expr__25680){
return (function (p1__25678_SHARP_){
return clojure.string.split.call(null,p1__25678_SHARP_,/[\/\\]/);
});})(pred__25679,expr__25680))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__25679,expr__25680){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e25682){if((e25682 instanceof Error)){
var e = e25682;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25682;

}
}})());
});
;})(path_parts,sep,root,pred__25679,expr__25680))
} else {
if(cljs.core.truth_(pred__25679.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__25680))){
return ((function (pred__25679,expr__25680){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__25679,expr__25680){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__25679,expr__25680))
);

return deferred.addErrback(((function (deferred,pred__25679,expr__25680){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__25679,expr__25680))
);
});
;})(pred__25679,expr__25680))
} else {
return ((function (pred__25679,expr__25680){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__25679,expr__25680))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25683,callback){
var map__25686 = p__25683;
var map__25686__$1 = ((((!((map__25686 == null)))?((((map__25686.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25686.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25686):map__25686);
var file_msg = map__25686__$1;
var request_url = cljs.core.get.call(null,map__25686__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__25686,map__25686__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25686,map__25686__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__22648__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22648__auto__){
return (function (){
var f__22649__auto__ = (function (){var switch__22536__auto__ = ((function (c__22648__auto__){
return (function (state_25710){
var state_val_25711 = (state_25710[(1)]);
if((state_val_25711 === (7))){
var inst_25706 = (state_25710[(2)]);
var state_25710__$1 = state_25710;
var statearr_25712_25732 = state_25710__$1;
(statearr_25712_25732[(2)] = inst_25706);

(statearr_25712_25732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25711 === (1))){
var state_25710__$1 = state_25710;
var statearr_25713_25733 = state_25710__$1;
(statearr_25713_25733[(2)] = null);

(statearr_25713_25733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25711 === (4))){
var inst_25690 = (state_25710[(7)]);
var inst_25690__$1 = (state_25710[(2)]);
var state_25710__$1 = (function (){var statearr_25714 = state_25710;
(statearr_25714[(7)] = inst_25690__$1);

return statearr_25714;
})();
if(cljs.core.truth_(inst_25690__$1)){
var statearr_25715_25734 = state_25710__$1;
(statearr_25715_25734[(1)] = (5));

} else {
var statearr_25716_25735 = state_25710__$1;
(statearr_25716_25735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25711 === (6))){
var state_25710__$1 = state_25710;
var statearr_25717_25736 = state_25710__$1;
(statearr_25717_25736[(2)] = null);

(statearr_25717_25736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25711 === (3))){
var inst_25708 = (state_25710[(2)]);
var state_25710__$1 = state_25710;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25710__$1,inst_25708);
} else {
if((state_val_25711 === (2))){
var state_25710__$1 = state_25710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25710__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_25711 === (11))){
var inst_25702 = (state_25710[(2)]);
var state_25710__$1 = (function (){var statearr_25718 = state_25710;
(statearr_25718[(8)] = inst_25702);

return statearr_25718;
})();
var statearr_25719_25737 = state_25710__$1;
(statearr_25719_25737[(2)] = null);

(statearr_25719_25737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25711 === (9))){
var inst_25694 = (state_25710[(9)]);
var inst_25696 = (state_25710[(10)]);
var inst_25698 = inst_25696.call(null,inst_25694);
var state_25710__$1 = state_25710;
var statearr_25720_25738 = state_25710__$1;
(statearr_25720_25738[(2)] = inst_25698);

(statearr_25720_25738[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25711 === (5))){
var inst_25690 = (state_25710[(7)]);
var inst_25692 = figwheel.client.file_reloading.blocking_load.call(null,inst_25690);
var state_25710__$1 = state_25710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25710__$1,(8),inst_25692);
} else {
if((state_val_25711 === (10))){
var inst_25694 = (state_25710[(9)]);
var inst_25700 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_25694);
var state_25710__$1 = state_25710;
var statearr_25721_25739 = state_25710__$1;
(statearr_25721_25739[(2)] = inst_25700);

(statearr_25721_25739[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25711 === (8))){
var inst_25690 = (state_25710[(7)]);
var inst_25696 = (state_25710[(10)]);
var inst_25694 = (state_25710[(2)]);
var inst_25695 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_25696__$1 = cljs.core.get.call(null,inst_25695,inst_25690);
var state_25710__$1 = (function (){var statearr_25722 = state_25710;
(statearr_25722[(9)] = inst_25694);

(statearr_25722[(10)] = inst_25696__$1);

return statearr_25722;
})();
if(cljs.core.truth_(inst_25696__$1)){
var statearr_25723_25740 = state_25710__$1;
(statearr_25723_25740[(1)] = (9));

} else {
var statearr_25724_25741 = state_25710__$1;
(statearr_25724_25741[(1)] = (10));

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
});})(c__22648__auto__))
;
return ((function (switch__22536__auto__,c__22648__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22537__auto__ = null;
var figwheel$client$file_reloading$state_machine__22537__auto____0 = (function (){
var statearr_25728 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25728[(0)] = figwheel$client$file_reloading$state_machine__22537__auto__);

(statearr_25728[(1)] = (1));

return statearr_25728;
});
var figwheel$client$file_reloading$state_machine__22537__auto____1 = (function (state_25710){
while(true){
var ret_value__22538__auto__ = (function (){try{while(true){
var result__22539__auto__ = switch__22536__auto__.call(null,state_25710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22539__auto__;
}
break;
}
}catch (e25729){if((e25729 instanceof Object)){
var ex__22540__auto__ = e25729;
var statearr_25730_25742 = state_25710;
(statearr_25730_25742[(5)] = ex__22540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25743 = state_25710;
state_25710 = G__25743;
continue;
} else {
return ret_value__22538__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22537__auto__ = function(state_25710){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22537__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22537__auto____1.call(this,state_25710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22537__auto____0;
figwheel$client$file_reloading$state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22537__auto____1;
return figwheel$client$file_reloading$state_machine__22537__auto__;
})()
;})(switch__22536__auto__,c__22648__auto__))
})();
var state__22650__auto__ = (function (){var statearr_25731 = f__22649__auto__.call(null);
(statearr_25731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22648__auto__);

return statearr_25731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22650__auto__);
});})(c__22648__auto__))
);

return c__22648__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__25744,callback){
var map__25747 = p__25744;
var map__25747__$1 = ((((!((map__25747 == null)))?((((map__25747.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25747.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25747):map__25747);
var file_msg = map__25747__$1;
var namespace = cljs.core.get.call(null,map__25747__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__25747,map__25747__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__25747,map__25747__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25749){
var map__25752 = p__25749;
var map__25752__$1 = ((((!((map__25752 == null)))?((((map__25752.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25752.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25752):map__25752);
var file_msg = map__25752__$1;
var namespace = cljs.core.get.call(null,map__25752__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16829__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16829__auto__){
var or__16841__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16841__auto__)){
return or__16841__auto__;
} else {
var or__16841__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16841__auto____$1)){
return or__16841__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16829__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25754,callback){
var map__25757 = p__25754;
var map__25757__$1 = ((((!((map__25757 == null)))?((((map__25757.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25757.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25757):map__25757);
var file_msg = map__25757__$1;
var request_url = cljs.core.get.call(null,map__25757__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25757__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__22648__auto___25845 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22648__auto___25845,out){
return (function (){
var f__22649__auto__ = (function (){var switch__22536__auto__ = ((function (c__22648__auto___25845,out){
return (function (state_25827){
var state_val_25828 = (state_25827[(1)]);
if((state_val_25828 === (1))){
var inst_25805 = cljs.core.nth.call(null,files,(0),null);
var inst_25806 = cljs.core.nthnext.call(null,files,(1));
var inst_25807 = files;
var state_25827__$1 = (function (){var statearr_25829 = state_25827;
(statearr_25829[(7)] = inst_25807);

(statearr_25829[(8)] = inst_25805);

(statearr_25829[(9)] = inst_25806);

return statearr_25829;
})();
var statearr_25830_25846 = state_25827__$1;
(statearr_25830_25846[(2)] = null);

(statearr_25830_25846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25828 === (2))){
var inst_25810 = (state_25827[(10)]);
var inst_25807 = (state_25827[(7)]);
var inst_25810__$1 = cljs.core.nth.call(null,inst_25807,(0),null);
var inst_25811 = cljs.core.nthnext.call(null,inst_25807,(1));
var inst_25812 = (inst_25810__$1 == null);
var inst_25813 = cljs.core.not.call(null,inst_25812);
var state_25827__$1 = (function (){var statearr_25831 = state_25827;
(statearr_25831[(11)] = inst_25811);

(statearr_25831[(10)] = inst_25810__$1);

return statearr_25831;
})();
if(inst_25813){
var statearr_25832_25847 = state_25827__$1;
(statearr_25832_25847[(1)] = (4));

} else {
var statearr_25833_25848 = state_25827__$1;
(statearr_25833_25848[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25828 === (3))){
var inst_25825 = (state_25827[(2)]);
var state_25827__$1 = state_25827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25827__$1,inst_25825);
} else {
if((state_val_25828 === (4))){
var inst_25810 = (state_25827[(10)]);
var inst_25815 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25810);
var state_25827__$1 = state_25827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25827__$1,(7),inst_25815);
} else {
if((state_val_25828 === (5))){
var inst_25821 = cljs.core.async.close_BANG_.call(null,out);
var state_25827__$1 = state_25827;
var statearr_25834_25849 = state_25827__$1;
(statearr_25834_25849[(2)] = inst_25821);

(statearr_25834_25849[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25828 === (6))){
var inst_25823 = (state_25827[(2)]);
var state_25827__$1 = state_25827;
var statearr_25835_25850 = state_25827__$1;
(statearr_25835_25850[(2)] = inst_25823);

(statearr_25835_25850[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25828 === (7))){
var inst_25811 = (state_25827[(11)]);
var inst_25817 = (state_25827[(2)]);
var inst_25818 = cljs.core.async.put_BANG_.call(null,out,inst_25817);
var inst_25807 = inst_25811;
var state_25827__$1 = (function (){var statearr_25836 = state_25827;
(statearr_25836[(7)] = inst_25807);

(statearr_25836[(12)] = inst_25818);

return statearr_25836;
})();
var statearr_25837_25851 = state_25827__$1;
(statearr_25837_25851[(2)] = null);

(statearr_25837_25851[(1)] = (2));


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
});})(c__22648__auto___25845,out))
;
return ((function (switch__22536__auto__,c__22648__auto___25845,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22537__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22537__auto____0 = (function (){
var statearr_25841 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25841[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22537__auto__);

(statearr_25841[(1)] = (1));

return statearr_25841;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22537__auto____1 = (function (state_25827){
while(true){
var ret_value__22538__auto__ = (function (){try{while(true){
var result__22539__auto__ = switch__22536__auto__.call(null,state_25827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22539__auto__;
}
break;
}
}catch (e25842){if((e25842 instanceof Object)){
var ex__22540__auto__ = e25842;
var statearr_25843_25852 = state_25827;
(statearr_25843_25852[(5)] = ex__22540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25853 = state_25827;
state_25827 = G__25853;
continue;
} else {
return ret_value__22538__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22537__auto__ = function(state_25827){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22537__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22537__auto____1.call(this,state_25827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22537__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22537__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22537__auto__;
})()
;})(switch__22536__auto__,c__22648__auto___25845,out))
})();
var state__22650__auto__ = (function (){var statearr_25844 = f__22649__auto__.call(null);
(statearr_25844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22648__auto___25845);

return statearr_25844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22650__auto__);
});})(c__22648__auto___25845,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25854,opts){
var map__25858 = p__25854;
var map__25858__$1 = ((((!((map__25858 == null)))?((((map__25858.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25858.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25858):map__25858);
var eval_body__$1 = cljs.core.get.call(null,map__25858__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25858__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16829__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16829__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16829__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e25860){var e = e25860;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__25861_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25861_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__25866){
var vec__25867 = p__25866;
var k = cljs.core.nth.call(null,vec__25867,(0),null);
var v = cljs.core.nth.call(null,vec__25867,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__25868){
var vec__25869 = p__25868;
var k = cljs.core.nth.call(null,vec__25869,(0),null);
var v = cljs.core.nth.call(null,vec__25869,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25873,p__25874){
var map__26121 = p__25873;
var map__26121__$1 = ((((!((map__26121 == null)))?((((map__26121.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26121.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26121):map__26121);
var opts = map__26121__$1;
var before_jsload = cljs.core.get.call(null,map__26121__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__26121__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__26121__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__26122 = p__25874;
var map__26122__$1 = ((((!((map__26122 == null)))?((((map__26122.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26122.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26122):map__26122);
var msg = map__26122__$1;
var files = cljs.core.get.call(null,map__26122__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__26122__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__26122__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22648__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22648__auto__,map__26121,map__26121__$1,opts,before_jsload,on_jsload,reload_dependents,map__26122,map__26122__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22649__auto__ = (function (){var switch__22536__auto__ = ((function (c__22648__auto__,map__26121,map__26121__$1,opts,before_jsload,on_jsload,reload_dependents,map__26122,map__26122__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_26275){
var state_val_26276 = (state_26275[(1)]);
if((state_val_26276 === (7))){
var inst_26138 = (state_26275[(7)]);
var inst_26139 = (state_26275[(8)]);
var inst_26137 = (state_26275[(9)]);
var inst_26136 = (state_26275[(10)]);
var inst_26144 = cljs.core._nth.call(null,inst_26137,inst_26139);
var inst_26145 = figwheel.client.file_reloading.eval_body.call(null,inst_26144,opts);
var inst_26146 = (inst_26139 + (1));
var tmp26277 = inst_26138;
var tmp26278 = inst_26137;
var tmp26279 = inst_26136;
var inst_26136__$1 = tmp26279;
var inst_26137__$1 = tmp26278;
var inst_26138__$1 = tmp26277;
var inst_26139__$1 = inst_26146;
var state_26275__$1 = (function (){var statearr_26280 = state_26275;
(statearr_26280[(7)] = inst_26138__$1);

(statearr_26280[(8)] = inst_26139__$1);

(statearr_26280[(9)] = inst_26137__$1);

(statearr_26280[(10)] = inst_26136__$1);

(statearr_26280[(11)] = inst_26145);

return statearr_26280;
})();
var statearr_26281_26367 = state_26275__$1;
(statearr_26281_26367[(2)] = null);

(statearr_26281_26367[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26276 === (20))){
var inst_26179 = (state_26275[(12)]);
var inst_26187 = figwheel.client.file_reloading.sort_files.call(null,inst_26179);
var state_26275__$1 = state_26275;
var statearr_26282_26368 = state_26275__$1;
(statearr_26282_26368[(2)] = inst_26187);

(statearr_26282_26368[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26276 === (27))){
var state_26275__$1 = state_26275;
var statearr_26283_26369 = state_26275__$1;
(statearr_26283_26369[(2)] = null);

(statearr_26283_26369[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26276 === (1))){
var inst_26128 = (state_26275[(13)]);
var inst_26125 = before_jsload.call(null,files);
var inst_26126 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_26127 = (function (){return ((function (inst_26128,inst_26125,inst_26126,state_val_26276,c__22648__auto__,map__26121,map__26121__$1,opts,before_jsload,on_jsload,reload_dependents,map__26122,map__26122__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25870_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25870_SHARP_);
});
;})(inst_26128,inst_26125,inst_26126,state_val_26276,c__22648__auto__,map__26121,map__26121__$1,opts,before_jsload,on_jsload,reload_dependents,map__26122,map__26122__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26128__$1 = cljs.core.filter.call(null,inst_26127,files);
var inst_26129 = cljs.core.not_empty.call(null,inst_26128__$1);
var state_26275__$1 = (function (){var statearr_26284 = state_26275;
(statearr_26284[(14)] = inst_26126);

(statearr_26284[(15)] = inst_26125);

(statearr_26284[(13)] = inst_26128__$1);

return statearr_26284;
})();
if(cljs.core.truth_(inst_26129)){
var statearr_26285_26370 = state_26275__$1;
(statearr_26285_26370[(1)] = (2));

} else {
var statearr_26286_26371 = state_26275__$1;
(statearr_26286_26371[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26276 === (24))){
var state_26275__$1 = state_26275;
var statearr_26287_26372 = state_26275__$1;
(statearr_26287_26372[(2)] = null);

(statearr_26287_26372[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26276 === (39))){
var inst_26229 = (state_26275[(16)]);
var state_26275__$1 = state_26275;
var statearr_26288_26373 = state_26275__$1;
(statearr_26288_26373[(2)] = inst_26229);

(statearr_26288_26373[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26276 === (46))){
var inst_26270 = (state_26275[(2)]);
var state_26275__$1 = state_26275;
var statearr_26289_26374 = state_26275__$1;
(statearr_26289_26374[(2)] = inst_26270);

(statearr_26289_26374[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26276 === (4))){
var inst_26173 = (state_26275[(2)]);
var inst_26174 = cljs.core.List.EMPTY;
var inst_26175 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_26174);
var inst_26176 = (function (){return ((function (inst_26173,inst_26174,inst_26175,state_val_26276,c__22648__auto__,map__26121,map__26121__$1,opts,before_jsload,on_jsload,reload_dependents,map__26122,map__26122__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25871_SHARP_){
var and__16829__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25871_SHARP_);
if(cljs.core.truth_(and__16829__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25871_SHARP_));
} else {
return and__16829__auto__;
}
});
;})(inst_26173,inst_26174,inst_26175,state_val_26276,c__22648__auto__,map__26121,map__26121__$1,opts,before_jsload,on_jsload,reload_dependents,map__26122,map__26122__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26177 = cljs.core.filter.call(null,inst_26176,files);
var inst_26178 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_26179 = cljs.core.concat.call(null,inst_26177,inst_26178);
var state_26275__$1 = (function (){var statearr_26290 = state_26275;
(statearr_26290[(12)] = inst_26179);

(statearr_26290[(17)] = inst_26173);

(statearr_26290[(18)] = inst_26175);

return statearr_26290;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_26291_26375 = state_26275__$1;
(statearr_26291_26375[(1)] = (16));

} else {
var statearr_26292_26376 = state_26275__$1;
(statearr_26292_26376[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26276 === (15))){
var inst_26163 = (state_26275[(2)]);
var state_26275__$1 = state_26275;
var statearr_26293_26377 = state_26275__$1;
(statearr_26293_26377[(2)] = inst_26163);

(statearr_26293_26377[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26276 === (21))){
var inst_26189 = (state_26275[(19)]);
var inst_26189__$1 = (state_26275[(2)]);
var inst_26190 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_26189__$1);
var state_26275__$1 = (function (){var statearr_26294 = state_26275;
(statearr_26294[(19)] = inst_26189__$1);

return statearr_26294;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26275__$1,(22),inst_26190);
} else {
if((state_val_26276 === (31))){
var inst_26273 = (state_26275[(2)]);
var state_26275__$1 = state_26275;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26275__$1,inst_26273);
} else {
if((state_val_26276 === (32))){
var inst_26229 = (state_26275[(16)]);
var inst_26234 = inst_26229.cljs$lang$protocol_mask$partition0$;
var inst_26235 = (inst_26234 & (64));
var inst_26236 = inst_26229.cljs$core$ISeq$;
var inst_26237 = (inst_26235) || (inst_26236);
var state_26275__$1 = state_26275;
if(cljs.core.truth_(inst_26237)){
var statearr_26295_26378 = state_26275__$1;
(statearr_26295_26378[(1)] = (35));

} else {
var statearr_26296_26379 = state_26275__$1;
(statearr_26296_26379[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26276 === (40))){
var inst_26250 = (state_26275[(20)]);
var inst_26249 = (state_26275[(2)]);
var inst_26250__$1 = cljs.core.get.call(null,inst_26249,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_26251 = cljs.core.get.call(null,inst_26249,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_26252 = cljs.core.not_empty.call(null,inst_26250__$1);
var state_26275__$1 = (function (){var statearr_26297 = state_26275;
(statearr_26297[(20)] = inst_26250__$1);

(statearr_26297[(21)] = inst_26251);

return statearr_26297;
})();
if(cljs.core.truth_(inst_26252)){
var statearr_26298_26380 = state_26275__$1;
(statearr_26298_26380[(1)] = (41));

} else {
var statearr_26299_26381 = state_26275__$1;
(statearr_26299_26381[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26276 === (33))){
var state_26275__$1 = state_26275;
var statearr_26300_26382 = state_26275__$1;
(statearr_26300_26382[(2)] = false);

(statearr_26300_26382[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26276 === (13))){
var inst_26149 = (state_26275[(22)]);
var inst_26153 = cljs.core.chunk_first.call(null,inst_26149);
var inst_26154 = cljs.core.chunk_rest.call(null,inst_26149);
var inst_26155 = cljs.core.count.call(null,inst_26153);
var inst_26136 = inst_26154;
var inst_26137 = inst_26153;
var inst_26138 = inst_26155;
var inst_26139 = (0);
var state_26275__$1 = (function (){var statearr_26301 = state_26275;
(statearr_26301[(7)] = inst_26138);

(statearr_26301[(8)] = inst_26139);

(statearr_26301[(9)] = inst_26137);

(statearr_26301[(10)] = inst_26136);

return statearr_26301;
})();
var statearr_26302_26383 = state_26275__$1;
(statearr_26302_26383[(2)] = null);

(statearr_26302_26383[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26276 === (22))){
var inst_26193 = (state_26275[(23)]);
var inst_26189 = (state_26275[(19)]);
var inst_26192 = (state_26275[(24)]);
var inst_26197 = (state_26275[(25)]);
var inst_26192__$1 = (state_26275[(2)]);
var inst_26193__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26192__$1);
var inst_26194 = (function (){var all_files = inst_26189;
var res_SINGLEQUOTE_ = inst_26192__$1;
var res = inst_26193__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_26193,inst_26189,inst_26192,inst_26197,inst_26192__$1,inst_26193__$1,state_val_26276,c__22648__auto__,map__26121,map__26121__$1,opts,before_jsload,on_jsload,reload_dependents,map__26122,map__26122__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25872_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25872_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_26193,inst_26189,inst_26192,inst_26197,inst_26192__$1,inst_26193__$1,state_val_26276,c__22648__auto__,map__26121,map__26121__$1,opts,before_jsload,on_jsload,reload_dependents,map__26122,map__26122__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26195 = cljs.core.filter.call(null,inst_26194,inst_26192__$1);
var inst_26196 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_26197__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26196);
var inst_26198 = cljs.core.not_empty.call(null,inst_26197__$1);
var state_26275__$1 = (function (){var statearr_26303 = state_26275;
(statearr_26303[(26)] = inst_26195);

(statearr_26303[(23)] = inst_26193__$1);

(statearr_26303[(24)] = inst_26192__$1);

(statearr_26303[(25)] = inst_26197__$1);

return statearr_26303;
})();
if(cljs.core.truth_(inst_26198)){
var statearr_26304_26384 = state_26275__$1;
(statearr_26304_26384[(1)] = (23));

} else {
var statearr_26305_26385 = state_26275__$1;
(statearr_26305_26385[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26276 === (36))){
var state_26275__$1 = state_26275;
var statearr_26306_26386 = state_26275__$1;
(statearr_26306_26386[(2)] = false);

(statearr_26306_26386[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26276 === (41))){
var inst_26250 = (state_26275[(20)]);
var inst_26254 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_26255 = cljs.core.map.call(null,inst_26254,inst_26250);
var inst_26256 = cljs.core.pr_str.call(null,inst_26255);
var inst_26257 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_26256)].join('');
var inst_26258 = figwheel.client.utils.log.call(null,inst_26257);
var state_26275__$1 = state_26275;
var statearr_26307_26387 = state_26275__$1;
(statearr_26307_26387[(2)] = inst_26258);

(statearr_26307_26387[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26276 === (43))){
var inst_26251 = (state_26275[(21)]);
var inst_26261 = (state_26275[(2)]);
var inst_26262 = cljs.core.not_empty.call(null,inst_26251);
var state_26275__$1 = (function (){var statearr_26308 = state_26275;
(statearr_26308[(27)] = inst_26261);

return statearr_26308;
})();
if(cljs.core.truth_(inst_26262)){
var statearr_26309_26388 = state_26275__$1;
(statearr_26309_26388[(1)] = (44));

} else {
var statearr_26310_26389 = state_26275__$1;
(statearr_26310_26389[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26276 === (29))){
var inst_26195 = (state_26275[(26)]);
var inst_26193 = (state_26275[(23)]);
var inst_26189 = (state_26275[(19)]);
var inst_26229 = (state_26275[(16)]);
var inst_26192 = (state_26275[(24)]);
var inst_26197 = (state_26275[(25)]);
var inst_26225 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_26228 = (function (){var all_files = inst_26189;
var res_SINGLEQUOTE_ = inst_26192;
var res = inst_26193;
var files_not_loaded = inst_26195;
var dependencies_that_loaded = inst_26197;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26195,inst_26193,inst_26189,inst_26229,inst_26192,inst_26197,inst_26225,state_val_26276,c__22648__auto__,map__26121,map__26121__$1,opts,before_jsload,on_jsload,reload_dependents,map__26122,map__26122__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26227){
var map__26311 = p__26227;
var map__26311__$1 = ((((!((map__26311 == null)))?((((map__26311.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26311.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26311):map__26311);
var namespace = cljs.core.get.call(null,map__26311__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26195,inst_26193,inst_26189,inst_26229,inst_26192,inst_26197,inst_26225,state_val_26276,c__22648__auto__,map__26121,map__26121__$1,opts,before_jsload,on_jsload,reload_dependents,map__26122,map__26122__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26229__$1 = cljs.core.group_by.call(null,inst_26228,inst_26195);
var inst_26231 = (inst_26229__$1 == null);
var inst_26232 = cljs.core.not.call(null,inst_26231);
var state_26275__$1 = (function (){var statearr_26313 = state_26275;
(statearr_26313[(16)] = inst_26229__$1);

(statearr_26313[(28)] = inst_26225);

return statearr_26313;
})();
if(inst_26232){
var statearr_26314_26390 = state_26275__$1;
(statearr_26314_26390[(1)] = (32));

} else {
var statearr_26315_26391 = state_26275__$1;
(statearr_26315_26391[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26276 === (44))){
var inst_26251 = (state_26275[(21)]);
var inst_26264 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26251);
var inst_26265 = cljs.core.pr_str.call(null,inst_26264);
var inst_26266 = [cljs.core.str("not required: "),cljs.core.str(inst_26265)].join('');
var inst_26267 = figwheel.client.utils.log.call(null,inst_26266);
var state_26275__$1 = state_26275;
var statearr_26316_26392 = state_26275__$1;
(statearr_26316_26392[(2)] = inst_26267);

(statearr_26316_26392[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26276 === (6))){
var inst_26170 = (state_26275[(2)]);
var state_26275__$1 = state_26275;
var statearr_26317_26393 = state_26275__$1;
(statearr_26317_26393[(2)] = inst_26170);

(statearr_26317_26393[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26276 === (28))){
var inst_26195 = (state_26275[(26)]);
var inst_26222 = (state_26275[(2)]);
var inst_26223 = cljs.core.not_empty.call(null,inst_26195);
var state_26275__$1 = (function (){var statearr_26318 = state_26275;
(statearr_26318[(29)] = inst_26222);

return statearr_26318;
})();
if(cljs.core.truth_(inst_26223)){
var statearr_26319_26394 = state_26275__$1;
(statearr_26319_26394[(1)] = (29));

} else {
var statearr_26320_26395 = state_26275__$1;
(statearr_26320_26395[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26276 === (25))){
var inst_26193 = (state_26275[(23)]);
var inst_26209 = (state_26275[(2)]);
var inst_26210 = cljs.core.not_empty.call(null,inst_26193);
var state_26275__$1 = (function (){var statearr_26321 = state_26275;
(statearr_26321[(30)] = inst_26209);

return statearr_26321;
})();
if(cljs.core.truth_(inst_26210)){
var statearr_26322_26396 = state_26275__$1;
(statearr_26322_26396[(1)] = (26));

} else {
var statearr_26323_26397 = state_26275__$1;
(statearr_26323_26397[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26276 === (34))){
var inst_26244 = (state_26275[(2)]);
var state_26275__$1 = state_26275;
if(cljs.core.truth_(inst_26244)){
var statearr_26324_26398 = state_26275__$1;
(statearr_26324_26398[(1)] = (38));

} else {
var statearr_26325_26399 = state_26275__$1;
(statearr_26325_26399[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26276 === (17))){
var state_26275__$1 = state_26275;
var statearr_26326_26400 = state_26275__$1;
(statearr_26326_26400[(2)] = recompile_dependents);

(statearr_26326_26400[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26276 === (3))){
var state_26275__$1 = state_26275;
var statearr_26327_26401 = state_26275__$1;
(statearr_26327_26401[(2)] = null);

(statearr_26327_26401[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26276 === (12))){
var inst_26166 = (state_26275[(2)]);
var state_26275__$1 = state_26275;
var statearr_26328_26402 = state_26275__$1;
(statearr_26328_26402[(2)] = inst_26166);

(statearr_26328_26402[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26276 === (2))){
var inst_26128 = (state_26275[(13)]);
var inst_26135 = cljs.core.seq.call(null,inst_26128);
var inst_26136 = inst_26135;
var inst_26137 = null;
var inst_26138 = (0);
var inst_26139 = (0);
var state_26275__$1 = (function (){var statearr_26329 = state_26275;
(statearr_26329[(7)] = inst_26138);

(statearr_26329[(8)] = inst_26139);

(statearr_26329[(9)] = inst_26137);

(statearr_26329[(10)] = inst_26136);

return statearr_26329;
})();
var statearr_26330_26403 = state_26275__$1;
(statearr_26330_26403[(2)] = null);

(statearr_26330_26403[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26276 === (23))){
var inst_26195 = (state_26275[(26)]);
var inst_26193 = (state_26275[(23)]);
var inst_26189 = (state_26275[(19)]);
var inst_26192 = (state_26275[(24)]);
var inst_26197 = (state_26275[(25)]);
var inst_26200 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_26202 = (function (){var all_files = inst_26189;
var res_SINGLEQUOTE_ = inst_26192;
var res = inst_26193;
var files_not_loaded = inst_26195;
var dependencies_that_loaded = inst_26197;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26195,inst_26193,inst_26189,inst_26192,inst_26197,inst_26200,state_val_26276,c__22648__auto__,map__26121,map__26121__$1,opts,before_jsload,on_jsload,reload_dependents,map__26122,map__26122__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26201){
var map__26331 = p__26201;
var map__26331__$1 = ((((!((map__26331 == null)))?((((map__26331.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26331.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26331):map__26331);
var request_url = cljs.core.get.call(null,map__26331__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26195,inst_26193,inst_26189,inst_26192,inst_26197,inst_26200,state_val_26276,c__22648__auto__,map__26121,map__26121__$1,opts,before_jsload,on_jsload,reload_dependents,map__26122,map__26122__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26203 = cljs.core.reverse.call(null,inst_26197);
var inst_26204 = cljs.core.map.call(null,inst_26202,inst_26203);
var inst_26205 = cljs.core.pr_str.call(null,inst_26204);
var inst_26206 = figwheel.client.utils.log.call(null,inst_26205);
var state_26275__$1 = (function (){var statearr_26333 = state_26275;
(statearr_26333[(31)] = inst_26200);

return statearr_26333;
})();
var statearr_26334_26404 = state_26275__$1;
(statearr_26334_26404[(2)] = inst_26206);

(statearr_26334_26404[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26276 === (35))){
var state_26275__$1 = state_26275;
var statearr_26335_26405 = state_26275__$1;
(statearr_26335_26405[(2)] = true);

(statearr_26335_26405[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26276 === (19))){
var inst_26179 = (state_26275[(12)]);
var inst_26185 = figwheel.client.file_reloading.expand_files.call(null,inst_26179);
var state_26275__$1 = state_26275;
var statearr_26336_26406 = state_26275__$1;
(statearr_26336_26406[(2)] = inst_26185);

(statearr_26336_26406[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26276 === (11))){
var state_26275__$1 = state_26275;
var statearr_26337_26407 = state_26275__$1;
(statearr_26337_26407[(2)] = null);

(statearr_26337_26407[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26276 === (9))){
var inst_26168 = (state_26275[(2)]);
var state_26275__$1 = state_26275;
var statearr_26338_26408 = state_26275__$1;
(statearr_26338_26408[(2)] = inst_26168);

(statearr_26338_26408[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26276 === (5))){
var inst_26138 = (state_26275[(7)]);
var inst_26139 = (state_26275[(8)]);
var inst_26141 = (inst_26139 < inst_26138);
var inst_26142 = inst_26141;
var state_26275__$1 = state_26275;
if(cljs.core.truth_(inst_26142)){
var statearr_26339_26409 = state_26275__$1;
(statearr_26339_26409[(1)] = (7));

} else {
var statearr_26340_26410 = state_26275__$1;
(statearr_26340_26410[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26276 === (14))){
var inst_26149 = (state_26275[(22)]);
var inst_26158 = cljs.core.first.call(null,inst_26149);
var inst_26159 = figwheel.client.file_reloading.eval_body.call(null,inst_26158,opts);
var inst_26160 = cljs.core.next.call(null,inst_26149);
var inst_26136 = inst_26160;
var inst_26137 = null;
var inst_26138 = (0);
var inst_26139 = (0);
var state_26275__$1 = (function (){var statearr_26341 = state_26275;
(statearr_26341[(7)] = inst_26138);

(statearr_26341[(8)] = inst_26139);

(statearr_26341[(9)] = inst_26137);

(statearr_26341[(32)] = inst_26159);

(statearr_26341[(10)] = inst_26136);

return statearr_26341;
})();
var statearr_26342_26411 = state_26275__$1;
(statearr_26342_26411[(2)] = null);

(statearr_26342_26411[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26276 === (45))){
var state_26275__$1 = state_26275;
var statearr_26343_26412 = state_26275__$1;
(statearr_26343_26412[(2)] = null);

(statearr_26343_26412[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26276 === (26))){
var inst_26195 = (state_26275[(26)]);
var inst_26193 = (state_26275[(23)]);
var inst_26189 = (state_26275[(19)]);
var inst_26192 = (state_26275[(24)]);
var inst_26197 = (state_26275[(25)]);
var inst_26212 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_26214 = (function (){var all_files = inst_26189;
var res_SINGLEQUOTE_ = inst_26192;
var res = inst_26193;
var files_not_loaded = inst_26195;
var dependencies_that_loaded = inst_26197;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26195,inst_26193,inst_26189,inst_26192,inst_26197,inst_26212,state_val_26276,c__22648__auto__,map__26121,map__26121__$1,opts,before_jsload,on_jsload,reload_dependents,map__26122,map__26122__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26213){
var map__26344 = p__26213;
var map__26344__$1 = ((((!((map__26344 == null)))?((((map__26344.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26344.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26344):map__26344);
var namespace = cljs.core.get.call(null,map__26344__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26344__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26195,inst_26193,inst_26189,inst_26192,inst_26197,inst_26212,state_val_26276,c__22648__auto__,map__26121,map__26121__$1,opts,before_jsload,on_jsload,reload_dependents,map__26122,map__26122__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26215 = cljs.core.map.call(null,inst_26214,inst_26193);
var inst_26216 = cljs.core.pr_str.call(null,inst_26215);
var inst_26217 = figwheel.client.utils.log.call(null,inst_26216);
var inst_26218 = (function (){var all_files = inst_26189;
var res_SINGLEQUOTE_ = inst_26192;
var res = inst_26193;
var files_not_loaded = inst_26195;
var dependencies_that_loaded = inst_26197;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26195,inst_26193,inst_26189,inst_26192,inst_26197,inst_26212,inst_26214,inst_26215,inst_26216,inst_26217,state_val_26276,c__22648__auto__,map__26121,map__26121__$1,opts,before_jsload,on_jsload,reload_dependents,map__26122,map__26122__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26195,inst_26193,inst_26189,inst_26192,inst_26197,inst_26212,inst_26214,inst_26215,inst_26216,inst_26217,state_val_26276,c__22648__auto__,map__26121,map__26121__$1,opts,before_jsload,on_jsload,reload_dependents,map__26122,map__26122__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26219 = setTimeout(inst_26218,(10));
var state_26275__$1 = (function (){var statearr_26346 = state_26275;
(statearr_26346[(33)] = inst_26212);

(statearr_26346[(34)] = inst_26217);

return statearr_26346;
})();
var statearr_26347_26413 = state_26275__$1;
(statearr_26347_26413[(2)] = inst_26219);

(statearr_26347_26413[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26276 === (16))){
var state_26275__$1 = state_26275;
var statearr_26348_26414 = state_26275__$1;
(statearr_26348_26414[(2)] = reload_dependents);

(statearr_26348_26414[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26276 === (38))){
var inst_26229 = (state_26275[(16)]);
var inst_26246 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26229);
var state_26275__$1 = state_26275;
var statearr_26349_26415 = state_26275__$1;
(statearr_26349_26415[(2)] = inst_26246);

(statearr_26349_26415[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26276 === (30))){
var state_26275__$1 = state_26275;
var statearr_26350_26416 = state_26275__$1;
(statearr_26350_26416[(2)] = null);

(statearr_26350_26416[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26276 === (10))){
var inst_26149 = (state_26275[(22)]);
var inst_26151 = cljs.core.chunked_seq_QMARK_.call(null,inst_26149);
var state_26275__$1 = state_26275;
if(inst_26151){
var statearr_26351_26417 = state_26275__$1;
(statearr_26351_26417[(1)] = (13));

} else {
var statearr_26352_26418 = state_26275__$1;
(statearr_26352_26418[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26276 === (18))){
var inst_26183 = (state_26275[(2)]);
var state_26275__$1 = state_26275;
if(cljs.core.truth_(inst_26183)){
var statearr_26353_26419 = state_26275__$1;
(statearr_26353_26419[(1)] = (19));

} else {
var statearr_26354_26420 = state_26275__$1;
(statearr_26354_26420[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26276 === (42))){
var state_26275__$1 = state_26275;
var statearr_26355_26421 = state_26275__$1;
(statearr_26355_26421[(2)] = null);

(statearr_26355_26421[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26276 === (37))){
var inst_26241 = (state_26275[(2)]);
var state_26275__$1 = state_26275;
var statearr_26356_26422 = state_26275__$1;
(statearr_26356_26422[(2)] = inst_26241);

(statearr_26356_26422[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26276 === (8))){
var inst_26149 = (state_26275[(22)]);
var inst_26136 = (state_26275[(10)]);
var inst_26149__$1 = cljs.core.seq.call(null,inst_26136);
var state_26275__$1 = (function (){var statearr_26357 = state_26275;
(statearr_26357[(22)] = inst_26149__$1);

return statearr_26357;
})();
if(inst_26149__$1){
var statearr_26358_26423 = state_26275__$1;
(statearr_26358_26423[(1)] = (10));

} else {
var statearr_26359_26424 = state_26275__$1;
(statearr_26359_26424[(1)] = (11));

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
});})(c__22648__auto__,map__26121,map__26121__$1,opts,before_jsload,on_jsload,reload_dependents,map__26122,map__26122__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22536__auto__,c__22648__auto__,map__26121,map__26121__$1,opts,before_jsload,on_jsload,reload_dependents,map__26122,map__26122__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22537__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22537__auto____0 = (function (){
var statearr_26363 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26363[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22537__auto__);

(statearr_26363[(1)] = (1));

return statearr_26363;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22537__auto____1 = (function (state_26275){
while(true){
var ret_value__22538__auto__ = (function (){try{while(true){
var result__22539__auto__ = switch__22536__auto__.call(null,state_26275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22539__auto__;
}
break;
}
}catch (e26364){if((e26364 instanceof Object)){
var ex__22540__auto__ = e26364;
var statearr_26365_26425 = state_26275;
(statearr_26365_26425[(5)] = ex__22540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26426 = state_26275;
state_26275 = G__26426;
continue;
} else {
return ret_value__22538__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22537__auto__ = function(state_26275){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22537__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22537__auto____1.call(this,state_26275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22537__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22537__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22537__auto__;
})()
;})(switch__22536__auto__,c__22648__auto__,map__26121,map__26121__$1,opts,before_jsload,on_jsload,reload_dependents,map__26122,map__26122__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22650__auto__ = (function (){var statearr_26366 = f__22649__auto__.call(null);
(statearr_26366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22648__auto__);

return statearr_26366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22650__auto__);
});})(c__22648__auto__,map__26121,map__26121__$1,opts,before_jsload,on_jsload,reload_dependents,map__26122,map__26122__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22648__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26429,link){
var map__26432 = p__26429;
var map__26432__$1 = ((((!((map__26432 == null)))?((((map__26432.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26432.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26432):map__26432);
var file = cljs.core.get.call(null,map__26432__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__26432,map__26432__$1,file){
return (function (p1__26427_SHARP_,p2__26428_SHARP_){
if(cljs.core._EQ_.call(null,p1__26427_SHARP_,p2__26428_SHARP_)){
return p1__26427_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__26432,map__26432__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26438){
var map__26439 = p__26438;
var map__26439__$1 = ((((!((map__26439 == null)))?((((map__26439.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26439.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26439):map__26439);
var match_length = cljs.core.get.call(null,map__26439__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__26439__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26434_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26434_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args26441 = [];
var len__17899__auto___26444 = arguments.length;
var i__17900__auto___26445 = (0);
while(true){
if((i__17900__auto___26445 < len__17899__auto___26444)){
args26441.push((arguments[i__17900__auto___26445]));

var G__26446 = (i__17900__auto___26445 + (1));
i__17900__auto___26445 = G__26446;
continue;
} else {
}
break;
}

var G__26443 = args26441.length;
switch (G__26443) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26441.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__26448_SHARP_,p2__26449_SHARP_){
return cljs.core.assoc.call(null,p1__26448_SHARP_,cljs.core.get.call(null,p2__26449_SHARP_,key),p2__26449_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__26450){
var map__26453 = p__26450;
var map__26453__$1 = ((((!((map__26453 == null)))?((((map__26453.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26453.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26453):map__26453);
var f_data = map__26453__$1;
var file = cljs.core.get.call(null,map__26453__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26455,files_msg){
var map__26462 = p__26455;
var map__26462__$1 = ((((!((map__26462 == null)))?((((map__26462.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26462.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26462):map__26462);
var opts = map__26462__$1;
var on_cssload = cljs.core.get.call(null,map__26462__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__26464_26468 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__26465_26469 = null;
var count__26466_26470 = (0);
var i__26467_26471 = (0);
while(true){
if((i__26467_26471 < count__26466_26470)){
var f_26472 = cljs.core._nth.call(null,chunk__26465_26469,i__26467_26471);
figwheel.client.file_reloading.reload_css_file.call(null,f_26472);

var G__26473 = seq__26464_26468;
var G__26474 = chunk__26465_26469;
var G__26475 = count__26466_26470;
var G__26476 = (i__26467_26471 + (1));
seq__26464_26468 = G__26473;
chunk__26465_26469 = G__26474;
count__26466_26470 = G__26475;
i__26467_26471 = G__26476;
continue;
} else {
var temp__4425__auto___26477 = cljs.core.seq.call(null,seq__26464_26468);
if(temp__4425__auto___26477){
var seq__26464_26478__$1 = temp__4425__auto___26477;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26464_26478__$1)){
var c__17644__auto___26479 = cljs.core.chunk_first.call(null,seq__26464_26478__$1);
var G__26480 = cljs.core.chunk_rest.call(null,seq__26464_26478__$1);
var G__26481 = c__17644__auto___26479;
var G__26482 = cljs.core.count.call(null,c__17644__auto___26479);
var G__26483 = (0);
seq__26464_26468 = G__26480;
chunk__26465_26469 = G__26481;
count__26466_26470 = G__26482;
i__26467_26471 = G__26483;
continue;
} else {
var f_26484 = cljs.core.first.call(null,seq__26464_26478__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_26484);

var G__26485 = cljs.core.next.call(null,seq__26464_26478__$1);
var G__26486 = null;
var G__26487 = (0);
var G__26488 = (0);
seq__26464_26468 = G__26485;
chunk__26465_26469 = G__26486;
count__26466_26470 = G__26487;
i__26467_26471 = G__26488;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__26462,map__26462__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__26462,map__26462__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map