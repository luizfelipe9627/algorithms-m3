import { maxValue } from "."

describe('maxValue', () => {
    it('Dever retornar 12 quando passamos os valores [4, 6, 12, 5]', () => {
        expect(maxValue([4, 6, 12, 5])).toBe(12)
    })

    it('Dever retornar 2311 quando passamos os valores [9, 234, 312, 999, 21, 2311]', () => {
        expect(maxValue([9, 234, 312, 999, 21, 2311])).toBe(2311)
    })

    it('Dever retornar 23423 quando passamos os valores [533, 234, 23423, 32, 432]', () => {
        expect(maxValue([533, 234, 23423, 32, 432])).toBe(23423)
    })

    it('Dever retornar 5 quando passamos os valores [5, 4, 3, 2, 1]', () => {
        expect(maxValue([5, 4, 3, 2, 1])).toBe(5)
    })

    it('Dever retornar -1 quando passamos os valores [-1, -5, -10, -45]', () => {
        expect(maxValue([-1, -5, -10, -45])).toBe(-1)
    })
  
    it('Dever retornar 0 quando passamos um array vazio []', () => {
        expect(maxValue([])).toBe(0)
    })
})