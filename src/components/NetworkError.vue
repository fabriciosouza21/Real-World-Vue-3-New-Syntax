<template>
  <div class="networkError">
    <h1>Uh-Oh!</h1>

    <h3>
      It looks like you're experiencing some network issues, please take a
      breath and
      <a href="#" @click="$router.go(-1)">click here</a> to try again.
    </h3>
  </div>
</template>

<style scoped>
.networkError {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f8f8;
}

h1 {
  font-size: 4rem;
  margin-bottom: 2rem;
  color: #ff6b6b;
}

h3 {
  font-size: 2rem;
  text-align: center;
  color: #4a4a4a;
}

a {
  color: #4a4a4a;
  text-decoration: underline;
  cursor: pointer;
}

a:hover {
  color: #ff6b6b;
}
</style>
