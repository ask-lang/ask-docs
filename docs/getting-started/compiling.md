---
title: Compile Your Contract
slug: /getting-started/building-your-contract
---

Run the following command in your flipper directory to compile your smart contract:

```bash
ASK_CONFIG=./askconfig.json yarn asc --config asconfig.json flipper.ts
```

Here we specify `flipper.ts` as the contract entrypoint, and specify the `askconfig.json` by setting the environment variable `ASK_CONFIG`. Because the `asc` does not currently support passing custom parameters, so we rely on the environment variable to pass the `Ask!` configuration parameters.
The default path of the `Ask!` configuration file is `askconfig.json` in the current directory. If it does not exist, the default configuration is used.

**Note**: You should use the `asc` in the current package to compile the contract, not the global `asc`, otherwise you will encounter the problem of duplicate definitions.

This compile command will build the following for your contract: a Wasm binary, a Wasm text and a metadata file (which contains the contract's ABI).

- `flipper.wasm`: generated by `AssemblyScript`, configurable by `asconfig.json`.
- `flipper.wat`: generated by `AssemblyScript`, configurable by `asconfig.json`.
- `metadata.json`: generated by `Ask!`, configurable by `askconfig.json`.

Let's take a look at the structure of the metadata.json:

```json
{
  "source": {
    "hash": "",
    "language": "Ask! 0.4.0-rc3",
    "compiler": "asc 0.19.23"
  },
  "contract": {
    "name": "flipper",
    "version": "0.1.0",
    "license": "MIT"
  },
  "V3": {
    "spec": {
      "constructors": [...],
       "messages": [...],
       "events": [...],
       "docs": [...]
    },
    "storage": {...},
    "types": [...]
  }
}
```

This file describes all the interfaces that can be used to interact with your contract:

- `types` provides the custom data types used throughout the rest of the JSON.
- `storage` defines all the storage items managed by your contract and how to ultimately access them.
- `spec` stores information about the callable functions like constructors and messages a user can call to interact with the contract. It also has helpful information like the events that are emitted by the contract or any docs.

If you look closely at the constructors and messages, you will also notice a selector which contains a 4-byte hash of the function name and is used to route your contract calls to the correct functions.
