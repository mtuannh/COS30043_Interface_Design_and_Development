async function bootstrapApp() {
  try {
    const response = await fetch("./jobs.txt");
    window.jobs = await response.json();
  } catch (error) {
    console.error("Failed to load jobs.txt", error);
    window.jobs = [];
  }

  const app = Vue.createApp(window.App);
  app.use(window.router);
  app.mount("#app");
}

bootstrapApp();
