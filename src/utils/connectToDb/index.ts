import knex from "knex";
import once from "lodash.once";

export default (connectionConfig: knex.Config) =>
  once(async () => knex(connectionConfig));
