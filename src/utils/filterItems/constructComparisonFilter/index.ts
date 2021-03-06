// tslint:disable:no-any
import { ComparisonFilter } from '@js-items/foundation/dist/interfaces/Filter';
import { QueryBuilder } from 'knex';
import { addOperatorToQuery } from '../knexFilters';

const comparisonKeys: string[] = [
  '$eq',
  '$ne',
  '$lt',
  '$lte',
  '$gt',
  '$gte',
  '$search',
  '$in',
  '$nin',
  '$not',
];

interface Options {
  readonly query: QueryBuilder;
  readonly property: string;
  readonly filter: any;
}

interface QueryCreator {
  readonly [key: string]: (options: Options) => QueryBuilder;
}

export const queryCreatorsMap: QueryCreator = {
  $eq: ({ filter, query, property }: Options) =>
    filter.$eq !== undefined ? query.where(property, filter.$eq) : query,
  $gt: ({ filter, query, property }: Options) =>
    filter.$gt !== undefined
      ? addOperatorToQuery(query, property, '>', filter.$gt)
      : query,
  $gte: ({ filter, query, property }: Options) =>
    filter.$gte !== undefined
      ? addOperatorToQuery(query, property, '>=', filter.$gte)
      : query,
  $in: ({ filter, query, property }: Options) =>
    filter.$in !== undefined
      ? query.whereIn(property, filter.$in as any[])
      : query,
  $lt: ({ filter, query, property }: Options) =>
    filter.$lt !== undefined
      ? addOperatorToQuery(query, property, '<', filter.$lt)
      : query,
  $lte: ({ filter, query, property }: Options) =>
    filter.$lte !== undefined
      ? addOperatorToQuery(query, property, '<=', filter.$lte)
      : query,
  $ne: ({ filter, query, property }: Options) =>
    filter.$ne !== undefined
      ? addOperatorToQuery(query, property, '<>', filter.$ne)
      : query,
  $nin: ({ filter, query, property }: Options) =>
    filter.$nin !== undefined ? query.whereNotIn(property, filter.$nin) : query,
  $not: ({ filter, query, property }: Options) =>
    filter.$not !== undefined
      ? query.whereNot(function(this: QueryBuilder) {
          constructComparisonFilter(this, property, filter.$not);
        })
      : query,
  $search: ({ filter, query, property }: Options) =>
    filter.$search !== undefined
      ? query.where(property, 'like', `%${filter.$search}%`)
      : query,
};

const constructComparisonFilter = <Property>(
  query: QueryBuilder,
  property: string,
  filter: ComparisonFilter<Property>
): QueryBuilder =>
  comparisonKeys.reduce(
    (prev, next) =>
      (filter as any)[next] !== undefined
        ? queryCreatorsMap[next]({ query, property, filter })
        : prev,
    query
  );

export default constructComparisonFilter;
