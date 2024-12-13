<template>
  <div class="hello">
    <PageHeader/>
    <div>
      <h1>Just a little button</h1>
      <button @click="increment">Value is {{ count }}</button>
    </div>
  </div>
</template>

<script>
import PageHeader from '../elements/PageHeader.vue';

export default {
  setup(){
    const testCount = ref(0)

    function increment(){
      count.value++
    }

    return { 
      testCount,
      increment
    }
  },

  name: 'HomePage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
template {
  font-family: 'DM Sans', sans-serif;
}

header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
  background-image: linear-gradient(90deg, #1f4e5f, #274156);
}

h1 {
  font-family: 'DM Sans', sans-serif;
  color: #ebebeb;
  text-transform: uppercase;
}

nav {
  width: 50%;
  border-radius: 2rem;
}

nav ul {
  display: flex;
  justify-content: space-around;
  padding: 0;
}

nav li a,
nav li {
  text-decoration: none;
  list-style: none;
  color: #ebebeb;
}

nav ul li:hover,
nav li a:hover {
  transform: scale(1.1);
  font-weight: bold;
  transition: .1s ease-out;
}


</style>
