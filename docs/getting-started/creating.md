---
title: Creating an Ask! Project
slug: /getting-started/creating-an-ask-project
---

`Ask!` still uses the normal AssemblyScript syntax, but with some more decorators and parameters, and it handles some hidden complicated contract calling logic for developers.

Developers only need to use the `npm/yarn` package manager to create a new `AssemblyScript` (Typescript-like) project to start writing contracts, and refer to the `AssemblyScript` configuration in the [previous section](./setup.md#configuration), which will not be repeated here.

## Ask! Contract Source Code

Here is a simplest example of `Ask!` contract: `flipper`, which is nothing more than a `bool` which gets flipped from `true` to `false` through the `flip()` function.

Here is the code for `flipper`, but we won't go into the details of the code here for now:

```ts
import { env } from "ask-lang";

@event({ id: 1 })
export class FlipEvent {
    flag: bool;

    constructor(flag: bool) {
        this.flag = flag;
    }
}

@spreadLayout()
@packedLayout()
export class Flipper {
    flag: bool;
    constructor(flag: bool = false) {
        this.flag = flag;
    }
}

@contract()
export class Contract {
    data: Flipper;

    constructor() {
        this.data = new Flipper(false);
    }

    @constructor()
    default(flag: bool): void {
        this.data.flag = flag;
    }

    @message({ mutates: true })
    flip(): void {
        this.data.flag = !this.data.flag;
        let event = new FlipEvent(this.data.flag);
        // @ts-ignore
        env().emitEvent(event);
    }

    @message()
    get(): bool {
        return this.data.flag;
    }
}
```

## Ask! Contract Configuration

Developers also need the additional `Ask!` contract configuration `askconfig.json` to create an `Ask!` contract project.

**Note**: This is a contract-related configuration and is different from `asconfig.json`.

An example of `askconfig.json` is as follows:

```json
{
    "metadataContract": {
        "name": "Example",
        "version": "0.1.0",
        "license": "MIT"
    },
    "metadataOutputPath": "./",
    "strict": true,
    "event": {
        "maxTopicNum": 2
    }
}
```

For the complete example of `flipper` contract project, see the [ask-template](https://github.com/ask-lang/ask-template).

<!-- 
然后用以下命令来编译：

```sh
ASK_CONFIG=./askconfig.json yarn asc --config asconfig.json flipper.ts
```

我们指定`flipper.ts`为入口文件, 并通过`askconfig.json`设置环境变量`ASK_CONFIG`的路径来指定配置，由于`asc`插件目前不支持传递参数，所以我们依靠环境变量来传递参数。
默认路径为当前目录下的`askconfig.json`，如果不存在则使用默认配置。

## 编译

合约编写完毕后，使用`asc`命令如下编译该合约:

```sh
yarn asc --config asconfig.json flipper.ts
```

**注意** 你应当使用当前包项目下的 asc 进行编译，而不是全局`asc`，否则会遇到重复定义的问题。

编译产物分为 2 部分：AssemblyScript 生成的 wasm 等代码，Ask!生成的`metadata.json`。
AssemblyScript 生成的 wasm 代码路径由`asconfig.json`配置决定，而`metadata.json`由 `askconfig.json`配置决定。 -->
