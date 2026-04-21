<script setup>
import { computed, ref } from "vue";
import destinations from "../data/destinations.json";

const query = ref("");
const selectedCategory = ref("");
const page = ref(1);
const pageSize = 6;

const categories = computed(() => {
  return [...new Set(destinations.map((d) => d.category))];
});

const filteredDestinations = computed(() => {
  const text = query.value.trim().toLowerCase();

  return destinations.filter((item) => {
    const matchText =
      !text ||
      item.name.toLowerCase().includes(text) ||
      item.country.toLowerCase().includes(text) ||
      item.description.toLowerCase().includes(text) ||
      item.category.toLowerCase().includes(text);

    const matchCategory = !selectedCategory.value || item.category === selectedCategory.value;
    return matchText && matchCategory;
  });
});

const totalPages = computed(() => Math.max(1, Math.ceil(filteredDestinations.value.length / pageSize)));

const paginatedDestinations = computed(() => {
  if (page.value > totalPages.value) {
    page.value = totalPages.value;
  }
  const start = (page.value - 1) * pageSize;
  return filteredDestinations.value.slice(start, start + pageSize);
});

function goToPage(newPage) {
  if (newPage >= 1 && newPage <= totalPages.value) {
    page.value = newPage;
  }
}

function resetAndSearch() {
  page.value = 1;
}
</script>

<template>
  <section>
    <h1 class="mb-3">Travel Destinations</h1>
    <p class="text-muted">Search by name, country, description, or category.</p>

    <div class="row g-3 mb-4">
      <div class="col-12 col-md-8">
        <input
          v-model="query"
          type="text"
          class="form-control"
          placeholder="Search destinations..."
          @input="resetAndSearch"
        />
      </div>
      <div class="col-12 col-md-4">
        <select v-model="selectedCategory" class="form-select" @change="resetAndSearch">
          <option value="">All categories</option>
          <option v-for="category in categories" :key="category" :value="category">
            {{ category }}
          </option>
        </select>
      </div>
    </div>

    <div class="row g-3">
      <div v-for="destination in paginatedDestinations" :key="destination.id" class="col-12 col-sm-6 col-lg-4">
        <div class="card h-100 shadow-sm">
          <img :src="destination.image" class="card-img-top destination-img" :alt="destination.name" />
          <div class="card-body">
            <h5 class="card-title">{{ destination.name }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ destination.country }}</h6>
            <p class="card-text">{{ destination.description }}</p>
            <span class="badge text-bg-primary">{{ destination.category }}</span>
          </div>
        </div>
      </div>
    </div>

    <div v-if="!paginatedDestinations.length" class="alert alert-warning mt-4">
      No destinations found.
    </div>

    <nav class="mt-4 d-flex justify-content-center">
      <ul class="pagination mb-0">
        <li class="page-item" :class="{ disabled: page === 1 }">
          <button class="page-link" @click="goToPage(page - 1)">Previous</button>
        </li>
        <li class="page-item disabled">
          <span class="page-link">Page {{ page }} of {{ totalPages }}</span>
        </li>
        <li class="page-item" :class="{ disabled: page === totalPages }">
          <button class="page-link" @click="goToPage(page + 1)">Next</button>
        </li>
      </ul>
    </nav>
  </section>
</template>
