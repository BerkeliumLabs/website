## Tokenizer

Tokenizer function is used to [tokenize](https://en.wikipedia.org/wiki/Lexical_analysis#Tokenization) text input and returns a `Array<string>` of tokens. This is a core function and one of the basics steps in any NLP tasks.

To use tokenizer, use the following code:

```js
const tokens = berkelium.tokenize(sentence);
```

### Parameters

**sentence** `string` A string input to be tokenized.

### Returns

**tokens** `Array<string>` Returns a string array of tokens.