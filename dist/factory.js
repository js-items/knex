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
Object.defineProperty(exports, "__esModule", { value: true });
var functions_1 = require("./functions");
exports.defaultPaginationLimit = 10;
exports.default = (function (factoryConfig) {
    var facadeConfig = __assign({ convertDocumentIntoItem: function (document) { return document; }, convertItemIntoDocument: function (item) { return item; }, createFilter: function (filter) { return filter; }, createQuery: function (db) { return db.table(facadeConfig.tableName); }, createSort: function (sort) { return sort; }, defaultPaginationLimit: exports.defaultPaginationLimit, itemName: factoryConfig.itemName, tableName: factoryConfig.itemName }, factoryConfig);
    return {
        countItems: functions_1.countItems(facadeConfig),
        createItem: functions_1.createItem(facadeConfig),
        deleteItem: functions_1.deleteItem(facadeConfig),
        deleteItems: functions_1.deleteItems(facadeConfig),
        getItem: functions_1.getItem(facadeConfig),
        getItems: functions_1.getItems(facadeConfig),
        replaceItem: functions_1.replaceItem(facadeConfig),
        updateItem: functions_1.updateItem(facadeConfig)
    };
});
//# sourceMappingURL=factory.js.map