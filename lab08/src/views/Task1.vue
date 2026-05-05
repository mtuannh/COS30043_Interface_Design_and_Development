<script setup>
import $ from "jquery";
import { onMounted, ref } from "vue";

const posts = ref([]);
const loading = ref(true);
const error = ref("");

onMounted(() => {
  $.getJSON("https://jsonplaceholder.typicode.com/posts")
    .done((data) => {
      posts.value = data;
    })
    .fail(() => {
      error.value = "Could not load posts.";
    })
    .always(() => {
      loading.value = false;
    });
});
</script>

<template>
  <section>
    <div class="card">
      <div class="card-body">
        <h1 class="h3 mb-3">Task 1: Use getJSON</h1>
        <p class="text-muted">
          Data is loaded from JsonPlaceholder using jQuery getJSON.
        </p>

        <div v-if="loading" class="alert alert-info">Loading posts...</div>
        <div v-else-if="error" class="alert alert-danger">{{ error }}</div>

        <ol v-else class="list-group list-group-numbered">
          <li
            v-for="post in posts"
            :key="post.id"
            class="list-group-item d-flex gap-3"
          >
            <span class="badge text-bg-primary align-self-start">{{ post.id }}</span>
            <span>{{ post.title }}</span>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>
