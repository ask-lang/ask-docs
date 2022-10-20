---
title: Overview
slug: /examples
---

There is a `Ask!` project [template](https://github.com/ask-lang/ask-template), run the command below to try it:

```bash
yarn build flipper.ts
```

As a result you'll get a file `build/flipper.wasm` file and a `metadata.json` file in the `build/` folder.

In our [examples folder](https://github.com/ask-lang/ask/tree/main/examples) you can find a number of examples written in `Ask!`:

```bash
git clone https://github.com/ask-lang/ask.git
cd ask

# Build `ask-contract-metadata` and `ask-transform` packages
yarn build

# Build the Ask! contract examples
yarn example examples/flipper/index.ts
yarn example examples/erc20/index.ts
# ...
```

For further information, please have a look at the [Deploy your Contract](../getting-started/deploying.md) section.
