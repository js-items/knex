"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var knexFilters = __importStar(require("../knexFilters"));
var index_1 = require("./index");
jest.mock("../knexFilters");
describe("queryCreatorsMap", function () {
    var testKey = "stringProperty";
    var testValue = "zebra";
    var defaultOptions = {
        property: testKey,
        query: {
            where: jest.fn(),
            whereIn: jest.fn(),
            whereNot: jest.fn(),
            whereNotIn: jest.fn()
            // tslint:disable-next-line:no-any
        }
    };
    beforeEach(function () {
        jest.spyOn(knexFilters, "addOperatorToQuery");
    });
    afterEach(function () {
        jest.clearAllMocks();
    });
    it("tests $eq op is present in filter", function () {
        index_1.queryCreatorsMap.$eq(__assign({}, defaultOptions, { filter: {
                $eq: testValue
            } }));
        expect(defaultOptions.query.where).toHaveBeenCalledWith(testKey, testValue);
    });
    it("tests $eq op is not present in filter", function () {
        var result = index_1.queryCreatorsMap.$eq(__assign({}, defaultOptions, { filter: {} }));
        expect(result).toEqual(defaultOptions.query);
        expect(defaultOptions.query.where).not.toHaveBeenCalled();
    });
    it("tests $ne op is present in filter", function () {
        index_1.queryCreatorsMap.$ne(__assign({}, defaultOptions, { filter: {
                $ne: testValue
            } }));
        expect(knexFilters.addOperatorToQuery).toHaveBeenCalledWith(defaultOptions.query, testKey, "<>", testValue);
    });
    it("tests $ne op is not present in filter", function () {
        var result = index_1.queryCreatorsMap.$ne(__assign({}, defaultOptions, { filter: {} }));
        expect(result).toEqual(defaultOptions.query);
        expect(knexFilters.addOperatorToQuery).not.toHaveBeenCalled();
    });
    it("tests $gt op is present in filter", function () {
        index_1.queryCreatorsMap.$gt(__assign({}, defaultOptions, { filter: {
                $gt: testValue
            } }));
        expect(knexFilters.addOperatorToQuery).toHaveBeenCalledWith(defaultOptions.query, testKey, ">", testValue);
    });
    it("tests $gt op is not present in filter", function () {
        var result = index_1.queryCreatorsMap.$gt(__assign({}, defaultOptions, { filter: {} }));
        expect(result).toEqual(defaultOptions.query);
        expect(knexFilters.addOperatorToQuery).not.toHaveBeenCalled();
    });
    it("tests $gte op is present in filter", function () {
        index_1.queryCreatorsMap.$gte(__assign({}, defaultOptions, { filter: {
                $gte: testValue
            } }));
        expect(knexFilters.addOperatorToQuery).toHaveBeenCalledWith(defaultOptions.query, testKey, ">=", testValue);
    });
    it("tests $gte op is not present in filter", function () {
        var result = index_1.queryCreatorsMap.$gte(__assign({}, defaultOptions, { filter: {} }));
        expect(result).toEqual(defaultOptions.query);
        expect(knexFilters.addOperatorToQuery).not.toHaveBeenCalled();
    });
    it("tests $lt op is present in filter", function () {
        index_1.queryCreatorsMap.$lt(__assign({}, defaultOptions, { filter: {
                $lt: testValue
            } }));
        expect(knexFilters.addOperatorToQuery).toHaveBeenCalledWith(defaultOptions.query, testKey, "<", testValue);
    });
    it("tests $lt op is not present in filter", function () {
        var result = index_1.queryCreatorsMap.$lt(__assign({}, defaultOptions, { filter: {} }));
        expect(result).toEqual(defaultOptions.query);
        expect(knexFilters.addOperatorToQuery).not.toHaveBeenCalled();
    });
    it("tests $lte op is present in filter", function () {
        index_1.queryCreatorsMap.$lte(__assign({}, defaultOptions, { filter: {
                $lte: testValue
            } }));
        expect(knexFilters.addOperatorToQuery).toHaveBeenCalledWith(defaultOptions.query, testKey, "<=", testValue);
    });
    it("tests $lte op is not present in filter", function () {
        var result = index_1.queryCreatorsMap.$lte(__assign({}, defaultOptions, { filter: {} }));
        expect(result).toEqual(defaultOptions.query);
        expect(knexFilters.addOperatorToQuery).not.toHaveBeenCalled();
    });
    it("tests $in op is present in filter", function () {
        index_1.queryCreatorsMap.$in(__assign({}, defaultOptions, { filter: {
                $in: [testValue]
            } }));
        expect(defaultOptions.query.whereIn).toHaveBeenCalledWith(testKey, [
            testValue
        ]);
    });
    it("tests $in op is not present in filter", function () {
        var query = index_1.queryCreatorsMap.$in(__assign({}, defaultOptions, { filter: {} }));
        expect(defaultOptions.query.whereIn).not.toHaveBeenCalled();
        expect(query).toEqual(defaultOptions.query);
    });
    it("tests $nin op is present in filter", function () {
        index_1.queryCreatorsMap.$nin(__assign({}, defaultOptions, { filter: {
                $nin: [testValue]
            } }));
        expect(defaultOptions.query.whereNotIn).toHaveBeenCalledWith(testKey, [
            testValue
        ]);
    });
    it("tests $nin op is not present in filter", function () {
        var result = index_1.queryCreatorsMap.$nin(__assign({}, defaultOptions, { filter: {} }));
        expect(result).toEqual(defaultOptions.query);
        expect(defaultOptions.query.whereNotIn).not.toHaveBeenCalled();
    });
    it("tests $not op is present in filter", function () {
        index_1.queryCreatorsMap.$not(__assign({}, defaultOptions, { filter: {
                $not: testValue
            } }));
        expect(defaultOptions.query.whereNot).toHaveBeenCalledTimes(1);
    });
    it("tests $not op is not present in filter", function () {
        var result = index_1.queryCreatorsMap.$not(__assign({}, defaultOptions, { filter: {} }));
        expect(defaultOptions.query.whereNot).not.toHaveBeenCalled();
        expect(result).toEqual(defaultOptions.query);
    });
    it("tests search op is present in filter", function () {
        index_1.queryCreatorsMap.$search(__assign({}, defaultOptions, { filter: {
                $search: testValue
            } }));
        expect(defaultOptions.query.where).toHaveBeenCalledWith(testKey, "like", "%" + testValue + "%");
    });
    it("tests search op is not present in filter", function () {
        var result = index_1.queryCreatorsMap.$search(__assign({}, defaultOptions, { filter: {} }));
        expect(result).toEqual(defaultOptions.query);
        expect(defaultOptions.query.where).not.toHaveBeenCalled();
    });
    // tslint:disable-next-line:max-file-line-count
});
//# sourceMappingURL=index.spec.js.map