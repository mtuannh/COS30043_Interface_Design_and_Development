<script setup>
import JobList from "./components/JobList.vue";
import ToDoList from "./components/ToDoList.vue";
</script>

<template>
  <div class="container py-4">
    <h1 class="mb-4">Lab 05 - Components and Router</h1>

    <div class="section-card p-3 mb-4">
      <h3 class="mb-3">Job Explorer</h3>
      <div class="row">
        <div class="col-md-4 mb-3 mb-md-0">
          <JobList />
        </div>
        <div class="col-md-8">
          <div class="border rounded">
            <router-view />
          </div>
        </div>
      </div>
    </div>

    <ToDoList />
  </div>
</template>
