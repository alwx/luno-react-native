// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args22693 = [];
var len__17899__auto___22699 = arguments.length;
var i__17900__auto___22700 = (0);
while(true){
if((i__17900__auto___22700 < len__17899__auto___22699)){
args22693.push((arguments[i__17900__auto___22700]));

var G__22701 = (i__17900__auto___22700 + (1));
i__17900__auto___22700 = G__22701;
continue;
} else {
}
break;
}

var G__22695 = args22693.length;
switch (G__22695) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22693.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async22696 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22696 = (function (f,blockable,meta22697){
this.f = f;
this.blockable = blockable;
this.meta22697 = meta22697;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22698,meta22697__$1){
var self__ = this;
var _22698__$1 = this;
return (new cljs.core.async.t_cljs$core$async22696(self__.f,self__.blockable,meta22697__$1));
});

cljs.core.async.t_cljs$core$async22696.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22698){
var self__ = this;
var _22698__$1 = this;
return self__.meta22697;
});

cljs.core.async.t_cljs$core$async22696.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22696.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22696.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async22696.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22696.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22697","meta22697",-298245821,null)], null);
});

cljs.core.async.t_cljs$core$async22696.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22696.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22696";

cljs.core.async.t_cljs$core$async22696.cljs$lang$ctorPrWriter = (function (this__17439__auto__,writer__17440__auto__,opt__17441__auto__){
return cljs.core._write.call(null,writer__17440__auto__,"cljs.core.async/t_cljs$core$async22696");
});

cljs.core.async.__GT_t_cljs$core$async22696 = (function cljs$core$async$__GT_t_cljs$core$async22696(f__$1,blockable__$1,meta22697){
return (new cljs.core.async.t_cljs$core$async22696(f__$1,blockable__$1,meta22697));
});

}

return (new cljs.core.async.t_cljs$core$async22696(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args22705 = [];
var len__17899__auto___22708 = arguments.length;
var i__17900__auto___22709 = (0);
while(true){
if((i__17900__auto___22709 < len__17899__auto___22708)){
args22705.push((arguments[i__17900__auto___22709]));

var G__22710 = (i__17900__auto___22709 + (1));
i__17900__auto___22709 = G__22710;
continue;
} else {
}
break;
}

var G__22707 = args22705.length;
switch (G__22707) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22705.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args22712 = [];
var len__17899__auto___22715 = arguments.length;
var i__17900__auto___22716 = (0);
while(true){
if((i__17900__auto___22716 < len__17899__auto___22715)){
args22712.push((arguments[i__17900__auto___22716]));

var G__22717 = (i__17900__auto___22716 + (1));
i__17900__auto___22716 = G__22717;
continue;
} else {
}
break;
}

var G__22714 = args22712.length;
switch (G__22714) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22712.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args22719 = [];
var len__17899__auto___22722 = arguments.length;
var i__17900__auto___22723 = (0);
while(true){
if((i__17900__auto___22723 < len__17899__auto___22722)){
args22719.push((arguments[i__17900__auto___22723]));

var G__22724 = (i__17900__auto___22723 + (1));
i__17900__auto___22723 = G__22724;
continue;
} else {
}
break;
}

var G__22721 = args22719.length;
switch (G__22721) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22719.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_22726 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22726);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22726,ret){
return (function (){
return fn1.call(null,val_22726);
});})(val_22726,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args22727 = [];
var len__17899__auto___22730 = arguments.length;
var i__17900__auto___22731 = (0);
while(true){
if((i__17900__auto___22731 < len__17899__auto___22730)){
args22727.push((arguments[i__17900__auto___22731]));

var G__22732 = (i__17900__auto___22731 + (1));
i__17900__auto___22731 = G__22732;
continue;
} else {
}
break;
}

var G__22729 = args22727.length;
switch (G__22729) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22727.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17744__auto___22734 = n;
var x_22735 = (0);
while(true){
if((x_22735 < n__17744__auto___22734)){
(a[x_22735] = (0));

var G__22736 = (x_22735 + (1));
x_22735 = G__22736;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__22737 = (i + (1));
i = G__22737;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async22741 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22741 = (function (alt_flag,flag,meta22742){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta22742 = meta22742;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22743,meta22742__$1){
var self__ = this;
var _22743__$1 = this;
return (new cljs.core.async.t_cljs$core$async22741(self__.alt_flag,self__.flag,meta22742__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22741.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22743){
var self__ = this;
var _22743__$1 = this;
return self__.meta22742;
});})(flag))
;

cljs.core.async.t_cljs$core$async22741.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22741.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22741.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22741.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22741.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22742","meta22742",1662902676,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22741.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22741.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22741";

cljs.core.async.t_cljs$core$async22741.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17439__auto__,writer__17440__auto__,opt__17441__auto__){
return cljs.core._write.call(null,writer__17440__auto__,"cljs.core.async/t_cljs$core$async22741");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async22741 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22741(alt_flag__$1,flag__$1,meta22742){
return (new cljs.core.async.t_cljs$core$async22741(alt_flag__$1,flag__$1,meta22742));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22741(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22747 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22747 = (function (alt_handler,flag,cb,meta22748){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta22748 = meta22748;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22747.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22749,meta22748__$1){
var self__ = this;
var _22749__$1 = this;
return (new cljs.core.async.t_cljs$core$async22747(self__.alt_handler,self__.flag,self__.cb,meta22748__$1));
});

cljs.core.async.t_cljs$core$async22747.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22749){
var self__ = this;
var _22749__$1 = this;
return self__.meta22748;
});

cljs.core.async.t_cljs$core$async22747.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22747.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22747.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22747.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22747.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22748","meta22748",-2135388619,null)], null);
});

cljs.core.async.t_cljs$core$async22747.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22747.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22747";

cljs.core.async.t_cljs$core$async22747.cljs$lang$ctorPrWriter = (function (this__17439__auto__,writer__17440__auto__,opt__17441__auto__){
return cljs.core._write.call(null,writer__17440__auto__,"cljs.core.async/t_cljs$core$async22747");
});

cljs.core.async.__GT_t_cljs$core$async22747 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22747(alt_handler__$1,flag__$1,cb__$1,meta22748){
return (new cljs.core.async.t_cljs$core$async22747(alt_handler__$1,flag__$1,cb__$1,meta22748));
});

}

