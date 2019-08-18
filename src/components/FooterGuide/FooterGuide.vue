<template>
  <div class="footer">
    <div @click="goTo('/msite')" class="home"><i class="iconfont icon-icon-test"></i>首页</div>
    <div @click="goTo('/sort')" class="sort"><i class="iconfont icon-fenlei2"></i>分类</div>
    <div @click="goTo('/find')" class="things"><i class="iconfont icon-icon-goods"></i>识物</div>
    <div @click="goTo('/shop')" class="shopping"><i class="iconfont icon-gouwuche"></i>购物车</div>
    <div @click="goTo('/personal')" class="personal"><i class="iconfont icon-gerenziliao"></i>个人</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {

    methods:{
      goTo(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .footer
    height 50px
    width 100%
    background white
    position fixed
    bottom 0
    right 0
    display flex
    justify-content space-around
    // align-items center
    .home
      align-items center
      flex-grow 2.4
      display flex
      flex-direction column
      // background pink
      .iconfont
        font-size 30px
    .sort
      align-items center
      flex-grow 2.4
      // background purple
      display flex
      flex-direction column
      .iconfont
        font-size 30px
    .things
      align-items center
      flex-grow 2.4
      // background yellow
      display flex
      flex-direction column
      .iconfont
        font-size 30px
    .shopping
      align-items center
      flex-grow 2.4
      // background red
      display flex
      flex-direction column
      .iconfont
        font-size 30px
    .personal
      align-items center
      flex-grow 2.4
      // background blue
      display flex
      flex-direction column
      .iconfont
        font-size 30px
 
</style>
