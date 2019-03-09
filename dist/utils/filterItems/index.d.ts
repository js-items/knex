import { Item } from "@js-items/foundation";
import Filter from "@js-items/foundation/dist/interfaces/Filter";
import { QueryBuilder } from "knex";
declare const _default: <I extends Item>(query: QueryBuilder, filter: Filter<I>) => QueryBuilder;
export default _default;
