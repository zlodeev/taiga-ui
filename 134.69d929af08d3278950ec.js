(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{uDUp:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiCopyProcessorModule",(function(){return j}));var o=n("An66"),r=n("3kIJ"),i=n("1VvW"),c=n("SVIu"),a=n("D57K"),s=n("FTac"),l=n("n+W0"),p=n("6tvi"),d=n("5E2i"),u=n("kZht");let m=(()=>{class e{constructor(e){this.windowRef=e,this.tuiCopyProcessor=d.a}onCopy(e){var t;const n=Object(p.U)(this.windowRef);n&&(null===(t=e.clipboardData)||void 0===t||t.setData("text/plain",this.tuiCopyProcessor(n)))}}return e.\u0275fac=function(t){return new(t||e)(u["\u0275\u0275directiveInject"](s.j))},e.\u0275dir=u["\u0275\u0275defineDirective"]({type:e,selectors:[["","tuiCopyProcessor",""]],hostBindings:function(e,t){1&e&&u["\u0275\u0275listener"]("copy.prevent",(function(e){return t.onCopy(e)}))},inputs:{tuiCopyProcessor:"tuiCopyProcessor"}}),Object(a.b)([Object(l.a)()],e.prototype,"tuiCopyProcessor",void 0),e})(),f=(()=>{class e{}return e.\u0275mod=u["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)}}),e})();var y=n("dvRg"),b=n("OZlg"),h=n("e0eB"),C=n("iyc4"),v=n("Qq0t"),g=n("YjIA"),x=n("xCPM");let S=(()=>{class e{constructor(e,t){this.format=e,this.alertService=t,this.value=12345.67,this.numberProcessor=e=>e.replace(this.format.decimalSeparator,".").replace(new RegExp(this.format.thousandSeparator,"g"),""),this.textProcessor=e=>e.toUpperCase()}onCopy(e){var t,n;this.alertService.open(null!==(n=null===(t=e.clipboardData)||void 0===t?void 0:t.getData("text/plain"))&&void 0!==n?n:"").subscribe()}}return e.\u0275fac=function(t){return new(t||e)(u["\u0275\u0275directiveInject"](v.H),u["\u0275\u0275directiveInject"](v.Y))},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-copy-processor-example-1"]],hostBindings:function(e,t){1&e&&u["\u0275\u0275listener"]("copy",(function(e){return t.onCopy(e)}))},decls:4,vars:3,consts:[[1,"tui-space_bottom-2",3,"tuiCopyProcessor","ngModel","ngModelChange"],[3,"tuiCopyProcessor"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"tui-input-number",0),u["\u0275\u0275listener"]("ngModelChange",(function(e){return t.value=e})),u["\u0275\u0275text"](1," Copy this\n"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](2,"div",1),u["\u0275\u0275text"](3,"Try copy this text"),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275property"]("tuiCopyProcessor",t.numberProcessor)("ngModel",t.value),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("tuiCopyProcessor",t.textProcessor))},directives:[g.a,x.a,m,r.NgControlStatus,r.NgModel],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),e})();var w=n("u8jZ");function P(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"p"),u["\u0275\u0275i18n"](1,5),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](2,"tui-doc-example",6),u["\u0275\u0275i18nAttributes"](3,7),u["\u0275\u0275element"](4,"tui-copy-processor-example-1"),u["\u0275\u0275elementEnd"]()),2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("content",e.example1)}}function E(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"ol",8),u["\u0275\u0275elementStart"](1,"li"),u["\u0275\u0275elementStart"](2,"p"),u["\u0275\u0275i18nStart"](3,9),u["\u0275\u0275element"](4,"code"),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](5,"tui-doc-code",10),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](6,"li"),u["\u0275\u0275elementStart"](7,"p"),u["\u0275\u0275i18n"](8,11),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](9,"tui-doc-code",12),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](5),u["\u0275\u0275property"]("code",e.exampleModule),u["\u0275\u0275advance"](4),u["\u0275\u0275property"]("code",e.exampleHtml)}}let M=(()=>{class e{constructor(){this.example1={TypeScript:n.e(1463).then(n.bind(null,"BVtx")),HTML:n.e(1462).then(n.bind(null,"Ezi6"))},this.exampleModule=n.e(1464).then(n.bind(null,"c4Sr")),this.exampleHtml=n.e(1465).then(n.bind(null,"TuR5"))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-copy-processor"]],decls:5,vars:0,consts:function(){return[["package","CDK","type","directives",6,"header"],["header",$localize`:␟37561c7adb608b3f1dd2646ff27670a6a18c7ab0␟4194549152426589533:CopyProcessor`],["pageTab",""],[6,"pageTab"],["pageTab",$localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`],$localize`:␟a0aef0f19512c3fb91ea516052bce537ce0f7ece␟8034929292308673999:Directive is used to processed text when coping`,["id","usage",3,"content",6,"heading"],["heading",$localize`:␟45f210b96a2a6e91f52f153a4f8dc30662629f8e␟142654590491855672:Usage`],[1,"b-demo-steps"],$localize`:␟415953669748407dbf44a8cbc7e8ef893a56fec9␟6368157042718938776: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiCopyProcessorModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,["filename","myComponent.module.ts",3,"code"],$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,["filename","myComponent.template.html",3,"code"]]},template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"tui-doc-page",0),u["\u0275\u0275i18nAttributes"](1,1),u["\u0275\u0275template"](2,P,5,1,"ng-template",2),u["\u0275\u0275template"](3,E,10,2,"ng-template",3),u["\u0275\u0275i18nAttributes"](4,4),u["\u0275\u0275elementEnd"]())},directives:[b.a,h.a,C.a,S,w.a],encapsulation:2,changeDetection:0}),e})(),j=(()=>{class e{}return e.\u0275mod=u["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,r.FormsModule,y.fb,f,c.m,i.f.forChild(Object(c.t)(M))]]}),e})()}}]);