"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var knexFilters_1 = require("../knexFilters");
exports.default = (function (query, filter) {
    if (filter.$and !== undefined) {
        return knexFilters_1.addAndToQuery(query, filter.$and);
    }
    if (filter.$or !== undefined) {
        return knexFilters_1.addOrToQuery(query, filter.$or);
    }
    if (filter.$nor !== undefined) {
        return knexFilters_1.addNorToQuery(query, filter.$nor);
    }
    return query;
});
//# sourceMappingURL=index.js.map