(this.webpackJsonpterrayield=this.webpackJsonpterrayield||[]).push([[4],{1735:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return o}));var a={average:.67,fast:1,fastest:1.5},c=function(e){var t,n=e.inboundData,a=e.chain,c=n.find((function(e){return e.chain===a}));return Number(null!==(t=null===c||void 0===c?void 0:c.gas_rate)&&void 0!==t?t:0)},o=function(e){var t=e.inboundData,n=e.chain,o=e.feeOptionType;return c({inboundData:t,chain:n})*a[o]}},1736:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),c=n(113),o=n(21),i=n(127),s=n(1735),r=function(){var e=Object(c.b)(),t=Object(c.c)((function(e){return e.app})).feeOptionType,n=Object(c.c)((function(e){return e.wallet})).wallet,r=Object(c.c)((function(e){return e.midgard})).inboundData,u=Object(a.useCallback)((function(t){e(i.getWalletByChain(t))}),[e]),l=Object(a.useCallback)((function(){e(i.loadAllWallets())}),[e]);return{getMaxBalance:Object(a.useCallback)((function(e){if(!(null===n||void 0===n?void 0:n[e.L1Chain]))return o.Amount.fromAssetAmount(0,8);var a=Object(s.b)({inboundData:r,chain:e.L1Chain,feeOptionType:t}),c=o.NetworkFee.getNetworkFeeByAsset({asset:e,gasRate:a,direction:"inbound"}),i=Object(o.getAssetBalance)(e,n).amount,u=e.isGasAsset()?i.sub(c.mul(1.5).amount):i;return u.gt(0)?u:o.Amount.fromAssetAmount(0,e.decimal)}),[n,t,r]),reloadAllBalance:l,reloadBalanceByChain:u,wallet:n}}},1737:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),c=n(21),o=n(149),i=n(118),s=n(1735),r=function(e){var t=e.inputAsset,n=e.outputAsset,r=Object(o.a)().feeOptionType,u=Object(i.a)(),l=u.inboundData,d=u.pools,b=Object(a.useMemo)((function(){var e=Object(s.b)({inboundData:l,chain:t.L1Chain,feeOptionType:r});return c.NetworkFee.getNetworkFeeByAsset({asset:t,gasRate:e,direction:"inbound"})}),[t,l,r]),j=Object(a.useMemo)((function(){if(!n)return null;var e=Object(s.a)({inboundData:l,chain:n.L1Chain});return c.NetworkFee.getNetworkFeeByAsset({asset:n,gasRate:e,direction:"outbound"})}),[n,l]),p=Object(a.useMemo)((function(){if(!j)return b;var e=new c.AssetAmount(t,c.Amount.fromAssetAmount(j.totalPriceIn(t,d).price,t.decimal));return b.asset.eq(t)?b.add(e):new c.AssetAmount(t,c.Amount.fromAssetAmount(b.totalPriceIn(t,d).price,t.decimal)).add(e)}),[t,b,j,d]),f=Object(a.useMemo)((function(){return p.totalPriceIn(c.Asset.USD(),d)}),[p,d]);return{totalFee:p,inboundFee:b,outboundFee:j,totalFeeInUSD:f}}},1747:function(e,t,n){"use strict";n.r(t);var a,c,o=n(2),i=n.n(o),s=n(13),r=n(23),u=n(0),l=n(83),d=n(248),b=n(21),j=n(118),p=n(150),f=n(1736),m=n(1737),O=n(75),h=n(63),x=n(8),g=n(5),v=n(6),y=n(43),C=Object(g.d)(d.Panel).withConfig({displayName:"Sendstyle__Container",componentId:"pimnv3-0"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;background:",";margin-left:auto;margin-right:auto;padding-top:0px;border-radius:10px;border:1px solid ",";"],Object(v.palette)("background",3),Object(v.palette)("background",5)),A=g.d.div.withConfig({displayName:"Sendstyle__ContentPanel",componentId:"pimnv3-1"})(["display:flex;flex-direction:column;width:100%;padding:16px 8px 16px 8px;",""],y.a.sm(a||(a=Object(x.a)(["\n    padding: 16px 12px 4px 12px;\n  "])))),w=g.d.div.withConfig({displayName:"Sendstyle__PoolSelect",componentId:"pimnv3-2"})(["display:flex;justify-content:space-between;align-items:center;padding:8px 16px;"]),k=g.d.div.withConfig({displayName:"Sendstyle__FormItem",componentId:"pimnv3-3"})(["display:flex;flex-direction:column;margin:8px 0;"]),S=Object(g.d)(d.Label).attrs({weight:"bold"}).withConfig({displayName:"Sendstyle__FormLabel",componentId:"pimnv3-4"})(["margin-bottom:8px;"]),M=g.d.div.withConfig({displayName:"Sendstyle__ConfirmModalContent",componentId:"pimnv3-5"})(["display:flex;flex-direction:column;padding:10px;"]),F=g.d.div.withConfig({displayName:"Sendstyle__MemoTypes",componentId:"pimnv3-6"})(["display:flex;align-items:center;justify-content:space-between;width:130px;"]),N=g.d.div.withConfig({displayName:"Sendstyle__ConfirmButtonContainer",componentId:"pimnv3-7"})(["display:flex;justify-content:center;align-items:center;width:100%;padding:2% 2%;margin-top:14px;button{flex:1;}"]),I=n(1);!function(e){e[e.NORMAL=0]="NORMAL",e[e.EXPERT=1]="EXPERT"}(c||(c={}));var T=function(e){var t=e.sendAsset,n=e.wallet,a=Object(l.f)(),o=Object(j.a)().pools,p=Object(f.a)().getMaxBalance,x=Object(u.useMemo)((function(){return p(t)}),[t,p]),g=Object(m.a)({inputAsset:t}),v=g.inboundFee,y=g.totalFeeInUSD,T=Object(u.useMemo)((function(){var e=o.map((function(e){return e.asset}));return e.push(b.Asset.RUNE()),e}),[o]),L=Object(u.useState)(c.NORMAL),R=Object(r.a)(L,2),_=R[0],B=R[1],P=Object(u.useMemo)((function(){return _===c.EXPERT}),[_]),D=Object(u.useState)(b.Amount.fromAssetAmount(0,8)),E=Object(r.a)(D,2),z=E[0],U=E[1],W=Object(u.useState)(0),X=Object(r.a)(W,2),G=X[0],H=X[1],J=Object(u.useState)(""),V=Object(r.a)(J,2),q=V[0],K=V[1],Q=Object(u.useState)(""),Y=Object(r.a)(Q,2),Z=Y[0],$=Y[1],ee=Object(u.useMemo)((function(){return P?Z:q}),[P,Z,q]),te=Object(u.useState)(""),ne=Object(r.a)(te,2),ae=ne[0],ce=ne[1],oe=Object(u.useState)(!1),ie=Object(r.a)(oe,2),se=ie[0],re=ie[1],ue=Object(u.useState)(t),le=Object(r.a)(ue,2),de=le[0],be=le[1],je=Object(u.useMemo)((function(){return Object(b.getWalletAssets)(n)}),[n]),pe=Object(u.useMemo)((function(){return n?Object(b.getAssetBalance)(t,n).amount:b.Amount.fromAssetAmount(0,8)}),[t,n]);Object(u.useEffect)((function(){P&&function(){var e=Object(s.a)(i.a.mark((function e(){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.getInboundDataByChain(t.L1Chain);case 2:n=e.sent,a=n.address,$(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[P,t]);var fe=Object(u.useCallback)((function(e){a.push(Object(h.p)(e))}),[a]),me=Object(u.useCallback)((function(e){be(e),ce("")}),[]),Oe=Object(u.useCallback)((function(e){e.gt(x)?(U(x),H(100)):(U(e),H(e.div(x).mul(100).assetAmount.toNumber()))}),[x]),he=Object(u.useCallback)((function(e){H(e);var t=x.mul(e).div(100);U(t)}),[x]),xe=Object(u.useCallback)((function(){he(100)}),[he]),ge=Object(u.useCallback)((function(e){var t=e.target.value;"pool"===t?B(c.EXPERT):(B(c.NORMAL),$("")),K(t)}),[]),ve=Object(u.useCallback)((function(e){var t=e.target.value;$(t)}),[]),ye=Object(u.useCallback)((function(e){ce(e.target.value)}),[]),Ce=Object(u.useCallback)(Object(s.a)(i.a.mark((function e(){var n,a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(re(!1),!t){e.next=14;break}return n=new b.AssetAmount(t,z),e.prev=3,e.next=6,O.a.send({assetAmount:n,recipient:ee,memo:ae});case 6:a=e.sent,c=O.a.getExplorerTxUrl(t.L1Chain,a),Object(d.Notification)({type:"open",message:"View Send Tx.",description:"Transaction sent successfully!",btn:Object(I.jsx)("a",{href:c,target:"_blank",rel:"noopener noreferrer",children:"View Transaction"}),duration:20}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),Object(d.Notification)({type:"error",message:"Send Transaction Failed.",description:null===e.t0||void 0===e.t0?void 0:e.t0.toString(),duration:20});case 14:case"end":return e.stop()}}),e,null,[[3,11]])}))),[t,z,ee,ae]),Ae=Object(u.useCallback)((function(){re(!1)}),[]),we=Object(u.useCallback)((function(){P||O.a.validateAddress({chain:t.L1Chain,address:ee})?re(!0):Object(d.Notification)({type:"warning",message:"Recipient Address is not valid ".concat(t.L1Chain," Address, please check your address again."),duration:20})}),[P,t,ee]),ke=Object(u.useCallback)((function(){ce(b.Memo.depositMemo(t))}),[t]),Se=Object(u.useCallback)((function(){if(de){var e=Object(b.getWalletAddressByChain)(n,de.L1Chain)||"";ce(b.Memo.swapMemo(de,e))}}),[de,n]),Me=Object(u.useMemo)((function(){return Object(I.jsxs)(M,{children:[Object(I.jsx)(d.Information,{title:"From",description:"".concat(z.toSignificant(6)," ").concat(t.ticker.toUpperCase())}),Object(I.jsx)(d.Information,{title:"Recipient",description:"".concat(q.substr(0,3),"...").concat(q.substr(-3))}),Object(I.jsx)(d.Information,{title:"Transaction Fee",description:"".concat(v.toCurrencyFormat()," (").concat(y.toCurrencyFormat(2),")"),tooltip:"Gas fee to send the transaction, There's no extra charges from THORChain Protocol"})]})}),[z,v,t,y,q]),Fe=Object(u.useMemo)((function(){return"".concat(t.ticker," (").concat(t.type,")")}),[t]);return Object(I.jsxs)(C,{children:[Object(I.jsx)(d.Helmet,{title:"From ".concat(Fe),content:"From ".concat(Fe)}),Object(I.jsxs)(d.ContentTitle,{justifyContent:"space-between",children:[Object(I.jsxs)(d.Label,{size:"large",weight:"bold",color:"gold",children:["From ",Fe]}),Object(I.jsx)(d.SettingsOverlay,{})]}),Object(I.jsxs)(A,{children:[Object(I.jsx)(d.AssetInputCard,{title:"From",asset:t,assets:je,amount:z,balance:pe,onChange:Oe,onSelect:fe,onMax:xe,wallet:n||void 0}),Object(I.jsx)(d.Slider,{value:G,onChange:he,withLabel:!0}),P&&Object(I.jsxs)(w,{children:[Object(I.jsx)(d.Label,{size:"big",align:"center",children:"Output Asset"}),Object(I.jsx)(d.AssetSelect,{asset:de,assets:T,onSelect:me})]}),Object(I.jsxs)(k,{children:[Object(I.jsx)(S,{children:"Recipient"}),Object(I.jsx)(d.Input,{typevalue:"ghost",sizevalue:"big",value:q,onChange:ge,placeholder:"Recipient"})]}),P&&Object(I.jsxs)(k,{children:[Object(I.jsx)(S,{children:"Pool Address"}),Object(I.jsx)(d.Input,{typevalue:"ghost",sizevalue:"big",value:Z,onChange:ve,placeholder:"Pool Address"})]}),P&&Object(I.jsxs)(k,{children:[Object(I.jsx)(S,{children:"Select Memo Type"}),Object(I.jsxs)(F,{children:[Object(I.jsx)(d.Button,{sizevalue:"small",color:"primary",typevalue:"outline",onClick:ke,children:"Deposit"}),Object(I.jsx)(d.Button,{sizevalue:"small",color:"primary",typevalue:"outline",onClick:Se,children:"Swap"})]})]}),Object(I.jsxs)(k,{children:[Object(I.jsx)(S,{children:"Memo"}),Object(I.jsx)(d.Input,{typevalue:"ghost",sizevalue:"big",value:ae,onChange:ye,placeholder:"Memo"})]}),Object(I.jsx)(k,{children:Object(I.jsx)(d.Information,{title:"Transaction Fee",description:"".concat(v.toCurrencyFormat()," (").concat(y.toCurrencyFormat(2),")"),tooltip:"Gas fee to send the transaction, There's no extra charges from THORChain Protocol"})}),Object(I.jsx)(N,{children:Object(I.jsx)(d.FancyButton,{onClick:we,error:!1,children:"Send"})})]}),Object(I.jsx)(d.ConfirmModal,{visible:se,onOk:Ce,onCancel:Ae,inputAssets:[t],children:Me})]})},L=function(){var e=Object(l.h)().asset,t=Object(p.a)().wallet,n=Object(u.useState)(),a=Object(r.a)(n,2),c=a[0],o=a[1];Object(u.useEffect)((function(){(function(){var t=Object(s.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(n=b.Asset.decodeFromURL(e))){t.next=5;break}return t.next=4,n.setDecimal();case 4:o(n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]);var j=Object(u.useMemo)((function(){return c&&Object(b.hasWalletConnected)({wallet:t,inputAssets:[c]})}),[t,c]);return c?t&&j?Object(I.jsx)(T,{sendAsset:c,wallet:t}):Object(I.jsx)(C,{children:Object(I.jsx)(d.Label,{children:"Please connect a wallet."})}):null};t.default=L}}]);
//# sourceMappingURL=4.8ff75e4a.chunk.js.map