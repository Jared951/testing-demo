const {returnTwo, greeting, add, subtract, multiply, divide} = require('./functions')

test('this test returns 2', () => {
    expect(returnTwo()).toBe(2)
})

test('this test returns a greeting', () => {
    expect(greeting('James')).toBe('Hello James.')
    expect(greeting('Jill')).toBe('Hello Jill.')
})

test('this test returns addition', () => {
    expect(add(1 ,2)).toBe(3)
    expect(add(5 ,9)).toBe(14)
})

describe('extra challenge questions', () => {

    test('this test returns subtraction', () => {
        expect(subtract(2, 1)).toBe(1)
    })

    test('this test returns multiplication', () => {
        expect(multiply(2, 2)).toBe(4)
    })

    test('this test returns division', () => {
        expect(divide(8, 2)).toBe(4)
    })
})