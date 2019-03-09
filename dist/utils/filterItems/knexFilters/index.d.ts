/// <reference types="node" />
import { Filter, Item } from "@js-items/foundation";
import { QueryBuilder } from "knex";
export declare const addAndToQuery: <I extends Item>(query: QueryBuilder, filters: Filter<I>[]) => QueryBuilder;
export declare const addOrToQuery: <I extends Item>(query: QueryBuilder, filters: Filter<I>[]) => QueryBuilder;
export declare const addNorToQuery: <I extends Item>(query: QueryBuilder, filters: Filter<I>[]) => QueryBuilder;
export declare const addOperatorToQuery: (query: QueryBuilder, property: string, operator: string, value?: string | number | boolean | string[] | number[] | Date | Buffer | Date[] | boolean[] | import("knex").Raw | undefined) => QueryBuilder;
