import { Item } from "@js-items/foundation";
import { ItemFilter } from "@js-items/foundation/dist/interfaces/Filter";
import { QueryBuilder } from "knex";
import constructComparisonFilter from '../constructComparisonFilter';

export default <I extends Item>(query: QueryBuilder, filter: ItemFilter<I>) =>
  Object.keys(filter).reduce((result, prop) => {
    // tslint:disable-next-line:no-any
    const filterValue = (filter as any)[prop];
    if (!(filterValue instanceof Object)) {
      return result.where(prop, filterValue);
    } else {
      return constructComparisonFilter(query, prop, filterValue);
    }
  }, query);
