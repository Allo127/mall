<template>
  <van-grid square>
    <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
  </van-grid>
</template>

<script>
  export default {
    data() {
      return {
        list: []
      }
    },
    created() {
      // this.$api.homeData.getGridInfo().then(({data})=>{
      //   this.list = data
      // })
    }
  }
</script>

<style>
</style>
