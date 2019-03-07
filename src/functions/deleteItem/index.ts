import { DeleteItem, Item, ItemNotFoundError } from "@js-items/foundation";
import FacadeConfig from "../../FacadeConfig";
import createIdFilter from "../../utils/createIdFilter";
import filterItems from "../../utils/filterItems";

export default <I extends Item>(
  config: FacadeConfig<I>
): DeleteItem<I> => async ({ id, filter = {} }) => {
  const db = await config.db();

  const query = config.createQuery(db);

  const createdFilter = createIdFilter({ id, filter, config });

  const count = await Promise.resolve(
    filterItems(query, createdFilter).delete()
  );

  if (count === 0) {
    throw new ItemNotFoundError(config.itemName, id);
  }
};
