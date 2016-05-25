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
var args22707 = [];
var len__17913__auto___22713 = arguments.length;
var i__17914__auto___22714 = (0);
while(true){
if((i__17914__auto___22714 < len__17913__auto___22713)){
args22707.push((arguments[i__17914__auto___22714]));

var G__22715 = (i__17914__auto___22714 + (1));
i__17914__auto___22714 = G__22715;
continue;
} else {
}
break;
}

var G__22709 = args22707.length;
switch (G__22709) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22707.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async22710 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22710 = (function (f,blockable,meta22711){
this.f = f;
this.blockable = blockable;
this.meta22711 = meta22711;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22712,meta22711__$1){
var self__ = this;
var _22712__$1 = this;
return (new cljs.core.async.t_cljs$core$async22710(self__.f,self__.blockable,meta22711__$1));
});

cljs.core.async.t_cljs$core$async22710.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22712){
var self__ = this;
var _22712__$1 = this;
return self__.meta22711;
});

cljs.core.async.t_cljs$core$async22710.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22710.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22710.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async22710.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22710.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22711","meta22711",1649528168,null)], null);
});

cljs.core.async.t_cljs$core$async22710.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22710.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22710";

cljs.core.async.t_cljs$core$async22710.cljs$lang$ctorPrWriter = (function (this__17453__auto__,writer__17454__auto__,opt__17455__auto__){
return cljs.core._write.call(null,writer__17454__auto__,"cljs.core.async/t_cljs$core$async22710");
});

cljs.core.async.__GT_t_cljs$core$async22710 = (function cljs$core$async$__GT_t_cljs$core$async22710(f__$1,blockable__$1,meta22711){
return (new cljs.core.async.t_cljs$core$async22710(f__$1,blockable__$1,meta22711));
});

}

return (new cljs.core.async.t_cljs$core$async22710(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args22719 = [];
var len__17913__auto___22722 = arguments.length;
var i__17914__auto___22723 = (0);
while(true){
if((i__17914__auto___22723 < len__17913__auto___22722)){
args22719.push((arguments[i__17914__auto___22723]));

var G__22724 = (i__17914__auto___22723 + (1));
i__17914__auto___22723 = G__22724;
continue;
} else {
}
break;
}

var G__22721 = args22719.length;
switch (G__22721) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22719.length)].join('')));

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
var args22726 = [];
var len__17913__auto___22729 = arguments.length;
var i__17914__auto___22730 = (0);
while(true){
if((i__17914__auto___22730 < len__17913__auto___22729)){
args22726.push((arguments[i__17914__auto___22730]));

var G__22731 = (i__17914__auto___22730 + (1));
i__17914__auto___22730 = G__22731;
continue;
} else {
}
break;
}

var G__22728 = args22726.length;
switch (G__22728) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22726.length)].join('')));

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
var args22733 = [];
var len__17913__auto___22736 = arguments.length;
var i__17914__auto___22737 = (0);
while(true){
if((i__17914__auto___22737 < len__17913__auto___22736)){
args22733.push((arguments[i__17914__auto___22737]));

var G__22738 = (i__17914__auto___22737 + (1));
i__17914__auto___22737 = G__22738;
continue;
} else {
}
break;
}

var G__22735 = args22733.length;
switch (G__22735) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22733.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_22740 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22740);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22740,ret){
return (function (){
return fn1.call(null,val_22740);
});})(val_22740,ret))
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
var args22741 = [];
var len__17913__auto___22744 = arguments.length;
var i__17914__auto___22745 = (0);
while(true){
if((i__17914__auto___22745 < len__17913__auto___22744)){
args22741.push((arguments[i__17914__auto___22745]));

var G__22746 = (i__17914__auto___22745 + (1));
i__17914__auto___22745 = G__22746;
continue;
} else {
}
break;
}

var G__22743 = args22741.length;
switch (G__22743) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22741.length)].join('')));

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
var n__17758__auto___22748 = n;
var x_22749 = (0);
while(true){
if((x_22749 < n__17758__auto___22748)){
(a[x_22749] = (0));

var G__22750 = (x_22749 + (1));
x_22749 = G__22750;
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

var G__22751 = (i + (1));
i = G__22751;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async22755 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22755 = (function (alt_flag,flag,meta22756){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta22756 = meta22756;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22757,meta22756__$1){
var self__ = this;
var _22757__$1 = this;
return (new cljs.core.async.t_cljs$core$async22755(self__.alt_flag,self__.flag,meta22756__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22755.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22757){
var self__ = this;
var _22757__$1 = this;
return self__.meta22756;
});})(flag))
;

cljs.core.async.t_cljs$core$async22755.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22755.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22755.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22755.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22755.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22756","meta22756",-2110398054,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22755.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22755.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22755";

cljs.core.async.t_cljs$core$async22755.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17453__auto__,writer__17454__auto__,opt__17455__auto__){
return cljs.core._write.call(null,writer__17454__auto__,"cljs.core.async/t_cljs$core$async22755");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async22755 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22755(alt_flag__$1,flag__$1,meta22756){
return (new cljs.core.async.t_cljs$core$async22755(alt_flag__$1,flag__$1,meta22756));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22755(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22761 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22761 = (function (alt_handler,flag,cb,meta22762){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta22762 = meta22762;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22763,meta22762__$1){
var self__ = this;
var _22763__$1 = this;
return (new cljs.core.async.t_cljs$core$async22761(self__.alt_handler,self__.flag,self__.cb,meta22762__$1));
});

cljs.core.async.t_cljs$core$async22761.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22763){
var self__ = this;
var _22763__$1 = this;
return self__.meta22762;
});

cljs.core.async.t_cljs$core$async22761.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22761.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22761.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22761.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22761.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22762","meta22762",-481176738,null)], null);
});

cljs.core.async.t_cljs$core$async22761.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22761.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22761";

cljs.core.async.t_cljs$core$async22761.cljs$lang$ctorPrWriter = (function (this__17453__auto__,writer__17454__auto__,opt__17455__auto__){
return cljs.core._write.call(null,writer__17454__auto__,"cljs.core.async/t_cljs$core$async22761");
});

cljs.core.async.__GT_t_cljs$core$async22761 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22761(alt_handler__$1,flag__$1,cb__$1,meta22762){
return (new cljs.core.async.t_cljs$core$async22761(alt_handler__$1,flag__$1,cb__$1,meta22762));
});

}

