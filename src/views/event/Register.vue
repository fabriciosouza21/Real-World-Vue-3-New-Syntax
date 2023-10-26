<script setup>
import {inject} from 'vue';
import { useRouter } from 'vue-router'

const { event } = defineProps(['event'])
const GStore = inject('GStore')
const router = useRouter()
const register = () => {
  // If registered then redirect to event details
  GStore.flashMessage = 'You are successfully registered for ' + event.title
  setTimeout(() => {
    GStore.flashMessage = ''
  }, 3000)
  router.push({
    name: 'EventDetails'
  })
}
</script>
<template>
  <p>Register for the event here</p>
  <button @click="register">Register Me!</button>
</template>
