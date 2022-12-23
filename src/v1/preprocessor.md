## Preprocessor

Preprocessor function process the text data and create a `DATASET` object that can be used to train machine learning model.

To preprocess the text data, use the code below:

```js
const vocab = await berkelium.preprocess(textData);
```

### Parameters

**textData** `Array<Array<string>>` We can feed the training data we prepared in [Preparing Data](/v1/preparing-data.html) step.

### Returns

**DATASET** `DATASET` returns a dataset object which contains following properties:

- `x`: `Array<Array<number>>` feature data for training (vectorized)
- `y`: `Array<Array<number>>` label data for training (vectorized)
- `labels`: `Array<string>` label data in string format
- `vocab`: `DICTIONARY_BOOK` dictionary of vocabulary found in the dataset
- `length`: `number` sequence length