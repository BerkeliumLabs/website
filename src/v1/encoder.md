## Encorder

Encoder function vectorize the string tokens. Which means, each string tokens will be assigned a unique number. This is important when preparing text data to be feed in to a machine learning model. Usually this function is used after tokenizing your string data using `tokenize` function.

To vectorize the text, use the code below:

```js
const vocab = await berkelium.encode(tokens);
```

### Parameters

**tokens** `Array<string>` A string array of tokens.

### Returns

**vocab** `DICTIONARY_BOOK` An dictionary of vocabulary with their assigned unique numeric value.