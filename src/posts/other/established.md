# 本项目工程的搭建 - vue-my-website

## 工程相关

### 创建应用

需使用 node 16 以上版本

使用` npm init vue@latest`创建基于`vite`的项目

### 安装运行

安装：`npm i`

运行：`npm run dev`

### 配置项目运行时自动打开浏览器

1、打开`vite.config.ts`文件

2、可通过`defineConfig`类型声明文件查所有可配置项

3、配置`server`选项

```
server: {
	host: "localhost",
	port: 8080,
	open: true,
}
```

### css 预处理器

Vite 建议使用原生 CSS 变量和实现 CSSWG 草案的 POSTCSS 插件来编写简单的、符合未来标准的 CSS。但也同时提供了对`.sass`、`.scss`、、`.less`、`.stylus`文件的内置支持。没有必要为它们安装特定的 Vite 插件，但必须安装相应的预处理器依赖

```
# .scss and .sass
npm add -D sass

# .less
npm add -D less

# .stylus and .styl
npm add -D stylus
```

本项目使用`less`预处理器

### 找不到模块xxx或其相应的类型声明的处理

1、找不到模块“../views/HomeView.vue”或其相应的类型声明

找不到模块“xxx.vue”或其相应的类型声明

场景：路由文件中导入某个组件

```
{
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
}

// 报错如下
找不到模块“../views/HomeView.vue”或其相应的类型声明
```

原因分析：TS 只支持导入导出模块，但是 vue 不是模块，我们需要申明一下 vue 是一个模块，ts 可以导入它。

解决方法：在根目录下的`env.d.ts`文件中加入相应的类型声明，声明 `.vue` 结尾的文件中一个模块

```
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
```

2、`*.vue`文件内提示组件声明了但是没有使用

可能是`vetur`插件导致 ，vue3 推荐使用`volar`，将`vetur`禁用即可

### eslint 报错`Delete CR`

原因：由于行尾风格配置导致，endOfLine 配置有一下四个选项

- `lf` - 仅换行（\n），常见于 Linux 和 macOS 以及 git repo 内部
- `crlf` - 回车 + 换行字符（\r\n），常见于 windows
- `cr` - 仅回车字符（\r），很少使用
- `auto` - 保持现有的行尾（一个文件中的混合值通过第一行之后使用的内容进行标准化）

解决方法：在`prettier.config.js`  或者 `prettierrc.json` 中配置`endOfLine: 'auto'`

### vue 项目渲染 markdown 

[参考文档](https://github.com/antfu/vite-plugin-md)



一、安装依赖

- vite-plugin-md

  - Use Markdownn as Vue components

  - Use Vue Components in Markdown

  - Extend functionality with **Builder API**

    ```
    npm i vite-plugin-md -D
    ```

  - 安装完 `vite-plugin-md` 之后，需要在 `vite.config.ts` 中配置：

    ```
    import Vue from '@vitejs/plugin-vue'
    import Markdown from 'vite-plugin-md'
    
    export default {
      plugins: [
        Vue({
          include: [/\.vue$/, /\.md$/], // <--
        }),
        Markdown(),
      ],
    }
    ```

  - 需要进行类型声明，根目录下 `shims.d.ts`

    ```
    declare module '*.vue' {
      import type { ComponentOptions } from 'vue'
      const Component: ComponentOptions
      export default Component
    }
    
    declare module '*.md' {
      import type { ComponentOptions } from 'vue'
      const Component: ComponentOptions
      export default Component
    }
    ```
    
  - 插件的`example`：

    ```
    // clone 项目到本地
    git clone https://github.com/antfu/vite-plugin-md.git

    cd vite-plugin-md

    code .

    pnpm i

    cd example

    pnpm dev // 示例启动了！！！
    ```



二、配置 `vite.config.ts` ，让 vite 支持 `.md` 文件格式加载 

```
import Markdown from 'vite-plugin-md'
import code from '@yankeeinlondon/code-builder'

export default {
  plugins: [
    Markdown()
  ]
}
```

三、使用

```
<template>
  <HelloWorld />
</template>

<script>
import HelloWorld from './README.md'

export default {
  components: {
    HelloWorld,
  },
}
</script>
```

四、引入 md 样式

```js
plugins: [
    MarkDown({
        style:{
            baseStyle: 'github' // 使用 github 主题样式
        }，
        builders: [
            code({
              theme: "base", // 代码块高亮样式
            }),
        ],
    })
]
```



。。。。。。
以上配置之后，markdown的样式还是很丑，我以为还要额外配置其他的东西，搜了一大推东西，按照 vite-plugin-md 的example  项目配置了半天，结果最后发现，人家的项目有自动加载  `github-markdown.min.css` 文件（就是样式文件），我的项目里面没有，暂时还没找到是啥原因没有自动引入这个文件，我自己新建了一个相应的样式文件，解决了这个样式问题。







## Vite 学习

### 概览

Vite 以原生 ESM 的方式提供源码。这实际上是让浏览器接管了打包程序的部分工作：Vite 只需要在浏览器请求源码时进行转换并按需提供源码。根据情景动态导入代码，即只在当前屏幕上实际使用时才会被处理。



Vite 的组成：

一个开发服务器，它基于原生 ES 模块提供了丰富的内建功能，如速度快到惊人的模块热更新。

一套构建指令：它使用`Rollup`打包代码，并且是预配置的，可输出用于生产环境的高度优化过的静态资源。



Vite 通过在一开始将应用中的模块区分为`依赖`和`源码`两类，改进了开发服务器启动时间。



### 添加一个插件

将插件添加到项目的`devDependencies`并在`vite.config.js`配置文件中的`plugins`数组中引入它。

[官方插件信息](https://cn.vitejs.dev/plugins/)

[社区插件列表](https://github.com/vitejs/awesome-vite#plugins)

### 环境变量和模式

Vite 在一个特殊的`import.meta.env`对象上暴露环境变量。