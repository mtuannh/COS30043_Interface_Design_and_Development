window.router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    { path: "/", redirect: "/jobs/overview" },
    { path: "/jobs/overview", name: "overview", component: window.JobOverview },
    { path: "/jobs/:jobId", name: "job-detail", component: window.JobDetail, props: true }
  ]
});
