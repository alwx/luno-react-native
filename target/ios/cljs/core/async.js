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
var args22695 = [];
var len__17899__auto___22701 = arguments.length;
var i__17900__auto___22702 = (0);
while(true){
if((i__17900__auto___22702 < len__17899__auto___22701)){
args22695.push((arguments[i__17900__auto___22702]));

var G__22703 = (i__17900__auto___22702 + (1));
i__17900__auto___22702 = G__22703;
continue;
} else {
}
break;
}

var G__22697 = args22695.length;
switch (G__22697) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22695.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async22698 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22698 = (function (f,blockable,meta22699){
this.f = f;
this.blockable = blockable;
this.meta22699 = meta22699;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22698.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22700,meta22699__$1){
var self__ = this;
var _22700__$1 = this;
return (new cljs.core.async.t_cljs$core$async22698(self__.f,self__.blockable,meta22699__$1));
});

cljs.core.async.t_cljs$core$async22698.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22700){
var self__ = this;
var _22700__$1 = this;
return self__.meta22699;
});

cljs.core.async.t_cljs$core$async22698.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22698.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22698.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async22698.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22698.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22699","meta22699",-2018095751,null)], null);
});

cljs.core.async.t_cljs$core$async22698.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22698.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22698";

cljs.core.async.t_cljs$core$async22698.cljs$lang$ctorPrWriter = (function (this__17439__auto__,writer__17440__auto__,opt__17441__auto__){
return cljs.core._write.call(null,writer__17440__auto__,"cljs.core.async/t_cljs$core$async22698");
});

cljs.core.async.__GT_t_cljs$core$async22698 = (function cljs$core$async$__GT_t_cljs$core$async22698(f__$1,blockable__$1,meta22699){
return (new cljs.core.async.t_cljs$core$async22698(f__$1,blockable__$1,meta22699));
});

}

return (new cljs.core.async.t_cljs$core$async22698(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args22707 = [];
var len__17899__auto___22710 = arguments.length;
var i__17900__auto___22711 = (0);
while(true){
if((i__17900__auto___22711 < len__17899__auto___22710)){
args22707.push((arguments[i__17900__auto___22711]));

var G__22712 = (i__17900__auto___22711 + (1));
i__17900__auto___22711 = G__22712;
continue;
} else {
}
break;
}

var G__22709 = args22707.length;
switch (G__22709) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22707.length)].join('')));

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
var args22714 = [];
var len__17899__auto___22717 = arguments.length;
var i__17900__auto___22718 = (0);
while(true){
if((i__17900__auto___22718 < len__17899__auto___22717)){
args22714.push((arguments[i__17900__auto___22718]));

var G__22719 = (i__17900__auto___22718 + (1));
i__17900__auto___22718 = G__22719;
continue;
} else {
}
break;
}

var G__22716 = args22714.length;
switch (G__22716) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22714.length)].join('')));

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
var args22721 = [];
var len__17899__auto___22724 = arguments.length;
var i__17900__auto___22725 = (0);
while(true){
if((i__17900__auto___22725 < len__17899__auto___22724)){
args22721.push((arguments[i__17900__auto___22725]));

var G__22726 = (i__17900__auto___22725 + (1));
i__17900__auto___22725 = G__22726;
continue;
} else {
}
break;
}

var G__22723 = args22721.length;
switch (G__22723) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22721.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_22728 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22728);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22728,ret){
return (function (){
return fn1.call(null,val_22728);
});})(val_22728,ret))
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
var args22729 = [];
var len__17899__auto___22732 = arguments.length;
var i__17900__auto___22733 = (0);
while(true){
if((i__17900__auto___22733 < len__17899__auto___22732)){
args22729.push((arguments[i__17900__auto___22733]));

var G__22734 = (i__17900__auto___22733 + (1));
i__17900__auto___22733 = G__22734;
continue;
} else {
}
break;
}

var G__22731 = args22729.length;
switch (G__22731) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22729.length)].join('')));

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
var n__17744__auto___22736 = n;
var x_22737 = (0);
while(true){
if((x_22737 < n__17744__auto___22736)){
(a[x_22737] = (0));

var G__22738 = (x_22737 + (1));
x_22737 = G__22738;
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

var G__22739 = (i + (1));
i = G__22739;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async22743 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22743 = (function (alt_flag,flag,meta22744){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta22744 = meta22744;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22745,meta22744__$1){
var self__ = this;
var _22745__$1 = this;
return (new cljs.core.async.t_cljs$core$async22743(self__.alt_flag,self__.flag,meta22744__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22743.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22745){
var self__ = this;
var _22745__$1 = this;
return self__.meta22744;
});})(flag))
;

cljs.core.async.t_cljs$core$async22743.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22743.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22743.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22743.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22743.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22744","meta22744",2054887793,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22743.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22743.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22743";

cljs.core.async.t_cljs$core$async22743.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17439__auto__,writer__17440__auto__,opt__17441__auto__){
return cljs.core._write.call(null,writer__17440__auto__,"cljs.core.async/t_cljs$core$async22743");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async22743 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22743(alt_flag__$1,flag__$1,meta22744){
return (new cljs.core.async.t_cljs$core$async22743(alt_flag__$1,flag__$1,meta22744));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22743(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22749 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22749 = (function (alt_handler,flag,cb,meta22750){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta22750 = meta22750;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22749.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22751,meta22750__$1){
var self__ = this;
var _22751__$1 = this;
return (new cljs.core.async.t_cljs$core$async22749(self__.alt_handler,self__.flag,self__.cb,meta22750__$1));
});

cljs.core.async.t_cljs$core$async22749.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22751){
var self__ = this;
var _22751__$1 = this;
return self__.meta22750;
});

cljs.core.async.t_cljs$core$async22749.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22749.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22749.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22749.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22749.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22750","meta22750",2026181156,null)], null);
});

cljs.core.async.t_cljs$core$async22749.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22749.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22749";

cljs.core.async.t_cljs$core$async22749.cljs$lang$ctorPrWriter = (function (this__17439__auto__,writer__17440__auto__,opt__17441__auto__){
return cljs.core._write.call(null,writer__17440__auto__,"cljs.core.async/t_cljs$core$async22749");
});

cljs.core.async.__GT_t_cljs$core$async22749 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22749(alt_handler__$1,flag__$1,cb__$1,meta22750){
return (new cljs.core.async.t_cljs$core$async22749(alt_handler__$1,flag__$1,cb__$1,meta22750));
});

}

return (new cljs.core.async.t_cljs$core$async22749(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__22752_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22752_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22753_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22753_SHARP_,port], null));
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
var G__22754 = (i + (1));
i = G__22754;
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
var len__17899__auto___22760 = arguments.length;
var i__17900__auto___22761 = (0);
while(true){
if((i__17900__auto___22761 < len__17899__auto___22760)){
args__17906__auto__.push((arguments[i__17900__auto___22761]));

var G__22762 = (i__17900__auto___22761 + (1));
i__17900__auto___22761 = G__22762;
continue;
} else {
}
break;
}

