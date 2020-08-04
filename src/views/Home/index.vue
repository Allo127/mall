<template>
  <div>
    <searchbar></searchbar>
    <swipe></swipe>
    <grid></grid>
    这是首页1
    <menubar></menubar>
  </div>
</template>

<script>
  import menubar from '../../components/MenuBar.vue'
  import searchbar from '../../components/SearchBar.vue'
  import Swipe from './base/Swipe.vue'
  import Grid from './base/Grid.vue'
  export default {
    components: {
      searchbar,
      menubar,
      Swipe,
      Grid
    }
  }
</script>

<style>
</style>
