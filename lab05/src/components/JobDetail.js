import { computed } from "vue";
import { useRoute } from "vue-router";
import jobs from "../data/jobs.js";

export default {
  name: "JobDetail",
  setup() {
    const route = useRoute();
    const job = computed(() => jobs.find((item) => item.job_id === route.params.jobId));
    return { job };
  },
  template: `
    <div class="content-panel" v-if="job">
      <h4>{{ job.job_title }}</h4>
      <p class="content-paragraph"><strong>Job ID:</strong> {{ job.job_id }}</p>
      <p class="content-paragraph"><strong>Category:</strong> {{ job.category }}</p>
      <p class="content-paragraph"><strong>Location:</strong> {{ job.location }}</p>
      <p class="content-paragraph"><strong>Employment Type:</strong> {{ job.employment_type }}</p>
      <p class="content-paragraph"><strong>Salary:</strong> {{ job.salary_range }}</p>
      <p class="content-paragraph"><strong>Job Level:</strong> {{ job.job_level }}</p>
      <p class="content-paragraph"><strong>Company:</strong> {{ job.company }}</p>
      <p class="content-paragraph"><strong>Supervisor:</strong> {{ job.supervisor }}</p>
      <p class="content-paragraph"><strong>Positions Available:</strong> {{ job.positions_available }}</p>
      <p class="content-paragraph"><strong>Start Date:</strong> {{ job.start_date }}</p>
      <p class="content-paragraph"><strong>Posted Date:</strong> {{ job.posted_date }}</p>
      <p class="content-paragraph"><strong>Application Deadline:</strong> {{ job.application_deadline }}</p>
      <p class="content-paragraph"><strong>Description:</strong> {{ job.job_description }}</p>
      <p class="content-paragraph"><strong>Required Skills:</strong> {{ job.required_skills.join(", ") }}</p>
      <p class="content-paragraph">
        <strong>Preferred Qualifications:</strong> {{ job.preferred_qualifications.join(", ") }}
      </p>
      <p class="content-paragraph"><strong>Tags:</strong> {{ job.tags.join(", ") }}</p>
    </div>
    <div class="content-panel" v-else>
      <p class="content-paragraph">Job not found.</p>
    </div>
  `
};
