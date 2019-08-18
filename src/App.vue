<template>
  <div>
    <router-view></router-view>
    <FooterGuide/>  
  </div>
</template>

<script>
import FooterGuide from 'components/FooterGuide/FooterGuide.vue'

export default {
  
  components: {
    FooterGuide
  }
}
</script>

<style style lang="stylus" rel="stylesheet/stylus" scoped>


</style>
