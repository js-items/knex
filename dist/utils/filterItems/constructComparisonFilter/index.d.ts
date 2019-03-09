import { ComparisonFilter } from "@js-items/foundation/dist/interfaces/Filter";
import { QueryBuilder } from "knex";
interface Options {
    readonly query: QueryBuilder;
    readonly property: string;
    readonly filter: any;
}
interface QueryCreator {
    readonly [key: string]: (options: Options) => QueryBuilder;
}
export declare const queryCreatorsMap: QueryCreator;
declare const constructComparisonFilter: <Property>(query: QueryBuilder, property: string, filter: ComparisonFilter<Property>) => QueryBuilder;
export default constructComparisonFilter;
