// Compiled by ClojureScript 1.7.170 {}
goog.provide('schema.core');
goog.require('cljs.core');
goog.require('schema.spec.collection');
goog.require('schema.spec.core');
goog.require('schema.spec.variant');
goog.require('schema.spec.leaf');
goog.require('clojure.string');
goog.require('schema.utils');

/**
 * @interface
 */
schema.core.Schema = function(){};

/**
 * A spec is a record of some type that expresses the structure of this schema
 *   in a declarative and/or imperative way.  See schema.spec.* for examples.
 */
schema.core.spec = (function schema$core$spec(this$){
if((!((this$ == null))) && (!((this$.schema$core$Schema$spec$arity$1 == null)))){
return this$.schema$core$Schema$spec$arity$1(this$);
} else {
var x__17510__auto__ = (((this$ == null))?null:this$);
var m__17511__auto__ = (schema.core.spec[goog.typeOf(x__17510__auto__)]);
if(!((m__17511__auto__ == null))){
return m__17511__auto__.call(null,this$);
} else {
var m__17511__auto____$1 = (schema.core.spec["_"]);
if(!((m__17511__auto____$1 == null))){
return m__17511__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Schema.spec",this$);
}
}
}
});

/**
 * Expand this schema to a human-readable format suitable for pprinting,
 *   also expanding class schematas at the leaves.  Example:
 * 
 *   user> (s/explain {:a s/Keyword :b [s/Int]} )
 *   {:a Keyword, :b [Int]}
 */
schema.core.explain = (function schema$core$explain(this$){
if((!((this$ == null))) && (!((this$.schema$core$Schema$explain$arity$1 == null)))){
return this$.schema$core$Schema$explain$arity$1(this$);
} else {
var x__17510__auto__ = (((this$ == null))?null:this$);
var m__17511__auto__ = (schema.core.explain[goog.typeOf(x__17510__auto__)]);
if(!((m__17511__auto__ == null))){
return m__17511__auto__.call(null,this$);
} else {
var m__17511__auto____$1 = (schema.core.explain["_"]);
if(!((m__17511__auto____$1 == null))){
return m__17511__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Schema.explain",this$);
}
}
}
});

/**
 * Compile an efficient checker for schema, which returns nil for valid values and
 * error descriptions otherwise.
 */
schema.core.checker = (function schema$core$checker(schema__$1){
return cljs.core.comp.call(null,schema.utils.error_val,schema.spec.core.run_checker.call(null,(function (s,params){
return schema.spec.core.checker.call(null,schema.core.spec.call(null,s),params);
}),false,schema__$1));
});
/**
 * Return nil if x matches schema; otherwise, returns a value that looks like the
 * 'bad' parts of x with ValidationErrors at the leaves describing the failures.
 * 
 * If you will be checking many datums, it is much more efficient to create
 * a 'checker' once and call it on each of them.
 */
schema.core.check = (function schema$core$check(schema__$1,x){
return schema.core.checker.call(null,schema__$1).call(null,x);
});
/**
 * Compile an efficient validator for schema.
 */
schema.core.validator = (function schema$core$validator(schema__$1){
var c = schema.core.checker.call(null,schema__$1);
return ((function (c){
return (function (value){
var temp__4425__auto___20662 = c.call(null,value);
if(cljs.core.truth_(temp__4425__auto___20662)){
var error_20663 = temp__4425__auto___20662;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Value does not match schema: %s",cljs.core.pr_str.call(null,error_20663)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"error","error",-978969032),error_20663], null));
} else {
}

return value;
});
;})(c))
});
/**
 * Throw an exception if value does not satisfy schema; otherwise, return value.
 * If you will be validating many datums, it is much more efficient to create
 * a 'validator' once and call it on each of them.
 */
schema.core.validate = (function schema$core$validate(schema__$1,value){
return schema.core.validator.call(null,schema__$1).call(null,value);
});
schema.core.instance_precondition = (function schema$core$instance_precondition(s,klass){
return schema.spec.core.precondition.call(null,s,(function (p1__20664_SHARP_){
var and__16843__auto__ = !((p1__20664_SHARP_ == null));
if(and__16843__auto__){
var or__16855__auto__ = (klass === p1__20664_SHARP_.constructor);
if(or__16855__auto__){
return or__16855__auto__;
} else {
return p1__20664_SHARP_ instanceof klass;
}
} else {
return and__16843__auto__;
}
}),(function (p1__20665_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__20665_SHARP_),klass),new cljs.core.Symbol(null,"instance?","instance?",1075939923,null));
}));
});
(schema.core.Schema["function"] = true);

(schema.core.spec["function"] = (function (this$){
var pre = schema.core.instance_precondition.call(null,this$,this$);
var temp__4423__auto__ = schema.utils.class_schema.call(null,this$);
if(cljs.core.truth_(temp__4423__auto__)){
var class_schema = temp__4423__auto__;
return schema.spec.variant.variant_spec.call(null,pre,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),class_schema], null)], null));
} else {
return schema.spec.leaf.leaf_spec.call(null,pre);
}
}));

(schema.core.explain["function"] = (function (this$){
var temp__4423__auto__ = schema.utils.class_schema.call(null,this$);
if(cljs.core.truth_(temp__4423__auto__)){
var more_schema = temp__4423__auto__;
return schema.core.explain.call(null,more_schema);
} else {
var pred__20666 = cljs.core._EQ_;
var expr__20667 = this$;
if(cljs.core.truth_(pred__20666.call(null,null,expr__20667))){
return new cljs.core.Symbol(null,"Str","Str",907970895,null);
} else {
if(cljs.core.truth_(pred__20666.call(null,Boolean,expr__20667))){
return new cljs.core.Symbol(null,"Bool","Bool",195910502,null);
} else {
if(cljs.core.truth_(pred__20666.call(null,Number,expr__20667))){
return new cljs.core.Symbol(null,"Num","Num",-2044934708,null);
} else {
if(cljs.core.truth_(pred__20666.call(null,null,expr__20667))){
return new cljs.core.Symbol(null,"Regex","Regex",205914413,null);
} else {
if(cljs.core.truth_(pred__20666.call(null,Date,expr__20667))){
return new cljs.core.Symbol(null,"Inst","Inst",292408622,null);
} else {
if(cljs.core.truth_(pred__20666.call(null,cljs.core.UUID,expr__20667))){
return new cljs.core.Symbol(null,"Uuid","Uuid",-1866694318,null);
} else {
return this$;
}
}
}
}
}
}
}
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.AnythingSchema = (function (_,__meta,__extmap,__hash){
this._ = _;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17469__auto__,k__17470__auto__){
var self__ = this;
var this__17469__auto____$1 = this;
return cljs.core._lookup.call(null,this__17469__auto____$1,k__17470__auto__,null);
});

schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17471__auto__,k20670,else__17472__auto__){
var self__ = this;
var this__17471__auto____$1 = this;
var G__20672 = (((k20670 instanceof cljs.core.Keyword))?k20670.fqn:null);
switch (G__20672) {
case "_":
return self__._;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20670,else__17472__auto__);

}
});

schema.core.AnythingSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17483__auto__,writer__17484__auto__,opts__17485__auto__){
var self__ = this;
var this__17483__auto____$1 = this;
var pr_pair__17486__auto__ = ((function (this__17483__auto____$1){
return (function (keyval__17487__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17484__auto__,cljs.core.pr_writer,""," ","",opts__17485__auto__,keyval__17487__auto__);
});})(this__17483__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17484__auto__,pr_pair__17486__auto__,"#schema.core.AnythingSchema{",", ","}",opts__17485__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"_","_",1453416199),self__._],null))], null),self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IIterable$ = true;

schema.core.AnythingSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20669){
var self__ = this;
var G__20669__$1 = this;
return (new cljs.core.RecordIter((0),G__20669__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_","_",1453416199)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.AnythingSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17467__auto__){
var self__ = this;
var this__17467__auto____$1 = this;
return self__.__meta;
});

schema.core.AnythingSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17463__auto__){
var self__ = this;
var this__17463__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.AnythingSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17473__auto__){
var self__ = this;
var this__17473__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17464__auto__){
var self__ = this;
var this__17464__auto____$1 = this;
var h__17290__auto__ = self__.__hash;
if(!((h__17290__auto__ == null))){
return h__17290__auto__;
} else {
var h__17290__auto____$1 = cljs.core.hash_imap.call(null,this__17464__auto____$1);
self__.__hash = h__17290__auto____$1;

return h__17290__auto____$1;
}
});

schema.core.AnythingSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17465__auto__,other__17466__auto__){
var self__ = this;
var this__17465__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16843__auto__ = other__17466__auto__;
if(cljs.core.truth_(and__16843__auto__)){
var and__16843__auto____$1 = (this__17465__auto____$1.constructor === other__17466__auto__.constructor);
if(and__16843__auto____$1){
return cljs.core.equiv_map.call(null,this__17465__auto____$1,other__17466__auto__);
} else {
return and__16843__auto____$1;
}
} else {
return and__16843__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.AnythingSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17478__auto__,k__17479__auto__){
var self__ = this;
var this__17478__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"_","_",1453416199),null], null), null),k__17479__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17478__auto____$1),self__.__meta),k__17479__auto__);
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17479__auto__)),null));
}
});

schema.core.AnythingSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17476__auto__,k__17477__auto__,G__20669){
var self__ = this;
var this__17476__auto____$1 = this;
var pred__20673 = cljs.core.keyword_identical_QMARK_;
var expr__20674 = k__17477__auto__;
if(cljs.core.truth_(pred__20673.call(null,new cljs.core.Keyword(null,"_","_",1453416199),expr__20674))){
return (new schema.core.AnythingSchema(G__20669,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17477__auto__,G__20669),null));
}
});

schema.core.AnythingSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17481__auto__){
var self__ = this;
var this__17481__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"_","_",1453416199),self__._],null))], null),self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17468__auto__,G__20669){
var self__ = this;
var this__17468__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,G__20669,self__.__extmap,self__.__hash));
});

schema.core.AnythingSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17474__auto__,entry__17475__auto__){
var self__ = this;
var this__17474__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17475__auto__)){
return cljs.core._assoc.call(null,this__17474__auto____$1,cljs.core._nth.call(null,entry__17475__auto__,(0)),cljs.core._nth.call(null,entry__17475__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17474__auto____$1,entry__17475__auto__);
}
});

schema.core.AnythingSchema.prototype.schema$core$Schema$ = true;

schema.core.AnythingSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_);
});

schema.core.AnythingSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Symbol(null,"Any","Any",1277492269,null);
});

schema.core.AnythingSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null);
});

schema.core.AnythingSchema.cljs$lang$type = true;

schema.core.AnythingSchema.cljs$lang$ctorPrSeq = (function (this__17503__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/AnythingSchema");
});

schema.core.AnythingSchema.cljs$lang$ctorPrWriter = (function (this__17503__auto__,writer__17504__auto__){
return cljs.core._write.call(null,writer__17504__auto__,"schema.core/AnythingSchema");
});

schema.core.__GT_AnythingSchema = (function schema$core$__GT_AnythingSchema(_){
return (new schema.core.AnythingSchema(_,null,null,null));
});

schema.core.map__GT_AnythingSchema = (function schema$core$map__GT_AnythingSchema(G__20671){
return (new schema.core.AnythingSchema(new cljs.core.Keyword(null,"_","_",1453416199).cljs$core$IFn$_invoke$arity$1(G__20671),null,cljs.core.dissoc.call(null,G__20671,new cljs.core.Keyword(null,"_","_",1453416199)),null));
});

/**
 * Any value, including nil.
 */
schema.core.Any = (new schema.core.AnythingSchema(null,null,null,null));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.EqSchema = (function (v,__meta,__extmap,__hash){
this.v = v;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17469__auto__,k__17470__auto__){
var self__ = this;
var this__17469__auto____$1 = this;
return cljs.core._lookup.call(null,this__17469__auto____$1,k__17470__auto__,null);
});

schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17471__auto__,k20680,else__17472__auto__){
var self__ = this;
var this__17471__auto____$1 = this;
var G__20682 = (((k20680 instanceof cljs.core.Keyword))?k20680.fqn:null);
switch (G__20682) {
case "v":
return self__.v;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20680,else__17472__auto__);

}
});

schema.core.EqSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17483__auto__,writer__17484__auto__,opts__17485__auto__){
var self__ = this;
var this__17483__auto____$1 = this;
var pr_pair__17486__auto__ = ((function (this__17483__auto____$1){
return (function (keyval__17487__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17484__auto__,cljs.core.pr_writer,""," ","",opts__17485__auto__,keyval__17487__auto__);
});})(this__17483__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17484__auto__,pr_pair__17486__auto__,"#schema.core.EqSchema{",", ","}",opts__17485__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null))], null),self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IIterable$ = true;

schema.core.EqSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20679){
var self__ = this;
var G__20679__$1 = this;
return (new cljs.core.RecordIter((0),G__20679__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.EqSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17467__auto__){
var self__ = this;
var this__17467__auto____$1 = this;
return self__.__meta;
});

schema.core.EqSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17463__auto__){
var self__ = this;
var this__17463__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.EqSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17473__auto__){
var self__ = this;
var this__17473__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17464__auto__){
var self__ = this;
var this__17464__auto____$1 = this;
var h__17290__auto__ = self__.__hash;
if(!((h__17290__auto__ == null))){
return h__17290__auto__;
} else {
var h__17290__auto____$1 = cljs.core.hash_imap.call(null,this__17464__auto____$1);
self__.__hash = h__17290__auto____$1;

return h__17290__auto____$1;
}
});

schema.core.EqSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17465__auto__,other__17466__auto__){
var self__ = this;
var this__17465__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16843__auto__ = other__17466__auto__;
if(cljs.core.truth_(and__16843__auto__)){
var and__16843__auto____$1 = (this__17465__auto____$1.constructor === other__17466__auto__.constructor);
if(and__16843__auto____$1){
return cljs.core.equiv_map.call(null,this__17465__auto____$1,other__17466__auto__);
} else {
return and__16843__auto____$1;
}
} else {
return and__16843__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.EqSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17478__auto__,k__17479__auto__){
var self__ = this;
var this__17478__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),null], null), null),k__17479__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17478__auto____$1),self__.__meta),k__17479__auto__);
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17479__auto__)),null));
}
});

schema.core.EqSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17476__auto__,k__17477__auto__,G__20679){
var self__ = this;
var this__17476__auto____$1 = this;
var pred__20683 = cljs.core.keyword_identical_QMARK_;
var expr__20684 = k__17477__auto__;
if(cljs.core.truth_(pred__20683.call(null,new cljs.core.Keyword(null,"v","v",21465059),expr__20684))){
return (new schema.core.EqSchema(G__20679,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17477__auto__,G__20679),null));
}
});

schema.core.EqSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17481__auto__){
var self__ = this;
var this__17481__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null))], null),self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17468__auto__,G__20679){
var self__ = this;
var this__17468__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,G__20679,self__.__extmap,self__.__hash));
});

schema.core.EqSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17474__auto__,entry__17475__auto__){
var self__ = this;
var this__17474__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17475__auto__)){
return cljs.core._assoc.call(null,this__17474__auto____$1,cljs.core._nth.call(null,entry__17475__auto__,(0)),cljs.core._nth.call(null,entry__17475__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17474__auto____$1,entry__17475__auto__);
}
});

schema.core.EqSchema.prototype.schema$core$Schema$ = true;

schema.core.EqSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,((function (this$__$1){
return (function (p1__20677_SHARP_){
return cljs.core._EQ_.call(null,self__.v,p1__20677_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__20678_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__20678_SHARP_),self__.v),new cljs.core.Symbol(null,"=","=",-1501502141,null));
});})(this$__$1))
));
});

schema.core.EqSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.v),new cljs.core.Symbol(null,"eq","eq",1021992460,null));
});

schema.core.EqSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null);
});

schema.core.EqSchema.cljs$lang$type = true;

schema.core.EqSchema.cljs$lang$ctorPrSeq = (function (this__17503__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/EqSchema");
});

schema.core.EqSchema.cljs$lang$ctorPrWriter = (function (this__17503__auto__,writer__17504__auto__){
return cljs.core._write.call(null,writer__17504__auto__,"schema.core/EqSchema");
});

schema.core.__GT_EqSchema = (function schema$core$__GT_EqSchema(v){
return (new schema.core.EqSchema(v,null,null,null));
});

schema.core.map__GT_EqSchema = (function schema$core$map__GT_EqSchema(G__20681){
return (new schema.core.EqSchema(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(G__20681),null,cljs.core.dissoc.call(null,G__20681,new cljs.core.Keyword(null,"v","v",21465059)),null));
});

/**
 * A value that must be (= v).
 */
schema.core.eq = (function schema$core$eq(v){
return (new schema.core.EqSchema(v,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Isa = (function (h,parent,__meta,__extmap,__hash){
this.h = h;
this.parent = parent;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17469__auto__,k__17470__auto__){
var self__ = this;
var this__17469__auto____$1 = this;
return cljs.core._lookup.call(null,this__17469__auto____$1,k__17470__auto__,null);
});

schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17471__auto__,k20690,else__17472__auto__){
var self__ = this;
var this__17471__auto____$1 = this;
var G__20692 = (((k20690 instanceof cljs.core.Keyword))?k20690.fqn:null);
switch (G__20692) {
case "h":
return self__.h;

break;
case "parent":
return self__.parent;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20690,else__17472__auto__);

}
});

schema.core.Isa.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17483__auto__,writer__17484__auto__,opts__17485__auto__){
var self__ = this;
var this__17483__auto____$1 = this;
var pr_pair__17486__auto__ = ((function (this__17483__auto____$1){
return (function (keyval__17487__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17484__auto__,cljs.core.pr_writer,""," ","",opts__17485__auto__,keyval__17487__auto__);
});})(this__17483__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17484__auto__,pr_pair__17486__auto__,"#schema.core.Isa{",", ","}",opts__17485__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null))], null),self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IIterable$ = true;

schema.core.Isa.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20689){
var self__ = this;
var G__20689__$1 = this;
return (new cljs.core.RecordIter((0),G__20689__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"parent","parent",-878878779)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Isa.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17467__auto__){
var self__ = this;
var this__17467__auto____$1 = this;
return self__.__meta;
});

schema.core.Isa.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17463__auto__){
var self__ = this;
var this__17463__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Isa.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17473__auto__){
var self__ = this;
var this__17473__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17464__auto__){
var self__ = this;
var this__17464__auto____$1 = this;
var h__17290__auto__ = self__.__hash;
if(!((h__17290__auto__ == null))){
return h__17290__auto__;
} else {
var h__17290__auto____$1 = cljs.core.hash_imap.call(null,this__17464__auto____$1);
self__.__hash = h__17290__auto____$1;

return h__17290__auto____$1;
}
});

schema.core.Isa.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17465__auto__,other__17466__auto__){
var self__ = this;
var this__17465__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16843__auto__ = other__17466__auto__;
if(cljs.core.truth_(and__16843__auto__)){
var and__16843__auto____$1 = (this__17465__auto____$1.constructor === other__17466__auto__.constructor);
if(and__16843__auto____$1){
return cljs.core.equiv_map.call(null,this__17465__auto____$1,other__17466__auto__);
} else {
return and__16843__auto____$1;
}
} else {
return and__16843__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Isa.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17478__auto__,k__17479__auto__){
var self__ = this;
var this__17478__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__17479__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17478__auto____$1),self__.__meta),k__17479__auto__);
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17479__auto__)),null));
}
});

schema.core.Isa.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17476__auto__,k__17477__auto__,G__20689){
var self__ = this;
var this__17476__auto____$1 = this;
var pred__20693 = cljs.core.keyword_identical_QMARK_;
var expr__20694 = k__17477__auto__;
if(cljs.core.truth_(pred__20693.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__20694))){
return (new schema.core.Isa(G__20689,self__.parent,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20693.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__20694))){
return (new schema.core.Isa(self__.h,G__20689,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17477__auto__,G__20689),null));
}
}
});

schema.core.Isa.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17481__auto__){
var self__ = this;
var this__17481__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null))], null),self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17468__auto__,G__20689){
var self__ = this;
var this__17468__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,G__20689,self__.__extmap,self__.__hash));
});

schema.core.Isa.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17474__auto__,entry__17475__auto__){
var self__ = this;
var this__17474__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17475__auto__)){
return cljs.core._assoc.call(null,this__17474__auto____$1,cljs.core._nth.call(null,entry__17475__auto__,(0)),cljs.core._nth.call(null,entry__17475__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17474__auto____$1,entry__17475__auto__);
}
});

schema.core.Isa.prototype.schema$core$Schema$ = true;

schema.core.Isa.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,((function (this$__$1){
return (function (p1__20687_SHARP_){
return cljs.core.isa_QMARK_.call(null,self__.h,p1__20687_SHARP_,self__.parent);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__20688_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.parent),p1__20688_SHARP_),new cljs.core.Symbol(null,"isa?","isa?",1358492324,null));
});})(this$__$1))
));
});

schema.core.Isa.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.parent),new cljs.core.Symbol(null,"isa?","isa?",1358492324,null));
});

schema.core.Isa.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"h","h",-1544777029,null),new cljs.core.Symbol(null,"parent","parent",761652748,null)], null);
});

schema.core.Isa.cljs$lang$type = true;

schema.core.Isa.cljs$lang$ctorPrSeq = (function (this__17503__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Isa");
});

schema.core.Isa.cljs$lang$ctorPrWriter = (function (this__17503__auto__,writer__17504__auto__){
return cljs.core._write.call(null,writer__17504__auto__,"schema.core/Isa");
});

schema.core.__GT_Isa = (function schema$core$__GT_Isa(h,parent){
return (new schema.core.Isa(h,parent,null,null,null));
});

schema.core.map__GT_Isa = (function schema$core$map__GT_Isa(G__20691){
return (new schema.core.Isa(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__20691),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__20691),null,cljs.core.dissoc.call(null,G__20691,new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"parent","parent",-878878779)),null));
});

/**
 * A value that must be a child of parent.
 */
schema.core.isa = (function schema$core$isa(var_args){
var args20697 = [];
var len__17913__auto___20700 = arguments.length;
var i__17914__auto___20701 = (0);
while(true){
if((i__17914__auto___20701 < len__17913__auto___20700)){
args20697.push((arguments[i__17914__auto___20701]));

var G__20702 = (i__17914__auto___20701 + (1));
i__17914__auto___20701 = G__20702;
continue;
} else {
}
break;
}

var G__20699 = args20697.length;
switch (G__20699) {
case 1:
return schema.core.isa.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema.core.isa.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20697.length)].join('')));

}
});

schema.core.isa.cljs$core$IFn$_invoke$arity$1 = (function (parent){
return (new schema.core.Isa(null,parent,null,null,null));
});

schema.core.isa.cljs$core$IFn$_invoke$arity$2 = (function (h,parent){
return (new schema.core.Isa(h,parent,null,null,null));
});

