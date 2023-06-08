import { mostUsedChar } from ".";

describe("mostUsedChar", () => {
    it("Dever retornar 'f' quando passamos a palavra 'fdgdfgff'", () => {
        expect(mostUsedChar("fdgdfgff")).toBe("f");
    });

    it("Dever retornar 'm' quando passamos a palavra 'Lorem ipsum'", () => {
        expect(mostUsedChar("Lorem ipsum")).toBe("m");
    });

    it("Dever retornar 's' quando passamos a palavra 'adsassdasd'", () => {
        expect(mostUsedChar("adsassdasd")).toBe("s");
    });

    it("Dever retornar 'e' quando passamos a palavra 'testeeeee'", () => {
        expect(mostUsedChar("testeeeee")).toBe("e");
    });
});