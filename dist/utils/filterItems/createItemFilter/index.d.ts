import { Item } from "@js-items/foundation";
import { ItemFilter } from "@js-items/foundation/dist/interfaces/Filter";
import { QueryBuilder } from "knex";
declare const _default: <I extends Item>(query: QueryBuilder, filter: ItemFilter<I>) => QueryBuilder;
export default _default;
