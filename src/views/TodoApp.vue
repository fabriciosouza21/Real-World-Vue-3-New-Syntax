<script setup>
import TodoForm from './to-do/TodoForm.vue'
import TodoList from './to-do/TodoList.vue'
</script>

<template>
  <div class="todo-app">
    <TodoForm></TodoForm>
    <TodoList></TodoList>
  </div>
</template>
<style scoped>
.todo-app {
  padding: 5vh;
  min-height: 100vh;
  background-color: #f7f9fc;
}
</style>