return (new cljs.core.async.t_cljs$core$async22747(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22750_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22750_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22751_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22751_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16841__auto__ = wport;
if(cljs.core.truth_(or__16841__auto__)){
return or__16841__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22752 = (i + (1));
i = G__22752;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16841__auto__ = ret;
if(cljs.core.truth_(or__16841__auto__)){
return or__16841__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16829__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16829__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16829__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17906__auto__ = [];
var len__17899__auto___22758 = arguments.length;
var i__17900__auto___22759 = (0);
while(true){
if((i__17900__auto___22759 < len__17899__auto___22758)){
args__17906__auto__.push((arguments[i__17900__auto___22759]));

var G__22760 = (i__17900__auto___22759 + (1));
i__17900__auto___22759 = G__22760;
continue;
} else {
}
break;
}

var argseq__17907__auto__ = ((((1) < args__17906__auto__.length))?(new cljs.core.IndexedSeq(args__17906__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17907__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22755){
var map__22756 = p__22755;
var map__22756__$1 = ((((!((map__22756 == null)))?((((map__22756.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22756.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22756):map__22756);
var opts = map__22756__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22753){
var G__22754 = cljs.core.first.call(null,seq22753);
var seq22753__$1 = cljs.core.next.call(null,seq22753);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22754,seq22753__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args22761 = [];
var len__17899__auto___22811 = arguments.length;
var i__17900__auto___22812 = (0);
while(true){
if((i__17900__auto___22812 < len__17899__auto___22811)){
args22761.push((arguments[i__17900__auto___22812]));

var G__22813 = (i__17900__auto___22812 + (1));
i__17900__auto___22812 = G__22813;
continue;
} else {
}
break;
}

var G__22763 = args22761.length;
switch (G__22763) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22761.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22648__auto___22815 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22648__auto___22815){
return (function (){
var f__22649__auto__ = (function (){var switch__22536__auto__ = ((function (c__22648__auto___22815){
return (function (state_22787){
var state_val_22788 = (state_22787[(1)]);
if((state_val_22788 === (7))){
var inst_22783 = (state_22787[(2)]);
var state_22787__$1 = state_22787;
var statearr_22789_22816 = state_22787__$1;
(statearr_22789_22816[(2)] = inst_22783);

(statearr_22789_22816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22788 === (1))){
var state_22787__$1 = state_22787;
var statearr_22790_22817 = state_22787__$1;
(statearr_22790_22817[(2)] = null);

(statearr_22790_22817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22788 === (4))){
var inst_22766 = (state_22787[(7)]);
var inst_22766__$1 = (state_22787[(2)]);
var inst_22767 = (inst_22766__$1 == null);
var state_22787__$1 = (function (){var statearr_22791 = state_22787;
(statearr_22791[(7)] = inst_22766__$1);

return statearr_22791;
})();
if(cljs.core.truth_(inst_22767)){
var statearr_22792_22818 = state_22787__$1;
(statearr_22792_22818[(1)] = (5));

} else {
var statearr_22793_22819 = state_22787__$1;
(statearr_22793_22819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22788 === (13))){
var state_22787__$1 = state_22787;
var statearr_22794_22820 = state_22787__$1;
(statearr_22794_22820[(2)] = null);

(statearr_22794_22820[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22788 === (6))){
var inst_22766 = (state_22787[(7)]);
var state_22787__$1 = state_22787;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22787__$1,(11),to,inst_22766);
} else {
if((state_val_22788 === (3))){
var inst_22785 = (state_22787[(2)]);
var state_22787__$1 = state_22787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22787__$1,inst_22785);
} else {
if((state_val_22788 === (12))){
var state_22787__$1 = state_22787;
var statearr_22795_22821 = state_22787__$1;
(statearr_22795_22821[(2)] = null);

(statearr_22795_22821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22788 === (2))){
var state_22787__$1 = state_22787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22787__$1,(4),from);
} else {
if((state_val_22788 === (11))){
var inst_22776 = (state_22787[(2)]);
var state_22787__$1 = state_22787;
if(cljs.core.truth_(inst_22776)){
var statearr_22796_22822 = state_22787__$1;
(statearr_22796_22822[(1)] = (12));

} else {
var statearr_22797_22823 = state_22787__$1;
(statearr_22797_22823[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22788 === (9))){
var state_22787__$1 = state_22787;
var statearr_22798_22824 = state_22787__$1;
(statearr_22798_22824[(2)] = null);

(statearr_22798_22824[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22788 === (5))){
var state_22787__$1 = state_22787;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22799_22825 = state_22787__$1;
(statearr_22799_22825[(1)] = (8));

} else {
var statearr_22800_22826 = state_22787__$1;
(statearr_22800_22826[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22788 === (14))){
var inst_22781 = (state_22787[(2)]);
var state_22787__$1 = state_22787;
var statearr_22801_22827 = state_22787__$1;
(statearr_22801_22827[(2)] = inst_22781);

(statearr_22801_22827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22788 === (10))){
var inst_22773 = (state_22787[(2)]);
var state_22787__$1 = state_22787;
var statearr_22802_22828 = state_22787__$1;
(statearr_22802_22828[(2)] = inst_22773);

(statearr_22802_22828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22788 === (8))){
var inst_22770 = cljs.core.async.close_BANG_.call(null,to);
var state_22787__$1 = state_22787;
var statearr_22803_22829 = state_22787__$1;
(statearr_22803_22829[(2)] = inst_22770);

(statearr_22803_22829[(1)] = (10));


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
});})(c__22648__auto___22815))
;
return ((function (switch__22536__auto__,c__22648__auto___22815){
return (function() {
var cljs$core$async$state_machine__22537__auto__ = null;
var cljs$core$async$state_machine__22537__auto____0 = (function (){
var statearr_22807 = [null,null,null,null,null,null,null,null];
(statearr_22807[(0)] = cljs$core$async$state_machine__22537__auto__);

(statearr_22807[(1)] = (1));

return statearr_22807;
});
var cljs$core$async$state_machine__22537__auto____1 = (function (state_22787){
while(true){
var ret_value__22538__auto__ = (function (){try{while(true){
var result__22539__auto__ = switch__22536__auto__.call(null,state_22787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22539__auto__;
}
break;
}
}catch (e22808){if((e22808 instanceof Object)){
var ex__22540__auto__ = e22808;
var statearr_22809_22830 = state_22787;
(statearr_22809_22830[(5)] = ex__22540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22831 = state_22787;
state_22787 = G__22831;
continue;
} else {
return ret_value__22538__auto__;
}
break;
}
});
cljs$core$async$state_machine__22537__auto__ = function(state_22787){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22537__auto____1.call(this,state_22787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22537__auto____0;
cljs$core$async$state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22537__auto____1;
return cljs$core$async$state_machine__22537__auto__;
})()
;})(switch__22536__auto__,c__22648__auto___22815))
})();
var state__22650__auto__ = (function (){var statearr_22810 = f__22649__auto__.call(null);
(statearr_22810[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22648__auto___22815);

return statearr_22810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22650__auto__);
});})(c__22648__auto___22815))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__23015){
var vec__23016 = p__23015;
var v = cljs.core.nth.call(null,vec__23016,(0),null);
var p = cljs.core.nth.call(null,vec__23016,(1),null);
var job = vec__23016;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22648__auto___23198 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22648__auto___23198,res,vec__23016,v,p,job,jobs,results){
return (function (){
var f__22649__auto__ = (function (){var switch__22536__auto__ = ((function (c__22648__auto___23198,res,vec__23016,v,p,job,jobs,results){
return (function (state_23021){
var state_val_23022 = (state_23021[(1)]);
if((state_val_23022 === (1))){
var state_23021__$1 = state_23021;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23021__$1,(2),res,v);
} else {
if((state_val_23022 === (2))){
var inst_23018 = (state_23021[(2)]);
var inst_23019 = cljs.core.async.close_BANG_.call(null,res);
var state_23021__$1 = (function (){var statearr_23023 = state_23021;
(statearr_23023[(7)] = inst_23018);

return statearr_23023;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23021__$1,inst_23019);
} else {
return null;
}
}
});})(c__22648__auto___23198,res,vec__23016,v,p,job,jobs,results))
;
return ((function (switch__22536__auto__,c__22648__auto___23198,res,vec__23016,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22537__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22537__auto____0 = (function (){
var statearr_23027 = [null,null,null,null,null,null,null,null];
(statearr_23027[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22537__auto__);

(statearr_23027[(1)] = (1));

return statearr_23027;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22537__auto____1 = (function (state_23021){
while(true){
var ret_value__22538__auto__ = (function (){try{while(true){
var result__22539__auto__ = switch__22536__auto__.call(null,state_23021);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22539__auto__;
}
break;
}
}catch (e23028){if((e23028 instanceof Object)){
var ex__22540__auto__ = e23028;
var statearr_23029_23199 = state_23021;
(statearr_23029_23199[(5)] = ex__22540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23021);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23028;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23200 = state_23021;
state_23021 = G__23200;
continue;
} else {
return ret_value__22538__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22537__auto__ = function(state_23021){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22537__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22537__auto____1.call(this,state_23021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22537__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22537__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22537__auto__;
})()
;})(switch__22536__auto__,c__22648__auto___23198,res,vec__23016,v,p,job,jobs,results))
})();
var state__22650__auto__ = (function (){var statearr_23030 = f__22649__auto__.call(null);
(statearr_23030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22648__auto___23198);

return statearr_23030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22650__auto__);
});})(c__22648__auto___23198,res,vec__23016,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23031){
var vec__23032 = p__23031;
var v = cljs.core.nth.call(null,vec__23032,(0),null);
var p = cljs.core.nth.call(null,vec__23032,(1),null);
var job = vec__23032;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17744__auto___23201 = n;
var __23202 = (0);
while(true){
if((__23202 < n__17744__auto___23201)){
var G__23033_23203 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23033_23203) {
case "compute":
var c__22648__auto___23205 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23202,c__22648__auto___23205,G__23033_23203,n__17744__auto___23201,jobs,results,process,async){
return (function (){
var f__22649__auto__ = (function (){var switch__22536__auto__ = ((function (__23202,c__22648__auto___23205,G__23033_23203,n__17744__auto___23201,jobs,results,process,async){
return (function (state_23046){
var state_val_23047 = (state_23046[(1)]);
if((state_val_23047 === (1))){
var state_23046__$1 = state_23046;
var statearr_23048_23206 = state_23046__$1;
(statearr_23048_23206[(2)] = null);

(statearr_23048_23206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23047 === (2))){
var state_23046__$1 = state_23046;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23046__$1,(4),jobs);
} else {
if((state_val_23047 === (3))){
var inst_23044 = (state_23046[(2)]);
var state_23046__$1 = state_23046;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23046__$1,inst_23044);
} else {
if((state_val_23047 === (4))){
var inst_23036 = (state_23046[(2)]);
var inst_23037 = process.call(null,inst_23036);
var state_23046__$1 = state_23046;
if(cljs.core.truth_(inst_23037)){
var statearr_23049_23207 = state_23046__$1;
(statearr_23049_23207[(1)] = (5));

} else {
var statearr_23050_23208 = state_23046__$1;
(statearr_23050_23208[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23047 === (5))){
var state_23046__$1 = state_23046;
var statearr_23051_23209 = state_23046__$1;
(statearr_23051_23209[(2)] = null);

(statearr_23051_23209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23047 === (6))){
var state_23046__$1 = state_23046;
var statearr_23052_23210 = state_23046__$1;
(statearr_23052_23210[(2)] = null);

(statearr_23052_23210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23047 === (7))){
var inst_23042 = (state_23046[(2)]);
var state_23046__$1 = state_23046;
var statearr_23053_23211 = state_23046__$1;
(statearr_23053_23211[(2)] = inst_23042);

(statearr_23053_23211[(1)] = (3));


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
});})(__23202,c__22648__auto___23205,G__23033_23203,n__17744__auto___23201,jobs,results,process,async))
;
return ((function (__23202,switch__22536__auto__,c__22648__auto___23205,G__23033_23203,n__17744__auto___23201,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22537__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22537__auto____0 = (function (){
var statearr_23057 = [null,null,null,null,null,null,null];
(statearr_23057[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22537__auto__);

(statearr_23057[(1)] = (1));

return statearr_23057;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22537__auto____1 = (function (state_23046){
while(true){
var ret_value__22538__auto__ = (function (){try{while(true){
var result__22539__auto__ = switch__22536__auto__.call(null,state_23046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22539__auto__;
}
break;
}
}catch (e23058){if((e23058 instanceof Object)){
var ex__22540__auto__ = e23058;
var statearr_23059_23212 = state_23046;
(statearr_23059_23212[(5)] = ex__22540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23213 = state_23046;
state_23046 = G__23213;
continue;
} else {
return ret_value__22538__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22537__auto__ = function(state_23046){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22537__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22537__auto____1.call(this,state_23046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22537__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22537__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22537__auto__;
})()
;})(__23202,switch__22536__auto__,c__22648__auto___23205,G__23033_23203,n__17744__auto___23201,jobs,results,process,async))
})();
var state__22650__auto__ = (function (){var statearr_23060 = f__22649__auto__.call(null);
(statearr_23060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22648__auto___23205);

return statearr_23060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22650__auto__);
});})(__23202,c__22648__auto___23205,G__23033_23203,n__17744__auto___23201,jobs,results,process,async))
);


break;
case "async":
var c__22648__auto___23214 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23202,c__22648__auto___23214,G__23033_23203,n__17744__auto___23201,jobs,results,process,async){
return (function (){
var f__22649__auto__ = (function (){var switch__22536__auto__ = ((function (__23202,c__22648__auto___23214,G__23033_23203,n__17744__auto___23201,jobs,results,process,async){
return (function (state_23073){
var state_val_23074 = (state_23073[(1)]);
if((state_val_23074 === (1))){
var state_23073__$1 = state_23073;
var statearr_23075_23215 = state_23073__$1;
(statearr_23075_23215[(2)] = null);

(statearr_23075_23215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23074 === (2))){
var state_23073__$1 = state_23073;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23073__$1,(4),jobs);
} else {
if((state_val_23074 === (3))){
var inst_23071 = (state_23073[(2)]);
var state_23073__$1 = state_23073;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23073__$1,inst_23071);
} else {
if((state_val_23074 === (4))){
var inst_23063 = (state_23073[(2)]);
var inst_23064 = async.call(null,inst_23063);
var state_23073__$1 = state_23073;
if(cljs.core.truth_(inst_23064)){
var statearr_23076_23216 = state_23073__$1;
(statearr_23076_23216[(1)] = (5));

} else {
var statearr_23077_23217 = state_23073__$1;
(statearr_23077_23217[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23074 === (5))){
var state_23073__$1 = state_23073;
var statearr_23078_23218 = state_23073__$1;
(statearr_23078_23218[(2)] = null);

(statearr_23078_23218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23074 === (6))){
var state_23073__$1 = state_23073;
var statearr_23079_23219 = state_23073__$1;
(statearr_23079_23219[(2)] = null);

(statearr_23079_23219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23074 === (7))){
var inst_23069 = (state_23073[(2)]);
var state_23073__$1 = state_23073;
var statearr_23080_23220 = state_23073__$1;
(statearr_23080_23220[(2)] = inst_23069);

(statearr_23080_23220[(1)] = (3));


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
});})(__23202,c__22648__auto___23214,G__23033_23203,n__17744__auto___23201,jobs,results,process,async))
;
return ((function (__23202,switch__22536__auto__,c__22648__auto___23214,G__23033_23203,n__17744__auto___23201,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22537__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22537__auto____0 = (function (){
var statearr_23084 = [null,null,null,null,null,null,null];
(statearr_23084[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22537__auto__);

(statearr_23084[(1)] = (1));

return statearr_23084;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22537__auto____1 = (function (state_23073){
while(true){
var ret_value__22538__auto__ = (function (){try{while(true){
var result__22539__auto__ = switch__22536__auto__.call(null,state_23073);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22539__auto__;
}
break;
}
}catch (e23085){if((e23085 instanceof Object)){
var ex__22540__auto__ = e23085;
var statearr_23086_23221 = state_23073;
(statearr_23086_23221[(5)] = ex__22540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23085;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23222 = state_23073;
state_23073 = G__23222;
continue;
} else {
return ret_value__22538__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22537__auto__ = function(state_23073){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22537__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22537__auto____1.call(this,state_23073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22537__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22537__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22537__auto__;
})()
;})(__23202,switch__22536__auto__,c__22648__auto___23214,G__23033_23203,n__17744__auto___23201,jobs,results,process,async))
})();
var state__22650__auto__ = (function (){var statearr_23087 = f__22649__auto__.call(null);
(statearr_23087[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22648__auto___23214);

return statearr_23087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22650__auto__);
});})(__23202,c__22648__auto___23214,G__23033_23203,n__17744__auto___23201,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__23223 = (__23202 + (1));
__23202 = G__23223;
continue;
} else {
}
break;
}

var c__22648__auto___23224 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22648__auto___23224,jobs,results,process,async){
return (function (){
var f__22649__auto__ = (function (){var switch__22536__auto__ = ((function (c__22648__auto___23224,jobs,results,process,async){
return (function (state_23109){
var state_val_23110 = (state_23109[(1)]);
if((state_val_23110 === (1))){
var state_23109__$1 = state_23109;
var statearr_23111_23225 = state_23109__$1;
(statearr_23111_23225[(2)] = null);

(statearr_23111_23225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23110 === (2))){
var state_23109__$1 = state_23109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23109__$1,(4),from);
} else {
if((state_val_23110 === (3))){
var inst_23107 = (state_23109[(2)]);
var state_23109__$1 = state_23109;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23109__$1,inst_23107);
} else {
if((state_val_23110 === (4))){
var inst_23090 = (state_23109[(7)]);
var inst_23090__$1 = (state_23109[(2)]);
var inst_23091 = (inst_23090__$1 == null);
var state_23109__$1 = (function (){var statearr_23112 = state_23109;
(statearr_23112[(7)] = inst_23090__$1);

return statearr_23112;
})();
if(cljs.core.truth_(inst_23091)){
var statearr_23113_23226 = state_23109__$1;
(statearr_23113_23226[(1)] = (5));

} else {
var statearr_23114_23227 = state_23109__$1;
(statearr_23114_23227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23110 === (5))){
var inst_23093 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23109__$1 = state_23109;
var statearr_23115_23228 = state_23109__$1;
(statearr_23115_23228[(2)] = inst_23093);

(statearr_23115_23228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23110 === (6))){
var inst_23095 = (state_23109[(8)]);
var inst_23090 = (state_23109[(7)]);
var inst_23095__$1 = cljs.core.async.chan.call(null,(1));
var inst_23096 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23097 = [inst_23090,inst_23095__$1];
var inst_23098 = (new cljs.core.PersistentVector(null,2,(5),inst_23096,inst_23097,null));
var state_23109__$1 = (function (){var statearr_23116 = state_23109;
(statearr_23116[(8)] = inst_23095__$1);

return statearr_23116;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23109__$1,(8),jobs,inst_23098);
} else {
if((state_val_23110 === (7))){
var inst_23105 = (state_23109[(2)]);
var state_23109__$1 = state_23109;
var statearr_23117_23229 = state_23109__$1;
(statearr_23117_23229[(2)] = inst_23105);

(statearr_23117_23229[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23110 === (8))){
var inst_23095 = (state_23109[(8)]);
var inst_23100 = (state_23109[(2)]);
var state_23109__$1 = (function (){var statearr_23118 = state_23109;
(statearr_23118[(9)] = inst_23100);

return statearr_23118;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23109__$1,(9),results,inst_23095);
} else {
if((state_val_23110 === (9))){
var inst_23102 = (state_23109[(2)]);
var state_23109__$1 = (function (){var statearr_23119 = state_23109;
(statearr_23119[(10)] = inst_23102);

return statearr_23119;
})();
var statearr_23120_23230 = state_23109__$1;
(statearr_23120_23230[(2)] = null);

(statearr_23120_23230[(1)] = (2));


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
});})(c__22648__auto___23224,jobs,results,process,async))
;
return ((function (switch__22536__auto__,c__22648__auto___23224,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22537__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22537__auto____0 = (function (){
var statearr_23124 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23124[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22537__auto__);

(statearr_23124[(1)] = (1));

return statearr_23124;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22537__auto____1 = (function (state_23109){
while(true){
var ret_value__22538__auto__ = (function (){try{while(true){
var result__22539__auto__ = switch__22536__auto__.call(null,state_23109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22539__auto__;
}
break;
}
}catch (e23125){if((e23125 instanceof Object)){
var ex__22540__auto__ = e23125;
var statearr_23126_23231 = state_23109;
(statearr_23126_23231[(5)] = ex__22540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23232 = state_23109;
state_23109 = G__23232;
continue;
} else {
return ret_value__22538__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22537__auto__ = function(state_23109){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22537__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22537__auto____1.call(this,state_23109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22537__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22537__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22537__auto__;
})()
;})(switch__22536__auto__,c__22648__auto___23224,jobs,results,process,async))
})();
var state__22650__auto__ = (function (){var statearr_23127 = f__22649__auto__.call(null);
(statearr_23127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22648__auto___23224);

return statearr_23127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22650__auto__);
});})(c__22648__auto___23224,jobs,results,process,async))
);


var c__22648__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22648__auto__,jobs,results,process,async){
return (function (){
var f__22649__auto__ = (function (){var switch__22536__auto__ = ((function (c__22648__auto__,jobs,results,process,async){
return (function (state_23165){
var state_val_23166 = (state_23165[(1)]);
if((state_val_23166 === (7))){
var inst_23161 = (state_23165[(2)]);
var state_23165__$1 = state_23165;
var statearr_23167_23233 = state_23165__$1;
(statearr_23167_23233[(2)] = inst_23161);

(statearr_23167_23233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23166 === (20))){
var state_23165__$1 = state_23165;
var statearr_23168_23234 = state_23165__$1;
(statearr_23168_23234[(2)] = null);

(statearr_23168_23234[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23166 === (1))){
var state_23165__$1 = state_23165;
var statearr_23169_23235 = state_23165__$1;
(statearr_23169_23235[(2)] = null);

(statearr_23169_23235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23166 === (4))){
var inst_23130 = (state_23165[(7)]);
var inst_23130__$1 = (state_23165[(2)]);
var inst_23131 = (inst_23130__$1 == null);
var state_23165__$1 = (function (){var statearr_23170 = state_23165;
(statearr_23170[(7)] = inst_23130__$1);

return statearr_23170;
})();
if(cljs.core.truth_(inst_23131)){
var statearr_23171_23236 = state_23165__$1;
(statearr_23171_23236[(1)] = (5));

} else {
var statearr_23172_23237 = state_23165__$1;
(statearr_23172_23237[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23166 === (15))){
var inst_23143 = (state_23165[(8)]);
var state_23165__$1 = state_23165;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23165__$1,(18),to,inst_23143);
} else {
if((state_val_23166 === (21))){
var inst_23156 = (state_23165[(2)]);
var state_23165__$1 = state_23165;
var statearr_23173_23238 = state_23165__$1;
(statearr_23173_23238[(2)] = inst_23156);

(statearr_23173_23238[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23166 === (13))){
var inst_23158 = (state_23165[(2)]);
var state_23165__$1 = (function (){var statearr_23174 = state_23165;
(statearr_23174[(9)] = inst_23158);

return statearr_23174;
})();
var statearr_23175_23239 = state_23165__$1;
(statearr_23175_23239[(2)] = null);

(statearr_23175_23239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23166 === (6))){
var inst_23130 = (state_23165[(7)]);
var state_23165__$1 = state_23165;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23165__$1,(11),inst_23130);
} else {
if((state_val_23166 === (17))){
var inst_23151 = (state_23165[(2)]);
var state_23165__$1 = state_23165;
if(cljs.core.truth_(inst_23151)){
var statearr_23176_23240 = state_23165__$1;
(statearr_23176_23240[(1)] = (19));

} else {
var statearr_23177_23241 = state_23165__$1;
(statearr_23177_23241[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23166 === (3))){
var inst_23163 = (state_23165[(2)]);
var state_23165__$1 = state_23165;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23165__$1,inst_23163);
} else {
if((state_val_23166 === (12))){
var inst_23140 = (state_23165[(10)]);
var state_23165__$1 = state_23165;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23165__$1,(14),inst_23140);
} else {
if((state_val_23166 === (2))){
var state_23165__$1 = state_23165;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23165__$1,(4),results);
} else {
if((state_val_23166 === (19))){
var state_23165__$1 = state_23165;
var statearr_23178_23242 = state_23165__$1;
(statearr_23178_23242[(2)] = null);

(statearr_23178_23242[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23166 === (11))){
var inst_23140 = (state_23165[(2)]);
var state_23165__$1 = (function (){var statearr_23179 = state_23165;
(statearr_23179[(10)] = inst_23140);

return statearr_23179;
})();
var statearr_23180_23243 = state_23165__$1;
(statearr_23180_23243[(2)] = null);

(statearr_23180_23243[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23166 === (9))){
var state_23165__$1 = state_23165;
var statearr_23181_23244 = state_23165__$1;
(statearr_23181_23244[(2)] = null);

(statearr_23181_23244[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23166 === (5))){
var state_23165__$1 = state_23165;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23182_23245 = state_23165__$1;
(statearr_23182_23245[(1)] = (8));

} else {
var statearr_23183_23246 = state_23165__$1;
(statearr_23183_23246[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23166 === (14))){
var inst_23145 = (state_23165[(11)]);
var inst_23143 = (state_23165[(8)]);
var inst_23143__$1 = (state_23165[(2)]);
var inst_23144 = (inst_23143__$1 == null);
var inst_23145__$1 = cljs.core.not.call(null,inst_23144);
var state_23165__$1 = (function (){var statearr_23184 = state_23165;
(statearr_23184[(11)] = inst_23145__$1);

(statearr_23184[(8)] = inst_23143__$1);

return statearr_23184;
})();
if(inst_23145__$1){
var statearr_23185_23247 = state_23165__$1;
(statearr_23185_23247[(1)] = (15));

} else {
var statearr_23186_23248 = state_23165__$1;
(statearr_23186_23248[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23166 === (16))){
var inst_23145 = (state_23165[(11)]);
var state_23165__$1 = state_23165;
var statearr_23187_23249 = state_23165__$1;
(statearr_23187_23249[(2)] = inst_23145);

(statearr_23187_23249[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23166 === (10))){
var inst_23137 = (state_23165[(2)]);
var state_23165__$1 = state_23165;
var statearr_23188_23250 = state_23165__$1;
(statearr_23188_23250[(2)] = inst_23137);

(statearr_23188_23250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23166 === (18))){
var inst_23148 = (state_23165[(2)]);
var state_23165__$1 = state_23165;
var statearr_23189_23251 = state_23165__$1;
(statearr_23189_23251[(2)] = inst_23148);

(statearr_23189_23251[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23166 === (8))){
var inst_23134 = cljs.core.async.close_BANG_.call(null,to);
var state_23165__$1 = state_23165;
var statearr_23190_23252 = state_23165__$1;
(statearr_23190_23252[(2)] = inst_23134);

(statearr_23190_23252[(1)] = (10));


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
});})(c__22648__auto__,jobs,results,process,async))
;
return ((function (switch__22536__auto__,c__22648__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22537__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22537__auto____0 = (function (){
var statearr_23194 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23194[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22537__auto__);

(statearr_23194[(1)] = (1));

return statearr_23194;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22537__auto____1 = (function (state_23165){
while(true){
var ret_value__22538__auto__ = (function (){try{while(true){
var result__22539__auto__ = switch__22536__auto__.call(null,state_23165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22539__auto__;
}
break;
}
}catch (e23195){if((e23195 instanceof Object)){
var ex__22540__auto__ = e23195;
var statearr_23196_23253 = state_23165;
(statearr_23196_23253[(5)] = ex__22540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23195;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23254 = state_23165;
state_23165 = G__23254;
continue;
} else {
return ret_value__22538__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22537__auto__ = function(state_23165){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22537__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22537__auto____1.call(this,state_23165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22537__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22537__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22537__auto__;
})()
;})(switch__22536__auto__,c__22648__auto__,jobs,results,process,async))
})();
var state__22650__auto__ = (function (){var statearr_23197 = f__22649__auto__.call(null);
(statearr_23197[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22648__auto__);

return statearr_23197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22650__auto__);
});})(c__22648__auto__,jobs,results,process,async))
);

return c__22648__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args23255 = [];
var len__17899__auto___23258 = arguments.length;
var i__17900__auto___23259 = (0);
while(true){
if((i__17900__auto___23259 < len__17899__auto___23258)){
args23255.push((arguments[i__17900__auto___23259]));

var G__23260 = (i__17900__auto___23259 + (1));
i__17900__auto___23259 = G__23260;
continue;
} else {
}
break;
}

var G__23257 = args23255.length;
switch (G__23257) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23255.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args23262 = [];
var len__17899__auto___23265 = arguments.length;
var i__17900__auto___23266 = (0);
while(true){
if((i__17900__auto___23266 < len__17899__auto___23265)){
args23262.push((arguments[i__17900__auto___23266]));

var G__23267 = (i__17900__auto___23266 + (1));
i__17900__auto___23266 = G__23267;
continue;
} else {
}
break;
}

var G__23264 = args23262.length;
switch (G__23264) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23262.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args23269 = [];
var len__17899__auto___23322 = arguments.length;
var i__17900__auto___23323 = (0);
while(true){
if((i__17900__auto___23323 < len__17899__auto___23322)){
args23269.push((arguments[i__17900__auto___23323]));

var G__23324 = (i__17900__auto___23323 + (1));
i__17900__auto___23323 = G__23324;
continue;
} else {
}
break;
}

var G__23271 = args23269.length;
switch (G__23271) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23269.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22648__auto___23326 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22648__auto___23326,tc,fc){
return (function (){
var f__22649__auto__ = (function (){var switch__22536__auto__ = ((function (c__22648__auto___23326,tc,fc){
return (function (state_23297){
var state_val_23298 = (state_23297[(1)]);
if((state_val_23298 === (7))){
var inst_23293 = (state_23297[(2)]);
var state_23297__$1 = state_23297;
var statearr_23299_23327 = state_23297__$1;
(statearr_23299_23327[(2)] = inst_23293);

(statearr_23299_23327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23298 === (1))){
var state_23297__$1 = state_23297;
var statearr_23300_23328 = state_23297__$1;
(statearr_23300_23328[(2)] = null);

(statearr_23300_23328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23298 === (4))){
var inst_23274 = (state_23297[(7)]);
var inst_23274__$1 = (state_23297[(2)]);
var inst_23275 = (inst_23274__$1 == null);
var state_23297__$1 = (function (){var statearr_23301 = state_23297;
(statearr_23301[(7)] = inst_23274__$1);

return statearr_23301;
})();
if(cljs.core.truth_(inst_23275)){
var statearr_23302_23329 = state_23297__$1;
(statearr_23302_23329[(1)] = (5));

} else {
var statearr_23303_23330 = state_23297__$1;
(statearr_23303_23330[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23298 === (13))){
var state_23297__$1 = state_23297;
var statearr_23304_23331 = state_23297__$1;
(statearr_23304_23331[(2)] = null);

(statearr_23304_23331[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23298 === (6))){
var inst_23274 = (state_23297[(7)]);
var inst_23280 = p.call(null,inst_23274);
var state_23297__$1 = state_23297;
if(cljs.core.truth_(inst_23280)){
var statearr_23305_23332 = state_23297__$1;
(statearr_23305_23332[(1)] = (9));

} else {
var statearr_23306_23333 = state_23297__$1;
(statearr_23306_23333[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23298 === (3))){
var inst_23295 = (state_23297[(2)]);
var state_23297__$1 = state_23297;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23297__$1,inst_23295);
} else {
if((state_val_23298 === (12))){
var state_23297__$1 = state_23297;
var statearr_23307_23334 = state_23297__$1;
(statearr_23307_23334[(2)] = null);

(statearr_23307_23334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23298 === (2))){
var state_23297__$1 = state_23297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23297__$1,(4),ch);
} else {
if((state_val_23298 === (11))){
var inst_23274 = (state_23297[(7)]);
var inst_23284 = (state_23297[(2)]);
var state_23297__$1 = state_23297;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23297__$1,(8),inst_23284,inst_23274);
} else {
if((state_val_23298 === (9))){
var state_23297__$1 = state_23297;
var statearr_23308_23335 = state_23297__$1;
(statearr_23308_23335[(2)] = tc);

(statearr_23308_23335[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23298 === (5))){
var inst_23277 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23278 = cljs.core.async.close_BANG_.call(null,fc);
var state_23297__$1 = (function (){var statearr_23309 = state_23297;
(statearr_23309[(8)] = inst_23277);

return statearr_23309;
})();
var statearr_23310_23336 = state_23297__$1;
(statearr_23310_23336[(2)] = inst_23278);

(statearr_23310_23336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23298 === (14))){
var inst_23291 = (state_23297[(2)]);
var state_23297__$1 = state_23297;
var statearr_23311_23337 = state_23297__$1;
(statearr_23311_23337[(2)] = inst_23291);

(statearr_23311_23337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23298 === (10))){
var state_23297__$1 = state_23297;
var statearr_23312_23338 = state_23297__$1;
(statearr_23312_23338[(2)] = fc);

(statearr_23312_23338[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23298 === (8))){
var inst_23286 = (state_23297[(2)]);
var state_23297__$1 = state_23297;
if(cljs.core.truth_(inst_23286)){
var statearr_23313_23339 = state_23297__$1;
(statearr_23313_23339[(1)] = (12));

} else {
var statearr_23314_23340 = state_23297__$1;
(statearr_23314_23340[(1)] = (13));

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
});})(c__22648__auto___23326,tc,fc))
;
return ((function (switch__22536__auto__,c__22648__auto___23326,tc,fc){
return (function() {
var cljs$core$async$state_machine__22537__auto__ = null;
var cljs$core$async$state_machine__22537__auto____0 = (function (){
var statearr_23318 = [null,null,null,null,null,null,null,null,null];
(statearr_23318[(0)] = cljs$core$async$state_machine__22537__auto__);

(statearr_23318[(1)] = (1));

return statearr_23318;
});
var cljs$core$async$state_machine__22537__auto____1 = (function (state_23297){
while(true){
var ret_value__22538__auto__ = (function (){try{while(true){
var result__22539__auto__ = switch__22536__auto__.call(null,state_23297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22539__auto__;
}
break;
}
}catch (e23319){if((e23319 instanceof Object)){
var ex__22540__auto__ = e23319;
var statearr_23320_23341 = state_23297;
(statearr_23320_23341[(5)] = ex__22540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23342 = state_23297;
state_23297 = G__23342;
continue;
} else {
return ret_value__22538__auto__;
}
break;
}
});
cljs$core$async$state_machine__22537__auto__ = function(state_23297){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22537__auto____1.call(this,state_23297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22537__auto____0;
cljs$core$async$state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22537__auto____1;
return cljs$core$async$state_machine__22537__auto__;
})()
;})(switch__22536__auto__,c__22648__auto___23326,tc,fc))
})();
var state__22650__auto__ = (function (){var statearr_23321 = f__22649__auto__.call(null);
(statearr_23321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22648__auto___23326);

return statearr_23321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22650__auto__);
});})(c__22648__auto___23326,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__22648__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22648__auto__){
return (function (){
var f__22649__auto__ = (function (){var switch__22536__auto__ = ((function (c__22648__auto__){
return (function (state_23406){
var state_val_23407 = (state_23406[(1)]);
if((state_val_23407 === (7))){
var inst_23402 = (state_23406[(2)]);
var state_23406__$1 = state_23406;
var statearr_23408_23429 = state_23406__$1;
(statearr_23408_23429[(2)] = inst_23402);

(statearr_23408_23429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23407 === (1))){
var inst_23386 = init;
var state_23406__$1 = (function (){var statearr_23409 = state_23406;
(statearr_23409[(7)] = inst_23386);

return statearr_23409;
})();
var statearr_23410_23430 = state_23406__$1;
(statearr_23410_23430[(2)] = null);

(statearr_23410_23430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23407 === (4))){
var inst_23389 = (state_23406[(8)]);
var inst_23389__$1 = (state_23406[(2)]);
var inst_23390 = (inst_23389__$1 == null);
var state_23406__$1 = (function (){var statearr_23411 = state_23406;
(statearr_23411[(8)] = inst_23389__$1);

return statearr_23411;
})();
if(cljs.core.truth_(inst_23390)){
var statearr_23412_23431 = state_23406__$1;
(statearr_23412_23431[(1)] = (5));

} else {
var statearr_23413_23432 = state_23406__$1;
(statearr_23413_23432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23407 === (6))){
var inst_23393 = (state_23406[(9)]);
var inst_23386 = (state_23406[(7)]);
var inst_23389 = (state_23406[(8)]);
var inst_23393__$1 = f.call(null,inst_23386,inst_23389);
var inst_23394 = cljs.core.reduced_QMARK_.call(null,inst_23393__$1);
var state_23406__$1 = (function (){var statearr_23414 = state_23406;
(statearr_23414[(9)] = inst_23393__$1);

return statearr_23414;
})();
if(inst_23394){
var statearr_23415_23433 = state_23406__$1;
(statearr_23415_23433[(1)] = (8));

} else {
var statearr_23416_23434 = state_23406__$1;
(statearr_23416_23434[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23407 === (3))){
var inst_23404 = (state_23406[(2)]);
var state_23406__$1 = state_23406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23406__$1,inst_23404);
} else {
if((state_val_23407 === (2))){
var state_23406__$1 = state_23406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23406__$1,(4),ch);
} else {
if((state_val_23407 === (9))){
var inst_23393 = (state_23406[(9)]);
var inst_23386 = inst_23393;
var state_23406__$1 = (function (){var statearr_23417 = state_23406;
(statearr_23417[(7)] = inst_23386);

return statearr_23417;
})();
var statearr_23418_23435 = state_23406__$1;
(statearr_23418_23435[(2)] = null);

(statearr_23418_23435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23407 === (5))){
var inst_23386 = (state_23406[(7)]);
var state_23406__$1 = state_23406;
var statearr_23419_23436 = state_23406__$1;
(statearr_23419_23436[(2)] = inst_23386);

(statearr_23419_23436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23407 === (10))){
var inst_23400 = (state_23406[(2)]);
var state_23406__$1 = state_23406;
var statearr_23420_23437 = state_23406__$1;
(statearr_23420_23437[(2)] = inst_23400);

(statearr_23420_23437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23407 === (8))){
var inst_23393 = (state_23406[(9)]);
var inst_23396 = cljs.core.deref.call(null,inst_23393);
var state_23406__$1 = state_23406;
var statearr_23421_23438 = state_23406__$1;
(statearr_23421_23438[(2)] = inst_23396);

(statearr_23421_23438[(1)] = (10));


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
});})(c__22648__auto__))
;
return ((function (switch__22536__auto__,c__22648__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22537__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22537__auto____0 = (function (){
var statearr_23425 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23425[(0)] = cljs$core$async$reduce_$_state_machine__22537__auto__);

(statearr_23425[(1)] = (1));

return statearr_23425;
});
var cljs$core$async$reduce_$_state_machine__22537__auto____1 = (function (state_23406){
while(true){
var ret_value__22538__auto__ = (function (){try{while(true){
var result__22539__auto__ = switch__22536__auto__.call(null,state_23406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22539__auto__;
}
break;
}
}catch (e23426){if((e23426 instanceof Object)){
var ex__22540__auto__ = e23426;
var statearr_23427_23439 = state_23406;
(statearr_23427_23439[(5)] = ex__22540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23440 = state_23406;
state_23406 = G__23440;
continue;
} else {
return ret_value__22538__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22537__auto__ = function(state_23406){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22537__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22537__auto____1.call(this,state_23406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22537__auto____0;
cljs$core$async$reduce_$_state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22537__auto____1;
return cljs$core$async$reduce_$_state_machine__22537__auto__;
})()
;})(switch__22536__auto__,c__22648__auto__))
})();
var state__22650__auto__ = (function (){var statearr_23428 = f__22649__auto__.call(null);
(statearr_23428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22648__auto__);

return statearr_23428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22650__auto__);
});})(c__22648__auto__))
);

return c__22648__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args23441 = [];
var len__17899__auto___23493 = arguments.length;
var i__17900__auto___23494 = (0);
while(true){
if((i__17900__auto___23494 < len__17899__auto___23493)){
args23441.push((arguments[i__17900__auto___23494]));

var G__23495 = (i__17900__auto___23494 + (1));
i__17900__auto___23494 = G__23495;
continue;
} else {
}
break;
}

var G__23443 = args23441.length;
switch (G__23443) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23441.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22648__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22648__auto__){
return (function (){
var f__22649__auto__ = (function (){var switch__22536__auto__ = ((function (c__22648__auto__){
return (function (state_23468){
var state_val_23469 = (state_23468[(1)]);
if((state_val_23469 === (7))){
var inst_23450 = (state_23468[(2)]);
var state_23468__$1 = state_23468;
var statearr_23470_23497 = state_23468__$1;
(statearr_23470_23497[(2)] = inst_23450);

(statearr_23470_23497[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (1))){
var inst_23444 = cljs.core.seq.call(null,coll);
var inst_23445 = inst_23444;
var state_23468__$1 = (function (){var statearr_23471 = state_23468;
(statearr_23471[(7)] = inst_23445);

return statearr_23471;
})();
var statearr_23472_23498 = state_23468__$1;
(statearr_23472_23498[(2)] = null);

(statearr_23472_23498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (4))){
var inst_23445 = (state_23468[(7)]);
var inst_23448 = cljs.core.first.call(null,inst_23445);
var state_23468__$1 = state_23468;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23468__$1,(7),ch,inst_23448);
} else {
if((state_val_23469 === (13))){
var inst_23462 = (state_23468[(2)]);
var state_23468__$1 = state_23468;
var statearr_23473_23499 = state_23468__$1;
(statearr_23473_23499[(2)] = inst_23462);

(statearr_23473_23499[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (6))){
var inst_23453 = (state_23468[(2)]);
var state_23468__$1 = state_23468;
if(cljs.core.truth_(inst_23453)){
var statearr_23474_23500 = state_23468__$1;
(statearr_23474_23500[(1)] = (8));

} else {
var statearr_23475_23501 = state_23468__$1;
(statearr_23475_23501[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (3))){
var inst_23466 = (state_23468[(2)]);
var state_23468__$1 = state_23468;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23468__$1,inst_23466);
} else {
if((state_val_23469 === (12))){
var state_23468__$1 = state_23468;
var statearr_23476_23502 = state_23468__$1;
(statearr_23476_23502[(2)] = null);

(statearr_23476_23502[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (2))){
var inst_23445 = (state_23468[(7)]);
var state_23468__$1 = state_23468;
if(cljs.core.truth_(inst_23445)){
var statearr_23477_23503 = state_23468__$1;
(statearr_23477_23503[(1)] = (4));

} else {
var statearr_23478_23504 = state_23468__$1;
(statearr_23478_23504[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (11))){
var inst_23459 = cljs.core.async.close_BANG_.call(null,ch);
var state_23468__$1 = state_23468;
var statearr_23479_23505 = state_23468__$1;
(statearr_23479_23505[(2)] = inst_23459);

(statearr_23479_23505[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (9))){
var state_23468__$1 = state_23468;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23480_23506 = state_23468__$1;
(statearr_23480_23506[(1)] = (11));

} else {
var statearr_23481_23507 = state_23468__$1;
(statearr_23481_23507[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (5))){
var inst_23445 = (state_23468[(7)]);
var state_23468__$1 = state_23468;
var statearr_23482_23508 = state_23468__$1;
(statearr_23482_23508[(2)] = inst_23445);

(statearr_23482_23508[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (10))){
var inst_23464 = (state_23468[(2)]);
var state_23468__$1 = state_23468;
var statearr_23483_23509 = state_23468__$1;
(statearr_23483_23509[(2)] = inst_23464);

(statearr_23483_23509[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23469 === (8))){
var inst_23445 = (state_23468[(7)]);
var inst_23455 = cljs.core.next.call(null,inst_23445);
var inst_23445__$1 = inst_23455;
var state_23468__$1 = (function (){var statearr_23484 = state_23468;
(statearr_23484[(7)] = inst_23445__$1);

return statearr_23484;
})();
var statearr_23485_23510 = state_23468__$1;
(statearr_23485_23510[(2)] = null);

(statearr_23485_23510[(1)] = (2));


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
});})(c__22648__auto__))
;
return ((function (switch__22536__auto__,c__22648__auto__){
return (function() {
var cljs$core$async$state_machine__22537__auto__ = null;
var cljs$core$async$state_machine__22537__auto____0 = (function (){
var statearr_23489 = [null,null,null,null,null,null,null,null];
(statearr_23489[(0)] = cljs$core$async$state_machine__22537__auto__);

(statearr_23489[(1)] = (1));

return statearr_23489;
});
var cljs$core$async$state_machine__22537__auto____1 = (function (state_23468){
while(true){
var ret_value__22538__auto__ = (function (){try{while(true){
var result__22539__auto__ = switch__22536__auto__.call(null,state_23468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22539__auto__;
}
break;
}
}catch (e23490){if((e23490 instanceof Object)){
var ex__22540__auto__ = e23490;
var statearr_23491_23511 = state_23468;
(statearr_23491_23511[(5)] = ex__22540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23512 = state_23468;
state_23468 = G__23512;
continue;
} else {
return ret_value__22538__auto__;
}
break;
}
});
cljs$core$async$state_machine__22537__auto__ = function(state_23468){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22537__auto____1.call(this,state_23468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22537__auto____0;
cljs$core$async$state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22537__auto____1;
return cljs$core$async$state_machine__22537__auto__;
})()
;})(switch__22536__auto__,c__22648__auto__))
})();
var state__22650__auto__ = (function (){var statearr_23492 = f__22649__auto__.call(null);
(statearr_23492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22648__auto__);

return statearr_23492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22650__auto__);
});})(c__22648__auto__))
);

return c__22648__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17496__auto__ = (((_ == null))?null:_);
var m__17497__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17496__auto__)]);
if(!((m__17497__auto__ == null))){
return m__17497__auto__.call(null,_);
} else {
var m__17497__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17497__auto____$1 == null))){
return m__17497__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17496__auto__ = (((m == null))?null:m);
var m__17497__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17496__auto__)]);
if(!((m__17497__auto__ == null))){
return m__17497__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17497__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17497__auto____$1 == null))){
return m__17497__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17496__auto__ = (((m == null))?null:m);
var m__17497__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17496__auto__)]);
if(!((m__17497__auto__ == null))){
return m__17497__auto__.call(null,m,ch);
} else {
var m__17497__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17497__auto____$1 == null))){
return m__17497__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17496__auto__ = (((m == null))?null:m);
var m__17497__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17496__auto__)]);
if(!((m__17497__auto__ == null))){
return m__17497__auto__.call(null,m);
} else {
var m__17497__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17497__auto____$1 == null))){
return m__17497__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23734 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23734 = (function (mult,ch,cs,meta23735){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta23735 = meta23735;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23736,meta23735__$1){
var self__ = this;
var _23736__$1 = this;
return (new cljs.core.async.t_cljs$core$async23734(self__.mult,self__.ch,self__.cs,meta23735__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23734.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23736){
var self__ = this;
var _23736__$1 = this;
return self__.meta23735;
});})(cs))
;

cljs.core.async.t_cljs$core$async23734.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23734.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23734.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async23734.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23734.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23734.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23734.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23735","meta23735",-2090744961,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23734.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23734.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23734";

cljs.core.async.t_cljs$core$async23734.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17439__auto__,writer__17440__auto__,opt__17441__auto__){
return cljs.core._write.call(null,writer__17440__auto__,"cljs.core.async/t_cljs$core$async23734");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async23734 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23734(mult__$1,ch__$1,cs__$1,meta23735){
return (new cljs.core.async.t_cljs$core$async23734(mult__$1,ch__$1,cs__$1,meta23735));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23734(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__22648__auto___23955 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22648__auto___23955,cs,m,dchan,dctr,done){
return (function (){
var f__22649__auto__ = (function (){var switch__22536__auto__ = ((function (c__22648__auto___23955,cs,m,dchan,dctr,done){
return (function (state_23867){
var state_val_23868 = (state_23867[(1)]);
if((state_val_23868 === (7))){
var inst_23863 = (state_23867[(2)]);
var state_23867__$1 = state_23867;
var statearr_23869_23956 = state_23867__$1;
(statearr_23869_23956[(2)] = inst_23863);

(statearr_23869_23956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23868 === (20))){
var inst_23768 = (state_23867[(7)]);
var inst_23778 = cljs.core.first.call(null,inst_23768);
var inst_23779 = cljs.core.nth.call(null,inst_23778,(0),null);
var inst_23780 = cljs.core.nth.call(null,inst_23778,(1),null);
var state_23867__$1 = (function (){var statearr_23870 = state_23867;
(statearr_23870[(8)] = inst_23779);

return statearr_23870;
})();
if(cljs.core.truth_(inst_23780)){
var statearr_23871_23957 = state_23867__$1;
(statearr_23871_23957[(1)] = (22));

} else {
var statearr_23872_23958 = state_23867__$1;
(statearr_23872_23958[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23868 === (27))){
var inst_23739 = (state_23867[(9)]);
var inst_23815 = (state_23867[(10)]);
var inst_23808 = (state_23867[(11)]);
var inst_23810 = (state_23867[(12)]);
var inst_23815__$1 = cljs.core._nth.call(null,inst_23808,inst_23810);
var inst_23816 = cljs.core.async.put_BANG_.call(null,inst_23815__$1,inst_23739,done);
var state_23867__$1 = (function (){var statearr_23873 = state_23867;
(statearr_23873[(10)] = inst_23815__$1);

return statearr_23873;
})();
if(cljs.core.truth_(inst_23816)){
var statearr_23874_23959 = state_23867__$1;
(statearr_23874_23959[(1)] = (30));

} else {
var statearr_23875_23960 = state_23867__$1;
(statearr_23875_23960[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23868 === (1))){
var state_23867__$1 = state_23867;
var statearr_23876_23961 = state_23867__$1;
(statearr_23876_23961[(2)] = null);

(statearr_23876_23961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23868 === (24))){
var inst_23768 = (state_23867[(7)]);
var inst_23785 = (state_23867[(2)]);
var inst_23786 = cljs.core.next.call(null,inst_23768);
var inst_23748 = inst_23786;
var inst_23749 = null;
var inst_23750 = (0);
var inst_23751 = (0);
var state_23867__$1 = (function (){var statearr_23877 = state_23867;
(statearr_23877[(13)] = inst_23749);

(statearr_23877[(14)] = inst_23785);

(statearr_23877[(15)] = inst_23750);

(statearr_23877[(16)] = inst_23751);

(statearr_23877[(17)] = inst_23748);

return statearr_23877;
})();
var statearr_23878_23962 = state_23867__$1;
(statearr_23878_23962[(2)] = null);

(statearr_23878_23962[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23868 === (39))){
var state_23867__$1 = state_23867;
var statearr_23882_23963 = state_23867__$1;
(statearr_23882_23963[(2)] = null);

(statearr_23882_23963[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23868 === (4))){
var inst_23739 = (state_23867[(9)]);
var inst_23739__$1 = (state_23867[(2)]);
var inst_23740 = (inst_23739__$1 == null);
var state_23867__$1 = (function (){var statearr_23883 = state_23867;
(statearr_23883[(9)] = inst_23739__$1);

return statearr_23883;
})();
if(cljs.core.truth_(inst_23740)){
var statearr_23884_23964 = state_23867__$1;
(statearr_23884_23964[(1)] = (5));

} else {
var statearr_23885_23965 = state_23867__$1;
(statearr_23885_23965[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23868 === (15))){
var inst_23749 = (state_23867[(13)]);
var inst_23750 = (state_23867[(15)]);
var inst_23751 = (state_23867[(16)]);
var inst_23748 = (state_23867[(17)]);
var inst_23764 = (state_23867[(2)]);
var inst_23765 = (inst_23751 + (1));
var tmp23879 = inst_23749;
var tmp23880 = inst_23750;
var tmp23881 = inst_23748;
var inst_23748__$1 = tmp23881;
var inst_23749__$1 = tmp23879;
var inst_23750__$1 = tmp23880;
var inst_23751__$1 = inst_23765;
var state_23867__$1 = (function (){var statearr_23886 = state_23867;
(statearr_23886[(13)] = inst_23749__$1);

(statearr_23886[(15)] = inst_23750__$1);

(statearr_23886[(16)] = inst_23751__$1);

(statearr_23886[(17)] = inst_23748__$1);

(statearr_23886[(18)] = inst_23764);

return statearr_23886;
})();
var statearr_23887_23966 = state_23867__$1;
(statearr_23887_23966[(2)] = null);

(statearr_23887_23966[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23868 === (21))){
var inst_23789 = (state_23867[(2)]);
var state_23867__$1 = state_23867;
var statearr_23891_23967 = state_23867__$1;
(statearr_23891_23967[(2)] = inst_23789);

(statearr_23891_23967[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23868 === (31))){
var inst_23815 = (state_23867[(10)]);
var inst_23819 = done.call(null,null);
var inst_23820 = cljs.core.async.untap_STAR_.call(null,m,inst_23815);
var state_23867__$1 = (function (){var statearr_23892 = state_23867;
(statearr_23892[(19)] = inst_23819);

return statearr_23892;
})();
var statearr_23893_23968 = state_23867__$1;
(statearr_23893_23968[(2)] = inst_23820);

(statearr_23893_23968[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23868 === (32))){
var inst_23807 = (state_23867[(20)]);
var inst_23808 = (state_23867[(11)]);
var inst_23810 = (state_23867[(12)]);
var inst_23809 = (state_23867[(21)]);
var inst_23822 = (state_23867[(2)]);
var inst_23823 = (inst_23810 + (1));
var tmp23888 = inst_23807;
var tmp23889 = inst_23808;
var tmp23890 = inst_23809;
var inst_23807__$1 = tmp23888;
var inst_23808__$1 = tmp23889;
var inst_23809__$1 = tmp23890;
var inst_23810__$1 = inst_23823;
var state_23867__$1 = (function (){var statearr_23894 = state_23867;
(statearr_23894[(22)] = inst_23822);

(statearr_23894[(20)] = inst_23807__$1);

(statearr_23894[(11)] = inst_23808__$1);

(statearr_23894[(12)] = inst_23810__$1);

(statearr_23894[(21)] = inst_23809__$1);

return statearr_23894;
})();
var statearr_23895_23969 = state_23867__$1;
(statearr_23895_23969[(2)] = null);

(statearr_23895_23969[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23868 === (40))){
var inst_23835 = (state_23867[(23)]);
var inst_23839 = done.call(null,null);
var inst_23840 = cljs.core.async.untap_STAR_.call(null,m,inst_23835);
var state_23867__$1 = (function (){var statearr_23896 = state_23867;
(statearr_23896[(24)] = inst_23839);

return statearr_23896;
})();
var statearr_23897_23970 = state_23867__$1;
(statearr_23897_23970[(2)] = inst_23840);

(statearr_23897_23970[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23868 === (33))){
var inst_23826 = (state_23867[(25)]);
var inst_23828 = cljs.core.chunked_seq_QMARK_.call(null,inst_23826);
var state_23867__$1 = state_23867;
if(inst_23828){
var statearr_23898_23971 = state_23867__$1;
(statearr_23898_23971[(1)] = (36));

} else {
var statearr_23899_23972 = state_23867__$1;
(statearr_23899_23972[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23868 === (13))){
var inst_23758 = (state_23867[(26)]);
var inst_23761 = cljs.core.async.close_BANG_.call(null,inst_23758);
var state_23867__$1 = state_23867;
var statearr_23900_23973 = state_23867__$1;
(statearr_23900_23973[(2)] = inst_23761);

(statearr_23900_23973[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23868 === (22))){
var inst_23779 = (state_23867[(8)]);
var inst_23782 = cljs.core.async.close_BANG_.call(null,inst_23779);
var state_23867__$1 = state_23867;
var statearr_23901_23974 = state_23867__$1;
(statearr_23901_23974[(2)] = inst_23782);

(statearr_23901_23974[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23868 === (36))){
var inst_23826 = (state_23867[(25)]);
var inst_23830 = cljs.core.chunk_first.call(null,inst_23826);
var inst_23831 = cljs.core.chunk_rest.call(null,inst_23826);
var inst_23832 = cljs.core.count.call(null,inst_23830);
var inst_23807 = inst_23831;
var inst_23808 = inst_23830;
var inst_23809 = inst_23832;
var inst_23810 = (0);
var state_23867__$1 = (function (){var statearr_23902 = state_23867;
(statearr_23902[(20)] = inst_23807);

(statearr_23902[(11)] = inst_23808);

(statearr_23902[(12)] = inst_23810);

(statearr_23902[(21)] = inst_23809);

return statearr_23902;
})();
var statearr_23903_23975 = state_23867__$1;
(statearr_23903_23975[(2)] = null);

(statearr_23903_23975[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23868 === (41))){
var inst_23826 = (state_23867[(25)]);
var inst_23842 = (state_23867[(2)]);
var inst_23843 = cljs.core.next.call(null,inst_23826);
var inst_23807 = inst_23843;
var inst_23808 = null;
var inst_23809 = (0);
var inst_23810 = (0);
var state_23867__$1 = (function (){var statearr_23904 = state_23867;
(statearr_23904[(20)] = inst_23807);

(statearr_23904[(11)] = inst_23808);

(statearr_23904[(12)] = inst_23810);

(statearr_23904[(27)] = inst_23842);

(statearr_23904[(21)] = inst_23809);

return statearr_23904;
})();
var statearr_23905_23976 = state_23867__$1;
(statearr_23905_23976[(2)] = null);

(statearr_23905_23976[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23868 === (43))){
var state_23867__$1 = state_23867;
var statearr_23906_23977 = state_23867__$1;
(statearr_23906_23977[(2)] = null);

(statearr_23906_23977[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23868 === (29))){
var inst_23851 = (state_23867[(2)]);
var state_23867__$1 = state_23867;
var statearr_23907_23978 = state_23867__$1;
(statearr_23907_23978[(2)] = inst_23851);

(statearr_23907_23978[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23868 === (44))){
var inst_23860 = (state_23867[(2)]);
var state_23867__$1 = (function (){var statearr_23908 = state_23867;
(statearr_23908[(28)] = inst_23860);

return statearr_23908;
})();
var statearr_23909_23979 = state_23867__$1;
(statearr_23909_23979[(2)] = null);

(statearr_23909_23979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23868 === (6))){
var inst_23799 = (state_23867[(29)]);
var inst_23798 = cljs.core.deref.call(null,cs);
var inst_23799__$1 = cljs.core.keys.call(null,inst_23798);
var inst_23800 = cljs.core.count.call(null,inst_23799__$1);
var inst_23801 = cljs.core.reset_BANG_.call(null,dctr,inst_23800);
var inst_23806 = cljs.core.seq.call(null,inst_23799__$1);
var inst_23807 = inst_23806;
var inst_23808 = null;
var inst_23809 = (0);
var inst_23810 = (0);
var state_23867__$1 = (function (){var statearr_23910 = state_23867;
(statearr_23910[(30)] = inst_23801);

(statearr_23910[(29)] = inst_23799__$1);

(statearr_23910[(20)] = inst_23807);

(statearr_23910[(11)] = inst_23808);

(statearr_23910[(12)] = inst_23810);

(statearr_23910[(21)] = inst_23809);

return statearr_23910;
})();
var statearr_23911_23980 = state_23867__$1;
(statearr_23911_23980[(2)] = null);

(statearr_23911_23980[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23868 === (28))){
var inst_23807 = (state_23867[(20)]);
var inst_23826 = (state_23867[(25)]);
var inst_23826__$1 = cljs.core.seq.call(null,inst_23807);
var state_23867__$1 = (function (){var statearr_23912 = state_23867;
(statearr_23912[(25)] = inst_23826__$1);

return statearr_23912;
})();
if(inst_23826__$1){
var statearr_23913_23981 = state_23867__$1;
(statearr_23913_23981[(1)] = (33));

} else {
var statearr_23914_23982 = state_23867__$1;
(statearr_23914_23982[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23868 === (25))){
var inst_23810 = (state_23867[(12)]);
var inst_23809 = (state_23867[(21)]);
var inst_23812 = (inst_23810 < inst_23809);
var inst_23813 = inst_23812;
var state_23867__$1 = state_23867;
if(cljs.core.truth_(inst_23813)){
var statearr_23915_23983 = state_23867__$1;
(statearr_23915_23983[(1)] = (27));

} else {
var statearr_23916_23984 = state_23867__$1;
(statearr_23916_23984[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23868 === (34))){
var state_23867__$1 = state_23867;
var statearr_23917_23985 = state_23867__$1;
(statearr_23917_23985[(2)] = null);

(statearr_23917_23985[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23868 === (17))){
var state_23867__$1 = state_23867;
var statearr_23918_23986 = state_23867__$1;
(statearr_23918_23986[(2)] = null);

(statearr_23918_23986[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23868 === (3))){
var inst_23865 = (state_23867[(2)]);
var state_23867__$1 = state_23867;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23867__$1,inst_23865);
} else {
if((state_val_23868 === (12))){
var inst_23794 = (state_23867[(2)]);
var state_23867__$1 = state_23867;
var statearr_23919_23987 = state_23867__$1;
(statearr_23919_23987[(2)] = inst_23794);

(statearr_23919_23987[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23868 === (2))){
var state_23867__$1 = state_23867;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23867__$1,(4),ch);
} else {
if((state_val_23868 === (23))){
var state_23867__$1 = state_23867;
var statearr_23920_23988 = state_23867__$1;
(statearr_23920_23988[(2)] = null);

(statearr_23920_23988[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23868 === (35))){
var inst_23849 = (state_23867[(2)]);
var state_23867__$1 = state_23867;
var statearr_23921_23989 = state_23867__$1;
(statearr_23921_23989[(2)] = inst_23849);

(statearr_23921_23989[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23868 === (19))){
var inst_23768 = (state_23867[(7)]);
var inst_23772 = cljs.core.chunk_first.call(null,inst_23768);
var inst_23773 = cljs.core.chunk_rest.call(null,inst_23768);
var inst_23774 = cljs.core.count.call(null,inst_23772);
var inst_23748 = inst_23773;
var inst_23749 = inst_23772;
var inst_23750 = inst_23774;
var inst_23751 = (0);
var state_23867__$1 = (function (){var statearr_23922 = state_23867;
(statearr_23922[(13)] = inst_23749);

(statearr_23922[(15)] = inst_23750);

(statearr_23922[(16)] = inst_23751);

(statearr_23922[(17)] = inst_23748);

return statearr_23922;
})();
var statearr_23923_23990 = state_23867__$1;
(statearr_23923_23990[(2)] = null);

(statearr_23923_23990[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23868 === (11))){
var inst_23748 = (state_23867[(17)]);
var inst_23768 = (state_23867[(7)]);
var inst_23768__$1 = cljs.core.seq.call(null,inst_23748);
var state_23867__$1 = (function (){var statearr_23924 = state_23867;
(statearr_23924[(7)] = inst_23768__$1);

return statearr_23924;
})();
if(inst_23768__$1){
var statearr_23925_23991 = state_23867__$1;
(statearr_23925_23991[(1)] = (16));

} else {
var statearr_23926_23992 = state_23867__$1;
(statearr_23926_23992[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23868 === (9))){
var inst_23796 = (state_23867[(2)]);
var state_23867__$1 = state_23867;
var statearr_23927_23993 = state_23867__$1;
(statearr_23927_23993[(2)] = inst_23796);

(statearr_23927_23993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23868 === (5))){
var inst_23746 = cljs.core.deref.call(null,cs);
var inst_23747 = cljs.core.seq.call(null,inst_23746);
var inst_23748 = inst_23747;
var inst_23749 = null;
var inst_23750 = (0);
var inst_23751 = (0);
var state_23867__$1 = (function (){var statearr_23928 = state_23867;
(statearr_23928[(13)] = inst_23749);

(statearr_23928[(15)] = inst_23750);

(statearr_23928[(16)] = inst_23751);

(statearr_23928[(17)] = inst_23748);

return statearr_23928;
})();
var statearr_23929_23994 = state_23867__$1;
(statearr_23929_23994[(2)] = null);

(statearr_23929_23994[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23868 === (14))){
var state_23867__$1 = state_23867;
var statearr_23930_23995 = state_23867__$1;
(statearr_23930_23995[(2)] = null);

(statearr_23930_23995[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23868 === (45))){
var inst_23857 = (state_23867[(2)]);
var state_23867__$1 = state_23867;
var statearr_23931_23996 = state_23867__$1;
(statearr_23931_23996[(2)] = inst_23857);

(statearr_23931_23996[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23868 === (26))){
var inst_23799 = (state_23867[(29)]);
var inst_23853 = (state_23867[(2)]);
var inst_23854 = cljs.core.seq.call(null,inst_23799);
var state_23867__$1 = (function (){var statearr_23932 = state_23867;
(statearr_23932[(31)] = inst_23853);

return statearr_23932;
})();
if(inst_23854){
var statearr_23933_23997 = state_23867__$1;
(statearr_23933_23997[(1)] = (42));

} else {
var statearr_23934_23998 = state_23867__$1;
(statearr_23934_23998[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23868 === (16))){
var inst_23768 = (state_23867[(7)]);
var inst_23770 = cljs.core.chunked_seq_QMARK_.call(null,inst_23768);
var state_23867__$1 = state_23867;
if(inst_23770){
var statearr_23935_23999 = state_23867__$1;
(statearr_23935_23999[(1)] = (19));

} else {
var statearr_23936_24000 = state_23867__$1;
(statearr_23936_24000[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23868 === (38))){
var inst_23846 = (state_23867[(2)]);
var state_23867__$1 = state_23867;
var statearr_23937_24001 = state_23867__$1;
(statearr_23937_24001[(2)] = inst_23846);

(statearr_23937_24001[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23868 === (30))){
var state_23867__$1 = state_23867;
var statearr_23938_24002 = state_23867__$1;
(statearr_23938_24002[(2)] = null);

(statearr_23938_24002[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23868 === (10))){
var inst_23749 = (state_23867[(13)]);
var inst_23751 = (state_23867[(16)]);
var inst_23757 = cljs.core._nth.call(null,inst_23749,inst_23751);
var inst_23758 = cljs.core.nth.call(null,inst_23757,(0),null);
var inst_23759 = cljs.core.nth.call(null,inst_23757,(1),null);
var state_23867__$1 = (function (){var statearr_23939 = state_23867;
(statearr_23939[(26)] = inst_23758);

return statearr_23939;
})();
if(cljs.core.truth_(inst_23759)){
var statearr_23940_24003 = state_23867__$1;
(statearr_23940_24003[(1)] = (13));

} else {
var statearr_23941_24004 = state_23867__$1;
(statearr_23941_24004[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23868 === (18))){
var inst_23792 = (state_23867[(2)]);
var state_23867__$1 = state_23867;
var statearr_23942_24005 = state_23867__$1;
(statearr_23942_24005[(2)] = inst_23792);

(statearr_23942_24005[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23868 === (42))){
var state_23867__$1 = state_23867;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23867__$1,(45),dchan);
} else {
if((state_val_23868 === (37))){
var inst_23739 = (state_23867[(9)]);
var inst_23826 = (state_23867[(25)]);
var inst_23835 = (state_23867[(23)]);
var inst_23835__$1 = cljs.core.first.call(null,inst_23826);
var inst_23836 = cljs.core.async.put_BANG_.call(null,inst_23835__$1,inst_23739,done);
var state_23867__$1 = (function (){var statearr_23943 = state_23867;
(statearr_23943[(23)] = inst_23835__$1);

return statearr_23943;
})();
if(cljs.core.truth_(inst_23836)){
var statearr_23944_24006 = state_23867__$1;
(statearr_23944_24006[(1)] = (39));

} else {
var statearr_23945_24007 = state_23867__$1;
(statearr_23945_24007[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23868 === (8))){
var inst_23750 = (state_23867[(15)]);
var inst_23751 = (state_23867[(16)]);
var inst_23753 = (inst_23751 < inst_23750);
var inst_23754 = inst_23753;
var state_23867__$1 = state_23867;
if(cljs.core.truth_(inst_23754)){
var statearr_23946_24008 = state_23867__$1;
(statearr_23946_24008[(1)] = (10));

} else {
var statearr_23947_24009 = state_23867__$1;
(statearr_23947_24009[(1)] = (11));

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
});})(c__22648__auto___23955,cs,m,dchan,dctr,done))
;
return ((function (switch__22536__auto__,c__22648__auto___23955,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22537__auto__ = null;
var cljs$core$async$mult_$_state_machine__22537__auto____0 = (function (){
var statearr_23951 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23951[(0)] = cljs$core$async$mult_$_state_machine__22537__auto__);

(statearr_23951[(1)] = (1));

return statearr_23951;
});
var cljs$core$async$mult_$_state_machine__22537__auto____1 = (function (state_23867){
while(true){
var ret_value__22538__auto__ = (function (){try{while(true){
var result__22539__auto__ = switch__22536__auto__.call(null,state_23867);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22539__auto__;
}
break;
}
}catch (e23952){if((e23952 instanceof Object)){
var ex__22540__auto__ = e23952;
var statearr_23953_24010 = state_23867;
(statearr_23953_24010[(5)] = ex__22540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24011 = state_23867;
state_23867 = G__24011;
continue;
} else {
return ret_value__22538__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22537__auto__ = function(state_23867){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22537__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22537__auto____1.call(this,state_23867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22537__auto____0;
cljs$core$async$mult_$_state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22537__auto____1;
return cljs$core$async$mult_$_state_machine__22537__auto__;
})()
;})(switch__22536__auto__,c__22648__auto___23955,cs,m,dchan,dctr,done))
})();
var state__22650__auto__ = (function (){var statearr_23954 = f__22649__auto__.call(null);
(statearr_23954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22648__auto___23955);

return statearr_23954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22650__auto__);
});})(c__22648__auto___23955,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args24012 = [];
var len__17899__auto___24015 = arguments.length;
var i__17900__auto___24016 = (0);
while(true){
if((i__17900__auto___24016 < len__17899__auto___24015)){
args24012.push((arguments[i__17900__auto___24016]));

var G__24017 = (i__17900__auto___24016 + (1));
i__17900__auto___24016 = G__24017;
continue;
} else {
}
break;
}

var G__24014 = args24012.length;
switch (G__24014) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24012.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17496__auto__ = (((m == null))?null:m);
var m__17497__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17496__auto__)]);
if(!((m__17497__auto__ == null))){
return m__17497__auto__.call(null,m,ch);
} else {
var m__17497__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17497__auto____$1 == null))){
return m__17497__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17496__auto__ = (((m == null))?null:m);
var m__17497__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17496__auto__)]);
if(!((m__17497__auto__ == null))){
return m__17497__auto__.call(null,m,ch);
} else {
var m__17497__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17497__auto____$1 == null))){
return m__17497__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17496__auto__ = (((m == null))?null:m);
var m__17497__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17496__auto__)]);
if(!((m__17497__auto__ == null))){
return m__17497__auto__.call(null,m);
} else {
var m__17497__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17497__auto____$1 == null))){
return m__17497__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17496__auto__ = (((m == null))?null:m);
var m__17497__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17496__auto__)]);
if(!((m__17497__auto__ == null))){
return m__17497__auto__.call(null,m,state_map);
} else {
var m__17497__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17497__auto____$1 == null))){
return m__17497__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17496__auto__ = (((m == null))?null:m);
var m__17497__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17496__auto__)]);
if(!((m__17497__auto__ == null))){
return m__17497__auto__.call(null,m,mode);
} else {
var m__17497__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17497__auto____$1 == null))){
return m__17497__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17906__auto__ = [];
var len__17899__auto___24029 = arguments.length;
var i__17900__auto___24030 = (0);
while(true){
if((i__17900__auto___24030 < len__17899__auto___24029)){
args__17906__auto__.push((arguments[i__17900__auto___24030]));

var G__24031 = (i__17900__auto___24030 + (1));
i__17900__auto___24030 = G__24031;
continue;
} else {
}
break;
}

var argseq__17907__auto__ = ((((3) < args__17906__auto__.length))?(new cljs.core.IndexedSeq(args__17906__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17907__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24023){
var map__24024 = p__24023;
var map__24024__$1 = ((((!((map__24024 == null)))?((((map__24024.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24024.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24024):map__24024);
var opts = map__24024__$1;
var statearr_24026_24032 = state;
(statearr_24026_24032[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__24024,map__24024__$1,opts){
return (function (val){
var statearr_24027_24033 = state;
(statearr_24027_24033[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24024,map__24024__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_24028_24034 = state;
(statearr_24028_24034[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24019){
var G__24020 = cljs.core.first.call(null,seq24019);
var seq24019__$1 = cljs.core.next.call(null,seq24019);
var G__24021 = cljs.core.first.call(null,seq24019__$1);
var seq24019__$2 = cljs.core.next.call(null,seq24019__$1);
var G__24022 = cljs.core.first.call(null,seq24019__$2);
var seq24019__$3 = cljs.core.next.call(null,seq24019__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24020,G__24021,G__24022,seq24019__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async24198 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24198 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24199){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta24199 = meta24199;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24198.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24200,meta24199__$1){
var self__ = this;
var _24200__$1 = this;
return (new cljs.core.async.t_cljs$core$async24198(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24199__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24198.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24200){
var self__ = this;
var _24200__$1 = this;
return self__.meta24199;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24198.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24198.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24198.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async24198.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24198.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24198.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24198.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24198.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24198.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24199","meta24199",439511840,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24198.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24198.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24198";

cljs.core.async.t_cljs$core$async24198.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17439__auto__,writer__17440__auto__,opt__17441__auto__){
return cljs.core._write.call(null,writer__17440__auto__,"cljs.core.async/t_cljs$core$async24198");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async24198 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24198(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24199){
return (new cljs.core.async.t_cljs$core$async24198(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24199));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24198(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22648__auto___24361 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22648__auto___24361,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22649__auto__ = (function (){var switch__22536__auto__ = ((function (c__22648__auto___24361,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24298){
var state_val_24299 = (state_24298[(1)]);
if((state_val_24299 === (7))){
var inst_24216 = (state_24298[(2)]);
var state_24298__$1 = state_24298;
var statearr_24300_24362 = state_24298__$1;
(statearr_24300_24362[(2)] = inst_24216);

(statearr_24300_24362[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24299 === (20))){
var inst_24228 = (state_24298[(7)]);
var state_24298__$1 = state_24298;
var statearr_24301_24363 = state_24298__$1;
(statearr_24301_24363[(2)] = inst_24228);

(statearr_24301_24363[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24299 === (27))){
var state_24298__$1 = state_24298;
var statearr_24302_24364 = state_24298__$1;
(statearr_24302_24364[(2)] = null);

(statearr_24302_24364[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24299 === (1))){
var inst_24204 = (state_24298[(8)]);
var inst_24204__$1 = calc_state.call(null);
var inst_24206 = (inst_24204__$1 == null);
var inst_24207 = cljs.core.not.call(null,inst_24206);
var state_24298__$1 = (function (){var statearr_24303 = state_24298;
(statearr_24303[(8)] = inst_24204__$1);

return statearr_24303;
})();
if(inst_24207){
var statearr_24304_24365 = state_24298__$1;
(statearr_24304_24365[(1)] = (2));

} else {
var statearr_24305_24366 = state_24298__$1;
(statearr_24305_24366[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24299 === (24))){
var inst_24258 = (state_24298[(9)]);
var inst_24272 = (state_24298[(10)]);
var inst_24251 = (state_24298[(11)]);
var inst_24272__$1 = inst_24251.call(null,inst_24258);
var state_24298__$1 = (function (){var statearr_24306 = state_24298;
(statearr_24306[(10)] = inst_24272__$1);

return statearr_24306;
})();
if(cljs.core.truth_(inst_24272__$1)){
var statearr_24307_24367 = state_24298__$1;
(statearr_24307_24367[(1)] = (29));

} else {
var statearr_24308_24368 = state_24298__$1;
(statearr_24308_24368[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24299 === (4))){
var inst_24219 = (state_24298[(2)]);
var state_24298__$1 = state_24298;
if(cljs.core.truth_(inst_24219)){
var statearr_24309_24369 = state_24298__$1;
(statearr_24309_24369[(1)] = (8));

} else {
var statearr_24310_24370 = state_24298__$1;
(statearr_24310_24370[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24299 === (15))){
var inst_24245 = (state_24298[(2)]);
var state_24298__$1 = state_24298;
if(cljs.core.truth_(inst_24245)){
var statearr_24311_24371 = state_24298__$1;
(statearr_24311_24371[(1)] = (19));

} else {
var statearr_24312_24372 = state_24298__$1;
(statearr_24312_24372[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24299 === (21))){
var inst_24250 = (state_24298[(12)]);
var inst_24250__$1 = (state_24298[(2)]);
var inst_24251 = cljs.core.get.call(null,inst_24250__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24252 = cljs.core.get.call(null,inst_24250__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24253 = cljs.core.get.call(null,inst_24250__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24298__$1 = (function (){var statearr_24313 = state_24298;
(statearr_24313[(13)] = inst_24252);

(statearr_24313[(12)] = inst_24250__$1);

(statearr_24313[(11)] = inst_24251);

return statearr_24313;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24298__$1,(22),inst_24253);
} else {
if((state_val_24299 === (31))){
var inst_24280 = (state_24298[(2)]);
var state_24298__$1 = state_24298;
if(cljs.core.truth_(inst_24280)){
var statearr_24314_24373 = state_24298__$1;
(statearr_24314_24373[(1)] = (32));

} else {
var statearr_24315_24374 = state_24298__$1;
(statearr_24315_24374[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24299 === (32))){
var inst_24257 = (state_24298[(14)]);
var state_24298__$1 = state_24298;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24298__$1,(35),out,inst_24257);
} else {
if((state_val_24299 === (33))){
var inst_24250 = (state_24298[(12)]);
var inst_24228 = inst_24250;
var state_24298__$1 = (function (){var statearr_24316 = state_24298;
(statearr_24316[(7)] = inst_24228);

return statearr_24316;
})();
var statearr_24317_24375 = state_24298__$1;
(statearr_24317_24375[(2)] = null);

(statearr_24317_24375[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24299 === (13))){
var inst_24228 = (state_24298[(7)]);
var inst_24235 = inst_24228.cljs$lang$protocol_mask$partition0$;
var inst_24236 = (inst_24235 & (64));
var inst_24237 = inst_24228.cljs$core$ISeq$;
var inst_24238 = (inst_24236) || (inst_24237);
var state_24298__$1 = state_24298;
if(cljs.core.truth_(inst_24238)){
var statearr_24318_24376 = state_24298__$1;
(statearr_24318_24376[(1)] = (16));

} else {
var statearr_24319_24377 = state_24298__$1;
(statearr_24319_24377[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24299 === (22))){
var inst_24258 = (state_24298[(9)]);
var inst_24257 = (state_24298[(14)]);
var inst_24256 = (state_24298[(2)]);
var inst_24257__$1 = cljs.core.nth.call(null,inst_24256,(0),null);
var inst_24258__$1 = cljs.core.nth.call(null,inst_24256,(1),null);
var inst_24259 = (inst_24257__$1 == null);
var inst_24260 = cljs.core._EQ_.call(null,inst_24258__$1,change);
var inst_24261 = (inst_24259) || (inst_24260);
var state_24298__$1 = (function (){var statearr_24320 = state_24298;
(statearr_24320[(9)] = inst_24258__$1);

(statearr_24320[(14)] = inst_24257__$1);

return statearr_24320;
})();
if(cljs.core.truth_(inst_24261)){
var statearr_24321_24378 = state_24298__$1;
(statearr_24321_24378[(1)] = (23));

} else {
var statearr_24322_24379 = state_24298__$1;
(statearr_24322_24379[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24299 === (36))){
var inst_24250 = (state_24298[(12)]);
var inst_24228 = inst_24250;
var state_24298__$1 = (function (){var statearr_24323 = state_24298;
(statearr_24323[(7)] = inst_24228);

return statearr_24323;
})();
var statearr_24324_24380 = state_24298__$1;
(statearr_24324_24380[(2)] = null);

(statearr_24324_24380[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24299 === (29))){
var inst_24272 = (state_24298[(10)]);
var state_24298__$1 = state_24298;
var statearr_24325_24381 = state_24298__$1;
(statearr_24325_24381[(2)] = inst_24272);

(statearr_24325_24381[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24299 === (6))){
var state_24298__$1 = state_24298;
var statearr_24326_24382 = state_24298__$1;
(statearr_24326_24382[(2)] = false);

(statearr_24326_24382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24299 === (28))){
var inst_24268 = (state_24298[(2)]);
var inst_24269 = calc_state.call(null);
var inst_24228 = inst_24269;
var state_24298__$1 = (function (){var statearr_24327 = state_24298;
(statearr_24327[(15)] = inst_24268);

(statearr_24327[(7)] = inst_24228);

return statearr_24327;
})();
var statearr_24328_24383 = state_24298__$1;
(statearr_24328_24383[(2)] = null);

(statearr_24328_24383[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24299 === (25))){
var inst_24294 = (state_24298[(2)]);
var state_24298__$1 = state_24298;
var statearr_24329_24384 = state_24298__$1;
(statearr_24329_24384[(2)] = inst_24294);

(statearr_24329_24384[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24299 === (34))){
var inst_24292 = (state_24298[(2)]);
var state_24298__$1 = state_24298;
var statearr_24330_24385 = state_24298__$1;
(statearr_24330_24385[(2)] = inst_24292);

(statearr_24330_24385[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24299 === (17))){
var state_24298__$1 = state_24298;
var statearr_24331_24386 = state_24298__$1;
(statearr_24331_24386[(2)] = false);

(statearr_24331_24386[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24299 === (3))){
var state_24298__$1 = state_24298;
var statearr_24332_24387 = state_24298__$1;
(statearr_24332_24387[(2)] = false);

(statearr_24332_24387[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24299 === (12))){
var inst_24296 = (state_24298[(2)]);
var state_24298__$1 = state_24298;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24298__$1,inst_24296);
} else {
if((state_val_24299 === (2))){
var inst_24204 = (state_24298[(8)]);
var inst_24209 = inst_24204.cljs$lang$protocol_mask$partition0$;
var inst_24210 = (inst_24209 & (64));
var inst_24211 = inst_24204.cljs$core$ISeq$;
var inst_24212 = (inst_24210) || (inst_24211);
var state_24298__$1 = state_24298;
if(cljs.core.truth_(inst_24212)){
var statearr_24333_24388 = state_24298__$1;
(statearr_24333_24388[(1)] = (5));

} else {
var statearr_24334_24389 = state_24298__$1;
(statearr_24334_24389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24299 === (23))){
var inst_24257 = (state_24298[(14)]);
var inst_24263 = (inst_24257 == null);
var state_24298__$1 = state_24298;
if(cljs.core.truth_(inst_24263)){
var statearr_24335_24390 = state_24298__$1;
(statearr_24335_24390[(1)] = (26));

} else {
var statearr_24336_24391 = state_24298__$1;
(statearr_24336_24391[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24299 === (35))){
var inst_24283 = (state_24298[(2)]);
var state_24298__$1 = state_24298;
if(cljs.core.truth_(inst_24283)){
var statearr_24337_24392 = state_24298__$1;
(statearr_24337_24392[(1)] = (36));

} else {
var statearr_24338_24393 = state_24298__$1;
(statearr_24338_24393[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24299 === (19))){
var inst_24228 = (state_24298[(7)]);
var inst_24247 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24228);
var state_24298__$1 = state_24298;
var statearr_24339_24394 = state_24298__$1;
(statearr_24339_24394[(2)] = inst_24247);

(statearr_24339_24394[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24299 === (11))){
var inst_24228 = (state_24298[(7)]);
var inst_24232 = (inst_24228 == null);
var inst_24233 = cljs.core.not.call(null,inst_24232);
var state_24298__$1 = state_24298;
if(inst_24233){
var statearr_24340_24395 = state_24298__$1;
(statearr_24340_24395[(1)] = (13));

} else {
var statearr_24341_24396 = state_24298__$1;
(statearr_24341_24396[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24299 === (9))){
var inst_24204 = (state_24298[(8)]);
var state_24298__$1 = state_24298;
var statearr_24342_24397 = state_24298__$1;
(statearr_24342_24397[(2)] = inst_24204);

(statearr_24342_24397[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24299 === (5))){
var state_24298__$1 = state_24298;
var statearr_24343_24398 = state_24298__$1;
(statearr_24343_24398[(2)] = true);

(statearr_24343_24398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24299 === (14))){
var state_24298__$1 = state_24298;
var statearr_24344_24399 = state_24298__$1;
(statearr_24344_24399[(2)] = false);

(statearr_24344_24399[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24299 === (26))){
var inst_24258 = (state_24298[(9)]);
var inst_24265 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24258);
var state_24298__$1 = state_24298;
var statearr_24345_24400 = state_24298__$1;
(statearr_24345_24400[(2)] = inst_24265);

(statearr_24345_24400[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24299 === (16))){
var state_24298__$1 = state_24298;
var statearr_24346_24401 = state_24298__$1;
(statearr_24346_24401[(2)] = true);

(statearr_24346_24401[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24299 === (38))){
var inst_24288 = (state_24298[(2)]);
var state_24298__$1 = state_24298;
var statearr_24347_24402 = state_24298__$1;
(statearr_24347_24402[(2)] = inst_24288);

(statearr_24347_24402[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24299 === (30))){
var inst_24252 = (state_24298[(13)]);
var inst_24258 = (state_24298[(9)]);
var inst_24251 = (state_24298[(11)]);
var inst_24275 = cljs.core.empty_QMARK_.call(null,inst_24251);
var inst_24276 = inst_24252.call(null,inst_24258);
var inst_24277 = cljs.core.not.call(null,inst_24276);
var inst_24278 = (inst_24275) && (inst_24277);
var state_24298__$1 = state_24298;
var statearr_24348_24403 = state_24298__$1;
(statearr_24348_24403[(2)] = inst_24278);

(statearr_24348_24403[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24299 === (10))){
var inst_24204 = (state_24298[(8)]);
var inst_24224 = (state_24298[(2)]);
var inst_24225 = cljs.core.get.call(null,inst_24224,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24226 = cljs.core.get.call(null,inst_24224,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24227 = cljs.core.get.call(null,inst_24224,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24228 = inst_24204;
var state_24298__$1 = (function (){var statearr_24349 = state_24298;
(statearr_24349[(16)] = inst_24226);

(statearr_24349[(17)] = inst_24227);

(statearr_24349[(7)] = inst_24228);

(statearr_24349[(18)] = inst_24225);

return statearr_24349;
})();
var statearr_24350_24404 = state_24298__$1;
(statearr_24350_24404[(2)] = null);

(statearr_24350_24404[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24299 === (18))){
var inst_24242 = (state_24298[(2)]);
var state_24298__$1 = state_24298;
var statearr_24351_24405 = state_24298__$1;
(statearr_24351_24405[(2)] = inst_24242);

(statearr_24351_24405[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24299 === (37))){
var state_24298__$1 = state_24298;
var statearr_24352_24406 = state_24298__$1;
(statearr_24352_24406[(2)] = null);

(statearr_24352_24406[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24299 === (8))){
var inst_24204 = (state_24298[(8)]);
var inst_24221 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24204);
var state_24298__$1 = state_24298;
var statearr_24353_24407 = state_24298__$1;
(statearr_24353_24407[(2)] = inst_24221);

(statearr_24353_24407[(1)] = (10));


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
});})(c__22648__auto___24361,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22536__auto__,c__22648__auto___24361,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22537__auto__ = null;
var cljs$core$async$mix_$_state_machine__22537__auto____0 = (function (){
var statearr_24357 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24357[(0)] = cljs$core$async$mix_$_state_machine__22537__auto__);

(statearr_24357[(1)] = (1));

return statearr_24357;
});
var cljs$core$async$mix_$_state_machine__22537__auto____1 = (function (state_24298){
while(true){
var ret_value__22538__auto__ = (function (){try{while(true){
var result__22539__auto__ = switch__22536__auto__.call(null,state_24298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22539__auto__;
}
break;
}
}catch (e24358){if((e24358 instanceof Object)){
var ex__22540__auto__ = e24358;
var statearr_24359_24408 = state_24298;
(statearr_24359_24408[(5)] = ex__22540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24358;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24409 = state_24298;
state_24298 = G__24409;
continue;
} else {
return ret_value__22538__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22537__auto__ = function(state_24298){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22537__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22537__auto____1.call(this,state_24298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22537__auto____0;
cljs$core$async$mix_$_state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22537__auto____1;
return cljs$core$async$mix_$_state_machine__22537__auto__;
})()
;})(switch__22536__auto__,c__22648__auto___24361,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22650__auto__ = (function (){var statearr_24360 = f__22649__auto__.call(null);
(statearr_24360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22648__auto___24361);

return statearr_24360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22650__auto__);
});})(c__22648__auto___24361,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17496__auto__ = (((p == null))?null:p);
var m__17497__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17496__auto__)]);
if(!((m__17497__auto__ == null))){
return m__17497__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17497__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17497__auto____$1 == null))){
return m__17497__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17496__auto__ = (((p == null))?null:p);
var m__17497__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17496__auto__)]);
if(!((m__17497__auto__ == null))){
return m__17497__auto__.call(null,p,v,ch);
} else {
var m__17497__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17497__auto____$1 == null))){
return m__17497__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args24410 = [];
var len__17899__auto___24413 = arguments.length;
var i__17900__auto___24414 = (0);
while(true){
if((i__17900__auto___24414 < len__17899__auto___24413)){
args24410.push((arguments[i__17900__auto___24414]));

var G__24415 = (i__17900__auto___24414 + (1));
i__17900__auto___24414 = G__24415;
continue;
} else {
}
break;
}

var G__24412 = args24410.length;
switch (G__24412) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24410.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17496__auto__ = (((p == null))?null:p);
var m__17497__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17496__auto__)]);
if(!((m__17497__auto__ == null))){
return m__17497__auto__.call(null,p);
} else {
var m__17497__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17497__auto____$1 == null))){
return m__17497__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17496__auto__ = (((p == null))?null:p);
var m__17497__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17496__auto__)]);
if(!((m__17497__auto__ == null))){
return m__17497__auto__.call(null,p,v);
} else {
var m__17497__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17497__auto____$1 == null))){
return m__17497__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args24418 = [];
var len__17899__auto___24543 = arguments.length;
var i__17900__auto___24544 = (0);
while(true){
if((i__17900__auto___24544 < len__17899__auto___24543)){
args24418.push((arguments[i__17900__auto___24544]));

var G__24545 = (i__17900__auto___24544 + (1));
i__17900__auto___24544 = G__24545;
continue;
} else {
}
break;
}

var G__24420 = args24418.length;
switch (G__24420) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24418.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16841__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16841__auto__)){
return or__16841__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16841__auto__,mults){
return (function (p1__24417_SHARP_){
if(cljs.core.truth_(p1__24417_SHARP_.call(null,topic))){
return p1__24417_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24417_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16841__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async24421 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24421 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24422){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24422 = meta24422;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24423,meta24422__$1){
var self__ = this;
var _24423__$1 = this;
return (new cljs.core.async.t_cljs$core$async24421(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24422__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24421.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24423){
var self__ = this;
var _24423__$1 = this;
return self__.meta24422;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24421.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24421.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24421.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async24421.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24421.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24421.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24421.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24421.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24422","meta24422",311612440,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24421.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24421.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24421";

cljs.core.async.t_cljs$core$async24421.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17439__auto__,writer__17440__auto__,opt__17441__auto__){
return cljs.core._write.call(null,writer__17440__auto__,"cljs.core.async/t_cljs$core$async24421");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async24421 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24421(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24422){
return (new cljs.core.async.t_cljs$core$async24421(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24422));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24421(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22648__auto___24547 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22648__auto___24547,mults,ensure_mult,p){
return (function (){
var f__22649__auto__ = (function (){var switch__22536__auto__ = ((function (c__22648__auto___24547,mults,ensure_mult,p){
return (function (state_24495){
var state_val_24496 = (state_24495[(1)]);
if((state_val_24496 === (7))){
var inst_24491 = (state_24495[(2)]);
var state_24495__$1 = state_24495;
var statearr_24497_24548 = state_24495__$1;
(statearr_24497_24548[(2)] = inst_24491);

(statearr_24497_24548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24496 === (20))){
var state_24495__$1 = state_24495;
var statearr_24498_24549 = state_24495__$1;
(statearr_24498_24549[(2)] = null);

(statearr_24498_24549[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24496 === (1))){
var state_24495__$1 = state_24495;
var statearr_24499_24550 = state_24495__$1;
(statearr_24499_24550[(2)] = null);

(statearr_24499_24550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24496 === (24))){
var inst_24474 = (state_24495[(7)]);
var inst_24483 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24474);
var state_24495__$1 = state_24495;
var statearr_24500_24551 = state_24495__$1;
(statearr_24500_24551[(2)] = inst_24483);

(statearr_24500_24551[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24496 === (4))){
var inst_24426 = (state_24495[(8)]);
var inst_24426__$1 = (state_24495[(2)]);
var inst_24427 = (inst_24426__$1 == null);
var state_24495__$1 = (function (){var statearr_24501 = state_24495;
(statearr_24501[(8)] = inst_24426__$1);

return statearr_24501;
})();
if(cljs.core.truth_(inst_24427)){
var statearr_24502_24552 = state_24495__$1;
(statearr_24502_24552[(1)] = (5));

} else {
var statearr_24503_24553 = state_24495__$1;
(statearr_24503_24553[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24496 === (15))){
var inst_24468 = (state_24495[(2)]);
var state_24495__$1 = state_24495;
var statearr_24504_24554 = state_24495__$1;
(statearr_24504_24554[(2)] = inst_24468);

(statearr_24504_24554[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24496 === (21))){
var inst_24488 = (state_24495[(2)]);
var state_24495__$1 = (function (){var statearr_24505 = state_24495;
(statearr_24505[(9)] = inst_24488);

return statearr_24505;
})();
var statearr_24506_24555 = state_24495__$1;
(statearr_24506_24555[(2)] = null);

(statearr_24506_24555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24496 === (13))){
var inst_24450 = (state_24495[(10)]);
var inst_24452 = cljs.core.chunked_seq_QMARK_.call(null,inst_24450);
var state_24495__$1 = state_24495;
if(inst_24452){
var statearr_24507_24556 = state_24495__$1;
(statearr_24507_24556[(1)] = (16));

} else {
var statearr_24508_24557 = state_24495__$1;
(statearr_24508_24557[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24496 === (22))){
var inst_24480 = (state_24495[(2)]);
var state_24495__$1 = state_24495;
if(cljs.core.truth_(inst_24480)){
var statearr_24509_24558 = state_24495__$1;
(statearr_24509_24558[(1)] = (23));

} else {
var statearr_24510_24559 = state_24495__$1;
(statearr_24510_24559[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24496 === (6))){
var inst_24474 = (state_24495[(7)]);
var inst_24426 = (state_24495[(8)]);
var inst_24476 = (state_24495[(11)]);
var inst_24474__$1 = topic_fn.call(null,inst_24426);
var inst_24475 = cljs.core.deref.call(null,mults);
var inst_24476__$1 = cljs.core.get.call(null,inst_24475,inst_24474__$1);
var state_24495__$1 = (function (){var statearr_24511 = state_24495;
(statearr_24511[(7)] = inst_24474__$1);

(statearr_24511[(11)] = inst_24476__$1);

return statearr_24511;
})();
if(cljs.core.truth_(inst_24476__$1)){
var statearr_24512_24560 = state_24495__$1;
(statearr_24512_24560[(1)] = (19));

} else {
var statearr_24513_24561 = state_24495__$1;
(statearr_24513_24561[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24496 === (25))){
var inst_24485 = (state_24495[(2)]);
var state_24495__$1 = state_24495;
var statearr_24514_24562 = state_24495__$1;
(statearr_24514_24562[(2)] = inst_24485);

(statearr_24514_24562[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24496 === (17))){
var inst_24450 = (state_24495[(10)]);
var inst_24459 = cljs.core.first.call(null,inst_24450);
var inst_24460 = cljs.core.async.muxch_STAR_.call(null,inst_24459);
var inst_24461 = cljs.core.async.close_BANG_.call(null,inst_24460);
var inst_24462 = cljs.core.next.call(null,inst_24450);
var inst_24436 = inst_24462;
var inst_24437 = null;
var inst_24438 = (0);
var inst_24439 = (0);
var state_24495__$1 = (function (){var statearr_24515 = state_24495;
(statearr_24515[(12)] = inst_24439);

(statearr_24515[(13)] = inst_24437);

(statearr_24515[(14)] = inst_24436);

(statearr_24515[(15)] = inst_24438);

(statearr_24515[(16)] = inst_24461);

return statearr_24515;
})();
var statearr_24516_24563 = state_24495__$1;
(statearr_24516_24563[(2)] = null);

(statearr_24516_24563[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24496 === (3))){
var inst_24493 = (state_24495[(2)]);
var state_24495__$1 = state_24495;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24495__$1,inst_24493);
} else {
if((state_val_24496 === (12))){
var inst_24470 = (state_24495[(2)]);
var state_24495__$1 = state_24495;
var statearr_24517_24564 = state_24495__$1;
(statearr_24517_24564[(2)] = inst_24470);

(statearr_24517_24564[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24496 === (2))){
var state_24495__$1 = state_24495;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24495__$1,(4),ch);
} else {
if((state_val_24496 === (23))){
var state_24495__$1 = state_24495;
var statearr_24518_24565 = state_24495__$1;
(statearr_24518_24565[(2)] = null);

(statearr_24518_24565[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24496 === (19))){
var inst_24426 = (state_24495[(8)]);
var inst_24476 = (state_24495[(11)]);
var inst_24478 = cljs.core.async.muxch_STAR_.call(null,inst_24476);
var state_24495__$1 = state_24495;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24495__$1,(22),inst_24478,inst_24426);
} else {
if((state_val_24496 === (11))){
var inst_24436 = (state_24495[(14)]);
var inst_24450 = (state_24495[(10)]);
var inst_24450__$1 = cljs.core.seq.call(null,inst_24436);
var state_24495__$1 = (function (){var statearr_24519 = state_24495;
(statearr_24519[(10)] = inst_24450__$1);

return statearr_24519;
})();
if(inst_24450__$1){
var statearr_24520_24566 = state_24495__$1;
(statearr_24520_24566[(1)] = (13));

} else {
var statearr_24521_24567 = state_24495__$1;
(statearr_24521_24567[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24496 === (9))){
var inst_24472 = (state_24495[(2)]);
var state_24495__$1 = state_24495;
var statearr_24522_24568 = state_24495__$1;
(statearr_24522_24568[(2)] = inst_24472);

(statearr_24522_24568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24496 === (5))){
var inst_24433 = cljs.core.deref.call(null,mults);
var inst_24434 = cljs.core.vals.call(null,inst_24433);
var inst_24435 = cljs.core.seq.call(null,inst_24434);
var inst_24436 = inst_24435;
var inst_24437 = null;
var inst_24438 = (0);
var inst_24439 = (0);
var state_24495__$1 = (function (){var statearr_24523 = state_24495;
(statearr_24523[(12)] = inst_24439);

(statearr_24523[(13)] = inst_24437);

(statearr_24523[(14)] = inst_24436);

(statearr_24523[(15)] = inst_24438);

return statearr_24523;
})();
var statearr_24524_24569 = state_24495__$1;
(statearr_24524_24569[(2)] = null);

(statearr_24524_24569[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24496 === (14))){
var state_24495__$1 = state_24495;
var statearr_24528_24570 = state_24495__$1;
(statearr_24528_24570[(2)] = null);

(statearr_24528_24570[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24496 === (16))){
var inst_24450 = (state_24495[(10)]);
var inst_24454 = cljs.core.chunk_first.call(null,inst_24450);
var inst_24455 = cljs.core.chunk_rest.call(null,inst_24450);
var inst_24456 = cljs.core.count.call(null,inst_24454);
var inst_24436 = inst_24455;
var inst_24437 = inst_24454;
var inst_24438 = inst_24456;
var inst_24439 = (0);
var state_24495__$1 = (function (){var statearr_24529 = state_24495;
(statearr_24529[(12)] = inst_24439);

(statearr_24529[(13)] = inst_24437);

(statearr_24529[(14)] = inst_24436);

(statearr_24529[(15)] = inst_24438);

return statearr_24529;
})();
var statearr_24530_24571 = state_24495__$1;
(statearr_24530_24571[(2)] = null);

(statearr_24530_24571[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24496 === (10))){
var inst_24439 = (state_24495[(12)]);
var inst_24437 = (state_24495[(13)]);
var inst_24436 = (state_24495[(14)]);
var inst_24438 = (state_24495[(15)]);
var inst_24444 = cljs.core._nth.call(null,inst_24437,inst_24439);
var inst_24445 = cljs.core.async.muxch_STAR_.call(null,inst_24444);
var inst_24446 = cljs.core.async.close_BANG_.call(null,inst_24445);
var inst_24447 = (inst_24439 + (1));
var tmp24525 = inst_24437;
var tmp24526 = inst_24436;
var tmp24527 = inst_24438;
var inst_24436__$1 = tmp24526;
var inst_24437__$1 = tmp24525;
var inst_24438__$1 = tmp24527;
var inst_24439__$1 = inst_24447;
var state_24495__$1 = (function (){var statearr_24531 = state_24495;
(statearr_24531[(12)] = inst_24439__$1);

(statearr_24531[(13)] = inst_24437__$1);

(statearr_24531[(14)] = inst_24436__$1);

(statearr_24531[(15)] = inst_24438__$1);

(statearr_24531[(17)] = inst_24446);

return statearr_24531;
})();
var statearr_24532_24572 = state_24495__$1;
(statearr_24532_24572[(2)] = null);

(statearr_24532_24572[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24496 === (18))){
var inst_24465 = (state_24495[(2)]);
var state_24495__$1 = state_24495;
var statearr_24533_24573 = state_24495__$1;
(statearr_24533_24573[(2)] = inst_24465);

(statearr_24533_24573[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24496 === (8))){
var inst_24439 = (state_24495[(12)]);
var inst_24438 = (state_24495[(15)]);
var inst_24441 = (inst_24439 < inst_24438);
var inst_24442 = inst_24441;
var state_24495__$1 = state_24495;
if(cljs.core.truth_(inst_24442)){
var statearr_24534_24574 = state_24495__$1;
(statearr_24534_24574[(1)] = (10));

} else {
var statearr_24535_24575 = state_24495__$1;
(statearr_24535_24575[(1)] = (11));

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
});})(c__22648__auto___24547,mults,ensure_mult,p))
;
return ((function (switch__22536__auto__,c__22648__auto___24547,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22537__auto__ = null;
var cljs$core$async$state_machine__22537__auto____0 = (function (){
var statearr_24539 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24539[(0)] = cljs$core$async$state_machine__22537__auto__);

(statearr_24539[(1)] = (1));

return statearr_24539;
});
var cljs$core$async$state_machine__22537__auto____1 = (function (state_24495){
while(true){
var ret_value__22538__auto__ = (function (){try{while(true){
var result__22539__auto__ = switch__22536__auto__.call(null,state_24495);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22539__auto__;
}
break;
}
}catch (e24540){if((e24540 instanceof Object)){
var ex__22540__auto__ = e24540;
var statearr_24541_24576 = state_24495;
(statearr_24541_24576[(5)] = ex__22540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24577 = state_24495;
state_24495 = G__24577;
continue;
} else {
return ret_value__22538__auto__;
}
break;
}
});
cljs$core$async$state_machine__22537__auto__ = function(state_24495){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22537__auto____1.call(this,state_24495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22537__auto____0;
cljs$core$async$state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22537__auto____1;
return cljs$core$async$state_machine__22537__auto__;
})()
;})(switch__22536__auto__,c__22648__auto___24547,mults,ensure_mult,p))
})();
var state__22650__auto__ = (function (){var statearr_24542 = f__22649__auto__.call(null);
(statearr_24542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22648__auto___24547);

return statearr_24542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22650__auto__);
});})(c__22648__auto___24547,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args24578 = [];
var len__17899__auto___24581 = arguments.length;
var i__17900__auto___24582 = (0);
while(true){
if((i__17900__auto___24582 < len__17899__auto___24581)){
args24578.push((arguments[i__17900__auto___24582]));

var G__24583 = (i__17900__auto___24582 + (1));
i__17900__auto___24582 = G__24583;
continue;
} else {
}
break;
}

var G__24580 = args24578.length;
switch (G__24580) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24578.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args24585 = [];
var len__17899__auto___24588 = arguments.length;
var i__17900__auto___24589 = (0);
while(true){
if((i__17900__auto___24589 < len__17899__auto___24588)){
args24585.push((arguments[i__17900__auto___24589]));

var G__24590 = (i__17900__auto___24589 + (1));
i__17900__auto___24589 = G__24590;
continue;
} else {
}
break;
}

var G__24587 = args24585.length;
switch (G__24587) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24585.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args24592 = [];
var len__17899__auto___24663 = arguments.length;
var i__17900__auto___24664 = (0);
while(true){
if((i__17900__auto___24664 < len__17899__auto___24663)){
args24592.push((arguments[i__17900__auto___24664]));

var G__24665 = (i__17900__auto___24664 + (1));
i__17900__auto___24664 = G__24665;
continue;
} else {
}
break;
}

var G__24594 = args24592.length;
switch (G__24594) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24592.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__22648__auto___24667 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22648__auto___24667,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22649__auto__ = (function (){var switch__22536__auto__ = ((function (c__22648__auto___24667,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24633){
var state_val_24634 = (state_24633[(1)]);
if((state_val_24634 === (7))){
var state_24633__$1 = state_24633;
var statearr_24635_24668 = state_24633__$1;
(statearr_24635_24668[(2)] = null);

(statearr_24635_24668[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24634 === (1))){
var state_24633__$1 = state_24633;
var statearr_24636_24669 = state_24633__$1;
(statearr_24636_24669[(2)] = null);

(statearr_24636_24669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24634 === (4))){
var inst_24597 = (state_24633[(7)]);
var inst_24599 = (inst_24597 < cnt);
var state_24633__$1 = state_24633;
if(cljs.core.truth_(inst_24599)){
var statearr_24637_24670 = state_24633__$1;
(statearr_24637_24670[(1)] = (6));

} else {
var statearr_24638_24671 = state_24633__$1;
(statearr_24638_24671[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24634 === (15))){
var inst_24629 = (state_24633[(2)]);
var state_24633__$1 = state_24633;
var statearr_24639_24672 = state_24633__$1;
(statearr_24639_24672[(2)] = inst_24629);

(statearr_24639_24672[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24634 === (13))){
var inst_24622 = cljs.core.async.close_BANG_.call(null,out);
var state_24633__$1 = state_24633;
var statearr_24640_24673 = state_24633__$1;
(statearr_24640_24673[(2)] = inst_24622);

(statearr_24640_24673[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24634 === (6))){
var state_24633__$1 = state_24633;
var statearr_24641_24674 = state_24633__$1;
(statearr_24641_24674[(2)] = null);

(statearr_24641_24674[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24634 === (3))){
var inst_24631 = (state_24633[(2)]);
var state_24633__$1 = state_24633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24633__$1,inst_24631);
} else {
if((state_val_24634 === (12))){
var inst_24619 = (state_24633[(8)]);
var inst_24619__$1 = (state_24633[(2)]);
var inst_24620 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24619__$1);
var state_24633__$1 = (function (){var statearr_24642 = state_24633;
(statearr_24642[(8)] = inst_24619__$1);

return statearr_24642;
})();
if(cljs.core.truth_(inst_24620)){
var statearr_24643_24675 = state_24633__$1;
(statearr_24643_24675[(1)] = (13));

} else {
var statearr_24644_24676 = state_24633__$1;
(statearr_24644_24676[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24634 === (2))){
var inst_24596 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24597 = (0);
var state_24633__$1 = (function (){var statearr_24645 = state_24633;
(statearr_24645[(9)] = inst_24596);

(statearr_24645[(7)] = inst_24597);

return statearr_24645;
})();
var statearr_24646_24677 = state_24633__$1;
(statearr_24646_24677[(2)] = null);

(statearr_24646_24677[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24634 === (11))){
var inst_24597 = (state_24633[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24633,(10),Object,null,(9));
var inst_24606 = chs__$1.call(null,inst_24597);
var inst_24607 = done.call(null,inst_24597);
var inst_24608 = cljs.core.async.take_BANG_.call(null,inst_24606,inst_24607);
var state_24633__$1 = state_24633;
var statearr_24647_24678 = state_24633__$1;
(statearr_24647_24678[(2)] = inst_24608);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24633__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24634 === (9))){
var inst_24597 = (state_24633[(7)]);
var inst_24610 = (state_24633[(2)]);
var inst_24611 = (inst_24597 + (1));
var inst_24597__$1 = inst_24611;
var state_24633__$1 = (function (){var statearr_24648 = state_24633;
(statearr_24648[(7)] = inst_24597__$1);

(statearr_24648[(10)] = inst_24610);

return statearr_24648;
})();
var statearr_24649_24679 = state_24633__$1;
(statearr_24649_24679[(2)] = null);

(statearr_24649_24679[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24634 === (5))){
var inst_24617 = (state_24633[(2)]);
var state_24633__$1 = (function (){var statearr_24650 = state_24633;
(statearr_24650[(11)] = inst_24617);

return statearr_24650;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24633__$1,(12),dchan);
} else {
if((state_val_24634 === (14))){
var inst_24619 = (state_24633[(8)]);
var inst_24624 = cljs.core.apply.call(null,f,inst_24619);
var state_24633__$1 = state_24633;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24633__$1,(16),out,inst_24624);
} else {
if((state_val_24634 === (16))){
var inst_24626 = (state_24633[(2)]);
var state_24633__$1 = (function (){var statearr_24651 = state_24633;
(statearr_24651[(12)] = inst_24626);

return statearr_24651;
})();
var statearr_24652_24680 = state_24633__$1;
(statearr_24652_24680[(2)] = null);

(statearr_24652_24680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24634 === (10))){
var inst_24601 = (state_24633[(2)]);
var inst_24602 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24633__$1 = (function (){var statearr_24653 = state_24633;
(statearr_24653[(13)] = inst_24601);

return statearr_24653;
})();
var statearr_24654_24681 = state_24633__$1;
(statearr_24654_24681[(2)] = inst_24602);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24633__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24634 === (8))){
var inst_24615 = (state_24633[(2)]);
var state_24633__$1 = state_24633;
var statearr_24655_24682 = state_24633__$1;
(statearr_24655_24682[(2)] = inst_24615);

(statearr_24655_24682[(1)] = (5));


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
});})(c__22648__auto___24667,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22536__auto__,c__22648__auto___24667,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22537__auto__ = null;
var cljs$core$async$state_machine__22537__auto____0 = (function (){
var statearr_24659 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24659[(0)] = cljs$core$async$state_machine__22537__auto__);

(statearr_24659[(1)] = (1));

return statearr_24659;
});
var cljs$core$async$state_machine__22537__auto____1 = (function (state_24633){
while(true){
var ret_value__22538__auto__ = (function (){try{while(true){
var result__22539__auto__ = switch__22536__auto__.call(null,state_24633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22539__auto__;
}
break;
}
}catch (e24660){if((e24660 instanceof Object)){
var ex__22540__auto__ = e24660;
var statearr_24661_24683 = state_24633;
(statearr_24661_24683[(5)] = ex__22540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24684 = state_24633;
state_24633 = G__24684;
continue;
} else {
return ret_value__22538__auto__;
}
break;
}
});
cljs$core$async$state_machine__22537__auto__ = function(state_24633){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22537__auto____1.call(this,state_24633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22537__auto____0;
cljs$core$async$state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22537__auto____1;
return cljs$core$async$state_machine__22537__auto__;
})()
;})(switch__22536__auto__,c__22648__auto___24667,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22650__auto__ = (function (){var statearr_24662 = f__22649__auto__.call(null);
(statearr_24662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22648__auto___24667);

return statearr_24662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22650__auto__);
});})(c__22648__auto___24667,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args24686 = [];
var len__17899__auto___24742 = arguments.length;
var i__17900__auto___24743 = (0);
while(true){
if((i__17900__auto___24743 < len__17899__auto___24742)){
args24686.push((arguments[i__17900__auto___24743]));

var G__24744 = (i__17900__auto___24743 + (1));
i__17900__auto___24743 = G__24744;
continue;
} else {
}
break;
}

var G__24688 = args24686.length;
switch (G__24688) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24686.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22648__auto___24746 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22648__auto___24746,out){
return (function (){
var f__22649__auto__ = (function (){var switch__22536__auto__ = ((function (c__22648__auto___24746,out){
return (function (state_24718){
var state_val_24719 = (state_24718[(1)]);
if((state_val_24719 === (7))){
var inst_24698 = (state_24718[(7)]);
var inst_24697 = (state_24718[(8)]);
var inst_24697__$1 = (state_24718[(2)]);
var inst_24698__$1 = cljs.core.nth.call(null,inst_24697__$1,(0),null);
var inst_24699 = cljs.core.nth.call(null,inst_24697__$1,(1),null);
var inst_24700 = (inst_24698__$1 == null);
var state_24718__$1 = (function (){var statearr_24720 = state_24718;
(statearr_24720[(9)] = inst_24699);

(statearr_24720[(7)] = inst_24698__$1);

(statearr_24720[(8)] = inst_24697__$1);

return statearr_24720;
})();
if(cljs.core.truth_(inst_24700)){
var statearr_24721_24747 = state_24718__$1;
(statearr_24721_24747[(1)] = (8));

} else {
var statearr_24722_24748 = state_24718__$1;
(statearr_24722_24748[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24719 === (1))){
var inst_24689 = cljs.core.vec.call(null,chs);
var inst_24690 = inst_24689;
var state_24718__$1 = (function (){var statearr_24723 = state_24718;
(statearr_24723[(10)] = inst_24690);

return statearr_24723;
})();
var statearr_24724_24749 = state_24718__$1;
(statearr_24724_24749[(2)] = null);

(statearr_24724_24749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24719 === (4))){
var inst_24690 = (state_24718[(10)]);
var state_24718__$1 = state_24718;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24718__$1,(7),inst_24690);
} else {
if((state_val_24719 === (6))){
var inst_24714 = (state_24718[(2)]);
var state_24718__$1 = state_24718;
var statearr_24725_24750 = state_24718__$1;
(statearr_24725_24750[(2)] = inst_24714);

(statearr_24725_24750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24719 === (3))){
var inst_24716 = (state_24718[(2)]);
var state_24718__$1 = state_24718;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24718__$1,inst_24716);
} else {
if((state_val_24719 === (2))){
var inst_24690 = (state_24718[(10)]);
var inst_24692 = cljs.core.count.call(null,inst_24690);
var inst_24693 = (inst_24692 > (0));
var state_24718__$1 = state_24718;
if(cljs.core.truth_(inst_24693)){
var statearr_24727_24751 = state_24718__$1;
(statearr_24727_24751[(1)] = (4));

} else {
var statearr_24728_24752 = state_24718__$1;
(statearr_24728_24752[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24719 === (11))){
var inst_24690 = (state_24718[(10)]);
var inst_24707 = (state_24718[(2)]);
var tmp24726 = inst_24690;
var inst_24690__$1 = tmp24726;
var state_24718__$1 = (function (){var statearr_24729 = state_24718;
(statearr_24729[(10)] = inst_24690__$1);

(statearr_24729[(11)] = inst_24707);

return statearr_24729;
})();
var statearr_24730_24753 = state_24718__$1;
(statearr_24730_24753[(2)] = null);

(statearr_24730_24753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24719 === (9))){
var inst_24698 = (state_24718[(7)]);
var state_24718__$1 = state_24718;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24718__$1,(11),out,inst_24698);
} else {
if((state_val_24719 === (5))){
var inst_24712 = cljs.core.async.close_BANG_.call(null,out);
var state_24718__$1 = state_24718;
var statearr_24731_24754 = state_24718__$1;
(statearr_24731_24754[(2)] = inst_24712);

(statearr_24731_24754[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24719 === (10))){
var inst_24710 = (state_24718[(2)]);
var state_24718__$1 = state_24718;
var statearr_24732_24755 = state_24718__$1;
(statearr_24732_24755[(2)] = inst_24710);

(statearr_24732_24755[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24719 === (8))){
var inst_24699 = (state_24718[(9)]);
var inst_24698 = (state_24718[(7)]);
var inst_24690 = (state_24718[(10)]);
var inst_24697 = (state_24718[(8)]);
var inst_24702 = (function (){var cs = inst_24690;
var vec__24695 = inst_24697;
var v = inst_24698;
var c = inst_24699;
return ((function (cs,vec__24695,v,c,inst_24699,inst_24698,inst_24690,inst_24697,state_val_24719,c__22648__auto___24746,out){
return (function (p1__24685_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24685_SHARP_);
});
;})(cs,vec__24695,v,c,inst_24699,inst_24698,inst_24690,inst_24697,state_val_24719,c__22648__auto___24746,out))
})();
var inst_24703 = cljs.core.filterv.call(null,inst_24702,inst_24690);
var inst_24690__$1 = inst_24703;
var state_24718__$1 = (function (){var statearr_24733 = state_24718;
(statearr_24733[(10)] = inst_24690__$1);

return statearr_24733;
})();
var statearr_24734_24756 = state_24718__$1;
(statearr_24734_24756[(2)] = null);

(statearr_24734_24756[(1)] = (2));


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
});})(c__22648__auto___24746,out))
;
return ((function (switch__22536__auto__,c__22648__auto___24746,out){
return (function() {
var cljs$core$async$state_machine__22537__auto__ = null;
var cljs$core$async$state_machine__22537__auto____0 = (function (){
var statearr_24738 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24738[(0)] = cljs$core$async$state_machine__22537__auto__);

(statearr_24738[(1)] = (1));

return statearr_24738;
});
var cljs$core$async$state_machine__22537__auto____1 = (function (state_24718){
while(true){
var ret_value__22538__auto__ = (function (){try{while(true){
var result__22539__auto__ = switch__22536__auto__.call(null,state_24718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22539__auto__;
}
break;
}
}catch (e24739){if((e24739 instanceof Object)){
var ex__22540__auto__ = e24739;
var statearr_24740_24757 = state_24718;
(statearr_24740_24757[(5)] = ex__22540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24758 = state_24718;
state_24718 = G__24758;
continue;
} else {
return ret_value__22538__auto__;
}
break;
}
});
cljs$core$async$state_machine__22537__auto__ = function(state_24718){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22537__auto____1.call(this,state_24718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22537__auto____0;
cljs$core$async$state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22537__auto____1;
return cljs$core$async$state_machine__22537__auto__;
})()
;})(switch__22536__auto__,c__22648__auto___24746,out))
})();
var state__22650__auto__ = (function (){var statearr_24741 = f__22649__auto__.call(null);
(statearr_24741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22648__auto___24746);

return statearr_24741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22650__auto__);
});})(c__22648__auto___24746,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args24759 = [];
var len__17899__auto___24808 = arguments.length;
var i__17900__auto___24809 = (0);
while(true){
if((i__17900__auto___24809 < len__17899__auto___24808)){
args24759.push((arguments[i__17900__auto___24809]));

var G__24810 = (i__17900__auto___24809 + (1));
i__17900__auto___24809 = G__24810;
continue;
} else {
}
break;
}

var G__24761 = args24759.length;
switch (G__24761) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24759.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22648__auto___24812 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22648__auto___24812,out){
return (function (){
var f__22649__auto__ = (function (){var switch__22536__auto__ = ((function (c__22648__auto___24812,out){
return (function (state_24785){
var state_val_24786 = (state_24785[(1)]);
if((state_val_24786 === (7))){
var inst_24767 = (state_24785[(7)]);
var inst_24767__$1 = (state_24785[(2)]);
var inst_24768 = (inst_24767__$1 == null);
var inst_24769 = cljs.core.not.call(null,inst_24768);
var state_24785__$1 = (function (){var statearr_24787 = state_24785;
(statearr_24787[(7)] = inst_24767__$1);

return statearr_24787;
})();
if(inst_24769){
var statearr_24788_24813 = state_24785__$1;
(statearr_24788_24813[(1)] = (8));

} else {
var statearr_24789_24814 = state_24785__$1;
(statearr_24789_24814[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24786 === (1))){
var inst_24762 = (0);
var state_24785__$1 = (function (){var statearr_24790 = state_24785;
(statearr_24790[(8)] = inst_24762);

return statearr_24790;
})();
var statearr_24791_24815 = state_24785__$1;
(statearr_24791_24815[(2)] = null);

(statearr_24791_24815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24786 === (4))){
var state_24785__$1 = state_24785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24785__$1,(7),ch);
} else {
if((state_val_24786 === (6))){
var inst_24780 = (state_24785[(2)]);
var state_24785__$1 = state_24785;
var statearr_24792_24816 = state_24785__$1;
(statearr_24792_24816[(2)] = inst_24780);

(statearr_24792_24816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24786 === (3))){
var inst_24782 = (state_24785[(2)]);
var inst_24783 = cljs.core.async.close_BANG_.call(null,out);
var state_24785__$1 = (function (){var statearr_24793 = state_24785;
(statearr_24793[(9)] = inst_24782);

return statearr_24793;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24785__$1,inst_24783);
} else {
if((state_val_24786 === (2))){
var inst_24762 = (state_24785[(8)]);
var inst_24764 = (inst_24762 < n);
var state_24785__$1 = state_24785;
if(cljs.core.truth_(inst_24764)){
var statearr_24794_24817 = state_24785__$1;
(statearr_24794_24817[(1)] = (4));

} else {
var statearr_24795_24818 = state_24785__$1;
(statearr_24795_24818[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24786 === (11))){
var inst_24762 = (state_24785[(8)]);
var inst_24772 = (state_24785[(2)]);
var inst_24773 = (inst_24762 + (1));
var inst_24762__$1 = inst_24773;
var state_24785__$1 = (function (){var statearr_24796 = state_24785;
(statearr_24796[(8)] = inst_24762__$1);

(statearr_24796[(10)] = inst_24772);

return statearr_24796;
})();
var statearr_24797_24819 = state_24785__$1;
(statearr_24797_24819[(2)] = null);

(statearr_24797_24819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24786 === (9))){
var state_24785__$1 = state_24785;
var statearr_24798_24820 = state_24785__$1;
(statearr_24798_24820[(2)] = null);

(statearr_24798_24820[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24786 === (5))){
var state_24785__$1 = state_24785;
var statearr_24799_24821 = state_24785__$1;
(statearr_24799_24821[(2)] = null);

(statearr_24799_24821[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24786 === (10))){
var inst_24777 = (state_24785[(2)]);
var state_24785__$1 = state_24785;
var statearr_24800_24822 = state_24785__$1;
(statearr_24800_24822[(2)] = inst_24777);

(statearr_24800_24822[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24786 === (8))){
var inst_24767 = (state_24785[(7)]);
var state_24785__$1 = state_24785;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24785__$1,(11),out,inst_24767);
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
});})(c__22648__auto___24812,out))
;
return ((function (switch__22536__auto__,c__22648__auto___24812,out){
return (function() {
var cljs$core$async$state_machine__22537__auto__ = null;
var cljs$core$async$state_machine__22537__auto____0 = (function (){
var statearr_24804 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24804[(0)] = cljs$core$async$state_machine__22537__auto__);

(statearr_24804[(1)] = (1));

return statearr_24804;
});
var cljs$core$async$state_machine__22537__auto____1 = (function (state_24785){
while(true){
var ret_value__22538__auto__ = (function (){try{while(true){
var result__22539__auto__ = switch__22536__auto__.call(null,state_24785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22539__auto__;
}
break;
}
}catch (e24805){if((e24805 instanceof Object)){
var ex__22540__auto__ = e24805;
var statearr_24806_24823 = state_24785;
(statearr_24806_24823[(5)] = ex__22540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24805;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24824 = state_24785;
state_24785 = G__24824;
continue;
} else {
return ret_value__22538__auto__;
}
break;
}
});
cljs$core$async$state_machine__22537__auto__ = function(state_24785){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22537__auto____1.call(this,state_24785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22537__auto____0;
cljs$core$async$state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22537__auto____1;
return cljs$core$async$state_machine__22537__auto__;
})()
;})(switch__22536__auto__,c__22648__auto___24812,out))
})();
var state__22650__auto__ = (function (){var statearr_24807 = f__22649__auto__.call(null);
(statearr_24807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22648__auto___24812);

return statearr_24807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22650__auto__);
});})(c__22648__auto___24812,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24832 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24832 = (function (map_LT_,f,ch,meta24833){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24833 = meta24833;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24832.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24834,meta24833__$1){
var self__ = this;
var _24834__$1 = this;
return (new cljs.core.async.t_cljs$core$async24832(self__.map_LT_,self__.f,self__.ch,meta24833__$1));
});

cljs.core.async.t_cljs$core$async24832.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24834){
var self__ = this;
var _24834__$1 = this;
return self__.meta24833;
});

cljs.core.async.t_cljs$core$async24832.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24832.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24832.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24832.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24832.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24835 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24835 = (function (map_LT_,f,ch,meta24833,_,fn1,meta24836){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24833 = meta24833;
this._ = _;
this.fn1 = fn1;
this.meta24836 = meta24836;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24835.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24837,meta24836__$1){
var self__ = this;
var _24837__$1 = this;
return (new cljs.core.async.t_cljs$core$async24835(self__.map_LT_,self__.f,self__.ch,self__.meta24833,self__._,self__.fn1,meta24836__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24835.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24837){
var self__ = this;
var _24837__$1 = this;
return self__.meta24836;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24835.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24835.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24835.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24835.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24825_SHARP_){
return f1.call(null,(((p1__24825_SHARP_ == null))?null:self__.f.call(null,p1__24825_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24835.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24833","meta24833",-1199976524,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24832","cljs.core.async/t_cljs$core$async24832",-1008604961,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24836","meta24836",561157698,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24835.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24835.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24835";

cljs.core.async.t_cljs$core$async24835.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17439__auto__,writer__17440__auto__,opt__17441__auto__){
return cljs.core._write.call(null,writer__17440__auto__,"cljs.core.async/t_cljs$core$async24835");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async24835 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24835(map_LT___$1,f__$1,ch__$1,meta24833__$1,___$2,fn1__$1,meta24836){
return (new cljs.core.async.t_cljs$core$async24835(map_LT___$1,f__$1,ch__$1,meta24833__$1,___$2,fn1__$1,meta24836));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24835(self__.map_LT_,self__.f,self__.ch,self__.meta24833,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16829__auto__ = ret;
if(cljs.core.truth_(and__16829__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16829__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async24832.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24832.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24832.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24833","meta24833",-1199976524,null)], null);
});

cljs.core.async.t_cljs$core$async24832.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24832.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24832";

cljs.core.async.t_cljs$core$async24832.cljs$lang$ctorPrWriter = (function (this__17439__auto__,writer__17440__auto__,opt__17441__auto__){
return cljs.core._write.call(null,writer__17440__auto__,"cljs.core.async/t_cljs$core$async24832");
});

cljs.core.async.__GT_t_cljs$core$async24832 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24832(map_LT___$1,f__$1,ch__$1,meta24833){
return (new cljs.core.async.t_cljs$core$async24832(map_LT___$1,f__$1,ch__$1,meta24833));
});

}

return (new cljs.core.async.t_cljs$core$async24832(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24841 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24841 = (function (map_GT_,f,ch,meta24842){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta24842 = meta24842;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24841.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24843,meta24842__$1){
var self__ = this;
var _24843__$1 = this;
return (new cljs.core.async.t_cljs$core$async24841(self__.map_GT_,self__.f,self__.ch,meta24842__$1));
});

cljs.core.async.t_cljs$core$async24841.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24843){
var self__ = this;
var _24843__$1 = this;
return self__.meta24842;
});

cljs.core.async.t_cljs$core$async24841.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24841.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24841.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24841.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24841.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24841.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24841.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24842","meta24842",-1696000074,null)], null);
});

cljs.core.async.t_cljs$core$async24841.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24841.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24841";

cljs.core.async.t_cljs$core$async24841.cljs$lang$ctorPrWriter = (function (this__17439__auto__,writer__17440__auto__,opt__17441__auto__){
return cljs.core._write.call(null,writer__17440__auto__,"cljs.core.async/t_cljs$core$async24841");
});

cljs.core.async.__GT_t_cljs$core$async24841 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24841(map_GT___$1,f__$1,ch__$1,meta24842){
return (new cljs.core.async.t_cljs$core$async24841(map_GT___$1,f__$1,ch__$1,meta24842));
});

}

return (new cljs.core.async.t_cljs$core$async24841(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24847 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24847 = (function (filter_GT_,p,ch,meta24848){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta24848 = meta24848;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24849,meta24848__$1){
var self__ = this;
var _24849__$1 = this;
return (new cljs.core.async.t_cljs$core$async24847(self__.filter_GT_,self__.p,self__.ch,meta24848__$1));
});

cljs.core.async.t_cljs$core$async24847.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24849){
var self__ = this;
var _24849__$1 = this;
return self__.meta24848;
});

cljs.core.async.t_cljs$core$async24847.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24847.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24847.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24847.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24847.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24847.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24847.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24847.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24848","meta24848",167641420,null)], null);
});

cljs.core.async.t_cljs$core$async24847.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24847.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24847";

cljs.core.async.t_cljs$core$async24847.cljs$lang$ctorPrWriter = (function (this__17439__auto__,writer__17440__auto__,opt__17441__auto__){
return cljs.core._write.call(null,writer__17440__auto__,"cljs.core.async/t_cljs$core$async24847");
});

cljs.core.async.__GT_t_cljs$core$async24847 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24847(filter_GT___$1,p__$1,ch__$1,meta24848){
return (new cljs.core.async.t_cljs$core$async24847(filter_GT___$1,p__$1,ch__$1,meta24848));
});

}

return (new cljs.core.async.t_cljs$core$async24847(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args24850 = [];
var len__17899__auto___24894 = arguments.length;
var i__17900__auto___24895 = (0);
while(true){
if((i__17900__auto___24895 < len__17899__auto___24894)){
args24850.push((arguments[i__17900__auto___24895]));

var G__24896 = (i__17900__auto___24895 + (1));
i__17900__auto___24895 = G__24896;
continue;
} else {
}
break;
}

var G__24852 = args24850.length;
switch (G__24852) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24850.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22648__auto___24898 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22648__auto___24898,out){
return (function (){
var f__22649__auto__ = (function (){var switch__22536__auto__ = ((function (c__22648__auto___24898,out){
return (function (state_24873){
var state_val_24874 = (state_24873[(1)]);
if((state_val_24874 === (7))){
var inst_24869 = (state_24873[(2)]);
var state_24873__$1 = state_24873;
var statearr_24875_24899 = state_24873__$1;
(statearr_24875_24899[(2)] = inst_24869);

(statearr_24875_24899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24874 === (1))){
var state_24873__$1 = state_24873;
var statearr_24876_24900 = state_24873__$1;
(statearr_24876_24900[(2)] = null);

(statearr_24876_24900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24874 === (4))){
var inst_24855 = (state_24873[(7)]);
var inst_24855__$1 = (state_24873[(2)]);
var inst_24856 = (inst_24855__$1 == null);
var state_24873__$1 = (function (){var statearr_24877 = state_24873;
(statearr_24877[(7)] = inst_24855__$1);

return statearr_24877;
})();
if(cljs.core.truth_(inst_24856)){
var statearr_24878_24901 = state_24873__$1;
(statearr_24878_24901[(1)] = (5));

} else {
var statearr_24879_24902 = state_24873__$1;
(statearr_24879_24902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24874 === (6))){
var inst_24855 = (state_24873[(7)]);
var inst_24860 = p.call(null,inst_24855);
var state_24873__$1 = state_24873;
if(cljs.core.truth_(inst_24860)){
var statearr_24880_24903 = state_24873__$1;
(statearr_24880_24903[(1)] = (8));

} else {
var statearr_24881_24904 = state_24873__$1;
(statearr_24881_24904[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24874 === (3))){
var inst_24871 = (state_24873[(2)]);
var state_24873__$1 = state_24873;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24873__$1,inst_24871);
} else {
if((state_val_24874 === (2))){
var state_24873__$1 = state_24873;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24873__$1,(4),ch);
} else {
if((state_val_24874 === (11))){
var inst_24863 = (state_24873[(2)]);
var state_24873__$1 = state_24873;
var statearr_24882_24905 = state_24873__$1;
(statearr_24882_24905[(2)] = inst_24863);

(statearr_24882_24905[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24874 === (9))){
var state_24873__$1 = state_24873;
var statearr_24883_24906 = state_24873__$1;
(statearr_24883_24906[(2)] = null);

(statearr_24883_24906[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24874 === (5))){
var inst_24858 = cljs.core.async.close_BANG_.call(null,out);
var state_24873__$1 = state_24873;
var statearr_24884_24907 = state_24873__$1;
(statearr_24884_24907[(2)] = inst_24858);

(statearr_24884_24907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24874 === (10))){
var inst_24866 = (state_24873[(2)]);
var state_24873__$1 = (function (){var statearr_24885 = state_24873;
(statearr_24885[(8)] = inst_24866);

return statearr_24885;
})();
var statearr_24886_24908 = state_24873__$1;
(statearr_24886_24908[(2)] = null);

(statearr_24886_24908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24874 === (8))){
var inst_24855 = (state_24873[(7)]);
var state_24873__$1 = state_24873;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24873__$1,(11),out,inst_24855);
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
});})(c__22648__auto___24898,out))
;
return ((function (switch__22536__auto__,c__22648__auto___24898,out){
return (function() {
var cljs$core$async$state_machine__22537__auto__ = null;
var cljs$core$async$state_machine__22537__auto____0 = (function (){
var statearr_24890 = [null,null,null,null,null,null,null,null,null];
(statearr_24890[(0)] = cljs$core$async$state_machine__22537__auto__);

(statearr_24890[(1)] = (1));

return statearr_24890;
});
var cljs$core$async$state_machine__22537__auto____1 = (function (state_24873){
while(true){
var ret_value__22538__auto__ = (function (){try{while(true){
var result__22539__auto__ = switch__22536__auto__.call(null,state_24873);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22539__auto__;
}
break;
}
}catch (e24891){if((e24891 instanceof Object)){
var ex__22540__auto__ = e24891;
var statearr_24892_24909 = state_24873;
(statearr_24892_24909[(5)] = ex__22540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24891;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24910 = state_24873;
state_24873 = G__24910;
continue;
} else {
return ret_value__22538__auto__;
}
break;
}
});
cljs$core$async$state_machine__22537__auto__ = function(state_24873){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22537__auto____1.call(this,state_24873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22537__auto____0;
cljs$core$async$state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22537__auto____1;
return cljs$core$async$state_machine__22537__auto__;
})()
;})(switch__22536__auto__,c__22648__auto___24898,out))
})();
var state__22650__auto__ = (function (){var statearr_24893 = f__22649__auto__.call(null);
(statearr_24893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22648__auto___24898);

return statearr_24893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22650__auto__);
});})(c__22648__auto___24898,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args24911 = [];
var len__17899__auto___24914 = arguments.length;
var i__17900__auto___24915 = (0);
while(true){
if((i__17900__auto___24915 < len__17899__auto___24914)){
args24911.push((arguments[i__17900__auto___24915]));

var G__24916 = (i__17900__auto___24915 + (1));
i__17900__auto___24915 = G__24916;
continue;
} else {
}
break;
}

var G__24913 = args24911.length;
switch (G__24913) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24911.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__22648__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22648__auto__){
return (function (){
var f__22649__auto__ = (function (){var switch__22536__auto__ = ((function (c__22648__auto__){
return (function (state_25083){
var state_val_25084 = (state_25083[(1)]);
if((state_val_25084 === (7))){
var inst_25079 = (state_25083[(2)]);
var state_25083__$1 = state_25083;
var statearr_25085_25126 = state_25083__$1;
(statearr_25085_25126[(2)] = inst_25079);

(statearr_25085_25126[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25084 === (20))){
var inst_25049 = (state_25083[(7)]);
var inst_25060 = (state_25083[(2)]);
var inst_25061 = cljs.core.next.call(null,inst_25049);
var inst_25035 = inst_25061;
var inst_25036 = null;
var inst_25037 = (0);
var inst_25038 = (0);
var state_25083__$1 = (function (){var statearr_25086 = state_25083;
(statearr_25086[(8)] = inst_25037);

(statearr_25086[(9)] = inst_25060);

(statearr_25086[(10)] = inst_25035);

(statearr_25086[(11)] = inst_25036);

(statearr_25086[(12)] = inst_25038);

return statearr_25086;
})();
var statearr_25087_25127 = state_25083__$1;
(statearr_25087_25127[(2)] = null);

(statearr_25087_25127[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25084 === (1))){
var state_25083__$1 = state_25083;
var statearr_25088_25128 = state_25083__$1;
(statearr_25088_25128[(2)] = null);

(statearr_25088_25128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25084 === (4))){
var inst_25024 = (state_25083[(13)]);
var inst_25024__$1 = (state_25083[(2)]);
var inst_25025 = (inst_25024__$1 == null);
var state_25083__$1 = (function (){var statearr_25089 = state_25083;
(statearr_25089[(13)] = inst_25024__$1);

return statearr_25089;
})();
if(cljs.core.truth_(inst_25025)){
var statearr_25090_25129 = state_25083__$1;
(statearr_25090_25129[(1)] = (5));

} else {
var statearr_25091_25130 = state_25083__$1;
(statearr_25091_25130[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25084 === (15))){
var state_25083__$1 = state_25083;
var statearr_25095_25131 = state_25083__$1;
(statearr_25095_25131[(2)] = null);

(statearr_25095_25131[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25084 === (21))){
var state_25083__$1 = state_25083;
var statearr_25096_25132 = state_25083__$1;
(statearr_25096_25132[(2)] = null);

(statearr_25096_25132[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25084 === (13))){
var inst_25037 = (state_25083[(8)]);
var inst_25035 = (state_25083[(10)]);
var inst_25036 = (state_25083[(11)]);
var inst_25038 = (state_25083[(12)]);
var inst_25045 = (state_25083[(2)]);
var inst_25046 = (inst_25038 + (1));
var tmp25092 = inst_25037;
var tmp25093 = inst_25035;
var tmp25094 = inst_25036;
var inst_25035__$1 = tmp25093;
var inst_25036__$1 = tmp25094;
var inst_25037__$1 = tmp25092;
var inst_25038__$1 = inst_25046;
var state_25083__$1 = (function (){var statearr_25097 = state_25083;
(statearr_25097[(8)] = inst_25037__$1);

(statearr_25097[(10)] = inst_25035__$1);

(statearr_25097[(11)] = inst_25036__$1);

(statearr_25097[(14)] = inst_25045);

(statearr_25097[(12)] = inst_25038__$1);

return statearr_25097;
})();
var statearr_25098_25133 = state_25083__$1;
(statearr_25098_25133[(2)] = null);

(statearr_25098_25133[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25084 === (22))){
var state_25083__$1 = state_25083;
var statearr_25099_25134 = state_25083__$1;
(statearr_25099_25134[(2)] = null);

(statearr_25099_25134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25084 === (6))){
var inst_25024 = (state_25083[(13)]);
var inst_25033 = f.call(null,inst_25024);
var inst_25034 = cljs.core.seq.call(null,inst_25033);
var inst_25035 = inst_25034;
var inst_25036 = null;
var inst_25037 = (0);
var inst_25038 = (0);
var state_25083__$1 = (function (){var statearr_25100 = state_25083;
(statearr_25100[(8)] = inst_25037);

(statearr_25100[(10)] = inst_25035);

(statearr_25100[(11)] = inst_25036);

(statearr_25100[(12)] = inst_25038);

return statearr_25100;
})();
var statearr_25101_25135 = state_25083__$1;
(statearr_25101_25135[(2)] = null);

(statearr_25101_25135[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25084 === (17))){
var inst_25049 = (state_25083[(7)]);
var inst_25053 = cljs.core.chunk_first.call(null,inst_25049);
var inst_25054 = cljs.core.chunk_rest.call(null,inst_25049);
var inst_25055 = cljs.core.count.call(null,inst_25053);
var inst_25035 = inst_25054;
var inst_25036 = inst_25053;
var inst_25037 = inst_25055;
var inst_25038 = (0);
var state_25083__$1 = (function (){var statearr_25102 = state_25083;
(statearr_25102[(8)] = inst_25037);

(statearr_25102[(10)] = inst_25035);

(statearr_25102[(11)] = inst_25036);

(statearr_25102[(12)] = inst_25038);

return statearr_25102;
})();
var statearr_25103_25136 = state_25083__$1;
(statearr_25103_25136[(2)] = null);

(statearr_25103_25136[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25084 === (3))){
var inst_25081 = (state_25083[(2)]);
var state_25083__$1 = state_25083;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25083__$1,inst_25081);
} else {
if((state_val_25084 === (12))){
var inst_25069 = (state_25083[(2)]);
var state_25083__$1 = state_25083;
var statearr_25104_25137 = state_25083__$1;
(statearr_25104_25137[(2)] = inst_25069);

(statearr_25104_25137[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25084 === (2))){
var state_25083__$1 = state_25083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25083__$1,(4),in$);
} else {
if((state_val_25084 === (23))){
var inst_25077 = (state_25083[(2)]);
var state_25083__$1 = state_25083;
var statearr_25105_25138 = state_25083__$1;
(statearr_25105_25138[(2)] = inst_25077);

(statearr_25105_25138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25084 === (19))){
var inst_25064 = (state_25083[(2)]);
var state_25083__$1 = state_25083;
var statearr_25106_25139 = state_25083__$1;
(statearr_25106_25139[(2)] = inst_25064);

(statearr_25106_25139[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25084 === (11))){
var inst_25049 = (state_25083[(7)]);
var inst_25035 = (state_25083[(10)]);
var inst_25049__$1 = cljs.core.seq.call(null,inst_25035);
var state_25083__$1 = (function (){var statearr_25107 = state_25083;
(statearr_25107[(7)] = inst_25049__$1);

return statearr_25107;
})();
if(inst_25049__$1){
var statearr_25108_25140 = state_25083__$1;
(statearr_25108_25140[(1)] = (14));

} else {
var statearr_25109_25141 = state_25083__$1;
(statearr_25109_25141[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25084 === (9))){
var inst_25071 = (state_25083[(2)]);
var inst_25072 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25083__$1 = (function (){var statearr_25110 = state_25083;
(statearr_25110[(15)] = inst_25071);

return statearr_25110;
})();
if(cljs.core.truth_(inst_25072)){
var statearr_25111_25142 = state_25083__$1;
(statearr_25111_25142[(1)] = (21));

} else {
var statearr_25112_25143 = state_25083__$1;
(statearr_25112_25143[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25084 === (5))){
var inst_25027 = cljs.core.async.close_BANG_.call(null,out);
var state_25083__$1 = state_25083;
var statearr_25113_25144 = state_25083__$1;
(statearr_25113_25144[(2)] = inst_25027);

(statearr_25113_25144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25084 === (14))){
var inst_25049 = (state_25083[(7)]);
var inst_25051 = cljs.core.chunked_seq_QMARK_.call(null,inst_25049);
var state_25083__$1 = state_25083;
if(inst_25051){
var statearr_25114_25145 = state_25083__$1;
(statearr_25114_25145[(1)] = (17));

} else {
var statearr_25115_25146 = state_25083__$1;
(statearr_25115_25146[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25084 === (16))){
var inst_25067 = (state_25083[(2)]);
var state_25083__$1 = state_25083;
var statearr_25116_25147 = state_25083__$1;
(statearr_25116_25147[(2)] = inst_25067);

(statearr_25116_25147[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25084 === (10))){
var inst_25036 = (state_25083[(11)]);
var inst_25038 = (state_25083[(12)]);
var inst_25043 = cljs.core._nth.call(null,inst_25036,inst_25038);
var state_25083__$1 = state_25083;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25083__$1,(13),out,inst_25043);
} else {
if((state_val_25084 === (18))){
var inst_25049 = (state_25083[(7)]);
var inst_25058 = cljs.core.first.call(null,inst_25049);
var state_25083__$1 = state_25083;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25083__$1,(20),out,inst_25058);
} else {
if((state_val_25084 === (8))){
var inst_25037 = (state_25083[(8)]);
var inst_25038 = (state_25083[(12)]);
var inst_25040 = (inst_25038 < inst_25037);
var inst_25041 = inst_25040;
var state_25083__$1 = state_25083;
if(cljs.core.truth_(inst_25041)){
var statearr_25117_25148 = state_25083__$1;
(statearr_25117_25148[(1)] = (10));

} else {
var statearr_25118_25149 = state_25083__$1;
(statearr_25118_25149[(1)] = (11));

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
});})(c__22648__auto__))
;
return ((function (switch__22536__auto__,c__22648__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22537__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22537__auto____0 = (function (){
var statearr_25122 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25122[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22537__auto__);

(statearr_25122[(1)] = (1));

return statearr_25122;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22537__auto____1 = (function (state_25083){
while(true){
var ret_value__22538__auto__ = (function (){try{while(true){
var result__22539__auto__ = switch__22536__auto__.call(null,state_25083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22539__auto__;
}
break;
}
}catch (e25123){if((e25123 instanceof Object)){
var ex__22540__auto__ = e25123;
var statearr_25124_25150 = state_25083;
(statearr_25124_25150[(5)] = ex__22540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25123;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25151 = state_25083;
state_25083 = G__25151;
continue;
} else {
return ret_value__22538__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22537__auto__ = function(state_25083){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22537__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22537__auto____1.call(this,state_25083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22537__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22537__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22537__auto__;
})()
;})(switch__22536__auto__,c__22648__auto__))
})();
var state__22650__auto__ = (function (){var statearr_25125 = f__22649__auto__.call(null);
(statearr_25125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22648__auto__);

return statearr_25125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22650__auto__);
});})(c__22648__auto__))
);

return c__22648__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args25152 = [];
var len__17899__auto___25155 = arguments.length;
var i__17900__auto___25156 = (0);
while(true){
if((i__17900__auto___25156 < len__17899__auto___25155)){
args25152.push((arguments[i__17900__auto___25156]));

var G__25157 = (i__17900__auto___25156 + (1));
i__17900__auto___25156 = G__25157;
continue;
} else {
}
break;
}

var G__25154 = args25152.length;
switch (G__25154) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25152.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args25159 = [];
var len__17899__auto___25162 = arguments.length;
var i__17900__auto___25163 = (0);
while(true){
if((i__17900__auto___25163 < len__17899__auto___25162)){
args25159.push((arguments[i__17900__auto___25163]));

var G__25164 = (i__17900__auto___25163 + (1));
i__17900__auto___25163 = G__25164;
continue;
} else {
}
break;
}

var G__25161 = args25159.length;
switch (G__25161) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25159.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args25166 = [];
var len__17899__auto___25217 = arguments.length;
var i__17900__auto___25218 = (0);
while(true){
if((i__17900__auto___25218 < len__17899__auto___25217)){
args25166.push((arguments[i__17900__auto___25218]));

var G__25219 = (i__17900__auto___25218 + (1));
i__17900__auto___25218 = G__25219;
continue;
} else {
}
break;
}

var G__25168 = args25166.length;
switch (G__25168) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25166.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22648__auto___25221 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22648__auto___25221,out){
return (function (){
var f__22649__auto__ = (function (){var switch__22536__auto__ = ((function (c__22648__auto___25221,out){
return (function (state_25192){
var state_val_25193 = (state_25192[(1)]);
if((state_val_25193 === (7))){
var inst_25187 = (state_25192[(2)]);
var state_25192__$1 = state_25192;
var statearr_25194_25222 = state_25192__$1;
(statearr_25194_25222[(2)] = inst_25187);

(statearr_25194_25222[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25193 === (1))){
var inst_25169 = null;
var state_25192__$1 = (function (){var statearr_25195 = state_25192;
(statearr_25195[(7)] = inst_25169);

return statearr_25195;
})();
var statearr_25196_25223 = state_25192__$1;
(statearr_25196_25223[(2)] = null);

(statearr_25196_25223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25193 === (4))){
var inst_25172 = (state_25192[(8)]);
var inst_25172__$1 = (state_25192[(2)]);
var inst_25173 = (inst_25172__$1 == null);
var inst_25174 = cljs.core.not.call(null,inst_25173);
var state_25192__$1 = (function (){var statearr_25197 = state_25192;
(statearr_25197[(8)] = inst_25172__$1);

return statearr_25197;
})();
if(inst_25174){
var statearr_25198_25224 = state_25192__$1;
(statearr_25198_25224[(1)] = (5));

} else {
var statearr_25199_25225 = state_25192__$1;
(statearr_25199_25225[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25193 === (6))){
var state_25192__$1 = state_25192;
var statearr_25200_25226 = state_25192__$1;
(statearr_25200_25226[(2)] = null);

(statearr_25200_25226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25193 === (3))){
var inst_25189 = (state_25192[(2)]);
var inst_25190 = cljs.core.async.close_BANG_.call(null,out);
var state_25192__$1 = (function (){var statearr_25201 = state_25192;
(statearr_25201[(9)] = inst_25189);

return statearr_25201;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25192__$1,inst_25190);
} else {
if((state_val_25193 === (2))){
var state_25192__$1 = state_25192;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25192__$1,(4),ch);
} else {
if((state_val_25193 === (11))){
var inst_25172 = (state_25192[(8)]);
var inst_25181 = (state_25192[(2)]);
var inst_25169 = inst_25172;
var state_25192__$1 = (function (){var statearr_25202 = state_25192;
(statearr_25202[(10)] = inst_25181);

(statearr_25202[(7)] = inst_25169);

return statearr_25202;
})();
var statearr_25203_25227 = state_25192__$1;
(statearr_25203_25227[(2)] = null);

(statearr_25203_25227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25193 === (9))){
var inst_25172 = (state_25192[(8)]);
var state_25192__$1 = state_25192;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25192__$1,(11),out,inst_25172);
} else {
if((state_val_25193 === (5))){
var inst_25172 = (state_25192[(8)]);
var inst_25169 = (state_25192[(7)]);
var inst_25176 = cljs.core._EQ_.call(null,inst_25172,inst_25169);
var state_25192__$1 = state_25192;
if(inst_25176){
var statearr_25205_25228 = state_25192__$1;
(statearr_25205_25228[(1)] = (8));

} else {
var statearr_25206_25229 = state_25192__$1;
(statearr_25206_25229[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25193 === (10))){
var inst_25184 = (state_25192[(2)]);
var state_25192__$1 = state_25192;
var statearr_25207_25230 = state_25192__$1;
(statearr_25207_25230[(2)] = inst_25184);

(statearr_25207_25230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25193 === (8))){
var inst_25169 = (state_25192[(7)]);
var tmp25204 = inst_25169;
var inst_25169__$1 = tmp25204;
var state_25192__$1 = (function (){var statearr_25208 = state_25192;
(statearr_25208[(7)] = inst_25169__$1);

return statearr_25208;
})();
var statearr_25209_25231 = state_25192__$1;
(statearr_25209_25231[(2)] = null);

(statearr_25209_25231[(1)] = (2));


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
});})(c__22648__auto___25221,out))
;
return ((function (switch__22536__auto__,c__22648__auto___25221,out){
return (function() {
var cljs$core$async$state_machine__22537__auto__ = null;
var cljs$core$async$state_machine__22537__auto____0 = (function (){
var statearr_25213 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25213[(0)] = cljs$core$async$state_machine__22537__auto__);

(statearr_25213[(1)] = (1));

return statearr_25213;
});
var cljs$core$async$state_machine__22537__auto____1 = (function (state_25192){
while(true){
var ret_value__22538__auto__ = (function (){try{while(true){
var result__22539__auto__ = switch__22536__auto__.call(null,state_25192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22539__auto__;
}
break;
}
}catch (e25214){if((e25214 instanceof Object)){
var ex__22540__auto__ = e25214;
var statearr_25215_25232 = state_25192;
(statearr_25215_25232[(5)] = ex__22540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25214;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25233 = state_25192;
state_25192 = G__25233;
continue;
} else {
return ret_value__22538__auto__;
}
break;
}
});
cljs$core$async$state_machine__22537__auto__ = function(state_25192){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22537__auto____1.call(this,state_25192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22537__auto____0;
cljs$core$async$state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22537__auto____1;
return cljs$core$async$state_machine__22537__auto__;
})()
;})(switch__22536__auto__,c__22648__auto___25221,out))
})();
var state__22650__auto__ = (function (){var statearr_25216 = f__22649__auto__.call(null);
(statearr_25216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22648__auto___25221);

return statearr_25216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22650__auto__);
});})(c__22648__auto___25221,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args25234 = [];
var len__17899__auto___25304 = arguments.length;
var i__17900__auto___25305 = (0);
while(true){
if((i__17900__auto___25305 < len__17899__auto___25304)){
args25234.push((arguments[i__17900__auto___25305]));

var G__25306 = (i__17900__auto___25305 + (1));
i__17900__auto___25305 = G__25306;
continue;
} else {
}
break;
}

var G__25236 = args25234.length;
switch (G__25236) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25234.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22648__auto___25308 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22648__auto___25308,out){
return (function (){
var f__22649__auto__ = (function (){var switch__22536__auto__ = ((function (c__22648__auto___25308,out){
return (function (state_25274){
var state_val_25275 = (state_25274[(1)]);
if((state_val_25275 === (7))){
var inst_25270 = (state_25274[(2)]);
var state_25274__$1 = state_25274;
var statearr_25276_25309 = state_25274__$1;
(statearr_25276_25309[(2)] = inst_25270);

(statearr_25276_25309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25275 === (1))){
var inst_25237 = (new Array(n));
var inst_25238 = inst_25237;
var inst_25239 = (0);
var state_25274__$1 = (function (){var statearr_25277 = state_25274;
(statearr_25277[(7)] = inst_25238);

(statearr_25277[(8)] = inst_25239);

return statearr_25277;
})();
var statearr_25278_25310 = state_25274__$1;
(statearr_25278_25310[(2)] = null);

(statearr_25278_25310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25275 === (4))){
var inst_25242 = (state_25274[(9)]);
var inst_25242__$1 = (state_25274[(2)]);
var inst_25243 = (inst_25242__$1 == null);
var inst_25244 = cljs.core.not.call(null,inst_25243);
var state_25274__$1 = (function (){var statearr_25279 = state_25274;
(statearr_25279[(9)] = inst_25242__$1);

return statearr_25279;
})();
if(inst_25244){
var statearr_25280_25311 = state_25274__$1;
(statearr_25280_25311[(1)] = (5));

} else {
var statearr_25281_25312 = state_25274__$1;
(statearr_25281_25312[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25275 === (15))){
var inst_25264 = (state_25274[(2)]);
var state_25274__$1 = state_25274;
var statearr_25282_25313 = state_25274__$1;
(statearr_25282_25313[(2)] = inst_25264);

(statearr_25282_25313[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25275 === (13))){
var state_25274__$1 = state_25274;
var statearr_25283_25314 = state_25274__$1;
(statearr_25283_25314[(2)] = null);

(statearr_25283_25314[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25275 === (6))){
var inst_25239 = (state_25274[(8)]);
var inst_25260 = (inst_25239 > (0));
var state_25274__$1 = state_25274;
if(cljs.core.truth_(inst_25260)){
var statearr_25284_25315 = state_25274__$1;
(statearr_25284_25315[(1)] = (12));

} else {
var statearr_25285_25316 = state_25274__$1;
(statearr_25285_25316[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25275 === (3))){
var inst_25272 = (state_25274[(2)]);
var state_25274__$1 = state_25274;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25274__$1,inst_25272);
} else {
if((state_val_25275 === (12))){
var inst_25238 = (state_25274[(7)]);
var inst_25262 = cljs.core.vec.call(null,inst_25238);
var state_25274__$1 = state_25274;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25274__$1,(15),out,inst_25262);
} else {
if((state_val_25275 === (2))){
var state_25274__$1 = state_25274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25274__$1,(4),ch);
} else {
if((state_val_25275 === (11))){
var inst_25254 = (state_25274[(2)]);
var inst_25255 = (new Array(n));
var inst_25238 = inst_25255;
var inst_25239 = (0);
var state_25274__$1 = (function (){var statearr_25286 = state_25274;
(statearr_25286[(7)] = inst_25238);

(statearr_25286[(10)] = inst_25254);

(statearr_25286[(8)] = inst_25239);

return statearr_25286;
})();
var statearr_25287_25317 = state_25274__$1;
(statearr_25287_25317[(2)] = null);

(statearr_25287_25317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25275 === (9))){
var inst_25238 = (state_25274[(7)]);
var inst_25252 = cljs.core.vec.call(null,inst_25238);
var state_25274__$1 = state_25274;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25274__$1,(11),out,inst_25252);
} else {
if((state_val_25275 === (5))){
var inst_25238 = (state_25274[(7)]);
var inst_25242 = (state_25274[(9)]);
var inst_25247 = (state_25274[(11)]);
var inst_25239 = (state_25274[(8)]);
var inst_25246 = (inst_25238[inst_25239] = inst_25242);
var inst_25247__$1 = (inst_25239 + (1));
var inst_25248 = (inst_25247__$1 < n);
var state_25274__$1 = (function (){var statearr_25288 = state_25274;
(statearr_25288[(11)] = inst_25247__$1);

(statearr_25288[(12)] = inst_25246);

return statearr_25288;
})();
if(cljs.core.truth_(inst_25248)){
var statearr_25289_25318 = state_25274__$1;
(statearr_25289_25318[(1)] = (8));

} else {
var statearr_25290_25319 = state_25274__$1;
(statearr_25290_25319[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25275 === (14))){
var inst_25267 = (state_25274[(2)]);
var inst_25268 = cljs.core.async.close_BANG_.call(null,out);
var state_25274__$1 = (function (){var statearr_25292 = state_25274;
(statearr_25292[(13)] = inst_25267);

return statearr_25292;
})();
var statearr_25293_25320 = state_25274__$1;
(statearr_25293_25320[(2)] = inst_25268);

(statearr_25293_25320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25275 === (10))){
var inst_25258 = (state_25274[(2)]);
var state_25274__$1 = state_25274;
var statearr_25294_25321 = state_25274__$1;
(statearr_25294_25321[(2)] = inst_25258);

(statearr_25294_25321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25275 === (8))){
var inst_25238 = (state_25274[(7)]);
var inst_25247 = (state_25274[(11)]);
var tmp25291 = inst_25238;
var inst_25238__$1 = tmp25291;
var inst_25239 = inst_25247;
var state_25274__$1 = (function (){var statearr_25295 = state_25274;
(statearr_25295[(7)] = inst_25238__$1);

(statearr_25295[(8)] = inst_25239);

return statearr_25295;
})();
var statearr_25296_25322 = state_25274__$1;
(statearr_25296_25322[(2)] = null);

(statearr_25296_25322[(1)] = (2));


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
});})(c__22648__auto___25308,out))
;
return ((function (switch__22536__auto__,c__22648__auto___25308,out){
return (function() {
var cljs$core$async$state_machine__22537__auto__ = null;
var cljs$core$async$state_machine__22537__auto____0 = (function (){
var statearr_25300 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25300[(0)] = cljs$core$async$state_machine__22537__auto__);

(statearr_25300[(1)] = (1));

return statearr_25300;
});
var cljs$core$async$state_machine__22537__auto____1 = (function (state_25274){
while(true){
var ret_value__22538__auto__ = (function (){try{while(true){
var result__22539__auto__ = switch__22536__auto__.call(null,state_25274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22539__auto__;
}
break;
}
}catch (e25301){if((e25301 instanceof Object)){
var ex__22540__auto__ = e25301;
var statearr_25302_25323 = state_25274;
(statearr_25302_25323[(5)] = ex__22540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25324 = state_25274;
state_25274 = G__25324;
continue;
} else {
return ret_value__22538__auto__;
}
break;
}
});
cljs$core$async$state_machine__22537__auto__ = function(state_25274){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22537__auto____1.call(this,state_25274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22537__auto____0;
cljs$core$async$state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22537__auto____1;
return cljs$core$async$state_machine__22537__auto__;
})()
;})(switch__22536__auto__,c__22648__auto___25308,out))
})();
var state__22650__auto__ = (function (){var statearr_25303 = f__22649__auto__.call(null);
(statearr_25303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22648__auto___25308);

return statearr_25303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22650__auto__);
});})(c__22648__auto___25308,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args25325 = [];
var len__17899__auto___25399 = arguments.length;
var i__17900__auto___25400 = (0);
while(true){
if((i__17900__auto___25400 < len__17899__auto___25399)){
args25325.push((arguments[i__17900__auto___25400]));

var G__25401 = (i__17900__auto___25400 + (1));
i__17900__auto___25400 = G__25401;
continue;
} else {
}
break;
}

var G__25327 = args25325.length;
switch (G__25327) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25325.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22648__auto___25403 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22648__auto___25403,out){
return (function (){
var f__22649__auto__ = (function (){var switch__22536__auto__ = ((function (c__22648__auto___25403,out){
return (function (state_25369){
var state_val_25370 = (state_25369[(1)]);
if((state_val_25370 === (7))){
var inst_25365 = (state_25369[(2)]);
var state_25369__$1 = state_25369;
var statearr_25371_25404 = state_25369__$1;
(statearr_25371_25404[(2)] = inst_25365);

(statearr_25371_25404[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25370 === (1))){
var inst_25328 = [];
var inst_25329 = inst_25328;
var inst_25330 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25369__$1 = (function (){var statearr_25372 = state_25369;
(statearr_25372[(7)] = inst_25329);

(statearr_25372[(8)] = inst_25330);

return statearr_25372;
})();
var statearr_25373_25405 = state_25369__$1;
(statearr_25373_25405[(2)] = null);

(statearr_25373_25405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25370 === (4))){
var inst_25333 = (state_25369[(9)]);
var inst_25333__$1 = (state_25369[(2)]);
var inst_25334 = (inst_25333__$1 == null);
var inst_25335 = cljs.core.not.call(null,inst_25334);
var state_25369__$1 = (function (){var statearr_25374 = state_25369;
(statearr_25374[(9)] = inst_25333__$1);

return statearr_25374;
})();
if(inst_25335){
var statearr_25375_25406 = state_25369__$1;
(statearr_25375_25406[(1)] = (5));

} else {
var statearr_25376_25407 = state_25369__$1;
(statearr_25376_25407[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25370 === (15))){
var inst_25359 = (state_25369[(2)]);
var state_25369__$1 = state_25369;
var statearr_25377_25408 = state_25369__$1;
(statearr_25377_25408[(2)] = inst_25359);

(statearr_25377_25408[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25370 === (13))){
var state_25369__$1 = state_25369;
var statearr_25378_25409 = state_25369__$1;
(statearr_25378_25409[(2)] = null);

(statearr_25378_25409[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25370 === (6))){
var inst_25329 = (state_25369[(7)]);
var inst_25354 = inst_25329.length;
var inst_25355 = (inst_25354 > (0));
var state_25369__$1 = state_25369;
if(cljs.core.truth_(inst_25355)){
var statearr_25379_25410 = state_25369__$1;
(statearr_25379_25410[(1)] = (12));

} else {
var statearr_25380_25411 = state_25369__$1;
(statearr_25380_25411[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25370 === (3))){
var inst_25367 = (state_25369[(2)]);
var state_25369__$1 = state_25369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25369__$1,inst_25367);
} else {
if((state_val_25370 === (12))){
var inst_25329 = (state_25369[(7)]);
var inst_25357 = cljs.core.vec.call(null,inst_25329);
var state_25369__$1 = state_25369;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25369__$1,(15),out,inst_25357);
} else {
if((state_val_25370 === (2))){
var state_25369__$1 = state_25369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25369__$1,(4),ch);
} else {
if((state_val_25370 === (11))){
var inst_25333 = (state_25369[(9)]);
var inst_25337 = (state_25369[(10)]);
var inst_25347 = (state_25369[(2)]);
var inst_25348 = [];
var inst_25349 = inst_25348.push(inst_25333);
var inst_25329 = inst_25348;
var inst_25330 = inst_25337;
var state_25369__$1 = (function (){var statearr_25381 = state_25369;
(statearr_25381[(7)] = inst_25329);

(statearr_25381[(11)] = inst_25349);

(statearr_25381[(12)] = inst_25347);

(statearr_25381[(8)] = inst_25330);

return statearr_25381;
})();
var statearr_25382_25412 = state_25369__$1;
(statearr_25382_25412[(2)] = null);

(statearr_25382_25412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25370 === (9))){
var inst_25329 = (state_25369[(7)]);
var inst_25345 = cljs.core.vec.call(null,inst_25329);
var state_25369__$1 = state_25369;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25369__$1,(11),out,inst_25345);
} else {
if((state_val_25370 === (5))){
var inst_25333 = (state_25369[(9)]);
var inst_25337 = (state_25369[(10)]);
var inst_25330 = (state_25369[(8)]);
var inst_25337__$1 = f.call(null,inst_25333);
var inst_25338 = cljs.core._EQ_.call(null,inst_25337__$1,inst_25330);
var inst_25339 = cljs.core.keyword_identical_QMARK_.call(null,inst_25330,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25340 = (inst_25338) || (inst_25339);
var state_25369__$1 = (function (){var statearr_25383 = state_25369;
(statearr_25383[(10)] = inst_25337__$1);

return statearr_25383;
})();
if(cljs.core.truth_(inst_25340)){
var statearr_25384_25413 = state_25369__$1;
(statearr_25384_25413[(1)] = (8));

} else {
var statearr_25385_25414 = state_25369__$1;
(statearr_25385_25414[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25370 === (14))){
var inst_25362 = (state_25369[(2)]);
var inst_25363 = cljs.core.async.close_BANG_.call(null,out);
var state_25369__$1 = (function (){var statearr_25387 = state_25369;
(statearr_25387[(13)] = inst_25362);

return statearr_25387;
})();
var statearr_25388_25415 = state_25369__$1;
(statearr_25388_25415[(2)] = inst_25363);

(statearr_25388_25415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25370 === (10))){
var inst_25352 = (state_25369[(2)]);
var state_25369__$1 = state_25369;
var statearr_25389_25416 = state_25369__$1;
(statearr_25389_25416[(2)] = inst_25352);

(statearr_25389_25416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25370 === (8))){
var inst_25333 = (state_25369[(9)]);
var inst_25337 = (state_25369[(10)]);
var inst_25329 = (state_25369[(7)]);
var inst_25342 = inst_25329.push(inst_25333);
var tmp25386 = inst_25329;
var inst_25329__$1 = tmp25386;
var inst_25330 = inst_25337;
var state_25369__$1 = (function (){var statearr_25390 = state_25369;
(statearr_25390[(7)] = inst_25329__$1);

(statearr_25390[(8)] = inst_25330);

(statearr_25390[(14)] = inst_25342);

return statearr_25390;
})();
var statearr_25391_25417 = state_25369__$1;
(statearr_25391_25417[(2)] = null);

(statearr_25391_25417[(1)] = (2));


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
});})(c__22648__auto___25403,out))
;
return ((function (switch__22536__auto__,c__22648__auto___25403,out){
return (function() {
var cljs$core$async$state_machine__22537__auto__ = null;
var cljs$core$async$state_machine__22537__auto____0 = (function (){
var statearr_25395 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25395[(0)] = cljs$core$async$state_machine__22537__auto__);

(statearr_25395[(1)] = (1));

return statearr_25395;
});
var cljs$core$async$state_machine__22537__auto____1 = (function (state_25369){
while(true){
var ret_value__22538__auto__ = (function (){try{while(true){
var result__22539__auto__ = switch__22536__auto__.call(null,state_25369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22539__auto__;
}
break;
}
}catch (e25396){if((e25396 instanceof Object)){
var ex__22540__auto__ = e25396;
var statearr_25397_25418 = state_25369;
(statearr_25397_25418[(5)] = ex__22540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25419 = state_25369;
state_25369 = G__25419;
continue;
} else {
return ret_value__22538__auto__;
}
break;
}
});
cljs$core$async$state_machine__22537__auto__ = function(state_25369){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22537__auto____1.call(this,state_25369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22537__auto____0;
cljs$core$async$state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22537__auto____1;
return cljs$core$async$state_machine__22537__auto__;
})()
;})(switch__22536__auto__,c__22648__auto___25403,out))
})();
var state__22650__auto__ = (function (){var statearr_25398 = f__22649__auto__.call(null);
(statearr_25398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22648__auto___25403);

return statearr_25398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22650__auto__);
});})(c__22648__auto___25403,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map