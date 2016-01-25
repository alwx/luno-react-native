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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__25483_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__25483_SHARP_));
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
var seq__25488 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__25489 = null;
var count__25490 = (0);
var i__25491 = (0);
while(true){
if((i__25491 < count__25490)){
var n = cljs.core._nth.call(null,chunk__25489,i__25491);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25492 = seq__25488;
var G__25493 = chunk__25489;
var G__25494 = count__25490;
var G__25495 = (i__25491 + (1));
seq__25488 = G__25492;
chunk__25489 = G__25493;
count__25490 = G__25494;
i__25491 = G__25495;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25488);
if(temp__4425__auto__){
var seq__25488__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25488__$1)){
var c__17644__auto__ = cljs.core.chunk_first.call(null,seq__25488__$1);
var G__25496 = cljs.core.chunk_rest.call(null,seq__25488__$1);
var G__25497 = c__17644__auto__;
var G__25498 = cljs.core.count.call(null,c__17644__auto__);
var G__25499 = (0);
seq__25488 = G__25496;
chunk__25489 = G__25497;
count__25490 = G__25498;
i__25491 = G__25499;
continue;
} else {
var n = cljs.core.first.call(null,seq__25488__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25500 = cljs.core.next.call(null,seq__25488__$1);
var G__25501 = null;
var G__25502 = (0);
var G__25503 = (0);
seq__25488 = G__25500;
chunk__25489 = G__25501;
count__25490 = G__25502;
i__25491 = G__25503;
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

var seq__25542_25549 = cljs.core.seq.call(null,deps);
var chunk__25543_25550 = null;
var count__25544_25551 = (0);
var i__25545_25552 = (0);
while(true){
if((i__25545_25552 < count__25544_25551)){
var dep_25553 = cljs.core._nth.call(null,chunk__25543_25550,i__25545_25552);
topo_sort_helper_STAR_.call(null,dep_25553,(depth + (1)),state);

var G__25554 = seq__25542_25549;
var G__25555 = chunk__25543_25550;
var G__25556 = count__25544_25551;
var G__25557 = (i__25545_25552 + (1));
seq__25542_25549 = G__25554;
chunk__25543_25550 = G__25555;
count__25544_25551 = G__25556;
i__25545_25552 = G__25557;
continue;
} else {
var temp__4425__auto___25558 = cljs.core.seq.call(null,seq__25542_25549);
if(temp__4425__auto___25558){
var seq__25542_25559__$1 = temp__4425__auto___25558;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25542_25559__$1)){
var c__17644__auto___25560 = cljs.core.chunk_first.call(null,seq__25542_25559__$1);
var G__25561 = cljs.core.chunk_rest.call(null,seq__25542_25559__$1);
var G__25562 = c__17644__auto___25560;
var G__25563 = cljs.core.count.call(null,c__17644__auto___25560);
var G__25564 = (0);
seq__25542_25549 = G__25561;
chunk__25543_25550 = G__25562;
count__25544_25551 = G__25563;
i__25545_25552 = G__25564;
continue;
} else {
var dep_25565 = cljs.core.first.call(null,seq__25542_25559__$1);
topo_sort_helper_STAR_.call(null,dep_25565,(depth + (1)),state);

var G__25566 = cljs.core.next.call(null,seq__25542_25559__$1);
var G__25567 = null;
var G__25568 = (0);
var G__25569 = (0);
seq__25542_25549 = G__25566;
chunk__25543_25550 = G__25567;
count__25544_25551 = G__25568;
i__25545_25552 = G__25569;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__25546){
var vec__25548 = p__25546;
var x = cljs.core.nth.call(null,vec__25548,(0),null);
var xs = cljs.core.nthnext.call(null,vec__25548,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__25548,x,xs,get_deps__$1){
return (function (p1__25504_SHARP_){
return clojure.set.difference.call(null,p1__25504_SHARP_,x);
});})(vec__25548,x,xs,get_deps__$1))
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
var seq__25582 = cljs.core.seq.call(null,provides);
var chunk__25583 = null;
var count__25584 = (0);
var i__25585 = (0);
while(true){
if((i__25585 < count__25584)){
var prov = cljs.core._nth.call(null,chunk__25583,i__25585);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25586_25594 = cljs.core.seq.call(null,requires);
var chunk__25587_25595 = null;
var count__25588_25596 = (0);
var i__25589_25597 = (0);
while(true){
if((i__25589_25597 < count__25588_25596)){
var req_25598 = cljs.core._nth.call(null,chunk__25587_25595,i__25589_25597);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25598,prov);

var G__25599 = seq__25586_25594;
var G__25600 = chunk__25587_25595;
var G__25601 = count__25588_25596;
var G__25602 = (i__25589_25597 + (1));
seq__25586_25594 = G__25599;
chunk__25587_25595 = G__25600;
count__25588_25596 = G__25601;
i__25589_25597 = G__25602;
continue;
} else {
var temp__4425__auto___25603 = cljs.core.seq.call(null,seq__25586_25594);
if(temp__4425__auto___25603){
var seq__25586_25604__$1 = temp__4425__auto___25603;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25586_25604__$1)){
var c__17644__auto___25605 = cljs.core.chunk_first.call(null,seq__25586_25604__$1);
var G__25606 = cljs.core.chunk_rest.call(null,seq__25586_25604__$1);
var G__25607 = c__17644__auto___25605;
var G__25608 = cljs.core.count.call(null,c__17644__auto___25605);
var G__25609 = (0);
seq__25586_25594 = G__25606;
chunk__25587_25595 = G__25607;
count__25588_25596 = G__25608;
i__25589_25597 = G__25609;
continue;
} else {
var req_25610 = cljs.core.first.call(null,seq__25586_25604__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25610,prov);

var G__25611 = cljs.core.next.call(null,seq__25586_25604__$1);
var G__25612 = null;
var G__25613 = (0);
var G__25614 = (0);
seq__25586_25594 = G__25611;
chunk__25587_25595 = G__25612;
count__25588_25596 = G__25613;
i__25589_25597 = G__25614;
continue;
}
} else {
}
}
break;
}

var G__25615 = seq__25582;
var G__25616 = chunk__25583;
var G__25617 = count__25584;
var G__25618 = (i__25585 + (1));
seq__25582 = G__25615;
chunk__25583 = G__25616;
count__25584 = G__25617;
i__25585 = G__25618;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25582);
if(temp__4425__auto__){
var seq__25582__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25582__$1)){
var c__17644__auto__ = cljs.core.chunk_first.call(null,seq__25582__$1);
var G__25619 = cljs.core.chunk_rest.call(null,seq__25582__$1);
var G__25620 = c__17644__auto__;
var G__25621 = cljs.core.count.call(null,c__17644__auto__);
var G__25622 = (0);
seq__25582 = G__25619;
chunk__25583 = G__25620;
count__25584 = G__25621;
i__25585 = G__25622;
continue;
} else {
var prov = cljs.core.first.call(null,seq__25582__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25590_25623 = cljs.core.seq.call(null,requires);
var chunk__25591_25624 = null;
var count__25592_25625 = (0);
var i__25593_25626 = (0);
while(true){
if((i__25593_25626 < count__25592_25625)){
var req_25627 = cljs.core._nth.call(null,chunk__25591_25624,i__25593_25626);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25627,prov);

var G__25628 = seq__25590_25623;
var G__25629 = chunk__25591_25624;
var G__25630 = count__25592_25625;
var G__25631 = (i__25593_25626 + (1));
seq__25590_25623 = G__25628;
chunk__25591_25624 = G__25629;
count__25592_25625 = G__25630;
i__25593_25626 = G__25631;
continue;
} else {
var temp__4425__auto___25632__$1 = cljs.core.seq.call(null,seq__25590_25623);
if(temp__4425__auto___25632__$1){
var seq__25590_25633__$1 = temp__4425__auto___25632__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25590_25633__$1)){
var c__17644__auto___25634 = cljs.core.chunk_first.call(null,seq__25590_25633__$1);
var G__25635 = cljs.core.chunk_rest.call(null,seq__25590_25633__$1);
var G__25636 = c__17644__auto___25634;
var G__25637 = cljs.core.count.call(null,c__17644__auto___25634);
var G__25638 = (0);
seq__25590_25623 = G__25635;
chunk__25591_25624 = G__25636;
count__25592_25625 = G__25637;
i__25593_25626 = G__25638;
continue;
} else {
var req_25639 = cljs.core.first.call(null,seq__25590_25633__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25639,prov);

var G__25640 = cljs.core.next.call(null,seq__25590_25633__$1);
var G__25641 = null;
var G__25642 = (0);
var G__25643 = (0);
seq__25590_25623 = G__25640;
chunk__25591_25624 = G__25641;
count__25592_25625 = G__25642;
i__25593_25626 = G__25643;
continue;
}
} else {
}
}
break;
}

