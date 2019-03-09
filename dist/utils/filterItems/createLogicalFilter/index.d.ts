import { Item } from "@js-items/foundation";
import { LogicalFilter } from "@js-items/foundation/dist/interfaces/Filter";
import { QueryBuilder } from "knex";
declare const _default: <I extends Item>(query: QueryBuilder, filter: LogicalFilter<I>) => QueryBuilder;
export default _default;
