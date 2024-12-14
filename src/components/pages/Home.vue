<template>
  <PageHeader/>
  <div>
  </div>
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
</style>
