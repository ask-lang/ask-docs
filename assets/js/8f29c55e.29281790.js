"use strict";(self.webpackChunkask_docs=self.webpackChunkask_docs||[]).push([[948],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1914:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"Compile Your Contract",slug:"/getting-started/building-your-contract"},i=void 0,l={unversionedId:"getting-started/compiling",id:"getting-started/compiling",title:"Compile Your Contract",description:"Run the following command in your flipper directory to compile your smart contract:",source:"@site/docs/getting-started/compiling.md",sourceDirName:"getting-started",slug:"/getting-started/building-your-contract",permalink:"/ask-docs/getting-started/building-your-contract",draft:!1,editUrl:"https://github.com/ask-lang/ask-docs/edit/main/docs/getting-started/compiling.md",tags:[],version:"current",frontMatter:{title:"Compile Your Contract",slug:"/getting-started/building-your-contract"},sidebar:"docs",previous:{title:"Creating an Ask! Project",permalink:"/ask-docs/getting-started/creating-an-ask-project"},next:{title:"Run a Substrate Node",permalink:"/ask-docs/getting-started/running-substrate"}},s={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Run the following command in your flipper directory to compile your smart contract:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ASK_CONFIG=./askconfig.json yarn asc --config asconfig.json flipper.ts\n")),(0,a.kt)("p",null,"Here we specify ",(0,a.kt)("inlineCode",{parentName:"p"},"flipper.ts")," as the contract entrypoint, and specify the ",(0,a.kt)("inlineCode",{parentName:"p"},"askconfig.json")," by setting the environment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"ASK_CONFIG"),". Because the ",(0,a.kt)("inlineCode",{parentName:"p"},"asc")," does not currently support passing custom parameters, so we rely on the environment variable to pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"Ask!")," configuration parameters.\nThe default path of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Ask!")," configuration file is ",(0,a.kt)("inlineCode",{parentName:"p"},"askconfig.json")," in the current directory. If it does not exist, the default configuration is used."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": You should use the ",(0,a.kt)("inlineCode",{parentName:"p"},"asc")," in the current package to compile the contract, not the global ",(0,a.kt)("inlineCode",{parentName:"p"},"asc"),", otherwise you will encounter the problem of duplicate definitions."),(0,a.kt)("p",null,"This compile command will build the following for your contract: a Wasm binary, a Wasm text and a metadata file (which contains the contract's ABI)."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"flipper.wasm"),": generated by ",(0,a.kt)("inlineCode",{parentName:"li"},"AssemblyScript"),", configurable by ",(0,a.kt)("inlineCode",{parentName:"li"},"asconfig.json"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"flipper.wat"),": generated by ",(0,a.kt)("inlineCode",{parentName:"li"},"AssemblyScript"),", configurable by ",(0,a.kt)("inlineCode",{parentName:"li"},"asconfig.json"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"metadata.json"),": generated by ",(0,a.kt)("inlineCode",{parentName:"li"},"Ask!"),", configurable by ",(0,a.kt)("inlineCode",{parentName:"li"},"askconfig.json"),".")),(0,a.kt)("p",null,"Let's take a look at the structure of the metadata.json:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "source": {\n    "hash": "",\n    "language": "Ask! 0.4.0-rc3",\n    "compiler": "asc 0.19.23"\n  },\n  "contract": {\n    "name": "flipper",\n    "version": "0.1.0",\n    "license": "MIT"\n  },\n  "V3": {\n    "spec": {\n      "constructors": [...],\n       "messages": [...],\n       "events": [...],\n       "docs": [...]\n    },\n    "storage": {...},\n    "types": [...]\n  }\n}\n')),(0,a.kt)("p",null,"This file describes all the interfaces that can be used to interact with your contract:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"types")," provides the custom data types used throughout the rest of the JSON."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"storage")," defines all the storage items managed by your contract and how to ultimately access them."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spec")," stores information about the callable functions like constructors and messages a user can call to interact with the contract. It also has helpful information like the events that are emitted by the contract or any docs.")),(0,a.kt)("p",null,"If you look closely at the constructors and messages, you will also notice a selector which contains a 4-byte hash of the function name and is used to route your contract calls to the correct functions."))}u.isMDXComponent=!0}}]);