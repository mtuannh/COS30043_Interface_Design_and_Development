import { createRouter, createWebHistory } from "vue-router";
import JobOverview from "../components/JobOverview.vue";
import JobDetail from "../components/JobDetail.vue";

const routes = [
  { path: "/", redirect: "/jobs/overview" },
  { path: "/jobs/overview", name: "overview", component: JobOverview },
  { path: "/jobs/:jobId", name: "job-detail", component: JobDetail, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