schema.core.isa.cljs$lang$maxFixedArity = 2;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.EnumSchema = (function (vs,__meta,__extmap,__hash){
this.vs = vs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17469__auto__,k__17470__auto__){
var self__ = this;
var this__17469__auto____$1 = this;
return cljs.core._lookup.call(null,this__17469__auto____$1,k__17470__auto__,null);
});

schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17471__auto__,k20707,else__17472__auto__){
var self__ = this;
var this__17471__auto____$1 = this;
var G__20709 = (((k20707 instanceof cljs.core.Keyword))?k20707.fqn:null);
switch (G__20709) {
case "vs":
return self__.vs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20707,else__17472__auto__);

}
});

schema.core.EnumSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17483__auto__,writer__17484__auto__,opts__17485__auto__){
var self__ = this;
var this__17483__auto____$1 = this;
var pr_pair__17486__auto__ = ((function (this__17483__auto____$1){
return (function (keyval__17487__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17484__auto__,cljs.core.pr_writer,""," ","",opts__17485__auto__,keyval__17487__auto__);
});})(this__17483__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17484__auto__,pr_pair__17486__auto__,"#schema.core.EnumSchema{",", ","}",opts__17485__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vs","vs",-2022097090),self__.vs],null))], null),self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IIterable$ = true;

schema.core.EnumSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20706){
var self__ = this;
var G__20706__$1 = this;
return (new cljs.core.RecordIter((0),G__20706__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vs","vs",-2022097090)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.EnumSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17467__auto__){
var self__ = this;
var this__17467__auto____$1 = this;
return self__.__meta;
});

schema.core.EnumSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17463__auto__){
var self__ = this;
var this__17463__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.EnumSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17473__auto__){
var self__ = this;
var this__17473__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17464__auto__){
var self__ = this;
var this__17464__auto____$1 = this;
var h__17290__auto__ = self__.__hash;
if(!((h__17290__auto__ == null))){
return h__17290__auto__;
} else {
var h__17290__auto____$1 = cljs.core.hash_imap.call(null,this__17464__auto____$1);
self__.__hash = h__17290__auto____$1;

return h__17290__auto____$1;
}
});

schema.core.EnumSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17465__auto__,other__17466__auto__){
var self__ = this;
var this__17465__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16843__auto__ = other__17466__auto__;
if(cljs.core.truth_(and__16843__auto__)){
var and__16843__auto____$1 = (this__17465__auto____$1.constructor === other__17466__auto__.constructor);
if(and__16843__auto____$1){
return cljs.core.equiv_map.call(null,this__17465__auto____$1,other__17466__auto__);
} else {
return and__16843__auto____$1;
}
} else {
return and__16843__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.EnumSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17478__auto__,k__17479__auto__){
var self__ = this;
var this__17478__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vs","vs",-2022097090),null], null), null),k__17479__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17478__auto____$1),self__.__meta),k__17479__auto__);
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17479__auto__)),null));
}
});

schema.core.EnumSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17476__auto__,k__17477__auto__,G__20706){
var self__ = this;
var this__17476__auto____$1 = this;
var pred__20710 = cljs.core.keyword_identical_QMARK_;
var expr__20711 = k__17477__auto__;
if(cljs.core.truth_(pred__20710.call(null,new cljs.core.Keyword(null,"vs","vs",-2022097090),expr__20711))){
return (new schema.core.EnumSchema(G__20706,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17477__auto__,G__20706),null));
}
});

schema.core.EnumSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17481__auto__){
var self__ = this;
var this__17481__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vs","vs",-2022097090),self__.vs],null))], null),self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17468__auto__,G__20706){
var self__ = this;
var this__17468__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,G__20706,self__.__extmap,self__.__hash));
});

schema.core.EnumSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17474__auto__,entry__17475__auto__){
var self__ = this;
var this__17474__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17475__auto__)){
return cljs.core._assoc.call(null,this__17474__auto____$1,cljs.core._nth.call(null,entry__17475__auto__,(0)),cljs.core._nth.call(null,entry__17475__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17474__auto____$1,entry__17475__auto__);
}
});

schema.core.EnumSchema.prototype.schema$core$Schema$ = true;

schema.core.EnumSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,((function (this$__$1){
return (function (p1__20704_SHARP_){
return cljs.core.contains_QMARK_.call(null,self__.vs,p1__20704_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__20705_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__20705_SHARP_),self__.vs);
});})(this$__$1))
));
});

schema.core.EnumSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol(null,"enum","enum",-975417337,null),self__.vs);
});

schema.core.EnumSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vs","vs",-381565563,null)], null);
});

schema.core.EnumSchema.cljs$lang$type = true;

schema.core.EnumSchema.cljs$lang$ctorPrSeq = (function (this__17503__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/EnumSchema");
});

schema.core.EnumSchema.cljs$lang$ctorPrWriter = (function (this__17503__auto__,writer__17504__auto__){
return cljs.core._write.call(null,writer__17504__auto__,"schema.core/EnumSchema");
});

schema.core.__GT_EnumSchema = (function schema$core$__GT_EnumSchema(vs){
return (new schema.core.EnumSchema(vs,null,null,null));
});

schema.core.map__GT_EnumSchema = (function schema$core$map__GT_EnumSchema(G__20708){
return (new schema.core.EnumSchema(new cljs.core.Keyword(null,"vs","vs",-2022097090).cljs$core$IFn$_invoke$arity$1(G__20708),null,cljs.core.dissoc.call(null,G__20708,new cljs.core.Keyword(null,"vs","vs",-2022097090)),null));
});

/**
 * A value that must be = to some element of vs.
 */
schema.core.enum$ = (function schema$core$enum(var_args){
var args__17920__auto__ = [];
var len__17913__auto___20715 = arguments.length;
var i__17914__auto___20716 = (0);
while(true){
if((i__17914__auto___20716 < len__17913__auto___20715)){
args__17920__auto__.push((arguments[i__17914__auto___20716]));

var G__20717 = (i__17914__auto___20716 + (1));
i__17914__auto___20716 = G__20717;
continue;
} else {
}
break;
}

var argseq__17921__auto__ = ((((0) < args__17920__auto__.length))?(new cljs.core.IndexedSeq(args__17920__auto__.slice((0)),(0))):null);
return schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic(argseq__17921__auto__);
});

schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic = (function (vs){
return (new schema.core.EnumSchema(cljs.core.set.call(null,vs),null,null,null));
});

schema.core.enum$.cljs$lang$maxFixedArity = (0);

schema.core.enum$.cljs$lang$applyTo = (function (seq20714){
return schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20714));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Predicate = (function (p_QMARK_,pred_name,__meta,__extmap,__hash){
this.p_QMARK_ = p_QMARK_;
this.pred_name = pred_name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17469__auto__,k__17470__auto__){
var self__ = this;
var this__17469__auto____$1 = this;
return cljs.core._lookup.call(null,this__17469__auto____$1,k__17470__auto__,null);
});

schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17471__auto__,k20720,else__17472__auto__){
var self__ = this;
var this__17471__auto____$1 = this;
var G__20722 = (((k20720 instanceof cljs.core.Keyword))?k20720.fqn:null);
switch (G__20722) {
case "p?":
return self__.p_QMARK_;

break;
case "pred-name":
return self__.pred_name;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20720,else__17472__auto__);

}
});

schema.core.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17483__auto__,writer__17484__auto__,opts__17485__auto__){
var self__ = this;
var this__17483__auto____$1 = this;
var pr_pair__17486__auto__ = ((function (this__17483__auto____$1){
return (function (keyval__17487__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17484__auto__,cljs.core.pr_writer,""," ","",opts__17485__auto__,keyval__17487__auto__);
});})(this__17483__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17484__auto__,pr_pair__17486__auto__,"#schema.core.Predicate{",", ","}",opts__17485__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p?","p?",-1172161701),self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),self__.pred_name],null))], null),self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IIterable$ = true;

schema.core.Predicate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20719){
var self__ = this;
var G__20719__$1 = this;
return (new cljs.core.RecordIter((0),G__20719__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p?","p?",-1172161701),new cljs.core.Keyword(null,"pred-name","pred-name",-3677451)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17467__auto__){
var self__ = this;
var this__17467__auto____$1 = this;
return self__.__meta;
});

schema.core.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17463__auto__){
var self__ = this;
var this__17463__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17473__auto__){
var self__ = this;
var this__17473__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17464__auto__){
var self__ = this;
var this__17464__auto____$1 = this;
var h__17290__auto__ = self__.__hash;
if(!((h__17290__auto__ == null))){
return h__17290__auto__;
} else {
var h__17290__auto____$1 = cljs.core.hash_imap.call(null,this__17464__auto____$1);
self__.__hash = h__17290__auto____$1;

return h__17290__auto____$1;
}
});

schema.core.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17465__auto__,other__17466__auto__){
var self__ = this;
var this__17465__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16843__auto__ = other__17466__auto__;
if(cljs.core.truth_(and__16843__auto__)){
var and__16843__auto____$1 = (this__17465__auto____$1.constructor === other__17466__auto__.constructor);
if(and__16843__auto____$1){
return cljs.core.equiv_map.call(null,this__17465__auto____$1,other__17466__auto__);
} else {
return and__16843__auto____$1;
}
} else {
return and__16843__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17478__auto__,k__17479__auto__){
var self__ = this;
var this__17478__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),null,new cljs.core.Keyword(null,"p?","p?",-1172161701),null], null), null),k__17479__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17478__auto____$1),self__.__meta),k__17479__auto__);
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17479__auto__)),null));
}
});

schema.core.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17476__auto__,k__17477__auto__,G__20719){
var self__ = this;
var this__17476__auto____$1 = this;
var pred__20723 = cljs.core.keyword_identical_QMARK_;
var expr__20724 = k__17477__auto__;
if(cljs.core.truth_(pred__20723.call(null,new cljs.core.Keyword(null,"p?","p?",-1172161701),expr__20724))){
return (new schema.core.Predicate(G__20719,self__.pred_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20723.call(null,new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),expr__20724))){
return (new schema.core.Predicate(self__.p_QMARK_,G__20719,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17477__auto__,G__20719),null));
}
}
});

schema.core.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17481__auto__){
var self__ = this;
var this__17481__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p?","p?",-1172161701),self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),self__.pred_name],null))], null),self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17468__auto__,G__20719){
var self__ = this;
var this__17468__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,G__20719,self__.__extmap,self__.__hash));
});

schema.core.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17474__auto__,entry__17475__auto__){
var self__ = this;
var this__17474__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17475__auto__)){
return cljs.core._assoc.call(null,this__17474__auto____$1,cljs.core._nth.call(null,entry__17475__auto__,(0)),cljs.core._nth.call(null,entry__17475__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17474__auto____$1,entry__17475__auto__);
}
});

schema.core.Predicate.prototype.schema$core$Schema$ = true;

schema.core.Predicate.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,self__.p_QMARK_,((function (this$__$1){
return (function (p1__20718_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__20718_SHARP_),self__.pred_name);
});})(this$__$1))
));
});

schema.core.Predicate.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.call(null,self__.p_QMARK_,cljs.core.integer_QMARK_)){
return new cljs.core.Symbol(null,"Int","Int",-2116888740,null);
} else {
if(cljs.core._EQ_.call(null,self__.p_QMARK_,cljs.core.keyword_QMARK_)){
return new cljs.core.Symbol(null,"Keyword","Keyword",-850065993,null);
} else {
if(cljs.core._EQ_.call(null,self__.p_QMARK_,cljs.core.symbol_QMARK_)){
return new cljs.core.Symbol(null,"Symbol","Symbol",716452869,null);
} else {
if(cljs.core._EQ_.call(null,self__.p_QMARK_,cljs.core.string_QMARK_)){
return new cljs.core.Symbol(null,"Str","Str",907970895,null);
} else {
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.pred_name),new cljs.core.Symbol(null,"pred","pred",-727012372,null));

}
}
}
}
});

schema.core.Predicate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p?","p?",468369826,null),new cljs.core.Symbol(null,"pred-name","pred-name",1636854076,null)], null);
});

schema.core.Predicate.cljs$lang$type = true;

schema.core.Predicate.cljs$lang$ctorPrSeq = (function (this__17503__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Predicate");
});

schema.core.Predicate.cljs$lang$ctorPrWriter = (function (this__17503__auto__,writer__17504__auto__){
return cljs.core._write.call(null,writer__17504__auto__,"schema.core/Predicate");
});

schema.core.__GT_Predicate = (function schema$core$__GT_Predicate(p_QMARK_,pred_name){
return (new schema.core.Predicate(p_QMARK_,pred_name,null,null,null));
});

schema.core.map__GT_Predicate = (function schema$core$map__GT_Predicate(G__20721){
return (new schema.core.Predicate(new cljs.core.Keyword(null,"p?","p?",-1172161701).cljs$core$IFn$_invoke$arity$1(G__20721),new cljs.core.Keyword(null,"pred-name","pred-name",-3677451).cljs$core$IFn$_invoke$arity$1(G__20721),null,cljs.core.dissoc.call(null,G__20721,new cljs.core.Keyword(null,"p?","p?",-1172161701),new cljs.core.Keyword(null,"pred-name","pred-name",-3677451)),null));
});

/**
 * A value for which p? returns true (and does not throw).
 * Optional pred-name can be passed for nicer validation errors.
 */
schema.core.pred = (function schema$core$pred(var_args){
var args20727 = [];
var len__17913__auto___20730 = arguments.length;
var i__17914__auto___20731 = (0);
while(true){
if((i__17914__auto___20731 < len__17913__auto___20730)){
args20727.push((arguments[i__17914__auto___20731]));

var G__20732 = (i__17914__auto___20731 + (1));
i__17914__auto___20731 = G__20732;
continue;
} else {
}
break;
}

var G__20729 = args20727.length;
switch (G__20729) {
case 1:
return schema.core.pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema.core.pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20727.length)].join('')));

}
});

schema.core.pred.cljs$core$IFn$_invoke$arity$1 = (function (p_QMARK_){
return schema.core.pred.call(null,p_QMARK_,cljs.core.symbol.call(null,schema.utils.fn_name.call(null,p_QMARK_)));
});

schema.core.pred.cljs$core$IFn$_invoke$arity$2 = (function (p_QMARK_,pred_name){
if(cljs.core.ifn_QMARK_.call(null,p_QMARK_)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Not a function: %s",p_QMARK_)));
}

return (new schema.core.Predicate(p_QMARK_,pred_name,null,null,null));
});

schema.core.pred.cljs$lang$maxFixedArity = 2;
schema.core.protocol_name = (function schema$core$protocol_name(protocol){
return new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,protocol));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Protocol = (function (p,__meta,__extmap,__hash){
this.p = p;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17469__auto__,k__17470__auto__){
var self__ = this;
var this__17469__auto____$1 = this;
return cljs.core._lookup.call(null,this__17469__auto____$1,k__17470__auto__,null);
});

schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17471__auto__,k20737,else__17472__auto__){
var self__ = this;
var this__17471__auto____$1 = this;
var G__20739 = (((k20737 instanceof cljs.core.Keyword))?k20737.fqn:null);
switch (G__20739) {
case "p":
return self__.p;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20737,else__17472__auto__);

}
});

schema.core.Protocol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17483__auto__,writer__17484__auto__,opts__17485__auto__){
var self__ = this;
var this__17483__auto____$1 = this;
var pr_pair__17486__auto__ = ((function (this__17483__auto____$1){
return (function (keyval__17487__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17484__auto__,cljs.core.pr_writer,""," ","",opts__17485__auto__,keyval__17487__auto__);
});})(this__17483__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17484__auto__,pr_pair__17486__auto__,"#schema.core.Protocol{",", ","}",opts__17485__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null))], null),self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IIterable$ = true;

schema.core.Protocol.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20736){
var self__ = this;
var G__20736__$1 = this;
return (new cljs.core.RecordIter((0),G__20736__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Protocol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17467__auto__){
var self__ = this;
var this__17467__auto____$1 = this;
return self__.__meta;
});

schema.core.Protocol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17463__auto__){
var self__ = this;
var this__17463__auto____$1 = this;
return (new schema.core.Protocol(self__.p,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Protocol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17473__auto__){
var self__ = this;
var this__17473__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17464__auto__){
var self__ = this;
var this__17464__auto____$1 = this;
var h__17290__auto__ = self__.__hash;
if(!((h__17290__auto__ == null))){
return h__17290__auto__;
} else {
var h__17290__auto____$1 = cljs.core.hash_imap.call(null,this__17464__auto____$1);
self__.__hash = h__17290__auto____$1;

return h__17290__auto____$1;
}
});

schema.core.Protocol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17465__auto__,other__17466__auto__){
var self__ = this;
var this__17465__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16843__auto__ = other__17466__auto__;
if(cljs.core.truth_(and__16843__auto__)){
var and__16843__auto____$1 = (this__17465__auto____$1.constructor === other__17466__auto__.constructor);
if(and__16843__auto____$1){
return cljs.core.equiv_map.call(null,this__17465__auto____$1,other__17466__auto__);
} else {
return and__16843__auto____$1;
}
} else {
return and__16843__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Protocol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17478__auto__,k__17479__auto__){
var self__ = this;
var this__17478__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"p","p",151049309),null], null), null),k__17479__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17478__auto____$1),self__.__meta),k__17479__auto__);
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17479__auto__)),null));
}
});

schema.core.Protocol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17476__auto__,k__17477__auto__,G__20736){
var self__ = this;
var this__17476__auto____$1 = this;
var pred__20740 = cljs.core.keyword_identical_QMARK_;
var expr__20741 = k__17477__auto__;
if(cljs.core.truth_(pred__20740.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__20741))){
return (new schema.core.Protocol(G__20736,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17477__auto__,G__20736),null));
}
});

schema.core.Protocol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17481__auto__){
var self__ = this;
var this__17481__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null))], null),self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17468__auto__,G__20736){
var self__ = this;
var this__17468__auto____$1 = this;
return (new schema.core.Protocol(self__.p,G__20736,self__.__extmap,self__.__hash));
});

schema.core.Protocol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17474__auto__,entry__17475__auto__){
var self__ = this;
var this__17474__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17475__auto__)){
return cljs.core._assoc.call(null,this__17474__auto____$1,cljs.core._nth.call(null,entry__17475__auto__,(0)),cljs.core._nth.call(null,entry__17475__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17474__auto____$1,entry__17475__auto__);
}
});

schema.core.Protocol.prototype.schema$core$Schema$ = true;

schema.core.Protocol.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,((function (this$__$1){
return (function (p1__20734_SHARP_){
return new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,this$__$1)).call(null,p1__20734_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__20735_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__20735_SHARP_),schema.core.protocol_name.call(null,this$__$1)),new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null));
});})(this$__$1))
));
});

schema.core.Protocol.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.protocol_name.call(null,this$__$1)),new cljs.core.Symbol(null,"protocol","protocol",-2001965651,null));
});

schema.core.Protocol.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null);
});

schema.core.Protocol.cljs$lang$type = true;

schema.core.Protocol.cljs$lang$ctorPrSeq = (function (this__17503__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Protocol");
});

schema.core.Protocol.cljs$lang$ctorPrWriter = (function (this__17503__auto__,writer__17504__auto__){
return cljs.core._write.call(null,writer__17504__auto__,"schema.core/Protocol");
});

schema.core.__GT_Protocol = (function schema$core$__GT_Protocol(p){
return (new schema.core.Protocol(p,null,null,null));
});

schema.core.map__GT_Protocol = (function schema$core$map__GT_Protocol(G__20738){
return (new schema.core.Protocol(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__20738),null,cljs.core.dissoc.call(null,G__20738,new cljs.core.Keyword(null,"p","p",151049309)),null));
});

RegExp.prototype.schema$core$Schema$ = true;

RegExp.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,cljs.core.some_fn.call(null,schema.spec.core.precondition.call(null,this$__$1,cljs.core.string_QMARK_,((function (this$__$1){
return (function (p1__19304__19305__auto__){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__19304__19305__auto__),new cljs.core.Symbol(null,"string?","string?",-1129175764,null));
});})(this$__$1))
),schema.spec.core.precondition.call(null,this$__$1,((function (this$__$1){
return (function (p1__20744_SHARP_){
return cljs.core.re_find.call(null,this$__$1,p1__20744_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__20745_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__20745_SHARP_),schema.core.explain.call(null,this$__$1)),new cljs.core.Symbol(null,"re-find","re-find",1143444147,null));
});})(this$__$1))
)));
});

RegExp.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.symbol.call(null,[cljs.core.str("#\""),cljs.core.str([cljs.core.str(this$__$1)].join('').slice((1),(-1))),cljs.core.str("\"")].join(''));
});
/**
 * Satisfied only by String.
 * Is (pred string?) and not js/String in cljs because of keywords.
 */
schema.core.Str = schema.core.pred.call(null,cljs.core.string_QMARK_);
/**
 * Boolean true or false
 */
schema.core.Bool = Boolean;
/**
 * Any number
 */
schema.core.Num = Number;
/**
 * Any integral number
 */
schema.core.Int = schema.core.pred.call(null,cljs.core.integer_QMARK_);
/**
 * A keyword
 */
schema.core.Keyword = schema.core.pred.call(null,cljs.core.keyword_QMARK_);
/**
 * A symbol
 */
schema.core.Symbol = schema.core.pred.call(null,cljs.core.symbol_QMARK_);
/**
 * A regular expression
 */
schema.core.Regex = (function (){
if(typeof schema.core.t_schema$core20748 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {schema.core.Schema}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
schema.core.t_schema$core20748 = (function (meta20749){
this.meta20749 = meta20749;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
schema.core.t_schema$core20748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20750,meta20749__$1){
var self__ = this;
var _20750__$1 = this;
return (new schema.core.t_schema$core20748(meta20749__$1));
});

schema.core.t_schema$core20748.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20750){
var self__ = this;
var _20750__$1 = this;
return self__.meta20749;
});

schema.core.t_schema$core20748.prototype.schema$core$Schema$ = true;

schema.core.t_schema$core20748.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,((function (this$__$1){
return (function (p1__20746_SHARP_){
return (p1__20746_SHARP_ instanceof RegExp);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__20747_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__20747_SHARP_),new cljs.core.Symbol("js","RegExp","js/RegExp",1778210562,null)),new cljs.core.Symbol(null,"instance?","instance?",1075939923,null));
});})(this$__$1))
));
});

schema.core.t_schema$core20748.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Symbol(null,"Regex","Regex",205914413,null);
});

schema.core.t_schema$core20748.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta20749","meta20749",538865603,null)], null);
});

schema.core.t_schema$core20748.cljs$lang$type = true;

schema.core.t_schema$core20748.cljs$lang$ctorStr = "schema.core/t_schema$core20748";

