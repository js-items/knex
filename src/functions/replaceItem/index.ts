import { Item, ItemNotFoundError, ReplaceItem } from "@js-items/foundation";
import FacadeConfig from "../../Config";
import createIdFilter from "../../utils/createIdFilter";
import filterItems from "../../utils/filterItems";

export default <I extends Item>(
  config: FacadeConfig<I>
): ReplaceItem<I> => async ({ id, item, filter = {} }) => {
  const db = await config.db();

  const query = config.createQuery(db);

  // tslint:disable-next-line:no-any
  const document = config.convertItemIntoDocument({ ...(item as any), id });

  const createdFilter = createIdFilter({ id, filter, config });

  const response = await Promise.resolve(
    filterItems(query, createdFilter).update(document)
  );
  
  if (!response) {
    throw new ItemNotFoundError(config.itemName, id);
  }

  return { item };
};
