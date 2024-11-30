import { RouteRecordRaw } from "vue-router";

export default [
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    meta: { title: "home.title" },
  },
  {
    path: "/",
    name: "DesginToCode1",
    component: () => import("@/views/DesignCode1.vue"),
    meta: { title: "design-code.title" },
  },
] as readonly RouteRecordRaw[];
