import { classNames } from "./classNames"

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('some')).toBe('some')
    })

    test('with addititonal class', () => {
        const expected = 'some class1 class2'
        expect(classNames('some', {}, ['class1', 'class2'])).toBe(expected)
    })

    test('with addititonal class', () => {
        const expected = 'some class1 class2 hovered scrollable'
        expect(classNames(
            'some',
            {hovered: true, scrollable: true},
            ['class1', 'class2']
        )).toBe(expected)
    })

    test('with addititonal class', () => {
        const expected = 'some class1 class2 hovered'
        expect(classNames(
            'some',
            {hovered: true, scrollable: false},
            ['class1', 'class2']
        )).toBe(expected)
    })
    
    test('with addititonal class', () => {
        const expected = 'some class1 class2 hovered'
        expect(classNames(
            'some',
            {hovered: true, scrollable: undefined},
            ['class1', 'class2']
        )).toBe(expected)
    })
})