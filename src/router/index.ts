import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/index",
    },
    {
      path: "/index",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/interview",
      name: "interview",
      component: () => import("../views/InterviewPage.vue"),
    },
    {
      path: "/algorithm",
      name: "algorithm",
      component: () => import("../views/AlgorithmPage.vue"),
    },
    {
      path: "/javascript",
      name: "javascript",
      component: () => import("../views/javascriptPage.vue"),
    },
    {
      path: "/vue",
      name: "vue",
      component: () => import("../views/vuePage.vue"),
    },
    {
      path: "/sourceCode",
      name: "sourceCode",
      component: () => import("../views/sourceCodePage.vue"),
    },
    {
      path: "/daily",
      name: "daily",
      component: () => import("../views/dailyPage.vue"),
    },
  ],
});

export default router;