schema.core.t_schema$core20748.cljs$lang$ctorPrWriter = (function (this__17453__auto__,writer__17454__auto__,opt__17455__auto__){
return cljs.core._write.call(null,writer__17454__auto__,"schema.core/t_schema$core20748");
});

schema.core.__GT_t_schema$core20748 = (function schema$core$__GT_t_schema$core20748(meta20749){
return (new schema.core.t_schema$core20748(meta20749));
});

}

return (new schema.core.t_schema$core20748(cljs.core.PersistentArrayMap.EMPTY));
})()
;
/**
 * The local representation of #inst ...
 */
schema.core.Inst = Date;
/**
 * The local representation of #uuid ...
 */
schema.core.Uuid = cljs.core.UUID;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Maybe = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17469__auto__,k__17470__auto__){
var self__ = this;
var this__17469__auto____$1 = this;
return cljs.core._lookup.call(null,this__17469__auto____$1,k__17470__auto__,null);
});

schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17471__auto__,k20752,else__17472__auto__){
var self__ = this;
var this__17471__auto____$1 = this;
var G__20754 = (((k20752 instanceof cljs.core.Keyword))?k20752.fqn:null);
switch (G__20754) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20752,else__17472__auto__);

}
});

schema.core.Maybe.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17483__auto__,writer__17484__auto__,opts__17485__auto__){
var self__ = this;
var this__17483__auto____$1 = this;
var pr_pair__17486__auto__ = ((function (this__17483__auto____$1){
return (function (keyval__17487__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17484__auto__,cljs.core.pr_writer,""," ","",opts__17485__auto__,keyval__17487__auto__);
});})(this__17483__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17484__auto__,pr_pair__17486__auto__,"#schema.core.Maybe{",", ","}",opts__17485__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IIterable$ = true;

schema.core.Maybe.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20751){
var self__ = this;
var G__20751__$1 = this;
return (new cljs.core.RecordIter((0),G__20751__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Maybe.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17467__auto__){
var self__ = this;
var this__17467__auto____$1 = this;
return self__.__meta;
});

schema.core.Maybe.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17463__auto__){
var self__ = this;
var this__17463__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Maybe.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17473__auto__){
var self__ = this;
var this__17473__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17464__auto__){
var self__ = this;
var this__17464__auto____$1 = this;
var h__17290__auto__ = self__.__hash;
if(!((h__17290__auto__ == null))){
return h__17290__auto__;
} else {
var h__17290__auto____$1 = cljs.core.hash_imap.call(null,this__17464__auto____$1);
self__.__hash = h__17290__auto____$1;

return h__17290__auto____$1;
}
});

schema.core.Maybe.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17465__auto__,other__17466__auto__){
var self__ = this;
var this__17465__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16843__auto__ = other__17466__auto__;
if(cljs.core.truth_(and__16843__auto__)){
var and__16843__auto____$1 = (this__17465__auto____$1.constructor === other__17466__auto__.constructor);
if(and__16843__auto____$1){
return cljs.core.equiv_map.call(null,this__17465__auto____$1,other__17466__auto__);
} else {
return and__16843__auto____$1;
}
} else {
return and__16843__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Maybe.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17478__auto__,k__17479__auto__){
var self__ = this;
var this__17478__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null], null), null),k__17479__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17478__auto____$1),self__.__meta),k__17479__auto__);
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17479__auto__)),null));
}
});

schema.core.Maybe.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17476__auto__,k__17477__auto__,G__20751){
var self__ = this;
var this__17476__auto____$1 = this;
var pred__20755 = cljs.core.keyword_identical_QMARK_;
var expr__20756 = k__17477__auto__;
if(cljs.core.truth_(pred__20755.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__20756))){
return (new schema.core.Maybe(G__20751,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17477__auto__,G__20751),null));
}
});

schema.core.Maybe.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17481__auto__){
var self__ = this;
var this__17481__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17468__auto__,G__20751){
var self__ = this;
var this__17468__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,G__20751,self__.__extmap,self__.__hash));
});

schema.core.Maybe.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17474__auto__,entry__17475__auto__){
var self__ = this;
var this__17474__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17475__auto__)){
return cljs.core._assoc.call(null,this__17474__auto____$1,cljs.core._nth.call(null,entry__17475__auto__,(0)),cljs.core._nth.call(null,entry__17475__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17474__auto____$1,entry__17475__auto__);
}
});

schema.core.Maybe.prototype.schema$core$Schema$ = true;

schema.core.Maybe.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),cljs.core.nil_QMARK_,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema.core.eq.call(null,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema], null)], null));
});

schema.core.Maybe.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,self__.schema)),new cljs.core.Symbol(null,"maybe","maybe",1326133967,null));
});

schema.core.Maybe.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null)], null);
});

schema.core.Maybe.cljs$lang$type = true;

schema.core.Maybe.cljs$lang$ctorPrSeq = (function (this__17503__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Maybe");
});

schema.core.Maybe.cljs$lang$ctorPrWriter = (function (this__17503__auto__,writer__17504__auto__){
return cljs.core._write.call(null,writer__17504__auto__,"schema.core/Maybe");
});

schema.core.__GT_Maybe = (function schema$core$__GT_Maybe(schema__$1){
return (new schema.core.Maybe(schema__$1,null,null,null));
});

schema.core.map__GT_Maybe = (function schema$core$map__GT_Maybe(G__20753){
return (new schema.core.Maybe(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__20753),null,cljs.core.dissoc.call(null,G__20753,new cljs.core.Keyword(null,"schema","schema",-1582001791)),null));
});

/**
 * A value that must either be nil or satisfy schema
 */
schema.core.maybe = (function schema$core$maybe(schema__$1){
return (new schema.core.Maybe(schema__$1,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.NamedSchema = (function (schema,name,__meta,__extmap,__hash){
this.schema = schema;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17469__auto__,k__17470__auto__){
var self__ = this;
var this__17469__auto____$1 = this;
return cljs.core._lookup.call(null,this__17469__auto____$1,k__17470__auto__,null);
});

schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17471__auto__,k20761,else__17472__auto__){
var self__ = this;
var this__17471__auto____$1 = this;
var G__20763 = (((k20761 instanceof cljs.core.Keyword))?k20761.fqn:null);
switch (G__20763) {
case "schema":
return self__.schema;

break;
case "name":
return self__.name;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20761,else__17472__auto__);

}
});

schema.core.NamedSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17483__auto__,writer__17484__auto__,opts__17485__auto__){
var self__ = this;
var this__17483__auto____$1 = this;
var pr_pair__17486__auto__ = ((function (this__17483__auto____$1){
return (function (keyval__17487__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17484__auto__,cljs.core.pr_writer,""," ","",opts__17485__auto__,keyval__17487__auto__);
});})(this__17483__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17484__auto__,pr_pair__17486__auto__,"#schema.core.NamedSchema{",", ","}",opts__17485__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IIterable$ = true;

schema.core.NamedSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20760){
var self__ = this;
var G__20760__$1 = this;
return (new cljs.core.RecordIter((0),G__20760__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"name","name",1843675177)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.NamedSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17467__auto__){
var self__ = this;
var this__17467__auto____$1 = this;
return self__.__meta;
});

schema.core.NamedSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17463__auto__){
var self__ = this;
var this__17463__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.NamedSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17473__auto__){
var self__ = this;
var this__17473__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17464__auto__){
var self__ = this;
var this__17464__auto____$1 = this;
var h__17290__auto__ = self__.__hash;
if(!((h__17290__auto__ == null))){
return h__17290__auto__;
} else {
var h__17290__auto____$1 = cljs.core.hash_imap.call(null,this__17464__auto____$1);
self__.__hash = h__17290__auto____$1;

return h__17290__auto____$1;
}
});

schema.core.NamedSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17465__auto__,other__17466__auto__){
var self__ = this;
var this__17465__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16843__auto__ = other__17466__auto__;
if(cljs.core.truth_(and__16843__auto__)){
var and__16843__auto____$1 = (this__17465__auto____$1.constructor === other__17466__auto__.constructor);
if(and__16843__auto____$1){
return cljs.core.equiv_map.call(null,this__17465__auto____$1,other__17466__auto__);
} else {
return and__16843__auto____$1;
}
} else {
return and__16843__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.NamedSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17478__auto__,k__17479__auto__){
var self__ = this;
var this__17478__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__17479__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17478__auto____$1),self__.__meta),k__17479__auto__);
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17479__auto__)),null));
}
});

schema.core.NamedSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17476__auto__,k__17477__auto__,G__20760){
var self__ = this;
var this__17476__auto____$1 = this;
var pred__20764 = cljs.core.keyword_identical_QMARK_;
var expr__20765 = k__17477__auto__;
if(cljs.core.truth_(pred__20764.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__20765))){
return (new schema.core.NamedSchema(G__20760,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20764.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__20765))){
return (new schema.core.NamedSchema(self__.schema,G__20760,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17477__auto__,G__20760),null));
}
}
});

schema.core.NamedSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17481__auto__){
var self__ = this;
var this__17481__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17468__auto__,G__20760){
var self__ = this;
var this__17468__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,G__20760,self__.__extmap,self__.__hash));
});

schema.core.NamedSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17474__auto__,entry__17475__auto__){
var self__ = this;
var this__17474__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17475__auto__)){
return cljs.core._assoc.call(null,this__17474__auto____$1,cljs.core._nth.call(null,entry__17475__auto__,(0)),cljs.core._nth.call(null,entry__17475__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17474__auto____$1,entry__17475__auto__);
}
});

schema.core.NamedSchema.prototype.schema$core$Schema$ = true;

schema.core.NamedSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema,new cljs.core.Keyword(null,"wrap-error","wrap-error",536732809),((function (this$__$1){
return (function (p1__20759_SHARP_){
return schema.utils.__GT_NamedError.call(null,self__.name,p1__20759_SHARP_);
});})(this$__$1))
], null)], null));
});

schema.core.NamedSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.name),schema.core.explain.call(null,self__.schema)),new cljs.core.Symbol(null,"named","named",1218138048,null));
});

schema.core.NamedSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"name","name",-810760592,null)], null);
});

schema.core.NamedSchema.cljs$lang$type = true;

schema.core.NamedSchema.cljs$lang$ctorPrSeq = (function (this__17503__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/NamedSchema");
});

schema.core.NamedSchema.cljs$lang$ctorPrWriter = (function (this__17503__auto__,writer__17504__auto__){
return cljs.core._write.call(null,writer__17504__auto__,"schema.core/NamedSchema");
});

schema.core.__GT_NamedSchema = (function schema$core$__GT_NamedSchema(schema__$1,name){
return (new schema.core.NamedSchema(schema__$1,name,null,null,null));
});

schema.core.map__GT_NamedSchema = (function schema$core$map__GT_NamedSchema(G__20762){
return (new schema.core.NamedSchema(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__20762),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__20762),null,cljs.core.dissoc.call(null,G__20762,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"name","name",1843675177)),null));
});

/**
 * A value that must satisfy schema, and has a name for documentation purposes.
 */
schema.core.named = (function schema$core$named(schema__$1,name){
return (new schema.core.NamedSchema(schema__$1,name,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Either = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17469__auto__,k__17470__auto__){
var self__ = this;
var this__17469__auto____$1 = this;
return cljs.core._lookup.call(null,this__17469__auto____$1,k__17470__auto__,null);
});

schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17471__auto__,k20770,else__17472__auto__){
var self__ = this;
var this__17471__auto____$1 = this;
var G__20772 = (((k20770 instanceof cljs.core.Keyword))?k20770.fqn:null);
switch (G__20772) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20770,else__17472__auto__);

}
});

schema.core.Either.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17483__auto__,writer__17484__auto__,opts__17485__auto__){
var self__ = this;
var this__17483__auto____$1 = this;
var pr_pair__17486__auto__ = ((function (this__17483__auto____$1){
return (function (keyval__17487__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17484__auto__,cljs.core.pr_writer,""," ","",opts__17485__auto__,keyval__17487__auto__);
});})(this__17483__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17484__auto__,pr_pair__17486__auto__,"#schema.core.Either{",", ","}",opts__17485__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IIterable$ = true;

schema.core.Either.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20769){
var self__ = this;
var G__20769__$1 = this;
return (new cljs.core.RecordIter((0),G__20769__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schemas","schemas",575070579)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Either.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17467__auto__){
var self__ = this;
var this__17467__auto____$1 = this;
return self__.__meta;
});

schema.core.Either.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17463__auto__){
var self__ = this;
var this__17463__auto____$1 = this;
return (new schema.core.Either(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Either.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17473__auto__){
var self__ = this;
var this__17473__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17464__auto__){
var self__ = this;
var this__17464__auto____$1 = this;
var h__17290__auto__ = self__.__hash;
if(!((h__17290__auto__ == null))){
return h__17290__auto__;
} else {
var h__17290__auto____$1 = cljs.core.hash_imap.call(null,this__17464__auto____$1);
self__.__hash = h__17290__auto____$1;

return h__17290__auto____$1;
}
});

schema.core.Either.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17465__auto__,other__17466__auto__){
var self__ = this;
var this__17465__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16843__auto__ = other__17466__auto__;
if(cljs.core.truth_(and__16843__auto__)){
var and__16843__auto____$1 = (this__17465__auto____$1.constructor === other__17466__auto__.constructor);
if(and__16843__auto____$1){
return cljs.core.equiv_map.call(null,this__17465__auto____$1,other__17466__auto__);
} else {
return and__16843__auto____$1;
}
} else {
return and__16843__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Either.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17478__auto__,k__17479__auto__){
var self__ = this;
var this__17478__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schemas","schemas",575070579),null], null), null),k__17479__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17478__auto____$1),self__.__meta),k__17479__auto__);
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17479__auto__)),null));
}
});

schema.core.Either.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17476__auto__,k__17477__auto__,G__20769){
var self__ = this;
var this__17476__auto____$1 = this;
var pred__20773 = cljs.core.keyword_identical_QMARK_;
var expr__20774 = k__17477__auto__;
if(cljs.core.truth_(pred__20773.call(null,new cljs.core.Keyword(null,"schemas","schemas",575070579),expr__20774))){
return (new schema.core.Either(G__20769,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17477__auto__,G__20769),null));
}
});

schema.core.Either.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17481__auto__){
var self__ = this;
var this__17481__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17468__auto__,G__20769){
var self__ = this;
var this__17468__auto____$1 = this;
return (new schema.core.Either(self__.schemas,G__20769,self__.__extmap,self__.__hash));
});

schema.core.Either.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17474__auto__,entry__17475__auto__){
var self__ = this;
var this__17474__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17475__auto__)){
return cljs.core._assoc.call(null,this__17474__auto____$1,cljs.core._nth.call(null,entry__17475__auto__,(0)),cljs.core._nth.call(null,entry__17475__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17474__auto____$1,entry__17475__auto__);
}
});

schema.core.Either.prototype.schema$core$Schema$ = true;

schema.core.Either.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__17627__auto__ = ((function (this$__$1){
return (function schema$core$iter__20776(s__20777){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__20777__$1 = s__20777;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__20777__$1);
if(temp__4425__auto__){
var s__20777__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20777__$2)){
var c__17625__auto__ = cljs.core.chunk_first.call(null,s__20777__$2);
var size__17626__auto__ = cljs.core.count.call(null,c__17625__auto__);
var b__20779 = cljs.core.chunk_buffer.call(null,size__17626__auto__);
if((function (){var i__20778 = (0);
while(true){
if((i__20778 < size__17626__auto__)){
var s = cljs.core._nth.call(null,c__17625__auto__,i__20778);
cljs.core.chunk_append.call(null,b__20779,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),cljs.core.complement.call(null,schema.core.checker.call(null,s)),new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null));

var G__20781 = (i__20778 + (1));
i__20778 = G__20781;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20779),schema$core$iter__20776.call(null,cljs.core.chunk_rest.call(null,s__20777__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20779),null);
}
} else {
var s = cljs.core.first.call(null,s__20777__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),cljs.core.complement.call(null,schema.core.checker.call(null,s)),new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null),schema$core$iter__20776.call(null,cljs.core.rest.call(null,s__20777__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__17627__auto__.call(null,self__.schemas);
})(),((function (this$__$1){
return (function (p1__20768_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__20768_SHARP_),new cljs.core.Symbol(null,"some-matching-either-clause?","some-matching-either-clause?",-1443305015,null));
});})(this$__$1))
);
});

schema.core.Either.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol(null,"either","either",-2144373018,null),cljs.core.map.call(null,schema.core.explain,self__.schemas));
});

schema.core.Either.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null)], null);
});

schema.core.Either.cljs$lang$type = true;

schema.core.Either.cljs$lang$ctorPrSeq = (function (this__17503__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Either");
});

schema.core.Either.cljs$lang$ctorPrWriter = (function (this__17503__auto__,writer__17504__auto__){
return cljs.core._write.call(null,writer__17504__auto__,"schema.core/Either");
});

schema.core.__GT_Either = (function schema$core$__GT_Either(schemas){
return (new schema.core.Either(schemas,null,null,null));
});

schema.core.map__GT_Either = (function schema$core$map__GT_Either(G__20771){
return (new schema.core.Either(new cljs.core.Keyword(null,"schemas","schemas",575070579).cljs$core$IFn$_invoke$arity$1(G__20771),null,cljs.core.dissoc.call(null,G__20771,new cljs.core.Keyword(null,"schemas","schemas",575070579)),null));
});

/**
 * A value that must satisfy at least one schema in schemas.
 * Note that `either` does not work properly with coercion
 * 
 * DEPRECATED: prefer `conditional` or `cond-pre`
 * 
 * WARNING: either does not work with coercion.  It is also slow and gives
 * bad error messages.  Please consider using `conditional` and friends
 * instead; they are more efficient, provide better error messages,
 * and work with coercion.
 */
schema.core.either = (function schema$core$either(var_args){
var args__17920__auto__ = [];
var len__17913__auto___20783 = arguments.length;
var i__17914__auto___20784 = (0);
while(true){
if((i__17914__auto___20784 < len__17913__auto___20783)){
args__17920__auto__.push((arguments[i__17914__auto___20784]));

var G__20785 = (i__17914__auto___20784 + (1));
i__17914__auto___20784 = G__20785;
continue;
} else {
}
break;
}

var argseq__17921__auto__ = ((((0) < args__17920__auto__.length))?(new cljs.core.IndexedSeq(args__17920__auto__.slice((0)),(0))):null);
return schema.core.either.cljs$core$IFn$_invoke$arity$variadic(argseq__17921__auto__);
});

schema.core.either.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.Either(schemas,null,null,null));
});

schema.core.either.cljs$lang$maxFixedArity = (0);

schema.core.either.cljs$lang$applyTo = (function (seq20782){
return schema.core.either.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20782));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.ConditionalSchema = (function (preds_and_schemas,error_symbol,__meta,__extmap,__hash){
this.preds_and_schemas = preds_and_schemas;
this.error_symbol = error_symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17469__auto__,k__17470__auto__){
var self__ = this;
var this__17469__auto____$1 = this;
return cljs.core._lookup.call(null,this__17469__auto____$1,k__17470__auto__,null);
});

schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17471__auto__,k20788,else__17472__auto__){
var self__ = this;
var this__17471__auto____$1 = this;
var G__20790 = (((k20788 instanceof cljs.core.Keyword))?k20788.fqn:null);
switch (G__20790) {
case "preds-and-schemas":
return self__.preds_and_schemas;

break;
case "error-symbol":
return self__.error_symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20788,else__17472__auto__);

}
});

schema.core.ConditionalSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17483__auto__,writer__17484__auto__,opts__17485__auto__){
var self__ = this;
var this__17483__auto____$1 = this;
var pr_pair__17486__auto__ = ((function (this__17483__auto____$1){
return (function (keyval__17487__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17484__auto__,cljs.core.pr_writer,""," ","",opts__17485__auto__,keyval__17487__auto__);
});})(this__17483__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17484__auto__,pr_pair__17486__auto__,"#schema.core.ConditionalSchema{",", ","}",opts__17485__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),self__.preds_and_schemas],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428),self__.error_symbol],null))], null),self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IIterable$ = true;

schema.core.ConditionalSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20787){
var self__ = this;
var G__20787__$1 = this;
return (new cljs.core.RecordIter((0),G__20787__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.ConditionalSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17467__auto__){
var self__ = this;
var this__17467__auto____$1 = this;
return self__.__meta;
});

schema.core.ConditionalSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17463__auto__){
var self__ = this;
var this__17463__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.ConditionalSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17473__auto__){
var self__ = this;
var this__17473__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17464__auto__){
var self__ = this;
var this__17464__auto____$1 = this;
var h__17290__auto__ = self__.__hash;
if(!((h__17290__auto__ == null))){
return h__17290__auto__;
} else {
var h__17290__auto____$1 = cljs.core.hash_imap.call(null,this__17464__auto____$1);
self__.__hash = h__17290__auto____$1;

return h__17290__auto____$1;
}
});

schema.core.ConditionalSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17465__auto__,other__17466__auto__){
var self__ = this;
var this__17465__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16843__auto__ = other__17466__auto__;
if(cljs.core.truth_(and__16843__auto__)){
var and__16843__auto____$1 = (this__17465__auto____$1.constructor === other__17466__auto__.constructor);
if(and__16843__auto____$1){
return cljs.core.equiv_map.call(null,this__17465__auto____$1,other__17466__auto__);
} else {
return and__16843__auto____$1;
}
} else {
return and__16843__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.ConditionalSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17478__auto__,k__17479__auto__){
var self__ = this;
var this__17478__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),null,new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428),null], null), null),k__17479__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17478__auto____$1),self__.__meta),k__17479__auto__);
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17479__auto__)),null));
}
});

schema.core.ConditionalSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17476__auto__,k__17477__auto__,G__20787){
var self__ = this;
var this__17476__auto____$1 = this;
var pred__20791 = cljs.core.keyword_identical_QMARK_;
var expr__20792 = k__17477__auto__;
if(cljs.core.truth_(pred__20791.call(null,new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),expr__20792))){
return (new schema.core.ConditionalSchema(G__20787,self__.error_symbol,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20791.call(null,new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428),expr__20792))){
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,G__20787,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17477__auto__,G__20787),null));
}
}
});

schema.core.ConditionalSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17481__auto__){
var self__ = this;
var this__17481__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),self__.preds_and_schemas],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428),self__.error_symbol],null))], null),self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17468__auto__,G__20787){
var self__ = this;
var this__17468__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,G__20787,self__.__extmap,self__.__hash));
});

schema.core.ConditionalSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17474__auto__,entry__17475__auto__){
var self__ = this;
var this__17474__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17475__auto__)){
return cljs.core._assoc.call(null,this__17474__auto____$1,cljs.core._nth.call(null,entry__17475__auto__,(0)),cljs.core._nth.call(null,entry__17475__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17474__auto____$1,entry__17475__auto__);
}
});

schema.core.ConditionalSchema.prototype.schema$core$Schema$ = true;

