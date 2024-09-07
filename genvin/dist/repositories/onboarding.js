"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _database = require("@medusajs/medusa/dist/loaders/database");
var _onboarding = require("../models/onboarding");
var OnboardingRepository = _database.dataSource.getRepository(_onboarding.OnboardingState);
var _default = exports["default"] = OnboardingRepository;