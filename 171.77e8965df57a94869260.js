(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{xggc:function(e,t,n){"use strict";n.r(t),n.d(t,"IconsModule",(function(){return B}));var i=n("An66"),c=n("3kIJ"),o=n("1VvW"),a=n("SVIu"),s=n("l4xa"),r=n("Qq0t"),l=n("dvRg"),u=n("kZht"),d=n("4C5Q");const p=["tuiIconElectron","tuiIconMaestro","tuiIconMastercard","tuiIconMir","tuiIconVisa"],{LARGE:m,NORMAL:f}=function(){const e=[],t=[],n=new Set(p);for(const i in d)n.has(i)||"tuiCoreIcons"===i||"tuiKitIcons"===i||(i.includes("Large")?e.push(i):t.push(i));return{LARGE:e,NORMAL:t}}(),b={"Description and examples":{"Normal interface icons (16px)":f,"Large interface icons (24px)":m,"Payment systems":p}},g=new u.InjectionToken("Icons",{factory:()=>b});var h=n("OZlg"),y=n("e0eB"),v=n("yZWP"),C=n("D57K"),x=n("wdR4"),O=n("GdrL"),S=n("71sB"),M=n("RlDx"),I=n("2wTY"),w=n("gEyt"),E=n("buny"),k=n("zV1d");let P=(()=>{class e{transform(e,t){return t.length>1&&Object(s.J)(e,t)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=u["\u0275\u0275definePipe"]({name:"iconHighlight",type:e,pure:!0}),e})();function T(e,t){if(1&e){const e=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"button",8),u["\u0275\u0275i18nAttributes"](1,9),u["\u0275\u0275listener"]("click",(function(){u["\u0275\u0275restoreView"](e);const n=t.$implicit;return u["\u0275\u0275nextContext"](2).copyPath(n)})),u["\u0275\u0275pipe"](2,"iconHighlight"),u["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=u["\u0275\u0275nextContext"](2);u["\u0275\u0275classProp"]("icon_highlighted",u["\u0275\u0275pipeBind2"](2,4,e,n.search)),u["\u0275\u0275property"]("icon",e),u["\u0275\u0275attribute"]("aria-label",e)}}function A(e,t){if(1&e&&(u["\u0275\u0275elementContainerStart"](0),u["\u0275\u0275elementStart"](1,"h2",0),u["\u0275\u0275i18n"](2,5),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](3,"div",6),u["\u0275\u0275template"](4,T,3,7,"button",7),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit,n=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](2),u["\u0275\u0275i18nExp"](e),u["\u0275\u0275i18nApply"](2),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("tuiForAsyncOf",n.iconsValues[e])}}let L=(()=>{class e{constructor(e,t){this.clipboard=e,this.alertService=t,this.iconsValues={},this.keys=[],this.search=""}set icons(e){this.keys=Object.keys(e),this.iconsValues=e}copyPath(e){this.clipboard.copy(e),this.alertService.open(`The name ${e} copied`,{status:"success"}).subscribe()}}return e.\u0275fac=function(t){return new(t||e)(u["\u0275\u0275directiveInject"](x.b),u["\u0275\u0275directiveInject"](r.Y))},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["icons-group"]],inputs:{icons:"icons"},decls:5,vars:3,consts:function(){return[[1,"title"],$localize`:␟fd963df1746a55d8fa0fc7610df4df991f847660␟1715668600566441269: Search by name
`,["tuiHintContent","You can copy icon's name with a click","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside","ngModel","ngModelChange"],$localize`:␟c8c9758c8595df7a1f438b97d0bdb29ee9eaf6b2␟696084215486677597: Input icon name to highlight
`,[4,"tuiForAsync","tuiForAsyncOf"],$localize`:␟3667a49e915032e25a65bf86bb7c9300aec2ec9f␟8631333072499018459: ${"\ufffd0\ufffd"}:INTERPOLATION: `,[1,"icons"],["tuiIconButton","","type","button","size","m","appearance","icon","class","icon",3,"icon_highlighted","icon","click",4,"tuiForAsync","tuiForAsyncOf",6,"title"],["tuiIconButton","","type","button","size","m","appearance","icon",1,"icon",3,"icon","click",6,"title"],["title",$localize`:␟1979da7460819153e11d2078244645d94291b69c␟4323470180912194028:Copy`]]},template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"h2",0),u["\u0275\u0275i18n"](1,1),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](2,"tui-input",2),u["\u0275\u0275listener"]("ngModelChange",(function(e){return t.search=e})),u["\u0275\u0275i18n"](3,3),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](4,A,5,2,"ng-container",4)),2&e&&(u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0)("ngModel",t.search),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("tuiForAsyncOf",t.keys))},directives:[O.a,S.a,M.a,I.b,w.b,c.NgControlStatus,c.NgModel,E.a,k.a],pipes:[P],styles:[".title[_ngcontent-%COMP%]{font:var(--tui-font-heading-6);margin:1.875rem 0 .75rem}.icons[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;margin:0 -.75rem}.icon[_ngcontent-%COMP%]{margin:.75rem;border-radius:0}.icon_highlighted[_ngcontent-%COMP%]{transform:scale(1.6);filter:drop-shadow(.125rem .0625rem 0 var(--tui-primary))}"],changeDetection:0}),Object(C.b)([Object(s.pd)()],e.prototype,"icons",null),e})();var $=n("iyc4"),_=n("ONKv");function z(){return e=>{const t="icons8::";return e.startsWith(t)?`assets/icons8/${e.replace(t,"")}.svg`:e}}let F=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["customization-icons-example"]],features:[u["\u0275\u0275ProvidersFeature"]([{provide:r.N,useFactory:z}])],decls:10,vars:0,consts:[[1,"icons8"],[1,"icons8-label","icons8-label-violet"],["src","icons8::android",1,"icons8-icon","icons8-violet"],["src","icons8::ios",1,"icons8-icon","icons8-violet"],[1,"icons8-label","icons8-label-blue"],["src","icons8::android",1,"icons8-icon","icons8-blue"],["src","icons8::ios",1,"icons8-icon","icons8-blue"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"div",0),u["\u0275\u0275elementStart"](1,"p",1),u["\u0275\u0275text"](2,"Violet color"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](3,"tui-svg",2),u["\u0275\u0275element"](4,"tui-svg",3),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](5,"div",0),u["\u0275\u0275elementStart"](6,"p",4),u["\u0275\u0275text"](7,"Blue color"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](8,"tui-svg",5),u["\u0275\u0275element"](9,"tui-svg",6),u["\u0275\u0275elementEnd"]())},directives:[_.a],styles:[".icons8[_ngcontent-%COMP%]{margin-bottom:1.5rem}.icons8-icon[_ngcontent-%COMP%]{width:4rem;height:4rem}.icons8-label[_ngcontent-%COMP%]{font-weight:700;display:inline-block;padding:.25rem .625rem;color:#fff;border-radius:.25rem}.icons8-label-violet[_ngcontent-%COMP%]{background:#a340f1}.icons8-label-blue[_ngcontent-%COMP%]{background:#316df6}.icons8-violet[_ngcontent-%COMP%]{color:#a340f1}.icons8-blue[_ngcontent-%COMP%]{color:#316df6}"]}),e})();function j(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"p"),u["\u0275\u0275i18nStart"](1,5),u["\u0275\u0275element"](2,"a",6),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](3,"icons-group",7)),2&e){const e=u["\u0275\u0275nextContext"]().$implicit,t=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("icons",t.icons[e])}}function N(e,t){1&e&&u["\u0275\u0275template"](0,j,4,1,"ng-template",4),2&e&&u["\u0275\u0275property"]("pageTab",t.$implicit)}function V(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"tui-doc-example",8),u["\u0275\u0275i18nAttributes"](1,9),u["\u0275\u0275element"](2,"customization-icons-example"),u["\u0275\u0275elementEnd"]()),2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275property"]("content",e.example1)}}let R=(()=>{class e{constructor(e){this.icons=e,this.keys=Object.keys(this.icons),this.example1={TypeScript:n.e(1629).then(n.bind(null,"a37g")),HTML:n.e(1631).then(n.bind(null,"tKQf")),LESS:n.e(1630).then(n.bind(null,"UtTG"))}}}return e.\u0275fac=function(t){return new(t||e)(u["\u0275\u0275directiveInject"](g))},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["icons"]],decls:4,vars:1,consts:function(){return[[6,"header"],["header",$localize`:␟c51604c3bfceeac96ceabb51c1a0caee70f85aa6␟990341683702498937:Icons`],[4,"ngFor","ngForOf"],["pageTab","SVG Processing"],[3,"pageTab"],$localize`:␟839dd4cb6fbcbf0e53e486e5aaa3fa92826a5fe6␟1756857398819821600: These icons can be used by name in ${"\ufffd#2\ufffd"}:START_LINK: Svg ${"\ufffd/#2\ufffd"}:CLOSE_LINK: component and all Taiga UI component accepting icons as input. `,["tuiLink","","routerLink","/components/svg"],[3,"icons"],["id","base","description","You can customize the path to your icons and inherit color",3,"content",6,"heading"],["heading",$localize`:␟788b57cb07c04232d638748cd49226ff9e13f8ca␟5793544987096948211:Customization`]]},template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"tui-doc-page",0),u["\u0275\u0275i18nAttributes"](1,1),u["\u0275\u0275template"](2,N,1,1,void 0,2),u["\u0275\u0275template"](3,V,3,1,"ng-template",3),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("ngForOf",t.keys))},directives:[h.a,i.s,y.a,v.a,o.e,L,$.a,F],encapsulation:2,changeDetection:0}),e})(),B=(()=>{class e{}return e.\u0275mod=u["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[c.ReactiveFormsModule,c.FormsModule,i.c,r.yb,r.Vb,l.pb,l.cb,r.ab,r.Yb,r.tb,a.m,o.f.forChild(Object(a.t)(R)),s.xb]]}),e})()}}]);