// Compiled by ClojureScript 1.7.170 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__18257_18261 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__18258_18262 = null;
var count__18259_18263 = (0);
var i__18260_18264 = (0);
while(true){
if((i__18260_18264 < count__18259_18263)){
var k_18265 = cljs.core._nth.call(null,chunk__18258_18262,i__18260_18264);
var v_18266 = (b[k_18265]);
(a[k_18265] = v_18266);

var G__18267 = seq__18257_18261;
var G__18268 = chunk__18258_18262;
var G__18269 = count__18259_18263;
var G__18270 = (i__18260_18264 + (1));
seq__18257_18261 = G__18267;
chunk__18258_18262 = G__18268;
count__18259_18263 = G__18269;
i__18260_18264 = G__18270;
continue;
} else {
var temp__4425__auto___18271 = cljs.core.seq.call(null,seq__18257_18261);
if(temp__4425__auto___18271){
var seq__18257_18272__$1 = temp__4425__auto___18271;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18257_18272__$1)){
var c__17658__auto___18273 = cljs.core.chunk_first.call(null,seq__18257_18272__$1);
var G__18274 = cljs.core.chunk_rest.call(null,seq__18257_18272__$1);
var G__18275 = c__17658__auto___18273;
var G__18276 = cljs.core.count.call(null,c__17658__auto___18273);
var G__18277 = (0);
seq__18257_18261 = G__18274;
chunk__18258_18262 = G__18275;
count__18259_18263 = G__18276;
i__18260_18264 = G__18277;
continue;
} else {
var k_18278 = cljs.core.first.call(null,seq__18257_18272__$1);
var v_18279 = (b[k_18278]);
(a[k_18278] = v_18279);

var G__18280 = cljs.core.next.call(null,seq__18257_18272__$1);
var G__18281 = null;
var G__18282 = (0);
var G__18283 = (0);
seq__18257_18261 = G__18280;
chunk__18258_18262 = G__18281;
count__18259_18263 = G__18282;
i__18260_18264 = G__18283;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__17453__auto__,writer__17454__auto__,opt__17455__auto__){
return cljs.core._write.call(null,writer__17454__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__17453__auto__,writer__17454__auto__,opt__17455__auto__){
return cljs.core._write.call(null,writer__17454__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args18284 = [];
var len__17913__auto___18287 = arguments.length;
var i__17914__auto___18288 = (0);
while(true){
if((i__17914__auto___18288 < len__17913__auto___18287)){
args18284.push((arguments[i__17914__auto___18288]));

var G__18289 = (i__17914__auto___18288 + (1));
i__17914__auto___18288 = G__18289;
continue;
} else {
}
break;
}

var G__18286 = args18284.length;
switch (G__18286) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18284.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__18291 = (i + (2));
var G__18292 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__18291;
ret = G__18292;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__17453__auto__,writer__17454__auto__,opt__17455__auto__){
return cljs.core._write.call(null,writer__17454__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__17453__auto__,writer__17454__auto__,opt__17455__auto__){
return cljs.core._write.call(null,writer__17454__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__18293_18297 = cljs.core.seq.call(null,v);
var chunk__18294_18298 = null;
var count__18295_18299 = (0);
var i__18296_18300 = (0);
while(true){
if((i__18296_18300 < count__18295_18299)){
var x_18301 = cljs.core._nth.call(null,chunk__18294_18298,i__18296_18300);
ret.push(x_18301);

var G__18302 = seq__18293_18297;
var G__18303 = chunk__18294_18298;
var G__18304 = count__18295_18299;
var G__18305 = (i__18296_18300 + (1));
seq__18293_18297 = G__18302;
chunk__18294_18298 = G__18303;
count__18295_18299 = G__18304;
i__18296_18300 = G__18305;
continue;
} else {
var temp__4425__auto___18306 = cljs.core.seq.call(null,seq__18293_18297);
if(temp__4425__auto___18306){
var seq__18293_18307__$1 = temp__4425__auto___18306;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18293_18307__$1)){
var c__17658__auto___18308 = cljs.core.chunk_first.call(null,seq__18293_18307__$1);
var G__18309 = cljs.core.chunk_rest.call(null,seq__18293_18307__$1);
var G__18310 = c__17658__auto___18308;
var G__18311 = cljs.core.count.call(null,c__17658__auto___18308);
var G__18312 = (0);
seq__18293_18297 = G__18309;
chunk__18294_18298 = G__18310;
count__18295_18299 = G__18311;
i__18296_18300 = G__18312;
continue;
} else {
var x_18313 = cljs.core.first.call(null,seq__18293_18307__$1);
ret.push(x_18313);

var G__18314 = cljs.core.next.call(null,seq__18293_18307__$1);
var G__18315 = null;
var G__18316 = (0);
var G__18317 = (0);
seq__18293_18297 = G__18314;
chunk__18294_18298 = G__18315;
count__18295_18299 = G__18316;
i__18296_18300 = G__18317;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__17453__auto__,writer__17454__auto__,opt__17455__auto__){
return cljs.core._write.call(null,writer__17454__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__17453__auto__,writer__17454__auto__,opt__17455__auto__){
return cljs.core._write.call(null,writer__17454__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__18318_18322 = cljs.core.seq.call(null,v);
var chunk__18319_18323 = null;
var count__18320_18324 = (0);
var i__18321_18325 = (0);
while(true){
if((i__18321_18325 < count__18320_18324)){
var x_18326 = cljs.core._nth.call(null,chunk__18319_18323,i__18321_18325);
ret.push(x_18326);

var G__18327 = seq__18318_18322;
var G__18328 = chunk__18319_18323;
var G__18329 = count__18320_18324;
var G__18330 = (i__18321_18325 + (1));
seq__18318_18322 = G__18327;
chunk__18319_18323 = G__18328;
count__18320_18324 = G__18329;
i__18321_18325 = G__18330;
continue;
} else {
var temp__4425__auto___18331 = cljs.core.seq.call(null,seq__18318_18322);
if(temp__4425__auto___18331){
var seq__18318_18332__$1 = temp__4425__auto___18331;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18318_18332__$1)){
var c__17658__auto___18333 = cljs.core.chunk_first.call(null,seq__18318_18332__$1);
var G__18334 = cljs.core.chunk_rest.call(null,seq__18318_18332__$1);
var G__18335 = c__17658__auto___18333;
var G__18336 = cljs.core.count.call(null,c__17658__auto___18333);
var G__18337 = (0);
seq__18318_18322 = G__18334;
chunk__18319_18323 = G__18335;
count__18320_18324 = G__18336;
i__18321_18325 = G__18337;
continue;
} else {
var x_18338 = cljs.core.first.call(null,seq__18318_18332__$1);
ret.push(x_18338);

var G__18339 = cljs.core.next.call(null,seq__18318_18332__$1);
var G__18340 = null;
var G__18341 = (0);
var G__18342 = (0);
seq__18318_18322 = G__18339;
chunk__18319_18323 = G__18340;
count__18320_18324 = G__18341;
i__18321_18325 = G__18342;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__17453__auto__,writer__17454__auto__,opt__17455__auto__){
return cljs.core._write.call(null,writer__17454__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__18343_18347 = cljs.core.seq.call(null,v);
var chunk__18344_18348 = null;
var count__18345_18349 = (0);
var i__18346_18350 = (0);
while(true){
if((i__18346_18350 < count__18345_18349)){
var x_18351 = cljs.core._nth.call(null,chunk__18344_18348,i__18346_18350);
ret.push(x_18351);

var G__18352 = seq__18343_18347;
var G__18353 = chunk__18344_18348;
var G__18354 = count__18345_18349;
var G__18355 = (i__18346_18350 + (1));
seq__18343_18347 = G__18352;
chunk__18344_18348 = G__18353;
count__18345_18349 = G__18354;
i__18346_18350 = G__18355;
continue;
} else {
var temp__4425__auto___18356 = cljs.core.seq.call(null,seq__18343_18347);
if(temp__4425__auto___18356){
var seq__18343_18357__$1 = temp__4425__auto___18356;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18343_18357__$1)){
var c__17658__auto___18358 = cljs.core.chunk_first.call(null,seq__18343_18357__$1);
var G__18359 = cljs.core.chunk_rest.call(null,seq__18343_18357__$1);
var G__18360 = c__17658__auto___18358;
var G__18361 = cljs.core.count.call(null,c__17658__auto___18358);
var G__18362 = (0);
seq__18343_18347 = G__18359;
chunk__18344_18348 = G__18360;
count__18345_18349 = G__18361;
i__18346_18350 = G__18362;
continue;
} else {
var x_18363 = cljs.core.first.call(null,seq__18343_18357__$1);
ret.push(x_18363);

var G__18364 = cljs.core.next.call(null,seq__18343_18357__$1);
var G__18365 = null;
var G__18366 = (0);
var G__18367 = (0);
seq__18343_18347 = G__18364;
chunk__18344_18348 = G__18365;
count__18345_18349 = G__18366;
i__18346_18350 = G__18367;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__17453__auto__,writer__17454__auto__,opt__17455__auto__){
return cljs.core._write.call(null,writer__17454__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__17453__auto__,writer__17454__auto__,opt__17455__auto__){
return cljs.core._write.call(null,writer__17454__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args18368 = [];
var len__17913__auto___18379 = arguments.length;
var i__17914__auto___18380 = (0);
while(true){
if((i__17914__auto___18380 < len__17913__auto___18379)){
args18368.push((arguments[i__17914__auto___18380]));

var G__18381 = (i__17914__auto___18380 + (1));
i__17914__auto___18380 = G__18381;
continue;
} else {
}
break;
}

var G__18370 = args18368.length;
switch (G__18370) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18368.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__18371 = obj;
G__18371.push(kfn.call(null,k),vfn.call(null,v));

return G__18371;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x18372 = cljs.core.clone.call(null,handlers);
x18372.forEach = ((function (x18372,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__18373 = cljs.core.seq.call(null,coll);
var chunk__18374 = null;
var count__18375 = (0);
var i__18376 = (0);
while(true){
if((i__18376 < count__18375)){
var vec__18377 = cljs.core._nth.call(null,chunk__18374,i__18376);
var k = cljs.core.nth.call(null,vec__18377,(0),null);
var v = cljs.core.nth.call(null,vec__18377,(1),null);
f.call(null,v,k);

var G__18383 = seq__18373;
var G__18384 = chunk__18374;
var G__18385 = count__18375;
var G__18386 = (i__18376 + (1));
seq__18373 = G__18383;
chunk__18374 = G__18384;
count__18375 = G__18385;
i__18376 = G__18386;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__18373);
if(temp__4425__auto__){
var seq__18373__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18373__$1)){
var c__17658__auto__ = cljs.core.chunk_first.call(null,seq__18373__$1);
var G__18387 = cljs.core.chunk_rest.call(null,seq__18373__$1);
var G__18388 = c__17658__auto__;
var G__18389 = cljs.core.count.call(null,c__17658__auto__);
var G__18390 = (0);
seq__18373 = G__18387;
chunk__18374 = G__18388;
count__18375 = G__18389;
i__18376 = G__18390;
continue;
} else {
var vec__18378 = cljs.core.first.call(null,seq__18373__$1);
var k = cljs.core.nth.call(null,vec__18378,(0),null);
var v = cljs.core.nth.call(null,vec__18378,(1),null);
f.call(null,v,k);

var G__18391 = cljs.core.next.call(null,seq__18373__$1);
var G__18392 = null;
var G__18393 = (0);
var G__18394 = (0);
seq__18373 = G__18391;
chunk__18374 = G__18392;
count__18375 = G__18393;
i__18376 = G__18394;
continue;
}
} else {
return null;
}
}
break;
}
});})(x18372,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x18372;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args18395 = [];
var len__17913__auto___18401 = arguments.length;
var i__17914__auto___18402 = (0);
while(true){
if((i__17914__auto___18402 < len__17913__auto___18401)){
args18395.push((arguments[i__17914__auto___18402]));

var G__18403 = (i__17914__auto___18402 + (1));
i__17914__auto___18402 = G__18403;
continue;
} else {
}
break;
}

var G__18397 = args18395.length;
switch (G__18397) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18395.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit18398 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit18398 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta18399){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta18399 = meta18399;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit18398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18400,meta18399__$1){
var self__ = this;
var _18400__$1 = this;
return (new cognitect.transit.t_cognitect$transit18398(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta18399__$1));
});

cognitect.transit.t_cognitect$transit18398.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18400){
var self__ = this;
var _18400__$1 = this;
return self__.meta18399;
});

cognitect.transit.t_cognitect$transit18398.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit18398.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit18398.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit18398.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit18398.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta18399","meta18399",695604658,null)], null);
});

cognitect.transit.t_cognitect$transit18398.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit18398.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit18398";

cognitect.transit.t_cognitect$transit18398.cljs$lang$ctorPrWriter = (function (this__17453__auto__,writer__17454__auto__,opt__17455__auto__){
return cljs.core._write.call(null,writer__17454__auto__,"cognitect.transit/t_cognitect$transit18398");
});

cognitect.transit.__GT_t_cognitect$transit18398 = (function cognitect$transit$__GT_t_cognitect$transit18398(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta18399){
return (new cognitect.transit.t_cognitect$transit18398(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta18399));
});

}

return (new cognitect.transit.t_cognitect$transit18398(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__16855__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__16855__auto__)){
return or__16855__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map