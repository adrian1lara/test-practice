
const capitalize = require('../src/js/capitalize.js');

test('capitalize a string', () => {
    expect(capitalize('abc')).toBe('Abc');   
});

test('capitalize a string', () => {
    expect(capitalize('cAAADa')).toBe('Caaada');
})
