import { ConflictingItemError, CreateItem, Item } from "@js-items/foundation";
import FacadeConfig from "../../FacadeConfig";

const conflictErrorCode = 1062;

export default <I extends Item>(
  config: FacadeConfig<I>
): CreateItem<I> => async ({ id, item }) => {

  const db = await config.db();

  const query = config.createQuery(db);

  // tslint:disable-next-line:no-any
  const document = config.convertItemIntoDocument({ ...(item as any), id });
  
  try {
    await Promise.resolve(query.insert(document));
  } catch (err) {
    if (err.errno === conflictErrorCode) {
      throw new ConflictingItemError(config.itemName, id);
    }
    /* istanbul ignore next */
    throw err;
  }

  return { item };
};
