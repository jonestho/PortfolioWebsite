<template>
  <PageHeader/>
  <body>
    <div class="content">
      <img src="" alt="A headshot image of Thomas Jones wearing a black jacket with a white shirt and blue tie inside of it.">
      <p>REPLACE THIS WITH TEXT PARSED FROM .TXT FILE TO PREVENT CLUTTERING</p>
    </div>
  </body>
</template>

<script>
  import PageHeader from '../elements/PageHeader.vue';

  export default {
    components: {
      PageHeader
    },

    name: 'HomePage',
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content {
    margin: auto;
    width: 60%;
    justify-content: center;
    align-items: center;
  }
</style>
