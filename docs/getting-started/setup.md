---
title: Setup
slug: /getting-started/setup
---

## AssemblyScript

Before reading this document, you need to have programming foundation in [AssemblyScript](https://www.assemblyscript.org/) or Typescript.

## Install `AssemblyScript` & `Ask!`

Since [AssemblyScript](https://www.assemblyscript.org/) and [Ask!](https://github.com/ask-lang/ask) are provided as npm dependencies.
Developers only need to use the package manager `yarn` or `npm` to install it, and it's recommended to always use the latest version,
but currently `Ask!` only supports assemblyscript v0.19:

```json
{
    ...
    "dependencies": {
        "ask-lang": "^0.4.0-rc2"
    },
    "devDependencies": {
        "ask-transform": "^0.4.0-rc2",
        "assemblyscript": "^0.19"
    },
    ...
}
```

**Note**: The `ask-lang` won't automatically import the `ask-transform`, which is the `Ask!` plugin for AssemblyScript.

## Configuration

AssemblyScript supports command line parameters (`asc <options>`) and the configuration file (`asc --config <file>`) to compile AssemblyScript projects.
It is recommended that developers always use the configuration file `asconfig.json` to compile smart contracts.

A simple `asconfig.json` template is as follows, this template inherits the configuration of `ask-lang`,
which provides a reasonable configuration that developers can also override.

```json
{
    "extends": "ask-lang/asconfig.json",
    "targets": {
        "debug": {
            "binaryFile": "build/debug.wasm",
            "textFile": "build/debug.wat"
        },
        "release": {
            "binaryFile": "build/release.wasm",
            "textFile": "build/release.wat"
        }
    }
}
```

Current `ask-lang/asconfig.json`:

```json
{
    "targets": {
        "debug": {
            "sourceMap": true,
            "debug": true
        },
        "release": {
            "sourceMap": false,
            "optimizeLevel": 3,
            "shrinkLevel": 2,
            "converge": false,
            "noAssert": false
        }
    },
    "options": {
        "transform": ["ask-transform", "as-serde-transform"],
        "importMemory": true,
        "initialMemory": 2,
        "maximumMemory": 16,
        "noExportMemory": true,
        "runtime": "stub",
        "use": "abort=",
        "disable": ["Sign-extension"]
    }
}
```

The most important and basic configuration for AssemblyScript compiler plugins is the `transform` option.
You need to add the following configuration to `asconfig.json` to make AssemblyScript use the `Ask!` plugins.

Note that the order of the two plugins here.
Since the `ask-transform` plugin automatically generates the [as-serde](https://github.com/ask-lang/serde-as) (used for contract encoding/decoding) decorators internally, and `Ask!` relies on the `as-serde-transform` plugin to process these decorators again, so `ask-transform` must be placed before `as-serde-transform`.

```json
{
    ...
    "options": {
        "transform": ["ask-transform", "as-serde-transform"],
        ... // other options here
    }
}
```

In addition to the above configuration, you also need to configure reasonable compilation options so that the generated wasm can be deployed normally:

```json
{
    ...
    "options": {
        ... // other options here
        "importMemory": true,
        "initialMemory": 2,
        "maximumMemory": 16,
        "noExportMemory": true,
        // no runtime
        "runtime": "stub",
        "use": "abort=",
        // pallet-contracts do not support any wasm extension now
        "disable": ["Sign-extension"]
    }
}
```
