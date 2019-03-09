import { Item } from "@js-items/foundation";
import Facade from "@js-items/foundation/dist/Facade";
import FacadeConfig, { Document } from "./FacadeConfig";
import FactoryConfig from "./FactoryConfig";
import {
  countItems,
  createItem,
  deleteItem,
  deleteItems,
  getItem,
  getItems,
  replaceItem,
  updateItem
} from "./functions";

export const defaultPaginationLimit = 10;

export default <I extends Item>(factoryConfig: FactoryConfig<I>): Facade<I> => {
  const facadeConfig: FacadeConfig<I> = {
    convertDocumentIntoItem: (document: Document) => document,
    convertItemIntoDocument: (item: Partial<I>) => item,
    createFilter: filter => filter,
    createQuery: db => db.table(facadeConfig.tableName),
    createSort: sort => sort,
    defaultPaginationLimit,
    itemName: factoryConfig.itemName,
    tableName: factoryConfig.itemName,
    ...factoryConfig
  };

  return {
    countItems: countItems<I>(facadeConfig),
    createItem: createItem<I>(facadeConfig),
    deleteItem: deleteItem<I>(facadeConfig),
    deleteItems: deleteItems<I>(facadeConfig),
    getItem: getItem<I>(facadeConfig),
    getItems: getItems<I>(facadeConfig),
    replaceItem: replaceItem<I>(facadeConfig),
    updateItem: updateItem<I>(facadeConfig)
  };
};
