<template>
  <div>
    <swipe></swipe>
    <grid></grid>
    这是首页
    <menubar></menubar>
  </div>
</template>

<script>
  import menubar from '../../components/MenuBar.vue'
  import Swipe from './base/Swipe.vue'
  import Grid from './base/Grid.vue'
  export default {
    components: {
      menubar,
      Swipe,
      Grid
    }
  }
</script>

<style>
</style>
