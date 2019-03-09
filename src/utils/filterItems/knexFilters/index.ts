// tslint:disable:no-any
import { Filter, Item } from "@js-items/foundation";
import { QueryBuilder } from "knex";
import Value from "../../../types/Value";
import createFilter from "../index";

export const addAndToQuery = <I extends Item>(
  query: QueryBuilder,
  filters: Filter<I>[]
  // tslint:disable-next-line:no-unnecessary-callback-wrapper
) => filters.reduce((result, filter) => createFilter(result, filter), query);

export const addOrToQuery = <I extends Item>(
  query: QueryBuilder,
  filters: Filter<I>[]
) =>
  query.where(function(this: QueryBuilder) {
    return filters.reduce(
      (result, filter) =>
        result.orWhere(function(this: QueryBuilder) {
          createFilter(this, filter);
        }),
      this
    );
  });

export const addNorToQuery = <I extends Item>(
  query: QueryBuilder,
  filters: Filter<I>[]
) =>
  query.whereNot(function(this: QueryBuilder) {
    addOrToQuery(this, filters);
  });

export const addOperatorToQuery = (
  query: QueryBuilder,
  property: string,
  operator: string,
  value?: Value
) => (value !== undefined ? query.where(property, operator, value) : query);
