import { Item, UpdateItem } from "@js-items/foundation";
import FacadeConfig from "../../FacadeConfig";
import createIdFilter from "../../utils/createIdFilter";
import filterItems from "../../utils/filterItems";
import getItem from "../getItem";

export default <I extends Item>(
  config: FacadeConfig<I>
): UpdateItem<I> => async ({ id, patch, filter = {} }) => {
  const db = await config.db();

  const query = config.createQuery(db);

  // tslint:disable-next-line:no-any
  const document = config.convertItemIntoDocument({ ...(patch as any), id });

  const constructedFilter = createIdFilter({ id, filter, config });

  await Promise.resolve(filterItems(query, constructedFilter).update(document));

  return getItem<I>(config)({ id });
};
