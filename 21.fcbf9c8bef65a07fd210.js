(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"K/iL":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));const i=new(n("kZht").InjectionToken)("Component extends AbstractExample class")},LusI:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var i=n("Qq0t"),o=n("pVuH");const r="Bell";class l extends o.a{constructor(){super(...arguments),this.sizeVariants=["s","m","l"],this.hintContentVariants=["Some content"],this.hintDirectionVariants=["left","right","bottom-left","bottom-right","bottom-middle","top-left","top-right","top-middle"],this.hintModeVariants=["error","onDark"],this.typeVariants=["text","email","password","tel","url"],this.maxLengthVariants=[10],this.autocompleteVariants=["","off","cc-name","cc-number","cc-exp-month","cc-exp-year","cc-type","given-name","additional-name","family-name","username","email","street-address","postal-code","country-name"],this.inputModeVariants=["text","numeric"],this.customContentVariants=[r,"tuiIconSearchLarge","tuiIconCalendarLarge","tuiIconVisaMono","tuiIconMastercardMono"],this.customContentSelected=null,this.inputMode=this.inputModeVariants[0],this.autocomplete="",this.maxLength=null,this.type=this.typeVariants[0],this.cleaner=!1,this.pseudoInvalid=null,this.success=!1,this.readOnly=!1,this.labelOutside=!1,this.size=this.sizeVariants[2],this.exampleText="",this.hintContent=null,this.hintDirection=this.hintDirectionVariants[2],this.hintMode=null,this.dropdownAlignVariants=["left","right"],this.dropdownAlign=this.dropdownAlignVariants[0],this.dropdownLimitWidthVariants=["fixed","min"],this.dropdownLimitWidth=this.dropdownLimitWidthVariants[0],this.dropdownDirectionVariants=["top","bottom"],this.iconLeftVariants=["","tuiIconMailLarge","tuiIconPiechartLarge"],this.iconLeft=this.iconLeftVariants[0],this.dropdownDirection=null,this.dropdownSided=!1,this.dropdownMinHeight=i.c,this.dropdownMaxHeight=i.b}get customContent(){return this.customContentSelected===r?'<svg xmlns="http://www.w3.org/2000/svg"\nwidth="24px"\nheight="24px"\nviewBox="0 0 24 24">\n<path fill="currentColor" d="M10,17v1c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2l0-1h3.6L17,15.2V11c0-2.2-1.4-4-3-4h-1V5\n   c0-0.6-0.4-1-1-1s-1,0.4-1,1v2h-1c-1.3,0-3,1.9-3,4v4.2L6.4,17H10z M3.6,19L5,14.8V11c0-2.7,1.9-5.2,4-5.8V5c0-1.7,1.3-3,3-3\n   s3,1.3,3,3v0.1c2.3,0.6,4,3,4,5.9v3.8l1.4,4.2h-4.5c-0.4,1.8-2,3-3.9,3c-1.8,0-3.4-1.2-3.9-3H3.6z"/>\n</svg>':this.customContentSelected}get disabled(){return this.control.disabled}set disabled(e){e?this.control.disable():this.control.enable()}}},pVuH:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));class i{constructor(){this.pseudoVariants=[!1,!0],this.focusable=!0,this.pseudoFocused=null,this.pseudoHovered=null,this.pseudoPressed=null}}},yGBC:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiFilesModule",(function(){return ve}));var i=n("An66"),o=n("3kIJ"),r=n("1VvW"),l=n("SVIu"),a=n("Qq0t"),c=n("dvRg"),s=n("kZht"),u=n("LusI"),m=n("K/iL"),p=n("OZlg"),d=n("e0eB"),f=n("iyc4"),h=n("ZTXN"),g=n("5iYw"),y=n("QF2p"),x=n("b+K3");function C(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"tui-input-files",4),s["\u0275\u0275listener"]("reject",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().onReject(t)})),s["\u0275\u0275elementEnd"]()}if(2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275property"]("formControl",e.control)}}function v(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"tui-file",5),s["\u0275\u0275listener"]("removed",(function(){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().removeFile()})),s["\u0275\u0275elementEnd"]()}2&e&&s["\u0275\u0275property"]("file",t.ngIf)}function b(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"tui-file",6),s["\u0275\u0275listener"]("removed",(function(){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().clearRejected()})),s["\u0275\u0275elementEnd"]()}2&e&&s["\u0275\u0275property"]("file",t.ngIf)}let F=(()=>{class e{constructor(){this.control=new o.FormControl,this.rejectedFiles$=new h.a}onReject(e){this.rejectedFiles$.next(e)}removeFile(){this.control.setValue(null)}clearRejected(){this.rejectedFiles$.next(null)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-files-example-1"]],decls:6,vars:7,consts:[["accept","image/*",3,"formControl","reject",4,"ngIf"],[1,"tui-space_top-1"],[3,"file","removed",4,"ngIf"],["state","error",3,"file","removed",4,"ngIf"],["accept","image/*",3,"formControl","reject"],[3,"file","removed"],["state","error",3,"file","removed"]],template:function(e,t){1&e&&(s["\u0275\u0275template"](0,C,1,1,"tui-input-files",0),s["\u0275\u0275elementStart"](1,"tui-files",1),s["\u0275\u0275template"](2,v,1,1,"tui-file",2),s["\u0275\u0275pipe"](3,"async"),s["\u0275\u0275template"](4,b,1,1,"tui-file",3),s["\u0275\u0275pipe"](5,"async"),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275property"]("ngIf",!t.control.value),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngIf",s["\u0275\u0275pipeBind1"](3,3,t.control.valueChanges)),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngIf",s["\u0275\u0275pipeBind1"](5,5,t.rejectedFiles$)))},directives:[i.t,g.a,y.a,o.NgControlStatus,o.FormControlDirective,x.a],pipes:[i.b],encapsulation:2,changeDetection:0}),e})();function V(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"tui-file",4),s["\u0275\u0275listener"]("removed",(function(){s["\u0275\u0275restoreView"](e);const n=t.$implicit;return s["\u0275\u0275nextContext"]().removeFile(n)})),s["\u0275\u0275elementEnd"]()}2&e&&s["\u0275\u0275property"]("file",t.$implicit)}function S(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"tui-file",5),s["\u0275\u0275listener"]("removed",(function(){s["\u0275\u0275restoreView"](e);const n=t.$implicit;return s["\u0275\u0275nextContext"]().clearRejected(n)})),s["\u0275\u0275elementEnd"]()}2&e&&s["\u0275\u0275property"]("file",t.$implicit)}let w=(()=>{class e{constructor(){this.control=new o.FormControl([]),this.rejectedFiles=[]}onReject(e){this.rejectedFiles=[...this.rejectedFiles,...e]}removeFile({name:e}){this.control.setValue(this.control.value.filter(t=>t.name!==e))}clearRejected({name:e}){this.rejectedFiles=this.rejectedFiles.filter(t=>t.name!==e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-files-example-2"]],decls:5,vars:6,consts:[["accept","image/*",3,"multiple","formControl","reject"],[1,"tui-space_top-1"],[3,"file","removed",4,"ngFor","ngForOf"],["state","error",3,"file","removed",4,"ngFor","ngForOf"],[3,"file","removed"],["state","error",3,"file","removed"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-input-files",0),s["\u0275\u0275listener"]("reject",(function(e){return t.onReject(e)})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](1,"tui-files",1),s["\u0275\u0275template"](2,V,1,1,"tui-file",2),s["\u0275\u0275pipe"](3,"async"),s["\u0275\u0275template"](4,S,1,1,"tui-file",3),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275property"]("multiple",!0)("formControl",t.control),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngForOf",s["\u0275\u0275pipeBind1"](3,4,t.control.valueChanges)),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngForOf",t.rejectedFiles))},directives:[y.a,o.NgControlStatus,o.FormControlDirective,g.a,i.s,x.a],pipes:[i.b],encapsulation:2,changeDetection:0}),e})();var P=n("l4xa"),z=n("NHmP"),E=n("yZWP"),T=n("ONKv");function j(e,t){1&e&&s["\u0275\u0275element"](0,"tui-file",7),2&e&&s["\u0275\u0275property"]("file",t.$implicit)}function I(e,t){1&e&&s["\u0275\u0275element"](0,"tui-file",8),2&e&&s["\u0275\u0275property"]("file",t.$implicit)}function $(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"tui-file",9),s["\u0275\u0275listener"]("removed",(function(){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().removeLoading()})),s["\u0275\u0275elementEnd"]()}if(2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275property"]("file",e.loadingFile)}}function L(e,t){if(1&e&&s["\u0275\u0275element"](0,"tui-file",7),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275property"]("file",e.fileWithLink)}}function M(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"tui-file",10),s["\u0275\u0275elementStart"](1,"button",11),s["\u0275\u0275listener"]("click",(function(){s["\u0275\u0275restoreView"](e);const n=t.$implicit;return s["\u0275\u0275nextContext"]().restore(n)})),s["\u0275\u0275text"](2," Restore "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()}2&e&&s["\u0275\u0275property"]("file",t.$implicit)}function O(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"tui-file",12),s["\u0275\u0275listener"]("removed",(function(){s["\u0275\u0275restoreView"](e);const n=t.$implicit;return s["\u0275\u0275nextContext"]().remove(n)})),s["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;s["\u0275\u0275nextContext"]();const n=s["\u0275\u0275reference"](14);s["\u0275\u0275property"]("file",e)("leftContent",n)}}function k(e,t){1&e&&s["\u0275\u0275element"](0,"tui-svg",13)}let _=(()=>{class e{constructor(e){this.isCypress=e,this.control=new o.FormControl,this.files=[{name:"Loaded.txt"},{name:"A file with a very very long title to check that it can be cut correctly.txt"}],this.loadingFile={name:"Loading file.txt"},this.rejectedFiles=[{name:"File with an error.txt",content:"Something went wrong this time"}],this.fileWithLink={name:"with link.txt",src:"https://tools.ietf.org/html/rfc675"},this.removedFiles=[this.loadingFile],this.restoredFiles=[]}removeLoading(){this.loadingFile=null}restore(e){e&&(this.restoredFiles=[...this.restoredFiles,e],this.removedFiles=this.removedFiles.filter(t=>e.name!==(null==t?void 0:t.name)))}remove(e){this.removedFiles=[...this.removedFiles,e],this.restoredFiles=this.restoredFiles.filter(t=>e.name!==(null==t?void 0:t.name))}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](P.Q))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-files-example-3"]],decls:15,vars:5,consts:[["state","normal",3,"file",4,"ngFor","ngForOf"],["state","error",3,"file",4,"ngFor","ngForOf"],["state","loading",3,"file","removed",4,"ngIf"],["state","normal",3,"file",4,"tuiItem"],["state","deleted","size","l",3,"file",4,"ngFor","ngForOf"],["state","normal","size","l",3,"file","leftContent","removed",4,"ngFor","ngForOf"],["icon",""],["state","normal",3,"file"],["state","error",3,"file"],["state","loading",3,"file","removed"],["state","deleted","size","l",3,"file"],["tuiLink","",3,"click"],["state","normal","size","l",3,"file","leftContent","removed"],["src","tuiIconFileLarge"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-files"),s["\u0275\u0275template"](1,j,1,1,"tui-file",0),s["\u0275\u0275template"](2,I,1,1,"tui-file",1),s["\u0275\u0275template"](3,$,1,1,"tui-file",2),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"h4"),s["\u0275\u0275text"](5,"With link"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"tui-files"),s["\u0275\u0275template"](7,L,1,1,"tui-file",3),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](8,"h4"),s["\u0275\u0275text"](9,"With deleted state"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](10,"tui-files"),s["\u0275\u0275template"](11,M,3,1,"tui-file",4),s["\u0275\u0275template"](12,O,1,2,"tui-file",5),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](13,k,1,0,"ng-template",null,6,s["\u0275\u0275templateRefExtractor"])),2&e&&(s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngForOf",t.files),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngForOf",t.rejectedFiles),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",t.loadingFile&&!t.isCypress),s["\u0275\u0275advance"](8),s["\u0275\u0275property"]("ngForOf",t.removedFiles),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngForOf",t.restoredFiles))},directives:[g.a,i.s,i.t,z.a,x.a,E.a,T.a],encapsulation:2,changeDetection:0}),e})();function A(e,t){if(1&e&&s["\u0275\u0275element"](0,"tui-file",3),2&e){const e=s["\u0275\u0275nextContext"]().$implicit;s["\u0275\u0275property"]("file",e)}}function R(e,t){1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275template"](1,A,1,1,"tui-file",2),s["\u0275\u0275elementContainerEnd"]())}function D(e,t){if(1&e&&s["\u0275\u0275element"](0,"tui-file",5),2&e){const e=s["\u0275\u0275nextContext"]().$implicit;s["\u0275\u0275property"]("file",e)}}function H(e,t){1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275template"](1,D,1,1,"tui-file",4),s["\u0275\u0275elementContainerEnd"]())}let N=(()=>{class e{constructor(){this.height=3,this.control=new o.FormControl,this.files=[{name:"Loaded.txt"},{name:"one_more_file.txt"},{name:"one_more_file.txt"},{name:"one_more_file.txt"},{name:"one_more_file.txt"},{name:"one_more_file.txt"},{name:"last_file.txt"}],this.rejectedFiles=[{name:"File with an error.txt"}]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-files-example-4"]],decls:3,vars:3,consts:[[3,"max"],[4,"ngFor","ngForOf"],["state","normal",3,"file",4,"tuiItem"],["state","normal",3,"file"],["state","error",3,"file",4,"tuiItem"],["state","error",3,"file"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-files",0),s["\u0275\u0275template"](1,R,2,0,"ng-container",1),s["\u0275\u0275template"](2,H,2,0,"ng-container",1),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275property"]("max",3),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngForOf",t.files),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngForOf",t.rejectedFiles))},directives:[g.a,i.s,z.a,x.a],encapsulation:2,changeDetection:0}),e})();function W(e,t){1&e&&s["\u0275\u0275element"](0,"tui-svg",3)}let B=(()=>{class e{constructor(){this.control=new o.FormControl,this.file={name:"custom.txt"}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-files-example-5"]],decls:6,vars:2,consts:[[3,"file","leftContent"],[1,"tui-text_body-s-2"],["content",""],["src","tuiIconTimeLarge"]],template:function(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"tui-files"),s["\u0275\u0275elementStart"](1,"tui-file",0),s["\u0275\u0275elementStart"](2,"span",1),s["\u0275\u0275text"](3,"file is on checking"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](4,W,1,0,"ng-template",null,2,s["\u0275\u0275templateRefExtractor"])),2&e){const e=s["\u0275\u0275reference"](5);s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("file",t.file)("leftContent",e)}},directives:[g.a,x.a,T.a],styles:[".content[_ngcontent-%COMP%]{color:var(--tui-secondary)}"],changeDetection:0}),e})();var G=n("EPR0"),Q=n("yHor"),K=n("zGJC"),Z=n("u8jZ");function J(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"p"),s["\u0275\u0275i18n"](1,2),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"tui-doc-example",3),s["\u0275\u0275i18nAttributes"](3,4),s["\u0275\u0275element"](4,"tui-input-files-example-1"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"tui-doc-example",5),s["\u0275\u0275i18nAttributes"](6,6),s["\u0275\u0275element"](7,"tui-input-files-example-2"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](8,"tui-doc-example",7),s["\u0275\u0275i18nAttributes"](9,8),s["\u0275\u0275element"](10,"tui-input-files-example-3"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](11,"tui-doc-example",9),s["\u0275\u0275i18nAttributes"](12,10),s["\u0275\u0275element"](13,"tui-input-files-example-4"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](14,"tui-doc-example",11),s["\u0275\u0275i18nAttributes"](15,12),s["\u0275\u0275element"](16,"tui-input-files-example-5"),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("content",e.example1),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("content",e.example2),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("content",e.example3),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("content",e.example4),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("content",e.example5)}}function Y(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"tui-file",33),s["\u0275\u0275listener"]("removed",(function(){s["\u0275\u0275restoreView"](e);const t=s["\u0275\u0275nextContext"]().$implicit;return s["\u0275\u0275nextContext"](3).removeFile(t)})),s["\u0275\u0275elementEnd"]()}if(2&e){const e=s["\u0275\u0275nextContext"]().$implicit,t=s["\u0275\u0275nextContext"](3);s["\u0275\u0275property"]("file",e)("size",t.size)("showSize",t.showSize)}}function q(e,t){1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275template"](1,Y,1,3,"tui-file",32),s["\u0275\u0275elementContainerEnd"]())}function U(e,t){if(1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275template"](1,q,2,0,"ng-container",17),s["\u0275\u0275pipe"](2,"async"),s["\u0275\u0275elementContainerEnd"]()),2&e){const e=s["\u0275\u0275nextContext"](2);s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngForOf",s["\u0275\u0275pipeBind1"](2,1,e.control.valueChanges))}}function X(e,t){if(1&e&&s["\u0275\u0275element"](0,"tui-file",36),2&e){const e=s["\u0275\u0275nextContext"]().ngIf,t=s["\u0275\u0275nextContext"](3);s["\u0275\u0275property"]("file",e)("size",t.size)("showSize",t.showSize)}}function ee(e,t){1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275template"](1,X,1,3,"tui-file",35),s["\u0275\u0275elementContainerEnd"]())}function te(e,t){if(1&e&&s["\u0275\u0275template"](0,ee,2,0,"ng-container",34),2&e){const e=s["\u0275\u0275nextContext"](2);s["\u0275\u0275property"]("ngIf",e.control.value)}}function ne(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"tui-file",38),s["\u0275\u0275listener"]("removed",(function(){s["\u0275\u0275restoreView"](e);const t=s["\u0275\u0275nextContext"]().$implicit;return s["\u0275\u0275nextContext"](2).removeRejected(t)})),s["\u0275\u0275elementEnd"]()}if(2&e){const e=s["\u0275\u0275nextContext"]().$implicit,t=s["\u0275\u0275nextContext"](2);s["\u0275\u0275property"]("file",e)("size",t.size)("showSize",t.showSize)}}function ie(e,t){1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275template"](1,ne,1,3,"tui-file",37),s["\u0275\u0275elementContainerEnd"]())}function oe(e,t){1&e&&(s["\u0275\u0275i18nStart"](0,39),s["\u0275\u0275element"](1,"code"),s["\u0275\u0275i18nEnd"]())}function re(e,t){1&e&&(s["\u0275\u0275i18nStart"](0,40),s["\u0275\u0275element"](1,"code"),s["\u0275\u0275i18nEnd"]())}function le(e,t){1&e&&s["\u0275\u0275i18n"](0,41)}function ae(e,t){1&e&&s["\u0275\u0275i18n"](0,42)}function ce(e,t){1&e&&s["\u0275\u0275i18n"](0,43)}function se(e,t){1&e&&s["\u0275\u0275i18n"](0,44)}function ue(e,t){1&e&&s["\u0275\u0275i18n"](0,45)}function me(e,t){1&e&&s["\u0275\u0275i18n"](0,46)}function pe(e,t){1&e&&s["\u0275\u0275i18n"](0,47)}function de(e,t){1&e&&s["\u0275\u0275i18n"](0,48)}function fe(e,t){1&e&&s["\u0275\u0275i18n"](0,49)}function he(e,t){1&e&&s["\u0275\u0275i18n"](0,50)}function ge(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"tui-doc-demo"),s["\u0275\u0275elementStart"](1,"tui-input-files",13),s["\u0275\u0275listener"]("reject",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().updateRejected(t)})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"tui-files",14),s["\u0275\u0275template"](3,U,3,3,"ng-container",15),s["\u0275\u0275template"](4,te,1,1,"ng-template",null,16,s["\u0275\u0275templateRefExtractor"]),s["\u0275\u0275template"](6,ie,2,0,"ng-container",17),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](7,"tui-doc-documentation",18),s["\u0275\u0275template"](8,oe,2,0,"ng-template",19),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().disabled=t})),s["\u0275\u0275template"](9,re,2,0,"ng-template",20),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().accept=t})),s["\u0275\u0275template"](10,le,1,0,"ng-template",21),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().label=t})),s["\u0275\u0275template"](11,ae,1,0,"ng-template",22),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().link=t})),s["\u0275\u0275template"](12,ce,1,0,"ng-template",23),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().maxFileSize=t})),s["\u0275\u0275template"](13,se,1,0,"ng-template",24),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().multipleChange(t)})),s["\u0275\u0275template"](14,ue,1,0,"ng-template",25),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](15,"tui-doc-documentation",26),s["\u0275\u0275template"](16,me,1,0,"ng-template",27),s["\u0275\u0275template"](17,pe,1,0,"ng-template",28),s["\u0275\u0275template"](18,de,1,0,"ng-template",29),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().showSize=t})),s["\u0275\u0275template"](19,fe,1,0,"ng-template",30),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().size=t})),s["\u0275\u0275template"](20,he,1,0,"ng-template",31),s["\u0275\u0275elementEnd"]()}if(2&e){const e=s["\u0275\u0275reference"](5),t=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("formControl",t.control)("accept",t.accept)("link",t.link)("label",t.label)("maxFileSize",t.maxFileSize)("multiple",t.multiple)("focusable",t.focusable)("pseudoFocused",t.pseudoFocused)("pseudoHovered",t.pseudoHovered)("pseudoPressed",t.pseudoPressed),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngIf",t.multiple)("ngIfElse",e),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("ngForOf",t.rejectedFiles),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("documentationPropertyValue",t.disabled),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",t.acceptVariants)("documentationPropertyValue",t.accept),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValue",t.label),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValue",t.link),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",t.maxFileSizeVariants)("documentationPropertyValue",t.maxFileSize),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValue",t.multiple),s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("documentationPropertyValue",t.showSize),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",t.sizeVariants)("documentationPropertyValue",t.size)}}function ye(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"ol",51),s["\u0275\u0275elementStart"](1,"li"),s["\u0275\u0275elementStart"](2,"p"),s["\u0275\u0275i18nStart"](3,52),s["\u0275\u0275element"](4,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](5,"tui-doc-code",53),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"li"),s["\u0275\u0275elementStart"](7,"p"),s["\u0275\u0275i18n"](8,54),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](9,"tui-doc-code",55),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("code",e.exampleModule),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("code",e.exampleHtml)}}let xe=(()=>{class e extends u.a{constructor(){super(...arguments),this.exampleModule=n.e(774).then(n.bind(null,"NeAm")),this.exampleHtml=n.e(775).then(n.bind(null,"7uzQ")),this.example1={TypeScript:n.e(764).then(n.bind(null,"fHYk")),HTML:n.e(763).then(n.bind(null,"us7P"))},this.example2={TypeScript:n.e(766).then(n.bind(null,"YtDm")),HTML:n.e(765).then(n.bind(null,"24QG"))},this.example3={TypeScript:n.e(768).then(n.bind(null,"USpn")),HTML:n.e(767).then(n.bind(null,"iKse"))},this.example4={TypeScript:n.e(770).then(n.bind(null,"WqPG")),HTML:n.e(769).then(n.bind(null,"LzY4"))},this.example5={TypeScript:n.e(773).then(n.bind(null,"33PH")),HTML:n.e(771).then(n.bind(null,"t0js")),LESS:n.e(772).then(n.bind(null,"TsQ9"))},this.control=new o.FormControl,this.link="Choose a file",this.label="or drop\xa0it\xa0here",this.multiple=!0,this.showSize=!0,this.accept="",this.acceptVariants=["image/*","application/pdf","image/*,application/pdf"],this.maxFileSizeVariants=[100,512e3,3e7,22e5],this.sizeVariants=["m","l"],this.size=this.sizeVariants[0],this.rejectedFiles=[],this.maxFileSize=this.maxFileSizeVariants[2]}removeFile(e){this.control.setValue(this.control.value.filter(t=>t.name!==e.name))}removeRejected(e){this.rejectedFiles=this.rejectedFiles.filter(t=>t.name!==e.name)}updateRejected(e){this.rejectedFiles=[...this.rejectedFiles,...Array.isArray(e)?e:[e]]}multipleChange(e){this.rejectedFiles=[],this.control.setValue(null),this.multiple=e}}return e.\u0275fac=function(t){return Ce(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-input-files"]],features:[s["\u0275\u0275ProvidersFeature"]([{provide:m.a,useExisting:Object(s.forwardRef)(()=>e)}]),s["\u0275\u0275InheritDefinitionFeature"]],decls:4,vars:0,consts:function(){return[["header","InputFiles","package","KIT","type","components"],["pageTab",""],$localize`:␟24418f9533e5b068aac1a4bde63bcb5f119593f5␟8579732062296250669:An input for upload one or several files. It uses native input file abilities.`,["id","single",3,"content",6,"heading"],["heading",$localize`:␟21b9e693105e70e875f4027941d66fc7373e5e6f␟2365312831690318321:Basic single`],["id","multiple",3,"content",6,"heading"],["heading",$localize`:␟a47f0c6491869fa5eac7f981a8d11633190e851e␟2052254700267022778:multiple`],["id","standalone-files",3,"content",6,"heading"],["heading",$localize`:␟ea30a2733abb457ee8364e4e3c4814e3def1aa15␟2741034837339672700:Standalone files`],["id","With button",3,"content",6,"heading"],["heading",$localize`:␟7802ae78818c3f2978ca66de1ad0bbe52505004f␟4530975242591241405:With button`],["id","custom",3,"content",6,"heading"],["heading",$localize`:␟099e0facbaa0fd2a2d26ab71ef2ada157a398cf8␟7398919974746085920:Custom content`],[3,"formControl","accept","link","label","maxFileSize","multiple","focusable","pseudoFocused","pseudoHovered","pseudoPressed","reject"],[1,"tui-space_top-2"],[4,"ngIf","ngIfElse"],["single",""],[4,"ngFor","ngForOf"],["heading","TuiInputFiles"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","accept","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","label","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","link","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","maxFileSize","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","multiple","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","onReject","documentationPropertyMode","output","documentationPropertyType","TuiFileLike"],["heading","TuiFile"],["documentationPropertyName","file","documentationPropertyMode","input","documentationPropertyType","TuiFileLike"],["documentationPropertyName","state","documentationPropertyMode","input","documentationPropertyType","TuiFileStateT"],["documentationPropertyName","showSize","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","TuiSizeL",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","fileRemoved","documentationPropertyMode","output","documentationPropertyType","TuiFileLike"],[3,"file","size","showSize","removed",4,"tuiItem"],[3,"file","size","showSize","removed"],[4,"ngIf"],[3,"file","size","showSize",4,"tuiItem"],[3,"file","size","showSize"],["state","error",3,"file","size","showSize","removed",4,"tuiItem"],["state","error",3,"file","size","showSize","removed"],$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,$localize`:␟68f10dee028dba0c20e1fcddb6056af0dcd8ec71␟127963594360329727: Allowed formats (for native attribute ${"\ufffd#1\ufffd"}:START_TAG_CODE:accept${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,$localize`:␟9e1d8ae17f259dd2ea09707bfd739def52e9427a␟5985585011983944521: Label text `,$localize`:␟89a84d49564b88163283c735832c296f6f57f3d1␟3977709208772062372: Link text `,$localize`:␟6119d719ec0330a98d880e682e2abc1195c59eea␟3924563314608826807: Max file size in bytes (30 MB by default — 30 * 1000 * 1000) `,$localize`:␟205964e90f903cb9b99c3d11867ed580d2b738eb␟8625084047952787649: Allows to upload several files `,$localize`:␟76c4cf0a46be41a48eee3c30e13b463d63ae5a1d␟4840980441808546217: Emits file that was rejected. `,$localize`:␟5767e8c57ff270fa0ffa0fd4454e60b9ccd004bc␟414489167527586218: File `,$localize`:␟1b17f43bcc6f4e13dd2881b4034a923787ab238d␟5449162325769068309: State of the file `,$localize`:␟c2230ad4bcda14af455b6f5bb951b4dae4fc4f10␟2011612506485911109: Show file size `,$localize`:␟52b1e7046e2e0240fcb7b8feef3432c93451000c␟1178400793347014785: Component size `,$localize`:␟9f4a11af0f1b581ab49906c0ae7b2875b464493d␟8330152764576404723: Emits file on click on close button. When subscribed to, close button appears. `,[1,"b-demo-steps"],$localize`:␟d41a7e4dc2844fe570cedb26ed5254a96dac3351␟3726838635698526556: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiInputFileModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,["filename","myComponent.module.ts",3,"code"],$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,["filename","myComponent.template.html",3,"code"]]},template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-doc-page",0),s["\u0275\u0275template"](1,J,17,5,"ng-template",1),s["\u0275\u0275template"](2,ge,21,24,"ng-template",1),s["\u0275\u0275template"](3,ye,10,2,"ng-template",1),s["\u0275\u0275elementEnd"]())},directives:[p.a,d.a,f.a,F,w,_,N,B,G.a,y.a,o.NgControlStatus,o.FormControlDirective,g.a,i.t,i.s,Q.a,K.a,z.a,x.a,Z.a],pipes:[i.b],encapsulation:2,changeDetection:0}),e})();const Ce=s["\u0275\u0275getInheritedFactory"](xe);let ve=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.c,o.ReactiveFormsModule,c.Q,c.ab,l.m,a.yb,a.ab,a.Vb,r.f.forChild(Object(l.t)(xe))]]}),e})()}}]);