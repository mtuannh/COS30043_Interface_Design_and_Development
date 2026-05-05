<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <router-link class="navbar-brand fw-bold" to="/">Lab 08</router-link>

        <div class="navbar-nav ms-auto">
          <router-link class="nav-link" to="/">Task 1</router-link>
          <router-link class="nav-link" to="/task2">Task 2</router-link>
        </div>
      </div>
    </nav>

    <main class="container py-4">
      <router-view />
    </main>
  </div>
</template>
