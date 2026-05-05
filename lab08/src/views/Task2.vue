<script setup>
import { onMounted, ref } from "vue";

const units = ref([]);
const loading = ref(true);
const error = ref("");

onMounted(async () => {
  try {
    const response = await fetch(`${import.meta.env.BASE_URL}units.json`);

    if (!response.ok) {
      throw new Error("Could not load units.");
    }

    units.value = await response.json();
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <section>
    <div class="card">
      <div class="card-body">
        <h1 class="h3 mb-3">Task 2: Use fetch</h1>
        <p class="text-muted">Data is loaded from units.json using fetch.</p>

        <div v-if="loading" class="alert alert-info">Loading units...</div>
        <div v-else-if="error" class="alert alert-danger">{{ error }}</div>

        <div v-else class="table-responsive">
          <table class="table table-striped table-hover align-middle">
            <thead class="table-primary">
              <tr>
                <th>Code</th>
                <th>Description</th>
                <th>Credit Points</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="unit in units" :key="unit.code">
                <td class="fw-bold">{{ unit.code }}</td>
                <td>{{ unit.desc }}</td>
                <td>{{ unit.cp }}</td>
                <td>{{ unit.type }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>
