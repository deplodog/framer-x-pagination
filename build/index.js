(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("framer"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["framer", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("framer"), require("react")) : factory(root["Framer"], root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_framer__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		try { modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); } catch (error) { module.exports = { error } }
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// asset url
/******/ 	var __module_i = eval("typeof module !== 'undefined' ? module.i : ''");
/******/ 	var __framer_package = (/(node_modules[/].*)[/]build.index.js/.exec(__module_i) || [])[1]
/******/ 	function __asset_url__(src) { return __WEBPACK_EXTERNAL_MODULE_framer__.serverURL(__framer_package, src) };
/******/ 	installedModules['framer/resource'] = { i: 'framer/resource', l: true, exports: { url: __asset_url__ } };
/******/
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./package.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./code sync recursive \\.(t|j)s(x?)|\\.css$":
/*!***************************************!*\
  !*** ./code sync \.(t|j)s(x?)|\.css$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Examples.ts": "./code/Examples.ts",
	"./Pagination.tsx": "./code/Pagination.tsx",
	"./canvas.tsx": "./code/canvas.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./code sync recursive \\.(t|j)s(x?)|\\.css$";

/***/ }),

/***/ "./code/Examples.ts":
/*!**************************!*\
  !*** ./code/Examples.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst framer_1 = __webpack_require__(/*! framer */ \"framer\");\nconst data = framer_1.Data({ toggle: true, scale: framer_1.Animatable(1), opacity: framer_1.Animatable(1), rotation: framer_1.Animatable(0) });\nexports.Scale = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        scale: data.scale,\n        onTap() {\n            window[\"__checkBudget__\"]();\n            data.scale.set(0.6);\n            framer_1.animate.spring(data.scale, 1);\n        },\n    };\n};\nexports.Rotate = props => {\n    window[\"__checkBudget__\"]();\n    data.rotation.set(props.rotation);\n    return {\n        rotation: data.rotation,\n        onTap() {\n            window[\"__checkBudget__\"]();\n            framer_1.animate.spring(data.rotation, data.rotation.get() + 90, {\n                tension: 250,\n                friction: 20,\n            });\n        },\n    };\n};\nexports.Fade = props => {\n    window[\"__checkBudget__\"]();\n    data.opacity.set(props.opacity);\n    return {\n        opacity: data.opacity,\n        onTap() {\n            window[\"__checkBudget__\"]();\n            framer_1.animate.linear(data.opacity, 0, 0.2);\n        },\n    };\n};\nexports.SwitchOutput = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        opacity: data.opacity,\n        rotation: data.rotation,\n    };\n};\nexports.SwitchInput = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        onTap() {\n            window[\"__checkBudget__\"]();\n            const toggle = data.toggle;\n            framer_1.animate.spring({ opacity: data.opacity, rotation: data.rotation }, {\n                opacity: toggle ? 0.5 : 1,\n                rotation: toggle ? 360 : 0,\n            }, { tension: 200, friction: 20 });\n            data.toggle = !toggle;\n        },\n    };\n};\nexports.__info__ = [{ name: \"Scale\", type: \"override\" }, { name: \"Rotate\", type: \"override\" }, { name: \"Fade\", type: \"override\" }, { name: \"SwitchOutput\", type: \"override\" }, { name: \"SwitchInput\", type: \"override\" }];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL0V4YW1wbGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSw0QkFBNEIsaUhBQWlIO0FBQzdJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsaURBQWlEO0FBQ3RGO0FBQ0E7QUFDQSxhQUFhLEdBQUcsNkJBQTZCO0FBQzdDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxxQkFBcUIsa0NBQWtDLEdBQUcsbUNBQW1DLEdBQUcsaUNBQWlDLEdBQUcseUNBQXlDLEdBQUcsd0NBQXdDIiwiZmlsZSI6Ii4vY29kZS9FeGFtcGxlcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgZnJhbWVyXzEgPSByZXF1aXJlKFwiZnJhbWVyXCIpO1xuY29uc3QgZGF0YSA9IGZyYW1lcl8xLkRhdGEoeyB0b2dnbGU6IHRydWUsIHNjYWxlOiBmcmFtZXJfMS5BbmltYXRhYmxlKDEpLCBvcGFjaXR5OiBmcmFtZXJfMS5BbmltYXRhYmxlKDEpLCByb3RhdGlvbjogZnJhbWVyXzEuQW5pbWF0YWJsZSgwKSB9KTtcbmV4cG9ydHMuU2NhbGUgPSAoKSA9PiB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2NhbGU6IGRhdGEuc2NhbGUsXG4gICAgICAgIG9uVGFwKCkge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICBkYXRhLnNjYWxlLnNldCgwLjYpO1xuICAgICAgICAgICAgZnJhbWVyXzEuYW5pbWF0ZS5zcHJpbmcoZGF0YS5zY2FsZSwgMSk7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5leHBvcnRzLlJvdGF0ZSA9IHByb3BzID0+IHtcbiAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICBkYXRhLnJvdGF0aW9uLnNldChwcm9wcy5yb3RhdGlvbik7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcm90YXRpb246IGRhdGEucm90YXRpb24sXG4gICAgICAgIG9uVGFwKCkge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICBmcmFtZXJfMS5hbmltYXRlLnNwcmluZyhkYXRhLnJvdGF0aW9uLCBkYXRhLnJvdGF0aW9uLmdldCgpICsgOTAsIHtcbiAgICAgICAgICAgICAgICB0ZW5zaW9uOiAyNTAsXG4gICAgICAgICAgICAgICAgZnJpY3Rpb246IDIwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5leHBvcnRzLkZhZGUgPSBwcm9wcyA9PiB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgZGF0YS5vcGFjaXR5LnNldChwcm9wcy5vcGFjaXR5KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvcGFjaXR5OiBkYXRhLm9wYWNpdHksXG4gICAgICAgIG9uVGFwKCkge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICBmcmFtZXJfMS5hbmltYXRlLmxpbmVhcihkYXRhLm9wYWNpdHksIDAsIDAuMik7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5leHBvcnRzLlN3aXRjaE91dHB1dCA9ICgpID0+IHtcbiAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvcGFjaXR5OiBkYXRhLm9wYWNpdHksXG4gICAgICAgIHJvdGF0aW9uOiBkYXRhLnJvdGF0aW9uLFxuICAgIH07XG59O1xuZXhwb3J0cy5Td2l0Y2hJbnB1dCA9ICgpID0+IHtcbiAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvblRhcCgpIHtcbiAgICAgICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICAgICAgY29uc3QgdG9nZ2xlID0gZGF0YS50b2dnbGU7XG4gICAgICAgICAgICBmcmFtZXJfMS5hbmltYXRlLnNwcmluZyh7IG9wYWNpdHk6IGRhdGEub3BhY2l0eSwgcm90YXRpb246IGRhdGEucm90YXRpb24gfSwge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IHRvZ2dsZSA/IDAuNSA6IDEsXG4gICAgICAgICAgICAgICAgcm90YXRpb246IHRvZ2dsZSA/IDM2MCA6IDAsXG4gICAgICAgICAgICB9LCB7IHRlbnNpb246IDIwMCwgZnJpY3Rpb246IDIwIH0pO1xuICAgICAgICAgICAgZGF0YS50b2dnbGUgPSAhdG9nZ2xlO1xuICAgICAgICB9LFxuICAgIH07XG59O1xuZXhwb3J0cy5fX2luZm9fXyA9IFt7IG5hbWU6IFwiU2NhbGVcIiwgdHlwZTogXCJvdmVycmlkZVwiIH0sIHsgbmFtZTogXCJSb3RhdGVcIiwgdHlwZTogXCJvdmVycmlkZVwiIH0sIHsgbmFtZTogXCJGYWRlXCIsIHR5cGU6IFwib3ZlcnJpZGVcIiB9LCB7IG5hbWU6IFwiU3dpdGNoT3V0cHV0XCIsIHR5cGU6IFwib3ZlcnJpZGVcIiB9LCB7IG5hbWU6IFwiU3dpdGNoSW5wdXRcIiwgdHlwZTogXCJvdmVycmlkZVwiIH1dO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./code/Examples.ts\n");

