---
title: Why AssemblyScript for Smart Contracts?
slug: /why-assemblyscript-for-smart-contracts
---

Ask! chooses not to invent a new programming language, but rather adapt a subset of [AssemblyScript](https://github.com/AssemblyScript/assemblyscript) to serve our purpose.
If this doesn't already convince you, you find some good reasons here:

- AssemblyScript is a TypeScript-like language for WebAssembly. And it's a popular programming language that supports the WASM platform in addition to C/C++/Rust.

- In a non-strict sense, AssemblyScript syntax is a subset of TypeScript syntax. There exists a large number of developers using TypeScript today, and these developers can learn AssemblyScript easily.

- Compared with `ink!`, `Ask!` can effectively reduce the difficulty for developers to learn WASM contracts, attract more TypeScript developers to develop WASM smart contracts, and enrich the WASM smart contract ecosystem.

- Contracts written in AssemblyScript may generate smaller WASM code than contracts written in Rust when implementing the same logical functionality.

**NOTE**: AssemblyScript also has some drawbacks, such as the compiler is not robust enough, the ecosystem is not good enough and other issues. We will not discussed them here.
