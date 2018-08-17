# mock-server

[![Build Status](https://travis-ci.org/Skandar-Ln/mock-server.svg?branch=master)](https://travis-ci.org/Skandar-Ln/mock-server)
[![npm package](https://img.shields.io/npm/v/js-mock-server.svg)](https://www.npmjs.org/package/js-mock-server)
[![codecov](https://codecov.io/gh/Skandar-Ln/mock-server/branch/master/graph/badge.svg)](https://codecov.io/gh/Skandar-Ln/mock-server)

用js文件快速提供api模拟服务

## 开始

安装

```
npm install -g js-mock-server
```

build a `mock`(or other name) directory at your workplace, see example in this repository
在你的工作目录新建一个`mock`目录（名字可选），如本仓库中的mock文件夹，文件路径对应api的路径

```
mock
├── user.js
```

修改`user.js`的内容

``` js
module.export = {name: 'js-mock-server'}
```

完工，然后你可以

```
mock-server mock # default to mock
```

访问 `localhost:3000/user` 你能得到json数据 `{name: 'js-mock-server'}`