/***/ }),

/***/ "./code/Pagination.tsx":
/*!*****************************!*\
  !*** ./code/Pagination.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nconst framer_1 = __webpack_require__(/*! framer */ \"framer\");\nclass Pagination extends React.Component {\n    render() {\n        window[\"__checkBudget__\"]();\n        var paginatorArray = [];\n        var tempColor = \"#000000\";\n        var tempFontColor = \"#000000\";\n        var neighbours = 1 + this.props.neighboursCount;\n        var title = \"\";\n        for (var i = 0; i < this.props.pagesCount; i++) {\n            window[\"__checkBudget__\"]();\n            if ((i == 0) || (i == this.props.pagesCount - 1) || ((i >= this.props.currentPage - 1 - neighbours) && (i <= this.props.currentPage - 1 + neighbours))) {\n                if (i == (this.props.currentPage - 1)) {\n                    tempColor = this.props.currentBgColor;\n                    tempFontColor = this.props.currentColor;\n                }\n                else {\n                    tempColor = this.props.bgColor;\n                    tempFontColor = this.props.fontColor;\n                }\n                if ((i == this.props.currentPage - 1 - neighbours) && (i !== 0)) {\n                    title = \"...\";\n                }\n                else if ((i == this.props.currentPage - 1 + neighbours) && (i !== this.props.pagesCount - 1)) {\n                    title = \"...\";\n                }\n                else {\n                    title = i + 1;\n                }\n                paginatorArray.push(React.createElement(\"button\", { type: \"button\", className: \"square\", key: i, style: { borderStyle: \"solid\", borderWidth: this.props.borderSize, borderColor: this.props.borderColor, borderRadius: this.props.borderRadius, color: tempFontColor, background: tempColor, minWidth: this.props.size, fontSize: this.props.fontSize, minHeight: this.props.size, margin: this.props.margin } }, title));\n            }\n        }\n        return React.createElement(\"div\", { style: { textAlign: this.props.align } }, paginatorArray);\n    }\n}\n// Set default properties\nPagination.defaultProps = {\n    //Default width\n    width: 192,\n    //Default height\n    height: 32,\n    //Total number of the pages\n    pagesCount: 17,\n    //Current page index\n    currentPage: 1,\n    //How many pages will be shown near the current page\n    neighboursCount: 3,\n    //Size of the cells;\n    size: 32,\n    //Font size of the cells\n    fontSize: 12,\n    //Margin between the pages\n    margin: 0,\n    //Background color of the cells\n    bgColor: \"#000000\",\n    //Font color of the cells\n    fontColor: \"#ffffff\",\n    //Component alignment\n    align: \"Center\",\n    //Border radius of the cells\n    borderSize: 0,\n    //Border color of the cells\n    borderColor: \"rgba(0,0,0,0)\",\n    //Background color of the current cell\n    currentBgColor: \"#479BFA\",\n    //Font color of the current cells\n    currentColor: \"#ffffff\",\n    //Radius of the cells\n    borderRadius: 0\n};\nPagination.propertyControls = {\n    pagesCount: { type: framer_1.ControlType.Number, title: \"Pages\", min: 1, max: 99 },\n    currentPage: { type: framer_1.ControlType.Number, max: 99, title: \"Current\", min: 0, max: 99 },\n    neighboursCount: { type: framer_1.ControlType.Number, title: \"Neighbours\", min: 0, max: 100 },\n    margin: { type: framer_1.ControlType.Number, title: \"Margin\", min: 0 },\n    align: {\n        type: framer_1.ControlType.SegmentedEnum,\n        title: \"Align\",\n        options: [\"Left\", \"Center\", \"Right\"],\n    },\n    fontSize: { type: framer_1.ControlType.Number, title: \"Font Size\", min: 4, max: 96 },\n    fontColor: { type: framer_1.ControlType.Color, title: \"Font Color\" },\n    currentColor: { type: framer_1.ControlType.Color, title: \"Curr. Font Color\" },\n    size: { type: framer_1.ControlType.Number, title: \"Cell Size\", min: 8 },\n    bgColor: { type: framer_1.ControlType.Color, title: \"Cell Color\" },\n    currentBgColor: { type: framer_1.ControlType.Color, title: \"Curr. Color\" },\n    borderColor: { type: framer_1.ControlType.Color, title: \"Border Color\" },\n    borderSize: { type: framer_1.ControlType.Number, title: \"Border Size\", max: 2, min: 0, step: 0.5 },\n    borderRadius: { type: framer_1.ControlType.Number, title: \"Radius\", min: 0 }\n};\nexports.Pagination = Pagination;\nexports.__info__ = [{ name: \"Pagination\", children: false, type: \"component\" }];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL1BhZ2luYXRpb24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMkJBQTJCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FLHNEQUFzRCxxU0FBcVMsRUFBRTtBQUNoYTtBQUNBO0FBQ0EsMkNBQTJDLFNBQVMsOEJBQThCLEVBQUU7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixxRUFBcUU7QUFDdEYsa0JBQWtCLGdGQUFnRjtBQUNsRyxzQkFBc0IsMkVBQTJFO0FBQ2pHLGFBQWEsNkRBQTZEO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGVBQWUseUVBQXlFO0FBQ3hGLGdCQUFnQix3REFBd0Q7QUFDeEUsbUJBQW1CLDhEQUE4RDtBQUNqRixXQUFXLGdFQUFnRTtBQUMzRSxjQUFjLHdEQUF3RDtBQUN0RSxxQkFBcUIseURBQXlEO0FBQzlFLGtCQUFrQiwwREFBMEQ7QUFDNUUsaUJBQWlCLHFGQUFxRjtBQUN0RyxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLHFCQUFxQix5REFBeUQiLCJmaWxlIjoiLi9jb2RlL1BhZ2luYXRpb24udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbmNvbnN0IGZyYW1lcl8xID0gcmVxdWlyZShcImZyYW1lclwiKTtcbmNsYXNzIFBhZ2luYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgIHZhciBwYWdpbmF0b3JBcnJheSA9IFtdO1xuICAgICAgICB2YXIgdGVtcENvbG9yID0gXCIjMDAwMDAwXCI7XG4gICAgICAgIHZhciB0ZW1wRm9udENvbG9yID0gXCIjMDAwMDAwXCI7XG4gICAgICAgIHZhciBuZWlnaGJvdXJzID0gMSArIHRoaXMucHJvcHMubmVpZ2hib3Vyc0NvdW50O1xuICAgICAgICB2YXIgdGl0bGUgPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJvcHMucGFnZXNDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICAgICAgICAgIGlmICgoaSA9PSAwKSB8fCAoaSA9PSB0aGlzLnByb3BzLnBhZ2VzQ291bnQgLSAxKSB8fCAoKGkgPj0gdGhpcy5wcm9wcy5jdXJyZW50UGFnZSAtIDEgLSBuZWlnaGJvdXJzKSAmJiAoaSA8PSB0aGlzLnByb3BzLmN1cnJlbnRQYWdlIC0gMSArIG5laWdoYm91cnMpKSkge1xuICAgICAgICAgICAgICAgIGlmIChpID09ICh0aGlzLnByb3BzLmN1cnJlbnRQYWdlIC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcENvbG9yID0gdGhpcy5wcm9wcy5jdXJyZW50QmdDb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgdGVtcEZvbnRDb2xvciA9IHRoaXMucHJvcHMuY3VycmVudENvbG9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcENvbG9yID0gdGhpcy5wcm9wcy5iZ0NvbG9yO1xuICAgICAgICAgICAgICAgICAgICB0ZW1wRm9udENvbG9yID0gdGhpcy5wcm9wcy5mb250Q29sb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgoaSA9PSB0aGlzLnByb3BzLmN1cnJlbnRQYWdlIC0gMSAtIG5laWdoYm91cnMpICYmIChpICE9PSAwKSkge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZSA9IFwiLi4uXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKChpID09IHRoaXMucHJvcHMuY3VycmVudFBhZ2UgLSAxICsgbmVpZ2hib3VycykgJiYgKGkgIT09IHRoaXMucHJvcHMucGFnZXNDb3VudCAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlID0gXCIuLi5cIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlID0gaSArIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhZ2luYXRvckFycmF5LnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IHR5cGU6IFwiYnV0dG9uXCIsIGNsYXNzTmFtZTogXCJzcXVhcmVcIiwga2V5OiBpLCBzdHlsZTogeyBib3JkZXJTdHlsZTogXCJzb2xpZFwiLCBib3JkZXJXaWR0aDogdGhpcy5wcm9wcy5ib3JkZXJTaXplLCBib3JkZXJDb2xvcjogdGhpcy5wcm9wcy5ib3JkZXJDb2xvciwgYm9yZGVyUmFkaXVzOiB0aGlzLnByb3BzLmJvcmRlclJhZGl1cywgY29sb3I6IHRlbXBGb250Q29sb3IsIGJhY2tncm91bmQ6IHRlbXBDb2xvciwgbWluV2lkdGg6IHRoaXMucHJvcHMuc2l6ZSwgZm9udFNpemU6IHRoaXMucHJvcHMuZm9udFNpemUsIG1pbkhlaWdodDogdGhpcy5wcm9wcy5zaXplLCBtYXJnaW46IHRoaXMucHJvcHMubWFyZ2luIH0gfSwgdGl0bGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IHRleHRBbGlnbjogdGhpcy5wcm9wcy5hbGlnbiB9IH0sIHBhZ2luYXRvckFycmF5KTtcbiAgICB9XG59XG4vLyBTZXQgZGVmYXVsdCBwcm9wZXJ0aWVzXG5QYWdpbmF0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgICAvL0RlZmF1bHQgd2lkdGhcbiAgICB3aWR0aDogMTkyLFxuICAgIC8vRGVmYXVsdCBoZWlnaHRcbiAgICBoZWlnaHQ6IDMyLFxuICAgIC8vVG90YWwgbnVtYmVyIG9mIHRoZSBwYWdlc1xuICAgIHBhZ2VzQ291bnQ6IDE3LFxuICAgIC8vQ3VycmVudCBwYWdlIGluZGV4XG4gICAgY3VycmVudFBhZ2U6IDEsXG4gICAgLy9Ib3cgbWFueSBwYWdlcyB3aWxsIGJlIHNob3duIG5lYXIgdGhlIGN1cnJlbnQgcGFnZVxuICAgIG5laWdoYm91cnNDb3VudDogMyxcbiAgICAvL1NpemUgb2YgdGhlIGNlbGxzO1xuICAgIHNpemU6IDMyLFxuICAgIC8vRm9udCBzaXplIG9mIHRoZSBjZWxsc1xuICAgIGZvbnRTaXplOiAxMixcbiAgICAvL01hcmdpbiBiZXR3ZWVuIHRoZSBwYWdlc1xuICAgIG1hcmdpbjogMCxcbiAgICAvL0JhY2tncm91bmQgY29sb3Igb2YgdGhlIGNlbGxzXG4gICAgYmdDb2xvcjogXCIjMDAwMDAwXCIsXG4gICAgLy9Gb250IGNvbG9yIG9mIHRoZSBjZWxsc1xuICAgIGZvbnRDb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgLy9Db21wb25lbnQgYWxpZ25tZW50XG4gICAgYWxpZ246IFwiQ2VudGVyXCIsXG4gICAgLy9Cb3JkZXIgcmFkaXVzIG9mIHRoZSBjZWxsc1xuICAgIGJvcmRlclNpemU6IDAsXG4gICAgLy9Cb3JkZXIgY29sb3Igb2YgdGhlIGNlbGxzXG4gICAgYm9yZGVyQ29sb3I6IFwicmdiYSgwLDAsMCwwKVwiLFxuICAgIC8vQmFja2dyb3VuZCBjb2xvciBvZiB0aGUgY3VycmVudCBjZWxsXG4gICAgY3VycmVudEJnQ29sb3I6IFwiIzQ3OUJGQVwiLFxuICAgIC8vRm9udCBjb2xvciBvZiB0aGUgY3VycmVudCBjZWxsc1xuICAgIGN1cnJlbnRDb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgLy9SYWRpdXMgb2YgdGhlIGNlbGxzXG4gICAgYm9yZGVyUmFkaXVzOiAwXG59O1xuUGFnaW5hdGlvbi5wcm9wZXJ0eUNvbnRyb2xzID0ge1xuICAgIHBhZ2VzQ291bnQ6IHsgdHlwZTogZnJhbWVyXzEuQ29udHJvbFR5cGUuTnVtYmVyLCB0aXRsZTogXCJQYWdlc1wiLCBtaW46IDEsIG1heDogOTkgfSxcbiAgICBjdXJyZW50UGFnZTogeyB0eXBlOiBmcmFtZXJfMS5Db250cm9sVHlwZS5OdW1iZXIsIG1heDogOTksIHRpdGxlOiBcIkN1cnJlbnRcIiwgbWluOiAwLCBtYXg6IDk5IH0sXG4gICAgbmVpZ2hib3Vyc0NvdW50OiB7IHR5cGU6IGZyYW1lcl8xLkNvbnRyb2xUeXBlLk51bWJlciwgdGl0bGU6IFwiTmVpZ2hib3Vyc1wiLCBtaW46IDAsIG1heDogMTAwIH0sXG4gICAgbWFyZ2luOiB7IHR5cGU6IGZyYW1lcl8xLkNvbnRyb2xUeXBlLk51bWJlciwgdGl0bGU6IFwiTWFyZ2luXCIsIG1pbjogMCB9LFxuICAgIGFsaWduOiB7XG4gICAgICAgIHR5cGU6IGZyYW1lcl8xLkNvbnRyb2xUeXBlLlNlZ21lbnRlZEVudW0sXG4gICAgICAgIHRpdGxlOiBcIkFsaWduXCIsXG4gICAgICAgIG9wdGlvbnM6IFtcIkxlZnRcIiwgXCJDZW50ZXJcIiwgXCJSaWdodFwiXSxcbiAgICB9LFxuICAgIGZvbnRTaXplOiB7IHR5cGU6IGZyYW1lcl8xLkNvbnRyb2xUeXBlLk51bWJlciwgdGl0bGU6IFwiRm9udCBTaXplXCIsIG1pbjogNCwgbWF4OiA5NiB9LFxuICAgIGZvbnRDb2xvcjogeyB0eXBlOiBmcmFtZXJfMS5Db250cm9sVHlwZS5Db2xvciwgdGl0bGU6IFwiRm9udCBDb2xvclwiIH0sXG4gICAgY3VycmVudENvbG9yOiB7IHR5cGU6IGZyYW1lcl8xLkNvbnRyb2xUeXBlLkNvbG9yLCB0aXRsZTogXCJDdXJyLiBGb250IENvbG9yXCIgfSxcbiAgICBzaXplOiB7IHR5cGU6IGZyYW1lcl8xLkNvbnRyb2xUeXBlLk51bWJlciwgdGl0bGU6IFwiQ2VsbCBTaXplXCIsIG1pbjogOCB9LFxuICAgIGJnQ29sb3I6IHsgdHlwZTogZnJhbWVyXzEuQ29udHJvbFR5cGUuQ29sb3IsIHRpdGxlOiBcIkNlbGwgQ29sb3JcIiB9LFxuICAgIGN1cnJlbnRCZ0NvbG9yOiB7IHR5cGU6IGZyYW1lcl8xLkNvbnRyb2xUeXBlLkNvbG9yLCB0aXRsZTogXCJDdXJyLiBDb2xvclwiIH0sXG4gICAgYm9yZGVyQ29sb3I6IHsgdHlwZTogZnJhbWVyXzEuQ29udHJvbFR5cGUuQ29sb3IsIHRpdGxlOiBcIkJvcmRlciBDb2xvclwiIH0sXG4gICAgYm9yZGVyU2l6ZTogeyB0eXBlOiBmcmFtZXJfMS5Db250cm9sVHlwZS5OdW1iZXIsIHRpdGxlOiBcIkJvcmRlciBTaXplXCIsIG1heDogMiwgbWluOiAwLCBzdGVwOiAwLjUgfSxcbiAgICBib3JkZXJSYWRpdXM6IHsgdHlwZTogZnJhbWVyXzEuQ29udHJvbFR5cGUuTnVtYmVyLCB0aXRsZTogXCJSYWRpdXNcIiwgbWluOiAwIH1cbn07XG5leHBvcnRzLlBhZ2luYXRpb24gPSBQYWdpbmF0aW9uO1xuZXhwb3J0cy5fX2luZm9fXyA9IFt7IG5hbWU6IFwiUGFnaW5hdGlvblwiLCBjaGlsZHJlbjogZmFsc2UsIHR5cGU6IFwiY29tcG9uZW50XCIgfV07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./code/Pagination.tsx\n");

