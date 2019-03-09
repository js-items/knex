import { GetItem, Item, ItemNotFoundError } from "@js-items/foundation";
import FacadeConfig from "../../Config";
import createIdFilter from "../../utils/createIdFilter";
import filterItems from "../../utils/filterItems";

export default <I extends Item>(config: FacadeConfig<I>): GetItem<I> => async ({
  id,
  filter = {}
}) => {
  const db = await config.db();

  const query = config.createQuery(db);

  const createdFilter = createIdFilter({ id, filter, config });

  const document = await Promise.resolve(
    filterItems(query, createdFilter).first()
  );

  if (!document) {
    throw new ItemNotFoundError(config.itemName, id);
  }

  const item = config.convertDocumentIntoItem(document);

  return { item };
};
