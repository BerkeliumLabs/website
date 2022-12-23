# Preparing Training Data

Training a chat model using **berkelium** is very easy and straight forward. We use JSON file format to input data for training the model. The JSON file structure is as follows;

```json
[
  {
    "tag": "greeting",
    "patterns": ["Hi", "How are you", "Is anyone there?", "Hello", "Good day"],
    "responses": [
      "Hello, How are you?",
      "Good to see you",
      "Hi there, how can I help?"
    ]
  },
  {
    "tag": "goodbye",
    "patterns": ["Bye", "See you later", "Goodbye"],
    "responses": ["See you later!", "Have a nice day", "Bye!"]
  },
  {
    "tag": "thanks",
    "patterns": ["Thanks", "Thank you", "That's helpful"],
    "responses": ["Your welcome!", "Any time!", "My pleasure"]
  },
  {
    "tag": "fallback",
    "patterns": [""],
    "responses": [
      "Sorry, please say that again",
      "Please give me more info",
      "I still can't understand that."
    ]
  }
]
```

This is the format of JSON file that we use as the training data for the classification.

**tag:** `string` This is the intent name. Use lowercase alpha-numeric characters and underscore. Do not use any other symbols or capital letters.

**patterns:** `Array<string>` This is where we defined user utterances. Patterns of speech for the intent. This is a string array. You can define many patterns as you like. More the patterns are better the accuracy is.

**responses:** `Array<string>` Here we define the responses for the intent. This is also a string array. You can define variety of responses. Try to define variety of responses, so the chatbot won't keep repeating the same response.
