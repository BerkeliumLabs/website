# Preparing Training Data

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
