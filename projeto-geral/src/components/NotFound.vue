<script setup>
defineProps({
  resource: {
    type: String,
    required: true,
    default: 'page'
  }
})
</script>
<template>
  <div class="not-found">
    <h1>Oops!</h1>
    <h3>The {{ resource }} you're looking for is not here.</h3>
    <router-link :to="{ name: 'EventList' }">Back to the home page</router-link>
  </div>
</template>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f8f8;
}

h1 {
  font-size: 5rem;
  margin-bottom: 2rem;
}

h3 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

router-link {
  font-size: 1.5rem;
  padding: 1rem 2rem;
  border-radius: 5px;
  background-color: #4caf50;
  color: #fff;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
}

router-link:hover {
  background-color: #388e3c;
}
</style>
