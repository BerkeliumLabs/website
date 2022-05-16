## Training the Model

Once the training data is prepared, you can train the model using the following code:

```js
bkLabs.nlu.train(trainingDataPath, outputFolder);
```

### Parameters

**trainingDataPath:** Path to training data file aka the `intents.json` file we prepared earlier.

**outputFolder:** Path to out put folder where the model will be saved. Model files will be saved to this directory once the training is finished.