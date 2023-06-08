import { sumEven } from ".";

// soma somente os valors pares de um array
describe("sumEven", () => {
    it("Dever retornar 0 quando passamos o array vazio", () => {
        expect(sumEven([])).toBe(0);
    });
    
    it("Dever retornar 0 quando passamos o array [1]", () => {
        expect(sumEven([1])).toBe(0);
    });
    
    it("Dever retornar 2 quando passamos o array [1, 2]", () => {
        expect(sumEven([1, 2])).toBe(2);
    });
    
    it("Dever retornar 2 quando passamos o array [1, 2, 3]", () => {
        expect(sumEven([1, 2, 3])).toBe(2);
    });
    
    it("Dever retornar 6 quando passamos o array [1, 2, 3, 4]", () => {
        expect(sumEven([1, 2, 3, 4])).toBe(6);
    });
    
    it("Dever retornar 6 quando passamos o array [1, 2, 3, 4, 5]", () => {
        expect(sumEven([1, 2, 3, 4, 5])).toBe(6);
    });
    
    it("Dever retornar 22 quando passamos o array [4, 6, 12, 5]", () => {
        expect(sumEven([4, 6, 12, 5])).toBe(22);
    });
    
    it("Dever retornar 546 quando passamos o array [9, 234, 312, 999, 21 , 2311]", () => {
        expect(sumEven([9, 234, 312, 999, 21, 2311])).toBe(546);
    });
    
    it("Dever retornar 73098 quando passamos o array [533, 234, 23423, 32, 48876]", () => {
        expect(sumEven([533, 234, 23423, 32, 48876])).toBe(49142);
    });
    
    it("Dever retornar -10 quando passamos o array [-1, -5, -10, -45]", () => {
        expect(sumEven([-1, 5, -10, -45])).toBe(-10);
    });

    it("Dever retornar -2 quando passamos o array [-2, -7, -31]", () => {
        expect(sumEven([-2, -7, -31])).toBe(-2);
    })

    it("Dever retornar 18 quando passamos o array [-2, 20, -31]", () => {
        expect(sumEven([-2, 20, -31])).toBe(18);
    })
});