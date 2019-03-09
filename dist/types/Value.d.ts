/// <reference types="node" />
import Knex from "knex";
declare type Value = string | number | boolean | Date | string[] | number[] | Date[] | boolean[] | Buffer | Knex.Raw;
export default Value;
