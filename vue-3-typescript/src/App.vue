<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import fetchCount from './fetchCount'
interface AppInfo {
  name: string
  slogan: string
}

const count = ref<number | null>(null)

const appInfo = reactive({
  name: 'Counter',
  slogan: 'an app you can count on'
})


onMounted(() => {
	// mock de exemplo
  fetchCount((initialCount) => {
    count.value = initialCount
  })
})

</script>

<template>
	<div>
	  <h1>{{ appInfo.name }}</h1>
	  <h2>{{ appInfo.slogan }}</h2>
	</div>
	<p>{{ count }}</p>
  </template>
