"use strict";(self.webpackChunkask_docs=self.webpackChunkask_docs||[]).push([[293],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),g=r,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3437:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={title:"Creating an Ask! Project",slug:"/getting-started/creating-an-ask-project"},i=void 0,s={unversionedId:"getting-started/creating",id:"getting-started/creating",title:"Creating an Ask! Project",description:"Ask! still uses the normal AssemblyScript syntax, but with some more decorators and parameters, and it handles some hidden complicated contract calling logic for developers.",source:"@site/docs/getting-started/creating.md",sourceDirName:"getting-started",slug:"/getting-started/creating-an-ask-project",permalink:"/ask-docs/getting-started/creating-an-ask-project",draft:!1,editUrl:"https://github.com/ask-lang/ask-docs/edit/main/docs/getting-started/creating.md",tags:[],version:"current",frontMatter:{title:"Creating an Ask! Project",slug:"/getting-started/creating-an-ask-project"},sidebar:"docs",previous:{title:"Setup",permalink:"/ask-docs/getting-started/setup"},next:{title:"Compile Your Contract",permalink:"/ask-docs/getting-started/building-your-contract"}},l={},c=[{value:"Ask! Contract Source Code",id:"ask-contract-source-code",level:2},{value:"Ask! Contract Configuration",id:"ask-contract-configuration",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Ask!")," still uses the normal AssemblyScript syntax, but with some more decorators and parameters, and it handles some hidden complicated contract calling logic for developers."),(0,r.kt)("p",null,"Developers only need to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"npm/yarn")," package manager to create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"AssemblyScript")," (Typescript-like) project to start writing contracts, and refer to the ",(0,r.kt)("inlineCode",{parentName:"p"},"AssemblyScript")," configuration in the ",(0,r.kt)("a",{parentName:"p",href:"/ask-docs/getting-started/setup#configuration"},"previous section"),", which will not be repeated here."),(0,r.kt)("h2",{id:"ask-contract-source-code"},"Ask! Contract Source Code"),(0,r.kt)("p",null,"Here is a simplest example of ",(0,r.kt)("inlineCode",{parentName:"p"},"Ask!")," contract: ",(0,r.kt)("inlineCode",{parentName:"p"},"flipper"),", which is nothing more than a ",(0,r.kt)("inlineCode",{parentName:"p"},"bool")," which gets flipped from ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," through the ",(0,r.kt)("inlineCode",{parentName:"p"},"flip()")," function."),(0,r.kt)("p",null,"Here is the code for ",(0,r.kt)("inlineCode",{parentName:"p"},"flipper"),", but we won't go into the details of the code here for now:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { env } from "ask-lang";\n\n@event({ id: 1 })\nexport class FlipEvent {\n    flag: bool;\n\n    constructor(flag: bool) {\n        this.flag = flag;\n    }\n}\n\n@spreadLayout()\n@packedLayout()\nexport class Flipper {\n    flag: bool;\n    constructor(flag: bool = false) {\n        this.flag = flag;\n    }\n}\n\n@contract()\nexport class Contract {\n    data: Flipper;\n\n    constructor() {\n        this.data = new Flipper(false);\n    }\n\n    @constructor()\n    default(flag: bool): void {\n        this.data.flag = flag;\n    }\n\n    @message({ mutates: true })\n    flip(): void {\n        this.data.flag = !this.data.flag;\n        let event = new FlipEvent(this.data.flag);\n        // @ts-ignore\n        env().emitEvent(event);\n    }\n\n    @message()\n    get(): bool {\n        return this.data.flag;\n    }\n}\n')),(0,r.kt)("h2",{id:"ask-contract-configuration"},"Ask! Contract Configuration"),(0,r.kt)("p",null,"Developers also need the additional ",(0,r.kt)("inlineCode",{parentName:"p"},"Ask!")," contract configuration ",(0,r.kt)("inlineCode",{parentName:"p"},"askconfig.json")," to create an ",(0,r.kt)("inlineCode",{parentName:"p"},"Ask!")," contract project."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": This is a contract-related configuration and is different from ",(0,r.kt)("inlineCode",{parentName:"p"},"asconfig.json"),"."),(0,r.kt)("p",null,"An example of ",(0,r.kt)("inlineCode",{parentName:"p"},"askconfig.json")," is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "metadataContract": {\n        "name": "Example",\n        "version": "0.1.0",\n        "license": "MIT"\n    },\n    "metadataTargetPath": "build/metadata.json",\n    "strict": true,\n    "event": {\n        "maxTopicNum": 2\n    }\n}\n')),(0,r.kt)("p",null,"For the complete example of ",(0,r.kt)("inlineCode",{parentName:"p"},"flipper")," contract project, see the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ask-lang/ask-template"},"ask-template"),"."))}d.isMDXComponent=!0}}]);