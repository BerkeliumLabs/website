(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{351:function(t,s,a){"use strict";a.r(s);var e=a(25),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"utilities"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#utilities"}},[t._v("#")]),t._v(" Utilities")]),t._v(" "),s("p",[t._v("Before using this function, you need to import "),s("code",[t._v("bk_utils")]),t._v(" module.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" bk_utils "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'berkelium/dist/utils/utils.mjs'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("or CommonJS syntax")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" bk_utils "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'berkelium/dist/utils/utils.cjs'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"save"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#save"}},[t._v("#")]),t._v(" Save")]),t._v(" "),s("p",[t._v("This is a utility function used to save a model along with other necessary data. To use save function, use the following code:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("bk_utils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("save")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myModel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dataSet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),s("p",[s("strong",[t._v("myModel")]),t._v(" "),s("code",[t._v("MODEL")]),t._v(" The model object return by "),s("code",[t._v("loadModel")]),t._v(" function.\n"),s("strong",[t._v("dataset")]),t._v(" "),s("code",[t._v("DATASET")]),t._v(" The dataset object return by "),s("code",[t._v("preprocess")]),t._v(" function.")]),t._v(" "),s("h4",{attrs:{id:"returns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#returns"}},[t._v("#")]),t._v(" Returns")]),t._v(" "),s("p",[s("strong",[t._v("none")])]),t._v(" "),s("h2",{attrs:{id:"read"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#read"}},[t._v("#")]),t._v(" Read")]),t._v(" "),s("p",[t._v("This is a utility function used to read files ("),s("code",[t._v(".json")]),t._v(" files). This is used to load training data from "),s("code",[t._v(".json")]),t._v(" files. To use save function, use the following code:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" rawData "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" bk_utils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("read")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pathToFile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"parameters-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters-2"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),s("p",[s("strong",[t._v("pathToFile")]),t._v(" "),s("code",[t._v("string")]),t._v(" Path to "),s("code",[t._v(".json")]),t._v(" file.")]),t._v(" "),s("h4",{attrs:{id:"returns-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#returns-2"}},[t._v("#")]),t._v(" Returns")]),t._v(" "),s("p",[s("strong",[t._v("JSON")]),t._v(" "),s("code",[t._v("JSON")]),t._v(" returns data in JSON format.")])])}),[],!1,null,null,null);s.default=r.exports}}]);