var argseq__17907__auto__ = ((((1) < args__17906__auto__.length))?(new cljs.core.IndexedSeq(args__17906__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17907__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22757){
var map__22758 = p__22757;
var map__22758__$1 = ((((!((map__22758 == null)))?((((map__22758.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22758.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22758):map__22758);
var opts = map__22758__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22755){
var G__22756 = cljs.core.first.call(null,seq22755);
var seq22755__$1 = cljs.core.next.call(null,seq22755);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22756,seq22755__$1);
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
var args22763 = [];
var len__17899__auto___22813 = arguments.length;
var i__17900__auto___22814 = (0);
while(true){
if((i__17900__auto___22814 < len__17899__auto___22813)){
args22763.push((arguments[i__17900__auto___22814]));

var G__22815 = (i__17900__auto___22814 + (1));
i__17900__auto___22814 = G__22815;
continue;
} else {
}
break;
}

var G__22765 = args22763.length;
switch (G__22765) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22763.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22650__auto___22817 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22650__auto___22817){
return (function (){
var f__22651__auto__ = (function (){var switch__22538__auto__ = ((function (c__22650__auto___22817){
return (function (state_22789){
var state_val_22790 = (state_22789[(1)]);
if((state_val_22790 === (7))){
var inst_22785 = (state_22789[(2)]);
var state_22789__$1 = state_22789;
var statearr_22791_22818 = state_22789__$1;
(statearr_22791_22818[(2)] = inst_22785);

(statearr_22791_22818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22790 === (1))){
var state_22789__$1 = state_22789;
var statearr_22792_22819 = state_22789__$1;
(statearr_22792_22819[(2)] = null);

(statearr_22792_22819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22790 === (4))){
var inst_22768 = (state_22789[(7)]);
var inst_22768__$1 = (state_22789[(2)]);
var inst_22769 = (inst_22768__$1 == null);
var state_22789__$1 = (function (){var statearr_22793 = state_22789;
(statearr_22793[(7)] = inst_22768__$1);

return statearr_22793;
})();
if(cljs.core.truth_(inst_22769)){
var statearr_22794_22820 = state_22789__$1;
(statearr_22794_22820[(1)] = (5));

} else {
var statearr_22795_22821 = state_22789__$1;
(statearr_22795_22821[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22790 === (13))){
var state_22789__$1 = state_22789;
var statearr_22796_22822 = state_22789__$1;
(statearr_22796_22822[(2)] = null);

(statearr_22796_22822[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22790 === (6))){
var inst_22768 = (state_22789[(7)]);
var state_22789__$1 = state_22789;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22789__$1,(11),to,inst_22768);
} else {
if((state_val_22790 === (3))){
var inst_22787 = (state_22789[(2)]);
var state_22789__$1 = state_22789;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22789__$1,inst_22787);
} else {
if((state_val_22790 === (12))){
var state_22789__$1 = state_22789;
var statearr_22797_22823 = state_22789__$1;
(statearr_22797_22823[(2)] = null);

(statearr_22797_22823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22790 === (2))){
var state_22789__$1 = state_22789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22789__$1,(4),from);
} else {
if((state_val_22790 === (11))){
var inst_22778 = (state_22789[(2)]);
var state_22789__$1 = state_22789;
if(cljs.core.truth_(inst_22778)){
var statearr_22798_22824 = state_22789__$1;
(statearr_22798_22824[(1)] = (12));

} else {
var statearr_22799_22825 = state_22789__$1;
(statearr_22799_22825[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22790 === (9))){
var state_22789__$1 = state_22789;
var statearr_22800_22826 = state_22789__$1;
(statearr_22800_22826[(2)] = null);

(statearr_22800_22826[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22790 === (5))){
var state_22789__$1 = state_22789;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22801_22827 = state_22789__$1;
(statearr_22801_22827[(1)] = (8));

} else {
var statearr_22802_22828 = state_22789__$1;
(statearr_22802_22828[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22790 === (14))){
var inst_22783 = (state_22789[(2)]);
var state_22789__$1 = state_22789;
var statearr_22803_22829 = state_22789__$1;
(statearr_22803_22829[(2)] = inst_22783);

(statearr_22803_22829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22790 === (10))){
var inst_22775 = (state_22789[(2)]);
var state_22789__$1 = state_22789;
var statearr_22804_22830 = state_22789__$1;
(statearr_22804_22830[(2)] = inst_22775);

(statearr_22804_22830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22790 === (8))){
var inst_22772 = cljs.core.async.close_BANG_.call(null,to);
var state_22789__$1 = state_22789;
var statearr_22805_22831 = state_22789__$1;
(statearr_22805_22831[(2)] = inst_22772);

(statearr_22805_22831[(1)] = (10));


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
});})(c__22650__auto___22817))
;
return ((function (switch__22538__auto__,c__22650__auto___22817){
return (function() {
var cljs$core$async$state_machine__22539__auto__ = null;
var cljs$core$async$state_machine__22539__auto____0 = (function (){
var statearr_22809 = [null,null,null,null,null,null,null,null];
(statearr_22809[(0)] = cljs$core$async$state_machine__22539__auto__);

(statearr_22809[(1)] = (1));

return statearr_22809;
});
var cljs$core$async$state_machine__22539__auto____1 = (function (state_22789){
while(true){
var ret_value__22540__auto__ = (function (){try{while(true){
var result__22541__auto__ = switch__22538__auto__.call(null,state_22789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22541__auto__;
}
break;
}
}catch (e22810){if((e22810 instanceof Object)){
var ex__22542__auto__ = e22810;
var statearr_22811_22832 = state_22789;
(statearr_22811_22832[(5)] = ex__22542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22833 = state_22789;
state_22789 = G__22833;
continue;
} else {
return ret_value__22540__auto__;
}
break;
}
});
cljs$core$async$state_machine__22539__auto__ = function(state_22789){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22539__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22539__auto____1.call(this,state_22789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22539__auto____0;
cljs$core$async$state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22539__auto____1;
return cljs$core$async$state_machine__22539__auto__;
})()
;})(switch__22538__auto__,c__22650__auto___22817))
})();
var state__22652__auto__ = (function (){var statearr_22812 = f__22651__auto__.call(null);
(statearr_22812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22650__auto___22817);

return statearr_22812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22652__auto__);
});})(c__22650__auto___22817))
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
return (function (p__23017){
var vec__23018 = p__23017;
var v = cljs.core.nth.call(null,vec__23018,(0),null);
var p = cljs.core.nth.call(null,vec__23018,(1),null);
var job = vec__23018;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22650__auto___23200 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22650__auto___23200,res,vec__23018,v,p,job,jobs,results){
return (function (){
var f__22651__auto__ = (function (){var switch__22538__auto__ = ((function (c__22650__auto___23200,res,vec__23018,v,p,job,jobs,results){
return (function (state_23023){
var state_val_23024 = (state_23023[(1)]);
if((state_val_23024 === (1))){
var state_23023__$1 = state_23023;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23023__$1,(2),res,v);
} else {
if((state_val_23024 === (2))){
var inst_23020 = (state_23023[(2)]);
var inst_23021 = cljs.core.async.close_BANG_.call(null,res);
var state_23023__$1 = (function (){var statearr_23025 = state_23023;
(statearr_23025[(7)] = inst_23020);

return statearr_23025;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23023__$1,inst_23021);
} else {
return null;
}
}
});})(c__22650__auto___23200,res,vec__23018,v,p,job,jobs,results))
;
return ((function (switch__22538__auto__,c__22650__auto___23200,res,vec__23018,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22539__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22539__auto____0 = (function (){
var statearr_23029 = [null,null,null,null,null,null,null,null];
(statearr_23029[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22539__auto__);

(statearr_23029[(1)] = (1));

return statearr_23029;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22539__auto____1 = (function (state_23023){
while(true){
var ret_value__22540__auto__ = (function (){try{while(true){
var result__22541__auto__ = switch__22538__auto__.call(null,state_23023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22541__auto__;
}
break;
}
}catch (e23030){if((e23030 instanceof Object)){
var ex__22542__auto__ = e23030;
var statearr_23031_23201 = state_23023;
(statearr_23031_23201[(5)] = ex__22542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23202 = state_23023;
state_23023 = G__23202;
continue;
} else {
return ret_value__22540__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22539__auto__ = function(state_23023){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22539__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22539__auto____1.call(this,state_23023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22539__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22539__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22539__auto__;
})()
;})(switch__22538__auto__,c__22650__auto___23200,res,vec__23018,v,p,job,jobs,results))
})();
var state__22652__auto__ = (function (){var statearr_23032 = f__22651__auto__.call(null);
(statearr_23032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22650__auto___23200);

return statearr_23032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22652__auto__);
});})(c__22650__auto___23200,res,vec__23018,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23033){
var vec__23034 = p__23033;
var v = cljs.core.nth.call(null,vec__23034,(0),null);
var p = cljs.core.nth.call(null,vec__23034,(1),null);
var job = vec__23034;
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
var n__17744__auto___23203 = n;
var __23204 = (0);
while(true){
if((__23204 < n__17744__auto___23203)){
var G__23035_23205 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23035_23205) {
case "compute":
var c__22650__auto___23207 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23204,c__22650__auto___23207,G__23035_23205,n__17744__auto___23203,jobs,results,process,async){
return (function (){
var f__22651__auto__ = (function (){var switch__22538__auto__ = ((function (__23204,c__22650__auto___23207,G__23035_23205,n__17744__auto___23203,jobs,results,process,async){
return (function (state_23048){
var state_val_23049 = (state_23048[(1)]);
if((state_val_23049 === (1))){
var state_23048__$1 = state_23048;
var statearr_23050_23208 = state_23048__$1;
(statearr_23050_23208[(2)] = null);

(statearr_23050_23208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23049 === (2))){
var state_23048__$1 = state_23048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23048__$1,(4),jobs);
} else {
if((state_val_23049 === (3))){
var inst_23046 = (state_23048[(2)]);
var state_23048__$1 = state_23048;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23048__$1,inst_23046);
} else {
if((state_val_23049 === (4))){
var inst_23038 = (state_23048[(2)]);
var inst_23039 = process.call(null,inst_23038);
var state_23048__$1 = state_23048;
if(cljs.core.truth_(inst_23039)){
var statearr_23051_23209 = state_23048__$1;
(statearr_23051_23209[(1)] = (5));

} else {
var statearr_23052_23210 = state_23048__$1;
(statearr_23052_23210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23049 === (5))){
var state_23048__$1 = state_23048;
var statearr_23053_23211 = state_23048__$1;
(statearr_23053_23211[(2)] = null);

(statearr_23053_23211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23049 === (6))){
var state_23048__$1 = state_23048;
var statearr_23054_23212 = state_23048__$1;
(statearr_23054_23212[(2)] = null);

(statearr_23054_23212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23049 === (7))){
var inst_23044 = (state_23048[(2)]);
var state_23048__$1 = state_23048;
var statearr_23055_23213 = state_23048__$1;
(statearr_23055_23213[(2)] = inst_23044);

(statearr_23055_23213[(1)] = (3));


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
});})(__23204,c__22650__auto___23207,G__23035_23205,n__17744__auto___23203,jobs,results,process,async))
;
return ((function (__23204,switch__22538__auto__,c__22650__auto___23207,G__23035_23205,n__17744__auto___23203,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22539__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22539__auto____0 = (function (){
var statearr_23059 = [null,null,null,null,null,null,null];
(statearr_23059[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22539__auto__);

(statearr_23059[(1)] = (1));

return statearr_23059;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22539__auto____1 = (function (state_23048){
while(true){
var ret_value__22540__auto__ = (function (){try{while(true){
var result__22541__auto__ = switch__22538__auto__.call(null,state_23048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22541__auto__;
}
break;
}
}catch (e23060){if((e23060 instanceof Object)){
var ex__22542__auto__ = e23060;
var statearr_23061_23214 = state_23048;
(statearr_23061_23214[(5)] = ex__22542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23060;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23215 = state_23048;
state_23048 = G__23215;
continue;
} else {
return ret_value__22540__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22539__auto__ = function(state_23048){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22539__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22539__auto____1.call(this,state_23048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22539__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22539__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22539__auto__;
})()
;})(__23204,switch__22538__auto__,c__22650__auto___23207,G__23035_23205,n__17744__auto___23203,jobs,results,process,async))
})();
var state__22652__auto__ = (function (){var statearr_23062 = f__22651__auto__.call(null);
(statearr_23062[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22650__auto___23207);

return statearr_23062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22652__auto__);
});})(__23204,c__22650__auto___23207,G__23035_23205,n__17744__auto___23203,jobs,results,process,async))
);


break;
case "async":
var c__22650__auto___23216 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23204,c__22650__auto___23216,G__23035_23205,n__17744__auto___23203,jobs,results,process,async){
return (function (){
var f__22651__auto__ = (function (){var switch__22538__auto__ = ((function (__23204,c__22650__auto___23216,G__23035_23205,n__17744__auto___23203,jobs,results,process,async){
return (function (state_23075){
var state_val_23076 = (state_23075[(1)]);
if((state_val_23076 === (1))){
var state_23075__$1 = state_23075;
var statearr_23077_23217 = state_23075__$1;
(statearr_23077_23217[(2)] = null);

(statearr_23077_23217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23076 === (2))){
var state_23075__$1 = state_23075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23075__$1,(4),jobs);
} else {
if((state_val_23076 === (3))){
var inst_23073 = (state_23075[(2)]);
var state_23075__$1 = state_23075;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23075__$1,inst_23073);
} else {
if((state_val_23076 === (4))){
var inst_23065 = (state_23075[(2)]);
var inst_23066 = async.call(null,inst_23065);
var state_23075__$1 = state_23075;
if(cljs.core.truth_(inst_23066)){
var statearr_23078_23218 = state_23075__$1;
(statearr_23078_23218[(1)] = (5));

} else {
var statearr_23079_23219 = state_23075__$1;
(statearr_23079_23219[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23076 === (5))){
var state_23075__$1 = state_23075;
var statearr_23080_23220 = state_23075__$1;
(statearr_23080_23220[(2)] = null);

(statearr_23080_23220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23076 === (6))){
var state_23075__$1 = state_23075;
var statearr_23081_23221 = state_23075__$1;
(statearr_23081_23221[(2)] = null);

(statearr_23081_23221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23076 === (7))){
var inst_23071 = (state_23075[(2)]);
var state_23075__$1 = state_23075;
var statearr_23082_23222 = state_23075__$1;
(statearr_23082_23222[(2)] = inst_23071);

(statearr_23082_23222[(1)] = (3));


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
});})(__23204,c__22650__auto___23216,G__23035_23205,n__17744__auto___23203,jobs,results,process,async))
;
return ((function (__23204,switch__22538__auto__,c__22650__auto___23216,G__23035_23205,n__17744__auto___23203,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22539__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22539__auto____0 = (function (){
var statearr_23086 = [null,null,null,null,null,null,null];
(statearr_23086[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22539__auto__);

(statearr_23086[(1)] = (1));

return statearr_23086;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22539__auto____1 = (function (state_23075){
while(true){
var ret_value__22540__auto__ = (function (){try{while(true){
var result__22541__auto__ = switch__22538__auto__.call(null,state_23075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22541__auto__;
}
break;
}
}catch (e23087){if((e23087 instanceof Object)){
var ex__22542__auto__ = e23087;
var statearr_23088_23223 = state_23075;
(statearr_23088_23223[(5)] = ex__22542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23224 = state_23075;
state_23075 = G__23224;
continue;
} else {
return ret_value__22540__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22539__auto__ = function(state_23075){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22539__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22539__auto____1.call(this,state_23075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22539__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22539__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22539__auto__;
})()
;})(__23204,switch__22538__auto__,c__22650__auto___23216,G__23035_23205,n__17744__auto___23203,jobs,results,process,async))
})();
var state__22652__auto__ = (function (){var statearr_23089 = f__22651__auto__.call(null);
(statearr_23089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22650__auto___23216);

return statearr_23089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22652__auto__);
});})(__23204,c__22650__auto___23216,G__23035_23205,n__17744__auto___23203,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__23225 = (__23204 + (1));
__23204 = G__23225;
continue;
} else {
}
break;
}

var c__22650__auto___23226 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22650__auto___23226,jobs,results,process,async){
return (function (){
var f__22651__auto__ = (function (){var switch__22538__auto__ = ((function (c__22650__auto___23226,jobs,results,process,async){
return (function (state_23111){
var state_val_23112 = (state_23111[(1)]);
if((state_val_23112 === (1))){
var state_23111__$1 = state_23111;
var statearr_23113_23227 = state_23111__$1;
(statearr_23113_23227[(2)] = null);

(statearr_23113_23227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23112 === (2))){
var state_23111__$1 = state_23111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23111__$1,(4),from);
} else {
if((state_val_23112 === (3))){
var inst_23109 = (state_23111[(2)]);
var state_23111__$1 = state_23111;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23111__$1,inst_23109);
} else {
if((state_val_23112 === (4))){
var inst_23092 = (state_23111[(7)]);
var inst_23092__$1 = (state_23111[(2)]);
var inst_23093 = (inst_23092__$1 == null);
var state_23111__$1 = (function (){var statearr_23114 = state_23111;
(statearr_23114[(7)] = inst_23092__$1);

return statearr_23114;
})();
if(cljs.core.truth_(inst_23093)){
var statearr_23115_23228 = state_23111__$1;
(statearr_23115_23228[(1)] = (5));

} else {
var statearr_23116_23229 = state_23111__$1;
(statearr_23116_23229[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23112 === (5))){
var inst_23095 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23111__$1 = state_23111;
var statearr_23117_23230 = state_23111__$1;
(statearr_23117_23230[(2)] = inst_23095);

(statearr_23117_23230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23112 === (6))){
var inst_23097 = (state_23111[(8)]);
var inst_23092 = (state_23111[(7)]);
var inst_23097__$1 = cljs.core.async.chan.call(null,(1));
var inst_23098 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23099 = [inst_23092,inst_23097__$1];
var inst_23100 = (new cljs.core.PersistentVector(null,2,(5),inst_23098,inst_23099,null));
var state_23111__$1 = (function (){var statearr_23118 = state_23111;
(statearr_23118[(8)] = inst_23097__$1);

return statearr_23118;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23111__$1,(8),jobs,inst_23100);
} else {
if((state_val_23112 === (7))){
var inst_23107 = (state_23111[(2)]);
var state_23111__$1 = state_23111;
var statearr_23119_23231 = state_23111__$1;
(statearr_23119_23231[(2)] = inst_23107);

(statearr_23119_23231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23112 === (8))){
var inst_23097 = (state_23111[(8)]);
var inst_23102 = (state_23111[(2)]);
var state_23111__$1 = (function (){var statearr_23120 = state_23111;
(statearr_23120[(9)] = inst_23102);

return statearr_23120;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23111__$1,(9),results,inst_23097);
} else {
if((state_val_23112 === (9))){
var inst_23104 = (state_23111[(2)]);
var state_23111__$1 = (function (){var statearr_23121 = state_23111;
(statearr_23121[(10)] = inst_23104);

return statearr_23121;
})();
var statearr_23122_23232 = state_23111__$1;
(statearr_23122_23232[(2)] = null);

(statearr_23122_23232[(1)] = (2));


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
});})(c__22650__auto___23226,jobs,results,process,async))
;
return ((function (switch__22538__auto__,c__22650__auto___23226,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22539__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22539__auto____0 = (function (){
var statearr_23126 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23126[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22539__auto__);

(statearr_23126[(1)] = (1));

return statearr_23126;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22539__auto____1 = (function (state_23111){
while(true){
var ret_value__22540__auto__ = (function (){try{while(true){
var result__22541__auto__ = switch__22538__auto__.call(null,state_23111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22541__auto__;
}
break;
}
}catch (e23127){if((e23127 instanceof Object)){
var ex__22542__auto__ = e23127;
var statearr_23128_23233 = state_23111;
(statearr_23128_23233[(5)] = ex__22542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23234 = state_23111;
state_23111 = G__23234;
continue;
} else {
return ret_value__22540__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22539__auto__ = function(state_23111){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22539__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22539__auto____1.call(this,state_23111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22539__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22539__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22539__auto__;
})()
;})(switch__22538__auto__,c__22650__auto___23226,jobs,results,process,async))
})();
var state__22652__auto__ = (function (){var statearr_23129 = f__22651__auto__.call(null);
(statearr_23129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22650__auto___23226);

return statearr_23129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22652__auto__);
});})(c__22650__auto___23226,jobs,results,process,async))
);


var c__22650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22650__auto__,jobs,results,process,async){
return (function (){
var f__22651__auto__ = (function (){var switch__22538__auto__ = ((function (c__22650__auto__,jobs,results,process,async){
return (function (state_23167){
var state_val_23168 = (state_23167[(1)]);
if((state_val_23168 === (7))){
var inst_23163 = (state_23167[(2)]);
var state_23167__$1 = state_23167;
var statearr_23169_23235 = state_23167__$1;
(statearr_23169_23235[(2)] = inst_23163);

(statearr_23169_23235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23168 === (20))){
var state_23167__$1 = state_23167;
var statearr_23170_23236 = state_23167__$1;
(statearr_23170_23236[(2)] = null);

(statearr_23170_23236[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23168 === (1))){
var state_23167__$1 = state_23167;
var statearr_23171_23237 = state_23167__$1;
(statearr_23171_23237[(2)] = null);

(statearr_23171_23237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23168 === (4))){
var inst_23132 = (state_23167[(7)]);
var inst_23132__$1 = (state_23167[(2)]);
var inst_23133 = (inst_23132__$1 == null);
var state_23167__$1 = (function (){var statearr_23172 = state_23167;
(statearr_23172[(7)] = inst_23132__$1);

return statearr_23172;
})();
if(cljs.core.truth_(inst_23133)){
var statearr_23173_23238 = state_23167__$1;
(statearr_23173_23238[(1)] = (5));

} else {
var statearr_23174_23239 = state_23167__$1;
(statearr_23174_23239[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23168 === (15))){
var inst_23145 = (state_23167[(8)]);
var state_23167__$1 = state_23167;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23167__$1,(18),to,inst_23145);
} else {
if((state_val_23168 === (21))){
var inst_23158 = (state_23167[(2)]);
var state_23167__$1 = state_23167;
var statearr_23175_23240 = state_23167__$1;
(statearr_23175_23240[(2)] = inst_23158);

(statearr_23175_23240[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23168 === (13))){
var inst_23160 = (state_23167[(2)]);
var state_23167__$1 = (function (){var statearr_23176 = state_23167;
(statearr_23176[(9)] = inst_23160);

return statearr_23176;
})();
var statearr_23177_23241 = state_23167__$1;
(statearr_23177_23241[(2)] = null);

(statearr_23177_23241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23168 === (6))){
var inst_23132 = (state_23167[(7)]);
var state_23167__$1 = state_23167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23167__$1,(11),inst_23132);
} else {
if((state_val_23168 === (17))){
var inst_23153 = (state_23167[(2)]);
var state_23167__$1 = state_23167;
if(cljs.core.truth_(inst_23153)){
var statearr_23178_23242 = state_23167__$1;
(statearr_23178_23242[(1)] = (19));

} else {
var statearr_23179_23243 = state_23167__$1;
(statearr_23179_23243[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23168 === (3))){
var inst_23165 = (state_23167[(2)]);
var state_23167__$1 = state_23167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23167__$1,inst_23165);
} else {
if((state_val_23168 === (12))){
var inst_23142 = (state_23167[(10)]);
var state_23167__$1 = state_23167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23167__$1,(14),inst_23142);
} else {
if((state_val_23168 === (2))){
var state_23167__$1 = state_23167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23167__$1,(4),results);
} else {
if((state_val_23168 === (19))){
var state_23167__$1 = state_23167;
var statearr_23180_23244 = state_23167__$1;
(statearr_23180_23244[(2)] = null);

(statearr_23180_23244[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23168 === (11))){
var inst_23142 = (state_23167[(2)]);
var state_23167__$1 = (function (){var statearr_23181 = state_23167;
(statearr_23181[(10)] = inst_23142);

return statearr_23181;
})();
var statearr_23182_23245 = state_23167__$1;
(statearr_23182_23245[(2)] = null);

(statearr_23182_23245[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23168 === (9))){
var state_23167__$1 = state_23167;
var statearr_23183_23246 = state_23167__$1;
(statearr_23183_23246[(2)] = null);

(statearr_23183_23246[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23168 === (5))){
var state_23167__$1 = state_23167;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23184_23247 = state_23167__$1;
(statearr_23184_23247[(1)] = (8));

} else {
var statearr_23185_23248 = state_23167__$1;
(statearr_23185_23248[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23168 === (14))){
var inst_23145 = (state_23167[(8)]);
var inst_23147 = (state_23167[(11)]);
var inst_23145__$1 = (state_23167[(2)]);
var inst_23146 = (inst_23145__$1 == null);
var inst_23147__$1 = cljs.core.not.call(null,inst_23146);
var state_23167__$1 = (function (){var statearr_23186 = state_23167;
(statearr_23186[(8)] = inst_23145__$1);

(statearr_23186[(11)] = inst_23147__$1);

return statearr_23186;
})();
if(inst_23147__$1){
var statearr_23187_23249 = state_23167__$1;
(statearr_23187_23249[(1)] = (15));

} else {
var statearr_23188_23250 = state_23167__$1;
(statearr_23188_23250[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23168 === (16))){
var inst_23147 = (state_23167[(11)]);
var state_23167__$1 = state_23167;
var statearr_23189_23251 = state_23167__$1;
(statearr_23189_23251[(2)] = inst_23147);

(statearr_23189_23251[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23168 === (10))){
var inst_23139 = (state_23167[(2)]);
var state_23167__$1 = state_23167;
var statearr_23190_23252 = state_23167__$1;
(statearr_23190_23252[(2)] = inst_23139);

(statearr_23190_23252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23168 === (18))){
var inst_23150 = (state_23167[(2)]);
var state_23167__$1 = state_23167;
var statearr_23191_23253 = state_23167__$1;
(statearr_23191_23253[(2)] = inst_23150);

(statearr_23191_23253[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23168 === (8))){
var inst_23136 = cljs.core.async.close_BANG_.call(null,to);
var state_23167__$1 = state_23167;
var statearr_23192_23254 = state_23167__$1;
(statearr_23192_23254[(2)] = inst_23136);

(statearr_23192_23254[(1)] = (10));


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
});})(c__22650__auto__,jobs,results,process,async))
;
return ((function (switch__22538__auto__,c__22650__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22539__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22539__auto____0 = (function (){
var statearr_23196 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23196[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22539__auto__);

(statearr_23196[(1)] = (1));

return statearr_23196;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22539__auto____1 = (function (state_23167){
while(true){
var ret_value__22540__auto__ = (function (){try{while(true){
var result__22541__auto__ = switch__22538__auto__.call(null,state_23167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22541__auto__;
}
break;
}
}catch (e23197){if((e23197 instanceof Object)){
var ex__22542__auto__ = e23197;
var statearr_23198_23255 = state_23167;
(statearr_23198_23255[(5)] = ex__22542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23197;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23256 = state_23167;
state_23167 = G__23256;
continue;
} else {
return ret_value__22540__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22539__auto__ = function(state_23167){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22539__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22539__auto____1.call(this,state_23167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22539__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22539__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22539__auto__;
})()
;})(switch__22538__auto__,c__22650__auto__,jobs,results,process,async))
})();
var state__22652__auto__ = (function (){var statearr_23199 = f__22651__auto__.call(null);
(statearr_23199[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22650__auto__);

return statearr_23199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22652__auto__);
});})(c__22650__auto__,jobs,results,process,async))
);

return c__22650__auto__;
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
var args23257 = [];
var len__17899__auto___23260 = arguments.length;
var i__17900__auto___23261 = (0);
while(true){
if((i__17900__auto___23261 < len__17899__auto___23260)){
args23257.push((arguments[i__17900__auto___23261]));

var G__23262 = (i__17900__auto___23261 + (1));
i__17900__auto___23261 = G__23262;
continue;
} else {
}
break;
}

var G__23259 = args23257.length;
switch (G__23259) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23257.length)].join('')));

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
var args23264 = [];
var len__17899__auto___23267 = arguments.length;
var i__17900__auto___23268 = (0);
while(true){
if((i__17900__auto___23268 < len__17899__auto___23267)){
args23264.push((arguments[i__17900__auto___23268]));

var G__23269 = (i__17900__auto___23268 + (1));
i__17900__auto___23268 = G__23269;
continue;
} else {
}
break;
}

var G__23266 = args23264.length;
switch (G__23266) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23264.length)].join('')));

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
var args23271 = [];
var len__17899__auto___23324 = arguments.length;
var i__17900__auto___23325 = (0);
while(true){
if((i__17900__auto___23325 < len__17899__auto___23324)){
args23271.push((arguments[i__17900__auto___23325]));

var G__23326 = (i__17900__auto___23325 + (1));
i__17900__auto___23325 = G__23326;
continue;
} else {
}
break;
}

var G__23273 = args23271.length;
switch (G__23273) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23271.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22650__auto___23328 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22650__auto___23328,tc,fc){
return (function (){
var f__22651__auto__ = (function (){var switch__22538__auto__ = ((function (c__22650__auto___23328,tc,fc){
return (function (state_23299){
var state_val_23300 = (state_23299[(1)]);
if((state_val_23300 === (7))){
var inst_23295 = (state_23299[(2)]);
var state_23299__$1 = state_23299;
var statearr_23301_23329 = state_23299__$1;
(statearr_23301_23329[(2)] = inst_23295);

(statearr_23301_23329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (1))){
var state_23299__$1 = state_23299;
var statearr_23302_23330 = state_23299__$1;
(statearr_23302_23330[(2)] = null);

(statearr_23302_23330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (4))){
var inst_23276 = (state_23299[(7)]);
var inst_23276__$1 = (state_23299[(2)]);
var inst_23277 = (inst_23276__$1 == null);
var state_23299__$1 = (function (){var statearr_23303 = state_23299;
(statearr_23303[(7)] = inst_23276__$1);

return statearr_23303;
})();
if(cljs.core.truth_(inst_23277)){
var statearr_23304_23331 = state_23299__$1;
(statearr_23304_23331[(1)] = (5));

} else {
var statearr_23305_23332 = state_23299__$1;
(statearr_23305_23332[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (13))){
var state_23299__$1 = state_23299;
var statearr_23306_23333 = state_23299__$1;
(statearr_23306_23333[(2)] = null);

(statearr_23306_23333[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (6))){
var inst_23276 = (state_23299[(7)]);
var inst_23282 = p.call(null,inst_23276);
var state_23299__$1 = state_23299;
if(cljs.core.truth_(inst_23282)){
var statearr_23307_23334 = state_23299__$1;
(statearr_23307_23334[(1)] = (9));

} else {
var statearr_23308_23335 = state_23299__$1;
(statearr_23308_23335[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (3))){
var inst_23297 = (state_23299[(2)]);
var state_23299__$1 = state_23299;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23299__$1,inst_23297);
} else {
if((state_val_23300 === (12))){
var state_23299__$1 = state_23299;
var statearr_23309_23336 = state_23299__$1;
(statearr_23309_23336[(2)] = null);

(statearr_23309_23336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (2))){
var state_23299__$1 = state_23299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23299__$1,(4),ch);
} else {
if((state_val_23300 === (11))){
var inst_23276 = (state_23299[(7)]);
var inst_23286 = (state_23299[(2)]);
var state_23299__$1 = state_23299;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23299__$1,(8),inst_23286,inst_23276);
} else {
if((state_val_23300 === (9))){
var state_23299__$1 = state_23299;
var statearr_23310_23337 = state_23299__$1;
(statearr_23310_23337[(2)] = tc);

(statearr_23310_23337[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (5))){
var inst_23279 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23280 = cljs.core.async.close_BANG_.call(null,fc);
var state_23299__$1 = (function (){var statearr_23311 = state_23299;
(statearr_23311[(8)] = inst_23279);

return statearr_23311;
})();
var statearr_23312_23338 = state_23299__$1;
(statearr_23312_23338[(2)] = inst_23280);

(statearr_23312_23338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (14))){
var inst_23293 = (state_23299[(2)]);
var state_23299__$1 = state_23299;
var statearr_23313_23339 = state_23299__$1;
(statearr_23313_23339[(2)] = inst_23293);

(statearr_23313_23339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (10))){
var state_23299__$1 = state_23299;
var statearr_23314_23340 = state_23299__$1;
(statearr_23314_23340[(2)] = fc);

(statearr_23314_23340[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23300 === (8))){
var inst_23288 = (state_23299[(2)]);
var state_23299__$1 = state_23299;
if(cljs.core.truth_(inst_23288)){
var statearr_23315_23341 = state_23299__$1;
(statearr_23315_23341[(1)] = (12));

} else {
var statearr_23316_23342 = state_23299__$1;
(statearr_23316_23342[(1)] = (13));

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
});})(c__22650__auto___23328,tc,fc))
;
return ((function (switch__22538__auto__,c__22650__auto___23328,tc,fc){
return (function() {
var cljs$core$async$state_machine__22539__auto__ = null;
var cljs$core$async$state_machine__22539__auto____0 = (function (){
var statearr_23320 = [null,null,null,null,null,null,null,null,null];
(statearr_23320[(0)] = cljs$core$async$state_machine__22539__auto__);

(statearr_23320[(1)] = (1));

return statearr_23320;
});
var cljs$core$async$state_machine__22539__auto____1 = (function (state_23299){
while(true){
var ret_value__22540__auto__ = (function (){try{while(true){
var result__22541__auto__ = switch__22538__auto__.call(null,state_23299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22541__auto__;
}
break;
}
}catch (e23321){if((e23321 instanceof Object)){
var ex__22542__auto__ = e23321;
var statearr_23322_23343 = state_23299;
(statearr_23322_23343[(5)] = ex__22542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23321;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23344 = state_23299;
state_23299 = G__23344;
continue;
} else {
return ret_value__22540__auto__;
}
break;
}
});
cljs$core$async$state_machine__22539__auto__ = function(state_23299){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22539__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22539__auto____1.call(this,state_23299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22539__auto____0;
cljs$core$async$state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22539__auto____1;
return cljs$core$async$state_machine__22539__auto__;
})()
;})(switch__22538__auto__,c__22650__auto___23328,tc,fc))
})();
var state__22652__auto__ = (function (){var statearr_23323 = f__22651__auto__.call(null);
(statearr_23323[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22650__auto___23328);

return statearr_23323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22652__auto__);
});})(c__22650__auto___23328,tc,fc))
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
var c__22650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22650__auto__){
return (function (){
var f__22651__auto__ = (function (){var switch__22538__auto__ = ((function (c__22650__auto__){
return (function (state_23408){
var state_val_23409 = (state_23408[(1)]);
if((state_val_23409 === (7))){
var inst_23404 = (state_23408[(2)]);
var state_23408__$1 = state_23408;
var statearr_23410_23431 = state_23408__$1;
(statearr_23410_23431[(2)] = inst_23404);

(statearr_23410_23431[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23409 === (1))){
var inst_23388 = init;
var state_23408__$1 = (function (){var statearr_23411 = state_23408;
(statearr_23411[(7)] = inst_23388);

return statearr_23411;
})();
var statearr_23412_23432 = state_23408__$1;
(statearr_23412_23432[(2)] = null);

(statearr_23412_23432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23409 === (4))){
var inst_23391 = (state_23408[(8)]);
var inst_23391__$1 = (state_23408[(2)]);
var inst_23392 = (inst_23391__$1 == null);
var state_23408__$1 = (function (){var statearr_23413 = state_23408;
(statearr_23413[(8)] = inst_23391__$1);

return statearr_23413;
})();
if(cljs.core.truth_(inst_23392)){
var statearr_23414_23433 = state_23408__$1;
(statearr_23414_23433[(1)] = (5));

} else {
var statearr_23415_23434 = state_23408__$1;
(statearr_23415_23434[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23409 === (6))){
var inst_23391 = (state_23408[(8)]);
var inst_23388 = (state_23408[(7)]);
var inst_23395 = (state_23408[(9)]);
var inst_23395__$1 = f.call(null,inst_23388,inst_23391);
var inst_23396 = cljs.core.reduced_QMARK_.call(null,inst_23395__$1);
var state_23408__$1 = (function (){var statearr_23416 = state_23408;
(statearr_23416[(9)] = inst_23395__$1);

return statearr_23416;
})();
if(inst_23396){
var statearr_23417_23435 = state_23408__$1;
(statearr_23417_23435[(1)] = (8));

} else {
var statearr_23418_23436 = state_23408__$1;
(statearr_23418_23436[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23409 === (3))){
var inst_23406 = (state_23408[(2)]);
var state_23408__$1 = state_23408;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23408__$1,inst_23406);
} else {
if((state_val_23409 === (2))){
var state_23408__$1 = state_23408;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23408__$1,(4),ch);
} else {
if((state_val_23409 === (9))){
var inst_23395 = (state_23408[(9)]);
var inst_23388 = inst_23395;
var state_23408__$1 = (function (){var statearr_23419 = state_23408;
(statearr_23419[(7)] = inst_23388);

return statearr_23419;
})();
var statearr_23420_23437 = state_23408__$1;
(statearr_23420_23437[(2)] = null);

(statearr_23420_23437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23409 === (5))){
var inst_23388 = (state_23408[(7)]);
var state_23408__$1 = state_23408;
var statearr_23421_23438 = state_23408__$1;
(statearr_23421_23438[(2)] = inst_23388);

(statearr_23421_23438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23409 === (10))){
var inst_23402 = (state_23408[(2)]);
var state_23408__$1 = state_23408;
var statearr_23422_23439 = state_23408__$1;
(statearr_23422_23439[(2)] = inst_23402);

(statearr_23422_23439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23409 === (8))){
var inst_23395 = (state_23408[(9)]);
var inst_23398 = cljs.core.deref.call(null,inst_23395);
var state_23408__$1 = state_23408;
var statearr_23423_23440 = state_23408__$1;
(statearr_23423_23440[(2)] = inst_23398);

(statearr_23423_23440[(1)] = (10));


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
});})(c__22650__auto__))
;
return ((function (switch__22538__auto__,c__22650__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22539__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22539__auto____0 = (function (){
var statearr_23427 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23427[(0)] = cljs$core$async$reduce_$_state_machine__22539__auto__);

(statearr_23427[(1)] = (1));

return statearr_23427;
});
var cljs$core$async$reduce_$_state_machine__22539__auto____1 = (function (state_23408){
while(true){
var ret_value__22540__auto__ = (function (){try{while(true){
var result__22541__auto__ = switch__22538__auto__.call(null,state_23408);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22541__auto__;
}
break;
}
}catch (e23428){if((e23428 instanceof Object)){
var ex__22542__auto__ = e23428;
var statearr_23429_23441 = state_23408;
(statearr_23429_23441[(5)] = ex__22542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23442 = state_23408;
state_23408 = G__23442;
continue;
} else {
return ret_value__22540__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22539__auto__ = function(state_23408){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22539__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22539__auto____1.call(this,state_23408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22539__auto____0;
cljs$core$async$reduce_$_state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22539__auto____1;
return cljs$core$async$reduce_$_state_machine__22539__auto__;
})()
;})(switch__22538__auto__,c__22650__auto__))
})();
var state__22652__auto__ = (function (){var statearr_23430 = f__22651__auto__.call(null);
(statearr_23430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22650__auto__);

return statearr_23430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22652__auto__);
});})(c__22650__auto__))
);

return c__22650__auto__;
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
var args23443 = [];
var len__17899__auto___23495 = arguments.length;
var i__17900__auto___23496 = (0);
while(true){
if((i__17900__auto___23496 < len__17899__auto___23495)){
args23443.push((arguments[i__17900__auto___23496]));

var G__23497 = (i__17900__auto___23496 + (1));
i__17900__auto___23496 = G__23497;
continue;
} else {
}
break;
}

var G__23445 = args23443.length;
switch (G__23445) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23443.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22650__auto__){
return (function (){
var f__22651__auto__ = (function (){var switch__22538__auto__ = ((function (c__22650__auto__){
return (function (state_23470){
var state_val_23471 = (state_23470[(1)]);
if((state_val_23471 === (7))){
var inst_23452 = (state_23470[(2)]);
var state_23470__$1 = state_23470;
var statearr_23472_23499 = state_23470__$1;
(statearr_23472_23499[(2)] = inst_23452);

(statearr_23472_23499[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23471 === (1))){
var inst_23446 = cljs.core.seq.call(null,coll);
var inst_23447 = inst_23446;
var state_23470__$1 = (function (){var statearr_23473 = state_23470;
(statearr_23473[(7)] = inst_23447);

return statearr_23473;
})();
var statearr_23474_23500 = state_23470__$1;
(statearr_23474_23500[(2)] = null);

(statearr_23474_23500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23471 === (4))){
var inst_23447 = (state_23470[(7)]);
var inst_23450 = cljs.core.first.call(null,inst_23447);
var state_23470__$1 = state_23470;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23470__$1,(7),ch,inst_23450);
} else {
if((state_val_23471 === (13))){
var inst_23464 = (state_23470[(2)]);
var state_23470__$1 = state_23470;
var statearr_23475_23501 = state_23470__$1;
(statearr_23475_23501[(2)] = inst_23464);

(statearr_23475_23501[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23471 === (6))){
var inst_23455 = (state_23470[(2)]);
var state_23470__$1 = state_23470;
if(cljs.core.truth_(inst_23455)){
var statearr_23476_23502 = state_23470__$1;
(statearr_23476_23502[(1)] = (8));

} else {
var statearr_23477_23503 = state_23470__$1;
(statearr_23477_23503[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23471 === (3))){
var inst_23468 = (state_23470[(2)]);
var state_23470__$1 = state_23470;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23470__$1,inst_23468);
} else {
if((state_val_23471 === (12))){
var state_23470__$1 = state_23470;
var statearr_23478_23504 = state_23470__$1;
(statearr_23478_23504[(2)] = null);

(statearr_23478_23504[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23471 === (2))){
var inst_23447 = (state_23470[(7)]);
var state_23470__$1 = state_23470;
if(cljs.core.truth_(inst_23447)){
var statearr_23479_23505 = state_23470__$1;
(statearr_23479_23505[(1)] = (4));

} else {
var statearr_23480_23506 = state_23470__$1;
(statearr_23480_23506[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23471 === (11))){
var inst_23461 = cljs.core.async.close_BANG_.call(null,ch);
var state_23470__$1 = state_23470;
var statearr_23481_23507 = state_23470__$1;
(statearr_23481_23507[(2)] = inst_23461);

(statearr_23481_23507[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23471 === (9))){
var state_23470__$1 = state_23470;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23482_23508 = state_23470__$1;
(statearr_23482_23508[(1)] = (11));

} else {
var statearr_23483_23509 = state_23470__$1;
(statearr_23483_23509[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23471 === (5))){
var inst_23447 = (state_23470[(7)]);
var state_23470__$1 = state_23470;
var statearr_23484_23510 = state_23470__$1;
(statearr_23484_23510[(2)] = inst_23447);

(statearr_23484_23510[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23471 === (10))){
var inst_23466 = (state_23470[(2)]);
var state_23470__$1 = state_23470;
var statearr_23485_23511 = state_23470__$1;
(statearr_23485_23511[(2)] = inst_23466);

(statearr_23485_23511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23471 === (8))){
var inst_23447 = (state_23470[(7)]);
var inst_23457 = cljs.core.next.call(null,inst_23447);
var inst_23447__$1 = inst_23457;
var state_23470__$1 = (function (){var statearr_23486 = state_23470;
(statearr_23486[(7)] = inst_23447__$1);

return statearr_23486;
})();
var statearr_23487_23512 = state_23470__$1;
(statearr_23487_23512[(2)] = null);

(statearr_23487_23512[(1)] = (2));


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
});})(c__22650__auto__))
;
return ((function (switch__22538__auto__,c__22650__auto__){
return (function() {
var cljs$core$async$state_machine__22539__auto__ = null;
var cljs$core$async$state_machine__22539__auto____0 = (function (){
var statearr_23491 = [null,null,null,null,null,null,null,null];
(statearr_23491[(0)] = cljs$core$async$state_machine__22539__auto__);

(statearr_23491[(1)] = (1));

return statearr_23491;
});
var cljs$core$async$state_machine__22539__auto____1 = (function (state_23470){
while(true){
var ret_value__22540__auto__ = (function (){try{while(true){
var result__22541__auto__ = switch__22538__auto__.call(null,state_23470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22541__auto__;
}
break;
}
}catch (e23492){if((e23492 instanceof Object)){
var ex__22542__auto__ = e23492;
var statearr_23493_23513 = state_23470;
(statearr_23493_23513[(5)] = ex__22542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23514 = state_23470;
state_23470 = G__23514;
continue;
} else {
return ret_value__22540__auto__;
}
break;
}
});
cljs$core$async$state_machine__22539__auto__ = function(state_23470){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22539__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22539__auto____1.call(this,state_23470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22539__auto____0;
cljs$core$async$state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22539__auto____1;
return cljs$core$async$state_machine__22539__auto__;
})()
;})(switch__22538__auto__,c__22650__auto__))
})();
var state__22652__auto__ = (function (){var statearr_23494 = f__22651__auto__.call(null);
(statearr_23494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22650__auto__);

return statearr_23494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22652__auto__);
});})(c__22650__auto__))
);

return c__22650__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async23736 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23736 = (function (mult,ch,cs,meta23737){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta23737 = meta23737;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23738,meta23737__$1){
var self__ = this;
var _23738__$1 = this;
return (new cljs.core.async.t_cljs$core$async23736(self__.mult,self__.ch,self__.cs,meta23737__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23736.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23738){
var self__ = this;
var _23738__$1 = this;
return self__.meta23737;
});})(cs))
;

cljs.core.async.t_cljs$core$async23736.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23736.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23736.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async23736.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23736.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23736.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23736.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23737","meta23737",2095395680,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23736.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23736.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23736";

cljs.core.async.t_cljs$core$async23736.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17439__auto__,writer__17440__auto__,opt__17441__auto__){
return cljs.core._write.call(null,writer__17440__auto__,"cljs.core.async/t_cljs$core$async23736");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async23736 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23736(mult__$1,ch__$1,cs__$1,meta23737){
return (new cljs.core.async.t_cljs$core$async23736(mult__$1,ch__$1,cs__$1,meta23737));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23736(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__22650__auto___23957 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22650__auto___23957,cs,m,dchan,dctr,done){
return (function (){
var f__22651__auto__ = (function (){var switch__22538__auto__ = ((function (c__22650__auto___23957,cs,m,dchan,dctr,done){
return (function (state_23869){
var state_val_23870 = (state_23869[(1)]);
if((state_val_23870 === (7))){
var inst_23865 = (state_23869[(2)]);
var state_23869__$1 = state_23869;
var statearr_23871_23958 = state_23869__$1;
(statearr_23871_23958[(2)] = inst_23865);

(statearr_23871_23958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23870 === (20))){
var inst_23770 = (state_23869[(7)]);
var inst_23780 = cljs.core.first.call(null,inst_23770);
var inst_23781 = cljs.core.nth.call(null,inst_23780,(0),null);
var inst_23782 = cljs.core.nth.call(null,inst_23780,(1),null);
var state_23869__$1 = (function (){var statearr_23872 = state_23869;
(statearr_23872[(8)] = inst_23781);

return statearr_23872;
})();
if(cljs.core.truth_(inst_23782)){
var statearr_23873_23959 = state_23869__$1;
(statearr_23873_23959[(1)] = (22));

} else {
var statearr_23874_23960 = state_23869__$1;
(statearr_23874_23960[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23870 === (27))){
var inst_23741 = (state_23869[(9)]);
var inst_23810 = (state_23869[(10)]);
var inst_23812 = (state_23869[(11)]);
var inst_23817 = (state_23869[(12)]);
var inst_23817__$1 = cljs.core._nth.call(null,inst_23810,inst_23812);
var inst_23818 = cljs.core.async.put_BANG_.call(null,inst_23817__$1,inst_23741,done);
var state_23869__$1 = (function (){var statearr_23875 = state_23869;
(statearr_23875[(12)] = inst_23817__$1);

return statearr_23875;
})();
if(cljs.core.truth_(inst_23818)){
var statearr_23876_23961 = state_23869__$1;
(statearr_23876_23961[(1)] = (30));

} else {
var statearr_23877_23962 = state_23869__$1;
(statearr_23877_23962[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23870 === (1))){
var state_23869__$1 = state_23869;
var statearr_23878_23963 = state_23869__$1;
(statearr_23878_23963[(2)] = null);

(statearr_23878_23963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23870 === (24))){
var inst_23770 = (state_23869[(7)]);
var inst_23787 = (state_23869[(2)]);
var inst_23788 = cljs.core.next.call(null,inst_23770);
var inst_23750 = inst_23788;
var inst_23751 = null;
var inst_23752 = (0);
var inst_23753 = (0);
var state_23869__$1 = (function (){var statearr_23879 = state_23869;
(statearr_23879[(13)] = inst_23787);

(statearr_23879[(14)] = inst_23750);

(statearr_23879[(15)] = inst_23753);

(statearr_23879[(16)] = inst_23751);

(statearr_23879[(17)] = inst_23752);

return statearr_23879;
})();
var statearr_23880_23964 = state_23869__$1;
(statearr_23880_23964[(2)] = null);

(statearr_23880_23964[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23870 === (39))){
var state_23869__$1 = state_23869;
var statearr_23884_23965 = state_23869__$1;
(statearr_23884_23965[(2)] = null);

(statearr_23884_23965[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23870 === (4))){
var inst_23741 = (state_23869[(9)]);
var inst_23741__$1 = (state_23869[(2)]);
var inst_23742 = (inst_23741__$1 == null);
var state_23869__$1 = (function (){var statearr_23885 = state_23869;
(statearr_23885[(9)] = inst_23741__$1);

return statearr_23885;
})();
if(cljs.core.truth_(inst_23742)){
var statearr_23886_23966 = state_23869__$1;
(statearr_23886_23966[(1)] = (5));

} else {
var statearr_23887_23967 = state_23869__$1;
(statearr_23887_23967[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23870 === (15))){
var inst_23750 = (state_23869[(14)]);
var inst_23753 = (state_23869[(15)]);
var inst_23751 = (state_23869[(16)]);
var inst_23752 = (state_23869[(17)]);
var inst_23766 = (state_23869[(2)]);
var inst_23767 = (inst_23753 + (1));
var tmp23881 = inst_23750;
var tmp23882 = inst_23751;
var tmp23883 = inst_23752;
var inst_23750__$1 = tmp23881;
var inst_23751__$1 = tmp23882;
var inst_23752__$1 = tmp23883;
var inst_23753__$1 = inst_23767;
var state_23869__$1 = (function (){var statearr_23888 = state_23869;
(statearr_23888[(18)] = inst_23766);

(statearr_23888[(14)] = inst_23750__$1);

(statearr_23888[(15)] = inst_23753__$1);

(statearr_23888[(16)] = inst_23751__$1);

(statearr_23888[(17)] = inst_23752__$1);

return statearr_23888;
})();
var statearr_23889_23968 = state_23869__$1;
(statearr_23889_23968[(2)] = null);

(statearr_23889_23968[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23870 === (21))){
var inst_23791 = (state_23869[(2)]);
var state_23869__$1 = state_23869;
var statearr_23893_23969 = state_23869__$1;
(statearr_23893_23969[(2)] = inst_23791);

(statearr_23893_23969[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23870 === (31))){
var inst_23817 = (state_23869[(12)]);
var inst_23821 = done.call(null,null);
var inst_23822 = cljs.core.async.untap_STAR_.call(null,m,inst_23817);
var state_23869__$1 = (function (){var statearr_23894 = state_23869;
(statearr_23894[(19)] = inst_23821);

return statearr_23894;
})();
var statearr_23895_23970 = state_23869__$1;
(statearr_23895_23970[(2)] = inst_23822);

(statearr_23895_23970[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23870 === (32))){
var inst_23810 = (state_23869[(10)]);
var inst_23812 = (state_23869[(11)]);
var inst_23811 = (state_23869[(20)]);
var inst_23809 = (state_23869[(21)]);
var inst_23824 = (state_23869[(2)]);
var inst_23825 = (inst_23812 + (1));
var tmp23890 = inst_23810;
var tmp23891 = inst_23811;
var tmp23892 = inst_23809;
var inst_23809__$1 = tmp23892;
var inst_23810__$1 = tmp23890;
var inst_23811__$1 = tmp23891;
var inst_23812__$1 = inst_23825;
var state_23869__$1 = (function (){var statearr_23896 = state_23869;
(statearr_23896[(22)] = inst_23824);

(statearr_23896[(10)] = inst_23810__$1);

(statearr_23896[(11)] = inst_23812__$1);

(statearr_23896[(20)] = inst_23811__$1);

(statearr_23896[(21)] = inst_23809__$1);

return statearr_23896;
})();
var statearr_23897_23971 = state_23869__$1;
(statearr_23897_23971[(2)] = null);

(statearr_23897_23971[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23870 === (40))){
var inst_23837 = (state_23869[(23)]);
var inst_23841 = done.call(null,null);
var inst_23842 = cljs.core.async.untap_STAR_.call(null,m,inst_23837);
var state_23869__$1 = (function (){var statearr_23898 = state_23869;
(statearr_23898[(24)] = inst_23841);

return statearr_23898;
})();
var statearr_23899_23972 = state_23869__$1;
(statearr_23899_23972[(2)] = inst_23842);

(statearr_23899_23972[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23870 === (33))){
var inst_23828 = (state_23869[(25)]);
var inst_23830 = cljs.core.chunked_seq_QMARK_.call(null,inst_23828);
var state_23869__$1 = state_23869;
if(inst_23830){
var statearr_23900_23973 = state_23869__$1;
(statearr_23900_23973[(1)] = (36));

} else {
var statearr_23901_23974 = state_23869__$1;
(statearr_23901_23974[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23870 === (13))){
var inst_23760 = (state_23869[(26)]);
var inst_23763 = cljs.core.async.close_BANG_.call(null,inst_23760);
var state_23869__$1 = state_23869;
var statearr_23902_23975 = state_23869__$1;
(statearr_23902_23975[(2)] = inst_23763);

(statearr_23902_23975[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23870 === (22))){
var inst_23781 = (state_23869[(8)]);
var inst_23784 = cljs.core.async.close_BANG_.call(null,inst_23781);
var state_23869__$1 = state_23869;
var statearr_23903_23976 = state_23869__$1;
(statearr_23903_23976[(2)] = inst_23784);

(statearr_23903_23976[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23870 === (36))){
var inst_23828 = (state_23869[(25)]);
var inst_23832 = cljs.core.chunk_first.call(null,inst_23828);
var inst_23833 = cljs.core.chunk_rest.call(null,inst_23828);
var inst_23834 = cljs.core.count.call(null,inst_23832);
var inst_23809 = inst_23833;
var inst_23810 = inst_23832;
var inst_23811 = inst_23834;
var inst_23812 = (0);
var state_23869__$1 = (function (){var statearr_23904 = state_23869;
(statearr_23904[(10)] = inst_23810);

(statearr_23904[(11)] = inst_23812);

(statearr_23904[(20)] = inst_23811);

(statearr_23904[(21)] = inst_23809);

return statearr_23904;
})();
var statearr_23905_23977 = state_23869__$1;
(statearr_23905_23977[(2)] = null);

(statearr_23905_23977[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23870 === (41))){
var inst_23828 = (state_23869[(25)]);
var inst_23844 = (state_23869[(2)]);
var inst_23845 = cljs.core.next.call(null,inst_23828);
var inst_23809 = inst_23845;
var inst_23810 = null;
var inst_23811 = (0);
var inst_23812 = (0);
var state_23869__$1 = (function (){var statearr_23906 = state_23869;
(statearr_23906[(10)] = inst_23810);

(statearr_23906[(11)] = inst_23812);

(statearr_23906[(20)] = inst_23811);

(statearr_23906[(27)] = inst_23844);

(statearr_23906[(21)] = inst_23809);

return statearr_23906;
})();
var statearr_23907_23978 = state_23869__$1;
(statearr_23907_23978[(2)] = null);

(statearr_23907_23978[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23870 === (43))){
var state_23869__$1 = state_23869;
var statearr_23908_23979 = state_23869__$1;
(statearr_23908_23979[(2)] = null);

(statearr_23908_23979[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23870 === (29))){
var inst_23853 = (state_23869[(2)]);
var state_23869__$1 = state_23869;
var statearr_23909_23980 = state_23869__$1;
(statearr_23909_23980[(2)] = inst_23853);

(statearr_23909_23980[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23870 === (44))){
var inst_23862 = (state_23869[(2)]);
var state_23869__$1 = (function (){var statearr_23910 = state_23869;
(statearr_23910[(28)] = inst_23862);

return statearr_23910;
})();
var statearr_23911_23981 = state_23869__$1;
(statearr_23911_23981[(2)] = null);

(statearr_23911_23981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23870 === (6))){
var inst_23801 = (state_23869[(29)]);
var inst_23800 = cljs.core.deref.call(null,cs);
var inst_23801__$1 = cljs.core.keys.call(null,inst_23800);
var inst_23802 = cljs.core.count.call(null,inst_23801__$1);
var inst_23803 = cljs.core.reset_BANG_.call(null,dctr,inst_23802);
var inst_23808 = cljs.core.seq.call(null,inst_23801__$1);
var inst_23809 = inst_23808;
var inst_23810 = null;
var inst_23811 = (0);
var inst_23812 = (0);
var state_23869__$1 = (function (){var statearr_23912 = state_23869;
(statearr_23912[(29)] = inst_23801__$1);

(statearr_23912[(30)] = inst_23803);

(statearr_23912[(10)] = inst_23810);

(statearr_23912[(11)] = inst_23812);

(statearr_23912[(20)] = inst_23811);

(statearr_23912[(21)] = inst_23809);

return statearr_23912;
})();
var statearr_23913_23982 = state_23869__$1;
(statearr_23913_23982[(2)] = null);

(statearr_23913_23982[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23870 === (28))){
var inst_23828 = (state_23869[(25)]);
var inst_23809 = (state_23869[(21)]);
var inst_23828__$1 = cljs.core.seq.call(null,inst_23809);
var state_23869__$1 = (function (){var statearr_23914 = state_23869;
(statearr_23914[(25)] = inst_23828__$1);

return statearr_23914;
})();
if(inst_23828__$1){
var statearr_23915_23983 = state_23869__$1;
(statearr_23915_23983[(1)] = (33));

} else {
var statearr_23916_23984 = state_23869__$1;
(statearr_23916_23984[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23870 === (25))){
var inst_23812 = (state_23869[(11)]);
var inst_23811 = (state_23869[(20)]);
var inst_23814 = (inst_23812 < inst_23811);
var inst_23815 = inst_23814;
var state_23869__$1 = state_23869;
if(cljs.core.truth_(inst_23815)){
var statearr_23917_23985 = state_23869__$1;
(statearr_23917_23985[(1)] = (27));

} else {
var statearr_23918_23986 = state_23869__$1;
(statearr_23918_23986[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23870 === (34))){
var state_23869__$1 = state_23869;
var statearr_23919_23987 = state_23869__$1;
(statearr_23919_23987[(2)] = null);

(statearr_23919_23987[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23870 === (17))){
var state_23869__$1 = state_23869;
var statearr_23920_23988 = state_23869__$1;
(statearr_23920_23988[(2)] = null);

(statearr_23920_23988[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23870 === (3))){
var inst_23867 = (state_23869[(2)]);
var state_23869__$1 = state_23869;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23869__$1,inst_23867);
} else {
if((state_val_23870 === (12))){
var inst_23796 = (state_23869[(2)]);
var state_23869__$1 = state_23869;
var statearr_23921_23989 = state_23869__$1;
(statearr_23921_23989[(2)] = inst_23796);

(statearr_23921_23989[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23870 === (2))){
var state_23869__$1 = state_23869;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23869__$1,(4),ch);
} else {
if((state_val_23870 === (23))){
var state_23869__$1 = state_23869;
var statearr_23922_23990 = state_23869__$1;
(statearr_23922_23990[(2)] = null);

(statearr_23922_23990[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23870 === (35))){
var inst_23851 = (state_23869[(2)]);
var state_23869__$1 = state_23869;
var statearr_23923_23991 = state_23869__$1;
(statearr_23923_23991[(2)] = inst_23851);

(statearr_23923_23991[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23870 === (19))){
var inst_23770 = (state_23869[(7)]);
var inst_23774 = cljs.core.chunk_first.call(null,inst_23770);
var inst_23775 = cljs.core.chunk_rest.call(null,inst_23770);
var inst_23776 = cljs.core.count.call(null,inst_23774);
var inst_23750 = inst_23775;
var inst_23751 = inst_23774;
var inst_23752 = inst_23776;
var inst_23753 = (0);
var state_23869__$1 = (function (){var statearr_23924 = state_23869;
(statearr_23924[(14)] = inst_23750);

(statearr_23924[(15)] = inst_23753);

(statearr_23924[(16)] = inst_23751);

(statearr_23924[(17)] = inst_23752);

return statearr_23924;
})();
var statearr_23925_23992 = state_23869__$1;
(statearr_23925_23992[(2)] = null);

(statearr_23925_23992[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23870 === (11))){
var inst_23750 = (state_23869[(14)]);
var inst_23770 = (state_23869[(7)]);
var inst_23770__$1 = cljs.core.seq.call(null,inst_23750);
var state_23869__$1 = (function (){var statearr_23926 = state_23869;
(statearr_23926[(7)] = inst_23770__$1);

return statearr_23926;
})();
if(inst_23770__$1){
var statearr_23927_23993 = state_23869__$1;
(statearr_23927_23993[(1)] = (16));

} else {
var statearr_23928_23994 = state_23869__$1;
(statearr_23928_23994[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23870 === (9))){
var inst_23798 = (state_23869[(2)]);
var state_23869__$1 = state_23869;
var statearr_23929_23995 = state_23869__$1;
(statearr_23929_23995[(2)] = inst_23798);

(statearr_23929_23995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23870 === (5))){
var inst_23748 = cljs.core.deref.call(null,cs);
var inst_23749 = cljs.core.seq.call(null,inst_23748);
var inst_23750 = inst_23749;
var inst_23751 = null;
var inst_23752 = (0);
var inst_23753 = (0);
var state_23869__$1 = (function (){var statearr_23930 = state_23869;
(statearr_23930[(14)] = inst_23750);

(statearr_23930[(15)] = inst_23753);

(statearr_23930[(16)] = inst_23751);

(statearr_23930[(17)] = inst_23752);

return statearr_23930;
})();
var statearr_23931_23996 = state_23869__$1;
(statearr_23931_23996[(2)] = null);

(statearr_23931_23996[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23870 === (14))){
var state_23869__$1 = state_23869;
var statearr_23932_23997 = state_23869__$1;
(statearr_23932_23997[(2)] = null);

(statearr_23932_23997[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23870 === (45))){
var inst_23859 = (state_23869[(2)]);
var state_23869__$1 = state_23869;
var statearr_23933_23998 = state_23869__$1;
(statearr_23933_23998[(2)] = inst_23859);

(statearr_23933_23998[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23870 === (26))){
var inst_23801 = (state_23869[(29)]);
var inst_23855 = (state_23869[(2)]);
var inst_23856 = cljs.core.seq.call(null,inst_23801);
var state_23869__$1 = (function (){var statearr_23934 = state_23869;
(statearr_23934[(31)] = inst_23855);

return statearr_23934;
})();
if(inst_23856){
var statearr_23935_23999 = state_23869__$1;
(statearr_23935_23999[(1)] = (42));

} else {
var statearr_23936_24000 = state_23869__$1;
(statearr_23936_24000[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23870 === (16))){
var inst_23770 = (state_23869[(7)]);
var inst_23772 = cljs.core.chunked_seq_QMARK_.call(null,inst_23770);
var state_23869__$1 = state_23869;
if(inst_23772){
var statearr_23937_24001 = state_23869__$1;
(statearr_23937_24001[(1)] = (19));

} else {
var statearr_23938_24002 = state_23869__$1;
(statearr_23938_24002[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23870 === (38))){
var inst_23848 = (state_23869[(2)]);
var state_23869__$1 = state_23869;
var statearr_23939_24003 = state_23869__$1;
(statearr_23939_24003[(2)] = inst_23848);

(statearr_23939_24003[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23870 === (30))){
var state_23869__$1 = state_23869;
var statearr_23940_24004 = state_23869__$1;
(statearr_23940_24004[(2)] = null);

(statearr_23940_24004[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23870 === (10))){
var inst_23753 = (state_23869[(15)]);
var inst_23751 = (state_23869[(16)]);
var inst_23759 = cljs.core._nth.call(null,inst_23751,inst_23753);
var inst_23760 = cljs.core.nth.call(null,inst_23759,(0),null);
var inst_23761 = cljs.core.nth.call(null,inst_23759,(1),null);
var state_23869__$1 = (function (){var statearr_23941 = state_23869;
(statearr_23941[(26)] = inst_23760);

return statearr_23941;
})();
if(cljs.core.truth_(inst_23761)){
var statearr_23942_24005 = state_23869__$1;
(statearr_23942_24005[(1)] = (13));

} else {
var statearr_23943_24006 = state_23869__$1;
(statearr_23943_24006[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23870 === (18))){
var inst_23794 = (state_23869[(2)]);
var state_23869__$1 = state_23869;
var statearr_23944_24007 = state_23869__$1;
(statearr_23944_24007[(2)] = inst_23794);

(statearr_23944_24007[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23870 === (42))){
var state_23869__$1 = state_23869;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23869__$1,(45),dchan);
} else {
if((state_val_23870 === (37))){
var inst_23741 = (state_23869[(9)]);
var inst_23837 = (state_23869[(23)]);
var inst_23828 = (state_23869[(25)]);
var inst_23837__$1 = cljs.core.first.call(null,inst_23828);
var inst_23838 = cljs.core.async.put_BANG_.call(null,inst_23837__$1,inst_23741,done);
var state_23869__$1 = (function (){var statearr_23945 = state_23869;
(statearr_23945[(23)] = inst_23837__$1);

return statearr_23945;
})();
if(cljs.core.truth_(inst_23838)){
var statearr_23946_24008 = state_23869__$1;
(statearr_23946_24008[(1)] = (39));

} else {
var statearr_23947_24009 = state_23869__$1;
(statearr_23947_24009[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23870 === (8))){
var inst_23753 = (state_23869[(15)]);
var inst_23752 = (state_23869[(17)]);
var inst_23755 = (inst_23753 < inst_23752);
var inst_23756 = inst_23755;
var state_23869__$1 = state_23869;
if(cljs.core.truth_(inst_23756)){
var statearr_23948_24010 = state_23869__$1;
(statearr_23948_24010[(1)] = (10));

} else {
var statearr_23949_24011 = state_23869__$1;
(statearr_23949_24011[(1)] = (11));

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
});})(c__22650__auto___23957,cs,m,dchan,dctr,done))
;
return ((function (switch__22538__auto__,c__22650__auto___23957,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22539__auto__ = null;
var cljs$core$async$mult_$_state_machine__22539__auto____0 = (function (){
var statearr_23953 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23953[(0)] = cljs$core$async$mult_$_state_machine__22539__auto__);

(statearr_23953[(1)] = (1));

return statearr_23953;
});
var cljs$core$async$mult_$_state_machine__22539__auto____1 = (function (state_23869){
while(true){
var ret_value__22540__auto__ = (function (){try{while(true){
var result__22541__auto__ = switch__22538__auto__.call(null,state_23869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22541__auto__;
}
break;
}
}catch (e23954){if((e23954 instanceof Object)){
var ex__22542__auto__ = e23954;
var statearr_23955_24012 = state_23869;
(statearr_23955_24012[(5)] = ex__22542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23954;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24013 = state_23869;
state_23869 = G__24013;
continue;
} else {
return ret_value__22540__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22539__auto__ = function(state_23869){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22539__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22539__auto____1.call(this,state_23869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22539__auto____0;
cljs$core$async$mult_$_state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22539__auto____1;
return cljs$core$async$mult_$_state_machine__22539__auto__;
})()
;})(switch__22538__auto__,c__22650__auto___23957,cs,m,dchan,dctr,done))
})();
var state__22652__auto__ = (function (){var statearr_23956 = f__22651__auto__.call(null);
(statearr_23956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22650__auto___23957);

return statearr_23956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22652__auto__);
});})(c__22650__auto___23957,cs,m,dchan,dctr,done))
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
var args24014 = [];
var len__17899__auto___24017 = arguments.length;
var i__17900__auto___24018 = (0);
while(true){
if((i__17900__auto___24018 < len__17899__auto___24017)){
args24014.push((arguments[i__17900__auto___24018]));

var G__24019 = (i__17900__auto___24018 + (1));
i__17900__auto___24018 = G__24019;
continue;
} else {
}
break;
}

var G__24016 = args24014.length;
switch (G__24016) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24014.length)].join('')));

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
var len__17899__auto___24031 = arguments.length;
var i__17900__auto___24032 = (0);
while(true){
if((i__17900__auto___24032 < len__17899__auto___24031)){
args__17906__auto__.push((arguments[i__17900__auto___24032]));

var G__24033 = (i__17900__auto___24032 + (1));
i__17900__auto___24032 = G__24033;
continue;
} else {
}
break;
}

var argseq__17907__auto__ = ((((3) < args__17906__auto__.length))?(new cljs.core.IndexedSeq(args__17906__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17907__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24025){
var map__24026 = p__24025;
var map__24026__$1 = ((((!((map__24026 == null)))?((((map__24026.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24026.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24026):map__24026);
var opts = map__24026__$1;
var statearr_24028_24034 = state;
(statearr_24028_24034[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__24026,map__24026__$1,opts){
return (function (val){
var statearr_24029_24035 = state;
(statearr_24029_24035[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24026,map__24026__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_24030_24036 = state;
(statearr_24030_24036[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24021){
var G__24022 = cljs.core.first.call(null,seq24021);
var seq24021__$1 = cljs.core.next.call(null,seq24021);
var G__24023 = cljs.core.first.call(null,seq24021__$1);
var seq24021__$2 = cljs.core.next.call(null,seq24021__$1);
var G__24024 = cljs.core.first.call(null,seq24021__$2);
var seq24021__$3 = cljs.core.next.call(null,seq24021__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24022,G__24023,G__24024,seq24021__$3);
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
if(typeof cljs.core.async.t_cljs$core$async24200 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24200 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24201){
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
this.meta24201 = meta24201;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24202,meta24201__$1){
var self__ = this;
var _24202__$1 = this;
return (new cljs.core.async.t_cljs$core$async24200(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24201__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24200.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24202){
var self__ = this;
var _24202__$1 = this;
return self__.meta24201;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24200.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24200.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24200.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async24200.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24200.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24200.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24200.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24200.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async24200.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24201","meta24201",132406301,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24200.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24200.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24200";

cljs.core.async.t_cljs$core$async24200.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17439__auto__,writer__17440__auto__,opt__17441__auto__){
return cljs.core._write.call(null,writer__17440__auto__,"cljs.core.async/t_cljs$core$async24200");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async24200 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24200(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24201){
return (new cljs.core.async.t_cljs$core$async24200(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24201));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24200(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22650__auto___24363 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22650__auto___24363,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22651__auto__ = (function (){var switch__22538__auto__ = ((function (c__22650__auto___24363,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24300){
var state_val_24301 = (state_24300[(1)]);
if((state_val_24301 === (7))){
var inst_24218 = (state_24300[(2)]);
var state_24300__$1 = state_24300;
var statearr_24302_24364 = state_24300__$1;
(statearr_24302_24364[(2)] = inst_24218);

(statearr_24302_24364[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24301 === (20))){
var inst_24230 = (state_24300[(7)]);
var state_24300__$1 = state_24300;
var statearr_24303_24365 = state_24300__$1;
(statearr_24303_24365[(2)] = inst_24230);

(statearr_24303_24365[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24301 === (27))){
var state_24300__$1 = state_24300;
var statearr_24304_24366 = state_24300__$1;
(statearr_24304_24366[(2)] = null);

(statearr_24304_24366[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24301 === (1))){
var inst_24206 = (state_24300[(8)]);
var inst_24206__$1 = calc_state.call(null);
var inst_24208 = (inst_24206__$1 == null);
var inst_24209 = cljs.core.not.call(null,inst_24208);
var state_24300__$1 = (function (){var statearr_24305 = state_24300;
(statearr_24305[(8)] = inst_24206__$1);

return statearr_24305;
})();
if(inst_24209){
var statearr_24306_24367 = state_24300__$1;
(statearr_24306_24367[(1)] = (2));

} else {
var statearr_24307_24368 = state_24300__$1;
(statearr_24307_24368[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24301 === (24))){
var inst_24274 = (state_24300[(9)]);
var inst_24260 = (state_24300[(10)]);
var inst_24253 = (state_24300[(11)]);
var inst_24274__$1 = inst_24253.call(null,inst_24260);
var state_24300__$1 = (function (){var statearr_24308 = state_24300;
(statearr_24308[(9)] = inst_24274__$1);

return statearr_24308;
})();
if(cljs.core.truth_(inst_24274__$1)){
var statearr_24309_24369 = state_24300__$1;
(statearr_24309_24369[(1)] = (29));

} else {
var statearr_24310_24370 = state_24300__$1;
(statearr_24310_24370[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24301 === (4))){
var inst_24221 = (state_24300[(2)]);
var state_24300__$1 = state_24300;
if(cljs.core.truth_(inst_24221)){
var statearr_24311_24371 = state_24300__$1;
(statearr_24311_24371[(1)] = (8));

} else {
var statearr_24312_24372 = state_24300__$1;
(statearr_24312_24372[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24301 === (15))){
var inst_24247 = (state_24300[(2)]);
var state_24300__$1 = state_24300;
if(cljs.core.truth_(inst_24247)){
var statearr_24313_24373 = state_24300__$1;
(statearr_24313_24373[(1)] = (19));

} else {
var statearr_24314_24374 = state_24300__$1;
(statearr_24314_24374[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24301 === (21))){
var inst_24252 = (state_24300[(12)]);
var inst_24252__$1 = (state_24300[(2)]);
var inst_24253 = cljs.core.get.call(null,inst_24252__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24254 = cljs.core.get.call(null,inst_24252__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24255 = cljs.core.get.call(null,inst_24252__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24300__$1 = (function (){var statearr_24315 = state_24300;
(statearr_24315[(12)] = inst_24252__$1);

(statearr_24315[(11)] = inst_24253);

(statearr_24315[(13)] = inst_24254);

return statearr_24315;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24300__$1,(22),inst_24255);
} else {
if((state_val_24301 === (31))){
var inst_24282 = (state_24300[(2)]);
var state_24300__$1 = state_24300;
if(cljs.core.truth_(inst_24282)){
var statearr_24316_24375 = state_24300__$1;
(statearr_24316_24375[(1)] = (32));

} else {
var statearr_24317_24376 = state_24300__$1;
(statearr_24317_24376[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24301 === (32))){
var inst_24259 = (state_24300[(14)]);
var state_24300__$1 = state_24300;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24300__$1,(35),out,inst_24259);
} else {
if((state_val_24301 === (33))){
var inst_24252 = (state_24300[(12)]);
var inst_24230 = inst_24252;
var state_24300__$1 = (function (){var statearr_24318 = state_24300;
(statearr_24318[(7)] = inst_24230);

return statearr_24318;
})();
var statearr_24319_24377 = state_24300__$1;
(statearr_24319_24377[(2)] = null);

(statearr_24319_24377[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24301 === (13))){
var inst_24230 = (state_24300[(7)]);
var inst_24237 = inst_24230.cljs$lang$protocol_mask$partition0$;
var inst_24238 = (inst_24237 & (64));
var inst_24239 = inst_24230.cljs$core$ISeq$;
var inst_24240 = (inst_24238) || (inst_24239);
var state_24300__$1 = state_24300;
if(cljs.core.truth_(inst_24240)){
var statearr_24320_24378 = state_24300__$1;
(statearr_24320_24378[(1)] = (16));

} else {
var statearr_24321_24379 = state_24300__$1;
(statearr_24321_24379[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24301 === (22))){
var inst_24259 = (state_24300[(14)]);
var inst_24260 = (state_24300[(10)]);
var inst_24258 = (state_24300[(2)]);
var inst_24259__$1 = cljs.core.nth.call(null,inst_24258,(0),null);
var inst_24260__$1 = cljs.core.nth.call(null,inst_24258,(1),null);
var inst_24261 = (inst_24259__$1 == null);
var inst_24262 = cljs.core._EQ_.call(null,inst_24260__$1,change);
var inst_24263 = (inst_24261) || (inst_24262);
var state_24300__$1 = (function (){var statearr_24322 = state_24300;
(statearr_24322[(14)] = inst_24259__$1);

(statearr_24322[(10)] = inst_24260__$1);

return statearr_24322;
})();
if(cljs.core.truth_(inst_24263)){
var statearr_24323_24380 = state_24300__$1;
(statearr_24323_24380[(1)] = (23));

} else {
var statearr_24324_24381 = state_24300__$1;
(statearr_24324_24381[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24301 === (36))){
var inst_24252 = (state_24300[(12)]);
var inst_24230 = inst_24252;
var state_24300__$1 = (function (){var statearr_24325 = state_24300;
(statearr_24325[(7)] = inst_24230);

return statearr_24325;
})();
var statearr_24326_24382 = state_24300__$1;
(statearr_24326_24382[(2)] = null);

(statearr_24326_24382[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24301 === (29))){
var inst_24274 = (state_24300[(9)]);
var state_24300__$1 = state_24300;
var statearr_24327_24383 = state_24300__$1;
(statearr_24327_24383[(2)] = inst_24274);

(statearr_24327_24383[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24301 === (6))){
var state_24300__$1 = state_24300;
var statearr_24328_24384 = state_24300__$1;
(statearr_24328_24384[(2)] = false);

(statearr_24328_24384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24301 === (28))){
var inst_24270 = (state_24300[(2)]);
var inst_24271 = calc_state.call(null);
var inst_24230 = inst_24271;
var state_24300__$1 = (function (){var statearr_24329 = state_24300;
(statearr_24329[(7)] = inst_24230);

(statearr_24329[(15)] = inst_24270);

return statearr_24329;
})();
var statearr_24330_24385 = state_24300__$1;
(statearr_24330_24385[(2)] = null);

(statearr_24330_24385[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24301 === (25))){
var inst_24296 = (state_24300[(2)]);
var state_24300__$1 = state_24300;
var statearr_24331_24386 = state_24300__$1;
(statearr_24331_24386[(2)] = inst_24296);

(statearr_24331_24386[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24301 === (34))){
var inst_24294 = (state_24300[(2)]);
var state_24300__$1 = state_24300;
var statearr_24332_24387 = state_24300__$1;
(statearr_24332_24387[(2)] = inst_24294);

(statearr_24332_24387[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24301 === (17))){
var state_24300__$1 = state_24300;
var statearr_24333_24388 = state_24300__$1;
(statearr_24333_24388[(2)] = false);

(statearr_24333_24388[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24301 === (3))){
var state_24300__$1 = state_24300;
var statearr_24334_24389 = state_24300__$1;
(statearr_24334_24389[(2)] = false);

(statearr_24334_24389[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24301 === (12))){
var inst_24298 = (state_24300[(2)]);
var state_24300__$1 = state_24300;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24300__$1,inst_24298);
} else {
if((state_val_24301 === (2))){
var inst_24206 = (state_24300[(8)]);
var inst_24211 = inst_24206.cljs$lang$protocol_mask$partition0$;
var inst_24212 = (inst_24211 & (64));
var inst_24213 = inst_24206.cljs$core$ISeq$;
var inst_24214 = (inst_24212) || (inst_24213);
var state_24300__$1 = state_24300;
if(cljs.core.truth_(inst_24214)){
var statearr_24335_24390 = state_24300__$1;
(statearr_24335_24390[(1)] = (5));

} else {
var statearr_24336_24391 = state_24300__$1;
(statearr_24336_24391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24301 === (23))){
var inst_24259 = (state_24300[(14)]);
var inst_24265 = (inst_24259 == null);
var state_24300__$1 = state_24300;
if(cljs.core.truth_(inst_24265)){
var statearr_24337_24392 = state_24300__$1;
(statearr_24337_24392[(1)] = (26));

} else {
var statearr_24338_24393 = state_24300__$1;
(statearr_24338_24393[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24301 === (35))){
var inst_24285 = (state_24300[(2)]);
var state_24300__$1 = state_24300;
if(cljs.core.truth_(inst_24285)){
var statearr_24339_24394 = state_24300__$1;
(statearr_24339_24394[(1)] = (36));

} else {
var statearr_24340_24395 = state_24300__$1;
(statearr_24340_24395[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24301 === (19))){
var inst_24230 = (state_24300[(7)]);
var inst_24249 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24230);
var state_24300__$1 = state_24300;
var statearr_24341_24396 = state_24300__$1;
(statearr_24341_24396[(2)] = inst_24249);

(statearr_24341_24396[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24301 === (11))){
var inst_24230 = (state_24300[(7)]);
var inst_24234 = (inst_24230 == null);
var inst_24235 = cljs.core.not.call(null,inst_24234);
var state_24300__$1 = state_24300;
if(inst_24235){
var statearr_24342_24397 = state_24300__$1;
(statearr_24342_24397[(1)] = (13));

} else {
var statearr_24343_24398 = state_24300__$1;
(statearr_24343_24398[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24301 === (9))){
var inst_24206 = (state_24300[(8)]);
var state_24300__$1 = state_24300;
var statearr_24344_24399 = state_24300__$1;
(statearr_24344_24399[(2)] = inst_24206);

(statearr_24344_24399[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24301 === (5))){
var state_24300__$1 = state_24300;
var statearr_24345_24400 = state_24300__$1;
(statearr_24345_24400[(2)] = true);

(statearr_24345_24400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24301 === (14))){
var state_24300__$1 = state_24300;
var statearr_24346_24401 = state_24300__$1;
(statearr_24346_24401[(2)] = false);

(statearr_24346_24401[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24301 === (26))){
var inst_24260 = (state_24300[(10)]);
var inst_24267 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24260);
var state_24300__$1 = state_24300;
var statearr_24347_24402 = state_24300__$1;
(statearr_24347_24402[(2)] = inst_24267);

(statearr_24347_24402[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24301 === (16))){
var state_24300__$1 = state_24300;
var statearr_24348_24403 = state_24300__$1;
(statearr_24348_24403[(2)] = true);

(statearr_24348_24403[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24301 === (38))){
var inst_24290 = (state_24300[(2)]);
var state_24300__$1 = state_24300;
var statearr_24349_24404 = state_24300__$1;
(statearr_24349_24404[(2)] = inst_24290);

(statearr_24349_24404[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24301 === (30))){
var inst_24260 = (state_24300[(10)]);
var inst_24253 = (state_24300[(11)]);
var inst_24254 = (state_24300[(13)]);
var inst_24277 = cljs.core.empty_QMARK_.call(null,inst_24253);
var inst_24278 = inst_24254.call(null,inst_24260);
var inst_24279 = cljs.core.not.call(null,inst_24278);
var inst_24280 = (inst_24277) && (inst_24279);
var state_24300__$1 = state_24300;
var statearr_24350_24405 = state_24300__$1;
(statearr_24350_24405[(2)] = inst_24280);

(statearr_24350_24405[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24301 === (10))){
var inst_24206 = (state_24300[(8)]);
var inst_24226 = (state_24300[(2)]);
var inst_24227 = cljs.core.get.call(null,inst_24226,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24228 = cljs.core.get.call(null,inst_24226,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24229 = cljs.core.get.call(null,inst_24226,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24230 = inst_24206;
var state_24300__$1 = (function (){var statearr_24351 = state_24300;
(statearr_24351[(16)] = inst_24227);

(statearr_24351[(17)] = inst_24228);

(statearr_24351[(7)] = inst_24230);

(statearr_24351[(18)] = inst_24229);

return statearr_24351;
})();
var statearr_24352_24406 = state_24300__$1;
(statearr_24352_24406[(2)] = null);

(statearr_24352_24406[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24301 === (18))){
var inst_24244 = (state_24300[(2)]);
var state_24300__$1 = state_24300;
var statearr_24353_24407 = state_24300__$1;
(statearr_24353_24407[(2)] = inst_24244);

(statearr_24353_24407[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24301 === (37))){
var state_24300__$1 = state_24300;
var statearr_24354_24408 = state_24300__$1;
(statearr_24354_24408[(2)] = null);

(statearr_24354_24408[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24301 === (8))){
var inst_24206 = (state_24300[(8)]);
var inst_24223 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24206);
var state_24300__$1 = state_24300;
var statearr_24355_24409 = state_24300__$1;
(statearr_24355_24409[(2)] = inst_24223);

(statearr_24355_24409[(1)] = (10));


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
});})(c__22650__auto___24363,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22538__auto__,c__22650__auto___24363,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22539__auto__ = null;
var cljs$core$async$mix_$_state_machine__22539__auto____0 = (function (){
var statearr_24359 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24359[(0)] = cljs$core$async$mix_$_state_machine__22539__auto__);

(statearr_24359[(1)] = (1));

return statearr_24359;
});
var cljs$core$async$mix_$_state_machine__22539__auto____1 = (function (state_24300){
while(true){
var ret_value__22540__auto__ = (function (){try{while(true){
var result__22541__auto__ = switch__22538__auto__.call(null,state_24300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22541__auto__;
}
break;
}
}catch (e24360){if((e24360 instanceof Object)){
var ex__22542__auto__ = e24360;
var statearr_24361_24410 = state_24300;
(statearr_24361_24410[(5)] = ex__22542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24411 = state_24300;
state_24300 = G__24411;
continue;
} else {
return ret_value__22540__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22539__auto__ = function(state_24300){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22539__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22539__auto____1.call(this,state_24300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22539__auto____0;
cljs$core$async$mix_$_state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22539__auto____1;
return cljs$core$async$mix_$_state_machine__22539__auto__;
})()
;})(switch__22538__auto__,c__22650__auto___24363,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22652__auto__ = (function (){var statearr_24362 = f__22651__auto__.call(null);
(statearr_24362[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22650__auto___24363);

return statearr_24362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22652__auto__);
});})(c__22650__auto___24363,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args24412 = [];
var len__17899__auto___24415 = arguments.length;
var i__17900__auto___24416 = (0);
while(true){
if((i__17900__auto___24416 < len__17899__auto___24415)){
args24412.push((arguments[i__17900__auto___24416]));

var G__24417 = (i__17900__auto___24416 + (1));
i__17900__auto___24416 = G__24417;
continue;
} else {
}
break;
}

var G__24414 = args24412.length;
switch (G__24414) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24412.length)].join('')));

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
var args24420 = [];
var len__17899__auto___24545 = arguments.length;
var i__17900__auto___24546 = (0);
while(true){
if((i__17900__auto___24546 < len__17899__auto___24545)){
args24420.push((arguments[i__17900__auto___24546]));

var G__24547 = (i__17900__auto___24546 + (1));
i__17900__auto___24546 = G__24547;
continue;
} else {
}
break;
}

var G__24422 = args24420.length;
switch (G__24422) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24420.length)].join('')));

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
return (function (p1__24419_SHARP_){
if(cljs.core.truth_(p1__24419_SHARP_.call(null,topic))){
return p1__24419_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24419_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16841__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async24423 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24423 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24424){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24424 = meta24424;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24423.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24425,meta24424__$1){
var self__ = this;
var _24425__$1 = this;
return (new cljs.core.async.t_cljs$core$async24423(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24424__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24423.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24425){
var self__ = this;
var _24425__$1 = this;
return self__.meta24424;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24423.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24423.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24423.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async24423.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24423.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async24423.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24423.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24423.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24424","meta24424",1847650562,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24423.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24423.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24423";

cljs.core.async.t_cljs$core$async24423.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17439__auto__,writer__17440__auto__,opt__17441__auto__){
return cljs.core._write.call(null,writer__17440__auto__,"cljs.core.async/t_cljs$core$async24423");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async24423 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24423(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24424){
return (new cljs.core.async.t_cljs$core$async24423(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24424));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24423(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22650__auto___24549 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22650__auto___24549,mults,ensure_mult,p){
return (function (){
var f__22651__auto__ = (function (){var switch__22538__auto__ = ((function (c__22650__auto___24549,mults,ensure_mult,p){
return (function (state_24497){
var state_val_24498 = (state_24497[(1)]);
if((state_val_24498 === (7))){
var inst_24493 = (state_24497[(2)]);
var state_24497__$1 = state_24497;
var statearr_24499_24550 = state_24497__$1;
(statearr_24499_24550[(2)] = inst_24493);

(statearr_24499_24550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24498 === (20))){
var state_24497__$1 = state_24497;
var statearr_24500_24551 = state_24497__$1;
(statearr_24500_24551[(2)] = null);

(statearr_24500_24551[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24498 === (1))){
var state_24497__$1 = state_24497;
var statearr_24501_24552 = state_24497__$1;
(statearr_24501_24552[(2)] = null);

(statearr_24501_24552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24498 === (24))){
var inst_24476 = (state_24497[(7)]);
var inst_24485 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24476);
var state_24497__$1 = state_24497;
var statearr_24502_24553 = state_24497__$1;
(statearr_24502_24553[(2)] = inst_24485);

(statearr_24502_24553[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24498 === (4))){
var inst_24428 = (state_24497[(8)]);
var inst_24428__$1 = (state_24497[(2)]);
var inst_24429 = (inst_24428__$1 == null);
var state_24497__$1 = (function (){var statearr_24503 = state_24497;
(statearr_24503[(8)] = inst_24428__$1);

return statearr_24503;
})();
if(cljs.core.truth_(inst_24429)){
var statearr_24504_24554 = state_24497__$1;
(statearr_24504_24554[(1)] = (5));

} else {
var statearr_24505_24555 = state_24497__$1;
(statearr_24505_24555[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24498 === (15))){
var inst_24470 = (state_24497[(2)]);
var state_24497__$1 = state_24497;
var statearr_24506_24556 = state_24497__$1;
(statearr_24506_24556[(2)] = inst_24470);

(statearr_24506_24556[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24498 === (21))){
var inst_24490 = (state_24497[(2)]);
var state_24497__$1 = (function (){var statearr_24507 = state_24497;
(statearr_24507[(9)] = inst_24490);

return statearr_24507;
})();
var statearr_24508_24557 = state_24497__$1;
(statearr_24508_24557[(2)] = null);

(statearr_24508_24557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24498 === (13))){
var inst_24452 = (state_24497[(10)]);
var inst_24454 = cljs.core.chunked_seq_QMARK_.call(null,inst_24452);
var state_24497__$1 = state_24497;
if(inst_24454){
var statearr_24509_24558 = state_24497__$1;
(statearr_24509_24558[(1)] = (16));

} else {
var statearr_24510_24559 = state_24497__$1;
(statearr_24510_24559[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24498 === (22))){
var inst_24482 = (state_24497[(2)]);
var state_24497__$1 = state_24497;
if(cljs.core.truth_(inst_24482)){
var statearr_24511_24560 = state_24497__$1;
(statearr_24511_24560[(1)] = (23));

} else {
var statearr_24512_24561 = state_24497__$1;
(statearr_24512_24561[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24498 === (6))){
var inst_24428 = (state_24497[(8)]);
var inst_24476 = (state_24497[(7)]);
var inst_24478 = (state_24497[(11)]);
var inst_24476__$1 = topic_fn.call(null,inst_24428);
var inst_24477 = cljs.core.deref.call(null,mults);
var inst_24478__$1 = cljs.core.get.call(null,inst_24477,inst_24476__$1);
var state_24497__$1 = (function (){var statearr_24513 = state_24497;
(statearr_24513[(7)] = inst_24476__$1);

(statearr_24513[(11)] = inst_24478__$1);

return statearr_24513;
})();
if(cljs.core.truth_(inst_24478__$1)){
var statearr_24514_24562 = state_24497__$1;
(statearr_24514_24562[(1)] = (19));

} else {
var statearr_24515_24563 = state_24497__$1;
(statearr_24515_24563[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24498 === (25))){
var inst_24487 = (state_24497[(2)]);
var state_24497__$1 = state_24497;
var statearr_24516_24564 = state_24497__$1;
(statearr_24516_24564[(2)] = inst_24487);

(statearr_24516_24564[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24498 === (17))){
var inst_24452 = (state_24497[(10)]);
var inst_24461 = cljs.core.first.call(null,inst_24452);
var inst_24462 = cljs.core.async.muxch_STAR_.call(null,inst_24461);
var inst_24463 = cljs.core.async.close_BANG_.call(null,inst_24462);
var inst_24464 = cljs.core.next.call(null,inst_24452);
var inst_24438 = inst_24464;
var inst_24439 = null;
var inst_24440 = (0);
var inst_24441 = (0);
var state_24497__$1 = (function (){var statearr_24517 = state_24497;
(statearr_24517[(12)] = inst_24441);

(statearr_24517[(13)] = inst_24439);

(statearr_24517[(14)] = inst_24463);

(statearr_24517[(15)] = inst_24440);

(statearr_24517[(16)] = inst_24438);

return statearr_24517;
})();
var statearr_24518_24565 = state_24497__$1;
(statearr_24518_24565[(2)] = null);

(statearr_24518_24565[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24498 === (3))){
var inst_24495 = (state_24497[(2)]);
var state_24497__$1 = state_24497;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24497__$1,inst_24495);
} else {
if((state_val_24498 === (12))){
var inst_24472 = (state_24497[(2)]);
var state_24497__$1 = state_24497;
var statearr_24519_24566 = state_24497__$1;
(statearr_24519_24566[(2)] = inst_24472);

(statearr_24519_24566[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24498 === (2))){
var state_24497__$1 = state_24497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24497__$1,(4),ch);
} else {
if((state_val_24498 === (23))){
var state_24497__$1 = state_24497;
var statearr_24520_24567 = state_24497__$1;
(statearr_24520_24567[(2)] = null);

(statearr_24520_24567[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24498 === (19))){
var inst_24428 = (state_24497[(8)]);
var inst_24478 = (state_24497[(11)]);
var inst_24480 = cljs.core.async.muxch_STAR_.call(null,inst_24478);
var state_24497__$1 = state_24497;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24497__$1,(22),inst_24480,inst_24428);
} else {
if((state_val_24498 === (11))){
var inst_24452 = (state_24497[(10)]);
var inst_24438 = (state_24497[(16)]);
var inst_24452__$1 = cljs.core.seq.call(null,inst_24438);
var state_24497__$1 = (function (){var statearr_24521 = state_24497;
(statearr_24521[(10)] = inst_24452__$1);

return statearr_24521;
})();
if(inst_24452__$1){
var statearr_24522_24568 = state_24497__$1;
(statearr_24522_24568[(1)] = (13));

} else {
var statearr_24523_24569 = state_24497__$1;
(statearr_24523_24569[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24498 === (9))){
var inst_24474 = (state_24497[(2)]);
var state_24497__$1 = state_24497;
var statearr_24524_24570 = state_24497__$1;
(statearr_24524_24570[(2)] = inst_24474);

(statearr_24524_24570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24498 === (5))){
var inst_24435 = cljs.core.deref.call(null,mults);
var inst_24436 = cljs.core.vals.call(null,inst_24435);
var inst_24437 = cljs.core.seq.call(null,inst_24436);
var inst_24438 = inst_24437;
var inst_24439 = null;
var inst_24440 = (0);
var inst_24441 = (0);
var state_24497__$1 = (function (){var statearr_24525 = state_24497;
(statearr_24525[(12)] = inst_24441);

(statearr_24525[(13)] = inst_24439);

(statearr_24525[(15)] = inst_24440);

(statearr_24525[(16)] = inst_24438);

return statearr_24525;
})();
var statearr_24526_24571 = state_24497__$1;
(statearr_24526_24571[(2)] = null);

(statearr_24526_24571[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24498 === (14))){
var state_24497__$1 = state_24497;
var statearr_24530_24572 = state_24497__$1;
(statearr_24530_24572[(2)] = null);

(statearr_24530_24572[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24498 === (16))){
var inst_24452 = (state_24497[(10)]);
var inst_24456 = cljs.core.chunk_first.call(null,inst_24452);
var inst_24457 = cljs.core.chunk_rest.call(null,inst_24452);
var inst_24458 = cljs.core.count.call(null,inst_24456);
var inst_24438 = inst_24457;
var inst_24439 = inst_24456;
var inst_24440 = inst_24458;
var inst_24441 = (0);
var state_24497__$1 = (function (){var statearr_24531 = state_24497;
(statearr_24531[(12)] = inst_24441);

(statearr_24531[(13)] = inst_24439);

(statearr_24531[(15)] = inst_24440);

(statearr_24531[(16)] = inst_24438);

return statearr_24531;
})();
var statearr_24532_24573 = state_24497__$1;
(statearr_24532_24573[(2)] = null);

(statearr_24532_24573[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24498 === (10))){
var inst_24441 = (state_24497[(12)]);
var inst_24439 = (state_24497[(13)]);
var inst_24440 = (state_24497[(15)]);
var inst_24438 = (state_24497[(16)]);
var inst_24446 = cljs.core._nth.call(null,inst_24439,inst_24441);
var inst_24447 = cljs.core.async.muxch_STAR_.call(null,inst_24446);
var inst_24448 = cljs.core.async.close_BANG_.call(null,inst_24447);
var inst_24449 = (inst_24441 + (1));
var tmp24527 = inst_24439;
var tmp24528 = inst_24440;
var tmp24529 = inst_24438;
var inst_24438__$1 = tmp24529;
var inst_24439__$1 = tmp24527;
var inst_24440__$1 = tmp24528;
var inst_24441__$1 = inst_24449;
var state_24497__$1 = (function (){var statearr_24533 = state_24497;
(statearr_24533[(12)] = inst_24441__$1);

(statearr_24533[(13)] = inst_24439__$1);

(statearr_24533[(15)] = inst_24440__$1);

(statearr_24533[(17)] = inst_24448);

(statearr_24533[(16)] = inst_24438__$1);

return statearr_24533;
})();
var statearr_24534_24574 = state_24497__$1;
(statearr_24534_24574[(2)] = null);

(statearr_24534_24574[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24498 === (18))){
var inst_24467 = (state_24497[(2)]);
var state_24497__$1 = state_24497;
var statearr_24535_24575 = state_24497__$1;
(statearr_24535_24575[(2)] = inst_24467);

(statearr_24535_24575[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24498 === (8))){
var inst_24441 = (state_24497[(12)]);
var inst_24440 = (state_24497[(15)]);
var inst_24443 = (inst_24441 < inst_24440);
var inst_24444 = inst_24443;
var state_24497__$1 = state_24497;
if(cljs.core.truth_(inst_24444)){
var statearr_24536_24576 = state_24497__$1;
(statearr_24536_24576[(1)] = (10));

} else {
var statearr_24537_24577 = state_24497__$1;
(statearr_24537_24577[(1)] = (11));

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
});})(c__22650__auto___24549,mults,ensure_mult,p))
;
return ((function (switch__22538__auto__,c__22650__auto___24549,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22539__auto__ = null;
var cljs$core$async$state_machine__22539__auto____0 = (function (){
var statearr_24541 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24541[(0)] = cljs$core$async$state_machine__22539__auto__);

(statearr_24541[(1)] = (1));

return statearr_24541;
});
var cljs$core$async$state_machine__22539__auto____1 = (function (state_24497){
while(true){
var ret_value__22540__auto__ = (function (){try{while(true){
var result__22541__auto__ = switch__22538__auto__.call(null,state_24497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22541__auto__;
}
break;
}
}catch (e24542){if((e24542 instanceof Object)){
var ex__22542__auto__ = e24542;
var statearr_24543_24578 = state_24497;
(statearr_24543_24578[(5)] = ex__22542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24579 = state_24497;
state_24497 = G__24579;
continue;
} else {
return ret_value__22540__auto__;
}
break;
}
});
cljs$core$async$state_machine__22539__auto__ = function(state_24497){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22539__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22539__auto____1.call(this,state_24497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22539__auto____0;
cljs$core$async$state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22539__auto____1;
return cljs$core$async$state_machine__22539__auto__;
})()
;})(switch__22538__auto__,c__22650__auto___24549,mults,ensure_mult,p))
})();
var state__22652__auto__ = (function (){var statearr_24544 = f__22651__auto__.call(null);
(statearr_24544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22650__auto___24549);

return statearr_24544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22652__auto__);
});})(c__22650__auto___24549,mults,ensure_mult,p))
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
var args24580 = [];
var len__17899__auto___24583 = arguments.length;
var i__17900__auto___24584 = (0);
while(true){
if((i__17900__auto___24584 < len__17899__auto___24583)){
args24580.push((arguments[i__17900__auto___24584]));

var G__24585 = (i__17900__auto___24584 + (1));
i__17900__auto___24584 = G__24585;
continue;
} else {
}
break;
}

var G__24582 = args24580.length;
switch (G__24582) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24580.length)].join('')));

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
var args24587 = [];
var len__17899__auto___24590 = arguments.length;
var i__17900__auto___24591 = (0);
while(true){
if((i__17900__auto___24591 < len__17899__auto___24590)){
args24587.push((arguments[i__17900__auto___24591]));

var G__24592 = (i__17900__auto___24591 + (1));
i__17900__auto___24591 = G__24592;
continue;
} else {
}
break;
}

var G__24589 = args24587.length;
switch (G__24589) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24587.length)].join('')));

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
var args24594 = [];
var len__17899__auto___24665 = arguments.length;
var i__17900__auto___24666 = (0);
while(true){
if((i__17900__auto___24666 < len__17899__auto___24665)){
args24594.push((arguments[i__17900__auto___24666]));

var G__24667 = (i__17900__auto___24666 + (1));
i__17900__auto___24666 = G__24667;
continue;
} else {
}
break;
}

var G__24596 = args24594.length;
switch (G__24596) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24594.length)].join('')));

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
var c__22650__auto___24669 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22650__auto___24669,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22651__auto__ = (function (){var switch__22538__auto__ = ((function (c__22650__auto___24669,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24635){
var state_val_24636 = (state_24635[(1)]);
if((state_val_24636 === (7))){
var state_24635__$1 = state_24635;
var statearr_24637_24670 = state_24635__$1;
(statearr_24637_24670[(2)] = null);

(statearr_24637_24670[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (1))){
var state_24635__$1 = state_24635;
var statearr_24638_24671 = state_24635__$1;
(statearr_24638_24671[(2)] = null);

(statearr_24638_24671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (4))){
var inst_24599 = (state_24635[(7)]);
var inst_24601 = (inst_24599 < cnt);
var state_24635__$1 = state_24635;
if(cljs.core.truth_(inst_24601)){
var statearr_24639_24672 = state_24635__$1;
(statearr_24639_24672[(1)] = (6));

} else {
var statearr_24640_24673 = state_24635__$1;
(statearr_24640_24673[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (15))){
var inst_24631 = (state_24635[(2)]);
var state_24635__$1 = state_24635;
var statearr_24641_24674 = state_24635__$1;
(statearr_24641_24674[(2)] = inst_24631);

(statearr_24641_24674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (13))){
var inst_24624 = cljs.core.async.close_BANG_.call(null,out);
var state_24635__$1 = state_24635;
var statearr_24642_24675 = state_24635__$1;
(statearr_24642_24675[(2)] = inst_24624);

(statearr_24642_24675[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (6))){
var state_24635__$1 = state_24635;
var statearr_24643_24676 = state_24635__$1;
(statearr_24643_24676[(2)] = null);

(statearr_24643_24676[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (3))){
var inst_24633 = (state_24635[(2)]);
var state_24635__$1 = state_24635;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24635__$1,inst_24633);
} else {
if((state_val_24636 === (12))){
var inst_24621 = (state_24635[(8)]);
var inst_24621__$1 = (state_24635[(2)]);
var inst_24622 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24621__$1);
var state_24635__$1 = (function (){var statearr_24644 = state_24635;
(statearr_24644[(8)] = inst_24621__$1);

return statearr_24644;
})();
if(cljs.core.truth_(inst_24622)){
var statearr_24645_24677 = state_24635__$1;
(statearr_24645_24677[(1)] = (13));

} else {
var statearr_24646_24678 = state_24635__$1;
(statearr_24646_24678[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (2))){
var inst_24598 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24599 = (0);
var state_24635__$1 = (function (){var statearr_24647 = state_24635;
(statearr_24647[(9)] = inst_24598);

(statearr_24647[(7)] = inst_24599);

return statearr_24647;
})();
var statearr_24648_24679 = state_24635__$1;
(statearr_24648_24679[(2)] = null);

(statearr_24648_24679[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (11))){
var inst_24599 = (state_24635[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24635,(10),Object,null,(9));
var inst_24608 = chs__$1.call(null,inst_24599);
var inst_24609 = done.call(null,inst_24599);
var inst_24610 = cljs.core.async.take_BANG_.call(null,inst_24608,inst_24609);
var state_24635__$1 = state_24635;
var statearr_24649_24680 = state_24635__$1;
(statearr_24649_24680[(2)] = inst_24610);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24635__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (9))){
var inst_24599 = (state_24635[(7)]);
var inst_24612 = (state_24635[(2)]);
var inst_24613 = (inst_24599 + (1));
var inst_24599__$1 = inst_24613;
var state_24635__$1 = (function (){var statearr_24650 = state_24635;
(statearr_24650[(10)] = inst_24612);

(statearr_24650[(7)] = inst_24599__$1);

return statearr_24650;
})();
var statearr_24651_24681 = state_24635__$1;
(statearr_24651_24681[(2)] = null);

(statearr_24651_24681[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (5))){
var inst_24619 = (state_24635[(2)]);
var state_24635__$1 = (function (){var statearr_24652 = state_24635;
(statearr_24652[(11)] = inst_24619);

return statearr_24652;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24635__$1,(12),dchan);
} else {
if((state_val_24636 === (14))){
var inst_24621 = (state_24635[(8)]);
var inst_24626 = cljs.core.apply.call(null,f,inst_24621);
var state_24635__$1 = state_24635;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24635__$1,(16),out,inst_24626);
} else {
if((state_val_24636 === (16))){
var inst_24628 = (state_24635[(2)]);
var state_24635__$1 = (function (){var statearr_24653 = state_24635;
(statearr_24653[(12)] = inst_24628);

return statearr_24653;
})();
var statearr_24654_24682 = state_24635__$1;
(statearr_24654_24682[(2)] = null);

(statearr_24654_24682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (10))){
var inst_24603 = (state_24635[(2)]);
var inst_24604 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24635__$1 = (function (){var statearr_24655 = state_24635;
(statearr_24655[(13)] = inst_24603);

return statearr_24655;
})();
var statearr_24656_24683 = state_24635__$1;
(statearr_24656_24683[(2)] = inst_24604);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24635__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (8))){
var inst_24617 = (state_24635[(2)]);
var state_24635__$1 = state_24635;
var statearr_24657_24684 = state_24635__$1;
(statearr_24657_24684[(2)] = inst_24617);

(statearr_24657_24684[(1)] = (5));


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
});})(c__22650__auto___24669,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22538__auto__,c__22650__auto___24669,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22539__auto__ = null;
var cljs$core$async$state_machine__22539__auto____0 = (function (){
var statearr_24661 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24661[(0)] = cljs$core$async$state_machine__22539__auto__);

(statearr_24661[(1)] = (1));

return statearr_24661;
});
var cljs$core$async$state_machine__22539__auto____1 = (function (state_24635){
while(true){
var ret_value__22540__auto__ = (function (){try{while(true){
var result__22541__auto__ = switch__22538__auto__.call(null,state_24635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22541__auto__;
}
break;
}
}catch (e24662){if((e24662 instanceof Object)){
var ex__22542__auto__ = e24662;
var statearr_24663_24685 = state_24635;
(statearr_24663_24685[(5)] = ex__22542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24662;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24686 = state_24635;
state_24635 = G__24686;
continue;
} else {
return ret_value__22540__auto__;
}
break;
}
});
cljs$core$async$state_machine__22539__auto__ = function(state_24635){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22539__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22539__auto____1.call(this,state_24635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22539__auto____0;
cljs$core$async$state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22539__auto____1;
return cljs$core$async$state_machine__22539__auto__;
})()
;})(switch__22538__auto__,c__22650__auto___24669,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22652__auto__ = (function (){var statearr_24664 = f__22651__auto__.call(null);
(statearr_24664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22650__auto___24669);

return statearr_24664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22652__auto__);
});})(c__22650__auto___24669,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args24688 = [];
var len__17899__auto___24744 = arguments.length;
var i__17900__auto___24745 = (0);
while(true){
if((i__17900__auto___24745 < len__17899__auto___24744)){
args24688.push((arguments[i__17900__auto___24745]));

var G__24746 = (i__17900__auto___24745 + (1));
i__17900__auto___24745 = G__24746;
continue;
} else {
}
break;
}

var G__24690 = args24688.length;
switch (G__24690) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24688.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22650__auto___24748 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22650__auto___24748,out){
return (function (){
var f__22651__auto__ = (function (){var switch__22538__auto__ = ((function (c__22650__auto___24748,out){
return (function (state_24720){
var state_val_24721 = (state_24720[(1)]);
if((state_val_24721 === (7))){
var inst_24699 = (state_24720[(7)]);
var inst_24700 = (state_24720[(8)]);
var inst_24699__$1 = (state_24720[(2)]);
var inst_24700__$1 = cljs.core.nth.call(null,inst_24699__$1,(0),null);
var inst_24701 = cljs.core.nth.call(null,inst_24699__$1,(1),null);
var inst_24702 = (inst_24700__$1 == null);
var state_24720__$1 = (function (){var statearr_24722 = state_24720;
(statearr_24722[(7)] = inst_24699__$1);

(statearr_24722[(9)] = inst_24701);

(statearr_24722[(8)] = inst_24700__$1);

return statearr_24722;
})();
if(cljs.core.truth_(inst_24702)){
var statearr_24723_24749 = state_24720__$1;
(statearr_24723_24749[(1)] = (8));

} else {
var statearr_24724_24750 = state_24720__$1;
(statearr_24724_24750[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24721 === (1))){
var inst_24691 = cljs.core.vec.call(null,chs);
var inst_24692 = inst_24691;
var state_24720__$1 = (function (){var statearr_24725 = state_24720;
(statearr_24725[(10)] = inst_24692);

return statearr_24725;
})();
var statearr_24726_24751 = state_24720__$1;
(statearr_24726_24751[(2)] = null);

(statearr_24726_24751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24721 === (4))){
var inst_24692 = (state_24720[(10)]);
var state_24720__$1 = state_24720;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24720__$1,(7),inst_24692);
} else {
if((state_val_24721 === (6))){
var inst_24716 = (state_24720[(2)]);
var state_24720__$1 = state_24720;
var statearr_24727_24752 = state_24720__$1;
(statearr_24727_24752[(2)] = inst_24716);

(statearr_24727_24752[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24721 === (3))){
var inst_24718 = (state_24720[(2)]);
var state_24720__$1 = state_24720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24720__$1,inst_24718);
} else {
if((state_val_24721 === (2))){
var inst_24692 = (state_24720[(10)]);
var inst_24694 = cljs.core.count.call(null,inst_24692);
var inst_24695 = (inst_24694 > (0));
var state_24720__$1 = state_24720;
if(cljs.core.truth_(inst_24695)){
var statearr_24729_24753 = state_24720__$1;
(statearr_24729_24753[(1)] = (4));

} else {
var statearr_24730_24754 = state_24720__$1;
(statearr_24730_24754[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24721 === (11))){
var inst_24692 = (state_24720[(10)]);
var inst_24709 = (state_24720[(2)]);
var tmp24728 = inst_24692;
var inst_24692__$1 = tmp24728;
var state_24720__$1 = (function (){var statearr_24731 = state_24720;
(statearr_24731[(10)] = inst_24692__$1);

(statearr_24731[(11)] = inst_24709);

return statearr_24731;
})();
var statearr_24732_24755 = state_24720__$1;
(statearr_24732_24755[(2)] = null);

(statearr_24732_24755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24721 === (9))){
var inst_24700 = (state_24720[(8)]);
var state_24720__$1 = state_24720;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24720__$1,(11),out,inst_24700);
} else {
if((state_val_24721 === (5))){
var inst_24714 = cljs.core.async.close_BANG_.call(null,out);
var state_24720__$1 = state_24720;
var statearr_24733_24756 = state_24720__$1;
(statearr_24733_24756[(2)] = inst_24714);

(statearr_24733_24756[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24721 === (10))){
var inst_24712 = (state_24720[(2)]);
var state_24720__$1 = state_24720;
var statearr_24734_24757 = state_24720__$1;
(statearr_24734_24757[(2)] = inst_24712);

(statearr_24734_24757[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24721 === (8))){
var inst_24699 = (state_24720[(7)]);
var inst_24701 = (state_24720[(9)]);
var inst_24692 = (state_24720[(10)]);
var inst_24700 = (state_24720[(8)]);
var inst_24704 = (function (){var cs = inst_24692;
var vec__24697 = inst_24699;
var v = inst_24700;
var c = inst_24701;
return ((function (cs,vec__24697,v,c,inst_24699,inst_24701,inst_24692,inst_24700,state_val_24721,c__22650__auto___24748,out){
return (function (p1__24687_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24687_SHARP_);
});
;})(cs,vec__24697,v,c,inst_24699,inst_24701,inst_24692,inst_24700,state_val_24721,c__22650__auto___24748,out))
})();
var inst_24705 = cljs.core.filterv.call(null,inst_24704,inst_24692);
var inst_24692__$1 = inst_24705;
var state_24720__$1 = (function (){var statearr_24735 = state_24720;
(statearr_24735[(10)] = inst_24692__$1);

return statearr_24735;
})();
var statearr_24736_24758 = state_24720__$1;
(statearr_24736_24758[(2)] = null);

(statearr_24736_24758[(1)] = (2));


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
});})(c__22650__auto___24748,out))
;
return ((function (switch__22538__auto__,c__22650__auto___24748,out){
return (function() {
var cljs$core$async$state_machine__22539__auto__ = null;
var cljs$core$async$state_machine__22539__auto____0 = (function (){
var statearr_24740 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24740[(0)] = cljs$core$async$state_machine__22539__auto__);

(statearr_24740[(1)] = (1));

return statearr_24740;
});
var cljs$core$async$state_machine__22539__auto____1 = (function (state_24720){
while(true){
var ret_value__22540__auto__ = (function (){try{while(true){
var result__22541__auto__ = switch__22538__auto__.call(null,state_24720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22541__auto__;
}
break;
}
}catch (e24741){if((e24741 instanceof Object)){
var ex__22542__auto__ = e24741;
var statearr_24742_24759 = state_24720;
(statearr_24742_24759[(5)] = ex__22542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24760 = state_24720;
state_24720 = G__24760;
continue;
} else {
return ret_value__22540__auto__;
}
break;
}
});
cljs$core$async$state_machine__22539__auto__ = function(state_24720){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22539__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22539__auto____1.call(this,state_24720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22539__auto____0;
cljs$core$async$state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22539__auto____1;
return cljs$core$async$state_machine__22539__auto__;
})()
;})(switch__22538__auto__,c__22650__auto___24748,out))
})();
var state__22652__auto__ = (function (){var statearr_24743 = f__22651__auto__.call(null);
(statearr_24743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22650__auto___24748);

return statearr_24743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22652__auto__);
});})(c__22650__auto___24748,out))
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
var args24761 = [];
var len__17899__auto___24810 = arguments.length;
var i__17900__auto___24811 = (0);
while(true){
if((i__17900__auto___24811 < len__17899__auto___24810)){
args24761.push((arguments[i__17900__auto___24811]));

var G__24812 = (i__17900__auto___24811 + (1));
i__17900__auto___24811 = G__24812;
continue;
} else {
}
break;
}

var G__24763 = args24761.length;
switch (G__24763) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24761.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22650__auto___24814 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22650__auto___24814,out){
return (function (){
var f__22651__auto__ = (function (){var switch__22538__auto__ = ((function (c__22650__auto___24814,out){
return (function (state_24787){
var state_val_24788 = (state_24787[(1)]);
if((state_val_24788 === (7))){
var inst_24769 = (state_24787[(7)]);
var inst_24769__$1 = (state_24787[(2)]);
var inst_24770 = (inst_24769__$1 == null);
var inst_24771 = cljs.core.not.call(null,inst_24770);
var state_24787__$1 = (function (){var statearr_24789 = state_24787;
(statearr_24789[(7)] = inst_24769__$1);

return statearr_24789;
})();
if(inst_24771){
var statearr_24790_24815 = state_24787__$1;
(statearr_24790_24815[(1)] = (8));

} else {
var statearr_24791_24816 = state_24787__$1;
(statearr_24791_24816[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24788 === (1))){
var inst_24764 = (0);
var state_24787__$1 = (function (){var statearr_24792 = state_24787;
(statearr_24792[(8)] = inst_24764);

return statearr_24792;
})();
var statearr_24793_24817 = state_24787__$1;
(statearr_24793_24817[(2)] = null);

(statearr_24793_24817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24788 === (4))){
var state_24787__$1 = state_24787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24787__$1,(7),ch);
} else {
if((state_val_24788 === (6))){
var inst_24782 = (state_24787[(2)]);
var state_24787__$1 = state_24787;
var statearr_24794_24818 = state_24787__$1;
(statearr_24794_24818[(2)] = inst_24782);

(statearr_24794_24818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24788 === (3))){
var inst_24784 = (state_24787[(2)]);
var inst_24785 = cljs.core.async.close_BANG_.call(null,out);
var state_24787__$1 = (function (){var statearr_24795 = state_24787;
(statearr_24795[(9)] = inst_24784);

return statearr_24795;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24787__$1,inst_24785);
} else {
if((state_val_24788 === (2))){
var inst_24764 = (state_24787[(8)]);
var inst_24766 = (inst_24764 < n);
var state_24787__$1 = state_24787;
if(cljs.core.truth_(inst_24766)){
var statearr_24796_24819 = state_24787__$1;
(statearr_24796_24819[(1)] = (4));

} else {
var statearr_24797_24820 = state_24787__$1;
(statearr_24797_24820[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24788 === (11))){
var inst_24764 = (state_24787[(8)]);
var inst_24774 = (state_24787[(2)]);
var inst_24775 = (inst_24764 + (1));
var inst_24764__$1 = inst_24775;
var state_24787__$1 = (function (){var statearr_24798 = state_24787;
(statearr_24798[(8)] = inst_24764__$1);

(statearr_24798[(10)] = inst_24774);

return statearr_24798;
})();
var statearr_24799_24821 = state_24787__$1;
(statearr_24799_24821[(2)] = null);

(statearr_24799_24821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24788 === (9))){
var state_24787__$1 = state_24787;
var statearr_24800_24822 = state_24787__$1;
(statearr_24800_24822[(2)] = null);

(statearr_24800_24822[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24788 === (5))){
var state_24787__$1 = state_24787;
var statearr_24801_24823 = state_24787__$1;
(statearr_24801_24823[(2)] = null);

(statearr_24801_24823[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24788 === (10))){
var inst_24779 = (state_24787[(2)]);
var state_24787__$1 = state_24787;
var statearr_24802_24824 = state_24787__$1;
(statearr_24802_24824[(2)] = inst_24779);

(statearr_24802_24824[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24788 === (8))){
var inst_24769 = (state_24787[(7)]);
var state_24787__$1 = state_24787;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24787__$1,(11),out,inst_24769);
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
});})(c__22650__auto___24814,out))
;
return ((function (switch__22538__auto__,c__22650__auto___24814,out){
return (function() {
var cljs$core$async$state_machine__22539__auto__ = null;
var cljs$core$async$state_machine__22539__auto____0 = (function (){
var statearr_24806 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24806[(0)] = cljs$core$async$state_machine__22539__auto__);

(statearr_24806[(1)] = (1));

return statearr_24806;
});
var cljs$core$async$state_machine__22539__auto____1 = (function (state_24787){
while(true){
var ret_value__22540__auto__ = (function (){try{while(true){
var result__22541__auto__ = switch__22538__auto__.call(null,state_24787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22541__auto__;
}
break;
}
}catch (e24807){if((e24807 instanceof Object)){
var ex__22542__auto__ = e24807;
var statearr_24808_24825 = state_24787;
(statearr_24808_24825[(5)] = ex__22542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24807;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24826 = state_24787;
state_24787 = G__24826;
continue;
} else {
return ret_value__22540__auto__;
}
break;
}
});
cljs$core$async$state_machine__22539__auto__ = function(state_24787){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22539__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22539__auto____1.call(this,state_24787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22539__auto____0;
cljs$core$async$state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22539__auto____1;
return cljs$core$async$state_machine__22539__auto__;
})()
;})(switch__22538__auto__,c__22650__auto___24814,out))
})();
var state__22652__auto__ = (function (){var statearr_24809 = f__22651__auto__.call(null);
(statearr_24809[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22650__auto___24814);

return statearr_24809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22652__auto__);
});})(c__22650__auto___24814,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24834 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24834 = (function (map_LT_,f,ch,meta24835){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24835 = meta24835;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24834.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24836,meta24835__$1){
var self__ = this;
var _24836__$1 = this;
return (new cljs.core.async.t_cljs$core$async24834(self__.map_LT_,self__.f,self__.ch,meta24835__$1));
});

cljs.core.async.t_cljs$core$async24834.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24836){
var self__ = this;
var _24836__$1 = this;
return self__.meta24835;
});

cljs.core.async.t_cljs$core$async24834.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24834.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24834.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24834.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24834.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24837 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24837 = (function (map_LT_,f,ch,meta24835,_,fn1,meta24838){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24835 = meta24835;
this._ = _;
this.fn1 = fn1;
this.meta24838 = meta24838;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24837.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24839,meta24838__$1){
var self__ = this;
var _24839__$1 = this;
return (new cljs.core.async.t_cljs$core$async24837(self__.map_LT_,self__.f,self__.ch,self__.meta24835,self__._,self__.fn1,meta24838__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24837.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24839){
var self__ = this;
var _24839__$1 = this;
return self__.meta24838;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24837.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24837.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24837.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24837.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24827_SHARP_){
return f1.call(null,(((p1__24827_SHARP_ == null))?null:self__.f.call(null,p1__24827_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24837.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24835","meta24835",879724627,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24834","cljs.core.async/t_cljs$core$async24834",739502897,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24838","meta24838",624036046,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24837.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24837.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24837";

cljs.core.async.t_cljs$core$async24837.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17439__auto__,writer__17440__auto__,opt__17441__auto__){
return cljs.core._write.call(null,writer__17440__auto__,"cljs.core.async/t_cljs$core$async24837");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async24837 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24837(map_LT___$1,f__$1,ch__$1,meta24835__$1,___$2,fn1__$1,meta24838){
return (new cljs.core.async.t_cljs$core$async24837(map_LT___$1,f__$1,ch__$1,meta24835__$1,___$2,fn1__$1,meta24838));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24837(self__.map_LT_,self__.f,self__.ch,self__.meta24835,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async24834.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24834.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24834.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24835","meta24835",879724627,null)], null);
});

cljs.core.async.t_cljs$core$async24834.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24834.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24834";

cljs.core.async.t_cljs$core$async24834.cljs$lang$ctorPrWriter = (function (this__17439__auto__,writer__17440__auto__,opt__17441__auto__){
return cljs.core._write.call(null,writer__17440__auto__,"cljs.core.async/t_cljs$core$async24834");
});

cljs.core.async.__GT_t_cljs$core$async24834 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24834(map_LT___$1,f__$1,ch__$1,meta24835){
return (new cljs.core.async.t_cljs$core$async24834(map_LT___$1,f__$1,ch__$1,meta24835));
});

}

return (new cljs.core.async.t_cljs$core$async24834(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24843 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24843 = (function (map_GT_,f,ch,meta24844){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta24844 = meta24844;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24845,meta24844__$1){
var self__ = this;
var _24845__$1 = this;
return (new cljs.core.async.t_cljs$core$async24843(self__.map_GT_,self__.f,self__.ch,meta24844__$1));
});

cljs.core.async.t_cljs$core$async24843.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24845){
var self__ = this;
var _24845__$1 = this;
return self__.meta24844;
});

cljs.core.async.t_cljs$core$async24843.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24843.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24843.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24843.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24843.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24843.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24843.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24844","meta24844",2049248587,null)], null);
});

cljs.core.async.t_cljs$core$async24843.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24843.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24843";

cljs.core.async.t_cljs$core$async24843.cljs$lang$ctorPrWriter = (function (this__17439__auto__,writer__17440__auto__,opt__17441__auto__){
return cljs.core._write.call(null,writer__17440__auto__,"cljs.core.async/t_cljs$core$async24843");
});

cljs.core.async.__GT_t_cljs$core$async24843 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24843(map_GT___$1,f__$1,ch__$1,meta24844){
return (new cljs.core.async.t_cljs$core$async24843(map_GT___$1,f__$1,ch__$1,meta24844));
});

}

return (new cljs.core.async.t_cljs$core$async24843(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24849 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24849 = (function (filter_GT_,p,ch,meta24850){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta24850 = meta24850;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24851,meta24850__$1){
var self__ = this;
var _24851__$1 = this;
return (new cljs.core.async.t_cljs$core$async24849(self__.filter_GT_,self__.p,self__.ch,meta24850__$1));
});

cljs.core.async.t_cljs$core$async24849.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24851){
var self__ = this;
var _24851__$1 = this;
return self__.meta24850;
});

cljs.core.async.t_cljs$core$async24849.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24849.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24849.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24849.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24849.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24849.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24849.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24849.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24850","meta24850",-460593785,null)], null);
});

cljs.core.async.t_cljs$core$async24849.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24849.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24849";

cljs.core.async.t_cljs$core$async24849.cljs$lang$ctorPrWriter = (function (this__17439__auto__,writer__17440__auto__,opt__17441__auto__){
return cljs.core._write.call(null,writer__17440__auto__,"cljs.core.async/t_cljs$core$async24849");
});

cljs.core.async.__GT_t_cljs$core$async24849 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24849(filter_GT___$1,p__$1,ch__$1,meta24850){
return (new cljs.core.async.t_cljs$core$async24849(filter_GT___$1,p__$1,ch__$1,meta24850));
});

}

return (new cljs.core.async.t_cljs$core$async24849(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args24852 = [];
var len__17899__auto___24896 = arguments.length;
var i__17900__auto___24897 = (0);
while(true){
if((i__17900__auto___24897 < len__17899__auto___24896)){
args24852.push((arguments[i__17900__auto___24897]));

var G__24898 = (i__17900__auto___24897 + (1));
i__17900__auto___24897 = G__24898;
continue;
} else {
}
break;
}

var G__24854 = args24852.length;
switch (G__24854) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24852.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22650__auto___24900 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22650__auto___24900,out){
return (function (){
var f__22651__auto__ = (function (){var switch__22538__auto__ = ((function (c__22650__auto___24900,out){
return (function (state_24875){
var state_val_24876 = (state_24875[(1)]);
if((state_val_24876 === (7))){
var inst_24871 = (state_24875[(2)]);
var state_24875__$1 = state_24875;
var statearr_24877_24901 = state_24875__$1;
(statearr_24877_24901[(2)] = inst_24871);

(statearr_24877_24901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24876 === (1))){
var state_24875__$1 = state_24875;
var statearr_24878_24902 = state_24875__$1;
(statearr_24878_24902[(2)] = null);

(statearr_24878_24902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24876 === (4))){
var inst_24857 = (state_24875[(7)]);
var inst_24857__$1 = (state_24875[(2)]);
var inst_24858 = (inst_24857__$1 == null);
var state_24875__$1 = (function (){var statearr_24879 = state_24875;
(statearr_24879[(7)] = inst_24857__$1);

return statearr_24879;
})();
if(cljs.core.truth_(inst_24858)){
var statearr_24880_24903 = state_24875__$1;
(statearr_24880_24903[(1)] = (5));

} else {
var statearr_24881_24904 = state_24875__$1;
(statearr_24881_24904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24876 === (6))){
var inst_24857 = (state_24875[(7)]);
var inst_24862 = p.call(null,inst_24857);
var state_24875__$1 = state_24875;
if(cljs.core.truth_(inst_24862)){
var statearr_24882_24905 = state_24875__$1;
(statearr_24882_24905[(1)] = (8));

} else {
var statearr_24883_24906 = state_24875__$1;
(statearr_24883_24906[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24876 === (3))){
var inst_24873 = (state_24875[(2)]);
var state_24875__$1 = state_24875;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24875__$1,inst_24873);
} else {
if((state_val_24876 === (2))){
var state_24875__$1 = state_24875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24875__$1,(4),ch);
} else {
if((state_val_24876 === (11))){
var inst_24865 = (state_24875[(2)]);
var state_24875__$1 = state_24875;
var statearr_24884_24907 = state_24875__$1;
(statearr_24884_24907[(2)] = inst_24865);

(statearr_24884_24907[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24876 === (9))){
var state_24875__$1 = state_24875;
var statearr_24885_24908 = state_24875__$1;
(statearr_24885_24908[(2)] = null);

(statearr_24885_24908[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24876 === (5))){
var inst_24860 = cljs.core.async.close_BANG_.call(null,out);
var state_24875__$1 = state_24875;
var statearr_24886_24909 = state_24875__$1;
(statearr_24886_24909[(2)] = inst_24860);

(statearr_24886_24909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24876 === (10))){
var inst_24868 = (state_24875[(2)]);
var state_24875__$1 = (function (){var statearr_24887 = state_24875;
(statearr_24887[(8)] = inst_24868);

return statearr_24887;
})();
var statearr_24888_24910 = state_24875__$1;
(statearr_24888_24910[(2)] = null);

(statearr_24888_24910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24876 === (8))){
var inst_24857 = (state_24875[(7)]);
var state_24875__$1 = state_24875;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24875__$1,(11),out,inst_24857);
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
});})(c__22650__auto___24900,out))
;
return ((function (switch__22538__auto__,c__22650__auto___24900,out){
return (function() {
var cljs$core$async$state_machine__22539__auto__ = null;
var cljs$core$async$state_machine__22539__auto____0 = (function (){
var statearr_24892 = [null,null,null,null,null,null,null,null,null];
(statearr_24892[(0)] = cljs$core$async$state_machine__22539__auto__);

(statearr_24892[(1)] = (1));

return statearr_24892;
});
var cljs$core$async$state_machine__22539__auto____1 = (function (state_24875){
while(true){
var ret_value__22540__auto__ = (function (){try{while(true){
var result__22541__auto__ = switch__22538__auto__.call(null,state_24875);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22541__auto__;
}
break;
}
}catch (e24893){if((e24893 instanceof Object)){
var ex__22542__auto__ = e24893;
var statearr_24894_24911 = state_24875;
(statearr_24894_24911[(5)] = ex__22542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24912 = state_24875;
state_24875 = G__24912;
continue;
} else {
return ret_value__22540__auto__;
}
break;
}
});
cljs$core$async$state_machine__22539__auto__ = function(state_24875){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22539__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22539__auto____1.call(this,state_24875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22539__auto____0;
cljs$core$async$state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22539__auto____1;
return cljs$core$async$state_machine__22539__auto__;
})()
;})(switch__22538__auto__,c__22650__auto___24900,out))
})();
var state__22652__auto__ = (function (){var statearr_24895 = f__22651__auto__.call(null);
(statearr_24895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22650__auto___24900);

return statearr_24895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22652__auto__);
});})(c__22650__auto___24900,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args24913 = [];
var len__17899__auto___24916 = arguments.length;
var i__17900__auto___24917 = (0);
while(true){
if((i__17900__auto___24917 < len__17899__auto___24916)){
args24913.push((arguments[i__17900__auto___24917]));

var G__24918 = (i__17900__auto___24917 + (1));
i__17900__auto___24917 = G__24918;
continue;
} else {
}
break;
}

var G__24915 = args24913.length;
switch (G__24915) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24913.length)].join('')));

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
var c__22650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22650__auto__){
return (function (){
var f__22651__auto__ = (function (){var switch__22538__auto__ = ((function (c__22650__auto__){
return (function (state_25085){
var state_val_25086 = (state_25085[(1)]);
if((state_val_25086 === (7))){
var inst_25081 = (state_25085[(2)]);
var state_25085__$1 = state_25085;
var statearr_25087_25128 = state_25085__$1;
(statearr_25087_25128[(2)] = inst_25081);

(statearr_25087_25128[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (20))){
var inst_25051 = (state_25085[(7)]);
var inst_25062 = (state_25085[(2)]);
var inst_25063 = cljs.core.next.call(null,inst_25051);
var inst_25037 = inst_25063;
var inst_25038 = null;
var inst_25039 = (0);
var inst_25040 = (0);
var state_25085__$1 = (function (){var statearr_25088 = state_25085;
(statearr_25088[(8)] = inst_25037);

(statearr_25088[(9)] = inst_25040);

(statearr_25088[(10)] = inst_25062);

(statearr_25088[(11)] = inst_25039);

(statearr_25088[(12)] = inst_25038);

return statearr_25088;
})();
var statearr_25089_25129 = state_25085__$1;
(statearr_25089_25129[(2)] = null);

(statearr_25089_25129[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (1))){
var state_25085__$1 = state_25085;
var statearr_25090_25130 = state_25085__$1;
(statearr_25090_25130[(2)] = null);

(statearr_25090_25130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (4))){
var inst_25026 = (state_25085[(13)]);
var inst_25026__$1 = (state_25085[(2)]);
var inst_25027 = (inst_25026__$1 == null);
var state_25085__$1 = (function (){var statearr_25091 = state_25085;
(statearr_25091[(13)] = inst_25026__$1);

return statearr_25091;
})();
if(cljs.core.truth_(inst_25027)){
var statearr_25092_25131 = state_25085__$1;
(statearr_25092_25131[(1)] = (5));

} else {
var statearr_25093_25132 = state_25085__$1;
(statearr_25093_25132[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (15))){
var state_25085__$1 = state_25085;
var statearr_25097_25133 = state_25085__$1;
(statearr_25097_25133[(2)] = null);

(statearr_25097_25133[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (21))){
var state_25085__$1 = state_25085;
var statearr_25098_25134 = state_25085__$1;
(statearr_25098_25134[(2)] = null);

(statearr_25098_25134[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (13))){
var inst_25037 = (state_25085[(8)]);
var inst_25040 = (state_25085[(9)]);
var inst_25039 = (state_25085[(11)]);
var inst_25038 = (state_25085[(12)]);
var inst_25047 = (state_25085[(2)]);
var inst_25048 = (inst_25040 + (1));
var tmp25094 = inst_25037;
var tmp25095 = inst_25039;
var tmp25096 = inst_25038;
var inst_25037__$1 = tmp25094;
var inst_25038__$1 = tmp25096;
var inst_25039__$1 = tmp25095;
var inst_25040__$1 = inst_25048;
var state_25085__$1 = (function (){var statearr_25099 = state_25085;
(statearr_25099[(8)] = inst_25037__$1);

(statearr_25099[(14)] = inst_25047);

(statearr_25099[(9)] = inst_25040__$1);

(statearr_25099[(11)] = inst_25039__$1);

(statearr_25099[(12)] = inst_25038__$1);

return statearr_25099;
})();
var statearr_25100_25135 = state_25085__$1;
(statearr_25100_25135[(2)] = null);

(statearr_25100_25135[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (22))){
var state_25085__$1 = state_25085;
var statearr_25101_25136 = state_25085__$1;
(statearr_25101_25136[(2)] = null);

(statearr_25101_25136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (6))){
var inst_25026 = (state_25085[(13)]);
var inst_25035 = f.call(null,inst_25026);
var inst_25036 = cljs.core.seq.call(null,inst_25035);
var inst_25037 = inst_25036;
var inst_25038 = null;
var inst_25039 = (0);
var inst_25040 = (0);
var state_25085__$1 = (function (){var statearr_25102 = state_25085;
(statearr_25102[(8)] = inst_25037);

(statearr_25102[(9)] = inst_25040);

(statearr_25102[(11)] = inst_25039);

(statearr_25102[(12)] = inst_25038);

return statearr_25102;
})();
var statearr_25103_25137 = state_25085__$1;
(statearr_25103_25137[(2)] = null);

(statearr_25103_25137[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (17))){
var inst_25051 = (state_25085[(7)]);
var inst_25055 = cljs.core.chunk_first.call(null,inst_25051);
var inst_25056 = cljs.core.chunk_rest.call(null,inst_25051);
var inst_25057 = cljs.core.count.call(null,inst_25055);
var inst_25037 = inst_25056;
var inst_25038 = inst_25055;
var inst_25039 = inst_25057;
var inst_25040 = (0);
var state_25085__$1 = (function (){var statearr_25104 = state_25085;
(statearr_25104[(8)] = inst_25037);

(statearr_25104[(9)] = inst_25040);

(statearr_25104[(11)] = inst_25039);

(statearr_25104[(12)] = inst_25038);

return statearr_25104;
})();
var statearr_25105_25138 = state_25085__$1;
(statearr_25105_25138[(2)] = null);

(statearr_25105_25138[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (3))){
var inst_25083 = (state_25085[(2)]);
var state_25085__$1 = state_25085;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25085__$1,inst_25083);
} else {
if((state_val_25086 === (12))){
var inst_25071 = (state_25085[(2)]);
var state_25085__$1 = state_25085;
var statearr_25106_25139 = state_25085__$1;
(statearr_25106_25139[(2)] = inst_25071);

(statearr_25106_25139[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (2))){
var state_25085__$1 = state_25085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25085__$1,(4),in$);
} else {
if((state_val_25086 === (23))){
var inst_25079 = (state_25085[(2)]);
var state_25085__$1 = state_25085;
var statearr_25107_25140 = state_25085__$1;
(statearr_25107_25140[(2)] = inst_25079);

(statearr_25107_25140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (19))){
var inst_25066 = (state_25085[(2)]);
var state_25085__$1 = state_25085;
var statearr_25108_25141 = state_25085__$1;
(statearr_25108_25141[(2)] = inst_25066);

(statearr_25108_25141[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (11))){
var inst_25037 = (state_25085[(8)]);
var inst_25051 = (state_25085[(7)]);
var inst_25051__$1 = cljs.core.seq.call(null,inst_25037);
var state_25085__$1 = (function (){var statearr_25109 = state_25085;
(statearr_25109[(7)] = inst_25051__$1);

return statearr_25109;
})();
if(inst_25051__$1){
var statearr_25110_25142 = state_25085__$1;
(statearr_25110_25142[(1)] = (14));

} else {
var statearr_25111_25143 = state_25085__$1;
(statearr_25111_25143[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (9))){
var inst_25073 = (state_25085[(2)]);
var inst_25074 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25085__$1 = (function (){var statearr_25112 = state_25085;
(statearr_25112[(15)] = inst_25073);

return statearr_25112;
})();
if(cljs.core.truth_(inst_25074)){
var statearr_25113_25144 = state_25085__$1;
(statearr_25113_25144[(1)] = (21));

} else {
var statearr_25114_25145 = state_25085__$1;
(statearr_25114_25145[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (5))){
var inst_25029 = cljs.core.async.close_BANG_.call(null,out);
var state_25085__$1 = state_25085;
var statearr_25115_25146 = state_25085__$1;
(statearr_25115_25146[(2)] = inst_25029);

(statearr_25115_25146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (14))){
var inst_25051 = (state_25085[(7)]);
var inst_25053 = cljs.core.chunked_seq_QMARK_.call(null,inst_25051);
var state_25085__$1 = state_25085;
if(inst_25053){
var statearr_25116_25147 = state_25085__$1;
(statearr_25116_25147[(1)] = (17));

} else {
var statearr_25117_25148 = state_25085__$1;
(statearr_25117_25148[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (16))){
var inst_25069 = (state_25085[(2)]);
var state_25085__$1 = state_25085;
var statearr_25118_25149 = state_25085__$1;
(statearr_25118_25149[(2)] = inst_25069);

(statearr_25118_25149[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (10))){
var inst_25040 = (state_25085[(9)]);
var inst_25038 = (state_25085[(12)]);
var inst_25045 = cljs.core._nth.call(null,inst_25038,inst_25040);
var state_25085__$1 = state_25085;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25085__$1,(13),out,inst_25045);
} else {
if((state_val_25086 === (18))){
var inst_25051 = (state_25085[(7)]);
var inst_25060 = cljs.core.first.call(null,inst_25051);
var state_25085__$1 = state_25085;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25085__$1,(20),out,inst_25060);
} else {
if((state_val_25086 === (8))){
var inst_25040 = (state_25085[(9)]);
var inst_25039 = (state_25085[(11)]);
var inst_25042 = (inst_25040 < inst_25039);
var inst_25043 = inst_25042;
var state_25085__$1 = state_25085;
if(cljs.core.truth_(inst_25043)){
var statearr_25119_25150 = state_25085__$1;
(statearr_25119_25150[(1)] = (10));

} else {
var statearr_25120_25151 = state_25085__$1;
(statearr_25120_25151[(1)] = (11));

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
});})(c__22650__auto__))
;
return ((function (switch__22538__auto__,c__22650__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22539__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22539__auto____0 = (function (){
var statearr_25124 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25124[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22539__auto__);

(statearr_25124[(1)] = (1));

return statearr_25124;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22539__auto____1 = (function (state_25085){
while(true){
var ret_value__22540__auto__ = (function (){try{while(true){
var result__22541__auto__ = switch__22538__auto__.call(null,state_25085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22541__auto__;
}
break;
}
}catch (e25125){if((e25125 instanceof Object)){
var ex__22542__auto__ = e25125;
var statearr_25126_25152 = state_25085;
(statearr_25126_25152[(5)] = ex__22542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25153 = state_25085;
state_25085 = G__25153;
continue;
} else {
return ret_value__22540__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22539__auto__ = function(state_25085){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22539__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22539__auto____1.call(this,state_25085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22539__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22539__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22539__auto__;
})()
;})(switch__22538__auto__,c__22650__auto__))
})();
var state__22652__auto__ = (function (){var statearr_25127 = f__22651__auto__.call(null);
(statearr_25127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22650__auto__);

return statearr_25127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22652__auto__);
});})(c__22650__auto__))
);

return c__22650__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args25154 = [];
var len__17899__auto___25157 = arguments.length;
var i__17900__auto___25158 = (0);
while(true){
if((i__17900__auto___25158 < len__17899__auto___25157)){
args25154.push((arguments[i__17900__auto___25158]));

var G__25159 = (i__17900__auto___25158 + (1));
i__17900__auto___25158 = G__25159;
continue;
} else {
}
break;
}

var G__25156 = args25154.length;
switch (G__25156) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25154.length)].join('')));

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
var args25161 = [];
var len__17899__auto___25164 = arguments.length;
var i__17900__auto___25165 = (0);
while(true){
if((i__17900__auto___25165 < len__17899__auto___25164)){
args25161.push((arguments[i__17900__auto___25165]));

var G__25166 = (i__17900__auto___25165 + (1));
i__17900__auto___25165 = G__25166;
continue;
} else {
}
break;
}

var G__25163 = args25161.length;
switch (G__25163) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25161.length)].join('')));

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
var args25168 = [];
var len__17899__auto___25219 = arguments.length;
var i__17900__auto___25220 = (0);
while(true){
if((i__17900__auto___25220 < len__17899__auto___25219)){
args25168.push((arguments[i__17900__auto___25220]));

var G__25221 = (i__17900__auto___25220 + (1));
i__17900__auto___25220 = G__25221;
continue;
} else {
}
break;
}

var G__25170 = args25168.length;
switch (G__25170) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25168.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22650__auto___25223 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22650__auto___25223,out){
return (function (){
var f__22651__auto__ = (function (){var switch__22538__auto__ = ((function (c__22650__auto___25223,out){
return (function (state_25194){
var state_val_25195 = (state_25194[(1)]);
if((state_val_25195 === (7))){
var inst_25189 = (state_25194[(2)]);
var state_25194__$1 = state_25194;
var statearr_25196_25224 = state_25194__$1;
(statearr_25196_25224[(2)] = inst_25189);

(statearr_25196_25224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25195 === (1))){
var inst_25171 = null;
var state_25194__$1 = (function (){var statearr_25197 = state_25194;
(statearr_25197[(7)] = inst_25171);

return statearr_25197;
})();
var statearr_25198_25225 = state_25194__$1;
(statearr_25198_25225[(2)] = null);

(statearr_25198_25225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25195 === (4))){
var inst_25174 = (state_25194[(8)]);
var inst_25174__$1 = (state_25194[(2)]);
var inst_25175 = (inst_25174__$1 == null);
var inst_25176 = cljs.core.not.call(null,inst_25175);
var state_25194__$1 = (function (){var statearr_25199 = state_25194;
(statearr_25199[(8)] = inst_25174__$1);

return statearr_25199;
})();
if(inst_25176){
var statearr_25200_25226 = state_25194__$1;
(statearr_25200_25226[(1)] = (5));

} else {
var statearr_25201_25227 = state_25194__$1;
(statearr_25201_25227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25195 === (6))){
var state_25194__$1 = state_25194;
var statearr_25202_25228 = state_25194__$1;
(statearr_25202_25228[(2)] = null);

(statearr_25202_25228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25195 === (3))){
var inst_25191 = (state_25194[(2)]);
var inst_25192 = cljs.core.async.close_BANG_.call(null,out);
var state_25194__$1 = (function (){var statearr_25203 = state_25194;
(statearr_25203[(9)] = inst_25191);

return statearr_25203;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25194__$1,inst_25192);
} else {
if((state_val_25195 === (2))){
var state_25194__$1 = state_25194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25194__$1,(4),ch);
} else {
if((state_val_25195 === (11))){
var inst_25174 = (state_25194[(8)]);
var inst_25183 = (state_25194[(2)]);
var inst_25171 = inst_25174;
var state_25194__$1 = (function (){var statearr_25204 = state_25194;
(statearr_25204[(7)] = inst_25171);

(statearr_25204[(10)] = inst_25183);

return statearr_25204;
})();
var statearr_25205_25229 = state_25194__$1;
(statearr_25205_25229[(2)] = null);

(statearr_25205_25229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25195 === (9))){
var inst_25174 = (state_25194[(8)]);
var state_25194__$1 = state_25194;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25194__$1,(11),out,inst_25174);
} else {
if((state_val_25195 === (5))){
var inst_25171 = (state_25194[(7)]);
var inst_25174 = (state_25194[(8)]);
var inst_25178 = cljs.core._EQ_.call(null,inst_25174,inst_25171);
var state_25194__$1 = state_25194;
if(inst_25178){
var statearr_25207_25230 = state_25194__$1;
(statearr_25207_25230[(1)] = (8));

} else {
var statearr_25208_25231 = state_25194__$1;
(statearr_25208_25231[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25195 === (10))){
var inst_25186 = (state_25194[(2)]);
var state_25194__$1 = state_25194;
var statearr_25209_25232 = state_25194__$1;
(statearr_25209_25232[(2)] = inst_25186);

(statearr_25209_25232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25195 === (8))){
var inst_25171 = (state_25194[(7)]);
var tmp25206 = inst_25171;
var inst_25171__$1 = tmp25206;
var state_25194__$1 = (function (){var statearr_25210 = state_25194;
(statearr_25210[(7)] = inst_25171__$1);

return statearr_25210;
})();
var statearr_25211_25233 = state_25194__$1;
(statearr_25211_25233[(2)] = null);

(statearr_25211_25233[(1)] = (2));


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
});})(c__22650__auto___25223,out))
;
return ((function (switch__22538__auto__,c__22650__auto___25223,out){
return (function() {
var cljs$core$async$state_machine__22539__auto__ = null;
var cljs$core$async$state_machine__22539__auto____0 = (function (){
var statearr_25215 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25215[(0)] = cljs$core$async$state_machine__22539__auto__);

(statearr_25215[(1)] = (1));

return statearr_25215;
});
var cljs$core$async$state_machine__22539__auto____1 = (function (state_25194){
while(true){
var ret_value__22540__auto__ = (function (){try{while(true){
var result__22541__auto__ = switch__22538__auto__.call(null,state_25194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22541__auto__;
}
break;
}
}catch (e25216){if((e25216 instanceof Object)){
var ex__22542__auto__ = e25216;
var statearr_25217_25234 = state_25194;
(statearr_25217_25234[(5)] = ex__22542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25216;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25235 = state_25194;
state_25194 = G__25235;
continue;
} else {
return ret_value__22540__auto__;
}
break;
}
});
cljs$core$async$state_machine__22539__auto__ = function(state_25194){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22539__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22539__auto____1.call(this,state_25194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22539__auto____0;
cljs$core$async$state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22539__auto____1;
return cljs$core$async$state_machine__22539__auto__;
})()
;})(switch__22538__auto__,c__22650__auto___25223,out))
})();
var state__22652__auto__ = (function (){var statearr_25218 = f__22651__auto__.call(null);
(statearr_25218[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22650__auto___25223);

return statearr_25218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22652__auto__);
});})(c__22650__auto___25223,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args25236 = [];
var len__17899__auto___25306 = arguments.length;
var i__17900__auto___25307 = (0);
while(true){
if((i__17900__auto___25307 < len__17899__auto___25306)){
args25236.push((arguments[i__17900__auto___25307]));

var G__25308 = (i__17900__auto___25307 + (1));
i__17900__auto___25307 = G__25308;
continue;
} else {
}
break;
}

var G__25238 = args25236.length;
switch (G__25238) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25236.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22650__auto___25310 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22650__auto___25310,out){
return (function (){
var f__22651__auto__ = (function (){var switch__22538__auto__ = ((function (c__22650__auto___25310,out){
return (function (state_25276){
var state_val_25277 = (state_25276[(1)]);
if((state_val_25277 === (7))){
var inst_25272 = (state_25276[(2)]);
var state_25276__$1 = state_25276;
var statearr_25278_25311 = state_25276__$1;
(statearr_25278_25311[(2)] = inst_25272);

(statearr_25278_25311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (1))){
var inst_25239 = (new Array(n));
var inst_25240 = inst_25239;
var inst_25241 = (0);
var state_25276__$1 = (function (){var statearr_25279 = state_25276;
(statearr_25279[(7)] = inst_25241);

(statearr_25279[(8)] = inst_25240);

return statearr_25279;
})();
var statearr_25280_25312 = state_25276__$1;
(statearr_25280_25312[(2)] = null);

(statearr_25280_25312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (4))){
var inst_25244 = (state_25276[(9)]);
var inst_25244__$1 = (state_25276[(2)]);
var inst_25245 = (inst_25244__$1 == null);
var inst_25246 = cljs.core.not.call(null,inst_25245);
var state_25276__$1 = (function (){var statearr_25281 = state_25276;
(statearr_25281[(9)] = inst_25244__$1);

return statearr_25281;
})();
if(inst_25246){
var statearr_25282_25313 = state_25276__$1;
(statearr_25282_25313[(1)] = (5));

} else {
var statearr_25283_25314 = state_25276__$1;
(statearr_25283_25314[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (15))){
var inst_25266 = (state_25276[(2)]);
var state_25276__$1 = state_25276;
var statearr_25284_25315 = state_25276__$1;
(statearr_25284_25315[(2)] = inst_25266);

(statearr_25284_25315[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (13))){
var state_25276__$1 = state_25276;
var statearr_25285_25316 = state_25276__$1;
(statearr_25285_25316[(2)] = null);

(statearr_25285_25316[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (6))){
var inst_25241 = (state_25276[(7)]);
var inst_25262 = (inst_25241 > (0));
var state_25276__$1 = state_25276;
if(cljs.core.truth_(inst_25262)){
var statearr_25286_25317 = state_25276__$1;
(statearr_25286_25317[(1)] = (12));

} else {
var statearr_25287_25318 = state_25276__$1;
(statearr_25287_25318[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (3))){
var inst_25274 = (state_25276[(2)]);
var state_25276__$1 = state_25276;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25276__$1,inst_25274);
} else {
if((state_val_25277 === (12))){
var inst_25240 = (state_25276[(8)]);
var inst_25264 = cljs.core.vec.call(null,inst_25240);
var state_25276__$1 = state_25276;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25276__$1,(15),out,inst_25264);
} else {
if((state_val_25277 === (2))){
var state_25276__$1 = state_25276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25276__$1,(4),ch);
} else {
if((state_val_25277 === (11))){
var inst_25256 = (state_25276[(2)]);
var inst_25257 = (new Array(n));
var inst_25240 = inst_25257;
var inst_25241 = (0);
var state_25276__$1 = (function (){var statearr_25288 = state_25276;
(statearr_25288[(10)] = inst_25256);

(statearr_25288[(7)] = inst_25241);

(statearr_25288[(8)] = inst_25240);

return statearr_25288;
})();
var statearr_25289_25319 = state_25276__$1;
(statearr_25289_25319[(2)] = null);

(statearr_25289_25319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (9))){
var inst_25240 = (state_25276[(8)]);
var inst_25254 = cljs.core.vec.call(null,inst_25240);
var state_25276__$1 = state_25276;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25276__$1,(11),out,inst_25254);
} else {
if((state_val_25277 === (5))){
var inst_25244 = (state_25276[(9)]);
var inst_25241 = (state_25276[(7)]);
var inst_25240 = (state_25276[(8)]);
var inst_25249 = (state_25276[(11)]);
var inst_25248 = (inst_25240[inst_25241] = inst_25244);
var inst_25249__$1 = (inst_25241 + (1));
var inst_25250 = (inst_25249__$1 < n);
var state_25276__$1 = (function (){var statearr_25290 = state_25276;
(statearr_25290[(12)] = inst_25248);

(statearr_25290[(11)] = inst_25249__$1);

return statearr_25290;
})();
if(cljs.core.truth_(inst_25250)){
var statearr_25291_25320 = state_25276__$1;
(statearr_25291_25320[(1)] = (8));

} else {
var statearr_25292_25321 = state_25276__$1;
(statearr_25292_25321[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (14))){
var inst_25269 = (state_25276[(2)]);
var inst_25270 = cljs.core.async.close_BANG_.call(null,out);
var state_25276__$1 = (function (){var statearr_25294 = state_25276;
(statearr_25294[(13)] = inst_25269);

return statearr_25294;
})();
var statearr_25295_25322 = state_25276__$1;
(statearr_25295_25322[(2)] = inst_25270);

(statearr_25295_25322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (10))){
var inst_25260 = (state_25276[(2)]);
var state_25276__$1 = state_25276;
var statearr_25296_25323 = state_25276__$1;
(statearr_25296_25323[(2)] = inst_25260);

(statearr_25296_25323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25277 === (8))){
var inst_25240 = (state_25276[(8)]);
var inst_25249 = (state_25276[(11)]);
var tmp25293 = inst_25240;
var inst_25240__$1 = tmp25293;
var inst_25241 = inst_25249;
var state_25276__$1 = (function (){var statearr_25297 = state_25276;
(statearr_25297[(7)] = inst_25241);

(statearr_25297[(8)] = inst_25240__$1);

return statearr_25297;
})();
var statearr_25298_25324 = state_25276__$1;
(statearr_25298_25324[(2)] = null);

(statearr_25298_25324[(1)] = (2));


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
});})(c__22650__auto___25310,out))
;
return ((function (switch__22538__auto__,c__22650__auto___25310,out){
return (function() {
var cljs$core$async$state_machine__22539__auto__ = null;
var cljs$core$async$state_machine__22539__auto____0 = (function (){
var statearr_25302 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25302[(0)] = cljs$core$async$state_machine__22539__auto__);

(statearr_25302[(1)] = (1));

return statearr_25302;
});
var cljs$core$async$state_machine__22539__auto____1 = (function (state_25276){
while(true){
var ret_value__22540__auto__ = (function (){try{while(true){
var result__22541__auto__ = switch__22538__auto__.call(null,state_25276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22541__auto__;
}
break;
}
}catch (e25303){if((e25303 instanceof Object)){
var ex__22542__auto__ = e25303;
var statearr_25304_25325 = state_25276;
(statearr_25304_25325[(5)] = ex__22542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25303;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25326 = state_25276;
state_25276 = G__25326;
continue;
} else {
return ret_value__22540__auto__;
}
break;
}
});
cljs$core$async$state_machine__22539__auto__ = function(state_25276){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22539__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22539__auto____1.call(this,state_25276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22539__auto____0;
cljs$core$async$state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22539__auto____1;
return cljs$core$async$state_machine__22539__auto__;
})()
;})(switch__22538__auto__,c__22650__auto___25310,out))
})();
var state__22652__auto__ = (function (){var statearr_25305 = f__22651__auto__.call(null);
(statearr_25305[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22650__auto___25310);

return statearr_25305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22652__auto__);
});})(c__22650__auto___25310,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args25327 = [];
var len__17899__auto___25401 = arguments.length;
var i__17900__auto___25402 = (0);
while(true){
if((i__17900__auto___25402 < len__17899__auto___25401)){
args25327.push((arguments[i__17900__auto___25402]));

var G__25403 = (i__17900__auto___25402 + (1));
i__17900__auto___25402 = G__25403;
continue;
} else {
}
break;
}

var G__25329 = args25327.length;
switch (G__25329) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25327.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22650__auto___25405 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22650__auto___25405,out){
return (function (){
var f__22651__auto__ = (function (){var switch__22538__auto__ = ((function (c__22650__auto___25405,out){
return (function (state_25371){
var state_val_25372 = (state_25371[(1)]);
if((state_val_25372 === (7))){
var inst_25367 = (state_25371[(2)]);
var state_25371__$1 = state_25371;
var statearr_25373_25406 = state_25371__$1;
(statearr_25373_25406[(2)] = inst_25367);

(statearr_25373_25406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25372 === (1))){
var inst_25330 = [];
var inst_25331 = inst_25330;
var inst_25332 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25371__$1 = (function (){var statearr_25374 = state_25371;
(statearr_25374[(7)] = inst_25332);

(statearr_25374[(8)] = inst_25331);

return statearr_25374;
})();
var statearr_25375_25407 = state_25371__$1;
(statearr_25375_25407[(2)] = null);

(statearr_25375_25407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25372 === (4))){
var inst_25335 = (state_25371[(9)]);
var inst_25335__$1 = (state_25371[(2)]);
var inst_25336 = (inst_25335__$1 == null);
var inst_25337 = cljs.core.not.call(null,inst_25336);
var state_25371__$1 = (function (){var statearr_25376 = state_25371;
(statearr_25376[(9)] = inst_25335__$1);

return statearr_25376;
})();
if(inst_25337){
var statearr_25377_25408 = state_25371__$1;
(statearr_25377_25408[(1)] = (5));

} else {
var statearr_25378_25409 = state_25371__$1;
(statearr_25378_25409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25372 === (15))){
var inst_25361 = (state_25371[(2)]);
var state_25371__$1 = state_25371;
var statearr_25379_25410 = state_25371__$1;
(statearr_25379_25410[(2)] = inst_25361);

(statearr_25379_25410[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25372 === (13))){
var state_25371__$1 = state_25371;
var statearr_25380_25411 = state_25371__$1;
(statearr_25380_25411[(2)] = null);

(statearr_25380_25411[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25372 === (6))){
var inst_25331 = (state_25371[(8)]);
var inst_25356 = inst_25331.length;
var inst_25357 = (inst_25356 > (0));
var state_25371__$1 = state_25371;
if(cljs.core.truth_(inst_25357)){
var statearr_25381_25412 = state_25371__$1;
(statearr_25381_25412[(1)] = (12));

} else {
var statearr_25382_25413 = state_25371__$1;
(statearr_25382_25413[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25372 === (3))){
var inst_25369 = (state_25371[(2)]);
var state_25371__$1 = state_25371;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25371__$1,inst_25369);
} else {
if((state_val_25372 === (12))){
var inst_25331 = (state_25371[(8)]);
var inst_25359 = cljs.core.vec.call(null,inst_25331);
var state_25371__$1 = state_25371;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25371__$1,(15),out,inst_25359);
} else {
if((state_val_25372 === (2))){
var state_25371__$1 = state_25371;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25371__$1,(4),ch);
} else {
if((state_val_25372 === (11))){
var inst_25339 = (state_25371[(10)]);
var inst_25335 = (state_25371[(9)]);
var inst_25349 = (state_25371[(2)]);
var inst_25350 = [];
var inst_25351 = inst_25350.push(inst_25335);
var inst_25331 = inst_25350;
var inst_25332 = inst_25339;
var state_25371__$1 = (function (){var statearr_25383 = state_25371;
(statearr_25383[(7)] = inst_25332);

(statearr_25383[(8)] = inst_25331);

(statearr_25383[(11)] = inst_25349);

(statearr_25383[(12)] = inst_25351);

return statearr_25383;
})();
var statearr_25384_25414 = state_25371__$1;
(statearr_25384_25414[(2)] = null);

(statearr_25384_25414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25372 === (9))){
var inst_25331 = (state_25371[(8)]);
var inst_25347 = cljs.core.vec.call(null,inst_25331);
var state_25371__$1 = state_25371;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25371__$1,(11),out,inst_25347);
} else {
if((state_val_25372 === (5))){
var inst_25339 = (state_25371[(10)]);
var inst_25332 = (state_25371[(7)]);
var inst_25335 = (state_25371[(9)]);
var inst_25339__$1 = f.call(null,inst_25335);
var inst_25340 = cljs.core._EQ_.call(null,inst_25339__$1,inst_25332);
var inst_25341 = cljs.core.keyword_identical_QMARK_.call(null,inst_25332,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25342 = (inst_25340) || (inst_25341);
var state_25371__$1 = (function (){var statearr_25385 = state_25371;
(statearr_25385[(10)] = inst_25339__$1);

return statearr_25385;
})();
if(cljs.core.truth_(inst_25342)){
var statearr_25386_25415 = state_25371__$1;
(statearr_25386_25415[(1)] = (8));

} else {
var statearr_25387_25416 = state_25371__$1;
(statearr_25387_25416[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25372 === (14))){
var inst_25364 = (state_25371[(2)]);
var inst_25365 = cljs.core.async.close_BANG_.call(null,out);
var state_25371__$1 = (function (){var statearr_25389 = state_25371;
(statearr_25389[(13)] = inst_25364);

return statearr_25389;
})();
var statearr_25390_25417 = state_25371__$1;
(statearr_25390_25417[(2)] = inst_25365);

(statearr_25390_25417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25372 === (10))){
var inst_25354 = (state_25371[(2)]);
var state_25371__$1 = state_25371;
var statearr_25391_25418 = state_25371__$1;
(statearr_25391_25418[(2)] = inst_25354);

(statearr_25391_25418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25372 === (8))){
var inst_25339 = (state_25371[(10)]);
var inst_25331 = (state_25371[(8)]);
var inst_25335 = (state_25371[(9)]);
var inst_25344 = inst_25331.push(inst_25335);
var tmp25388 = inst_25331;
var inst_25331__$1 = tmp25388;
var inst_25332 = inst_25339;
var state_25371__$1 = (function (){var statearr_25392 = state_25371;
(statearr_25392[(7)] = inst_25332);

(statearr_25392[(14)] = inst_25344);

(statearr_25392[(8)] = inst_25331__$1);

return statearr_25392;
})();
var statearr_25393_25419 = state_25371__$1;
(statearr_25393_25419[(2)] = null);

(statearr_25393_25419[(1)] = (2));


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
});})(c__22650__auto___25405,out))
;
return ((function (switch__22538__auto__,c__22650__auto___25405,out){
return (function() {
var cljs$core$async$state_machine__22539__auto__ = null;
var cljs$core$async$state_machine__22539__auto____0 = (function (){
var statearr_25397 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25397[(0)] = cljs$core$async$state_machine__22539__auto__);

(statearr_25397[(1)] = (1));

return statearr_25397;
});
var cljs$core$async$state_machine__22539__auto____1 = (function (state_25371){
while(true){
var ret_value__22540__auto__ = (function (){try{while(true){
var result__22541__auto__ = switch__22538__auto__.call(null,state_25371);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22541__auto__;
}
break;
}
}catch (e25398){if((e25398 instanceof Object)){
var ex__22542__auto__ = e25398;
var statearr_25399_25420 = state_25371;
(statearr_25399_25420[(5)] = ex__22542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25371);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25421 = state_25371;
state_25371 = G__25421;
continue;
} else {
return ret_value__22540__auto__;
}
break;
}
});
cljs$core$async$state_machine__22539__auto__ = function(state_25371){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22539__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22539__auto____1.call(this,state_25371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22539__auto____0;
cljs$core$async$state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22539__auto____1;
return cljs$core$async$state_machine__22539__auto__;
})()
;})(switch__22538__auto__,c__22650__auto___25405,out))
})();
var state__22652__auto__ = (function (){var statearr_25400 = f__22651__auto__.call(null);
(statearr_25400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22650__auto___25405);

return statearr_25400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22652__auto__);
});})(c__22650__auto___25405,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map