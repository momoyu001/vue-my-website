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
  ],
});

export default router;
