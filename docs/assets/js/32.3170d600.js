(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{353:function(t,s,a){"use strict";a.r(s);var e=a(25),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"using-the-trained-model"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-the-trained-model"}},[t._v("#")]),t._v(" Using the Trained Model")]),t._v(" "),s("p",[t._v("When your model is prepared, you can implement the model. First we need to initialize the model;")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" modelUrl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'file://C:/Projects/my-chatbot/models/model.json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" metadataUrl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'models/model_metadata.json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mymodel "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" bkLabs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nlu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadModel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("modelUrl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" metadataUrl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callbackFunction"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),s("p",[s("strong",[t._v("modelUrl:")]),t._v(" "),s("code",[t._v("string")]),t._v(" This is the URL where your trained model is located. You need to provided an Absolute URL here.")]),t._v(" "),s("p",[s("strong",[t._v("metadataUrl:")]),t._v(" "),s("code",[t._v("string")]),t._v(" This is the URL where "),s("code",[t._v("model_metadata.json")]),t._v(" file is located. You need to provide a Relative URL here.")]),t._v(" "),s("p",[s("strong",[t._v("callbackFunction:")]),t._v(" Provide a callback function to be executed when the model is loaded. This is where you can start your classification work.")]),t._v(" "),s("h3",{attrs:{id:"returns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#returns"}},[t._v("#")]),t._v(" Returns")]),t._v(" "),s("p",[s("code",[t._v("Array[0]")]),t._v(" Initialized Model\n"),s("code",[t._v("Array[1]")]),t._v(" Response Text data.")]),t._v(" "),s("h2",{attrs:{id:"encode-text-input"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#encode-text-input"}},[t._v("#")]),t._v(" Encode Text Input")]),t._v(" "),s("p",[t._v("Once the model is initialized, you need to encode the text input before parsing it to the model to classify.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" sentence "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello, nice day!'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" encodedSentence "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" bkLabs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nlu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeText")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sentence"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"parameters-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters-2"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),s("p",[s("strong",[t._v("sentence:")]),t._v(" "),s("code",[t._v("string")]),t._v(" Text input to classify.")]),t._v(" "),s("h2",{attrs:{id:"returns-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#returns-2"}},[t._v("#")]),t._v(" Returns")]),t._v(" "),s("p",[s("code",[t._v("Tensor")]),t._v(" Output Tensor.")]),t._v(" "),s("h2",{attrs:{id:"classify-sentence"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#classify-sentence"}},[t._v("#")]),t._v(" Classify Sentence")]),t._v(" "),s("p",[t._v("Once the text input is encoded, pass the encoded tensor to classify input text.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" predictData "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" mymodel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("predict")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("encodedSentence"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"parameters-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters-3"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),s("p",[s("strong",[t._v("encodedSentence")]),t._v(" "),s("code",[t._v("Tensor")]),t._v(" encoded text input")]),t._v(" "),s("h3",{attrs:{id:"returns-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#returns-3"}},[t._v("#")]),t._v(" Returns")]),t._v(" "),s("p",[s("code",[t._v("Tensor")]),t._v(" Prediction result as a Tensor")]),t._v(" "),s("h2",{attrs:{id:"get-a-reply"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-a-reply"}},[t._v("#")]),t._v(" Get a Reply")]),t._v(" "),s("p",[t._v("Now you can get a reply that matches the intent of your input.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" myReply "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" bkLabs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nlu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("predictReply")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("predictData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mymodel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myReply"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"parameters-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters-4"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),s("p",[s("strong",[t._v("predictData")]),t._v(" "),s("code",[t._v("Tensor")]),t._v(" Output Tensor from prediction")]),t._v(" "),s("p",[s("strong",[t._v("mymodel[1]")]),t._v(" "),s("code",[t._v("Array<object>")]),t._v(" Response data extracted earlier when we initialized the model.")]),t._v(" "),s("h3",{attrs:{id:"returns-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#returns-4"}},[t._v("#")]),t._v(" Returns")]),t._v(" "),s("p",[s("code",[t._v("string")]),t._v(" Returns a reply as string.")]),t._v(" "),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("p",[t._v("The final example code will look something like this:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" modelUrl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'file://C:/Projects/my-chatbot/models/model.json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" metadataUrl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'models/model_metadata.json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" sentence "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello, nice day!'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mymodel "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" bkLabs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nlu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadModel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("modelUrl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" metadataUrl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callbackFunction"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("callbackFunction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" encodedSentence "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" bkLabs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nlu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeText")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sentence"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" predictData "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" mymodel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("predict")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("encodedSentence"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" myReply "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" bkLabs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nlu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("predictReply")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("predictData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mymodel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myReply"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Please feel free to "),s("a",{attrs:{href:"https://github.com/BerkeliumLabs/berkelium-dev-kit/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("report a bug"),s("OutboundLink")],1),t._v(" if you find while using "),s("a",{attrs:{href:"https://www.npmjs.com/package/berkelium",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[t._v("berkelium")]),s("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);s.default=n.exports}}]);