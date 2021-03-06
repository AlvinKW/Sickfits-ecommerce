webpackHotUpdate("static/development/pages/orders.js",{

/***/ "./components/OrderList.js":
/*!*********************************!*\
  !*** ./components/OrderList.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var _styles_OrderItemStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/OrderItemStyles */ "./components/styles/OrderItemStyles.js");
var _jsxFileName = "/Users/alvinkwan/Desktop/Advanced-React/sick-fits/frontend/components/OrderList.js";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query USER_ORDERS_QUERY {\n    orders(orderBy: createdAt_DESC) {\n      id\n      total\n      createdAt\n      items {\n        id\n        title\n        price\n        description\n        quantity\n        image\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










var USER_ORDERS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject());
var orderUl = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].ul.withConfig({
  displayName: "OrderList__orderUl",
  componentId: "rwafy5-0"
})(["display:grid;grid-gap:4rem;grid-template-columns:repeat(auto-fit,minmax(40%,1fr));"]);

var OrderList = /*#__PURE__*/function (_React$Component) {
  _inherits(OrderList, _React$Component);

  var _super = _createSuper(OrderList);

  function OrderList() {
    _classCallCheck(this, OrderList);

    return _super.apply(this, arguments);
  }

  _createClass(OrderList, [{
    key: "render",
    value: function render() {
      var _this = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
        query: USER_ORDERS_QUERY,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 7
        }
      }, function (_ref) {
        var orders = _ref.data.orders,
            loading = _ref.loading,
            error = _ref.error;
        if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 31
          }
        }, "loading...");
        if (error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__["default"], {
          erorr: error,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 29
          }
        });
        console.log(orders);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 15
          }
        }, "You have ", orders.length, " orders"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("orderUl", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 15
          }
        }, orders.map(function (order) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_OrderItemStyles__WEBPACK_IMPORTED_MODULE_8__["default"], {
            key: order.id,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 19
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: {
              pathname: '/order',
              query: {
                id: order.id
              }
            },
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 21
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 23
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "order-meta",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 25
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 27
            }
          }, order.items.reduce(function (a, b) {
            return a + b.quantity;
          }, 0), " Items"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 27
            }
          }, order.items.length, " Products"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 27
            }
          }, order.createdAt.toTimeString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 27
            }
          }, Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_7__["default"])(order.total))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "images",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 25
            }
          }, order.items.map(function (item) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
              key: item.id,
              src: item.image,
              alt: item.title,
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 29
              }
            });
          })))));
        })));
      });
    }
  }]);

  return OrderList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (OrderList);

/***/ })

})
//# sourceMappingURL=orders.js.17b6450f068450db9b2e.hot-update.js.map