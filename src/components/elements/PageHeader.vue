<script setup>
import { ref } from 'vue'

const pageTitles = ref([
  {name: 'Home'},
  {name: 'Projects'},
  {name: 'About'},
  {name: 'Contact'}
])
</script>

<template>
  <header class="header">
    <h1>Thomas Jones</h1>
    <li v-for="title in pageTitles">
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