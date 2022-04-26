(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[179],{"./generated-stories-entry.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],module,!1)},"./src/stories/Calculator.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{GroupedRows:function(){return GroupedRows},MultiResults:function(){return MultiResults},Simple:function(){return Simple},default:function(){return Calculator_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),recoil=__webpack_require__("./node_modules/recoil/es/recoil.js"),Operators={ADDITION:"+",SUBTRACTION:"-",MULTIPLICATION:"*",DIVISION:"/",EQUALS:"="},objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),RowIds=(0,recoil.cn)({key:"rowIds",default:[]}),Row=(0,recoil.xu)({key:"row",default:{}}),RowById=(0,recoil.CG)({key:"rowById",get:function get(id){return function(_ref){var get=_ref.get,row=get(Row(id));return getNestedRows(get)(row)}},set:function set(id){return function(_ref2,row){var set=_ref2.set;set(Row(id),row),set(RowIds,(function(rowIds){return rowIds.concat(id)}))}}}),FlatRows=(0,recoil.nZ)({key:"flatRows",get:function get(_ref3){var get=_ref3.get;return get(RowIds).map((function(id){return get(RowById(id))})).map(getNestedRows(get))}}),SiblingRows=((0,recoil.nZ)({key:"nestedRows",get:function get(_ref4){var get=_ref4.get;return get(RowIds).map((function(id){return get(RowById(id))})).filter((function(row){return!row.parent})).map(getNestedRows(get))}}),(0,recoil.CG)({key:"siblingRows",get:function get(id){return function(_ref5){var get=_ref5.get,row=get(Row(id));return row.parent?get(FlatRows).filter((function(r){return r.parent===row.parent})).map(getNestedRows(get)):get(FlatRows).filter((function(r){return!r.parent}))}}}));function getNestedRows(get){return function(row){return(0,objectSpread2.Z)((0,objectSpread2.Z)({},row),Array.isArray(row.rows)&&{rows:row.rows.map(getNestedRows(get))})}}var hooks_useCalculatorRow=function useCalculatorRow(name,initialRow){if(!name)throw new Error("[useCalculatorState] Name is required.");var _useRecoilState=(0,recoil.FV)(RowById(name)),_useRecoilState2=(0,slicedToArray.Z)(_useRecoilState,2),row=_useRecoilState2[0],setRow=_useRecoilState2[1];return(0,react.useEffect)((function(){null!=row&&row.name||setRow(initialRow)}),[setRow,initialRow,null==row?void 0:row.name]),{get value(){var _ref,_row$value;return null!==(_ref=null!==(_row$value=null==row?void 0:row.value)&&void 0!==_row$value?_row$value:initialRow.value)&&void 0!==_ref?_ref:0},setValue:function setValue(value){setRow((function(row){return(0,objectSpread2.Z)((0,objectSpread2.Z)({},row),{},{value:value})}))}}};var CalculateRow=(0,recoil.CG)({key:"calculateRow",get:function get(id){return function(_ref){var get=_ref.get,previousRows=get(PreviousRows(id)).filter((function(row){return row.operator!==Operators.EQUALS}));return 0===previousRows.length?null:previousRows.reduce((function(result,row){if(!row.operator)return row.value;if(Array.isArray(row.rows)){var lastNestedRow=row.rows[row.rows.length-1];return calculate(result,get(CalculateRow(lastNestedRow.name)),row.operator)}return calculate(result,row.value,row.operator)}),null)}}}),PreviousRows=(0,recoil.CG)({key:"previousRows",get:function get(id){return function(_ref2){var rows=(0,_ref2.get)(SiblingRows(id)),rowIndex=rows.findIndex((function(row){return row.name===id}));return rows.filter((function(_,index){return index<rowIndex}))}}});function calculate(a,b,operator){var parsedA=Number(a),parsedB=Number(b);switch(operator){case Operators.ADDITION:return parsedA+parsedB;case Operators.SUBTRACTION:return parsedA-parsedB;case Operators.MULTIPLICATION:return parsedA*parsedB;case Operators.DIVISION:return parsedA/parsedB;default:throw new Error("Unknown operator ".concat(operator))}}var _templateObject,hooks_useCalculatorResult=function useCalculatorResult(name){var previousRows=(0,recoil.sJ)(PreviousRows(name));return{result:(0,recoil.sJ)(CalculateRow(name)),precedingRowNames:previousRows.map((function(row){return row.name}))}},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["label","name"];function Result(_ref){_ref.label;var name=_ref.name,otherProps=(0,objectWithoutProperties.Z)(_ref,_excluded),_useCalculatorResult=hooks_useCalculatorResult(name),result=_useCalculatorResult.result,precedingRowNames=_useCalculatorResult.precedingRowNames;return(0,jsx_runtime.jsx)(Output,(0,objectSpread2.Z)((0,objectSpread2.Z)({name:name,htmlFor:precedingRowNames.join(" ")},otherProps),{},{children:Number.isNaN(result)?null:result}))}var Output=styled_components_browser_esm.ZP.output(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n    display: flex;\n\n    margin: 0;\n    padding: 0;\n    padding-left: 1rem;\n    border: 1px solid black;\n\n    height: 2rem;\n"])));Result.__docgenInfo={description:"",methods:[],displayName:"Result"};var Operand_templateObject,row_Result=Result;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/calculator/row/Result.jsx"]={name:"Result",docgenInfo:Result.__docgenInfo,path:"src/calculator/row/Result.jsx"});var Operand_excluded=["label","name","value","onChange"];function Operand(_ref){_ref.label;var name=_ref.name,value=_ref.value,onChange=_ref.onChange,otherProps=(0,objectWithoutProperties.Z)(_ref,Operand_excluded);return(0,jsx_runtime.jsx)(Input,(0,objectSpread2.Z)({name:name,type:"number",inputMode:"decimal",value:value,onChange:function handleChange(event){console.log("Operand.handleChange"),onChange(event.target.value)}},otherProps))}var Input=styled_components_browser_esm.ZP.input(Operand_templateObject||(Operand_templateObject=(0,taggedTemplateLiteral.Z)(["\n    margin: 0;\n    padding: 0;\n    padding-left: 1rem;\n    border: 1px solid black;\n\n    height: 2rem;\n"])));Operand.__docgenInfo={description:"",methods:[],displayName:"Operand"};var Operator_templateObject,row_Operand=Operand;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/calculator/row/Operand.jsx"]={name:"Operand",docgenInfo:Operand.__docgenInfo,path:"src/calculator/row/Operand.jsx"});var Operator_excluded=["operator"];function Operator(_ref){var operator=_ref.operator,otherProps=(0,objectWithoutProperties.Z)(_ref,Operator_excluded);return(0,jsx_runtime.jsx)(Container,(0,objectSpread2.Z)((0,objectSpread2.Z)({},otherProps),{},{children:getOperator(operator)}))}var Container=styled_components_browser_esm.ZP.span(Operator_templateObject||(Operator_templateObject=(0,taggedTemplateLiteral.Z)(["\n    color: black;\n"])));function getOperator(operator){switch(operator){case"+":return"+";case"-":return"-";case"*":return"×";case"/":return"÷";case"=":return"=";default:return operator}}Operator.__docgenInfo={description:"",methods:[],displayName:"Operator"};var row_Operator=Operator;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/calculator/row/Operator.jsx"]={name:"Operator",docgenInfo:Operator.__docgenInfo,path:"src/calculator/row/Operator.jsx"});var Row_templateObject,row_getLabel=function getLabel(label,value){return"function"==typeof label?label(value):label};function Row_Row(_ref){var name=_ref.name,className=_ref.className,operator=_ref.operator,label=_ref.label,rows=_ref.rows,initialValue=_ref.initialValue,parent=_ref.parent,_useCalculatorRow=hooks_useCalculatorRow(name,{name:name,value:initialValue,operator:operator,rows:rows,parent:parent}),value=_useCalculatorRow.value,setValue=_useCalculatorRow.setValue;return(0,jsx_runtime.jsxs)(Row_Container,{className:className,children:[operator===Operators.EQUALS&&(0,jsx_runtime.jsx)("hr",{}),(0,jsx_runtime.jsxs)("div",{className:"calculator-row",children:[operator?(0,jsx_runtime.jsx)(row_Operator,{operator:operator,className:"operator"}):(0,jsx_runtime.jsx)("span",{className:"operator placeholder",children:" "}),(0,jsx_runtime.jsx)("label",{className:"label",htmlFor:name,children:row_getLabel(label,value)}),Array.isArray(rows)?(0,jsx_runtime.jsx)("div",{className:"calculator-row",children:rows.map((function(row){return(0,jsx_runtime.jsx)(Row_Row,(0,objectSpread2.Z)({initialValue:row.value,className:"row",parent:name},row),row.name)}))}):operator===Operators.EQUALS?(0,jsx_runtime.jsx)(row_Result,{name:name,className:"result"}):(0,jsx_runtime.jsx)(row_Operand,{name:name,value:value,className:"operand",onChange:setValue})]})]})}var Row_Container=styled_components_browser_esm.ZP.div(Row_templateObject||(Row_templateObject=(0,taggedTemplateLiteral.Z)(["\n    > hr {\n        display: block;\n\n        width: 100%;\n        height: 1px;\n\n        border: 0;\n\n        margin: 0.1rem 0 1rem;\n\n        background-color: black;\n    }\n\n    > .calculator-row {\n        display: grid;\n\n        gap: 1rem;\n        grid-template-columns: 2rem 1fr 1fr;\n    }\n"])));Row_Row.__docgenInfo={description:"",methods:[],displayName:"Row"};var row_Row=Row_Row;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/calculator/row/Row.jsx"]={name:"Row",docgenInfo:Row_Row.__docgenInfo,path:"src/calculator/row/Row.jsx"});var Calculator_templateObject,calculator_row=row_Row;function Calculator(_ref){var _ref$rows=_ref.rows,rows=void 0===_ref$rows?[]:_ref$rows;return(0,jsx_runtime.jsx)(recoil.Wh,{children:(0,jsx_runtime.jsx)(Calculator_Container,{children:rows.map((function(row){return(0,jsx_runtime.jsx)(calculator_row,(0,objectSpread2.Z)({initialValue:row.value,className:"row"},row),row.name)}))})})}var Calculator_Container=styled_components_browser_esm.ZP.div(Calculator_templateObject||(Calculator_templateObject=(0,taggedTemplateLiteral.Z)(["\n    display: grid;\n    grid-template-rows: 1fr;\n    row-gap: 1rem;\n\n    margin: 0 auto;\n    padding: 2rem 1rem;\n\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    border-radius: 0.5rem;\n    box-sizing: border-box; \n\n    max-width: 50%;\n"])));Calculator.__docgenInfo={description:"",methods:[],displayName:"Calculator",props:{rows:{defaultValue:{value:"[]",computed:!1},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/calculator/Calculator.jsx"]={name:"Calculator",docgenInfo:Calculator.__docgenInfo,path:"src/calculator/Calculator.jsx"});var calculator=Calculator,Calculator_stories={title:"Calculator",component:calculator};function Template(args){return(0,jsx_runtime.jsx)(calculator,(0,objectSpread2.Z)({},args))}var Simple=Template.bind({});Simple.args={rows:[{name:"a",label:"Initial value",value:5},{name:"b",label:function label(value){return"Add ".concat(value)},operator:"+",value:1},{name:"c",label:function label(value){return"Multiply by ".concat(value)},operator:"*",value:4},{name:"d",label:function label(value){return"Divide by ".concat(value)},operator:"/",value:2},{name:"e",label:function label(value){return"Subtract ".concat(value)},operator:"-",value:2},{name:"result",label:"Result",operator:"="}]};var MultiResults=Template.bind({});MultiResults.args={rows:[{name:"a",label:"Initial value",value:5},{name:"c",label:"Multiply",operator:"*",value:2},{name:"result1",label:"Result 1",operator:"="},{name:"d",label:"Divide",operator:"/",value:2},{name:"e",label:"Subtract",operator:"-",value:2},{name:"result2",label:"Result 2",operator:"="}]};var GroupedRows=Template.bind({});GroupedRows.args={rows:[{name:"a",label:"Initial value",value:5},{name:"b",label:"Subtract",operator:"-",value:2},{name:"first-result",label:"First Result",operator:"="},{name:"c",label:"Multiply",operator:"*",rows:[{name:"c.a",label:"Initial value",value:7},{name:"c.b",label:"Subtract",operator:"-",value:2},{name:"result-embedded",label:"Embedded result",operator:"="}]},{name:"result",label:"Result",operator:"="}]},Simple.parameters=(0,objectSpread2.Z)({storySource:{source:"Template.bind({})"}},Simple.parameters),MultiResults.parameters=(0,objectSpread2.Z)({storySource:{source:"Template.bind({})"}},MultiResults.parameters),GroupedRows.parameters=(0,objectSpread2.Z)({storySource:{source:"Template.bind({})"}},GroupedRows.parameters)},"./.storybook/preview.js-generated-config-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{parameters:function(){return parameters}});var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.kg.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":function(module,__unused_webpack_exports,__webpack_require__){var map={"./stories/Calculator.stories.jsx":"./src/stories/Calculator.stories.jsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$",module.exports=webpackEmptyContext},"./storybook-init-framework-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"?4f7e":function(){}},function(__webpack_require__){var __webpack_exec__=function(moduleId){return __webpack_require__(__webpack_require__.s=moduleId)};__webpack_require__.O(0,[480],(function(){return __webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-interactions/dist/esm/preset/argsEnhancers.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.js")}));__webpack_require__.O()}]);