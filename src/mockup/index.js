const path = require('path');

const load = (mockPath, reqPath, params) => {
    const realPath = path.join(mockPath, reqPath);
    let data;

    try {
        data = require(realPath);
        delete require.cache[require.resolve(realPath)];
    }
    catch (e) {
        throw(`can not find the mock file at${realPath}`);
    }

    return data;
}

module.exports = {
    load
}
