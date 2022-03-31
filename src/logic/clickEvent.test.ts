import { clickCheckbox } from "./clickEvent";

describe('clickCheckboxのテスト', () => {
    it('追加', () => {
        expect(clickCheckbox(['apple', 'banana'], 'grape')).toEqual(['apple', 'banana', 'grape'])
    })

    it('削除', () => {
        expect(clickCheckbox(['apple', 'banana'], 'banana')).toEqual(['apple'])
    })
})