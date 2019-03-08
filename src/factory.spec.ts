import testFacade from "@js-items/foundation/dist/testFacade";
import { config } from "dotenv";
config();
import { TestItem } from "@js-items/foundation/dist/functions/utils/testItem";
import factory from "./factory";
import connectToDb from "./utils/connectToDb";

const {
  KNEX_DATABASE,
  KNEX_PASSWORD,
  KNEX_USER,
  KNEX_CLIENT,
  KNEX_HOST
} = process.env;

const db = connectToDb({
  client: KNEX_CLIENT,
  connection: {
    database: KNEX_DATABASE,
    host: KNEX_HOST,
    ...(KNEX_PASSWORD === undefined
      ? {}
      : {
          password: KNEX_PASSWORD
        }),
    user: KNEX_USER
  }
});

const tableName = "items";

beforeAll(async () => {
  const schema = (await db()).schema;

  await Promise.resolve(schema.dropTableIfExists(tableName));

  await Promise.resolve(
    schema.createTable(tableName, async table => {
      table.string("id").unique();
      table.string("stringProperty");
      table.float("numberProperty");
      table.boolean("booleanProperty");
    })
  );
});

const facade = factory<TestItem>({
  convertDocumentIntoItem: document => ({
    ...document,
    booleanProperty: document.booleanProperty === 1
  }),
  convertItemIntoDocument: item => ({
    ...item,
    booleanProperty: item.booleanProperty ? 1 : 0
  }),
  db,
  itemName: "TestItem",
  tableName
});

testFacade({ facade });
