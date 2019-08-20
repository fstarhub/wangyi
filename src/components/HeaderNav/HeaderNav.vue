<template>
  <div class="personalNav">
    <div class="personalContent">
      <div @click="$router.replace('/msite')" class="personalBtn"><i class="iconfont icon-icon-test"></i></div>
      <div class="personalBtn logo">网易严选</div>
      <div class="personalBtn"><i @click="$router.push('/search')" class="iconfont icon-sousuo"></i><i @click="$router.replace('/shop')" class="iconfont icon-xiazai1"></i></div>
    </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .personalNav
      height 40px
      width 100%
      background white
      .personalContent
        height 40px
        border-bottom 2px solid gray
        // background red
        display flex
        justify-content space-between
        align-items center
        .personalBtn
          width 80px
          font-size 20px
          text-align center
          margin 6px 18px 0 0
          .logo
            width 60px
          .iconfont
            font-size 30px
            margin-right 5px
 
</style>
