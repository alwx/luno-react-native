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
var args22706 = [];
var len__17913__auto___22712 = arguments.length;
var i__17914__auto___22713 = (0);
while(true){
if((i__17914__auto___22713 < len__17913__auto___22712)){
args22706.push((arguments[i__17914__auto___22713]));

var G__22714 = (i__17914__auto___22713 + (1));
i__17914__auto___22713 = G__22714;
continue;
} else {
}
break;
}

var G__22708 = args22706.length;
switch (G__22708) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22706.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async22709 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22709 = (function (f,blockable,meta22710){
this.f = f;
this.blockable = blockable;
this.meta22710 = meta22710;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22711,meta22710__$1){
var self__ = this;
var _22711__$1 = this;
return (new cljs.core.async.t_cljs$core$async22709(self__.f,self__.blockable,meta22710__$1));
});

cljs.core.async.t_cljs$core$async22709.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22711){
var self__ = this;
var _22711__$1 = this;
return self__.meta22710;
});

cljs.core.async.t_cljs$core$async22709.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22709.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22709.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async22709.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22709.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22710","meta22710",-1503771000,null)], null);
});

cljs.core.async.t_cljs$core$async22709.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22709.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22709";

cljs.core.async.t_cljs$core$async22709.cljs$lang$ctorPrWriter = (function (this__17453__auto__,writer__17454__auto__,opt__17455__auto__){
return cljs.core._write.call(null,writer__17454__auto__,"cljs.core.async/t_cljs$core$async22709");
});

cljs.core.async.__GT_t_cljs$core$async22709 = (function cljs$core$async$__GT_t_cljs$core$async22709(f__$1,blockable__$1,meta22710){
return (new cljs.core.async.t_cljs$core$async22709(f__$1,blockable__$1,meta22710));
});

}

return (new cljs.core.async.t_cljs$core$async22709(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args22718 = [];
var len__17913__auto___22721 = arguments.length;
var i__17914__auto___22722 = (0);
while(true){
if((i__17914__auto___22722 < len__17913__auto___22721)){
args22718.push((arguments[i__17914__auto___22722]));

var G__22723 = (i__17914__auto___22722 + (1));
i__17914__auto___22722 = G__22723;
continue;
} else {
}
break;
}

var G__22720 = args22718.length;
switch (G__22720) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22718.length)].join('')));

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
var args22725 = [];
var len__17913__auto___22728 = arguments.length;
var i__17914__auto___22729 = (0);
while(true){
if((i__17914__auto___22729 < len__17913__auto___22728)){
args22725.push((arguments[i__17914__auto___22729]));

var G__22730 = (i__17914__auto___22729 + (1));
i__17914__auto___22729 = G__22730;
continue;
} else {
}
break;
}

var G__22727 = args22725.length;
switch (G__22727) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22725.length)].join('')));

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
var args22732 = [];
var len__17913__auto___22735 = arguments.length;
var i__17914__auto___22736 = (0);
while(true){
if((i__17914__auto___22736 < len__17913__auto___22735)){
args22732.push((arguments[i__17914__auto___22736]));

var G__22737 = (i__17914__auto___22736 + (1));
i__17914__auto___22736 = G__22737;
continue;
} else {
}
break;
}

var G__22734 = args22732.length;
switch (G__22734) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22732.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_22739 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22739);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22739,ret){
return (function (){
return fn1.call(null,val_22739);
});})(val_22739,ret))
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
var args22740 = [];
var len__17913__auto___22743 = arguments.length;
var i__17914__auto___22744 = (0);
while(true){
if((i__17914__auto___22744 < len__17913__auto___22743)){
args22740.push((arguments[i__17914__auto___22744]));

var G__22745 = (i__17914__auto___22744 + (1));
i__17914__auto___22744 = G__22745;
continue;
} else {
}
break;
}

var G__22742 = args22740.length;
switch (G__22742) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22740.length)].join('')));

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
var n__17758__auto___22747 = n;
var x_22748 = (0);
while(true){
if((x_22748 < n__17758__auto___22747)){
(a[x_22748] = (0));

var G__22749 = (x_22748 + (1));
x_22748 = G__22749;
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

var G__22750 = (i + (1));
i = G__22750;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async22754 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22754 = (function (alt_flag,flag,meta22755){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta22755 = meta22755;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22756,meta22755__$1){
var self__ = this;
var _22756__$1 = this;
return (new cljs.core.async.t_cljs$core$async22754(self__.alt_flag,self__.flag,meta22755__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22754.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22756){
var self__ = this;
var _22756__$1 = this;
return self__.meta22755;
});})(flag))
;

cljs.core.async.t_cljs$core$async22754.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22754.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22754.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22754.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22754.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22755","meta22755",-1213557224,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22754.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22754.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22754";

cljs.core.async.t_cljs$core$async22754.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17453__auto__,writer__17454__auto__,opt__17455__auto__){
return cljs.core._write.call(null,writer__17454__auto__,"cljs.core.async/t_cljs$core$async22754");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async22754 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22754(alt_flag__$1,flag__$1,meta22755){
return (new cljs.core.async.t_cljs$core$async22754(alt_flag__$1,flag__$1,meta22755));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22754(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22760 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22760 = (function (alt_handler,flag,cb,meta22761){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta22761 = meta22761;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22760.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22762,meta22761__$1){
var self__ = this;
var _22762__$1 = this;
return (new cljs.core.async.t_cljs$core$async22760(self__.alt_handler,self__.flag,self__.cb,meta22761__$1));
});

cljs.core.async.t_cljs$core$async22760.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22762){
var self__ = this;
var _22762__$1 = this;
return self__.meta22761;
});

cljs.core.async.t_cljs$core$async22760.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22760.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22760.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22760.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22760.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22761","meta22761",-1677537801,null)], null);
});

cljs.core.async.t_cljs$core$async22760.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22760.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22760";

cljs.core.async.t_cljs$core$async22760.cljs$lang$ctorPrWriter = (function (this__17453__auto__,writer__17454__auto__,opt__17455__auto__){
return cljs.core._write.call(null,writer__17454__auto__,"cljs.core.async/t_cljs$core$async22760");
});

cljs.core.async.__GT_t_cljs$core$async22760 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22760(alt_handler__$1,flag__$1,cb__$1,meta22761){
return (new cljs.core.async.t_cljs$core$async22760(alt_handler__$1,flag__$1,cb__$1,meta22761));
});

}

return (new cljs.core.async.t_cljs$core$async22760(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__22763_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22763_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22764_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22764_SHARP_,port], null));
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
var G__22765 = (i + (1));
i = G__22765;
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
var len__17913__auto___22771 = arguments.length;
var i__17914__auto___22772 = (0);
while(true){
if((i__17914__auto___22772 < len__17913__auto___22771)){
args__17920__auto__.push((arguments[i__17914__auto___22772]));

var G__22773 = (i__17914__auto___22772 + (1));
i__17914__auto___22772 = G__22773;
continue;
} else {
}
break;
}

