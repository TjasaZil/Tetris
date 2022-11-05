import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/routes/Home.vue"),
    },
    {
      path: "/tetris",
      component: () => import("@/routes/Tetris.vue"),
    },
  ],
});

export default router;
