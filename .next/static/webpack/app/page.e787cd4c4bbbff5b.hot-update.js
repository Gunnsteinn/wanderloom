"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/common/NavBar.tsx":
/*!******************************************!*\
  !*** ./src/components/common/NavBar.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_X_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=X!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/x.js\");\n/* harmony import */ var _MainButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainButton */ \"(app-pages-browser)/./src/components/common/MainButton.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction NavBar() {\n    _s();\n    const [menu, setMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleMenu = ()=>{\n        setMenu(!menu);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"md:sticky md:top-0   md:shadow-none z-20 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" hidden lg:block animate-in fade-in zoom-in  p-4 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/images/logo.png\",\n                                alt: \"logo\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Workspace\\\\tromen-tech\\\\wanderloom\\\\src\\\\components\\\\common\\\\NavBar.tsx\",\n                                lineNumber: 20,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Workspace\\\\tromen-tech\\\\wanderloom\\\\src\\\\components\\\\common\\\\NavBar.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex gap-[20px] xl:gap-[50px] text-[16px] items-center select-none\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"hover:text-primary text-navText font-[600] cursor-pointer flex items-center gap-2\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"/#home\",\n                                        children: \"Home\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Workspace\\\\tromen-tech\\\\wanderloom\\\\src\\\\components\\\\common\\\\NavBar.tsx\",\n                                        lineNumber: 26,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Workspace\\\\tromen-tech\\\\wanderloom\\\\src\\\\components\\\\common\\\\NavBar.tsx\",\n                                    lineNumber: 23,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"hover:text-primary text-navText font-[600] cursor-pointer flex items-center gap-2\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"/#productos\",\n                                        children: \"Products\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Workspace\\\\tromen-tech\\\\wanderloom\\\\src\\\\components\\\\common\\\\NavBar.tsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Workspace\\\\tromen-tech\\\\wanderloom\\\\src\\\\components\\\\common\\\\NavBar.tsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"hover:text-primary text-navText font-[600] cursor-pointer flex items-center gap-2\",\n                                    children: \"About\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Workspace\\\\tromen-tech\\\\wanderloom\\\\src\\\\components\\\\common\\\\NavBar.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"hover:text-primary text-navText font-[600] cursor-pointer flex items-center gap-2\",\n                                    children: \"Flights\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Workspace\\\\tromen-tech\\\\wanderloom\\\\src\\\\components\\\\common\\\\NavBar.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"hover:text-primary text-navText font-[600] cursor-pointer flex items-center gap-2\",\n                                    children: \"Bookings\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Workspace\\\\tromen-tech\\\\wanderloom\\\\src\\\\components\\\\common\\\\NavBar.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex gap-2 items-center cursor-pointer\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"font-[700]\",\n                                            children: \"EN\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Workspace\\\\tromen-tech\\\\wanderloom\\\\src\\\\components\\\\common\\\\NavBar.tsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: \"/images/chevron-down.png\",\n                                                alt: \"chevron down\"\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\Workspace\\\\tromen-tech\\\\wanderloom\\\\src\\\\components\\\\common\\\\NavBar.tsx\",\n                                                lineNumber: 64,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Workspace\\\\tromen-tech\\\\wanderloom\\\\src\\\\components\\\\common\\\\NavBar.tsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"E:\\\\Workspace\\\\tromen-tech\\\\wanderloom\\\\src\\\\components\\\\common\\\\NavBar.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\Workspace\\\\tromen-tech\\\\wanderloom\\\\src\\\\components\\\\common\\\\NavBar.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Workspace\\\\tromen-tech\\\\wanderloom\\\\src\\\\components\\\\common\\\\NavBar.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\Workspace\\\\tromen-tech\\\\wanderloom\\\\src\\\\components\\\\common\\\\NavBar.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" block lg:hidden shadow-sm  fixed top-0 w-full z-[999]   py-4 animate-in fade-in zoom-in  \".concat(menu ? \" bg-primary py-2\" : \"bg-white\", \" \"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between mx-[10px]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex gap-[50px] text-[16px] items-center select-none\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/images/logo.png\",\n                                    alt: \"logo\",\n                                    className: \"w-[7rem]\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Workspace\\\\tromen-tech\\\\wanderloom\\\\src\\\\components\\\\common\\\\NavBar.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Workspace\\\\tromen-tech\\\\wanderloom\\\\src\\\\components\\\\common\\\\NavBar.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center gap-[40px]\",\n                                children: menu ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_X_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    className: \"cursor-pointer animate-in fade-in zoom-in text-black\",\n                                    onClick: toggleMenu\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Workspace\\\\tromen-tech\\\\wanderloom\\\\src\\\\components\\\\common\\\\NavBar.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 15\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/images/hamburger.svg\",\n                                    alt: \"logo\",\n                                    className: \"cursor-pointer animate-in fade-in zoom-in\",\n                                    onClick: toggleMenu\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Workspace\\\\tromen-tech\\\\wanderloom\\\\src\\\\components\\\\common\\\\NavBar.tsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Workspace\\\\tromen-tech\\\\wanderloom\\\\src\\\\components\\\\common\\\\NavBar.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\Workspace\\\\tromen-tech\\\\wanderloom\\\\src\\\\components\\\\common\\\\NavBar.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this),\n                    menu ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"my-8 select-none animate-in slide-in-from-right \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col gap-8 mt-8 mx-4 \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex gap-[20px] xl:gap-[50px] text-[16px] flex-col select-none \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"hover:text-white text-navText font-[600] cursor-pointer flex items-center gap-2\",\n                                        children: \"Destinations\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Workspace\\\\tromen-tech\\\\wanderloom\\\\src\\\\components\\\\common\\\\NavBar.tsx\",\n                                        lineNumber: 100,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"hover:text-white text-navText font-[600] cursor-pointer flex items-center gap-2\",\n                                        children: \"Hotels\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Workspace\\\\tromen-tech\\\\wanderloom\\\\src\\\\components\\\\common\\\\NavBar.tsx\",\n                                        lineNumber: 105,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"hover:text-white text-navText font-[600] cursor-pointer flex items-center gap-2\",\n                                        children: \"Flights\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Workspace\\\\tromen-tech\\\\wanderloom\\\\src\\\\components\\\\common\\\\NavBar.tsx\",\n                                        lineNumber: 110,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"hover:text-white text-navText font-[600] cursor-pointer flex items-center gap-2\",\n                                        children: \"Bookings\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Workspace\\\\tromen-tech\\\\wanderloom\\\\src\\\\components\\\\common\\\\NavBar.tsx\",\n                                        lineNumber: 115,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MainButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        text: \"Sign up\",\n                                        classes: \"bg-secondary hover:bg-secondary text-navText font-[600] shadow-none rounded-normal border border-none hover:text-white\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Workspace\\\\tromen-tech\\\\wanderloom\\\\src\\\\components\\\\common\\\\NavBar.tsx\",\n                                        lineNumber: 128,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex gap-2 items-center cursor-pointer\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"font-[700]\",\n                                                children: \"EN\"\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\Workspace\\\\tromen-tech\\\\wanderloom\\\\src\\\\components\\\\common\\\\NavBar.tsx\",\n                                                lineNumber: 134,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: \"/images/chevron-down.png\",\n                                                    alt: \"chevron down\"\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\Workspace\\\\tromen-tech\\\\wanderloom\\\\src\\\\components\\\\common\\\\NavBar.tsx\",\n                                                    lineNumber: 136,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\Workspace\\\\tromen-tech\\\\wanderloom\\\\src\\\\components\\\\common\\\\NavBar.tsx\",\n                                                lineNumber: 135,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\Workspace\\\\tromen-tech\\\\wanderloom\\\\src\\\\components\\\\common\\\\NavBar.tsx\",\n                                        lineNumber: 133,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\Workspace\\\\tromen-tech\\\\wanderloom\\\\src\\\\components\\\\common\\\\NavBar.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Workspace\\\\tromen-tech\\\\wanderloom\\\\src\\\\components\\\\common\\\\NavBar.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Workspace\\\\tromen-tech\\\\wanderloom\\\\src\\\\components\\\\common\\\\NavBar.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"E:\\\\Workspace\\\\tromen-tech\\\\wanderloom\\\\src\\\\components\\\\common\\\\NavBar.tsx\",\n                        lineNumber: 143,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Workspace\\\\tromen-tech\\\\wanderloom\\\\src\\\\components\\\\common\\\\NavBar.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Workspace\\\\tromen-tech\\\\wanderloom\\\\src\\\\components\\\\common\\\\NavBar.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(NavBar, \"rNemJ/Ijnvd1Z7heDrZCdw8sWEo=\");\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9OYXZCYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRWlDO0FBQ0E7QUFFSztBQUV0QyxTQUFTRzs7SUFDUCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBLENBQUM7SUFDakMsTUFBTU0sYUFBYTtRQUNqQkQsUUFBUSxDQUFDRDtJQUNYO0lBRUEscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVU7OzBCQUViLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDtzQ0FDQyw0RUFBQ0U7Z0NBQUlDLEtBQUk7Z0NBQW1CQyxLQUFJOzs7Ozs7Ozs7OztzQ0FFbEMsOERBQUNKOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0k7b0NBQ0NKLFdBQVk7OENBRVosNEVBQUNLO3dDQUFFQyxNQUFLO2tEQUFTOzs7Ozs7Ozs7Ozs4Q0FFbkIsOERBQUNGO29DQUNDSixXQUFZOzhDQUVaLDRFQUFDSzt3Q0FBRUMsTUFBSztrREFBYzs7Ozs7Ozs7Ozs7OENBRXhCLDhEQUFDRjtvQ0FDQ0osV0FBWTs4Q0FDYjs7Ozs7OzhDQUdELDhEQUFDSTtvQ0FDQ0osV0FBWTs4Q0FDYjs7Ozs7OzhDQUdELDhEQUFDSTtvQ0FDQ0osV0FBWTs4Q0FDYjs7Ozs7OzhDQWdCRCw4REFBQ0Q7b0NBQUlDLFdBQVU7O3NEQUNiLDhEQUFDSTs0Q0FBRUosV0FBVTtzREFBYTs7Ozs7O3NEQUMxQiw4REFBQ0Q7c0RBQ0MsNEVBQUNFO2dEQUFJQyxLQUFJO2dEQUEyQkMsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFPbEQsOERBQUNKO2dCQUNDQyxXQUFXLDZGQUVWLE9BRENKLE9BQU8scUJBQXFCLFlBQzdCOztrQ0FFRCw4REFBQ0c7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ0M7b0NBQUlDLEtBQUk7b0NBQW1CQyxLQUFJO29DQUFPSCxXQUFVOzs7Ozs7Ozs7OzswQ0FFbkQsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUNaSixxQkFDQyw4REFBQ0gsNkVBQUNBO29DQUNBTyxXQUFVO29DQUNWTyxTQUFTVDs7Ozs7eURBR1gsOERBQUNHO29DQUNDQyxLQUFJO29DQUNKQyxLQUFJO29DQUNKSCxXQUFVO29DQUNWTyxTQUFTVDs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBS2hCRixxQkFDQyw4REFBQ0c7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNEOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNJO3dDQUNDSixXQUFZO2tEQUNiOzs7Ozs7a0RBR0QsOERBQUNJO3dDQUNDSixXQUFZO2tEQUNiOzs7Ozs7a0RBR0QsOERBQUNJO3dDQUNDSixXQUFZO2tEQUNiOzs7Ozs7a0RBR0QsOERBQUNJO3dDQUNDSixXQUFZO2tEQUNiOzs7Ozs7a0RBV0QsOERBQUNOLG1EQUFVQTt3Q0FDVGMsTUFBSzt3Q0FDTEMsU0FBUTs7Ozs7O2tEQUdWLDhEQUFDVjt3Q0FBSUMsV0FBVTs7MERBQ2IsOERBQUNJO2dEQUFFSixXQUFVOzBEQUFhOzs7Ozs7MERBQzFCLDhEQUFDRDswREFDQyw0RUFBQ0U7b0RBQUlDLEtBQUk7b0RBQTJCQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2Q0FPbEQsOERBQUNKOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtYO0dBNUlTSjtLQUFBQTtBQThJVCwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb21tb24vTmF2QmFyLnRzeD81ZjRkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgWCB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgTWFpbkJ1dHRvbiBmcm9tIFwiLi9NYWluQnV0dG9uXCI7XHJcblxyXG5mdW5jdGlvbiBOYXZCYXIoKSB7XHJcbiAgY29uc3QgW21lbnUsIHNldE1lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHRvZ2dsZU1lbnUgPSAoKSA9PiB7XHJcbiAgICBzZXRNZW51KCFtZW51KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZDpzdGlja3kgbWQ6dG9wLTAgICBtZDpzaGFkb3ctbm9uZSB6LTIwIFwiPlxyXG4gICAgICB7LyogREVTS1RPUCAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgaGlkZGVuIGxnOmJsb2NrIGFuaW1hdGUtaW4gZmFkZS1pbiB6b29tLWluICBwLTQgXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvLnBuZ1wiIGFsdD1cImxvZ29cIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLVsyMHB4XSB4bDpnYXAtWzUwcHhdIHRleHQtWzE2cHhdIGl0ZW1zLWNlbnRlciBzZWxlY3Qtbm9uZVwiPlxyXG4gICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGhvdmVyOnRleHQtcHJpbWFyeSB0ZXh0LW5hdlRleHQgZm9udC1bNjAwXSBjdXJzb3ItcG9pbnRlciBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMmB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiLyNob21lXCI+SG9tZTwvYT5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGhvdmVyOnRleHQtcHJpbWFyeSB0ZXh0LW5hdlRleHQgZm9udC1bNjAwXSBjdXJzb3ItcG9pbnRlciBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMmB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiLyNwcm9kdWN0b3NcIj5Qcm9kdWN0czwvYT5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGhvdmVyOnRleHQtcHJpbWFyeSB0ZXh0LW5hdlRleHQgZm9udC1bNjAwXSBjdXJzb3ItcG9pbnRlciBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMmB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBBYm91dFxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaG92ZXI6dGV4dC1wcmltYXJ5IHRleHQtbmF2VGV4dCBmb250LVs2MDBdIGN1cnNvci1wb2ludGVyIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yYH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEZsaWdodHNcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGhvdmVyOnRleHQtcHJpbWFyeSB0ZXh0LW5hdlRleHQgZm9udC1bNjAwXSBjdXJzb3ItcG9pbnRlciBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMmB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBCb29raW5nc1xyXG4gICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICB7LyogPExpbmtcclxuICAgICAgICAgICAgICBocmVmPVwiL2F1dGgvbG9naW5cIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtcHJpbWFyeSB0ZXh0LW5hdlRleHQgZm9udC1bNjAwXSBjdXJzb3ItcG9pbnRlciBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgICAgPC9MaW5rPiAqL31cclxuXHJcbiAgICAgICAgICAgIHsvKiA8TWFpbkJ1dHRvblxyXG4gICAgICAgICAgICAgIHRleHQ9XCJTaWduIHVwXCJcclxuICAgICAgICAgICAgICBjbGFzc2VzPVwiYmctdHJhbnNwYXJlbnQgdGV4dC1uYXZUZXh0IGZvbnQtWzYwMF0gc2hhZG93LW5vbmUgcm91bmRlZC1ub3JtYWwgYm9yZGVyIGJvcmRlci1uYXZUZXh0IGhvdmVyOmJvcmRlci1ub25lIGhvdmVyOnRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAvPiAqL31cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBpdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LVs3MDBdXCI+RU48L3A+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9jaGV2cm9uLWRvd24ucG5nXCIgYWx0PVwiY2hldnJvbiBkb3duXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiBNT0JJTEUgKi99XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2AgYmxvY2sgbGc6aGlkZGVuIHNoYWRvdy1zbSAgZml4ZWQgdG9wLTAgdy1mdWxsIHotWzk5OV0gICBweS00IGFuaW1hdGUtaW4gZmFkZS1pbiB6b29tLWluICAke1xyXG4gICAgICAgICAgbWVudSA/IFwiIGJnLXByaW1hcnkgcHktMlwiIDogXCJiZy13aGl0ZVwiXHJcbiAgICAgICAgfSBgfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBteC1bMTBweF1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtWzUwcHhdIHRleHQtWzE2cHhdIGl0ZW1zLWNlbnRlciBzZWxlY3Qtbm9uZVwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9nby5wbmdcIiBhbHQ9XCJsb2dvXCIgY2xhc3NOYW1lPVwidy1bN3JlbV1cIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC1bNDBweF1cIj5cclxuICAgICAgICAgICAge21lbnUgPyAoXHJcbiAgICAgICAgICAgICAgPFhcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGFuaW1hdGUtaW4gZmFkZS1pbiB6b29tLWluIHRleHQtYmxhY2tcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlTWVudX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvaGFtYnVyZ2VyLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJsb2dvXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGFuaW1hdGUtaW4gZmFkZS1pbiB6b29tLWluXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZU1lbnV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHttZW51ID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS04IHNlbGVjdC1ub25lIGFuaW1hdGUtaW4gc2xpZGUtaW4tZnJvbS1yaWdodCBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC04IG10LTggbXgtNCBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLVsyMHB4XSB4bDpnYXAtWzUwcHhdIHRleHQtWzE2cHhdIGZsZXgtY29sIHNlbGVjdC1ub25lIFwiPlxyXG4gICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaG92ZXI6dGV4dC13aGl0ZSB0ZXh0LW5hdlRleHQgZm9udC1bNjAwXSBjdXJzb3ItcG9pbnRlciBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMmB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIERlc3RpbmF0aW9uc1xyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaG92ZXI6dGV4dC13aGl0ZSB0ZXh0LW5hdlRleHQgZm9udC1bNjAwXSBjdXJzb3ItcG9pbnRlciBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMmB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEhvdGVsc1xyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaG92ZXI6dGV4dC13aGl0ZSB0ZXh0LW5hdlRleHQgZm9udC1bNjAwXSBjdXJzb3ItcG9pbnRlciBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMmB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEZsaWdodHNcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGhvdmVyOnRleHQtd2hpdGUgdGV4dC1uYXZUZXh0IGZvbnQtWzYwMF0gY3Vyc29yLXBvaW50ZXIgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBCb29raW5nc1xyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiA8TGlua1xyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiL2F1dGgvbG9naW5cIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LXdoaXRlIHRleHQtbmF2VGV4dCBmb250LVs2MDBdIGN1cnNvci1wb2ludGVyIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICAgICAgICA8L0xpbms+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgIDxNYWluQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHRleHQ9XCJTaWduIHVwXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3Nlcz1cImJnLXNlY29uZGFyeSBob3ZlcjpiZy1zZWNvbmRhcnkgdGV4dC1uYXZUZXh0IGZvbnQtWzYwMF0gc2hhZG93LW5vbmUgcm91bmRlZC1ub3JtYWwgYm9yZGVyIGJvcmRlci1ub25lIGhvdmVyOnRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTIgaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtWzcwMF1cIj5FTjwvcD5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvY2hldnJvbi1kb3duLnBuZ1wiIGFsdD1cImNoZXZyb24gZG93blwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlgiLCJNYWluQnV0dG9uIiwiTmF2QmFyIiwibWVudSIsInNldE1lbnUiLCJ0b2dnbGVNZW51IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0IiwicCIsImEiLCJocmVmIiwib25DbGljayIsInRleHQiLCJjbGFzc2VzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/common/NavBar.tsx\n"));

/***/ })

});