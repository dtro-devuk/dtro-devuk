(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[23,73],{"2LaG":function(e,t,n){"use strict";n.r(t);var a=n("hGi/"),c=n("HcNT"),r=n("vOnD"),i=(n("FdF9"),r.d.div.withConfig({displayName:"MDXHeader__StyledHeader",componentId:"i789cl-0"})((function(e){return Object(a.a)(e),[{backgroundColor:"var(--ui-navbar-secondary)",textAlign:"center !important",width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",padding:"0.5rem","@media (min-width: 768px)":{padding:"1.25rem"}},Object(r.c)(["p{","}"],{marginTop:"0px !important",marginBottom:"0.5rem !important","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity)) !important",fontFamily:'Oswald Variable, Georgia,  Arial, ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji" !important'})]})));t.default=function(e){var t=e.children;return Object(c.jsx)(i,{children:t})}},J3Rv:function(e,t,n){n("aoOK");var a=n("FdF9"),c=n("7ljp");e.exports=function(e,t){var n=e.compiledSource,r=e.renderedOutput,i=e.scope||{},s=t&&t.components||{},l=t&&t.provider,o=a.useState(a.createElement("div",{dangerouslySetInnerHTML:{__html:r}})),d=o[0],m=o[1];return"undefined"===typeof window?d:(a.useEffect((function(){var e=window.requestIdleCallback((function(){var t=Object.assign({mdx:c.mdx},s,i),r=Object.keys(t),l=Object.values(t),o=Reflect.construct(Function,["React"].concat(r).concat(n+"\nreturn React.createElement(MDXContent, {});")),d=o.apply(o,[a].concat(l)),u=a.createElement(c.MDXProvider,{components:s},d);m(u),window.cancelIdleCallback(e)}))}),[n]),l?a.createElement(l.component,l.props||{},d):d)}},aoOK:function(e,t){"undefined"!==typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout((function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})}),1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)})},e3q0:function(e,t,n){"use strict";var a=n("HcNT"),c=n("vOnD"),r=n("FdF9"),i=n("20a2"),s=n("YFqc"),l=n.n(s),o=c.d.li.withConfig({displayName:"Breadcrumbs__StyledListItem",componentId:"f91y9i-0"})({display:"flex",alignItems:"center"});t.a=function(){var e=Object(i.useRouter)(),t=Object(r.useState)(null),n=t[0],c=t[1];return Object(r.useEffect)((function(){if(e){var t=e.asPath.split("/");t.shift();var n=t.map((function(e,n){return{breadcrumb:e,href:"/"+t.slice(0,n+1).join("/")}}));c(n)}}),[e]),n?Object(a.jsx)("nav",{"aria-label":"Breadcrumbs",className:"mb-2 text-xs font-bold text-left md:text-base text-surface",children:Object(a.jsxs)("ol",{className:"inline-flex p-0 list-none",children:[Object(a.jsx)(o,{children:Object(a.jsx)("a",{href:"/",children:"HOME"})}),n.map((function(e,t){return Object(a.jsxs)(o,{children:[Object(a.jsx)("svg",{className:"w-3 h-3 mx-3 fill-current",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:Object(a.jsx)("path",{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"})}),Object(a.jsx)(l.a,{href:e.href,children:Object(a.jsx)("a",{className:"text-xs text-primary","aria-current":"page",children:(n=e.breadcrumb,n.replace(/-/g," ").replace(/oe/g,"\xf6").replace(/ae/g,"\xe4").replace(/ue/g,"\xfc").toUpperCase())})})]},e.href);var n}))]})}):Object(a.jsx)("div",{className:"text-surface",children:"No Breadcrumbs"})}},xuzu:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return w}));var a=n("HcNT"),c=n("J3Rv"),r=n.n(c),i=n("vOnD"),s=(n("FdF9"),n("6v7h")),l=n("3sgF"),o=n("fuKZ"),d=n("Rw2n"),m=n("ni71"),u=n("e3q0"),f=n("2LaG"),x=n("sWYD"),b=n("4+6U"),j=i.d.span.withConfig({displayName:"BlogFoodies__EmojiContainer",componentId:"sc-1qw9yo7-0"})({width:"12rem",height:"12rem",fontSize:"0.875rem",lineHeight:"1.25rem",padding:"0.25rem",cursor:"default","@media (min-width: 768px)":{fontSize:"1.5rem",lineHeight:"2rem"}}),p=function(e){var t=e.children,n=e.frontMatter,c=s.a.meta;"".concat(c.siteData.blogUrlPrefix,"/cooking/").concat(n.slug);return Object(a.jsxs)(l.a,{children:[Object(a.jsx)(u.a,{startText:"Blog"}),Object(a.jsxs)("article",{"aria-label":"Food blog",className:"flex flex-col items-center justify-center w-full mx-auto mb-16 ",children:[Object(a.jsxs)(f.default,{children:[Object(a.jsx)(o.default,{level:1,variant:"standard",className:"items-center justify-center pt-2 font-bold md:py-5 text-accent2",children:n.title}),Object(a.jsxs)("div",{className:"flex flex-col items-center w-2/3 mt-2 mb-2 md:mb-5 md:items-start md:justify-between md:flex-row",children:[Object(a.jsxs)("div",{className:"flex items-center justify-center",children:[Object(a.jsx)("div",{className:"hidden md:flex",children:Object(a.jsx)(d.a,{size:8,isAnimated:!1,isRounded:!0,borderWidth:"0",borderColor:"white"})}),Object(a.jsx)("div",{className:"pb-2 md:ml-2 md:py-0",children:Object(a.jsx)(m.a,{href:"/",isAnimated:!1,variant:"small"})})]}),Object(a.jsxs)("p",{className:"ml-2 text-xs text-left md:text-base text-surface",children:[Object(a.jsx)(j,{children:"\ud83d\udcc6"}),Object(x.a)(Object(b.a)(n.publishedAt),"MMMM dd, yyyy")]}),Object(a.jsxs)("p",{className:"ml-2 text-xs text-left md:text-base text-surface",children:[Object(a.jsx)(j,{children:"\ud83d\udcd6"})," ",n.readingTime.text]})]})]}),Object(a.jsx)("p",{className:"mt-2 text-sm text-accent md:mt-0"}),Object(a.jsx)("div",{className:"w-full px-5 py-2 font-serif text-sm font-light md:px-10 md:mx-10 max-w-none md:text-base",children:t})]})]})},h=n("Utgb"),w=!0;t.default=function(e){var t=e.mdxSource,n=e.frontMatter,c=r()(t,{components:h.a});return Object(a.jsx)(p,{frontMatter:n,children:c})}}}]);