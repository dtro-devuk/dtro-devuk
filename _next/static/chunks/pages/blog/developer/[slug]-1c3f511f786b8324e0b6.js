_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[48,27,71],{"7ljp":function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return u})),n.d(t,"MDXProvider",(function(){return f})),n.d(t,"mdx",(function(){return p})),n.d(t,"useMDXComponents",(function(){return d})),n.d(t,"withMDXComponents",(function(){return s}));var r=n("FdF9");function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.default.createContext({}),s=function(e){return function(t){var n=d(t.components);return r.default.createElement(e,c({},t,{components:n}))}},d=function(e){var t=r.default.useContext(u),n=t;return e&&(n="function"===typeof e?e(t):l(l({},t),e)),n},f=function(e){var t=d(e.components);return r.default.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.default.createElement(r.default.Fragment,{},t)}},m=r.default.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=d(n),f=a,m=s["".concat(o,".").concat(f)]||s[f]||b[f]||c;return n?r.default.createElement(m,l(l({ref:t},u),{},{components:n})):r.default.createElement(m,l({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var c=n.length,o=new Array(c);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"===typeof e?e:a,o[1]=l;for(var u=2;u<c;u++)o[u]=n[u];return r.default.createElement.apply(null,o)}return r.default.createElement.apply(null,n)}m.displayName="MDXCreateElement"},J3Rv:function(e,t,n){n("aoOK");var r=n("FdF9"),a=n("7ljp");e.exports=function(e,t){var n=e.compiledSource,c=e.renderedOutput,o=e.scope||{},l=t&&t.components||{},i=t&&t.provider,u=r.useState(r.createElement("div",{dangerouslySetInnerHTML:{__html:c}})),s=u[0],d=u[1];return"undefined"===typeof window?s:(r.useEffect((function(){var e=window.requestIdleCallback((function(){var t=Object.assign({mdx:a.mdx},l,o),c=Object.keys(t),i=Object.values(t),u=Reflect.construct(Function,["React"].concat(c).concat(n+"\nreturn React.createElement(MDXContent, {});")),s=u.apply(u,[r].concat(i)),f=r.createElement(a.MDXProvider,{components:l},s);d(f),window.cancelIdleCallback(e)}))}),[n]),i?r.createElement(i.component,i.props||{},s):s)}},Ldxu:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return x}));var r=n("HcNT"),a=(n("FdF9"),n("J3Rv")),c=n.n(a),o=n("6v7h"),l=n("3sgF"),i=(n("bEY5"),n("Rw2n")),u=n("ni71"),s=n("fuKZ"),d=n("e3q0"),f=(n("WKYG"),n("sWYD")),b=n("4+6U"),m=function(e){var t=e.children,n=e.frontMatter;o.a.meta.blogs.Developer;return Object(r.jsxs)(l.a,{children:[Object(r.jsx)(d.a,{}),Object(r.jsxs)("article",{className:"flex flex-col items-start justify-center w-full mx-auto mb-16",children:[Object(r.jsx)(s.default,{level:1,className:"mb-4 text-3xl font-bold tracking-tight text-accent2 md:text-5xl ",children:n.title}),Object(r.jsxs)("div",{className:"flex flex-col items-start justify-between w-full pr-5 mt-2 mb-8 md:flex-row md:items-center",children:[Object(r.jsxs)("div",{className:"flex items-center",children:[Object(r.jsx)(i.a,{size:8,isAnimated:!1,isRounded:!0,borderWidth:"0",borderColor:"white"}),Object(r.jsx)(u.a,{href:"/",isAnimated:!1,variant:"navbar"})]}),Object(r.jsx)("p",{className:"ml-2 text-base text-left text-surface",children:Object(f.a)(Object(b.a)(n.publishedAt),"MMMM dd, yyyy")}),Object(r.jsx)("p",{className:"ml-2 text-base text-right text-surface",children:n.readingTime.text})]}),Object(r.jsx)("article",{id:"markdown",className:"w-full space-y-5 max-w-none",children:t})]})]})},p=n("Utgb"),x=!0;t.default=function(e){var t=e.mdxSource,n=e.frontMatter,a=c()(t,{components:p.a});return Object(r.jsx)(m,{frontMatter:n,children:a})}},REh4:function(e,t,n){"use strict";n.r(t);var r=n("HcNT"),a=n("vOnD"),c=(n("FdF9"),a.d.hr.withConfig({displayName:"Hr__HrContainer",componentId:"ic6b7s-0"})((function(e){var t=e.variant;return[{fontSize:"0.75rem",lineHeight:"1rem",borderWidth:"2px"},!e.isFullWidth&&{margin:"1.25rem"},"primary"===t&&{borderColor:"var(--ui-hr-primary)",backgroundColor:"var(--ui-hr-primary)"},"secondary"===t&&{borderColor:"var(--ui-hr-secondary)",backgroundColor:"var(--ui-hr-secondary)"}]}))),o=function(e){var t=e.variant,n=e.isFullWidth;return Object(r.jsx)(c,{variant:t,isFullWidth:n})};o.defaultProps={variant:"primary",isFullWidth:!1},t.default=o},Utgb:function(e,t,n){"use strict";var r=n("rePB"),a=n("HcNT"),c=n("Vvt1"),o=n.n(c);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=o()((function(){return Promise.resolve().then(n.bind(null,"fuKZ"))}),{loadableGenerated:{webpack:function(){return["fuKZ"]},modules:["../heading/Heading"]}}),s=o()((function(){return n.e(71).then(n.bind(null,"REh4"))}),{loadableGenerated:{webpack:function(){return["REh4"]},modules:["../hr/Hr"]}}),d=o()((function(){return Promise.resolve().then(n.bind(null,"FJK7"))}),{loadableGenerated:{webpack:function(){return["FJK7"]},modules:["../links/Link"]}}),f=o()((function(){return n.e(78).then(n.bind(null,"MSbU"))}),{loadableGenerated:{webpack:function(){return["MSbU"]},modules:["../tiles/Surface"]}}),b=o()((function(){return n.e(69).then(n.bind(null,"PqoB"))}),{loadableGenerated:{webpack:function(){return["PqoB"]},modules:["../alerts/AlertSuccess"]}}),m=o()((function(){return n.e(72).then(n.bind(null,"iLWI"))}),{loadableGenerated:{webpack:function(){return["iLWI"]},modules:["./MDXCheckbox"]}}),p=o()((function(){return n.e(62).then(n.bind(null,"dJZE"))}),{loadableGenerated:{webpack:function(){return["dJZE"]},modules:["./MDXBackToTopLink"]}}),x=o()((function(){return n.e(65).then(n.bind(null,"cJrJ"))}),{loadableGenerated:{webpack:function(){return["cJrJ"]},modules:["./MDXRecipeBar"]}}),j=o()((function(){return n.e(75).then(n.bind(null,"RlqO"))}),{loadableGenerated:{webpack:function(){return["RlqO"]},modules:["./MDXRecipeHeatScale"]}}),h=o()((function(){return n.e(60).then(n.bind(null,"mu1Q"))}),{loadableGenerated:{webpack:function(){return["mu1Q"]},modules:["./MDXRecipeCard"]}}),O=o()((function(){return n.e(63).then(n.bind(null,"ynlG"))}),{loadableGenerated:{webpack:function(){return["ynlG"]},modules:["./MDXJumpToRecipe"]}}),v=o()((function(){return n.e(64).then(n.bind(null,"T0IK"))}),{loadableGenerated:{webpack:function(){return["T0IK"]},modules:["./MDXPrintRecipeButton"]}}),y=o()((function(){return n.e(74).then(n.bind(null,"+DM2"))}),{loadableGenerated:{webpack:function(){return["+DM2"]},modules:["./MDXRecipeContainsBar"]}}),g={MDXHeader:o()((function(){return n.e(73).then(n.bind(null,"2LaG"))}),{loadableGenerated:{webpack:function(){return["2LaG"]},modules:["./MDXHeader"]}}),MDXCheckbox:m,MDXBackToTopLink:p,MDXRecipeBar:x,MDXRecipeHeatScale:j,MDXRecipeCard:h,MDXJumpToRecipe:O,MDXPrintRecipeButton:v,MDXRecipeContainsBar:y,Heading:u,HR:s,Surface:f,AlertSuccess:b,a:function(e){var t=e.href;return t&&(t.startsWith("/")||t.startsWith("#"))?Object(a.jsx)(d,i({href:t,type:"standard"},e)):Object(a.jsx)(d,i({href:t,target:"_blank",type:"standard"},e))},h1:function(e){return Object(a.jsx)(u,i(i({},e),{},{level:1,variant:"standard",className:"py-5 font-semibold text-headingPrimary"}))},h2:function(e){return Object(a.jsx)(u,i(i({},e),{},{level:2,variant:"standard",className:"py-5 font-semibold text-headingPrimary"}))},h3:function(e){return Object(a.jsx)(u,i(i({},e),{},{level:3,variant:"standard",className:"py-5 font-semibold text-headingPrimary"}))},h4:function(e){return Object(a.jsx)(u,i(i({},e),{},{level:4,variant:"standard",className:"py-5 font-semibold text-headingPrimary"}))},h5:function(e){return Object(a.jsx)(u,i(i({},e),{},{level:5,variant:"standard",className:"py-5 font-semibold text-headingPrimary"}))},h6:function(e){return Object(a.jsx)(u,i(i({},e),{},{level:6,variant:"standard",className:"py-5 font-semibold text-headingPrimary"}))},hr:o()((function(){return n.e(70).then(n.bind(null,"+kgb"))}),{loadableGenerated:{webpack:function(){return["+kgb"]},modules:["../hr/HR"]}}),p:function(e){return Object(a.jsx)("p",i(i({},e),{},{className:"p-3 text-sm font-light md:text-base lg:text-xl md:py-5 text-surface "}))},pre:function(e){return Object(a.jsx)("pre",i(i({},e),{},{className:"p-5 font-mono text-red-600 bg-black border border-accent2"}))},code:function(e){return Object(a.jsx)("code",i(i({},e),{},{className:"font-mono font-light text-pink-500 "}))},inlineCode:function(e){return Object(a.jsx)("inlineCode",i(i({},e),{},{className:"font-mono bg-disabledInverse text-surface "}))},blockquote:function(e){return Object(a.jsx)("blockquote",i(i({},e),{},{className:"py-0 pl-2 my-5 font-extrabold border-l-4 text-surface border-accent2"}))},strong:function(e){return Object(a.jsx)("strong",i(i({},e),{},{className:"font-extrabold"}))},em:function(e){return Object(a.jsx)("em",i(i({},e),{},{className:"italic font-extrabold"}))},del:function(e){return Object(a.jsx)("del",i(i({},e),{},{className:"line-through"}))},ul:function(e){return Object(a.jsx)("ul",i(i({},e),{},{className:"px-5 pr-5 list-disc"}))},ol:function(e){return Object(a.jsx)("ol",i(i({},e),{},{className:"px-5 pr-5 list-decimal"}))},table:function(e){return Object(a.jsx)("table",i(i({},e),{},{className:"flex flex-col w-full my-2 font-serif text-xs border-separate shadow-lg table-auto text-accent bg-surfaceBackground md:text-base md:shadow-2xl "}))},thead:function(e){return Object(a.jsx)("thead",i(i({},e),{},{className:"font-extrabold text-left border-b bg-navBarSecondary text-accent2 border-accent"}))},th:function(e){return Object(a.jsx)("th",i(i({},e),{},{className:"w-auto px-8 py-4 font-bold tracking-wider text-left uppercase "}))},tr:function(e){return Object(a.jsx)("tr",i(i({},e),{},{className:""}))},td:function(e){return Object(a.jsx)("td",i(i({},e),{},{className:"flex-grow w-auto px-8 py-4 text-left whitespace-pre-wrap border-b-2 border-accent even:bg-transparent odd:bg-accent "}))}};t.a=g},aoOK:function(e,t){"undefined"!==typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout((function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})}),1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)})},bEY5:function(e,t,n){"use strict";n.d(t,"a",(function(){return r.default})),n.d(t,"b",(function(){return u}));var r=n("fuKZ"),a=n("HcNT"),c=n("vOnD"),o=(n("FdF9"),n("qQiV")),l=function(e){var t=e.children,n=e.page,c=e.pageTitle,l=e.textAlign,u=e.isAnimated;if(!n)return null;if(!c)return null;var s="Page Header for the (".concat(n," page)"),d="pb-5 font-black text-".concat(l," text-headingPrimary flex justify-center md:justify-start");return Object(a.jsxs)(i,{isAnimated:u,className:"",children:[Object(a.jsxs)(r.default,{role:"heading","aria-level":"1","aria-label":s,level:1,className:d,children:[c," ",t]}),Object(a.jsx)(o.a,{variant:"primary",isFullWidth:!0})]})},i=c.d.div.withConfig({displayName:"PageHeading__Container",componentId:"sc-19ukjy7-0"})((function(e){return[e.isAnimated&&{"@media (prefers-reduced-motion: no-preference)":{animation:"tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both"}}]}));l.defaultProps={isAnimated:!0,textAlign:"left"};var u=l},e3q0:function(e,t,n){"use strict";var r=n("HcNT"),a=n("vOnD"),c=n("FdF9"),o=n("20a2"),l=n("YFqc"),i=n.n(l),u=a.d.li.withConfig({displayName:"Breadcrumbs__StyledListItem",componentId:"f91y9i-0"})({display:"flex",alignItems:"center"});t.a=function(){var e=Object(o.useRouter)(),t=Object(c.useState)(null),n=t[0],a=t[1];return Object(c.useEffect)((function(){if(e){var t=e.asPath.split("/");t.shift();var n=t.map((function(e,n){return{breadcrumb:e,href:"/"+t.slice(0,n+1).join("/")}}));a(n)}}),[e]),n?Object(r.jsx)("nav",{"aria-label":"Breadcrumbs",className:"mb-2 text-xs font-bold text-left md:text-base text-surface",children:Object(r.jsxs)("ol",{className:"inline-flex p-0 list-none",children:[Object(r.jsx)(u,{children:Object(r.jsx)("a",{href:"/",children:"HOME"})}),n.map((function(e,t){return Object(r.jsxs)(u,{children:[Object(r.jsx)("svg",{className:"w-3 h-3 mx-3 fill-current",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:Object(r.jsx)("path",{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"})}),Object(r.jsx)(i.a,{href:e.href,children:Object(r.jsx)("a",{className:"text-xs text-primary","aria-current":"page",children:(n=e.breadcrumb,n.replace(/-/g," ").replace(/oe/g,"\xf6").replace(/ae/g,"\xe4").replace(/ue/g,"\xfc").toUpperCase())})})]},e.href);var n}))]})}):Object(r.jsx)("div",{className:"text-surface",children:"No Breadcrumbs"})}},fuKZ:function(e,t,n){"use strict";n.r(t);var r=n("HcNT"),a=(n("FdF9"),function(e){var t=e.className,n=e.children,a=e.level,c=e.variant,o=e.color;a=parseInt(a);var l="h".concat(a),i="";switch("standard"===c&&(i+=" text-".concat(o,"} font-header")),"expressive"===c&&(i+=" text-".concat(o," font-Grandstander-VariableFont")),"code"===c&&(i+=" text-".concat(o," font-mono")),a){case 1:i+=" text-2xl md:text-5xl";break;case 2:i+=" text-xl md:text-4xl";break;case 3:i+=" text-lg md:text-3xl";break;case 4:i+=" text-base md:text-2xl";break;case 5:i+=" text-sm md:text-lg";break;case 6:i+=" text-xs md:text-xl";break;default:i+=" text-3xl md:text-5xl"}return t&&(i=i+" "+t),Object(r.jsx)(l,{className:i,children:n})});a.defaultProps={level:1,variant:"standard",color:"heading1"},t.default=a},qQiV:function(e,t,n){"use strict";var r=n("REh4");n.d(t,"a",(function(){return r.default}))},zA6S:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/developer/[slug]",function(){return n("Ldxu")}])}},[["zA6S",1,7,5,4,2,3,6,0,8,11]]]);