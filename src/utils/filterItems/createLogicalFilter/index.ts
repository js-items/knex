import { Item } from "@js-items/foundation";
import { LogicalFilter } from "@js-items/foundation/dist/interfaces/Filter";
import { QueryBuilder } from "knex";
import { addAndToQuery, addNorToQuery, addOrToQuery } from "../knexFilters";

export default <I extends Item>(
  query: QueryBuilder,
  filter: LogicalFilter<I>
): QueryBuilder => {
  if (filter.$and !== undefined) {
    return addAndToQuery(query, filter.$and);
  }

  if (filter.$or !== undefined) {
    return addOrToQuery(query, filter.$or);
  }

  if (filter.$nor !== undefined) {
    return addNorToQuery(query, filter.$nor);
  }

  return query;
};
