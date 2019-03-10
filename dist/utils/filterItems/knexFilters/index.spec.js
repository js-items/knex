"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
describe("addOperatorToQuery", function () {
    var operator = ">";
    var property = "numberProperty";
    var query = {
        where: jest.fn(function () { return "whereQuery"; })
        // tslint:disable-next-line:no-any
    };
    it("returns where query when value is not undefined", function () {
        var value = '5';
        var result = index_1.addOperatorToQuery(query, property, operator, value);
        expect(result).toEqual("whereQuery");
    });
    it("returns initial query when value is undefined", function () {
        var value = undefined;
        var result = index_1.addOperatorToQuery(query, property, operator, value);
        expect(result).toEqual(query);
    });
});
//# sourceMappingURL=index.spec.js.map