/***/ }),

/***/ "./code/canvas.tsx":
/*!*************************!*\
  !*** ./code/canvas.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// WARNING: this file is auto generated, any changes will be lost
const framer_1 = __webpack_require__(/*! framer */ "framer");
const canvas = framer_1.CanvasStore.shared({"children":[]});


/***/ }),

/***/ "./package.js":
/*!********************!*\
  !*** ./package.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// The template for the dynamic webpack entry. Be aware of the variables

const packageJson = __webpack_require__(/*! ./package.json */ "./package.json")

const package = {
    packageJson,
    sourceModules: {},
    dependencies: {},
}

// This is a special webpack thing that watches the whole directory
// https://github.com/webpack/docs/wiki/context
const ctx = __webpack_require__("./code sync recursive \\.(t|j)s(x?)|\\.css$")

ctx.keys().forEach(key => {
    package.sourceModules[key] = () => ctx(key)
})

// The packages are passed in through a template
const packages = {}

                packages["framer"] = () => {
                    var package = {}
                    try {
                        package = __webpack_require__(/*! framer */ "framer")
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"name":"framer","version":"0.8.0","main":"build/framer.js","types":"build/framer.d.ts","author":"Framer","license":"MIT","devDependencies":{"@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/node":"^9.6.0","@types/react":"16.3.12","@types/react-dom":"^16.0.5","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","dts-bundle":"^0.7.3","enzyme":"^3.3.0","enzyme-adapter-react-16":"^1.1.1","fork-ts-checker-webpack-plugin":"^0.4.1","hoist-non-react-statics":"^2.5.0","jest":"^23.1.0","jest-diff":"^22.0.3","jest-junit":"^3.4.1","progress-bar-webpack-plugin":"^1.11.0","raf":"^3.4.0","react":"^16.3.2","react-dev-utils":"^5.0.1","react-dom":"^16.3.2","ts-jest":"^22.4.5","ts-loader":"^4.1.0","tslint":"^5.10.0","tslint-microsoft-contrib":"^5.0.3","typescript":"^3.0.1","watch":"^1.0.2","webpack":"^4.4.1","webpack-cli":"^2.0.13","webpack-dev-server":"^3.1.4","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.3.2","react-dom":"^16.3.2"},"dependencies":{"draft-js":"0.10.4","eventemitter3":"^3.1.0","hsluv":"^0.0.3","immutable":"^3.8.2"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page","children":true},{"name":"Stack"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneX","type":"device"},{"name":"FramerGoogleNexus4","type":"device"},{"name":"FramerGoogleNexus5X","type":"device"},{"name":"FramerGoogleNexus6","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerHTCOneA9","type":"device"},{"name":"FramerMicrosoftLumia950","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS8","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"}]},"scripts":{"coverage":"jest --config jest.json --coverage","test":"jest --config jest.json","watch":"jest --config jest.json --watch"}}
                    return package
                }

package.dependencies = packages

exports.__framer__ = package


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, license, devDependencies, peerDependencies, framer, author, dependencies, name, version, keywords, default */
/***/ (function(module) {

module.exports = {"main":"build/index.js","license":"MIT","devDependencies":{"@types/react":"^16.0.31","framer":"^0.8.0"},"peerDependencies":{"framer":"^0.8.0","react":"^16.3.0","react-dom":"^16.3.0"},"framer":{"id":"68022143-2b52-4215-95ae-cea8430d22e4","displayName":"Pagination"},"author":"Alexander Nasennik","dependencies":{},"name":"@framer/deplodog.pagination","version":"1.2.0","keywords":["pagination","page","navigation","numbers","list","menu","component","control"]};

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});