schema.core.ConditionalSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__17627__auto__ = ((function (this$__$1){
return (function schema$core$iter__20794(s__20795){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__20795__$1 = s__20795;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__20795__$1);
if(temp__4425__auto__){
var s__20795__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20795__$2)){
var c__17625__auto__ = cljs.core.chunk_first.call(null,s__20795__$2);
var size__17626__auto__ = cljs.core.count.call(null,c__17625__auto__);
var b__20797 = cljs.core.chunk_buffer.call(null,size__17626__auto__);
if((function (){var i__20796 = (0);
while(true){
if((i__20796 < size__17626__auto__)){
var vec__20800 = cljs.core._nth.call(null,c__17625__auto__,i__20796);
var p = cljs.core.nth.call(null,vec__20800,(0),null);
var s = cljs.core.nth.call(null,vec__20800,(1),null);
cljs.core.chunk_append.call(null,b__20797,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),p,new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null));

var G__20805 = (i__20796 + (1));
i__20796 = G__20805;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20797),schema$core$iter__20794.call(null,cljs.core.chunk_rest.call(null,s__20795__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20797),null);
}
} else {
var vec__20801 = cljs.core.first.call(null,s__20795__$2);
var p = cljs.core.nth.call(null,vec__20801,(0),null);
var s = cljs.core.nth.call(null,vec__20801,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),p,new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null),schema$core$iter__20794.call(null,cljs.core.rest.call(null,s__20795__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__17627__auto__.call(null,self__.preds_and_schemas);
})(),((function (this$__$1){
return (function (p1__20786_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__20786_SHARP_),(function (){var or__16855__auto__ = self__.error_symbol;
if(cljs.core.truth_(or__16855__auto__)){
return or__16855__auto__;
} else {
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,self__.preds_and_schemas))){
return cljs.core.symbol.call(null,schema.utils.fn_name.call(null,cljs.core.ffirst.call(null,self__.preds_and_schemas)));
} else {
return new cljs.core.Symbol(null,"some-matching-condition?","some-matching-condition?",1512398506,null);
}
}
})());
});})(this$__$1))
);
});

schema.core.ConditionalSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol(null,"conditional","conditional",-1212542970,null),cljs.core.concat.call(null,cljs.core.mapcat.call(null,((function (this$__$1){
return (function (p__20802){
var vec__20803 = p__20802;
var pred = cljs.core.nth.call(null,vec__20803,(0),null);
var schema__$1 = cljs.core.nth.call(null,vec__20803,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,schema.utils.fn_name.call(null,pred)),schema.core.explain.call(null,schema__$1)], null);
});})(this$__$1))
,self__.preds_and_schemas),(cljs.core.truth_(self__.error_symbol)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.error_symbol], null):null)));
});

schema.core.ConditionalSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"preds-and-schemas","preds-and-schemas",333765172,null),new cljs.core.Symbol(null,"error-symbol","error-symbol",817051099,null)], null);
});

schema.core.ConditionalSchema.cljs$lang$type = true;

schema.core.ConditionalSchema.cljs$lang$ctorPrSeq = (function (this__17503__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/ConditionalSchema");
});

schema.core.ConditionalSchema.cljs$lang$ctorPrWriter = (function (this__17503__auto__,writer__17504__auto__){
return cljs.core._write.call(null,writer__17504__auto__,"schema.core/ConditionalSchema");
});

schema.core.__GT_ConditionalSchema = (function schema$core$__GT_ConditionalSchema(preds_and_schemas,error_symbol){
return (new schema.core.ConditionalSchema(preds_and_schemas,error_symbol,null,null,null));
});

schema.core.map__GT_ConditionalSchema = (function schema$core$map__GT_ConditionalSchema(G__20789){
return (new schema.core.ConditionalSchema(new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355).cljs$core$IFn$_invoke$arity$1(G__20789),new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428).cljs$core$IFn$_invoke$arity$1(G__20789),null,cljs.core.dissoc.call(null,G__20789,new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428)),null));
});

/**
 * Define a conditional schema.  Takes args like cond,
 * (conditional pred1 schema1 pred2 schema2 ...),
 * and checks the first schema where pred is true on the value.
 * Unlike cond, throws if the value does not match any condition.
 * :else may be used as a final condition in the place of (constantly true).
 * More efficient than either, since only one schema must be checked.
 * An optional final argument can be passed, a symbol to appear in
 * error messages when none of the conditions match.
 */
schema.core.conditional = (function schema$core$conditional(var_args){
var args__17920__auto__ = [];
var len__17913__auto___20815 = arguments.length;
var i__17914__auto___20816 = (0);
while(true){
if((i__17914__auto___20816 < len__17913__auto___20815)){
args__17920__auto__.push((arguments[i__17914__auto___20816]));

var G__20817 = (i__17914__auto___20816 + (1));
i__17914__auto___20816 = G__20817;
continue;
} else {
}
break;
}

var argseq__17921__auto__ = ((((0) < args__17920__auto__.length))?(new cljs.core.IndexedSeq(args__17920__auto__.slice((0)),(0))):null);
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(argseq__17921__auto__);
});

schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic = (function (preds_and_schemas){
if((cljs.core.seq.call(null,preds_and_schemas)) && ((cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,preds_and_schemas))) || ((cljs.core.last.call(null,preds_and_schemas) instanceof cljs.core.Symbol)))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Expected even, nonzero number of args (with optional trailing symbol); got %s",cljs.core.count.call(null,preds_and_schemas))));
}

return (new schema.core.ConditionalSchema((function (){var iter__17627__auto__ = (function schema$core$iter__20807(s__20808){
return (new cljs.core.LazySeq(null,(function (){
var s__20808__$1 = s__20808;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__20808__$1);
if(temp__4425__auto__){
var s__20808__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20808__$2)){
var c__17625__auto__ = cljs.core.chunk_first.call(null,s__20808__$2);
var size__17626__auto__ = cljs.core.count.call(null,c__17625__auto__);
var b__20810 = cljs.core.chunk_buffer.call(null,size__17626__auto__);
if((function (){var i__20809 = (0);
while(true){
if((i__20809 < size__17626__auto__)){
var vec__20813 = cljs.core._nth.call(null,c__17625__auto__,i__20809);
var pred = cljs.core.nth.call(null,vec__20813,(0),null);
var schema__$1 = cljs.core.nth.call(null,vec__20813,(1),null);
cljs.core.chunk_append.call(null,b__20810,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,pred,new cljs.core.Keyword(null,"else","else",-1508377146)))?cljs.core.constantly.call(null,true):pred),schema__$1], null));

var G__20818 = (i__20809 + (1));
i__20809 = G__20818;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20810),schema$core$iter__20807.call(null,cljs.core.chunk_rest.call(null,s__20808__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20810),null);
}
} else {
var vec__20814 = cljs.core.first.call(null,s__20808__$2);
var pred = cljs.core.nth.call(null,vec__20814,(0),null);
var schema__$1 = cljs.core.nth.call(null,vec__20814,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,pred,new cljs.core.Keyword(null,"else","else",-1508377146)))?cljs.core.constantly.call(null,true):pred),schema__$1], null),schema$core$iter__20807.call(null,cljs.core.rest.call(null,s__20808__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17627__auto__.call(null,cljs.core.partition.call(null,(2),preds_and_schemas));
})(),((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,preds_and_schemas)))?cljs.core.last.call(null,preds_and_schemas):null),null,null,null));
});

schema.core.conditional.cljs$lang$maxFixedArity = (0);

schema.core.conditional.cljs$lang$applyTo = (function (seq20806){
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20806));
});

/**
 * @interface
 */
schema.core.HasPrecondition = function(){};

/**
 * Return a predicate representing the Precondition for this schema:
 *   the predicate returns true if the precondition is satisfied.
 *   (See spec.core for more details)
 */
schema.core.precondition = (function schema$core$precondition(this$){
if((!((this$ == null))) && (!((this$.schema$core$HasPrecondition$precondition$arity$1 == null)))){
return this$.schema$core$HasPrecondition$precondition$arity$1(this$);
} else {
var x__17510__auto__ = (((this$ == null))?null:this$);
var m__17511__auto__ = (schema.core.precondition[goog.typeOf(x__17510__auto__)]);
if(!((m__17511__auto__ == null))){
return m__17511__auto__.call(null,this$);
} else {
var m__17511__auto____$1 = (schema.core.precondition["_"]);
if(!((m__17511__auto____$1 == null))){
return m__17511__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"HasPrecondition.precondition",this$);
}
}
}
});

schema.spec.leaf.LeafSpec.prototype.schema$core$HasPrecondition$ = true;

schema.spec.leaf.LeafSpec.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.complement.call(null,this$__$1.pre);
});

schema.spec.variant.VariantSpec.prototype.schema$core$HasPrecondition$ = true;

schema.spec.variant.VariantSpec.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.every_pred.call(null,cljs.core.complement.call(null,this$__$1.pre),cljs.core.apply.call(null,cljs.core.some_fn,(function (){var iter__17627__auto__ = ((function (this$__$1){
return (function schema$core$iter__20819(s__20820){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__20820__$1 = s__20820;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__20820__$1);
if(temp__4425__auto__){
var s__20820__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20820__$2)){
var c__17625__auto__ = cljs.core.chunk_first.call(null,s__20820__$2);
var size__17626__auto__ = cljs.core.count.call(null,c__17625__auto__);
var b__20822 = cljs.core.chunk_buffer.call(null,size__17626__auto__);
if((function (){var i__20821 = (0);
while(true){
if((i__20821 < size__17626__auto__)){
var map__20827 = cljs.core._nth.call(null,c__17625__auto__,i__20821);
var map__20827__$1 = ((((!((map__20827 == null)))?((((map__20827.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20827.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20827):map__20827);
var guard = cljs.core.get.call(null,map__20827__$1,new cljs.core.Keyword(null,"guard","guard",-873147811));
var schema__$1 = cljs.core.get.call(null,map__20827__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
cljs.core.chunk_append.call(null,b__20822,(cljs.core.truth_(guard)?cljs.core.every_pred.call(null,guard,schema.core.precondition.call(null,schema.core.spec.call(null,schema__$1))):schema.core.precondition.call(null,schema.core.spec.call(null,schema__$1))));

var G__20831 = (i__20821 + (1));
i__20821 = G__20831;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20822),schema$core$iter__20819.call(null,cljs.core.chunk_rest.call(null,s__20820__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20822),null);
}
} else {
var map__20829 = cljs.core.first.call(null,s__20820__$2);
var map__20829__$1 = ((((!((map__20829 == null)))?((((map__20829.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20829.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20829):map__20829);
var guard = cljs.core.get.call(null,map__20829__$1,new cljs.core.Keyword(null,"guard","guard",-873147811));
var schema__$1 = cljs.core.get.call(null,map__20829__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
return cljs.core.cons.call(null,(cljs.core.truth_(guard)?cljs.core.every_pred.call(null,guard,schema.core.precondition.call(null,schema.core.spec.call(null,schema__$1))):schema.core.precondition.call(null,schema.core.spec.call(null,schema__$1))),schema$core$iter__20819.call(null,cljs.core.rest.call(null,s__20820__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__17627__auto__.call(null,this$__$1.options);
})()));
});

schema.spec.collection.CollectionSpec.prototype.schema$core$HasPrecondition$ = true;

schema.spec.collection.CollectionSpec.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.complement.call(null,this$__$1.pre);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.CondPre = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.CondPre.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17469__auto__,k__17470__auto__){
var self__ = this;
var this__17469__auto____$1 = this;
return cljs.core._lookup.call(null,this__17469__auto____$1,k__17470__auto__,null);
});

schema.core.CondPre.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17471__auto__,k20834,else__17472__auto__){
var self__ = this;
var this__17471__auto____$1 = this;
var G__20836 = (((k20834 instanceof cljs.core.Keyword))?k20834.fqn:null);
switch (G__20836) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20834,else__17472__auto__);

}
});

schema.core.CondPre.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17483__auto__,writer__17484__auto__,opts__17485__auto__){
var self__ = this;
var this__17483__auto____$1 = this;
var pr_pair__17486__auto__ = ((function (this__17483__auto____$1){
return (function (keyval__17487__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17484__auto__,cljs.core.pr_writer,""," ","",opts__17485__auto__,keyval__17487__auto__);
});})(this__17483__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17484__auto__,pr_pair__17486__auto__,"#schema.core.CondPre{",", ","}",opts__17485__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});

schema.core.CondPre.prototype.cljs$core$IIterable$ = true;

schema.core.CondPre.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20833){
var self__ = this;
var G__20833__$1 = this;
return (new cljs.core.RecordIter((0),G__20833__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schemas","schemas",575070579)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.CondPre.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17467__auto__){
var self__ = this;
var this__17467__auto____$1 = this;
return self__.__meta;
});

schema.core.CondPre.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17463__auto__){
var self__ = this;
var this__17463__auto____$1 = this;
return (new schema.core.CondPre(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.CondPre.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17473__auto__){
var self__ = this;
var this__17473__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.CondPre.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17464__auto__){
var self__ = this;
var this__17464__auto____$1 = this;
var h__17290__auto__ = self__.__hash;
if(!((h__17290__auto__ == null))){
return h__17290__auto__;
} else {
var h__17290__auto____$1 = cljs.core.hash_imap.call(null,this__17464__auto____$1);
self__.__hash = h__17290__auto____$1;

return h__17290__auto____$1;
}
});

schema.core.CondPre.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17465__auto__,other__17466__auto__){
var self__ = this;
var this__17465__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16843__auto__ = other__17466__auto__;
if(cljs.core.truth_(and__16843__auto__)){
var and__16843__auto____$1 = (this__17465__auto____$1.constructor === other__17466__auto__.constructor);
if(and__16843__auto____$1){
return cljs.core.equiv_map.call(null,this__17465__auto____$1,other__17466__auto__);
} else {
return and__16843__auto____$1;
}
} else {
return and__16843__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.CondPre.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17478__auto__,k__17479__auto__){
var self__ = this;
var this__17478__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schemas","schemas",575070579),null], null), null),k__17479__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17478__auto____$1),self__.__meta),k__17479__auto__);
} else {
return (new schema.core.CondPre(self__.schemas,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17479__auto__)),null));
}
});

schema.core.CondPre.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17476__auto__,k__17477__auto__,G__20833){
var self__ = this;
var this__17476__auto____$1 = this;
var pred__20837 = cljs.core.keyword_identical_QMARK_;
var expr__20838 = k__17477__auto__;
if(cljs.core.truth_(pred__20837.call(null,new cljs.core.Keyword(null,"schemas","schemas",575070579),expr__20838))){
return (new schema.core.CondPre(G__20833,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.CondPre(self__.schemas,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17477__auto__,G__20833),null));
}
});

schema.core.CondPre.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17481__auto__){
var self__ = this;
var this__17481__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});

schema.core.CondPre.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17468__auto__,G__20833){
var self__ = this;
var this__17468__auto____$1 = this;
return (new schema.core.CondPre(self__.schemas,G__20833,self__.__extmap,self__.__hash));
});

schema.core.CondPre.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17474__auto__,entry__17475__auto__){
var self__ = this;
var this__17474__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17475__auto__)){
return cljs.core._assoc.call(null,this__17474__auto____$1,cljs.core._nth.call(null,entry__17475__auto__,(0)),cljs.core._nth.call(null,entry__17475__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17474__auto____$1,entry__17475__auto__);
}
});

schema.core.CondPre.prototype.schema$core$Schema$ = true;

schema.core.CondPre.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__17627__auto__ = ((function (this$__$1){
return (function schema$core$iter__20840(s__20841){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__20841__$1 = s__20841;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__20841__$1);
if(temp__4425__auto__){
var s__20841__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20841__$2)){
var c__17625__auto__ = cljs.core.chunk_first.call(null,s__20841__$2);
var size__17626__auto__ = cljs.core.count.call(null,c__17625__auto__);
var b__20843 = cljs.core.chunk_buffer.call(null,size__17626__auto__);
if((function (){var i__20842 = (0);
while(true){
if((i__20842 < size__17626__auto__)){
var s = cljs.core._nth.call(null,c__17625__auto__,i__20842);
cljs.core.chunk_append.call(null,b__20843,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),schema.core.precondition.call(null,schema.core.spec.call(null,s)),new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null));

var G__20845 = (i__20842 + (1));
i__20842 = G__20845;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20843),schema$core$iter__20840.call(null,cljs.core.chunk_rest.call(null,s__20841__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20843),null);
}
} else {
var s = cljs.core.first.call(null,s__20841__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),schema.core.precondition.call(null,schema.core.spec.call(null,s)),new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null),schema$core$iter__20840.call(null,cljs.core.rest.call(null,s__20841__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__17627__auto__.call(null,self__.schemas);
})(),((function (this$__$1){
return (function (p1__20832_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__20832_SHARP_),new cljs.core.Symbol(null,"matches-some-precondition?","matches-some-precondition?",2123072832,null));
});})(this$__$1))
);
});

schema.core.CondPre.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol(null,"cond-pre","cond-pre",-923707731,null),cljs.core.map.call(null,schema.core.explain,self__.schemas));
});

schema.core.CondPre.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null)], null);
});

schema.core.CondPre.cljs$lang$type = true;

schema.core.CondPre.cljs$lang$ctorPrSeq = (function (this__17503__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/CondPre");
});

schema.core.CondPre.cljs$lang$ctorPrWriter = (function (this__17503__auto__,writer__17504__auto__){
return cljs.core._write.call(null,writer__17504__auto__,"schema.core/CondPre");
});

schema.core.__GT_CondPre = (function schema$core$__GT_CondPre(schemas){
return (new schema.core.CondPre(schemas,null,null,null));
});

schema.core.map__GT_CondPre = (function schema$core$map__GT_CondPre(G__20835){
return (new schema.core.CondPre(new cljs.core.Keyword(null,"schemas","schemas",575070579).cljs$core$IFn$_invoke$arity$1(G__20835),null,cljs.core.dissoc.call(null,G__20835,new cljs.core.Keyword(null,"schemas","schemas",575070579)),null));
});

/**
 * A replacement for `either` that constructs a conditional schema
 * based on the schema spec preconditions of the component schemas.
 * 
 * EXPERIMENTAL
 */
schema.core.cond_pre = (function schema$core$cond_pre(var_args){
var args__17920__auto__ = [];
var len__17913__auto___20847 = arguments.length;
var i__17914__auto___20848 = (0);
while(true){
if((i__17914__auto___20848 < len__17913__auto___20847)){
args__17920__auto__.push((arguments[i__17914__auto___20848]));

var G__20849 = (i__17914__auto___20848 + (1));
i__17914__auto___20848 = G__20849;
continue;
} else {
}
break;
}

var argseq__17921__auto__ = ((((0) < args__17920__auto__.length))?(new cljs.core.IndexedSeq(args__17920__auto__.slice((0)),(0))):null);
return schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic(argseq__17921__auto__);
});

schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.CondPre(schemas,null,null,null));
});

schema.core.cond_pre.cljs$lang$maxFixedArity = (0);

schema.core.cond_pre.cljs$lang$applyTo = (function (seq20846){
return schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20846));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Constrained = (function (schema,postcondition,post_name,__meta,__extmap,__hash){
this.schema = schema;
this.postcondition = postcondition;
this.post_name = post_name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Constrained.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17469__auto__,k__17470__auto__){
var self__ = this;
var this__17469__auto____$1 = this;
return cljs.core._lookup.call(null,this__17469__auto____$1,k__17470__auto__,null);
});

schema.core.Constrained.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17471__auto__,k20852,else__17472__auto__){
var self__ = this;
var this__17471__auto____$1 = this;
var G__20854 = (((k20852 instanceof cljs.core.Keyword))?k20852.fqn:null);
switch (G__20854) {
case "schema":
return self__.schema;

break;
case "postcondition":
return self__.postcondition;

break;
case "post-name":
return self__.post_name;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20852,else__17472__auto__);

}
});

schema.core.Constrained.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17483__auto__,writer__17484__auto__,opts__17485__auto__){
var self__ = this;
var this__17483__auto____$1 = this;
var pr_pair__17486__auto__ = ((function (this__17483__auto____$1){
return (function (keyval__17487__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17484__auto__,cljs.core.pr_writer,""," ","",opts__17485__auto__,keyval__17487__auto__);
});})(this__17483__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17484__auto__,pr_pair__17486__auto__,"#schema.core.Constrained{",", ","}",opts__17485__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),self__.postcondition],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"post-name","post-name",491455269),self__.post_name],null))], null),self__.__extmap));
});

schema.core.Constrained.prototype.cljs$core$IIterable$ = true;

schema.core.Constrained.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20851){
var self__ = this;
var G__20851__$1 = this;
return (new cljs.core.RecordIter((0),G__20851__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),new cljs.core.Keyword(null,"post-name","post-name",491455269)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Constrained.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17467__auto__){
var self__ = this;
var this__17467__auto____$1 = this;
return self__.__meta;
});

schema.core.Constrained.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17463__auto__){
var self__ = this;
var this__17463__auto____$1 = this;
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Constrained.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17473__auto__){
var self__ = this;
var this__17473__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Constrained.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17464__auto__){
var self__ = this;
var this__17464__auto____$1 = this;
var h__17290__auto__ = self__.__hash;
if(!((h__17290__auto__ == null))){
return h__17290__auto__;
} else {
var h__17290__auto____$1 = cljs.core.hash_imap.call(null,this__17464__auto____$1);
self__.__hash = h__17290__auto____$1;

return h__17290__auto____$1;
}
});

schema.core.Constrained.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17465__auto__,other__17466__auto__){
var self__ = this;
var this__17465__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16843__auto__ = other__17466__auto__;
if(cljs.core.truth_(and__16843__auto__)){
var and__16843__auto____$1 = (this__17465__auto____$1.constructor === other__17466__auto__.constructor);
if(and__16843__auto____$1){
return cljs.core.equiv_map.call(null,this__17465__auto____$1,other__17466__auto__);
} else {
return and__16843__auto____$1;
}
} else {
return and__16843__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Constrained.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17478__auto__,k__17479__auto__){
var self__ = this;
var this__17478__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"post-name","post-name",491455269),null,new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),null], null), null),k__17479__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17478__auto____$1),self__.__meta),k__17479__auto__);
} else {
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17479__auto__)),null));
}
});

schema.core.Constrained.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17476__auto__,k__17477__auto__,G__20851){
var self__ = this;
var this__17476__auto____$1 = this;
var pred__20855 = cljs.core.keyword_identical_QMARK_;
var expr__20856 = k__17477__auto__;
if(cljs.core.truth_(pred__20855.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__20856))){
return (new schema.core.Constrained(G__20851,self__.postcondition,self__.post_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20855.call(null,new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),expr__20856))){
return (new schema.core.Constrained(self__.schema,G__20851,self__.post_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20855.call(null,new cljs.core.Keyword(null,"post-name","post-name",491455269),expr__20856))){
return (new schema.core.Constrained(self__.schema,self__.postcondition,G__20851,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17477__auto__,G__20851),null));
}
}
}
});

