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
    "metadataTargetPath": "build/metadata.json",
    "strict": true,
    "event": {
        "maxTopicNum": 2
    }
}
```

For the complete example of `flipper` contract project, see the [ask-template](https://github.com/ask-lang/ask-template).
