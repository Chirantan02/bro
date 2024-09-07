"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _medusa = require("@medusajs/medusa");
var _typeorm = require("typeorm");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var OnboardingService = /*#__PURE__*/function (_TransactionBaseServi) {
  function OnboardingService(_ref) {
    var _this;
    var onboardingRepository = _ref.onboardingRepository;
    (0, _classCallCheck2["default"])(this, OnboardingService);
    _this = _callSuper(this, OnboardingService, [arguments[0]]);
    _this.onboardingRepository_ = onboardingRepository;
    return _this;
  }
  (0, _inherits2["default"])(OnboardingService, _TransactionBaseServi);
  return (0, _createClass2["default"])(OnboardingService, [{
    key: "retrieve",
    value: function () {
      var _retrieve = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var onboardingRepo, status;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              onboardingRepo = this.activeManager_.withRepository(this.onboardingRepository_);
              _context.next = 3;
              return onboardingRepo.findOne({
                where: {
                  id: (0, _typeorm.Not)((0, _typeorm.IsNull)())
                }
              });
            case 3:
              status = _context.sent;
              return _context.abrupt("return", status);
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function retrieve() {
        return _retrieve.apply(this, arguments);
      }
      return retrieve;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(data) {
        var _this2 = this;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.atomicPhase_( /*#__PURE__*/function () {
                var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(transactionManager) {
                  var onboardingRepository, status, _i, _Object$entries, _Object$entries$_i, key, value;
                  return _regenerator["default"].wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                      case 0:
                        onboardingRepository = transactionManager.withRepository(_this2.onboardingRepository_);
                        _context2.next = 3;
                        return _this2.retrieve();
                      case 3:
                        status = _context2.sent;
                        for (_i = 0, _Object$entries = Object.entries(data); _i < _Object$entries.length; _i++) {
                          _Object$entries$_i = (0, _slicedToArray2["default"])(_Object$entries[_i], 2), key = _Object$entries$_i[0], value = _Object$entries$_i[1];
                          status[key] = value;
                        }
                        _context2.next = 7;
                        return onboardingRepository.save(status);
                      case 7:
                        return _context2.abrupt("return", _context2.sent);
                      case 8:
                      case "end":
                        return _context2.stop();
                    }
                  }, _callee2);
                }));
                return function (_x2) {
                  return _ref2.apply(this, arguments);
                };
              }());
            case 2:
              return _context3.abrupt("return", _context3.sent);
            case 3:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function update(_x) {
        return _update.apply(this, arguments);
      }
      return update;
    }()
  }]);
}(_medusa.TransactionBaseService);
var _default = exports["default"] = OnboardingService;