schema.core.Constrained.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17481__auto__){
var self__ = this;
var this__17481__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),self__.postcondition],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"post-name","post-name",491455269),self__.post_name],null))], null),self__.__extmap));
});

schema.core.Constrained.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17468__auto__,G__20851){
var self__ = this;
var this__17468__auto____$1 = this;
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,G__20851,self__.__extmap,self__.__hash));
});

schema.core.Constrained.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17474__auto__,entry__17475__auto__){
var self__ = this;
var this__17474__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17475__auto__)){
return cljs.core._assoc.call(null,this__17474__auto____$1,cljs.core._nth.call(null,entry__17475__auto__,(0)),cljs.core._nth.call(null,entry__17475__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17474__auto____$1,entry__17475__auto__);
}
});

schema.core.Constrained.prototype.schema$core$Schema$ = true;

schema.core.Constrained.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema], null)], null),null,schema.spec.core.precondition.call(null,this$__$1,self__.postcondition,((function (this$__$1){
return (function (p1__20850_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__20850_SHARP_),self__.post_name);
});})(this$__$1))
));
});

schema.core.Constrained.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.post_name),schema.core.explain.call(null,self__.schema)),new cljs.core.Symbol(null,"constrained","constrained",-2057147788,null));
});

schema.core.Constrained.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"postcondition","postcondition",903430305,null),new cljs.core.Symbol(null,"post-name","post-name",2131986796,null)], null);
});

schema.core.Constrained.cljs$lang$type = true;

schema.core.Constrained.cljs$lang$ctorPrSeq = (function (this__17503__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Constrained");
});

schema.core.Constrained.cljs$lang$ctorPrWriter = (function (this__17503__auto__,writer__17504__auto__){
return cljs.core._write.call(null,writer__17504__auto__,"schema.core/Constrained");
});

schema.core.__GT_Constrained = (function schema$core$__GT_Constrained(schema__$1,postcondition,post_name){
return (new schema.core.Constrained(schema__$1,postcondition,post_name,null,null,null));
});

schema.core.map__GT_Constrained = (function schema$core$map__GT_Constrained(G__20853){
return (new schema.core.Constrained(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__20853),new cljs.core.Keyword(null,"postcondition","postcondition",-737101222).cljs$core$IFn$_invoke$arity$1(G__20853),new cljs.core.Keyword(null,"post-name","post-name",491455269).cljs$core$IFn$_invoke$arity$1(G__20853),null,cljs.core.dissoc.call(null,G__20853,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),new cljs.core.Keyword(null,"post-name","post-name",491455269)),null));
});

/**
 * A schema with an additional post-condition.  Differs from `conditional`
 * with a single schema, in that the predicate checked *after* the main
 * schema.  This can lead to better error messages, and is often better
 * suited for coercion.
 */
schema.core.constrained = (function schema$core$constrained(var_args){
var args20859 = [];
var len__17913__auto___20862 = arguments.length;
var i__17914__auto___20863 = (0);
while(true){
if((i__17914__auto___20863 < len__17913__auto___20862)){
args20859.push((arguments[i__17914__auto___20863]));

var G__20864 = (i__17914__auto___20863 + (1));
i__17914__auto___20863 = G__20864;
continue;
} else {
}
break;
}

var G__20861 = args20859.length;
switch (G__20861) {
case 2:
return schema.core.constrained.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return schema.core.constrained.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20859.length)].join('')));

}
});

schema.core.constrained.cljs$core$IFn$_invoke$arity$2 = (function (s,p_QMARK_){
return schema.core.constrained.call(null,s,p_QMARK_,cljs.core.symbol.call(null,schema.utils.fn_name.call(null,p_QMARK_)));
});

schema.core.constrained.cljs$core$IFn$_invoke$arity$3 = (function (s,p_QMARK_,pred_name){
if(cljs.core.ifn_QMARK_.call(null,p_QMARK_)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Not a function: %s",p_QMARK_)));
}

return (new schema.core.Constrained(s,p_QMARK_,pred_name,null,null,null));
});

schema.core.constrained.cljs$lang$maxFixedArity = 3;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {schema.core.HasPrecondition}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {schema.spec.core.CoreSpec}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Both = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17469__auto__,k__17470__auto__){
var self__ = this;
var this__17469__auto____$1 = this;
return cljs.core._lookup.call(null,this__17469__auto____$1,k__17470__auto__,null);
});

schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17471__auto__,k20868,else__17472__auto__){
var self__ = this;
var this__17471__auto____$1 = this;
var G__20870 = (((k20868 instanceof cljs.core.Keyword))?k20868.fqn:null);
switch (G__20870) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20868,else__17472__auto__);

}
});

schema.core.Both.prototype.schema$spec$core$CoreSpec$ = true;

schema.core.Both.prototype.schema$spec$core$CoreSpec$subschemas$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.schemas;
});

schema.core.Both.prototype.schema$spec$core$CoreSpec$checker$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce.call(null,((function (this$__$1){
return (function (f,t){
return ((function (this$__$1){
return (function (x){
var tx = t.call(null,x);
if(cljs.core.truth_(schema.utils.error_QMARK_.call(null,tx))){
return tx;
} else {
return f.call(null,(function (){var or__16855__auto__ = tx;
if(cljs.core.truth_(or__16855__auto__)){
return or__16855__auto__;
} else {
return x;
}
})());
}
});
;})(this$__$1))
});})(this$__$1))
,cljs.core.map.call(null,((function (this$__$1){
return (function (p1__20866_SHARP_){
return schema.spec.core.sub_checker.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),p1__20866_SHARP_], null),params);
});})(this$__$1))
,cljs.core.reverse.call(null,self__.schemas)));
});

schema.core.Both.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17483__auto__,writer__17484__auto__,opts__17485__auto__){
var self__ = this;
var this__17483__auto____$1 = this;
var pr_pair__17486__auto__ = ((function (this__17483__auto____$1){
return (function (keyval__17487__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17484__auto__,cljs.core.pr_writer,""," ","",opts__17485__auto__,keyval__17487__auto__);
});})(this__17483__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17484__auto__,pr_pair__17486__auto__,"#schema.core.Both{",", ","}",opts__17485__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IIterable$ = true;

schema.core.Both.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20867){
var self__ = this;
var G__20867__$1 = this;
return (new cljs.core.RecordIter((0),G__20867__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schemas","schemas",575070579)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Both.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17467__auto__){
var self__ = this;
var this__17467__auto____$1 = this;
return self__.__meta;
});

schema.core.Both.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17463__auto__){
var self__ = this;
var this__17463__auto____$1 = this;
return (new schema.core.Both(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Both.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17473__auto__){
var self__ = this;
var this__17473__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17464__auto__){
var self__ = this;
var this__17464__auto____$1 = this;
var h__17290__auto__ = self__.__hash;
if(!((h__17290__auto__ == null))){
return h__17290__auto__;
} else {
var h__17290__auto____$1 = cljs.core.hash_imap.call(null,this__17464__auto____$1);
self__.__hash = h__17290__auto____$1;

return h__17290__auto____$1;
}
});

schema.core.Both.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17465__auto__,other__17466__auto__){
var self__ = this;
var this__17465__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16843__auto__ = other__17466__auto__;
if(cljs.core.truth_(and__16843__auto__)){
var and__16843__auto____$1 = (this__17465__auto____$1.constructor === other__17466__auto__.constructor);
if(and__16843__auto____$1){
return cljs.core.equiv_map.call(null,this__17465__auto____$1,other__17466__auto__);
} else {
return and__16843__auto____$1;
}
} else {
return and__16843__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Both.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17478__auto__,k__17479__auto__){
var self__ = this;
var this__17478__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schemas","schemas",575070579),null], null), null),k__17479__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17478__auto____$1),self__.__meta),k__17479__auto__);
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17479__auto__)),null));
}
});

schema.core.Both.prototype.schema$core$HasPrecondition$ = true;

schema.core.Both.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.call(null,cljs.core.every_pred,cljs.core.map.call(null,cljs.core.comp.call(null,schema.core.precondition,schema.core.spec),self__.schemas));
});

schema.core.Both.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17476__auto__,k__17477__auto__,G__20867){
var self__ = this;
var this__17476__auto____$1 = this;
var pred__20871 = cljs.core.keyword_identical_QMARK_;
var expr__20872 = k__17477__auto__;
if(cljs.core.truth_(pred__20871.call(null,new cljs.core.Keyword(null,"schemas","schemas",575070579),expr__20872))){
return (new schema.core.Both(G__20867,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17477__auto__,G__20867),null));
}
});

schema.core.Both.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17481__auto__){
var self__ = this;
var this__17481__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17468__auto__,G__20867){
var self__ = this;
var this__17468__auto____$1 = this;
return (new schema.core.Both(self__.schemas,G__20867,self__.__extmap,self__.__hash));
});

schema.core.Both.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17474__auto__,entry__17475__auto__){
var self__ = this;
var this__17474__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17475__auto__)){
return cljs.core._assoc.call(null,this__17474__auto____$1,cljs.core._nth.call(null,entry__17475__auto__,(0)),cljs.core._nth.call(null,entry__17475__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17474__auto____$1,entry__17475__auto__);
}
});

schema.core.Both.prototype.schema$core$Schema$ = true;

schema.core.Both.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

schema.core.Both.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol(null,"both","both",1246882687,null),cljs.core.map.call(null,schema.core.explain,self__.schemas));
});

schema.core.Both.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null)], null);
});

schema.core.Both.cljs$lang$type = true;

schema.core.Both.cljs$lang$ctorPrSeq = (function (this__17503__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Both");
});

schema.core.Both.cljs$lang$ctorPrWriter = (function (this__17503__auto__,writer__17504__auto__){
return cljs.core._write.call(null,writer__17504__auto__,"schema.core/Both");
});

schema.core.__GT_Both = (function schema$core$__GT_Both(schemas){
return (new schema.core.Both(schemas,null,null,null));
});

schema.core.map__GT_Both = (function schema$core$map__GT_Both(G__20869){
return (new schema.core.Both(new cljs.core.Keyword(null,"schemas","schemas",575070579).cljs$core$IFn$_invoke$arity$1(G__20869),null,cljs.core.dissoc.call(null,G__20869,new cljs.core.Keyword(null,"schemas","schemas",575070579)),null));
});

/**
 * A value that must satisfy every schema in schemas.
 * 
 * DEPRECATED: prefer 'conditional' with a single condition
 * instead, or `constrained`.
 * 
 * When used with coercion, coerces each schema in sequence.
 */
schema.core.both = (function schema$core$both(var_args){
var args__17920__auto__ = [];
var len__17913__auto___20876 = arguments.length;
var i__17914__auto___20877 = (0);
while(true){
if((i__17914__auto___20877 < len__17913__auto___20876)){
args__17920__auto__.push((arguments[i__17914__auto___20877]));

var G__20878 = (i__17914__auto___20877 + (1));
i__17914__auto___20877 = G__20878;
continue;
} else {
}
break;
}

var argseq__17921__auto__ = ((((0) < args__17920__auto__.length))?(new cljs.core.IndexedSeq(args__17920__auto__.slice((0)),(0))):null);
return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(argseq__17921__auto__);
});

schema.core.both.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.Both(schemas,null,null,null));
});

schema.core.both.cljs$lang$maxFixedArity = (0);

schema.core.both.cljs$lang$applyTo = (function (seq20875){
return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20875));
});
/**
 * if the predicate returns truthy, use the if-schema, otherwise use the else-schema
 */
schema.core.if$ = (function schema$core$if(pred,if_schema,else_schema){
return schema.core.conditional.call(null,pred,if_schema,cljs.core.constantly.call(null,true),else_schema);
});
schema.core.var_name = (function schema$core$var_name(v){
var map__20881 = cljs.core.meta.call(null,v);
var map__20881__$1 = ((((!((map__20881 == null)))?((((map__20881.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20881.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20881):map__20881);
var ns = cljs.core.get.call(null,map__20881__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__20881__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core.symbol.call(null,[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Recursive = (function (derefable,__meta,__extmap,__hash){
this.derefable = derefable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Recursive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17469__auto__,k__17470__auto__){
var self__ = this;
var this__17469__auto____$1 = this;
return cljs.core._lookup.call(null,this__17469__auto____$1,k__17470__auto__,null);
});

schema.core.Recursive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17471__auto__,k20884,else__17472__auto__){
var self__ = this;
var this__17471__auto____$1 = this;
var G__20886 = (((k20884 instanceof cljs.core.Keyword))?k20884.fqn:null);
switch (G__20886) {
case "derefable":
return self__.derefable;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20884,else__17472__auto__);

}
});

schema.core.Recursive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17483__auto__,writer__17484__auto__,opts__17485__auto__){
var self__ = this;
var this__17483__auto____$1 = this;
var pr_pair__17486__auto__ = ((function (this__17483__auto____$1){
return (function (keyval__17487__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17484__auto__,cljs.core.pr_writer,""," ","",opts__17485__auto__,keyval__17487__auto__);
});})(this__17483__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17484__auto__,pr_pair__17486__auto__,"#schema.core.Recursive{",", ","}",opts__17485__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"derefable","derefable",377265868),self__.derefable],null))], null),self__.__extmap));
});

schema.core.Recursive.prototype.cljs$core$IIterable$ = true;

schema.core.Recursive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20883){
var self__ = this;
var G__20883__$1 = this;
return (new cljs.core.RecordIter((0),G__20883__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"derefable","derefable",377265868)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Recursive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17467__auto__){
var self__ = this;
var this__17467__auto____$1 = this;
return self__.__meta;
});

schema.core.Recursive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17463__auto__){
var self__ = this;
var this__17463__auto____$1 = this;
return (new schema.core.Recursive(self__.derefable,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Recursive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17473__auto__){
var self__ = this;
var this__17473__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Recursive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17464__auto__){
var self__ = this;
var this__17464__auto____$1 = this;
var h__17290__auto__ = self__.__hash;
if(!((h__17290__auto__ == null))){
return h__17290__auto__;
} else {
var h__17290__auto____$1 = cljs.core.hash_imap.call(null,this__17464__auto____$1);
self__.__hash = h__17290__auto____$1;

return h__17290__auto____$1;
}
});

schema.core.Recursive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17465__auto__,other__17466__auto__){
var self__ = this;
var this__17465__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16843__auto__ = other__17466__auto__;
if(cljs.core.truth_(and__16843__auto__)){
var and__16843__auto____$1 = (this__17465__auto____$1.constructor === other__17466__auto__.constructor);
if(and__16843__auto____$1){
return cljs.core.equiv_map.call(null,this__17465__auto____$1,other__17466__auto__);
} else {
return and__16843__auto____$1;
}
} else {
return and__16843__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Recursive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17478__auto__,k__17479__auto__){
var self__ = this;
var this__17478__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"derefable","derefable",377265868),null], null), null),k__17479__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17478__auto____$1),self__.__meta),k__17479__auto__);
} else {
return (new schema.core.Recursive(self__.derefable,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17479__auto__)),null));
}
});

schema.core.Recursive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17476__auto__,k__17477__auto__,G__20883){
var self__ = this;
var this__17476__auto____$1 = this;
var pred__20887 = cljs.core.keyword_identical_QMARK_;
var expr__20888 = k__17477__auto__;
if(cljs.core.truth_(pred__20887.call(null,new cljs.core.Keyword(null,"derefable","derefable",377265868),expr__20888))){
return (new schema.core.Recursive(G__20883,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Recursive(self__.derefable,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17477__auto__,G__20883),null));
}
});

schema.core.Recursive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17481__auto__){
var self__ = this;
var this__17481__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"derefable","derefable",377265868),self__.derefable],null))], null),self__.__extmap));
});

schema.core.Recursive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17468__auto__,G__20883){
var self__ = this;
var this__17468__auto____$1 = this;
return (new schema.core.Recursive(self__.derefable,G__20883,self__.__extmap,self__.__hash));
});

schema.core.Recursive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17474__auto__,entry__17475__auto__){
var self__ = this;
var this__17474__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17475__auto__)){
return cljs.core._assoc.call(null,this__17474__auto____$1,cljs.core._nth.call(null,entry__17475__auto__,(0)),cljs.core._nth.call(null,entry__17475__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17474__auto____$1,entry__17475__auto__);
}
});

schema.core.Recursive.prototype.schema$core$Schema$ = true;

schema.core.Recursive.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.deref.call(null,self__.derefable)], null)], null));
});

schema.core.Recursive.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(((self__.derefable instanceof cljs.core.Var))?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.var_name.call(null,self__.derefable)),new cljs.core.Symbol(null,"var","var",870848730,null)):new cljs.core.Symbol(null,"...","...",-1926939749,null))),new cljs.core.Symbol(null,"recursive","recursive",-1935549897,null));
});

schema.core.Recursive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"derefable","derefable",2017797395,null)], null);
});

schema.core.Recursive.cljs$lang$type = true;

schema.core.Recursive.cljs$lang$ctorPrSeq = (function (this__17503__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Recursive");
});

schema.core.Recursive.cljs$lang$ctorPrWriter = (function (this__17503__auto__,writer__17504__auto__){
return cljs.core._write.call(null,writer__17504__auto__,"schema.core/Recursive");
});

schema.core.__GT_Recursive = (function schema$core$__GT_Recursive(derefable){
return (new schema.core.Recursive(derefable,null,null,null));
});

schema.core.map__GT_Recursive = (function schema$core$map__GT_Recursive(G__20885){
return (new schema.core.Recursive(new cljs.core.Keyword(null,"derefable","derefable",377265868).cljs$core$IFn$_invoke$arity$1(G__20885),null,cljs.core.dissoc.call(null,G__20885,new cljs.core.Keyword(null,"derefable","derefable",377265868)),null));
});

/**
 * Support for (mutually) recursive schemas by passing a var that points to a schema,
 * e.g (recursive #'ExampleRecursiveSchema).
 */
schema.core.recursive = (function schema$core$recursive(schema__$1){
if(((!((schema__$1 == null)))?((((schema__$1.cljs$lang$protocol_mask$partition0$ & (32768))) || (schema__$1.cljs$core$IDeref$))?true:(((!schema__$1.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,schema__$1):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,schema__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Not an IDeref: %s",schema__$1)));
}

return (new schema.core.Recursive(schema__$1,null,null,null));
});
schema.core.atom_QMARK_ = (function schema$core$atom_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (16384))) || (x.cljs$core$IAtom$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,x);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Atomic = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Atomic.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17469__auto__,k__17470__auto__){
var self__ = this;
var this__17469__auto____$1 = this;
return cljs.core._lookup.call(null,this__17469__auto____$1,k__17470__auto__,null);
});

schema.core.Atomic.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17471__auto__,k20896,else__17472__auto__){
var self__ = this;
var this__17471__auto____$1 = this;
var G__20898 = (((k20896 instanceof cljs.core.Keyword))?k20896.fqn:null);
switch (G__20898) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20896,else__17472__auto__);

}
});

schema.core.Atomic.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17483__auto__,writer__17484__auto__,opts__17485__auto__){
var self__ = this;
var this__17483__auto____$1 = this;
var pr_pair__17486__auto__ = ((function (this__17483__auto____$1){
return (function (keyval__17487__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17484__auto__,cljs.core.pr_writer,""," ","",opts__17485__auto__,keyval__17487__auto__);
});})(this__17483__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17484__auto__,pr_pair__17486__auto__,"#schema.core.Atomic{",", ","}",opts__17485__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Atomic.prototype.cljs$core$IIterable$ = true;

schema.core.Atomic.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20895){
var self__ = this;
var G__20895__$1 = this;
return (new cljs.core.RecordIter((0),G__20895__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Atomic.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17467__auto__){
var self__ = this;
var this__17467__auto____$1 = this;
return self__.__meta;
});

schema.core.Atomic.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17463__auto__){
var self__ = this;
var this__17463__auto____$1 = this;
return (new schema.core.Atomic(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Atomic.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17473__auto__){
var self__ = this;
var this__17473__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Atomic.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17464__auto__){
var self__ = this;
var this__17464__auto____$1 = this;
var h__17290__auto__ = self__.__hash;
if(!((h__17290__auto__ == null))){
return h__17290__auto__;
} else {
var h__17290__auto____$1 = cljs.core.hash_imap.call(null,this__17464__auto____$1);
self__.__hash = h__17290__auto____$1;

return h__17290__auto____$1;
}
});

schema.core.Atomic.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17465__auto__,other__17466__auto__){
var self__ = this;
var this__17465__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16843__auto__ = other__17466__auto__;
if(cljs.core.truth_(and__16843__auto__)){
var and__16843__auto____$1 = (this__17465__auto____$1.constructor === other__17466__auto__.constructor);
if(and__16843__auto____$1){
return cljs.core.equiv_map.call(null,this__17465__auto____$1,other__17466__auto__);
} else {
return and__16843__auto____$1;
}
} else {
return and__16843__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Atomic.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17478__auto__,k__17479__auto__){
var self__ = this;
var this__17478__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null], null), null),k__17479__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17478__auto____$1),self__.__meta),k__17479__auto__);
} else {
return (new schema.core.Atomic(self__.schema,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17479__auto__)),null));
}
});

schema.core.Atomic.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17476__auto__,k__17477__auto__,G__20895){
var self__ = this;
var this__17476__auto____$1 = this;
var pred__20899 = cljs.core.keyword_identical_QMARK_;
var expr__20900 = k__17477__auto__;
if(cljs.core.truth_(pred__20899.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__20900))){
return (new schema.core.Atomic(G__20895,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Atomic(self__.schema,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17477__auto__,G__20895),null));
}
});

schema.core.Atomic.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17481__auto__){
var self__ = this;
var this__17481__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Atomic.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17468__auto__,G__20895){
var self__ = this;
var this__17468__auto____$1 = this;
return (new schema.core.Atomic(self__.schema,G__20895,self__.__extmap,self__.__hash));
});

schema.core.Atomic.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17474__auto__,entry__17475__auto__){
var self__ = this;
var this__17474__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17475__auto__)){
return cljs.core._assoc.call(null,this__17474__auto____$1,cljs.core._nth.call(null,entry__17475__auto__,(0)),cljs.core._nth.call(null,entry__17475__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17474__auto____$1,entry__17475__auto__);
}
});

schema.core.Atomic.prototype.schema$core$Schema$ = true;

schema.core.Atomic.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,schema.core.atom_QMARK_,((function (this$__$1){
return (function (p1__19304__19305__auto__){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__19304__19305__auto__),new cljs.core.Symbol(null,"atom?","atom?",-1007535292,null));
});})(this$__$1))
),cljs.core.atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.one_element.call(null,true,self__.schema,((function (this$__$1){
return (function (item_fn,coll){
item_fn.call(null,cljs.core.deref.call(null,coll));

return null;
});})(this$__$1))
)], null),((function (this$__$1){
return (function (_,xs,___$1){
return cljs.core.atom.call(null,cljs.core.first.call(null,xs));
});})(this$__$1))
);
});

