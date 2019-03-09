"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../index"));
exports.addAndToQuery = function (query, filters
// tslint:disable-next-line:no-unnecessary-callback-wrapper
) { return filters.reduce(function (result, filter) { return index_1.default(result, filter); }, query); };
exports.addOrToQuery = function (query, filters) {
    return query.where(function () {
        return filters.reduce(function (result, filter) {
            return result.orWhere(function () {
                index_1.default(this, filter);
            });
        }, this);
    });
};
exports.addNorToQuery = function (query, filters) {
    return query.whereNot(function () {
        exports.addOrToQuery(this, filters);
    });
};
exports.addOperatorToQuery = function (query, property, operator, value) { return (value !== undefined ? query.where(property, operator, value) : query); };
//# sourceMappingURL=index.js.map