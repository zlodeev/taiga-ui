(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{COh3:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiHostedDropdownModule",(function(){return se}));var o=n("An66"),i=n("3kIJ"),r=n("1VvW"),a=n("SVIu"),c=n("l4xa"),d=n("Qq0t"),l=n("dvRg"),u=n("cWK9"),p=n("KDbD"),m=n("kZht"),s=n("K/iL"),f=n("OZlg"),h=n("e0eB"),g=n("iyc4"),y=n("q7Lq"),w=n("SUM+"),C=n("zV1d"),b=n("ONKv"),x=n("cVyY"),v=n("xcN3");function P(e,t){if(1&e&&m["\u0275\u0275element"](0,"tui-svg",4),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275classProp"]("icon_rotated",e.open)}}function E(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"button",6),m["\u0275\u0275listener"]("click",(function(){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"](2).onClick()})),m["\u0275\u0275text"](1),m["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate1"](" ",e," ")}}function S(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"tui-data-list"),m["\u0275\u0275template"](1,E,2,1,"button",5),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngForOf",e.items)}}let V=(()=>{class e{constructor(){this.items=["Edit","Download","Rename","Delete"],this.open=!1}onClick(){var e,t;this.open=!1,null===(t=null===(e=this.component)||void 0===e?void 0:e.nativeFocusableElement)||void 0===t||t.focus()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-hosted-dropdown-example-1"]],viewQuery:function(e,t){var n;1&e&&m["\u0275\u0275viewQuery"](d.vb,!0),2&e&&m["\u0275\u0275queryRefresh"](n=m["\u0275\u0275loadQuery"]())&&(t.component=n.first)},decls:7,vars:3,consts:[["tuiDropdownAlign","left",3,"content","open","openChange"],["tuiButton","","type","button","appearance","flat",3,"iconRight"],["icon",""],["dropdown",""],["src","tuiIconChevronDown",1,"icon"],["tuiOption","",3,"click",4,"ngFor","ngForOf"],["tuiOption","",3,"click"]],template:function(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"tui-hosted-dropdown",0),m["\u0275\u0275listener"]("openChange",(function(e){return t.open=e})),m["\u0275\u0275elementStart"](1,"button",1),m["\u0275\u0275text"](2," Button "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275template"](3,P,1,2,"ng-template",null,2,m["\u0275\u0275templateRefExtractor"]),m["\u0275\u0275template"](5,S,2,1,"ng-template",null,3,m["\u0275\u0275templateRefExtractor"])),2&e){const e=m["\u0275\u0275reference"](4),n=m["\u0275\u0275reference"](6);m["\u0275\u0275property"]("content",n)("open",t.open),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("iconRight",e)}},directives:[y.a,w.a,C.a,b.a,x.a,o.s,v.a],styles:[".icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration,.3s);transition-timing-function:ease-in-out}.icon_rotated[_ngcontent-%COMP%]{transform:rotate(180deg)}"],changeDetection:0}),e})();var O=n("Kw97"),D=n("5hw2"),M=n("TjIJ"),T=n("jTus"),_=n("4hRd"),k=n("fP8s"),I=n("OWJi");function A(e,t){if(1&e&&m["\u0275\u0275element"](0,"tui-svg",6),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275classProp"]("icon_rotated",e.open)}}function $(e,t){if(1&e&&m["\u0275\u0275element"](0,"tui-data-list-wrapper",11),2&e){const e=m["\u0275\u0275nextContext"](2);m["\u0275\u0275property"]("items",e.selectItems)}}function H(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"button",12),m["\u0275\u0275listener"]("click",(function(){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"](2).onClick()})),m["\u0275\u0275text"](1),m["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate1"](" ",e," ")}}function L(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"p",7),m["\u0275\u0275text"](1," There is "),m["\u0275\u0275elementStart"](2,"code"),m["\u0275\u0275text"](3,"let-activeZone"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275text"](4," in dropdown template context to work with nested dropdowns "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](5,"tui-select",8),m["\u0275\u0275listener"]("ngModelChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().selected=t})),m["\u0275\u0275text"](6," Nested Select "),m["\u0275\u0275template"](7,$,1,1,"tui-data-list-wrapper",9),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](8,"tui-data-list"),m["\u0275\u0275template"](9,H,2,1,"button",10),m["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("tuiActiveZoneParent",e)("ngModel",n.selected),m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("ngForOf",n.items)}}let z=(()=>{class e{constructor(){this.items=["Edit","Download","Rename","Delete"],this.selectItems=["Item 1","Item 2"],this.open=!1,this.selected=null}onClick(){var e,t;this.open=!1,null===(t=null===(e=this.component)||void 0===e?void 0:e.nativeFocusableElement)||void 0===t||t.focus()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-hosted-dropdown-example-2"]],viewQuery:function(e,t){var n;1&e&&m["\u0275\u0275viewQuery"](d.vb,!0),2&e&&m["\u0275\u0275queryRefresh"](n=m["\u0275\u0275loadQuery"]())&&(t.component=n.first)},decls:9,vars:3,consts:[[3,"content","open","openChange"],["tuiGroup",""],["tuiButton","","type","button","size","l",1,"tui-group__auto-width-item"],["tuiIconButton","","type","button","tuiHostedDropdownHost","","title","Menu","size","l",1,"tui-group__auto-width-item",3,"iconRight"],["icon",""],["dropdown",""],["src","tuiIconChevronDown",1,"icon"],[1,"margin"],[1,"margin",3,"tuiActiveZoneParent","ngModel","ngModelChange"],[3,"items",4,"tuiDataList"],["tuiOption","",3,"click",4,"ngFor","ngForOf"],[3,"items"],["tuiOption","",3,"click"]],template:function(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"tui-hosted-dropdown",0),m["\u0275\u0275listener"]("openChange",(function(e){return t.open=e})),m["\u0275\u0275elementStart"](1,"div",1),m["\u0275\u0275elementStart"](2,"button",2),m["\u0275\u0275text"](3," Button "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](4,"button",3),m["\u0275\u0275template"](5,A,1,2,"ng-template",null,4,m["\u0275\u0275templateRefExtractor"]),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275template"](7,L,10,3,"ng-template",null,5,m["\u0275\u0275templateRefExtractor"])),2&e){const e=m["\u0275\u0275reference"](6),n=m["\u0275\u0275reference"](8);m["\u0275\u0275property"]("content",n)("open",t.open),m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("iconRight",e)}},directives:[y.a,O.a,C.a,D.a,b.a,M.a,T.a,_.a,i.NgControlStatus,i.NgModel,k.a,x.a,o.s,I.a,v.a],styles:[".margin[_ngcontent-%COMP%]{margin:1rem}.icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration,.3s);transition-timing-function:ease-in-out}.icon_rotated[_ngcontent-%COMP%]{transform:rotate(180deg)}"],changeDetection:0}),e})();var R=n("yZWP"),W=n("mCBh");function N(e,t){1&e&&m["\u0275\u0275element"](0,"tui-svg",10)}function F(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"button",8),m["\u0275\u0275listener"]("click",(function(){m["\u0275\u0275restoreView"](e);const n=t.$implicit;return m["\u0275\u0275nextContext"](3).onClick(n)})),m["\u0275\u0275text"](1),m["\u0275\u0275template"](2,N,1,0,"tui-svg",9),m["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=m["\u0275\u0275nextContext"](3);m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate1"](" ",e," "),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",n.itemIsActive(e))}}function G(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"tui-opt-group"),m["\u0275\u0275template"](1,F,3,2,"button",7),m["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngForOf",e)}}function B(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"tui-data-list"),m["\u0275\u0275template"](1,G,2,1,"tui-opt-group",6),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngForOf",e.items)}}let K=(()=>{class e{constructor(){this.open=!1,this.items=[["By interest","By genre","By release year","By subject"],["Ascending","Descending"]],this.primary="By genre",this.ascending=!1}onClick(e){this.items[0].includes(e)?this.primary=e:this.ascending=e===this.items[1][0]}itemIsActive(e){return e===this.primary||this.ascending&&e===this.items[1][0]||!this.ascending&&e===this.items[1][1]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-hosted-dropdown-example-3"]],decls:8,vars:7,consts:[[1,"wrapper"],[3,"content","open","openChange"],["tuiLink","","tabindex","0",1,"link"],["src","tuiIconSortDown",1,"sort"],["src","tuiIconChevronDown",1,"arrow"],["dropdown",""],[4,"ngFor","ngForOf"],["tuiOption","","class","item",3,"click",4,"ngFor","ngForOf"],["tuiOption","",1,"item",3,"click"],["src","tuiIconCheck",4,"ngIf"],["src","tuiIconCheck"]],template:function(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"div",0),m["\u0275\u0275elementStart"](1,"tui-hosted-dropdown",1),m["\u0275\u0275listener"]("openChange",(function(e){return t.open=e})),m["\u0275\u0275elementStart"](2,"a",2),m["\u0275\u0275element"](3,"tui-svg",3),m["\u0275\u0275text"](4),m["\u0275\u0275element"](5,"tui-svg",4),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275template"](6,B,2,1,"ng-template",null,5,m["\u0275\u0275templateRefExtractor"])),2&e){const e=m["\u0275\u0275reference"](7);m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("content",e)("open",t.open),m["\u0275\u0275advance"](2),m["\u0275\u0275classProp"]("sort_ascending",t.ascending),m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate1"](" ",t.primary," "),m["\u0275\u0275advance"](1),m["\u0275\u0275classProp"]("arrow_open",t.open)}},directives:[y.a,R.a,b.a,x.a,o.s,W.a,v.a,o.t],styles:[".wrapper[_ngcontent-%COMP%]{width:12.5rem;text-align:right}.link[_ngcontent-%COMP%]{font-size:1.0625rem}.sort[_ngcontent-%COMP%]{vertical-align:-.125rem}.sort_ascending[_ngcontent-%COMP%]{transform:scaleY(-1)}.item[_ngcontent-%COMP%]{min-width:12.5rem}.arrow[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration,.3s);transition-timing-function:ease-in-out}.arrow_open[_ngcontent-%COMP%]{transform:rotate(180deg)}"],changeDetection:0}),e})();var j=n("aPft"),J=n("QK/x"),Z=n("D1a4"),q=n("XwTL");function Q(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"tui-data-list",5),m["\u0275\u0275listener"]("click",(function(){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().onClick()})),m["\u0275\u0275elementStart"](1,"button",6),m["\u0275\u0275text"](2,"Option 1"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](3,"button",6),m["\u0275\u0275text"](4,"Option 2"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](5,"button",6),m["\u0275\u0275text"](6,"Option 3"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()}}let Y=(()=>{class e{constructor(){this.open=!1,this.index=0}onClick(){this.open=!1,this.index=1}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-hosted-dropdown-example-4"]],decls:10,vars:3,consts:[["tuiTabs","",3,"activeItemIndex","activeItemIndexChange"],["tuiTab",""],["tuiDropdownHover","",3,"content","open","openChange"],["tuiTab","",3,"tui-tab-activate.stop"],["content",""],[3,"click"],["tuiOption",""]],template:function(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"nav",0),m["\u0275\u0275listener"]("activeItemIndexChange",(function(e){return t.index=e})),m["\u0275\u0275elementStart"](1,"button",1),m["\u0275\u0275text"](2,"Just a tab"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](3,"tui-hosted-dropdown",2),m["\u0275\u0275listener"]("openChange",(function(e){return t.open=e})),m["\u0275\u0275elementStart"](4,"button",3),m["\u0275\u0275listener"]("tui-tab-activate.stop",(function(){return 0})),m["\u0275\u0275text"](5," Hoverable/Clickable "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275template"](6,Q,7,0,"ng-template",null,4,m["\u0275\u0275templateRefExtractor"]),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](8,"button",1),m["\u0275\u0275text"](9,"Another tab"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275reference"](7);m["\u0275\u0275property"]("activeItemIndex",t.index),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("content",e)("open",t.open)}},directives:[J.a,Z.a,y.a,q.a,x.a,v.a],encapsulation:2,changeDetection:0}),e})();var U=n("EPR0"),X=n("GdrL"),ee=n("71sB"),te=n("yHor"),ne=n("zGJC"),oe=n("JPGa"),ie=n("u8jZ");function re(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"p"),m["\u0275\u0275i18nStart"](1,2),m["\u0275\u0275element"](2,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](3,"p"),m["\u0275\u0275text"](4," If a wrapped element is input, arrow down press opens a dropdown. The next press focuses the first item from the list. "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](5,"p"),m["\u0275\u0275i18nStart"](6,3),m["\u0275\u0275element"](7,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](8,"tui-doc-example",4),m["\u0275\u0275element"](9,"tui-hosted-dropdown-example-1"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](10,"tui-doc-example",5),m["\u0275\u0275i18nAttributes"](11,6),m["\u0275\u0275element"](12,"tui-hosted-dropdown-example-2"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](13,"tui-doc-example",7),m["\u0275\u0275i18nAttributes"](14,8),m["\u0275\u0275element"](15,"tui-hosted-dropdown-example-3"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](16,"tui-doc-example",9),m["\u0275\u0275i18nAttributes"](17,10),m["\u0275\u0275elementStart"](18,"tui-notification"),m["\u0275\u0275text"](19," Add "),m["\u0275\u0275elementStart"](20,"code"),m["\u0275\u0275text"](21,"TuiDropdownHoverModule"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275text"](22," to use it "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](23,"tui-hosted-dropdown-example-4"),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](8),m["\u0275\u0275property"]("content",e.example1),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("content",e.example2),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("content",e.example3),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("content",e.example4)}}function ae(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"div",17),m["\u0275\u0275elementStart"](1,"div"),m["\u0275\u0275i18n"](2,18),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](3,"p",19),m["\u0275\u0275elementStart"](4,"button",20),m["\u0275\u0275listener"]("click",(function(){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"](2).onClick()})),m["\u0275\u0275i18n"](5,21),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"button",22),m["\u0275\u0275listener"]("click",(function(){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"](2).onClick()})),m["\u0275\u0275i18n"](7,23),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()}}function ce(e,t){1&e&&m["\u0275\u0275i18n"](0,24)}function de(e,t){1&e&&m["\u0275\u0275i18n"](0,25)}function le(e,t){1&e&&m["\u0275\u0275text"](0," Content inside a dropdown ")}function ue(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"tui-doc-demo"),m["\u0275\u0275elementStart"](1,"tui-hosted-dropdown",11),m["\u0275\u0275listener"]("openChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().open=t})),m["\u0275\u0275elementStart"](2,"tui-input",12),m["\u0275\u0275listener"]("ngModelChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().onInput(t)})),m["\u0275\u0275text"](3," Start typing "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275template"](4,ae,8,0,"ng-template",null,13,m["\u0275\u0275templateRefExtractor"]),m["\u0275\u0275elementStart"](6,"tui-doc-documentation"),m["\u0275\u0275template"](7,ce,1,0,"ng-template",14),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().open=t})),m["\u0275\u0275template"](8,de,1,0,"ng-template",15),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().canOpenSelected=t})),m["\u0275\u0275template"](9,le,1,0,"ng-template",16),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().content=t})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](10,"dropdown-controller-documentation")}if(2&e){const e=m["\u0275\u0275reference"](5),t=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("content",t.template?e:t.content)("tuiDropdownAlign",t.align)("canOpen",t.canOpen)("tuiDropdownDirection",t.direction)("tuiDropdownLimitWidth",t.limitWidth)("tuiDropdownMinHeight",t.minHeight)("tuiDropdownMaxHeight",t.maxHeight)("open",t.open),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngModel",t.input),m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("documentationPropertyValue",t.open),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",t.canOpenVariants)("documentationPropertyValue",t.canOpenSelected),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",t.contentVariants)("documentationPropertyValue",t.content)}}function pe(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"ol",26),m["\u0275\u0275elementStart"](1,"li"),m["\u0275\u0275elementStart"](2,"p"),m["\u0275\u0275i18nStart"](3,27),m["\u0275\u0275element"](4,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](5,"tui-doc-code",28),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"li"),m["\u0275\u0275elementStart"](7,"p"),m["\u0275\u0275i18n"](8,29),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](9,"tui-doc-code",30),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("code",e.exampleModule),m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("code",e.exampleHtml)}}let me=(()=>{class e{constructor(){this.exampleModule=n.e(683).then(n.bind(null,"z8u0")),this.exampleHtml=n.e(684).then(n.bind(null,"/nEr")),this.example1={TypeScript:n.e(675).then(n.bind(null,"hXdM")),HTML:n.e(673).then(n.bind(null,"qOFc")),LESS:n.e(674).then(n.bind(null,"kEmi"))},this.example2={TypeScript:n.e(677).then(n.bind(null,"6waW")),HTML:n.e(676).then(n.bind(null,"FyI+"))},this.example3={TypeScript:n.e(680).then(n.bind(null,"n654")),HTML:n.e(678).then(n.bind(null,"r1yV")),LESS:n.e(679).then(n.bind(null,"qWKT"))},this.example4={TypeScript:n.e(682).then(n.bind(null,"dlo+")),HTML:n.e(681).then(n.bind(null,"+SoX"))},this.minHeight=d.c,this.maxHeight=d.b,this.alignVariants=["right","left"],this.align=this.alignVariants[0],this.directionVariants=[null,"top","bottom"],this.direction=this.directionVariants[0],this.limitWidthVariants=["auto","fixed","min"],this.limitWidth=this.limitWidthVariants[0],this.open=!1,this.input="",this.canOpenVariants=[!0,"getter this.input.length > 2"],this.canOpenSelected=this.canOpenVariants[0],this.contentVariants=["Template","Custom string"],this.content=this.contentVariants[0]}get template(){return"Template"===this.content}get canOpen(){return!0===this.canOpenSelected||this.input.length>2}onInput(e){this.input=e,this.open=this.canOpen}onClick(){this.open=!1}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-hosted-dropdown"]],features:[m["\u0275\u0275ProvidersFeature"]([{provide:s.a,useExisting:Object(m.forwardRef)(()=>e)}])],decls:4,vars:0,consts:function(){return[["header","HostedDropdown","package","CORE","type","components"],["pageTab",""],$localize`:␟bb23b33ff55b89b4ef1ff9f42c722c963532ddde␟1529513892947364529:${"\ufffd#2\ufffd"}:START_TAG_CODE:tui-hosted-dropdown${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: is a wrapper for focusable elements to attach to them a dropdown. Working with keyboard is also included. `,$localize`:␟efdb022d31503afb246eed827285d239f0b2e604␟8899829235118307940: If it is not, mouseclick opens and closes a dropdown. A component uses the first focusable item inside component as a host for opening a dropdown. If you want another element to be host, use ${"\ufffd#7\ufffd"}:START_TAG_CODE:tuiHostedDropdownHost${"\ufffd/#7\ufffd"}:CLOSE_TAG_CODE: directive. `,["id","menu","heading","Menu",3,"content"],["id","tuiDropdownHost",3,"content",6,"heading"],["heading",$localize`:␟be00b142ca0e6e14140ce7c0edff70479c6f5246␟5686994794020204214:With custom host`],["id","native",3,"content",6,"heading"],["heading",$localize`:␟09abd055702f5b0ff600b7976e401647508e9dbf␟1177785284888813619:With link`],["id","hover",3,"content",6,"heading"],["heading",$localize`:␟a6e67dfe580a45be70313500f543bbc15ec9760f␟2387705160888032979:On hover`],[3,"content","tuiDropdownAlign","canOpen","tuiDropdownDirection","tuiDropdownLimitWidth","tuiDropdownMinHeight","tuiDropdownMaxHeight","open","openChange"],[1,"input",3,"ngModel","ngModelChange"],["dropdown",""],["documentationPropertyName","open","documentationPropertyMode","input-output","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","canOpen","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","content","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"dropdown"],$localize`:␟7df916223beceabaff5ce2c5d10d8c6b6223994f␟3492793234322048620:Do you like using Taiga UI?`,[1,"buttons"],["tuiButton","","type","button","size","m",1,"button",3,"click"],$localize`:␟bfd030e3f9532861549e18ac90519715fe79495d␟1986526768401672090: Yes `,["tuiButton","","type","button","appearance","secondary","size","m",1,"button",3,"click"],$localize`:␟bfd030e3f9532861549e18ac90519715fe79495d␟1986526768401672090: Yes `,$localize`:␟a102f9b79d10ce912dd520a7723676aaa1e1db15␟6128312972490006384: Open/close state `,$localize`:␟863c6aa88fe2ac1d5c7c7787679d04aeaf6fa6ce␟5861935679849365104: A handler to enable/disable opening `,[1,"b-demo-steps"],$localize`:␟3fd326cbbddd540407cbe67384529cf3299d2dce␟1923024221701838874: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiHostedDropdownModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,["filename","myComponent.module.ts",3,"code"],$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,["filename","myComponent.template.html",3,"code"]]},template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"tui-doc-page",0),m["\u0275\u0275template"](1,re,24,4,"ng-template",1),m["\u0275\u0275template"](2,ue,11,14,"ng-template",1),m["\u0275\u0275template"](3,pe,10,2,"ng-template",1),m["\u0275\u0275elementEnd"]())},directives:[f.a,h.a,g.a,V,z,K,j.a,Y,U.a,y.a,w.a,X.a,ee.a,i.NgControlStatus,i.NgModel,te.a,ne.a,oe.a,C.a,ie.a],styles:[".input[_ngcontent-%COMP%]{width:15.625rem}.dropdown[_ngcontent-%COMP%]{padding:1.25rem}.buttons[_ngcontent-%COMP%]{display:flex;margin-bottom:0}.button[_ngcontent-%COMP%]{flex:1}.button[_ngcontent-%COMP%]:first-child{margin-right:.75rem}"],changeDetection:0}),e})(),se=(()=>{class e{}return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,i.ReactiveFormsModule,u.c,i.FormsModule,d.wb,l.M,d.Gb,l.Jb,l.cb,d.ab,d.sb,d.Vb,d.yb,l.Eb,c.bb,d.lb,d.fb,l.K,p.a,a.m,r.f.forChild(Object(a.t)(me))]]}),e})()},JPGa:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var o=n("K/iL"),i=n("kZht"),r=n("yZWP"),a=n("1VvW"),c=n("yHor"),d=n("zGJC");function l(e,t){1&e&&(i["\u0275\u0275i18nStart"](0,9),i["\u0275\u0275element"](1,"code"),i["\u0275\u0275i18nEnd"]())}function u(e,t){1&e&&i["\u0275\u0275i18n"](0,10)}function p(e,t){1&e&&(i["\u0275\u0275i18nStart"](0,11),i["\u0275\u0275element"](1,"code"),i["\u0275\u0275i18nEnd"]())}function m(e,t){1&e&&i["\u0275\u0275i18n"](0,12)}function s(e,t){1&e&&(i["\u0275\u0275i18nStart"](0,13),i["\u0275\u0275element"](1,"code"),i["\u0275\u0275i18nEnd"]())}function f(e,t){1&e&&i["\u0275\u0275i18n"](0,14)}let h=(()=>{class e{constructor(e){this.documentedComponent=e}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](o.a))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["dropdown-controller-documentation"]],decls:14,vars:9,consts:function(){return[[1,"tui-text_h6"],$localize`:␟f10667f722f7715235528f21ab06bf1972765a90␟8873256266701530790: Can be expanded with ${"\ufffd#2\ufffd"}:START_LINK: TuiDropdownController ${"\ufffd/#2\ufffd"}:CLOSE_LINK:`,["tuiLink","","target","_blank","routerLink","/directives/dropdown-controller"],["documentationPropertyName","tuiDropdownAlign","documentationPropertyMode","input","documentationPropertyType","TuiHorizontalDirection",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownDirection","documentationPropertyMode","input","documentationPropertyType","TuiVerticalDirection | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownSided","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownLimitWidth","documentationPropertyMode","input","documentationPropertyType","TuiDropdownWidthT",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownMinHeight","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownMaxHeight","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],$localize`:␟29ee50e0356e64d0ffccdddf141779d9cd095b01␟6653398799439643090: Align of dropdown (does not work together with ${"\ufffd#1\ufffd"}:START_TAG_CODE:limitWidth === 'fixed'${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,$localize`:␟e22e15f84dea771ad0d475438facbb62916362a6␟8159982415408745443: Set a vertical direction of dropdown `,$localize`:␟c854cb99ce8a36b1e288c9072b5b71d5204f9c7f␟2332262850583786014: Put dropdown to the side, instead of top or bottom. Use in combination with ${"\ufffd#1\ufffd"}:START_TAG_CODE:tuiDropdownAlign${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE:`,$localize`:␟6318612e87a79a0fddc36fb9036f4c24ab5b898e␟6158927642754956379: Limit width of dropdown `,$localize`:␟4055bf3cc12efa85e894fbf1941120ec2cde619c␟4679692758727259251: Minimum height to calculate that dropdown fits to setted ${"\ufffd#1\ufffd"}:START_TAG_CODE:tuiDropdownDirection${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE:`,$localize`:␟48d54f1b6fe93aa4dd68b859fd2eeb1c169f8cea␟5657510849972139844: Maximum height of dropdown `]},template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"h6",0),i["\u0275\u0275i18nStart"](1,1),i["\u0275\u0275element"](2,"a",2),i["\u0275\u0275i18nEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](3,"p"),i["\u0275\u0275text"](4," Requires you to import "),i["\u0275\u0275elementStart"](5,"code"),i["\u0275\u0275text"](6,"TuiDropdownControllerModule"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](7,"tui-doc-documentation"),i["\u0275\u0275template"](8,l,2,0,"ng-template",3),i["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return t.documentedComponent.dropdownAlign=e})),i["\u0275\u0275template"](9,u,1,0,"ng-template",4),i["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return t.documentedComponent.dropdownDirection=e})),i["\u0275\u0275template"](10,p,2,0,"ng-template",5),i["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return t.documentedComponent.dropdownDirection=e})),i["\u0275\u0275template"](11,m,1,0,"ng-template",6),i["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return t.documentedComponent.dropdownLimitWidth=e})),i["\u0275\u0275template"](12,s,2,0,"ng-template",7),i["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return t.documentedComponent.dropdownMinHeight=e})),i["\u0275\u0275template"](13,f,1,0,"ng-template",8),i["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return t.documentedComponent.dropdownMaxHeight=e})),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275advance"](8),i["\u0275\u0275property"]("documentationPropertyValues",t.documentedComponent.dropdownAlignVariants)("documentationPropertyValue",t.documentedComponent.dropdownAlign),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("documentationPropertyValues",t.documentedComponent.dropdownDirectionVariants)("documentationPropertyValue",t.documentedComponent.dropdownDirection),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("documentationPropertyValue",t.documentedComponent.dropdownDirection),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("documentationPropertyValues",t.documentedComponent.dropdownLimitWidthVariants)("documentationPropertyValue",t.documentedComponent.dropdownLimitWidth),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("documentationPropertyValue",t.documentedComponent.dropdownMinHeight),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("documentationPropertyValue",t.documentedComponent.dropdownMaxHeight))},directives:[r.a,a.e,c.a,d.a],encapsulation:2,changeDetection:0}),e})()},"K/iL":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));const o=new(n("kZht").InjectionToken)("Component extends AbstractExample class")},KDbD:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var o=n("An66"),i=n("1VvW"),r=n("SVIu"),a=n("Qq0t"),c=n("kZht");let d=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,i.f,r.q,a.yb]]}),e})()}}]);