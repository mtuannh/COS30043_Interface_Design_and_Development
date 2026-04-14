<script setup>
import { ref } from "vue";

const newTask = ref("");
const tasks = ref([]);

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
  <div class="section-card todo-section">
    <h3 class="section-title">To-Do List</h3>

    <div class="input-group todo-input-group">
      <input
        v-model="newTask"
        type="text"
        class="form-control"
        placeholder="Enter a new task"
        @keyup.enter="addTask"
      />
      <button class="btn btn-success add-task-btn" @click="addTask">Add</button>
    </div>

    <ul class="list-group">
      <li
        v-for="task in tasks"
        :key="task.id"
        class="list-group-item todo-item"
      >
        <span>
          {{ task.text }}
          {{ task.highPriority ? "(High Priority)" : "(Low Priority)" }}
        </span>
        <div class="todo-actions">
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
