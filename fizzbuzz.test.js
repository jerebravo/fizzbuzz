const fizzbuzz = require('./fizzbuzz')

describe('fizzbuzz', () => {
    test('should return 1 if receive 1', () => {
        const expected = 1
        const result = fizzbuzz(1)
        expect(expected).toBe(result)
    })

    test('should return fizz if receive multiple of 3', () => {
        const expected = 'fizz'
        const result = fizzbuzz(3)
        expect(expected).toBe(result)
    })

    test('should return buzz if receive multiple of 5', () => {
        const expected = 'buzz'
        const result = fizzbuzz(5)
        expect(expected).toBe(result)
    })

    test('should return fizzbuzz if receive multiple of 3 and 5', () => {
        const expected = 'fizzbuzz'
        const result = fizzbuzz(15)
        expect(expected).toBe(result)
    })

    test('should return error message if receive a number less to 1', () => {
        const expected = 'Error: the number if less to 1'
        const result =  fizzbuzz(0)
        expect(expected).toBe(result)
    })

    test('should return error message if not receive a number', () => {
        const expected = 'Error: this is not a number'
        const result = fizzbuzz('1')
        expect(expected).toBe(result)
    })
})