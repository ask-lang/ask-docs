---
title: How it Works
slug: /how-it-works
---

## pallet-contracts

Substrate's [Framework for Runtime Aggregation of Modularised Entities (FRAME)](https://docs.substrate.io/v3/runtime/frame/) contains
a module  which implements an API for typical functions smart contracts need (storage, querying information about accounts, …).
This module is called the `contracts` pallet,
you can find its repository [here](https://github.com/paritytech/substrate/blob/master/frame/contracts/README.md).

The `contracts` pallet requires smart contracts to be uploaded to the blockchain as a Wasm blob.

## Ask! design

`Ask!` is implemented in a similar way to `ink!`.

`ink!` designed an eDSL to implement smart contracts using Rust macros, and `Ask!` provides eDSL by writing a transform plugin (i.e. compiler plugin) for `asc` (compiler for AssemblyScript).

<div class="schema">
    <img src="/img/ask-design.png" alt="How it Works" />
</div>

In terms of implementation, `Ask!` extends AssemblyScript's AST (abstract syntax tree) with decorators, which adds more AST nodes to the decorated code declaration (without modifying the contract logic) to implement some contract-related interface, and finally generates an entry function that conforms to the `pallet-contracts` specification.

`Ask!` will try to make the final implementation as compatible as possible with `ink!` contracts, so that `Ask!` can reuse some of the current third-party WASM contract ecosystem.

The `Ask!` syntax and API design will be as close to `ink!` as possible, which will also help to lower the learning threshold for developers.

For example, `ink!` uses `#[ink(constructor)]/#[ink(message)]` to decorate the methods of a smart contract to describe the external call interface of the contract. And `Ask!` uses decorators like `@constructor/@message` to decorate methods defined by smart contract classes to achieve similar functionality.