schema.core.Atomic.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,self__.schema)),new cljs.core.Symbol(null,"atom","atom",1243487874,null));
});

schema.core.Atomic.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null)], null);
});

schema.core.Atomic.cljs$lang$type = true;

schema.core.Atomic.cljs$lang$ctorPrSeq = (function (this__17503__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Atomic");
});

schema.core.Atomic.cljs$lang$ctorPrWriter = (function (this__17503__auto__,writer__17504__auto__){
return cljs.core._write.call(null,writer__17504__auto__,"schema.core/Atomic");
});

schema.core.__GT_Atomic = (function schema$core$__GT_Atomic(schema__$1){
return (new schema.core.Atomic(schema__$1,null,null,null));
});

schema.core.map__GT_Atomic = (function schema$core$map__GT_Atomic(G__20897){
return (new schema.core.Atomic(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__20897),null,cljs.core.dissoc.call(null,G__20897,new cljs.core.Keyword(null,"schema","schema",-1582001791)),null));
});

/**
 * An atom containing a value matching 'schema'.
 */
schema.core.atom = (function schema$core$atom(schema__$1){
return schema.core.__GT_Atomic.call(null,schema__$1);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.RequiredKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17469__auto__,k__17470__auto__){
var self__ = this;
var this__17469__auto____$1 = this;
return cljs.core._lookup.call(null,this__17469__auto____$1,k__17470__auto__,null);
});

schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17471__auto__,k20904,else__17472__auto__){
var self__ = this;
var this__17471__auto____$1 = this;
var G__20906 = (((k20904 instanceof cljs.core.Keyword))?k20904.fqn:null);
switch (G__20906) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20904,else__17472__auto__);

}
});

schema.core.RequiredKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17483__auto__,writer__17484__auto__,opts__17485__auto__){
var self__ = this;
var this__17483__auto____$1 = this;
var pr_pair__17486__auto__ = ((function (this__17483__auto____$1){
return (function (keyval__17487__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17484__auto__,cljs.core.pr_writer,""," ","",opts__17485__auto__,keyval__17487__auto__);
});})(this__17483__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17484__auto__,pr_pair__17486__auto__,"#schema.core.RequiredKey{",", ","}",opts__17485__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IIterable$ = true;

schema.core.RequiredKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20903){
var self__ = this;
var G__20903__$1 = this;
return (new cljs.core.RecordIter((0),G__20903__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"k","k",-2146297393)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.RequiredKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17467__auto__){
var self__ = this;
var this__17467__auto____$1 = this;
return self__.__meta;
});

schema.core.RequiredKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17463__auto__){
var self__ = this;
var this__17463__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.RequiredKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17473__auto__){
var self__ = this;
var this__17473__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17464__auto__){
var self__ = this;
var this__17464__auto____$1 = this;
var h__17290__auto__ = self__.__hash;
if(!((h__17290__auto__ == null))){
return h__17290__auto__;
} else {
var h__17290__auto____$1 = cljs.core.hash_imap.call(null,this__17464__auto____$1);
self__.__hash = h__17290__auto____$1;

return h__17290__auto____$1;
}
});

schema.core.RequiredKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17465__auto__,other__17466__auto__){
var self__ = this;
var this__17465__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16843__auto__ = other__17466__auto__;
if(cljs.core.truth_(and__16843__auto__)){
var and__16843__auto____$1 = (this__17465__auto____$1.constructor === other__17466__auto__.constructor);
if(and__16843__auto____$1){
return cljs.core.equiv_map.call(null,this__17465__auto____$1,other__17466__auto__);
} else {
return and__16843__auto____$1;
}
} else {
return and__16843__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.RequiredKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17478__auto__,k__17479__auto__){
var self__ = this;
var this__17478__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"k","k",-2146297393),null], null), null),k__17479__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17478__auto____$1),self__.__meta),k__17479__auto__);
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17479__auto__)),null));
}
});

schema.core.RequiredKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17476__auto__,k__17477__auto__,G__20903){
var self__ = this;
var this__17476__auto____$1 = this;
var pred__20907 = cljs.core.keyword_identical_QMARK_;
var expr__20908 = k__17477__auto__;
if(cljs.core.truth_(pred__20907.call(null,new cljs.core.Keyword(null,"k","k",-2146297393),expr__20908))){
return (new schema.core.RequiredKey(G__20903,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17477__auto__,G__20903),null));
}
});

schema.core.RequiredKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17481__auto__){
var self__ = this;
var this__17481__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17468__auto__,G__20903){
var self__ = this;
var this__17468__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,G__20903,self__.__extmap,self__.__hash));
});

schema.core.RequiredKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17474__auto__,entry__17475__auto__){
var self__ = this;
var this__17474__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17475__auto__)){
return cljs.core._assoc.call(null,this__17474__auto____$1,cljs.core._nth.call(null,entry__17475__auto__,(0)),cljs.core._nth.call(null,entry__17475__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17474__auto____$1,entry__17475__auto__);
}
});

schema.core.RequiredKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null)], null);
});

schema.core.RequiredKey.cljs$lang$type = true;

schema.core.RequiredKey.cljs$lang$ctorPrSeq = (function (this__17503__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/RequiredKey");
});

schema.core.RequiredKey.cljs$lang$ctorPrWriter = (function (this__17503__auto__,writer__17504__auto__){
return cljs.core._write.call(null,writer__17504__auto__,"schema.core/RequiredKey");
});

schema.core.__GT_RequiredKey = (function schema$core$__GT_RequiredKey(k){
return (new schema.core.RequiredKey(k,null,null,null));
});

schema.core.map__GT_RequiredKey = (function schema$core$map__GT_RequiredKey(G__20905){
return (new schema.core.RequiredKey(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__20905),null,cljs.core.dissoc.call(null,G__20905,new cljs.core.Keyword(null,"k","k",-2146297393)),null));
});

/**
 * A required key in a map
 */
schema.core.required_key = (function schema$core$required_key(k){
if((k instanceof cljs.core.Keyword)){
return k;
} else {
return (new schema.core.RequiredKey(k,null,null,null));
}
});
schema.core.required_key_QMARK_ = (function schema$core$required_key_QMARK_(ks){
return ((ks instanceof cljs.core.Keyword)) || ((ks instanceof schema.core.RequiredKey));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.OptionalKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17469__auto__,k__17470__auto__){
var self__ = this;
var this__17469__auto____$1 = this;
return cljs.core._lookup.call(null,this__17469__auto____$1,k__17470__auto__,null);
});

schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17471__auto__,k20912,else__17472__auto__){
var self__ = this;
var this__17471__auto____$1 = this;
var G__20914 = (((k20912 instanceof cljs.core.Keyword))?k20912.fqn:null);
switch (G__20914) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20912,else__17472__auto__);

}
});

schema.core.OptionalKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17483__auto__,writer__17484__auto__,opts__17485__auto__){
var self__ = this;
var this__17483__auto____$1 = this;
var pr_pair__17486__auto__ = ((function (this__17483__auto____$1){
return (function (keyval__17487__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17484__auto__,cljs.core.pr_writer,""," ","",opts__17485__auto__,keyval__17487__auto__);
});})(this__17483__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17484__auto__,pr_pair__17486__auto__,"#schema.core.OptionalKey{",", ","}",opts__17485__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IIterable$ = true;

schema.core.OptionalKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20911){
var self__ = this;
var G__20911__$1 = this;
return (new cljs.core.RecordIter((0),G__20911__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"k","k",-2146297393)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.OptionalKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17467__auto__){
var self__ = this;
var this__17467__auto____$1 = this;
return self__.__meta;
});

schema.core.OptionalKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17463__auto__){
var self__ = this;
var this__17463__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.OptionalKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17473__auto__){
var self__ = this;
var this__17473__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17464__auto__){
var self__ = this;
var this__17464__auto____$1 = this;
var h__17290__auto__ = self__.__hash;
if(!((h__17290__auto__ == null))){
return h__17290__auto__;
} else {
var h__17290__auto____$1 = cljs.core.hash_imap.call(null,this__17464__auto____$1);
self__.__hash = h__17290__auto____$1;

return h__17290__auto____$1;
}
});

schema.core.OptionalKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17465__auto__,other__17466__auto__){
var self__ = this;
var this__17465__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16843__auto__ = other__17466__auto__;
if(cljs.core.truth_(and__16843__auto__)){
var and__16843__auto____$1 = (this__17465__auto____$1.constructor === other__17466__auto__.constructor);
if(and__16843__auto____$1){
return cljs.core.equiv_map.call(null,this__17465__auto____$1,other__17466__auto__);
} else {
return and__16843__auto____$1;
}
} else {
return and__16843__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.OptionalKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17478__auto__,k__17479__auto__){
var self__ = this;
var this__17478__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"k","k",-2146297393),null], null), null),k__17479__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17478__auto____$1),self__.__meta),k__17479__auto__);
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17479__auto__)),null));
}
});

schema.core.OptionalKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17476__auto__,k__17477__auto__,G__20911){
var self__ = this;
var this__17476__auto____$1 = this;
var pred__20915 = cljs.core.keyword_identical_QMARK_;
var expr__20916 = k__17477__auto__;
if(cljs.core.truth_(pred__20915.call(null,new cljs.core.Keyword(null,"k","k",-2146297393),expr__20916))){
return (new schema.core.OptionalKey(G__20911,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17477__auto__,G__20911),null));
}
});

schema.core.OptionalKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17481__auto__){
var self__ = this;
var this__17481__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17468__auto__,G__20911){
var self__ = this;
var this__17468__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,G__20911,self__.__extmap,self__.__hash));
});

schema.core.OptionalKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17474__auto__,entry__17475__auto__){
var self__ = this;
var this__17474__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17475__auto__)){
return cljs.core._assoc.call(null,this__17474__auto____$1,cljs.core._nth.call(null,entry__17475__auto__,(0)),cljs.core._nth.call(null,entry__17475__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17474__auto____$1,entry__17475__auto__);
}
});

schema.core.OptionalKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null)], null);
});

schema.core.OptionalKey.cljs$lang$type = true;

schema.core.OptionalKey.cljs$lang$ctorPrSeq = (function (this__17503__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/OptionalKey");
});

schema.core.OptionalKey.cljs$lang$ctorPrWriter = (function (this__17503__auto__,writer__17504__auto__){
return cljs.core._write.call(null,writer__17504__auto__,"schema.core/OptionalKey");
});

schema.core.__GT_OptionalKey = (function schema$core$__GT_OptionalKey(k){
return (new schema.core.OptionalKey(k,null,null,null));
});

schema.core.map__GT_OptionalKey = (function schema$core$map__GT_OptionalKey(G__20913){
return (new schema.core.OptionalKey(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__20913),null,cljs.core.dissoc.call(null,G__20913,new cljs.core.Keyword(null,"k","k",-2146297393)),null));
});

/**
 * An optional key in a map
 */
schema.core.optional_key = (function schema$core$optional_key(k){
return (new schema.core.OptionalKey(k,null,null,null));
});
schema.core.optional_key_QMARK_ = (function schema$core$optional_key_QMARK_(ks){
return (ks instanceof schema.core.OptionalKey);
});
schema.core.explicit_schema_key = (function schema$core$explicit_schema_key(ks){
if((ks instanceof cljs.core.Keyword)){
return ks;
} else {
if((ks instanceof schema.core.RequiredKey)){
return ks.k;
} else {
if(cljs.core.truth_(schema.core.optional_key_QMARK_.call(null,ks))){
return ks.k;
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Bad explicit key: %s",ks)));

}
}
}
});
schema.core.specific_key_QMARK_ = (function schema$core$specific_key_QMARK_(ks){
var or__16855__auto__ = schema.core.required_key_QMARK_.call(null,ks);
if(cljs.core.truth_(or__16855__auto__)){
return or__16855__auto__;
} else {
return schema.core.optional_key_QMARK_.call(null,ks);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.MapEntry = (function (key_schema,val_schema,__meta,__extmap,__hash){
this.key_schema = key_schema;
this.val_schema = val_schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17469__auto__,k__17470__auto__){
var self__ = this;
var this__17469__auto____$1 = this;
return cljs.core._lookup.call(null,this__17469__auto____$1,k__17470__auto__,null);
});

schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17471__auto__,k20920,else__17472__auto__){
var self__ = this;
var this__17471__auto____$1 = this;
var G__20922 = (((k20920 instanceof cljs.core.Keyword))?k20920.fqn:null);
switch (G__20922) {
case "key-schema":
return self__.key_schema;

break;
case "val-schema":
return self__.val_schema;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20920,else__17472__auto__);

}
});

schema.core.MapEntry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17483__auto__,writer__17484__auto__,opts__17485__auto__){
var self__ = this;
var this__17483__auto____$1 = this;
var pr_pair__17486__auto__ = ((function (this__17483__auto____$1){
return (function (keyval__17487__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17484__auto__,cljs.core.pr_writer,""," ","",opts__17485__auto__,keyval__17487__auto__);
});})(this__17483__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17484__auto__,pr_pair__17486__auto__,"#schema.core.MapEntry{",", ","}",opts__17485__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),self__.key_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),self__.val_schema],null))], null),self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IIterable$ = true;

schema.core.MapEntry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20919){
var self__ = this;
var G__20919__$1 = this;
return (new cljs.core.RecordIter((0),G__20919__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.MapEntry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17467__auto__){
var self__ = this;
var this__17467__auto____$1 = this;
return self__.__meta;
});

schema.core.MapEntry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17463__auto__){
var self__ = this;
var this__17463__auto____$1 = this;
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.MapEntry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17473__auto__){
var self__ = this;
var this__17473__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17464__auto__){
var self__ = this;
var this__17464__auto____$1 = this;
var h__17290__auto__ = self__.__hash;
if(!((h__17290__auto__ == null))){
return h__17290__auto__;
} else {
var h__17290__auto____$1 = cljs.core.hash_imap.call(null,this__17464__auto____$1);
self__.__hash = h__17290__auto____$1;

return h__17290__auto____$1;
}
});

schema.core.MapEntry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17465__auto__,other__17466__auto__){
var self__ = this;
var this__17465__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16843__auto__ = other__17466__auto__;
if(cljs.core.truth_(and__16843__auto__)){
var and__16843__auto____$1 = (this__17465__auto____$1.constructor === other__17466__auto__.constructor);
if(and__16843__auto____$1){
return cljs.core.equiv_map.call(null,this__17465__auto____$1,other__17466__auto__);
} else {
return and__16843__auto____$1;
}
} else {
return and__16843__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.MapEntry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17478__auto__,k__17479__auto__){
var self__ = this;
var this__17478__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),null,new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),null], null), null),k__17479__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17478__auto____$1),self__.__meta),k__17479__auto__);
} else {
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17479__auto__)),null));
}
});

schema.core.MapEntry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17476__auto__,k__17477__auto__,G__20919){
var self__ = this;
var this__17476__auto____$1 = this;
var pred__20923 = cljs.core.keyword_identical_QMARK_;
var expr__20924 = k__17477__auto__;
if(cljs.core.truth_(pred__20923.call(null,new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),expr__20924))){
return (new schema.core.MapEntry(G__20919,self__.val_schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20923.call(null,new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),expr__20924))){
return (new schema.core.MapEntry(self__.key_schema,G__20919,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17477__auto__,G__20919),null));
}
}
});

schema.core.MapEntry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17481__auto__){
var self__ = this;
var this__17481__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),self__.key_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),self__.val_schema],null))], null),self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17468__auto__,G__20919){
var self__ = this;
var this__17468__auto____$1 = this;
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,G__20919,self__.__extmap,self__.__hash));
});

schema.core.MapEntry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17474__auto__,entry__17475__auto__){
var self__ = this;
var this__17474__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17475__auto__)){
return cljs.core._assoc.call(null,this__17474__auto____$1,cljs.core._nth.call(null,entry__17475__auto__,(0)),cljs.core._nth.call(null,entry__17475__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17474__auto____$1,entry__17475__auto__);
}
});

schema.core.MapEntry.prototype.schema$core$Schema$ = true;

schema.core.MapEntry.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,cljs.core.vec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.one_element.call(null,true,self__.key_schema,((function (this$__$1){
return (function (item_fn,e){
item_fn.call(null,cljs.core.key.call(null,e));

return e;
});})(this$__$1))
),schema.spec.collection.one_element.call(null,true,self__.val_schema,((function (this$__$1){
return (function (item_fn,e){
item_fn.call(null,cljs.core.val.call(null,e));

return null;
});})(this$__$1))
)], null),((function (this$__$1){
return (function (p__20926,p__20927,_){
var vec__20928 = p__20926;
var k = cljs.core.nth.call(null,vec__20928,(0),null);
var vec__20929 = p__20927;
var xk = cljs.core.nth.call(null,vec__20929,(0),null);
var xv = cljs.core.nth.call(null,vec__20929,(1),null);
var temp__4423__auto__ = schema.utils.error_val.call(null,xk);
if(cljs.core.truth_(temp__4423__auto__)){
var k_err = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_err,new cljs.core.Symbol(null,"invalid-key","invalid-key",-1461682245,null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,schema.utils.error_val.call(null,xv)], null);
}
});})(this$__$1))
);
});

schema.core.MapEntry.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,self__.val_schema)),schema.core.explain.call(null,self__.key_schema)),new cljs.core.Symbol(null,"map-entry","map-entry",329617471,null));
});

schema.core.MapEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key-schema","key-schema",543870801,null),new cljs.core.Symbol(null,"val-schema","val-schema",-374242092,null)], null);
});

schema.core.MapEntry.cljs$lang$type = true;

schema.core.MapEntry.cljs$lang$ctorPrSeq = (function (this__17503__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/MapEntry");
});

schema.core.MapEntry.cljs$lang$ctorPrWriter = (function (this__17503__auto__,writer__17504__auto__){
return cljs.core._write.call(null,writer__17504__auto__,"schema.core/MapEntry");
});

schema.core.__GT_MapEntry = (function schema$core$__GT_MapEntry(key_schema,val_schema){
return (new schema.core.MapEntry(key_schema,val_schema,null,null,null));
});

schema.core.map__GT_MapEntry = (function schema$core$map__GT_MapEntry(G__20921){
return (new schema.core.MapEntry(new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726).cljs$core$IFn$_invoke$arity$1(G__20921),new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619).cljs$core$IFn$_invoke$arity$1(G__20921),null,cljs.core.dissoc.call(null,G__20921,new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619)),null));
});

schema.core.map_entry = (function schema$core$map_entry(key_schema,val_schema){
return (new schema.core.MapEntry(key_schema,val_schema,null,null,null));
});
schema.core.find_extra_keys_schema = (function schema$core$find_extra_keys_schema(map_schema){
var key_schemata = cljs.core.remove.call(null,schema.core.specific_key_QMARK_,cljs.core.keys.call(null,map_schema));
if((cljs.core.count.call(null,key_schemata) < (2))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"More than one non-optional/required key schemata: %s",cljs.core.vec.call(null,key_schemata))));
}

