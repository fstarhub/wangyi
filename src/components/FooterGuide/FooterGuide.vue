<template>
  <div class="footer">
    <div @click.prevent="goTo('/msite')" class="home same" :class="{on: $route.path==='/msite'}"><i class="iconfont icon-icon-test"></i>首页</div>
    <div @click.prevent="goTo('/sort')" class="sort same" :class="{on: $route.path==='/sort'}"><i class="iconfont icon-fenlei2"></i>分类</div>
    <div @click.prevent="goTo('/find')" class="things same" :class="{on: $route.path==='/find'}"><i class="iconfont icon-icon-goods"></i>识物</div>
    <div @click.prevent="goTo('/shop')" class="shopping same" :class="{on: $route.path==='/shop'}"><i class="iconfont icon-gouwuche"></i>购物车</div>
    <div @click.prevent="goTo('/personal')" class="personal same" :class="{on: $route.path==='/personal'}"><i class="iconfont icon-gerenziliao"></i>个人</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {

    data(){
      return {
       
      }
    },

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
    .same
      align-items center
      flex-grow 2.4
      display flex
      flex-direction column
      // background pink
      .iconfont
        font-size 30px
      &.on
        color blue
 
</style>
