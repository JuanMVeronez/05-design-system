var Ue=Object.defineProperty;var c=(e,t)=>Ue(e,"name",{value:t,configurable:!0});import{R as U,r as f}from"./index.1e89ae7e.js";import{r as Ve}from"./index.a64dde03.js";import{a as W,j as $,F as I}from"./jsx-runtime.396a506e.js";function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},B.apply(this,arguments)}c(B,"_extends");var y="colors",w="sizes",p="space",ve={gap:p,gridGap:p,columnGap:p,gridColumnGap:p,rowGap:p,gridRowGap:p,inset:p,insetBlock:p,insetBlockEnd:p,insetBlockStart:p,insetInline:p,insetInlineEnd:p,insetInlineStart:p,margin:p,marginTop:p,marginRight:p,marginBottom:p,marginLeft:p,marginBlock:p,marginBlockEnd:p,marginBlockStart:p,marginInline:p,marginInlineEnd:p,marginInlineStart:p,padding:p,paddingTop:p,paddingRight:p,paddingBottom:p,paddingLeft:p,paddingBlock:p,paddingBlockEnd:p,paddingBlockStart:p,paddingInline:p,paddingInlineEnd:p,paddingInlineStart:p,top:p,right:p,bottom:p,left:p,scrollMargin:p,scrollMarginTop:p,scrollMarginRight:p,scrollMarginBottom:p,scrollMarginLeft:p,scrollMarginX:p,scrollMarginY:p,scrollMarginBlock:p,scrollMarginBlockEnd:p,scrollMarginBlockStart:p,scrollMarginInline:p,scrollMarginInlineEnd:p,scrollMarginInlineStart:p,scrollPadding:p,scrollPaddingTop:p,scrollPaddingRight:p,scrollPaddingBottom:p,scrollPaddingLeft:p,scrollPaddingX:p,scrollPaddingY:p,scrollPaddingBlock:p,scrollPaddingBlockEnd:p,scrollPaddingBlockStart:p,scrollPaddingInline:p,scrollPaddingInlineEnd:p,scrollPaddingInlineStart:p,fontSize:"fontSizes",background:y,backgroundColor:y,backgroundImage:y,borderImage:y,border:y,borderBlock:y,borderBlockEnd:y,borderBlockStart:y,borderBottom:y,borderBottomColor:y,borderColor:y,borderInline:y,borderInlineEnd:y,borderInlineStart:y,borderLeft:y,borderLeftColor:y,borderRight:y,borderRightColor:y,borderTop:y,borderTopColor:y,caretColor:y,color:y,columnRuleColor:y,fill:y,outline:y,outlineColor:y,stroke:y,textDecorationColor:y,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:w,minBlockSize:w,maxBlockSize:w,inlineSize:w,minInlineSize:w,maxInlineSize:w,width:w,minWidth:w,maxWidth:w,height:w,minHeight:w,maxHeight:w,flexBasis:w,gridTemplateColumns:w,gridTemplateRows:w,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},Ge=c((e,t)=>typeof t=="function"?{"()":Function.prototype.toString.call(t)}:t,"i"),Y=c(()=>{const e=Object.create(null);return(t,r,...n)=>{const o=(i=>JSON.stringify(i,Ge))(t);return o in e?e[o]:e[o]=r(t,...n)}},"o"),L=Symbol.for("sxs.internal"),ce=c((e,t)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)),"s"),pe=c(e=>{for(const t in e)return!0;return!1},"a"),{hasOwnProperty:Ye}=Object.prototype,ae=c(e=>e.includes("-")?e:e.replace(/[A-Z]/g,t=>"-"+t.toLowerCase()),"d"),qe=/\s+(?![^()]*\))/,V=c(e=>t=>e(...typeof t=="string"?String(t).split(qe):[t]),"p"),ge={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),maskSize:e=>({WebkitMaskSize:e,maskSize:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:V((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e})),marginInline:V((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e})),maxSize:V((e,t)=>({maxBlockSize:e,maxInlineSize:t||e})),minSize:V((e,t)=>({minBlockSize:e,minInlineSize:t||e})),paddingBlock:V((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e})),paddingInline:V((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e}))},se=/([\d.]+)([^]*)/,Ze=c((e,t)=>e.length?e.reduce((r,n)=>(r.push(...t.map(o=>o.includes("&")?o.replace(/&/g,/[ +>|~]/.test(n)&&/&.*&/.test(o)?`:is(${n})`:n):n+" "+o)),r),[]):t,"f"),Ke=c((e,t)=>e in Je&&typeof t=="string"?t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,(r,n,o,i)=>n+(o==="stretch"?`-moz-available${i};${ae(e)}:${n}-webkit-fill-available`:`-moz-fit-content${i};${ae(e)}:${n}fit-content`)+i):String(t),"m"),Je={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},M=c(e=>e?e+"-":"","S"),ke=c((e,t,r)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,(n,o,i,l,s)=>l=="$"==!!i?n:(o||l=="--"?"calc(":"")+"var(--"+(l==="$"?M(t)+(s.includes("$")?"":M(r))+s.replace(/\$/g,"-"):s)+")"+(o||l=="--"?"*"+(o||"")+(i||"1")+")":"")),"k"),Xe=/\s*,\s*(?![^()]*\))/,Qe=Object.prototype.toString,G=c((e,t,r,n,o)=>{let i,l,s;const a=c((u,m,g)=>{let d,h;const b=c(k=>{for(d in k){const S=d.charCodeAt(0)===64,D=S&&Array.isArray(k[d])?k[d]:[k[d]];for(h of D){const P=/[A-Z]/.test(x=d)?x:x.replace(/-[^]/g,z=>z[1].toUpperCase()),q=typeof h=="object"&&h&&h.toString===Qe&&(!n.utils[P]||!m.length);if(P in n.utils&&!q){const z=n.utils[P];if(z!==l){l=z,b(z(h)),l=null;continue}}else if(P in ge){const z=ge[P];if(z!==s){s=z,b(z(h)),s=null;continue}}if(S&&(v=d.slice(1)in n.media?"@media "+n.media[d.slice(1)]:d,d=v.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,(z,R,A,N,E,j)=>{const H=se.test(R),Q=.0625*(H?-1:1),[ee,fe]=H?[N,R]:[R,N];return"("+(A[0]==="="?"":A[0]===">"===H?"max-":"min-")+ee+":"+(A[0]!=="="&&A.length===1?fe.replace(se,(He,oe,ie)=>Number(oe)+Q*(A===">"?1:-1)+ie):fe)+(E?") and ("+(E[0]===">"?"min-":"max-")+ee+":"+(E.length===1?j.replace(se,(He,oe,ie)=>Number(oe)+Q*(E===">"?-1:1)+ie):j):"")+")"})),q){const z=S?g.concat(d):[...g],R=S?[...m]:Ze(m,d.split(Xe));i!==void 0&&o(he(...i)),i=void 0,a(h,R,z)}else i===void 0&&(i=[[],m,g]),d=S||d.charCodeAt(0)!==36?d:`--${M(n.prefix)}${d.slice(1).replace(/\$/g,"-")}`,h=q?h:typeof h=="number"?h&&P in et?String(h)+"px":String(h):ke(Ke(P,h==null?"":h),n.prefix,n.themeMap[P]),i[0].push(`${S?`${d} `:`${ae(d)}:`}${h}`)}}var v,x},"p");b(u),i!==void 0&&o(he(...i)),i=void 0},"a");a(e,t,r)},"$"),he=c((e,t,r)=>`${r.map(n=>`${n}{`).join("")}${t.length?`${t.join(",")}{`:""}${e.join(";")}${t.length?"}":""}${Array(r.length?r.length+1:0).join("}")}`,"x"),et={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},me=c(e=>String.fromCharCode(e+(e>25?39:97)),"R"),T=c(e=>(t=>{let r,n="";for(r=Math.abs(t);r>52;r=r/52|0)n=me(r%52)+n;return me(r%52)+n})(((t,r)=>{let n=r.length;for(;n;)t=33*t^r.charCodeAt(--n);return t})(5381,JSON.stringify(e))>>>0),"z"),K=["themed","global","styled","onevar","resonevar","allvar","inline"],tt=c(e=>{if(e.href&&!e.href.startsWith(location.origin))return!1;try{return!!e.cssRules}catch{return!1}},"j"),rt=c(e=>{let t;const r=c(()=>{const{cssRules:o}=t.sheet;return[].map.call(o,(i,l)=>{const{cssText:s}=i;let a="";if(s.startsWith("--sxs"))return"";if(o[l-1]&&(a=o[l-1].cssText).startsWith("--sxs")){if(!i.cssRules.length)return"";for(const u in t.rules)if(t.rules[u].group===i)return`--sxs{--sxs:${[...t.rules[u].cache].join(" ")}}${s}`;return i.cssRules.length?`${a}${s}`:""}return s}).join("")},"r"),n=c(()=>{if(t){const{rules:s,sheet:a}=t;if(!a.deleteRule){for(;Object(Object(a.cssRules)[0]).type===3;)a.cssRules.splice(0,1);a.cssRules=[]}for(const u in s)delete s[u]}const o=Object(e).styleSheets||[];for(const s of o)if(tt(s)){for(let a=0,u=s.cssRules;u[a];++a){const m=Object(u[a]);if(m.type!==1)continue;const g=Object(u[a+1]);if(g.type!==4)continue;++a;const{cssText:d}=m;if(!d.startsWith("--sxs"))continue;const h=d.slice(14,-3).trim().split(/\s+/),b=K[h[0]];b&&(t||(t={sheet:s,reset:n,rules:{},toString:r}),t.rules[b]={group:g,index:a,cache:new Set(h)})}if(t)break}if(!t){const s=c((a,u)=>({type:u,cssRules:[],insertRule(m,g){this.cssRules.splice(g,0,s(m,{import:3,undefined:1}[(m.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return a==="@media{}"?`@media{${[].map.call(this.cssRules,m=>m.cssText).join("")}}`:a}}),"i");t={sheet:e?(e.head||e).appendChild(document.createElement("style")).sheet:s("","text/css"),rules:{},reset:n,toString:r}}const{sheet:i,rules:l}=t;for(let s=K.length-1;s>=0;--s){const a=K[s];if(!l[a]){const u=K[s+1],m=l[u]?l[u].index:i.cssRules.length;i.insertRule("@media{}",m),i.insertRule(`--sxs{--sxs:${s}}`,m),l[a]={group:i.cssRules[m+1],index:m,cache:new Set([s])}}nt(l[a])}},"n");return n(),t},"E"),nt=c(e=>{const t=e.group;let r=t.cssRules.length;e.apply=n=>{try{t.insertRule(n,r),++r}catch{}}},"v"),Z=Symbol(),ot=Y(),be=c((e,t)=>ot(e,()=>(...r)=>{let n={type:null,composers:new Set};for(const o of r)if(o!=null)if(o[L]){n.type==null&&(n.type=o[L].type);for(const i of o[L].composers)n.composers.add(i)}else o.constructor!==Object||o.$$typeof?n.type==null&&(n.type=o):n.composers.add(it(o,e));return n.type==null&&(n.type="span"),n.composers.size||n.composers.add(["PJLV",{},[],[],{},[]]),st(e,n,t)}),"M"),it=c(({variants:e,compoundVariants:t,defaultVariants:r,...n},o)=>{const i=`${M(o.prefix)}c-${T(n)}`,l=[],s=[],a=Object.create(null),u=[];for(const d in r)a[d]=String(r[d]);if(typeof e=="object"&&e)for(const d in e){m=a,g=d,Ye.call(m,g)||(a[d]="undefined");const h=e[d];for(const b in h){const k={[d]:String(b)};String(b)==="undefined"&&u.push(d);const v=h[b],x=[k,v,!pe(v)];l.push(x)}}var m,g;if(typeof t=="object"&&t)for(const d of t){let{css:h,...b}=d;h=typeof h=="object"&&h||{};for(const v in b)b[v]=String(b[v]);const k=[b,h,!pe(h)];s.push(k)}return[i,n,l,s,a,u]},"C"),st=c((e,t,r)=>{const[n,o,i,l]=at(t.composers),s=typeof t.type=="function"||t.type.$$typeof?(g=>{function d(){for(let h=0;h<d[Z].length;h++){const[b,k]=d[Z][h];g.rules[b].apply(k)}return d[Z]=[],null}return c(d,"t"),d[Z]=[],d.rules={},K.forEach(h=>d.rules[h]={apply:b=>d[Z].push([h,b])}),d})(r):null,a=(s||r).rules,u=`.${n}${o.length>1?`:where(.${o.slice(1).join(".")})`:""}`,m=c(g=>{g=typeof g=="object"&&g||lt;const{css:d,...h}=g,b={};for(const x in i)if(delete h[x],x in g){let S=g[x];typeof S=="object"&&S?b[x]={"@initial":i[x],...S}:(S=String(S),b[x]=S!=="undefined"||l.has(x)?S:i[x])}else b[x]=i[x];const k=new Set([...o]);for(const[x,S,D,P]of t.composers){r.rules.styled.cache.has(x)||(r.rules.styled.cache.add(x),G(S,[`.${x}`],[],e,R=>{a.styled.apply(R)}));const q=$e(D,b,e.media),z=$e(P,b,e.media,!0);for(const R of q)if(R!==void 0)for(const[A,N,E]of R){const j=`${x}-${T(N)}-${A}`;k.add(j);const H=(E?r.rules.resonevar:r.rules.onevar).cache,Q=E?a.resonevar:a.onevar;H.has(j)||(H.add(j),G(N,[`.${j}`],[],e,ee=>{Q.apply(ee)}))}for(const R of z)if(R!==void 0)for(const[A,N]of R){const E=`${x}-${T(N)}-${A}`;k.add(E),r.rules.allvar.cache.has(E)||(r.rules.allvar.cache.add(E),G(N,[`.${E}`],[],e,j=>{a.allvar.apply(j)}))}}if(typeof d=="object"&&d){const x=`${n}-i${T(d)}-css`;k.add(x),r.rules.inline.cache.has(x)||(r.rules.inline.cache.add(x),G(d,[`.${x}`],[],e,S=>{a.inline.apply(S)}))}for(const x of String(g.className||"").trim().split(/\s+/))x&&k.add(x);const v=h.className=[...k].join(" ");return{type:t.type,className:v,selector:u,props:h,toString:()=>v,deferredInjector:s}},"p");return ce(m,{className:n,selector:u,[L]:t,toString:()=>(r.rules.styled.cache.has(n)||m(),n)})},"P"),at=c(e=>{let t="";const r=[],n={},o=[];for(const[i,,,,l,s]of e){t===""&&(t=i),r.push(i),o.push(...s);for(const a in l){const u=l[a];(n[a]===void 0||u!=="undefined"||s.includes(u))&&(n[a]=u)}}return[t,r,n,new Set(o)]},"L"),$e=c((e,t,r,n)=>{const o=[];e:for(let[i,l,s]of e){if(s)continue;let a,u=0,m=!1;for(a in i){const g=i[a];let d=t[a];if(d!==g){if(typeof d!="object"||!d)continue e;{let h,b,k=0;for(const v in d){if(g===String(d[v])){if(v!=="@initial"){const x=v.slice(1);(b=b||[]).push(x in r?r[x]:v.replace(/^@media ?/,"")),m=!0}u+=k,h=!0}++k}if(b&&b.length&&(l={["@media "+b.join(", ")]:l}),!h)continue e}}}(o[u]=o[u]||[]).push([n?"cv":`${a}-${i[a]}`,l,m])}return o},"O"),lt={},ct=Y(),dt=c((e,t)=>ct(e,()=>(...r)=>{const n=c(()=>{for(let o of r){o=typeof o=="object"&&o||{};let i=T(o);if(!t.rules.global.cache.has(i)){if(t.rules.global.cache.add(i),"@import"in o){let l=[].indexOf.call(t.sheet.cssRules,t.rules.themed.group)-1;for(let s of[].concat(o["@import"]))s=s.includes('"')||s.includes("'")?s:`"${s}"`,t.sheet.insertRule(`@import ${s};`,l++);delete o["@import"]}G(o,[],[],e,l=>{t.rules.global.apply(l)})}}return""},"n");return ce(n,{toString:n})}),"D"),ut=Y(),ft=c((e,t)=>ut(e,()=>r=>{const n=`${M(e.prefix)}k-${T(r)}`,o=c(()=>{if(!t.rules.global.cache.has(n)){t.rules.global.cache.add(n);const i=[];G(r,[],[],e,s=>i.push(s));const l=`@keyframes ${n}{${i.join("")}}`;t.rules.global.apply(l)}return n},"i");return ce(o,{get name(){return o()},toString:o})}),"V"),pt=c(class{constructor(e,t,r,n){this.token=e==null?"":String(e),this.value=t==null?"":String(t),this.scale=r==null?"":String(r),this.prefix=n==null?"":String(n)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+M(this.prefix)+M(this.scale)+this.token}toString(){return this.computedValue}},"G"),gt=Y(),ht=c((e,t)=>gt(e,()=>(r,n)=>{n=typeof r=="object"&&r||Object(n);const o=`.${r=(r=typeof r=="string"?r:"")||`${M(e.prefix)}t-${T(n)}`}`,i={},l=[];for(const a in n){i[a]={};for(const u in n[a]){const m=`--${M(e.prefix)}${a}-${u}`,g=ke(String(n[a][u]),e.prefix,a);i[a][u]=new pt(u,g,a,e.prefix),l.push(`${m}:${g}`)}}const s=c(()=>{if(l.length&&!t.rules.themed.cache.has(r)){t.rules.themed.cache.add(r);const a=`${n===e.theme?":root,":""}.${r}{${l.join(";")}}`;t.rules.themed.apply(a)}return r},"s");return{...i,get className(){return s()},selector:o,toString:s}}),"J"),mt=Y(),bt=Y(),$t=c(e=>{const t=(r=>{let n=!1;const o=mt(r,i=>{n=!0;const l="prefix"in(i=typeof i=="object"&&i||{})?String(i.prefix):"",s=typeof i.media=="object"&&i.media||{},a=typeof i.root=="object"?i.root||null:globalThis.document||null,u=typeof i.theme=="object"&&i.theme||{},m={prefix:l,media:s,theme:u,themeMap:typeof i.themeMap=="object"&&i.themeMap||{...ve},utils:typeof i.utils=="object"&&i.utils||{}},g=rt(a),d={css:be(m,g),globalCss:dt(m,g),keyframes:ft(m,g),createTheme:ht(m,g),reset(){g.reset(),d.theme.toString()},theme:{},sheet:g,config:m,prefix:l,getCssText:g.toString,toString:g.toString};return String(d.theme=d.createTheme(u)),d});return n||o.reset(),o})(e);return t.styled=(({config:r,sheet:n})=>bt(r,()=>{const o=be(r,n);return(...i)=>{const l=o(...i),s=l[L].type,a=U.forwardRef((u,m)=>{const g=u&&u.as||s,{props:d,deferredInjector:h}=l(u);return delete d.as,d.ref=m,h?U.createElement(U.Fragment,null,U.createElement(g,d),U.createElement(h,null)):U.createElement(g,d)});return a.className=l.className,a.displayName=`Styled.${s.displayName||s.name||s}`,a.selector=l.selector,a.toString=()=>l.selector,a[L]=l[L],a}}))(t),t},"q");function Ce(e,t=[]){let r=[];function n(i,l){const s=f.exports.createContext(l),a=r.length;r=[...r,l];function u(g){const{scope:d,children:h,...b}=g,k=(d==null?void 0:d[e][a])||s,v=f.exports.useMemo(()=>b,Object.values(b));return f.exports.createElement(k.Provider,{value:v},h)}c(u,"Provider");function m(g,d){const h=(d==null?void 0:d[e][a])||s,b=f.exports.useContext(h);if(b)return b;if(l!==void 0)return l;throw new Error(`\`${g}\` must be used within \`${i}\``)}return c(m,"useContext"),u.displayName=i+"Provider",[u,m]}c(n,"$c512c27ab02ef895$export$fd42f52fd3ae1109");const o=c(()=>{const i=r.map(l=>f.exports.createContext(l));return c(function(s){const a=(s==null?void 0:s[e])||i;return f.exports.useMemo(()=>({[`__scope${e}`]:{...s,[e]:a}}),[s,a])},"useScope")},"createScope");return o.scopeName=e,[n,xt(o,...t)]}c(Ce,"$c512c27ab02ef895$export$50c7b4e9d9f19c1");function xt(...e){const t=e[0];if(e.length===1)return t;const r=c(()=>{const n=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return c(function(i){const l=n.reduce((s,{useScope:a,scopeName:u})=>{const g=a(i)[`__scope${u}`];return{...s,...g}},{});return f.exports.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])},"useComposedScopes")},"createScope1");return r.scopeName=t.scopeName,r}c(xt,"$c512c27ab02ef895$var$composeContextScopes");function de(e){const t=f.exports.useRef(e);return f.exports.useEffect(()=>{t.current=e}),f.exports.useMemo(()=>(...r)=>{var n;return(n=t.current)===null||n===void 0?void 0:n.call(t,...r)},[])}c(de,"$b1b2314f5f9a1d84$export$25bec8c6f54ee79a");const re=Boolean(globalThis==null?void 0:globalThis.document)?f.exports.useLayoutEffect:()=>{};function St(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}c(St,"$6ed0406888f73fc4$var$setRef");function we(...e){return t=>e.forEach(r=>St(r,t))}c(we,"$6ed0406888f73fc4$export$43e446d32b3d21af");function ze(...e){return f.exports.useCallback(we(...e),e)}c(ze,"$6ed0406888f73fc4$export$c7b2cbe3552a0d05");const Re=f.exports.forwardRef((e,t)=>{const{children:r,...n}=e,o=f.exports.Children.toArray(r),i=o.find(vt);if(i){const l=i.props.children,s=o.map(a=>a===i?f.exports.Children.count(l)>1?f.exports.Children.only(null):f.exports.isValidElement(l)?l.props.children:null:a);return f.exports.createElement(le,B({},n,{ref:t}),f.exports.isValidElement(l)?f.exports.cloneElement(l,void 0,s):null)}return f.exports.createElement(le,B({},n,{ref:t}),r)});Re.displayName="Slot";const le=f.exports.forwardRef((e,t)=>{const{children:r,...n}=e;return f.exports.isValidElement(r)?f.exports.cloneElement(r,{...kt(n,r.props),ref:we(t,r.ref)}):f.exports.Children.count(r)>1?f.exports.Children.only(null):null});le.displayName="SlotClone";const yt=c(({children:e})=>f.exports.createElement(f.exports.Fragment,null,e),"$5e63c961fc1ce211$export$d9f1ccf0bdb05d45");function vt(e){return f.exports.isValidElement(e)&&e.type===yt}c(vt,"$5e63c961fc1ce211$var$isSlottable");function kt(e,t){const r={...t};for(const n in t){const o=e[n],i=t[n];/^on[A-Z]/.test(n)?o&&i?r[n]=(...s)=>{i(...s),o(...s)}:o&&(r[n]=o):n==="style"?r[n]={...o,...i}:n==="className"&&(r[n]=[o,i].filter(Boolean).join(" "))}return{...e,...r}}c(kt,"$5e63c961fc1ce211$var$mergeProps");const Ct=["a","button","div","h2","h3","img","label","li","nav","ol","p","span","svg","ul"],J=Ct.reduce((e,t)=>{const r=f.exports.forwardRef((n,o)=>{const{asChild:i,...l}=n,s=i?Re:t;return f.exports.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),f.exports.createElement(s,B({},l,{ref:o}))});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{}),Ee="Avatar",[wt,Tr]=Ce(Ee),[zt,Ie]=wt(Ee),Rt=f.exports.forwardRef((e,t)=>{const{__scopeAvatar:r,...n}=e,[o,i]=f.exports.useState("idle");return f.exports.createElement(zt,{scope:r,imageLoadingStatus:o,onImageLoadingStatusChange:i},f.exports.createElement(J.span,B({},n,{ref:t})))}),Et="AvatarImage",It=f.exports.forwardRef((e,t)=>{const{__scopeAvatar:r,src:n,onLoadingStatusChange:o=c(()=>{},"onLoadingStatusChange"),...i}=e,l=Ie(Et,r),s=At(n),a=de(u=>{o(u),l.onImageLoadingStatusChange(u)});return re(()=>{s!=="idle"&&a(s)},[s,a]),s==="loaded"?f.exports.createElement(J.img,B({},i,{ref:t,src:n})):null}),Bt="AvatarFallback",Pt=f.exports.forwardRef((e,t)=>{const{__scopeAvatar:r,delayMs:n,...o}=e,i=Ie(Bt,r),[l,s]=f.exports.useState(n===void 0);return f.exports.useEffect(()=>{if(n!==void 0){const a=window.setTimeout(()=>s(!0),n);return()=>window.clearTimeout(a)}},[n]),l&&i.imageLoadingStatus!=="loaded"?f.exports.createElement(J.span,B({},o,{ref:t})):null});function At(e){const[t,r]=f.exports.useState("idle");return f.exports.useEffect(()=>{if(!e){r("error");return}let n=!0;const o=new window.Image,i=c(l=>()=>{!n||r(l)},"updateStatus");return r("loading"),o.onload=i("loaded"),o.onerror=i("error"),o.src=e,()=>{n=!1}},[e]),t}c(At,"$cddcb0b647441e34$var$useImageLoadingStatus");const jt=Rt,Mt=It,Wt=Pt;var Nt=f.exports.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),Be=c(function(t,r,n){var o=n.get(t);return o?o(r):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)},"renderPathForWeight");function xe(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,i;for(i=0;i<n.length;i++)o=n[i],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}c(xe,"_objectWithoutPropertiesLoose");var Pe=f.exports.forwardRef(function(e,t){var r=e.alt,n=e.color,o=e.size,i=e.weight,l=e.mirrored,s=e.children,a=e.renderPath,u=xe(e,["alt","color","size","weight","mirrored","children","renderPath"]),m=f.exports.useContext(Nt),g=m.color,d=g===void 0?"currentColor":g,h=m.size,b=m.weight,k=b===void 0?"regular":b,v=m.mirrored,x=v===void 0?!1:v,S=xe(m,["color","size","weight","mirrored"]);return W("svg",{...Object.assign({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o!=null?o:h,height:o!=null?o:h,fill:n!=null?n:d,viewBox:"0 0 256 256",transform:l||x?"scale(-1, 1)":void 0},S,u),children:[!!r&&$("title",{children:r}),s,$("rect",{width:"256",height:"256",fill:"none"}),a(i!=null?i:k,n!=null?n:d)]})});Pe.displayName="IconBase";const Ae=Pe;var O=new Map;O.set("bold",function(e){return $(I,{children:$("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})})});O.set("duotone",function(e){return $(I,{children:$("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});O.set("fill",function(){return $(I,{children:$("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"})})});O.set("light",function(e){return $(I,{children:$("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})})});O.set("thin",function(e){return $(I,{children:$("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})})});O.set("regular",function(e){return $(I,{children:$("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});var Lt=c(function(t,r){return Be(t,r,O)},"renderPath"),je=f.exports.forwardRef(function(e,t){return $(Ae,{...Object.assign({ref:t},e,{renderPath:Lt})})});je.displayName="Check";const Tt=je;var F=new Map;F.set("bold",function(e){return W(I,{children:[$("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),$("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})]})});F.set("duotone",function(e){return W(I,{children:[$("circle",{cx:"128",cy:"96",r:"64",opacity:"0.2"}),$("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),$("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});F.set("fill",function(){return $(I,{children:$("path",{d:"M231.9,212a120.7,120.7,0,0,0-67.1-54.2,72,72,0,1,0-73.6,0A120.7,120.7,0,0,0,24.1,212a7.7,7.7,0,0,0,0,8,7.8,7.8,0,0,0,6.9,4H225a7.8,7.8,0,0,0,6.9-4A7.7,7.7,0,0,0,231.9,212Z"})})});F.set("light",function(e){return W(I,{children:[$("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),$("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})]})});F.set("thin",function(e){return W(I,{children:[$("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),$("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})]})});F.set("regular",function(e){return W(I,{children:[$("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),$("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});var _t=c(function(t,r){return Be(t,r,F)},"renderPath"),Me=f.exports.forwardRef(function(e,t){return $(Ae,{...Object.assign({ref:t},e,{renderPath:_t})})});Me.displayName="User";const Ot=Me;function Se(e,t,{checkForDefaultPrevented:r=!0}={}){return c(function(o){if(e==null||e(o),r===!1||!o.defaultPrevented)return t==null?void 0:t(o)},"handleEvent")}c(Se,"$e42e1063c40fb3ef$export$b9ecd428b558ff10");function Ft({prop:e,defaultProp:t,onChange:r=c(()=>{},"onChange")}){const[n,o]=Dt({defaultProp:t,onChange:r}),i=e!==void 0,l=i?e:n,s=de(r),a=f.exports.useCallback(u=>{if(i){const g=typeof u=="function"?u(e):u;g!==e&&s(g)}else o(u)},[i,e,o,s]);return[l,a]}c(Ft,"$71cd76cc60e0454e$export$6f32135080cb4c3");function Dt({defaultProp:e,onChange:t}){const r=f.exports.useState(e),[n]=r,o=f.exports.useRef(n),i=de(t);return f.exports.useEffect(()=>{o.current!==n&&(i(n),o.current=n)},[n,o,i]),r}c(Dt,"$71cd76cc60e0454e$var$useUncontrolledState");function Ht(e){const t=f.exports.useRef({value:e,previous:e});return f.exports.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}c(Ht,"$010c2913dbd2fe3d$export$5cae361ad82dce8b");function Ut(e){const[t,r]=f.exports.useState(void 0);return re(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});const n=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const i=o[0];let l,s;if("borderBoxSize"in i){const a=i.borderBoxSize,u=Array.isArray(a)?a[0]:a;l=u.inlineSize,s=u.blockSize}else l=e.offsetWidth,s=e.offsetHeight;r({width:l,height:s})});return n.observe(e,{box:"border-box"}),()=>n.unobserve(e)}else r(void 0)},[e]),t}c(Ut,"$db6c3485150b8e66$export$1ab7ae714698c4b8");function Vt(e,t){return f.exports.useReducer((r,n)=>{const o=t[r][n];return o!=null?o:r},e)}c(Vt,"$fe963b355347cc68$export$3e6543de14f8614f");const We=c(e=>{const{present:t,children:r}=e,n=Gt(t),o=typeof r=="function"?r({present:n.isPresent}):f.exports.Children.only(r),i=ze(n.ref,o.ref);return typeof r=="function"||n.isPresent?f.exports.cloneElement(o,{ref:i}):null},"$921a889cee6df7e8$export$99c2b779aa4e8b8b");We.displayName="Presence";function Gt(e){const[t,r]=f.exports.useState(),n=f.exports.useRef({}),o=f.exports.useRef(e),i=f.exports.useRef("none"),l=e?"mounted":"unmounted",[s,a]=Vt(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return f.exports.useEffect(()=>{const u=te(n.current);i.current=s==="mounted"?u:"none"},[s]),re(()=>{const u=n.current,m=o.current;if(m!==e){const d=i.current,h=te(u);e?a("MOUNT"):h==="none"||(u==null?void 0:u.display)==="none"?a("UNMOUNT"):a(m&&d!==h?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,a]),re(()=>{if(t){const u=c(g=>{const h=te(n.current).includes(g.animationName);g.target===t&&h&&Ve.exports.flushSync(()=>a("ANIMATION_END"))},"handleAnimationEnd"),m=c(g=>{g.target===t&&(i.current=te(n.current))},"handleAnimationStart");return t.addEventListener("animationstart",m),t.addEventListener("animationcancel",u),t.addEventListener("animationend",u),()=>{t.removeEventListener("animationstart",m),t.removeEventListener("animationcancel",u),t.removeEventListener("animationend",u)}}else a("ANIMATION_END")},[t,a]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:f.exports.useCallback(u=>{u&&(n.current=getComputedStyle(u)),r(u)},[])}}c(Gt,"$921a889cee6df7e8$var$usePresence");function te(e){return(e==null?void 0:e.animationName)||"none"}c(te,"$921a889cee6df7e8$var$getAnimationName");const Ne="Checkbox",[Yt,_r]=Ce(Ne),[qt,Zt]=Yt(Ne),Kt=f.exports.forwardRef((e,t)=>{const{__scopeCheckbox:r,name:n,checked:o,defaultChecked:i,required:l,disabled:s,value:a="on",onCheckedChange:u,...m}=e,[g,d]=f.exports.useState(null),h=ze(t,S=>d(S)),b=f.exports.useRef(!1),k=g?Boolean(g.closest("form")):!0,[v=!1,x]=Ft({prop:o,defaultProp:i,onChange:u});return f.exports.createElement(qt,{scope:r,state:v,disabled:s},f.exports.createElement(J.button,B({type:"button",role:"checkbox","aria-checked":_(v)?"mixed":v,"aria-required":l,"data-state":Le(v),"data-disabled":s?"":void 0,disabled:s,value:a},m,{ref:h,onKeyDown:Se(e.onKeyDown,S=>{S.key==="Enter"&&S.preventDefault()}),onClick:Se(e.onClick,S=>{x(D=>_(D)?!0:!D),k&&(b.current=S.isPropagationStopped(),b.current||S.stopPropagation())})})),k&&f.exports.createElement(Qt,{control:g,bubbles:!b.current,name:n,value:a,checked:v,required:l,disabled:s,style:{transform:"translateX(-100%)"}}))}),Jt="CheckboxIndicator",Xt=f.exports.forwardRef((e,t)=>{const{__scopeCheckbox:r,forceMount:n,...o}=e,i=Zt(Jt,r);return f.exports.createElement(We,{present:n||_(i.state)||i.state===!0},f.exports.createElement(J.span,B({"data-state":Le(i.state),"data-disabled":i.disabled?"":void 0},o,{ref:t,style:{pointerEvents:"none",...e.style}})))}),Qt=c(e=>{const{control:t,checked:r,bubbles:n=!0,...o}=e,i=f.exports.useRef(null),l=Ht(r),s=Ut(t);return f.exports.useEffect(()=>{const a=i.current,u=window.HTMLInputElement.prototype,g=Object.getOwnPropertyDescriptor(u,"checked").set;if(l!==r&&g){const d=new Event("click",{bubbles:n});a.indeterminate=_(r),g.call(a,_(r)?!1:r),a.dispatchEvent(d)}},[l,r,n]),f.exports.createElement("input",B({type:"checkbox","aria-hidden":!0,defaultChecked:_(r)?!1:r},o,{tabIndex:-1,ref:i,style:{...e.style,...s,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))},"$e698a72e93240346$var$BubbleInput");function _(e){return e==="indeterminate"}c(_,"$e698a72e93240346$var$isIndeterminate");function Le(e){return _(e)?"indeterminate":e?"checked":"unchecked"}c(Le,"$e698a72e93240346$var$getState");const er=Kt,tr=Xt;var rr=Object.defineProperty,nr=Object.defineProperties,or=Object.getOwnPropertyDescriptors,ne=Object.getOwnPropertySymbols,Te=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable,ye=c((e,t,r)=>t in e?rr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,"__defNormalProp"),X=c((e,t)=>{for(var r in t||(t={}))Te.call(t,r)&&ye(e,r,t[r]);if(ne)for(var r of ne(t))_e.call(t,r)&&ye(e,r,t[r]);return e},"__spreadValues"),ue=c((e,t)=>nr(e,or(t)),"__spreadProps"),Oe=c((e,t)=>{var r={};for(var n in e)Te.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&ne)for(var n of ne(e))t.indexOf(n)<0&&_e.call(e,n)&&(r[n]=e[n]);return r},"__objRest"),ir={white:"#FFF",black:"#000",gray100:"#E1E1E6",gray200:"#A9A9B2",gray400:"#7C7C8A",gray500:"#505059",gray600:"#323238",gray700:"#29292E",gray800:"#202024",gray900:"#121214",ignite300:"#00B37E",ignite500:"#00875F",ignite700:"#015F43",ignite900:"#00291D",danger:"#FF2E2E"},sr={1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",20:"5rem",40:"10rem",64:"16rem",80:"20rem"},ar={px:"1px",xs:"4px",sm:"6px",md:"8px",lg:"16px",full:"99999px"},lr={default:"Roboto, sans-serif",code:"monospace"},cr={xxs:"0.625rem",xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","4xl":"2rem","5xl":"2.25rem","6xl":"3rem","7xl":"4rem","8xl":"4.5rem","9xl":"6rem"},dr={regular:"400",medium:"500",bold:"700"},ur={shorter:"125%",short:"140%",base:"160%",tall:"180%"},{config:Or,createTheme:Fr,css:Dr,getCssText:Hr,globalCss:Ur,keyframes:Fe,prefix:Vr,reset:Gr,styled:C,theme:Yr}=$t({themeMap:ue(X({},ve),{height:"space",maxHeight:"space",minHeight:"space",width:"space",maxWidth:"space",minWidth:"space"}),theme:{fontSizes:cr,fontWeights:dr,fonts:lr,lineHeights:ur,radii:ar,space:sr,colors:ir}}),fr=C("div",{padding:"$4",borderRadius:"$md",backgroundColor:"$gray800",border:"1px solid $gray600"});fr.displayName="Box";var De=C("p",{fontFamily:"$default",lineHeight:"$base",color:"$gray100",margin:0,variants:{size:{xxs:{fontSize:"$xxs"},xs:{fontSize:"$xs"},sm:{fontSize:"$sm"},md:{fontSize:"$md"},lg:{fontSize:"$lg"},xl:{fontSize:"$xl"},"2xl":{fontSize:"$2xl"},"4xl":{fontSize:"$4xl"},"5xl":{fontSize:"$5xl"},"6xl":{fontSize:"$6xl"},"7xl":{fontSize:"$7xl"},"8xl":{fontSize:"$8xl"},"9xl":{fontSize:"$9xl"}}},defaultVariants:{size:"md"}});De.displayName="Text";var pr=C("h2",{fontFamily:"$default",lineHeight:"$shorter",color:"$gray100",margin:0,variants:{size:{sm:{fontSize:"$xl"},md:{fontSize:"$2xl"},lg:{fontSize:"$4xl"},xl:{fontSize:"$5xl"},"2xl":{fontSize:"$6xl"},"3xl":{fontSize:"$7xl"},"4xl":{fontSize:"$8xl"},"5xl":{fontSize:"$9xl"}}},defaultVariants:{size:"md"}});pr.displayName="Heading";var gr=C(jt,{borderRadius:"$full",display:"inline-block",width:"$12",height:"$12",overflow:"hidden"}),hr=C(Mt,{width:"100%",height:"100%",objectFit:"cover",borderRadius:"inherit"}),mr=C(Wt,{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"$gray600",color:"$gray200",svg:{width:"$6",height:"$6"}});function br(e){return W(gr,{children:[$(hr,X({},e)),$(mr,{children:$(Ot,{})})]})}c(br,"Avatar2");br.displayName="Avatar";var $r=C("button",{all:"unset",borderRadius:"$sm",fontWeight:"$medium",fontFamily:"$default",textAlign:"center",minWidth:120,boxSizing:"border-box",padding:"0 $4",display:"flex",alignItems:"center",justifyContent:"center",gap:"$2",cursor:"pointer",svg:{width:"$4",height:"$4"},"&:disabled":{cursor:"not-allowed"},variants:{variant:{primary:{color:"$white",background:"$ignite500","&:not(:disabled):hover":{background:"$ignite300",transition:"0.2s background"},"&:disabled":{background:"$gray200"}},secondary:{color:"$ignite300",border:"2px solid $ignite500","&:not(:disabled):hover":{background:"$ignite500",color:"$white",transition:"0.2s background, 0.2s color"},"&:disabled":{color:"$gray200",borderColor:"$gray200"}},tertiary:{color:"$gray100","&:not(:disabled):hover":{color:"$white",transition:"0.2s color"},"&:disabled":{color:"$gray600"}}},size:{sm:{height:"$8",fontSize:"$sm"},md:{height:"$10",fontSize:"$md"}}},defaultVariants:{variant:"primary",size:"md"}});$r.displayName="Button";var xr=C("div",{backgroundColor:"$gray900",padding:"$3 $4",borderRadius:"$sm",boxSizing:"border-box",border:"2px solid $gray900",display:"flex",alignItems:"baseline","&:has(input:focus)":{borderColor:"$ignite300"},"&:has(input:disabled)":{opacity:.5,cursor:"not-allowed"}}),Sr=C("span",{fontFamily:"$default",fontSize:"$sm",color:"$gray200",fontWeight:"regular"}),yr=C("input",{fontFamily:"$default",fontSize:"$sm",color:"$white",fontWeight:"regular",background:"transparent",border:0,width:"100%","&:focus":{outline:0},"&:disabled":{cursor:"not-allowed"},"&:placeholder":{color:"gray400"}});function vr(e){var t=e,{prefix:r}=t,n=Oe(t,["prefix"]);return W(xr,{children:[!!r&&$(Sr,{children:r}),$(yr,X({},n))]})}c(vr,"TextInput");vr.displayName="TextInput";var kr=C("textarea",{backgroundColor:"$gray900",padding:"$3 $4",borderRadius:"$sm",boxSizing:"border-box",border:"2px solid $gray900",fontFamily:"$default",fontSize:"$sm",fontWeight:"regular",color:"$white",resize:"vertical",minHeight:"$20","&:placeholder":{color:"$gray400"},"&:focus":{outline:0,borderColor:"$ignite300"},"&:disabled":{opacity:.5,cursor:"not-allowed"}});kr.displayName="TextArea";var Cr=C(er,{all:"unset",width:"$6",height:"$6",backgroundColor:"$gray900",border:"2px solid $gray900",borderRadius:"$xs",lineHeight:0,cursor:"pointer",overflow:"hidden",boxSizing:"border-box",display:"flex",justifyContent:"center",alignItems:"center",'&[data-state="checked"]':{backgroundColor:"$ignite300"},"&:focus":{border:"2px solid $ignite300"}}),wr=Fe({from:{transform:"translateY(-100%)"},to:{transform:"translateY(0)"}}),zr=Fe({from:{transform:"translateY(0)"},to:{transform:"translateY(-100%)"}}),Rr=C(tr,{color:"$white",width:"$4",height:"$4",'&[data-state="checked"]':{animation:`${wr} 200ms ease-out`},'&[data-state="unchecked"]':{animation:`${zr} 200ms ease-out`}});function Er(e){return $(Cr,ue(X({},e),{children:$(Rr,{asChild:!0,children:$(Tt,{weight:"bold"})})}))}c(Er,"Checkbox2");Er.displayName="Checkbox";var Ir=C("div",{}),Br=C(De,{color:"$gray200",defaultVariants:{size:"sm"}}),Pr=C("div",{display:"grid",gridTemplateColumns:"repeat(var(--steps-size), 1fr)",gap:"$2",marginTop:"$1"}),Ar=C("div",{height:"$1",borderRadius:"$px",backgroundColor:"$gray600",variants:{active:{true:{backgroundColor:"$gray100"}}}});function jr(e){var t=e,{size:r,currentStep:n=1,onChangeStep:o=c(()=>{},"onChangeStep")}=t,i=Oe(t,["size","currentStep","onChangeStep"]);return f.exports.useEffect(()=>{o(n)},[n,o]),$(Ir,ue(X({},i),{children:W(Br,{children:["Passo ",n," de ",r,$(Pr,{css:{"--steps-size":r},children:Array.from({length:r},(l,s)=>s+1).map(l=>$(Ar,{active:n>=l},l))})]})}))}c(jr,"MultiStep");jr.displayName="MultiStep";export{br as A,fr as B,Tt as C,pr as H,jr as M,De as T,$r as a,Er as b,kr as c,vr as d};
//# sourceMappingURL=index.678a1349.js.map
