import { Item } from "@js-items/foundation";
import Facade from "@js-items/foundation/dist/Facade";
import FactoryConfig from "./FactoryConfig";
export declare const defaultPaginationLimit = 10;
declare const _default: <I extends Item>(factoryConfig: FactoryConfig<I>) => Facade<I>;
export default _default;
