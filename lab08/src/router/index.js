import { createRouter, createWebHashHistory } from "vue-router";
import Task1 from "../views/Task1.vue";
import Task2 from "../views/Task2.vue";

const routes = [
  { path: "/", name: "task1", component: Task1 },
  { path: "/task2", name: "task2", component: Task2 }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
