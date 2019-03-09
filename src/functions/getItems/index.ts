import {
  createGetItemsResult,
  createPaginationFilter,
  GetItems,
  Item,
  Pagination,
  Sort,
  xor
} from "@js-items/foundation";
import { start } from "@js-items/foundation/dist/interfaces/Cursor";
import { asc } from "@js-items/foundation/dist/interfaces/SortOrder";
import FacadeConfig from "../../FacadeConfig";
import filterItems from "../../utils/filterItems";

export default <I extends Item>(config: FacadeConfig<I>): GetItems<I> => {
  const defaultPagination: Pagination = {
    after: start,
    limit: config.defaultPaginationLimit
  };

  // tslint:disable-next-line:no-object-literal-type-assertion
  const defaultSort = { id: asc } as Sort<I>;

  return async ({
    filter = {},
    sort = defaultSort,
    pagination = defaultPagination
  }) => {
    const db = await config.db();

    const query = config.createQuery(db);

    const paginationFilter = createPaginationFilter(pagination, sort);

    const paginationLimit =
      pagination.limit !== undefined
        ? pagination.limit
        : config.defaultPaginationLimit;

    const fullFilter = { $and: [filter, paginationFilter] };

    const createdFilter = config.createFilter(fullFilter);

    const createdSort = config.createSort(sort);

    // tslint:disable-next-line:no-any
    const knexSort = Object.keys(createdSort).reduce((prev: any, next: any) => {
      const order = xor(
        pagination.after !== start,
        createdSort[next as keyof I] === asc
      )
        ? "asc"
        : "desc";

      return { ...prev, [next]: order };
    }, {});

    const filterQuery = filterItems(query, createdFilter);

    const sortQuery = Object.keys(knexSort).reduce(
      (result, sortKey) => result.orderBy(sortKey, knexSort[sortKey]),
      filterQuery
    );

    const limitQuery = sortQuery.limit(paginationLimit + 1);

    const results = await Promise.resolve(limitQuery);

    const documents = results.slice(0, paginationLimit);

    const items: I[] = documents.map(config.convertDocumentIntoItem);

    const isEnd = results.length <= paginationLimit;

    return createGetItemsResult({ items, isEnd, pagination, sort });
  };
};