var argseq__17921__auto__ = ((((1) < args__17920__auto__.length))?(new cljs.core.IndexedSeq(args__17920__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17921__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22768){
var map__22769 = p__22768;
var map__22769__$1 = ((((!((map__22769 == null)))?((((map__22769.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22769.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22769):map__22769);
var opts = map__22769__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22766){
var G__22767 = cljs.core.first.call(null,seq22766);
var seq22766__$1 = cljs.core.next.call(null,seq22766);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22767,seq22766__$1);
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
var args22774 = [];
var len__17913__auto___22824 = arguments.length;
var i__17914__auto___22825 = (0);
while(true){
if((i__17914__auto___22825 < len__17913__auto___22824)){
args22774.push((arguments[i__17914__auto___22825]));

var G__22826 = (i__17914__auto___22825 + (1));
i__17914__auto___22825 = G__22826;
continue;
} else {
}
break;
}

var G__22776 = args22774.length;
switch (G__22776) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22774.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22661__auto___22828 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22661__auto___22828){
return (function (){
var f__22662__auto__ = (function (){var switch__22549__auto__ = ((function (c__22661__auto___22828){
return (function (state_22800){
var state_val_22801 = (state_22800[(1)]);
if((state_val_22801 === (7))){
var inst_22796 = (state_22800[(2)]);
var state_22800__$1 = state_22800;
var statearr_22802_22829 = state_22800__$1;
(statearr_22802_22829[(2)] = inst_22796);

(statearr_22802_22829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22801 === (1))){
var state_22800__$1 = state_22800;
var statearr_22803_22830 = state_22800__$1;
(statearr_22803_22830[(2)] = null);

(statearr_22803_22830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22801 === (4))){
var inst_22779 = (state_22800[(7)]);
var inst_22779__$1 = (state_22800[(2)]);
var inst_22780 = (inst_22779__$1 == null);
var state_22800__$1 = (function (){var statearr_22804 = state_22800;
(statearr_22804[(7)] = inst_22779__$1);

return statearr_22804;
})();
if(cljs.core.truth_(inst_22780)){
var statearr_22805_22831 = state_22800__$1;
(statearr_22805_22831[(1)] = (5));

} else {
var statearr_22806_22832 = state_22800__$1;
(statearr_22806_22832[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22801 === (13))){
var state_22800__$1 = state_22800;
var statearr_22807_22833 = state_22800__$1;
(statearr_22807_22833[(2)] = null);

(statearr_22807_22833[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22801 === (6))){
var inst_22779 = (state_22800[(7)]);
var state_22800__$1 = state_22800;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22800__$1,(11),to,inst_22779);
} else {
if((state_val_22801 === (3))){
var inst_22798 = (state_22800[(2)]);
var state_22800__$1 = state_22800;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22800__$1,inst_22798);
} else {
if((state_val_22801 === (12))){
var state_22800__$1 = state_22800;
var statearr_22808_22834 = state_22800__$1;
(statearr_22808_22834[(2)] = null);

(statearr_22808_22834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22801 === (2))){
var state_22800__$1 = state_22800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22800__$1,(4),from);
} else {
if((state_val_22801 === (11))){
var inst_22789 = (state_22800[(2)]);
var state_22800__$1 = state_22800;
if(cljs.core.truth_(inst_22789)){
var statearr_22809_22835 = state_22800__$1;
(statearr_22809_22835[(1)] = (12));

} else {
var statearr_22810_22836 = state_22800__$1;
(statearr_22810_22836[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22801 === (9))){
var state_22800__$1 = state_22800;
var statearr_22811_22837 = state_22800__$1;
(statearr_22811_22837[(2)] = null);

(statearr_22811_22837[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22801 === (5))){
var state_22800__$1 = state_22800;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22812_22838 = state_22800__$1;
(statearr_22812_22838[(1)] = (8));

} else {
var statearr_22813_22839 = state_22800__$1;
(statearr_22813_22839[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22801 === (14))){
var inst_22794 = (state_22800[(2)]);
var state_22800__$1 = state_22800;
var statearr_22814_22840 = state_22800__$1;
(statearr_22814_22840[(2)] = inst_22794);

(statearr_22814_22840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22801 === (10))){
var inst_22786 = (state_22800[(2)]);
var state_22800__$1 = state_22800;
var statearr_22815_22841 = state_22800__$1;
(statearr_22815_22841[(2)] = inst_22786);

(statearr_22815_22841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22801 === (8))){
var inst_22783 = cljs.core.async.close_BANG_.call(null,to);
var state_22800__$1 = state_22800;
var statearr_22816_22842 = state_22800__$1;
(statearr_22816_22842[(2)] = inst_22783);

(statearr_22816_22842[(1)] = (10));


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
});})(c__22661__auto___22828))
;
return ((function (switch__22549__auto__,c__22661__auto___22828){
return (function() {
var cljs$core$async$state_machine__22550__auto__ = null;
var cljs$core$async$state_machine__22550__auto____0 = (function (){
var statearr_22820 = [null,null,null,null,null,null,null,null];
(statearr_22820[(0)] = cljs$core$async$state_machine__22550__auto__);

(statearr_22820[(1)] = (1));

return statearr_22820;
});
var cljs$core$async$state_machine__22550__auto____1 = (function (state_22800){
while(true){
var ret_value__22551__auto__ = (function (){try{while(true){
var result__22552__auto__ = switch__22549__auto__.call(null,state_22800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22552__auto__;
}
break;
}
}catch (e22821){if((e22821 instanceof Object)){
var ex__22553__auto__ = e22821;
var statearr_22822_22843 = state_22800;
(statearr_22822_22843[(5)] = ex__22553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22844 = state_22800;
state_22800 = G__22844;
continue;
} else {
return ret_value__22551__auto__;
}
break;
}
});
cljs$core$async$state_machine__22550__auto__ = function(state_22800){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22550__auto____1.call(this,state_22800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22550__auto____0;
cljs$core$async$state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22550__auto____1;
return cljs$core$async$state_machine__22550__auto__;
})()
;})(switch__22549__auto__,c__22661__auto___22828))
})();
var state__22663__auto__ = (function (){var statearr_22823 = f__22662__auto__.call(null);
(statearr_22823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22661__auto___22828);

return statearr_22823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22663__auto__);
});})(c__22661__auto___22828))
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
return (function (p__23028){
var vec__23029 = p__23028;
var v = cljs.core.nth.call(null,vec__23029,(0),null);
var p = cljs.core.nth.call(null,vec__23029,(1),null);
var job = vec__23029;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22661__auto___23211 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22661__auto___23211,res,vec__23029,v,p,job,jobs,results){
return (function (){
var f__22662__auto__ = (function (){var switch__22549__auto__ = ((function (c__22661__auto___23211,res,vec__23029,v,p,job,jobs,results){
return (function (state_23034){
var state_val_23035 = (state_23034[(1)]);
if((state_val_23035 === (1))){
var state_23034__$1 = state_23034;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23034__$1,(2),res,v);
} else {
if((state_val_23035 === (2))){
var inst_23031 = (state_23034[(2)]);
var inst_23032 = cljs.core.async.close_BANG_.call(null,res);
var state_23034__$1 = (function (){var statearr_23036 = state_23034;
(statearr_23036[(7)] = inst_23031);

return statearr_23036;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23034__$1,inst_23032);
} else {
return null;
}
}
});})(c__22661__auto___23211,res,vec__23029,v,p,job,jobs,results))
;
return ((function (switch__22549__auto__,c__22661__auto___23211,res,vec__23029,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22550__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22550__auto____0 = (function (){
var statearr_23040 = [null,null,null,null,null,null,null,null];
(statearr_23040[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22550__auto__);

(statearr_23040[(1)] = (1));

return statearr_23040;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22550__auto____1 = (function (state_23034){
while(true){
var ret_value__22551__auto__ = (function (){try{while(true){
var result__22552__auto__ = switch__22549__auto__.call(null,state_23034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22552__auto__;
}
break;
}
}catch (e23041){if((e23041 instanceof Object)){
var ex__22553__auto__ = e23041;
var statearr_23042_23212 = state_23034;
(statearr_23042_23212[(5)] = ex__22553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23213 = state_23034;
state_23034 = G__23213;
continue;
} else {
return ret_value__22551__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22550__auto__ = function(state_23034){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22550__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22550__auto____1.call(this,state_23034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22550__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22550__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22550__auto__;
})()
;})(switch__22549__auto__,c__22661__auto___23211,res,vec__23029,v,p,job,jobs,results))
})();
var state__22663__auto__ = (function (){var statearr_23043 = f__22662__auto__.call(null);
(statearr_23043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22661__auto___23211);

return statearr_23043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22663__auto__);
});})(c__22661__auto___23211,res,vec__23029,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23044){
var vec__23045 = p__23044;
var v = cljs.core.nth.call(null,vec__23045,(0),null);
var p = cljs.core.nth.call(null,vec__23045,(1),null);
var job = vec__23045;
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
var n__17758__auto___23214 = n;
var __23215 = (0);
while(true){
if((__23215 < n__17758__auto___23214)){
var G__23046_23216 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23046_23216) {
case "compute":
var c__22661__auto___23218 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23215,c__22661__auto___23218,G__23046_23216,n__17758__auto___23214,jobs,results,process,async){
return (function (){
var f__22662__auto__ = (function (){var switch__22549__auto__ = ((function (__23215,c__22661__auto___23218,G__23046_23216,n__17758__auto___23214,jobs,results,process,async){
return (function (state_23059){
var state_val_23060 = (state_23059[(1)]);
if((state_val_23060 === (1))){
var state_23059__$1 = state_23059;
var statearr_23061_23219 = state_23059__$1;
(statearr_23061_23219[(2)] = null);

(statearr_23061_23219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23060 === (2))){
var state_23059__$1 = state_23059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23059__$1,(4),jobs);
} else {
if((state_val_23060 === (3))){
var inst_23057 = (state_23059[(2)]);
var state_23059__$1 = state_23059;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23059__$1,inst_23057);
} else {
if((state_val_23060 === (4))){
var inst_23049 = (state_23059[(2)]);
var inst_23050 = process.call(null,inst_23049);
var state_23059__$1 = state_23059;
if(cljs.core.truth_(inst_23050)){
var statearr_23062_23220 = state_23059__$1;
(statearr_23062_23220[(1)] = (5));

} else {
var statearr_23063_23221 = state_23059__$1;
(statearr_23063_23221[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23060 === (5))){
var state_23059__$1 = state_23059;
var statearr_23064_23222 = state_23059__$1;
(statearr_23064_23222[(2)] = null);

(statearr_23064_23222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23060 === (6))){
var state_23059__$1 = state_23059;
var statearr_23065_23223 = state_23059__$1;
(statearr_23065_23223[(2)] = null);

(statearr_23065_23223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23060 === (7))){
var inst_23055 = (state_23059[(2)]);
var state_23059__$1 = state_23059;
var statearr_23066_23224 = state_23059__$1;
(statearr_23066_23224[(2)] = inst_23055);

(statearr_23066_23224[(1)] = (3));


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
});})(__23215,c__22661__auto___23218,G__23046_23216,n__17758__auto___23214,jobs,results,process,async))
;
return ((function (__23215,switch__22549__auto__,c__22661__auto___23218,G__23046_23216,n__17758__auto___23214,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22550__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22550__auto____0 = (function (){
var statearr_23070 = [null,null,null,null,null,null,null];
(statearr_23070[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22550__auto__);

(statearr_23070[(1)] = (1));

return statearr_23070;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22550__auto____1 = (function (state_23059){
while(true){
var ret_value__22551__auto__ = (function (){try{while(true){
var result__22552__auto__ = switch__22549__auto__.call(null,state_23059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22552__auto__;
}
break;
}
}catch (e23071){if((e23071 instanceof Object)){
var ex__22553__auto__ = e23071;
var statearr_23072_23225 = state_23059;
(statearr_23072_23225[(5)] = ex__22553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23226 = state_23059;
state_23059 = G__23226;
continue;
} else {
return ret_value__22551__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22550__auto__ = function(state_23059){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22550__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22550__auto____1.call(this,state_23059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22550__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22550__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22550__auto__;
})()
;})(__23215,switch__22549__auto__,c__22661__auto___23218,G__23046_23216,n__17758__auto___23214,jobs,results,process,async))
})();
var state__22663__auto__ = (function (){var statearr_23073 = f__22662__auto__.call(null);
(statearr_23073[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22661__auto___23218);

return statearr_23073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22663__auto__);
});})(__23215,c__22661__auto___23218,G__23046_23216,n__17758__auto___23214,jobs,results,process,async))
);


break;
case "async":
var c__22661__auto___23227 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23215,c__22661__auto___23227,G__23046_23216,n__17758__auto___23214,jobs,results,process,async){
return (function (){
var f__22662__auto__ = (function (){var switch__22549__auto__ = ((function (__23215,c__22661__auto___23227,G__23046_23216,n__17758__auto___23214,jobs,results,process,async){
return (function (state_23086){
var state_val_23087 = (state_23086[(1)]);
if((state_val_23087 === (1))){
var state_23086__$1 = state_23086;
var statearr_23088_23228 = state_23086__$1;
(statearr_23088_23228[(2)] = null);

(statearr_23088_23228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23087 === (2))){
var state_23086__$1 = state_23086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23086__$1,(4),jobs);
} else {
if((state_val_23087 === (3))){
var inst_23084 = (state_23086[(2)]);
var state_23086__$1 = state_23086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23086__$1,inst_23084);
} else {
if((state_val_23087 === (4))){
var inst_23076 = (state_23086[(2)]);
var inst_23077 = async.call(null,inst_23076);
var state_23086__$1 = state_23086;
if(cljs.core.truth_(inst_23077)){
var statearr_23089_23229 = state_23086__$1;
(statearr_23089_23229[(1)] = (5));

} else {
var statearr_23090_23230 = state_23086__$1;
(statearr_23090_23230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23087 === (5))){
var state_23086__$1 = state_23086;
var statearr_23091_23231 = state_23086__$1;
(statearr_23091_23231[(2)] = null);

(statearr_23091_23231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23087 === (6))){
var state_23086__$1 = state_23086;
var statearr_23092_23232 = state_23086__$1;
(statearr_23092_23232[(2)] = null);

(statearr_23092_23232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23087 === (7))){
var inst_23082 = (state_23086[(2)]);
var state_23086__$1 = state_23086;
var statearr_23093_23233 = state_23086__$1;
(statearr_23093_23233[(2)] = inst_23082);

(statearr_23093_23233[(1)] = (3));


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
});})(__23215,c__22661__auto___23227,G__23046_23216,n__17758__auto___23214,jobs,results,process,async))
;
return ((function (__23215,switch__22549__auto__,c__22661__auto___23227,G__23046_23216,n__17758__auto___23214,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22550__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22550__auto____0 = (function (){
var statearr_23097 = [null,null,null,null,null,null,null];
(statearr_23097[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22550__auto__);

(statearr_23097[(1)] = (1));

return statearr_23097;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22550__auto____1 = (function (state_23086){
while(true){
var ret_value__22551__auto__ = (function (){try{while(true){
var result__22552__auto__ = switch__22549__auto__.call(null,state_23086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22552__auto__;
}
break;
}
}catch (e23098){if((e23098 instanceof Object)){
var ex__22553__auto__ = e23098;
var statearr_23099_23234 = state_23086;
(statearr_23099_23234[(5)] = ex__22553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23235 = state_23086;
state_23086 = G__23235;
continue;
} else {
return ret_value__22551__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22550__auto__ = function(state_23086){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22550__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22550__auto____1.call(this,state_23086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22550__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22550__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22550__auto__;
})()
;})(__23215,switch__22549__auto__,c__22661__auto___23227,G__23046_23216,n__17758__auto___23214,jobs,results,process,async))
})();
var state__22663__auto__ = (function (){var statearr_23100 = f__22662__auto__.call(null);
(statearr_23100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22661__auto___23227);

return statearr_23100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22663__auto__);
});})(__23215,c__22661__auto___23227,G__23046_23216,n__17758__auto___23214,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__23236 = (__23215 + (1));
__23215 = G__23236;
continue;
} else {
}
break;
}

var c__22661__auto___23237 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22661__auto___23237,jobs,results,process,async){
return (function (){
var f__22662__auto__ = (function (){var switch__22549__auto__ = ((function (c__22661__auto___23237,jobs,results,process,async){
return (function (state_23122){
var state_val_23123 = (state_23122[(1)]);
if((state_val_23123 === (1))){
var state_23122__$1 = state_23122;
var statearr_23124_23238 = state_23122__$1;
(statearr_23124_23238[(2)] = null);

(statearr_23124_23238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23123 === (2))){
var state_23122__$1 = state_23122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23122__$1,(4),from);
} else {
if((state_val_23123 === (3))){
var inst_23120 = (state_23122[(2)]);
var state_23122__$1 = state_23122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23122__$1,inst_23120);
} else {
if((state_val_23123 === (4))){
var inst_23103 = (state_23122[(7)]);
var inst_23103__$1 = (state_23122[(2)]);
var inst_23104 = (inst_23103__$1 == null);
var state_23122__$1 = (function (){var statearr_23125 = state_23122;
(statearr_23125[(7)] = inst_23103__$1);

return statearr_23125;
})();
if(cljs.core.truth_(inst_23104)){
var statearr_23126_23239 = state_23122__$1;
(statearr_23126_23239[(1)] = (5));

} else {
var statearr_23127_23240 = state_23122__$1;
(statearr_23127_23240[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23123 === (5))){
var inst_23106 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23122__$1 = state_23122;
var statearr_23128_23241 = state_23122__$1;
(statearr_23128_23241[(2)] = inst_23106);

(statearr_23128_23241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23123 === (6))){
var inst_23108 = (state_23122[(8)]);
var inst_23103 = (state_23122[(7)]);
var inst_23108__$1 = cljs.core.async.chan.call(null,(1));
var inst_23109 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23110 = [inst_23103,inst_23108__$1];
var inst_23111 = (new cljs.core.PersistentVector(null,2,(5),inst_23109,inst_23110,null));
var state_23122__$1 = (function (){var statearr_23129 = state_23122;
(statearr_23129[(8)] = inst_23108__$1);

return statearr_23129;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23122__$1,(8),jobs,inst_23111);
} else {
if((state_val_23123 === (7))){
var inst_23118 = (state_23122[(2)]);
var state_23122__$1 = state_23122;
var statearr_23130_23242 = state_23122__$1;
(statearr_23130_23242[(2)] = inst_23118);

(statearr_23130_23242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23123 === (8))){
var inst_23108 = (state_23122[(8)]);
var inst_23113 = (state_23122[(2)]);
var state_23122__$1 = (function (){var statearr_23131 = state_23122;
(statearr_23131[(9)] = inst_23113);

return statearr_23131;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23122__$1,(9),results,inst_23108);
} else {
if((state_val_23123 === (9))){
var inst_23115 = (state_23122[(2)]);
var state_23122__$1 = (function (){var statearr_23132 = state_23122;
(statearr_23132[(10)] = inst_23115);

return statearr_23132;
})();
var statearr_23133_23243 = state_23122__$1;
(statearr_23133_23243[(2)] = null);

(statearr_23133_23243[(1)] = (2));


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
});})(c__22661__auto___23237,jobs,results,process,async))
;
return ((function (switch__22549__auto__,c__22661__auto___23237,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22550__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22550__auto____0 = (function (){
var statearr_23137 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23137[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22550__auto__);

(statearr_23137[(1)] = (1));

return statearr_23137;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22550__auto____1 = (function (state_23122){
while(true){
var ret_value__22551__auto__ = (function (){try{while(true){
var result__22552__auto__ = switch__22549__auto__.call(null,state_23122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22552__auto__;
}
break;
}
}catch (e23138){if((e23138 instanceof Object)){
var ex__22553__auto__ = e23138;
var statearr_23139_23244 = state_23122;
(statearr_23139_23244[(5)] = ex__22553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23245 = state_23122;
state_23122 = G__23245;
continue;
} else {
return ret_value__22551__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22550__auto__ = function(state_23122){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22550__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22550__auto____1.call(this,state_23122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22550__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22550__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22550__auto__;
})()
;})(switch__22549__auto__,c__22661__auto___23237,jobs,results,process,async))
})();
var state__22663__auto__ = (function (){var statearr_23140 = f__22662__auto__.call(null);
(statearr_23140[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22661__auto___23237);

return statearr_23140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22663__auto__);
});})(c__22661__auto___23237,jobs,results,process,async))
);


var c__22661__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22661__auto__,jobs,results,process,async){
return (function (){
var f__22662__auto__ = (function (){var switch__22549__auto__ = ((function (c__22661__auto__,jobs,results,process,async){
return (function (state_23178){
var state_val_23179 = (state_23178[(1)]);
if((state_val_23179 === (7))){
var inst_23174 = (state_23178[(2)]);
var state_23178__$1 = state_23178;
var statearr_23180_23246 = state_23178__$1;
(statearr_23180_23246[(2)] = inst_23174);

(statearr_23180_23246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23179 === (20))){
var state_23178__$1 = state_23178;
var statearr_23181_23247 = state_23178__$1;
(statearr_23181_23247[(2)] = null);

(statearr_23181_23247[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23179 === (1))){
var state_23178__$1 = state_23178;
var statearr_23182_23248 = state_23178__$1;
(statearr_23182_23248[(2)] = null);

(statearr_23182_23248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23179 === (4))){
var inst_23143 = (state_23178[(7)]);
var inst_23143__$1 = (state_23178[(2)]);
var inst_23144 = (inst_23143__$1 == null);
var state_23178__$1 = (function (){var statearr_23183 = state_23178;
(statearr_23183[(7)] = inst_23143__$1);

return statearr_23183;
})();
if(cljs.core.truth_(inst_23144)){
var statearr_23184_23249 = state_23178__$1;
(statearr_23184_23249[(1)] = (5));

} else {
var statearr_23185_23250 = state_23178__$1;
(statearr_23185_23250[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23179 === (15))){
var inst_23156 = (state_23178[(8)]);
var state_23178__$1 = state_23178;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23178__$1,(18),to,inst_23156);
} else {
if((state_val_23179 === (21))){
var inst_23169 = (state_23178[(2)]);
var state_23178__$1 = state_23178;
var statearr_23186_23251 = state_23178__$1;
(statearr_23186_23251[(2)] = inst_23169);

(statearr_23186_23251[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23179 === (13))){
var inst_23171 = (state_23178[(2)]);
var state_23178__$1 = (function (){var statearr_23187 = state_23178;
(statearr_23187[(9)] = inst_23171);

return statearr_23187;
})();
var statearr_23188_23252 = state_23178__$1;
(statearr_23188_23252[(2)] = null);

(statearr_23188_23252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23179 === (6))){
var inst_23143 = (state_23178[(7)]);
var state_23178__$1 = state_23178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23178__$1,(11),inst_23143);
} else {
if((state_val_23179 === (17))){
var inst_23164 = (state_23178[(2)]);
var state_23178__$1 = state_23178;
if(cljs.core.truth_(inst_23164)){
var statearr_23189_23253 = state_23178__$1;
(statearr_23189_23253[(1)] = (19));

} else {
var statearr_23190_23254 = state_23178__$1;
(statearr_23190_23254[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23179 === (3))){
var inst_23176 = (state_23178[(2)]);
var state_23178__$1 = state_23178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23178__$1,inst_23176);
} else {
if((state_val_23179 === (12))){
var inst_23153 = (state_23178[(10)]);
var state_23178__$1 = state_23178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23178__$1,(14),inst_23153);
} else {
if((state_val_23179 === (2))){
var state_23178__$1 = state_23178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23178__$1,(4),results);
} else {
if((state_val_23179 === (19))){
var state_23178__$1 = state_23178;
var statearr_23191_23255 = state_23178__$1;
(statearr_23191_23255[(2)] = null);

(statearr_23191_23255[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23179 === (11))){
var inst_23153 = (state_23178[(2)]);
var state_23178__$1 = (function (){var statearr_23192 = state_23178;
(statearr_23192[(10)] = inst_23153);

return statearr_23192;
})();
var statearr_23193_23256 = state_23178__$1;
(statearr_23193_23256[(2)] = null);

(statearr_23193_23256[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23179 === (9))){
var state_23178__$1 = state_23178;
var statearr_23194_23257 = state_23178__$1;
(statearr_23194_23257[(2)] = null);

(statearr_23194_23257[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23179 === (5))){
var state_23178__$1 = state_23178;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23195_23258 = state_23178__$1;
(statearr_23195_23258[(1)] = (8));

} else {
var statearr_23196_23259 = state_23178__$1;
(statearr_23196_23259[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23179 === (14))){
var inst_23156 = (state_23178[(8)]);
var inst_23158 = (state_23178[(11)]);
var inst_23156__$1 = (state_23178[(2)]);
var inst_23157 = (inst_23156__$1 == null);
var inst_23158__$1 = cljs.core.not.call(null,inst_23157);
var state_23178__$1 = (function (){var statearr_23197 = state_23178;
(statearr_23197[(8)] = inst_23156__$1);

(statearr_23197[(11)] = inst_23158__$1);

return statearr_23197;
})();
if(inst_23158__$1){
var statearr_23198_23260 = state_23178__$1;
(statearr_23198_23260[(1)] = (15));

} else {
var statearr_23199_23261 = state_23178__$1;
(statearr_23199_23261[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23179 === (16))){
var inst_23158 = (state_23178[(11)]);
var state_23178__$1 = state_23178;
var statearr_23200_23262 = state_23178__$1;
(statearr_23200_23262[(2)] = inst_23158);

(statearr_23200_23262[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23179 === (10))){
var inst_23150 = (state_23178[(2)]);
var state_23178__$1 = state_23178;
var statearr_23201_23263 = state_23178__$1;
(statearr_23201_23263[(2)] = inst_23150);

(statearr_23201_23263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23179 === (18))){
var inst_23161 = (state_23178[(2)]);
var state_23178__$1 = state_23178;
var statearr_23202_23264 = state_23178__$1;
(statearr_23202_23264[(2)] = inst_23161);

(statearr_23202_23264[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23179 === (8))){
var inst_23147 = cljs.core.async.close_BANG_.call(null,to);
var state_23178__$1 = state_23178;
var statearr_23203_23265 = state_23178__$1;
(statearr_23203_23265[(2)] = inst_23147);

(statearr_23203_23265[(1)] = (10));


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
});})(c__22661__auto__,jobs,results,process,async))
;
return ((function (switch__22549__auto__,c__22661__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22550__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22550__auto____0 = (function (){
var statearr_23207 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23207[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22550__auto__);

(statearr_23207[(1)] = (1));

return statearr_23207;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22550__auto____1 = (function (state_23178){
while(true){
var ret_value__22551__auto__ = (function (){try{while(true){
var result__22552__auto__ = switch__22549__auto__.call(null,state_23178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22552__auto__;
}
break;
}
}catch (e23208){if((e23208 instanceof Object)){
var ex__22553__auto__ = e23208;
var statearr_23209_23266 = state_23178;
(statearr_23209_23266[(5)] = ex__22553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23267 = state_23178;
state_23178 = G__23267;
continue;
} else {
return ret_value__22551__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22550__auto__ = function(state_23178){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22550__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22550__auto____1.call(this,state_23178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22550__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22550__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22550__auto__;
})()
;})(switch__22549__auto__,c__22661__auto__,jobs,results,process,async))
})();
var state__22663__auto__ = (function (){var statearr_23210 = f__22662__auto__.call(null);
(statearr_23210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22661__auto__);

return statearr_23210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22663__auto__);
});})(c__22661__auto__,jobs,results,process,async))
);

return c__22661__auto__;
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
var args23268 = [];
var len__17913__auto___23271 = arguments.length;
var i__17914__auto___23272 = (0);
while(true){
if((i__17914__auto___23272 < len__17913__auto___23271)){
args23268.push((arguments[i__17914__auto___23272]));

var G__23273 = (i__17914__auto___23272 + (1));
i__17914__auto___23272 = G__23273;
continue;
} else {
}
break;
}

var G__23270 = args23268.length;
switch (G__23270) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23268.length)].join('')));

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
var args23275 = [];
var len__17913__auto___23278 = arguments.length;
var i__17914__auto___23279 = (0);
while(true){
if((i__17914__auto___23279 < len__17913__auto___23278)){
args23275.push((arguments[i__17914__auto___23279]));

var G__23280 = (i__17914__auto___23279 + (1));
i__17914__auto___23279 = G__23280;
continue;
} else {
}
break;
}

var G__23277 = args23275.length;
switch (G__23277) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23275.length)].join('')));

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
var args23282 = [];
var len__17913__auto___23335 = arguments.length;
var i__17914__auto___23336 = (0);
while(true){
if((i__17914__auto___23336 < len__17913__auto___23335)){
args23282.push((arguments[i__17914__auto___23336]));

var G__23337 = (i__17914__auto___23336 + (1));
i__17914__auto___23336 = G__23337;
continue;
} else {
}
break;
}

var G__23284 = args23282.length;
switch (G__23284) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23282.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22661__auto___23339 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22661__auto___23339,tc,fc){
return (function (){
var f__22662__auto__ = (function (){var switch__22549__auto__ = ((function (c__22661__auto___23339,tc,fc){
return (function (state_23310){
var state_val_23311 = (state_23310[(1)]);
if((state_val_23311 === (7))){
var inst_23306 = (state_23310[(2)]);
var state_23310__$1 = state_23310;
var statearr_23312_23340 = state_23310__$1;
(statearr_23312_23340[(2)] = inst_23306);

(statearr_23312_23340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23311 === (1))){
var state_23310__$1 = state_23310;
var statearr_23313_23341 = state_23310__$1;
(statearr_23313_23341[(2)] = null);

(statearr_23313_23341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23311 === (4))){
var inst_23287 = (state_23310[(7)]);
var inst_23287__$1 = (state_23310[(2)]);
var inst_23288 = (inst_23287__$1 == null);
var state_23310__$1 = (function (){var statearr_23314 = state_23310;
(statearr_23314[(7)] = inst_23287__$1);

return statearr_23314;
})();
if(cljs.core.truth_(inst_23288)){
var statearr_23315_23342 = state_23310__$1;
(statearr_23315_23342[(1)] = (5));

} else {
var statearr_23316_23343 = state_23310__$1;
(statearr_23316_23343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23311 === (13))){
var state_23310__$1 = state_23310;
var statearr_23317_23344 = state_23310__$1;
(statearr_23317_23344[(2)] = null);

(statearr_23317_23344[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23311 === (6))){
var inst_23287 = (state_23310[(7)]);
var inst_23293 = p.call(null,inst_23287);
var state_23310__$1 = state_23310;
if(cljs.core.truth_(inst_23293)){
var statearr_23318_23345 = state_23310__$1;
(statearr_23318_23345[(1)] = (9));

} else {
var statearr_23319_23346 = state_23310__$1;
(statearr_23319_23346[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23311 === (3))){
var inst_23308 = (state_23310[(2)]);
var state_23310__$1 = state_23310;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23310__$1,inst_23308);
} else {
if((state_val_23311 === (12))){
var state_23310__$1 = state_23310;
var statearr_23320_23347 = state_23310__$1;
(statearr_23320_23347[(2)] = null);

(statearr_23320_23347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23311 === (2))){
var state_23310__$1 = state_23310;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23310__$1,(4),ch);
} else {
if((state_val_23311 === (11))){
var inst_23287 = (state_23310[(7)]);
var inst_23297 = (state_23310[(2)]);
var state_23310__$1 = state_23310;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23310__$1,(8),inst_23297,inst_23287);
} else {
if((state_val_23311 === (9))){
var state_23310__$1 = state_23310;
var statearr_23321_23348 = state_23310__$1;
(statearr_23321_23348[(2)] = tc);

(statearr_23321_23348[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23311 === (5))){
var inst_23290 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23291 = cljs.core.async.close_BANG_.call(null,fc);
var state_23310__$1 = (function (){var statearr_23322 = state_23310;
(statearr_23322[(8)] = inst_23290);

return statearr_23322;
})();
var statearr_23323_23349 = state_23310__$1;
(statearr_23323_23349[(2)] = inst_23291);

(statearr_23323_23349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23311 === (14))){
var inst_23304 = (state_23310[(2)]);
var state_23310__$1 = state_23310;
var statearr_23324_23350 = state_23310__$1;
(statearr_23324_23350[(2)] = inst_23304);

(statearr_23324_23350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23311 === (10))){
var state_23310__$1 = state_23310;
var statearr_23325_23351 = state_23310__$1;
(statearr_23325_23351[(2)] = fc);

(statearr_23325_23351[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23311 === (8))){
var inst_23299 = (state_23310[(2)]);
var state_23310__$1 = state_23310;
if(cljs.core.truth_(inst_23299)){
var statearr_23326_23352 = state_23310__$1;
(statearr_23326_23352[(1)] = (12));

} else {
var statearr_23327_23353 = state_23310__$1;
(statearr_23327_23353[(1)] = (13));

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
});})(c__22661__auto___23339,tc,fc))
;
return ((function (switch__22549__auto__,c__22661__auto___23339,tc,fc){
return (function() {
var cljs$core$async$state_machine__22550__auto__ = null;
var cljs$core$async$state_machine__22550__auto____0 = (function (){
var statearr_23331 = [null,null,null,null,null,null,null,null,null];
(statearr_23331[(0)] = cljs$core$async$state_machine__22550__auto__);

(statearr_23331[(1)] = (1));

return statearr_23331;
});
var cljs$core$async$state_machine__22550__auto____1 = (function (state_23310){
while(true){
var ret_value__22551__auto__ = (function (){try{while(true){
var result__22552__auto__ = switch__22549__auto__.call(null,state_23310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22552__auto__;
}
break;
}
}catch (e23332){if((e23332 instanceof Object)){
var ex__22553__auto__ = e23332;
var statearr_23333_23354 = state_23310;
(statearr_23333_23354[(5)] = ex__22553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23355 = state_23310;
state_23310 = G__23355;
continue;
} else {
return ret_value__22551__auto__;
}
break;
}
});
cljs$core$async$state_machine__22550__auto__ = function(state_23310){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22550__auto____1.call(this,state_23310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22550__auto____0;
cljs$core$async$state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22550__auto____1;
return cljs$core$async$state_machine__22550__auto__;
})()
;})(switch__22549__auto__,c__22661__auto___23339,tc,fc))
})();
var state__22663__auto__ = (function (){var statearr_23334 = f__22662__auto__.call(null);
(statearr_23334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22661__auto___23339);

return statearr_23334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22663__auto__);
});})(c__22661__auto___23339,tc,fc))
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
var c__22661__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22661__auto__){
return (function (){
var f__22662__auto__ = (function (){var switch__22549__auto__ = ((function (c__22661__auto__){
return (function (state_23419){
var state_val_23420 = (state_23419[(1)]);
if((state_val_23420 === (7))){
var inst_23415 = (state_23419[(2)]);
var state_23419__$1 = state_23419;
var statearr_23421_23442 = state_23419__$1;
(statearr_23421_23442[(2)] = inst_23415);

(statearr_23421_23442[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23420 === (1))){
var inst_23399 = init;
var state_23419__$1 = (function (){var statearr_23422 = state_23419;
(statearr_23422[(7)] = inst_23399);

return statearr_23422;
})();
var statearr_23423_23443 = state_23419__$1;
(statearr_23423_23443[(2)] = null);

(statearr_23423_23443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23420 === (4))){
var inst_23402 = (state_23419[(8)]);
var inst_23402__$1 = (state_23419[(2)]);
var inst_23403 = (inst_23402__$1 == null);
var state_23419__$1 = (function (){var statearr_23424 = state_23419;
(statearr_23424[(8)] = inst_23402__$1);

return statearr_23424;
})();
if(cljs.core.truth_(inst_23403)){
var statearr_23425_23444 = state_23419__$1;
(statearr_23425_23444[(1)] = (5));

} else {
var statearr_23426_23445 = state_23419__$1;
(statearr_23426_23445[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23420 === (6))){
var inst_23402 = (state_23419[(8)]);
var inst_23406 = (state_23419[(9)]);
var inst_23399 = (state_23419[(7)]);
var inst_23406__$1 = f.call(null,inst_23399,inst_23402);
var inst_23407 = cljs.core.reduced_QMARK_.call(null,inst_23406__$1);
var state_23419__$1 = (function (){var statearr_23427 = state_23419;
(statearr_23427[(9)] = inst_23406__$1);

return statearr_23427;
})();
if(inst_23407){
var statearr_23428_23446 = state_23419__$1;
(statearr_23428_23446[(1)] = (8));

} else {
var statearr_23429_23447 = state_23419__$1;
(statearr_23429_23447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23420 === (3))){
var inst_23417 = (state_23419[(2)]);
var state_23419__$1 = state_23419;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23419__$1,inst_23417);
} else {
if((state_val_23420 === (2))){
var state_23419__$1 = state_23419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23419__$1,(4),ch);
} else {
if((state_val_23420 === (9))){
var inst_23406 = (state_23419[(9)]);
var inst_23399 = inst_23406;
var state_23419__$1 = (function (){var statearr_23430 = state_23419;
(statearr_23430[(7)] = inst_23399);

return statearr_23430;
})();
var statearr_23431_23448 = state_23419__$1;
(statearr_23431_23448[(2)] = null);

(statearr_23431_23448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23420 === (5))){
var inst_23399 = (state_23419[(7)]);
var state_23419__$1 = state_23419;
var statearr_23432_23449 = state_23419__$1;
(statearr_23432_23449[(2)] = inst_23399);

(statearr_23432_23449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23420 === (10))){
var inst_23413 = (state_23419[(2)]);
var state_23419__$1 = state_23419;
var statearr_23433_23450 = state_23419__$1;
(statearr_23433_23450[(2)] = inst_23413);

(statearr_23433_23450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23420 === (8))){
var inst_23406 = (state_23419[(9)]);
var inst_23409 = cljs.core.deref.call(null,inst_23406);
var state_23419__$1 = state_23419;
var statearr_23434_23451 = state_23419__$1;
(statearr_23434_23451[(2)] = inst_23409);

(statearr_23434_23451[(1)] = (10));


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
});})(c__22661__auto__))
;
return ((function (switch__22549__auto__,c__22661__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22550__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22550__auto____0 = (function (){
var statearr_23438 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23438[(0)] = cljs$core$async$reduce_$_state_machine__22550__auto__);

(statearr_23438[(1)] = (1));

return statearr_23438;
});
var cljs$core$async$reduce_$_state_machine__22550__auto____1 = (function (state_23419){
while(true){
var ret_value__22551__auto__ = (function (){try{while(true){
var result__22552__auto__ = switch__22549__auto__.call(null,state_23419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22552__auto__;
}
break;
}
}catch (e23439){if((e23439 instanceof Object)){
var ex__22553__auto__ = e23439;
var statearr_23440_23452 = state_23419;
(statearr_23440_23452[(5)] = ex__22553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23453 = state_23419;
state_23419 = G__23453;
continue;
} else {
return ret_value__22551__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22550__auto__ = function(state_23419){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22550__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22550__auto____1.call(this,state_23419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22550__auto____0;
cljs$core$async$reduce_$_state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22550__auto____1;
return cljs$core$async$reduce_$_state_machine__22550__auto__;
})()
;})(switch__22549__auto__,c__22661__auto__))
})();
var state__22663__auto__ = (function (){var statearr_23441 = f__22662__auto__.call(null);
(statearr_23441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22661__auto__);

return statearr_23441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22663__auto__);
});})(c__22661__auto__))
);

return c__22661__auto__;
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
var args23454 = [];
var len__17913__auto___23506 = arguments.length;
var i__17914__auto___23507 = (0);
while(true){
if((i__17914__auto___23507 < len__17913__auto___23506)){
args23454.push((arguments[i__17914__auto___23507]));

var G__23508 = (i__17914__auto___23507 + (1));
i__17914__auto___23507 = G__23508;
continue;
} else {
}
break;
}

var G__23456 = args23454.length;
switch (G__23456) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23454.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22661__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22661__auto__){
return (function (){
var f__22662__auto__ = (function (){var switch__22549__auto__ = ((function (c__22661__auto__){
return (function (state_23481){
var state_val_23482 = (state_23481[(1)]);
if((state_val_23482 === (7))){
var inst_23463 = (state_23481[(2)]);
var state_23481__$1 = state_23481;
var statearr_23483_23510 = state_23481__$1;
(statearr_23483_23510[(2)] = inst_23463);

(statearr_23483_23510[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (1))){
var inst_23457 = cljs.core.seq.call(null,coll);
var inst_23458 = inst_23457;
var state_23481__$1 = (function (){var statearr_23484 = state_23481;
(statearr_23484[(7)] = inst_23458);

return statearr_23484;
})();
var statearr_23485_23511 = state_23481__$1;
(statearr_23485_23511[(2)] = null);

(statearr_23485_23511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (4))){
var inst_23458 = (state_23481[(7)]);
var inst_23461 = cljs.core.first.call(null,inst_23458);
var state_23481__$1 = state_23481;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23481__$1,(7),ch,inst_23461);
} else {
if((state_val_23482 === (13))){
var inst_23475 = (state_23481[(2)]);
var state_23481__$1 = state_23481;
var statearr_23486_23512 = state_23481__$1;
(statearr_23486_23512[(2)] = inst_23475);

(statearr_23486_23512[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (6))){
var inst_23466 = (state_23481[(2)]);
var state_23481__$1 = state_23481;
if(cljs.core.truth_(inst_23466)){
var statearr_23487_23513 = state_23481__$1;
(statearr_23487_23513[(1)] = (8));

} else {
var statearr_23488_23514 = state_23481__$1;
(statearr_23488_23514[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (3))){
var inst_23479 = (state_23481[(2)]);
var state_23481__$1 = state_23481;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23481__$1,inst_23479);
} else {
if((state_val_23482 === (12))){
var state_23481__$1 = state_23481;
var statearr_23489_23515 = state_23481__$1;
(statearr_23489_23515[(2)] = null);

(statearr_23489_23515[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (2))){
var inst_23458 = (state_23481[(7)]);
var state_23481__$1 = state_23481;
if(cljs.core.truth_(inst_23458)){
var statearr_23490_23516 = state_23481__$1;
(statearr_23490_23516[(1)] = (4));

} else {
var statearr_23491_23517 = state_23481__$1;
(statearr_23491_23517[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (11))){
var inst_23472 = cljs.core.async.close_BANG_.call(null,ch);
var state_23481__$1 = state_23481;
var statearr_23492_23518 = state_23481__$1;
(statearr_23492_23518[(2)] = inst_23472);

(statearr_23492_23518[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (9))){
var state_23481__$1 = state_23481;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23493_23519 = state_23481__$1;
(statearr_23493_23519[(1)] = (11));

} else {
var statearr_23494_23520 = state_23481__$1;
(statearr_23494_23520[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (5))){
var inst_23458 = (state_23481[(7)]);
var state_23481__$1 = state_23481;
var statearr_23495_23521 = state_23481__$1;
(statearr_23495_23521[(2)] = inst_23458);

(statearr_23495_23521[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (10))){
var inst_23477 = (state_23481[(2)]);
var state_23481__$1 = state_23481;
var statearr_23496_23522 = state_23481__$1;
(statearr_23496_23522[(2)] = inst_23477);

(statearr_23496_23522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (8))){
var inst_23458 = (state_23481[(7)]);
var inst_23468 = cljs.core.next.call(null,inst_23458);
var inst_23458__$1 = inst_23468;
var state_23481__$1 = (function (){var statearr_23497 = state_23481;
(statearr_23497[(7)] = inst_23458__$1);

return statearr_23497;
})();
var statearr_23498_23523 = state_23481__$1;
(statearr_23498_23523[(2)] = null);

(statearr_23498_23523[(1)] = (2));


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
});})(c__22661__auto__))
;
return ((function (switch__22549__auto__,c__22661__auto__){
return (function() {
var cljs$core$async$state_machine__22550__auto__ = null;
var cljs$core$async$state_machine__22550__auto____0 = (function (){
var statearr_23502 = [null,null,null,null,null,null,null,null];
(statearr_23502[(0)] = cljs$core$async$state_machine__22550__auto__);

(statearr_23502[(1)] = (1));

return statearr_23502;
});
var cljs$core$async$state_machine__22550__auto____1 = (function (state_23481){
while(true){
var ret_value__22551__auto__ = (function (){try{while(true){
var result__22552__auto__ = switch__22549__auto__.call(null,state_23481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22552__auto__;
}
break;
}
}catch (e23503){if((e23503 instanceof Object)){
var ex__22553__auto__ = e23503;
var statearr_23504_23524 = state_23481;
(statearr_23504_23524[(5)] = ex__22553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23525 = state_23481;
state_23481 = G__23525;
continue;
} else {
return ret_value__22551__auto__;
}
break;
}
});
cljs$core$async$state_machine__22550__auto__ = function(state_23481){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22550__auto____1.call(this,state_23481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22550__auto____0;
cljs$core$async$state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22550__auto____1;
return cljs$core$async$state_machine__22550__auto__;
})()
;})(switch__22549__auto__,c__22661__auto__))
})();
var state__22663__auto__ = (function (){var statearr_23505 = f__22662__auto__.call(null);
(statearr_23505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22661__auto__);

return statearr_23505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22663__auto__);
});})(c__22661__auto__))
);

return c__22661__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async23747 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23747 = (function (mult,ch,cs,meta23748){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta23748 = meta23748;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23747.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23749,meta23748__$1){
var self__ = this;
var _23749__$1 = this;
return (new cljs.core.async.t_cljs$core$async23747(self__.mult,self__.ch,self__.cs,meta23748__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23747.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23749){
var self__ = this;
var _23749__$1 = this;
return self__.meta23748;
});})(cs))
;

cljs.core.async.t_cljs$core$async23747.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23747.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23747.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async23747.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23747.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23747.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23747.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23748","meta23748",1124420851,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23747.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23747.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23747";

cljs.core.async.t_cljs$core$async23747.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17453__auto__,writer__17454__auto__,opt__17455__auto__){
return cljs.core._write.call(null,writer__17454__auto__,"cljs.core.async/t_cljs$core$async23747");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async23747 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23747(mult__$1,ch__$1,cs__$1,meta23748){
return (new cljs.core.async.t_cljs$core$async23747(mult__$1,ch__$1,cs__$1,meta23748));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23747(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__22661__auto___23968 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22661__auto___23968,cs,m,dchan,dctr,done){
return (function (){
var f__22662__auto__ = (function (){var switch__22549__auto__ = ((function (c__22661__auto___23968,cs,m,dchan,dctr,done){
return (function (state_23880){
var state_val_23881 = (state_23880[(1)]);
if((state_val_23881 === (7))){
var inst_23876 = (state_23880[(2)]);
var state_23880__$1 = state_23880;
var statearr_23882_23969 = state_23880__$1;
(statearr_23882_23969[(2)] = inst_23876);

(statearr_23882_23969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (20))){
var inst_23781 = (state_23880[(7)]);
var inst_23791 = cljs.core.first.call(null,inst_23781);
var inst_23792 = cljs.core.nth.call(null,inst_23791,(0),null);
var inst_23793 = cljs.core.nth.call(null,inst_23791,(1),null);
var state_23880__$1 = (function (){var statearr_23883 = state_23880;
(statearr_23883[(8)] = inst_23792);

return statearr_23883;
})();
if(cljs.core.truth_(inst_23793)){
var statearr_23884_23970 = state_23880__$1;
(statearr_23884_23970[(1)] = (22));

} else {
var statearr_23885_23971 = state_23880__$1;
(statearr_23885_23971[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (27))){
var inst_23752 = (state_23880[(9)]);
var inst_23828 = (state_23880[(10)]);
var inst_23821 = (state_23880[(11)]);
var inst_23823 = (state_23880[(12)]);
var inst_23828__$1 = cljs.core._nth.call(null,inst_23821,inst_23823);
var inst_23829 = cljs.core.async.put_BANG_.call(null,inst_23828__$1,inst_23752,done);
var state_23880__$1 = (function (){var statearr_23886 = state_23880;
(statearr_23886[(10)] = inst_23828__$1);

return statearr_23886;
})();
if(cljs.core.truth_(inst_23829)){
var statearr_23887_23972 = state_23880__$1;
(statearr_23887_23972[(1)] = (30));

} else {
var statearr_23888_23973 = state_23880__$1;
(statearr_23888_23973[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (1))){
var state_23880__$1 = state_23880;
var statearr_23889_23974 = state_23880__$1;
(statearr_23889_23974[(2)] = null);

(statearr_23889_23974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (24))){
var inst_23781 = (state_23880[(7)]);
var inst_23798 = (state_23880[(2)]);
var inst_23799 = cljs.core.next.call(null,inst_23781);
var inst_23761 = inst_23799;
var inst_23762 = null;
var inst_23763 = (0);
var inst_23764 = (0);
var state_23880__$1 = (function (){var statearr_23890 = state_23880;
(statearr_23890[(13)] = inst_23761);

(statearr_23890[(14)] = inst_23763);

(statearr_23890[(15)] = inst_23798);

(statearr_23890[(16)] = inst_23764);

(statearr_23890[(17)] = inst_23762);

return statearr_23890;
})();
var statearr_23891_23975 = state_23880__$1;
(statearr_23891_23975[(2)] = null);

(statearr_23891_23975[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (39))){
var state_23880__$1 = state_23880;
var statearr_23895_23976 = state_23880__$1;
(statearr_23895_23976[(2)] = null);

(statearr_23895_23976[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (4))){
var inst_23752 = (state_23880[(9)]);
var inst_23752__$1 = (state_23880[(2)]);
var inst_23753 = (inst_23752__$1 == null);
var state_23880__$1 = (function (){var statearr_23896 = state_23880;
(statearr_23896[(9)] = inst_23752__$1);

return statearr_23896;
})();
if(cljs.core.truth_(inst_23753)){
var statearr_23897_23977 = state_23880__$1;
(statearr_23897_23977[(1)] = (5));

} else {
var statearr_23898_23978 = state_23880__$1;
(statearr_23898_23978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (15))){
var inst_23761 = (state_23880[(13)]);
var inst_23763 = (state_23880[(14)]);
var inst_23764 = (state_23880[(16)]);
var inst_23762 = (state_23880[(17)]);
var inst_23777 = (state_23880[(2)]);
var inst_23778 = (inst_23764 + (1));
var tmp23892 = inst_23761;
var tmp23893 = inst_23763;
var tmp23894 = inst_23762;
var inst_23761__$1 = tmp23892;
var inst_23762__$1 = tmp23894;
var inst_23763__$1 = tmp23893;
var inst_23764__$1 = inst_23778;
var state_23880__$1 = (function (){var statearr_23899 = state_23880;
(statearr_23899[(13)] = inst_23761__$1);

(statearr_23899[(14)] = inst_23763__$1);

(statearr_23899[(18)] = inst_23777);

(statearr_23899[(16)] = inst_23764__$1);

(statearr_23899[(17)] = inst_23762__$1);

return statearr_23899;
})();
var statearr_23900_23979 = state_23880__$1;
(statearr_23900_23979[(2)] = null);

(statearr_23900_23979[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (21))){
var inst_23802 = (state_23880[(2)]);
var state_23880__$1 = state_23880;
var statearr_23904_23980 = state_23880__$1;
(statearr_23904_23980[(2)] = inst_23802);

(statearr_23904_23980[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (31))){
var inst_23828 = (state_23880[(10)]);
var inst_23832 = done.call(null,null);
var inst_23833 = cljs.core.async.untap_STAR_.call(null,m,inst_23828);
var state_23880__$1 = (function (){var statearr_23905 = state_23880;
(statearr_23905[(19)] = inst_23832);

return statearr_23905;
})();
var statearr_23906_23981 = state_23880__$1;
(statearr_23906_23981[(2)] = inst_23833);

(statearr_23906_23981[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (32))){
var inst_23820 = (state_23880[(20)]);
var inst_23822 = (state_23880[(21)]);
var inst_23821 = (state_23880[(11)]);
var inst_23823 = (state_23880[(12)]);
var inst_23835 = (state_23880[(2)]);
var inst_23836 = (inst_23823 + (1));
var tmp23901 = inst_23820;
var tmp23902 = inst_23822;
var tmp23903 = inst_23821;
var inst_23820__$1 = tmp23901;
var inst_23821__$1 = tmp23903;
var inst_23822__$1 = tmp23902;
var inst_23823__$1 = inst_23836;
var state_23880__$1 = (function (){var statearr_23907 = state_23880;
(statearr_23907[(20)] = inst_23820__$1);

(statearr_23907[(21)] = inst_23822__$1);

(statearr_23907[(11)] = inst_23821__$1);

(statearr_23907[(22)] = inst_23835);

(statearr_23907[(12)] = inst_23823__$1);

return statearr_23907;
})();
var statearr_23908_23982 = state_23880__$1;
(statearr_23908_23982[(2)] = null);

(statearr_23908_23982[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (40))){
var inst_23848 = (state_23880[(23)]);
var inst_23852 = done.call(null,null);
var inst_23853 = cljs.core.async.untap_STAR_.call(null,m,inst_23848);
var state_23880__$1 = (function (){var statearr_23909 = state_23880;
(statearr_23909[(24)] = inst_23852);

return statearr_23909;
})();
var statearr_23910_23983 = state_23880__$1;
(statearr_23910_23983[(2)] = inst_23853);

(statearr_23910_23983[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (33))){
var inst_23839 = (state_23880[(25)]);
var inst_23841 = cljs.core.chunked_seq_QMARK_.call(null,inst_23839);
var state_23880__$1 = state_23880;
if(inst_23841){
var statearr_23911_23984 = state_23880__$1;
(statearr_23911_23984[(1)] = (36));

} else {
var statearr_23912_23985 = state_23880__$1;
(statearr_23912_23985[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (13))){
var inst_23771 = (state_23880[(26)]);
var inst_23774 = cljs.core.async.close_BANG_.call(null,inst_23771);
var state_23880__$1 = state_23880;
var statearr_23913_23986 = state_23880__$1;
(statearr_23913_23986[(2)] = inst_23774);

(statearr_23913_23986[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (22))){
var inst_23792 = (state_23880[(8)]);
var inst_23795 = cljs.core.async.close_BANG_.call(null,inst_23792);
var state_23880__$1 = state_23880;
var statearr_23914_23987 = state_23880__$1;
(statearr_23914_23987[(2)] = inst_23795);

(statearr_23914_23987[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (36))){
var inst_23839 = (state_23880[(25)]);
var inst_23843 = cljs.core.chunk_first.call(null,inst_23839);
var inst_23844 = cljs.core.chunk_rest.call(null,inst_23839);
var inst_23845 = cljs.core.count.call(null,inst_23843);
var inst_23820 = inst_23844;
var inst_23821 = inst_23843;
var inst_23822 = inst_23845;
var inst_23823 = (0);
var state_23880__$1 = (function (){var statearr_23915 = state_23880;
(statearr_23915[(20)] = inst_23820);

(statearr_23915[(21)] = inst_23822);

(statearr_23915[(11)] = inst_23821);

(statearr_23915[(12)] = inst_23823);

return statearr_23915;
})();
var statearr_23916_23988 = state_23880__$1;
(statearr_23916_23988[(2)] = null);

(statearr_23916_23988[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (41))){
var inst_23839 = (state_23880[(25)]);
var inst_23855 = (state_23880[(2)]);
var inst_23856 = cljs.core.next.call(null,inst_23839);
var inst_23820 = inst_23856;
var inst_23821 = null;
var inst_23822 = (0);
var inst_23823 = (0);
var state_23880__$1 = (function (){var statearr_23917 = state_23880;
(statearr_23917[(20)] = inst_23820);

(statearr_23917[(21)] = inst_23822);

(statearr_23917[(11)] = inst_23821);

(statearr_23917[(27)] = inst_23855);

(statearr_23917[(12)] = inst_23823);

return statearr_23917;
})();
var statearr_23918_23989 = state_23880__$1;
(statearr_23918_23989[(2)] = null);

(statearr_23918_23989[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (43))){
var state_23880__$1 = state_23880;
var statearr_23919_23990 = state_23880__$1;
(statearr_23919_23990[(2)] = null);

(statearr_23919_23990[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (29))){
var inst_23864 = (state_23880[(2)]);
var state_23880__$1 = state_23880;
var statearr_23920_23991 = state_23880__$1;
(statearr_23920_23991[(2)] = inst_23864);

(statearr_23920_23991[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (44))){
var inst_23873 = (state_23880[(2)]);
var state_23880__$1 = (function (){var statearr_23921 = state_23880;
(statearr_23921[(28)] = inst_23873);

return statearr_23921;
})();
var statearr_23922_23992 = state_23880__$1;
(statearr_23922_23992[(2)] = null);

(statearr_23922_23992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (6))){
var inst_23812 = (state_23880[(29)]);
var inst_23811 = cljs.core.deref.call(null,cs);
var inst_23812__$1 = cljs.core.keys.call(null,inst_23811);
var inst_23813 = cljs.core.count.call(null,inst_23812__$1);
var inst_23814 = cljs.core.reset_BANG_.call(null,dctr,inst_23813);
var inst_23819 = cljs.core.seq.call(null,inst_23812__$1);
var inst_23820 = inst_23819;
var inst_23821 = null;
var inst_23822 = (0);
var inst_23823 = (0);
var state_23880__$1 = (function (){var statearr_23923 = state_23880;
(statearr_23923[(20)] = inst_23820);

(statearr_23923[(21)] = inst_23822);

(statearr_23923[(30)] = inst_23814);

(statearr_23923[(29)] = inst_23812__$1);

(statearr_23923[(11)] = inst_23821);

(statearr_23923[(12)] = inst_23823);

return statearr_23923;
})();
var statearr_23924_23993 = state_23880__$1;
(statearr_23924_23993[(2)] = null);

(statearr_23924_23993[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (28))){
var inst_23839 = (state_23880[(25)]);
var inst_23820 = (state_23880[(20)]);
var inst_23839__$1 = cljs.core.seq.call(null,inst_23820);
var state_23880__$1 = (function (){var statearr_23925 = state_23880;
(statearr_23925[(25)] = inst_23839__$1);

return statearr_23925;
})();
if(inst_23839__$1){
var statearr_23926_23994 = state_23880__$1;
(statearr_23926_23994[(1)] = (33));

} else {
var statearr_23927_23995 = state_23880__$1;
(statearr_23927_23995[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (25))){
var inst_23822 = (state_23880[(21)]);
var inst_23823 = (state_23880[(12)]);
var inst_23825 = (inst_23823 < inst_23822);
var inst_23826 = inst_23825;
var state_23880__$1 = state_23880;
if(cljs.core.truth_(inst_23826)){
var statearr_23928_23996 = state_23880__$1;
(statearr_23928_23996[(1)] = (27));

} else {
var statearr_23929_23997 = state_23880__$1;
(statearr_23929_23997[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (34))){
var state_23880__$1 = state_23880;
var statearr_23930_23998 = state_23880__$1;
(statearr_23930_23998[(2)] = null);

(statearr_23930_23998[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (17))){
var state_23880__$1 = state_23880;
var statearr_23931_23999 = state_23880__$1;
(statearr_23931_23999[(2)] = null);

(statearr_23931_23999[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (3))){
var inst_23878 = (state_23880[(2)]);
var state_23880__$1 = state_23880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23880__$1,inst_23878);
} else {
if((state_val_23881 === (12))){
var inst_23807 = (state_23880[(2)]);
var state_23880__$1 = state_23880;
var statearr_23932_24000 = state_23880__$1;
(statearr_23932_24000[(2)] = inst_23807);

(statearr_23932_24000[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (2))){
var state_23880__$1 = state_23880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23880__$1,(4),ch);
} else {
if((state_val_23881 === (23))){
var state_23880__$1 = state_23880;
var statearr_23933_24001 = state_23880__$1;
(statearr_23933_24001[(2)] = null);

(statearr_23933_24001[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (35))){
var inst_23862 = (state_23880[(2)]);
var state_23880__$1 = state_23880;
var statearr_23934_24002 = state_23880__$1;
(statearr_23934_24002[(2)] = inst_23862);

(statearr_23934_24002[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (19))){
var inst_23781 = (state_23880[(7)]);
var inst_23785 = cljs.core.chunk_first.call(null,inst_23781);
var inst_23786 = cljs.core.chunk_rest.call(null,inst_23781);
var inst_23787 = cljs.core.count.call(null,inst_23785);
var inst_23761 = inst_23786;
var inst_23762 = inst_23785;
var inst_23763 = inst_23787;
var inst_23764 = (0);
var state_23880__$1 = (function (){var statearr_23935 = state_23880;
(statearr_23935[(13)] = inst_23761);

(statearr_23935[(14)] = inst_23763);

(statearr_23935[(16)] = inst_23764);

(statearr_23935[(17)] = inst_23762);

return statearr_23935;
})();
var statearr_23936_24003 = state_23880__$1;
(statearr_23936_24003[(2)] = null);

(statearr_23936_24003[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (11))){
var inst_23761 = (state_23880[(13)]);
var inst_23781 = (state_23880[(7)]);
var inst_23781__$1 = cljs.core.seq.call(null,inst_23761);
var state_23880__$1 = (function (){var statearr_23937 = state_23880;
(statearr_23937[(7)] = inst_23781__$1);

return statearr_23937;
})();
if(inst_23781__$1){
var statearr_23938_24004 = state_23880__$1;
(statearr_23938_24004[(1)] = (16));

} else {
var statearr_23939_24005 = state_23880__$1;
(statearr_23939_24005[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (9))){
var inst_23809 = (state_23880[(2)]);
var state_23880__$1 = state_23880;
var statearr_23940_24006 = state_23880__$1;
(statearr_23940_24006[(2)] = inst_23809);

(statearr_23940_24006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (5))){
var inst_23759 = cljs.core.deref.call(null,cs);
var inst_23760 = cljs.core.seq.call(null,inst_23759);
var inst_23761 = inst_23760;
var inst_23762 = null;
var inst_23763 = (0);
var inst_23764 = (0);
var state_23880__$1 = (function (){var statearr_23941 = state_23880;
(statearr_23941[(13)] = inst_23761);

(statearr_23941[(14)] = inst_23763);

(statearr_23941[(16)] = inst_23764);

(statearr_23941[(17)] = inst_23762);

return statearr_23941;
})();
var statearr_23942_24007 = state_23880__$1;
(statearr_23942_24007[(2)] = null);

(statearr_23942_24007[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (14))){
var state_23880__$1 = state_23880;
var statearr_23943_24008 = state_23880__$1;
(statearr_23943_24008[(2)] = null);

(statearr_23943_24008[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (45))){
var inst_23870 = (state_23880[(2)]);
var state_23880__$1 = state_23880;
var statearr_23944_24009 = state_23880__$1;
(statearr_23944_24009[(2)] = inst_23870);

(statearr_23944_24009[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (26))){
var inst_23812 = (state_23880[(29)]);
var inst_23866 = (state_23880[(2)]);
var inst_23867 = cljs.core.seq.call(null,inst_23812);
var state_23880__$1 = (function (){var statearr_23945 = state_23880;
(statearr_23945[(31)] = inst_23866);

return statearr_23945;
})();
if(inst_23867){
var statearr_23946_24010 = state_23880__$1;
(statearr_23946_24010[(1)] = (42));

} else {
var statearr_23947_24011 = state_23880__$1;
(statearr_23947_24011[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (16))){
var inst_23781 = (state_23880[(7)]);
var inst_23783 = cljs.core.chunked_seq_QMARK_.call(null,inst_23781);
var state_23880__$1 = state_23880;
if(inst_23783){
var statearr_23948_24012 = state_23880__$1;
(statearr_23948_24012[(1)] = (19));

} else {
var statearr_23949_24013 = state_23880__$1;
(statearr_23949_24013[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (38))){
var inst_23859 = (state_23880[(2)]);
var state_23880__$1 = state_23880;
var statearr_23950_24014 = state_23880__$1;
(statearr_23950_24014[(2)] = inst_23859);

(statearr_23950_24014[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (30))){
var state_23880__$1 = state_23880;
var statearr_23951_24015 = state_23880__$1;
(statearr_23951_24015[(2)] = null);

(statearr_23951_24015[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (10))){
var inst_23764 = (state_23880[(16)]);
var inst_23762 = (state_23880[(17)]);
var inst_23770 = cljs.core._nth.call(null,inst_23762,inst_23764);
var inst_23771 = cljs.core.nth.call(null,inst_23770,(0),null);
var inst_23772 = cljs.core.nth.call(null,inst_23770,(1),null);
var state_23880__$1 = (function (){var statearr_23952 = state_23880;
(statearr_23952[(26)] = inst_23771);

return statearr_23952;
})();
if(cljs.core.truth_(inst_23772)){
var statearr_23953_24016 = state_23880__$1;
(statearr_23953_24016[(1)] = (13));

} else {
var statearr_23954_24017 = state_23880__$1;
(statearr_23954_24017[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (18))){
var inst_23805 = (state_23880[(2)]);
var state_23880__$1 = state_23880;
var statearr_23955_24018 = state_23880__$1;
(statearr_23955_24018[(2)] = inst_23805);

(statearr_23955_24018[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (42))){
var state_23880__$1 = state_23880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23880__$1,(45),dchan);
} else {
if((state_val_23881 === (37))){
var inst_23839 = (state_23880[(25)]);
var inst_23848 = (state_23880[(23)]);
var inst_23752 = (state_23880[(9)]);
var inst_23848__$1 = cljs.core.first.call(null,inst_23839);
var inst_23849 = cljs.core.async.put_BANG_.call(null,inst_23848__$1,inst_23752,done);
var state_23880__$1 = (function (){var statearr_23956 = state_23880;
(statearr_23956[(23)] = inst_23848__$1);

return statearr_23956;
})();
if(cljs.core.truth_(inst_23849)){
var statearr_23957_24019 = state_23880__$1;
(statearr_23957_24019[(1)] = (39));

} else {
var statearr_23958_24020 = state_23880__$1;
(statearr_23958_24020[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23881 === (8))){
var inst_23763 = (state_23880[(14)]);
var inst_23764 = (state_23880[(16)]);
var inst_23766 = (inst_23764 < inst_23763);
var inst_23767 = inst_23766;
var state_23880__$1 = state_23880;
if(cljs.core.truth_(inst_23767)){
var statearr_23959_24021 = state_23880__$1;
(statearr_23959_24021[(1)] = (10));

} else {
var statearr_23960_24022 = state_23880__$1;
(statearr_23960_24022[(1)] = (11));

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
});})(c__22661__auto___23968,cs,m,dchan,dctr,done))
;
return ((function (switch__22549__auto__,c__22661__auto___23968,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22550__auto__ = null;
var cljs$core$async$mult_$_state_machine__22550__auto____0 = (function (){
var statearr_23964 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23964[(0)] = cljs$core$async$mult_$_state_machine__22550__auto__);

(statearr_23964[(1)] = (1));

return statearr_23964;
});
var cljs$core$async$mult_$_state_machine__22550__auto____1 = (function (state_23880){
while(true){
var ret_value__22551__auto__ = (function (){try{while(true){
var result__22552__auto__ = switch__22549__auto__.call(null,state_23880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22552__auto__;
}
break;
}
}catch (e23965){if((e23965 instanceof Object)){
var ex__22553__auto__ = e23965;
var statearr_23966_24023 = state_23880;
(statearr_23966_24023[(5)] = ex__22553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24024 = state_23880;
state_23880 = G__24024;
continue;
} else {
return ret_value__22551__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22550__auto__ = function(state_23880){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22550__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22550__auto____1.call(this,state_23880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22550__auto____0;
cljs$core$async$mult_$_state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22550__auto____1;
return cljs$core$async$mult_$_state_machine__22550__auto__;
})()
;})(switch__22549__auto__,c__22661__auto___23968,cs,m,dchan,dctr,done))
})();
var state__22663__auto__ = (function (){var statearr_23967 = f__22662__auto__.call(null);
(statearr_23967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22661__auto___23968);

return statearr_23967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22663__auto__);
});})(c__22661__auto___23968,cs,m,dchan,dctr,done))
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
var args24025 = [];
var len__17913__auto___24028 = arguments.length;
var i__17914__auto___24029 = (0);
while(true){
if((i__17914__auto___24029 < len__17913__auto___24028)){
args24025.push((arguments[i__17914__auto___24029]));

var G__24030 = (i__17914__auto___24029 + (1));
i__17914__auto___24029 = G__24030;
continue;
} else {
}
break;
}

var G__24027 = args24025.length;
switch (G__24027) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24025.length)].join('')));

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
var len__17913__auto___24042 = arguments.length;
var i__17914__auto___24043 = (0);
while(true){
if((i__17914__auto___24043 < len__17913__auto___24042)){
args__17920__auto__.push((arguments[i__17914__auto___24043]));

var G__24044 = (i__17914__auto___24043 + (1));
i__17914__auto___24043 = G__24044;
continue;
} else {
}
break;
}

var argseq__17921__auto__ = ((((3) < args__17920__auto__.length))?(new cljs.core.IndexedSeq(args__17920__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17921__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24036){
var map__24037 = p__24036;
var map__24037__$1 = ((((!((map__24037 == null)))?((((map__24037.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24037.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24037):map__24037);
var opts = map__24037__$1;
var statearr_24039_24045 = state;
(statearr_24039_24045[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__24037,map__24037__$1,opts){
return (function (val){
var statearr_24040_24046 = state;
(statearr_24040_24046[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24037,map__24037__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_24041_24047 = state;
(statearr_24041_24047[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24032){
var G__24033 = cljs.core.first.call(null,seq24032);
var seq24032__$1 = cljs.core.next.call(null,seq24032);
var G__24034 = cljs.core.first.call(null,seq24032__$1);
var seq24032__$2 = cljs.core.next.call(null,seq24032__$1);
var G__24035 = cljs.core.first.call(null,seq24032__$2);
var seq24032__$3 = cljs.core.next.call(null,seq24032__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24033,G__24034,G__24035,seq24032__$3);
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
if(typeof cljs.core.async.t_cljs$core$async24211 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24211 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24212){
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
this.meta24212 = meta24212;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24213,meta24212__$1){
var self__ = this;
var _24213__$1 = this;
return (new cljs.core.async.t_cljs$core$async24211(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24212__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24211.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24213){
var self__ = this;
var _24213__$1 = this;
return self__.meta24212;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24211.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24211.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24211.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async24211.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24211.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24211.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24211.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24211.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async24211.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24212","meta24212",53834096,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24211.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24211.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24211";

cljs.core.async.t_cljs$core$async24211.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17453__auto__,writer__17454__auto__,opt__17455__auto__){
return cljs.core._write.call(null,writer__17454__auto__,"cljs.core.async/t_cljs$core$async24211");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async24211 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24211(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24212){
return (new cljs.core.async.t_cljs$core$async24211(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24212));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24211(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22661__auto___24374 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22661__auto___24374,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22662__auto__ = (function (){var switch__22549__auto__ = ((function (c__22661__auto___24374,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24311){
var state_val_24312 = (state_24311[(1)]);
if((state_val_24312 === (7))){
var inst_24229 = (state_24311[(2)]);
var state_24311__$1 = state_24311;
var statearr_24313_24375 = state_24311__$1;
(statearr_24313_24375[(2)] = inst_24229);

(statearr_24313_24375[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24312 === (20))){
var inst_24241 = (state_24311[(7)]);
var state_24311__$1 = state_24311;
var statearr_24314_24376 = state_24311__$1;
(statearr_24314_24376[(2)] = inst_24241);

(statearr_24314_24376[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24312 === (27))){
var state_24311__$1 = state_24311;
var statearr_24315_24377 = state_24311__$1;
(statearr_24315_24377[(2)] = null);

(statearr_24315_24377[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24312 === (1))){
var inst_24217 = (state_24311[(8)]);
var inst_24217__$1 = calc_state.call(null);
var inst_24219 = (inst_24217__$1 == null);
var inst_24220 = cljs.core.not.call(null,inst_24219);
var state_24311__$1 = (function (){var statearr_24316 = state_24311;
(statearr_24316[(8)] = inst_24217__$1);

return statearr_24316;
})();
if(inst_24220){
var statearr_24317_24378 = state_24311__$1;
(statearr_24317_24378[(1)] = (2));

} else {
var statearr_24318_24379 = state_24311__$1;
(statearr_24318_24379[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24312 === (24))){
var inst_24264 = (state_24311[(9)]);
var inst_24285 = (state_24311[(10)]);
var inst_24271 = (state_24311[(11)]);
var inst_24285__$1 = inst_24264.call(null,inst_24271);
var state_24311__$1 = (function (){var statearr_24319 = state_24311;
(statearr_24319[(10)] = inst_24285__$1);

return statearr_24319;
})();
if(cljs.core.truth_(inst_24285__$1)){
var statearr_24320_24380 = state_24311__$1;
(statearr_24320_24380[(1)] = (29));

} else {
var statearr_24321_24381 = state_24311__$1;
(statearr_24321_24381[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24312 === (4))){
var inst_24232 = (state_24311[(2)]);
var state_24311__$1 = state_24311;
if(cljs.core.truth_(inst_24232)){
var statearr_24322_24382 = state_24311__$1;
(statearr_24322_24382[(1)] = (8));

} else {
var statearr_24323_24383 = state_24311__$1;
(statearr_24323_24383[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24312 === (15))){
var inst_24258 = (state_24311[(2)]);
var state_24311__$1 = state_24311;
if(cljs.core.truth_(inst_24258)){
var statearr_24324_24384 = state_24311__$1;
(statearr_24324_24384[(1)] = (19));

} else {
var statearr_24325_24385 = state_24311__$1;
(statearr_24325_24385[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24312 === (21))){
var inst_24263 = (state_24311[(12)]);
var inst_24263__$1 = (state_24311[(2)]);
var inst_24264 = cljs.core.get.call(null,inst_24263__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24265 = cljs.core.get.call(null,inst_24263__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24266 = cljs.core.get.call(null,inst_24263__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24311__$1 = (function (){var statearr_24326 = state_24311;
(statearr_24326[(9)] = inst_24264);

(statearr_24326[(13)] = inst_24265);

(statearr_24326[(12)] = inst_24263__$1);

return statearr_24326;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24311__$1,(22),inst_24266);
} else {
if((state_val_24312 === (31))){
var inst_24293 = (state_24311[(2)]);
var state_24311__$1 = state_24311;
if(cljs.core.truth_(inst_24293)){
var statearr_24327_24386 = state_24311__$1;
(statearr_24327_24386[(1)] = (32));

} else {
var statearr_24328_24387 = state_24311__$1;
(statearr_24328_24387[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24312 === (32))){
var inst_24270 = (state_24311[(14)]);
var state_24311__$1 = state_24311;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24311__$1,(35),out,inst_24270);
} else {
if((state_val_24312 === (33))){
var inst_24263 = (state_24311[(12)]);
var inst_24241 = inst_24263;
var state_24311__$1 = (function (){var statearr_24329 = state_24311;
(statearr_24329[(7)] = inst_24241);

return statearr_24329;
})();
var statearr_24330_24388 = state_24311__$1;
(statearr_24330_24388[(2)] = null);

(statearr_24330_24388[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24312 === (13))){
var inst_24241 = (state_24311[(7)]);
var inst_24248 = inst_24241.cljs$lang$protocol_mask$partition0$;
var inst_24249 = (inst_24248 & (64));
var inst_24250 = inst_24241.cljs$core$ISeq$;
var inst_24251 = (inst_24249) || (inst_24250);
var state_24311__$1 = state_24311;
if(cljs.core.truth_(inst_24251)){
var statearr_24331_24389 = state_24311__$1;
(statearr_24331_24389[(1)] = (16));

} else {
var statearr_24332_24390 = state_24311__$1;
(statearr_24332_24390[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24312 === (22))){
var inst_24271 = (state_24311[(11)]);
var inst_24270 = (state_24311[(14)]);
var inst_24269 = (state_24311[(2)]);
var inst_24270__$1 = cljs.core.nth.call(null,inst_24269,(0),null);
var inst_24271__$1 = cljs.core.nth.call(null,inst_24269,(1),null);
var inst_24272 = (inst_24270__$1 == null);
var inst_24273 = cljs.core._EQ_.call(null,inst_24271__$1,change);
var inst_24274 = (inst_24272) || (inst_24273);
var state_24311__$1 = (function (){var statearr_24333 = state_24311;
(statearr_24333[(11)] = inst_24271__$1);

(statearr_24333[(14)] = inst_24270__$1);

return statearr_24333;
})();
if(cljs.core.truth_(inst_24274)){
var statearr_24334_24391 = state_24311__$1;
(statearr_24334_24391[(1)] = (23));

} else {
var statearr_24335_24392 = state_24311__$1;
(statearr_24335_24392[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24312 === (36))){
var inst_24263 = (state_24311[(12)]);
var inst_24241 = inst_24263;
var state_24311__$1 = (function (){var statearr_24336 = state_24311;
(statearr_24336[(7)] = inst_24241);

return statearr_24336;
})();
var statearr_24337_24393 = state_24311__$1;
(statearr_24337_24393[(2)] = null);

(statearr_24337_24393[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24312 === (29))){
var inst_24285 = (state_24311[(10)]);
var state_24311__$1 = state_24311;
var statearr_24338_24394 = state_24311__$1;
(statearr_24338_24394[(2)] = inst_24285);

(statearr_24338_24394[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24312 === (6))){
var state_24311__$1 = state_24311;
var statearr_24339_24395 = state_24311__$1;
(statearr_24339_24395[(2)] = false);

(statearr_24339_24395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24312 === (28))){
var inst_24281 = (state_24311[(2)]);
var inst_24282 = calc_state.call(null);
var inst_24241 = inst_24282;
var state_24311__$1 = (function (){var statearr_24340 = state_24311;
(statearr_24340[(7)] = inst_24241);

(statearr_24340[(15)] = inst_24281);

return statearr_24340;
})();
var statearr_24341_24396 = state_24311__$1;
(statearr_24341_24396[(2)] = null);

(statearr_24341_24396[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24312 === (25))){
var inst_24307 = (state_24311[(2)]);
var state_24311__$1 = state_24311;
var statearr_24342_24397 = state_24311__$1;
(statearr_24342_24397[(2)] = inst_24307);

(statearr_24342_24397[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24312 === (34))){
var inst_24305 = (state_24311[(2)]);
var state_24311__$1 = state_24311;
var statearr_24343_24398 = state_24311__$1;
(statearr_24343_24398[(2)] = inst_24305);

(statearr_24343_24398[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24312 === (17))){
var state_24311__$1 = state_24311;
var statearr_24344_24399 = state_24311__$1;
(statearr_24344_24399[(2)] = false);

(statearr_24344_24399[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24312 === (3))){
var state_24311__$1 = state_24311;
var statearr_24345_24400 = state_24311__$1;
(statearr_24345_24400[(2)] = false);

(statearr_24345_24400[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24312 === (12))){
var inst_24309 = (state_24311[(2)]);
var state_24311__$1 = state_24311;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24311__$1,inst_24309);
} else {
if((state_val_24312 === (2))){
var inst_24217 = (state_24311[(8)]);
var inst_24222 = inst_24217.cljs$lang$protocol_mask$partition0$;
var inst_24223 = (inst_24222 & (64));
var inst_24224 = inst_24217.cljs$core$ISeq$;
var inst_24225 = (inst_24223) || (inst_24224);
var state_24311__$1 = state_24311;
if(cljs.core.truth_(inst_24225)){
var statearr_24346_24401 = state_24311__$1;
(statearr_24346_24401[(1)] = (5));

} else {
var statearr_24347_24402 = state_24311__$1;
(statearr_24347_24402[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24312 === (23))){
var inst_24270 = (state_24311[(14)]);
var inst_24276 = (inst_24270 == null);
var state_24311__$1 = state_24311;
if(cljs.core.truth_(inst_24276)){
var statearr_24348_24403 = state_24311__$1;
(statearr_24348_24403[(1)] = (26));

} else {
var statearr_24349_24404 = state_24311__$1;
(statearr_24349_24404[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24312 === (35))){
var inst_24296 = (state_24311[(2)]);
var state_24311__$1 = state_24311;
if(cljs.core.truth_(inst_24296)){
var statearr_24350_24405 = state_24311__$1;
(statearr_24350_24405[(1)] = (36));

} else {
var statearr_24351_24406 = state_24311__$1;
(statearr_24351_24406[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24312 === (19))){
var inst_24241 = (state_24311[(7)]);
var inst_24260 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24241);
var state_24311__$1 = state_24311;
var statearr_24352_24407 = state_24311__$1;
(statearr_24352_24407[(2)] = inst_24260);

(statearr_24352_24407[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24312 === (11))){
var inst_24241 = (state_24311[(7)]);
var inst_24245 = (inst_24241 == null);
var inst_24246 = cljs.core.not.call(null,inst_24245);
var state_24311__$1 = state_24311;
if(inst_24246){
var statearr_24353_24408 = state_24311__$1;
(statearr_24353_24408[(1)] = (13));

} else {
var statearr_24354_24409 = state_24311__$1;
(statearr_24354_24409[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24312 === (9))){
var inst_24217 = (state_24311[(8)]);
var state_24311__$1 = state_24311;
var statearr_24355_24410 = state_24311__$1;
(statearr_24355_24410[(2)] = inst_24217);

(statearr_24355_24410[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24312 === (5))){
var state_24311__$1 = state_24311;
var statearr_24356_24411 = state_24311__$1;
(statearr_24356_24411[(2)] = true);

(statearr_24356_24411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24312 === (14))){
var state_24311__$1 = state_24311;
var statearr_24357_24412 = state_24311__$1;
(statearr_24357_24412[(2)] = false);

(statearr_24357_24412[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24312 === (26))){
var inst_24271 = (state_24311[(11)]);
var inst_24278 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24271);
var state_24311__$1 = state_24311;
var statearr_24358_24413 = state_24311__$1;
(statearr_24358_24413[(2)] = inst_24278);

(statearr_24358_24413[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24312 === (16))){
var state_24311__$1 = state_24311;
var statearr_24359_24414 = state_24311__$1;
(statearr_24359_24414[(2)] = true);

(statearr_24359_24414[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24312 === (38))){
var inst_24301 = (state_24311[(2)]);
var state_24311__$1 = state_24311;
var statearr_24360_24415 = state_24311__$1;
(statearr_24360_24415[(2)] = inst_24301);

(statearr_24360_24415[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24312 === (30))){
var inst_24264 = (state_24311[(9)]);
var inst_24265 = (state_24311[(13)]);
var inst_24271 = (state_24311[(11)]);
var inst_24288 = cljs.core.empty_QMARK_.call(null,inst_24264);
var inst_24289 = inst_24265.call(null,inst_24271);
var inst_24290 = cljs.core.not.call(null,inst_24289);
var inst_24291 = (inst_24288) && (inst_24290);
var state_24311__$1 = state_24311;
var statearr_24361_24416 = state_24311__$1;
(statearr_24361_24416[(2)] = inst_24291);

(statearr_24361_24416[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24312 === (10))){
var inst_24217 = (state_24311[(8)]);
var inst_24237 = (state_24311[(2)]);
var inst_24238 = cljs.core.get.call(null,inst_24237,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24239 = cljs.core.get.call(null,inst_24237,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24240 = cljs.core.get.call(null,inst_24237,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24241 = inst_24217;
var state_24311__$1 = (function (){var statearr_24362 = state_24311;
(statearr_24362[(16)] = inst_24240);

(statearr_24362[(17)] = inst_24238);

(statearr_24362[(18)] = inst_24239);

(statearr_24362[(7)] = inst_24241);

return statearr_24362;
})();
var statearr_24363_24417 = state_24311__$1;
(statearr_24363_24417[(2)] = null);

(statearr_24363_24417[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24312 === (18))){
var inst_24255 = (state_24311[(2)]);
var state_24311__$1 = state_24311;
var statearr_24364_24418 = state_24311__$1;
(statearr_24364_24418[(2)] = inst_24255);

(statearr_24364_24418[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24312 === (37))){
var state_24311__$1 = state_24311;
var statearr_24365_24419 = state_24311__$1;
(statearr_24365_24419[(2)] = null);

(statearr_24365_24419[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24312 === (8))){
var inst_24217 = (state_24311[(8)]);
var inst_24234 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24217);
var state_24311__$1 = state_24311;
var statearr_24366_24420 = state_24311__$1;
(statearr_24366_24420[(2)] = inst_24234);

(statearr_24366_24420[(1)] = (10));


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
});})(c__22661__auto___24374,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22549__auto__,c__22661__auto___24374,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22550__auto__ = null;
var cljs$core$async$mix_$_state_machine__22550__auto____0 = (function (){
var statearr_24370 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24370[(0)] = cljs$core$async$mix_$_state_machine__22550__auto__);

(statearr_24370[(1)] = (1));

return statearr_24370;
});
var cljs$core$async$mix_$_state_machine__22550__auto____1 = (function (state_24311){
while(true){
var ret_value__22551__auto__ = (function (){try{while(true){
var result__22552__auto__ = switch__22549__auto__.call(null,state_24311);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22552__auto__;
}
break;
}
}catch (e24371){if((e24371 instanceof Object)){
var ex__22553__auto__ = e24371;
var statearr_24372_24421 = state_24311;
(statearr_24372_24421[(5)] = ex__22553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24422 = state_24311;
state_24311 = G__24422;
continue;
} else {
return ret_value__22551__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22550__auto__ = function(state_24311){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22550__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22550__auto____1.call(this,state_24311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22550__auto____0;
cljs$core$async$mix_$_state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22550__auto____1;
return cljs$core$async$mix_$_state_machine__22550__auto__;
})()
;})(switch__22549__auto__,c__22661__auto___24374,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22663__auto__ = (function (){var statearr_24373 = f__22662__auto__.call(null);
(statearr_24373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22661__auto___24374);

return statearr_24373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22663__auto__);
});})(c__22661__auto___24374,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args24423 = [];
var len__17913__auto___24426 = arguments.length;
var i__17914__auto___24427 = (0);
while(true){
if((i__17914__auto___24427 < len__17913__auto___24426)){
args24423.push((arguments[i__17914__auto___24427]));

var G__24428 = (i__17914__auto___24427 + (1));
i__17914__auto___24427 = G__24428;
continue;
} else {
}
break;
}

var G__24425 = args24423.length;
switch (G__24425) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24423.length)].join('')));

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
var args24431 = [];
var len__17913__auto___24556 = arguments.length;
var i__17914__auto___24557 = (0);
while(true){
if((i__17914__auto___24557 < len__17913__auto___24556)){
args24431.push((arguments[i__17914__auto___24557]));

var G__24558 = (i__17914__auto___24557 + (1));
i__17914__auto___24557 = G__24558;
continue;
} else {
}
break;
}

var G__24433 = args24431.length;
switch (G__24433) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24431.length)].join('')));

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
return (function (p1__24430_SHARP_){
if(cljs.core.truth_(p1__24430_SHARP_.call(null,topic))){
return p1__24430_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24430_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16855__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async24434 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24434 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24435){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24435 = meta24435;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24434.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24436,meta24435__$1){
var self__ = this;
var _24436__$1 = this;
return (new cljs.core.async.t_cljs$core$async24434(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24435__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24434.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24436){
var self__ = this;
var _24436__$1 = this;
return self__.meta24435;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24434.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24434.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24434.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async24434.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24434.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async24434.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24434.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24434.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24435","meta24435",-211217604,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24434.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24434.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24434";

cljs.core.async.t_cljs$core$async24434.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17453__auto__,writer__17454__auto__,opt__17455__auto__){
return cljs.core._write.call(null,writer__17454__auto__,"cljs.core.async/t_cljs$core$async24434");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async24434 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24434(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24435){
return (new cljs.core.async.t_cljs$core$async24434(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24435));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24434(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22661__auto___24560 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22661__auto___24560,mults,ensure_mult,p){
return (function (){
var f__22662__auto__ = (function (){var switch__22549__auto__ = ((function (c__22661__auto___24560,mults,ensure_mult,p){
return (function (state_24508){
var state_val_24509 = (state_24508[(1)]);
if((state_val_24509 === (7))){
var inst_24504 = (state_24508[(2)]);
var state_24508__$1 = state_24508;
var statearr_24510_24561 = state_24508__$1;
(statearr_24510_24561[(2)] = inst_24504);

(statearr_24510_24561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (20))){
var state_24508__$1 = state_24508;
var statearr_24511_24562 = state_24508__$1;
(statearr_24511_24562[(2)] = null);

(statearr_24511_24562[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (1))){
var state_24508__$1 = state_24508;
var statearr_24512_24563 = state_24508__$1;
(statearr_24512_24563[(2)] = null);

(statearr_24512_24563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (24))){
var inst_24487 = (state_24508[(7)]);
var inst_24496 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24487);
var state_24508__$1 = state_24508;
var statearr_24513_24564 = state_24508__$1;
(statearr_24513_24564[(2)] = inst_24496);

(statearr_24513_24564[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (4))){
var inst_24439 = (state_24508[(8)]);
var inst_24439__$1 = (state_24508[(2)]);
var inst_24440 = (inst_24439__$1 == null);
var state_24508__$1 = (function (){var statearr_24514 = state_24508;
(statearr_24514[(8)] = inst_24439__$1);

return statearr_24514;
})();
if(cljs.core.truth_(inst_24440)){
var statearr_24515_24565 = state_24508__$1;
(statearr_24515_24565[(1)] = (5));

} else {
var statearr_24516_24566 = state_24508__$1;
(statearr_24516_24566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (15))){
var inst_24481 = (state_24508[(2)]);
var state_24508__$1 = state_24508;
var statearr_24517_24567 = state_24508__$1;
(statearr_24517_24567[(2)] = inst_24481);

(statearr_24517_24567[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (21))){
var inst_24501 = (state_24508[(2)]);
var state_24508__$1 = (function (){var statearr_24518 = state_24508;
(statearr_24518[(9)] = inst_24501);

return statearr_24518;
})();
var statearr_24519_24568 = state_24508__$1;
(statearr_24519_24568[(2)] = null);

(statearr_24519_24568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (13))){
var inst_24463 = (state_24508[(10)]);
var inst_24465 = cljs.core.chunked_seq_QMARK_.call(null,inst_24463);
var state_24508__$1 = state_24508;
if(inst_24465){
var statearr_24520_24569 = state_24508__$1;
(statearr_24520_24569[(1)] = (16));

} else {
var statearr_24521_24570 = state_24508__$1;
(statearr_24521_24570[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (22))){
var inst_24493 = (state_24508[(2)]);
var state_24508__$1 = state_24508;
if(cljs.core.truth_(inst_24493)){
var statearr_24522_24571 = state_24508__$1;
(statearr_24522_24571[(1)] = (23));

} else {
var statearr_24523_24572 = state_24508__$1;
(statearr_24523_24572[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (6))){
var inst_24439 = (state_24508[(8)]);
var inst_24487 = (state_24508[(7)]);
var inst_24489 = (state_24508[(11)]);
var inst_24487__$1 = topic_fn.call(null,inst_24439);
var inst_24488 = cljs.core.deref.call(null,mults);
var inst_24489__$1 = cljs.core.get.call(null,inst_24488,inst_24487__$1);
var state_24508__$1 = (function (){var statearr_24524 = state_24508;
(statearr_24524[(7)] = inst_24487__$1);

(statearr_24524[(11)] = inst_24489__$1);

return statearr_24524;
})();
if(cljs.core.truth_(inst_24489__$1)){
var statearr_24525_24573 = state_24508__$1;
(statearr_24525_24573[(1)] = (19));

} else {
var statearr_24526_24574 = state_24508__$1;
(statearr_24526_24574[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (25))){
var inst_24498 = (state_24508[(2)]);
var state_24508__$1 = state_24508;
var statearr_24527_24575 = state_24508__$1;
(statearr_24527_24575[(2)] = inst_24498);

(statearr_24527_24575[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (17))){
var inst_24463 = (state_24508[(10)]);
var inst_24472 = cljs.core.first.call(null,inst_24463);
var inst_24473 = cljs.core.async.muxch_STAR_.call(null,inst_24472);
var inst_24474 = cljs.core.async.close_BANG_.call(null,inst_24473);
var inst_24475 = cljs.core.next.call(null,inst_24463);
var inst_24449 = inst_24475;
var inst_24450 = null;
var inst_24451 = (0);
var inst_24452 = (0);
var state_24508__$1 = (function (){var statearr_24528 = state_24508;
(statearr_24528[(12)] = inst_24474);

(statearr_24528[(13)] = inst_24449);

(statearr_24528[(14)] = inst_24452);

(statearr_24528[(15)] = inst_24450);

(statearr_24528[(16)] = inst_24451);

return statearr_24528;
})();
var statearr_24529_24576 = state_24508__$1;
(statearr_24529_24576[(2)] = null);

(statearr_24529_24576[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (3))){
var inst_24506 = (state_24508[(2)]);
var state_24508__$1 = state_24508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24508__$1,inst_24506);
} else {
if((state_val_24509 === (12))){
var inst_24483 = (state_24508[(2)]);
var state_24508__$1 = state_24508;
var statearr_24530_24577 = state_24508__$1;
(statearr_24530_24577[(2)] = inst_24483);

(statearr_24530_24577[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (2))){
var state_24508__$1 = state_24508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24508__$1,(4),ch);
} else {
if((state_val_24509 === (23))){
var state_24508__$1 = state_24508;
var statearr_24531_24578 = state_24508__$1;
(statearr_24531_24578[(2)] = null);

(statearr_24531_24578[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (19))){
var inst_24439 = (state_24508[(8)]);
var inst_24489 = (state_24508[(11)]);
var inst_24491 = cljs.core.async.muxch_STAR_.call(null,inst_24489);
var state_24508__$1 = state_24508;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24508__$1,(22),inst_24491,inst_24439);
} else {
if((state_val_24509 === (11))){
var inst_24449 = (state_24508[(13)]);
var inst_24463 = (state_24508[(10)]);
var inst_24463__$1 = cljs.core.seq.call(null,inst_24449);
var state_24508__$1 = (function (){var statearr_24532 = state_24508;
(statearr_24532[(10)] = inst_24463__$1);

return statearr_24532;
})();
if(inst_24463__$1){
var statearr_24533_24579 = state_24508__$1;
(statearr_24533_24579[(1)] = (13));

} else {
var statearr_24534_24580 = state_24508__$1;
(statearr_24534_24580[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (9))){
var inst_24485 = (state_24508[(2)]);
var state_24508__$1 = state_24508;
var statearr_24535_24581 = state_24508__$1;
(statearr_24535_24581[(2)] = inst_24485);

(statearr_24535_24581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (5))){
var inst_24446 = cljs.core.deref.call(null,mults);
var inst_24447 = cljs.core.vals.call(null,inst_24446);
var inst_24448 = cljs.core.seq.call(null,inst_24447);
var inst_24449 = inst_24448;
var inst_24450 = null;
var inst_24451 = (0);
var inst_24452 = (0);
var state_24508__$1 = (function (){var statearr_24536 = state_24508;
(statearr_24536[(13)] = inst_24449);

(statearr_24536[(14)] = inst_24452);

(statearr_24536[(15)] = inst_24450);

(statearr_24536[(16)] = inst_24451);

return statearr_24536;
})();
var statearr_24537_24582 = state_24508__$1;
(statearr_24537_24582[(2)] = null);

(statearr_24537_24582[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (14))){
var state_24508__$1 = state_24508;
var statearr_24541_24583 = state_24508__$1;
(statearr_24541_24583[(2)] = null);

(statearr_24541_24583[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (16))){
var inst_24463 = (state_24508[(10)]);
var inst_24467 = cljs.core.chunk_first.call(null,inst_24463);
var inst_24468 = cljs.core.chunk_rest.call(null,inst_24463);
var inst_24469 = cljs.core.count.call(null,inst_24467);
var inst_24449 = inst_24468;
var inst_24450 = inst_24467;
var inst_24451 = inst_24469;
var inst_24452 = (0);
var state_24508__$1 = (function (){var statearr_24542 = state_24508;
(statearr_24542[(13)] = inst_24449);

(statearr_24542[(14)] = inst_24452);

(statearr_24542[(15)] = inst_24450);

(statearr_24542[(16)] = inst_24451);

return statearr_24542;
})();
var statearr_24543_24584 = state_24508__$1;
(statearr_24543_24584[(2)] = null);

(statearr_24543_24584[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (10))){
var inst_24449 = (state_24508[(13)]);
var inst_24452 = (state_24508[(14)]);
var inst_24450 = (state_24508[(15)]);
var inst_24451 = (state_24508[(16)]);
var inst_24457 = cljs.core._nth.call(null,inst_24450,inst_24452);
var inst_24458 = cljs.core.async.muxch_STAR_.call(null,inst_24457);
var inst_24459 = cljs.core.async.close_BANG_.call(null,inst_24458);
var inst_24460 = (inst_24452 + (1));
var tmp24538 = inst_24449;
var tmp24539 = inst_24450;
var tmp24540 = inst_24451;
var inst_24449__$1 = tmp24538;
var inst_24450__$1 = tmp24539;
var inst_24451__$1 = tmp24540;
var inst_24452__$1 = inst_24460;
var state_24508__$1 = (function (){var statearr_24544 = state_24508;
(statearr_24544[(13)] = inst_24449__$1);

(statearr_24544[(17)] = inst_24459);

(statearr_24544[(14)] = inst_24452__$1);

(statearr_24544[(15)] = inst_24450__$1);

(statearr_24544[(16)] = inst_24451__$1);

return statearr_24544;
})();
var statearr_24545_24585 = state_24508__$1;
(statearr_24545_24585[(2)] = null);

(statearr_24545_24585[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (18))){
var inst_24478 = (state_24508[(2)]);
var state_24508__$1 = state_24508;
var statearr_24546_24586 = state_24508__$1;
(statearr_24546_24586[(2)] = inst_24478);

(statearr_24546_24586[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24509 === (8))){
var inst_24452 = (state_24508[(14)]);
var inst_24451 = (state_24508[(16)]);
var inst_24454 = (inst_24452 < inst_24451);
var inst_24455 = inst_24454;
var state_24508__$1 = state_24508;
if(cljs.core.truth_(inst_24455)){
var statearr_24547_24587 = state_24508__$1;
(statearr_24547_24587[(1)] = (10));

} else {
var statearr_24548_24588 = state_24508__$1;
(statearr_24548_24588[(1)] = (11));

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
});})(c__22661__auto___24560,mults,ensure_mult,p))
;
return ((function (switch__22549__auto__,c__22661__auto___24560,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22550__auto__ = null;
var cljs$core$async$state_machine__22550__auto____0 = (function (){
var statearr_24552 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24552[(0)] = cljs$core$async$state_machine__22550__auto__);

(statearr_24552[(1)] = (1));

return statearr_24552;
});
var cljs$core$async$state_machine__22550__auto____1 = (function (state_24508){
while(true){
var ret_value__22551__auto__ = (function (){try{while(true){
var result__22552__auto__ = switch__22549__auto__.call(null,state_24508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22552__auto__;
}
break;
}
}catch (e24553){if((e24553 instanceof Object)){
var ex__22553__auto__ = e24553;
var statearr_24554_24589 = state_24508;
(statearr_24554_24589[(5)] = ex__22553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24553;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24590 = state_24508;
state_24508 = G__24590;
continue;
} else {
return ret_value__22551__auto__;
}
break;
}
});
cljs$core$async$state_machine__22550__auto__ = function(state_24508){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22550__auto____1.call(this,state_24508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22550__auto____0;
cljs$core$async$state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22550__auto____1;
return cljs$core$async$state_machine__22550__auto__;
})()
;})(switch__22549__auto__,c__22661__auto___24560,mults,ensure_mult,p))
})();
var state__22663__auto__ = (function (){var statearr_24555 = f__22662__auto__.call(null);
(statearr_24555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22661__auto___24560);

return statearr_24555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22663__auto__);
});})(c__22661__auto___24560,mults,ensure_mult,p))
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
var args24591 = [];
var len__17913__auto___24594 = arguments.length;
var i__17914__auto___24595 = (0);
while(true){
if((i__17914__auto___24595 < len__17913__auto___24594)){
args24591.push((arguments[i__17914__auto___24595]));

var G__24596 = (i__17914__auto___24595 + (1));
i__17914__auto___24595 = G__24596;
continue;
} else {
}
break;
}

var G__24593 = args24591.length;
switch (G__24593) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24591.length)].join('')));

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
var args24598 = [];
var len__17913__auto___24601 = arguments.length;
var i__17914__auto___24602 = (0);
while(true){
if((i__17914__auto___24602 < len__17913__auto___24601)){
args24598.push((arguments[i__17914__auto___24602]));

var G__24603 = (i__17914__auto___24602 + (1));
i__17914__auto___24602 = G__24603;
continue;
} else {
}
break;
}

var G__24600 = args24598.length;
switch (G__24600) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24598.length)].join('')));

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
var args24605 = [];
var len__17913__auto___24676 = arguments.length;
var i__17914__auto___24677 = (0);
while(true){
if((i__17914__auto___24677 < len__17913__auto___24676)){
args24605.push((arguments[i__17914__auto___24677]));

var G__24678 = (i__17914__auto___24677 + (1));
i__17914__auto___24677 = G__24678;
continue;
} else {
}
break;
}

var G__24607 = args24605.length;
switch (G__24607) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24605.length)].join('')));

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
var c__22661__auto___24680 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22661__auto___24680,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22662__auto__ = (function (){var switch__22549__auto__ = ((function (c__22661__auto___24680,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24646){
var state_val_24647 = (state_24646[(1)]);
if((state_val_24647 === (7))){
var state_24646__$1 = state_24646;
var statearr_24648_24681 = state_24646__$1;
(statearr_24648_24681[(2)] = null);

(statearr_24648_24681[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24647 === (1))){
var state_24646__$1 = state_24646;
var statearr_24649_24682 = state_24646__$1;
(statearr_24649_24682[(2)] = null);

(statearr_24649_24682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24647 === (4))){
var inst_24610 = (state_24646[(7)]);
var inst_24612 = (inst_24610 < cnt);
var state_24646__$1 = state_24646;
if(cljs.core.truth_(inst_24612)){
var statearr_24650_24683 = state_24646__$1;
(statearr_24650_24683[(1)] = (6));

} else {
var statearr_24651_24684 = state_24646__$1;
(statearr_24651_24684[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24647 === (15))){
var inst_24642 = (state_24646[(2)]);
var state_24646__$1 = state_24646;
var statearr_24652_24685 = state_24646__$1;
(statearr_24652_24685[(2)] = inst_24642);

(statearr_24652_24685[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24647 === (13))){
var inst_24635 = cljs.core.async.close_BANG_.call(null,out);
var state_24646__$1 = state_24646;
var statearr_24653_24686 = state_24646__$1;
(statearr_24653_24686[(2)] = inst_24635);

(statearr_24653_24686[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24647 === (6))){
var state_24646__$1 = state_24646;
var statearr_24654_24687 = state_24646__$1;
(statearr_24654_24687[(2)] = null);

(statearr_24654_24687[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24647 === (3))){
var inst_24644 = (state_24646[(2)]);
var state_24646__$1 = state_24646;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24646__$1,inst_24644);
} else {
if((state_val_24647 === (12))){
var inst_24632 = (state_24646[(8)]);
var inst_24632__$1 = (state_24646[(2)]);
var inst_24633 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24632__$1);
var state_24646__$1 = (function (){var statearr_24655 = state_24646;
(statearr_24655[(8)] = inst_24632__$1);

return statearr_24655;
})();
if(cljs.core.truth_(inst_24633)){
var statearr_24656_24688 = state_24646__$1;
(statearr_24656_24688[(1)] = (13));

} else {
var statearr_24657_24689 = state_24646__$1;
(statearr_24657_24689[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24647 === (2))){
var inst_24609 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24610 = (0);
var state_24646__$1 = (function (){var statearr_24658 = state_24646;
(statearr_24658[(9)] = inst_24609);

(statearr_24658[(7)] = inst_24610);

return statearr_24658;
})();
var statearr_24659_24690 = state_24646__$1;
(statearr_24659_24690[(2)] = null);

(statearr_24659_24690[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24647 === (11))){
var inst_24610 = (state_24646[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24646,(10),Object,null,(9));
var inst_24619 = chs__$1.call(null,inst_24610);
var inst_24620 = done.call(null,inst_24610);
var inst_24621 = cljs.core.async.take_BANG_.call(null,inst_24619,inst_24620);
var state_24646__$1 = state_24646;
var statearr_24660_24691 = state_24646__$1;
(statearr_24660_24691[(2)] = inst_24621);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24646__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24647 === (9))){
var inst_24610 = (state_24646[(7)]);
var inst_24623 = (state_24646[(2)]);
var inst_24624 = (inst_24610 + (1));
var inst_24610__$1 = inst_24624;
var state_24646__$1 = (function (){var statearr_24661 = state_24646;
(statearr_24661[(10)] = inst_24623);

(statearr_24661[(7)] = inst_24610__$1);

return statearr_24661;
})();
var statearr_24662_24692 = state_24646__$1;
(statearr_24662_24692[(2)] = null);

(statearr_24662_24692[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24647 === (5))){
var inst_24630 = (state_24646[(2)]);
var state_24646__$1 = (function (){var statearr_24663 = state_24646;
(statearr_24663[(11)] = inst_24630);

return statearr_24663;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24646__$1,(12),dchan);
} else {
if((state_val_24647 === (14))){
var inst_24632 = (state_24646[(8)]);
var inst_24637 = cljs.core.apply.call(null,f,inst_24632);
var state_24646__$1 = state_24646;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24646__$1,(16),out,inst_24637);
} else {
if((state_val_24647 === (16))){
var inst_24639 = (state_24646[(2)]);
var state_24646__$1 = (function (){var statearr_24664 = state_24646;
(statearr_24664[(12)] = inst_24639);

return statearr_24664;
})();
var statearr_24665_24693 = state_24646__$1;
(statearr_24665_24693[(2)] = null);

(statearr_24665_24693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24647 === (10))){
var inst_24614 = (state_24646[(2)]);
var inst_24615 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24646__$1 = (function (){var statearr_24666 = state_24646;
(statearr_24666[(13)] = inst_24614);

return statearr_24666;
})();
var statearr_24667_24694 = state_24646__$1;
(statearr_24667_24694[(2)] = inst_24615);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24646__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24647 === (8))){
var inst_24628 = (state_24646[(2)]);
var state_24646__$1 = state_24646;
var statearr_24668_24695 = state_24646__$1;
(statearr_24668_24695[(2)] = inst_24628);

(statearr_24668_24695[(1)] = (5));


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
});})(c__22661__auto___24680,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22549__auto__,c__22661__auto___24680,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22550__auto__ = null;
var cljs$core$async$state_machine__22550__auto____0 = (function (){
var statearr_24672 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24672[(0)] = cljs$core$async$state_machine__22550__auto__);

(statearr_24672[(1)] = (1));

return statearr_24672;
});
var cljs$core$async$state_machine__22550__auto____1 = (function (state_24646){
while(true){
var ret_value__22551__auto__ = (function (){try{while(true){
var result__22552__auto__ = switch__22549__auto__.call(null,state_24646);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22552__auto__;
}
break;
}
}catch (e24673){if((e24673 instanceof Object)){
var ex__22553__auto__ = e24673;
var statearr_24674_24696 = state_24646;
(statearr_24674_24696[(5)] = ex__22553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24646);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24697 = state_24646;
state_24646 = G__24697;
continue;
} else {
return ret_value__22551__auto__;
}
break;
}
});
cljs$core$async$state_machine__22550__auto__ = function(state_24646){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22550__auto____1.call(this,state_24646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22550__auto____0;
cljs$core$async$state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22550__auto____1;
return cljs$core$async$state_machine__22550__auto__;
})()
;})(switch__22549__auto__,c__22661__auto___24680,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22663__auto__ = (function (){var statearr_24675 = f__22662__auto__.call(null);
(statearr_24675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22661__auto___24680);

return statearr_24675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22663__auto__);
});})(c__22661__auto___24680,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args24699 = [];
var len__17913__auto___24755 = arguments.length;
var i__17914__auto___24756 = (0);
while(true){
if((i__17914__auto___24756 < len__17913__auto___24755)){
args24699.push((arguments[i__17914__auto___24756]));

var G__24757 = (i__17914__auto___24756 + (1));
i__17914__auto___24756 = G__24757;
continue;
} else {
}
break;
}

var G__24701 = args24699.length;
switch (G__24701) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24699.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22661__auto___24759 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22661__auto___24759,out){
return (function (){
var f__22662__auto__ = (function (){var switch__22549__auto__ = ((function (c__22661__auto___24759,out){
return (function (state_24731){
var state_val_24732 = (state_24731[(1)]);
if((state_val_24732 === (7))){
var inst_24711 = (state_24731[(7)]);
var inst_24710 = (state_24731[(8)]);
var inst_24710__$1 = (state_24731[(2)]);
var inst_24711__$1 = cljs.core.nth.call(null,inst_24710__$1,(0),null);
var inst_24712 = cljs.core.nth.call(null,inst_24710__$1,(1),null);
var inst_24713 = (inst_24711__$1 == null);
var state_24731__$1 = (function (){var statearr_24733 = state_24731;
(statearr_24733[(7)] = inst_24711__$1);

(statearr_24733[(9)] = inst_24712);

(statearr_24733[(8)] = inst_24710__$1);

return statearr_24733;
})();
if(cljs.core.truth_(inst_24713)){
var statearr_24734_24760 = state_24731__$1;
(statearr_24734_24760[(1)] = (8));

} else {
var statearr_24735_24761 = state_24731__$1;
(statearr_24735_24761[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24732 === (1))){
var inst_24702 = cljs.core.vec.call(null,chs);
var inst_24703 = inst_24702;
var state_24731__$1 = (function (){var statearr_24736 = state_24731;
(statearr_24736[(10)] = inst_24703);

return statearr_24736;
})();
var statearr_24737_24762 = state_24731__$1;
(statearr_24737_24762[(2)] = null);

(statearr_24737_24762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24732 === (4))){
var inst_24703 = (state_24731[(10)]);
var state_24731__$1 = state_24731;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24731__$1,(7),inst_24703);
} else {
if((state_val_24732 === (6))){
var inst_24727 = (state_24731[(2)]);
var state_24731__$1 = state_24731;
var statearr_24738_24763 = state_24731__$1;
(statearr_24738_24763[(2)] = inst_24727);

(statearr_24738_24763[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24732 === (3))){
var inst_24729 = (state_24731[(2)]);
var state_24731__$1 = state_24731;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24731__$1,inst_24729);
} else {
if((state_val_24732 === (2))){
var inst_24703 = (state_24731[(10)]);
var inst_24705 = cljs.core.count.call(null,inst_24703);
var inst_24706 = (inst_24705 > (0));
var state_24731__$1 = state_24731;
if(cljs.core.truth_(inst_24706)){
var statearr_24740_24764 = state_24731__$1;
(statearr_24740_24764[(1)] = (4));

} else {
var statearr_24741_24765 = state_24731__$1;
(statearr_24741_24765[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24732 === (11))){
var inst_24703 = (state_24731[(10)]);
var inst_24720 = (state_24731[(2)]);
var tmp24739 = inst_24703;
var inst_24703__$1 = tmp24739;
var state_24731__$1 = (function (){var statearr_24742 = state_24731;
(statearr_24742[(11)] = inst_24720);

(statearr_24742[(10)] = inst_24703__$1);

return statearr_24742;
})();
var statearr_24743_24766 = state_24731__$1;
(statearr_24743_24766[(2)] = null);

(statearr_24743_24766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24732 === (9))){
var inst_24711 = (state_24731[(7)]);
var state_24731__$1 = state_24731;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24731__$1,(11),out,inst_24711);
} else {
if((state_val_24732 === (5))){
var inst_24725 = cljs.core.async.close_BANG_.call(null,out);
var state_24731__$1 = state_24731;
var statearr_24744_24767 = state_24731__$1;
(statearr_24744_24767[(2)] = inst_24725);

(statearr_24744_24767[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24732 === (10))){
var inst_24723 = (state_24731[(2)]);
var state_24731__$1 = state_24731;
var statearr_24745_24768 = state_24731__$1;
(statearr_24745_24768[(2)] = inst_24723);

(statearr_24745_24768[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24732 === (8))){
var inst_24711 = (state_24731[(7)]);
var inst_24703 = (state_24731[(10)]);
var inst_24712 = (state_24731[(9)]);
var inst_24710 = (state_24731[(8)]);
var inst_24715 = (function (){var cs = inst_24703;
var vec__24708 = inst_24710;
var v = inst_24711;
var c = inst_24712;
return ((function (cs,vec__24708,v,c,inst_24711,inst_24703,inst_24712,inst_24710,state_val_24732,c__22661__auto___24759,out){
return (function (p1__24698_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24698_SHARP_);
});
;})(cs,vec__24708,v,c,inst_24711,inst_24703,inst_24712,inst_24710,state_val_24732,c__22661__auto___24759,out))
})();
var inst_24716 = cljs.core.filterv.call(null,inst_24715,inst_24703);
var inst_24703__$1 = inst_24716;
var state_24731__$1 = (function (){var statearr_24746 = state_24731;
(statearr_24746[(10)] = inst_24703__$1);

return statearr_24746;
})();
var statearr_24747_24769 = state_24731__$1;
(statearr_24747_24769[(2)] = null);

(statearr_24747_24769[(1)] = (2));


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
});})(c__22661__auto___24759,out))
;
return ((function (switch__22549__auto__,c__22661__auto___24759,out){
return (function() {
var cljs$core$async$state_machine__22550__auto__ = null;
var cljs$core$async$state_machine__22550__auto____0 = (function (){
var statearr_24751 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24751[(0)] = cljs$core$async$state_machine__22550__auto__);

(statearr_24751[(1)] = (1));

return statearr_24751;
});
var cljs$core$async$state_machine__22550__auto____1 = (function (state_24731){
while(true){
var ret_value__22551__auto__ = (function (){try{while(true){
var result__22552__auto__ = switch__22549__auto__.call(null,state_24731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22552__auto__;
}
break;
}
}catch (e24752){if((e24752 instanceof Object)){
var ex__22553__auto__ = e24752;
var statearr_24753_24770 = state_24731;
(statearr_24753_24770[(5)] = ex__22553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24771 = state_24731;
state_24731 = G__24771;
continue;
} else {
return ret_value__22551__auto__;
}
break;
}
});
cljs$core$async$state_machine__22550__auto__ = function(state_24731){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22550__auto____1.call(this,state_24731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22550__auto____0;
cljs$core$async$state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22550__auto____1;
return cljs$core$async$state_machine__22550__auto__;
})()
;})(switch__22549__auto__,c__22661__auto___24759,out))
})();
var state__22663__auto__ = (function (){var statearr_24754 = f__22662__auto__.call(null);
(statearr_24754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22661__auto___24759);

return statearr_24754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22663__auto__);
});})(c__22661__auto___24759,out))
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
var args24772 = [];
var len__17913__auto___24821 = arguments.length;
var i__17914__auto___24822 = (0);
while(true){
if((i__17914__auto___24822 < len__17913__auto___24821)){
args24772.push((arguments[i__17914__auto___24822]));

var G__24823 = (i__17914__auto___24822 + (1));
i__17914__auto___24822 = G__24823;
continue;
} else {
}
break;
}

var G__24774 = args24772.length;
switch (G__24774) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24772.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22661__auto___24825 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22661__auto___24825,out){
return (function (){
var f__22662__auto__ = (function (){var switch__22549__auto__ = ((function (c__22661__auto___24825,out){
return (function (state_24798){
var state_val_24799 = (state_24798[(1)]);
if((state_val_24799 === (7))){
var inst_24780 = (state_24798[(7)]);
var inst_24780__$1 = (state_24798[(2)]);
var inst_24781 = (inst_24780__$1 == null);
var inst_24782 = cljs.core.not.call(null,inst_24781);
var state_24798__$1 = (function (){var statearr_24800 = state_24798;
(statearr_24800[(7)] = inst_24780__$1);

return statearr_24800;
})();
if(inst_24782){
var statearr_24801_24826 = state_24798__$1;
(statearr_24801_24826[(1)] = (8));

} else {
var statearr_24802_24827 = state_24798__$1;
(statearr_24802_24827[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24799 === (1))){
var inst_24775 = (0);
var state_24798__$1 = (function (){var statearr_24803 = state_24798;
(statearr_24803[(8)] = inst_24775);

return statearr_24803;
})();
var statearr_24804_24828 = state_24798__$1;
(statearr_24804_24828[(2)] = null);

(statearr_24804_24828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24799 === (4))){
var state_24798__$1 = state_24798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24798__$1,(7),ch);
} else {
if((state_val_24799 === (6))){
var inst_24793 = (state_24798[(2)]);
var state_24798__$1 = state_24798;
var statearr_24805_24829 = state_24798__$1;
(statearr_24805_24829[(2)] = inst_24793);

(statearr_24805_24829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24799 === (3))){
var inst_24795 = (state_24798[(2)]);
var inst_24796 = cljs.core.async.close_BANG_.call(null,out);
var state_24798__$1 = (function (){var statearr_24806 = state_24798;
(statearr_24806[(9)] = inst_24795);

return statearr_24806;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24798__$1,inst_24796);
} else {
if((state_val_24799 === (2))){
var inst_24775 = (state_24798[(8)]);
var inst_24777 = (inst_24775 < n);
var state_24798__$1 = state_24798;
if(cljs.core.truth_(inst_24777)){
var statearr_24807_24830 = state_24798__$1;
(statearr_24807_24830[(1)] = (4));

} else {
var statearr_24808_24831 = state_24798__$1;
(statearr_24808_24831[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24799 === (11))){
var inst_24775 = (state_24798[(8)]);
var inst_24785 = (state_24798[(2)]);
var inst_24786 = (inst_24775 + (1));
var inst_24775__$1 = inst_24786;
var state_24798__$1 = (function (){var statearr_24809 = state_24798;
(statearr_24809[(10)] = inst_24785);

(statearr_24809[(8)] = inst_24775__$1);

return statearr_24809;
})();
var statearr_24810_24832 = state_24798__$1;
(statearr_24810_24832[(2)] = null);

(statearr_24810_24832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24799 === (9))){
var state_24798__$1 = state_24798;
var statearr_24811_24833 = state_24798__$1;
(statearr_24811_24833[(2)] = null);

(statearr_24811_24833[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24799 === (5))){
var state_24798__$1 = state_24798;
var statearr_24812_24834 = state_24798__$1;
(statearr_24812_24834[(2)] = null);

(statearr_24812_24834[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24799 === (10))){
var inst_24790 = (state_24798[(2)]);
var state_24798__$1 = state_24798;
var statearr_24813_24835 = state_24798__$1;
(statearr_24813_24835[(2)] = inst_24790);

(statearr_24813_24835[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24799 === (8))){
var inst_24780 = (state_24798[(7)]);
var state_24798__$1 = state_24798;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24798__$1,(11),out,inst_24780);
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
});})(c__22661__auto___24825,out))
;
return ((function (switch__22549__auto__,c__22661__auto___24825,out){
return (function() {
var cljs$core$async$state_machine__22550__auto__ = null;
var cljs$core$async$state_machine__22550__auto____0 = (function (){
var statearr_24817 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24817[(0)] = cljs$core$async$state_machine__22550__auto__);

(statearr_24817[(1)] = (1));

return statearr_24817;
});
var cljs$core$async$state_machine__22550__auto____1 = (function (state_24798){
while(true){
var ret_value__22551__auto__ = (function (){try{while(true){
var result__22552__auto__ = switch__22549__auto__.call(null,state_24798);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22552__auto__;
}
break;
}
}catch (e24818){if((e24818 instanceof Object)){
var ex__22553__auto__ = e24818;
var statearr_24819_24836 = state_24798;
(statearr_24819_24836[(5)] = ex__22553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24837 = state_24798;
state_24798 = G__24837;
continue;
} else {
return ret_value__22551__auto__;
}
break;
}
});
cljs$core$async$state_machine__22550__auto__ = function(state_24798){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22550__auto____1.call(this,state_24798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22550__auto____0;
cljs$core$async$state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22550__auto____1;
return cljs$core$async$state_machine__22550__auto__;
})()
;})(switch__22549__auto__,c__22661__auto___24825,out))
})();
var state__22663__auto__ = (function (){var statearr_24820 = f__22662__auto__.call(null);
(statearr_24820[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22661__auto___24825);

return statearr_24820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22663__auto__);
});})(c__22661__auto___24825,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24845 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24845 = (function (map_LT_,f,ch,meta24846){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24846 = meta24846;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24845.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24847,meta24846__$1){
var self__ = this;
var _24847__$1 = this;
return (new cljs.core.async.t_cljs$core$async24845(self__.map_LT_,self__.f,self__.ch,meta24846__$1));
});

cljs.core.async.t_cljs$core$async24845.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24847){
var self__ = this;
var _24847__$1 = this;
return self__.meta24846;
});

cljs.core.async.t_cljs$core$async24845.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24845.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24845.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24845.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24845.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24848 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24848 = (function (map_LT_,f,ch,meta24846,_,fn1,meta24849){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24846 = meta24846;
this._ = _;
this.fn1 = fn1;
this.meta24849 = meta24849;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24850,meta24849__$1){
var self__ = this;
var _24850__$1 = this;
return (new cljs.core.async.t_cljs$core$async24848(self__.map_LT_,self__.f,self__.ch,self__.meta24846,self__._,self__.fn1,meta24849__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24848.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24850){
var self__ = this;
var _24850__$1 = this;
return self__.meta24849;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24848.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24848.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24848.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24848.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24838_SHARP_){
return f1.call(null,(((p1__24838_SHARP_ == null))?null:self__.f.call(null,p1__24838_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24848.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24846","meta24846",-1604507259,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24845","cljs.core.async/t_cljs$core$async24845",827193549,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24849","meta24849",1425185333,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24848.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24848.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24848";

cljs.core.async.t_cljs$core$async24848.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17453__auto__,writer__17454__auto__,opt__17455__auto__){
return cljs.core._write.call(null,writer__17454__auto__,"cljs.core.async/t_cljs$core$async24848");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async24848 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24848(map_LT___$1,f__$1,ch__$1,meta24846__$1,___$2,fn1__$1,meta24849){
return (new cljs.core.async.t_cljs$core$async24848(map_LT___$1,f__$1,ch__$1,meta24846__$1,___$2,fn1__$1,meta24849));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24848(self__.map_LT_,self__.f,self__.ch,self__.meta24846,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async24845.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24845.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24845.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24846","meta24846",-1604507259,null)], null);
});

cljs.core.async.t_cljs$core$async24845.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24845.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24845";

cljs.core.async.t_cljs$core$async24845.cljs$lang$ctorPrWriter = (function (this__17453__auto__,writer__17454__auto__,opt__17455__auto__){
return cljs.core._write.call(null,writer__17454__auto__,"cljs.core.async/t_cljs$core$async24845");
});

cljs.core.async.__GT_t_cljs$core$async24845 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24845(map_LT___$1,f__$1,ch__$1,meta24846){
return (new cljs.core.async.t_cljs$core$async24845(map_LT___$1,f__$1,ch__$1,meta24846));
});

}

return (new cljs.core.async.t_cljs$core$async24845(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24854 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24854 = (function (map_GT_,f,ch,meta24855){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta24855 = meta24855;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24856,meta24855__$1){
var self__ = this;
var _24856__$1 = this;
return (new cljs.core.async.t_cljs$core$async24854(self__.map_GT_,self__.f,self__.ch,meta24855__$1));
});

cljs.core.async.t_cljs$core$async24854.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24856){
var self__ = this;
var _24856__$1 = this;
return self__.meta24855;
});

cljs.core.async.t_cljs$core$async24854.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24854.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24854.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24854.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24854.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24854.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24854.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24855","meta24855",-1782144990,null)], null);
});

cljs.core.async.t_cljs$core$async24854.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24854.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24854";

cljs.core.async.t_cljs$core$async24854.cljs$lang$ctorPrWriter = (function (this__17453__auto__,writer__17454__auto__,opt__17455__auto__){
return cljs.core._write.call(null,writer__17454__auto__,"cljs.core.async/t_cljs$core$async24854");
});

cljs.core.async.__GT_t_cljs$core$async24854 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24854(map_GT___$1,f__$1,ch__$1,meta24855){
return (new cljs.core.async.t_cljs$core$async24854(map_GT___$1,f__$1,ch__$1,meta24855));
});

}

return (new cljs.core.async.t_cljs$core$async24854(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24860 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24860 = (function (filter_GT_,p,ch,meta24861){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta24861 = meta24861;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24862,meta24861__$1){
var self__ = this;
var _24862__$1 = this;
return (new cljs.core.async.t_cljs$core$async24860(self__.filter_GT_,self__.p,self__.ch,meta24861__$1));
});

cljs.core.async.t_cljs$core$async24860.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24862){
var self__ = this;
var _24862__$1 = this;
return self__.meta24861;
});

cljs.core.async.t_cljs$core$async24860.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24860.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24860.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24860.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24860.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24860.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24860.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24860.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24861","meta24861",-1376652649,null)], null);
});

cljs.core.async.t_cljs$core$async24860.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24860.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24860";

cljs.core.async.t_cljs$core$async24860.cljs$lang$ctorPrWriter = (function (this__17453__auto__,writer__17454__auto__,opt__17455__auto__){
return cljs.core._write.call(null,writer__17454__auto__,"cljs.core.async/t_cljs$core$async24860");
});

cljs.core.async.__GT_t_cljs$core$async24860 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24860(filter_GT___$1,p__$1,ch__$1,meta24861){
return (new cljs.core.async.t_cljs$core$async24860(filter_GT___$1,p__$1,ch__$1,meta24861));
});

}

return (new cljs.core.async.t_cljs$core$async24860(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args24863 = [];
var len__17913__auto___24907 = arguments.length;
var i__17914__auto___24908 = (0);
while(true){
if((i__17914__auto___24908 < len__17913__auto___24907)){
args24863.push((arguments[i__17914__auto___24908]));

var G__24909 = (i__17914__auto___24908 + (1));
i__17914__auto___24908 = G__24909;
continue;
} else {
}
break;
}

var G__24865 = args24863.length;
switch (G__24865) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24863.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22661__auto___24911 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22661__auto___24911,out){
return (function (){
var f__22662__auto__ = (function (){var switch__22549__auto__ = ((function (c__22661__auto___24911,out){
return (function (state_24886){
var state_val_24887 = (state_24886[(1)]);
if((state_val_24887 === (7))){
var inst_24882 = (state_24886[(2)]);
var state_24886__$1 = state_24886;
var statearr_24888_24912 = state_24886__$1;
(statearr_24888_24912[(2)] = inst_24882);

(statearr_24888_24912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (1))){
var state_24886__$1 = state_24886;
var statearr_24889_24913 = state_24886__$1;
(statearr_24889_24913[(2)] = null);

(statearr_24889_24913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (4))){
var inst_24868 = (state_24886[(7)]);
var inst_24868__$1 = (state_24886[(2)]);
var inst_24869 = (inst_24868__$1 == null);
var state_24886__$1 = (function (){var statearr_24890 = state_24886;
(statearr_24890[(7)] = inst_24868__$1);

return statearr_24890;
})();
if(cljs.core.truth_(inst_24869)){
var statearr_24891_24914 = state_24886__$1;
(statearr_24891_24914[(1)] = (5));

} else {
var statearr_24892_24915 = state_24886__$1;
(statearr_24892_24915[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (6))){
var inst_24868 = (state_24886[(7)]);
var inst_24873 = p.call(null,inst_24868);
var state_24886__$1 = state_24886;
if(cljs.core.truth_(inst_24873)){
var statearr_24893_24916 = state_24886__$1;
(statearr_24893_24916[(1)] = (8));

} else {
var statearr_24894_24917 = state_24886__$1;
(statearr_24894_24917[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (3))){
var inst_24884 = (state_24886[(2)]);
var state_24886__$1 = state_24886;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24886__$1,inst_24884);
} else {
if((state_val_24887 === (2))){
var state_24886__$1 = state_24886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24886__$1,(4),ch);
} else {
if((state_val_24887 === (11))){
var inst_24876 = (state_24886[(2)]);
var state_24886__$1 = state_24886;
var statearr_24895_24918 = state_24886__$1;
(statearr_24895_24918[(2)] = inst_24876);

(statearr_24895_24918[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (9))){
var state_24886__$1 = state_24886;
var statearr_24896_24919 = state_24886__$1;
(statearr_24896_24919[(2)] = null);

(statearr_24896_24919[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (5))){
var inst_24871 = cljs.core.async.close_BANG_.call(null,out);
var state_24886__$1 = state_24886;
var statearr_24897_24920 = state_24886__$1;
(statearr_24897_24920[(2)] = inst_24871);

(statearr_24897_24920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (10))){
var inst_24879 = (state_24886[(2)]);
var state_24886__$1 = (function (){var statearr_24898 = state_24886;
(statearr_24898[(8)] = inst_24879);

return statearr_24898;
})();
var statearr_24899_24921 = state_24886__$1;
(statearr_24899_24921[(2)] = null);

(statearr_24899_24921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24887 === (8))){
var inst_24868 = (state_24886[(7)]);
var state_24886__$1 = state_24886;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24886__$1,(11),out,inst_24868);
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
});})(c__22661__auto___24911,out))
;
return ((function (switch__22549__auto__,c__22661__auto___24911,out){
return (function() {
var cljs$core$async$state_machine__22550__auto__ = null;
var cljs$core$async$state_machine__22550__auto____0 = (function (){
var statearr_24903 = [null,null,null,null,null,null,null,null,null];
(statearr_24903[(0)] = cljs$core$async$state_machine__22550__auto__);

(statearr_24903[(1)] = (1));

return statearr_24903;
});
var cljs$core$async$state_machine__22550__auto____1 = (function (state_24886){
while(true){
var ret_value__22551__auto__ = (function (){try{while(true){
var result__22552__auto__ = switch__22549__auto__.call(null,state_24886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22552__auto__;
}
break;
}
}catch (e24904){if((e24904 instanceof Object)){
var ex__22553__auto__ = e24904;
var statearr_24905_24922 = state_24886;
(statearr_24905_24922[(5)] = ex__22553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24904;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24923 = state_24886;
state_24886 = G__24923;
continue;
} else {
return ret_value__22551__auto__;
}
break;
}
});
cljs$core$async$state_machine__22550__auto__ = function(state_24886){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22550__auto____1.call(this,state_24886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22550__auto____0;
cljs$core$async$state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22550__auto____1;
return cljs$core$async$state_machine__22550__auto__;
})()
;})(switch__22549__auto__,c__22661__auto___24911,out))
})();
var state__22663__auto__ = (function (){var statearr_24906 = f__22662__auto__.call(null);
(statearr_24906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22661__auto___24911);

return statearr_24906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22663__auto__);
});})(c__22661__auto___24911,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args24924 = [];
var len__17913__auto___24927 = arguments.length;
var i__17914__auto___24928 = (0);
while(true){
if((i__17914__auto___24928 < len__17913__auto___24927)){
args24924.push((arguments[i__17914__auto___24928]));

var G__24929 = (i__17914__auto___24928 + (1));
i__17914__auto___24928 = G__24929;
continue;
} else {
}
break;
}

var G__24926 = args24924.length;
switch (G__24926) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24924.length)].join('')));

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
var c__22661__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22661__auto__){
return (function (){
var f__22662__auto__ = (function (){var switch__22549__auto__ = ((function (c__22661__auto__){
return (function (state_25096){
var state_val_25097 = (state_25096[(1)]);
if((state_val_25097 === (7))){
var inst_25092 = (state_25096[(2)]);
var state_25096__$1 = state_25096;
var statearr_25098_25139 = state_25096__$1;
(statearr_25098_25139[(2)] = inst_25092);

(statearr_25098_25139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25097 === (20))){
var inst_25062 = (state_25096[(7)]);
var inst_25073 = (state_25096[(2)]);
var inst_25074 = cljs.core.next.call(null,inst_25062);
var inst_25048 = inst_25074;
var inst_25049 = null;
var inst_25050 = (0);
var inst_25051 = (0);
var state_25096__$1 = (function (){var statearr_25099 = state_25096;
(statearr_25099[(8)] = inst_25048);

(statearr_25099[(9)] = inst_25049);

(statearr_25099[(10)] = inst_25051);

(statearr_25099[(11)] = inst_25073);

(statearr_25099[(12)] = inst_25050);

return statearr_25099;
})();
var statearr_25100_25140 = state_25096__$1;
(statearr_25100_25140[(2)] = null);

(statearr_25100_25140[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25097 === (1))){
var state_25096__$1 = state_25096;
var statearr_25101_25141 = state_25096__$1;
(statearr_25101_25141[(2)] = null);

(statearr_25101_25141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25097 === (4))){
var inst_25037 = (state_25096[(13)]);
var inst_25037__$1 = (state_25096[(2)]);
var inst_25038 = (inst_25037__$1 == null);
var state_25096__$1 = (function (){var statearr_25102 = state_25096;
(statearr_25102[(13)] = inst_25037__$1);

return statearr_25102;
})();
if(cljs.core.truth_(inst_25038)){
var statearr_25103_25142 = state_25096__$1;
(statearr_25103_25142[(1)] = (5));

} else {
var statearr_25104_25143 = state_25096__$1;
(statearr_25104_25143[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25097 === (15))){
var state_25096__$1 = state_25096;
var statearr_25108_25144 = state_25096__$1;
(statearr_25108_25144[(2)] = null);

(statearr_25108_25144[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25097 === (21))){
var state_25096__$1 = state_25096;
var statearr_25109_25145 = state_25096__$1;
(statearr_25109_25145[(2)] = null);

(statearr_25109_25145[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25097 === (13))){
var inst_25048 = (state_25096[(8)]);
var inst_25049 = (state_25096[(9)]);
var inst_25051 = (state_25096[(10)]);
var inst_25050 = (state_25096[(12)]);
var inst_25058 = (state_25096[(2)]);
var inst_25059 = (inst_25051 + (1));
var tmp25105 = inst_25048;
var tmp25106 = inst_25049;
var tmp25107 = inst_25050;
var inst_25048__$1 = tmp25105;
var inst_25049__$1 = tmp25106;
var inst_25050__$1 = tmp25107;
var inst_25051__$1 = inst_25059;
var state_25096__$1 = (function (){var statearr_25110 = state_25096;
(statearr_25110[(8)] = inst_25048__$1);

(statearr_25110[(9)] = inst_25049__$1);

(statearr_25110[(10)] = inst_25051__$1);

(statearr_25110[(12)] = inst_25050__$1);

(statearr_25110[(14)] = inst_25058);

return statearr_25110;
})();
var statearr_25111_25146 = state_25096__$1;
(statearr_25111_25146[(2)] = null);

(statearr_25111_25146[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25097 === (22))){
var state_25096__$1 = state_25096;
var statearr_25112_25147 = state_25096__$1;
(statearr_25112_25147[(2)] = null);

(statearr_25112_25147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25097 === (6))){
var inst_25037 = (state_25096[(13)]);
var inst_25046 = f.call(null,inst_25037);
var inst_25047 = cljs.core.seq.call(null,inst_25046);
var inst_25048 = inst_25047;
var inst_25049 = null;
var inst_25050 = (0);
var inst_25051 = (0);
var state_25096__$1 = (function (){var statearr_25113 = state_25096;
(statearr_25113[(8)] = inst_25048);

(statearr_25113[(9)] = inst_25049);

(statearr_25113[(10)] = inst_25051);

(statearr_25113[(12)] = inst_25050);

return statearr_25113;
})();
var statearr_25114_25148 = state_25096__$1;
(statearr_25114_25148[(2)] = null);

(statearr_25114_25148[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25097 === (17))){
var inst_25062 = (state_25096[(7)]);
var inst_25066 = cljs.core.chunk_first.call(null,inst_25062);
var inst_25067 = cljs.core.chunk_rest.call(null,inst_25062);
var inst_25068 = cljs.core.count.call(null,inst_25066);
var inst_25048 = inst_25067;
var inst_25049 = inst_25066;
var inst_25050 = inst_25068;
var inst_25051 = (0);
var state_25096__$1 = (function (){var statearr_25115 = state_25096;
(statearr_25115[(8)] = inst_25048);

(statearr_25115[(9)] = inst_25049);

(statearr_25115[(10)] = inst_25051);

(statearr_25115[(12)] = inst_25050);

return statearr_25115;
})();
var statearr_25116_25149 = state_25096__$1;
(statearr_25116_25149[(2)] = null);

(statearr_25116_25149[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25097 === (3))){
var inst_25094 = (state_25096[(2)]);
var state_25096__$1 = state_25096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25096__$1,inst_25094);
} else {
if((state_val_25097 === (12))){
var inst_25082 = (state_25096[(2)]);
var state_25096__$1 = state_25096;
var statearr_25117_25150 = state_25096__$1;
(statearr_25117_25150[(2)] = inst_25082);

(statearr_25117_25150[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25097 === (2))){
var state_25096__$1 = state_25096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25096__$1,(4),in$);
} else {
if((state_val_25097 === (23))){
var inst_25090 = (state_25096[(2)]);
var state_25096__$1 = state_25096;
var statearr_25118_25151 = state_25096__$1;
(statearr_25118_25151[(2)] = inst_25090);

(statearr_25118_25151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25097 === (19))){
var inst_25077 = (state_25096[(2)]);
var state_25096__$1 = state_25096;
var statearr_25119_25152 = state_25096__$1;
(statearr_25119_25152[(2)] = inst_25077);

(statearr_25119_25152[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25097 === (11))){
var inst_25048 = (state_25096[(8)]);
var inst_25062 = (state_25096[(7)]);
var inst_25062__$1 = cljs.core.seq.call(null,inst_25048);
var state_25096__$1 = (function (){var statearr_25120 = state_25096;
(statearr_25120[(7)] = inst_25062__$1);

return statearr_25120;
})();
if(inst_25062__$1){
var statearr_25121_25153 = state_25096__$1;
(statearr_25121_25153[(1)] = (14));

} else {
var statearr_25122_25154 = state_25096__$1;
(statearr_25122_25154[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25097 === (9))){
var inst_25084 = (state_25096[(2)]);
var inst_25085 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25096__$1 = (function (){var statearr_25123 = state_25096;
(statearr_25123[(15)] = inst_25084);

return statearr_25123;
})();
if(cljs.core.truth_(inst_25085)){
var statearr_25124_25155 = state_25096__$1;
(statearr_25124_25155[(1)] = (21));

} else {
var statearr_25125_25156 = state_25096__$1;
(statearr_25125_25156[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25097 === (5))){
var inst_25040 = cljs.core.async.close_BANG_.call(null,out);
var state_25096__$1 = state_25096;
var statearr_25126_25157 = state_25096__$1;
(statearr_25126_25157[(2)] = inst_25040);

(statearr_25126_25157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25097 === (14))){
var inst_25062 = (state_25096[(7)]);
var inst_25064 = cljs.core.chunked_seq_QMARK_.call(null,inst_25062);
var state_25096__$1 = state_25096;
if(inst_25064){
var statearr_25127_25158 = state_25096__$1;
(statearr_25127_25158[(1)] = (17));

} else {
var statearr_25128_25159 = state_25096__$1;
(statearr_25128_25159[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25097 === (16))){
var inst_25080 = (state_25096[(2)]);
var state_25096__$1 = state_25096;
var statearr_25129_25160 = state_25096__$1;
(statearr_25129_25160[(2)] = inst_25080);

(statearr_25129_25160[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25097 === (10))){
var inst_25049 = (state_25096[(9)]);
var inst_25051 = (state_25096[(10)]);
var inst_25056 = cljs.core._nth.call(null,inst_25049,inst_25051);
var state_25096__$1 = state_25096;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25096__$1,(13),out,inst_25056);
} else {
if((state_val_25097 === (18))){
var inst_25062 = (state_25096[(7)]);
var inst_25071 = cljs.core.first.call(null,inst_25062);
var state_25096__$1 = state_25096;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25096__$1,(20),out,inst_25071);
} else {
if((state_val_25097 === (8))){
var inst_25051 = (state_25096[(10)]);
var inst_25050 = (state_25096[(12)]);
var inst_25053 = (inst_25051 < inst_25050);
var inst_25054 = inst_25053;
var state_25096__$1 = state_25096;
if(cljs.core.truth_(inst_25054)){
var statearr_25130_25161 = state_25096__$1;
(statearr_25130_25161[(1)] = (10));

} else {
var statearr_25131_25162 = state_25096__$1;
(statearr_25131_25162[(1)] = (11));

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
});})(c__22661__auto__))
;
return ((function (switch__22549__auto__,c__22661__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22550__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22550__auto____0 = (function (){
var statearr_25135 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25135[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22550__auto__);

(statearr_25135[(1)] = (1));

return statearr_25135;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22550__auto____1 = (function (state_25096){
while(true){
var ret_value__22551__auto__ = (function (){try{while(true){
var result__22552__auto__ = switch__22549__auto__.call(null,state_25096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22552__auto__;
}
break;
}
}catch (e25136){if((e25136 instanceof Object)){
var ex__22553__auto__ = e25136;
var statearr_25137_25163 = state_25096;
(statearr_25137_25163[(5)] = ex__22553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25164 = state_25096;
state_25096 = G__25164;
continue;
} else {
return ret_value__22551__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22550__auto__ = function(state_25096){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22550__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22550__auto____1.call(this,state_25096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22550__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22550__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22550__auto__;
})()
;})(switch__22549__auto__,c__22661__auto__))
})();
var state__22663__auto__ = (function (){var statearr_25138 = f__22662__auto__.call(null);
(statearr_25138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22661__auto__);

return statearr_25138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22663__auto__);
});})(c__22661__auto__))
);

return c__22661__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args25165 = [];
var len__17913__auto___25168 = arguments.length;
var i__17914__auto___25169 = (0);
while(true){
if((i__17914__auto___25169 < len__17913__auto___25168)){
args25165.push((arguments[i__17914__auto___25169]));

var G__25170 = (i__17914__auto___25169 + (1));
i__17914__auto___25169 = G__25170;
continue;
} else {
}
break;
}

var G__25167 = args25165.length;
switch (G__25167) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25165.length)].join('')));

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
var args25172 = [];
var len__17913__auto___25175 = arguments.length;
var i__17914__auto___25176 = (0);
while(true){
if((i__17914__auto___25176 < len__17913__auto___25175)){
args25172.push((arguments[i__17914__auto___25176]));

var G__25177 = (i__17914__auto___25176 + (1));
i__17914__auto___25176 = G__25177;
continue;
} else {
}
break;
}

var G__25174 = args25172.length;
switch (G__25174) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25172.length)].join('')));

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
var args25179 = [];
var len__17913__auto___25230 = arguments.length;
var i__17914__auto___25231 = (0);
while(true){
if((i__17914__auto___25231 < len__17913__auto___25230)){
args25179.push((arguments[i__17914__auto___25231]));

var G__25232 = (i__17914__auto___25231 + (1));
i__17914__auto___25231 = G__25232;
continue;
} else {
}
break;
}

var G__25181 = args25179.length;
switch (G__25181) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25179.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22661__auto___25234 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22661__auto___25234,out){
return (function (){
var f__22662__auto__ = (function (){var switch__22549__auto__ = ((function (c__22661__auto___25234,out){
return (function (state_25205){
var state_val_25206 = (state_25205[(1)]);
if((state_val_25206 === (7))){
var inst_25200 = (state_25205[(2)]);
var state_25205__$1 = state_25205;
var statearr_25207_25235 = state_25205__$1;
(statearr_25207_25235[(2)] = inst_25200);

(statearr_25207_25235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (1))){
var inst_25182 = null;
var state_25205__$1 = (function (){var statearr_25208 = state_25205;
(statearr_25208[(7)] = inst_25182);

return statearr_25208;
})();
var statearr_25209_25236 = state_25205__$1;
(statearr_25209_25236[(2)] = null);

(statearr_25209_25236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (4))){
var inst_25185 = (state_25205[(8)]);
var inst_25185__$1 = (state_25205[(2)]);
var inst_25186 = (inst_25185__$1 == null);
var inst_25187 = cljs.core.not.call(null,inst_25186);
var state_25205__$1 = (function (){var statearr_25210 = state_25205;
(statearr_25210[(8)] = inst_25185__$1);

return statearr_25210;
})();
if(inst_25187){
var statearr_25211_25237 = state_25205__$1;
(statearr_25211_25237[(1)] = (5));

} else {
var statearr_25212_25238 = state_25205__$1;
(statearr_25212_25238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (6))){
var state_25205__$1 = state_25205;
var statearr_25213_25239 = state_25205__$1;
(statearr_25213_25239[(2)] = null);

(statearr_25213_25239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (3))){
var inst_25202 = (state_25205[(2)]);
var inst_25203 = cljs.core.async.close_BANG_.call(null,out);
var state_25205__$1 = (function (){var statearr_25214 = state_25205;
(statearr_25214[(9)] = inst_25202);

return statearr_25214;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25205__$1,inst_25203);
} else {
if((state_val_25206 === (2))){
var state_25205__$1 = state_25205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25205__$1,(4),ch);
} else {
if((state_val_25206 === (11))){
var inst_25185 = (state_25205[(8)]);
var inst_25194 = (state_25205[(2)]);
var inst_25182 = inst_25185;
var state_25205__$1 = (function (){var statearr_25215 = state_25205;
(statearr_25215[(7)] = inst_25182);

(statearr_25215[(10)] = inst_25194);

return statearr_25215;
})();
var statearr_25216_25240 = state_25205__$1;
(statearr_25216_25240[(2)] = null);

(statearr_25216_25240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (9))){
var inst_25185 = (state_25205[(8)]);
var state_25205__$1 = state_25205;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25205__$1,(11),out,inst_25185);
} else {
if((state_val_25206 === (5))){
var inst_25182 = (state_25205[(7)]);
var inst_25185 = (state_25205[(8)]);
var inst_25189 = cljs.core._EQ_.call(null,inst_25185,inst_25182);
var state_25205__$1 = state_25205;
if(inst_25189){
var statearr_25218_25241 = state_25205__$1;
(statearr_25218_25241[(1)] = (8));

} else {
var statearr_25219_25242 = state_25205__$1;
(statearr_25219_25242[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (10))){
var inst_25197 = (state_25205[(2)]);
var state_25205__$1 = state_25205;
var statearr_25220_25243 = state_25205__$1;
(statearr_25220_25243[(2)] = inst_25197);

(statearr_25220_25243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25206 === (8))){
var inst_25182 = (state_25205[(7)]);
var tmp25217 = inst_25182;
var inst_25182__$1 = tmp25217;
var state_25205__$1 = (function (){var statearr_25221 = state_25205;
(statearr_25221[(7)] = inst_25182__$1);

return statearr_25221;
})();
var statearr_25222_25244 = state_25205__$1;
(statearr_25222_25244[(2)] = null);

(statearr_25222_25244[(1)] = (2));


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
});})(c__22661__auto___25234,out))
;
return ((function (switch__22549__auto__,c__22661__auto___25234,out){
return (function() {
var cljs$core$async$state_machine__22550__auto__ = null;
var cljs$core$async$state_machine__22550__auto____0 = (function (){
var statearr_25226 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25226[(0)] = cljs$core$async$state_machine__22550__auto__);

(statearr_25226[(1)] = (1));

return statearr_25226;
});
var cljs$core$async$state_machine__22550__auto____1 = (function (state_25205){
while(true){
var ret_value__22551__auto__ = (function (){try{while(true){
var result__22552__auto__ = switch__22549__auto__.call(null,state_25205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22552__auto__;
}
break;
}
}catch (e25227){if((e25227 instanceof Object)){
var ex__22553__auto__ = e25227;
var statearr_25228_25245 = state_25205;
(statearr_25228_25245[(5)] = ex__22553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25246 = state_25205;
state_25205 = G__25246;
continue;
} else {
return ret_value__22551__auto__;
}
break;
}
});
cljs$core$async$state_machine__22550__auto__ = function(state_25205){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22550__auto____1.call(this,state_25205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22550__auto____0;
cljs$core$async$state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22550__auto____1;
return cljs$core$async$state_machine__22550__auto__;
})()
;})(switch__22549__auto__,c__22661__auto___25234,out))
})();
var state__22663__auto__ = (function (){var statearr_25229 = f__22662__auto__.call(null);
(statearr_25229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22661__auto___25234);

return statearr_25229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22663__auto__);
});})(c__22661__auto___25234,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args25247 = [];
var len__17913__auto___25317 = arguments.length;
var i__17914__auto___25318 = (0);
while(true){
if((i__17914__auto___25318 < len__17913__auto___25317)){
args25247.push((arguments[i__17914__auto___25318]));

var G__25319 = (i__17914__auto___25318 + (1));
i__17914__auto___25318 = G__25319;
continue;
} else {
}
break;
}

var G__25249 = args25247.length;
switch (G__25249) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25247.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22661__auto___25321 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22661__auto___25321,out){
return (function (){
var f__22662__auto__ = (function (){var switch__22549__auto__ = ((function (c__22661__auto___25321,out){
return (function (state_25287){
var state_val_25288 = (state_25287[(1)]);
if((state_val_25288 === (7))){
var inst_25283 = (state_25287[(2)]);
var state_25287__$1 = state_25287;
var statearr_25289_25322 = state_25287__$1;
(statearr_25289_25322[(2)] = inst_25283);

(statearr_25289_25322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25288 === (1))){
var inst_25250 = (new Array(n));
var inst_25251 = inst_25250;
var inst_25252 = (0);
var state_25287__$1 = (function (){var statearr_25290 = state_25287;
(statearr_25290[(7)] = inst_25252);

(statearr_25290[(8)] = inst_25251);

return statearr_25290;
})();
var statearr_25291_25323 = state_25287__$1;
(statearr_25291_25323[(2)] = null);

(statearr_25291_25323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25288 === (4))){
var inst_25255 = (state_25287[(9)]);
var inst_25255__$1 = (state_25287[(2)]);
var inst_25256 = (inst_25255__$1 == null);
var inst_25257 = cljs.core.not.call(null,inst_25256);
var state_25287__$1 = (function (){var statearr_25292 = state_25287;
(statearr_25292[(9)] = inst_25255__$1);

return statearr_25292;
})();
if(inst_25257){
var statearr_25293_25324 = state_25287__$1;
(statearr_25293_25324[(1)] = (5));

} else {
var statearr_25294_25325 = state_25287__$1;
(statearr_25294_25325[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25288 === (15))){
var inst_25277 = (state_25287[(2)]);
var state_25287__$1 = state_25287;
var statearr_25295_25326 = state_25287__$1;
(statearr_25295_25326[(2)] = inst_25277);

(statearr_25295_25326[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25288 === (13))){
var state_25287__$1 = state_25287;
var statearr_25296_25327 = state_25287__$1;
(statearr_25296_25327[(2)] = null);

(statearr_25296_25327[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25288 === (6))){
var inst_25252 = (state_25287[(7)]);
var inst_25273 = (inst_25252 > (0));
var state_25287__$1 = state_25287;
if(cljs.core.truth_(inst_25273)){
var statearr_25297_25328 = state_25287__$1;
(statearr_25297_25328[(1)] = (12));

} else {
var statearr_25298_25329 = state_25287__$1;
(statearr_25298_25329[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25288 === (3))){
var inst_25285 = (state_25287[(2)]);
var state_25287__$1 = state_25287;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25287__$1,inst_25285);
} else {
if((state_val_25288 === (12))){
var inst_25251 = (state_25287[(8)]);
var inst_25275 = cljs.core.vec.call(null,inst_25251);
var state_25287__$1 = state_25287;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25287__$1,(15),out,inst_25275);
} else {
if((state_val_25288 === (2))){
var state_25287__$1 = state_25287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25287__$1,(4),ch);
} else {
if((state_val_25288 === (11))){
var inst_25267 = (state_25287[(2)]);
var inst_25268 = (new Array(n));
var inst_25251 = inst_25268;
var inst_25252 = (0);
var state_25287__$1 = (function (){var statearr_25299 = state_25287;
(statearr_25299[(10)] = inst_25267);

(statearr_25299[(7)] = inst_25252);

(statearr_25299[(8)] = inst_25251);

return statearr_25299;
})();
var statearr_25300_25330 = state_25287__$1;
(statearr_25300_25330[(2)] = null);

(statearr_25300_25330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25288 === (9))){
var inst_25251 = (state_25287[(8)]);
var inst_25265 = cljs.core.vec.call(null,inst_25251);
var state_25287__$1 = state_25287;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25287__$1,(11),out,inst_25265);
} else {
if((state_val_25288 === (5))){
var inst_25255 = (state_25287[(9)]);
var inst_25260 = (state_25287[(11)]);
var inst_25252 = (state_25287[(7)]);
var inst_25251 = (state_25287[(8)]);
var inst_25259 = (inst_25251[inst_25252] = inst_25255);
var inst_25260__$1 = (inst_25252 + (1));
var inst_25261 = (inst_25260__$1 < n);
var state_25287__$1 = (function (){var statearr_25301 = state_25287;
(statearr_25301[(12)] = inst_25259);

(statearr_25301[(11)] = inst_25260__$1);

return statearr_25301;
})();
if(cljs.core.truth_(inst_25261)){
var statearr_25302_25331 = state_25287__$1;
(statearr_25302_25331[(1)] = (8));

} else {
var statearr_25303_25332 = state_25287__$1;
(statearr_25303_25332[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25288 === (14))){
var inst_25280 = (state_25287[(2)]);
var inst_25281 = cljs.core.async.close_BANG_.call(null,out);
var state_25287__$1 = (function (){var statearr_25305 = state_25287;
(statearr_25305[(13)] = inst_25280);

return statearr_25305;
})();
var statearr_25306_25333 = state_25287__$1;
(statearr_25306_25333[(2)] = inst_25281);

(statearr_25306_25333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25288 === (10))){
var inst_25271 = (state_25287[(2)]);
var state_25287__$1 = state_25287;
var statearr_25307_25334 = state_25287__$1;
(statearr_25307_25334[(2)] = inst_25271);

(statearr_25307_25334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25288 === (8))){
var inst_25260 = (state_25287[(11)]);
var inst_25251 = (state_25287[(8)]);
var tmp25304 = inst_25251;
var inst_25251__$1 = tmp25304;
var inst_25252 = inst_25260;
var state_25287__$1 = (function (){var statearr_25308 = state_25287;
(statearr_25308[(7)] = inst_25252);

(statearr_25308[(8)] = inst_25251__$1);

return statearr_25308;
})();
var statearr_25309_25335 = state_25287__$1;
(statearr_25309_25335[(2)] = null);

(statearr_25309_25335[(1)] = (2));


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
});})(c__22661__auto___25321,out))
;
return ((function (switch__22549__auto__,c__22661__auto___25321,out){
return (function() {
var cljs$core$async$state_machine__22550__auto__ = null;
var cljs$core$async$state_machine__22550__auto____0 = (function (){
var statearr_25313 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25313[(0)] = cljs$core$async$state_machine__22550__auto__);

(statearr_25313[(1)] = (1));

return statearr_25313;
});
var cljs$core$async$state_machine__22550__auto____1 = (function (state_25287){
while(true){
var ret_value__22551__auto__ = (function (){try{while(true){
var result__22552__auto__ = switch__22549__auto__.call(null,state_25287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22552__auto__;
}
break;
}
}catch (e25314){if((e25314 instanceof Object)){
var ex__22553__auto__ = e25314;
var statearr_25315_25336 = state_25287;
(statearr_25315_25336[(5)] = ex__22553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25314;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25337 = state_25287;
state_25287 = G__25337;
continue;
} else {
return ret_value__22551__auto__;
}
break;
}
});
cljs$core$async$state_machine__22550__auto__ = function(state_25287){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22550__auto____1.call(this,state_25287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22550__auto____0;
cljs$core$async$state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22550__auto____1;
return cljs$core$async$state_machine__22550__auto__;
})()
;})(switch__22549__auto__,c__22661__auto___25321,out))
})();
var state__22663__auto__ = (function (){var statearr_25316 = f__22662__auto__.call(null);
(statearr_25316[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22661__auto___25321);

return statearr_25316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22663__auto__);
});})(c__22661__auto___25321,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args25338 = [];
var len__17913__auto___25412 = arguments.length;
var i__17914__auto___25413 = (0);
while(true){
if((i__17914__auto___25413 < len__17913__auto___25412)){
args25338.push((arguments[i__17914__auto___25413]));

var G__25414 = (i__17914__auto___25413 + (1));
i__17914__auto___25413 = G__25414;
continue;
} else {
}
break;
}

var G__25340 = args25338.length;
switch (G__25340) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25338.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22661__auto___25416 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22661__auto___25416,out){
return (function (){
var f__22662__auto__ = (function (){var switch__22549__auto__ = ((function (c__22661__auto___25416,out){
return (function (state_25382){
var state_val_25383 = (state_25382[(1)]);
if((state_val_25383 === (7))){
var inst_25378 = (state_25382[(2)]);
var state_25382__$1 = state_25382;
var statearr_25384_25417 = state_25382__$1;
(statearr_25384_25417[(2)] = inst_25378);

(statearr_25384_25417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (1))){
var inst_25341 = [];
var inst_25342 = inst_25341;
var inst_25343 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25382__$1 = (function (){var statearr_25385 = state_25382;
(statearr_25385[(7)] = inst_25343);

(statearr_25385[(8)] = inst_25342);

return statearr_25385;
})();
var statearr_25386_25418 = state_25382__$1;
(statearr_25386_25418[(2)] = null);

(statearr_25386_25418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (4))){
var inst_25346 = (state_25382[(9)]);
var inst_25346__$1 = (state_25382[(2)]);
var inst_25347 = (inst_25346__$1 == null);
var inst_25348 = cljs.core.not.call(null,inst_25347);
var state_25382__$1 = (function (){var statearr_25387 = state_25382;
(statearr_25387[(9)] = inst_25346__$1);

return statearr_25387;
})();
if(inst_25348){
var statearr_25388_25419 = state_25382__$1;
(statearr_25388_25419[(1)] = (5));

} else {
var statearr_25389_25420 = state_25382__$1;
(statearr_25389_25420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (15))){
var inst_25372 = (state_25382[(2)]);
var state_25382__$1 = state_25382;
var statearr_25390_25421 = state_25382__$1;
(statearr_25390_25421[(2)] = inst_25372);

(statearr_25390_25421[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (13))){
var state_25382__$1 = state_25382;
var statearr_25391_25422 = state_25382__$1;
(statearr_25391_25422[(2)] = null);

(statearr_25391_25422[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (6))){
var inst_25342 = (state_25382[(8)]);
var inst_25367 = inst_25342.length;
var inst_25368 = (inst_25367 > (0));
var state_25382__$1 = state_25382;
if(cljs.core.truth_(inst_25368)){
var statearr_25392_25423 = state_25382__$1;
(statearr_25392_25423[(1)] = (12));

} else {
var statearr_25393_25424 = state_25382__$1;
(statearr_25393_25424[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (3))){
var inst_25380 = (state_25382[(2)]);
var state_25382__$1 = state_25382;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25382__$1,inst_25380);
} else {
if((state_val_25383 === (12))){
var inst_25342 = (state_25382[(8)]);
var inst_25370 = cljs.core.vec.call(null,inst_25342);
var state_25382__$1 = state_25382;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25382__$1,(15),out,inst_25370);
} else {
if((state_val_25383 === (2))){
var state_25382__$1 = state_25382;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25382__$1,(4),ch);
} else {
if((state_val_25383 === (11))){
var inst_25350 = (state_25382[(10)]);
var inst_25346 = (state_25382[(9)]);
var inst_25360 = (state_25382[(2)]);
var inst_25361 = [];
var inst_25362 = inst_25361.push(inst_25346);
var inst_25342 = inst_25361;
var inst_25343 = inst_25350;
var state_25382__$1 = (function (){var statearr_25394 = state_25382;
(statearr_25394[(7)] = inst_25343);

(statearr_25394[(11)] = inst_25362);

(statearr_25394[(12)] = inst_25360);

(statearr_25394[(8)] = inst_25342);

return statearr_25394;
})();
var statearr_25395_25425 = state_25382__$1;
(statearr_25395_25425[(2)] = null);

(statearr_25395_25425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (9))){
var inst_25342 = (state_25382[(8)]);
var inst_25358 = cljs.core.vec.call(null,inst_25342);
var state_25382__$1 = state_25382;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25382__$1,(11),out,inst_25358);
} else {
if((state_val_25383 === (5))){
var inst_25343 = (state_25382[(7)]);
var inst_25350 = (state_25382[(10)]);
var inst_25346 = (state_25382[(9)]);
var inst_25350__$1 = f.call(null,inst_25346);
var inst_25351 = cljs.core._EQ_.call(null,inst_25350__$1,inst_25343);
var inst_25352 = cljs.core.keyword_identical_QMARK_.call(null,inst_25343,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25353 = (inst_25351) || (inst_25352);
var state_25382__$1 = (function (){var statearr_25396 = state_25382;
(statearr_25396[(10)] = inst_25350__$1);

return statearr_25396;
})();
if(cljs.core.truth_(inst_25353)){
var statearr_25397_25426 = state_25382__$1;
(statearr_25397_25426[(1)] = (8));

} else {
var statearr_25398_25427 = state_25382__$1;
(statearr_25398_25427[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (14))){
var inst_25375 = (state_25382[(2)]);
var inst_25376 = cljs.core.async.close_BANG_.call(null,out);
var state_25382__$1 = (function (){var statearr_25400 = state_25382;
(statearr_25400[(13)] = inst_25375);

return statearr_25400;
})();
var statearr_25401_25428 = state_25382__$1;
(statearr_25401_25428[(2)] = inst_25376);

(statearr_25401_25428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (10))){
var inst_25365 = (state_25382[(2)]);
var state_25382__$1 = state_25382;
var statearr_25402_25429 = state_25382__$1;
(statearr_25402_25429[(2)] = inst_25365);

(statearr_25402_25429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25383 === (8))){
var inst_25350 = (state_25382[(10)]);
var inst_25342 = (state_25382[(8)]);
var inst_25346 = (state_25382[(9)]);
var inst_25355 = inst_25342.push(inst_25346);
var tmp25399 = inst_25342;
var inst_25342__$1 = tmp25399;
var inst_25343 = inst_25350;
var state_25382__$1 = (function (){var statearr_25403 = state_25382;
(statearr_25403[(7)] = inst_25343);

(statearr_25403[(14)] = inst_25355);

(statearr_25403[(8)] = inst_25342__$1);

return statearr_25403;
})();
var statearr_25404_25430 = state_25382__$1;
(statearr_25404_25430[(2)] = null);

(statearr_25404_25430[(1)] = (2));


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
});})(c__22661__auto___25416,out))
;
return ((function (switch__22549__auto__,c__22661__auto___25416,out){
return (function() {
var cljs$core$async$state_machine__22550__auto__ = null;
var cljs$core$async$state_machine__22550__auto____0 = (function (){
var statearr_25408 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25408[(0)] = cljs$core$async$state_machine__22550__auto__);

(statearr_25408[(1)] = (1));

return statearr_25408;
});
var cljs$core$async$state_machine__22550__auto____1 = (function (state_25382){
while(true){
var ret_value__22551__auto__ = (function (){try{while(true){
var result__22552__auto__ = switch__22549__auto__.call(null,state_25382);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22552__auto__;
}
break;
}
}catch (e25409){if((e25409 instanceof Object)){
var ex__22553__auto__ = e25409;
var statearr_25410_25431 = state_25382;
(statearr_25410_25431[(5)] = ex__22553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25432 = state_25382;
state_25382 = G__25432;
continue;
} else {
return ret_value__22551__auto__;
}
break;
}
});
cljs$core$async$state_machine__22550__auto__ = function(state_25382){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22550__auto____1.call(this,state_25382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22550__auto____0;
cljs$core$async$state_machine__22550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22550__auto____1;
return cljs$core$async$state_machine__22550__auto__;
})()
;})(switch__22549__auto__,c__22661__auto___25416,out))
})();
var state__22663__auto__ = (function (){var statearr_25411 = f__22662__auto__.call(null);
(statearr_25411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22661__auto___25416);

return statearr_25411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22663__auto__);
});})(c__22661__auto___25416,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map