const temp = {};

describe('', () => {
    test('should have target env mockPath', () => { 
        temp.argv2 = process.argv[2];
        process.argv[2] = 'targetMockPath';

       require('../env').setMockPath();
        expect(process.env.mockPath).toEqual(
            expect.stringContaining('targetMockPath')
        );

        delete require.cache[require.resolve('../env')];
        process.argv[2] = temp.argv2;
    });
});

describe('', () => {
    test('should have default env mockPath', () => {
        require('../env').setMockPath();

        expect(process.env.mockPath).toEqual(
            expect.stringMatching(/mock$/)
        );
    });
});
