import { createWebHistory, createRouter } from "vue-router";
import Index from "@/pages/Index.vue";
import NotFound from "@/pages/404.vue";

const routes = [
    {
      path: "/",
      name: "Index",
      component: Index,
    },
    {
      path: "/:catchAll(.*)",
      component: NotFound,
    },    
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;