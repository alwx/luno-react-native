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
var or__16855__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16855__auto__){
return or__16855__auto__;
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
var or__16855__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16855__auto__)){
return or__16855__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__25495_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__25495_SHARP_));
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
var seq__25500 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__25501 = null;
var count__25502 = (0);
var i__25503 = (0);
while(true){
if((i__25503 < count__25502)){
var n = cljs.core._nth.call(null,chunk__25501,i__25503);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25504 = seq__25500;
var G__25505 = chunk__25501;
var G__25506 = count__25502;
var G__25507 = (i__25503 + (1));
seq__25500 = G__25504;
chunk__25501 = G__25505;
count__25502 = G__25506;
i__25503 = G__25507;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25500);
if(temp__4425__auto__){
var seq__25500__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25500__$1)){
var c__17658__auto__ = cljs.core.chunk_first.call(null,seq__25500__$1);
var G__25508 = cljs.core.chunk_rest.call(null,seq__25500__$1);
var G__25509 = c__17658__auto__;
var G__25510 = cljs.core.count.call(null,c__17658__auto__);
var G__25511 = (0);
seq__25500 = G__25508;
chunk__25501 = G__25509;
count__25502 = G__25510;
i__25503 = G__25511;
continue;
} else {
var n = cljs.core.first.call(null,seq__25500__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25512 = cljs.core.next.call(null,seq__25500__$1);
var G__25513 = null;
var G__25514 = (0);
var G__25515 = (0);
seq__25500 = G__25512;
chunk__25501 = G__25513;
count__25502 = G__25514;
i__25503 = G__25515;
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

var seq__25554_25561 = cljs.core.seq.call(null,deps);
var chunk__25555_25562 = null;
var count__25556_25563 = (0);
var i__25557_25564 = (0);
while(true){
if((i__25557_25564 < count__25556_25563)){
var dep_25565 = cljs.core._nth.call(null,chunk__25555_25562,i__25557_25564);
topo_sort_helper_STAR_.call(null,dep_25565,(depth + (1)),state);

var G__25566 = seq__25554_25561;
var G__25567 = chunk__25555_25562;
var G__25568 = count__25556_25563;
var G__25569 = (i__25557_25564 + (1));
seq__25554_25561 = G__25566;
chunk__25555_25562 = G__25567;
count__25556_25563 = G__25568;
i__25557_25564 = G__25569;
continue;
} else {
var temp__4425__auto___25570 = cljs.core.seq.call(null,seq__25554_25561);
if(temp__4425__auto___25570){
var seq__25554_25571__$1 = temp__4425__auto___25570;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25554_25571__$1)){
var c__17658__auto___25572 = cljs.core.chunk_first.call(null,seq__25554_25571__$1);
var G__25573 = cljs.core.chunk_rest.call(null,seq__25554_25571__$1);
var G__25574 = c__17658__auto___25572;
var G__25575 = cljs.core.count.call(null,c__17658__auto___25572);
var G__25576 = (0);
seq__25554_25561 = G__25573;
chunk__25555_25562 = G__25574;
count__25556_25563 = G__25575;
i__25557_25564 = G__25576;
continue;
} else {
var dep_25577 = cljs.core.first.call(null,seq__25554_25571__$1);
topo_sort_helper_STAR_.call(null,dep_25577,(depth + (1)),state);

var G__25578 = cljs.core.next.call(null,seq__25554_25571__$1);
var G__25579 = null;
var G__25580 = (0);
var G__25581 = (0);
seq__25554_25561 = G__25578;
chunk__25555_25562 = G__25579;
count__25556_25563 = G__25580;
i__25557_25564 = G__25581;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__25558){
var vec__25560 = p__25558;
var x = cljs.core.nth.call(null,vec__25560,(0),null);
var xs = cljs.core.nthnext.call(null,vec__25560,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__25560,x,xs,get_deps__$1){
return (function (p1__25516_SHARP_){
return clojure.set.difference.call(null,p1__25516_SHARP_,x);
});})(vec__25560,x,xs,get_deps__$1))
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
var seq__25594 = cljs.core.seq.call(null,provides);
var chunk__25595 = null;
var count__25596 = (0);
var i__25597 = (0);
while(true){
if((i__25597 < count__25596)){
var prov = cljs.core._nth.call(null,chunk__25595,i__25597);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25598_25606 = cljs.core.seq.call(null,requires);
var chunk__25599_25607 = null;
var count__25600_25608 = (0);
var i__25601_25609 = (0);
while(true){
if((i__25601_25609 < count__25600_25608)){
var req_25610 = cljs.core._nth.call(null,chunk__25599_25607,i__25601_25609);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25610,prov);

var G__25611 = seq__25598_25606;
var G__25612 = chunk__25599_25607;
var G__25613 = count__25600_25608;
var G__25614 = (i__25601_25609 + (1));
seq__25598_25606 = G__25611;
chunk__25599_25607 = G__25612;
count__25600_25608 = G__25613;
i__25601_25609 = G__25614;
continue;
} else {
var temp__4425__auto___25615 = cljs.core.seq.call(null,seq__25598_25606);
if(temp__4425__auto___25615){
var seq__25598_25616__$1 = temp__4425__auto___25615;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25598_25616__$1)){
var c__17658__auto___25617 = cljs.core.chunk_first.call(null,seq__25598_25616__$1);
var G__25618 = cljs.core.chunk_rest.call(null,seq__25598_25616__$1);
var G__25619 = c__17658__auto___25617;
var G__25620 = cljs.core.count.call(null,c__17658__auto___25617);
var G__25621 = (0);
seq__25598_25606 = G__25618;
chunk__25599_25607 = G__25619;
count__25600_25608 = G__25620;
i__25601_25609 = G__25621;
continue;
} else {
var req_25622 = cljs.core.first.call(null,seq__25598_25616__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25622,prov);

var G__25623 = cljs.core.next.call(null,seq__25598_25616__$1);
var G__25624 = null;
var G__25625 = (0);
var G__25626 = (0);
seq__25598_25606 = G__25623;
chunk__25599_25607 = G__25624;
count__25600_25608 = G__25625;
i__25601_25609 = G__25626;
continue;
}
} else {
}
}
break;
}

var G__25627 = seq__25594;
var G__25628 = chunk__25595;
var G__25629 = count__25596;
var G__25630 = (i__25597 + (1));
seq__25594 = G__25627;
chunk__25595 = G__25628;
count__25596 = G__25629;
i__25597 = G__25630;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25594);
if(temp__4425__auto__){
var seq__25594__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25594__$1)){
var c__17658__auto__ = cljs.core.chunk_first.call(null,seq__25594__$1);
var G__25631 = cljs.core.chunk_rest.call(null,seq__25594__$1);
var G__25632 = c__17658__auto__;
var G__25633 = cljs.core.count.call(null,c__17658__auto__);
var G__25634 = (0);
seq__25594 = G__25631;
chunk__25595 = G__25632;
count__25596 = G__25633;
i__25597 = G__25634;
continue;
} else {
var prov = cljs.core.first.call(null,seq__25594__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25602_25635 = cljs.core.seq.call(null,requires);
var chunk__25603_25636 = null;
var count__25604_25637 = (0);
var i__25605_25638 = (0);
while(true){
if((i__25605_25638 < count__25604_25637)){
var req_25639 = cljs.core._nth.call(null,chunk__25603_25636,i__25605_25638);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25639,prov);

var G__25640 = seq__25602_25635;
var G__25641 = chunk__25603_25636;
var G__25642 = count__25604_25637;
var G__25643 = (i__25605_25638 + (1));
seq__25602_25635 = G__25640;
chunk__25603_25636 = G__25641;
count__25604_25637 = G__25642;
i__25605_25638 = G__25643;
continue;
} else {
var temp__4425__auto___25644__$1 = cljs.core.seq.call(null,seq__25602_25635);
if(temp__4425__auto___25644__$1){
var seq__25602_25645__$1 = temp__4425__auto___25644__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25602_25645__$1)){
var c__17658__auto___25646 = cljs.core.chunk_first.call(null,seq__25602_25645__$1);
var G__25647 = cljs.core.chunk_rest.call(null,seq__25602_25645__$1);
var G__25648 = c__17658__auto___25646;
var G__25649 = cljs.core.count.call(null,c__17658__auto___25646);
var G__25650 = (0);
seq__25602_25635 = G__25647;
chunk__25603_25636 = G__25648;
count__25604_25637 = G__25649;
i__25605_25638 = G__25650;
continue;
} else {
var req_25651 = cljs.core.first.call(null,seq__25602_25645__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25651,prov);

var G__25652 = cljs.core.next.call(null,seq__25602_25645__$1);
var G__25653 = null;
var G__25654 = (0);
var G__25655 = (0);
seq__25602_25635 = G__25652;
chunk__25603_25636 = G__25653;
count__25604_25637 = G__25654;
i__25605_25638 = G__25655;
continue;
}
} else {
}
}
break;
}

