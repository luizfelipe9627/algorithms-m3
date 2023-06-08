import { sum } from ".";

describe("sum", () => {
  it("Dever retornar 0 quando passamos o array vazio", () => {
    expect(sum([])).toBe(0);
  });

  it("Dever retornar 1 quando passamos o array [1]", () => {
    expect(sum([1])).toBe(1);
  });

  it("Dever retornar 3 quando passamos o array [1, 2]", () => {
    expect(sum([1, 2])).toBe(3);
  });

  it("Dever retornar 6 quando passamos o array [1, 2, 3]", () => {
    expect(sum([1, 2, 3])).toBe(6);
  });

  it("Dever retornar 10 quando passamos o array [1, 2, 3, 4]", () => {
    expect(sum([1, 2, 3, 4])).toBe(10);
  });

  it("Dever retornar 15 quando passamos o array [1, 2, 3, 4, 5]", () => {
    expect(sum([1, 2, 3, 4, 5])).toBe(15);
  });

  it("Dever retornar 27 quando passamos o array [4, 6, 12, 5]", () => {
    expect(sum([4, 6, 12, 5])).toBe(27);
  });

  it("Dever retornar 3886 quando passamos o array [9, 234, 312, 999, 21 , 2311]", () => {
    expect(sum([9, 234, 312, 999, 21, 2311])).toBe(3886);
  });

  it("Dever retornar 73098 quando passamos o array [533, 234, 23423, 32, 48876]", () => {
    expect(sum([533, 234, 23423, 32, 48876])).toBe(73098);
  });

  // Criar um teste para numeros negativos

  it("Dever retornar -51 quando passamos o array [-1, 5, -10, -45]", () => {
    expect(sum([-1, 5, -10, -45])).toBe(-51);
  });

  it("Dever retornar -40 quando passamos o array [-2, -7, -31]", () => {
    expect(sum([-2, -7, -31])).toBe(-40);
  });
});
