import { addOperatorToQuery } from "./index";

describe("addOperatorToQuery", () => {
  const operator = ">";
  const property = "numberProperty";
  const query = {
    where: jest.fn(() => "whereQuery")
    // tslint:disable-next-line:no-any
  } as any;

  it("returns where query when value is not undefined", () => {
    const value = '5';
    const result = addOperatorToQuery(query, property, operator, value);

    expect(result).toEqual("whereQuery");
  });

  it("returns initial query when value is undefined", () => {
    const value = undefined;
    const result = addOperatorToQuery(query, property, operator, value);

    expect(result).toEqual(query);
  });
});
