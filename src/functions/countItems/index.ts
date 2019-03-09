import { CountItems, Item } from "@js-items/foundation";
import FacadeConfig from "../../FacadeConfig";
import filterItems from "../../utils/filterItems";

export default <I extends Item>(
  config: FacadeConfig<I>
): CountItems<I> => async ({ filter = {} }) => {
  const db = await config.db();

  const query = config.createQuery(db);

  const createdFilter = config.createFilter(filter);

  const [result] = await Promise.resolve(
    filterItems(query, createdFilter).count()
  );

  return { count: result["count(*)"] };
};
