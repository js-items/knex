import { Filter, Item } from "@js-items/foundation";
import FacadeConfig from "../../FacadeConfig";

export interface Options<I extends Item> {
  readonly id: string;
  readonly filter: Filter<I>;
  readonly config: FacadeConfig<I>;
}

export default <I extends Item>({ id, filter, config }: Options<I>) => {
  // tslint:disable-next-line:no-object-literal-type-assertion
  const idFilter = { id } as Filter<I>;
  const fullFilter = { $and: [idFilter, filter] };
  
  return config.createFilter(fullFilter);
};
