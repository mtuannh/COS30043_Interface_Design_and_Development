<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import jobs from "../data/jobs";

const route = useRoute();

const job = computed(() => jobs.find((item) => item.job_id === route.params.jobId));
</script>

<template>
  <div class="p-3" v-if="job">
    <h4>{{ job.job_title }}</h4>
    <p class="mb-1"><strong>Job ID:</strong> {{ job.job_id }}</p>
    <p class="mb-1"><strong>Category:</strong> {{ job.category }}</p>
    <p class="mb-1"><strong>Location:</strong> {{ job.location }}</p>
    <p class="mb-1"><strong>Employment Type:</strong> {{ job.employment_type }}</p>
    <p class="mb-1"><strong>Salary:</strong> {{ job.salary_range }}</p>
    <p class="mb-1"><strong>Job Level:</strong> {{ job.job_level }}</p>
    <p class="mb-1"><strong>Company:</strong> {{ job.company }}</p>
    <p class="mb-1"><strong>Supervisor:</strong> {{ job.supervisor }}</p>
    <p class="mb-1"><strong>Positions Available:</strong> {{ job.positions_available }}</p>
    <p class="mb-1"><strong>Start Date:</strong> {{ job.start_date }}</p>
    <p class="mb-1"><strong>Posted Date:</strong> {{ job.posted_date }}</p>
    <p class="mb-1"><strong>Application Deadline:</strong> {{ job.application_deadline }}</p>
    <p class="mb-1"><strong>Description:</strong> {{ job.job_description }}</p>
    <p class="mb-1"><strong>Required Skills:</strong> {{ job.required_skills.join(", ") }}</p>
    <p class="mb-1">
      <strong>Preferred Qualifications:</strong> {{ job.preferred_qualifications.join(", ") }}
    </p>
    <p class="mb-0"><strong>Tags:</strong> {{ job.tags.join(", ") }}</p>
  </div>

  <div class="p-3" v-else>
    <p class="mb-0">Job not found.</p>
  </div>
</template>
