# Using the Trained Model

When your model is prepared, you can implement the model. First we need to initialize the model;

```js
const modelUrl = 'file://C:/Projects/my-chatbot/models/model.json';
const metadataUrl = 'models/model_metadata.json';

const mymodel = await bkLabs.nlu.loadModel(modelUrl, metadataUrl, callbackFunction);
```
### Parameters

**modelUrl:** `string` This is the URL where your trained model is located. You need to provided an Absolute URL here.

**metadataUrl:** `string` This is the URL where `model_metadata.json` file is located. You need to provide a Relative URL here.

**callbackFunction:** Provide a callback function to be executed when the model is loaded. This is where you can start your classification work.

### Returns
`Array[0]` Initialized Model
`Array[1]` Response Text data.

## Encode Text Input

Once the model is initialized, you need to encode the text input before parsing it to the model to classify.

```js
const sentence = 'Hello, nice day!';

const encodedSentence = await bkLabs.nlu.encodeText(sentence);
```
### Parameters

**sentence:** `string` Text input to classify.

## Returns
`Tensor` Output Tensor.

## Classify Sentence

Once the text input is encoded, pass the encoded tensor to classify input text.

```js
const predictData = await mymodel[0].predict(encodedSentence);
```

### Parameters

**encodedSentence** `Tensor` encoded text input

### Returns

`Tensor` Prediction result as a Tensor

## Get a Reply

Now you can get a reply that matches the intent of your input.

```js
const myReply = bkLabs.nlu.predictReply(predictData, mymodel[1]);
console.log(myReply);
```

### Parameters

**predictData** `Tensor` Output Tensor from prediction

**mymodel[1]** `Array<object>` Response data extracted earlier when we initialized the model.

### Returns
`string` Returns a reply as string.

## Example

The final example code will look something like this:

```js
const modelUrl = 'file://C:/Projects/my-chatbot/models/model.json';
const metadataUrl = 'models/model_metadata.json';
const sentence = 'Hello, nice day!';

const mymodel = await bkLabs.nlu.loadModel(modelUrl, metadataUrl, callbackFunction);

async function callbackFunction() {
    const encodedSentence = await bkLabs.nlu.encodeText(sentence);
    const predictData = await mymodel[0].predict(encodedSentence);
    const myReply = bkLabs.nlu.predictReply(predictData, mymodel[1]);
    console.log(myReply);
}
```

Please feel free to [report a bug](https://github.com/BerkeliumLabs/berkelium-dev-kit/issues) if you find while using [**berkelium**](https://www.npmjs.com/package/berkelium).
