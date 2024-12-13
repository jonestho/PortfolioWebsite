<script setup>
import { ref } from 'vue'

const pageTitles = ref([
  {name: 'Home', id: 0},
  {name: 'Projects', id: 1},
  {name: 'About', id: 2},
  {name: 'Contact', id: 3}
])
</script>

<template>
  <header class="header">
    <h1>Thomas Jones</h1>
    <li v-for="title in pageTitles" :key="title.id">
      {{ title.name }}
    </li>
  </header>
</template>

<style>
.header{
  background-color: gray;
  display:flex;
}
</style>