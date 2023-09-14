const reverseString = require('../src/js/reverseString.js');

test('reverse abc string to cba', () => {
    expect(reverseString('abc')).toBe('cba');
})

test('reverse cAAADa string to aDAAAc', () => {
    expect(reverseString('cAAADa')).toBe('aDAAAc');
})