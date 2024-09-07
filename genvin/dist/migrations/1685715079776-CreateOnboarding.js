"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateOnboarding1685715079776 = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _utils = require("@medusajs/utils");
var CreateOnboarding1685715079776 = exports.CreateOnboarding1685715079776 = /*#__PURE__*/function () {
  function CreateOnboarding1685715079776() {
    (0, _classCallCheck2["default"])(this, CreateOnboarding1685715079776);
  }
  return (0, _createClass2["default"])(CreateOnboarding1685715079776, [{
    key: "up",
    value: function () {
      var _up = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(queryRunner) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return queryRunner.query("CREATE TABLE \"onboarding_state\" (\"id\" character varying NOT NULL, \"created_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), \"updated_at\" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), \"current_step\" character varying NULL, \"is_complete\" boolean)");
            case 2:
              _context.next = 4;
              return queryRunner.query("INSERT INTO \"onboarding_state\" (\"id\", \"current_step\", \"is_complete\") VALUES ('".concat((0, _utils.generateEntityId)("", "onboarding"), "' , NULL, false)"));
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function up(_x) {
        return _up.apply(this, arguments);
      }
      return up;
    }()
  }, {
    key: "down",
    value: function () {
      var _down = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(queryRunner) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return queryRunner.query("DROP TABLE \"onboarding_state\"");
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function down(_x2) {
        return _down.apply(this, arguments);
      }
      return down;
    }()
  }]);
}();