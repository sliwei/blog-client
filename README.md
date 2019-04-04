# blog-client

> 博客客户端

## Dev Setup

``` bash
# 安装
npm install

# 启动
npm run dev

# 访问
localhost:3003

```

## Build Setup

``` bash

# 打包
npm run build

# 复制以下文件到线上环境
> .nuxt
> static
> nuxt.config.js
> package.json

# 安装
npm i

# 启动
npm run pm2 || pm2 start npm --name blog-client -- start

# 重启
pm2 restart blog-client || pm2 restart :id

```

## 项目结构

```

# 开发环境文件
blog-client
  .nuxt               // 打包生成文件夹
  assets              // 
  components
  layouts
  middleware
  node_modules
  pages
  plugins
  server
  static
  store
  .editorconfig
  .eslintrc.js
  .prettierrc
  nuxt.config.js
  package.json

# 线上环境文件(打包完成后，Jenkins或复制以下文件到线上运行即可)
blog-serve
  .nuxt                 // 打包生成文件夹
  static                // 资源
  nuxt.config.js        // nuxt配置
  node_modules          // 插件包
  package.json          // 插件配置

```

## 项目技术栈

字段|描述
----|----
vee-validate|表单校验

