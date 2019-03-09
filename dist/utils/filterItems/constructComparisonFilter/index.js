"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var knexFilters_1 = require("../knexFilters");
var comparisonKeys = [
    "$eq",
    "$ne",
    "$lt",
    "$lte",
    "$gt",
    "$gte",
    "$search",
    "$in",
    "$nin",
    "$not"
];
exports.queryCreatorsMap = {
    $eq: function (_a) {
        var filter = _a.filter, query = _a.query, property = _a.property;
        return filter.$eq !== undefined ? query.where(property, filter.$eq) : query;
    },
    $gt: function (_a) {
        var filter = _a.filter, query = _a.query, property = _a.property;
        return filter.$gt !== undefined
            ? knexFilters_1.addOperatorToQuery(query, property, ">", filter.$gt)
            : query;
    },
    $gte: function (_a) {
        var filter = _a.filter, query = _a.query, property = _a.property;
        return filter.$gte !== undefined
            ? knexFilters_1.addOperatorToQuery(query, property, ">=", filter.$gte)
            : query;
    },
    $in: function (_a) {
        var filter = _a.filter, query = _a.query, property = _a.property;
        return filter.$in !== undefined
            ? query.whereIn(property, filter.$in)
            : query;
    },
    $lt: function (_a) {
        var filter = _a.filter, query = _a.query, property = _a.property;
        return filter.$lt !== undefined
            ? knexFilters_1.addOperatorToQuery(query, property, "<", filter.$lt)
            : query;
    },
    $lte: function (_a) {
        var filter = _a.filter, query = _a.query, property = _a.property;
        return filter.$lte !== undefined
            ? knexFilters_1.addOperatorToQuery(query, property, "<=", filter.$lte)
            : query;
    },
    $ne: function (_a) {
        var filter = _a.filter, query = _a.query, property = _a.property;
        return filter.$ne !== undefined
            ? knexFilters_1.addOperatorToQuery(query, property, "<>", filter.$ne)
            : query;
    },
    $nin: function (_a) {
        var filter = _a.filter, query = _a.query, property = _a.property;
        return filter.$nin !== undefined
            ? query.whereNotIn(property, filter.$nin)
            : query;
    },
    $not: function (_a) {
        var filter = _a.filter, query = _a.query, property = _a.property;
        return filter.$not !== undefined
            ? query.whereNot(function () {
                constructComparisonFilter(this, property, filter.$not);
            })
            : query;
    },
    $search: function (_a) {
        var filter = _a.filter, query = _a.query, property = _a.property;
        return filter.$search !== undefined
            ? query.where(property, "like", "%" + filter.$search + "%")
            : query;
    }
};
var constructComparisonFilter = function (query, property, filter) {
    return comparisonKeys.reduce(function (prev, next) {
        return filter[next]
            ? exports.queryCreatorsMap[next]({ query: query, property: property, filter: filter })
            : prev;
    }, query);
};
exports.default = constructComparisonFilter;
//# sourceMappingURL=index.js.map