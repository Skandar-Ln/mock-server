const path = require('path');


const setMockPath = () => {
    const argPath = process.argv[2] || 'mock';

    const mockPath = path.resolve(process.cwd(), argPath);

    process.env.mockPath = mockPath;
};

module.exports = {setMockPath};
