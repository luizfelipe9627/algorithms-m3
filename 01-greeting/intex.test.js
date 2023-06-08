import { greet } from "./."
describe("greet1", () => { 
    it("Dever retornar \"Hello Maria\" quando passamos a palavra \"Maria\"", () => {
        expect(greet("Maria")).toBe("Hello Maria")
    })

  it("Dever retornar \"Hello Alvin\" quando passamos a palavra \"Alvin\"", () => {
        expect(greet("Alvin")).toBe("Hello Alvin")
  })
  
  it("Dever retornar \"Hello Pedro Lucas\" quando passamos a palavra \"Pedro Lucas\"", () => {
        expect(greet("Pedro Lucas")).toBe("Hello Pedro Lucas")
  })
})