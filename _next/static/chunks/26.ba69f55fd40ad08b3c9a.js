(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[26],{J3Rv:function(e,t,c){c("aoOK");var n=c("FdF9"),a=c("7ljp");e.exports=function(e,t){var c=e.compiledSource,r=e.renderedOutput,s=e.scope||{},l=t&&t.components||{},i=t&&t.provider,o=n.useState(n.createElement("div",{dangerouslySetInnerHTML:{__html:r}})),d=o[0],u=o[1];return"undefined"===typeof window?d:(n.useEffect((function(){var e=window.requestIdleCallback((function(){var t=Object.assign({mdx:a.mdx},l,s),r=Object.keys(t),i=Object.values(t),o=Reflect.construct(Function,["React"].concat(r).concat(c+"\nreturn React.createElement(MDXContent, {});")),d=o.apply(o,[n].concat(i)),m=n.createElement(a.MDXProvider,{components:l},d);u(m),window.cancelIdleCallback(e)}))}),[c]),i?n.createElement(i.component,i.props||{},d):d)}},aoOK:function(e,t){"undefined"!==typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout((function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})}),1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)})},e3q0:function(e,t,c){"use strict";var n=c("HcNT"),a=c("vOnD"),r=c("FdF9"),s=c("20a2"),l=c("YFqc"),i=c.n(l),o=a.d.li.withConfig({displayName:"Breadcrumbs__StyledListItem",componentId:"f91y9i-0"})({display:"flex",alignItems:"center"});t.a=function(){var e=Object(s.useRouter)(),t=Object(r.useState)(null),c=t[0],a=t[1];return Object(r.useEffect)((function(){if(e){var t=e.asPath.split("/");t.shift();var c=t.map((function(e,c){return{breadcrumb:e,href:"/"+t.slice(0,c+1).join("/")}}));a(c)}}),[e]),c?Object(n.jsx)("nav",{"aria-label":"Breadcrumbs",className:"mb-2 text-xs font-bold text-left md:text-base text-surface",children:Object(n.jsxs)("ol",{className:"inline-flex p-0 list-none",children:[Object(n.jsx)(o,{children:Object(n.jsx)("a",{href:"/",children:"HOME"})}),c.map((function(e,t){return Object(n.jsxs)(o,{children:[Object(n.jsx)("svg",{className:"w-3 h-3 mx-3 fill-current",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:Object(n.jsx)("path",{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"})}),Object(n.jsx)(i.a,{href:e.href,children:Object(n.jsx)("a",{className:"text-xs text-primary","aria-current":"page",children:(c=e.breadcrumb,c.replace(/-/g," ").replace(/oe/g,"\xf6").replace(/ae/g,"\xe4").replace(/ue/g,"\xfc").toUpperCase())})})]},e.href);var c}))]})}):Object(n.jsx)("div",{className:"text-surface",children:"No Breadcrumbs"})}},lmwM:function(e,t,c){"use strict";c.r(t),c.d(t,"__N_SSG",(function(){return f}));var n=c("HcNT"),a=c("J3Rv"),r=c.n(a),s=(c("FdF9"),c("6v7h")),l=c("3sgF"),i=(c("bEY5"),c("Rw2n")),o=c("ni71"),d=c("e3q0"),u=c("sWYD"),m=c("4+6U"),x=function(e){var t=e.children,c=e.frontMatter,a=s.a.meta;"".concat(a.siteData.blogUrlPrefix,"/brewing/").concat(c.slug);return Object(n.jsxs)(l.a,{children:[Object(n.jsx)(d.a,{startText:"Blog"}),Object(n.jsxs)("article",{className:"flex flex-col items-start justify-center w-full mx-auto mb-16",children:[Object(n.jsx)("h1",{className:"mb-4 text-3xl font-bold tracking-tight text-accent2 md:text-5xl ",children:c.title}),Object(n.jsxs)("div",{className:"flex flex-col items-start justify-between w-full mt-2 mb-8 md:flex-row md:items-center",children:[Object(n.jsxs)("div",{className:"flex items-center",children:[Object(n.jsx)(i.a,{size:8,isAnimated:!1,isRounded:!0,borderWidth:"0",borderColor:"white"}),Object(n.jsx)(o.a,{href:"/",isAnimated:!1,variant:"navbar"})]}),Object(n.jsx)("p",{className:"ml-2 text-base text-left text-surface",children:Object(u.a)(Object(m.a)(c.publishedAt),"MMMM dd, yyyy")}),Object(n.jsx)("p",{className:"ml-2 text-base text-left text-surface",children:c.readingTime.text}),Object(n.jsx)("p",{className:"mt-2 text-sm text-accent md:mt-0"})]}),Object(n.jsx)("div",{className:"w-full prose dark:prose-dark max-w-none",children:t})]})]})},b=c("Utgb"),f=!0;t.default=function(e){var t=e.mdxSource,c=e.frontMatter,a=r()(t,{components:b.a});return Object(n.jsx)(x,{frontMatter:c,children:a})}}}]);