var G__25656 = cljs.core.next.call(null,seq__25594__$1);
var G__25657 = null;
var G__25658 = (0);
var G__25659 = (0);
seq__25594 = G__25656;
chunk__25595 = G__25657;
count__25596 = G__25658;
i__25597 = G__25659;
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
var seq__25664_25668 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__25665_25669 = null;
var count__25666_25670 = (0);
var i__25667_25671 = (0);
while(true){
if((i__25667_25671 < count__25666_25670)){
var ns_25672 = cljs.core._nth.call(null,chunk__25665_25669,i__25667_25671);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25672);

var G__25673 = seq__25664_25668;
var G__25674 = chunk__25665_25669;
var G__25675 = count__25666_25670;
var G__25676 = (i__25667_25671 + (1));
seq__25664_25668 = G__25673;
chunk__25665_25669 = G__25674;
count__25666_25670 = G__25675;
i__25667_25671 = G__25676;
continue;
} else {
var temp__4425__auto___25677 = cljs.core.seq.call(null,seq__25664_25668);
if(temp__4425__auto___25677){
var seq__25664_25678__$1 = temp__4425__auto___25677;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25664_25678__$1)){
var c__17658__auto___25679 = cljs.core.chunk_first.call(null,seq__25664_25678__$1);
var G__25680 = cljs.core.chunk_rest.call(null,seq__25664_25678__$1);
var G__25681 = c__17658__auto___25679;
var G__25682 = cljs.core.count.call(null,c__17658__auto___25679);
var G__25683 = (0);
seq__25664_25668 = G__25680;
chunk__25665_25669 = G__25681;
count__25666_25670 = G__25682;
i__25667_25671 = G__25683;
continue;
} else {
var ns_25684 = cljs.core.first.call(null,seq__25664_25678__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25684);

var G__25685 = cljs.core.next.call(null,seq__25664_25678__$1);
var G__25686 = null;
var G__25687 = (0);
var G__25688 = (0);
seq__25664_25668 = G__25685;
chunk__25665_25669 = G__25686;
count__25666_25670 = G__25687;
i__25667_25671 = G__25688;
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
goog.require_figwheel_backup_ = (function (){var or__16855__auto__ = goog.require__;
if(cljs.core.truth_(or__16855__auto__)){
return or__16855__auto__;
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
var G__25689__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__25689 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25690__i = 0, G__25690__a = new Array(arguments.length -  0);
while (G__25690__i < G__25690__a.length) {G__25690__a[G__25690__i] = arguments[G__25690__i + 0]; ++G__25690__i;}
  args = new cljs.core.IndexedSeq(G__25690__a,0);
} 
return G__25689__delegate.call(this,args);};
G__25689.cljs$lang$maxFixedArity = 0;
G__25689.cljs$lang$applyTo = (function (arglist__25691){
var args = cljs.core.seq(arglist__25691);
return G__25689__delegate(args);
});
G__25689.cljs$core$IFn$_invoke$arity$variadic = G__25689__delegate;
return G__25689;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__25693 = cljs.core._EQ_;
var expr__25694 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__25693.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__25694))){
var path_parts = ((function (pred__25693,expr__25694){
return (function (p1__25692_SHARP_){
return clojure.string.split.call(null,p1__25692_SHARP_,/[\/\\]/);
});})(pred__25693,expr__25694))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__25693,expr__25694){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e25696){if((e25696 instanceof Error)){
var e = e25696;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25696;

}
}})());
});
;})(path_parts,sep,root,pred__25693,expr__25694))
} else {
if(cljs.core.truth_(pred__25693.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__25694))){
return ((function (pred__25693,expr__25694){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__25693,expr__25694){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__25693,expr__25694))
);

return deferred.addErrback(((function (deferred,pred__25693,expr__25694){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__25693,expr__25694))
);
});
;})(pred__25693,expr__25694))
} else {
return ((function (pred__25693,expr__25694){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__25693,expr__25694))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25697,callback){
var map__25700 = p__25697;
var map__25700__$1 = ((((!((map__25700 == null)))?((((map__25700.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25700.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25700):map__25700);
var file_msg = map__25700__$1;
var request_url = cljs.core.get.call(null,map__25700__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__25700,map__25700__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25700,map__25700__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__22662__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22662__auto__){
return (function (){
var f__22663__auto__ = (function (){var switch__22550__auto__ = ((function (c__22662__auto__){
return (function (state_25724){
var state_val_25725 = (state_25724[(1)]);
if((state_val_25725 === (7))){
var inst_25720 = (state_25724[(2)]);
var state_25724__$1 = state_25724;
var statearr_25726_25746 = state_25724__$1;
(statearr_25726_25746[(2)] = inst_25720);

(statearr_25726_25746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25725 === (1))){
var state_25724__$1 = state_25724;
var statearr_25727_25747 = state_25724__$1;
(statearr_25727_25747[(2)] = null);

(statearr_25727_25747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25725 === (4))){
var inst_25704 = (state_25724[(7)]);
var inst_25704__$1 = (state_25724[(2)]);
var state_25724__$1 = (function (){var statearr_25728 = state_25724;
(statearr_25728[(7)] = inst_25704__$1);

return statearr_25728;
})();
if(cljs.core.truth_(inst_25704__$1)){
var statearr_25729_25748 = state_25724__$1;
(statearr_25729_25748[(1)] = (5));

} else {
var statearr_25730_25749 = state_25724__$1;
(statearr_25730_25749[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25725 === (6))){
var state_25724__$1 = state_25724;
var statearr_25731_25750 = state_25724__$1;
(statearr_25731_25750[(2)] = null);

(statearr_25731_25750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25725 === (3))){
var inst_25722 = (state_25724[(2)]);
var state_25724__$1 = state_25724;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25724__$1,inst_25722);
} else {
if((state_val_25725 === (2))){
var state_25724__$1 = state_25724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25724__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_25725 === (11))){
var inst_25716 = (state_25724[(2)]);
var state_25724__$1 = (function (){var statearr_25732 = state_25724;
(statearr_25732[(8)] = inst_25716);

return statearr_25732;
})();
var statearr_25733_25751 = state_25724__$1;
(statearr_25733_25751[(2)] = null);

(statearr_25733_25751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25725 === (9))){
var inst_25708 = (state_25724[(9)]);
var inst_25710 = (state_25724[(10)]);
var inst_25712 = inst_25710.call(null,inst_25708);
var state_25724__$1 = state_25724;
var statearr_25734_25752 = state_25724__$1;
(statearr_25734_25752[(2)] = inst_25712);

(statearr_25734_25752[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25725 === (5))){
var inst_25704 = (state_25724[(7)]);
var inst_25706 = figwheel.client.file_reloading.blocking_load.call(null,inst_25704);
var state_25724__$1 = state_25724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25724__$1,(8),inst_25706);
} else {
if((state_val_25725 === (10))){
var inst_25708 = (state_25724[(9)]);
var inst_25714 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_25708);
var state_25724__$1 = state_25724;
var statearr_25735_25753 = state_25724__$1;
(statearr_25735_25753[(2)] = inst_25714);

(statearr_25735_25753[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25725 === (8))){
var inst_25704 = (state_25724[(7)]);
var inst_25710 = (state_25724[(10)]);
var inst_25708 = (state_25724[(2)]);
var inst_25709 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_25710__$1 = cljs.core.get.call(null,inst_25709,inst_25704);
var state_25724__$1 = (function (){var statearr_25736 = state_25724;
(statearr_25736[(9)] = inst_25708);

(statearr_25736[(10)] = inst_25710__$1);

return statearr_25736;
})();
if(cljs.core.truth_(inst_25710__$1)){
var statearr_25737_25754 = state_25724__$1;
(statearr_25737_25754[(1)] = (9));

} else {
var statearr_25738_25755 = state_25724__$1;
(statearr_25738_25755[(1)] = (10));

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
});})(c__22662__auto__))
;
return ((function (switch__22550__auto__,c__22662__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22551__auto__ = null;
var figwheel$client$file_reloading$state_machine__22551__auto____0 = (function (){
var statearr_25742 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25742[(0)] = figwheel$client$file_reloading$state_machine__22551__auto__);

(statearr_25742[(1)] = (1));

return statearr_25742;
});
var figwheel$client$file_reloading$state_machine__22551__auto____1 = (function (state_25724){
while(true){
var ret_value__22552__auto__ = (function (){try{while(true){
var result__22553__auto__ = switch__22550__auto__.call(null,state_25724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22553__auto__;
}
break;
}
}catch (e25743){if((e25743 instanceof Object)){
var ex__22554__auto__ = e25743;
var statearr_25744_25756 = state_25724;
(statearr_25744_25756[(5)] = ex__22554__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25743;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25757 = state_25724;
state_25724 = G__25757;
continue;
} else {
return ret_value__22552__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22551__auto__ = function(state_25724){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22551__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22551__auto____1.call(this,state_25724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22551__auto____0;
figwheel$client$file_reloading$state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22551__auto____1;
return figwheel$client$file_reloading$state_machine__22551__auto__;
})()
;})(switch__22550__auto__,c__22662__auto__))
})();
var state__22664__auto__ = (function (){var statearr_25745 = f__22663__auto__.call(null);
(statearr_25745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22662__auto__);

return statearr_25745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22664__auto__);
});})(c__22662__auto__))
);

return c__22662__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__25758,callback){
var map__25761 = p__25758;
var map__25761__$1 = ((((!((map__25761 == null)))?((((map__25761.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25761.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25761):map__25761);
var file_msg = map__25761__$1;
var namespace = cljs.core.get.call(null,map__25761__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__25761,map__25761__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__25761,map__25761__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25763){
var map__25766 = p__25763;
var map__25766__$1 = ((((!((map__25766 == null)))?((((map__25766.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25766.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25766):map__25766);
var file_msg = map__25766__$1;
var namespace = cljs.core.get.call(null,map__25766__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16843__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16843__auto__){
var or__16855__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16855__auto__)){
return or__16855__auto__;
} else {
var or__16855__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16855__auto____$1)){
return or__16855__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16843__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25768,callback){
var map__25771 = p__25768;
var map__25771__$1 = ((((!((map__25771 == null)))?((((map__25771.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25771.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25771):map__25771);
var file_msg = map__25771__$1;
var request_url = cljs.core.get.call(null,map__25771__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25771__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__22662__auto___25859 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22662__auto___25859,out){
return (function (){
var f__22663__auto__ = (function (){var switch__22550__auto__ = ((function (c__22662__auto___25859,out){
return (function (state_25841){
var state_val_25842 = (state_25841[(1)]);
if((state_val_25842 === (1))){
var inst_25819 = cljs.core.nth.call(null,files,(0),null);
var inst_25820 = cljs.core.nthnext.call(null,files,(1));
var inst_25821 = files;
var state_25841__$1 = (function (){var statearr_25843 = state_25841;
(statearr_25843[(7)] = inst_25821);

(statearr_25843[(8)] = inst_25819);

(statearr_25843[(9)] = inst_25820);

return statearr_25843;
})();
var statearr_25844_25860 = state_25841__$1;
(statearr_25844_25860[(2)] = null);

(statearr_25844_25860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (2))){
var inst_25821 = (state_25841[(7)]);
var inst_25824 = (state_25841[(10)]);
var inst_25824__$1 = cljs.core.nth.call(null,inst_25821,(0),null);
var inst_25825 = cljs.core.nthnext.call(null,inst_25821,(1));
var inst_25826 = (inst_25824__$1 == null);
var inst_25827 = cljs.core.not.call(null,inst_25826);
var state_25841__$1 = (function (){var statearr_25845 = state_25841;
(statearr_25845[(10)] = inst_25824__$1);

(statearr_25845[(11)] = inst_25825);

return statearr_25845;
})();
if(inst_25827){
var statearr_25846_25861 = state_25841__$1;
(statearr_25846_25861[(1)] = (4));

} else {
var statearr_25847_25862 = state_25841__$1;
(statearr_25847_25862[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (3))){
var inst_25839 = (state_25841[(2)]);
var state_25841__$1 = state_25841;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25841__$1,inst_25839);
} else {
if((state_val_25842 === (4))){
var inst_25824 = (state_25841[(10)]);
var inst_25829 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25824);
var state_25841__$1 = state_25841;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25841__$1,(7),inst_25829);
} else {
if((state_val_25842 === (5))){
var inst_25835 = cljs.core.async.close_BANG_.call(null,out);
var state_25841__$1 = state_25841;
var statearr_25848_25863 = state_25841__$1;
(statearr_25848_25863[(2)] = inst_25835);

(statearr_25848_25863[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (6))){
var inst_25837 = (state_25841[(2)]);
var state_25841__$1 = state_25841;
var statearr_25849_25864 = state_25841__$1;
(statearr_25849_25864[(2)] = inst_25837);

(statearr_25849_25864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (7))){
var inst_25825 = (state_25841[(11)]);
var inst_25831 = (state_25841[(2)]);
var inst_25832 = cljs.core.async.put_BANG_.call(null,out,inst_25831);
var inst_25821 = inst_25825;
var state_25841__$1 = (function (){var statearr_25850 = state_25841;
(statearr_25850[(12)] = inst_25832);

(statearr_25850[(7)] = inst_25821);

return statearr_25850;
})();
var statearr_25851_25865 = state_25841__$1;
(statearr_25851_25865[(2)] = null);

(statearr_25851_25865[(1)] = (2));


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
});})(c__22662__auto___25859,out))
;
return ((function (switch__22550__auto__,c__22662__auto___25859,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22551__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22551__auto____0 = (function (){
var statearr_25855 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25855[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22551__auto__);

(statearr_25855[(1)] = (1));

return statearr_25855;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22551__auto____1 = (function (state_25841){
while(true){
var ret_value__22552__auto__ = (function (){try{while(true){
var result__22553__auto__ = switch__22550__auto__.call(null,state_25841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22553__auto__;
}
break;
}
}catch (e25856){if((e25856 instanceof Object)){
var ex__22554__auto__ = e25856;
var statearr_25857_25866 = state_25841;
(statearr_25857_25866[(5)] = ex__22554__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25867 = state_25841;
state_25841 = G__25867;
continue;
} else {
return ret_value__22552__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22551__auto__ = function(state_25841){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22551__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22551__auto____1.call(this,state_25841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22551__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22551__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22551__auto__;
})()
;})(switch__22550__auto__,c__22662__auto___25859,out))
})();
var state__22664__auto__ = (function (){var statearr_25858 = f__22663__auto__.call(null);
(statearr_25858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22662__auto___25859);

return statearr_25858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22664__auto__);
});})(c__22662__auto___25859,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25868,opts){
var map__25872 = p__25868;
var map__25872__$1 = ((((!((map__25872 == null)))?((((map__25872.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25872.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25872):map__25872);
var eval_body__$1 = cljs.core.get.call(null,map__25872__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25872__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16843__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16843__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16843__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e25874){var e = e25874;
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
return (function (p1__25875_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25875_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__25880){
var vec__25881 = p__25880;
var k = cljs.core.nth.call(null,vec__25881,(0),null);
var v = cljs.core.nth.call(null,vec__25881,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__25882){
var vec__25883 = p__25882;
var k = cljs.core.nth.call(null,vec__25883,(0),null);
var v = cljs.core.nth.call(null,vec__25883,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25887,p__25888){
var map__26135 = p__25887;
var map__26135__$1 = ((((!((map__26135 == null)))?((((map__26135.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26135.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26135):map__26135);
var opts = map__26135__$1;
var before_jsload = cljs.core.get.call(null,map__26135__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__26135__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__26135__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__26136 = p__25888;
var map__26136__$1 = ((((!((map__26136 == null)))?((((map__26136.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26136.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26136):map__26136);
var msg = map__26136__$1;
var files = cljs.core.get.call(null,map__26136__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__26136__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__26136__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22662__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22662__auto__,map__26135,map__26135__$1,opts,before_jsload,on_jsload,reload_dependents,map__26136,map__26136__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22663__auto__ = (function (){var switch__22550__auto__ = ((function (c__22662__auto__,map__26135,map__26135__$1,opts,before_jsload,on_jsload,reload_dependents,map__26136,map__26136__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_26289){
var state_val_26290 = (state_26289[(1)]);
if((state_val_26290 === (7))){
var inst_26150 = (state_26289[(7)]);
var inst_26152 = (state_26289[(8)]);
var inst_26151 = (state_26289[(9)]);
var inst_26153 = (state_26289[(10)]);
var inst_26158 = cljs.core._nth.call(null,inst_26151,inst_26153);
var inst_26159 = figwheel.client.file_reloading.eval_body.call(null,inst_26158,opts);
var inst_26160 = (inst_26153 + (1));
var tmp26291 = inst_26150;
var tmp26292 = inst_26152;
var tmp26293 = inst_26151;
var inst_26150__$1 = tmp26291;
var inst_26151__$1 = tmp26293;
var inst_26152__$1 = tmp26292;
var inst_26153__$1 = inst_26160;
var state_26289__$1 = (function (){var statearr_26294 = state_26289;
(statearr_26294[(7)] = inst_26150__$1);

(statearr_26294[(8)] = inst_26152__$1);

(statearr_26294[(9)] = inst_26151__$1);

(statearr_26294[(10)] = inst_26153__$1);

(statearr_26294[(11)] = inst_26159);

return statearr_26294;
})();
var statearr_26295_26381 = state_26289__$1;
(statearr_26295_26381[(2)] = null);

(statearr_26295_26381[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (20))){
var inst_26193 = (state_26289[(12)]);
var inst_26201 = figwheel.client.file_reloading.sort_files.call(null,inst_26193);
var state_26289__$1 = state_26289;
var statearr_26296_26382 = state_26289__$1;
(statearr_26296_26382[(2)] = inst_26201);

(statearr_26296_26382[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (27))){
var state_26289__$1 = state_26289;
var statearr_26297_26383 = state_26289__$1;
(statearr_26297_26383[(2)] = null);

(statearr_26297_26383[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (1))){
var inst_26142 = (state_26289[(13)]);
var inst_26139 = before_jsload.call(null,files);
var inst_26140 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_26141 = (function (){return ((function (inst_26142,inst_26139,inst_26140,state_val_26290,c__22662__auto__,map__26135,map__26135__$1,opts,before_jsload,on_jsload,reload_dependents,map__26136,map__26136__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25884_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25884_SHARP_);
});
;})(inst_26142,inst_26139,inst_26140,state_val_26290,c__22662__auto__,map__26135,map__26135__$1,opts,before_jsload,on_jsload,reload_dependents,map__26136,map__26136__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26142__$1 = cljs.core.filter.call(null,inst_26141,files);
var inst_26143 = cljs.core.not_empty.call(null,inst_26142__$1);
var state_26289__$1 = (function (){var statearr_26298 = state_26289;
(statearr_26298[(13)] = inst_26142__$1);

(statearr_26298[(14)] = inst_26140);

(statearr_26298[(15)] = inst_26139);

return statearr_26298;
})();
if(cljs.core.truth_(inst_26143)){
var statearr_26299_26384 = state_26289__$1;
(statearr_26299_26384[(1)] = (2));

} else {
var statearr_26300_26385 = state_26289__$1;
(statearr_26300_26385[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (24))){
var state_26289__$1 = state_26289;
var statearr_26301_26386 = state_26289__$1;
(statearr_26301_26386[(2)] = null);

(statearr_26301_26386[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (39))){
var inst_26243 = (state_26289[(16)]);
var state_26289__$1 = state_26289;
var statearr_26302_26387 = state_26289__$1;
(statearr_26302_26387[(2)] = inst_26243);

(statearr_26302_26387[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (46))){
var inst_26284 = (state_26289[(2)]);
var state_26289__$1 = state_26289;
var statearr_26303_26388 = state_26289__$1;
(statearr_26303_26388[(2)] = inst_26284);

(statearr_26303_26388[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (4))){
var inst_26187 = (state_26289[(2)]);
var inst_26188 = cljs.core.List.EMPTY;
var inst_26189 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_26188);
var inst_26190 = (function (){return ((function (inst_26187,inst_26188,inst_26189,state_val_26290,c__22662__auto__,map__26135,map__26135__$1,opts,before_jsload,on_jsload,reload_dependents,map__26136,map__26136__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25885_SHARP_){
var and__16843__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25885_SHARP_);
if(cljs.core.truth_(and__16843__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25885_SHARP_));
} else {
return and__16843__auto__;
}
});
;})(inst_26187,inst_26188,inst_26189,state_val_26290,c__22662__auto__,map__26135,map__26135__$1,opts,before_jsload,on_jsload,reload_dependents,map__26136,map__26136__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26191 = cljs.core.filter.call(null,inst_26190,files);
var inst_26192 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_26193 = cljs.core.concat.call(null,inst_26191,inst_26192);
var state_26289__$1 = (function (){var statearr_26304 = state_26289;
(statearr_26304[(12)] = inst_26193);

(statearr_26304[(17)] = inst_26187);

(statearr_26304[(18)] = inst_26189);

return statearr_26304;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_26305_26389 = state_26289__$1;
(statearr_26305_26389[(1)] = (16));

} else {
var statearr_26306_26390 = state_26289__$1;
(statearr_26306_26390[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (15))){
var inst_26177 = (state_26289[(2)]);
var state_26289__$1 = state_26289;
var statearr_26307_26391 = state_26289__$1;
(statearr_26307_26391[(2)] = inst_26177);

(statearr_26307_26391[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (21))){
var inst_26203 = (state_26289[(19)]);
var inst_26203__$1 = (state_26289[(2)]);
var inst_26204 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_26203__$1);
var state_26289__$1 = (function (){var statearr_26308 = state_26289;
(statearr_26308[(19)] = inst_26203__$1);

return statearr_26308;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26289__$1,(22),inst_26204);
} else {
if((state_val_26290 === (31))){
var inst_26287 = (state_26289[(2)]);
var state_26289__$1 = state_26289;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26289__$1,inst_26287);
} else {
if((state_val_26290 === (32))){
var inst_26243 = (state_26289[(16)]);
var inst_26248 = inst_26243.cljs$lang$protocol_mask$partition0$;
var inst_26249 = (inst_26248 & (64));
var inst_26250 = inst_26243.cljs$core$ISeq$;
var inst_26251 = (inst_26249) || (inst_26250);
var state_26289__$1 = state_26289;
if(cljs.core.truth_(inst_26251)){
var statearr_26309_26392 = state_26289__$1;
(statearr_26309_26392[(1)] = (35));

} else {
var statearr_26310_26393 = state_26289__$1;
(statearr_26310_26393[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (40))){
var inst_26264 = (state_26289[(20)]);
var inst_26263 = (state_26289[(2)]);
var inst_26264__$1 = cljs.core.get.call(null,inst_26263,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_26265 = cljs.core.get.call(null,inst_26263,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_26266 = cljs.core.not_empty.call(null,inst_26264__$1);
var state_26289__$1 = (function (){var statearr_26311 = state_26289;
(statearr_26311[(21)] = inst_26265);

(statearr_26311[(20)] = inst_26264__$1);

return statearr_26311;
})();
if(cljs.core.truth_(inst_26266)){
var statearr_26312_26394 = state_26289__$1;
(statearr_26312_26394[(1)] = (41));

} else {
var statearr_26313_26395 = state_26289__$1;
(statearr_26313_26395[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (33))){
var state_26289__$1 = state_26289;
var statearr_26314_26396 = state_26289__$1;
(statearr_26314_26396[(2)] = false);

(statearr_26314_26396[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (13))){
var inst_26163 = (state_26289[(22)]);
var inst_26167 = cljs.core.chunk_first.call(null,inst_26163);
var inst_26168 = cljs.core.chunk_rest.call(null,inst_26163);
var inst_26169 = cljs.core.count.call(null,inst_26167);
var inst_26150 = inst_26168;
var inst_26151 = inst_26167;
var inst_26152 = inst_26169;
var inst_26153 = (0);
var state_26289__$1 = (function (){var statearr_26315 = state_26289;
(statearr_26315[(7)] = inst_26150);

(statearr_26315[(8)] = inst_26152);

(statearr_26315[(9)] = inst_26151);

(statearr_26315[(10)] = inst_26153);

return statearr_26315;
})();
var statearr_26316_26397 = state_26289__$1;
(statearr_26316_26397[(2)] = null);

(statearr_26316_26397[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (22))){
var inst_26207 = (state_26289[(23)]);
var inst_26211 = (state_26289[(24)]);
var inst_26206 = (state_26289[(25)]);
var inst_26203 = (state_26289[(19)]);
var inst_26206__$1 = (state_26289[(2)]);
var inst_26207__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26206__$1);
var inst_26208 = (function (){var all_files = inst_26203;
var res_SINGLEQUOTE_ = inst_26206__$1;
var res = inst_26207__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_26207,inst_26211,inst_26206,inst_26203,inst_26206__$1,inst_26207__$1,state_val_26290,c__22662__auto__,map__26135,map__26135__$1,opts,before_jsload,on_jsload,reload_dependents,map__26136,map__26136__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25886_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25886_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_26207,inst_26211,inst_26206,inst_26203,inst_26206__$1,inst_26207__$1,state_val_26290,c__22662__auto__,map__26135,map__26135__$1,opts,before_jsload,on_jsload,reload_dependents,map__26136,map__26136__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26209 = cljs.core.filter.call(null,inst_26208,inst_26206__$1);
var inst_26210 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_26211__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26210);
var inst_26212 = cljs.core.not_empty.call(null,inst_26211__$1);
var state_26289__$1 = (function (){var statearr_26317 = state_26289;
(statearr_26317[(23)] = inst_26207__$1);

(statearr_26317[(24)] = inst_26211__$1);

(statearr_26317[(26)] = inst_26209);

(statearr_26317[(25)] = inst_26206__$1);

return statearr_26317;
})();
if(cljs.core.truth_(inst_26212)){
var statearr_26318_26398 = state_26289__$1;
(statearr_26318_26398[(1)] = (23));

} else {
var statearr_26319_26399 = state_26289__$1;
(statearr_26319_26399[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (36))){
var state_26289__$1 = state_26289;
var statearr_26320_26400 = state_26289__$1;
(statearr_26320_26400[(2)] = false);

(statearr_26320_26400[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (41))){
var inst_26264 = (state_26289[(20)]);
var inst_26268 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_26269 = cljs.core.map.call(null,inst_26268,inst_26264);
var inst_26270 = cljs.core.pr_str.call(null,inst_26269);
var inst_26271 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_26270)].join('');
var inst_26272 = figwheel.client.utils.log.call(null,inst_26271);
var state_26289__$1 = state_26289;
var statearr_26321_26401 = state_26289__$1;
(statearr_26321_26401[(2)] = inst_26272);

(statearr_26321_26401[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (43))){
var inst_26265 = (state_26289[(21)]);
var inst_26275 = (state_26289[(2)]);
var inst_26276 = cljs.core.not_empty.call(null,inst_26265);
var state_26289__$1 = (function (){var statearr_26322 = state_26289;
(statearr_26322[(27)] = inst_26275);

return statearr_26322;
})();
if(cljs.core.truth_(inst_26276)){
var statearr_26323_26402 = state_26289__$1;
(statearr_26323_26402[(1)] = (44));

} else {
var statearr_26324_26403 = state_26289__$1;
(statearr_26324_26403[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (29))){
var inst_26207 = (state_26289[(23)]);
var inst_26211 = (state_26289[(24)]);
var inst_26209 = (state_26289[(26)]);
var inst_26243 = (state_26289[(16)]);
var inst_26206 = (state_26289[(25)]);
var inst_26203 = (state_26289[(19)]);
var inst_26239 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_26242 = (function (){var all_files = inst_26203;
var res_SINGLEQUOTE_ = inst_26206;
var res = inst_26207;
var files_not_loaded = inst_26209;
var dependencies_that_loaded = inst_26211;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26207,inst_26211,inst_26209,inst_26243,inst_26206,inst_26203,inst_26239,state_val_26290,c__22662__auto__,map__26135,map__26135__$1,opts,before_jsload,on_jsload,reload_dependents,map__26136,map__26136__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26241){
var map__26325 = p__26241;
var map__26325__$1 = ((((!((map__26325 == null)))?((((map__26325.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26325.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26325):map__26325);
var namespace = cljs.core.get.call(null,map__26325__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26207,inst_26211,inst_26209,inst_26243,inst_26206,inst_26203,inst_26239,state_val_26290,c__22662__auto__,map__26135,map__26135__$1,opts,before_jsload,on_jsload,reload_dependents,map__26136,map__26136__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26243__$1 = cljs.core.group_by.call(null,inst_26242,inst_26209);
var inst_26245 = (inst_26243__$1 == null);
var inst_26246 = cljs.core.not.call(null,inst_26245);
var state_26289__$1 = (function (){var statearr_26327 = state_26289;
(statearr_26327[(28)] = inst_26239);

(statearr_26327[(16)] = inst_26243__$1);

return statearr_26327;
})();
if(inst_26246){
var statearr_26328_26404 = state_26289__$1;
(statearr_26328_26404[(1)] = (32));

} else {
var statearr_26329_26405 = state_26289__$1;
(statearr_26329_26405[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (44))){
var inst_26265 = (state_26289[(21)]);
var inst_26278 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26265);
var inst_26279 = cljs.core.pr_str.call(null,inst_26278);
var inst_26280 = [cljs.core.str("not required: "),cljs.core.str(inst_26279)].join('');
var inst_26281 = figwheel.client.utils.log.call(null,inst_26280);
var state_26289__$1 = state_26289;
var statearr_26330_26406 = state_26289__$1;
(statearr_26330_26406[(2)] = inst_26281);

(statearr_26330_26406[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (6))){
var inst_26184 = (state_26289[(2)]);
var state_26289__$1 = state_26289;
var statearr_26331_26407 = state_26289__$1;
(statearr_26331_26407[(2)] = inst_26184);

(statearr_26331_26407[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (28))){
var inst_26209 = (state_26289[(26)]);
var inst_26236 = (state_26289[(2)]);
var inst_26237 = cljs.core.not_empty.call(null,inst_26209);
var state_26289__$1 = (function (){var statearr_26332 = state_26289;
(statearr_26332[(29)] = inst_26236);

return statearr_26332;
})();
if(cljs.core.truth_(inst_26237)){
var statearr_26333_26408 = state_26289__$1;
(statearr_26333_26408[(1)] = (29));

} else {
var statearr_26334_26409 = state_26289__$1;
(statearr_26334_26409[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (25))){
var inst_26207 = (state_26289[(23)]);
var inst_26223 = (state_26289[(2)]);
var inst_26224 = cljs.core.not_empty.call(null,inst_26207);
var state_26289__$1 = (function (){var statearr_26335 = state_26289;
(statearr_26335[(30)] = inst_26223);

return statearr_26335;
})();
if(cljs.core.truth_(inst_26224)){
var statearr_26336_26410 = state_26289__$1;
(statearr_26336_26410[(1)] = (26));

} else {
var statearr_26337_26411 = state_26289__$1;
(statearr_26337_26411[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (34))){
var inst_26258 = (state_26289[(2)]);
var state_26289__$1 = state_26289;
if(cljs.core.truth_(inst_26258)){
var statearr_26338_26412 = state_26289__$1;
(statearr_26338_26412[(1)] = (38));

} else {
var statearr_26339_26413 = state_26289__$1;
(statearr_26339_26413[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (17))){
var state_26289__$1 = state_26289;
var statearr_26340_26414 = state_26289__$1;
(statearr_26340_26414[(2)] = recompile_dependents);

(statearr_26340_26414[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (3))){
var state_26289__$1 = state_26289;
var statearr_26341_26415 = state_26289__$1;
(statearr_26341_26415[(2)] = null);

(statearr_26341_26415[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (12))){
var inst_26180 = (state_26289[(2)]);
var state_26289__$1 = state_26289;
var statearr_26342_26416 = state_26289__$1;
(statearr_26342_26416[(2)] = inst_26180);

(statearr_26342_26416[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (2))){
var inst_26142 = (state_26289[(13)]);
var inst_26149 = cljs.core.seq.call(null,inst_26142);
var inst_26150 = inst_26149;
var inst_26151 = null;
var inst_26152 = (0);
var inst_26153 = (0);
var state_26289__$1 = (function (){var statearr_26343 = state_26289;
(statearr_26343[(7)] = inst_26150);

(statearr_26343[(8)] = inst_26152);

(statearr_26343[(9)] = inst_26151);

(statearr_26343[(10)] = inst_26153);

return statearr_26343;
})();
var statearr_26344_26417 = state_26289__$1;
(statearr_26344_26417[(2)] = null);

(statearr_26344_26417[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (23))){
var inst_26207 = (state_26289[(23)]);
var inst_26211 = (state_26289[(24)]);
var inst_26209 = (state_26289[(26)]);
var inst_26206 = (state_26289[(25)]);
var inst_26203 = (state_26289[(19)]);
var inst_26214 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_26216 = (function (){var all_files = inst_26203;
var res_SINGLEQUOTE_ = inst_26206;
var res = inst_26207;
var files_not_loaded = inst_26209;
var dependencies_that_loaded = inst_26211;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26207,inst_26211,inst_26209,inst_26206,inst_26203,inst_26214,state_val_26290,c__22662__auto__,map__26135,map__26135__$1,opts,before_jsload,on_jsload,reload_dependents,map__26136,map__26136__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26215){
var map__26345 = p__26215;
var map__26345__$1 = ((((!((map__26345 == null)))?((((map__26345.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26345.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26345):map__26345);
var request_url = cljs.core.get.call(null,map__26345__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26207,inst_26211,inst_26209,inst_26206,inst_26203,inst_26214,state_val_26290,c__22662__auto__,map__26135,map__26135__$1,opts,before_jsload,on_jsload,reload_dependents,map__26136,map__26136__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26217 = cljs.core.reverse.call(null,inst_26211);
var inst_26218 = cljs.core.map.call(null,inst_26216,inst_26217);
var inst_26219 = cljs.core.pr_str.call(null,inst_26218);
var inst_26220 = figwheel.client.utils.log.call(null,inst_26219);
var state_26289__$1 = (function (){var statearr_26347 = state_26289;
(statearr_26347[(31)] = inst_26214);

return statearr_26347;
})();
var statearr_26348_26418 = state_26289__$1;
(statearr_26348_26418[(2)] = inst_26220);

(statearr_26348_26418[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (35))){
var state_26289__$1 = state_26289;
var statearr_26349_26419 = state_26289__$1;
(statearr_26349_26419[(2)] = true);

(statearr_26349_26419[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (19))){
var inst_26193 = (state_26289[(12)]);
var inst_26199 = figwheel.client.file_reloading.expand_files.call(null,inst_26193);
var state_26289__$1 = state_26289;
var statearr_26350_26420 = state_26289__$1;
(statearr_26350_26420[(2)] = inst_26199);

(statearr_26350_26420[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (11))){
var state_26289__$1 = state_26289;
var statearr_26351_26421 = state_26289__$1;
(statearr_26351_26421[(2)] = null);

(statearr_26351_26421[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (9))){
var inst_26182 = (state_26289[(2)]);
var state_26289__$1 = state_26289;
var statearr_26352_26422 = state_26289__$1;
(statearr_26352_26422[(2)] = inst_26182);

(statearr_26352_26422[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (5))){
var inst_26152 = (state_26289[(8)]);
var inst_26153 = (state_26289[(10)]);
var inst_26155 = (inst_26153 < inst_26152);
var inst_26156 = inst_26155;
var state_26289__$1 = state_26289;
if(cljs.core.truth_(inst_26156)){
var statearr_26353_26423 = state_26289__$1;
(statearr_26353_26423[(1)] = (7));

} else {
var statearr_26354_26424 = state_26289__$1;
(statearr_26354_26424[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (14))){
var inst_26163 = (state_26289[(22)]);
var inst_26172 = cljs.core.first.call(null,inst_26163);
var inst_26173 = figwheel.client.file_reloading.eval_body.call(null,inst_26172,opts);
var inst_26174 = cljs.core.next.call(null,inst_26163);
var inst_26150 = inst_26174;
var inst_26151 = null;
var inst_26152 = (0);
var inst_26153 = (0);
var state_26289__$1 = (function (){var statearr_26355 = state_26289;
(statearr_26355[(7)] = inst_26150);

(statearr_26355[(8)] = inst_26152);

(statearr_26355[(9)] = inst_26151);

(statearr_26355[(10)] = inst_26153);

(statearr_26355[(32)] = inst_26173);

return statearr_26355;
})();
var statearr_26356_26425 = state_26289__$1;
(statearr_26356_26425[(2)] = null);

(statearr_26356_26425[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (45))){
var state_26289__$1 = state_26289;
var statearr_26357_26426 = state_26289__$1;
(statearr_26357_26426[(2)] = null);

(statearr_26357_26426[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (26))){
var inst_26207 = (state_26289[(23)]);
var inst_26211 = (state_26289[(24)]);
var inst_26209 = (state_26289[(26)]);
var inst_26206 = (state_26289[(25)]);
var inst_26203 = (state_26289[(19)]);
var inst_26226 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_26228 = (function (){var all_files = inst_26203;
var res_SINGLEQUOTE_ = inst_26206;
var res = inst_26207;
var files_not_loaded = inst_26209;
var dependencies_that_loaded = inst_26211;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26207,inst_26211,inst_26209,inst_26206,inst_26203,inst_26226,state_val_26290,c__22662__auto__,map__26135,map__26135__$1,opts,before_jsload,on_jsload,reload_dependents,map__26136,map__26136__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26227){
var map__26358 = p__26227;
var map__26358__$1 = ((((!((map__26358 == null)))?((((map__26358.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26358.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26358):map__26358);
var namespace = cljs.core.get.call(null,map__26358__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26358__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26207,inst_26211,inst_26209,inst_26206,inst_26203,inst_26226,state_val_26290,c__22662__auto__,map__26135,map__26135__$1,opts,before_jsload,on_jsload,reload_dependents,map__26136,map__26136__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26229 = cljs.core.map.call(null,inst_26228,inst_26207);
var inst_26230 = cljs.core.pr_str.call(null,inst_26229);
var inst_26231 = figwheel.client.utils.log.call(null,inst_26230);
var inst_26232 = (function (){var all_files = inst_26203;
var res_SINGLEQUOTE_ = inst_26206;
var res = inst_26207;
var files_not_loaded = inst_26209;
var dependencies_that_loaded = inst_26211;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26207,inst_26211,inst_26209,inst_26206,inst_26203,inst_26226,inst_26228,inst_26229,inst_26230,inst_26231,state_val_26290,c__22662__auto__,map__26135,map__26135__$1,opts,before_jsload,on_jsload,reload_dependents,map__26136,map__26136__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26207,inst_26211,inst_26209,inst_26206,inst_26203,inst_26226,inst_26228,inst_26229,inst_26230,inst_26231,state_val_26290,c__22662__auto__,map__26135,map__26135__$1,opts,before_jsload,on_jsload,reload_dependents,map__26136,map__26136__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26233 = setTimeout(inst_26232,(10));
var state_26289__$1 = (function (){var statearr_26360 = state_26289;
(statearr_26360[(33)] = inst_26231);

(statearr_26360[(34)] = inst_26226);

return statearr_26360;
})();
var statearr_26361_26427 = state_26289__$1;
(statearr_26361_26427[(2)] = inst_26233);

(statearr_26361_26427[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (16))){
var state_26289__$1 = state_26289;
var statearr_26362_26428 = state_26289__$1;
(statearr_26362_26428[(2)] = reload_dependents);

(statearr_26362_26428[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (38))){
var inst_26243 = (state_26289[(16)]);
var inst_26260 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26243);
var state_26289__$1 = state_26289;
var statearr_26363_26429 = state_26289__$1;
(statearr_26363_26429[(2)] = inst_26260);

(statearr_26363_26429[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (30))){
var state_26289__$1 = state_26289;
var statearr_26364_26430 = state_26289__$1;
(statearr_26364_26430[(2)] = null);

(statearr_26364_26430[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (10))){
var inst_26163 = (state_26289[(22)]);
var inst_26165 = cljs.core.chunked_seq_QMARK_.call(null,inst_26163);
var state_26289__$1 = state_26289;
if(inst_26165){
var statearr_26365_26431 = state_26289__$1;
(statearr_26365_26431[(1)] = (13));

} else {
var statearr_26366_26432 = state_26289__$1;
(statearr_26366_26432[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (18))){
var inst_26197 = (state_26289[(2)]);
var state_26289__$1 = state_26289;
if(cljs.core.truth_(inst_26197)){
var statearr_26367_26433 = state_26289__$1;
(statearr_26367_26433[(1)] = (19));

} else {
var statearr_26368_26434 = state_26289__$1;
(statearr_26368_26434[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (42))){
var state_26289__$1 = state_26289;
var statearr_26369_26435 = state_26289__$1;
(statearr_26369_26435[(2)] = null);

(statearr_26369_26435[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (37))){
var inst_26255 = (state_26289[(2)]);
var state_26289__$1 = state_26289;
var statearr_26370_26436 = state_26289__$1;
(statearr_26370_26436[(2)] = inst_26255);

(statearr_26370_26436[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (8))){
var inst_26150 = (state_26289[(7)]);
var inst_26163 = (state_26289[(22)]);
var inst_26163__$1 = cljs.core.seq.call(null,inst_26150);
var state_26289__$1 = (function (){var statearr_26371 = state_26289;
(statearr_26371[(22)] = inst_26163__$1);

return statearr_26371;
})();
if(inst_26163__$1){
var statearr_26372_26437 = state_26289__$1;
(statearr_26372_26437[(1)] = (10));

} else {
var statearr_26373_26438 = state_26289__$1;
(statearr_26373_26438[(1)] = (11));

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
});})(c__22662__auto__,map__26135,map__26135__$1,opts,before_jsload,on_jsload,reload_dependents,map__26136,map__26136__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22550__auto__,c__22662__auto__,map__26135,map__26135__$1,opts,before_jsload,on_jsload,reload_dependents,map__26136,map__26136__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22551__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22551__auto____0 = (function (){
var statearr_26377 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26377[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22551__auto__);

(statearr_26377[(1)] = (1));

return statearr_26377;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22551__auto____1 = (function (state_26289){
while(true){
var ret_value__22552__auto__ = (function (){try{while(true){
var result__22553__auto__ = switch__22550__auto__.call(null,state_26289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22553__auto__;
}
break;
}
}catch (e26378){if((e26378 instanceof Object)){
var ex__22554__auto__ = e26378;
var statearr_26379_26439 = state_26289;
(statearr_26379_26439[(5)] = ex__22554__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26378;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26440 = state_26289;
state_26289 = G__26440;
continue;
} else {
return ret_value__22552__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22551__auto__ = function(state_26289){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22551__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22551__auto____1.call(this,state_26289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22551__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22551__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22551__auto__;
})()
;})(switch__22550__auto__,c__22662__auto__,map__26135,map__26135__$1,opts,before_jsload,on_jsload,reload_dependents,map__26136,map__26136__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22664__auto__ = (function (){var statearr_26380 = f__22663__auto__.call(null);
(statearr_26380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22662__auto__);

return statearr_26380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22664__auto__);
});})(c__22662__auto__,map__26135,map__26135__$1,opts,before_jsload,on_jsload,reload_dependents,map__26136,map__26136__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22662__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26443,link){
var map__26446 = p__26443;
var map__26446__$1 = ((((!((map__26446 == null)))?((((map__26446.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26446.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26446):map__26446);
var file = cljs.core.get.call(null,map__26446__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__26446,map__26446__$1,file){
return (function (p1__26441_SHARP_,p2__26442_SHARP_){
if(cljs.core._EQ_.call(null,p1__26441_SHARP_,p2__26442_SHARP_)){
return p1__26441_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__26446,map__26446__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26452){
var map__26453 = p__26452;
var map__26453__$1 = ((((!((map__26453 == null)))?((((map__26453.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26453.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26453):map__26453);
var match_length = cljs.core.get.call(null,map__26453__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__26453__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26448_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26448_SHARP_);
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
var args26455 = [];
var len__17913__auto___26458 = arguments.length;
var i__17914__auto___26459 = (0);
while(true){
if((i__17914__auto___26459 < len__17913__auto___26458)){
args26455.push((arguments[i__17914__auto___26459]));

var G__26460 = (i__17914__auto___26459 + (1));
i__17914__auto___26459 = G__26460;
continue;
} else {
}
break;
}

var G__26457 = args26455.length;
switch (G__26457) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26455.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__26462_SHARP_,p2__26463_SHARP_){
return cljs.core.assoc.call(null,p1__26462_SHARP_,cljs.core.get.call(null,p2__26463_SHARP_,key),p2__26463_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__26464){
var map__26467 = p__26464;
var map__26467__$1 = ((((!((map__26467 == null)))?((((map__26467.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26467.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26467):map__26467);
var f_data = map__26467__$1;
var file = cljs.core.get.call(null,map__26467__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26469,files_msg){
var map__26476 = p__26469;
var map__26476__$1 = ((((!((map__26476 == null)))?((((map__26476.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26476.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26476):map__26476);
var opts = map__26476__$1;
var on_cssload = cljs.core.get.call(null,map__26476__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__26478_26482 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__26479_26483 = null;
var count__26480_26484 = (0);
var i__26481_26485 = (0);
while(true){
if((i__26481_26485 < count__26480_26484)){
var f_26486 = cljs.core._nth.call(null,chunk__26479_26483,i__26481_26485);
figwheel.client.file_reloading.reload_css_file.call(null,f_26486);

var G__26487 = seq__26478_26482;
var G__26488 = chunk__26479_26483;
var G__26489 = count__26480_26484;
var G__26490 = (i__26481_26485 + (1));
seq__26478_26482 = G__26487;
chunk__26479_26483 = G__26488;
count__26480_26484 = G__26489;
i__26481_26485 = G__26490;
continue;
} else {
var temp__4425__auto___26491 = cljs.core.seq.call(null,seq__26478_26482);
if(temp__4425__auto___26491){
var seq__26478_26492__$1 = temp__4425__auto___26491;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26478_26492__$1)){
var c__17658__auto___26493 = cljs.core.chunk_first.call(null,seq__26478_26492__$1);
var G__26494 = cljs.core.chunk_rest.call(null,seq__26478_26492__$1);
var G__26495 = c__17658__auto___26493;
var G__26496 = cljs.core.count.call(null,c__17658__auto___26493);
var G__26497 = (0);
seq__26478_26482 = G__26494;
chunk__26479_26483 = G__26495;
count__26480_26484 = G__26496;
i__26481_26485 = G__26497;
continue;
} else {
var f_26498 = cljs.core.first.call(null,seq__26478_26492__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_26498);

var G__26499 = cljs.core.next.call(null,seq__26478_26492__$1);
var G__26500 = null;
var G__26501 = (0);
var G__26502 = (0);
seq__26478_26482 = G__26499;
chunk__26479_26483 = G__26500;
count__26480_26484 = G__26501;
i__26481_26485 = G__26502;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__26476,map__26476__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__26476,map__26476__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map