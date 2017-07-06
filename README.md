# nodeclub2

[nodeclub](https://github.com/cnodejs/nodeclub) powered by [egg](https://eggjs.org)

最近想学习 eggjs 和 vue, 想找一个代码量中等, 功能和设计明确且完整的项目, 发现重构
nodeclub 是个不错的主意, 所以有了这个项目 nodeclub2. 目标:

- 拥有 nodeclub 的全部功能
- 基于 eggjs, 约定优于配置, 按照统一的约定进行应用开发, 拥有更佳的设计和实现, 如:
   * 更规范化的目录结构, controller, service, model, router 等合理抽象
   * 更简洁清晰的代码, 使用 eggjs 插件和 es6 语法, 不再需要 eventproxy
   * [restful 风格的 url](http://www.eggjs.org/zh-cn/basics/router.html#restful-风格的-url-定义)
- 基于 vue 的 view 层(暂不实现)

### Development
```shell
$ npm install
$ npm run dev
$ open http://localhost:7001
```

### Deploy

Use `EGG_SERVER_ENV=prod` to enable prod mode

```shell
$ EGG_SERVER_ENV=prod npm start
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.
