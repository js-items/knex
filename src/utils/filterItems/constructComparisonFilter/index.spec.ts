import * as knexFilters from "../knexFilters";
import { queryCreatorsMap } from "./index";

jest.mock("../knexFilters");

describe("queryCreatorsMap", () => {
  const testKey = "stringProperty";
  const testValue = "zebra";

  const defaultOptions = {
    property: testKey,
    query: {
      where: jest.fn(),
      whereIn: jest.fn(),
      whereNot: jest.fn(),
      whereNotIn: jest.fn()
      // tslint:disable-next-line:no-any
    } as any
  };

  beforeEach(() => {
    jest.spyOn(knexFilters, "addOperatorToQuery");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("tests $eq op is present in filter", () => {
    queryCreatorsMap.$eq({
      ...defaultOptions,
      filter: {
        $eq: testValue
      }
    });

    expect(defaultOptions.query.where).toHaveBeenCalledWith(testKey, testValue);
  });

  it("tests $eq op is not present in filter", () => {
    const result = queryCreatorsMap.$eq({
      ...defaultOptions,
      filter: {}
    });

    expect(result).toEqual(defaultOptions.query);
    expect(defaultOptions.query.where).not.toHaveBeenCalled();
  });

  it("tests $ne op is present in filter", () => {
    queryCreatorsMap.$ne({
      ...defaultOptions,
      filter: {
        $ne: testValue
      }
    });

    expect(knexFilters.addOperatorToQuery).toHaveBeenCalledWith(
      defaultOptions.query,
      testKey,
      "<>",
      testValue
    );
  });


  it("tests $ne op is not present in filter", () => {
    const result = queryCreatorsMap.$ne({
      ...defaultOptions,
      filter: {
      }
    });

    expect(result).toEqual(defaultOptions.query);
    expect(knexFilters.addOperatorToQuery).not.toHaveBeenCalled();
  });

  it("tests $gt op is present in filter", () => {
    queryCreatorsMap.$gt({
      ...defaultOptions,
      filter: {
        $gt: testValue
      }
    });

    expect(knexFilters.addOperatorToQuery).toHaveBeenCalledWith(
      defaultOptions.query,
      testKey,
      ">",
      testValue
    );
  });

  it("tests $gt op is not present in filter", () => {
    const result = queryCreatorsMap.$gt({
      ...defaultOptions,
      filter: {}
    });

    expect(result).toEqual(defaultOptions.query);
    expect(knexFilters.addOperatorToQuery).not.toHaveBeenCalled();
  });

  it("tests $gte op is present in filter", () => {
    queryCreatorsMap.$gte({
      ...defaultOptions,
      filter: {
        $gte: testValue
      }
    });

    expect(knexFilters.addOperatorToQuery).toHaveBeenCalledWith(
      defaultOptions.query,
      testKey,
      ">=",
      testValue
    );
  });

  it("tests $gte op is not present in filter", () => {
    const result = queryCreatorsMap.$gte({
      ...defaultOptions,
      filter: {}
    });

    expect(result).toEqual(defaultOptions.query);
    expect(knexFilters.addOperatorToQuery).not.toHaveBeenCalled();
  });

  it("tests $lt op is present in filter", () => {
    queryCreatorsMap.$lt({
      ...defaultOptions,
      filter: {
        $lt: testValue
      }
    });

    expect(knexFilters.addOperatorToQuery).toHaveBeenCalledWith(
      defaultOptions.query,
      testKey,
      "<",
      testValue
    );
  });

  it("tests $lt op is not present in filter", () => {
    const result = queryCreatorsMap.$lt({
      ...defaultOptions,
      filter: {}
    });

    expect(result).toEqual(defaultOptions.query);
    expect(knexFilters.addOperatorToQuery).not.toHaveBeenCalled();
  });

  it("tests $lte op is present in filter", () => {
    queryCreatorsMap.$lte({
      ...defaultOptions,
      filter: {
        $lte: testValue
      }
    });

    expect(knexFilters.addOperatorToQuery).toHaveBeenCalledWith(
      defaultOptions.query,
      testKey,
      "<=",
      testValue
    );
  });

  it("tests $lte op is not present in filter", () => {
    const result = queryCreatorsMap.$lte({
      ...defaultOptions,
      filter: {}
    });

    expect(result).toEqual(defaultOptions.query);
    expect(knexFilters.addOperatorToQuery).not.toHaveBeenCalled();
  });

  it("tests $in op is present in filter", () => {
    queryCreatorsMap.$in({
      ...defaultOptions,
      filter: {
        $in: [testValue]
      }
    });

    expect(defaultOptions.query.whereIn).toHaveBeenCalledWith(testKey, [
      testValue
    ]);
  });

  it("tests $in op is not present in filter", () => {
    const query = queryCreatorsMap.$in({
      ...defaultOptions,
      filter: {}
    });

    expect(defaultOptions.query.whereIn).not.toHaveBeenCalled();
    expect(query).toEqual(defaultOptions.query);
  });

  it("tests $nin op is present in filter", () => {
    queryCreatorsMap.$nin({
      ...defaultOptions,
      filter: {
        $nin: [testValue]
      }
    });

    expect(defaultOptions.query.whereNotIn).toHaveBeenCalledWith(testKey, [
      testValue
    ]);
  });

  it("tests $nin op is not present in filter", () => {
    const result = queryCreatorsMap.$nin({
      ...defaultOptions,
      filter: {
      }
    });

    expect(result).toEqual(defaultOptions.query);
    expect(defaultOptions.query.whereNotIn).not.toHaveBeenCalled();
  });

  it("tests $not op is present in filter", () => {
    queryCreatorsMap.$not({
      ...defaultOptions,
      filter: {
        $not: testValue
      }
    });

    expect(defaultOptions.query.whereNot).toHaveBeenCalledTimes(1);
  });

  it("tests $not op is not present in filter", () => {
    const result = queryCreatorsMap.$not({
      ...defaultOptions,
      filter: {}
    });

    expect(defaultOptions.query.whereNot).not.toHaveBeenCalled();
    expect(result).toEqual(defaultOptions.query);
  });

  it("tests search op is present in filter", () => {
    queryCreatorsMap.$search({
      ...defaultOptions,
      filter: {
        $search: testValue
      }
    });

    expect(defaultOptions.query.where).toHaveBeenCalledWith(testKey, "like", `%${testValue}%`);
  });

  it("tests search op is not present in filter", () => {
    const result = queryCreatorsMap.$search({
      ...defaultOptions,
      filter: {
      }
    });

    expect(result).toEqual(defaultOptions.query);
    expect(defaultOptions.query.where).not.toHaveBeenCalled();
  });
  // tslint:disable-next-line:max-file-line-count
});
