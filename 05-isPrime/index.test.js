import { isPrime } from ".";

describe("isPrime", () => {
    it("Dever retornar true quando passamos o valor 2", () => {
        expect(isPrime(2)).toBe(true);
    });
    
    it("Dever retornar true quando passamos o valor 3", () => {
        expect(isPrime(3)).toBe(true);
    });
    
    it("Dever retornar true quando passamos o valor 5", () => {
        expect(isPrime(5)).toBe(true);
    });
    
    it("Dever retornar true quando passamos o valor 7", () => {
        expect(isPrime(7)).toBe(true);
    });

    it("Deve retornar false quando passamos o valor 9", () => {
        expect(isPrime(9)).toBe(false);
    })
    
    it("Dever retornar true quando passamos o valor 11", () => {
        expect(isPrime(11)).toBe(true);
    });
    
    it("Dever retornar true quando passamos o valor 13", () => {
        expect(isPrime(13)).toBe(true);
    });

    it("Deve retornar false quando passamos o valor 15", () => {
        expect(isPrime(15)).toBe(false);
    })
    
    it("Dever retornar true quando passamos o valor 17", () => {
        expect(isPrime(17)).toBe(true);
    });
    
    it("Dever retornar true quando passamos o valor 19", () => {
        expect(isPrime(19)).toBe(true);
    });
    
    it("Dever retornar true quando passamos o valor 23", () => {
        expect(isPrime(23)).toBe(true);
    });
    
    it("Dever retornar true quando passamos o valor 29", () => {
        expect(isPrime(29)).toBe(true);
    });
    
    it("Dever retornar true quando passamos o valor 31", () => {
        expect(isPrime(31)).toBe(true);
    });
    
    it("Dever retornar true quando passamos o valor 37", () => {
        expect(isPrime(37)).toBe(true);
    });
    
    it("Dever retornar true quando passamos o valor 41", () => {
        expect(isPrime(41)).toBe(true);
    });
    
    it("Dever retornar true quando passamos o valor 43", () => {
        expect(isPrime(43)).toBe(true);
    });
    
    it("Dever retornar true quando passamos o valor 47", () => {
        expect(isPrime(47)).toBe(true);
    });
    
    it("Dever retornar true quando passamos o valor 53", () => {
        expect(isPrime(53)).toBe(true);
    });
    
    it("Dever retornar true quando passamos o valor 59", () => {
        expect(isPrime(59)).toBe(true);
    });
})