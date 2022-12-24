# Core Functions

Core functions are the main functions that are needed for any type of NLP task. We have defined few core functions in **berkelium** library.

## Tokenizer

Tokenizer function is used to [tokenize](https://en.wikipedia.org/wiki/Lexical_analysis#Tokenization) text input and returns a `Array<string>` of tokens. This is a core function and one of the basics steps in any NLP tasks.

To use tokenizer, use the following code:

```js
const tokens = berkelium.tokenize(sentence);
```

#### Parameters

**sentence** `string` A string input to be tokenized.

#### Returns

**tokens** `Array<string>` Returns a string array of tokens.

## Encorder

Encoder function vectorize the string tokens. Which means, each string tokens will be assigned a unique number. This is important when preparing text data to be feed in to a machine learning model. Usually this function is used after tokenizing your string data using `tokenize` function.

To vectorize the text, use the code below:

```js
const vocab = await berkelium.encode(tokens);
```

#### Parameters

**tokens** `Array<string>` A string array of tokens.

#### Returns

**vocab** `DICTIONARY_BOOK` An dictionary of vocabulary with their assigned unique numeric value.

## Preprocessor

Preprocessor function process the text data and create a `DATASET` object that can be used to train machine learning model.

To preprocess the text data, use the code below:

```js
const vocab = await berkelium.preprocess(textData);
```

#### Parameters

**textData** `Array<Array<string>>` We can feed the training data we prepared in [Preparing Data](/v1/preparing-data.html) step.

#### Returns

**DATASET** `DATASET` returns a dataset object which contains following properties:

- `x`: `Array<Array<number>>` feature data for training (vectorized)
- `y`: `Array<Array<number>>` label data for training (vectorized)
- `labels`: `Array<string>` label data in string format
- `vocab`: `DICTIONARY_BOOK` dictionary of vocabulary found in the dataset
- `length`: `number` sequence length