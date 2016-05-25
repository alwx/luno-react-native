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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__25494_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__25494_SHARP_));
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
var seq__25499 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__25500 = null;
var count__25501 = (0);
var i__25502 = (0);
while(true){
if((i__25502 < count__25501)){
var n = cljs.core._nth.call(null,chunk__25500,i__25502);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25503 = seq__25499;
var G__25504 = chunk__25500;
var G__25505 = count__25501;
var G__25506 = (i__25502 + (1));
seq__25499 = G__25503;
chunk__25500 = G__25504;
count__25501 = G__25505;
i__25502 = G__25506;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25499);
if(temp__4425__auto__){
var seq__25499__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25499__$1)){
var c__17658__auto__ = cljs.core.chunk_first.call(null,seq__25499__$1);
var G__25507 = cljs.core.chunk_rest.call(null,seq__25499__$1);
var G__25508 = c__17658__auto__;
var G__25509 = cljs.core.count.call(null,c__17658__auto__);
var G__25510 = (0);
seq__25499 = G__25507;
chunk__25500 = G__25508;
count__25501 = G__25509;
i__25502 = G__25510;
continue;
} else {
var n = cljs.core.first.call(null,seq__25499__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25511 = cljs.core.next.call(null,seq__25499__$1);
var G__25512 = null;
var G__25513 = (0);
var G__25514 = (0);
seq__25499 = G__25511;
chunk__25500 = G__25512;
count__25501 = G__25513;
i__25502 = G__25514;
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

var seq__25553_25560 = cljs.core.seq.call(null,deps);
var chunk__25554_25561 = null;
var count__25555_25562 = (0);
var i__25556_25563 = (0);
while(true){
if((i__25556_25563 < count__25555_25562)){
var dep_25564 = cljs.core._nth.call(null,chunk__25554_25561,i__25556_25563);
topo_sort_helper_STAR_.call(null,dep_25564,(depth + (1)),state);

var G__25565 = seq__25553_25560;
var G__25566 = chunk__25554_25561;
var G__25567 = count__25555_25562;
var G__25568 = (i__25556_25563 + (1));
seq__25553_25560 = G__25565;
chunk__25554_25561 = G__25566;
count__25555_25562 = G__25567;
i__25556_25563 = G__25568;
continue;
} else {
var temp__4425__auto___25569 = cljs.core.seq.call(null,seq__25553_25560);
if(temp__4425__auto___25569){
var seq__25553_25570__$1 = temp__4425__auto___25569;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25553_25570__$1)){
var c__17658__auto___25571 = cljs.core.chunk_first.call(null,seq__25553_25570__$1);
var G__25572 = cljs.core.chunk_rest.call(null,seq__25553_25570__$1);
var G__25573 = c__17658__auto___25571;
var G__25574 = cljs.core.count.call(null,c__17658__auto___25571);
var G__25575 = (0);
seq__25553_25560 = G__25572;
chunk__25554_25561 = G__25573;
count__25555_25562 = G__25574;
i__25556_25563 = G__25575;
continue;
} else {
var dep_25576 = cljs.core.first.call(null,seq__25553_25570__$1);
topo_sort_helper_STAR_.call(null,dep_25576,(depth + (1)),state);

var G__25577 = cljs.core.next.call(null,seq__25553_25570__$1);
var G__25578 = null;
var G__25579 = (0);
var G__25580 = (0);
seq__25553_25560 = G__25577;
chunk__25554_25561 = G__25578;
count__25555_25562 = G__25579;
i__25556_25563 = G__25580;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__25557){
var vec__25559 = p__25557;
var x = cljs.core.nth.call(null,vec__25559,(0),null);
var xs = cljs.core.nthnext.call(null,vec__25559,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__25559,x,xs,get_deps__$1){
return (function (p1__25515_SHARP_){
return clojure.set.difference.call(null,p1__25515_SHARP_,x);
});})(vec__25559,x,xs,get_deps__$1))
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
var seq__25593 = cljs.core.seq.call(null,provides);
var chunk__25594 = null;
var count__25595 = (0);
var i__25596 = (0);
while(true){
if((i__25596 < count__25595)){
var prov = cljs.core._nth.call(null,chunk__25594,i__25596);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25597_25605 = cljs.core.seq.call(null,requires);
var chunk__25598_25606 = null;
var count__25599_25607 = (0);
var i__25600_25608 = (0);
while(true){
if((i__25600_25608 < count__25599_25607)){
var req_25609 = cljs.core._nth.call(null,chunk__25598_25606,i__25600_25608);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25609,prov);

var G__25610 = seq__25597_25605;
var G__25611 = chunk__25598_25606;
var G__25612 = count__25599_25607;
var G__25613 = (i__25600_25608 + (1));
seq__25597_25605 = G__25610;
chunk__25598_25606 = G__25611;
count__25599_25607 = G__25612;
i__25600_25608 = G__25613;
continue;
} else {
var temp__4425__auto___25614 = cljs.core.seq.call(null,seq__25597_25605);
if(temp__4425__auto___25614){
var seq__25597_25615__$1 = temp__4425__auto___25614;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25597_25615__$1)){
var c__17658__auto___25616 = cljs.core.chunk_first.call(null,seq__25597_25615__$1);
var G__25617 = cljs.core.chunk_rest.call(null,seq__25597_25615__$1);
var G__25618 = c__17658__auto___25616;
var G__25619 = cljs.core.count.call(null,c__17658__auto___25616);
var G__25620 = (0);
seq__25597_25605 = G__25617;
chunk__25598_25606 = G__25618;
count__25599_25607 = G__25619;
i__25600_25608 = G__25620;
continue;
} else {
var req_25621 = cljs.core.first.call(null,seq__25597_25615__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25621,prov);

var G__25622 = cljs.core.next.call(null,seq__25597_25615__$1);
var G__25623 = null;
var G__25624 = (0);
var G__25625 = (0);
seq__25597_25605 = G__25622;
chunk__25598_25606 = G__25623;
count__25599_25607 = G__25624;
i__25600_25608 = G__25625;
continue;
}
} else {
}
}
break;
}

var G__25626 = seq__25593;
var G__25627 = chunk__25594;
var G__25628 = count__25595;
var G__25629 = (i__25596 + (1));
seq__25593 = G__25626;
chunk__25594 = G__25627;
count__25595 = G__25628;
i__25596 = G__25629;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25593);
if(temp__4425__auto__){
var seq__25593__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25593__$1)){
var c__17658__auto__ = cljs.core.chunk_first.call(null,seq__25593__$1);
var G__25630 = cljs.core.chunk_rest.call(null,seq__25593__$1);
var G__25631 = c__17658__auto__;
var G__25632 = cljs.core.count.call(null,c__17658__auto__);
var G__25633 = (0);
seq__25593 = G__25630;
chunk__25594 = G__25631;
count__25595 = G__25632;
i__25596 = G__25633;
continue;
} else {
var prov = cljs.core.first.call(null,seq__25593__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25601_25634 = cljs.core.seq.call(null,requires);
var chunk__25602_25635 = null;
var count__25603_25636 = (0);
var i__25604_25637 = (0);
while(true){
if((i__25604_25637 < count__25603_25636)){
var req_25638 = cljs.core._nth.call(null,chunk__25602_25635,i__25604_25637);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25638,prov);

var G__25639 = seq__25601_25634;
var G__25640 = chunk__25602_25635;
var G__25641 = count__25603_25636;
var G__25642 = (i__25604_25637 + (1));
seq__25601_25634 = G__25639;
chunk__25602_25635 = G__25640;
count__25603_25636 = G__25641;
i__25604_25637 = G__25642;
continue;
} else {
var temp__4425__auto___25643__$1 = cljs.core.seq.call(null,seq__25601_25634);
if(temp__4425__auto___25643__$1){
var seq__25601_25644__$1 = temp__4425__auto___25643__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25601_25644__$1)){
var c__17658__auto___25645 = cljs.core.chunk_first.call(null,seq__25601_25644__$1);
var G__25646 = cljs.core.chunk_rest.call(null,seq__25601_25644__$1);
var G__25647 = c__17658__auto___25645;
var G__25648 = cljs.core.count.call(null,c__17658__auto___25645);
var G__25649 = (0);
seq__25601_25634 = G__25646;
chunk__25602_25635 = G__25647;
count__25603_25636 = G__25648;
i__25604_25637 = G__25649;
continue;
} else {
var req_25650 = cljs.core.first.call(null,seq__25601_25644__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25650,prov);

var G__25651 = cljs.core.next.call(null,seq__25601_25644__$1);
var G__25652 = null;
var G__25653 = (0);
var G__25654 = (0);
seq__25601_25634 = G__25651;
chunk__25602_25635 = G__25652;
count__25603_25636 = G__25653;
i__25604_25637 = G__25654;
continue;
}
} else {
}
}
break;
}

