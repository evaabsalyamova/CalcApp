import { convertResult } from "./index";

describe("convertResult", () => {
  test("must return value in string type after convert from number type", () => {
    expect(convertResult(100)).toBe("100");
  });
  test("must return correct value if argument was negative", () => {
    expect(convertResult(-100)).toBe("-100");
  });
  test("must return correct value if argument was fractional", () => {
    expect(convertResult(100.55)).toBe("100.55");
  });
  test("must return correct value after round off x.xx", () => {
    expect(convertResult(100.5544)).toBe("100.55");
  });
});
