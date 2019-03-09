import { DeleteItems, Item } from "@js-items/foundation";
import FacadeConfig from "../../Config";
import filterItems from "../../utils/filterItems";

export default <I extends Item>(
  config: FacadeConfig<I>
): DeleteItems<I> => async ({ filter = {} }) => {
  const db = await config.db();

  const query = config.createQuery(db);

  const createdFilter = config.createFilter(filter);

  await Promise.resolve(filterItems(query, createdFilter).delete());
};
