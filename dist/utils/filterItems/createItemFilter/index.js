"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var constructComparisonFilter_1 = __importDefault(require("../constructComparisonFilter"));
exports.default = (function (query, filter) {
    return Object.keys(filter).reduce(function (result, property) {
        // tslint:disable-next-line:no-any
        var filterValue = filter[property];
        if (!(filterValue instanceof Object)) {
            return result.where(property, filterValue);
        }
        else {
            return constructComparisonFilter_1.default(query, property, filterValue);
        }
    }, query);
});
//# sourceMappingURL=index.js.map