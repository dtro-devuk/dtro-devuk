(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[22],{"7h0d":function(e,t,r){"use strict";var a=r("HcNT"),c=(r("FdF9"),r("YFqc")),n=r.n(c),i=r("sWYD"),o=r("4+6U"),s=r("fuKZ"),l=r("o7D0");t.a=function(e){var t=e.path,r=e.title,c=e.excerpt,d=e.slug,u=e.publishedAt,b=e.readingTime;return Object(a.jsxs)("div",{className:"w-full mb-5 ",children:[Object(a.jsx)(n.a,{href:"".concat(t).concat(d),children:Object(a.jsx)("a",{className:"w-full",children:Object(a.jsx)("div",{className:"w-full mb-2",children:Object(a.jsx)("div",{className:"flex flex-col justify-between md:flex-row",children:Object(a.jsx)(s.default,{level:3,className:"font-bold text-accent2",children:r})})})})}),Object(a.jsx)(l.a,{className:"text-sm font-semibold text-surface",children:c}),Object(a.jsxs)(l.a,{className:"mt-2 text-primary",children:[Object(i.a)(Object(o.a)(u),"MMMM dd, yyyy")," \u2022 ",b.text]})]})}},"Bu++":function(e,t,r){"use strict";var a=r("HcNT"),c=r("vOnD"),n=(r("FdF9"),r("YFqc")),i=r.n(n),o=function(e){var t=e.id,r=e.href,c=e.variant,n=e.active,o=e.children;return Object(a.jsx)(i.a,{href:r,children:Object(a.jsx)(d,{id:t,role:"navigation",type:"button","aria-label":"Navigates link to ".concat(t," page"),href:r,variant:c,active:n,children:o},t)})},s=function(e){var t=e.children;return Object(a.jsx)("span",{className:"relative z-0 inline-flex shadow-sm",children:t})},l=function(e){var t=e.buttons,r=e.variant,c=e.activeId;return Object(a.jsx)(s,{id:"blog-button-group",role:"blog-buttons",children:t.map((function(e,t){return e.title===c?Object(a.jsx)(o,{id:e.title,href:e.url,variant:r,active:!0,children:e.title},t):Object(a.jsx)(o,{id:e.title,href:e.url,variant:r,active:!1,children:e.title},t)}))})},d=c.d.button.withConfig({displayName:"BlogButtonGroup__StyledButtonContainer",componentId:"sc-3qx872-0"})((function(e){var t=e.variant,r=e.active;return[{position:"relative",display:"inline-flex",alignItems:"center",paddingLeft:"0.5rem",paddingRight:"0.5rem",paddingTop:"0.5rem",paddingBottom:"0.5rem"},{borderWidth:"2px",backgroundColor:"var(--color-surface)",borderColor:"var(--ui-heading-accent-2)"},{color:"var(--ui-heading-accent-2)"},{":hover":{"--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",backgroundColor:"var(--ui-heading-accent-2)"},":focus":{zIndex:"10",outline:"2px solid transparent",outlineOffset:"2px","--tw-border-opacity":"1",borderColor:"rgba(175, 203, 246, var(--tw-border-opacity))"},":active":{backgroundColor:"var(--ui-heading-accent-2)","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))"}},{transitionProperty:"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"150ms"},Object(c.c)(["box-shadow:0 0.1em 0 0 rgba(0,0,0,0.25);"]),"tabs"===t&&{marginRight:"0.25rem",fontSize:"0.875rem",lineHeight:"1.25rem",fontWeight:"500",borderTopWidth:"0px",borderRadius:"0.375rem",borderBottomLeftRadius:"0.5rem",borderBottomRightRadius:"0.5rem",borderTopLeftRadius:"0px",borderTopRightRadius:"0px","@media (min-width: 768px)":{marginRight:"1.25rem",fontSize:"1.125rem",lineHeight:"1.75rem"}},"standard"===t&&{marginLeft:"-1px",fontSize:"0.75rem",lineHeight:"1rem",fontWeight:"600",":first-child":{marginLeft:"auto",borderTopLeftRadius:"0.375rem",borderBottomLeftRadius:"0.375rem"},":last-child":{borderTopRightRadius:"0.375rem",borderBottomRightRadius:"0.375rem"}},r&&{"--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",backgroundColor:"var(--ui-heading-accent-2)"}]}));l.defaultProps={buttons:[{title:"Blog 1",url:"#"},{title:"Blog 2",url:"#"},{title:"Blog 3",url:"#"},{title:"Blog 4",url:"#"}],variant:"tabs",activeId:""},t.a=l},CMkY:function(e,t,r){"use strict";r.r(t),r.d(t,"__N_SSG",(function(){return u}));var a=r("rePB"),c=r("HcNT"),n=r("FdF9"),i=r("6v7h"),o=r("7h0d"),s=r("3sgF"),l=r("PVKh");function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}var u=!0;t.default=function(e){var t=e.posts,r=Object(n.useState)(""),u=r[0],b=r[1],f=t.sort((function(e,t){return Number(new Date(t.publishedAt))-Number(new Date(e.publishedAt))})).filter((function(e){return e.title.toLowerCase().includes(u.toLowerCase())})),m=i.a.meta.blogs.Gardening;return Object(c.jsxs)(s.a,{children:[Object(c.jsx)(l.a,{metaData:m,noOfPosts:t.length}),Object(c.jsxs)("div",{className:"flex flex-col items-start justify-center max-w-2xl mx-auto mb-16",children:[Object(c.jsxs)("div",{className:"relative w-full mb-4",children:[Object(c.jsx)("input",{"aria-label":"Search articles",type:"text",onChange:function(e){return b(e.target.value)},placeholder:"Search articles",className:"block w-full px-4 py-2 border rounded-md border-secondary text-surface bg-surfaceBackground focus:ring-brandEye focus:ring-4 focus:border-brandEye "}),Object(c.jsx)("svg",{className:"absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(c.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})]}),Object(c.jsx)("h3",{className:"mt-8 mb-4 text-2xl font-bold tracking-tight text-accent md:text-4xl ",children:"All Posts"}),!f.length&&"No posts found.",f.map((function(e){return Object(c.jsx)(o.a,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({path:"/blog/brewing/"},e),e.title)}))]})]})}},PVKh:function(e,t,r){"use strict";var a=r("HcNT"),c=(r("FdF9"),r("20a2")),n=r("e3q0"),i=r("fuKZ"),o=r("Bu++");var s=r("6v7h"),l=function(e){var t=e.metaData,r=e.noOfPosts,l=r.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"),d=s.a.meta,u=Object(c.useRouter)().pathname.replace(t.url,""),b="".concat(u).concat(d.blogs.Developer.url),f="".concat(u).concat(d.blogs.Food.url),m="".concat(u).concat(d.blogs.Brewing.url),x="".concat(u).concat(d.blogs.Gardening.url),p=[{title:d.blogs.Developer.topic,url:b},{title:d.blogs.Food.topic,url:f},{title:d.blogs.Brewing.topic,url:m},{title:d.blogs.Gardening.topic,url:x}],h="expressive";return t.url.includes("developer")&&(h="code"),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"flex flex-wrap items-center justify-center w-full md:justify-between",children:[Object(a.jsx)(n.a,{startText:"Blog"}),Object(a.jsx)(o.a,{buttons:p,variant:"standard",activeId:t.topic})]}),Object(a.jsxs)("div",{className:"flex flex-col items-center justify-center mx-auto mt-5 mb-1",children:[Object(a.jsx)(i.default,{level:1,variant:h,className:"items-center mb-1 italic font-bold tracking-tight text-center justify-items-center text-accent2",children:t.title}),Object(a.jsx)("div",{className:"flex flex-row items-center mt-2 mb-2 text-xs text-center md:text-lg justify-items-center ",children:t.glyphBar}),Object(a.jsx)(i.default,{level:4,className:"items-center justify-center mb-1 font-bold text-center text-accent2",children:t.subTitle}),Object(a.jsx)("p",{className:"w-full py-5 mt-5 mb-4 text-xs text-center border-t-2 border-b-2 md:text-base text-surface border-primaryHr",children:t.intro}),Object(a.jsx)("p",{className:"mb-0 text-xs font-semibold md:text-base text-primary",children:0===r?"There are no posts yet.":1===r?"There is ".concat(l," post so far..."):"There are ".concat(l," posts so far...")})]})]})};l.defaultProps={noOfPosts:0};t.a=l},e3q0:function(e,t,r){"use strict";var a=r("HcNT"),c=r("vOnD"),n=r("FdF9"),i=r("20a2"),o=r("YFqc"),s=r.n(o),l=c.d.li.withConfig({displayName:"Breadcrumbs__StyledListItem",componentId:"f91y9i-0"})({display:"flex",alignItems:"center"});t.a=function(){var e=Object(i.useRouter)(),t=Object(n.useState)(null),r=t[0],c=t[1];return Object(n.useEffect)((function(){if(e){var t=e.asPath.split("/");t.shift();var r=t.map((function(e,r){return{breadcrumb:e,href:"/"+t.slice(0,r+1).join("/")}}));c(r)}}),[e]),r?Object(a.jsx)("nav",{"aria-label":"Breadcrumbs",className:"mb-2 text-xs font-bold text-left md:text-base text-surface",children:Object(a.jsxs)("ol",{className:"inline-flex p-0 list-none",children:[Object(a.jsx)(l,{children:Object(a.jsx)("a",{href:"/",children:"HOME"})}),r.map((function(e,t){return Object(a.jsxs)(l,{children:[Object(a.jsx)("svg",{className:"w-3 h-3 mx-3 fill-current",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:Object(a.jsx)("path",{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"})}),Object(a.jsx)(s.a,{href:e.href,children:Object(a.jsx)("a",{className:"text-xs text-primary","aria-current":"page",children:(r=e.breadcrumb,r.replace(/-/g," ").replace(/oe/g,"\xf6").replace(/ae/g,"\xe4").replace(/ue/g,"\xfc").toUpperCase())})})]},e.href);var r}))]})}):Object(a.jsx)("div",{className:"text-surface",children:"No Breadcrumbs"})}},o7D0:function(e,t,r){"use strict";var a=r("HcNT"),c=(r("FdF9"),function(e){var t=e.className,r=e.children,c="text-xs font md:text-base font-serif lg:text-lg";return c="".concat(c," ").concat(t),Object(a.jsx)("p",{className:c,children:r})});c.defaultProps={},t.a=c}}]);