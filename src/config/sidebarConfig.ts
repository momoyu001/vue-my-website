// 面试
const interviewList = [
  {
    title: "面试-按模块分类版",
    name: "interviewModule",
  },
  {
    title: "面试-按公司分类版",
    name: "interviewCompany",
  },
];

// 数据结构和算法
const dataStructorAndAlgorithm = [{ title: "专栏简介", name: "introduction" }];

// JavaScript
const javaScript = [
  { title: "专栏简介", name: "introduction" },
  { title: "TypeScript笔记", name: "typescript" },
  { title: "Proxy&Reflect&装饰器", name: "proxy&reflect&decorator" },
  { title: "JS 手写题", name: "JSCode" },
  { title: "JS 笔记", name: "JSNote" },
];

// Vue
const vue = [
  { title: "专栏简介", name: "introduction" },
  { title: "vue-class-component", name: "vueClassComponent" },
];

// react
const react = [{ title: "专栏简介", name: "introduction" }];

// 源码
const sourceCode = [{ title: "专栏简介", name: "introduction" }];

// 日常随笔
const daily = [{ title: "专栏简介", name: "introduction" }];

// 其他
const other = [
  { title: "专栏简介", name: "introduction" },
  { title: "项目工程搭建", name: "established" },
  { title: "webpack", name: "webpack" },
];

export const sidebarConfig: Record<string, any> = {
  interview: interviewList,
  algorithm: dataStructorAndAlgorithm,
  javaScript,
  vue,
  react,
  sourceCode,
  daily,
  other,
};
