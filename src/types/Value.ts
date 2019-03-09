import Knex from "knex";
type Value =
  | string
  | number
  | boolean
  | Date
  | string[]
  | number[]
  | Date[]
  | boolean[]
  | Buffer
  | Knex.Raw;

export default Value;
