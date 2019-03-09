"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createItemFilter_1 = __importDefault(require("./createItemFilter"));
var createLogicalFilter_1 = __importDefault(require("./createLogicalFilter"));
exports.default = (function (query, filter) {
    var conditionQuery = createLogicalFilter_1.default(query, filter);
    return createItemFilter_1.default(conditionQuery, filter);
});
//# sourceMappingURL=index.js.map