(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{kT51:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return yt}));var r=n("jgtz");const i=/^\s*>\s$/,s=r.Node.create({name:"blockquote",addOptions:()=>({HTMLAttributes:{}}),content:"block+",group:"block",defining:!0,parseHTML:()=>[{tag:"blockquote"}],renderHTML({HTMLAttributes:t}){return["blockquote",Object(r.mergeAttributes)(this.options.HTMLAttributes,t),0]},addCommands(){return{setBlockquote:()=>({commands:t})=>t.wrapIn(this.name),toggleBlockquote:()=>({commands:t})=>t.toggleWrap(this.name),unsetBlockquote:()=>({commands:t})=>t.lift(this.name)}},addKeyboardShortcuts(){return{"Mod-Shift-b":()=>this.editor.commands.toggleBlockquote()}},addInputRules(){return[Object(r.wrappingInputRule)({find:i,type:this.type})]}}),o=/(?:^|\s)((?:\*\*)((?:[^*]+))(?:\*\*))$/,a=/(?:^|\s)((?:\*\*)((?:[^*]+))(?:\*\*))/g,l=/(?:^|\s)((?:__)((?:[^__]+))(?:__))$/,d=/(?:^|\s)((?:__)((?:[^__]+))(?:__))/g,p=r.Mark.create({name:"bold",addOptions:()=>({HTMLAttributes:{}}),parseHTML:()=>[{tag:"strong"},{tag:"b",getAttrs:t=>"normal"!==t.style.fontWeight&&null},{style:"font-weight",getAttrs:t=>/^(bold(er)?|[5-9]\d{2,})$/.test(t)&&null}],renderHTML({HTMLAttributes:t}){return["strong",Object(r.mergeAttributes)(this.options.HTMLAttributes,t),0]},addCommands(){return{setBold:()=>({commands:t})=>t.setMark(this.name),toggleBold:()=>({commands:t})=>t.toggleMark(this.name),unsetBold:()=>({commands:t})=>t.unsetMark(this.name)}},addKeyboardShortcuts(){return{"Mod-b":()=>this.editor.commands.toggleBold(),"Mod-B":()=>this.editor.commands.toggleBold()}},addInputRules(){return[Object(r.markInputRule)({find:o,type:this.type}),Object(r.markInputRule)({find:l,type:this.type})]},addPasteRules(){return[Object(r.markPasteRule)({find:a,type:this.type}),Object(r.markPasteRule)({find:d,type:this.type})]}}),u=/^\s*([-+*])\s$/,h=r.Node.create({name:"bulletList",addOptions:()=>({itemTypeName:"listItem",HTMLAttributes:{}}),group:"block list",content(){return this.options.itemTypeName+"+"},parseHTML:()=>[{tag:"ul"}],renderHTML({HTMLAttributes:t}){return["ul",Object(r.mergeAttributes)(this.options.HTMLAttributes,t),0]},addCommands(){return{toggleBulletList:()=>({commands:t})=>t.toggleList(this.name,this.options.itemTypeName)}},addKeyboardShortcuts(){return{"Mod-Shift-8":()=>this.editor.commands.toggleBulletList()}},addInputRules(){return[Object(r.wrappingInputRule)({find:u,type:this.type})]}}),c=/(?:^|\s)((?:`)((?:[^`]+))(?:`))$/,m=/(?:^|\s)((?:`)((?:[^`]+))(?:`))/g,g=r.Mark.create({name:"code",addOptions:()=>({HTMLAttributes:{}}),excludes:"_",code:!0,parseHTML:()=>[{tag:"code"}],renderHTML({HTMLAttributes:t}){return["code",Object(r.mergeAttributes)(this.options.HTMLAttributes,t),0]},addCommands(){return{setCode:()=>({commands:t})=>t.setMark(this.name),toggleCode:()=>({commands:t})=>t.toggleMark(this.name),unsetCode:()=>({commands:t})=>t.unsetMark(this.name)}},addKeyboardShortcuts(){return{"Mod-e":()=>this.editor.commands.toggleCode()}},addInputRules(){return[Object(r.markInputRule)({find:c,type:this.type})]},addPasteRules(){return[Object(r.markPasteRule)({find:m,type:this.type})]}});var f=n("Dsue");const v=/^```([a-z]+)?[\s\n]$/,b=/^~~~([a-z]+)?[\s\n]$/,y=r.Node.create({name:"codeBlock",addOptions:()=>({languageClassPrefix:"language-",exitOnTripleEnter:!0,exitOnArrowDown:!0,HTMLAttributes:{}}),content:"text*",marks:"",group:"block",code:!0,defining:!0,addAttributes(){return{language:{default:null,parseHTML:t=>{var e;const{languageClassPrefix:n}=this.options;return[...(null===(e=t.firstElementChild)||void 0===e?void 0:e.classList)||[]].filter(t=>t.startsWith(n)).map(t=>t.replace(n,""))[0]||null},rendered:!1}}},parseHTML:()=>[{tag:"pre",preserveWhitespace:"full"}],renderHTML({node:t,HTMLAttributes:e}){return["pre",Object(r.mergeAttributes)(this.options.HTMLAttributes,e),["code",{class:t.attrs.language?this.options.languageClassPrefix+t.attrs.language:null},0]]},addCommands(){return{setCodeBlock:t=>({commands:e})=>e.setNode(this.name,t),toggleCodeBlock:t=>({commands:e})=>e.toggleNode(this.name,"paragraph",t)}},addKeyboardShortcuts(){return{"Mod-Alt-c":()=>this.editor.commands.toggleCodeBlock(),Backspace:()=>{const{empty:t,$anchor:e}=this.editor.state.selection;return!(!t||e.parent.type.name!==this.name)&&!(1!==e.pos&&e.parent.textContent.length)&&this.editor.commands.clearNodes()},Enter:({editor:t})=>{if(!this.options.exitOnTripleEnter)return!1;const{state:e}=t,{selection:n}=e,{$from:r,empty:i}=n;if(!i||r.parent.type!==this.type)return!1;const s=r.parentOffset===r.parent.nodeSize-2,o=r.parent.textContent.endsWith("\n\n");return!(!s||!o)&&t.chain().command(({tr:t})=>(t.delete(r.pos-2,r.pos),!0)).exitCode().run()},ArrowDown:({editor:t})=>{if(!this.options.exitOnArrowDown)return!1;const{state:e}=t,{selection:n,doc:r}=e,{$from:i,empty:s}=n;if(!s||i.parent.type!==this.type)return!1;if(i.parentOffset!==i.parent.nodeSize-2)return!1;const o=i.after();return void 0!==o&&!r.nodeAt(o)&&t.commands.exitCode()}}},addInputRules(){return[Object(r.textblockTypeInputRule)({find:v,type:this.type,getAttributes:t=>({language:t[1]})}),Object(r.textblockTypeInputRule)({find:b,type:this.type,getAttributes:t=>({language:t[1]})})]},addProseMirrorPlugins(){return[new f.d({key:new f.e("codeBlockVSCodeHandler"),props:{handlePaste:(t,e)=>{if(!e.clipboardData)return!1;if(this.editor.isActive(this.type.name))return!1;const n=e.clipboardData.getData("text/plain"),r=e.clipboardData.getData("vscode-editor-data"),i=r?JSON.parse(r):void 0,s=null==i?void 0:i.mode;if(!n||!s)return!1;const{tr:o}=t.state;return o.replaceSelectionWith(this.type.create({language:s})),o.setSelection(f.h.near(o.doc.resolve(Math.max(0,o.selection.from-2)))),o.insertText(n.replace(/\r\n?/g,"\n")),o.setMeta("paste",!0),t.dispatch(o),!0}}})]}}),M=r.Node.create({name:"doc",topNode:!0,content:"block+"});var w=n("7bKp");function T(t={}){return new f.d({view:e=>new k(e,t)})}class k{constructor(t,e){this.editorView=t,this.cursorPos=null,this.element=null,this.timeout=-1,this.width=e.width||1,this.color=e.color||"black",this.class=e.class,this.handlers=["dragover","dragend","drop","dragleave"].map(e=>{let n=t=>{this[e](t)};return t.dom.addEventListener(e,n),{name:e,handler:n}})}destroy(){this.handlers.forEach(({name:t,handler:e})=>this.editorView.dom.removeEventListener(t,e))}update(t,e){null!=this.cursorPos&&e.doc!=t.state.doc&&(this.cursorPos>t.state.doc.content.size?this.setCursor(null):this.updateOverlay())}setCursor(t){t!=this.cursorPos&&(this.cursorPos=t,null==t?(this.element.parentNode.removeChild(this.element),this.element=null):this.updateOverlay())}updateOverlay(){let t,e=this.editorView.state.doc.resolve(this.cursorPos);if(!e.parent.inlineContent){let n=e.nodeBefore,r=e.nodeAfter;if(n||r){let e=this.editorView.nodeDOM(this.cursorPos-(n?n.nodeSize:0)).getBoundingClientRect(),i=n?e.bottom:e.top;n&&r&&(i=(i+this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top)/2),t={left:e.left,right:e.right,top:i-this.width/2,bottom:i+this.width/2}}}if(!t){let e=this.editorView.coordsAtPos(this.cursorPos);t={left:e.left-this.width/2,right:e.left+this.width/2,top:e.top,bottom:e.bottom}}let n,r,i=this.editorView.dom.offsetParent;if(this.element||(this.element=i.appendChild(document.createElement("div")),this.class&&(this.element.className=this.class),this.element.style.cssText="position: absolute; z-index: 50; pointer-events: none; background-color: "+this.color),!i||i==document.body&&"static"==getComputedStyle(i).position)n=-pageXOffset,r=-pageYOffset;else{let t=i.getBoundingClientRect();n=t.left-i.scrollLeft,r=t.top-i.scrollTop}this.element.style.left=t.left-n+"px",this.element.style.top=t.top-r+"px",this.element.style.width=t.right-t.left+"px",this.element.style.height=t.bottom-t.top+"px"}scheduleRemoval(t){clearTimeout(this.timeout),this.timeout=setTimeout(()=>this.setCursor(null),t)}dragover(t){if(!this.editorView.editable)return;let e=this.editorView.posAtCoords({left:t.clientX,top:t.clientY}),n=e&&e.inside>=0&&this.editorView.state.doc.nodeAt(e.inside),r=n&&n.type.spec.disableDropCursor,i="function"==typeof r?r(this.editorView,e):r;if(e&&!i){let t=e.pos;if(this.editorView.dragging&&this.editorView.dragging.slice&&(t=Object(w.g)(this.editorView.state.doc,t,this.editorView.dragging.slice),null==t))return this.setCursor(null);this.setCursor(t),this.scheduleRemoval(5e3)}}dragend(){this.scheduleRemoval(20)}drop(){this.scheduleRemoval(20)}dragleave(t){t.target!=this.editorView.dom&&this.editorView.dom.contains(t.relatedTarget)||this.setCursor(null)}}const A=r.Extension.create({name:"dropCursor",addOptions:()=>({color:"currentColor",width:1,class:void 0}),addProseMirrorPlugins(){return[T(this.options)]}});var L=n("jgEa"),C=n("geR4"),O=n("aGmo");class H extends f.f{constructor(t){super(t,t)}map(t,e){let n=t.resolve(e.map(this.head));return H.valid(n)?new H(n):f.f.near(n)}content(){return C.j.empty}eq(t){return t instanceof H&&t.head==this.head}toJSON(){return{type:"gapcursor",pos:this.head}}static fromJSON(t,e){if("number"!=typeof e.pos)throw new RangeError("Invalid input for GapCursor.fromJSON");return new H(t.resolve(e.pos))}getBookmark(){return new I(this.anchor)}static valid(t){let e=t.parent;if(e.isTextblock||!function(t){for(let e=t.depth;e>=0;e--){let n=t.index(e),r=t.node(e);if(0!=n)for(let t=r.child(n-1);;t=t.lastChild){if(0==t.childCount&&!t.inlineContent||t.isAtom||t.type.spec.isolating)return!0;if(t.inlineContent)return!1}else if(r.type.spec.isolating)return!0}return!0}(t)||!function(t){for(let e=t.depth;e>=0;e--){let n=t.indexAfter(e),r=t.node(e);if(n!=r.childCount)for(let t=r.child(n);;t=t.firstChild){if(0==t.childCount&&!t.inlineContent||t.isAtom||t.type.spec.isolating)return!0;if(t.inlineContent)return!1}else if(r.type.spec.isolating)return!0}return!0}(t))return!1;let n=e.type.spec.allowGapCursor;if(null!=n)return n;let r=e.contentMatchAt(t.index()).defaultType;return r&&r.isTextblock}static findGapCursorFrom(t,e,n=!1){t:for(;;){if(!n&&H.valid(t))return t;let r=t.pos,i=null;for(let n=t.depth;;n--){let s=t.node(n);if(e>0?t.indexAfter(n)<s.childCount:t.index(n)>0){i=s.child(e>0?t.indexAfter(n):t.index(n)-1);break}if(0==n)return null;r+=e;let o=t.doc.resolve(r);if(H.valid(o))return o}for(;;){let s=e>0?i.firstChild:i.lastChild;if(!s){if(i.isAtom&&!i.isText&&!f.c.isSelectable(i)){t=t.doc.resolve(r+i.nodeSize*e),n=!1;continue t}break}i=s,r+=e;let o=t.doc.resolve(r);if(H.valid(o))return o}return null}}}H.prototype.visible=!1,H.findFrom=H.findGapCursorFrom,f.f.jsonID("gapcursor",H);class I{constructor(t){this.pos=t}map(t){return new I(t.map(this.pos))}resolve(t){let e=t.resolve(this.pos);return H.valid(e)?new H(e):f.f.near(e)}}const x=Object(L.a)({ArrowLeft:R("horiz",-1),ArrowRight:R("horiz",1),ArrowUp:R("vert",-1),ArrowDown:R("vert",1)});function R(t,e){const n="vert"==t?e>0?"down":"up":e>0?"right":"left";return function(t,r,i){let s=t.selection,o=e>0?s.$to:s.$from,a=s.empty;if(s instanceof f.h){if(!i.endOfTextblock(n)||0==o.depth)return!1;a=!1,o=t.doc.resolve(e>0?o.after():o.before())}let l=H.findGapCursorFrom(o,e,a);return!!l&&(r&&r(t.tr.setSelection(new H(l))),!0)}}function S(t,e,n){if(!t||!t.editable)return!1;let r=t.state.doc.resolve(e);if(!H.valid(r))return!1;let i=t.posAtCoords({left:n.clientX,top:n.clientY});return!(i&&i.inside>-1&&f.c.isSelectable(t.state.doc.nodeAt(i.inside))||(t.dispatch(t.state.tr.setSelection(new H(r))),0))}function j(t,e){if("insertCompositionText"!=e.inputType||!(t.state.selection instanceof H))return!1;let{$from:n}=t.state.selection,r=n.parent.contentMatchAt(n.index()).findWrapping(t.state.schema.nodes.text);if(!r)return!1;let i=C.c.empty;for(let o=r.length-1;o>=0;o--)i=C.c.from(r[o].createAndFill(null,i));let s=t.state.tr.replace(n.pos,n.pos,new C.j(i,0,0));return s.setSelection(f.h.near(s.doc.resolve(n.pos+1))),t.dispatch(s),!1}function E(t){if(!(t.selection instanceof H))return null;let e=document.createElement("div");return e.className="ProseMirror-gapcursor",O.b.create(t.doc,[O.a.widget(t.selection.head,e,{key:"gapcursor"})])}const P=r.Extension.create({name:"gapCursor",addProseMirrorPlugins:()=>[new f.d({props:{decorations:E,createSelectionBetween:(t,e,n)=>e.pos==n.pos&&H.valid(n)?new H(n):null,handleClick:S,handleKeyDown:x,handleDOMEvents:{beforeinput:j}}})],extendNodeSchema(t){var e;const n={name:t.name,options:t.options,storage:t.storage};return{allowGapCursor:null!==(e=Object(r.callOrReturn)(Object(r.getExtensionField)(t,"allowGapCursor",n)))&&void 0!==e?e:null}}}),B=r.Node.create({name:"hardBreak",addOptions:()=>({keepMarks:!0,HTMLAttributes:{}}),inline:!0,group:"inline",selectable:!1,parseHTML:()=>[{tag:"br"}],renderHTML({HTMLAttributes:t}){return["br",Object(r.mergeAttributes)(this.options.HTMLAttributes,t)]},renderText:()=>"\n",addCommands(){return{setHardBreak:()=>({commands:t,chain:e,state:n,editor:r})=>t.first([()=>t.exitCode(),()=>t.command(()=>{const{selection:t,storedMarks:i}=n;if(t.$from.parent.type.spec.isolating)return!1;const{keepMarks:s}=this.options,{splittableMarks:o}=r.extensionManager,a=i||t.$to.parentOffset&&t.$from.marks();return e().insertContent({type:this.name}).command(({tr:t,dispatch:e})=>{if(e&&a&&s){const e=a.filter(t=>o.includes(t.type.name));t.ensureMarks(e)}return!0}).run()})])}},addKeyboardShortcuts(){return{"Mod-Enter":()=>this.editor.commands.setHardBreak(),"Shift-Enter":()=>this.editor.commands.setHardBreak()}}}),N=r.Node.create({name:"heading",addOptions:()=>({levels:[1,2,3,4,5,6],HTMLAttributes:{}}),content:"inline*",group:"block",defining:!0,addAttributes:()=>({level:{default:1,rendered:!1}}),parseHTML(){return this.options.levels.map(t=>({tag:"h"+t,attrs:{level:t}}))},renderHTML({node:t,HTMLAttributes:e}){return["h"+(this.options.levels.includes(t.attrs.level)?t.attrs.level:this.options.levels[0]),Object(r.mergeAttributes)(this.options.HTMLAttributes,e),0]},addCommands(){return{setHeading:t=>({commands:e})=>!!this.options.levels.includes(t.level)&&e.setNode(this.name,t),toggleHeading:t=>({commands:e})=>!!this.options.levels.includes(t.level)&&e.toggleNode(this.name,"paragraph",t)}},addKeyboardShortcuts(){return this.options.levels.reduce((t,e)=>({...t,["Mod-Alt-"+e]:()=>this.editor.commands.toggleHeading({level:e})}),{})},addInputRules(){return this.options.levels.map(t=>Object(r.textblockTypeInputRule)({find:new RegExp(`^(#{1,${t}})\\s$`),type:this.type,getAttributes:{level:t}}))}});var _=200,$=function(){};$.prototype.append=function(t){return t.length?(t=$.from(t),!this.length&&t||t.length<_&&this.leafAppend(t)||this.length<_&&t.leafPrepend(this)||this.appendInner(t)):this},$.prototype.prepend=function(t){return t.length?$.from(t).append(this):this},$.prototype.appendInner=function(t){return new V(this,t)},$.prototype.slice=function(t,e){return void 0===t&&(t=0),void 0===e&&(e=this.length),t>=e?$.empty:this.sliceInner(Math.max(0,t),Math.min(this.length,e))},$.prototype.get=function(t){if(!(t<0||t>=this.length))return this.getInner(t)},$.prototype.forEach=function(t,e,n){void 0===e&&(e=0),void 0===n&&(n=this.length),e<=n?this.forEachInner(t,e,n,0):this.forEachInvertedInner(t,e,n,0)},$.prototype.map=function(t,e,n){void 0===e&&(e=0),void 0===n&&(n=this.length);var r=[];return this.forEach((function(e,n){return r.push(t(e,n))}),e,n),r},$.from=function(t){return t instanceof $?t:t&&t.length?new D(t):$.empty};var D=function(t){function e(e){t.call(this),this.values=e}t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e;var n={length:{configurable:!0},depth:{configurable:!0}};return e.prototype.flatten=function(){return this.values},e.prototype.sliceInner=function(t,n){return 0==t&&n==this.length?this:new e(this.values.slice(t,n))},e.prototype.getInner=function(t){return this.values[t]},e.prototype.forEachInner=function(t,e,n,r){for(var i=e;i<n;i++)if(!1===t(this.values[i],r+i))return!1},e.prototype.forEachInvertedInner=function(t,e,n,r){for(var i=e-1;i>=n;i--)if(!1===t(this.values[i],r+i))return!1},e.prototype.leafAppend=function(t){if(this.length+t.length<=_)return new e(this.values.concat(t.flatten()))},e.prototype.leafPrepend=function(t){if(this.length+t.length<=_)return new e(t.flatten().concat(this.values))},n.length.get=function(){return this.values.length},n.depth.get=function(){return 0},Object.defineProperties(e.prototype,n),e}($);$.empty=new D([]);var V=function(t){function e(e,n){t.call(this),this.left=e,this.right=n,this.length=e.length+n.length,this.depth=Math.max(e.depth,n.depth)+1}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.flatten=function(){return this.left.flatten().concat(this.right.flatten())},e.prototype.getInner=function(t){return t<this.left.length?this.left.get(t):this.right.get(t-this.left.length)},e.prototype.forEachInner=function(t,e,n,r){var i=this.left.length;return!(e<i&&!1===this.left.forEachInner(t,e,Math.min(n,i),r))&&!(n>i&&!1===this.right.forEachInner(t,Math.max(e-i,0),Math.min(this.length,n)-i,r+i))&&void 0},e.prototype.forEachInvertedInner=function(t,e,n,r){var i=this.left.length;return!(e>i&&!1===this.right.forEachInvertedInner(t,e-i,Math.max(n,i)-i,r+i))&&!(n<i&&!1===this.left.forEachInvertedInner(t,Math.min(e,i),n,r))&&void 0},e.prototype.sliceInner=function(t,e){if(0==t&&e==this.length)return this;var n=this.left.length;return e<=n?this.left.slice(t,e):t>=n?this.right.slice(t-n,e-n):this.left.slice(t,n).append(this.right.slice(0,e-n))},e.prototype.leafAppend=function(t){var n=this.right.leafAppend(t);if(n)return new e(this.left,n)},e.prototype.leafPrepend=function(t){var n=this.left.leafPrepend(t);if(n)return new e(n,this.right)},e.prototype.appendInner=function(t){return this.left.depth>=Math.max(this.right.depth,t.depth)+1?new e(this.left,new e(this.right,t)):new e(this,t)},e}($),z=$;class K{constructor(t,e){this.items=t,this.eventCount=e}popEvent(t,e){if(0==this.eventCount)return null;let n,r,i=this.items.length;for(;;i--)if(this.items.get(i-1).selection){--i;break}e&&(n=this.remapping(i,this.items.length),r=n.maps.length);let s,o,a=t.tr,l=[],d=[];return this.items.forEach((t,e)=>{if(!t.step)return n||(n=this.remapping(i,e+1),r=n.maps.length),r--,void d.push(t);if(n){d.push(new G(t.map));let e,i=t.step.map(n.slice(r));i&&a.maybeStep(i).doc&&(e=a.mapping.maps[a.mapping.maps.length-1],l.push(new G(e,void 0,void 0,l.length+d.length))),r--,e&&n.appendMap(e,r)}else a.maybeStep(t.step);return t.selection?(s=n?t.selection.map(n.slice(r)):t.selection,o=new K(this.items.slice(0,i).append(d.reverse().concat(l)),this.eventCount-1),!1):void 0},this.items.length,0),{remaining:o,transform:a,selection:s}}addTransform(t,e,n,r){let i=[],s=this.eventCount,o=this.items,a=!r&&o.length?o.get(o.length-1):null;for(let d=0;d<t.steps.length;d++){let n,l=t.steps[d].invert(t.docs[d]),p=new G(t.mapping.maps[d],l,e);(n=a&&a.merge(p))&&(p=n,d?i.pop():o=o.slice(0,o.length-1)),i.push(p),e&&(s++,e=void 0),r||(a=p)}let l=s-n.depth;return l>W&&(o=function(t,e){let n;return t.forEach((t,r)=>{if(t.selection&&0==e--)return n=r,!1}),t.slice(n)}(o,l),s-=l),new K(o.append(i),s)}remapping(t,e){let n=new w.a;return this.items.forEach((e,r)=>{n.appendMap(e.map,null!=e.mirrorOffset&&r-e.mirrorOffset>=t?n.maps.length-e.mirrorOffset:void 0)},t,e),n}addMaps(t){return 0==this.eventCount?this:new K(this.items.append(t.map(t=>new G(t))),this.eventCount)}rebased(t,e){if(!this.eventCount)return this;let n=[],r=Math.max(0,this.items.length-e),i=t.mapping,s=t.steps.length,o=this.eventCount;this.items.forEach(t=>{t.selection&&o--},r);let a=e;this.items.forEach(e=>{let r=i.getMirror(--a);if(null==r)return;s=Math.min(s,r);let l=i.maps[r];if(e.step){let s=t.steps[r].invert(t.docs[r]),d=e.selection&&e.selection.map(i.slice(a+1,r));d&&o++,n.push(new G(l,s,d))}else n.push(new G(l))},r);let l=[];for(let u=e;u<s;u++)l.push(new G(i.maps[u]));let d=this.items.slice(0,r).append(l).append(n),p=new K(d,o);return p.emptyItemCount()>500&&(p=p.compress(this.items.length-n.length)),p}emptyItemCount(){let t=0;return this.items.forEach(e=>{e.step||t++}),t}compress(t=this.items.length){let e=this.remapping(0,t),n=e.maps.length,r=[],i=0;return this.items.forEach((s,o)=>{if(o>=t)r.push(s),s.selection&&i++;else if(s.step){let t=s.step.map(e.slice(n)),o=t&&t.getMap();if(n--,o&&e.appendMap(o,n),t){let a=s.selection&&s.selection.map(e.slice(n));a&&i++;let l,d=new G(o.invert(),t,a),p=r.length-1;(l=r.length&&r[p].merge(d))?r[p]=l:r.push(d)}}else s.map&&n--},this.items.length,0),new K(z.from(r.reverse()),i)}}K.empty=new K(z.empty,0);class G{constructor(t,e,n,r){this.map=t,this.step=e,this.selection=n,this.mirrorOffset=r}merge(t){if(this.step&&t.step&&!t.selection){let e=t.step.merge(this.step);if(e)return new G(e.getMap().invert(),e,this.selection)}}}class q{constructor(t,e,n,r){this.done=t,this.undone=e,this.prevRanges=n,this.prevTime=r}}const W=20;function F(t){let e=[];return t.forEach((t,n,r,i)=>e.push(r,i)),e}function J(t,e){if(!t)return null;let n=[];for(let r=0;r<t.length;r+=2){let i=e.map(t[r],1),s=e.map(t[r+1],-1);i<=s&&n.push(i,s)}return n}function X(t,e,n,r){let i=Q(e),s=Z.get(e).spec.config,o=(r?t.undone:t.done).popEvent(e,i);if(!o)return;let a=o.selection.resolve(o.transform.doc),l=(r?t.done:t.undone).addTransform(o.transform,e.selection.getBookmark(),s,i),d=new q(r?l:o.remaining,r?o.remaining:l,null,0);n(o.transform.setSelection(a).setMeta(Z,{redo:r,historyState:d}).scrollIntoView())}let Y=!1,U=null;function Q(t){let e=t.plugins;if(U!=e){Y=!1,U=e;for(let t=0;t<e.length;t++)if(e[t].spec.historyPreserveItems){Y=!0;break}}return Y}const Z=new f.e("history"),tt=new f.e("closeHistory");function et(t={}){return new f.d({key:Z,state:{init:()=>new q(K.empty,K.empty,null,0),apply:(e,n,r)=>function(t,e,n,r){let i,s=n.getMeta(Z);if(s)return s.historyState;n.getMeta(tt)&&(t=new q(t.done,t.undone,null,0));let o=n.getMeta("appendedTransaction");if(0==n.steps.length)return t;if(o&&o.getMeta(Z))return o.getMeta(Z).redo?new q(t.done.addTransform(n,void 0,r,Q(e)),t.undone,F(n.mapping.maps[n.steps.length-1]),t.prevTime):new q(t.done,t.undone.addTransform(n,void 0,r,Q(e)),null,t.prevTime);if(!1===n.getMeta("addToHistory")||o&&!1===o.getMeta("addToHistory"))return(i=n.getMeta("rebased"))?new q(t.done.rebased(n,i),t.undone.rebased(n,i),J(t.prevRanges,n.mapping),t.prevTime):new q(t.done.addMaps(n.mapping.maps),t.undone.addMaps(n.mapping.maps),J(t.prevRanges,n.mapping),t.prevTime);{let i=0==t.prevTime||!o&&(t.prevTime<(n.time||0)-r.newGroupDelay||!function(t,e){if(!e)return!1;if(!t.docChanged)return!0;let n=!1;return t.mapping.maps[0].forEach((t,r)=>{for(let i=0;i<e.length;i+=2)t<=e[i+1]&&r>=e[i]&&(n=!0)}),n}(n,t.prevRanges)),s=o?J(t.prevRanges,n.mapping):F(n.mapping.maps[n.steps.length-1]);return new q(t.done.addTransform(n,i?e.selection.getBookmark():void 0,r,Q(e)),K.empty,s,n.time)}}(n,r,e,t)},config:t={depth:t.depth||100,newGroupDelay:t.newGroupDelay||500},props:{handleDOMEvents:{beforeinput(t,e){let n=e.inputType,r="historyUndo"==n?nt:"historyRedo"==n?rt:null;return!!r&&(e.preventDefault(),r(t.state,t.dispatch))}}}})}const nt=(t,e)=>{let n=Z.getState(t);return!(!n||0==n.done.eventCount||(e&&X(n,t,e,!1),0))},rt=(t,e)=>{let n=Z.getState(t);return!(!n||0==n.undone.eventCount||(e&&X(n,t,e,!0),0))},it=r.Extension.create({name:"history",addOptions:()=>({depth:100,newGroupDelay:500}),addCommands:()=>({undo:()=>({state:t,dispatch:e})=>nt(t,e),redo:()=>({state:t,dispatch:e})=>rt(t,e)}),addProseMirrorPlugins(){return[et(this.options)]},addKeyboardShortcuts(){return{"Mod-z":()=>this.editor.commands.undo(),"Mod-y":()=>this.editor.commands.redo(),"Shift-Mod-z":()=>this.editor.commands.redo(),"Mod-\u044f":()=>this.editor.commands.undo(),"Shift-Mod-\u044f":()=>this.editor.commands.redo()}}}),st=r.Node.create({name:"horizontalRule",addOptions:()=>({HTMLAttributes:{}}),group:"block",parseHTML:()=>[{tag:"hr"}],renderHTML({HTMLAttributes:t}){return["hr",Object(r.mergeAttributes)(this.options.HTMLAttributes,t)]},addCommands(){return{setHorizontalRule:()=>({chain:t})=>t().insertContent({type:this.name}).command(({tr:t,dispatch:e})=>{var n;if(e){const{$to:e}=t.selection,r=e.end();if(e.nodeAfter)t.setSelection(f.h.create(t.doc,e.pos));else{const i=null===(n=e.parent.type.contentMatch.defaultType)||void 0===n?void 0:n.create();i&&(t.insert(r,i),t.setSelection(f.h.create(t.doc,r)))}t.scrollIntoView()}return!0}).run()}},addInputRules(){return[Object(r.nodeInputRule)({find:/^(?:---|\u2014-|___\s|\*\*\*\s)$/,type:this.type})]}}),ot=/(?:^|\s)((?:\*)((?:[^*]+))(?:\*))$/,at=/(?:^|\s)((?:\*)((?:[^*]+))(?:\*))/g,lt=/(?:^|\s)((?:_)((?:[^_]+))(?:_))$/,dt=/(?:^|\s)((?:_)((?:[^_]+))(?:_))/g,pt=r.Mark.create({name:"italic",addOptions:()=>({HTMLAttributes:{}}),parseHTML:()=>[{tag:"em"},{tag:"i",getAttrs:t=>"normal"!==t.style.fontStyle&&null},{style:"font-style=italic"}],renderHTML({HTMLAttributes:t}){return["em",Object(r.mergeAttributes)(this.options.HTMLAttributes,t),0]},addCommands(){return{setItalic:()=>({commands:t})=>t.setMark(this.name),toggleItalic:()=>({commands:t})=>t.toggleMark(this.name),unsetItalic:()=>({commands:t})=>t.unsetMark(this.name)}},addKeyboardShortcuts(){return{"Mod-i":()=>this.editor.commands.toggleItalic(),"Mod-I":()=>this.editor.commands.toggleItalic()}},addInputRules(){return[Object(r.markInputRule)({find:ot,type:this.type}),Object(r.markInputRule)({find:lt,type:this.type})]},addPasteRules(){return[Object(r.markPasteRule)({find:at,type:this.type}),Object(r.markPasteRule)({find:dt,type:this.type})]}}),ut=r.Node.create({name:"listItem",addOptions:()=>({HTMLAttributes:{}}),content:"paragraph block*",defining:!0,parseHTML:()=>[{tag:"li"}],renderHTML({HTMLAttributes:t}){return["li",Object(r.mergeAttributes)(this.options.HTMLAttributes,t),0]},addKeyboardShortcuts(){return{Enter:()=>this.editor.commands.splitListItem(this.name),Tab:()=>this.editor.commands.sinkListItem(this.name),"Shift-Tab":()=>this.editor.commands.liftListItem(this.name)}}}),ht=/^(\d+)\.\s$/,ct=r.Node.create({name:"orderedList",addOptions:()=>({itemTypeName:"listItem",HTMLAttributes:{}}),group:"block list",content(){return this.options.itemTypeName+"+"},addAttributes:()=>({start:{default:1,parseHTML:t=>t.hasAttribute("start")?parseInt(t.getAttribute("start")||"",10):1}}),parseHTML:()=>[{tag:"ol"}],renderHTML({HTMLAttributes:t}){const{start:e,...n}=t;return 1===e?["ol",Object(r.mergeAttributes)(this.options.HTMLAttributes,n),0]:["ol",Object(r.mergeAttributes)(this.options.HTMLAttributes,t),0]},addCommands(){return{toggleOrderedList:()=>({commands:t})=>t.toggleList(this.name,this.options.itemTypeName)}},addKeyboardShortcuts(){return{"Mod-Shift-7":()=>this.editor.commands.toggleOrderedList()}},addInputRules(){return[Object(r.wrappingInputRule)({find:ht,type:this.type,getAttributes:t=>({start:+t[1]}),joinPredicate:(t,e)=>e.childCount+e.attrs.start===+t[1]})]}}),mt=r.Node.create({name:"paragraph",priority:1e3,addOptions:()=>({HTMLAttributes:{}}),group:"block",content:"inline*",parseHTML:()=>[{tag:"p"}],renderHTML({HTMLAttributes:t}){return["p",Object(r.mergeAttributes)(this.options.HTMLAttributes,t),0]},addCommands(){return{setParagraph:()=>({commands:t})=>t.setNode(this.name)}},addKeyboardShortcuts(){return{"Mod-Alt-0":()=>this.editor.commands.setParagraph()}}}),gt=/(?:^|\s)((?:~~)((?:[^~]+))(?:~~))$/,ft=/(?:^|\s)((?:~~)((?:[^~]+))(?:~~))/g,vt=r.Mark.create({name:"strike",addOptions:()=>({HTMLAttributes:{}}),parseHTML:()=>[{tag:"s"},{tag:"del"},{tag:"strike"},{style:"text-decoration",consuming:!1,getAttrs:t=>!!t.includes("line-through")&&{}}],renderHTML({HTMLAttributes:t}){return["s",Object(r.mergeAttributes)(this.options.HTMLAttributes,t),0]},addCommands(){return{setStrike:()=>({commands:t})=>t.setMark(this.name),toggleStrike:()=>({commands:t})=>t.toggleMark(this.name),unsetStrike:()=>({commands:t})=>t.unsetMark(this.name)}},addKeyboardShortcuts(){return{"Mod-Shift-x":()=>this.editor.commands.toggleStrike()}},addInputRules(){return[Object(r.markInputRule)({find:gt,type:this.type})]},addPasteRules(){return[Object(r.markPasteRule)({find:ft,type:this.type})]}}),bt=r.Node.create({name:"text",group:"inline"}),yt=r.Extension.create({name:"starterKit",addExtensions(){var t,e,n,r,i,o,a,l,d,u,c,m,f,v,b,w,T,k;const L=[];return!1!==this.options.blockquote&&L.push(s.configure(null===(t=this.options)||void 0===t?void 0:t.blockquote)),!1!==this.options.bold&&L.push(p.configure(null===(e=this.options)||void 0===e?void 0:e.bold)),!1!==this.options.bulletList&&L.push(h.configure(null===(n=this.options)||void 0===n?void 0:n.bulletList)),!1!==this.options.code&&L.push(g.configure(null===(r=this.options)||void 0===r?void 0:r.code)),!1!==this.options.codeBlock&&L.push(y.configure(null===(i=this.options)||void 0===i?void 0:i.codeBlock)),!1!==this.options.document&&L.push(M.configure(null===(o=this.options)||void 0===o?void 0:o.document)),!1!==this.options.dropcursor&&L.push(A.configure(null===(a=this.options)||void 0===a?void 0:a.dropcursor)),!1!==this.options.gapcursor&&L.push(P.configure(null===(l=this.options)||void 0===l?void 0:l.gapcursor)),!1!==this.options.hardBreak&&L.push(B.configure(null===(d=this.options)||void 0===d?void 0:d.hardBreak)),!1!==this.options.heading&&L.push(N.configure(null===(u=this.options)||void 0===u?void 0:u.heading)),!1!==this.options.history&&L.push(it.configure(null===(c=this.options)||void 0===c?void 0:c.history)),!1!==this.options.horizontalRule&&L.push(st.configure(null===(m=this.options)||void 0===m?void 0:m.horizontalRule)),!1!==this.options.italic&&L.push(pt.configure(null===(f=this.options)||void 0===f?void 0:f.italic)),!1!==this.options.listItem&&L.push(ut.configure(null===(v=this.options)||void 0===v?void 0:v.listItem)),!1!==this.options.orderedList&&L.push(ct.configure(null===(b=this.options)||void 0===b?void 0:b.orderedList)),!1!==this.options.paragraph&&L.push(mt.configure(null===(w=this.options)||void 0===w?void 0:w.paragraph)),!1!==this.options.strike&&L.push(vt.configure(null===(T=this.options)||void 0===T?void 0:T.strike)),!1!==this.options.text&&L.push(bt.configure(null===(k=this.options)||void 0===k?void 0:k.text)),L}})}}]);