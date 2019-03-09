import { Filter, Item, Sort } from "@js-items/foundation";
import * as knex from "knex";
import { Document } from "./Config";

export default interface FacadeConfig<I extends Item> {
  readonly convertDocumentIntoItem?: (document: Document) => I;
  readonly convertItemIntoDocument?: (item: Partial<I>) => Document;
  // tslint:disable-next-line:no-any
  readonly constructFilter?: (filter: Filter<I>) => any;
  readonly constructQuery?: (table: knex) => knex.QueryBuilder;
  // tslint:disable-next-line:no-any
  readonly constructSort?: (sort: Sort<I>) => any;
  readonly db: () => Promise<knex>;
  readonly defaultPaginationLimit?: number;
  readonly itemName: string;
  readonly tableName?: string;
}
