const mockup = require('../');
const path = require('path');

test('load what I want', () => {
    const mockPath = path.resolve(__dirname, '../../../mock');
    const data = mockup.load(mockPath, 'user');
    expect(data).toEqual({name: 'Skandar'});
});

test('should throw when no match file', () => {
    const mockPath = path.resolve(__dirname, '../../../mock');
    expect(() => {
        const data = mockup.load(mockPath, 'user2');
    }).toThrow();
});
