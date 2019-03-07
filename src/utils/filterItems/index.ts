// tslint:disable:no-any
import { Item } from "@js-items/foundation";
import Filter, {
  ItemFilter
} from "@js-items/foundation/dist/interfaces/Filter";
import { QueryBuilder } from "knex";
import createItemFilter from "./createItemFilter";
import createLogicalFilter from "./createLogicalFilter";

export default <I extends Item>(
  query: QueryBuilder,
  filter: Filter<I>
): QueryBuilder => {
  const conditionQuery = createLogicalFilter(query, filter as any);

  return createItemFilter(conditionQuery, filter as ItemFilter<I>);
};