return cljs.core.first.call(null,key_schemata);
});
schema.core.explain_kspec = (function schema$core$explain_kspec(kspec){
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,kspec))){
if((kspec instanceof cljs.core.Keyword)){
return kspec;
} else {
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explicit_schema_key.call(null,kspec)),(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,kspec))?new cljs.core.Symbol(null,"required-key","required-key",1624616412,null):(cljs.core.truth_(schema.core.optional_key_QMARK_.call(null,kspec))?new cljs.core.Symbol(null,"optional-key","optional-key",988406145,null):null)));
}
} else {
return schema.core.explain.call(null,kspec);
}
});
schema.core.map_elements = (function schema$core$map_elements(this$){
var extra_keys_schema = schema.core.find_extra_keys_schema.call(null,this$);
var duplicate_keys_20948 = cljs.core.mapv.call(null,schema.core.explain_kspec,cljs.core.apply.call(null,cljs.core.concat,cljs.core.filter.call(null,((function (extra_keys_schema){
return (function (p1__20931_SHARP_){
return (cljs.core.count.call(null,p1__20931_SHARP_) > (1));
});})(extra_keys_schema))
,cljs.core.vals.call(null,cljs.core.group_by.call(null,schema.core.explicit_schema_key,cljs.core.keys.call(null,cljs.core.dissoc.call(null,this$,extra_keys_schema)))))));
if(cljs.core.empty_QMARK_.call(null,duplicate_keys_20948)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Schema has multiple variants of the same explicit key: %s",duplicate_keys_20948)));
}

return cljs.core.concat.call(null,(function (){var iter__17627__auto__ = ((function (extra_keys_schema){
return (function schema$core$map_elements_$_iter__20940(s__20941){
return (new cljs.core.LazySeq(null,((function (extra_keys_schema){
return (function (){
var s__20941__$1 = s__20941;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__20941__$1);
if(temp__4425__auto__){
var s__20941__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20941__$2)){
var c__17625__auto__ = cljs.core.chunk_first.call(null,s__20941__$2);
var size__17626__auto__ = cljs.core.count.call(null,c__17625__auto__);
var b__20943 = cljs.core.chunk_buffer.call(null,size__17626__auto__);
if((function (){var i__20942 = (0);
while(true){
if((i__20942 < size__17626__auto__)){
var vec__20946 = cljs.core._nth.call(null,c__17625__auto__,i__20942);
var k = cljs.core.nth.call(null,vec__20946,(0),null);
var v = cljs.core.nth.call(null,vec__20946,(1),null);
cljs.core.chunk_append.call(null,b__20943,(function (){var rk = schema.core.explicit_schema_key.call(null,k);
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
return schema.spec.collection.one_element.call(null,required_QMARK_,schema.core.map_entry.call(null,schema.core.eq.call(null,rk),v),((function (i__20942,rk,required_QMARK_,vec__20946,k,v,c__17625__auto__,size__17626__auto__,b__20943,s__20941__$2,temp__4425__auto__,extra_keys_schema){
return (function (item_fn,m){
var e = cljs.core.find.call(null,m,rk);
if(cljs.core.truth_(e)){
item_fn.call(null,e);
} else {
if(cljs.core.truth_(required_QMARK_)){
item_fn.call(null,schema.utils.error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rk,new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null)], null)));
} else {
}
}

if(cljs.core.truth_(e)){
return cljs.core.dissoc.call(null,m,rk);
} else {
return m;
}
});})(i__20942,rk,required_QMARK_,vec__20946,k,v,c__17625__auto__,size__17626__auto__,b__20943,s__20941__$2,temp__4425__auto__,extra_keys_schema))
);
})());

var G__20949 = (i__20942 + (1));
i__20942 = G__20949;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20943),schema$core$map_elements_$_iter__20940.call(null,cljs.core.chunk_rest.call(null,s__20941__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20943),null);
}
} else {
var vec__20947 = cljs.core.first.call(null,s__20941__$2);
var k = cljs.core.nth.call(null,vec__20947,(0),null);
var v = cljs.core.nth.call(null,vec__20947,(1),null);
return cljs.core.cons.call(null,(function (){var rk = schema.core.explicit_schema_key.call(null,k);
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
return schema.spec.collection.one_element.call(null,required_QMARK_,schema.core.map_entry.call(null,schema.core.eq.call(null,rk),v),((function (rk,required_QMARK_,vec__20947,k,v,s__20941__$2,temp__4425__auto__,extra_keys_schema){
return (function (item_fn,m){
var e = cljs.core.find.call(null,m,rk);
if(cljs.core.truth_(e)){
item_fn.call(null,e);
} else {
if(cljs.core.truth_(required_QMARK_)){
item_fn.call(null,schema.utils.error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rk,new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null)], null)));
} else {
}
}

if(cljs.core.truth_(e)){
return cljs.core.dissoc.call(null,m,rk);
} else {
return m;
}
});})(rk,required_QMARK_,vec__20947,k,v,s__20941__$2,temp__4425__auto__,extra_keys_schema))
);
})(),schema$core$map_elements_$_iter__20940.call(null,cljs.core.rest.call(null,s__20941__$2)));
}
} else {
return null;
}
break;
}
});})(extra_keys_schema))
,null,null));
});})(extra_keys_schema))
;
return iter__17627__auto__.call(null,cljs.core.dissoc.call(null,this$,extra_keys_schema));
})(),(cljs.core.truth_(extra_keys_schema)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements.call(null,cljs.core.apply.call(null,schema.core.map_entry,cljs.core.find.call(null,this$,extra_keys_schema)))], null):null));
});
schema.core.map_error = (function schema$core$map_error(){
return (function (_,elts,extra){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.concat.call(null,cljs.core.keep.call(null,schema.utils.error_val,elts),(function (){var iter__17627__auto__ = (function schema$core$map_error_$_iter__20958(s__20959){
return (new cljs.core.LazySeq(null,(function (){
var s__20959__$1 = s__20959;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__20959__$1);
if(temp__4425__auto__){
var s__20959__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20959__$2)){
var c__17625__auto__ = cljs.core.chunk_first.call(null,s__20959__$2);
var size__17626__auto__ = cljs.core.count.call(null,c__17625__auto__);
var b__20961 = cljs.core.chunk_buffer.call(null,size__17626__auto__);
if((function (){var i__20960 = (0);
while(true){
if((i__20960 < size__17626__auto__)){
var vec__20964 = cljs.core._nth.call(null,c__17625__auto__,i__20960);
var k = cljs.core.nth.call(null,vec__20964,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__20964,(1),null);
cljs.core.chunk_append.call(null,b__20961,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Symbol(null,"disallowed-key","disallowed-key",-1877785633,null)], null));

var G__20966 = (i__20960 + (1));
i__20960 = G__20966;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20961),schema$core$map_error_$_iter__20958.call(null,cljs.core.chunk_rest.call(null,s__20959__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20961),null);
}
} else {
var vec__20965 = cljs.core.first.call(null,s__20959__$2);
var k = cljs.core.nth.call(null,vec__20965,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__20965,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Symbol(null,"disallowed-key","disallowed-key",-1877785633,null)], null),schema$core$map_error_$_iter__20958.call(null,cljs.core.rest.call(null,s__20959__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17627__auto__.call(null,extra);
})()));
});
});
schema.core.map_spec = (function schema$core$map_spec(this$){
return schema.spec.collection.collection_spec.call(null,schema.spec.core.precondition.call(null,this$,cljs.core.map_QMARK_,(function (p1__19304__19305__auto__){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__19304__19305__auto__),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
})),(function (p1__20967_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,p1__20967_SHARP_);
}),schema.core.map_elements.call(null,this$),schema.core.map_error.call(null));
});
schema.core.map_explain = (function schema$core$map_explain(this$){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__17627__auto__ = (function schema$core$map_explain_$_iter__20976(s__20977){
return (new cljs.core.LazySeq(null,(function (){
var s__20977__$1 = s__20977;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__20977__$1);
if(temp__4425__auto__){
var s__20977__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20977__$2)){
var c__17625__auto__ = cljs.core.chunk_first.call(null,s__20977__$2);
var size__17626__auto__ = cljs.core.count.call(null,c__17625__auto__);
var b__20979 = cljs.core.chunk_buffer.call(null,size__17626__auto__);
if((function (){var i__20978 = (0);
while(true){
if((i__20978 < size__17626__auto__)){
var vec__20982 = cljs.core._nth.call(null,c__17625__auto__,i__20978);
var k = cljs.core.nth.call(null,vec__20982,(0),null);
var v = cljs.core.nth.call(null,vec__20982,(1),null);
cljs.core.chunk_append.call(null,b__20979,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain_kspec.call(null,k),schema.core.explain.call(null,v)], null));

var G__20984 = (i__20978 + (1));
i__20978 = G__20984;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20979),schema$core$map_explain_$_iter__20976.call(null,cljs.core.chunk_rest.call(null,s__20977__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20979),null);
}
} else {
var vec__20983 = cljs.core.first.call(null,s__20977__$2);
var k = cljs.core.nth.call(null,vec__20983,(0),null);
var v = cljs.core.nth.call(null,vec__20983,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain_kspec.call(null,k),schema.core.explain.call(null,v)], null),schema$core$map_explain_$_iter__20976.call(null,cljs.core.rest.call(null,s__20977__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17627__auto__.call(null,this$);
})());
});
cljs.core.PersistentArrayMap.prototype.schema$core$Schema$ = true;

cljs.core.PersistentArrayMap.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_spec.call(null,this$__$1);
});

cljs.core.PersistentArrayMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_explain.call(null,this$__$1);
});

cljs.core.PersistentHashMap.prototype.schema$core$Schema$ = true;

cljs.core.PersistentHashMap.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_spec.call(null,this$__$1);
});

cljs.core.PersistentHashMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_explain.call(null,this$__$1);
});
cljs.core.PersistentHashSet.prototype.schema$core$Schema$ = true;

cljs.core.PersistentHashSet.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,this$__$1),(1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Set schema must have exactly one element")));
}

return schema.spec.collection.collection_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,cljs.core.set_QMARK_,((function (this$__$1){
return (function (p1__19304__19305__auto__){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__19304__19305__auto__),new cljs.core.Symbol(null,"set?","set?",1636014792,null));
});})(this$__$1))
),cljs.core.set,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements.call(null,cljs.core.first.call(null,this$__$1))], null),((function (this$__$1){
return (function (_,xs,___$1){
return cljs.core.set.call(null,cljs.core.keep.call(null,schema.utils.error_val,xs));
});})(this$__$1))
);
});

cljs.core.PersistentHashSet.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain.call(null,cljs.core.first.call(null,this$__$1))], null));
});
schema.core.queue_QMARK_ = (function schema$core$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
schema.core.as_queue = (function schema$core$as_queue(col){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.PersistentQueue.EMPTY,col);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Queue = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Queue.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17469__auto__,k__17470__auto__){
var self__ = this;
var this__17469__auto____$1 = this;
return cljs.core._lookup.call(null,this__17469__auto____$1,k__17470__auto__,null);
});

schema.core.Queue.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17471__auto__,k20986,else__17472__auto__){
var self__ = this;
var this__17471__auto____$1 = this;
var G__20988 = (((k20986 instanceof cljs.core.Keyword))?k20986.fqn:null);
switch (G__20988) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20986,else__17472__auto__);

}
});

schema.core.Queue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17483__auto__,writer__17484__auto__,opts__17485__auto__){
var self__ = this;
var this__17483__auto____$1 = this;
var pr_pair__17486__auto__ = ((function (this__17483__auto____$1){
return (function (keyval__17487__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17484__auto__,cljs.core.pr_writer,""," ","",opts__17485__auto__,keyval__17487__auto__);
});})(this__17483__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17484__auto__,pr_pair__17486__auto__,"#schema.core.Queue{",", ","}",opts__17485__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Queue.prototype.cljs$core$IIterable$ = true;

schema.core.Queue.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20985){
var self__ = this;
var G__20985__$1 = this;
return (new cljs.core.RecordIter((0),G__20985__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Queue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17467__auto__){
var self__ = this;
var this__17467__auto____$1 = this;
return self__.__meta;
});

schema.core.Queue.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17463__auto__){
var self__ = this;
var this__17463__auto____$1 = this;
return (new schema.core.Queue(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Queue.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17473__auto__){
var self__ = this;
var this__17473__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Queue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17464__auto__){
var self__ = this;
var this__17464__auto____$1 = this;
var h__17290__auto__ = self__.__hash;
if(!((h__17290__auto__ == null))){
return h__17290__auto__;
} else {
var h__17290__auto____$1 = cljs.core.hash_imap.call(null,this__17464__auto____$1);
self__.__hash = h__17290__auto____$1;

return h__17290__auto____$1;
}
});

schema.core.Queue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17465__auto__,other__17466__auto__){
var self__ = this;
var this__17465__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16843__auto__ = other__17466__auto__;
if(cljs.core.truth_(and__16843__auto__)){
var and__16843__auto____$1 = (this__17465__auto____$1.constructor === other__17466__auto__.constructor);
if(and__16843__auto____$1){
return cljs.core.equiv_map.call(null,this__17465__auto____$1,other__17466__auto__);
} else {
return and__16843__auto____$1;
}
} else {
return and__16843__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Queue.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17478__auto__,k__17479__auto__){
var self__ = this;
var this__17478__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null], null), null),k__17479__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17478__auto____$1),self__.__meta),k__17479__auto__);
} else {
return (new schema.core.Queue(self__.schema,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17479__auto__)),null));
}
});

schema.core.Queue.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17476__auto__,k__17477__auto__,G__20985){
var self__ = this;
var this__17476__auto____$1 = this;
var pred__20989 = cljs.core.keyword_identical_QMARK_;
var expr__20990 = k__17477__auto__;
if(cljs.core.truth_(pred__20989.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__20990))){
return (new schema.core.Queue(G__20985,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Queue(self__.schema,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17477__auto__,G__20985),null));
}
});

schema.core.Queue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17481__auto__){
var self__ = this;
var this__17481__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Queue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17468__auto__,G__20985){
var self__ = this;
var this__17468__auto____$1 = this;
return (new schema.core.Queue(self__.schema,G__20985,self__.__extmap,self__.__hash));
});

schema.core.Queue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17474__auto__,entry__17475__auto__){
var self__ = this;
var this__17474__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17475__auto__)){
return cljs.core._assoc.call(null,this__17474__auto____$1,cljs.core._nth.call(null,entry__17475__auto__,(0)),cljs.core._nth.call(null,entry__17475__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17474__auto____$1,entry__17475__auto__);
}
});

schema.core.Queue.prototype.schema$core$Schema$ = true;

schema.core.Queue.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,schema.core.queue_QMARK_,((function (this$__$1){
return (function (p1__19304__19305__auto__){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__19304__19305__auto__),new cljs.core.Symbol(null,"queue?","queue?",-880510795,null));
});})(this$__$1))
),schema.core.as_queue,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements.call(null,self__.schema)], null),((function (this$__$1){
return (function (_,xs,___$1){
return schema.core.as_queue.call(null,cljs.core.keep.call(null,schema.utils.error_val,xs));
});})(this$__$1))
);
});

schema.core.Queue.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,self__.schema)),new cljs.core.Symbol(null,"queue","queue",-1198599890,null));
});

schema.core.Queue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null)], null);
});

schema.core.Queue.cljs$lang$type = true;

schema.core.Queue.cljs$lang$ctorPrSeq = (function (this__17503__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Queue");
});

schema.core.Queue.cljs$lang$ctorPrWriter = (function (this__17503__auto__,writer__17504__auto__){
return cljs.core._write.call(null,writer__17504__auto__,"schema.core/Queue");
});

schema.core.__GT_Queue = (function schema$core$__GT_Queue(schema__$1){
return (new schema.core.Queue(schema__$1,null,null,null));
});

schema.core.map__GT_Queue = (function schema$core$map__GT_Queue(G__20987){
return (new schema.core.Queue(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__20987),null,cljs.core.dissoc.call(null,G__20987,new cljs.core.Keyword(null,"schema","schema",-1582001791)),null));
});

/**
 * Defines a schema satisfied by instances of clojure.lang.PersistentQueue
 *   (clj.core/PersistentQueue in ClojureScript) whose values satisfy x.
 */
schema.core.queue = (function schema$core$queue(x){
return (new schema.core.Queue(x,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.One = (function (schema,optional_QMARK_,name,__meta,__extmap,__hash){
this.schema = schema;
this.optional_QMARK_ = optional_QMARK_;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17469__auto__,k__17470__auto__){
var self__ = this;
var this__17469__auto____$1 = this;
return cljs.core._lookup.call(null,this__17469__auto____$1,k__17470__auto__,null);
});

schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17471__auto__,k20994,else__17472__auto__){
var self__ = this;
var this__17471__auto____$1 = this;
var G__20996 = (((k20994 instanceof cljs.core.Keyword))?k20994.fqn:null);
switch (G__20996) {
case "schema":
return self__.schema;

break;
case "optional?":
return self__.optional_QMARK_;

break;
case "name":
return self__.name;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20994,else__17472__auto__);

}
});

schema.core.One.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17483__auto__,writer__17484__auto__,opts__17485__auto__){
var self__ = this;
var this__17483__auto____$1 = this;
var pr_pair__17486__auto__ = ((function (this__17483__auto____$1){
return (function (keyval__17487__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17484__auto__,cljs.core.pr_writer,""," ","",opts__17485__auto__,keyval__17487__auto__);
});})(this__17483__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17484__auto__,pr_pair__17486__auto__,"#schema.core.One{",", ","}",opts__17485__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"optional?","optional?",1184638129),self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});

schema.core.One.prototype.cljs$core$IIterable$ = true;

schema.core.One.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20993){
var self__ = this;
var G__20993__$1 = this;
return (new cljs.core.RecordIter((0),G__20993__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"optional?","optional?",1184638129),new cljs.core.Keyword(null,"name","name",1843675177)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.One.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17467__auto__){
var self__ = this;
var this__17467__auto____$1 = this;
return self__.__meta;
});

schema.core.One.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17463__auto__){
var self__ = this;
var this__17463__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.One.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17473__auto__){
var self__ = this;
var this__17473__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.One.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17464__auto__){
var self__ = this;
var this__17464__auto____$1 = this;
var h__17290__auto__ = self__.__hash;
if(!((h__17290__auto__ == null))){
return h__17290__auto__;
} else {
var h__17290__auto____$1 = cljs.core.hash_imap.call(null,this__17464__auto____$1);
self__.__hash = h__17290__auto____$1;

return h__17290__auto____$1;
}
});

schema.core.One.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17465__auto__,other__17466__auto__){
var self__ = this;
var this__17465__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16843__auto__ = other__17466__auto__;
if(cljs.core.truth_(and__16843__auto__)){
var and__16843__auto____$1 = (this__17465__auto____$1.constructor === other__17466__auto__.constructor);
if(and__16843__auto____$1){
return cljs.core.equiv_map.call(null,this__17465__auto____$1,other__17466__auto__);
} else {
return and__16843__auto____$1;
}
} else {
return and__16843__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.One.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17478__auto__,k__17479__auto__){
var self__ = this;
var this__17478__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"optional?","optional?",1184638129),null], null), null),k__17479__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17478__auto____$1),self__.__meta),k__17479__auto__);
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17479__auto__)),null));
}
});

schema.core.One.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17476__auto__,k__17477__auto__,G__20993){
var self__ = this;
var this__17476__auto____$1 = this;
var pred__20997 = cljs.core.keyword_identical_QMARK_;
var expr__20998 = k__17477__auto__;
if(cljs.core.truth_(pred__20997.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__20998))){
return (new schema.core.One(G__20993,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20997.call(null,new cljs.core.Keyword(null,"optional?","optional?",1184638129),expr__20998))){
return (new schema.core.One(self__.schema,G__20993,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20997.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__20998))){
return (new schema.core.One(self__.schema,self__.optional_QMARK_,G__20993,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17477__auto__,G__20993),null));
}
}
}
});

schema.core.One.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17481__auto__){
var self__ = this;
var this__17481__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"optional?","optional?",1184638129),self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});

schema.core.One.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17468__auto__,G__20993){
var self__ = this;
var this__17468__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,G__20993,self__.__extmap,self__.__hash));
});

schema.core.One.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17474__auto__,entry__17475__auto__){
var self__ = this;
var this__17474__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17475__auto__)){
return cljs.core._assoc.call(null,this__17474__auto____$1,cljs.core._nth.call(null,entry__17475__auto__,(0)),cljs.core._nth.call(null,entry__17475__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17474__auto____$1,entry__17475__auto__);
}
});

schema.core.One.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"optional?","optional?",-1469797640,null),new cljs.core.Symbol(null,"name","name",-810760592,null)], null);
});

schema.core.One.cljs$lang$type = true;

schema.core.One.cljs$lang$ctorPrSeq = (function (this__17503__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/One");
});

schema.core.One.cljs$lang$ctorPrWriter = (function (this__17503__auto__,writer__17504__auto__){
return cljs.core._write.call(null,writer__17504__auto__,"schema.core/One");
});

schema.core.__GT_One = (function schema$core$__GT_One(schema__$1,optional_QMARK_,name){
return (new schema.core.One(schema__$1,optional_QMARK_,name,null,null,null));
});

schema.core.map__GT_One = (function schema$core$map__GT_One(G__20995){
return (new schema.core.One(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__20995),new cljs.core.Keyword(null,"optional?","optional?",1184638129).cljs$core$IFn$_invoke$arity$1(G__20995),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__20995),null,cljs.core.dissoc.call(null,G__20995,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"optional?","optional?",1184638129),new cljs.core.Keyword(null,"name","name",1843675177)),null));
});

/**
 * A single required element of a sequence (not repeated, the implicit default)
 */
schema.core.one = (function schema$core$one(schema__$1,name){
return (new schema.core.One(schema__$1,false,name,null,null,null));
});
/**
 * A single optional element of a sequence (not repeated, the implicit default)
 */
schema.core.optional = (function schema$core$optional(schema__$1,name){
return (new schema.core.One(schema__$1,true,name,null,null,null));
});
schema.core.parse_sequence_schema = (function schema$core$parse_sequence_schema(s){

var vec__21006 = cljs.core.split_with.call(null,(function (p1__21001_SHARP_){
return ((p1__21001_SHARP_ instanceof schema.core.One)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"optional?","optional?",1184638129).cljs$core$IFn$_invoke$arity$1(p1__21001_SHARP_)));
}),s);
var required = cljs.core.nth.call(null,vec__21006,(0),null);
var more = cljs.core.nth.call(null,vec__21006,(1),null);
var vec__21007 = cljs.core.split_with.call(null,((function (vec__21006,required,more){
return (function (p1__21002_SHARP_){
var and__16843__auto__ = (p1__21002_SHARP_ instanceof schema.core.One);
if(and__16843__auto__){
return new cljs.core.Keyword(null,"optional?","optional?",1184638129).cljs$core$IFn$_invoke$arity$1(p1__21002_SHARP_);
} else {
return and__16843__auto__;
}
});})(vec__21006,required,more))
,more);
var optional = cljs.core.nth.call(null,vec__21007,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__21007,(1),null);
if(((cljs.core.count.call(null,more__$1) <= (1))) && (cljs.core.every_QMARK_.call(null,((function (vec__21006,required,more,vec__21007,optional,more__$1){
return (function (p1__21003_SHARP_){
return !((p1__21003_SHARP_ instanceof schema.core.One));
});})(vec__21006,required,more,vec__21007,optional,more__$1))
,more__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"%s is not a valid sequence schema; %s%s%s",s,"a valid sequence schema consists of zero or more `one` elements, ","followed by zero or more `optional` elements, followed by an optional ","schema that will match the remaining elements.")));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,required,optional),cljs.core.first.call(null,more__$1)], null);
});
cljs.core.PersistentVector.prototype.schema$core$Schema$ = true;

