(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{sb3Y:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiFilterByInputModule",(function(){return R}));var a=n("An66"),r=n("3kIJ"),i=n("1VvW"),o=n("SVIu"),l=n("Qq0t"),m=n("dvRg"),p=n("kZht"),c=n("OZlg"),s=n("e0eB"),u=n("iyc4"),d=n("GdrL"),f=n("71sB"),_=n("fP8s"),T=n("OWJi"),E=n("FlJ/");function y(e,t){if(1&e&&(p["\u0275\u0275element"](0,"tui-data-list-wrapper",3),p["\u0275\u0275pipe"](1,"tuiFilterByInput")),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275property"]("items",p["\u0275\u0275pipeBind1"](1,1,e.items))}}let h=(()=>{class e{constructor(){this.items=["John Cleese","Eric Idle","Graham Chapman","Michael Palin","Terry Gilliam","Terry Jones"],this.form=new r.FormGroup({user:new r.FormControl})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-filter-by-input-example-1"]],decls:4,vars:1,consts:[[1,"b-form",3,"formGroup"],["formControlName","user"],[3,"items",4,"tuiDataList"],[3,"items"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"form",0),p["\u0275\u0275elementStart"](1,"tui-input",1),p["\u0275\u0275text"](2," User "),p["\u0275\u0275template"](3,y,2,3,"tui-data-list-wrapper",2),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&p["\u0275\u0275property"]("formGroup",t.form)},directives:[r["\u0275angular_packages_forms_forms_y"],r.NgControlStatusGroup,r.FormGroupDirective,d.a,f.a,r.NgControlStatus,r.FormControlName,_.a,T.a],pipes:[E.a],encapsulation:2,changeDetection:0}),e})();var b=n("BBBb"),C=n("As/O");function S(e,t){if(1&e&&(p["\u0275\u0275element"](0,"tui-data-list-wrapper",3),p["\u0275\u0275pipe"](1,"tuiFilterByInput")),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275property"]("items",p["\u0275\u0275pipeBind2"](1,1,e.items,e.matcher))}}let g=(()=>{class e{constructor(){this.items=["John Cleese","Eric Idle","Graham Chapman","Michael Palin","Terry Gilliam","Terry Jones"],this.form=new r.FormGroup({user:new r.FormControl}),this.matcher=(e,t)=>e.split(" ").pop().toLowerCase().startsWith(t.toLowerCase())}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-filter-by-input-example-2"]],decls:4,vars:1,consts:[[1,"b-form",3,"formGroup"],["formControlName","user"],[3,"items",4,"tuiDataList"],[3,"items"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"form",0),p["\u0275\u0275elementStart"](1,"tui-combo-box",1),p["\u0275\u0275text"](2," Search by last name "),p["\u0275\u0275template"](3,S,2,4,"tui-data-list-wrapper",2),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&p["\u0275\u0275property"]("formGroup",t.form)},directives:[r["\u0275angular_packages_forms_forms_y"],r.NgControlStatusGroup,r.FormGroupDirective,b.a,C.a,r.NgControlStatus,r.FormControlName,_.a,T.a],pipes:[E.a],encapsulation:2,changeDetection:0}),e})();var I=n("cVyY"),x=n("xcN3"),A=n("9B3E");function G(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"button",4),p["\u0275\u0275text"](1),p["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;p["\u0275\u0275property"]("value",e),p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate1"](" ",e.name," ")}}function L(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"tui-data-list"),p["\u0275\u0275template"](1,G,2,2,"button",3),p["\u0275\u0275pipe"](2,"tuiFilterByInputWith"),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngForOf",p["\u0275\u0275pipeBind2"](2,1,e.items,e.stringify))}}let v=(()=>{class e{constructor(){this.items=[{name:"John Cleese"},{name:"Eric Idle"},{name:"Graham Chapman"},{name:"Michael Palin"},{name:"Terry Gilliam"},{name:"Terry Jones"}],this.form=new r.FormGroup({user:new r.FormControl}),this.stringify=({name:e})=>e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-filter-by-input-example-3"]],decls:4,vars:2,consts:[[1,"b-form",3,"formGroup"],["formControlName","user",3,"stringify"],[4,"tuiDataList"],["tuiOption","",3,"value",4,"ngFor","ngForOf"],["tuiOption","",3,"value"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"form",0),p["\u0275\u0275elementStart"](1,"tui-combo-box",1),p["\u0275\u0275text"](2," User "),p["\u0275\u0275template"](3,L,3,4,"tui-data-list",2),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275property"]("formGroup",t.form),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("stringify",t.stringify))},directives:[r["\u0275angular_packages_forms_forms_y"],r.NgControlStatusGroup,r.FormGroupDirective,b.a,C.a,r.NgControlStatus,r.FormControlName,_.a,I.a,a.s,x.a],pipes:[A.a],encapsulation:2,changeDetection:0}),e})();var F=n("u8jZ");const w=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`],M=["heading",$localize`:␟e44cbeb2204ab3f18f2fc48550ff5f3154790975␟4997832321224755259:Custom matcher`],O=["heading",$localize`:␟8ea1c797573c9676df67b83748a331433703a6da␟4166966430858792974:Custom stringify`];var P,U,B;function $(e,t){if(1&e&&(p["\u0275\u0275i18nStart"](0,P),p["\u0275\u0275elementStart"](1,"tui-doc-example",3),p["\u0275\u0275i18nAttributes"](2,w),p["\u0275\u0275element"](3,"tui-filter-by-input-example-1"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](4,"tui-doc-example",4),p["\u0275\u0275i18nAttributes"](5,M),p["\u0275\u0275element"](6,"tui-filter-by-input-example-2"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](7,"tui-doc-example",5),p["\u0275\u0275i18nAttributes"](8,O),p["\u0275\u0275element"](9,"tui-filter-by-input-example-3"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275i18nEnd"]()),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("content",e.example1),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("content",e.example2),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("content",e.example3)}}function N(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"ol",6),p["\u0275\u0275elementStart"](1,"li"),p["\u0275\u0275elementStart"](2,"p"),p["\u0275\u0275i18nStart"](3,U),p["\u0275\u0275element"](4,"code"),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](5,"tui-doc-code",7),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"li"),p["\u0275\u0275elementStart"](7,"p"),p["\u0275\u0275i18n"](8,B),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](9,"tui-doc-code",8),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](5),p["\u0275\u0275property"]("code",e.exampleModule),p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("code",e.exampleHtml)}}P=$localize`:␟bc963fb63de70d2e76559d18d31fe0c914d05a74␟7316437354589455408: Pipe for filtering an array by value entered in a textfield ${"\ufffd#1\ufffd"}:START_TAG_TUI_DOC_EXAMPLE:${"\ufffd#3\ufffd"}:START_TAG_TUI_FILTER_BY_INPUT_EXAMPLE_1:${"\ufffd/#3\ufffd"}:CLOSE_TAG_TUI_FILTER_BY_INPUT_EXAMPLE_1:${"[\ufffd/#1\ufffd|\ufffd/#4\ufffd|\ufffd/#7\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\ufffd#4\ufffd"}:START_TAG_TUI_DOC_EXAMPLE_1:${"\ufffd#6\ufffd"}:START_TAG_TUI_FILTER_BY_INPUT_EXAMPLE_2:${"\ufffd/#6\ufffd"}:CLOSE_TAG_TUI_FILTER_BY_INPUT_EXAMPLE_2:${"[\ufffd/#1\ufffd|\ufffd/#4\ufffd|\ufffd/#7\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\ufffd#7\ufffd"}:START_TAG_TUI_DOC_EXAMPLE_2:${"\ufffd#9\ufffd"}:START_TAG_TUI_FILTER_BY_INPUT_EXAMPLE_3:${"\ufffd/#9\ufffd"}:CLOSE_TAG_TUI_FILTER_BY_INPUT_EXAMPLE_3:${"[\ufffd/#1\ufffd|\ufffd/#4\ufffd|\ufffd/#7\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:`,P=p["\u0275\u0275i18nPostprocess"](P),U=$localize`:␟a2a28ebef82d20cde2d7eaa173ac3450dc1f83f3␟2012985248889759702: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiFilterByInputPipeModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,B=$localize`:␟8dbd1dc3f7db0c83ba44d241601f87aaaccb1e13␟4082988165397565907:Use pipe in template under Taiga UI control:`;let D=(()=>{class e{constructor(){this.exampleModule=n.e(1683).then(n.bind(null,"FzOM")),this.exampleHtml=n.e(1684).then(n.bind(null,"shmq")),this.example1={TypeScript:n.e(1678).then(n.bind(null,"EUw7")),HTML:n.e(1677).then(n.bind(null,"ID6A"))},this.example2={TypeScript:n.e(1680).then(n.bind(null,"9lvk")),HTML:n.e(1679).then(n.bind(null,"9g5q"))},this.example3={TypeScript:n.e(1682).then(n.bind(null,"J4FZ")),HTML:n.e(1681).then(n.bind(null,"OM1p"))}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-filter-by-input"]],decls:3,vars:0,consts:[["header","FilterByInput","package","KIT","type","pipes"],["pageTab",""],["pageTab","Setup"],["id","base",3,"content",6,"heading"],["id","matcher",3,"content",6,"heading"],["id","stringify",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-doc-page",0),p["\u0275\u0275template"](1,$,10,3,"ng-template",1),p["\u0275\u0275template"](2,N,10,2,"ng-template",2),p["\u0275\u0275elementEnd"]())},directives:[c.a,s.a,u.a,h,g,v,F.a],encapsulation:2,changeDetection:0}),e})(),R=(()=>{class e{}return e.\u0275mod=p["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,r.ReactiveFormsModule,m.R,o.k,m.cb,l.fb,m.K,m.J,i.f.forChild(Object(o.r)(D))]]}),e})()}}]);