var G__25655 = cljs.core.next.call(null,seq__25593__$1);
var G__25656 = null;
var G__25657 = (0);
var G__25658 = (0);
seq__25593 = G__25655;
chunk__25594 = G__25656;
count__25595 = G__25657;
i__25596 = G__25658;
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
var seq__25663_25667 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__25664_25668 = null;
var count__25665_25669 = (0);
var i__25666_25670 = (0);
while(true){
if((i__25666_25670 < count__25665_25669)){
var ns_25671 = cljs.core._nth.call(null,chunk__25664_25668,i__25666_25670);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25671);

var G__25672 = seq__25663_25667;
var G__25673 = chunk__25664_25668;
var G__25674 = count__25665_25669;
var G__25675 = (i__25666_25670 + (1));
seq__25663_25667 = G__25672;
chunk__25664_25668 = G__25673;
count__25665_25669 = G__25674;
i__25666_25670 = G__25675;
continue;
} else {
var temp__4425__auto___25676 = cljs.core.seq.call(null,seq__25663_25667);
if(temp__4425__auto___25676){
var seq__25663_25677__$1 = temp__4425__auto___25676;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25663_25677__$1)){
var c__17658__auto___25678 = cljs.core.chunk_first.call(null,seq__25663_25677__$1);
var G__25679 = cljs.core.chunk_rest.call(null,seq__25663_25677__$1);
var G__25680 = c__17658__auto___25678;
var G__25681 = cljs.core.count.call(null,c__17658__auto___25678);
var G__25682 = (0);
seq__25663_25667 = G__25679;
chunk__25664_25668 = G__25680;
count__25665_25669 = G__25681;
i__25666_25670 = G__25682;
continue;
} else {
var ns_25683 = cljs.core.first.call(null,seq__25663_25677__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25683);

var G__25684 = cljs.core.next.call(null,seq__25663_25677__$1);
var G__25685 = null;
var G__25686 = (0);
var G__25687 = (0);
seq__25663_25667 = G__25684;
chunk__25664_25668 = G__25685;
count__25665_25669 = G__25686;
i__25666_25670 = G__25687;
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
var G__25688__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__25688 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25689__i = 0, G__25689__a = new Array(arguments.length -  0);
while (G__25689__i < G__25689__a.length) {G__25689__a[G__25689__i] = arguments[G__25689__i + 0]; ++G__25689__i;}
  args = new cljs.core.IndexedSeq(G__25689__a,0);
} 
return G__25688__delegate.call(this,args);};
G__25688.cljs$lang$maxFixedArity = 0;
G__25688.cljs$lang$applyTo = (function (arglist__25690){
var args = cljs.core.seq(arglist__25690);
return G__25688__delegate(args);
});
G__25688.cljs$core$IFn$_invoke$arity$variadic = G__25688__delegate;
return G__25688;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__25692 = cljs.core._EQ_;
var expr__25693 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__25692.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__25693))){
var path_parts = ((function (pred__25692,expr__25693){
return (function (p1__25691_SHARP_){
return clojure.string.split.call(null,p1__25691_SHARP_,/[\/\\]/);
});})(pred__25692,expr__25693))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__25692,expr__25693){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e25695){if((e25695 instanceof Error)){
var e = e25695;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25695;

}
}})());
});
;})(path_parts,sep,root,pred__25692,expr__25693))
} else {
if(cljs.core.truth_(pred__25692.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__25693))){
return ((function (pred__25692,expr__25693){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__25692,expr__25693){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__25692,expr__25693))
);

return deferred.addErrback(((function (deferred,pred__25692,expr__25693){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__25692,expr__25693))
);
});
;})(pred__25692,expr__25693))
} else {
return ((function (pred__25692,expr__25693){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__25692,expr__25693))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25696,callback){
var map__25699 = p__25696;
var map__25699__$1 = ((((!((map__25699 == null)))?((((map__25699.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25699.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25699):map__25699);
var file_msg = map__25699__$1;
var request_url = cljs.core.get.call(null,map__25699__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__25699,map__25699__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25699,map__25699__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__22661__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22661__auto__){
return (function (){
var f__22662__auto__ = (function (){var switch__22549__auto__ = ((function (c__22661__auto__){
return (function (state_25723){
var state_val_25724 = (state_25723[(1)]);
if((state_val_25724 === (7))){
var inst_25719 = (state_25723[(2)]);
var state_25723__$1 = state_25723;
var statearr_25725_25745 = state_25723__$1;
(statearr_25725_25745[(2)] = inst_25719);

(statearr_25725_25745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25724 === (1))){
var state_25723__$1 = state_25723;
var statearr_25726_25746 = state_25723__$1;
(statearr_25726_25746[(2)] = null);

(statearr_25726_25746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25724 === (4))){
var inst_25703 = (state_25723[(7)]);
var inst_25703__$1 = (state_25723[(2)]);
var state_25723__$1 = (function (){var statearr_25727 = state_25723;
(statearr_25727[(7)] = inst_25703__$1);

return statearr_25727;
})();
if(cljs.core.truth_(inst_25703__$1)){
var statearr_25728_25747 = state_25723__$1;
(statearr_25728_25747[(1)] = (5));

} else {
var statearr_25729_25748 = state_25723__$1;
(statearr_25729_25748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25724 === (6))){
var state_25723__$1 = state_25723;
var statearr_25730_25749 = state_25723__$1;
(statearr_25730_25749[(2)] = null);

(statearr_25730_25749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25724 === (3))){
var inst_25721 = (state_25723[(2)]);
var state_25723__$1 = state_25723;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25723__$1,inst_25721);
} else {
if((state_val_25724 === (2))){
var state_25723__$1 = state_25723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25723__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_25724 === (11))){
var inst_25715 = (state_25723[(2)]);
var state_25723__$1 = (function (){var statearr_25731 = state_25723;
(statearr_25731[(8)] = inst_25715);

return statearr_25731;
})();
var statearr_25732_25750 = state_25723__$1;
(statearr_25732_25750[(2)] = null);

(statearr_25732_25750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25724 === (9))){
var inst_25709 = (state_25723[(9)]);
var inst_25707 = (state_25723[(10)]);
var inst_25711 = inst_25709.call(null,inst_25707);
var state_25723__$1 = state_25723;
var statearr_25733_25751 = state_25723__$1;
(statearr_25733_25751[(2)] = inst_25711);

(statearr_25733_25751[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25724 === (5))){
var inst_25703 = (state_25723[(7)]);
var inst_25705 = figwheel.client.file_reloading.blocking_load.call(null,inst_25703);
var state_25723__$1 = state_25723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25723__$1,(8),inst_25705);
} else {
if((state_val_25724 === (10))){
var inst_25707 = (state_25723[(10)]);
var inst_25713 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_25707);
var state_25723__$1 = state_25723;
var statearr_25734_25752 = state_25723__$1;
(statearr_25734_25752[(2)] = inst_25713);

(statearr_25734_25752[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25724 === (8))){
var inst_25709 = (state_25723[(9)]);
var inst_25703 = (state_25723[(7)]);
var inst_25707 = (state_25723[(2)]);
var inst_25708 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_25709__$1 = cljs.core.get.call(null,inst_25708,inst_25703);
var state_25723__$1 = (function (){var statearr_25735 = state_25723;
(statearr_25735[(9)] = inst_25709__$1);

(statearr_25735[(10)] = inst_25707);

return statearr_25735;
})();
if(cljs.core.truth_(inst_25709__$1)){
var statearr_25736_25753 = state_25723__$1;
(statearr_25736_25753[(1)] = (9));

} else {
var statearr_25737_25754 = state_25723__$1;
(statearr_25737_25754[(1)] = (10));

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
});})(c__22661__auto__))
;
return ((function (switch__22549__auto__,c__22661__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22550__auto__ = null;
var figwheel$client$file_reloading$state_machine__22550__auto____0 = (function (){
var statearr_25741 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25741[(0)] = figwheel$client$file_reloading$state_machine__22550__auto__);

(statearr_25741[(1)] = (1));

return statearr_25741;
});
var figwheel$client$file_reloading$state_machine__22550__auto____1 = (function (state_25723){
while(true){
var ret_value__22551__auto__ = (function (){try{while(true){
var result__22552__auto__ = switch__22549__auto__.call(null,state_25723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22552__auto__;
}
break;
}
}catch (e25742){if((e25742 instanceof Object)){
var ex__22553__auto__ = e25742;
var statearr_25743_25755 = state_25723;
(statearr_25743_25755[(5)] = ex__22553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25756 = state_25723;
state_25723 = G__25756;
continue;
} else {
return ret_value__22551__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22550__auto__ = function(state_25723){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22550__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22550__auto____1.call(this,state_25723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22550__auto____0;
figwheel$client$file_reloading$state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22550__auto____1;
return figwheel$client$file_reloading$state_machine__22550__auto__;
})()
;})(switch__22549__auto__,c__22661__auto__))
})();
var state__22663__auto__ = (function (){var statearr_25744 = f__22662__auto__.call(null);
(statearr_25744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22661__auto__);

return statearr_25744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22663__auto__);
});})(c__22661__auto__))
);

return c__22661__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__25757,callback){
var map__25760 = p__25757;
var map__25760__$1 = ((((!((map__25760 == null)))?((((map__25760.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25760.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25760):map__25760);
var file_msg = map__25760__$1;
var namespace = cljs.core.get.call(null,map__25760__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__25760,map__25760__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__25760,map__25760__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25762){
var map__25765 = p__25762;
var map__25765__$1 = ((((!((map__25765 == null)))?((((map__25765.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25765.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25765):map__25765);
var file_msg = map__25765__$1;
var namespace = cljs.core.get.call(null,map__25765__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25767,callback){
var map__25770 = p__25767;
var map__25770__$1 = ((((!((map__25770 == null)))?((((map__25770.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25770.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25770):map__25770);
var file_msg = map__25770__$1;
var request_url = cljs.core.get.call(null,map__25770__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25770__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__22661__auto___25858 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22661__auto___25858,out){
return (function (){
var f__22662__auto__ = (function (){var switch__22549__auto__ = ((function (c__22661__auto___25858,out){
return (function (state_25840){
var state_val_25841 = (state_25840[(1)]);
if((state_val_25841 === (1))){
var inst_25818 = cljs.core.nth.call(null,files,(0),null);
var inst_25819 = cljs.core.nthnext.call(null,files,(1));
var inst_25820 = files;
var state_25840__$1 = (function (){var statearr_25842 = state_25840;
(statearr_25842[(7)] = inst_25819);

(statearr_25842[(8)] = inst_25818);

(statearr_25842[(9)] = inst_25820);

return statearr_25842;
})();
var statearr_25843_25859 = state_25840__$1;
(statearr_25843_25859[(2)] = null);

(statearr_25843_25859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25841 === (2))){
var inst_25823 = (state_25840[(10)]);
var inst_25820 = (state_25840[(9)]);
var inst_25823__$1 = cljs.core.nth.call(null,inst_25820,(0),null);
var inst_25824 = cljs.core.nthnext.call(null,inst_25820,(1));
var inst_25825 = (inst_25823__$1 == null);
var inst_25826 = cljs.core.not.call(null,inst_25825);
var state_25840__$1 = (function (){var statearr_25844 = state_25840;
(statearr_25844[(11)] = inst_25824);

(statearr_25844[(10)] = inst_25823__$1);

return statearr_25844;
})();
if(inst_25826){
var statearr_25845_25860 = state_25840__$1;
(statearr_25845_25860[(1)] = (4));

} else {
var statearr_25846_25861 = state_25840__$1;
(statearr_25846_25861[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25841 === (3))){
var inst_25838 = (state_25840[(2)]);
var state_25840__$1 = state_25840;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25840__$1,inst_25838);
} else {
if((state_val_25841 === (4))){
var inst_25823 = (state_25840[(10)]);
var inst_25828 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25823);
var state_25840__$1 = state_25840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25840__$1,(7),inst_25828);
} else {
if((state_val_25841 === (5))){
var inst_25834 = cljs.core.async.close_BANG_.call(null,out);
var state_25840__$1 = state_25840;
var statearr_25847_25862 = state_25840__$1;
(statearr_25847_25862[(2)] = inst_25834);

(statearr_25847_25862[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25841 === (6))){
var inst_25836 = (state_25840[(2)]);
var state_25840__$1 = state_25840;
var statearr_25848_25863 = state_25840__$1;
(statearr_25848_25863[(2)] = inst_25836);

(statearr_25848_25863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25841 === (7))){
var inst_25824 = (state_25840[(11)]);
var inst_25830 = (state_25840[(2)]);
var inst_25831 = cljs.core.async.put_BANG_.call(null,out,inst_25830);
var inst_25820 = inst_25824;
var state_25840__$1 = (function (){var statearr_25849 = state_25840;
(statearr_25849[(12)] = inst_25831);

(statearr_25849[(9)] = inst_25820);

return statearr_25849;
})();
var statearr_25850_25864 = state_25840__$1;
(statearr_25850_25864[(2)] = null);

(statearr_25850_25864[(1)] = (2));


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
});})(c__22661__auto___25858,out))
;
return ((function (switch__22549__auto__,c__22661__auto___25858,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22550__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22550__auto____0 = (function (){
var statearr_25854 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25854[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22550__auto__);

(statearr_25854[(1)] = (1));

return statearr_25854;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22550__auto____1 = (function (state_25840){
while(true){
var ret_value__22551__auto__ = (function (){try{while(true){
var result__22552__auto__ = switch__22549__auto__.call(null,state_25840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22552__auto__;
}
break;
}
}catch (e25855){if((e25855 instanceof Object)){
var ex__22553__auto__ = e25855;
var statearr_25856_25865 = state_25840;
(statearr_25856_25865[(5)] = ex__22553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25855;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25866 = state_25840;
state_25840 = G__25866;
continue;
} else {
return ret_value__22551__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22550__auto__ = function(state_25840){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22550__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22550__auto____1.call(this,state_25840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22550__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22550__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22550__auto__;
})()
;})(switch__22549__auto__,c__22661__auto___25858,out))
})();
var state__22663__auto__ = (function (){var statearr_25857 = f__22662__auto__.call(null);
(statearr_25857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22661__auto___25858);

return statearr_25857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22663__auto__);
});})(c__22661__auto___25858,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25867,opts){
var map__25871 = p__25867;
var map__25871__$1 = ((((!((map__25871 == null)))?((((map__25871.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25871.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25871):map__25871);
var eval_body__$1 = cljs.core.get.call(null,map__25871__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25871__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e25873){var e = e25873;
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
return (function (p1__25874_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25874_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__25879){
var vec__25880 = p__25879;
var k = cljs.core.nth.call(null,vec__25880,(0),null);
var v = cljs.core.nth.call(null,vec__25880,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__25881){
var vec__25882 = p__25881;
var k = cljs.core.nth.call(null,vec__25882,(0),null);
var v = cljs.core.nth.call(null,vec__25882,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25886,p__25887){
var map__26134 = p__25886;
var map__26134__$1 = ((((!((map__26134 == null)))?((((map__26134.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26134.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26134):map__26134);
var opts = map__26134__$1;
var before_jsload = cljs.core.get.call(null,map__26134__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__26134__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__26134__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__26135 = p__25887;
var map__26135__$1 = ((((!((map__26135 == null)))?((((map__26135.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26135.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26135):map__26135);
var msg = map__26135__$1;
var files = cljs.core.get.call(null,map__26135__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__26135__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__26135__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22661__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22661__auto__,map__26134,map__26134__$1,opts,before_jsload,on_jsload,reload_dependents,map__26135,map__26135__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22662__auto__ = (function (){var switch__22549__auto__ = ((function (c__22661__auto__,map__26134,map__26134__$1,opts,before_jsload,on_jsload,reload_dependents,map__26135,map__26135__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_26288){
var state_val_26289 = (state_26288[(1)]);
if((state_val_26289 === (7))){
var inst_26150 = (state_26288[(7)]);
var inst_26149 = (state_26288[(8)]);
var inst_26152 = (state_26288[(9)]);
var inst_26151 = (state_26288[(10)]);
var inst_26157 = cljs.core._nth.call(null,inst_26150,inst_26152);
var inst_26158 = figwheel.client.file_reloading.eval_body.call(null,inst_26157,opts);
var inst_26159 = (inst_26152 + (1));
var tmp26290 = inst_26150;
var tmp26291 = inst_26149;
var tmp26292 = inst_26151;
var inst_26149__$1 = tmp26291;
var inst_26150__$1 = tmp26290;
var inst_26151__$1 = tmp26292;
var inst_26152__$1 = inst_26159;
var state_26288__$1 = (function (){var statearr_26293 = state_26288;
(statearr_26293[(7)] = inst_26150__$1);

(statearr_26293[(8)] = inst_26149__$1);

(statearr_26293[(9)] = inst_26152__$1);

(statearr_26293[(10)] = inst_26151__$1);

(statearr_26293[(11)] = inst_26158);

return statearr_26293;
})();
var statearr_26294_26380 = state_26288__$1;
(statearr_26294_26380[(2)] = null);

(statearr_26294_26380[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (20))){
var inst_26192 = (state_26288[(12)]);
var inst_26200 = figwheel.client.file_reloading.sort_files.call(null,inst_26192);
var state_26288__$1 = state_26288;
var statearr_26295_26381 = state_26288__$1;
(statearr_26295_26381[(2)] = inst_26200);

(statearr_26295_26381[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (27))){
var state_26288__$1 = state_26288;
var statearr_26296_26382 = state_26288__$1;
(statearr_26296_26382[(2)] = null);

(statearr_26296_26382[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (1))){
var inst_26141 = (state_26288[(13)]);
var inst_26138 = before_jsload.call(null,files);
var inst_26139 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_26140 = (function (){return ((function (inst_26141,inst_26138,inst_26139,state_val_26289,c__22661__auto__,map__26134,map__26134__$1,opts,before_jsload,on_jsload,reload_dependents,map__26135,map__26135__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25883_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25883_SHARP_);
});
;})(inst_26141,inst_26138,inst_26139,state_val_26289,c__22661__auto__,map__26134,map__26134__$1,opts,before_jsload,on_jsload,reload_dependents,map__26135,map__26135__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26141__$1 = cljs.core.filter.call(null,inst_26140,files);
var inst_26142 = cljs.core.not_empty.call(null,inst_26141__$1);
var state_26288__$1 = (function (){var statearr_26297 = state_26288;
(statearr_26297[(14)] = inst_26138);

(statearr_26297[(15)] = inst_26139);

(statearr_26297[(13)] = inst_26141__$1);

return statearr_26297;
})();
if(cljs.core.truth_(inst_26142)){
var statearr_26298_26383 = state_26288__$1;
(statearr_26298_26383[(1)] = (2));

} else {
var statearr_26299_26384 = state_26288__$1;
(statearr_26299_26384[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (24))){
var state_26288__$1 = state_26288;
var statearr_26300_26385 = state_26288__$1;
(statearr_26300_26385[(2)] = null);

(statearr_26300_26385[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (39))){
var inst_26242 = (state_26288[(16)]);
var state_26288__$1 = state_26288;
var statearr_26301_26386 = state_26288__$1;
(statearr_26301_26386[(2)] = inst_26242);

(statearr_26301_26386[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (46))){
var inst_26283 = (state_26288[(2)]);
var state_26288__$1 = state_26288;
var statearr_26302_26387 = state_26288__$1;
(statearr_26302_26387[(2)] = inst_26283);

(statearr_26302_26387[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (4))){
var inst_26186 = (state_26288[(2)]);
var inst_26187 = cljs.core.List.EMPTY;
var inst_26188 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_26187);
var inst_26189 = (function (){return ((function (inst_26186,inst_26187,inst_26188,state_val_26289,c__22661__auto__,map__26134,map__26134__$1,opts,before_jsload,on_jsload,reload_dependents,map__26135,map__26135__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25884_SHARP_){
var and__16843__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25884_SHARP_);
if(cljs.core.truth_(and__16843__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25884_SHARP_));
} else {
return and__16843__auto__;
}
});
;})(inst_26186,inst_26187,inst_26188,state_val_26289,c__22661__auto__,map__26134,map__26134__$1,opts,before_jsload,on_jsload,reload_dependents,map__26135,map__26135__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26190 = cljs.core.filter.call(null,inst_26189,files);
var inst_26191 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_26192 = cljs.core.concat.call(null,inst_26190,inst_26191);
var state_26288__$1 = (function (){var statearr_26303 = state_26288;
(statearr_26303[(17)] = inst_26186);

(statearr_26303[(12)] = inst_26192);

(statearr_26303[(18)] = inst_26188);

return statearr_26303;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_26304_26388 = state_26288__$1;
(statearr_26304_26388[(1)] = (16));

} else {
var statearr_26305_26389 = state_26288__$1;
(statearr_26305_26389[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (15))){
var inst_26176 = (state_26288[(2)]);
var state_26288__$1 = state_26288;
var statearr_26306_26390 = state_26288__$1;
(statearr_26306_26390[(2)] = inst_26176);

(statearr_26306_26390[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (21))){
var inst_26202 = (state_26288[(19)]);
var inst_26202__$1 = (state_26288[(2)]);
var inst_26203 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_26202__$1);
var state_26288__$1 = (function (){var statearr_26307 = state_26288;
(statearr_26307[(19)] = inst_26202__$1);

return statearr_26307;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26288__$1,(22),inst_26203);
} else {
if((state_val_26289 === (31))){
var inst_26286 = (state_26288[(2)]);
var state_26288__$1 = state_26288;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26288__$1,inst_26286);
} else {
if((state_val_26289 === (32))){
var inst_26242 = (state_26288[(16)]);
var inst_26247 = inst_26242.cljs$lang$protocol_mask$partition0$;
var inst_26248 = (inst_26247 & (64));
var inst_26249 = inst_26242.cljs$core$ISeq$;
var inst_26250 = (inst_26248) || (inst_26249);
var state_26288__$1 = state_26288;
if(cljs.core.truth_(inst_26250)){
var statearr_26308_26391 = state_26288__$1;
(statearr_26308_26391[(1)] = (35));

} else {
var statearr_26309_26392 = state_26288__$1;
(statearr_26309_26392[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (40))){
var inst_26263 = (state_26288[(20)]);
var inst_26262 = (state_26288[(2)]);
var inst_26263__$1 = cljs.core.get.call(null,inst_26262,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_26264 = cljs.core.get.call(null,inst_26262,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_26265 = cljs.core.not_empty.call(null,inst_26263__$1);
var state_26288__$1 = (function (){var statearr_26310 = state_26288;
(statearr_26310[(20)] = inst_26263__$1);

(statearr_26310[(21)] = inst_26264);

return statearr_26310;
})();
if(cljs.core.truth_(inst_26265)){
var statearr_26311_26393 = state_26288__$1;
(statearr_26311_26393[(1)] = (41));

} else {
var statearr_26312_26394 = state_26288__$1;
(statearr_26312_26394[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (33))){
var state_26288__$1 = state_26288;
var statearr_26313_26395 = state_26288__$1;
(statearr_26313_26395[(2)] = false);

(statearr_26313_26395[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (13))){
var inst_26162 = (state_26288[(22)]);
var inst_26166 = cljs.core.chunk_first.call(null,inst_26162);
var inst_26167 = cljs.core.chunk_rest.call(null,inst_26162);
var inst_26168 = cljs.core.count.call(null,inst_26166);
var inst_26149 = inst_26167;
var inst_26150 = inst_26166;
var inst_26151 = inst_26168;
var inst_26152 = (0);
var state_26288__$1 = (function (){var statearr_26314 = state_26288;
(statearr_26314[(7)] = inst_26150);

(statearr_26314[(8)] = inst_26149);

(statearr_26314[(9)] = inst_26152);

(statearr_26314[(10)] = inst_26151);

return statearr_26314;
})();
var statearr_26315_26396 = state_26288__$1;
(statearr_26315_26396[(2)] = null);

(statearr_26315_26396[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (22))){
var inst_26202 = (state_26288[(19)]);
var inst_26205 = (state_26288[(23)]);
var inst_26210 = (state_26288[(24)]);
var inst_26206 = (state_26288[(25)]);
var inst_26205__$1 = (state_26288[(2)]);
var inst_26206__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26205__$1);
var inst_26207 = (function (){var all_files = inst_26202;
var res_SINGLEQUOTE_ = inst_26205__$1;
var res = inst_26206__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_26202,inst_26205,inst_26210,inst_26206,inst_26205__$1,inst_26206__$1,state_val_26289,c__22661__auto__,map__26134,map__26134__$1,opts,before_jsload,on_jsload,reload_dependents,map__26135,map__26135__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25885_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25885_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_26202,inst_26205,inst_26210,inst_26206,inst_26205__$1,inst_26206__$1,state_val_26289,c__22661__auto__,map__26134,map__26134__$1,opts,before_jsload,on_jsload,reload_dependents,map__26135,map__26135__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26208 = cljs.core.filter.call(null,inst_26207,inst_26205__$1);
var inst_26209 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_26210__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26209);
var inst_26211 = cljs.core.not_empty.call(null,inst_26210__$1);
var state_26288__$1 = (function (){var statearr_26316 = state_26288;
(statearr_26316[(23)] = inst_26205__$1);

(statearr_26316[(24)] = inst_26210__$1);

(statearr_26316[(26)] = inst_26208);

(statearr_26316[(25)] = inst_26206__$1);

return statearr_26316;
})();
if(cljs.core.truth_(inst_26211)){
var statearr_26317_26397 = state_26288__$1;
(statearr_26317_26397[(1)] = (23));

} else {
var statearr_26318_26398 = state_26288__$1;
(statearr_26318_26398[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (36))){
var state_26288__$1 = state_26288;
var statearr_26319_26399 = state_26288__$1;
(statearr_26319_26399[(2)] = false);

(statearr_26319_26399[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (41))){
var inst_26263 = (state_26288[(20)]);
var inst_26267 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_26268 = cljs.core.map.call(null,inst_26267,inst_26263);
var inst_26269 = cljs.core.pr_str.call(null,inst_26268);
var inst_26270 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_26269)].join('');
var inst_26271 = figwheel.client.utils.log.call(null,inst_26270);
var state_26288__$1 = state_26288;
var statearr_26320_26400 = state_26288__$1;
(statearr_26320_26400[(2)] = inst_26271);

(statearr_26320_26400[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (43))){
var inst_26264 = (state_26288[(21)]);
var inst_26274 = (state_26288[(2)]);
var inst_26275 = cljs.core.not_empty.call(null,inst_26264);
var state_26288__$1 = (function (){var statearr_26321 = state_26288;
(statearr_26321[(27)] = inst_26274);

return statearr_26321;
})();
if(cljs.core.truth_(inst_26275)){
var statearr_26322_26401 = state_26288__$1;
(statearr_26322_26401[(1)] = (44));

} else {
var statearr_26323_26402 = state_26288__$1;
(statearr_26323_26402[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (29))){
var inst_26202 = (state_26288[(19)]);
var inst_26205 = (state_26288[(23)]);
var inst_26242 = (state_26288[(16)]);
var inst_26210 = (state_26288[(24)]);
var inst_26208 = (state_26288[(26)]);
var inst_26206 = (state_26288[(25)]);
var inst_26238 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_26241 = (function (){var all_files = inst_26202;
var res_SINGLEQUOTE_ = inst_26205;
var res = inst_26206;
var files_not_loaded = inst_26208;
var dependencies_that_loaded = inst_26210;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26202,inst_26205,inst_26242,inst_26210,inst_26208,inst_26206,inst_26238,state_val_26289,c__22661__auto__,map__26134,map__26134__$1,opts,before_jsload,on_jsload,reload_dependents,map__26135,map__26135__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26240){
var map__26324 = p__26240;
var map__26324__$1 = ((((!((map__26324 == null)))?((((map__26324.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26324.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26324):map__26324);
var namespace = cljs.core.get.call(null,map__26324__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26202,inst_26205,inst_26242,inst_26210,inst_26208,inst_26206,inst_26238,state_val_26289,c__22661__auto__,map__26134,map__26134__$1,opts,before_jsload,on_jsload,reload_dependents,map__26135,map__26135__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26242__$1 = cljs.core.group_by.call(null,inst_26241,inst_26208);
var inst_26244 = (inst_26242__$1 == null);
var inst_26245 = cljs.core.not.call(null,inst_26244);
var state_26288__$1 = (function (){var statearr_26326 = state_26288;
(statearr_26326[(28)] = inst_26238);

(statearr_26326[(16)] = inst_26242__$1);

return statearr_26326;
})();
if(inst_26245){
var statearr_26327_26403 = state_26288__$1;
(statearr_26327_26403[(1)] = (32));

} else {
var statearr_26328_26404 = state_26288__$1;
(statearr_26328_26404[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (44))){
var inst_26264 = (state_26288[(21)]);
var inst_26277 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26264);
var inst_26278 = cljs.core.pr_str.call(null,inst_26277);
var inst_26279 = [cljs.core.str("not required: "),cljs.core.str(inst_26278)].join('');
var inst_26280 = figwheel.client.utils.log.call(null,inst_26279);
var state_26288__$1 = state_26288;
var statearr_26329_26405 = state_26288__$1;
(statearr_26329_26405[(2)] = inst_26280);

(statearr_26329_26405[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (6))){
var inst_26183 = (state_26288[(2)]);
var state_26288__$1 = state_26288;
var statearr_26330_26406 = state_26288__$1;
(statearr_26330_26406[(2)] = inst_26183);

(statearr_26330_26406[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (28))){
var inst_26208 = (state_26288[(26)]);
var inst_26235 = (state_26288[(2)]);
var inst_26236 = cljs.core.not_empty.call(null,inst_26208);
var state_26288__$1 = (function (){var statearr_26331 = state_26288;
(statearr_26331[(29)] = inst_26235);

return statearr_26331;
})();
if(cljs.core.truth_(inst_26236)){
var statearr_26332_26407 = state_26288__$1;
(statearr_26332_26407[(1)] = (29));

} else {
var statearr_26333_26408 = state_26288__$1;
(statearr_26333_26408[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (25))){
var inst_26206 = (state_26288[(25)]);
var inst_26222 = (state_26288[(2)]);
var inst_26223 = cljs.core.not_empty.call(null,inst_26206);
var state_26288__$1 = (function (){var statearr_26334 = state_26288;
(statearr_26334[(30)] = inst_26222);

return statearr_26334;
})();
if(cljs.core.truth_(inst_26223)){
var statearr_26335_26409 = state_26288__$1;
(statearr_26335_26409[(1)] = (26));

} else {
var statearr_26336_26410 = state_26288__$1;
(statearr_26336_26410[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (34))){
var inst_26257 = (state_26288[(2)]);
var state_26288__$1 = state_26288;
if(cljs.core.truth_(inst_26257)){
var statearr_26337_26411 = state_26288__$1;
(statearr_26337_26411[(1)] = (38));

} else {
var statearr_26338_26412 = state_26288__$1;
(statearr_26338_26412[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (17))){
var state_26288__$1 = state_26288;
var statearr_26339_26413 = state_26288__$1;
(statearr_26339_26413[(2)] = recompile_dependents);

(statearr_26339_26413[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (3))){
var state_26288__$1 = state_26288;
var statearr_26340_26414 = state_26288__$1;
(statearr_26340_26414[(2)] = null);

(statearr_26340_26414[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (12))){
var inst_26179 = (state_26288[(2)]);
var state_26288__$1 = state_26288;
var statearr_26341_26415 = state_26288__$1;
(statearr_26341_26415[(2)] = inst_26179);

(statearr_26341_26415[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (2))){
var inst_26141 = (state_26288[(13)]);
var inst_26148 = cljs.core.seq.call(null,inst_26141);
var inst_26149 = inst_26148;
var inst_26150 = null;
var inst_26151 = (0);
var inst_26152 = (0);
var state_26288__$1 = (function (){var statearr_26342 = state_26288;
(statearr_26342[(7)] = inst_26150);

(statearr_26342[(8)] = inst_26149);

(statearr_26342[(9)] = inst_26152);

(statearr_26342[(10)] = inst_26151);

return statearr_26342;
})();
var statearr_26343_26416 = state_26288__$1;
(statearr_26343_26416[(2)] = null);

(statearr_26343_26416[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (23))){
var inst_26202 = (state_26288[(19)]);
var inst_26205 = (state_26288[(23)]);
var inst_26210 = (state_26288[(24)]);
var inst_26208 = (state_26288[(26)]);
var inst_26206 = (state_26288[(25)]);
var inst_26213 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_26215 = (function (){var all_files = inst_26202;
var res_SINGLEQUOTE_ = inst_26205;
var res = inst_26206;
var files_not_loaded = inst_26208;
var dependencies_that_loaded = inst_26210;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26202,inst_26205,inst_26210,inst_26208,inst_26206,inst_26213,state_val_26289,c__22661__auto__,map__26134,map__26134__$1,opts,before_jsload,on_jsload,reload_dependents,map__26135,map__26135__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26214){
var map__26344 = p__26214;
var map__26344__$1 = ((((!((map__26344 == null)))?((((map__26344.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26344.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26344):map__26344);
var request_url = cljs.core.get.call(null,map__26344__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26202,inst_26205,inst_26210,inst_26208,inst_26206,inst_26213,state_val_26289,c__22661__auto__,map__26134,map__26134__$1,opts,before_jsload,on_jsload,reload_dependents,map__26135,map__26135__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26216 = cljs.core.reverse.call(null,inst_26210);
var inst_26217 = cljs.core.map.call(null,inst_26215,inst_26216);
var inst_26218 = cljs.core.pr_str.call(null,inst_26217);
var inst_26219 = figwheel.client.utils.log.call(null,inst_26218);
var state_26288__$1 = (function (){var statearr_26346 = state_26288;
(statearr_26346[(31)] = inst_26213);

return statearr_26346;
})();
var statearr_26347_26417 = state_26288__$1;
(statearr_26347_26417[(2)] = inst_26219);

(statearr_26347_26417[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (35))){
var state_26288__$1 = state_26288;
var statearr_26348_26418 = state_26288__$1;
(statearr_26348_26418[(2)] = true);

(statearr_26348_26418[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (19))){
var inst_26192 = (state_26288[(12)]);
var inst_26198 = figwheel.client.file_reloading.expand_files.call(null,inst_26192);
var state_26288__$1 = state_26288;
var statearr_26349_26419 = state_26288__$1;
(statearr_26349_26419[(2)] = inst_26198);

(statearr_26349_26419[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (11))){
var state_26288__$1 = state_26288;
var statearr_26350_26420 = state_26288__$1;
(statearr_26350_26420[(2)] = null);

(statearr_26350_26420[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (9))){
var inst_26181 = (state_26288[(2)]);
var state_26288__$1 = state_26288;
var statearr_26351_26421 = state_26288__$1;
(statearr_26351_26421[(2)] = inst_26181);

(statearr_26351_26421[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (5))){
var inst_26152 = (state_26288[(9)]);
var inst_26151 = (state_26288[(10)]);
var inst_26154 = (inst_26152 < inst_26151);
var inst_26155 = inst_26154;
var state_26288__$1 = state_26288;
if(cljs.core.truth_(inst_26155)){
var statearr_26352_26422 = state_26288__$1;
(statearr_26352_26422[(1)] = (7));

} else {
var statearr_26353_26423 = state_26288__$1;
(statearr_26353_26423[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (14))){
var inst_26162 = (state_26288[(22)]);
var inst_26171 = cljs.core.first.call(null,inst_26162);
var inst_26172 = figwheel.client.file_reloading.eval_body.call(null,inst_26171,opts);
var inst_26173 = cljs.core.next.call(null,inst_26162);
var inst_26149 = inst_26173;
var inst_26150 = null;
var inst_26151 = (0);
var inst_26152 = (0);
var state_26288__$1 = (function (){var statearr_26354 = state_26288;
(statearr_26354[(7)] = inst_26150);

(statearr_26354[(8)] = inst_26149);

(statearr_26354[(32)] = inst_26172);

(statearr_26354[(9)] = inst_26152);

(statearr_26354[(10)] = inst_26151);

return statearr_26354;
})();
var statearr_26355_26424 = state_26288__$1;
(statearr_26355_26424[(2)] = null);

(statearr_26355_26424[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (45))){
var state_26288__$1 = state_26288;
var statearr_26356_26425 = state_26288__$1;
(statearr_26356_26425[(2)] = null);

(statearr_26356_26425[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (26))){
var inst_26202 = (state_26288[(19)]);
var inst_26205 = (state_26288[(23)]);
var inst_26210 = (state_26288[(24)]);
var inst_26208 = (state_26288[(26)]);
var inst_26206 = (state_26288[(25)]);
var inst_26225 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_26227 = (function (){var all_files = inst_26202;
var res_SINGLEQUOTE_ = inst_26205;
var res = inst_26206;
var files_not_loaded = inst_26208;
var dependencies_that_loaded = inst_26210;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26202,inst_26205,inst_26210,inst_26208,inst_26206,inst_26225,state_val_26289,c__22661__auto__,map__26134,map__26134__$1,opts,before_jsload,on_jsload,reload_dependents,map__26135,map__26135__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26226){
var map__26357 = p__26226;
var map__26357__$1 = ((((!((map__26357 == null)))?((((map__26357.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26357.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26357):map__26357);
var namespace = cljs.core.get.call(null,map__26357__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26357__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26202,inst_26205,inst_26210,inst_26208,inst_26206,inst_26225,state_val_26289,c__22661__auto__,map__26134,map__26134__$1,opts,before_jsload,on_jsload,reload_dependents,map__26135,map__26135__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26228 = cljs.core.map.call(null,inst_26227,inst_26206);
var inst_26229 = cljs.core.pr_str.call(null,inst_26228);
var inst_26230 = figwheel.client.utils.log.call(null,inst_26229);
var inst_26231 = (function (){var all_files = inst_26202;
var res_SINGLEQUOTE_ = inst_26205;
var res = inst_26206;
var files_not_loaded = inst_26208;
var dependencies_that_loaded = inst_26210;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26202,inst_26205,inst_26210,inst_26208,inst_26206,inst_26225,inst_26227,inst_26228,inst_26229,inst_26230,state_val_26289,c__22661__auto__,map__26134,map__26134__$1,opts,before_jsload,on_jsload,reload_dependents,map__26135,map__26135__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26202,inst_26205,inst_26210,inst_26208,inst_26206,inst_26225,inst_26227,inst_26228,inst_26229,inst_26230,state_val_26289,c__22661__auto__,map__26134,map__26134__$1,opts,before_jsload,on_jsload,reload_dependents,map__26135,map__26135__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26232 = setTimeout(inst_26231,(10));
var state_26288__$1 = (function (){var statearr_26359 = state_26288;
(statearr_26359[(33)] = inst_26230);

(statearr_26359[(34)] = inst_26225);

return statearr_26359;
})();
var statearr_26360_26426 = state_26288__$1;
(statearr_26360_26426[(2)] = inst_26232);

(statearr_26360_26426[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (16))){
var state_26288__$1 = state_26288;
var statearr_26361_26427 = state_26288__$1;
(statearr_26361_26427[(2)] = reload_dependents);

(statearr_26361_26427[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (38))){
var inst_26242 = (state_26288[(16)]);
var inst_26259 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26242);
var state_26288__$1 = state_26288;
var statearr_26362_26428 = state_26288__$1;
(statearr_26362_26428[(2)] = inst_26259);

(statearr_26362_26428[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (30))){
var state_26288__$1 = state_26288;
var statearr_26363_26429 = state_26288__$1;
(statearr_26363_26429[(2)] = null);

(statearr_26363_26429[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (10))){
var inst_26162 = (state_26288[(22)]);
var inst_26164 = cljs.core.chunked_seq_QMARK_.call(null,inst_26162);
var state_26288__$1 = state_26288;
if(inst_26164){
var statearr_26364_26430 = state_26288__$1;
(statearr_26364_26430[(1)] = (13));

} else {
var statearr_26365_26431 = state_26288__$1;
(statearr_26365_26431[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (18))){
var inst_26196 = (state_26288[(2)]);
var state_26288__$1 = state_26288;
if(cljs.core.truth_(inst_26196)){
var statearr_26366_26432 = state_26288__$1;
(statearr_26366_26432[(1)] = (19));

} else {
var statearr_26367_26433 = state_26288__$1;
(statearr_26367_26433[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (42))){
var state_26288__$1 = state_26288;
var statearr_26368_26434 = state_26288__$1;
(statearr_26368_26434[(2)] = null);

(statearr_26368_26434[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (37))){
var inst_26254 = (state_26288[(2)]);
var state_26288__$1 = state_26288;
var statearr_26369_26435 = state_26288__$1;
(statearr_26369_26435[(2)] = inst_26254);

(statearr_26369_26435[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26289 === (8))){
var inst_26162 = (state_26288[(22)]);
var inst_26149 = (state_26288[(8)]);
var inst_26162__$1 = cljs.core.seq.call(null,inst_26149);
var state_26288__$1 = (function (){var statearr_26370 = state_26288;
(statearr_26370[(22)] = inst_26162__$1);

return statearr_26370;
})();
if(inst_26162__$1){
var statearr_26371_26436 = state_26288__$1;
(statearr_26371_26436[(1)] = (10));

} else {
var statearr_26372_26437 = state_26288__$1;
(statearr_26372_26437[(1)] = (11));

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
});})(c__22661__auto__,map__26134,map__26134__$1,opts,before_jsload,on_jsload,reload_dependents,map__26135,map__26135__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22549__auto__,c__22661__auto__,map__26134,map__26134__$1,opts,before_jsload,on_jsload,reload_dependents,map__26135,map__26135__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22550__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22550__auto____0 = (function (){
var statearr_26376 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26376[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22550__auto__);

(statearr_26376[(1)] = (1));

return statearr_26376;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22550__auto____1 = (function (state_26288){
while(true){
var ret_value__22551__auto__ = (function (){try{while(true){
var result__22552__auto__ = switch__22549__auto__.call(null,state_26288);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22552__auto__;
}
break;
}
}catch (e26377){if((e26377 instanceof Object)){
var ex__22553__auto__ = e26377;
var statearr_26378_26438 = state_26288;
(statearr_26378_26438[(5)] = ex__22553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26439 = state_26288;
state_26288 = G__26439;
continue;
} else {
return ret_value__22551__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22550__auto__ = function(state_26288){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22550__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22550__auto____1.call(this,state_26288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22550__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22550__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22550__auto__;
})()
;})(switch__22549__auto__,c__22661__auto__,map__26134,map__26134__$1,opts,before_jsload,on_jsload,reload_dependents,map__26135,map__26135__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22663__auto__ = (function (){var statearr_26379 = f__22662__auto__.call(null);
(statearr_26379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22661__auto__);

return statearr_26379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22663__auto__);
});})(c__22661__auto__,map__26134,map__26134__$1,opts,before_jsload,on_jsload,reload_dependents,map__26135,map__26135__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22661__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26442,link){
var map__26445 = p__26442;
var map__26445__$1 = ((((!((map__26445 == null)))?((((map__26445.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26445.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26445):map__26445);
var file = cljs.core.get.call(null,map__26445__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__26445,map__26445__$1,file){
return (function (p1__26440_SHARP_,p2__26441_SHARP_){
if(cljs.core._EQ_.call(null,p1__26440_SHARP_,p2__26441_SHARP_)){
return p1__26440_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__26445,map__26445__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26451){
var map__26452 = p__26451;
var map__26452__$1 = ((((!((map__26452 == null)))?((((map__26452.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26452.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26452):map__26452);
var match_length = cljs.core.get.call(null,map__26452__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__26452__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26447_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26447_SHARP_);
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
var args26454 = [];
var len__17913__auto___26457 = arguments.length;
var i__17914__auto___26458 = (0);
while(true){
if((i__17914__auto___26458 < len__17913__auto___26457)){
args26454.push((arguments[i__17914__auto___26458]));

var G__26459 = (i__17914__auto___26458 + (1));
i__17914__auto___26458 = G__26459;
continue;
} else {
}
break;
}

var G__26456 = args26454.length;
switch (G__26456) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26454.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__26461_SHARP_,p2__26462_SHARP_){
return cljs.core.assoc.call(null,p1__26461_SHARP_,cljs.core.get.call(null,p2__26462_SHARP_,key),p2__26462_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__26463){
var map__26466 = p__26463;
var map__26466__$1 = ((((!((map__26466 == null)))?((((map__26466.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26466.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26466):map__26466);
var f_data = map__26466__$1;
var file = cljs.core.get.call(null,map__26466__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26468,files_msg){
var map__26475 = p__26468;
var map__26475__$1 = ((((!((map__26475 == null)))?((((map__26475.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26475.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26475):map__26475);
var opts = map__26475__$1;
var on_cssload = cljs.core.get.call(null,map__26475__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__26477_26481 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__26478_26482 = null;
var count__26479_26483 = (0);
var i__26480_26484 = (0);
while(true){
if((i__26480_26484 < count__26479_26483)){
var f_26485 = cljs.core._nth.call(null,chunk__26478_26482,i__26480_26484);
figwheel.client.file_reloading.reload_css_file.call(null,f_26485);

var G__26486 = seq__26477_26481;
var G__26487 = chunk__26478_26482;
var G__26488 = count__26479_26483;
var G__26489 = (i__26480_26484 + (1));
seq__26477_26481 = G__26486;
chunk__26478_26482 = G__26487;
count__26479_26483 = G__26488;
i__26480_26484 = G__26489;
continue;
} else {
var temp__4425__auto___26490 = cljs.core.seq.call(null,seq__26477_26481);
if(temp__4425__auto___26490){
var seq__26477_26491__$1 = temp__4425__auto___26490;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26477_26491__$1)){
var c__17658__auto___26492 = cljs.core.chunk_first.call(null,seq__26477_26491__$1);
var G__26493 = cljs.core.chunk_rest.call(null,seq__26477_26491__$1);
var G__26494 = c__17658__auto___26492;
var G__26495 = cljs.core.count.call(null,c__17658__auto___26492);
var G__26496 = (0);
seq__26477_26481 = G__26493;
chunk__26478_26482 = G__26494;
count__26479_26483 = G__26495;
i__26480_26484 = G__26496;
continue;
} else {
var f_26497 = cljs.core.first.call(null,seq__26477_26491__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_26497);

var G__26498 = cljs.core.next.call(null,seq__26477_26491__$1);
var G__26499 = null;
var G__26500 = (0);
var G__26501 = (0);
seq__26477_26481 = G__26498;
chunk__26478_26482 = G__26499;
count__26479_26483 = G__26500;
i__26480_26484 = G__26501;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__26475,map__26475__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__26475,map__26475__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map