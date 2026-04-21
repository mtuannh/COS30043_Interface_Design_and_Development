<script setup>
import { computed, ref } from "vue";

const firstName = ref("");
const lastName = ref("");
const selectedTheme = ref("Mountain");

const fullName = computed(() => `${firstName.value} ${lastName.value}`.trim());
const welcomeMessage = computed(() =>
  fullName.value ? `Welcome, ${fullName.value}!` : "Welcome! Please enter your name."
);

const selectedImage = computed(() =>
  selectedTheme.value === "Mountain"
    ? "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=900&q=80"
    : "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=900&q=80"
);
</script>

<template>
  <section>
    <h1 class="mb-3">About This App</h1>
    <p>
      This travel app was built for Lab 07 using Vue 3, Vite, Vue Router, and Bootstrap.
      It demonstrates routing, reusable layout, searching JSON data, and simple form inputs.
    </p>

    <div class="row g-4 mt-1">
      <div class="col-12 col-lg-6">
        <div class="card shadow-sm">
          <div class="card-body">
            <h5 class="card-title">Personal Greeting</h5>
            <div class="mb-3">
              <label class="form-label">First Name</label>
              <input v-model="firstName" class="form-control" type="text" placeholder="Enter first name" />
            </div>
            <div class="mb-3">
              <label class="form-label">Last Name</label>
              <input v-model="lastName" class="form-control" type="text" placeholder="Enter last name" />
            </div>
            <p class="fw-semibold mb-0">{{ welcomeMessage }}</p>
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-6">
        <div class="card shadow-sm">
          <div class="card-body">
            <h5 class="card-title">Pick a Theme</h5>
            <div class="form-check">
              <input
                id="mountainTheme"
                v-model="selectedTheme"
                class="form-check-input"
                type="radio"
                value="Mountain"
              />
              <label class="form-check-label" for="mountainTheme">Mountain</label>
            </div>
            <div class="form-check mb-3">
              <input
                id="oceanTheme"
                v-model="selectedTheme"
                class="form-check-input"
                type="radio"
                value="Ocean"
              />
              <label class="form-check-label" for="oceanTheme">Ocean</label>
            </div>
            <img :src="selectedImage" :alt="selectedTheme" class="img-fluid rounded about-img" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
