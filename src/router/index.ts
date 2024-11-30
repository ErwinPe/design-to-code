import { createRouter, createWebHistory } from "vue-router";
import publicRoutes from "./routes/public";

const router = createRouter({
  history: createWebHistory("/design-to-code"),
  routes: [...publicRoutes],
});

export default router;
