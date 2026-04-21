import jobs from "../data/jobs.js";

export default {
  name: "JobList",
  setup() {
    return { jobs };
  },
  template: `
    <div class="list-group">
      <router-link class="list-group-item list-group-item-action" to="/jobs/overview">
        Overview
      </router-link>
      <router-link
        v-for="job in jobs"
        :key="job.job_id"
        class="list-group-item list-group-item-action"
        :to="\`/jobs/\${job.job_id}\`"
      >
        {{ job.job_id }}
      </router-link>
    </div>
  `
};
