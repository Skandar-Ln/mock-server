# mock-server

[![Build Status](https://travis-ci.org/Skandar-Ln/mock-server.svg?branch=master)](https://travis-ci.org/Skandar-Ln/mock-server)
[![npm package](https://img.shields.io/npm/v/js-mock-server.svg)](https://www.npmjs.org/package/js-mock-server)
[![codecov](https://codecov.io/gh/Skandar-Ln/mock-server/branch/master/graph/badge.svg)](https://codecov.io/gh/Skandar-Ln/mock-server)

Get a full control mock API with js files in less than 10 seconds

[中文 README](README-zh_CN.md)

## Getting started

install

```bash
$ npm install -g js-mock-server
```

build a `mock`(or other name) directory at your workplace, see example in this repository

```
mock
├── user.js
```

then edit the content of `user.js`

```js
module.exports = {name: 'js-mock-server'}
```

all done, you can

```bash
$ mock-server mock     # default to mock
```
visit `localhost:3000/user` you will get `{name: 'js-mock-server'}`
