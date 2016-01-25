// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__17906__auto__ = [];
var len__17899__auto___26690 = arguments.length;
var i__17900__auto___26691 = (0);
while(true){
if((i__17900__auto___26691 < len__17899__auto___26690)){
args__17906__auto__.push((arguments[i__17900__auto___26691]));

var G__26692 = (i__17900__auto___26691 + (1));
i__17900__auto___26691 = G__26692;
continue;
} else {
}
break;
}

var argseq__17907__auto__ = ((((2) < args__17906__auto__.length))?(new cljs.core.IndexedSeq(args__17906__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17907__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__26682_26693 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__26683_26694 = null;
var count__26684_26695 = (0);
var i__26685_26696 = (0);
while(true){
if((i__26685_26696 < count__26684_26695)){
var k_26697 = cljs.core._nth.call(null,chunk__26683_26694,i__26685_26696);
e.setAttribute(cljs.core.name.call(null,k_26697),cljs.core.get.call(null,attrs,k_26697));

var G__26698 = seq__26682_26693;
var G__26699 = chunk__26683_26694;
var G__26700 = count__26684_26695;
var G__26701 = (i__26685_26696 + (1));
seq__26682_26693 = G__26698;
chunk__26683_26694 = G__26699;
count__26684_26695 = G__26700;
i__26685_26696 = G__26701;
continue;
} else {
var temp__4425__auto___26702 = cljs.core.seq.call(null,seq__26682_26693);
if(temp__4425__auto___26702){
var seq__26682_26703__$1 = temp__4425__auto___26702;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26682_26703__$1)){
var c__17644__auto___26704 = cljs.core.chunk_first.call(null,seq__26682_26703__$1);
var G__26705 = cljs.core.chunk_rest.call(null,seq__26682_26703__$1);
var G__26706 = c__17644__auto___26704;
var G__26707 = cljs.core.count.call(null,c__17644__auto___26704);
var G__26708 = (0);
seq__26682_26693 = G__26705;
chunk__26683_26694 = G__26706;
count__26684_26695 = G__26707;
i__26685_26696 = G__26708;
continue;
} else {
var k_26709 = cljs.core.first.call(null,seq__26682_26703__$1);
e.setAttribute(cljs.core.name.call(null,k_26709),cljs.core.get.call(null,attrs,k_26709));

var G__26710 = cljs.core.next.call(null,seq__26682_26703__$1);
var G__26711 = null;
var G__26712 = (0);
var G__26713 = (0);
seq__26682_26693 = G__26710;
chunk__26683_26694 = G__26711;
count__26684_26695 = G__26712;
i__26685_26696 = G__26713;
continue;
}
} else {
}
}
break;
}

var seq__26686_26714 = cljs.core.seq.call(null,children);
var chunk__26687_26715 = null;
var count__26688_26716 = (0);
var i__26689_26717 = (0);
while(true){
if((i__26689_26717 < count__26688_26716)){
var ch_26718 = cljs.core._nth.call(null,chunk__26687_26715,i__26689_26717);
e.appendChild(ch_26718);

var G__26719 = seq__26686_26714;
var G__26720 = chunk__26687_26715;
var G__26721 = count__26688_26716;
var G__26722 = (i__26689_26717 + (1));
seq__26686_26714 = G__26719;
chunk__26687_26715 = G__26720;
count__26688_26716 = G__26721;
i__26689_26717 = G__26722;
continue;
} else {
var temp__4425__auto___26723 = cljs.core.seq.call(null,seq__26686_26714);
if(temp__4425__auto___26723){
var seq__26686_26724__$1 = temp__4425__auto___26723;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26686_26724__$1)){
var c__17644__auto___26725 = cljs.core.chunk_first.call(null,seq__26686_26724__$1);
var G__26726 = cljs.core.chunk_rest.call(null,seq__26686_26724__$1);
var G__26727 = c__17644__auto___26725;
var G__26728 = cljs.core.count.call(null,c__17644__auto___26725);
var G__26729 = (0);
seq__26686_26714 = G__26726;
chunk__26687_26715 = G__26727;
count__26688_26716 = G__26728;
i__26689_26717 = G__26729;
continue;
} else {
var ch_26730 = cljs.core.first.call(null,seq__26686_26724__$1);
e.appendChild(ch_26730);

var G__26731 = cljs.core.next.call(null,seq__26686_26724__$1);
var G__26732 = null;
var G__26733 = (0);
var G__26734 = (0);
seq__26686_26714 = G__26731;
chunk__26687_26715 = G__26732;
count__26688_26716 = G__26733;
i__26689_26717 = G__26734;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq26679){
var G__26680 = cljs.core.first.call(null,seq26679);
var seq26679__$1 = cljs.core.next.call(null,seq26679);
var G__26681 = cljs.core.first.call(null,seq26679__$1);
var seq26679__$2 = cljs.core.next.call(null,seq26679__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__26680,G__26681,seq26679__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17754__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17755__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17756__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17757__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17758__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17754__auto__,prefer_table__17755__auto__,method_cache__17756__auto__,cached_hierarchy__17757__auto__,hierarchy__17758__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17754__auto__,prefer_table__17755__auto__,method_cache__17756__auto__,cached_hierarchy__17757__auto__,hierarchy__17758__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17758__auto__,method_table__17754__auto__,prefer_table__17755__auto__,method_cache__17756__auto__,cached_hierarchy__17757__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_26735 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_26735.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_26735.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_26735.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_26735);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__26736,st_map){
var map__26741 = p__26736;
var map__26741__$1 = ((((!((map__26741 == null)))?((((map__26741.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26741.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26741):map__26741);
var container_el = cljs.core.get.call(null,map__26741__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__26741,map__26741__$1,container_el){
return (function (p__26743){
var vec__26744 = p__26743;
var k = cljs.core.nth.call(null,vec__26744,(0),null);
var v = cljs.core.nth.call(null,vec__26744,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__26741,map__26741__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__26745,dom_str){
var map__26748 = p__26745;
var map__26748__$1 = ((((!((map__26748 == null)))?((((map__26748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26748):map__26748);
var c = map__26748__$1;
var content_area_el = cljs.core.get.call(null,map__26748__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__26750){
var map__26753 = p__26750;
var map__26753__$1 = ((((!((map__26753 == null)))?((((map__26753.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26753.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26753):map__26753);
var content_area_el = cljs.core.get.call(null,map__26753__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__22648__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22648__auto__){
return (function (){
var f__22649__auto__ = (function (){var switch__22536__auto__ = ((function (c__22648__auto__){
return (function (state_26796){
var state_val_26797 = (state_26796[(1)]);
if((state_val_26797 === (1))){
var inst_26781 = (state_26796[(7)]);
var inst_26781__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_26782 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_26783 = ["10px","10px","100%","68px","1.0"];
var inst_26784 = cljs.core.PersistentHashMap.fromArrays(inst_26782,inst_26783);
var inst_26785 = cljs.core.merge.call(null,inst_26784,style);
var inst_26786 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26781__$1,inst_26785);
var inst_26787 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_26781__$1,msg);
var inst_26788 = cljs.core.async.timeout.call(null,(300));
var state_26796__$1 = (function (){var statearr_26798 = state_26796;
(statearr_26798[(8)] = inst_26787);

(statearr_26798[(7)] = inst_26781__$1);

(statearr_26798[(9)] = inst_26786);

return statearr_26798;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26796__$1,(2),inst_26788);
} else {
if((state_val_26797 === (2))){
var inst_26781 = (state_26796[(7)]);
var inst_26790 = (state_26796[(2)]);
var inst_26791 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_26792 = ["auto"];
var inst_26793 = cljs.core.PersistentHashMap.fromArrays(inst_26791,inst_26792);
var inst_26794 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26781,inst_26793);
var state_26796__$1 = (function (){var statearr_26799 = state_26796;
(statearr_26799[(10)] = inst_26790);

return statearr_26799;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26796__$1,inst_26794);
} else {
return null;
}
}
});})(c__22648__auto__))
;
return ((function (switch__22536__auto__,c__22648__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__22537__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__22537__auto____0 = (function (){
var statearr_26803 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26803[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__22537__auto__);

(statearr_26803[(1)] = (1));

return statearr_26803;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__22537__auto____1 = (function (state_26796){
while(true){
var ret_value__22538__auto__ = (function (){try{while(true){
var result__22539__auto__ = switch__22536__auto__.call(null,state_26796);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22539__auto__;
}
break;
}
}catch (e26804){if((e26804 instanceof Object)){
var ex__22540__auto__ = e26804;
var statearr_26805_26807 = state_26796;
(statearr_26805_26807[(5)] = ex__22540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26796);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26808 = state_26796;
state_26796 = G__26808;
continue;
} else {
return ret_value__22538__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__22537__auto__ = function(state_26796){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__22537__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__22537__auto____1.call(this,state_26796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__22537__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__22537__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__22537__auto__;
})()
;})(switch__22536__auto__,c__22648__auto__))
})();
var state__22650__auto__ = (function (){var statearr_26806 = f__22649__auto__.call(null);
(statearr_26806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22648__auto__);

return statearr_26806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22650__auto__);
});})(c__22648__auto__))
);

return c__22648__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__26810 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__26810,(0),null);
var ln = cljs.core.nth.call(null,vec__26810,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__26813 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__26813,(0),null);
var file_line = cljs.core.nth.call(null,vec__26813,(1),null);
var file_column = cljs.core.nth.call(null,vec__26813,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__26813,file_name,file_line,file_column){
return (function (p1__26811_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__26811_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__26813,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16841__auto__ = file_line;
if(cljs.core.truth_(or__16841__auto__)){
return or__16841__auto__;
} else {
var and__16829__auto__ = cause;
if(cljs.core.truth_(and__16829__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16829__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__26816 = figwheel.client.heads_up.ensure_container.call(null);
var map__26816__$1 = ((((!((map__26816 == null)))?((((map__26816.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26816.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26816):map__26816);
var content_area_el = cljs.core.get.call(null,map__26816__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__22648__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22648__auto__){
return (function (){
var f__22649__auto__ = (function (){var switch__22536__auto__ = ((function (c__22648__auto__){
return (function (state_26864){
var state_val_26865 = (state_26864[(1)]);
if((state_val_26865 === (1))){
var inst_26847 = (state_26864[(7)]);
var inst_26847__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_26848 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_26849 = ["0.0"];
var inst_26850 = cljs.core.PersistentHashMap.fromArrays(inst_26848,inst_26849);
var inst_26851 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26847__$1,inst_26850);
var inst_26852 = cljs.core.async.timeout.call(null,(300));
var state_26864__$1 = (function (){var statearr_26866 = state_26864;
(statearr_26866[(7)] = inst_26847__$1);

(statearr_26866[(8)] = inst_26851);

return statearr_26866;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26864__$1,(2),inst_26852);
} else {
if((state_val_26865 === (2))){
var inst_26847 = (state_26864[(7)]);
var inst_26854 = (state_26864[(2)]);
var inst_26855 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_26856 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_26857 = cljs.core.PersistentHashMap.fromArrays(inst_26855,inst_26856);
var inst_26858 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26847,inst_26857);
var inst_26859 = cljs.core.async.timeout.call(null,(200));
var state_26864__$1 = (function (){var statearr_26867 = state_26864;
(statearr_26867[(9)] = inst_26854);

(statearr_26867[(10)] = inst_26858);

return statearr_26867;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26864__$1,(3),inst_26859);
} else {
if((state_val_26865 === (3))){
var inst_26847 = (state_26864[(7)]);
var inst_26861 = (state_26864[(2)]);
var inst_26862 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_26847,"");
var state_26864__$1 = (function (){var statearr_26868 = state_26864;
(statearr_26868[(11)] = inst_26861);

return statearr_26868;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26864__$1,inst_26862);
} else {
return null;
}
}
}
});})(c__22648__auto__))
;
return ((function (switch__22536__auto__,c__22648__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__22537__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__22537__auto____0 = (function (){
var statearr_26872 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26872[(0)] = figwheel$client$heads_up$clear_$_state_machine__22537__auto__);

(statearr_26872[(1)] = (1));

return statearr_26872;
});
var figwheel$client$heads_up$clear_$_state_machine__22537__auto____1 = (function (state_26864){
while(true){
var ret_value__22538__auto__ = (function (){try{while(true){
var result__22539__auto__ = switch__22536__auto__.call(null,state_26864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22539__auto__;
}
break;
}
}catch (e26873){if((e26873 instanceof Object)){
var ex__22540__auto__ = e26873;
var statearr_26874_26876 = state_26864;
(statearr_26874_26876[(5)] = ex__22540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26873;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26877 = state_26864;
state_26864 = G__26877;
continue;
} else {
return ret_value__22538__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__22537__auto__ = function(state_26864){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__22537__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__22537__auto____1.call(this,state_26864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__22537__auto____0;
figwheel$client$heads_up$clear_$_state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__22537__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__22537__auto__;
})()
;})(switch__22536__auto__,c__22648__auto__))
})();
var state__22650__auto__ = (function (){var statearr_26875 = f__22649__auto__.call(null);
(statearr_26875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22648__auto__);

return statearr_26875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22650__auto__);
});})(c__22648__auto__))
);

return c__22648__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__22648__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22648__auto__){
return (function (){
var f__22649__auto__ = (function (){var switch__22536__auto__ = ((function (c__22648__auto__){
return (function (state_26909){
var state_val_26910 = (state_26909[(1)]);
if((state_val_26910 === (1))){
var inst_26899 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_26909__$1 = state_26909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26909__$1,(2),inst_26899);
} else {
if((state_val_26910 === (2))){
var inst_26901 = (state_26909[(2)]);
var inst_26902 = cljs.core.async.timeout.call(null,(400));
var state_26909__$1 = (function (){var statearr_26911 = state_26909;
(statearr_26911[(7)] = inst_26901);

return statearr_26911;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26909__$1,(3),inst_26902);
} else {
if((state_val_26910 === (3))){
var inst_26904 = (state_26909[(2)]);
var inst_26905 = figwheel.client.heads_up.clear.call(null);
var state_26909__$1 = (function (){var statearr_26912 = state_26909;
(statearr_26912[(8)] = inst_26904);

return statearr_26912;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26909__$1,(4),inst_26905);
} else {
if((state_val_26910 === (4))){
var inst_26907 = (state_26909[(2)]);
var state_26909__$1 = state_26909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26909__$1,inst_26907);
} else {
return null;
}
}
}
}
});})(c__22648__auto__))
;
return ((function (switch__22536__auto__,c__22648__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__22537__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__22537__auto____0 = (function (){
var statearr_26916 = [null,null,null,null,null,null,null,null,null];
(statearr_26916[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__22537__auto__);

(statearr_26916[(1)] = (1));

return statearr_26916;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__22537__auto____1 = (function (state_26909){
while(true){
var ret_value__22538__auto__ = (function (){try{while(true){
var result__22539__auto__ = switch__22536__auto__.call(null,state_26909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22539__auto__;
}
break;
}
}catch (e26917){if((e26917 instanceof Object)){
var ex__22540__auto__ = e26917;
var statearr_26918_26920 = state_26909;
(statearr_26918_26920[(5)] = ex__22540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26921 = state_26909;
state_26909 = G__26921;
continue;
} else {
return ret_value__22538__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__22537__auto__ = function(state_26909){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__22537__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__22537__auto____1.call(this,state_26909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__22537__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__22537__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__22537__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__22537__auto__;
})()
;})(switch__22536__auto__,c__22648__auto__))
})();
var state__22650__auto__ = (function (){var statearr_26919 = f__22649__auto__.call(null);
(statearr_26919[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22648__auto__);

return statearr_26919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22650__auto__);
});})(c__22648__auto__))
);

return c__22648__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map