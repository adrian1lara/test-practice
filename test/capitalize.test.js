
const capitalize = require('../src/js/capitalize.js');

test('capitalize a string', () => {
    expect(capitalize('abc')).toBe('Abc');   
});

test('capitalize cAAADa string to Caaada', () => {
    expect(capitalize('cAAADa')).toBe('Caaada');
})
