import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CafeView from "../views/CafeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/franyk",
      name: "Franyk",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CityView.vue"),
    },
    {
      path: "/lviv",
      name: "Lviv",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CityView.vue"),
    },
    {
      path: "/kyiv",
      name: "Kyiv",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CityView.vue"),
    },
    {
      path: "/сherkasy",
      name: "Cherkasy",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CityView.vue"),
    },
    {
      path: "/odesa",
      name: "Odesa",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CityView.vue"),
    },
    { path: "/cafes/:id", component: CafeView },
  ],
});

export default router;
