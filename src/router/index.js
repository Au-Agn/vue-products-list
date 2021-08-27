import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../components/catalog.vue"),
  },
  {
    path: "/catalog",
    name: "Catalog",
    component: () => import("../components/catalog.vue"),
  },
  {
    path: "/product",
    name: "Product page",
    component: () => import("../components/product.vue"),
  },
  {
    path: "/product/:id",
    name: "Product",
    component: () => import("../components/product.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
