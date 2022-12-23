## Save

This is a utility function used to save a model along with other necessary data. Before using this function, you need to import `bk_utils` library.

```js
import { bk_utils } from 'berkelium/dist/utils/utils.mjs';
```

or CommonJS syntax

```js
const { bk_utils } = require('berkelium/dist/utils/utils.cjs');
```

To use save function, use the following code:

```js
bk_utils.save(myModel, dataSet);
```

### Parameters

**myModel** `MODEL` The model object return by `loadModel` function.
**dataset** `DATASET` The dataset object return by `preprocess` function.

### Returns

**none**