cljs.core.PersistentVector.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.spec.collection.collection_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,((function (this$__$1){
return (function (x){
return ((x == null)) || (cljs.core.sequential_QMARK_.call(null,x));
});})(this$__$1))
,((function (this$__$1){
return (function (p1__21008_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__21008_SHARP_),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null));
});})(this$__$1))
),cljs.core.vec,(function (){var vec__21009 = schema.core.parse_sequence_schema.call(null,this$__$1);
var singles = cljs.core.nth.call(null,vec__21009,(0),null);
var multi = cljs.core.nth.call(null,vec__21009,(1),null);
return cljs.core.concat.call(null,(function (){var iter__17627__auto__ = ((function (vec__21009,singles,multi,this$__$1){
return (function schema$core$iter__21010(s__21011){
return (new cljs.core.LazySeq(null,((function (vec__21009,singles,multi,this$__$1){
return (function (){
var s__21011__$1 = s__21011;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__21011__$1);
if(temp__4425__auto__){
var s__21011__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21011__$2)){
var c__17625__auto__ = cljs.core.chunk_first.call(null,s__21011__$2);
var size__17626__auto__ = cljs.core.count.call(null,c__17625__auto__);
var b__21013 = cljs.core.chunk_buffer.call(null,size__17626__auto__);
if((function (){var i__21012 = (0);
while(true){
if((i__21012 < size__17626__auto__)){
var s = cljs.core._nth.call(null,c__17625__auto__,i__21012);
cljs.core.chunk_append.call(null,b__21013,(function (){var required_QMARK_ = cljs.core.not.call(null,s.optional_QMARK_);
return schema.spec.collection.one_element.call(null,required_QMARK_,schema.core.named.call(null,s.schema,s.name),((function (i__21012,required_QMARK_,s,c__17625__auto__,size__17626__auto__,b__21013,s__21011__$2,temp__4425__auto__,vec__21009,singles,multi,this$__$1){
return (function (item_fn,x){
var temp__4423__auto__ = cljs.core.seq.call(null,x);
if(temp__4423__auto__){
var x__$1 = temp__4423__auto__;
item_fn.call(null,cljs.core.first.call(null,x__$1));

return cljs.core.rest.call(null,x__$1);
} else {
if(required_QMARK_){
item_fn.call(null,schema.utils.error.call(null,schema.utils.make_ValidationError.call(null,s.schema,new cljs.core.Keyword("schema.core","missing","schema.core/missing",1420181325),(new cljs.core.Delay(((function (i__21012,temp__4423__auto__,required_QMARK_,s,c__17625__auto__,size__17626__auto__,b__21013,s__21011__$2,temp__4425__auto__,vec__21009,singles,multi,this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,s.name),new cljs.core.Symbol(null,"present?","present?",-1810613791,null));
});})(i__21012,temp__4423__auto__,required_QMARK_,s,c__17625__auto__,size__17626__auto__,b__21013,s__21011__$2,temp__4425__auto__,vec__21009,singles,multi,this$__$1))
,null)),null)));
} else {
}

return null;
}
});})(i__21012,required_QMARK_,s,c__17625__auto__,size__17626__auto__,b__21013,s__21011__$2,temp__4425__auto__,vec__21009,singles,multi,this$__$1))
);
})());

var G__21019 = (i__21012 + (1));
i__21012 = G__21019;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21013),schema$core$iter__21010.call(null,cljs.core.chunk_rest.call(null,s__21011__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21013),null);
}
} else {
var s = cljs.core.first.call(null,s__21011__$2);
return cljs.core.cons.call(null,(function (){var required_QMARK_ = cljs.core.not.call(null,s.optional_QMARK_);
return schema.spec.collection.one_element.call(null,required_QMARK_,schema.core.named.call(null,s.schema,s.name),((function (required_QMARK_,s,s__21011__$2,temp__4425__auto__,vec__21009,singles,multi,this$__$1){
return (function (item_fn,x){
var temp__4423__auto__ = cljs.core.seq.call(null,x);
if(temp__4423__auto__){
var x__$1 = temp__4423__auto__;
item_fn.call(null,cljs.core.first.call(null,x__$1));

return cljs.core.rest.call(null,x__$1);
} else {
if(required_QMARK_){
item_fn.call(null,schema.utils.error.call(null,schema.utils.make_ValidationError.call(null,s.schema,new cljs.core.Keyword("schema.core","missing","schema.core/missing",1420181325),(new cljs.core.Delay(((function (temp__4423__auto__,required_QMARK_,s,s__21011__$2,temp__4425__auto__,vec__21009,singles,multi,this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,s.name),new cljs.core.Symbol(null,"present?","present?",-1810613791,null));
});})(temp__4423__auto__,required_QMARK_,s,s__21011__$2,temp__4425__auto__,vec__21009,singles,multi,this$__$1))
,null)),null)));
} else {
}

return null;
}
});})(required_QMARK_,s,s__21011__$2,temp__4425__auto__,vec__21009,singles,multi,this$__$1))
);
})(),schema$core$iter__21010.call(null,cljs.core.rest.call(null,s__21011__$2)));
}
} else {
return null;
}
break;
}
});})(vec__21009,singles,multi,this$__$1))
,null,null));
});})(vec__21009,singles,multi,this$__$1))
;
return iter__17627__auto__.call(null,singles);
})(),(cljs.core.truth_(multi)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements.call(null,multi)], null):null));
})(),((function (this$__$1){
return (function (_,elts,extra){
var head = cljs.core.mapv.call(null,schema.utils.error_val,elts);
if(cljs.core.seq.call(null,extra)){
return cljs.core.conj.call(null,head,schema.utils.error_val.call(null,schema.utils.error.call(null,schema.utils.make_ValidationError.call(null,null,extra,(new cljs.core.Delay(((function (head,this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.count.call(null,extra)),new cljs.core.Symbol(null,"has-extra-elts?","has-extra-elts?",-1376562869,null));
});})(head,this$__$1))
,null)),null))));
} else {
return head;
}
});})(this$__$1))
);
});

cljs.core.PersistentVector.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
var vec__21014 = schema.core.parse_sequence_schema.call(null,this$__$1);
var singles = cljs.core.nth.call(null,vec__21014,(0),null);
var multi = cljs.core.nth.call(null,vec__21014,(1),null);
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var iter__17627__auto__ = ((function (vec__21014,singles,multi,this$__$1){
return (function schema$core$iter__21015(s__21016){
return (new cljs.core.LazySeq(null,((function (vec__21014,singles,multi,this$__$1){
return (function (){
var s__21016__$1 = s__21016;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__21016__$1);
if(temp__4425__auto__){
var s__21016__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21016__$2)){
var c__17625__auto__ = cljs.core.chunk_first.call(null,s__21016__$2);
var size__17626__auto__ = cljs.core.count.call(null,c__17625__auto__);
var b__21018 = cljs.core.chunk_buffer.call(null,size__17626__auto__);
if((function (){var i__21017 = (0);
while(true){
if((i__21017 < size__17626__auto__)){
var s = cljs.core._nth.call(null,c__17625__auto__,i__21017);
cljs.core.chunk_append.call(null,b__21018,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),schema.core.explain.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(s))),(cljs.core.truth_(s.optional_QMARK_)?new cljs.core.Symbol(null,"optional","optional",-600484260,null):new cljs.core.Symbol(null,"one","one",-1719427865,null))));

var G__21020 = (i__21017 + (1));
i__21017 = G__21020;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21018),schema$core$iter__21015.call(null,cljs.core.chunk_rest.call(null,s__21016__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21018),null);
}
} else {
var s = cljs.core.first.call(null,s__21016__$2);
return cljs.core.cons.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),schema.core.explain.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(s))),(cljs.core.truth_(s.optional_QMARK_)?new cljs.core.Symbol(null,"optional","optional",-600484260,null):new cljs.core.Symbol(null,"one","one",-1719427865,null))),schema$core$iter__21015.call(null,cljs.core.rest.call(null,s__21016__$2)));
}
} else {
return null;
}
break;
}
});})(vec__21014,singles,multi,this$__$1))
,null,null));
});})(vec__21014,singles,multi,this$__$1))
;
return iter__17627__auto__.call(null,singles);
})(),(cljs.core.truth_(multi)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain.call(null,multi)], null):null)));
});
/**
 * A schema for a pair of schemas and their names
 */
schema.core.pair = (function schema$core$pair(first_schema,first_name,second_schema,second_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,first_schema,first_name),schema.core.one.call(null,second_schema,second_name)], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Record = (function (klass,schema,__meta,__extmap,__hash){
this.klass = klass;
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17469__auto__,k__17470__auto__){
var self__ = this;
var this__17469__auto____$1 = this;
return cljs.core._lookup.call(null,this__17469__auto____$1,k__17470__auto__,null);
});

schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17471__auto__,k21025,else__17472__auto__){
var self__ = this;
var this__17471__auto____$1 = this;
var G__21027 = (((k21025 instanceof cljs.core.Keyword))?k21025.fqn:null);
switch (G__21027) {
case "klass":
return self__.klass;

break;
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21025,else__17472__auto__);

}
});

schema.core.Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17483__auto__,writer__17484__auto__,opts__17485__auto__){
var self__ = this;
var this__17483__auto____$1 = this;
var pr_pair__17486__auto__ = ((function (this__17483__auto____$1){
return (function (keyval__17487__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17484__auto__,cljs.core.pr_writer,""," ","",opts__17485__auto__,keyval__17487__auto__);
});})(this__17483__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17484__auto__,pr_pair__17486__auto__,"#schema.core.Record{",", ","}",opts__17485__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"klass","klass",-1386752349),self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IIterable$ = true;

schema.core.Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21024){
var self__ = this;
var G__21024__$1 = this;
return (new cljs.core.RecordIter((0),G__21024__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"klass","klass",-1386752349),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17467__auto__){
var self__ = this;
var this__17467__auto____$1 = this;
return self__.__meta;
});

schema.core.Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17463__auto__){
var self__ = this;
var this__17463__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17473__auto__){
var self__ = this;
var this__17473__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17464__auto__){
var self__ = this;
var this__17464__auto____$1 = this;
var h__17290__auto__ = self__.__hash;
if(!((h__17290__auto__ == null))){
return h__17290__auto__;
} else {
var h__17290__auto____$1 = cljs.core.hash_imap.call(null,this__17464__auto____$1);
self__.__hash = h__17290__auto____$1;

return h__17290__auto____$1;
}
});

schema.core.Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17465__auto__,other__17466__auto__){
var self__ = this;
var this__17465__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16843__auto__ = other__17466__auto__;
if(cljs.core.truth_(and__16843__auto__)){
var and__16843__auto____$1 = (this__17465__auto____$1.constructor === other__17466__auto__.constructor);
if(and__16843__auto____$1){
return cljs.core.equiv_map.call(null,this__17465__auto____$1,other__17466__auto__);
} else {
return and__16843__auto____$1;
}
} else {
return and__16843__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17478__auto__,k__17479__auto__){
var self__ = this;
var this__17478__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"klass","klass",-1386752349),null], null), null),k__17479__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17478__auto____$1),self__.__meta),k__17479__auto__);
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17479__auto__)),null));
}
});

schema.core.Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17476__auto__,k__17477__auto__,G__21024){
var self__ = this;
var this__17476__auto____$1 = this;
var pred__21028 = cljs.core.keyword_identical_QMARK_;
var expr__21029 = k__17477__auto__;
if(cljs.core.truth_(pred__21028.call(null,new cljs.core.Keyword(null,"klass","klass",-1386752349),expr__21029))){
return (new schema.core.Record(G__21024,self__.schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21028.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__21029))){
return (new schema.core.Record(self__.klass,G__21024,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17477__auto__,G__21024),null));
}
}
});

schema.core.Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17481__auto__){
var self__ = this;
var this__17481__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"klass","klass",-1386752349),self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17468__auto__,G__21024){
var self__ = this;
var this__17468__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,G__21024,self__.__extmap,self__.__hash));
});

schema.core.Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17474__auto__,entry__17475__auto__){
var self__ = this;
var this__17474__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17475__auto__)){
return cljs.core._assoc.call(null,this__17474__auto____$1,cljs.core._nth.call(null,entry__17475__auto__,(0)),cljs.core._nth.call(null,entry__17475__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17474__auto____$1,entry__17475__auto__);
}
});

schema.core.Record.prototype.schema$core$Schema$ = true;

schema.core.Record.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec.call(null,(function (){var p = schema.spec.core.precondition.call(null,this$__$1,((function (this$__$1){
return (function (p1__21021_SHARP_){
return (p1__21021_SHARP_ instanceof self__.klass);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__21022_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__21022_SHARP_),self__.klass),new cljs.core.Symbol(null,"instance?","instance?",1075939923,null));
});})(this$__$1))
);
var temp__4423__auto__ = new cljs.core.Keyword(null,"extra-validator-fn","extra-validator-fn",1562905865).cljs$core$IFn$_invoke$arity$1(this$__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var evf = temp__4423__auto__;
return cljs.core.some_fn.call(null,p,schema.spec.core.precondition.call(null,this$__$1,evf,((function (evf,temp__4423__auto__,p,this$__$1){
return (function (p1__21023_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__21023_SHARP_),new cljs.core.Symbol(null,"passes-extra-validation?","passes-extra-validation?",-1964809231,null));
});})(evf,temp__4423__auto__,p,this$__$1))
));
} else {
return p;
}
})(),new cljs.core.Keyword(null,"constructor","constructor",-1953928811).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,this$__$1)),schema.core.map_elements.call(null,self__.schema),schema.core.map_error.call(null));
});

schema.core.Record.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,self__.schema)),cljs.core.symbol.call(null,cljs.core.pr_str.call(null,self__.klass))),new cljs.core.Symbol(null,"record","record",861424668,null));
});

schema.core.Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"klass","klass",253779178,null),new cljs.core.Symbol(null,"schema","schema",58529736,null)], null);
});

schema.core.Record.cljs$lang$type = true;

schema.core.Record.cljs$lang$ctorPrSeq = (function (this__17503__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Record");
});

schema.core.Record.cljs$lang$ctorPrWriter = (function (this__17503__auto__,writer__17504__auto__){
return cljs.core._write.call(null,writer__17504__auto__,"schema.core/Record");
});

schema.core.__GT_Record = (function schema$core$__GT_Record(klass,schema__$1){
return (new schema.core.Record(klass,schema__$1,null,null,null));
});

schema.core.map__GT_Record = (function schema$core$map__GT_Record(G__21026){
return (new schema.core.Record(new cljs.core.Keyword(null,"klass","klass",-1386752349).cljs$core$IFn$_invoke$arity$1(G__21026),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__21026),null,cljs.core.dissoc.call(null,G__21026,new cljs.core.Keyword(null,"klass","klass",-1386752349),new cljs.core.Keyword(null,"schema","schema",-1582001791)),null));
});

schema.core.record_STAR_ = (function schema$core$record_STAR_(klass,schema__$1,map_constructor){
if(cljs.core.map_QMARK_.call(null,schema__$1)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Expected map, got %s",schema.utils.type_of.call(null,schema__$1))));
}

return cljs.core.with_meta.call(null,(new schema.core.Record(klass,schema__$1,null,null,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"constructor","constructor",-1953928811),map_constructor], null));
});
schema.core.explain_input_schema = (function schema$core$explain_input_schema(input_schema){
var vec__21035 = cljs.core.split_with.call(null,(function (p1__21032_SHARP_){
return (p1__21032_SHARP_ instanceof schema.core.One);
}),input_schema);
var required = cljs.core.nth.call(null,vec__21035,(0),null);
var more = cljs.core.nth.call(null,vec__21035,(1),null);
return cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__21035,required,more){
return (function (p1__21033_SHARP_){
return schema.core.explain.call(null,p1__21033_SHARP_.schema);
});})(vec__21035,required,more))
,required),((cljs.core.seq.call(null,more))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),cljs.core.mapv.call(null,schema.core.explain,more)], null):null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.FnSchema = (function (output_schema,input_schemas,__meta,__extmap,__hash){
this.output_schema = output_schema;
this.input_schemas = input_schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17469__auto__,k__17470__auto__){
var self__ = this;
var this__17469__auto____$1 = this;
return cljs.core._lookup.call(null,this__17469__auto____$1,k__17470__auto__,null);
});

schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17471__auto__,k21037,else__17472__auto__){
var self__ = this;
var this__17471__auto____$1 = this;
var G__21039 = (((k21037 instanceof cljs.core.Keyword))?k21037.fqn:null);
switch (G__21039) {
case "output-schema":
return self__.output_schema;

break;
case "input-schemas":
return self__.input_schemas;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21037,else__17472__auto__);

}
});

schema.core.FnSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17483__auto__,writer__17484__auto__,opts__17485__auto__){
var self__ = this;
var this__17483__auto____$1 = this;
var pr_pair__17486__auto__ = ((function (this__17483__auto____$1){
return (function (keyval__17487__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17484__auto__,cljs.core.pr_writer,""," ","",opts__17485__auto__,keyval__17487__auto__);
});})(this__17483__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17484__auto__,pr_pair__17486__auto__,"#schema.core.FnSchema{",", ","}",opts__17485__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output-schema","output-schema",272504137),self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),self__.input_schemas],null))], null),self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IIterable$ = true;

schema.core.FnSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21036){
var self__ = this;
var G__21036__$1 = this;
return (new cljs.core.RecordIter((0),G__21036__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"output-schema","output-schema",272504137),new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.FnSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17467__auto__){
var self__ = this;
var this__17467__auto____$1 = this;
return self__.__meta;
});

schema.core.FnSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17463__auto__){
var self__ = this;
var this__17463__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.FnSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17473__auto__){
var self__ = this;
var this__17473__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17464__auto__){
var self__ = this;
var this__17464__auto____$1 = this;
var h__17290__auto__ = self__.__hash;
if(!((h__17290__auto__ == null))){
return h__17290__auto__;
} else {
var h__17290__auto____$1 = cljs.core.hash_imap.call(null,this__17464__auto____$1);
self__.__hash = h__17290__auto____$1;

return h__17290__auto____$1;
}
});

schema.core.FnSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17465__auto__,other__17466__auto__){
var self__ = this;
var this__17465__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16843__auto__ = other__17466__auto__;
if(cljs.core.truth_(and__16843__auto__)){
var and__16843__auto____$1 = (this__17465__auto____$1.constructor === other__17466__auto__.constructor);
if(and__16843__auto____$1){
return cljs.core.equiv_map.call(null,this__17465__auto____$1,other__17466__auto__);
} else {
return and__16843__auto____$1;
}
} else {
return and__16843__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.FnSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17478__auto__,k__17479__auto__){
var self__ = this;
var this__17478__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"output-schema","output-schema",272504137),null,new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),null], null), null),k__17479__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17478__auto____$1),self__.__meta),k__17479__auto__);
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17479__auto__)),null));
}
});

schema.core.FnSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17476__auto__,k__17477__auto__,G__21036){
var self__ = this;
var this__17476__auto____$1 = this;
var pred__21040 = cljs.core.keyword_identical_QMARK_;
var expr__21041 = k__17477__auto__;
if(cljs.core.truth_(pred__21040.call(null,new cljs.core.Keyword(null,"output-schema","output-schema",272504137),expr__21041))){
return (new schema.core.FnSchema(G__21036,self__.input_schemas,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21040.call(null,new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),expr__21041))){
return (new schema.core.FnSchema(self__.output_schema,G__21036,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17477__auto__,G__21036),null));
}
}
});

schema.core.FnSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17481__auto__){
var self__ = this;
var this__17481__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output-schema","output-schema",272504137),self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),self__.input_schemas],null))], null),self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17468__auto__,G__21036){
var self__ = this;
var this__17468__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,G__21036,self__.__extmap,self__.__hash));
});

schema.core.FnSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17474__auto__,entry__17475__auto__){
var self__ = this;
var this__17474__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17475__auto__)){
return cljs.core._assoc.call(null,this__17474__auto____$1,cljs.core._nth.call(null,entry__17475__auto__,(0)),cljs.core._nth.call(null,entry__17475__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17474__auto____$1,entry__17475__auto__);
}
});

schema.core.FnSchema.prototype.schema$core$Schema$ = true;

schema.core.FnSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,cljs.core.ifn_QMARK_,((function (this$__$1){
return (function (p1__19304__19305__auto__){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__19304__19305__auto__),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null));
});})(this$__$1))
));
});

schema.core.FnSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.input_schemas) > (1))){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"=>*","=>*",1909690043,null),schema.core.explain.call(null,self__.output_schema),cljs.core.map.call(null,schema.core.explain_input_schema,self__.input_schemas));
} else {
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"=>","=>",-813269641,null),schema.core.explain.call(null,self__.output_schema),schema.core.explain_input_schema.call(null,cljs.core.first.call(null,self__.input_schemas)));
}
});

schema.core.FnSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"output-schema","output-schema",1913035664,null),new cljs.core.Symbol(null,"input-schemas","input-schemas",658376722,null)], null);
});

schema.core.FnSchema.cljs$lang$type = true;

schema.core.FnSchema.cljs$lang$ctorPrSeq = (function (this__17503__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/FnSchema");
});

schema.core.FnSchema.cljs$lang$ctorPrWriter = (function (this__17503__auto__,writer__17504__auto__){
return cljs.core._write.call(null,writer__17504__auto__,"schema.core/FnSchema");
});

schema.core.__GT_FnSchema = (function schema$core$__GT_FnSchema(output_schema,input_schemas){
return (new schema.core.FnSchema(output_schema,input_schemas,null,null,null));
});

schema.core.map__GT_FnSchema = (function schema$core$map__GT_FnSchema(G__21038){
return (new schema.core.FnSchema(new cljs.core.Keyword(null,"output-schema","output-schema",272504137).cljs$core$IFn$_invoke$arity$1(G__21038),new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805).cljs$core$IFn$_invoke$arity$1(G__21038),null,cljs.core.dissoc.call(null,G__21038,new cljs.core.Keyword(null,"output-schema","output-schema",272504137),new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805)),null));
});

schema.core.arity = (function schema$core$arity(input_schema){
if(cljs.core.seq.call(null,input_schema)){
if((cljs.core.last.call(null,input_schema) instanceof schema.core.One)){
return cljs.core.count.call(null,input_schema);
} else {
return Number.MAX_VALUE;
}
} else {
return (0);
}
});
/**
 * A function outputting a value in output schema, whose argument vector must match one of
 * input-schemas, each of which should be a sequence schema.
 * Currently function schemas are purely descriptive; they validate against any function,
 * regardless of actual input and output types.
 */
schema.core.make_fn_schema = (function schema$core$make_fn_schema(output_schema,input_schemas){
if(cljs.core.seq.call(null,input_schemas)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Function must have at least one input schema")));
}

if(cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,input_schemas)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Each arity must be a vector.")));
}

if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core.distinct_QMARK_,cljs.core.map.call(null,schema.core.arity,input_schemas)))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Arities must be distinct")));
}

return (new schema.core.FnSchema(output_schema,cljs.core.sort_by.call(null,schema.core.arity,input_schemas),null,null,null));
});
/**
 * Records name in schema's metadata.
 */
schema.core.schema_with_name = (function schema$core$schema_with_name(schema__$1,name){
return cljs.core.vary_meta.call(null,schema__$1,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),name);
});
/**
 * Returns the name of a schema attached via schema-with-name (or defschema).
 */
schema.core.schema_name = (function schema$core$schema_name(schema__$1){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,schema__$1));
});
/**
 * Returns the namespace of a schema attached via defschema.
 */
schema.core.schema_ns = (function schema$core$schema_ns(schema__$1){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,schema__$1));
});
/**
 * Get the current global schema validation setting.
 */
schema.core.fn_validation_QMARK_ = (function schema$core$fn_validation_QMARK_(){
return schema.utils.use_fn_validation.get_cell();
});
/**
 * Globally turn on (or off) schema validation for all s/fn and s/defn instances.
 */
schema.core.set_fn_validation_BANG_ = (function schema$core$set_fn_validation_BANG_(on_QMARK_){
return schema.utils.use_fn_validation.set_cell(on_QMARK_);
});
/**
 * Attach the schema to fn f at runtime, extractable by fn-schema.
 */
schema.core.schematize_fn = (function schema$core$schematize_fn(f,schema__$1){
return cljs.core.vary_meta.call(null,f,cljs.core.assoc,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1);
});
/**
 * Produce the schema for a function defined with s/fn or s/defn.
 */
schema.core.fn_schema = (function schema$core$fn_schema(f){
if(cljs.core.fn_QMARK_.call(null,f)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Non-function %s",schema.utils.type_of.call(null,f))));
}

var or__16855__auto__ = schema.utils.class_schema.call(null,schema.utils.fn_schema_bearer.call(null,f));
if(cljs.core.truth_(or__16855__auto__)){
return or__16855__auto__;
} else {
var m__19029__auto__ = cljs.core.meta.call(null,f);
var k__19030__auto__ = new cljs.core.Keyword(null,"schema","schema",-1582001791);
var temp__4423__auto__ = cljs.core.find.call(null,m__19029__auto__,k__19030__auto__);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__19031__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__19031__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__19030__auto__,m__19029__auto__)));
}
}
});
/**
 * Sets the maximum length of value to be output before it is contracted to a prettier name.
 */
schema.core.set_max_value_length_BANG_ = (function schema$core$set_max_value_length_BANG_(max_length){
return cljs.core.reset_BANG_.call(null,schema.utils.max_value_length,max_length);
});

//# sourceMappingURL=core.js.map