import { triangleArea } from './index.js';
describe('triangleArea', () => {
    it('Dever retornar 7.5 quando passamos os valores 3 e 5', () => {
        expect(triangleArea(3, 5)).toBe(7.5)
    })

    it('Dever retornar 12.5 quando passamos os valores 5 e 5', () => {
        expect(triangleArea(5, 5)).toBe(12.5)
    })

    it('Dever retornar 5 quando passamos os valores 2 e 5', () => {
        expect(triangleArea(2, 5)).toBe(5)
    })
})