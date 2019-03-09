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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var testFacade_1 = __importDefault(require("@js-items/foundation/dist/testFacade"));
var dotenv_1 = require("dotenv");
dotenv_1.config();
var factory_1 = __importDefault(require("./factory"));
var connectToDb_1 = __importDefault(require("./utils/connectToDb"));
var _a = process.env, KNEX_DATABASE = _a.KNEX_DATABASE, KNEX_PASSWORD = _a.KNEX_PASSWORD, KNEX_USER = _a.KNEX_USER, KNEX_CLIENT = _a.KNEX_CLIENT, KNEX_HOST = _a.KNEX_HOST;
var db = connectToDb_1.default({
    client: KNEX_CLIENT,
    connection: __assign({ database: KNEX_DATABASE, host: KNEX_HOST }, (KNEX_PASSWORD === undefined
        ? {}
        : {
            password: KNEX_PASSWORD
        }), { user: KNEX_USER })
});
var tableName = "items";
beforeAll(function () { return __awaiter(_this, void 0, void 0, function () {
    var schema;
    var _this = this;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, db()];
            case 1:
                schema = (_a.sent()).schema;
                return [4 /*yield*/, Promise.resolve(schema.dropTableIfExists(tableName))];
            case 2:
                _a.sent();
                return [4 /*yield*/, Promise.resolve(schema.createTable(tableName, function (table) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            table.string("id").unique();
                            table.string("stringProperty");
                            table.float("numberProperty");
                            table.boolean("booleanProperty");
                            return [2 /*return*/];
                        });
                    }); }))];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
var facade = factory_1.default({
    convertDocumentIntoItem: function (document) { return (__assign({}, document, { booleanProperty: document.booleanProperty === 1 })); },
    convertItemIntoDocument: function (item) { return (__assign({}, item, { booleanProperty: item.booleanProperty === true ? 1 : 0 })); },
    db: db,
    itemName: "TestItem",
    tableName: tableName
});
testFacade_1.default({ facade: facade });
//# sourceMappingURL=factory.spec.js.map