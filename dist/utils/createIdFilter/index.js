"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (_a) {
    var id = _a.id, filter = _a.filter, config = _a.config;
    // tslint:disable-next-line:no-object-literal-type-assertion
    var idFilter = { id: id };
    var fullFilter = { $and: [idFilter, filter] };
    return config.createFilter(fullFilter);
});
//# sourceMappingURL=index.js.map