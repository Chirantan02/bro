"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET = GET;
exports.POST = POST;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
function GET(_x, _x2) {
  return _GET.apply(this, arguments);
}
function _GET() {
  _GET = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var onboardingService, status;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          onboardingService = req.scope.resolve("onboardingService");
          _context.next = 3;
          return onboardingService.retrieve();
        case 3:
          status = _context.sent;
          res.status(200).json({
            status: status
          });
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _GET.apply(this, arguments);
}
function POST(_x3, _x4) {
  return _POST.apply(this, arguments);
}
function _POST() {
  _POST = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var onboardingService, manager, status;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          onboardingService = req.scope.resolve("onboardingService");
          manager = req.scope.resolve("manager");
          _context3.next = 4;
          return manager.transaction( /*#__PURE__*/function () {
            var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(transactionManager) {
              return _regenerator["default"].wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return onboardingService.withTransaction(transactionManager).update(req.body);
                  case 2:
                    return _context2.abrupt("return", _context2.sent);
                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2);
            }));
            return function (_x5) {
              return _ref.apply(this, arguments);
            };
          }());
        case 4:
          status = _context3.sent;
          res.status(200).json({
            status: status
          });
        case 6:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _POST.apply(this, arguments);
}