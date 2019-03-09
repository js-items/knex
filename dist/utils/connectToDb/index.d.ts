import knex from "knex";
declare const _default: (connectionConfig: knex.Config) => () => Promise<knex>;
export default _default;
