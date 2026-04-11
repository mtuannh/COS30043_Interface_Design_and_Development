<script setup>
import { ref } from "vue";

const newTask = ref("");
const tasks = ref([
  { id: 1, text: "Read lab sheet", highPriority: false },
  { id: 2, text: "Build Vue components", highPriority: true }
]);

function addTask() {
  const trimmedTask = newTask.value.trim();
  if (!trimmedTask) {
    return;
  }

  tasks.value.unshift({
    id: Date.now(),
    text: trimmedTask,
    highPriority: false
  });
  newTask.value = "";
}

function deleteTask(id) {
  tasks.value = tasks.value.filter((task) => task.id !== id);
}

function togglePriority(task) {
  task.highPriority = !task.highPriority;
}
</script>

<template>
  <div class="section-card p-3">
    <h3 class="mb-3">To-Do List</h3>

    <div class="input-group mb-3">
      <input
        v-model="newTask"
        type="text"
        class="form-control"
        placeholder="Enter a new task"
        @keyup.enter="addTask"
      />
      <button class="btn btn-primary" @click="addTask">Add</button>
    </div>

    <ul class="list-group">
      <li
        v-for="task in tasks"
        :key="task.id"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <span>
          {{ task.text }}
          {{ task.highPriority ? "(High Priority)" : "(Low Priority)" }}
        </span>
        <div class="d-flex gap-2">
          <button class="btn btn-sm btn-outline-danger" @click="deleteTask(task.id)">
            Delete
          </button>
          <button class="btn btn-sm btn-outline-secondary" @click="togglePriority(task)">
            {{ task.highPriority ? "Mark as Low Priority" : "Mark as High Priority" }}
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>
