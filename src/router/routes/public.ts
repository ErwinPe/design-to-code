import { RouteRecordRaw } from "vue-router";

export default [
  {
    path: "/design-code-1",
    name: "Signin",
    component: () => import("@/views/DesignCode1.vue"),
    meta: { title: "design-code.title", isSecured: false, hideDrawer: true, mustBeSignedOut: true },
  },
] as readonly RouteRecordRaw[];
