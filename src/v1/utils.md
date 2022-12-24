# Utilities

Before using this function, you need to import `bk_utils` module.

```js
import { bk_utils } from 'berkelium/dist/utils/utils.mjs';
```

or CommonJS syntax

```js
const { bk_utils } = require('berkelium/dist/utils/utils.cjs');
```

## Save

This is a utility function used to save a model along with other necessary data. To use save function, use the following code:

```js
bk_utils.save(myModel, dataSet);
```

#### Parameters

**myModel** `MODEL` The model object return by `loadModel` function.
**dataset** `DATASET` The dataset object return by `preprocess` function.

#### Returns

**none**


## Read

This is a utility function used to read files (`.json` files). This is used to load training data from `.json` files. To use save function, use the following code:

```js
const rawData = await bk_utils.read(pathToFile);
```

#### Parameters

**pathToFile** `string` Path to `.json` file.

#### Returns

**JSON** `JSON` returns data in JSON format.