return (new cljs.core.async.t_cljs$core$async22761(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__22764_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22764_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22765_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22765_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16855__auto__ = wport;
if(cljs.core.truth_(or__16855__auto__)){
return or__16855__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22766 = (i + (1));
i = G__22766;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16855__auto__ = ret;
if(cljs.core.truth_(or__16855__auto__)){
return or__16855__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16843__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16843__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16843__auto__;
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
var args__17920__auto__ = [];
var len__17913__auto___22772 = arguments.length;
var i__17914__auto___22773 = (0);
while(true){
if((i__17914__auto___22773 < len__17913__auto___22772)){
args__17920__auto__.push((arguments[i__17914__auto___22773]));

var G__22774 = (i__17914__auto___22773 + (1));
i__17914__auto___22773 = G__22774;
continue;
} else {
}
break;
}

var argseq__17921__auto__ = ((((1) < args__17920__auto__.length))?(new cljs.core.IndexedSeq(args__17920__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17921__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22769){
var map__22770 = p__22769;
var map__22770__$1 = ((((!((map__22770 == null)))?((((map__22770.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22770.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22770):map__22770);
var opts = map__22770__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22767){
var G__22768 = cljs.core.first.call(null,seq22767);
var seq22767__$1 = cljs.core.next.call(null,seq22767);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22768,seq22767__$1);
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
var args22775 = [];
var len__17913__auto___22825 = arguments.length;
var i__17914__auto___22826 = (0);
while(true){
if((i__17914__auto___22826 < len__17913__auto___22825)){
args22775.push((arguments[i__17914__auto___22826]));

var G__22827 = (i__17914__auto___22826 + (1));
i__17914__auto___22826 = G__22827;
continue;
} else {
}
break;
}

var G__22777 = args22775.length;
switch (G__22777) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22775.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22662__auto___22829 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22662__auto___22829){
return (function (){
var f__22663__auto__ = (function (){var switch__22550__auto__ = ((function (c__22662__auto___22829){
return (function (state_22801){
var state_val_22802 = (state_22801[(1)]);
if((state_val_22802 === (7))){
var inst_22797 = (state_22801[(2)]);
var state_22801__$1 = state_22801;
var statearr_22803_22830 = state_22801__$1;
(statearr_22803_22830[(2)] = inst_22797);

(statearr_22803_22830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22802 === (1))){
var state_22801__$1 = state_22801;
var statearr_22804_22831 = state_22801__$1;
(statearr_22804_22831[(2)] = null);

(statearr_22804_22831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22802 === (4))){
var inst_22780 = (state_22801[(7)]);
var inst_22780__$1 = (state_22801[(2)]);
var inst_22781 = (inst_22780__$1 == null);
var state_22801__$1 = (function (){var statearr_22805 = state_22801;
(statearr_22805[(7)] = inst_22780__$1);

return statearr_22805;
})();
if(cljs.core.truth_(inst_22781)){
var statearr_22806_22832 = state_22801__$1;
(statearr_22806_22832[(1)] = (5));

} else {
var statearr_22807_22833 = state_22801__$1;
(statearr_22807_22833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22802 === (13))){
var state_22801__$1 = state_22801;
var statearr_22808_22834 = state_22801__$1;
(statearr_22808_22834[(2)] = null);

(statearr_22808_22834[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22802 === (6))){
var inst_22780 = (state_22801[(7)]);
var state_22801__$1 = state_22801;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22801__$1,(11),to,inst_22780);
} else {
if((state_val_22802 === (3))){
var inst_22799 = (state_22801[(2)]);
var state_22801__$1 = state_22801;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22801__$1,inst_22799);
} else {
if((state_val_22802 === (12))){
var state_22801__$1 = state_22801;
var statearr_22809_22835 = state_22801__$1;
(statearr_22809_22835[(2)] = null);

(statearr_22809_22835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22802 === (2))){
var state_22801__$1 = state_22801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22801__$1,(4),from);
} else {
if((state_val_22802 === (11))){
var inst_22790 = (state_22801[(2)]);
var state_22801__$1 = state_22801;
if(cljs.core.truth_(inst_22790)){
var statearr_22810_22836 = state_22801__$1;
(statearr_22810_22836[(1)] = (12));

} else {
var statearr_22811_22837 = state_22801__$1;
(statearr_22811_22837[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22802 === (9))){
var state_22801__$1 = state_22801;
var statearr_22812_22838 = state_22801__$1;
(statearr_22812_22838[(2)] = null);

(statearr_22812_22838[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22802 === (5))){
var state_22801__$1 = state_22801;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22813_22839 = state_22801__$1;
(statearr_22813_22839[(1)] = (8));

} else {
var statearr_22814_22840 = state_22801__$1;
(statearr_22814_22840[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22802 === (14))){
var inst_22795 = (state_22801[(2)]);
var state_22801__$1 = state_22801;
var statearr_22815_22841 = state_22801__$1;
(statearr_22815_22841[(2)] = inst_22795);

(statearr_22815_22841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22802 === (10))){
var inst_22787 = (state_22801[(2)]);
var state_22801__$1 = state_22801;
var statearr_22816_22842 = state_22801__$1;
(statearr_22816_22842[(2)] = inst_22787);

(statearr_22816_22842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22802 === (8))){
var inst_22784 = cljs.core.async.close_BANG_.call(null,to);
var state_22801__$1 = state_22801;
var statearr_22817_22843 = state_22801__$1;
(statearr_22817_22843[(2)] = inst_22784);

(statearr_22817_22843[(1)] = (10));


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
});})(c__22662__auto___22829))
;
return ((function (switch__22550__auto__,c__22662__auto___22829){
return (function() {
var cljs$core$async$state_machine__22551__auto__ = null;
var cljs$core$async$state_machine__22551__auto____0 = (function (){
var statearr_22821 = [null,null,null,null,null,null,null,null];
(statearr_22821[(0)] = cljs$core$async$state_machine__22551__auto__);

(statearr_22821[(1)] = (1));

return statearr_22821;
});
var cljs$core$async$state_machine__22551__auto____1 = (function (state_22801){
while(true){
var ret_value__22552__auto__ = (function (){try{while(true){
var result__22553__auto__ = switch__22550__auto__.call(null,state_22801);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22553__auto__;
}
break;
}
}catch (e22822){if((e22822 instanceof Object)){
var ex__22554__auto__ = e22822;
var statearr_22823_22844 = state_22801;
(statearr_22823_22844[(5)] = ex__22554__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22801);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22822;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22845 = state_22801;
state_22801 = G__22845;
continue;
} else {
return ret_value__22552__auto__;
}
break;
}
});
cljs$core$async$state_machine__22551__auto__ = function(state_22801){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22551__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22551__auto____1.call(this,state_22801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22551__auto____0;
cljs$core$async$state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22551__auto____1;
return cljs$core$async$state_machine__22551__auto__;
})()
;})(switch__22550__auto__,c__22662__auto___22829))
})();
var state__22664__auto__ = (function (){var statearr_22824 = f__22663__auto__.call(null);
(statearr_22824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22662__auto___22829);

return statearr_22824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22664__auto__);
});})(c__22662__auto___22829))
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
return (function (p__23029){
var vec__23030 = p__23029;
var v = cljs.core.nth.call(null,vec__23030,(0),null);
var p = cljs.core.nth.call(null,vec__23030,(1),null);
var job = vec__23030;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22662__auto___23212 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22662__auto___23212,res,vec__23030,v,p,job,jobs,results){
return (function (){
var f__22663__auto__ = (function (){var switch__22550__auto__ = ((function (c__22662__auto___23212,res,vec__23030,v,p,job,jobs,results){
return (function (state_23035){
var state_val_23036 = (state_23035[(1)]);
if((state_val_23036 === (1))){
var state_23035__$1 = state_23035;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23035__$1,(2),res,v);
} else {
if((state_val_23036 === (2))){
var inst_23032 = (state_23035[(2)]);
var inst_23033 = cljs.core.async.close_BANG_.call(null,res);
var state_23035__$1 = (function (){var statearr_23037 = state_23035;
(statearr_23037[(7)] = inst_23032);

return statearr_23037;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23035__$1,inst_23033);
} else {
return null;
}
}
});})(c__22662__auto___23212,res,vec__23030,v,p,job,jobs,results))
;
return ((function (switch__22550__auto__,c__22662__auto___23212,res,vec__23030,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22551__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22551__auto____0 = (function (){
var statearr_23041 = [null,null,null,null,null,null,null,null];
(statearr_23041[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22551__auto__);

(statearr_23041[(1)] = (1));

return statearr_23041;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22551__auto____1 = (function (state_23035){
while(true){
var ret_value__22552__auto__ = (function (){try{while(true){
var result__22553__auto__ = switch__22550__auto__.call(null,state_23035);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22553__auto__;
}
break;
}
}catch (e23042){if((e23042 instanceof Object)){
var ex__22554__auto__ = e23042;
var statearr_23043_23213 = state_23035;
(statearr_23043_23213[(5)] = ex__22554__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23035);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23042;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23214 = state_23035;
state_23035 = G__23214;
continue;
} else {
return ret_value__22552__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22551__auto__ = function(state_23035){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22551__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22551__auto____1.call(this,state_23035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22551__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22551__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22551__auto__;
})()
;})(switch__22550__auto__,c__22662__auto___23212,res,vec__23030,v,p,job,jobs,results))
})();
var state__22664__auto__ = (function (){var statearr_23044 = f__22663__auto__.call(null);
(statearr_23044[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22662__auto___23212);

return statearr_23044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22664__auto__);
});})(c__22662__auto___23212,res,vec__23030,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23045){
var vec__23046 = p__23045;
var v = cljs.core.nth.call(null,vec__23046,(0),null);
var p = cljs.core.nth.call(null,vec__23046,(1),null);
var job = vec__23046;
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
var n__17758__auto___23215 = n;
var __23216 = (0);
while(true){
if((__23216 < n__17758__auto___23215)){
var G__23047_23217 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23047_23217) {
case "compute":
var c__22662__auto___23219 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23216,c__22662__auto___23219,G__23047_23217,n__17758__auto___23215,jobs,results,process,async){
return (function (){
var f__22663__auto__ = (function (){var switch__22550__auto__ = ((function (__23216,c__22662__auto___23219,G__23047_23217,n__17758__auto___23215,jobs,results,process,async){
return (function (state_23060){
var state_val_23061 = (state_23060[(1)]);
if((state_val_23061 === (1))){
var state_23060__$1 = state_23060;
var statearr_23062_23220 = state_23060__$1;
(statearr_23062_23220[(2)] = null);

(statearr_23062_23220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23061 === (2))){
var state_23060__$1 = state_23060;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23060__$1,(4),jobs);
} else {
if((state_val_23061 === (3))){
var inst_23058 = (state_23060[(2)]);
var state_23060__$1 = state_23060;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23060__$1,inst_23058);
} else {
if((state_val_23061 === (4))){
var inst_23050 = (state_23060[(2)]);
var inst_23051 = process.call(null,inst_23050);
var state_23060__$1 = state_23060;
if(cljs.core.truth_(inst_23051)){
var statearr_23063_23221 = state_23060__$1;
(statearr_23063_23221[(1)] = (5));

} else {
var statearr_23064_23222 = state_23060__$1;
(statearr_23064_23222[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23061 === (5))){
var state_23060__$1 = state_23060;
var statearr_23065_23223 = state_23060__$1;
(statearr_23065_23223[(2)] = null);

(statearr_23065_23223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23061 === (6))){
var state_23060__$1 = state_23060;
var statearr_23066_23224 = state_23060__$1;
(statearr_23066_23224[(2)] = null);

(statearr_23066_23224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23061 === (7))){
var inst_23056 = (state_23060[(2)]);
var state_23060__$1 = state_23060;
var statearr_23067_23225 = state_23060__$1;
(statearr_23067_23225[(2)] = inst_23056);

(statearr_23067_23225[(1)] = (3));


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
});})(__23216,c__22662__auto___23219,G__23047_23217,n__17758__auto___23215,jobs,results,process,async))
;
return ((function (__23216,switch__22550__auto__,c__22662__auto___23219,G__23047_23217,n__17758__auto___23215,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22551__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22551__auto____0 = (function (){
var statearr_23071 = [null,null,null,null,null,null,null];
(statearr_23071[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22551__auto__);

(statearr_23071[(1)] = (1));

return statearr_23071;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22551__auto____1 = (function (state_23060){
while(true){
var ret_value__22552__auto__ = (function (){try{while(true){
var result__22553__auto__ = switch__22550__auto__.call(null,state_23060);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22553__auto__;
}
break;
}
}catch (e23072){if((e23072 instanceof Object)){
var ex__22554__auto__ = e23072;
var statearr_23073_23226 = state_23060;
(statearr_23073_23226[(5)] = ex__22554__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23060);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23072;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23227 = state_23060;
state_23060 = G__23227;
continue;
} else {
return ret_value__22552__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22551__auto__ = function(state_23060){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22551__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22551__auto____1.call(this,state_23060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22551__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22551__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22551__auto__;
})()
;})(__23216,switch__22550__auto__,c__22662__auto___23219,G__23047_23217,n__17758__auto___23215,jobs,results,process,async))
})();
var state__22664__auto__ = (function (){var statearr_23074 = f__22663__auto__.call(null);
(statearr_23074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22662__auto___23219);

return statearr_23074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22664__auto__);
});})(__23216,c__22662__auto___23219,G__23047_23217,n__17758__auto___23215,jobs,results,process,async))
);


break;
case "async":
var c__22662__auto___23228 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23216,c__22662__auto___23228,G__23047_23217,n__17758__auto___23215,jobs,results,process,async){
return (function (){
var f__22663__auto__ = (function (){var switch__22550__auto__ = ((function (__23216,c__22662__auto___23228,G__23047_23217,n__17758__auto___23215,jobs,results,process,async){
return (function (state_23087){
var state_val_23088 = (state_23087[(1)]);
if((state_val_23088 === (1))){
var state_23087__$1 = state_23087;
var statearr_23089_23229 = state_23087__$1;
(statearr_23089_23229[(2)] = null);

(statearr_23089_23229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23088 === (2))){
var state_23087__$1 = state_23087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23087__$1,(4),jobs);
} else {
if((state_val_23088 === (3))){
var inst_23085 = (state_23087[(2)]);
var state_23087__$1 = state_23087;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23087__$1,inst_23085);
} else {
if((state_val_23088 === (4))){
var inst_23077 = (state_23087[(2)]);
var inst_23078 = async.call(null,inst_23077);
var state_23087__$1 = state_23087;
if(cljs.core.truth_(inst_23078)){
var statearr_23090_23230 = state_23087__$1;
(statearr_23090_23230[(1)] = (5));

} else {
var statearr_23091_23231 = state_23087__$1;
(statearr_23091_23231[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23088 === (5))){
var state_23087__$1 = state_23087;
var statearr_23092_23232 = state_23087__$1;
(statearr_23092_23232[(2)] = null);

(statearr_23092_23232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23088 === (6))){
var state_23087__$1 = state_23087;
var statearr_23093_23233 = state_23087__$1;
(statearr_23093_23233[(2)] = null);

(statearr_23093_23233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23088 === (7))){
var inst_23083 = (state_23087[(2)]);
var state_23087__$1 = state_23087;
var statearr_23094_23234 = state_23087__$1;
(statearr_23094_23234[(2)] = inst_23083);

(statearr_23094_23234[(1)] = (3));


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
});})(__23216,c__22662__auto___23228,G__23047_23217,n__17758__auto___23215,jobs,results,process,async))
;
return ((function (__23216,switch__22550__auto__,c__22662__auto___23228,G__23047_23217,n__17758__auto___23215,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22551__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22551__auto____0 = (function (){
var statearr_23098 = [null,null,null,null,null,null,null];
(statearr_23098[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22551__auto__);

(statearr_23098[(1)] = (1));

return statearr_23098;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22551__auto____1 = (function (state_23087){
while(true){
var ret_value__22552__auto__ = (function (){try{while(true){
var result__22553__auto__ = switch__22550__auto__.call(null,state_23087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22553__auto__;
}
break;
}
}catch (e23099){if((e23099 instanceof Object)){
var ex__22554__auto__ = e23099;
var statearr_23100_23235 = state_23087;
(statearr_23100_23235[(5)] = ex__22554__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23099;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23236 = state_23087;
state_23087 = G__23236;
continue;
} else {
return ret_value__22552__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22551__auto__ = function(state_23087){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22551__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22551__auto____1.call(this,state_23087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22551__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22551__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22551__auto__;
})()
;})(__23216,switch__22550__auto__,c__22662__auto___23228,G__23047_23217,n__17758__auto___23215,jobs,results,process,async))
})();
var state__22664__auto__ = (function (){var statearr_23101 = f__22663__auto__.call(null);
(statearr_23101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22662__auto___23228);

return statearr_23101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22664__auto__);
});})(__23216,c__22662__auto___23228,G__23047_23217,n__17758__auto___23215,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__23237 = (__23216 + (1));
__23216 = G__23237;
continue;
} else {
}
break;
}

var c__22662__auto___23238 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22662__auto___23238,jobs,results,process,async){
return (function (){
var f__22663__auto__ = (function (){var switch__22550__auto__ = ((function (c__22662__auto___23238,jobs,results,process,async){
return (function (state_23123){
var state_val_23124 = (state_23123[(1)]);
if((state_val_23124 === (1))){
var state_23123__$1 = state_23123;
var statearr_23125_23239 = state_23123__$1;
(statearr_23125_23239[(2)] = null);

(statearr_23125_23239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23124 === (2))){
var state_23123__$1 = state_23123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23123__$1,(4),from);
} else {
if((state_val_23124 === (3))){
var inst_23121 = (state_23123[(2)]);
var state_23123__$1 = state_23123;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23123__$1,inst_23121);
} else {
if((state_val_23124 === (4))){
var inst_23104 = (state_23123[(7)]);
var inst_23104__$1 = (state_23123[(2)]);
var inst_23105 = (inst_23104__$1 == null);
var state_23123__$1 = (function (){var statearr_23126 = state_23123;
(statearr_23126[(7)] = inst_23104__$1);

return statearr_23126;
})();
if(cljs.core.truth_(inst_23105)){
var statearr_23127_23240 = state_23123__$1;
(statearr_23127_23240[(1)] = (5));

} else {
var statearr_23128_23241 = state_23123__$1;
(statearr_23128_23241[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23124 === (5))){
var inst_23107 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23123__$1 = state_23123;
var statearr_23129_23242 = state_23123__$1;
(statearr_23129_23242[(2)] = inst_23107);

(statearr_23129_23242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23124 === (6))){
var inst_23104 = (state_23123[(7)]);
var inst_23109 = (state_23123[(8)]);
var inst_23109__$1 = cljs.core.async.chan.call(null,(1));
var inst_23110 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23111 = [inst_23104,inst_23109__$1];
var inst_23112 = (new cljs.core.PersistentVector(null,2,(5),inst_23110,inst_23111,null));
var state_23123__$1 = (function (){var statearr_23130 = state_23123;
(statearr_23130[(8)] = inst_23109__$1);

return statearr_23130;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23123__$1,(8),jobs,inst_23112);
} else {
if((state_val_23124 === (7))){
var inst_23119 = (state_23123[(2)]);
var state_23123__$1 = state_23123;
var statearr_23131_23243 = state_23123__$1;
(statearr_23131_23243[(2)] = inst_23119);

(statearr_23131_23243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23124 === (8))){
var inst_23109 = (state_23123[(8)]);
var inst_23114 = (state_23123[(2)]);
var state_23123__$1 = (function (){var statearr_23132 = state_23123;
(statearr_23132[(9)] = inst_23114);

return statearr_23132;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23123__$1,(9),results,inst_23109);
} else {
if((state_val_23124 === (9))){
var inst_23116 = (state_23123[(2)]);
var state_23123__$1 = (function (){var statearr_23133 = state_23123;
(statearr_23133[(10)] = inst_23116);

return statearr_23133;
})();
var statearr_23134_23244 = state_23123__$1;
(statearr_23134_23244[(2)] = null);

(statearr_23134_23244[(1)] = (2));


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
});})(c__22662__auto___23238,jobs,results,process,async))
;
return ((function (switch__22550__auto__,c__22662__auto___23238,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22551__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22551__auto____0 = (function (){
var statearr_23138 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23138[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22551__auto__);

(statearr_23138[(1)] = (1));

return statearr_23138;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22551__auto____1 = (function (state_23123){
while(true){
var ret_value__22552__auto__ = (function (){try{while(true){
var result__22553__auto__ = switch__22550__auto__.call(null,state_23123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22553__auto__;
}
break;
}
}catch (e23139){if((e23139 instanceof Object)){
var ex__22554__auto__ = e23139;
var statearr_23140_23245 = state_23123;
(statearr_23140_23245[(5)] = ex__22554__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23246 = state_23123;
state_23123 = G__23246;
continue;
} else {
return ret_value__22552__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22551__auto__ = function(state_23123){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22551__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22551__auto____1.call(this,state_23123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22551__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22551__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22551__auto__;
})()
;})(switch__22550__auto__,c__22662__auto___23238,jobs,results,process,async))
})();
var state__22664__auto__ = (function (){var statearr_23141 = f__22663__auto__.call(null);
(statearr_23141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22662__auto___23238);

return statearr_23141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22664__auto__);
});})(c__22662__auto___23238,jobs,results,process,async))
);


var c__22662__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22662__auto__,jobs,results,process,async){
return (function (){
var f__22663__auto__ = (function (){var switch__22550__auto__ = ((function (c__22662__auto__,jobs,results,process,async){
return (function (state_23179){
var state_val_23180 = (state_23179[(1)]);
if((state_val_23180 === (7))){
var inst_23175 = (state_23179[(2)]);
var state_23179__$1 = state_23179;
var statearr_23181_23247 = state_23179__$1;
(statearr_23181_23247[(2)] = inst_23175);

(statearr_23181_23247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (20))){
var state_23179__$1 = state_23179;
var statearr_23182_23248 = state_23179__$1;
(statearr_23182_23248[(2)] = null);

(statearr_23182_23248[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (1))){
var state_23179__$1 = state_23179;
var statearr_23183_23249 = state_23179__$1;
(statearr_23183_23249[(2)] = null);

(statearr_23183_23249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (4))){
var inst_23144 = (state_23179[(7)]);
var inst_23144__$1 = (state_23179[(2)]);
var inst_23145 = (inst_23144__$1 == null);
var state_23179__$1 = (function (){var statearr_23184 = state_23179;
(statearr_23184[(7)] = inst_23144__$1);

return statearr_23184;
})();
if(cljs.core.truth_(inst_23145)){
var statearr_23185_23250 = state_23179__$1;
(statearr_23185_23250[(1)] = (5));

} else {
var statearr_23186_23251 = state_23179__$1;
(statearr_23186_23251[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (15))){
var inst_23157 = (state_23179[(8)]);
var state_23179__$1 = state_23179;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23179__$1,(18),to,inst_23157);
} else {
if((state_val_23180 === (21))){
var inst_23170 = (state_23179[(2)]);
var state_23179__$1 = state_23179;
var statearr_23187_23252 = state_23179__$1;
(statearr_23187_23252[(2)] = inst_23170);

(statearr_23187_23252[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (13))){
var inst_23172 = (state_23179[(2)]);
var state_23179__$1 = (function (){var statearr_23188 = state_23179;
(statearr_23188[(9)] = inst_23172);

return statearr_23188;
})();
var statearr_23189_23253 = state_23179__$1;
(statearr_23189_23253[(2)] = null);

(statearr_23189_23253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (6))){
var inst_23144 = (state_23179[(7)]);
var state_23179__$1 = state_23179;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23179__$1,(11),inst_23144);
} else {
if((state_val_23180 === (17))){
var inst_23165 = (state_23179[(2)]);
var state_23179__$1 = state_23179;
if(cljs.core.truth_(inst_23165)){
var statearr_23190_23254 = state_23179__$1;
(statearr_23190_23254[(1)] = (19));

} else {
var statearr_23191_23255 = state_23179__$1;
(statearr_23191_23255[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (3))){
var inst_23177 = (state_23179[(2)]);
var state_23179__$1 = state_23179;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23179__$1,inst_23177);
} else {
if((state_val_23180 === (12))){
var inst_23154 = (state_23179[(10)]);
var state_23179__$1 = state_23179;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23179__$1,(14),inst_23154);
} else {
if((state_val_23180 === (2))){
var state_23179__$1 = state_23179;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23179__$1,(4),results);
} else {
if((state_val_23180 === (19))){
var state_23179__$1 = state_23179;
var statearr_23192_23256 = state_23179__$1;
(statearr_23192_23256[(2)] = null);

(statearr_23192_23256[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (11))){
var inst_23154 = (state_23179[(2)]);
var state_23179__$1 = (function (){var statearr_23193 = state_23179;
(statearr_23193[(10)] = inst_23154);

return statearr_23193;
})();
var statearr_23194_23257 = state_23179__$1;
(statearr_23194_23257[(2)] = null);

(statearr_23194_23257[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (9))){
var state_23179__$1 = state_23179;
var statearr_23195_23258 = state_23179__$1;
(statearr_23195_23258[(2)] = null);

(statearr_23195_23258[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (5))){
var state_23179__$1 = state_23179;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23196_23259 = state_23179__$1;
(statearr_23196_23259[(1)] = (8));

} else {
var statearr_23197_23260 = state_23179__$1;
(statearr_23197_23260[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (14))){
var inst_23159 = (state_23179[(11)]);
var inst_23157 = (state_23179[(8)]);
var inst_23157__$1 = (state_23179[(2)]);
var inst_23158 = (inst_23157__$1 == null);
var inst_23159__$1 = cljs.core.not.call(null,inst_23158);
var state_23179__$1 = (function (){var statearr_23198 = state_23179;
(statearr_23198[(11)] = inst_23159__$1);

(statearr_23198[(8)] = inst_23157__$1);

return statearr_23198;
})();
if(inst_23159__$1){
var statearr_23199_23261 = state_23179__$1;
(statearr_23199_23261[(1)] = (15));

} else {
var statearr_23200_23262 = state_23179__$1;
(statearr_23200_23262[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (16))){
var inst_23159 = (state_23179[(11)]);
var state_23179__$1 = state_23179;
var statearr_23201_23263 = state_23179__$1;
(statearr_23201_23263[(2)] = inst_23159);

(statearr_23201_23263[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (10))){
var inst_23151 = (state_23179[(2)]);
var state_23179__$1 = state_23179;
var statearr_23202_23264 = state_23179__$1;
(statearr_23202_23264[(2)] = inst_23151);

(statearr_23202_23264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (18))){
var inst_23162 = (state_23179[(2)]);
var state_23179__$1 = state_23179;
var statearr_23203_23265 = state_23179__$1;
(statearr_23203_23265[(2)] = inst_23162);

(statearr_23203_23265[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (8))){
var inst_23148 = cljs.core.async.close_BANG_.call(null,to);
var state_23179__$1 = state_23179;
var statearr_23204_23266 = state_23179__$1;
(statearr_23204_23266[(2)] = inst_23148);

(statearr_23204_23266[(1)] = (10));


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
});})(c__22662__auto__,jobs,results,process,async))
;
return ((function (switch__22550__auto__,c__22662__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22551__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22551__auto____0 = (function (){
var statearr_23208 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23208[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22551__auto__);

(statearr_23208[(1)] = (1));

return statearr_23208;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22551__auto____1 = (function (state_23179){
while(true){
var ret_value__22552__auto__ = (function (){try{while(true){
var result__22553__auto__ = switch__22550__auto__.call(null,state_23179);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22553__auto__;
}
break;
}
}catch (e23209){if((e23209 instanceof Object)){
var ex__22554__auto__ = e23209;
var statearr_23210_23267 = state_23179;
(statearr_23210_23267[(5)] = ex__22554__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23179);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23209;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23268 = state_23179;
state_23179 = G__23268;
continue;
} else {
return ret_value__22552__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22551__auto__ = function(state_23179){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22551__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22551__auto____1.call(this,state_23179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22551__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22551__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22551__auto__;
})()
;})(switch__22550__auto__,c__22662__auto__,jobs,results,process,async))
})();
var state__22664__auto__ = (function (){var statearr_23211 = f__22663__auto__.call(null);
(statearr_23211[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22662__auto__);

return statearr_23211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22664__auto__);
});})(c__22662__auto__,jobs,results,process,async))
);

return c__22662__auto__;
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
var args23269 = [];
var len__17913__auto___23272 = arguments.length;
var i__17914__auto___23273 = (0);
while(true){
if((i__17914__auto___23273 < len__17913__auto___23272)){
args23269.push((arguments[i__17914__auto___23273]));

var G__23274 = (i__17914__auto___23273 + (1));
i__17914__auto___23273 = G__23274;
continue;
} else {
}
break;
}

var G__23271 = args23269.length;
switch (G__23271) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23269.length)].join('')));

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
var args23276 = [];
var len__17913__auto___23279 = arguments.length;
var i__17914__auto___23280 = (0);
while(true){
if((i__17914__auto___23280 < len__17913__auto___23279)){
args23276.push((arguments[i__17914__auto___23280]));

var G__23281 = (i__17914__auto___23280 + (1));
i__17914__auto___23280 = G__23281;
continue;
} else {
}
break;
}

var G__23278 = args23276.length;
switch (G__23278) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23276.length)].join('')));

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
var args23283 = [];
var len__17913__auto___23336 = arguments.length;
var i__17914__auto___23337 = (0);
while(true){
if((i__17914__auto___23337 < len__17913__auto___23336)){
args23283.push((arguments[i__17914__auto___23337]));

var G__23338 = (i__17914__auto___23337 + (1));
i__17914__auto___23337 = G__23338;
continue;
} else {
}
break;
}

var G__23285 = args23283.length;
switch (G__23285) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23283.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22662__auto___23340 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22662__auto___23340,tc,fc){
return (function (){
var f__22663__auto__ = (function (){var switch__22550__auto__ = ((function (c__22662__auto___23340,tc,fc){
return (function (state_23311){
var state_val_23312 = (state_23311[(1)]);
if((state_val_23312 === (7))){
var inst_23307 = (state_23311[(2)]);
var state_23311__$1 = state_23311;
var statearr_23313_23341 = state_23311__$1;
(statearr_23313_23341[(2)] = inst_23307);

(statearr_23313_23341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23312 === (1))){
var state_23311__$1 = state_23311;
var statearr_23314_23342 = state_23311__$1;
(statearr_23314_23342[(2)] = null);

(statearr_23314_23342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23312 === (4))){
var inst_23288 = (state_23311[(7)]);
var inst_23288__$1 = (state_23311[(2)]);
var inst_23289 = (inst_23288__$1 == null);
var state_23311__$1 = (function (){var statearr_23315 = state_23311;
(statearr_23315[(7)] = inst_23288__$1);

return statearr_23315;
})();
if(cljs.core.truth_(inst_23289)){
var statearr_23316_23343 = state_23311__$1;
(statearr_23316_23343[(1)] = (5));

} else {
var statearr_23317_23344 = state_23311__$1;
(statearr_23317_23344[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23312 === (13))){
var state_23311__$1 = state_23311;
var statearr_23318_23345 = state_23311__$1;
(statearr_23318_23345[(2)] = null);

(statearr_23318_23345[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23312 === (6))){
var inst_23288 = (state_23311[(7)]);
var inst_23294 = p.call(null,inst_23288);
var state_23311__$1 = state_23311;
if(cljs.core.truth_(inst_23294)){
var statearr_23319_23346 = state_23311__$1;
(statearr_23319_23346[(1)] = (9));

} else {
var statearr_23320_23347 = state_23311__$1;
(statearr_23320_23347[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23312 === (3))){
var inst_23309 = (state_23311[(2)]);
var state_23311__$1 = state_23311;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23311__$1,inst_23309);
} else {
if((state_val_23312 === (12))){
var state_23311__$1 = state_23311;
var statearr_23321_23348 = state_23311__$1;
(statearr_23321_23348[(2)] = null);

(statearr_23321_23348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23312 === (2))){
var state_23311__$1 = state_23311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23311__$1,(4),ch);
} else {
if((state_val_23312 === (11))){
var inst_23288 = (state_23311[(7)]);
var inst_23298 = (state_23311[(2)]);
var state_23311__$1 = state_23311;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23311__$1,(8),inst_23298,inst_23288);
} else {
if((state_val_23312 === (9))){
var state_23311__$1 = state_23311;
var statearr_23322_23349 = state_23311__$1;
(statearr_23322_23349[(2)] = tc);

(statearr_23322_23349[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23312 === (5))){
var inst_23291 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23292 = cljs.core.async.close_BANG_.call(null,fc);
var state_23311__$1 = (function (){var statearr_23323 = state_23311;
(statearr_23323[(8)] = inst_23291);

return statearr_23323;
})();
var statearr_23324_23350 = state_23311__$1;
(statearr_23324_23350[(2)] = inst_23292);

(statearr_23324_23350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23312 === (14))){
var inst_23305 = (state_23311[(2)]);
var state_23311__$1 = state_23311;
var statearr_23325_23351 = state_23311__$1;
(statearr_23325_23351[(2)] = inst_23305);

(statearr_23325_23351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23312 === (10))){
var state_23311__$1 = state_23311;
var statearr_23326_23352 = state_23311__$1;
(statearr_23326_23352[(2)] = fc);

(statearr_23326_23352[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23312 === (8))){
var inst_23300 = (state_23311[(2)]);
var state_23311__$1 = state_23311;
if(cljs.core.truth_(inst_23300)){
var statearr_23327_23353 = state_23311__$1;
(statearr_23327_23353[(1)] = (12));

} else {
var statearr_23328_23354 = state_23311__$1;
(statearr_23328_23354[(1)] = (13));

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
});})(c__22662__auto___23340,tc,fc))
;
return ((function (switch__22550__auto__,c__22662__auto___23340,tc,fc){
return (function() {
var cljs$core$async$state_machine__22551__auto__ = null;
var cljs$core$async$state_machine__22551__auto____0 = (function (){
var statearr_23332 = [null,null,null,null,null,null,null,null,null];
(statearr_23332[(0)] = cljs$core$async$state_machine__22551__auto__);

(statearr_23332[(1)] = (1));

return statearr_23332;
});
var cljs$core$async$state_machine__22551__auto____1 = (function (state_23311){
while(true){
var ret_value__22552__auto__ = (function (){try{while(true){
var result__22553__auto__ = switch__22550__auto__.call(null,state_23311);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22553__auto__;
}
break;
}
}catch (e23333){if((e23333 instanceof Object)){
var ex__22554__auto__ = e23333;
var statearr_23334_23355 = state_23311;
(statearr_23334_23355[(5)] = ex__22554__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23356 = state_23311;
state_23311 = G__23356;
continue;
} else {
return ret_value__22552__auto__;
}
break;
}
});
cljs$core$async$state_machine__22551__auto__ = function(state_23311){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22551__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22551__auto____1.call(this,state_23311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22551__auto____0;
cljs$core$async$state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22551__auto____1;
return cljs$core$async$state_machine__22551__auto__;
})()
;})(switch__22550__auto__,c__22662__auto___23340,tc,fc))
})();
var state__22664__auto__ = (function (){var statearr_23335 = f__22663__auto__.call(null);
(statearr_23335[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22662__auto___23340);

return statearr_23335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22664__auto__);
});})(c__22662__auto___23340,tc,fc))
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
var c__22662__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22662__auto__){
return (function (){
var f__22663__auto__ = (function (){var switch__22550__auto__ = ((function (c__22662__auto__){
return (function (state_23420){
var state_val_23421 = (state_23420[(1)]);
if((state_val_23421 === (7))){
var inst_23416 = (state_23420[(2)]);
var state_23420__$1 = state_23420;
var statearr_23422_23443 = state_23420__$1;
(statearr_23422_23443[(2)] = inst_23416);

(statearr_23422_23443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (1))){
var inst_23400 = init;
var state_23420__$1 = (function (){var statearr_23423 = state_23420;
(statearr_23423[(7)] = inst_23400);

return statearr_23423;
})();
var statearr_23424_23444 = state_23420__$1;
(statearr_23424_23444[(2)] = null);

(statearr_23424_23444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (4))){
var inst_23403 = (state_23420[(8)]);
var inst_23403__$1 = (state_23420[(2)]);
var inst_23404 = (inst_23403__$1 == null);
var state_23420__$1 = (function (){var statearr_23425 = state_23420;
(statearr_23425[(8)] = inst_23403__$1);

return statearr_23425;
})();
if(cljs.core.truth_(inst_23404)){
var statearr_23426_23445 = state_23420__$1;
(statearr_23426_23445[(1)] = (5));

} else {
var statearr_23427_23446 = state_23420__$1;
(statearr_23427_23446[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (6))){
var inst_23403 = (state_23420[(8)]);
var inst_23400 = (state_23420[(7)]);
var inst_23407 = (state_23420[(9)]);
var inst_23407__$1 = f.call(null,inst_23400,inst_23403);
var inst_23408 = cljs.core.reduced_QMARK_.call(null,inst_23407__$1);
var state_23420__$1 = (function (){var statearr_23428 = state_23420;
(statearr_23428[(9)] = inst_23407__$1);

return statearr_23428;
})();
if(inst_23408){
var statearr_23429_23447 = state_23420__$1;
(statearr_23429_23447[(1)] = (8));

} else {
var statearr_23430_23448 = state_23420__$1;
(statearr_23430_23448[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (3))){
var inst_23418 = (state_23420[(2)]);
var state_23420__$1 = state_23420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23420__$1,inst_23418);
} else {
if((state_val_23421 === (2))){
var state_23420__$1 = state_23420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23420__$1,(4),ch);
} else {
if((state_val_23421 === (9))){
var inst_23407 = (state_23420[(9)]);
var inst_23400 = inst_23407;
var state_23420__$1 = (function (){var statearr_23431 = state_23420;
(statearr_23431[(7)] = inst_23400);

return statearr_23431;
})();
var statearr_23432_23449 = state_23420__$1;
(statearr_23432_23449[(2)] = null);

(statearr_23432_23449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (5))){
var inst_23400 = (state_23420[(7)]);
var state_23420__$1 = state_23420;
var statearr_23433_23450 = state_23420__$1;
(statearr_23433_23450[(2)] = inst_23400);

(statearr_23433_23450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (10))){
var inst_23414 = (state_23420[(2)]);
var state_23420__$1 = state_23420;
var statearr_23434_23451 = state_23420__$1;
(statearr_23434_23451[(2)] = inst_23414);

(statearr_23434_23451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (8))){
var inst_23407 = (state_23420[(9)]);
var inst_23410 = cljs.core.deref.call(null,inst_23407);
var state_23420__$1 = state_23420;
var statearr_23435_23452 = state_23420__$1;
(statearr_23435_23452[(2)] = inst_23410);

(statearr_23435_23452[(1)] = (10));


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
});})(c__22662__auto__))
;
return ((function (switch__22550__auto__,c__22662__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22551__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22551__auto____0 = (function (){
var statearr_23439 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23439[(0)] = cljs$core$async$reduce_$_state_machine__22551__auto__);

(statearr_23439[(1)] = (1));

return statearr_23439;
});
var cljs$core$async$reduce_$_state_machine__22551__auto____1 = (function (state_23420){
while(true){
var ret_value__22552__auto__ = (function (){try{while(true){
var result__22553__auto__ = switch__22550__auto__.call(null,state_23420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22553__auto__;
}
break;
}
}catch (e23440){if((e23440 instanceof Object)){
var ex__22554__auto__ = e23440;
var statearr_23441_23453 = state_23420;
(statearr_23441_23453[(5)] = ex__22554__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23440;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23454 = state_23420;
state_23420 = G__23454;
continue;
} else {
return ret_value__22552__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22551__auto__ = function(state_23420){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22551__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22551__auto____1.call(this,state_23420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22551__auto____0;
cljs$core$async$reduce_$_state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22551__auto____1;
return cljs$core$async$reduce_$_state_machine__22551__auto__;
})()
;})(switch__22550__auto__,c__22662__auto__))
})();
var state__22664__auto__ = (function (){var statearr_23442 = f__22663__auto__.call(null);
(statearr_23442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22662__auto__);

return statearr_23442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22664__auto__);
});})(c__22662__auto__))
);

return c__22662__auto__;
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
var args23455 = [];
var len__17913__auto___23507 = arguments.length;
var i__17914__auto___23508 = (0);
while(true){
if((i__17914__auto___23508 < len__17913__auto___23507)){
args23455.push((arguments[i__17914__auto___23508]));

var G__23509 = (i__17914__auto___23508 + (1));
i__17914__auto___23508 = G__23509;
continue;
} else {
}
break;
}

var G__23457 = args23455.length;
switch (G__23457) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23455.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22662__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22662__auto__){
return (function (){
var f__22663__auto__ = (function (){var switch__22550__auto__ = ((function (c__22662__auto__){
return (function (state_23482){
var state_val_23483 = (state_23482[(1)]);
if((state_val_23483 === (7))){
var inst_23464 = (state_23482[(2)]);
var state_23482__$1 = state_23482;
var statearr_23484_23511 = state_23482__$1;
(statearr_23484_23511[(2)] = inst_23464);

(statearr_23484_23511[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23483 === (1))){
var inst_23458 = cljs.core.seq.call(null,coll);
var inst_23459 = inst_23458;
var state_23482__$1 = (function (){var statearr_23485 = state_23482;
(statearr_23485[(7)] = inst_23459);

return statearr_23485;
})();
var statearr_23486_23512 = state_23482__$1;
(statearr_23486_23512[(2)] = null);

(statearr_23486_23512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23483 === (4))){
var inst_23459 = (state_23482[(7)]);
var inst_23462 = cljs.core.first.call(null,inst_23459);
var state_23482__$1 = state_23482;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23482__$1,(7),ch,inst_23462);
} else {
if((state_val_23483 === (13))){
var inst_23476 = (state_23482[(2)]);
var state_23482__$1 = state_23482;
var statearr_23487_23513 = state_23482__$1;
(statearr_23487_23513[(2)] = inst_23476);

(statearr_23487_23513[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23483 === (6))){
var inst_23467 = (state_23482[(2)]);
var state_23482__$1 = state_23482;
if(cljs.core.truth_(inst_23467)){
var statearr_23488_23514 = state_23482__$1;
(statearr_23488_23514[(1)] = (8));

} else {
var statearr_23489_23515 = state_23482__$1;
(statearr_23489_23515[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23483 === (3))){
var inst_23480 = (state_23482[(2)]);
var state_23482__$1 = state_23482;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23482__$1,inst_23480);
} else {
if((state_val_23483 === (12))){
var state_23482__$1 = state_23482;
var statearr_23490_23516 = state_23482__$1;
(statearr_23490_23516[(2)] = null);

(statearr_23490_23516[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23483 === (2))){
var inst_23459 = (state_23482[(7)]);
var state_23482__$1 = state_23482;
if(cljs.core.truth_(inst_23459)){
var statearr_23491_23517 = state_23482__$1;
(statearr_23491_23517[(1)] = (4));

} else {
var statearr_23492_23518 = state_23482__$1;
(statearr_23492_23518[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23483 === (11))){
var inst_23473 = cljs.core.async.close_BANG_.call(null,ch);
var state_23482__$1 = state_23482;
var statearr_23493_23519 = state_23482__$1;
(statearr_23493_23519[(2)] = inst_23473);

(statearr_23493_23519[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23483 === (9))){
var state_23482__$1 = state_23482;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23494_23520 = state_23482__$1;
(statearr_23494_23520[(1)] = (11));

} else {
var statearr_23495_23521 = state_23482__$1;
(statearr_23495_23521[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23483 === (5))){
var inst_23459 = (state_23482[(7)]);
var state_23482__$1 = state_23482;
var statearr_23496_23522 = state_23482__$1;
(statearr_23496_23522[(2)] = inst_23459);

(statearr_23496_23522[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23483 === (10))){
var inst_23478 = (state_23482[(2)]);
var state_23482__$1 = state_23482;
var statearr_23497_23523 = state_23482__$1;
(statearr_23497_23523[(2)] = inst_23478);

(statearr_23497_23523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23483 === (8))){
var inst_23459 = (state_23482[(7)]);
var inst_23469 = cljs.core.next.call(null,inst_23459);
var inst_23459__$1 = inst_23469;
var state_23482__$1 = (function (){var statearr_23498 = state_23482;
(statearr_23498[(7)] = inst_23459__$1);

return statearr_23498;
})();
var statearr_23499_23524 = state_23482__$1;
(statearr_23499_23524[(2)] = null);

(statearr_23499_23524[(1)] = (2));


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
});})(c__22662__auto__))
;
return ((function (switch__22550__auto__,c__22662__auto__){
return (function() {
var cljs$core$async$state_machine__22551__auto__ = null;
var cljs$core$async$state_machine__22551__auto____0 = (function (){
var statearr_23503 = [null,null,null,null,null,null,null,null];
(statearr_23503[(0)] = cljs$core$async$state_machine__22551__auto__);

(statearr_23503[(1)] = (1));

return statearr_23503;
});
var cljs$core$async$state_machine__22551__auto____1 = (function (state_23482){
while(true){
var ret_value__22552__auto__ = (function (){try{while(true){
var result__22553__auto__ = switch__22550__auto__.call(null,state_23482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22553__auto__;
}
break;
}
}catch (e23504){if((e23504 instanceof Object)){
var ex__22554__auto__ = e23504;
var statearr_23505_23525 = state_23482;
(statearr_23505_23525[(5)] = ex__22554__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23504;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23526 = state_23482;
state_23482 = G__23526;
continue;
} else {
return ret_value__22552__auto__;
}
break;
}
});
cljs$core$async$state_machine__22551__auto__ = function(state_23482){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22551__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22551__auto____1.call(this,state_23482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22551__auto____0;
cljs$core$async$state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22551__auto____1;
return cljs$core$async$state_machine__22551__auto__;
})()
;})(switch__22550__auto__,c__22662__auto__))
})();
var state__22664__auto__ = (function (){var statearr_23506 = f__22663__auto__.call(null);
(statearr_23506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22662__auto__);

return statearr_23506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22664__auto__);
});})(c__22662__auto__))
);

return c__22662__auto__;
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
var x__17510__auto__ = (((_ == null))?null:_);
var m__17511__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17510__auto__)]);
if(!((m__17511__auto__ == null))){
return m__17511__auto__.call(null,_);
} else {
var m__17511__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17511__auto____$1 == null))){
return m__17511__auto____$1.call(null,_);
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
var x__17510__auto__ = (((m == null))?null:m);
var m__17511__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17510__auto__)]);
if(!((m__17511__auto__ == null))){
return m__17511__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17511__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17511__auto____$1 == null))){
return m__17511__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__17510__auto__ = (((m == null))?null:m);
var m__17511__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17510__auto__)]);
if(!((m__17511__auto__ == null))){
return m__17511__auto__.call(null,m,ch);
} else {
var m__17511__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17511__auto____$1 == null))){
return m__17511__auto____$1.call(null,m,ch);
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
var x__17510__auto__ = (((m == null))?null:m);
var m__17511__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17510__auto__)]);
if(!((m__17511__auto__ == null))){
return m__17511__auto__.call(null,m);
} else {
var m__17511__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17511__auto____$1 == null))){
return m__17511__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async23748 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23748 = (function (mult,ch,cs,meta23749){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta23749 = meta23749;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23750,meta23749__$1){
var self__ = this;
var _23750__$1 = this;
return (new cljs.core.async.t_cljs$core$async23748(self__.mult,self__.ch,self__.cs,meta23749__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23748.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23750){
var self__ = this;
var _23750__$1 = this;
return self__.meta23749;
});})(cs))
;

cljs.core.async.t_cljs$core$async23748.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23748.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23748.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async23748.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23748.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23748.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23748.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23749","meta23749",1380684322,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23748.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23748.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23748";

cljs.core.async.t_cljs$core$async23748.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17453__auto__,writer__17454__auto__,opt__17455__auto__){
return cljs.core._write.call(null,writer__17454__auto__,"cljs.core.async/t_cljs$core$async23748");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async23748 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23748(mult__$1,ch__$1,cs__$1,meta23749){
return (new cljs.core.async.t_cljs$core$async23748(mult__$1,ch__$1,cs__$1,meta23749));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23748(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__22662__auto___23969 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22662__auto___23969,cs,m,dchan,dctr,done){
return (function (){
var f__22663__auto__ = (function (){var switch__22550__auto__ = ((function (c__22662__auto___23969,cs,m,dchan,dctr,done){
return (function (state_23881){
var state_val_23882 = (state_23881[(1)]);
if((state_val_23882 === (7))){
var inst_23877 = (state_23881[(2)]);
var state_23881__$1 = state_23881;
var statearr_23883_23970 = state_23881__$1;
(statearr_23883_23970[(2)] = inst_23877);

(statearr_23883_23970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23882 === (20))){
var inst_23782 = (state_23881[(7)]);
var inst_23792 = cljs.core.first.call(null,inst_23782);
var inst_23793 = cljs.core.nth.call(null,inst_23792,(0),null);
var inst_23794 = cljs.core.nth.call(null,inst_23792,(1),null);
var state_23881__$1 = (function (){var statearr_23884 = state_23881;
(statearr_23884[(8)] = inst_23793);

return statearr_23884;
})();
if(cljs.core.truth_(inst_23794)){
var statearr_23885_23971 = state_23881__$1;
(statearr_23885_23971[(1)] = (22));

} else {
var statearr_23886_23972 = state_23881__$1;
(statearr_23886_23972[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23882 === (27))){
var inst_23824 = (state_23881[(9)]);
var inst_23822 = (state_23881[(10)]);
var inst_23829 = (state_23881[(11)]);
var inst_23753 = (state_23881[(12)]);
var inst_23829__$1 = cljs.core._nth.call(null,inst_23822,inst_23824);
var inst_23830 = cljs.core.async.put_BANG_.call(null,inst_23829__$1,inst_23753,done);
var state_23881__$1 = (function (){var statearr_23887 = state_23881;
(statearr_23887[(11)] = inst_23829__$1);

return statearr_23887;
})();
if(cljs.core.truth_(inst_23830)){
var statearr_23888_23973 = state_23881__$1;
(statearr_23888_23973[(1)] = (30));

} else {
var statearr_23889_23974 = state_23881__$1;
(statearr_23889_23974[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23882 === (1))){
var state_23881__$1 = state_23881;
var statearr_23890_23975 = state_23881__$1;
(statearr_23890_23975[(2)] = null);

(statearr_23890_23975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23882 === (24))){
var inst_23782 = (state_23881[(7)]);
var inst_23799 = (state_23881[(2)]);
var inst_23800 = cljs.core.next.call(null,inst_23782);
var inst_23762 = inst_23800;
var inst_23763 = null;
var inst_23764 = (0);
var inst_23765 = (0);
var state_23881__$1 = (function (){var statearr_23891 = state_23881;
(statearr_23891[(13)] = inst_23799);

(statearr_23891[(14)] = inst_23763);

(statearr_23891[(15)] = inst_23765);

(statearr_23891[(16)] = inst_23764);

(statearr_23891[(17)] = inst_23762);

return statearr_23891;
})();
var statearr_23892_23976 = state_23881__$1;
(statearr_23892_23976[(2)] = null);

(statearr_23892_23976[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23882 === (39))){
var state_23881__$1 = state_23881;
var statearr_23896_23977 = state_23881__$1;
(statearr_23896_23977[(2)] = null);

(statearr_23896_23977[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23882 === (4))){
var inst_23753 = (state_23881[(12)]);
var inst_23753__$1 = (state_23881[(2)]);
var inst_23754 = (inst_23753__$1 == null);
var state_23881__$1 = (function (){var statearr_23897 = state_23881;
(statearr_23897[(12)] = inst_23753__$1);

return statearr_23897;
})();
if(cljs.core.truth_(inst_23754)){
var statearr_23898_23978 = state_23881__$1;
(statearr_23898_23978[(1)] = (5));

} else {
var statearr_23899_23979 = state_23881__$1;
(statearr_23899_23979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23882 === (15))){
var inst_23763 = (state_23881[(14)]);
var inst_23765 = (state_23881[(15)]);
var inst_23764 = (state_23881[(16)]);
var inst_23762 = (state_23881[(17)]);
var inst_23778 = (state_23881[(2)]);
var inst_23779 = (inst_23765 + (1));
var tmp23893 = inst_23763;
var tmp23894 = inst_23764;
var tmp23895 = inst_23762;
var inst_23762__$1 = tmp23895;
var inst_23763__$1 = tmp23893;
var inst_23764__$1 = tmp23894;
var inst_23765__$1 = inst_23779;
var state_23881__$1 = (function (){var statearr_23900 = state_23881;
(statearr_23900[(14)] = inst_23763__$1);

(statearr_23900[(18)] = inst_23778);

(statearr_23900[(15)] = inst_23765__$1);

(statearr_23900[(16)] = inst_23764__$1);

(statearr_23900[(17)] = inst_23762__$1);

return statearr_23900;
})();
var statearr_23901_23980 = state_23881__$1;
(statearr_23901_23980[(2)] = null);

(statearr_23901_23980[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23882 === (21))){
var inst_23803 = (state_23881[(2)]);
var state_23881__$1 = state_23881;
var statearr_23905_23981 = state_23881__$1;
(statearr_23905_23981[(2)] = inst_23803);

(statearr_23905_23981[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23882 === (31))){
var inst_23829 = (state_23881[(11)]);
var inst_23833 = done.call(null,null);
var inst_23834 = cljs.core.async.untap_STAR_.call(null,m,inst_23829);
var state_23881__$1 = (function (){var statearr_23906 = state_23881;
(statearr_23906[(19)] = inst_23833);

return statearr_23906;
})();
var statearr_23907_23982 = state_23881__$1;
(statearr_23907_23982[(2)] = inst_23834);

(statearr_23907_23982[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23882 === (32))){
var inst_23824 = (state_23881[(9)]);
var inst_23822 = (state_23881[(10)]);
var inst_23821 = (state_23881[(20)]);
var inst_23823 = (state_23881[(21)]);
var inst_23836 = (state_23881[(2)]);
var inst_23837 = (inst_23824 + (1));
var tmp23902 = inst_23822;
var tmp23903 = inst_23821;
var tmp23904 = inst_23823;
var inst_23821__$1 = tmp23903;
var inst_23822__$1 = tmp23902;
var inst_23823__$1 = tmp23904;
var inst_23824__$1 = inst_23837;
var state_23881__$1 = (function (){var statearr_23908 = state_23881;
(statearr_23908[(9)] = inst_23824__$1);

(statearr_23908[(10)] = inst_23822__$1);

(statearr_23908[(22)] = inst_23836);

(statearr_23908[(20)] = inst_23821__$1);

(statearr_23908[(21)] = inst_23823__$1);

return statearr_23908;
})();
var statearr_23909_23983 = state_23881__$1;
(statearr_23909_23983[(2)] = null);

(statearr_23909_23983[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23882 === (40))){
var inst_23849 = (state_23881[(23)]);
var inst_23853 = done.call(null,null);
var inst_23854 = cljs.core.async.untap_STAR_.call(null,m,inst_23849);
var state_23881__$1 = (function (){var statearr_23910 = state_23881;
(statearr_23910[(24)] = inst_23853);

return statearr_23910;
})();
var statearr_23911_23984 = state_23881__$1;
(statearr_23911_23984[(2)] = inst_23854);

(statearr_23911_23984[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23882 === (33))){
var inst_23840 = (state_23881[(25)]);
var inst_23842 = cljs.core.chunked_seq_QMARK_.call(null,inst_23840);
var state_23881__$1 = state_23881;
if(inst_23842){
var statearr_23912_23985 = state_23881__$1;
(statearr_23912_23985[(1)] = (36));

} else {
var statearr_23913_23986 = state_23881__$1;
(statearr_23913_23986[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23882 === (13))){
var inst_23772 = (state_23881[(26)]);
var inst_23775 = cljs.core.async.close_BANG_.call(null,inst_23772);
var state_23881__$1 = state_23881;
var statearr_23914_23987 = state_23881__$1;
(statearr_23914_23987[(2)] = inst_23775);

(statearr_23914_23987[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23882 === (22))){
var inst_23793 = (state_23881[(8)]);
var inst_23796 = cljs.core.async.close_BANG_.call(null,inst_23793);
var state_23881__$1 = state_23881;
var statearr_23915_23988 = state_23881__$1;
(statearr_23915_23988[(2)] = inst_23796);

(statearr_23915_23988[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23882 === (36))){
var inst_23840 = (state_23881[(25)]);
var inst_23844 = cljs.core.chunk_first.call(null,inst_23840);
var inst_23845 = cljs.core.chunk_rest.call(null,inst_23840);
var inst_23846 = cljs.core.count.call(null,inst_23844);
var inst_23821 = inst_23845;
var inst_23822 = inst_23844;
var inst_23823 = inst_23846;
var inst_23824 = (0);
var state_23881__$1 = (function (){var statearr_23916 = state_23881;
(statearr_23916[(9)] = inst_23824);

(statearr_23916[(10)] = inst_23822);

(statearr_23916[(20)] = inst_23821);

(statearr_23916[(21)] = inst_23823);

return statearr_23916;
})();
var statearr_23917_23989 = state_23881__$1;
(statearr_23917_23989[(2)] = null);

(statearr_23917_23989[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23882 === (41))){
var inst_23840 = (state_23881[(25)]);
var inst_23856 = (state_23881[(2)]);
var inst_23857 = cljs.core.next.call(null,inst_23840);
var inst_23821 = inst_23857;
var inst_23822 = null;
var inst_23823 = (0);
var inst_23824 = (0);
var state_23881__$1 = (function (){var statearr_23918 = state_23881;
(statearr_23918[(9)] = inst_23824);

(statearr_23918[(10)] = inst_23822);

(statearr_23918[(27)] = inst_23856);

(statearr_23918[(20)] = inst_23821);

(statearr_23918[(21)] = inst_23823);

return statearr_23918;
})();
var statearr_23919_23990 = state_23881__$1;
(statearr_23919_23990[(2)] = null);

(statearr_23919_23990[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23882 === (43))){
var state_23881__$1 = state_23881;
var statearr_23920_23991 = state_23881__$1;
(statearr_23920_23991[(2)] = null);

(statearr_23920_23991[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23882 === (29))){
var inst_23865 = (state_23881[(2)]);
var state_23881__$1 = state_23881;
var statearr_23921_23992 = state_23881__$1;
(statearr_23921_23992[(2)] = inst_23865);

(statearr_23921_23992[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23882 === (44))){
var inst_23874 = (state_23881[(2)]);
var state_23881__$1 = (function (){var statearr_23922 = state_23881;
(statearr_23922[(28)] = inst_23874);

return statearr_23922;
})();
var statearr_23923_23993 = state_23881__$1;
(statearr_23923_23993[(2)] = null);

(statearr_23923_23993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23882 === (6))){
var inst_23813 = (state_23881[(29)]);
var inst_23812 = cljs.core.deref.call(null,cs);
var inst_23813__$1 = cljs.core.keys.call(null,inst_23812);
var inst_23814 = cljs.core.count.call(null,inst_23813__$1);
var inst_23815 = cljs.core.reset_BANG_.call(null,dctr,inst_23814);
var inst_23820 = cljs.core.seq.call(null,inst_23813__$1);
var inst_23821 = inst_23820;
var inst_23822 = null;
var inst_23823 = (0);
var inst_23824 = (0);
var state_23881__$1 = (function (){var statearr_23924 = state_23881;
(statearr_23924[(29)] = inst_23813__$1);

(statearr_23924[(9)] = inst_23824);

(statearr_23924[(10)] = inst_23822);

(statearr_23924[(30)] = inst_23815);

(statearr_23924[(20)] = inst_23821);

(statearr_23924[(21)] = inst_23823);

return statearr_23924;
})();
var statearr_23925_23994 = state_23881__$1;
(statearr_23925_23994[(2)] = null);

(statearr_23925_23994[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23882 === (28))){
var inst_23840 = (state_23881[(25)]);
var inst_23821 = (state_23881[(20)]);
var inst_23840__$1 = cljs.core.seq.call(null,inst_23821);
var state_23881__$1 = (function (){var statearr_23926 = state_23881;
(statearr_23926[(25)] = inst_23840__$1);

return statearr_23926;
})();
if(inst_23840__$1){
var statearr_23927_23995 = state_23881__$1;
(statearr_23927_23995[(1)] = (33));

} else {
var statearr_23928_23996 = state_23881__$1;
(statearr_23928_23996[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23882 === (25))){
var inst_23824 = (state_23881[(9)]);
var inst_23823 = (state_23881[(21)]);
var inst_23826 = (inst_23824 < inst_23823);
var inst_23827 = inst_23826;
var state_23881__$1 = state_23881;
if(cljs.core.truth_(inst_23827)){
var statearr_23929_23997 = state_23881__$1;
(statearr_23929_23997[(1)] = (27));

} else {
var statearr_23930_23998 = state_23881__$1;
(statearr_23930_23998[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23882 === (34))){
var state_23881__$1 = state_23881;
var statearr_23931_23999 = state_23881__$1;
(statearr_23931_23999[(2)] = null);

(statearr_23931_23999[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23882 === (17))){
var state_23881__$1 = state_23881;
var statearr_23932_24000 = state_23881__$1;
(statearr_23932_24000[(2)] = null);

(statearr_23932_24000[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23882 === (3))){
var inst_23879 = (state_23881[(2)]);
var state_23881__$1 = state_23881;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23881__$1,inst_23879);
} else {
if((state_val_23882 === (12))){
var inst_23808 = (state_23881[(2)]);
var state_23881__$1 = state_23881;
var statearr_23933_24001 = state_23881__$1;
(statearr_23933_24001[(2)] = inst_23808);

(statearr_23933_24001[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23882 === (2))){
var state_23881__$1 = state_23881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23881__$1,(4),ch);
} else {
if((state_val_23882 === (23))){
var state_23881__$1 = state_23881;
var statearr_23934_24002 = state_23881__$1;
(statearr_23934_24002[(2)] = null);

(statearr_23934_24002[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23882 === (35))){
var inst_23863 = (state_23881[(2)]);
var state_23881__$1 = state_23881;
var statearr_23935_24003 = state_23881__$1;
(statearr_23935_24003[(2)] = inst_23863);

(statearr_23935_24003[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23882 === (19))){
var inst_23782 = (state_23881[(7)]);
var inst_23786 = cljs.core.chunk_first.call(null,inst_23782);
var inst_23787 = cljs.core.chunk_rest.call(null,inst_23782);
var inst_23788 = cljs.core.count.call(null,inst_23786);
var inst_23762 = inst_23787;
var inst_23763 = inst_23786;
var inst_23764 = inst_23788;
var inst_23765 = (0);
var state_23881__$1 = (function (){var statearr_23936 = state_23881;
(statearr_23936[(14)] = inst_23763);

(statearr_23936[(15)] = inst_23765);

(statearr_23936[(16)] = inst_23764);

(statearr_23936[(17)] = inst_23762);

return statearr_23936;
})();
var statearr_23937_24004 = state_23881__$1;
(statearr_23937_24004[(2)] = null);

(statearr_23937_24004[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23882 === (11))){
var inst_23782 = (state_23881[(7)]);
var inst_23762 = (state_23881[(17)]);
var inst_23782__$1 = cljs.core.seq.call(null,inst_23762);
var state_23881__$1 = (function (){var statearr_23938 = state_23881;
(statearr_23938[(7)] = inst_23782__$1);

return statearr_23938;
})();
if(inst_23782__$1){
var statearr_23939_24005 = state_23881__$1;
(statearr_23939_24005[(1)] = (16));

} else {
var statearr_23940_24006 = state_23881__$1;
(statearr_23940_24006[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23882 === (9))){
var inst_23810 = (state_23881[(2)]);
var state_23881__$1 = state_23881;
var statearr_23941_24007 = state_23881__$1;
(statearr_23941_24007[(2)] = inst_23810);

(statearr_23941_24007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23882 === (5))){
var inst_23760 = cljs.core.deref.call(null,cs);
var inst_23761 = cljs.core.seq.call(null,inst_23760);
var inst_23762 = inst_23761;
var inst_23763 = null;
var inst_23764 = (0);
var inst_23765 = (0);
var state_23881__$1 = (function (){var statearr_23942 = state_23881;
(statearr_23942[(14)] = inst_23763);

(statearr_23942[(15)] = inst_23765);

(statearr_23942[(16)] = inst_23764);

(statearr_23942[(17)] = inst_23762);

return statearr_23942;
})();
var statearr_23943_24008 = state_23881__$1;
(statearr_23943_24008[(2)] = null);

(statearr_23943_24008[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23882 === (14))){
var state_23881__$1 = state_23881;
var statearr_23944_24009 = state_23881__$1;
(statearr_23944_24009[(2)] = null);

(statearr_23944_24009[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23882 === (45))){
var inst_23871 = (state_23881[(2)]);
var state_23881__$1 = state_23881;
var statearr_23945_24010 = state_23881__$1;
(statearr_23945_24010[(2)] = inst_23871);

(statearr_23945_24010[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23882 === (26))){
var inst_23813 = (state_23881[(29)]);
var inst_23867 = (state_23881[(2)]);
var inst_23868 = cljs.core.seq.call(null,inst_23813);
var state_23881__$1 = (function (){var statearr_23946 = state_23881;
(statearr_23946[(31)] = inst_23867);

return statearr_23946;
})();
if(inst_23868){
var statearr_23947_24011 = state_23881__$1;
(statearr_23947_24011[(1)] = (42));

} else {
var statearr_23948_24012 = state_23881__$1;
(statearr_23948_24012[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23882 === (16))){
var inst_23782 = (state_23881[(7)]);
var inst_23784 = cljs.core.chunked_seq_QMARK_.call(null,inst_23782);
var state_23881__$1 = state_23881;
if(inst_23784){
var statearr_23949_24013 = state_23881__$1;
(statearr_23949_24013[(1)] = (19));

} else {
var statearr_23950_24014 = state_23881__$1;
(statearr_23950_24014[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23882 === (38))){
var inst_23860 = (state_23881[(2)]);
var state_23881__$1 = state_23881;
var statearr_23951_24015 = state_23881__$1;
(statearr_23951_24015[(2)] = inst_23860);

(statearr_23951_24015[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23882 === (30))){
var state_23881__$1 = state_23881;
var statearr_23952_24016 = state_23881__$1;
(statearr_23952_24016[(2)] = null);

(statearr_23952_24016[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23882 === (10))){
var inst_23763 = (state_23881[(14)]);
var inst_23765 = (state_23881[(15)]);
var inst_23771 = cljs.core._nth.call(null,inst_23763,inst_23765);
var inst_23772 = cljs.core.nth.call(null,inst_23771,(0),null);
var inst_23773 = cljs.core.nth.call(null,inst_23771,(1),null);
var state_23881__$1 = (function (){var statearr_23953 = state_23881;
(statearr_23953[(26)] = inst_23772);

return statearr_23953;
})();
if(cljs.core.truth_(inst_23773)){
var statearr_23954_24017 = state_23881__$1;
(statearr_23954_24017[(1)] = (13));

} else {
var statearr_23955_24018 = state_23881__$1;
(statearr_23955_24018[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23882 === (18))){
var inst_23806 = (state_23881[(2)]);
var state_23881__$1 = state_23881;
var statearr_23956_24019 = state_23881__$1;
(statearr_23956_24019[(2)] = inst_23806);

(statearr_23956_24019[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23882 === (42))){
var state_23881__$1 = state_23881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23881__$1,(45),dchan);
} else {
if((state_val_23882 === (37))){
var inst_23840 = (state_23881[(25)]);
var inst_23753 = (state_23881[(12)]);
var inst_23849 = (state_23881[(23)]);
var inst_23849__$1 = cljs.core.first.call(null,inst_23840);
var inst_23850 = cljs.core.async.put_BANG_.call(null,inst_23849__$1,inst_23753,done);
var state_23881__$1 = (function (){var statearr_23957 = state_23881;
(statearr_23957[(23)] = inst_23849__$1);

return statearr_23957;
})();
if(cljs.core.truth_(inst_23850)){
var statearr_23958_24020 = state_23881__$1;
(statearr_23958_24020[(1)] = (39));

} else {
var statearr_23959_24021 = state_23881__$1;
(statearr_23959_24021[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23882 === (8))){
var inst_23765 = (state_23881[(15)]);
var inst_23764 = (state_23881[(16)]);
var inst_23767 = (inst_23765 < inst_23764);
var inst_23768 = inst_23767;
var state_23881__$1 = state_23881;
if(cljs.core.truth_(inst_23768)){
var statearr_23960_24022 = state_23881__$1;
(statearr_23960_24022[(1)] = (10));

} else {
var statearr_23961_24023 = state_23881__$1;
(statearr_23961_24023[(1)] = (11));

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
});})(c__22662__auto___23969,cs,m,dchan,dctr,done))
;
return ((function (switch__22550__auto__,c__22662__auto___23969,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22551__auto__ = null;
var cljs$core$async$mult_$_state_machine__22551__auto____0 = (function (){
var statearr_23965 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23965[(0)] = cljs$core$async$mult_$_state_machine__22551__auto__);

(statearr_23965[(1)] = (1));

return statearr_23965;
});
var cljs$core$async$mult_$_state_machine__22551__auto____1 = (function (state_23881){
while(true){
var ret_value__22552__auto__ = (function (){try{while(true){
var result__22553__auto__ = switch__22550__auto__.call(null,state_23881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22553__auto__;
}
break;
}
}catch (e23966){if((e23966 instanceof Object)){
var ex__22554__auto__ = e23966;
var statearr_23967_24024 = state_23881;
(statearr_23967_24024[(5)] = ex__22554__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24025 = state_23881;
state_23881 = G__24025;
continue;
} else {
return ret_value__22552__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22551__auto__ = function(state_23881){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22551__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22551__auto____1.call(this,state_23881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22551__auto____0;
cljs$core$async$mult_$_state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22551__auto____1;
return cljs$core$async$mult_$_state_machine__22551__auto__;
})()
;})(switch__22550__auto__,c__22662__auto___23969,cs,m,dchan,dctr,done))
})();
var state__22664__auto__ = (function (){var statearr_23968 = f__22663__auto__.call(null);
(statearr_23968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22662__auto___23969);

return statearr_23968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22664__auto__);
});})(c__22662__auto___23969,cs,m,dchan,dctr,done))
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
var args24026 = [];
var len__17913__auto___24029 = arguments.length;
var i__17914__auto___24030 = (0);
while(true){
if((i__17914__auto___24030 < len__17913__auto___24029)){
args24026.push((arguments[i__17914__auto___24030]));

var G__24031 = (i__17914__auto___24030 + (1));
i__17914__auto___24030 = G__24031;
continue;
} else {
}
break;
}

var G__24028 = args24026.length;
switch (G__24028) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24026.length)].join('')));

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
var x__17510__auto__ = (((m == null))?null:m);
var m__17511__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17510__auto__)]);
if(!((m__17511__auto__ == null))){
return m__17511__auto__.call(null,m,ch);
} else {
var m__17511__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17511__auto____$1 == null))){
return m__17511__auto____$1.call(null,m,ch);
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
var x__17510__auto__ = (((m == null))?null:m);
var m__17511__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17510__auto__)]);
if(!((m__17511__auto__ == null))){
return m__17511__auto__.call(null,m,ch);
} else {
var m__17511__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17511__auto____$1 == null))){
return m__17511__auto____$1.call(null,m,ch);
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
var x__17510__auto__ = (((m == null))?null:m);
var m__17511__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17510__auto__)]);
if(!((m__17511__auto__ == null))){
return m__17511__auto__.call(null,m);
} else {
var m__17511__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17511__auto____$1 == null))){
return m__17511__auto____$1.call(null,m);
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
var x__17510__auto__ = (((m == null))?null:m);
var m__17511__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17510__auto__)]);
if(!((m__17511__auto__ == null))){
return m__17511__auto__.call(null,m,state_map);
} else {
var m__17511__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17511__auto____$1 == null))){
return m__17511__auto____$1.call(null,m,state_map);
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
var x__17510__auto__ = (((m == null))?null:m);
var m__17511__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17510__auto__)]);
if(!((m__17511__auto__ == null))){
return m__17511__auto__.call(null,m,mode);
} else {
var m__17511__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17511__auto____$1 == null))){
return m__17511__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17920__auto__ = [];
var len__17913__auto___24043 = arguments.length;
var i__17914__auto___24044 = (0);
while(true){
if((i__17914__auto___24044 < len__17913__auto___24043)){
args__17920__auto__.push((arguments[i__17914__auto___24044]));

var G__24045 = (i__17914__auto___24044 + (1));
i__17914__auto___24044 = G__24045;
continue;
} else {
}
break;
}

var argseq__17921__auto__ = ((((3) < args__17920__auto__.length))?(new cljs.core.IndexedSeq(args__17920__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17921__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24037){
var map__24038 = p__24037;
var map__24038__$1 = ((((!((map__24038 == null)))?((((map__24038.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24038.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24038):map__24038);
var opts = map__24038__$1;
var statearr_24040_24046 = state;
(statearr_24040_24046[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__24038,map__24038__$1,opts){
return (function (val){
var statearr_24041_24047 = state;
(statearr_24041_24047[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24038,map__24038__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_24042_24048 = state;
(statearr_24042_24048[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24033){
var G__24034 = cljs.core.first.call(null,seq24033);
var seq24033__$1 = cljs.core.next.call(null,seq24033);
var G__24035 = cljs.core.first.call(null,seq24033__$1);
var seq24033__$2 = cljs.core.next.call(null,seq24033__$1);
var G__24036 = cljs.core.first.call(null,seq24033__$2);
var seq24033__$3 = cljs.core.next.call(null,seq24033__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24034,G__24035,G__24036,seq24033__$3);
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
if(typeof cljs.core.async.t_cljs$core$async24212 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24212 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24213){
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
this.meta24213 = meta24213;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24214,meta24213__$1){
var self__ = this;
var _24214__$1 = this;
return (new cljs.core.async.t_cljs$core$async24212(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24213__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24212.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24214){
var self__ = this;
var _24214__$1 = this;
return self__.meta24213;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24212.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24212.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24212.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async24212.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24212.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24212.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24212.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24212.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async24212.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24213","meta24213",-1132361434,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24212.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24212.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24212";

cljs.core.async.t_cljs$core$async24212.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17453__auto__,writer__17454__auto__,opt__17455__auto__){
return cljs.core._write.call(null,writer__17454__auto__,"cljs.core.async/t_cljs$core$async24212");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async24212 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24212(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24213){
return (new cljs.core.async.t_cljs$core$async24212(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24213));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24212(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22662__auto___24375 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22662__auto___24375,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22663__auto__ = (function (){var switch__22550__auto__ = ((function (c__22662__auto___24375,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24312){
var state_val_24313 = (state_24312[(1)]);
if((state_val_24313 === (7))){
var inst_24230 = (state_24312[(2)]);
var state_24312__$1 = state_24312;
var statearr_24314_24376 = state_24312__$1;
(statearr_24314_24376[(2)] = inst_24230);

(statearr_24314_24376[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24313 === (20))){
var inst_24242 = (state_24312[(7)]);
var state_24312__$1 = state_24312;
var statearr_24315_24377 = state_24312__$1;
(statearr_24315_24377[(2)] = inst_24242);

(statearr_24315_24377[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24313 === (27))){
var state_24312__$1 = state_24312;
var statearr_24316_24378 = state_24312__$1;
(statearr_24316_24378[(2)] = null);

(statearr_24316_24378[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24313 === (1))){
var inst_24218 = (state_24312[(8)]);
var inst_24218__$1 = calc_state.call(null);
var inst_24220 = (inst_24218__$1 == null);
var inst_24221 = cljs.core.not.call(null,inst_24220);
var state_24312__$1 = (function (){var statearr_24317 = state_24312;
(statearr_24317[(8)] = inst_24218__$1);

return statearr_24317;
})();
if(inst_24221){
var statearr_24318_24379 = state_24312__$1;
(statearr_24318_24379[(1)] = (2));

} else {
var statearr_24319_24380 = state_24312__$1;
(statearr_24319_24380[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24313 === (24))){
var inst_24286 = (state_24312[(9)]);
var inst_24265 = (state_24312[(10)]);
var inst_24272 = (state_24312[(11)]);
var inst_24286__$1 = inst_24265.call(null,inst_24272);
var state_24312__$1 = (function (){var statearr_24320 = state_24312;
(statearr_24320[(9)] = inst_24286__$1);

return statearr_24320;
})();
if(cljs.core.truth_(inst_24286__$1)){
var statearr_24321_24381 = state_24312__$1;
(statearr_24321_24381[(1)] = (29));

} else {
var statearr_24322_24382 = state_24312__$1;
(statearr_24322_24382[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24313 === (4))){
var inst_24233 = (state_24312[(2)]);
var state_24312__$1 = state_24312;
if(cljs.core.truth_(inst_24233)){
var statearr_24323_24383 = state_24312__$1;
(statearr_24323_24383[(1)] = (8));

} else {
var statearr_24324_24384 = state_24312__$1;
(statearr_24324_24384[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24313 === (15))){
var inst_24259 = (state_24312[(2)]);
var state_24312__$1 = state_24312;
if(cljs.core.truth_(inst_24259)){
var statearr_24325_24385 = state_24312__$1;
(statearr_24325_24385[(1)] = (19));

} else {
var statearr_24326_24386 = state_24312__$1;
(statearr_24326_24386[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24313 === (21))){
var inst_24264 = (state_24312[(12)]);
var inst_24264__$1 = (state_24312[(2)]);
var inst_24265 = cljs.core.get.call(null,inst_24264__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24266 = cljs.core.get.call(null,inst_24264__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24267 = cljs.core.get.call(null,inst_24264__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24312__$1 = (function (){var statearr_24327 = state_24312;
(statearr_24327[(12)] = inst_24264__$1);

(statearr_24327[(13)] = inst_24266);

(statearr_24327[(10)] = inst_24265);

return statearr_24327;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24312__$1,(22),inst_24267);
} else {
if((state_val_24313 === (31))){
var inst_24294 = (state_24312[(2)]);
var state_24312__$1 = state_24312;
if(cljs.core.truth_(inst_24294)){
var statearr_24328_24387 = state_24312__$1;
(statearr_24328_24387[(1)] = (32));

} else {
var statearr_24329_24388 = state_24312__$1;
(statearr_24329_24388[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24313 === (32))){
var inst_24271 = (state_24312[(14)]);
var state_24312__$1 = state_24312;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24312__$1,(35),out,inst_24271);
} else {
if((state_val_24313 === (33))){
var inst_24264 = (state_24312[(12)]);
var inst_24242 = inst_24264;
var state_24312__$1 = (function (){var statearr_24330 = state_24312;
(statearr_24330[(7)] = inst_24242);

return statearr_24330;
})();
var statearr_24331_24389 = state_24312__$1;
(statearr_24331_24389[(2)] = null);

(statearr_24331_24389[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24313 === (13))){
var inst_24242 = (state_24312[(7)]);
var inst_24249 = inst_24242.cljs$lang$protocol_mask$partition0$;
var inst_24250 = (inst_24249 & (64));
var inst_24251 = inst_24242.cljs$core$ISeq$;
var inst_24252 = (inst_24250) || (inst_24251);
var state_24312__$1 = state_24312;
if(cljs.core.truth_(inst_24252)){
var statearr_24332_24390 = state_24312__$1;
(statearr_24332_24390[(1)] = (16));

} else {
var statearr_24333_24391 = state_24312__$1;
(statearr_24333_24391[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24313 === (22))){
var inst_24272 = (state_24312[(11)]);
var inst_24271 = (state_24312[(14)]);
var inst_24270 = (state_24312[(2)]);
var inst_24271__$1 = cljs.core.nth.call(null,inst_24270,(0),null);
var inst_24272__$1 = cljs.core.nth.call(null,inst_24270,(1),null);
var inst_24273 = (inst_24271__$1 == null);
var inst_24274 = cljs.core._EQ_.call(null,inst_24272__$1,change);
var inst_24275 = (inst_24273) || (inst_24274);
var state_24312__$1 = (function (){var statearr_24334 = state_24312;
(statearr_24334[(11)] = inst_24272__$1);

(statearr_24334[(14)] = inst_24271__$1);

return statearr_24334;
})();
if(cljs.core.truth_(inst_24275)){
var statearr_24335_24392 = state_24312__$1;
(statearr_24335_24392[(1)] = (23));

} else {
var statearr_24336_24393 = state_24312__$1;
(statearr_24336_24393[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24313 === (36))){
var inst_24264 = (state_24312[(12)]);
var inst_24242 = inst_24264;
var state_24312__$1 = (function (){var statearr_24337 = state_24312;
(statearr_24337[(7)] = inst_24242);

return statearr_24337;
})();
var statearr_24338_24394 = state_24312__$1;
(statearr_24338_24394[(2)] = null);

(statearr_24338_24394[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24313 === (29))){
var inst_24286 = (state_24312[(9)]);
var state_24312__$1 = state_24312;
var statearr_24339_24395 = state_24312__$1;
(statearr_24339_24395[(2)] = inst_24286);

(statearr_24339_24395[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24313 === (6))){
var state_24312__$1 = state_24312;
var statearr_24340_24396 = state_24312__$1;
(statearr_24340_24396[(2)] = false);

(statearr_24340_24396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24313 === (28))){
var inst_24282 = (state_24312[(2)]);
var inst_24283 = calc_state.call(null);
var inst_24242 = inst_24283;
var state_24312__$1 = (function (){var statearr_24341 = state_24312;
(statearr_24341[(15)] = inst_24282);

(statearr_24341[(7)] = inst_24242);

return statearr_24341;
})();
var statearr_24342_24397 = state_24312__$1;
(statearr_24342_24397[(2)] = null);

(statearr_24342_24397[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24313 === (25))){
var inst_24308 = (state_24312[(2)]);
var state_24312__$1 = state_24312;
var statearr_24343_24398 = state_24312__$1;
(statearr_24343_24398[(2)] = inst_24308);

(statearr_24343_24398[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24313 === (34))){
var inst_24306 = (state_24312[(2)]);
var state_24312__$1 = state_24312;
var statearr_24344_24399 = state_24312__$1;
(statearr_24344_24399[(2)] = inst_24306);

(statearr_24344_24399[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24313 === (17))){
var state_24312__$1 = state_24312;
var statearr_24345_24400 = state_24312__$1;
(statearr_24345_24400[(2)] = false);

(statearr_24345_24400[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24313 === (3))){
var state_24312__$1 = state_24312;
var statearr_24346_24401 = state_24312__$1;
(statearr_24346_24401[(2)] = false);

(statearr_24346_24401[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24313 === (12))){
var inst_24310 = (state_24312[(2)]);
var state_24312__$1 = state_24312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24312__$1,inst_24310);
} else {
if((state_val_24313 === (2))){
var inst_24218 = (state_24312[(8)]);
var inst_24223 = inst_24218.cljs$lang$protocol_mask$partition0$;
var inst_24224 = (inst_24223 & (64));
var inst_24225 = inst_24218.cljs$core$ISeq$;
var inst_24226 = (inst_24224) || (inst_24225);
var state_24312__$1 = state_24312;
if(cljs.core.truth_(inst_24226)){
var statearr_24347_24402 = state_24312__$1;
(statearr_24347_24402[(1)] = (5));

} else {
var statearr_24348_24403 = state_24312__$1;
(statearr_24348_24403[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24313 === (23))){
var inst_24271 = (state_24312[(14)]);
var inst_24277 = (inst_24271 == null);
var state_24312__$1 = state_24312;
if(cljs.core.truth_(inst_24277)){
var statearr_24349_24404 = state_24312__$1;
(statearr_24349_24404[(1)] = (26));

} else {
var statearr_24350_24405 = state_24312__$1;
(statearr_24350_24405[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24313 === (35))){
var inst_24297 = (state_24312[(2)]);
var state_24312__$1 = state_24312;
if(cljs.core.truth_(inst_24297)){
var statearr_24351_24406 = state_24312__$1;
(statearr_24351_24406[(1)] = (36));

} else {
var statearr_24352_24407 = state_24312__$1;
(statearr_24352_24407[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24313 === (19))){
var inst_24242 = (state_24312[(7)]);
var inst_24261 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24242);
var state_24312__$1 = state_24312;
var statearr_24353_24408 = state_24312__$1;
(statearr_24353_24408[(2)] = inst_24261);

(statearr_24353_24408[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24313 === (11))){
var inst_24242 = (state_24312[(7)]);
var inst_24246 = (inst_24242 == null);
var inst_24247 = cljs.core.not.call(null,inst_24246);
var state_24312__$1 = state_24312;
if(inst_24247){
var statearr_24354_24409 = state_24312__$1;
(statearr_24354_24409[(1)] = (13));

} else {
var statearr_24355_24410 = state_24312__$1;
(statearr_24355_24410[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24313 === (9))){
var inst_24218 = (state_24312[(8)]);
var state_24312__$1 = state_24312;
var statearr_24356_24411 = state_24312__$1;
(statearr_24356_24411[(2)] = inst_24218);

(statearr_24356_24411[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24313 === (5))){
var state_24312__$1 = state_24312;
var statearr_24357_24412 = state_24312__$1;
(statearr_24357_24412[(2)] = true);

(statearr_24357_24412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24313 === (14))){
var state_24312__$1 = state_24312;
var statearr_24358_24413 = state_24312__$1;
(statearr_24358_24413[(2)] = false);

(statearr_24358_24413[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24313 === (26))){
var inst_24272 = (state_24312[(11)]);
var inst_24279 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24272);
var state_24312__$1 = state_24312;
var statearr_24359_24414 = state_24312__$1;
(statearr_24359_24414[(2)] = inst_24279);

(statearr_24359_24414[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24313 === (16))){
var state_24312__$1 = state_24312;
var statearr_24360_24415 = state_24312__$1;
(statearr_24360_24415[(2)] = true);

(statearr_24360_24415[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24313 === (38))){
var inst_24302 = (state_24312[(2)]);
var state_24312__$1 = state_24312;
var statearr_24361_24416 = state_24312__$1;
(statearr_24361_24416[(2)] = inst_24302);

(statearr_24361_24416[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24313 === (30))){
var inst_24266 = (state_24312[(13)]);
var inst_24265 = (state_24312[(10)]);
var inst_24272 = (state_24312[(11)]);
var inst_24289 = cljs.core.empty_QMARK_.call(null,inst_24265);
var inst_24290 = inst_24266.call(null,inst_24272);
var inst_24291 = cljs.core.not.call(null,inst_24290);
var inst_24292 = (inst_24289) && (inst_24291);
var state_24312__$1 = state_24312;
var statearr_24362_24417 = state_24312__$1;
(statearr_24362_24417[(2)] = inst_24292);

(statearr_24362_24417[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24313 === (10))){
var inst_24218 = (state_24312[(8)]);
var inst_24238 = (state_24312[(2)]);
var inst_24239 = cljs.core.get.call(null,inst_24238,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24240 = cljs.core.get.call(null,inst_24238,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24241 = cljs.core.get.call(null,inst_24238,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24242 = inst_24218;
var state_24312__$1 = (function (){var statearr_24363 = state_24312;
(statearr_24363[(16)] = inst_24240);

(statearr_24363[(17)] = inst_24239);

(statearr_24363[(18)] = inst_24241);

(statearr_24363[(7)] = inst_24242);

return statearr_24363;
})();
var statearr_24364_24418 = state_24312__$1;
(statearr_24364_24418[(2)] = null);

(statearr_24364_24418[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24313 === (18))){
var inst_24256 = (state_24312[(2)]);
var state_24312__$1 = state_24312;
var statearr_24365_24419 = state_24312__$1;
(statearr_24365_24419[(2)] = inst_24256);

(statearr_24365_24419[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24313 === (37))){
var state_24312__$1 = state_24312;
var statearr_24366_24420 = state_24312__$1;
(statearr_24366_24420[(2)] = null);

(statearr_24366_24420[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24313 === (8))){
var inst_24218 = (state_24312[(8)]);
var inst_24235 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24218);
var state_24312__$1 = state_24312;
var statearr_24367_24421 = state_24312__$1;
(statearr_24367_24421[(2)] = inst_24235);

(statearr_24367_24421[(1)] = (10));


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
});})(c__22662__auto___24375,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22550__auto__,c__22662__auto___24375,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22551__auto__ = null;
var cljs$core$async$mix_$_state_machine__22551__auto____0 = (function (){
var statearr_24371 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24371[(0)] = cljs$core$async$mix_$_state_machine__22551__auto__);

(statearr_24371[(1)] = (1));

return statearr_24371;
});
var cljs$core$async$mix_$_state_machine__22551__auto____1 = (function (state_24312){
while(true){
var ret_value__22552__auto__ = (function (){try{while(true){
var result__22553__auto__ = switch__22550__auto__.call(null,state_24312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22553__auto__;
}
break;
}
}catch (e24372){if((e24372 instanceof Object)){
var ex__22554__auto__ = e24372;
var statearr_24373_24422 = state_24312;
(statearr_24373_24422[(5)] = ex__22554__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24423 = state_24312;
state_24312 = G__24423;
continue;
} else {
return ret_value__22552__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22551__auto__ = function(state_24312){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22551__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22551__auto____1.call(this,state_24312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22551__auto____0;
cljs$core$async$mix_$_state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22551__auto____1;
return cljs$core$async$mix_$_state_machine__22551__auto__;
})()
;})(switch__22550__auto__,c__22662__auto___24375,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22664__auto__ = (function (){var statearr_24374 = f__22663__auto__.call(null);
(statearr_24374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22662__auto___24375);

return statearr_24374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22664__auto__);
});})(c__22662__auto___24375,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__17510__auto__ = (((p == null))?null:p);
var m__17511__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17510__auto__)]);
if(!((m__17511__auto__ == null))){
return m__17511__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17511__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17511__auto____$1 == null))){
return m__17511__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__17510__auto__ = (((p == null))?null:p);
var m__17511__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17510__auto__)]);
if(!((m__17511__auto__ == null))){
return m__17511__auto__.call(null,p,v,ch);
} else {
var m__17511__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17511__auto____$1 == null))){
return m__17511__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args24424 = [];
var len__17913__auto___24427 = arguments.length;
var i__17914__auto___24428 = (0);
while(true){
if((i__17914__auto___24428 < len__17913__auto___24427)){
args24424.push((arguments[i__17914__auto___24428]));

var G__24429 = (i__17914__auto___24428 + (1));
i__17914__auto___24428 = G__24429;
continue;
} else {
}
break;
}

var G__24426 = args24424.length;
switch (G__24426) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24424.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17510__auto__ = (((p == null))?null:p);
var m__17511__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17510__auto__)]);
if(!((m__17511__auto__ == null))){
return m__17511__auto__.call(null,p);
} else {
var m__17511__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17511__auto____$1 == null))){
return m__17511__auto____$1.call(null,p);
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
var x__17510__auto__ = (((p == null))?null:p);
var m__17511__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17510__auto__)]);
if(!((m__17511__auto__ == null))){
return m__17511__auto__.call(null,p,v);
} else {
var m__17511__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17511__auto____$1 == null))){
return m__17511__auto____$1.call(null,p,v);
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
var args24432 = [];
var len__17913__auto___24557 = arguments.length;
var i__17914__auto___24558 = (0);
while(true){
if((i__17914__auto___24558 < len__17913__auto___24557)){
args24432.push((arguments[i__17914__auto___24558]));

var G__24559 = (i__17914__auto___24558 + (1));
i__17914__auto___24558 = G__24559;
continue;
} else {
}
break;
}

var G__24434 = args24432.length;
switch (G__24434) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24432.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16855__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16855__auto__)){
return or__16855__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16855__auto__,mults){
return (function (p1__24431_SHARP_){
if(cljs.core.truth_(p1__24431_SHARP_.call(null,topic))){
return p1__24431_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24431_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16855__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async24435 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24435 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24436){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24436 = meta24436;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24437,meta24436__$1){
var self__ = this;
var _24437__$1 = this;
return (new cljs.core.async.t_cljs$core$async24435(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24436__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24435.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24437){
var self__ = this;
var _24437__$1 = this;
return self__.meta24436;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24435.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24435.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24435.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async24435.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24435.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async24435.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24435.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24435.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24436","meta24436",-920683223,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24435.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24435.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24435";

cljs.core.async.t_cljs$core$async24435.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17453__auto__,writer__17454__auto__,opt__17455__auto__){
return cljs.core._write.call(null,writer__17454__auto__,"cljs.core.async/t_cljs$core$async24435");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async24435 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24435(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24436){
return (new cljs.core.async.t_cljs$core$async24435(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24436));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24435(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22662__auto___24561 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22662__auto___24561,mults,ensure_mult,p){
return (function (){
var f__22663__auto__ = (function (){var switch__22550__auto__ = ((function (c__22662__auto___24561,mults,ensure_mult,p){
return (function (state_24509){
var state_val_24510 = (state_24509[(1)]);
if((state_val_24510 === (7))){
var inst_24505 = (state_24509[(2)]);
var state_24509__$1 = state_24509;
var statearr_24511_24562 = state_24509__$1;
(statearr_24511_24562[(2)] = inst_24505);

(statearr_24511_24562[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24510 === (20))){
var state_24509__$1 = state_24509;
var statearr_24512_24563 = state_24509__$1;
(statearr_24512_24563[(2)] = null);

(statearr_24512_24563[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24510 === (1))){
var state_24509__$1 = state_24509;
var statearr_24513_24564 = state_24509__$1;
(statearr_24513_24564[(2)] = null);

(statearr_24513_24564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24510 === (24))){
var inst_24488 = (state_24509[(7)]);
var inst_24497 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24488);
var state_24509__$1 = state_24509;
var statearr_24514_24565 = state_24509__$1;
(statearr_24514_24565[(2)] = inst_24497);

(statearr_24514_24565[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24510 === (4))){
var inst_24440 = (state_24509[(8)]);
var inst_24440__$1 = (state_24509[(2)]);
var inst_24441 = (inst_24440__$1 == null);
var state_24509__$1 = (function (){var statearr_24515 = state_24509;
(statearr_24515[(8)] = inst_24440__$1);

return statearr_24515;
})();
if(cljs.core.truth_(inst_24441)){
var statearr_24516_24566 = state_24509__$1;
(statearr_24516_24566[(1)] = (5));

} else {
var statearr_24517_24567 = state_24509__$1;
(statearr_24517_24567[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24510 === (15))){
var inst_24482 = (state_24509[(2)]);
var state_24509__$1 = state_24509;
var statearr_24518_24568 = state_24509__$1;
(statearr_24518_24568[(2)] = inst_24482);

(statearr_24518_24568[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24510 === (21))){
var inst_24502 = (state_24509[(2)]);
var state_24509__$1 = (function (){var statearr_24519 = state_24509;
(statearr_24519[(9)] = inst_24502);

return statearr_24519;
})();
var statearr_24520_24569 = state_24509__$1;
(statearr_24520_24569[(2)] = null);

(statearr_24520_24569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24510 === (13))){
var inst_24464 = (state_24509[(10)]);
var inst_24466 = cljs.core.chunked_seq_QMARK_.call(null,inst_24464);
var state_24509__$1 = state_24509;
if(inst_24466){
var statearr_24521_24570 = state_24509__$1;
(statearr_24521_24570[(1)] = (16));

} else {
var statearr_24522_24571 = state_24509__$1;
(statearr_24522_24571[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24510 === (22))){
var inst_24494 = (state_24509[(2)]);
var state_24509__$1 = state_24509;
if(cljs.core.truth_(inst_24494)){
var statearr_24523_24572 = state_24509__$1;
(statearr_24523_24572[(1)] = (23));

} else {
var statearr_24524_24573 = state_24509__$1;
(statearr_24524_24573[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24510 === (6))){
var inst_24490 = (state_24509[(11)]);
var inst_24440 = (state_24509[(8)]);
var inst_24488 = (state_24509[(7)]);
var inst_24488__$1 = topic_fn.call(null,inst_24440);
var inst_24489 = cljs.core.deref.call(null,mults);
var inst_24490__$1 = cljs.core.get.call(null,inst_24489,inst_24488__$1);
var state_24509__$1 = (function (){var statearr_24525 = state_24509;
(statearr_24525[(11)] = inst_24490__$1);

(statearr_24525[(7)] = inst_24488__$1);

return statearr_24525;
})();
if(cljs.core.truth_(inst_24490__$1)){
var statearr_24526_24574 = state_24509__$1;
(statearr_24526_24574[(1)] = (19));

} else {
var statearr_24527_24575 = state_24509__$1;
(statearr_24527_24575[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24510 === (25))){
var inst_24499 = (state_24509[(2)]);
var state_24509__$1 = state_24509;
var statearr_24528_24576 = state_24509__$1;
(statearr_24528_24576[(2)] = inst_24499);

(statearr_24528_24576[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24510 === (17))){
var inst_24464 = (state_24509[(10)]);
var inst_24473 = cljs.core.first.call(null,inst_24464);
var inst_24474 = cljs.core.async.muxch_STAR_.call(null,inst_24473);
var inst_24475 = cljs.core.async.close_BANG_.call(null,inst_24474);
var inst_24476 = cljs.core.next.call(null,inst_24464);
var inst_24450 = inst_24476;
var inst_24451 = null;
var inst_24452 = (0);
var inst_24453 = (0);
var state_24509__$1 = (function (){var statearr_24529 = state_24509;
(statearr_24529[(12)] = inst_24475);

(statearr_24529[(13)] = inst_24452);

(statearr_24529[(14)] = inst_24450);

(statearr_24529[(15)] = inst_24453);

(statearr_24529[(16)] = inst_24451);

return statearr_24529;
})();
var statearr_24530_24577 = state_24509__$1;
(statearr_24530_24577[(2)] = null);

(statearr_24530_24577[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24510 === (3))){
var inst_24507 = (state_24509[(2)]);
var state_24509__$1 = state_24509;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24509__$1,inst_24507);
} else {
if((state_val_24510 === (12))){
var inst_24484 = (state_24509[(2)]);
var state_24509__$1 = state_24509;
var statearr_24531_24578 = state_24509__$1;
(statearr_24531_24578[(2)] = inst_24484);

(statearr_24531_24578[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24510 === (2))){
var state_24509__$1 = state_24509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24509__$1,(4),ch);
} else {
if((state_val_24510 === (23))){
var state_24509__$1 = state_24509;
var statearr_24532_24579 = state_24509__$1;
(statearr_24532_24579[(2)] = null);

(statearr_24532_24579[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24510 === (19))){
var inst_24490 = (state_24509[(11)]);
var inst_24440 = (state_24509[(8)]);
var inst_24492 = cljs.core.async.muxch_STAR_.call(null,inst_24490);
var state_24509__$1 = state_24509;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24509__$1,(22),inst_24492,inst_24440);
} else {
if((state_val_24510 === (11))){
var inst_24464 = (state_24509[(10)]);
var inst_24450 = (state_24509[(14)]);
var inst_24464__$1 = cljs.core.seq.call(null,inst_24450);
var state_24509__$1 = (function (){var statearr_24533 = state_24509;
(statearr_24533[(10)] = inst_24464__$1);

return statearr_24533;
})();
if(inst_24464__$1){
var statearr_24534_24580 = state_24509__$1;
(statearr_24534_24580[(1)] = (13));

} else {
var statearr_24535_24581 = state_24509__$1;
(statearr_24535_24581[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24510 === (9))){
var inst_24486 = (state_24509[(2)]);
var state_24509__$1 = state_24509;
var statearr_24536_24582 = state_24509__$1;
(statearr_24536_24582[(2)] = inst_24486);

(statearr_24536_24582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24510 === (5))){
var inst_24447 = cljs.core.deref.call(null,mults);
var inst_24448 = cljs.core.vals.call(null,inst_24447);
var inst_24449 = cljs.core.seq.call(null,inst_24448);
var inst_24450 = inst_24449;
var inst_24451 = null;
var inst_24452 = (0);
var inst_24453 = (0);
var state_24509__$1 = (function (){var statearr_24537 = state_24509;
(statearr_24537[(13)] = inst_24452);

(statearr_24537[(14)] = inst_24450);

(statearr_24537[(15)] = inst_24453);

(statearr_24537[(16)] = inst_24451);

return statearr_24537;
})();
var statearr_24538_24583 = state_24509__$1;
(statearr_24538_24583[(2)] = null);

(statearr_24538_24583[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24510 === (14))){
var state_24509__$1 = state_24509;
var statearr_24542_24584 = state_24509__$1;
(statearr_24542_24584[(2)] = null);

(statearr_24542_24584[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24510 === (16))){
var inst_24464 = (state_24509[(10)]);
var inst_24468 = cljs.core.chunk_first.call(null,inst_24464);
var inst_24469 = cljs.core.chunk_rest.call(null,inst_24464);
var inst_24470 = cljs.core.count.call(null,inst_24468);
var inst_24450 = inst_24469;
var inst_24451 = inst_24468;
var inst_24452 = inst_24470;
var inst_24453 = (0);
var state_24509__$1 = (function (){var statearr_24543 = state_24509;
(statearr_24543[(13)] = inst_24452);

(statearr_24543[(14)] = inst_24450);

(statearr_24543[(15)] = inst_24453);

(statearr_24543[(16)] = inst_24451);

return statearr_24543;
})();
var statearr_24544_24585 = state_24509__$1;
(statearr_24544_24585[(2)] = null);

(statearr_24544_24585[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24510 === (10))){
var inst_24452 = (state_24509[(13)]);
var inst_24450 = (state_24509[(14)]);
var inst_24453 = (state_24509[(15)]);
var inst_24451 = (state_24509[(16)]);
var inst_24458 = cljs.core._nth.call(null,inst_24451,inst_24453);
var inst_24459 = cljs.core.async.muxch_STAR_.call(null,inst_24458);
var inst_24460 = cljs.core.async.close_BANG_.call(null,inst_24459);
var inst_24461 = (inst_24453 + (1));
var tmp24539 = inst_24452;
var tmp24540 = inst_24450;
var tmp24541 = inst_24451;
var inst_24450__$1 = tmp24540;
var inst_24451__$1 = tmp24541;
var inst_24452__$1 = tmp24539;
var inst_24453__$1 = inst_24461;
var state_24509__$1 = (function (){var statearr_24545 = state_24509;
(statearr_24545[(13)] = inst_24452__$1);

(statearr_24545[(14)] = inst_24450__$1);

(statearr_24545[(15)] = inst_24453__$1);

(statearr_24545[(16)] = inst_24451__$1);

(statearr_24545[(17)] = inst_24460);

return statearr_24545;
})();
var statearr_24546_24586 = state_24509__$1;
(statearr_24546_24586[(2)] = null);

(statearr_24546_24586[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24510 === (18))){
var inst_24479 = (state_24509[(2)]);
var state_24509__$1 = state_24509;
var statearr_24547_24587 = state_24509__$1;
(statearr_24547_24587[(2)] = inst_24479);

(statearr_24547_24587[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24510 === (8))){
var inst_24452 = (state_24509[(13)]);
var inst_24453 = (state_24509[(15)]);
var inst_24455 = (inst_24453 < inst_24452);
var inst_24456 = inst_24455;
var state_24509__$1 = state_24509;
if(cljs.core.truth_(inst_24456)){
var statearr_24548_24588 = state_24509__$1;
(statearr_24548_24588[(1)] = (10));

} else {
var statearr_24549_24589 = state_24509__$1;
(statearr_24549_24589[(1)] = (11));

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
});})(c__22662__auto___24561,mults,ensure_mult,p))
;
return ((function (switch__22550__auto__,c__22662__auto___24561,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22551__auto__ = null;
var cljs$core$async$state_machine__22551__auto____0 = (function (){
var statearr_24553 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24553[(0)] = cljs$core$async$state_machine__22551__auto__);

(statearr_24553[(1)] = (1));

return statearr_24553;
});
var cljs$core$async$state_machine__22551__auto____1 = (function (state_24509){
while(true){
var ret_value__22552__auto__ = (function (){try{while(true){
var result__22553__auto__ = switch__22550__auto__.call(null,state_24509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22553__auto__;
}
break;
}
}catch (e24554){if((e24554 instanceof Object)){
var ex__22554__auto__ = e24554;
var statearr_24555_24590 = state_24509;
(statearr_24555_24590[(5)] = ex__22554__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24591 = state_24509;
state_24509 = G__24591;
continue;
} else {
return ret_value__22552__auto__;
}
break;
}
});
cljs$core$async$state_machine__22551__auto__ = function(state_24509){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22551__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22551__auto____1.call(this,state_24509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22551__auto____0;
cljs$core$async$state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22551__auto____1;
return cljs$core$async$state_machine__22551__auto__;
})()
;})(switch__22550__auto__,c__22662__auto___24561,mults,ensure_mult,p))
})();
var state__22664__auto__ = (function (){var statearr_24556 = f__22663__auto__.call(null);
(statearr_24556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22662__auto___24561);

return statearr_24556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22664__auto__);
});})(c__22662__auto___24561,mults,ensure_mult,p))
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
var args24592 = [];
var len__17913__auto___24595 = arguments.length;
var i__17914__auto___24596 = (0);
while(true){
if((i__17914__auto___24596 < len__17913__auto___24595)){
args24592.push((arguments[i__17914__auto___24596]));

var G__24597 = (i__17914__auto___24596 + (1));
i__17914__auto___24596 = G__24597;
continue;
} else {
}
break;
}

var G__24594 = args24592.length;
switch (G__24594) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24592.length)].join('')));

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
var args24599 = [];
var len__17913__auto___24602 = arguments.length;
var i__17914__auto___24603 = (0);
while(true){
if((i__17914__auto___24603 < len__17913__auto___24602)){
args24599.push((arguments[i__17914__auto___24603]));

var G__24604 = (i__17914__auto___24603 + (1));
i__17914__auto___24603 = G__24604;
continue;
} else {
}
break;
}

var G__24601 = args24599.length;
switch (G__24601) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24599.length)].join('')));

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
var args24606 = [];
var len__17913__auto___24677 = arguments.length;
var i__17914__auto___24678 = (0);
while(true){
if((i__17914__auto___24678 < len__17913__auto___24677)){
args24606.push((arguments[i__17914__auto___24678]));

var G__24679 = (i__17914__auto___24678 + (1));
i__17914__auto___24678 = G__24679;
continue;
} else {
}
break;
}

var G__24608 = args24606.length;
switch (G__24608) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24606.length)].join('')));

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
var c__22662__auto___24681 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22662__auto___24681,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22663__auto__ = (function (){var switch__22550__auto__ = ((function (c__22662__auto___24681,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24647){
var state_val_24648 = (state_24647[(1)]);
if((state_val_24648 === (7))){
var state_24647__$1 = state_24647;
var statearr_24649_24682 = state_24647__$1;
(statearr_24649_24682[(2)] = null);

(statearr_24649_24682[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24648 === (1))){
var state_24647__$1 = state_24647;
var statearr_24650_24683 = state_24647__$1;
(statearr_24650_24683[(2)] = null);

(statearr_24650_24683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24648 === (4))){
var inst_24611 = (state_24647[(7)]);
var inst_24613 = (inst_24611 < cnt);
var state_24647__$1 = state_24647;
if(cljs.core.truth_(inst_24613)){
var statearr_24651_24684 = state_24647__$1;
(statearr_24651_24684[(1)] = (6));

} else {
var statearr_24652_24685 = state_24647__$1;
(statearr_24652_24685[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24648 === (15))){
var inst_24643 = (state_24647[(2)]);
var state_24647__$1 = state_24647;
var statearr_24653_24686 = state_24647__$1;
(statearr_24653_24686[(2)] = inst_24643);

(statearr_24653_24686[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24648 === (13))){
var inst_24636 = cljs.core.async.close_BANG_.call(null,out);
var state_24647__$1 = state_24647;
var statearr_24654_24687 = state_24647__$1;
(statearr_24654_24687[(2)] = inst_24636);

(statearr_24654_24687[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24648 === (6))){
var state_24647__$1 = state_24647;
var statearr_24655_24688 = state_24647__$1;
(statearr_24655_24688[(2)] = null);

(statearr_24655_24688[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24648 === (3))){
var inst_24645 = (state_24647[(2)]);
var state_24647__$1 = state_24647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24647__$1,inst_24645);
} else {
if((state_val_24648 === (12))){
var inst_24633 = (state_24647[(8)]);
var inst_24633__$1 = (state_24647[(2)]);
var inst_24634 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24633__$1);
var state_24647__$1 = (function (){var statearr_24656 = state_24647;
(statearr_24656[(8)] = inst_24633__$1);

return statearr_24656;
})();
if(cljs.core.truth_(inst_24634)){
var statearr_24657_24689 = state_24647__$1;
(statearr_24657_24689[(1)] = (13));

} else {
var statearr_24658_24690 = state_24647__$1;
(statearr_24658_24690[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24648 === (2))){
var inst_24610 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24611 = (0);
var state_24647__$1 = (function (){var statearr_24659 = state_24647;
(statearr_24659[(7)] = inst_24611);

(statearr_24659[(9)] = inst_24610);

return statearr_24659;
})();
var statearr_24660_24691 = state_24647__$1;
(statearr_24660_24691[(2)] = null);

(statearr_24660_24691[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24648 === (11))){
var inst_24611 = (state_24647[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24647,(10),Object,null,(9));
var inst_24620 = chs__$1.call(null,inst_24611);
var inst_24621 = done.call(null,inst_24611);
var inst_24622 = cljs.core.async.take_BANG_.call(null,inst_24620,inst_24621);
var state_24647__$1 = state_24647;
var statearr_24661_24692 = state_24647__$1;
(statearr_24661_24692[(2)] = inst_24622);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24647__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24648 === (9))){
var inst_24611 = (state_24647[(7)]);
var inst_24624 = (state_24647[(2)]);
var inst_24625 = (inst_24611 + (1));
var inst_24611__$1 = inst_24625;
var state_24647__$1 = (function (){var statearr_24662 = state_24647;
(statearr_24662[(7)] = inst_24611__$1);

(statearr_24662[(10)] = inst_24624);

return statearr_24662;
})();
var statearr_24663_24693 = state_24647__$1;
(statearr_24663_24693[(2)] = null);

(statearr_24663_24693[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24648 === (5))){
var inst_24631 = (state_24647[(2)]);
var state_24647__$1 = (function (){var statearr_24664 = state_24647;
(statearr_24664[(11)] = inst_24631);

return statearr_24664;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24647__$1,(12),dchan);
} else {
if((state_val_24648 === (14))){
var inst_24633 = (state_24647[(8)]);
var inst_24638 = cljs.core.apply.call(null,f,inst_24633);
var state_24647__$1 = state_24647;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24647__$1,(16),out,inst_24638);
} else {
if((state_val_24648 === (16))){
var inst_24640 = (state_24647[(2)]);
var state_24647__$1 = (function (){var statearr_24665 = state_24647;
(statearr_24665[(12)] = inst_24640);

return statearr_24665;
})();
var statearr_24666_24694 = state_24647__$1;
(statearr_24666_24694[(2)] = null);

(statearr_24666_24694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24648 === (10))){
var inst_24615 = (state_24647[(2)]);
var inst_24616 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24647__$1 = (function (){var statearr_24667 = state_24647;
(statearr_24667[(13)] = inst_24615);

return statearr_24667;
})();
var statearr_24668_24695 = state_24647__$1;
(statearr_24668_24695[(2)] = inst_24616);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24647__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24648 === (8))){
var inst_24629 = (state_24647[(2)]);
var state_24647__$1 = state_24647;
var statearr_24669_24696 = state_24647__$1;
(statearr_24669_24696[(2)] = inst_24629);

(statearr_24669_24696[(1)] = (5));


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
});})(c__22662__auto___24681,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22550__auto__,c__22662__auto___24681,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22551__auto__ = null;
var cljs$core$async$state_machine__22551__auto____0 = (function (){
var statearr_24673 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24673[(0)] = cljs$core$async$state_machine__22551__auto__);

(statearr_24673[(1)] = (1));

return statearr_24673;
});
var cljs$core$async$state_machine__22551__auto____1 = (function (state_24647){
while(true){
var ret_value__22552__auto__ = (function (){try{while(true){
var result__22553__auto__ = switch__22550__auto__.call(null,state_24647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22553__auto__;
}
break;
}
}catch (e24674){if((e24674 instanceof Object)){
var ex__22554__auto__ = e24674;
var statearr_24675_24697 = state_24647;
(statearr_24675_24697[(5)] = ex__22554__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24698 = state_24647;
state_24647 = G__24698;
continue;
} else {
return ret_value__22552__auto__;
}
break;
}
});
cljs$core$async$state_machine__22551__auto__ = function(state_24647){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22551__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22551__auto____1.call(this,state_24647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22551__auto____0;
cljs$core$async$state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22551__auto____1;
return cljs$core$async$state_machine__22551__auto__;
})()
;})(switch__22550__auto__,c__22662__auto___24681,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22664__auto__ = (function (){var statearr_24676 = f__22663__auto__.call(null);
(statearr_24676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22662__auto___24681);

return statearr_24676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22664__auto__);
});})(c__22662__auto___24681,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args24700 = [];
var len__17913__auto___24756 = arguments.length;
var i__17914__auto___24757 = (0);
while(true){
if((i__17914__auto___24757 < len__17913__auto___24756)){
args24700.push((arguments[i__17914__auto___24757]));

var G__24758 = (i__17914__auto___24757 + (1));
i__17914__auto___24757 = G__24758;
continue;
} else {
}
break;
}

var G__24702 = args24700.length;
switch (G__24702) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24700.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22662__auto___24760 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22662__auto___24760,out){
return (function (){
var f__22663__auto__ = (function (){var switch__22550__auto__ = ((function (c__22662__auto___24760,out){
return (function (state_24732){
var state_val_24733 = (state_24732[(1)]);
if((state_val_24733 === (7))){
var inst_24711 = (state_24732[(7)]);
var inst_24712 = (state_24732[(8)]);
var inst_24711__$1 = (state_24732[(2)]);
var inst_24712__$1 = cljs.core.nth.call(null,inst_24711__$1,(0),null);
var inst_24713 = cljs.core.nth.call(null,inst_24711__$1,(1),null);
var inst_24714 = (inst_24712__$1 == null);
var state_24732__$1 = (function (){var statearr_24734 = state_24732;
(statearr_24734[(7)] = inst_24711__$1);

(statearr_24734[(9)] = inst_24713);

(statearr_24734[(8)] = inst_24712__$1);

return statearr_24734;
})();
if(cljs.core.truth_(inst_24714)){
var statearr_24735_24761 = state_24732__$1;
(statearr_24735_24761[(1)] = (8));

} else {
var statearr_24736_24762 = state_24732__$1;
(statearr_24736_24762[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24733 === (1))){
var inst_24703 = cljs.core.vec.call(null,chs);
var inst_24704 = inst_24703;
var state_24732__$1 = (function (){var statearr_24737 = state_24732;
(statearr_24737[(10)] = inst_24704);

return statearr_24737;
})();
var statearr_24738_24763 = state_24732__$1;
(statearr_24738_24763[(2)] = null);

(statearr_24738_24763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24733 === (4))){
var inst_24704 = (state_24732[(10)]);
var state_24732__$1 = state_24732;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24732__$1,(7),inst_24704);
} else {
if((state_val_24733 === (6))){
var inst_24728 = (state_24732[(2)]);
var state_24732__$1 = state_24732;
var statearr_24739_24764 = state_24732__$1;
(statearr_24739_24764[(2)] = inst_24728);

(statearr_24739_24764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24733 === (3))){
var inst_24730 = (state_24732[(2)]);
var state_24732__$1 = state_24732;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24732__$1,inst_24730);
} else {
if((state_val_24733 === (2))){
var inst_24704 = (state_24732[(10)]);
var inst_24706 = cljs.core.count.call(null,inst_24704);
var inst_24707 = (inst_24706 > (0));
var state_24732__$1 = state_24732;
if(cljs.core.truth_(inst_24707)){
var statearr_24741_24765 = state_24732__$1;
(statearr_24741_24765[(1)] = (4));

} else {
var statearr_24742_24766 = state_24732__$1;
(statearr_24742_24766[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24733 === (11))){
var inst_24704 = (state_24732[(10)]);
var inst_24721 = (state_24732[(2)]);
var tmp24740 = inst_24704;
var inst_24704__$1 = tmp24740;
var state_24732__$1 = (function (){var statearr_24743 = state_24732;
(statearr_24743[(10)] = inst_24704__$1);

(statearr_24743[(11)] = inst_24721);

return statearr_24743;
})();
var statearr_24744_24767 = state_24732__$1;
(statearr_24744_24767[(2)] = null);

(statearr_24744_24767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24733 === (9))){
var inst_24712 = (state_24732[(8)]);
var state_24732__$1 = state_24732;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24732__$1,(11),out,inst_24712);
} else {
if((state_val_24733 === (5))){
var inst_24726 = cljs.core.async.close_BANG_.call(null,out);
var state_24732__$1 = state_24732;
var statearr_24745_24768 = state_24732__$1;
(statearr_24745_24768[(2)] = inst_24726);

(statearr_24745_24768[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24733 === (10))){
var inst_24724 = (state_24732[(2)]);
var state_24732__$1 = state_24732;
var statearr_24746_24769 = state_24732__$1;
(statearr_24746_24769[(2)] = inst_24724);

(statearr_24746_24769[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24733 === (8))){
var inst_24711 = (state_24732[(7)]);
var inst_24704 = (state_24732[(10)]);
var inst_24713 = (state_24732[(9)]);
var inst_24712 = (state_24732[(8)]);
var inst_24716 = (function (){var cs = inst_24704;
var vec__24709 = inst_24711;
var v = inst_24712;
var c = inst_24713;
return ((function (cs,vec__24709,v,c,inst_24711,inst_24704,inst_24713,inst_24712,state_val_24733,c__22662__auto___24760,out){
return (function (p1__24699_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24699_SHARP_);
});
;})(cs,vec__24709,v,c,inst_24711,inst_24704,inst_24713,inst_24712,state_val_24733,c__22662__auto___24760,out))
})();
var inst_24717 = cljs.core.filterv.call(null,inst_24716,inst_24704);
var inst_24704__$1 = inst_24717;
var state_24732__$1 = (function (){var statearr_24747 = state_24732;
(statearr_24747[(10)] = inst_24704__$1);

return statearr_24747;
})();
var statearr_24748_24770 = state_24732__$1;
(statearr_24748_24770[(2)] = null);

(statearr_24748_24770[(1)] = (2));


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
});})(c__22662__auto___24760,out))
;
return ((function (switch__22550__auto__,c__22662__auto___24760,out){
return (function() {
var cljs$core$async$state_machine__22551__auto__ = null;
var cljs$core$async$state_machine__22551__auto____0 = (function (){
var statearr_24752 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24752[(0)] = cljs$core$async$state_machine__22551__auto__);

(statearr_24752[(1)] = (1));

return statearr_24752;
});
var cljs$core$async$state_machine__22551__auto____1 = (function (state_24732){
while(true){
var ret_value__22552__auto__ = (function (){try{while(true){
var result__22553__auto__ = switch__22550__auto__.call(null,state_24732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22553__auto__;
}
break;
}
}catch (e24753){if((e24753 instanceof Object)){
var ex__22554__auto__ = e24753;
var statearr_24754_24771 = state_24732;
(statearr_24754_24771[(5)] = ex__22554__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24753;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24772 = state_24732;
state_24732 = G__24772;
continue;
} else {
return ret_value__22552__auto__;
}
break;
}
});
cljs$core$async$state_machine__22551__auto__ = function(state_24732){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22551__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22551__auto____1.call(this,state_24732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22551__auto____0;
cljs$core$async$state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22551__auto____1;
return cljs$core$async$state_machine__22551__auto__;
})()
;})(switch__22550__auto__,c__22662__auto___24760,out))
})();
var state__22664__auto__ = (function (){var statearr_24755 = f__22663__auto__.call(null);
(statearr_24755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22662__auto___24760);

return statearr_24755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22664__auto__);
});})(c__22662__auto___24760,out))
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
var args24773 = [];
var len__17913__auto___24822 = arguments.length;
var i__17914__auto___24823 = (0);
while(true){
if((i__17914__auto___24823 < len__17913__auto___24822)){
args24773.push((arguments[i__17914__auto___24823]));

var G__24824 = (i__17914__auto___24823 + (1));
i__17914__auto___24823 = G__24824;
continue;
} else {
}
break;
}

var G__24775 = args24773.length;
switch (G__24775) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24773.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22662__auto___24826 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22662__auto___24826,out){
return (function (){
var f__22663__auto__ = (function (){var switch__22550__auto__ = ((function (c__22662__auto___24826,out){
return (function (state_24799){
var state_val_24800 = (state_24799[(1)]);
if((state_val_24800 === (7))){
var inst_24781 = (state_24799[(7)]);
var inst_24781__$1 = (state_24799[(2)]);
var inst_24782 = (inst_24781__$1 == null);
var inst_24783 = cljs.core.not.call(null,inst_24782);
var state_24799__$1 = (function (){var statearr_24801 = state_24799;
(statearr_24801[(7)] = inst_24781__$1);

return statearr_24801;
})();
if(inst_24783){
var statearr_24802_24827 = state_24799__$1;
(statearr_24802_24827[(1)] = (8));

} else {
var statearr_24803_24828 = state_24799__$1;
(statearr_24803_24828[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (1))){
var inst_24776 = (0);
var state_24799__$1 = (function (){var statearr_24804 = state_24799;
(statearr_24804[(8)] = inst_24776);

return statearr_24804;
})();
var statearr_24805_24829 = state_24799__$1;
(statearr_24805_24829[(2)] = null);

(statearr_24805_24829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (4))){
var state_24799__$1 = state_24799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24799__$1,(7),ch);
} else {
if((state_val_24800 === (6))){
var inst_24794 = (state_24799[(2)]);
var state_24799__$1 = state_24799;
var statearr_24806_24830 = state_24799__$1;
(statearr_24806_24830[(2)] = inst_24794);

(statearr_24806_24830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (3))){
var inst_24796 = (state_24799[(2)]);
var inst_24797 = cljs.core.async.close_BANG_.call(null,out);
var state_24799__$1 = (function (){var statearr_24807 = state_24799;
(statearr_24807[(9)] = inst_24796);

return statearr_24807;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24799__$1,inst_24797);
} else {
if((state_val_24800 === (2))){
var inst_24776 = (state_24799[(8)]);
var inst_24778 = (inst_24776 < n);
var state_24799__$1 = state_24799;
if(cljs.core.truth_(inst_24778)){
var statearr_24808_24831 = state_24799__$1;
(statearr_24808_24831[(1)] = (4));

} else {
var statearr_24809_24832 = state_24799__$1;
(statearr_24809_24832[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (11))){
var inst_24776 = (state_24799[(8)]);
var inst_24786 = (state_24799[(2)]);
var inst_24787 = (inst_24776 + (1));
var inst_24776__$1 = inst_24787;
var state_24799__$1 = (function (){var statearr_24810 = state_24799;
(statearr_24810[(10)] = inst_24786);

(statearr_24810[(8)] = inst_24776__$1);

return statearr_24810;
})();
var statearr_24811_24833 = state_24799__$1;
(statearr_24811_24833[(2)] = null);

(statearr_24811_24833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (9))){
var state_24799__$1 = state_24799;
var statearr_24812_24834 = state_24799__$1;
(statearr_24812_24834[(2)] = null);

(statearr_24812_24834[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (5))){
var state_24799__$1 = state_24799;
var statearr_24813_24835 = state_24799__$1;
(statearr_24813_24835[(2)] = null);

(statearr_24813_24835[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (10))){
var inst_24791 = (state_24799[(2)]);
var state_24799__$1 = state_24799;
var statearr_24814_24836 = state_24799__$1;
(statearr_24814_24836[(2)] = inst_24791);

(statearr_24814_24836[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (8))){
var inst_24781 = (state_24799[(7)]);
var state_24799__$1 = state_24799;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24799__$1,(11),out,inst_24781);
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
});})(c__22662__auto___24826,out))
;
return ((function (switch__22550__auto__,c__22662__auto___24826,out){
return (function() {
var cljs$core$async$state_machine__22551__auto__ = null;
var cljs$core$async$state_machine__22551__auto____0 = (function (){
var statearr_24818 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24818[(0)] = cljs$core$async$state_machine__22551__auto__);

(statearr_24818[(1)] = (1));

return statearr_24818;
});
var cljs$core$async$state_machine__22551__auto____1 = (function (state_24799){
while(true){
var ret_value__22552__auto__ = (function (){try{while(true){
var result__22553__auto__ = switch__22550__auto__.call(null,state_24799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22553__auto__;
}
break;
}
}catch (e24819){if((e24819 instanceof Object)){
var ex__22554__auto__ = e24819;
var statearr_24820_24837 = state_24799;
(statearr_24820_24837[(5)] = ex__22554__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24838 = state_24799;
state_24799 = G__24838;
continue;
} else {
return ret_value__22552__auto__;
}
break;
}
});
cljs$core$async$state_machine__22551__auto__ = function(state_24799){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22551__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22551__auto____1.call(this,state_24799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22551__auto____0;
cljs$core$async$state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22551__auto____1;
return cljs$core$async$state_machine__22551__auto__;
})()
;})(switch__22550__auto__,c__22662__auto___24826,out))
})();
var state__22664__auto__ = (function (){var statearr_24821 = f__22663__auto__.call(null);
(statearr_24821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22662__auto___24826);

return statearr_24821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22664__auto__);
});})(c__22662__auto___24826,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24846 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24846 = (function (map_LT_,f,ch,meta24847){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24847 = meta24847;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24848,meta24847__$1){
var self__ = this;
var _24848__$1 = this;
return (new cljs.core.async.t_cljs$core$async24846(self__.map_LT_,self__.f,self__.ch,meta24847__$1));
});

cljs.core.async.t_cljs$core$async24846.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24848){
var self__ = this;
var _24848__$1 = this;
return self__.meta24847;
});

cljs.core.async.t_cljs$core$async24846.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24846.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24846.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24846.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24846.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24849 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24849 = (function (map_LT_,f,ch,meta24847,_,fn1,meta24850){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24847 = meta24847;
this._ = _;
this.fn1 = fn1;
this.meta24850 = meta24850;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24851,meta24850__$1){
var self__ = this;
var _24851__$1 = this;
return (new cljs.core.async.t_cljs$core$async24849(self__.map_LT_,self__.f,self__.ch,self__.meta24847,self__._,self__.fn1,meta24850__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24849.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24851){
var self__ = this;
var _24851__$1 = this;
return self__.meta24850;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24849.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24849.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24849.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24849.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24839_SHARP_){
return f1.call(null,(((p1__24839_SHARP_ == null))?null:self__.f.call(null,p1__24839_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24849.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24847","meta24847",-1119428074,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24846","cljs.core.async/t_cljs$core$async24846",-1100746180,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24850","meta24850",-460593785,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24849.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24849.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24849";

cljs.core.async.t_cljs$core$async24849.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17453__auto__,writer__17454__auto__,opt__17455__auto__){
return cljs.core._write.call(null,writer__17454__auto__,"cljs.core.async/t_cljs$core$async24849");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async24849 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24849(map_LT___$1,f__$1,ch__$1,meta24847__$1,___$2,fn1__$1,meta24850){
return (new cljs.core.async.t_cljs$core$async24849(map_LT___$1,f__$1,ch__$1,meta24847__$1,___$2,fn1__$1,meta24850));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24849(self__.map_LT_,self__.f,self__.ch,self__.meta24847,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16843__auto__ = ret;
if(cljs.core.truth_(and__16843__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16843__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async24846.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24846.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24846.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24847","meta24847",-1119428074,null)], null);
});

cljs.core.async.t_cljs$core$async24846.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24846.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24846";

cljs.core.async.t_cljs$core$async24846.cljs$lang$ctorPrWriter = (function (this__17453__auto__,writer__17454__auto__,opt__17455__auto__){
return cljs.core._write.call(null,writer__17454__auto__,"cljs.core.async/t_cljs$core$async24846");
});

cljs.core.async.__GT_t_cljs$core$async24846 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24846(map_LT___$1,f__$1,ch__$1,meta24847){
return (new cljs.core.async.t_cljs$core$async24846(map_LT___$1,f__$1,ch__$1,meta24847));
});

}

return (new cljs.core.async.t_cljs$core$async24846(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24855 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24855 = (function (map_GT_,f,ch,meta24856){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta24856 = meta24856;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24855.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24857,meta24856__$1){
var self__ = this;
var _24857__$1 = this;
return (new cljs.core.async.t_cljs$core$async24855(self__.map_GT_,self__.f,self__.ch,meta24856__$1));
});

cljs.core.async.t_cljs$core$async24855.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24857){
var self__ = this;
var _24857__$1 = this;
return self__.meta24856;
});

cljs.core.async.t_cljs$core$async24855.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24855.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24855.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24855.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24855.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24855.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24855.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24856","meta24856",877353177,null)], null);
});

cljs.core.async.t_cljs$core$async24855.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24855.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24855";

cljs.core.async.t_cljs$core$async24855.cljs$lang$ctorPrWriter = (function (this__17453__auto__,writer__17454__auto__,opt__17455__auto__){
return cljs.core._write.call(null,writer__17454__auto__,"cljs.core.async/t_cljs$core$async24855");
});

cljs.core.async.__GT_t_cljs$core$async24855 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24855(map_GT___$1,f__$1,ch__$1,meta24856){
return (new cljs.core.async.t_cljs$core$async24855(map_GT___$1,f__$1,ch__$1,meta24856));
});

}

return (new cljs.core.async.t_cljs$core$async24855(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24861 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24861 = (function (filter_GT_,p,ch,meta24862){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta24862 = meta24862;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24861.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24863,meta24862__$1){
var self__ = this;
var _24863__$1 = this;
return (new cljs.core.async.t_cljs$core$async24861(self__.filter_GT_,self__.p,self__.ch,meta24862__$1));
});

cljs.core.async.t_cljs$core$async24861.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24863){
var self__ = this;
var _24863__$1 = this;
return self__.meta24862;
});

cljs.core.async.t_cljs$core$async24861.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24861.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24861.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24861.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24861.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24861.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24861.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24861.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24862","meta24862",-1916451830,null)], null);
});

cljs.core.async.t_cljs$core$async24861.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24861.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24861";

cljs.core.async.t_cljs$core$async24861.cljs$lang$ctorPrWriter = (function (this__17453__auto__,writer__17454__auto__,opt__17455__auto__){
return cljs.core._write.call(null,writer__17454__auto__,"cljs.core.async/t_cljs$core$async24861");
});

cljs.core.async.__GT_t_cljs$core$async24861 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24861(filter_GT___$1,p__$1,ch__$1,meta24862){
return (new cljs.core.async.t_cljs$core$async24861(filter_GT___$1,p__$1,ch__$1,meta24862));
});

}

return (new cljs.core.async.t_cljs$core$async24861(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args24864 = [];
var len__17913__auto___24908 = arguments.length;
var i__17914__auto___24909 = (0);
while(true){
if((i__17914__auto___24909 < len__17913__auto___24908)){
args24864.push((arguments[i__17914__auto___24909]));

var G__24910 = (i__17914__auto___24909 + (1));
i__17914__auto___24909 = G__24910;
continue;
} else {
}
break;
}

var G__24866 = args24864.length;
switch (G__24866) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24864.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22662__auto___24912 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22662__auto___24912,out){
return (function (){
var f__22663__auto__ = (function (){var switch__22550__auto__ = ((function (c__22662__auto___24912,out){
return (function (state_24887){
var state_val_24888 = (state_24887[(1)]);
if((state_val_24888 === (7))){
var inst_24883 = (state_24887[(2)]);
var state_24887__$1 = state_24887;
var statearr_24889_24913 = state_24887__$1;
(statearr_24889_24913[(2)] = inst_24883);

(statearr_24889_24913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24888 === (1))){
var state_24887__$1 = state_24887;
var statearr_24890_24914 = state_24887__$1;
(statearr_24890_24914[(2)] = null);

(statearr_24890_24914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24888 === (4))){
var inst_24869 = (state_24887[(7)]);
var inst_24869__$1 = (state_24887[(2)]);
var inst_24870 = (inst_24869__$1 == null);
var state_24887__$1 = (function (){var statearr_24891 = state_24887;
(statearr_24891[(7)] = inst_24869__$1);

return statearr_24891;
})();
if(cljs.core.truth_(inst_24870)){
var statearr_24892_24915 = state_24887__$1;
(statearr_24892_24915[(1)] = (5));

} else {
var statearr_24893_24916 = state_24887__$1;
(statearr_24893_24916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24888 === (6))){
var inst_24869 = (state_24887[(7)]);
var inst_24874 = p.call(null,inst_24869);
var state_24887__$1 = state_24887;
if(cljs.core.truth_(inst_24874)){
var statearr_24894_24917 = state_24887__$1;
(statearr_24894_24917[(1)] = (8));

} else {
var statearr_24895_24918 = state_24887__$1;
(statearr_24895_24918[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24888 === (3))){
var inst_24885 = (state_24887[(2)]);
var state_24887__$1 = state_24887;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24887__$1,inst_24885);
} else {
if((state_val_24888 === (2))){
var state_24887__$1 = state_24887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24887__$1,(4),ch);
} else {
if((state_val_24888 === (11))){
var inst_24877 = (state_24887[(2)]);
var state_24887__$1 = state_24887;
var statearr_24896_24919 = state_24887__$1;
(statearr_24896_24919[(2)] = inst_24877);

(statearr_24896_24919[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24888 === (9))){
var state_24887__$1 = state_24887;
var statearr_24897_24920 = state_24887__$1;
(statearr_24897_24920[(2)] = null);

(statearr_24897_24920[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24888 === (5))){
var inst_24872 = cljs.core.async.close_BANG_.call(null,out);
var state_24887__$1 = state_24887;
var statearr_24898_24921 = state_24887__$1;
(statearr_24898_24921[(2)] = inst_24872);

(statearr_24898_24921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24888 === (10))){
var inst_24880 = (state_24887[(2)]);
var state_24887__$1 = (function (){var statearr_24899 = state_24887;
(statearr_24899[(8)] = inst_24880);

return statearr_24899;
})();
var statearr_24900_24922 = state_24887__$1;
(statearr_24900_24922[(2)] = null);

(statearr_24900_24922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24888 === (8))){
var inst_24869 = (state_24887[(7)]);
var state_24887__$1 = state_24887;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24887__$1,(11),out,inst_24869);
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
});})(c__22662__auto___24912,out))
;
return ((function (switch__22550__auto__,c__22662__auto___24912,out){
return (function() {
var cljs$core$async$state_machine__22551__auto__ = null;
var cljs$core$async$state_machine__22551__auto____0 = (function (){
var statearr_24904 = [null,null,null,null,null,null,null,null,null];
(statearr_24904[(0)] = cljs$core$async$state_machine__22551__auto__);

(statearr_24904[(1)] = (1));

return statearr_24904;
});
var cljs$core$async$state_machine__22551__auto____1 = (function (state_24887){
while(true){
var ret_value__22552__auto__ = (function (){try{while(true){
var result__22553__auto__ = switch__22550__auto__.call(null,state_24887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22553__auto__;
}
break;
}
}catch (e24905){if((e24905 instanceof Object)){
var ex__22554__auto__ = e24905;
var statearr_24906_24923 = state_24887;
(statearr_24906_24923[(5)] = ex__22554__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24924 = state_24887;
state_24887 = G__24924;
continue;
} else {
return ret_value__22552__auto__;
}
break;
}
});
cljs$core$async$state_machine__22551__auto__ = function(state_24887){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22551__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22551__auto____1.call(this,state_24887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22551__auto____0;
cljs$core$async$state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22551__auto____1;
return cljs$core$async$state_machine__22551__auto__;
})()
;})(switch__22550__auto__,c__22662__auto___24912,out))
})();
var state__22664__auto__ = (function (){var statearr_24907 = f__22663__auto__.call(null);
(statearr_24907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22662__auto___24912);

return statearr_24907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22664__auto__);
});})(c__22662__auto___24912,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args24925 = [];
var len__17913__auto___24928 = arguments.length;
var i__17914__auto___24929 = (0);
while(true){
if((i__17914__auto___24929 < len__17913__auto___24928)){
args24925.push((arguments[i__17914__auto___24929]));

var G__24930 = (i__17914__auto___24929 + (1));
i__17914__auto___24929 = G__24930;
continue;
} else {
}
break;
}

var G__24927 = args24925.length;
switch (G__24927) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24925.length)].join('')));

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
var c__22662__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22662__auto__){
return (function (){
var f__22663__auto__ = (function (){var switch__22550__auto__ = ((function (c__22662__auto__){
return (function (state_25097){
var state_val_25098 = (state_25097[(1)]);
if((state_val_25098 === (7))){
var inst_25093 = (state_25097[(2)]);
var state_25097__$1 = state_25097;
var statearr_25099_25140 = state_25097__$1;
(statearr_25099_25140[(2)] = inst_25093);

(statearr_25099_25140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25098 === (20))){
var inst_25063 = (state_25097[(7)]);
var inst_25074 = (state_25097[(2)]);
var inst_25075 = cljs.core.next.call(null,inst_25063);
var inst_25049 = inst_25075;
var inst_25050 = null;
var inst_25051 = (0);
var inst_25052 = (0);
var state_25097__$1 = (function (){var statearr_25100 = state_25097;
(statearr_25100[(8)] = inst_25074);

(statearr_25100[(9)] = inst_25049);

(statearr_25100[(10)] = inst_25051);

(statearr_25100[(11)] = inst_25052);

(statearr_25100[(12)] = inst_25050);

return statearr_25100;
})();
var statearr_25101_25141 = state_25097__$1;
(statearr_25101_25141[(2)] = null);

(statearr_25101_25141[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25098 === (1))){
var state_25097__$1 = state_25097;
var statearr_25102_25142 = state_25097__$1;
(statearr_25102_25142[(2)] = null);

(statearr_25102_25142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25098 === (4))){
var inst_25038 = (state_25097[(13)]);
var inst_25038__$1 = (state_25097[(2)]);
var inst_25039 = (inst_25038__$1 == null);
var state_25097__$1 = (function (){var statearr_25103 = state_25097;
(statearr_25103[(13)] = inst_25038__$1);

return statearr_25103;
})();
if(cljs.core.truth_(inst_25039)){
var statearr_25104_25143 = state_25097__$1;
(statearr_25104_25143[(1)] = (5));

} else {
var statearr_25105_25144 = state_25097__$1;
(statearr_25105_25144[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25098 === (15))){
var state_25097__$1 = state_25097;
var statearr_25109_25145 = state_25097__$1;
(statearr_25109_25145[(2)] = null);

(statearr_25109_25145[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25098 === (21))){
var state_25097__$1 = state_25097;
var statearr_25110_25146 = state_25097__$1;
(statearr_25110_25146[(2)] = null);

(statearr_25110_25146[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25098 === (13))){
var inst_25049 = (state_25097[(9)]);
var inst_25051 = (state_25097[(10)]);
var inst_25052 = (state_25097[(11)]);
var inst_25050 = (state_25097[(12)]);
var inst_25059 = (state_25097[(2)]);
var inst_25060 = (inst_25052 + (1));
var tmp25106 = inst_25049;
var tmp25107 = inst_25051;
var tmp25108 = inst_25050;
var inst_25049__$1 = tmp25106;
var inst_25050__$1 = tmp25108;
var inst_25051__$1 = tmp25107;
var inst_25052__$1 = inst_25060;
var state_25097__$1 = (function (){var statearr_25111 = state_25097;
(statearr_25111[(14)] = inst_25059);

(statearr_25111[(9)] = inst_25049__$1);

(statearr_25111[(10)] = inst_25051__$1);

(statearr_25111[(11)] = inst_25052__$1);

(statearr_25111[(12)] = inst_25050__$1);

return statearr_25111;
})();
var statearr_25112_25147 = state_25097__$1;
(statearr_25112_25147[(2)] = null);

(statearr_25112_25147[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25098 === (22))){
var state_25097__$1 = state_25097;
var statearr_25113_25148 = state_25097__$1;
(statearr_25113_25148[(2)] = null);

(statearr_25113_25148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25098 === (6))){
var inst_25038 = (state_25097[(13)]);
var inst_25047 = f.call(null,inst_25038);
var inst_25048 = cljs.core.seq.call(null,inst_25047);
var inst_25049 = inst_25048;
var inst_25050 = null;
var inst_25051 = (0);
var inst_25052 = (0);
var state_25097__$1 = (function (){var statearr_25114 = state_25097;
(statearr_25114[(9)] = inst_25049);

(statearr_25114[(10)] = inst_25051);

(statearr_25114[(11)] = inst_25052);

(statearr_25114[(12)] = inst_25050);

return statearr_25114;
})();
var statearr_25115_25149 = state_25097__$1;
(statearr_25115_25149[(2)] = null);

(statearr_25115_25149[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25098 === (17))){
var inst_25063 = (state_25097[(7)]);
var inst_25067 = cljs.core.chunk_first.call(null,inst_25063);
var inst_25068 = cljs.core.chunk_rest.call(null,inst_25063);
var inst_25069 = cljs.core.count.call(null,inst_25067);
var inst_25049 = inst_25068;
var inst_25050 = inst_25067;
var inst_25051 = inst_25069;
var inst_25052 = (0);
var state_25097__$1 = (function (){var statearr_25116 = state_25097;
(statearr_25116[(9)] = inst_25049);

(statearr_25116[(10)] = inst_25051);

(statearr_25116[(11)] = inst_25052);

(statearr_25116[(12)] = inst_25050);

return statearr_25116;
})();
var statearr_25117_25150 = state_25097__$1;
(statearr_25117_25150[(2)] = null);

(statearr_25117_25150[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25098 === (3))){
var inst_25095 = (state_25097[(2)]);
var state_25097__$1 = state_25097;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25097__$1,inst_25095);
} else {
if((state_val_25098 === (12))){
var inst_25083 = (state_25097[(2)]);
var state_25097__$1 = state_25097;
var statearr_25118_25151 = state_25097__$1;
(statearr_25118_25151[(2)] = inst_25083);

(statearr_25118_25151[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25098 === (2))){
var state_25097__$1 = state_25097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25097__$1,(4),in$);
} else {
if((state_val_25098 === (23))){
var inst_25091 = (state_25097[(2)]);
var state_25097__$1 = state_25097;
var statearr_25119_25152 = state_25097__$1;
(statearr_25119_25152[(2)] = inst_25091);

(statearr_25119_25152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25098 === (19))){
var inst_25078 = (state_25097[(2)]);
var state_25097__$1 = state_25097;
var statearr_25120_25153 = state_25097__$1;
(statearr_25120_25153[(2)] = inst_25078);

(statearr_25120_25153[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25098 === (11))){
var inst_25049 = (state_25097[(9)]);
var inst_25063 = (state_25097[(7)]);
var inst_25063__$1 = cljs.core.seq.call(null,inst_25049);
var state_25097__$1 = (function (){var statearr_25121 = state_25097;
(statearr_25121[(7)] = inst_25063__$1);

return statearr_25121;
})();
if(inst_25063__$1){
var statearr_25122_25154 = state_25097__$1;
(statearr_25122_25154[(1)] = (14));

} else {
var statearr_25123_25155 = state_25097__$1;
(statearr_25123_25155[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25098 === (9))){
var inst_25085 = (state_25097[(2)]);
var inst_25086 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25097__$1 = (function (){var statearr_25124 = state_25097;
(statearr_25124[(15)] = inst_25085);

return statearr_25124;
})();
if(cljs.core.truth_(inst_25086)){
var statearr_25125_25156 = state_25097__$1;
(statearr_25125_25156[(1)] = (21));

} else {
var statearr_25126_25157 = state_25097__$1;
(statearr_25126_25157[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25098 === (5))){
var inst_25041 = cljs.core.async.close_BANG_.call(null,out);
var state_25097__$1 = state_25097;
var statearr_25127_25158 = state_25097__$1;
(statearr_25127_25158[(2)] = inst_25041);

(statearr_25127_25158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25098 === (14))){
var inst_25063 = (state_25097[(7)]);
var inst_25065 = cljs.core.chunked_seq_QMARK_.call(null,inst_25063);
var state_25097__$1 = state_25097;
if(inst_25065){
var statearr_25128_25159 = state_25097__$1;
(statearr_25128_25159[(1)] = (17));

} else {
var statearr_25129_25160 = state_25097__$1;
(statearr_25129_25160[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25098 === (16))){
var inst_25081 = (state_25097[(2)]);
var state_25097__$1 = state_25097;
var statearr_25130_25161 = state_25097__$1;
(statearr_25130_25161[(2)] = inst_25081);

(statearr_25130_25161[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25098 === (10))){
var inst_25052 = (state_25097[(11)]);
var inst_25050 = (state_25097[(12)]);
var inst_25057 = cljs.core._nth.call(null,inst_25050,inst_25052);
var state_25097__$1 = state_25097;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25097__$1,(13),out,inst_25057);
} else {
if((state_val_25098 === (18))){
var inst_25063 = (state_25097[(7)]);
var inst_25072 = cljs.core.first.call(null,inst_25063);
var state_25097__$1 = state_25097;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25097__$1,(20),out,inst_25072);
} else {
if((state_val_25098 === (8))){
var inst_25051 = (state_25097[(10)]);
var inst_25052 = (state_25097[(11)]);
var inst_25054 = (inst_25052 < inst_25051);
var inst_25055 = inst_25054;
var state_25097__$1 = state_25097;
if(cljs.core.truth_(inst_25055)){
var statearr_25131_25162 = state_25097__$1;
(statearr_25131_25162[(1)] = (10));

} else {
var statearr_25132_25163 = state_25097__$1;
(statearr_25132_25163[(1)] = (11));

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
});})(c__22662__auto__))
;
return ((function (switch__22550__auto__,c__22662__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22551__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22551__auto____0 = (function (){
var statearr_25136 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25136[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22551__auto__);

(statearr_25136[(1)] = (1));

return statearr_25136;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22551__auto____1 = (function (state_25097){
while(true){
var ret_value__22552__auto__ = (function (){try{while(true){
var result__22553__auto__ = switch__22550__auto__.call(null,state_25097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22553__auto__;
}
break;
}
}catch (e25137){if((e25137 instanceof Object)){
var ex__22554__auto__ = e25137;
var statearr_25138_25164 = state_25097;
(statearr_25138_25164[(5)] = ex__22554__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25165 = state_25097;
state_25097 = G__25165;
continue;
} else {
return ret_value__22552__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22551__auto__ = function(state_25097){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22551__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22551__auto____1.call(this,state_25097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22551__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22551__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22551__auto__;
})()
;})(switch__22550__auto__,c__22662__auto__))
})();
var state__22664__auto__ = (function (){var statearr_25139 = f__22663__auto__.call(null);
(statearr_25139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22662__auto__);

return statearr_25139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22664__auto__);
});})(c__22662__auto__))
);

return c__22662__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args25166 = [];
var len__17913__auto___25169 = arguments.length;
var i__17914__auto___25170 = (0);
while(true){
if((i__17914__auto___25170 < len__17913__auto___25169)){
args25166.push((arguments[i__17914__auto___25170]));

var G__25171 = (i__17914__auto___25170 + (1));
i__17914__auto___25170 = G__25171;
continue;
} else {
}
break;
}

var G__25168 = args25166.length;
switch (G__25168) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25166.length)].join('')));

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
var args25173 = [];
var len__17913__auto___25176 = arguments.length;
var i__17914__auto___25177 = (0);
while(true){
if((i__17914__auto___25177 < len__17913__auto___25176)){
args25173.push((arguments[i__17914__auto___25177]));

var G__25178 = (i__17914__auto___25177 + (1));
i__17914__auto___25177 = G__25178;
continue;
} else {
}
break;
}

var G__25175 = args25173.length;
switch (G__25175) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25173.length)].join('')));

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
var args25180 = [];
var len__17913__auto___25231 = arguments.length;
var i__17914__auto___25232 = (0);
while(true){
if((i__17914__auto___25232 < len__17913__auto___25231)){
args25180.push((arguments[i__17914__auto___25232]));

var G__25233 = (i__17914__auto___25232 + (1));
i__17914__auto___25232 = G__25233;
continue;
} else {
}
break;
}

var G__25182 = args25180.length;
switch (G__25182) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25180.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22662__auto___25235 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22662__auto___25235,out){
return (function (){
var f__22663__auto__ = (function (){var switch__22550__auto__ = ((function (c__22662__auto___25235,out){
return (function (state_25206){
var state_val_25207 = (state_25206[(1)]);
if((state_val_25207 === (7))){
var inst_25201 = (state_25206[(2)]);
var state_25206__$1 = state_25206;
var statearr_25208_25236 = state_25206__$1;
(statearr_25208_25236[(2)] = inst_25201);

(statearr_25208_25236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25207 === (1))){
var inst_25183 = null;
var state_25206__$1 = (function (){var statearr_25209 = state_25206;
(statearr_25209[(7)] = inst_25183);

return statearr_25209;
})();
var statearr_25210_25237 = state_25206__$1;
(statearr_25210_25237[(2)] = null);

(statearr_25210_25237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25207 === (4))){
var inst_25186 = (state_25206[(8)]);
var inst_25186__$1 = (state_25206[(2)]);
var inst_25187 = (inst_25186__$1 == null);
var inst_25188 = cljs.core.not.call(null,inst_25187);
var state_25206__$1 = (function (){var statearr_25211 = state_25206;
(statearr_25211[(8)] = inst_25186__$1);

return statearr_25211;
})();
if(inst_25188){
var statearr_25212_25238 = state_25206__$1;
(statearr_25212_25238[(1)] = (5));

} else {
var statearr_25213_25239 = state_25206__$1;
(statearr_25213_25239[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25207 === (6))){
var state_25206__$1 = state_25206;
var statearr_25214_25240 = state_25206__$1;
(statearr_25214_25240[(2)] = null);

(statearr_25214_25240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25207 === (3))){
var inst_25203 = (state_25206[(2)]);
var inst_25204 = cljs.core.async.close_BANG_.call(null,out);
var state_25206__$1 = (function (){var statearr_25215 = state_25206;
(statearr_25215[(9)] = inst_25203);

return statearr_25215;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25206__$1,inst_25204);
} else {
if((state_val_25207 === (2))){
var state_25206__$1 = state_25206;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25206__$1,(4),ch);
} else {
if((state_val_25207 === (11))){
var inst_25186 = (state_25206[(8)]);
var inst_25195 = (state_25206[(2)]);
var inst_25183 = inst_25186;
var state_25206__$1 = (function (){var statearr_25216 = state_25206;
(statearr_25216[(7)] = inst_25183);

(statearr_25216[(10)] = inst_25195);

return statearr_25216;
})();
var statearr_25217_25241 = state_25206__$1;
(statearr_25217_25241[(2)] = null);

(statearr_25217_25241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25207 === (9))){
var inst_25186 = (state_25206[(8)]);
var state_25206__$1 = state_25206;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25206__$1,(11),out,inst_25186);
} else {
if((state_val_25207 === (5))){
var inst_25186 = (state_25206[(8)]);
var inst_25183 = (state_25206[(7)]);
var inst_25190 = cljs.core._EQ_.call(null,inst_25186,inst_25183);
var state_25206__$1 = state_25206;
if(inst_25190){
var statearr_25219_25242 = state_25206__$1;
(statearr_25219_25242[(1)] = (8));

} else {
var statearr_25220_25243 = state_25206__$1;
(statearr_25220_25243[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25207 === (10))){
var inst_25198 = (state_25206[(2)]);
var state_25206__$1 = state_25206;
var statearr_25221_25244 = state_25206__$1;
(statearr_25221_25244[(2)] = inst_25198);

(statearr_25221_25244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25207 === (8))){
var inst_25183 = (state_25206[(7)]);
var tmp25218 = inst_25183;
var inst_25183__$1 = tmp25218;
var state_25206__$1 = (function (){var statearr_25222 = state_25206;
(statearr_25222[(7)] = inst_25183__$1);

return statearr_25222;
})();
var statearr_25223_25245 = state_25206__$1;
(statearr_25223_25245[(2)] = null);

(statearr_25223_25245[(1)] = (2));


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
});})(c__22662__auto___25235,out))
;
return ((function (switch__22550__auto__,c__22662__auto___25235,out){
return (function() {
var cljs$core$async$state_machine__22551__auto__ = null;
var cljs$core$async$state_machine__22551__auto____0 = (function (){
var statearr_25227 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25227[(0)] = cljs$core$async$state_machine__22551__auto__);

(statearr_25227[(1)] = (1));

return statearr_25227;
});
var cljs$core$async$state_machine__22551__auto____1 = (function (state_25206){
while(true){
var ret_value__22552__auto__ = (function (){try{while(true){
var result__22553__auto__ = switch__22550__auto__.call(null,state_25206);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22553__auto__;
}
break;
}
}catch (e25228){if((e25228 instanceof Object)){
var ex__22554__auto__ = e25228;
var statearr_25229_25246 = state_25206;
(statearr_25229_25246[(5)] = ex__22554__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25206);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25247 = state_25206;
state_25206 = G__25247;
continue;
} else {
return ret_value__22552__auto__;
}
break;
}
});
cljs$core$async$state_machine__22551__auto__ = function(state_25206){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22551__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22551__auto____1.call(this,state_25206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22551__auto____0;
cljs$core$async$state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22551__auto____1;
return cljs$core$async$state_machine__22551__auto__;
})()
;})(switch__22550__auto__,c__22662__auto___25235,out))
})();
var state__22664__auto__ = (function (){var statearr_25230 = f__22663__auto__.call(null);
(statearr_25230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22662__auto___25235);

return statearr_25230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22664__auto__);
});})(c__22662__auto___25235,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args25248 = [];
var len__17913__auto___25318 = arguments.length;
var i__17914__auto___25319 = (0);
while(true){
if((i__17914__auto___25319 < len__17913__auto___25318)){
args25248.push((arguments[i__17914__auto___25319]));

var G__25320 = (i__17914__auto___25319 + (1));
i__17914__auto___25319 = G__25320;
continue;
} else {
}
break;
}

var G__25250 = args25248.length;
switch (G__25250) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25248.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22662__auto___25322 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22662__auto___25322,out){
return (function (){
var f__22663__auto__ = (function (){var switch__22550__auto__ = ((function (c__22662__auto___25322,out){
return (function (state_25288){
var state_val_25289 = (state_25288[(1)]);
if((state_val_25289 === (7))){
var inst_25284 = (state_25288[(2)]);
var state_25288__$1 = state_25288;
var statearr_25290_25323 = state_25288__$1;
(statearr_25290_25323[(2)] = inst_25284);

(statearr_25290_25323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25289 === (1))){
var inst_25251 = (new Array(n));
var inst_25252 = inst_25251;
var inst_25253 = (0);
var state_25288__$1 = (function (){var statearr_25291 = state_25288;
(statearr_25291[(7)] = inst_25252);

(statearr_25291[(8)] = inst_25253);

return statearr_25291;
})();
var statearr_25292_25324 = state_25288__$1;
(statearr_25292_25324[(2)] = null);

(statearr_25292_25324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25289 === (4))){
var inst_25256 = (state_25288[(9)]);
var inst_25256__$1 = (state_25288[(2)]);
var inst_25257 = (inst_25256__$1 == null);
var inst_25258 = cljs.core.not.call(null,inst_25257);
var state_25288__$1 = (function (){var statearr_25293 = state_25288;
(statearr_25293[(9)] = inst_25256__$1);

return statearr_25293;
})();
if(inst_25258){
var statearr_25294_25325 = state_25288__$1;
(statearr_25294_25325[(1)] = (5));

} else {
var statearr_25295_25326 = state_25288__$1;
(statearr_25295_25326[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25289 === (15))){
var inst_25278 = (state_25288[(2)]);
var state_25288__$1 = state_25288;
var statearr_25296_25327 = state_25288__$1;
(statearr_25296_25327[(2)] = inst_25278);

(statearr_25296_25327[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25289 === (13))){
var state_25288__$1 = state_25288;
var statearr_25297_25328 = state_25288__$1;
(statearr_25297_25328[(2)] = null);

(statearr_25297_25328[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25289 === (6))){
var inst_25253 = (state_25288[(8)]);
var inst_25274 = (inst_25253 > (0));
var state_25288__$1 = state_25288;
if(cljs.core.truth_(inst_25274)){
var statearr_25298_25329 = state_25288__$1;
(statearr_25298_25329[(1)] = (12));

} else {
var statearr_25299_25330 = state_25288__$1;
(statearr_25299_25330[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25289 === (3))){
var inst_25286 = (state_25288[(2)]);
var state_25288__$1 = state_25288;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25288__$1,inst_25286);
} else {
if((state_val_25289 === (12))){
var inst_25252 = (state_25288[(7)]);
var inst_25276 = cljs.core.vec.call(null,inst_25252);
var state_25288__$1 = state_25288;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25288__$1,(15),out,inst_25276);
} else {
if((state_val_25289 === (2))){
var state_25288__$1 = state_25288;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25288__$1,(4),ch);
} else {
if((state_val_25289 === (11))){
var inst_25268 = (state_25288[(2)]);
var inst_25269 = (new Array(n));
var inst_25252 = inst_25269;
var inst_25253 = (0);
var state_25288__$1 = (function (){var statearr_25300 = state_25288;
(statearr_25300[(10)] = inst_25268);

(statearr_25300[(7)] = inst_25252);

(statearr_25300[(8)] = inst_25253);

return statearr_25300;
})();
var statearr_25301_25331 = state_25288__$1;
(statearr_25301_25331[(2)] = null);

(statearr_25301_25331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25289 === (9))){
var inst_25252 = (state_25288[(7)]);
var inst_25266 = cljs.core.vec.call(null,inst_25252);
var state_25288__$1 = state_25288;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25288__$1,(11),out,inst_25266);
} else {
if((state_val_25289 === (5))){
var inst_25256 = (state_25288[(9)]);
var inst_25261 = (state_25288[(11)]);
var inst_25252 = (state_25288[(7)]);
var inst_25253 = (state_25288[(8)]);
var inst_25260 = (inst_25252[inst_25253] = inst_25256);
var inst_25261__$1 = (inst_25253 + (1));
var inst_25262 = (inst_25261__$1 < n);
var state_25288__$1 = (function (){var statearr_25302 = state_25288;
(statearr_25302[(11)] = inst_25261__$1);

(statearr_25302[(12)] = inst_25260);

return statearr_25302;
})();
if(cljs.core.truth_(inst_25262)){
var statearr_25303_25332 = state_25288__$1;
(statearr_25303_25332[(1)] = (8));

} else {
var statearr_25304_25333 = state_25288__$1;
(statearr_25304_25333[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25289 === (14))){
var inst_25281 = (state_25288[(2)]);
var inst_25282 = cljs.core.async.close_BANG_.call(null,out);
var state_25288__$1 = (function (){var statearr_25306 = state_25288;
(statearr_25306[(13)] = inst_25281);

return statearr_25306;
})();
var statearr_25307_25334 = state_25288__$1;
(statearr_25307_25334[(2)] = inst_25282);

(statearr_25307_25334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25289 === (10))){
var inst_25272 = (state_25288[(2)]);
var state_25288__$1 = state_25288;
var statearr_25308_25335 = state_25288__$1;
(statearr_25308_25335[(2)] = inst_25272);

(statearr_25308_25335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25289 === (8))){
var inst_25261 = (state_25288[(11)]);
var inst_25252 = (state_25288[(7)]);
var tmp25305 = inst_25252;
var inst_25252__$1 = tmp25305;
var inst_25253 = inst_25261;
var state_25288__$1 = (function (){var statearr_25309 = state_25288;
(statearr_25309[(7)] = inst_25252__$1);

(statearr_25309[(8)] = inst_25253);

return statearr_25309;
})();
var statearr_25310_25336 = state_25288__$1;
(statearr_25310_25336[(2)] = null);

(statearr_25310_25336[(1)] = (2));


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
});})(c__22662__auto___25322,out))
;
return ((function (switch__22550__auto__,c__22662__auto___25322,out){
return (function() {
var cljs$core$async$state_machine__22551__auto__ = null;
var cljs$core$async$state_machine__22551__auto____0 = (function (){
var statearr_25314 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25314[(0)] = cljs$core$async$state_machine__22551__auto__);

(statearr_25314[(1)] = (1));

return statearr_25314;
});
var cljs$core$async$state_machine__22551__auto____1 = (function (state_25288){
while(true){
var ret_value__22552__auto__ = (function (){try{while(true){
var result__22553__auto__ = switch__22550__auto__.call(null,state_25288);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22553__auto__;
}
break;
}
}catch (e25315){if((e25315 instanceof Object)){
var ex__22554__auto__ = e25315;
var statearr_25316_25337 = state_25288;
(statearr_25316_25337[(5)] = ex__22554__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25315;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25338 = state_25288;
state_25288 = G__25338;
continue;
} else {
return ret_value__22552__auto__;
}
break;
}
});
cljs$core$async$state_machine__22551__auto__ = function(state_25288){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22551__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22551__auto____1.call(this,state_25288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22551__auto____0;
cljs$core$async$state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22551__auto____1;
return cljs$core$async$state_machine__22551__auto__;
})()
;})(switch__22550__auto__,c__22662__auto___25322,out))
})();
var state__22664__auto__ = (function (){var statearr_25317 = f__22663__auto__.call(null);
(statearr_25317[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22662__auto___25322);

return statearr_25317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22664__auto__);
});})(c__22662__auto___25322,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args25339 = [];
var len__17913__auto___25413 = arguments.length;
var i__17914__auto___25414 = (0);
while(true){
if((i__17914__auto___25414 < len__17913__auto___25413)){
args25339.push((arguments[i__17914__auto___25414]));

var G__25415 = (i__17914__auto___25414 + (1));
i__17914__auto___25414 = G__25415;
continue;
} else {
}
break;
}

var G__25341 = args25339.length;
switch (G__25341) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25339.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22662__auto___25417 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22662__auto___25417,out){
return (function (){
var f__22663__auto__ = (function (){var switch__22550__auto__ = ((function (c__22662__auto___25417,out){
return (function (state_25383){
var state_val_25384 = (state_25383[(1)]);
if((state_val_25384 === (7))){
var inst_25379 = (state_25383[(2)]);
var state_25383__$1 = state_25383;
var statearr_25385_25418 = state_25383__$1;
(statearr_25385_25418[(2)] = inst_25379);

(statearr_25385_25418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25384 === (1))){
var inst_25342 = [];
var inst_25343 = inst_25342;
var inst_25344 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25383__$1 = (function (){var statearr_25386 = state_25383;
(statearr_25386[(7)] = inst_25343);

(statearr_25386[(8)] = inst_25344);

return statearr_25386;
})();
var statearr_25387_25419 = state_25383__$1;
(statearr_25387_25419[(2)] = null);

(statearr_25387_25419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25384 === (4))){
var inst_25347 = (state_25383[(9)]);
var inst_25347__$1 = (state_25383[(2)]);
var inst_25348 = (inst_25347__$1 == null);
var inst_25349 = cljs.core.not.call(null,inst_25348);
var state_25383__$1 = (function (){var statearr_25388 = state_25383;
(statearr_25388[(9)] = inst_25347__$1);

return statearr_25388;
})();
if(inst_25349){
var statearr_25389_25420 = state_25383__$1;
(statearr_25389_25420[(1)] = (5));

} else {
var statearr_25390_25421 = state_25383__$1;
(statearr_25390_25421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25384 === (15))){
var inst_25373 = (state_25383[(2)]);
var state_25383__$1 = state_25383;
var statearr_25391_25422 = state_25383__$1;
(statearr_25391_25422[(2)] = inst_25373);

(statearr_25391_25422[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25384 === (13))){
var state_25383__$1 = state_25383;
var statearr_25392_25423 = state_25383__$1;
(statearr_25392_25423[(2)] = null);

(statearr_25392_25423[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25384 === (6))){
var inst_25343 = (state_25383[(7)]);
var inst_25368 = inst_25343.length;
var inst_25369 = (inst_25368 > (0));
var state_25383__$1 = state_25383;
if(cljs.core.truth_(inst_25369)){
var statearr_25393_25424 = state_25383__$1;
(statearr_25393_25424[(1)] = (12));

} else {
var statearr_25394_25425 = state_25383__$1;
(statearr_25394_25425[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25384 === (3))){
var inst_25381 = (state_25383[(2)]);
var state_25383__$1 = state_25383;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25383__$1,inst_25381);
} else {
if((state_val_25384 === (12))){
var inst_25343 = (state_25383[(7)]);
var inst_25371 = cljs.core.vec.call(null,inst_25343);
var state_25383__$1 = state_25383;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25383__$1,(15),out,inst_25371);
} else {
if((state_val_25384 === (2))){
var state_25383__$1 = state_25383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25383__$1,(4),ch);
} else {
if((state_val_25384 === (11))){
var inst_25347 = (state_25383[(9)]);
var inst_25351 = (state_25383[(10)]);
var inst_25361 = (state_25383[(2)]);
var inst_25362 = [];
var inst_25363 = inst_25362.push(inst_25347);
var inst_25343 = inst_25362;
var inst_25344 = inst_25351;
var state_25383__$1 = (function (){var statearr_25395 = state_25383;
(statearr_25395[(7)] = inst_25343);

(statearr_25395[(11)] = inst_25363);

(statearr_25395[(8)] = inst_25344);

(statearr_25395[(12)] = inst_25361);

return statearr_25395;
})();
var statearr_25396_25426 = state_25383__$1;
(statearr_25396_25426[(2)] = null);

(statearr_25396_25426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25384 === (9))){
var inst_25343 = (state_25383[(7)]);
var inst_25359 = cljs.core.vec.call(null,inst_25343);
var state_25383__$1 = state_25383;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25383__$1,(11),out,inst_25359);
} else {
if((state_val_25384 === (5))){
var inst_25344 = (state_25383[(8)]);
var inst_25347 = (state_25383[(9)]);
var inst_25351 = (state_25383[(10)]);
var inst_25351__$1 = f.call(null,inst_25347);
var inst_25352 = cljs.core._EQ_.call(null,inst_25351__$1,inst_25344);
var inst_25353 = cljs.core.keyword_identical_QMARK_.call(null,inst_25344,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25354 = (inst_25352) || (inst_25353);
var state_25383__$1 = (function (){var statearr_25397 = state_25383;
(statearr_25397[(10)] = inst_25351__$1);

return statearr_25397;
})();
if(cljs.core.truth_(inst_25354)){
var statearr_25398_25427 = state_25383__$1;
(statearr_25398_25427[(1)] = (8));

} else {
var statearr_25399_25428 = state_25383__$1;
(statearr_25399_25428[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25384 === (14))){
var inst_25376 = (state_25383[(2)]);
var inst_25377 = cljs.core.async.close_BANG_.call(null,out);
var state_25383__$1 = (function (){var statearr_25401 = state_25383;
(statearr_25401[(13)] = inst_25376);

return statearr_25401;
})();
var statearr_25402_25429 = state_25383__$1;
(statearr_25402_25429[(2)] = inst_25377);

(statearr_25402_25429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25384 === (10))){
var inst_25366 = (state_25383[(2)]);
var state_25383__$1 = state_25383;
var statearr_25403_25430 = state_25383__$1;
(statearr_25403_25430[(2)] = inst_25366);

(statearr_25403_25430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25384 === (8))){
var inst_25343 = (state_25383[(7)]);
var inst_25347 = (state_25383[(9)]);
var inst_25351 = (state_25383[(10)]);
var inst_25356 = inst_25343.push(inst_25347);
var tmp25400 = inst_25343;
var inst_25343__$1 = tmp25400;
var inst_25344 = inst_25351;
var state_25383__$1 = (function (){var statearr_25404 = state_25383;
(statearr_25404[(7)] = inst_25343__$1);

(statearr_25404[(14)] = inst_25356);

(statearr_25404[(8)] = inst_25344);

return statearr_25404;
})();
var statearr_25405_25431 = state_25383__$1;
(statearr_25405_25431[(2)] = null);

(statearr_25405_25431[(1)] = (2));


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
});})(c__22662__auto___25417,out))
;
return ((function (switch__22550__auto__,c__22662__auto___25417,out){
return (function() {
var cljs$core$async$state_machine__22551__auto__ = null;
var cljs$core$async$state_machine__22551__auto____0 = (function (){
var statearr_25409 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25409[(0)] = cljs$core$async$state_machine__22551__auto__);

(statearr_25409[(1)] = (1));

return statearr_25409;
});
var cljs$core$async$state_machine__22551__auto____1 = (function (state_25383){
while(true){
var ret_value__22552__auto__ = (function (){try{while(true){
var result__22553__auto__ = switch__22550__auto__.call(null,state_25383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22553__auto__;
}
break;
}
}catch (e25410){if((e25410 instanceof Object)){
var ex__22554__auto__ = e25410;
var statearr_25411_25432 = state_25383;
(statearr_25411_25432[(5)] = ex__22554__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25433 = state_25383;
state_25383 = G__25433;
continue;
} else {
return ret_value__22552__auto__;
}
break;
}
});
cljs$core$async$state_machine__22551__auto__ = function(state_25383){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22551__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22551__auto____1.call(this,state_25383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22551__auto____0;
cljs$core$async$state_machine__22551__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22551__auto____1;
return cljs$core$async$state_machine__22551__auto__;
})()
;})(switch__22550__auto__,c__22662__auto___25417,out))
})();
var state__22664__auto__ = (function (){var statearr_25412 = f__22663__auto__.call(null);
(statearr_25412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22662__auto___25417);

return statearr_25412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22664__auto__);
});})(c__22662__auto___25417,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map