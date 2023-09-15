const analyzeArray = require('../src/js/analyzeArray.js');

test('analyze array of numbers', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        avg: 4,
        min: 1,
        max: 8,
        length: 6
    })
})

test('analyze empty array', () => {
    expect(analyzeArray([])).toEqual(null)
})