<script setup>
import { ref } from 'vue'

const pageTitles = ref([
  {id: 0, name: 'Home'},
  {id: 1, name: 'Projects'},
  {id: 2, name: 'About'},
  {id: 3, name: 'Contact'}
])
</script>

<template>
  <header>
    <div>
      <h2>My Portfolio</h2>
    </div>
    <div>
      <h1>Thomas Jones</h1>
    </div>
    <div>
      <nav>
        <ul>
          <!--When pages are done, add <a href> elements under each <li> item-->
          <li v-for="title in pageTitles" :key="title.id">
            {{ title.name }}
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
  header{
    background-color: #282C2F;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    font-family: 'Segoe UI', Arial, sans-serif;
    color: white;
  }

  div {
    width: 33%;
    text-align: center;
    justify-content: center;
  }

  h1 {
    font-family: 'Segoe UI', sans-serif;
    color: #ebebeb;
    margin-left: 20px;
  }

  nav {
    width: 25%;
    border-radius: 2rem;
    justify-content: center;
  }

  nav ul {
    display: flex;
  }

  nav li a,
  nav li {
    text-decoration: none;
    list-style: none;
    margin: 0 30px;
    color: #ebebeb;
  }

  nav ul li:hover,
  nav li a:hover {
    transform: scale(1.1);
    font-weight: bold;
    transition: .1s ease-out;
  }
</style>