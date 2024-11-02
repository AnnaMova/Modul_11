import { countDown } from "./count";

describe("обратный отсчет с заданного числа", () => {
  it("3 = 321", () => expect(countDown(3)).toBe("321"));
  it("5 = 54321", () => expect(countDown(5)).toBe("54321"));

});