var G__25644 = cljs.core.next.call(null,seq__25582__$1);
var G__25645 = null;
var G__25646 = (0);
var G__25647 = (0);
seq__25582 = G__25644;
chunk__25583 = G__25645;
count__25584 = G__25646;
i__25585 = G__25647;
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
var seq__25652_25656 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__25653_25657 = null;
var count__25654_25658 = (0);
var i__25655_25659 = (0);
while(true){
if((i__25655_25659 < count__25654_25658)){
var ns_25660 = cljs.core._nth.call(null,chunk__25653_25657,i__25655_25659);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25660);

var G__25661 = seq__25652_25656;
var G__25662 = chunk__25653_25657;
var G__25663 = count__25654_25658;
var G__25664 = (i__25655_25659 + (1));
seq__25652_25656 = G__25661;
chunk__25653_25657 = G__25662;
count__25654_25658 = G__25663;
i__25655_25659 = G__25664;
continue;
} else {
var temp__4425__auto___25665 = cljs.core.seq.call(null,seq__25652_25656);
if(temp__4425__auto___25665){
var seq__25652_25666__$1 = temp__4425__auto___25665;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25652_25666__$1)){
var c__17644__auto___25667 = cljs.core.chunk_first.call(null,seq__25652_25666__$1);
var G__25668 = cljs.core.chunk_rest.call(null,seq__25652_25666__$1);
var G__25669 = c__17644__auto___25667;
var G__25670 = cljs.core.count.call(null,c__17644__auto___25667);
var G__25671 = (0);
seq__25652_25656 = G__25668;
chunk__25653_25657 = G__25669;
count__25654_25658 = G__25670;
i__25655_25659 = G__25671;
continue;
} else {
var ns_25672 = cljs.core.first.call(null,seq__25652_25666__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25672);

var G__25673 = cljs.core.next.call(null,seq__25652_25666__$1);
var G__25674 = null;
var G__25675 = (0);
var G__25676 = (0);
seq__25652_25656 = G__25673;
chunk__25653_25657 = G__25674;
count__25654_25658 = G__25675;
i__25655_25659 = G__25676;
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
var G__25677__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__25677 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25678__i = 0, G__25678__a = new Array(arguments.length -  0);
while (G__25678__i < G__25678__a.length) {G__25678__a[G__25678__i] = arguments[G__25678__i + 0]; ++G__25678__i;}
  args = new cljs.core.IndexedSeq(G__25678__a,0);
} 
return G__25677__delegate.call(this,args);};
G__25677.cljs$lang$maxFixedArity = 0;
G__25677.cljs$lang$applyTo = (function (arglist__25679){
var args = cljs.core.seq(arglist__25679);
return G__25677__delegate(args);
});
G__25677.cljs$core$IFn$_invoke$arity$variadic = G__25677__delegate;
return G__25677;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__25681 = cljs.core._EQ_;
var expr__25682 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__25681.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__25682))){
var path_parts = ((function (pred__25681,expr__25682){
return (function (p1__25680_SHARP_){
return clojure.string.split.call(null,p1__25680_SHARP_,/[\/\\]/);
});})(pred__25681,expr__25682))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__25681,expr__25682){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e25684){if((e25684 instanceof Error)){
var e = e25684;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25684;

}
}})());
});
;})(path_parts,sep,root,pred__25681,expr__25682))
} else {
if(cljs.core.truth_(pred__25681.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__25682))){
return ((function (pred__25681,expr__25682){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__25681,expr__25682){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__25681,expr__25682))
);

return deferred.addErrback(((function (deferred,pred__25681,expr__25682){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__25681,expr__25682))
);
});
;})(pred__25681,expr__25682))
} else {
return ((function (pred__25681,expr__25682){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__25681,expr__25682))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25685,callback){
var map__25688 = p__25685;
var map__25688__$1 = ((((!((map__25688 == null)))?((((map__25688.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25688.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25688):map__25688);
var file_msg = map__25688__$1;
var request_url = cljs.core.get.call(null,map__25688__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__25688,map__25688__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25688,map__25688__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__22650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22650__auto__){
return (function (){
var f__22651__auto__ = (function (){var switch__22538__auto__ = ((function (c__22650__auto__){
return (function (state_25712){
var state_val_25713 = (state_25712[(1)]);
if((state_val_25713 === (7))){
var inst_25708 = (state_25712[(2)]);
var state_25712__$1 = state_25712;
var statearr_25714_25734 = state_25712__$1;
(statearr_25714_25734[(2)] = inst_25708);

(statearr_25714_25734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25713 === (1))){
var state_25712__$1 = state_25712;
var statearr_25715_25735 = state_25712__$1;
(statearr_25715_25735[(2)] = null);

(statearr_25715_25735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25713 === (4))){
var inst_25692 = (state_25712[(7)]);
var inst_25692__$1 = (state_25712[(2)]);
var state_25712__$1 = (function (){var statearr_25716 = state_25712;
(statearr_25716[(7)] = inst_25692__$1);

return statearr_25716;
})();
if(cljs.core.truth_(inst_25692__$1)){
var statearr_25717_25736 = state_25712__$1;
(statearr_25717_25736[(1)] = (5));

} else {
var statearr_25718_25737 = state_25712__$1;
(statearr_25718_25737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25713 === (6))){
var state_25712__$1 = state_25712;
var statearr_25719_25738 = state_25712__$1;
(statearr_25719_25738[(2)] = null);

(statearr_25719_25738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25713 === (3))){
var inst_25710 = (state_25712[(2)]);
var state_25712__$1 = state_25712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25712__$1,inst_25710);
} else {
if((state_val_25713 === (2))){
var state_25712__$1 = state_25712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25712__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_25713 === (11))){
var inst_25704 = (state_25712[(2)]);
var state_25712__$1 = (function (){var statearr_25720 = state_25712;
(statearr_25720[(8)] = inst_25704);

return statearr_25720;
})();
var statearr_25721_25739 = state_25712__$1;
(statearr_25721_25739[(2)] = null);

(statearr_25721_25739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25713 === (9))){
var inst_25698 = (state_25712[(9)]);
var inst_25696 = (state_25712[(10)]);
var inst_25700 = inst_25698.call(null,inst_25696);
var state_25712__$1 = state_25712;
var statearr_25722_25740 = state_25712__$1;
(statearr_25722_25740[(2)] = inst_25700);

(statearr_25722_25740[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25713 === (5))){
var inst_25692 = (state_25712[(7)]);
var inst_25694 = figwheel.client.file_reloading.blocking_load.call(null,inst_25692);
var state_25712__$1 = state_25712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25712__$1,(8),inst_25694);
} else {
if((state_val_25713 === (10))){
var inst_25696 = (state_25712[(10)]);
var inst_25702 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_25696);
var state_25712__$1 = state_25712;
var statearr_25723_25741 = state_25712__$1;
(statearr_25723_25741[(2)] = inst_25702);

(statearr_25723_25741[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25713 === (8))){
var inst_25692 = (state_25712[(7)]);
var inst_25698 = (state_25712[(9)]);
var inst_25696 = (state_25712[(2)]);
var inst_25697 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_25698__$1 = cljs.core.get.call(null,inst_25697,inst_25692);
var state_25712__$1 = (function (){var statearr_25724 = state_25712;
(statearr_25724[(9)] = inst_25698__$1);

(statearr_25724[(10)] = inst_25696);

return statearr_25724;
})();
if(cljs.core.truth_(inst_25698__$1)){
var statearr_25725_25742 = state_25712__$1;
(statearr_25725_25742[(1)] = (9));

} else {
var statearr_25726_25743 = state_25712__$1;
(statearr_25726_25743[(1)] = (10));

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
});})(c__22650__auto__))
;
return ((function (switch__22538__auto__,c__22650__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22539__auto__ = null;
var figwheel$client$file_reloading$state_machine__22539__auto____0 = (function (){
var statearr_25730 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25730[(0)] = figwheel$client$file_reloading$state_machine__22539__auto__);

(statearr_25730[(1)] = (1));

return statearr_25730;
});
var figwheel$client$file_reloading$state_machine__22539__auto____1 = (function (state_25712){
while(true){
var ret_value__22540__auto__ = (function (){try{while(true){
var result__22541__auto__ = switch__22538__auto__.call(null,state_25712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22541__auto__;
}
break;
}
}catch (e25731){if((e25731 instanceof Object)){
var ex__22542__auto__ = e25731;
var statearr_25732_25744 = state_25712;
(statearr_25732_25744[(5)] = ex__22542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25745 = state_25712;
state_25712 = G__25745;
continue;
} else {
return ret_value__22540__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22539__auto__ = function(state_25712){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22539__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22539__auto____1.call(this,state_25712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22539__auto____0;
figwheel$client$file_reloading$state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22539__auto____1;
return figwheel$client$file_reloading$state_machine__22539__auto__;
})()
;})(switch__22538__auto__,c__22650__auto__))
})();
var state__22652__auto__ = (function (){var statearr_25733 = f__22651__auto__.call(null);
(statearr_25733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22650__auto__);

return statearr_25733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22652__auto__);
});})(c__22650__auto__))
);

return c__22650__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__25746,callback){
var map__25749 = p__25746;
var map__25749__$1 = ((((!((map__25749 == null)))?((((map__25749.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25749.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25749):map__25749);
var file_msg = map__25749__$1;
var namespace = cljs.core.get.call(null,map__25749__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__25749,map__25749__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__25749,map__25749__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25751){
var map__25754 = p__25751;
var map__25754__$1 = ((((!((map__25754 == null)))?((((map__25754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25754):map__25754);
var file_msg = map__25754__$1;
var namespace = cljs.core.get.call(null,map__25754__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25756,callback){
var map__25759 = p__25756;
var map__25759__$1 = ((((!((map__25759 == null)))?((((map__25759.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25759.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25759):map__25759);
var file_msg = map__25759__$1;
var request_url = cljs.core.get.call(null,map__25759__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25759__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__22650__auto___25847 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22650__auto___25847,out){
return (function (){
var f__22651__auto__ = (function (){var switch__22538__auto__ = ((function (c__22650__auto___25847,out){
return (function (state_25829){
var state_val_25830 = (state_25829[(1)]);
if((state_val_25830 === (1))){
var inst_25807 = cljs.core.nth.call(null,files,(0),null);
var inst_25808 = cljs.core.nthnext.call(null,files,(1));
var inst_25809 = files;
var state_25829__$1 = (function (){var statearr_25831 = state_25829;
(statearr_25831[(7)] = inst_25807);

(statearr_25831[(8)] = inst_25809);

(statearr_25831[(9)] = inst_25808);

return statearr_25831;
})();
var statearr_25832_25848 = state_25829__$1;
(statearr_25832_25848[(2)] = null);

(statearr_25832_25848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25830 === (2))){
var inst_25812 = (state_25829[(10)]);
var inst_25809 = (state_25829[(8)]);
var inst_25812__$1 = cljs.core.nth.call(null,inst_25809,(0),null);
var inst_25813 = cljs.core.nthnext.call(null,inst_25809,(1));
var inst_25814 = (inst_25812__$1 == null);
var inst_25815 = cljs.core.not.call(null,inst_25814);
var state_25829__$1 = (function (){var statearr_25833 = state_25829;
(statearr_25833[(10)] = inst_25812__$1);

(statearr_25833[(11)] = inst_25813);

return statearr_25833;
})();
if(inst_25815){
var statearr_25834_25849 = state_25829__$1;
(statearr_25834_25849[(1)] = (4));

} else {
var statearr_25835_25850 = state_25829__$1;
(statearr_25835_25850[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25830 === (3))){
var inst_25827 = (state_25829[(2)]);
var state_25829__$1 = state_25829;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25829__$1,inst_25827);
} else {
if((state_val_25830 === (4))){
var inst_25812 = (state_25829[(10)]);
var inst_25817 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25812);
var state_25829__$1 = state_25829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25829__$1,(7),inst_25817);
} else {
if((state_val_25830 === (5))){
var inst_25823 = cljs.core.async.close_BANG_.call(null,out);
var state_25829__$1 = state_25829;
var statearr_25836_25851 = state_25829__$1;
(statearr_25836_25851[(2)] = inst_25823);

(statearr_25836_25851[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25830 === (6))){
var inst_25825 = (state_25829[(2)]);
var state_25829__$1 = state_25829;
var statearr_25837_25852 = state_25829__$1;
(statearr_25837_25852[(2)] = inst_25825);

(statearr_25837_25852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25830 === (7))){
var inst_25813 = (state_25829[(11)]);
var inst_25819 = (state_25829[(2)]);
var inst_25820 = cljs.core.async.put_BANG_.call(null,out,inst_25819);
var inst_25809 = inst_25813;
var state_25829__$1 = (function (){var statearr_25838 = state_25829;
(statearr_25838[(8)] = inst_25809);

(statearr_25838[(12)] = inst_25820);

return statearr_25838;
})();
var statearr_25839_25853 = state_25829__$1;
(statearr_25839_25853[(2)] = null);

(statearr_25839_25853[(1)] = (2));


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
});})(c__22650__auto___25847,out))
;
return ((function (switch__22538__auto__,c__22650__auto___25847,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22539__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22539__auto____0 = (function (){
var statearr_25843 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25843[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22539__auto__);

(statearr_25843[(1)] = (1));

return statearr_25843;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22539__auto____1 = (function (state_25829){
while(true){
var ret_value__22540__auto__ = (function (){try{while(true){
var result__22541__auto__ = switch__22538__auto__.call(null,state_25829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22541__auto__;
}
break;
}
}catch (e25844){if((e25844 instanceof Object)){
var ex__22542__auto__ = e25844;
var statearr_25845_25854 = state_25829;
(statearr_25845_25854[(5)] = ex__22542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25855 = state_25829;
state_25829 = G__25855;
continue;
} else {
return ret_value__22540__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22539__auto__ = function(state_25829){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22539__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22539__auto____1.call(this,state_25829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22539__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22539__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22539__auto__;
})()
;})(switch__22538__auto__,c__22650__auto___25847,out))
})();
var state__22652__auto__ = (function (){var statearr_25846 = f__22651__auto__.call(null);
(statearr_25846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22650__auto___25847);

return statearr_25846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22652__auto__);
});})(c__22650__auto___25847,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25856,opts){
var map__25860 = p__25856;
var map__25860__$1 = ((((!((map__25860 == null)))?((((map__25860.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25860.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25860):map__25860);
var eval_body__$1 = cljs.core.get.call(null,map__25860__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25860__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e25862){var e = e25862;
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
return (function (p1__25863_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25863_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__25868){
var vec__25869 = p__25868;
var k = cljs.core.nth.call(null,vec__25869,(0),null);
var v = cljs.core.nth.call(null,vec__25869,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__25870){
var vec__25871 = p__25870;
var k = cljs.core.nth.call(null,vec__25871,(0),null);
var v = cljs.core.nth.call(null,vec__25871,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25875,p__25876){
var map__26123 = p__25875;
var map__26123__$1 = ((((!((map__26123 == null)))?((((map__26123.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26123.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26123):map__26123);
var opts = map__26123__$1;
var before_jsload = cljs.core.get.call(null,map__26123__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__26123__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__26123__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__26124 = p__25876;
var map__26124__$1 = ((((!((map__26124 == null)))?((((map__26124.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26124.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26124):map__26124);
var msg = map__26124__$1;
var files = cljs.core.get.call(null,map__26124__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__26124__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__26124__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22650__auto__,map__26123,map__26123__$1,opts,before_jsload,on_jsload,reload_dependents,map__26124,map__26124__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22651__auto__ = (function (){var switch__22538__auto__ = ((function (c__22650__auto__,map__26123,map__26123__$1,opts,before_jsload,on_jsload,reload_dependents,map__26124,map__26124__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_26277){
var state_val_26278 = (state_26277[(1)]);
if((state_val_26278 === (7))){
var inst_26138 = (state_26277[(7)]);
var inst_26140 = (state_26277[(8)]);
var inst_26139 = (state_26277[(9)]);
var inst_26141 = (state_26277[(10)]);
var inst_26146 = cljs.core._nth.call(null,inst_26139,inst_26141);
var inst_26147 = figwheel.client.file_reloading.eval_body.call(null,inst_26146,opts);
var inst_26148 = (inst_26141 + (1));
var tmp26279 = inst_26138;
var tmp26280 = inst_26140;
var tmp26281 = inst_26139;
var inst_26138__$1 = tmp26279;
var inst_26139__$1 = tmp26281;
var inst_26140__$1 = tmp26280;
var inst_26141__$1 = inst_26148;
var state_26277__$1 = (function (){var statearr_26282 = state_26277;
(statearr_26282[(11)] = inst_26147);

(statearr_26282[(7)] = inst_26138__$1);

(statearr_26282[(8)] = inst_26140__$1);

(statearr_26282[(9)] = inst_26139__$1);

(statearr_26282[(10)] = inst_26141__$1);

return statearr_26282;
})();
var statearr_26283_26369 = state_26277__$1;
(statearr_26283_26369[(2)] = null);

(statearr_26283_26369[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (20))){
var inst_26181 = (state_26277[(12)]);
var inst_26189 = figwheel.client.file_reloading.sort_files.call(null,inst_26181);
var state_26277__$1 = state_26277;
var statearr_26284_26370 = state_26277__$1;
(statearr_26284_26370[(2)] = inst_26189);

(statearr_26284_26370[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (27))){
var state_26277__$1 = state_26277;
var statearr_26285_26371 = state_26277__$1;
(statearr_26285_26371[(2)] = null);

(statearr_26285_26371[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (1))){
var inst_26130 = (state_26277[(13)]);
var inst_26127 = before_jsload.call(null,files);
var inst_26128 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_26129 = (function (){return ((function (inst_26130,inst_26127,inst_26128,state_val_26278,c__22650__auto__,map__26123,map__26123__$1,opts,before_jsload,on_jsload,reload_dependents,map__26124,map__26124__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25872_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25872_SHARP_);
});
;})(inst_26130,inst_26127,inst_26128,state_val_26278,c__22650__auto__,map__26123,map__26123__$1,opts,before_jsload,on_jsload,reload_dependents,map__26124,map__26124__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26130__$1 = cljs.core.filter.call(null,inst_26129,files);
var inst_26131 = cljs.core.not_empty.call(null,inst_26130__$1);
var state_26277__$1 = (function (){var statearr_26286 = state_26277;
(statearr_26286[(14)] = inst_26127);

(statearr_26286[(13)] = inst_26130__$1);

(statearr_26286[(15)] = inst_26128);

return statearr_26286;
})();
if(cljs.core.truth_(inst_26131)){
var statearr_26287_26372 = state_26277__$1;
(statearr_26287_26372[(1)] = (2));

} else {
var statearr_26288_26373 = state_26277__$1;
(statearr_26288_26373[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (24))){
var state_26277__$1 = state_26277;
var statearr_26289_26374 = state_26277__$1;
(statearr_26289_26374[(2)] = null);

(statearr_26289_26374[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (39))){
var inst_26231 = (state_26277[(16)]);
var state_26277__$1 = state_26277;
var statearr_26290_26375 = state_26277__$1;
(statearr_26290_26375[(2)] = inst_26231);

(statearr_26290_26375[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (46))){
var inst_26272 = (state_26277[(2)]);
var state_26277__$1 = state_26277;
var statearr_26291_26376 = state_26277__$1;
(statearr_26291_26376[(2)] = inst_26272);

(statearr_26291_26376[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (4))){
var inst_26175 = (state_26277[(2)]);
var inst_26176 = cljs.core.List.EMPTY;
var inst_26177 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_26176);
var inst_26178 = (function (){return ((function (inst_26175,inst_26176,inst_26177,state_val_26278,c__22650__auto__,map__26123,map__26123__$1,opts,before_jsload,on_jsload,reload_dependents,map__26124,map__26124__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25873_SHARP_){
var and__16829__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25873_SHARP_);
if(cljs.core.truth_(and__16829__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25873_SHARP_));
} else {
return and__16829__auto__;
}
});
;})(inst_26175,inst_26176,inst_26177,state_val_26278,c__22650__auto__,map__26123,map__26123__$1,opts,before_jsload,on_jsload,reload_dependents,map__26124,map__26124__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26179 = cljs.core.filter.call(null,inst_26178,files);
var inst_26180 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_26181 = cljs.core.concat.call(null,inst_26179,inst_26180);
var state_26277__$1 = (function (){var statearr_26292 = state_26277;
(statearr_26292[(17)] = inst_26177);

(statearr_26292[(18)] = inst_26175);

(statearr_26292[(12)] = inst_26181);

return statearr_26292;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_26293_26377 = state_26277__$1;
(statearr_26293_26377[(1)] = (16));

} else {
var statearr_26294_26378 = state_26277__$1;
(statearr_26294_26378[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (15))){
var inst_26165 = (state_26277[(2)]);
var state_26277__$1 = state_26277;
var statearr_26295_26379 = state_26277__$1;
(statearr_26295_26379[(2)] = inst_26165);

(statearr_26295_26379[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (21))){
var inst_26191 = (state_26277[(19)]);
var inst_26191__$1 = (state_26277[(2)]);
var inst_26192 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_26191__$1);
var state_26277__$1 = (function (){var statearr_26296 = state_26277;
(statearr_26296[(19)] = inst_26191__$1);

return statearr_26296;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26277__$1,(22),inst_26192);
} else {
if((state_val_26278 === (31))){
var inst_26275 = (state_26277[(2)]);
var state_26277__$1 = state_26277;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26277__$1,inst_26275);
} else {
if((state_val_26278 === (32))){
var inst_26231 = (state_26277[(16)]);
var inst_26236 = inst_26231.cljs$lang$protocol_mask$partition0$;
var inst_26237 = (inst_26236 & (64));
var inst_26238 = inst_26231.cljs$core$ISeq$;
var inst_26239 = (inst_26237) || (inst_26238);
var state_26277__$1 = state_26277;
if(cljs.core.truth_(inst_26239)){
var statearr_26297_26380 = state_26277__$1;
(statearr_26297_26380[(1)] = (35));

} else {
var statearr_26298_26381 = state_26277__$1;
(statearr_26298_26381[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (40))){
var inst_26252 = (state_26277[(20)]);
var inst_26251 = (state_26277[(2)]);
var inst_26252__$1 = cljs.core.get.call(null,inst_26251,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_26253 = cljs.core.get.call(null,inst_26251,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_26254 = cljs.core.not_empty.call(null,inst_26252__$1);
var state_26277__$1 = (function (){var statearr_26299 = state_26277;
(statearr_26299[(20)] = inst_26252__$1);

(statearr_26299[(21)] = inst_26253);

return statearr_26299;
})();
if(cljs.core.truth_(inst_26254)){
var statearr_26300_26382 = state_26277__$1;
(statearr_26300_26382[(1)] = (41));

} else {
var statearr_26301_26383 = state_26277__$1;
(statearr_26301_26383[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (33))){
var state_26277__$1 = state_26277;
var statearr_26302_26384 = state_26277__$1;
(statearr_26302_26384[(2)] = false);

(statearr_26302_26384[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (13))){
var inst_26151 = (state_26277[(22)]);
var inst_26155 = cljs.core.chunk_first.call(null,inst_26151);
var inst_26156 = cljs.core.chunk_rest.call(null,inst_26151);
var inst_26157 = cljs.core.count.call(null,inst_26155);
var inst_26138 = inst_26156;
var inst_26139 = inst_26155;
var inst_26140 = inst_26157;
var inst_26141 = (0);
var state_26277__$1 = (function (){var statearr_26303 = state_26277;
(statearr_26303[(7)] = inst_26138);

(statearr_26303[(8)] = inst_26140);

(statearr_26303[(9)] = inst_26139);

(statearr_26303[(10)] = inst_26141);

return statearr_26303;
})();
var statearr_26304_26385 = state_26277__$1;
(statearr_26304_26385[(2)] = null);

(statearr_26304_26385[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (22))){
var inst_26191 = (state_26277[(19)]);
var inst_26195 = (state_26277[(23)]);
var inst_26199 = (state_26277[(24)]);
var inst_26194 = (state_26277[(25)]);
var inst_26194__$1 = (state_26277[(2)]);
var inst_26195__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26194__$1);
var inst_26196 = (function (){var all_files = inst_26191;
var res_SINGLEQUOTE_ = inst_26194__$1;
var res = inst_26195__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_26191,inst_26195,inst_26199,inst_26194,inst_26194__$1,inst_26195__$1,state_val_26278,c__22650__auto__,map__26123,map__26123__$1,opts,before_jsload,on_jsload,reload_dependents,map__26124,map__26124__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25874_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25874_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_26191,inst_26195,inst_26199,inst_26194,inst_26194__$1,inst_26195__$1,state_val_26278,c__22650__auto__,map__26123,map__26123__$1,opts,before_jsload,on_jsload,reload_dependents,map__26124,map__26124__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26197 = cljs.core.filter.call(null,inst_26196,inst_26194__$1);
var inst_26198 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_26199__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26198);
var inst_26200 = cljs.core.not_empty.call(null,inst_26199__$1);
var state_26277__$1 = (function (){var statearr_26305 = state_26277;
(statearr_26305[(23)] = inst_26195__$1);

(statearr_26305[(24)] = inst_26199__$1);

(statearr_26305[(25)] = inst_26194__$1);

(statearr_26305[(26)] = inst_26197);

return statearr_26305;
})();
if(cljs.core.truth_(inst_26200)){
var statearr_26306_26386 = state_26277__$1;
(statearr_26306_26386[(1)] = (23));

} else {
var statearr_26307_26387 = state_26277__$1;
(statearr_26307_26387[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (36))){
var state_26277__$1 = state_26277;
var statearr_26308_26388 = state_26277__$1;
(statearr_26308_26388[(2)] = false);

(statearr_26308_26388[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (41))){
var inst_26252 = (state_26277[(20)]);
var inst_26256 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_26257 = cljs.core.map.call(null,inst_26256,inst_26252);
var inst_26258 = cljs.core.pr_str.call(null,inst_26257);
var inst_26259 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_26258)].join('');
var inst_26260 = figwheel.client.utils.log.call(null,inst_26259);
var state_26277__$1 = state_26277;
var statearr_26309_26389 = state_26277__$1;
(statearr_26309_26389[(2)] = inst_26260);

(statearr_26309_26389[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (43))){
var inst_26253 = (state_26277[(21)]);
var inst_26263 = (state_26277[(2)]);
var inst_26264 = cljs.core.not_empty.call(null,inst_26253);
var state_26277__$1 = (function (){var statearr_26310 = state_26277;
(statearr_26310[(27)] = inst_26263);

return statearr_26310;
})();
if(cljs.core.truth_(inst_26264)){
var statearr_26311_26390 = state_26277__$1;
(statearr_26311_26390[(1)] = (44));

} else {
var statearr_26312_26391 = state_26277__$1;
(statearr_26312_26391[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (29))){
var inst_26231 = (state_26277[(16)]);
var inst_26191 = (state_26277[(19)]);
var inst_26195 = (state_26277[(23)]);
var inst_26199 = (state_26277[(24)]);
var inst_26194 = (state_26277[(25)]);
var inst_26197 = (state_26277[(26)]);
var inst_26227 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_26230 = (function (){var all_files = inst_26191;
var res_SINGLEQUOTE_ = inst_26194;
var res = inst_26195;
var files_not_loaded = inst_26197;
var dependencies_that_loaded = inst_26199;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26231,inst_26191,inst_26195,inst_26199,inst_26194,inst_26197,inst_26227,state_val_26278,c__22650__auto__,map__26123,map__26123__$1,opts,before_jsload,on_jsload,reload_dependents,map__26124,map__26124__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26229){
var map__26313 = p__26229;
var map__26313__$1 = ((((!((map__26313 == null)))?((((map__26313.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26313.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26313):map__26313);
var namespace = cljs.core.get.call(null,map__26313__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26231,inst_26191,inst_26195,inst_26199,inst_26194,inst_26197,inst_26227,state_val_26278,c__22650__auto__,map__26123,map__26123__$1,opts,before_jsload,on_jsload,reload_dependents,map__26124,map__26124__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26231__$1 = cljs.core.group_by.call(null,inst_26230,inst_26197);
var inst_26233 = (inst_26231__$1 == null);
var inst_26234 = cljs.core.not.call(null,inst_26233);
var state_26277__$1 = (function (){var statearr_26315 = state_26277;
(statearr_26315[(16)] = inst_26231__$1);

(statearr_26315[(28)] = inst_26227);

return statearr_26315;
})();
if(inst_26234){
var statearr_26316_26392 = state_26277__$1;
(statearr_26316_26392[(1)] = (32));

} else {
var statearr_26317_26393 = state_26277__$1;
(statearr_26317_26393[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (44))){
var inst_26253 = (state_26277[(21)]);
var inst_26266 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26253);
var inst_26267 = cljs.core.pr_str.call(null,inst_26266);
var inst_26268 = [cljs.core.str("not required: "),cljs.core.str(inst_26267)].join('');
var inst_26269 = figwheel.client.utils.log.call(null,inst_26268);
var state_26277__$1 = state_26277;
var statearr_26318_26394 = state_26277__$1;
(statearr_26318_26394[(2)] = inst_26269);

(statearr_26318_26394[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (6))){
var inst_26172 = (state_26277[(2)]);
var state_26277__$1 = state_26277;
var statearr_26319_26395 = state_26277__$1;
(statearr_26319_26395[(2)] = inst_26172);

(statearr_26319_26395[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (28))){
var inst_26197 = (state_26277[(26)]);
var inst_26224 = (state_26277[(2)]);
var inst_26225 = cljs.core.not_empty.call(null,inst_26197);
var state_26277__$1 = (function (){var statearr_26320 = state_26277;
(statearr_26320[(29)] = inst_26224);

return statearr_26320;
})();
if(cljs.core.truth_(inst_26225)){
var statearr_26321_26396 = state_26277__$1;
(statearr_26321_26396[(1)] = (29));

} else {
var statearr_26322_26397 = state_26277__$1;
(statearr_26322_26397[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (25))){
var inst_26195 = (state_26277[(23)]);
var inst_26211 = (state_26277[(2)]);
var inst_26212 = cljs.core.not_empty.call(null,inst_26195);
var state_26277__$1 = (function (){var statearr_26323 = state_26277;
(statearr_26323[(30)] = inst_26211);

return statearr_26323;
})();
if(cljs.core.truth_(inst_26212)){
var statearr_26324_26398 = state_26277__$1;
(statearr_26324_26398[(1)] = (26));

} else {
var statearr_26325_26399 = state_26277__$1;
(statearr_26325_26399[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (34))){
var inst_26246 = (state_26277[(2)]);
var state_26277__$1 = state_26277;
if(cljs.core.truth_(inst_26246)){
var statearr_26326_26400 = state_26277__$1;
(statearr_26326_26400[(1)] = (38));

} else {
var statearr_26327_26401 = state_26277__$1;
(statearr_26327_26401[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (17))){
var state_26277__$1 = state_26277;
var statearr_26328_26402 = state_26277__$1;
(statearr_26328_26402[(2)] = recompile_dependents);

(statearr_26328_26402[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (3))){
var state_26277__$1 = state_26277;
var statearr_26329_26403 = state_26277__$1;
(statearr_26329_26403[(2)] = null);

(statearr_26329_26403[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (12))){
var inst_26168 = (state_26277[(2)]);
var state_26277__$1 = state_26277;
var statearr_26330_26404 = state_26277__$1;
(statearr_26330_26404[(2)] = inst_26168);

(statearr_26330_26404[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (2))){
var inst_26130 = (state_26277[(13)]);
var inst_26137 = cljs.core.seq.call(null,inst_26130);
var inst_26138 = inst_26137;
var inst_26139 = null;
var inst_26140 = (0);
var inst_26141 = (0);
var state_26277__$1 = (function (){var statearr_26331 = state_26277;
(statearr_26331[(7)] = inst_26138);

(statearr_26331[(8)] = inst_26140);

(statearr_26331[(9)] = inst_26139);

(statearr_26331[(10)] = inst_26141);

return statearr_26331;
})();
var statearr_26332_26405 = state_26277__$1;
(statearr_26332_26405[(2)] = null);

(statearr_26332_26405[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (23))){
var inst_26191 = (state_26277[(19)]);
var inst_26195 = (state_26277[(23)]);
var inst_26199 = (state_26277[(24)]);
var inst_26194 = (state_26277[(25)]);
var inst_26197 = (state_26277[(26)]);
var inst_26202 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_26204 = (function (){var all_files = inst_26191;
var res_SINGLEQUOTE_ = inst_26194;
var res = inst_26195;
var files_not_loaded = inst_26197;
var dependencies_that_loaded = inst_26199;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26191,inst_26195,inst_26199,inst_26194,inst_26197,inst_26202,state_val_26278,c__22650__auto__,map__26123,map__26123__$1,opts,before_jsload,on_jsload,reload_dependents,map__26124,map__26124__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26203){
var map__26333 = p__26203;
var map__26333__$1 = ((((!((map__26333 == null)))?((((map__26333.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26333.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26333):map__26333);
var request_url = cljs.core.get.call(null,map__26333__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26191,inst_26195,inst_26199,inst_26194,inst_26197,inst_26202,state_val_26278,c__22650__auto__,map__26123,map__26123__$1,opts,before_jsload,on_jsload,reload_dependents,map__26124,map__26124__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26205 = cljs.core.reverse.call(null,inst_26199);
var inst_26206 = cljs.core.map.call(null,inst_26204,inst_26205);
var inst_26207 = cljs.core.pr_str.call(null,inst_26206);
var inst_26208 = figwheel.client.utils.log.call(null,inst_26207);
var state_26277__$1 = (function (){var statearr_26335 = state_26277;
(statearr_26335[(31)] = inst_26202);

return statearr_26335;
})();
var statearr_26336_26406 = state_26277__$1;
(statearr_26336_26406[(2)] = inst_26208);

(statearr_26336_26406[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (35))){
var state_26277__$1 = state_26277;
var statearr_26337_26407 = state_26277__$1;
(statearr_26337_26407[(2)] = true);

(statearr_26337_26407[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (19))){
var inst_26181 = (state_26277[(12)]);
var inst_26187 = figwheel.client.file_reloading.expand_files.call(null,inst_26181);
var state_26277__$1 = state_26277;
var statearr_26338_26408 = state_26277__$1;
(statearr_26338_26408[(2)] = inst_26187);

(statearr_26338_26408[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (11))){
var state_26277__$1 = state_26277;
var statearr_26339_26409 = state_26277__$1;
(statearr_26339_26409[(2)] = null);

(statearr_26339_26409[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (9))){
var inst_26170 = (state_26277[(2)]);
var state_26277__$1 = state_26277;
var statearr_26340_26410 = state_26277__$1;
(statearr_26340_26410[(2)] = inst_26170);

(statearr_26340_26410[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (5))){
var inst_26140 = (state_26277[(8)]);
var inst_26141 = (state_26277[(10)]);
var inst_26143 = (inst_26141 < inst_26140);
var inst_26144 = inst_26143;
var state_26277__$1 = state_26277;
if(cljs.core.truth_(inst_26144)){
var statearr_26341_26411 = state_26277__$1;
(statearr_26341_26411[(1)] = (7));

} else {
var statearr_26342_26412 = state_26277__$1;
(statearr_26342_26412[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (14))){
var inst_26151 = (state_26277[(22)]);
var inst_26160 = cljs.core.first.call(null,inst_26151);
var inst_26161 = figwheel.client.file_reloading.eval_body.call(null,inst_26160,opts);
var inst_26162 = cljs.core.next.call(null,inst_26151);
var inst_26138 = inst_26162;
var inst_26139 = null;
var inst_26140 = (0);
var inst_26141 = (0);
var state_26277__$1 = (function (){var statearr_26343 = state_26277;
(statearr_26343[(32)] = inst_26161);

(statearr_26343[(7)] = inst_26138);

(statearr_26343[(8)] = inst_26140);

(statearr_26343[(9)] = inst_26139);

(statearr_26343[(10)] = inst_26141);

return statearr_26343;
})();
var statearr_26344_26413 = state_26277__$1;
(statearr_26344_26413[(2)] = null);

(statearr_26344_26413[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (45))){
var state_26277__$1 = state_26277;
var statearr_26345_26414 = state_26277__$1;
(statearr_26345_26414[(2)] = null);

(statearr_26345_26414[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (26))){
var inst_26191 = (state_26277[(19)]);
var inst_26195 = (state_26277[(23)]);
var inst_26199 = (state_26277[(24)]);
var inst_26194 = (state_26277[(25)]);
var inst_26197 = (state_26277[(26)]);
var inst_26214 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_26216 = (function (){var all_files = inst_26191;
var res_SINGLEQUOTE_ = inst_26194;
var res = inst_26195;
var files_not_loaded = inst_26197;
var dependencies_that_loaded = inst_26199;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26191,inst_26195,inst_26199,inst_26194,inst_26197,inst_26214,state_val_26278,c__22650__auto__,map__26123,map__26123__$1,opts,before_jsload,on_jsload,reload_dependents,map__26124,map__26124__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26215){
var map__26346 = p__26215;
var map__26346__$1 = ((((!((map__26346 == null)))?((((map__26346.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26346.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26346):map__26346);
var namespace = cljs.core.get.call(null,map__26346__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26346__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26191,inst_26195,inst_26199,inst_26194,inst_26197,inst_26214,state_val_26278,c__22650__auto__,map__26123,map__26123__$1,opts,before_jsload,on_jsload,reload_dependents,map__26124,map__26124__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26217 = cljs.core.map.call(null,inst_26216,inst_26195);
var inst_26218 = cljs.core.pr_str.call(null,inst_26217);
var inst_26219 = figwheel.client.utils.log.call(null,inst_26218);
var inst_26220 = (function (){var all_files = inst_26191;
var res_SINGLEQUOTE_ = inst_26194;
var res = inst_26195;
var files_not_loaded = inst_26197;
var dependencies_that_loaded = inst_26199;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26191,inst_26195,inst_26199,inst_26194,inst_26197,inst_26214,inst_26216,inst_26217,inst_26218,inst_26219,state_val_26278,c__22650__auto__,map__26123,map__26123__$1,opts,before_jsload,on_jsload,reload_dependents,map__26124,map__26124__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26191,inst_26195,inst_26199,inst_26194,inst_26197,inst_26214,inst_26216,inst_26217,inst_26218,inst_26219,state_val_26278,c__22650__auto__,map__26123,map__26123__$1,opts,before_jsload,on_jsload,reload_dependents,map__26124,map__26124__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26221 = setTimeout(inst_26220,(10));
var state_26277__$1 = (function (){var statearr_26348 = state_26277;
(statearr_26348[(33)] = inst_26219);

(statearr_26348[(34)] = inst_26214);

return statearr_26348;
})();
var statearr_26349_26415 = state_26277__$1;
(statearr_26349_26415[(2)] = inst_26221);

(statearr_26349_26415[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (16))){
var state_26277__$1 = state_26277;
var statearr_26350_26416 = state_26277__$1;
(statearr_26350_26416[(2)] = reload_dependents);

(statearr_26350_26416[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (38))){
var inst_26231 = (state_26277[(16)]);
var inst_26248 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26231);
var state_26277__$1 = state_26277;
var statearr_26351_26417 = state_26277__$1;
(statearr_26351_26417[(2)] = inst_26248);

(statearr_26351_26417[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (30))){
var state_26277__$1 = state_26277;
var statearr_26352_26418 = state_26277__$1;
(statearr_26352_26418[(2)] = null);

(statearr_26352_26418[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (10))){
var inst_26151 = (state_26277[(22)]);
var inst_26153 = cljs.core.chunked_seq_QMARK_.call(null,inst_26151);
var state_26277__$1 = state_26277;
if(inst_26153){
var statearr_26353_26419 = state_26277__$1;
(statearr_26353_26419[(1)] = (13));

} else {
var statearr_26354_26420 = state_26277__$1;
(statearr_26354_26420[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (18))){
var inst_26185 = (state_26277[(2)]);
var state_26277__$1 = state_26277;
if(cljs.core.truth_(inst_26185)){
var statearr_26355_26421 = state_26277__$1;
(statearr_26355_26421[(1)] = (19));

} else {
var statearr_26356_26422 = state_26277__$1;
(statearr_26356_26422[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (42))){
var state_26277__$1 = state_26277;
var statearr_26357_26423 = state_26277__$1;
(statearr_26357_26423[(2)] = null);

(statearr_26357_26423[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (37))){
var inst_26243 = (state_26277[(2)]);
var state_26277__$1 = state_26277;
var statearr_26358_26424 = state_26277__$1;
(statearr_26358_26424[(2)] = inst_26243);

(statearr_26358_26424[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26278 === (8))){
var inst_26138 = (state_26277[(7)]);
var inst_26151 = (state_26277[(22)]);
var inst_26151__$1 = cljs.core.seq.call(null,inst_26138);
var state_26277__$1 = (function (){var statearr_26359 = state_26277;
(statearr_26359[(22)] = inst_26151__$1);

return statearr_26359;
})();
if(inst_26151__$1){
var statearr_26360_26425 = state_26277__$1;
(statearr_26360_26425[(1)] = (10));

} else {
var statearr_26361_26426 = state_26277__$1;
(statearr_26361_26426[(1)] = (11));

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
});})(c__22650__auto__,map__26123,map__26123__$1,opts,before_jsload,on_jsload,reload_dependents,map__26124,map__26124__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22538__auto__,c__22650__auto__,map__26123,map__26123__$1,opts,before_jsload,on_jsload,reload_dependents,map__26124,map__26124__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22539__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22539__auto____0 = (function (){
var statearr_26365 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26365[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22539__auto__);

(statearr_26365[(1)] = (1));

return statearr_26365;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22539__auto____1 = (function (state_26277){
while(true){
var ret_value__22540__auto__ = (function (){try{while(true){
var result__22541__auto__ = switch__22538__auto__.call(null,state_26277);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22541__auto__;
}
break;
}
}catch (e26366){if((e26366 instanceof Object)){
var ex__22542__auto__ = e26366;
var statearr_26367_26427 = state_26277;
(statearr_26367_26427[(5)] = ex__22542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26428 = state_26277;
state_26277 = G__26428;
continue;
} else {
return ret_value__22540__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22539__auto__ = function(state_26277){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22539__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22539__auto____1.call(this,state_26277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22539__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22539__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22539__auto__;
})()
;})(switch__22538__auto__,c__22650__auto__,map__26123,map__26123__$1,opts,before_jsload,on_jsload,reload_dependents,map__26124,map__26124__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22652__auto__ = (function (){var statearr_26368 = f__22651__auto__.call(null);
(statearr_26368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22650__auto__);

return statearr_26368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22652__auto__);
});})(c__22650__auto__,map__26123,map__26123__$1,opts,before_jsload,on_jsload,reload_dependents,map__26124,map__26124__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22650__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26431,link){
var map__26434 = p__26431;
var map__26434__$1 = ((((!((map__26434 == null)))?((((map__26434.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26434.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26434):map__26434);
var file = cljs.core.get.call(null,map__26434__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__26434,map__26434__$1,file){
return (function (p1__26429_SHARP_,p2__26430_SHARP_){
if(cljs.core._EQ_.call(null,p1__26429_SHARP_,p2__26430_SHARP_)){
return p1__26429_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__26434,map__26434__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26440){
var map__26441 = p__26440;
var map__26441__$1 = ((((!((map__26441 == null)))?((((map__26441.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26441.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26441):map__26441);
var match_length = cljs.core.get.call(null,map__26441__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__26441__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26436_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26436_SHARP_);
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
var args26443 = [];
var len__17899__auto___26446 = arguments.length;
var i__17900__auto___26447 = (0);
while(true){
if((i__17900__auto___26447 < len__17899__auto___26446)){
args26443.push((arguments[i__17900__auto___26447]));

var G__26448 = (i__17900__auto___26447 + (1));
i__17900__auto___26447 = G__26448;
continue;
} else {
}
break;
}

var G__26445 = args26443.length;
switch (G__26445) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26443.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__26450_SHARP_,p2__26451_SHARP_){
return cljs.core.assoc.call(null,p1__26450_SHARP_,cljs.core.get.call(null,p2__26451_SHARP_,key),p2__26451_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__26452){
var map__26455 = p__26452;
var map__26455__$1 = ((((!((map__26455 == null)))?((((map__26455.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26455.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26455):map__26455);
var f_data = map__26455__$1;
var file = cljs.core.get.call(null,map__26455__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26457,files_msg){
var map__26464 = p__26457;
var map__26464__$1 = ((((!((map__26464 == null)))?((((map__26464.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26464.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26464):map__26464);
var opts = map__26464__$1;
var on_cssload = cljs.core.get.call(null,map__26464__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__26466_26470 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__26467_26471 = null;
var count__26468_26472 = (0);
var i__26469_26473 = (0);
while(true){
if((i__26469_26473 < count__26468_26472)){
var f_26474 = cljs.core._nth.call(null,chunk__26467_26471,i__26469_26473);
figwheel.client.file_reloading.reload_css_file.call(null,f_26474);

var G__26475 = seq__26466_26470;
var G__26476 = chunk__26467_26471;
var G__26477 = count__26468_26472;
var G__26478 = (i__26469_26473 + (1));
seq__26466_26470 = G__26475;
chunk__26467_26471 = G__26476;
count__26468_26472 = G__26477;
i__26469_26473 = G__26478;
continue;
} else {
var temp__4425__auto___26479 = cljs.core.seq.call(null,seq__26466_26470);
if(temp__4425__auto___26479){
var seq__26466_26480__$1 = temp__4425__auto___26479;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26466_26480__$1)){
var c__17644__auto___26481 = cljs.core.chunk_first.call(null,seq__26466_26480__$1);
var G__26482 = cljs.core.chunk_rest.call(null,seq__26466_26480__$1);
var G__26483 = c__17644__auto___26481;
var G__26484 = cljs.core.count.call(null,c__17644__auto___26481);
var G__26485 = (0);
seq__26466_26470 = G__26482;
chunk__26467_26471 = G__26483;
count__26468_26472 = G__26484;
i__26469_26473 = G__26485;
continue;
} else {
var f_26486 = cljs.core.first.call(null,seq__26466_26480__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_26486);

var G__26487 = cljs.core.next.call(null,seq__26466_26480__$1);
var G__26488 = null;
var G__26489 = (0);
var G__26490 = (0);
seq__26466_26470 = G__26487;
chunk__26467_26471 = G__26488;
count__26468_26472 = G__26489;
i__26469_26473 = G__26490;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__26464,map__26464__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__26464,map__26464__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map