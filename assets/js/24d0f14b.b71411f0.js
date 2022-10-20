"use strict";(self.webpackChunkask_docs=self.webpackChunkask_docs||[]).push([[697],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,k=d["".concat(l,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2101:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={title:"How it Works",slug:"/how-it-works"},i=void 0,s={unversionedId:"intro/how-it-works",id:"intro/how-it-works",title:"How it Works",description:"pallet-contracts",source:"@site/docs/intro/how-it-works.md",sourceDirName:"intro",slug:"/how-it-works",permalink:"/ask-docs/how-it-works",draft:!1,editUrl:"https://github.com/ask-lang/ask-docs/edit/main/docs/intro/how-it-works.md",tags:[],version:"current",frontMatter:{title:"How it Works",slug:"/how-it-works"},sidebar:"docs",previous:{title:"Why WebAssembly for Smart Contracts?",permalink:"/ask-docs/why-webassembly-for-smart-contracts"},next:{title:"Ask! vs. ink!",permalink:"/ask-docs/ask-vs-ink"}},l={},c=[{value:"pallet-contracts",id:"pallet-contracts",level:2},{value:"Ask! design",id:"ask-design",level:2}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"pallet-contracts"},"pallet-contracts"),(0,o.kt)("p",null,"Substrate's ",(0,o.kt)("a",{parentName:"p",href:"https://docs.substrate.io/v3/runtime/frame/"},"Framework for Runtime Aggregation of Modularised Entities (FRAME)")," contains\na module  which implements an API for typical functions smart contracts need (storage, querying information about accounts, \u2026).\nThis module is called the ",(0,o.kt)("inlineCode",{parentName:"p"},"contracts")," pallet,\nyou can find its repository ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/blob/master/frame/contracts/README.md"},"here"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"contracts")," pallet requires smart contracts to be uploaded to the blockchain as a Wasm blob."),(0,o.kt)("h2",{id:"ask-design"},"Ask! design"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Ask!")," is implemented in a similar way to ",(0,o.kt)("inlineCode",{parentName:"p"},"ink!"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ink!")," designed an eDSL to implement smart contracts using Rust macros, and ",(0,o.kt)("inlineCode",{parentName:"p"},"Ask!")," provides eDSL by writing a transform plugin (i.e. compiler plugin) for ",(0,o.kt)("inlineCode",{parentName:"p"},"asc")," (compiler for AssemblyScript)."),(0,o.kt)("div",{class:"schema"},(0,o.kt)("img",{src:"/img/ask-design.png",alt:"How it Works"})),(0,o.kt)("p",null,"In terms of implementation, ",(0,o.kt)("inlineCode",{parentName:"p"},"Ask!")," extends AssemblyScript's AST (abstract syntax tree) with decorators, which adds more AST nodes to the decorated code declaration (without modifying the contract logic) to implement some contract-related interface, and finally generates an entry function that conforms to the ",(0,o.kt)("inlineCode",{parentName:"p"},"pallet-contracts")," specification."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Ask!")," will try to make the final implementation as compatible as possible with ",(0,o.kt)("inlineCode",{parentName:"p"},"ink!")," contracts, so that ",(0,o.kt)("inlineCode",{parentName:"p"},"Ask!")," can reuse some of the current third-party WASM contract ecosystem."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Ask!")," syntax and API design will be as close to ",(0,o.kt)("inlineCode",{parentName:"p"},"ink!")," as possible, which will also help to lower the learning threshold for developers."),(0,o.kt)("p",null,"For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"ink!")," uses ",(0,o.kt)("inlineCode",{parentName:"p"},"#[ink(constructor)]/#[ink(message)]")," to decorate the methods of a smart contract to describe the external call interface of the contract. And ",(0,o.kt)("inlineCode",{parentName:"p"},"Ask!")," uses decorators like ",(0,o.kt)("inlineCode",{parentName:"p"},"@constructor/@message")," to decorate methods defined by smart contract classes to achieve similar functionality."))}m.isMDXComponent=!0}}]);