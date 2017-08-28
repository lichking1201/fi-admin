# admin

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

部署脚本集成

Login 单点登陆集成

scss 变量自动注入

font-awesome 字体集成

默认引入ElementUI 1.4+

全局辅助工具引入，包括

* window.axios 网络库
* window.moment 时间处理
* window._ loadsh 工具库

app 命名空间约束

* app.api 接口配置
* app.constant 常量配置

后端 api 格式约定
```
{
  code: <int>,
  data: <any>,
  msg: <string>
}

分页接口
request params
{
  order_by: <string> 排序的key,
  order: <0|1> 0升序 1降序,
  page: <int> 当前分页
}

response data
{
  code: <int>,
  data: {
    data: <array>,
    page: <int>,
    rows: <int>,
    total: <int>,
    total_page: <int>
  },
  msg: <string>
}
```

// api 接口权限