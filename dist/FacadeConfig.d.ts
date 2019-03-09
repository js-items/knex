import { Filter, Item, Sort } from "@js-items/foundation";
import * as knex from "knex";
export declare type Document = any;
export default interface FacadeConfig<I extends Item> {
    readonly convertItemIntoDocument: (item: Partial<I>) => Document;
    readonly convertDocumentIntoItem: (document: Document) => I;
    readonly createFilter: (filter: Filter<I>) => any;
    readonly createQuery: (db: knex) => knex.QueryBuilder;
    readonly createSort: (sort: Sort<I>) => any;
    readonly db: () => Promise<knex>;
    readonly defaultPaginationLimit: number;
    readonly itemName: string;
    readonly tableName: string;
}
