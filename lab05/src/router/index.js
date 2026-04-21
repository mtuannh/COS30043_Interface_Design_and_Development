import { createRouter, createWebHashHistory } from "vue-router";
import JobOverview from "../components/JobOverview.js";
import JobDetail from "../components/JobDetail.js";

const routes = [
  { path: "/", redirect: "/jobs/overview" },
  { path: "/jobs/overview", name: "JobOverview", component: JobOverview },
  { path: "/jobs/:jobId", name: "JobDetail", component: JobDetail, props: true }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;