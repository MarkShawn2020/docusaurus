"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8610],{18683:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),l=a(33084),r=a(31961);function s(e){const{metadata:t}=e,{previousPage:a,nextPage:s}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,l.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(r.Z,{permalink:a,title:n.createElement(l.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),s&&n.createElement(r.Z,{permalink:s,title:n.createElement(l.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},66443:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),l=a(28973),r=a(25580);function s({items:e,component:t=r.Z}){return n.createElement(n.Fragment,null,e.map((({content:e})=>n.createElement(l.n,{key:e.metadata.permalink,content:e},n.createElement(t,null,n.createElement(e,null))))))}},12728:(e,t,a)=>{a.r(t),a.d(t,{default:()=>k});var n=a(67294),l=a(86010),r=a(33084),s=a(85597),o=a(73537),i=a(83631),c=a(39130),g=a(67911),m=a(18683),p=a(93773),u=a(66443),b=Object.defineProperty,d=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,f=(e,t,a)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,w=(e,t)=>{for(var a in t||(t={}))h.call(t,a)&&f(e,a,t[a]);if(d)for(var a of d(t))E.call(t,a)&&f(e,a,t[a]);return e};function v(e){const t=function(){const{selectMessage:e}=(0,s.c)();return t=>e(t,(0,r.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,r.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function Z({tag:e}){const t=v(e);return n.createElement(n.Fragment,null,n.createElement(o.d,{title:t}),n.createElement(p.Z,{tag:"blog_tags_posts"}))}function P({tag:e,items:t,sidebar:a,listMetadata:l}){const s=v(e);return n.createElement(g.Z,{sidebar:a},n.createElement("header",{className:"margin-bottom--xl"},n.createElement("h1",null,s),n.createElement(c.Z,{href:e.allTagsPath},n.createElement(r.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),n.createElement(u.Z,{items:t}),n.createElement(m.Z,{metadata:l}))}function k(e){return n.createElement(o.FG,{className:(0,l.Z)(i.k.wrapper.blogPages,i.k.page.blogTagPostListPage)},n.createElement(Z,w({},e)),n.createElement(P,w({},e)))}}}]);