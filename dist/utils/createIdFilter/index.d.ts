import { Filter, Item } from "@js-items/foundation";
import FacadeConfig from "../../Config";
export interface Options<I extends Item> {
    readonly id: string;
    readonly filter: Filter<I>;
    readonly config: FacadeConfig<I>;
}
declare const _default: <I extends Item>({ id, filter, config }: Options<I>) => any;
export default _default;
