(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{d2li:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiPrimitiveTextfieldModule",(function(){return ht}));var i=n("2kYt"),o=n("nIj0"),a=n("sEIs"),r=n("SVIu"),l=n("Qq0t"),u=n("dvRg"),c=n("kiPw"),s=n("EM62");let d=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.FormsModule,i.c,r.k,r.j,l.TuiModeModule,u.TuiAccordionModule]]}),e})();var p=n("zaj/"),m=n("jjvb"),f=n("Piem"),h=n("3tXr"),g=n("l4xa"),y=n("KPn+"),x=n("K/iL"),C=n("OZlg"),b=n("e0eB"),v=n("iyc4"),T=n("yZWP"),P=n("luNI"),V=n("KzL3"),I=n("CDxv"),w=n("WKKg"),S=n("ONKv"),E=n("fHzR");function M(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"tui-svg",4),s["\u0275\u0275listener"]("click",(function(){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().togglePasswordVisibility()})),s["\u0275\u0275elementEnd"]()}if(2&e){const e=s["\u0275\u0275nextContext"](),t=s["\u0275\u0275reference"](5);s["\u0275\u0275property"]("tuiHint",t)("src",e.icon)}}function O(e,t){if(1&e&&s["\u0275\u0275text"](0),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275textInterpolate1"](" ",e.hint," ")}}const L=["*"];let z=(()=>{class e extends g.AbstractTuiControl{constructor(e,t){super(e,t),this.exampleText="",this.labelOutside=!1,this.autocomplete=null,this.hintContent=null,this.hintDirection="bottom-left",this.hintMode=null,this.maxLength=null,this.size="l",this.isPasswordHidden=!0}get nativeFocusableElement(){return this.computedDisabled||!this.textfield?null:this.textfield.nativeFocusableElement}get focused(){return!!this.textfield&&this.textfield.focused}get icon(){return"s"===this.size?this.isPasswordHidden?"tuiIconEyeClosed":"tuiIconEyeOpen":this.isPasswordHidden?"tuiIconHideLarge":"tuiIconShowLarge"}get hint(){return this.isPasswordHidden?"Show password":"Hide password"}get inputType(){return this.isPasswordHidden||!this.hasEyeIcon?"password":"text"}get hasEyeIcon(){return!(this.disabled||this.readOnly)}onValueChange(e){this.updateValue(e)}onFocused(e){this.updateFocused(e)}togglePasswordVisibility(){this.isPasswordHidden=!this.isPasswordHidden}getFallbackValue(){return""}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](o.NgControl,10),s["\u0275\u0275directiveInject"](s.ChangeDetectorRef))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-primitive-textfield-example-1"]],viewQuery:function(e,t){var n;1&e&&s["\u0275\u0275viewQuery"](l.TuiPrimitiveTextfieldComponent,!0),2&e&&s["\u0275\u0275queryRefresh"](n=s["\u0275\u0275loadQuery"]())&&(t.textfield=n.first)},inputs:{exampleText:"exampleText",labelOutside:"labelOutside",autocomplete:"autocomplete",hintContent:"hintContent",hintDirection:"hintDirection",hintMode:"hintMode",maxLength:"maxLength",size:"size"},features:[s["\u0275\u0275InheritDefinitionFeature"]],ngContentSelectors:L,decls:6,vars:9,consts:[[3,"invalid","focusable","tuiTextfieldMaxLength","tuiTextfieldAutocomplete","tuiTextfieldType","disabled","readOnly","iconContent","value","valueChange","focusedChange"],["polymorpheus",""],["iconContent","polymorpheus"],["hintContent","polymorpheus"],["tuiHintId","not_required",1,"icon",3,"tuiHint","src","click"]],template:function(e,t){if(1&e&&(s["\u0275\u0275projectionDef"](),s["\u0275\u0275elementStart"](0,"tui-primitive-textfield",0),s["\u0275\u0275listener"]("valueChange",(function(e){return t.onValueChange(e)}))("focusedChange",(function(e){return t.onFocused(e)})),s["\u0275\u0275projection"](1),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](2,M,1,2,"ng-template",1,2,s["\u0275\u0275templateRefExtractor"]),s["\u0275\u0275template"](4,O,1,1,"ng-template",1,3,s["\u0275\u0275templateRefExtractor"])),2&e){const e=s["\u0275\u0275reference"](3);s["\u0275\u0275property"]("invalid",t.computedInvalid)("focusable",t.focusable)("tuiTextfieldMaxLength",t.maxLength)("tuiTextfieldAutocomplete",t.autocomplete)("tuiTextfieldType",t.inputType)("disabled",t.disabled)("readOnly",t.readOnly)("iconContent",t.hasEyeIcon?e:null)("value",t.value)}},directives:[P.a,V.b,I.b,w.b,c.e,S.a,E.b],styles:["[_nghost-%COMP%]{display:block}.icon[_ngcontent-%COMP%]{cursor:pointer;pointer-events:auto}"],changeDetection:0}),e})();var D=n("EPR0"),k=n("eB8V"),$=n("RKv1"),A=n("kr92"),H=n("pQcr"),N=n("gEyt"),j=n("2wTY"),F=n("RlDx"),R=n("yHor"),_=n("zGJC"),K=n("W/bl"),B=n("D3Xw"),G=n("FSyC"),Q=n("cweO"),q=n("u8jZ"),W=n("D57K"),U=n("e4iD"),Z=n("9qw2"),J=n("ZTXN"),X=n("kuMc");const Y=new s.InjectionToken("CSS vars list for customization",{factory:()=>[]}),ee=new s.InjectionToken("CSS variables map"),te=[g.TuiDestroyService,{provide:l.TuiModeDirective,useExisting:Object(s.forwardRef)(()=>Ee)},{provide:ee,deps:[Z.f,Y],useFactory:function(e,t){const n=e.getComputedStyle(e.document.documentElement);return t.reduce((e,t)=>Object.assign(Object.assign({},e),{[t]:n.getPropertyValue(t).trim()}),{})}}];var ne=n("TxeG"),ie=n("KJKW"),oe=n("WecH"),ae=n("Wqyg");const re=["demo"];function le(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"h2"),s["\u0275\u0275text"](1,"Not available in Internet Explorer."),s["\u0275\u0275elementEnd"]())}function ue(e,t){}function ce(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275template"](0,ue,0,0,"ng-template",7),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(n){s["\u0275\u0275restoreView"](e);const i=t.$implicit;return s["\u0275\u0275nextContext"](3).onModelChange(i,n)}))}if(2&e){const e=t.$implicit,n=s["\u0275\u0275nextContext"](3);s["\u0275\u0275property"]("documentationPropertyName",e)("documentationPropertyType",n.getType(e))("documentationPropertyValue",n.getVariable(e))}}function se(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"tui-doc-documentation",5),s["\u0275\u0275template"](1,ce,1,3,void 0,6),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"](2);s["\u0275\u0275property"]("tuiMode",null),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngForOf",e.keys)}}function de(e,t){}function pe(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275template"](0,de,0,0,"ng-template",7),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){s["\u0275\u0275restoreView"](e);const n=s["\u0275\u0275nextContext"]().$implicit;return s["\u0275\u0275nextContext"](4).onModelChange(n,t)}))}if(2&e){const e=s["\u0275\u0275nextContext"]().$implicit,t=s["\u0275\u0275nextContext"](4);s["\u0275\u0275property"]("documentationPropertyName",e)("documentationPropertyType",t.getType(e))("documentationPropertyValue",t.getVariable(e))}}function me(e,t){if(1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275template"](1,pe,1,3,void 0,9),s["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit,n=s["\u0275\u0275nextContext"](4);s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",!n.isDark(e)&&!n.isLight(e))}}function fe(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"tui-doc-documentation"),s["\u0275\u0275template"](1,me,2,1,"ng-container",6),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"](3);s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngForOf",e.keys)}}function he(e,t){}function ge(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275template"](0,he,0,0,"ng-template",7),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){s["\u0275\u0275restoreView"](e);const n=s["\u0275\u0275nextContext"]().$implicit;return s["\u0275\u0275nextContext"](5).onModelChange(n,t)}))}if(2&e){const e=s["\u0275\u0275nextContext"]().$implicit,t=s["\u0275\u0275nextContext"](5);s["\u0275\u0275property"]("documentationPropertyName",e)("documentationPropertyType",t.getType(e))("documentationPropertyValue",t.getVariable(e))}}function ye(e,t){if(1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275template"](1,ge,1,3,void 0,9),s["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit,n=s["\u0275\u0275nextContext"](5);s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",n.isLight(e))}}function xe(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"tui-doc-documentation"),s["\u0275\u0275template"](1,ye,2,1,"ng-container",6),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"](4);s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngForOf",e.keys)}}function Ce(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-accordion-item"),s["\u0275\u0275text"](1," Light "),s["\u0275\u0275template"](2,xe,2,1,"tui-doc-documentation",8),s["\u0275\u0275elementEnd"]())}function be(e,t){}function ve(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275template"](0,be,0,0,"ng-template",7),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){s["\u0275\u0275restoreView"](e);const n=s["\u0275\u0275nextContext"]().$implicit;return s["\u0275\u0275nextContext"](5).onModelChange(n,t)}))}if(2&e){const e=s["\u0275\u0275nextContext"]().$implicit,t=s["\u0275\u0275nextContext"](5);s["\u0275\u0275property"]("documentationPropertyName",e)("documentationPropertyType",t.getType(e))("documentationPropertyValue",t.getVariable(e))}}function Te(e,t){if(1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275template"](1,ve,1,3,void 0,9),s["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit,n=s["\u0275\u0275nextContext"](5);s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",n.isDark(e))}}function Pe(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"tui-doc-documentation"),s["\u0275\u0275template"](1,Te,2,1,"ng-container",6),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"](4);s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngForOf",e.keys)}}function Ve(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-accordion-item"),s["\u0275\u0275text"](1," Dark "),s["\u0275\u0275template"](2,Pe,2,1,"tui-doc-documentation",8),s["\u0275\u0275elementEnd"]())}function Ie(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"tui-accordion",5),s["\u0275\u0275elementStart"](1,"tui-accordion-item"),s["\u0275\u0275text"](2," Default "),s["\u0275\u0275template"](3,fe,2,1,"tui-doc-documentation",8),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](4,Ce,3,0,"tui-accordion-item",9),s["\u0275\u0275template"](5,Ve,3,0,"tui-accordion-item",9),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"](2);s["\u0275\u0275property"]("tuiMode",null),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("ngIf",e.hasLight),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",e.hasLight)}}function we(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"tui-doc-demo",null,2),s["\u0275\u0275projection"](2),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](3,se,2,2,"tui-doc-documentation",3),s["\u0275\u0275template"](4,Ie,6,3,"ng-template",null,4,s["\u0275\u0275templateRefExtractor"])),2&e){const e=s["\u0275\u0275reference"](5),t=s["\u0275\u0275nextContext"]();s["\u0275\u0275attribute"]("style",t.style,s["\u0275\u0275sanitizeStyle"]),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("ngIf",t.basic)("ngIfElse",e)}}const Se=["*"];let Ee=(()=>{class e{constructor(e,t,n,i){this.destroy$=e,this.sanitizer=t,this.variables=n,this.userAgent=i,this.isIE=Object(g.isIE)(this.userAgent),this.change$=new J.a}get style(){return this.getStyle(this.sanitizer,this.stringify(this.variables))}get keys(){return this.getKeys(this.variables)}get basic(){return!this.hasDark&&!this.hasLight}get hasLight(){return this.keys.some(this.isLight)}get hasDark(){return this.keys.some(this.isDark)}get mode(){return this.demo&&this.demo.mode||null}ngAfterViewInit(){this.demo&&this.demo.change$.pipe(Object(X.a)(this.destroy$)).subscribe(()=>{this.change$.next()})}isLight(e){return e.includes("onDark")}isDark(e){return e.includes("onLight")}onModelChange(e,t){this.variables=Object.assign(Object.assign({},this.variables),{[e]:"string"==typeof t?t:t+"px"})}getType(e){const t=this.variables[e];return e.includes("boxshadow")?"string":t.startsWith("#")||t.startsWith("rgb")?"color":"number"}getVariable(e){const t=this.variables[e];return t.includes("px")?Number.parseInt(t,10):t}getKeys(e){return Object.keys(e)}getStyle(e,t){return e.bypassSecurityTrustStyle(t)}stringify(e){return Object.keys(e).reduce((t,n)=>`${n}: ${e[n]}; ${t}`,"")}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](g.TuiDestroyService),s["\u0275\u0275directiveInject"](U.DomSanitizer),s["\u0275\u0275directiveInject"](ee),s["\u0275\u0275directiveInject"](Z.e))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-customization"]],viewQuery:function(e,t){var n;1&e&&s["\u0275\u0275viewQuery"](re,!0),2&e&&s["\u0275\u0275queryRefresh"](n=s["\u0275\u0275loadQuery"]())&&(t.demo=n.first)},features:[s["\u0275\u0275ProvidersFeature"](te)],ngContentSelectors:Se,decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["customization",""],["demo",""],["class","tui-space_top-6",3,"tuiMode",4,"ngIf","ngIfElse"],["withMode",""],[1,"tui-space_top-6",3,"tuiMode"],[4,"ngFor","ngForOf"],[3,"documentationPropertyName","documentationPropertyType","documentationPropertyValue","documentationPropertyValueChange"],[4,"tuiAccordionItemContent"],[4,"ngIf"]],template:function(e,t){if(1&e&&(s["\u0275\u0275projectionDef"](),s["\u0275\u0275template"](0,le,2,0,"h2",0),s["\u0275\u0275template"](1,we,6,3,"ng-template",null,1,s["\u0275\u0275templateRefExtractor"])),2&e){const e=s["\u0275\u0275reference"](2);s["\u0275\u0275property"]("ngIf",t.isIE)("ngIfElse",e)}},directives:[i.t,D.a,R.a,ne.a,i.s,_.a,ie.a,oe.a,ae.a],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),Object(W.a)([g.tuiPure],e.prototype,"getKeys",null),Object(W.a)([g.tuiPure],e.prototype,"getStyle",null),Object(W.a)([g.tuiPure],e.prototype,"stringify",null),e})();var Me=n("5ZrC"),Oe=n("1Nkj"),Le=n("YfVi"),ze=n("S0IH");const De=["tuiIconInteractiveContent"],ke=["pageTab",$localize`:␟daad089ce86fb00b12d9eb7ca5e88c3feb9da2a7␟73001596297098332:Theming`];var $e;$e=$localize`:␟4b2b0c0a7bb462722d699b9dc746c409b0ea9cb7␟7220885685317963345: PrimitiveTextfield is a flexible string input that can be used as a base for complex inputs. Use it as a basis for other components. ${"\ufffd#2\ufffd"}:START_TAG_STRONG:Does not work with Angular forms${"\ufffd/#2\ufffd"}:CLOSE_TAG_STRONG:`;const Ae=["heading",$localize`:␟10d6f83eef18aa9fca4e651a15e9af7b5b9bdbfd␟5960739619447908905:sizes`];function He(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"p"),s["\u0275\u0275i18nStart"](1,$e),s["\u0275\u0275element"](2,"strong"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"tui-doc-example",3),s["\u0275\u0275i18nAttributes"](4,Ae),s["\u0275\u0275elementStart"](5,"p"),s["\u0275\u0275text"](6," Simplified version of "),s["\u0275\u0275elementStart"](7,"a",4),s["\u0275\u0275elementStart"](8,"code"),s["\u0275\u0275text"](9,"InputPassword"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](10,": "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](11,"tui-primitive-textfield-example-1",5),s["\u0275\u0275listener"]("ngModelChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().password=t})),s["\u0275\u0275text"](12," Type a password "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()}if(2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("content",e.example1),s["\u0275\u0275advance"](8),s["\u0275\u0275property"]("ngModel",e.password)}}function Ne(e,t){if(1&e&&(s["\u0275\u0275element"](0,"tui-avatar",19),s["\u0275\u0275text"](1)),2&e){const e=t.$implicit;s["\u0275\u0275property"]("text",e),s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"](" ",e," ")}}function je(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"tui-svg",20),s["\u0275\u0275listener"]("click",(function(){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"](2).onClick()})),s["\u0275\u0275elementEnd"]()}}var Fe,Re,_e,Ke,Be,Ge,Qe,qe,We,Ue,Ze,Je;function Xe(e,t){1&e&&s["\u0275\u0275i18n"](0,Fe)}function Ye(e,t){1&e&&s["\u0275\u0275i18n"](0,Re)}function et(e,t){1&e&&s["\u0275\u0275i18n"](0,_e)}function tt(e,t){1&e&&(s["\u0275\u0275i18nStart"](0,Ke),s["\u0275\u0275elementStart"](1,"a",21),s["\u0275\u0275element"](2,"code"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275i18nEnd"]())}function nt(e,t){1&e&&s["\u0275\u0275i18n"](0,Be)}function it(e,t){1&e&&(s["\u0275\u0275i18nStart"](0,Ge),s["\u0275\u0275elementStart"](1,"a",22),s["\u0275\u0275element"](2,"code"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275i18nEnd"]())}function ot(e,t){1&e&&s["\u0275\u0275i18n"](0,Qe)}function at(e,t){1&e&&s["\u0275\u0275i18n"](0,qe)}function rt(e,t){1&e&&s["\u0275\u0275i18n"](0,We)}function lt(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"tui-doc-demo"),s["\u0275\u0275elementStart"](1,"tui-primitive-textfield",6),s["\u0275\u0275listener"]("valueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().value=t})),s["\u0275\u0275text"](2," Component label "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](3,Ne,2,2,"ng-template",7,8,s["\u0275\u0275templateRefExtractor"]),s["\u0275\u0275template"](5,je,1,0,"ng-template",7,9,s["\u0275\u0275templateRefExtractor"]),s["\u0275\u0275elementStart"](7,"tui-doc-documentation"),s["\u0275\u0275template"](8,Xe,1,0,"ng-template",10),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().disabled=t})),s["\u0275\u0275template"](9,Ye,1,0,"ng-template",11),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().editable=t})),s["\u0275\u0275template"](10,et,1,0,"ng-template",12),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().filler=t})),s["\u0275\u0275template"](11,tt,3,0,"ng-template",13),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().selectedIcon=t})),s["\u0275\u0275template"](12,nt,1,0,"ng-template",14),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().iconAlign=t})),s["\u0275\u0275template"](13,it,3,0,"ng-template",15),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().postfix=t})),s["\u0275\u0275template"](14,ot,1,0,"ng-template",16),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().readOnly=t})),s["\u0275\u0275template"](15,at,1,0,"ng-template",17),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().invalid=t})),s["\u0275\u0275template"](16,rt,1,0,"ng-template",18),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().value=t})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](17,"hint-controller-documentation"),s["\u0275\u0275element"](18,"textfield-controller-documentation"),s["\u0275\u0275element"](19,"inherited-documentation")}if(2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("focusable",e.focusable)("tuiTextfieldAutocomplete",e.autocomplete)("tuiTextfieldCleaner",e.cleaner)("tuiTextfieldCustomContent",e.customContent)("tuiTextfieldInputMode",e.inputMode)("tuiTextfieldMaxLength",e.maxLength)("tuiTextfieldExampleText",e.exampleText)("tuiTextfieldLabelOutside",e.labelOutside)("tuiTextfieldSize",e.size)("tuiTextfieldType",e.type)("pseudoPressed",e.pseudoPressed)("pseudoFocused",e.pseudoFocused)("pseudoHovered",e.pseudoHovered)("disabled",e.disabled)("editable",e.editable)("filler",e.filler)("iconAlign",e.iconAlign)("iconContent",e.iconContent)("readOnly",e.readOnly)("postfix",e.postfix)("invalid",e.invalid)("tuiHintContent",e.hintContent)("tuiHintDirection",e.hintDirection)("tuiHintMode",e.hintMode)("value",e.value),s["\u0275\u0275advance"](7),s["\u0275\u0275property"]("documentationPropertyValue",e.disabled),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValue",e.editable),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValue",e.filler),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",e.iconVariants)("documentationPropertyValue",e.selectedIcon),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",e.iconAlignVariants)("documentationPropertyValue",e.iconAlign),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValue",e.postfix),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValue",e.readOnly),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValue",e.invalid),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValue",e.value)}}function ut(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"ol",23),s["\u0275\u0275elementStart"](1,"li"),s["\u0275\u0275elementStart"](2,"p"),s["\u0275\u0275i18nStart"](3,Ue),s["\u0275\u0275element"](4,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](5,"tui-doc-code",24),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"li"),s["\u0275\u0275elementStart"](7,"p"),s["\u0275\u0275i18n"](8,Ze),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](9,"tui-doc-code",25),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("code",e.exampleImportModule),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("code",e.exampleInsertTemplate)}}function ct(e,t){1&e&&s["\u0275\u0275element"](0,"bootstrap")}function st(e,t){1&e&&s["\u0275\u0275element"](0,"material")}function dt(e,t){1&e&&s["\u0275\u0275i18n"](0,Je)}function pt(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"tui-customization"),s["\u0275\u0275template"](1,ct,1,0,"bootstrap",26),s["\u0275\u0275template"](2,st,1,0,"material",26),s["\u0275\u0275elementStart"](3,"tui-radio-list",27),s["\u0275\u0275listener"]("ngModelChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().theme=t})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](4,dt,1,0,"ng-template",7,28,s["\u0275\u0275templateRefExtractor"]),s["\u0275\u0275elementStart"](6,"label",29),s["\u0275\u0275elementStart"](7,"tui-primitive-textfield",30),s["\u0275\u0275text"](8),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()}if(2&e){const e=s["\u0275\u0275reference"](5),t=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",t.isBootstrap),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",t.isMaterial),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("items",t.themes)("ngModel",t.theme),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("label",t.isBootstrap?e:""),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("tuiTextfieldCleaner",!t.isBootstrap)("tuiTextfieldLabelOutside",t.isBootstrap)("tuiTextfieldSize",t.customizationSize),s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"](" ",t.placeholder," ")}}Fe=$localize`:␟5195232cc6d6804f2b83c984b763d494b95728e8␟4703780784365037889: Disabled state `,Re=$localize`:␟1d3f6ac88d0dbe1d1ac7b30b1eb00e4aebbf2060␟873865768272363635: Native input allows inputing `,_e=$localize`:␟f29074f0478b44322b1dc718b7bb03de7fe2b4d8␟4151292360106248726: Gray background text as a hint (e.g. HH:MM:SS for time) `,Ke=$localize`:␟7a9d5ac07f3c6ed78f650de33b72c1d438f7ba5c␟4326150529154851553: Icon content. If content is a string, it is used as stringified svg or a name of icon registered in ${"\ufffd#1\ufffd"}:START_LINK:${"\ufffd#2\ufffd"}:START_TAG_CODE:SvgService${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE:${"\ufffd/#1\ufffd"}:CLOSE_LINK:`,Be=$localize`:␟ad56fc4e1a9650890c372aa93c2c426f8467baab␟561630626973828969: Icon align `,Ge=$localize`:␟6e679afe98d17cfe69c801e18477c92bcdac64de␟4780074102892538758: Unfocusable text after value. For example, currency symbol in ${"\ufffd#1\ufffd"}:START_LINK:${"\ufffd#2\ufffd"}:START_TAG_CODE:InputNumber${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE:${"\ufffd/#1\ufffd"}:CLOSE_LINK:. `,Qe=$localize`:␟88dd77c990e5f7fb83a3e3e006bb58f82260ca7e␟2592823355336045770: Component is read only `,qe=$localize`:␟28900c6ae3d4c1ba49407b4808673d3273f10d95␟6963908824346094281: Invalid state `,We=$localize`:␟616f8c85cb0c4ed37b94e8ba9c52e117da1a90c3␟206010917694362071: Value `,Ue=$localize`:␟c980641f2a90372a45408b48f015074f09b0b36a␟4208362552690427517: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiPrimitiveTextfieldModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,Ze=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,Je=$localize`:␟90f00cc03da4a302c000f26810cd7b2fa3edd405␟2773803903742029496: Theming sample `;let mt=(()=>{class e extends y.a{constructor(){super(...arguments),this.example1={TypeScript:"import {\n    ChangeDetectorRef,\n    Component,\n    Inject,\n    Input,\n    Optional,\n    Self,\n    ViewChild,\n} from '@angular/core';\nimport {NgControl} from '@angular/forms';\nimport {\n    AbstractTuiControl,\n    TuiAccountAutofillName,\n    TuiNativeFocusableElement,\n} from '@taiga-ui/cdk';\nimport {\n    TuiDirection,\n    TuiHintMode,\n    TuiPrimitiveTextfieldComponent,\n    TuiSizeL,\n    TuiSizeS,\n} from '@taiga-ui/core';\nimport {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-primitive-textfield-example-1',\n    templateUrl: './template.html',\n    styleUrls: ['./style.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiPrimitiveTextfieldExample1 extends AbstractTuiControl<string> {\n    @Input()\n    exampleText = '';\n\n    @Input()\n    labelOutside = false;\n\n    @Input()\n    autocomplete: TuiAccountAutofillName | null = null;\n\n    @Input()\n    hintContent: PolymorpheusContent | null = null;\n\n    @Input()\n    hintDirection: TuiDirection = 'bottom-left';\n\n    @Input()\n    hintMode: TuiHintMode | null = null;\n\n    @Input()\n    maxLength: number | null = null;\n\n    @Input()\n    size: TuiSizeS | TuiSizeL = 'l';\n\n    private isPasswordHidden = true;\n\n    @ViewChild(TuiPrimitiveTextfieldComponent)\n    private readonly textfield?: TuiPrimitiveTextfieldComponent;\n\n    constructor(\n        @Optional()\n        @Self()\n        @Inject(NgControl)\n        control: NgControl | null,\n        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,\n    ) {\n        super(control, changeDetectorRef);\n    }\n\n    get nativeFocusableElement(): TuiNativeFocusableElement | null {\n        return this.computedDisabled || !this.textfield\n            ? null\n            : this.textfield.nativeFocusableElement;\n    }\n\n    get focused(): boolean {\n        return !!this.textfield && this.textfield.focused;\n    }\n\n    get icon(): string {\n        if (this.size === 's') {\n            return this.isPasswordHidden ? 'tuiIconEyeClosed' : 'tuiIconEyeOpen';\n        }\n\n        return this.isPasswordHidden ? 'tuiIconHideLarge' : 'tuiIconShowLarge';\n    }\n\n    get hint(): string {\n        return this.isPasswordHidden ? 'Show password' : 'Hide password';\n    }\n\n    get inputType(): string {\n        return this.isPasswordHidden || !this.hasEyeIcon ? 'password' : 'text';\n    }\n\n    get hasEyeIcon(): boolean {\n        return !(this.disabled || this.readOnly);\n    }\n\n    onValueChange(textValue: string) {\n        this.updateValue(textValue);\n    }\n\n    onFocused(focused: boolean) {\n        this.updateFocused(focused);\n    }\n\n    togglePasswordVisibility() {\n        this.isPasswordHidden = !this.isPasswordHidden;\n    }\n\n    protected getFallbackValue(): string {\n        return '';\n    }\n}\n",HTML:'<tui-primitive-textfield\n    [invalid]="computedInvalid"\n    [focusable]="focusable"\n    [tuiTextfieldMaxLength]="maxLength"\n    [tuiTextfieldAutocomplete]="autocomplete"\n    [tuiTextfieldType]="inputType"\n    [disabled]="disabled"\n    [readOnly]="readOnly"\n    [iconContent]="hasEyeIcon ? iconContent : null"\n    [value]="value"\n    (valueChange)="onValueChange($event)"\n    (focusedChange)="onFocused($event)"\n>\n    <ng-content></ng-content>\n</tui-primitive-textfield>\n\n<ng-template #iconContent="polymorpheus" polymorpheus>\n    <tui-svg\n        class="icon"\n        tuiHintId="not_required"\n        [tuiHint]="hintContent"\n        [src]="icon"\n        (click)="togglePasswordVisibility()"\n    ></tui-svg>\n</ng-template>\n\n<ng-template #hintContent="polymorpheus" polymorpheus> {{hint}} </ng-template>\n',LESS:":host {\n    display: block;\n}\n\n.icon {\n    cursor: pointer;\n    pointer-events: auto;\n}\n"},this.exampleImportModule="import {FormsModule} from '@angular/forms';\nimport {TuiPrimitiveTextfieldModule} from '@taiga-ui/core';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        FormsModule,\n        TuiPrimitiveTextfieldModule\n    ],\n...\n",this.exampleInsertTemplate='<tui-primitive-textfield [(value)]="value">\n    Type something\n</tui-primitive-textfield>\n',this.themes=["Taiga UI","Bootstrap","Material"],this.theme=this.themes[0],this.iconVariants=["tuiIconSearch","Interactive content"],this.selectedIcon=null,this.iconAlignVariants=["left","right"],this.iconAlign=this.iconAlignVariants[1],this.typeVariants=["text","email","password","tel","url"],this.type=this.typeVariants[0],this.cleaner=!1,this.editable=!0,this.filler="",this.postfix="",this.maxLengthVariants=[10],this.maxLength=null,this.autocompleteVariants=["off","cc-name","cc-number","cc-exp-month","cc-exp-year","cc-type","given-name","additional-name","family-name","username","email","street-address","postal-code","country-name"],this.autocomplete=null,this.inputModeVariants=["text","numeric"],this.inputMode=this.inputModeVariants[0],this.customContentVariants=["Bell"],this.customContentSelected=null,this.password="",this.value="",this.exampleText="",this.disabled=!1,this.readOnly=!1,this.labelOutside=!1,this.sizeVariants=["s","m","l"],this.size=this.sizeVariants[2],this.hintContentVariants=["Ivan Ivanov"],this.hintDirectionVariants=["left","right","bottom-left","bottom-right","top-left","top-right"],this.hintModeVariants=["error","onDark"],this.invalid=!1,this.hintContent=null,this.hintDirection=this.hintDirectionVariants[2],this.hintMode=null}get customContent(){return null!==this.customContentSelected?'<svg xmlns="http://www.w3.org/2000/svg"\nwidth="24px"\nheight="24px"\nviewBox="0 0 24 24">\n<path fill="currentColor" d="M10,17v1c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2l0-1h3.6L17,15.2V11c0-2.2-1.4-4-3-4h-1V5\n   c0-0.6-0.4-1-1-1s-1,0.4-1,1v2h-1c-1.3,0-3,1.9-3,4v4.2L6.4,17H10z M3.6,19L5,14.8V11c0-2.7,1.9-5.2,4-5.8V5c0-1.7,1.3-3,3-3\n   s3,1.3,3,3v0.1c2.3,0.6,4,3,4,5.9v3.8l1.4,4.2h-4.5c-0.4,1.8-2,3-3.9,3c-1.8,0-3.4-1.2-3.9-3H3.6z"/>\n</svg>':null}get iconContent(){return null===this.selectedIcon?null:this.interactiveIcon&&"tuiIconSearch"!==this.selectedIcon?this.interactiveIcon:"tuiIconSearch"}get isBootstrap(){return this.theme===this.themes[1]}get isMaterial(){return this.theme===this.themes[2]}get placeholder(){return this.isBootstrap?"Type a value":"Theming sample"}get customizationSize(){return this.isBootstrap?"s":"l"}onClick(){console.log("Interactive icon clicked")}}return e.\u0275fac=function(t){return ft(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-primitive-textfield"]],viewQuery:function(e,t){var n;1&e&&s["\u0275\u0275viewQuery"](De,!0),2&e&&s["\u0275\u0275queryRefresh"](n=s["\u0275\u0275loadQuery"]())&&(t.interactiveIcon=n.first)},features:[s["\u0275\u0275ProvidersFeature"]([{provide:x.a,useExisting:Object(s.forwardRef)(()=>e)}]),s["\u0275\u0275InheritDefinitionFeature"]],decls:6,vars:0,consts:[["header","PrimitiveTextfield","package","CORE"],["pageTab",""],[6,"pageTab"],["id","example-size",3,"content",6,"heading"],["tuiLink","","routerLink","/tui-input-password"],["hintContent","Additional information",3,"ngModel","ngModelChange"],[3,"focusable","tuiTextfieldAutocomplete","tuiTextfieldCleaner","tuiTextfieldCustomContent","tuiTextfieldInputMode","tuiTextfieldMaxLength","tuiTextfieldExampleText","tuiTextfieldLabelOutside","tuiTextfieldSize","tuiTextfieldType","pseudoPressed","pseudoFocused","pseudoHovered","disabled","editable","filler","iconAlign","iconContent","readOnly","postfix","invalid","tuiHintContent","tuiHintDirection","tuiHintMode","value","valueChange"],["polymorpheus",""],["template","polymorpheus"],["tuiIconInteractiveContent","polymorpheus"],["documentationPropertyName","disabled","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","editable","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","filler","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","iconContent","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","iconAlign","documentationPropertyMode","input","documentationPropertyType","TuiHorizontalDirection",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","postfix","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","readOnly","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","invalid","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","value","documentationPropertyMode","input-output","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["size","xs",1,"avatar",3,"text"],["src","tuiIconCalendarLarge",1,"icon-button",3,"click"],["tuiLink","","routerLink","/tui-svg-service"],["tuiLink","","routerLink","/bui-input-number"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"],[4,"ngIf"],["size","l","orientation","horizontal",1,"tui-space_bottom-4",3,"items","ngModel","ngModelChange"],["label","polymorpheus"],["tuiLabel","",1,"theme-wrapper","label",3,"label"],["value","Value","tuiTextfieldExampleText","Example text",1,"input",3,"tuiTextfieldCleaner","tuiTextfieldLabelOutside","tuiTextfieldSize"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-doc-page",0),s["\u0275\u0275template"](1,He,13,2,"ng-template",1),s["\u0275\u0275template"](2,lt,20,36,"ng-template",1),s["\u0275\u0275template"](3,ut,10,2,"ng-template",1),s["\u0275\u0275template"](4,pt,9,9,"ng-template",2),s["\u0275\u0275i18nAttributes"](5,ke),s["\u0275\u0275elementEnd"]())},directives:[C.a,b.a,v.a,T.a,a.e,z,o.NgControlStatus,o.NgModel,D.a,P.a,I.b,k.b,$.b,A.b,V.b,H.b,N.b,j.b,w.b,F.a,c.e,R.a,_.a,K.a,B.a,G.a,Q.a,S.a,q.a,Ee,i.t,Me.a,Oe.a,Le.a,ze.a],styles:["[_nghost-%COMP%]{display:block}.icon-button[_ngcontent-%COMP%]{position:relative}.avatar[_ngcontent-%COMP%]{margin-right:8px}.label[_ngcontent-%COMP%]{width:360px}.input[_ngcontent-%COMP%]{margin-top:4px}"],changeDetection:0}),e})();const ft=s["\u0275\u0275getInheritedFactory"](mt);let ht=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.c,o.FormsModule,f.a,m.a,h.a,l.TuiPrimitiveTextfieldModule,l.TuiTextfieldControllerModule,l.TuiHintControllerModule,u.TuiAvatarModule,l.TuiLinkModule,l.TuiSvgModule,l.TuiButtonModule,c.c,l.TuiHintModule,u.TuiRadioListModule,d,l.TuiLabelModule,p.a,l.TuiTextfieldControllerModule,...r.e,a.f.forChild(Object(r.n)(mt))]]}),e})()}}]);