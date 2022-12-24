# Classification

Text classification using **BERKELIUM** is done in few steps.

## Install

To begin, you can install **berkelium** using `npm` or `yarn`:

```shell
npm i berkelium
```

or

```shell
yarn add berkelium
```

### Import `berkelium`

Simply import **berkelium** to your project as follows;

For ESModule syntax

```js
import { berkelium } from 'berkelium';
```

or CommonJS syntax

```js
const { berkelium } = require('berkelium');
```


## Preparing Training Data

Training a chat model using **berkelium** is very easy and straight forward. We use JSON file format to input data for training the model. The JSON file structure is as follows;

```json
[
  [
    [
        "how would you say fly in italian", 
        "translate"
    ], 
    [
        "what's the spanish word for pasta", 
        "translate"
    ], 
    [
        "how would they say butter in zambia", 
        "translate"
    ], 
    [
        "how do you say fast in spanish", 
        "translate"
    ],
    [
        "who do i call to report my card as lost", 
        "report_lost_card"
    ], 
    [
        "what should i do if i need to report my card lost", 
        "report_lost_card"
    ], 
    [
        "my capital one visa was taken without permission", 
        "report_lost_card"
    ],
    [
        "why did i get rejected on my card", 
        "card_declined"
    ], 
    [
        "how come my credit card isn't working", 
        "card_declined"
    ], 
    [
        "why didn't my card work", 
        "card_declined"
    ]
]
```

The format is array of string arrays where;

**array[0]**: Defines user utterances. Patterns of speech for the intent. This is a string array. 
**array[1]**: The intent name, aka Label.


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

`berkelium.multiClass.train(dataSet)` accept `DATASET` Object. More information on [Preprocessing Function](/v1/core.html#preprocessor).

## Using the Trained Model

When your model is prepared, you can implement the model. First we need to upload the model and relavant files. And then load the model. Note that `loadModel` function only accepts absolute URLs. Provide the URL to the location where your model is hosted.

```js
const modelUrl = 'https://www.yourwebsite.com/my-model/';

async function runPredict() {
    const theModel = await berkelium.multiClass.loadModel(modelUrl);

    const reply = await theModel.predict(sentence);

    console.log(reply);
}

runPredict();
```


#### Parameters `loadModel`

Loading the model

**modelUrl:** `string` Provide an absolute URL to where you have uploaded your model.

#### Returns
`MODEL` Berkelium MODEL Object


#### Parameters `predict`

predict the class

**sentence**: `string` The user input as string.

#### Returns

Returns prediction object with following information:

**max**: Maximum value of predicted output
**index**: Index of the max value
**predictions**: Full prediction vector
**intent**: Intent name

You can access these values using `reply.intent`

Once you have identified the intent, you can generate a response as you wish.