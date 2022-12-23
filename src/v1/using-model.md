# Using the Trained Model

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


### Parameters `loadModel`

Loading the model

**modelUrl:** `string` Provide an absolute URL to where you have uploaded your model.

### Returns
`MODEL` Berkelium MODEL Object


### Parameters `predict`

predict the class

**sentence**: `string` The user input as string.

### Returns

Returns prediction object with following information:

**max**: Maximum value of predicted output
**index**: Index of the max value
**predictions**: Full prediction vector
**intent**: Intent name

You can access these values using `reply.intent`

Once you have identified the intent, you can generate a response as you wish.