Typescript Webpack Use Local Dir as Package Demo
================================================

There are 2 modules in this project, and `app` will use `~common` as local package.

Develop `~common`:

```
cd ~common
npm install
```

Develop `app`:

```
cd app
npm install
npm run demo
```

这是一个不太理想的实现，太复杂，而且有些地方逻辑对应不上。

需要注意点如下：

1. `npm`需要使用5以上版本，原因是之前版本对于`file:../~common`中的相对路径处理有误
1. `package.json`中引用本地module: `"~common": "file:../~common"`
1. `webpack.config.ts` -> `ts-loader` 需要有配置`allowTsInNodeModules: true`
  1. 按说这个配置就是专门解决这个demo的问题的，但实际上把它去掉也不影响结果
  1. 该选项要求相应的module被添加到tsconfig中的files或者include里
    - 我觉得应该添加`include: ["./node_modules/~common"]`，但实际上无用
    - 有用的做法是添加成`include: ["../~common"]`，但感觉跟`allowTsInNodeModules`没有关系
    - 详情参看：<https://github.com/TypeStrong/ts-loader/pull/773/files>
1. `tsconfig.json`中添加`include: ["../~common"]`
1. `webpack.config.ts` -> `resolve` -> `extensions: [".ts"]`
1. 代码中使用`import {hello} from '~common/hello'`

不需要：
1. webpack config中不需要`~common`的alias
1. `import {hello} from '~common/hello'`中不需要写`.ts`
  - 另一种可行的办法是
    - tsconfig中不需要添加include
    - `import {hello} from '~common/hello.ts'`这里添加`.ts`后缀，报错不用理会

                                        