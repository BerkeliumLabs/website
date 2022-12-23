## Training the Model

Once the training data is prepared, you can train the model. We need to import berkelium Utilities to read the JSON file. Berkelium Utilies can be import using following line:

```js
import { bk_utils } from 'berkelium/dist/utils/utils.mjs';
```

or CommonJS syntax

```js
const { bk_utils } = require('berkelium/dist/utils/utils.cjs');
```

Then use the following code to train the model:

```js
async function runTrain() {
    const rawData = await bk_utils.read(intentData);

    const dataSet = await berkelium.preprocess(rawData);

    const myModel = await berkelium.multiClass.train(dataSet);

    bk_utils.save(myModel, dataSet);
}

runTrain();
```

`berkelium.multiClass.train(dataSet)` accept `DATASET` Object. More information on [Preprocessing Function](/v1/core/preprocess.html).