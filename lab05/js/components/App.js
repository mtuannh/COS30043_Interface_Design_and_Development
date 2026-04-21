window.App = {
  name: "App",
  components: {
    JobList: window.JobList,
    ToDoList: window.ToDoList
  },
  template: `
    <div class="container app-container">
      <h1 class="page-title">Lab 05 - Components and Router</h1>
      <div class="section-card job-section">
        <h3 class="section-title">Job Explorer</h3>
        <div class="row">
          <div class="col-md-4 job-list-column">
            <JobList></JobList>
          </div>
          <div class="col-md-8">
            <div class="job-content-wrapper">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
      <ToDoList></ToDoList>
    </div>
  `
};
