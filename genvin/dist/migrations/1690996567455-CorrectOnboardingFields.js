"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CorrectOnboardingFields1690996567455 = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var CorrectOnboardingFields1690996567455 = exports.CorrectOnboardingFields1690996567455 = /*#__PURE__*/function () {
  function CorrectOnboardingFields1690996567455() {
    (0, _classCallCheck2["default"])(this, CorrectOnboardingFields1690996567455);
    (0, _defineProperty2["default"])(this, "name", 'CorrectOnboardingFields1690996567455');
  }
  return (0, _createClass2["default"])(CorrectOnboardingFields1690996567455, [{
    key: "up",
    value: function () {
      var _up = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(queryRunner) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return queryRunner.query("ALTER TABLE \"onboarding_state\" ADD CONSTRAINT \"PK_891b72628471aada55d7b8c9410\" PRIMARY KEY (\"id\")");
            case 2:
              _context.next = 4;
              return queryRunner.query("ALTER TABLE \"onboarding_state\" ALTER COLUMN \"is_complete\" SET NOT NULL");
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
              return queryRunner.query("ALTER TABLE \"onboarding_state\" ALTER COLUMN \"is_complete\" DROP NOT NULL");
            case 2:
              _context2.next = 4;
              return queryRunner.query("ALTER TABLE \"onboarding_state\" DROP CONSTRAINT \"PK_891b72628471aada55d7b8c9410\"");
            case 4:
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