import { fibonacci } from "."

describe('fibonacci', () => {
    it('Dever retornar 0 quando passamos o valor 0', () => {
        expect(fibonacci(0)).toBe(0)
    })

    it('Dever retornar 1 quando passamos o valor 1', () => {
        expect(fibonacci(1)).toBe(1)
    })

    it('Dever retornar 1 quando passamos o valor 2', () => {
        expect(fibonacci(2)).toBe(1)
    })

    it('Dever retornar 2 quando passamos o valor 3', () => {
        expect(fibonacci(3)).toBe(2)
    })

    it('Dever retornar 3 quando passamos o valor 4', () => {
        expect(fibonacci(4)).toBe(3)
    })

    it('Dever retornar 5 quando passamos o valor 5', () => {
        expect(fibonacci(5)).toBe(5)
    })

    it('deve retonar 8 quando passamos o valor 6', () => {
        expect(fibonacci(6)).toBe(8)
    })

    it('Dever retornar 9227465 quando passamos o valor 35', () => {
        expect(fibonacci(35)).toBe(9227465)
    })

    it('Dever retornar 1836311903 quando passamos o valor 46', () => {
        expect(fibonacci(46)).toBe(1836311903)
    })
})