<template>
  <div class="findThing">
    <div class="findNav">
      <div class="navContent">
        <div @click="$router.replace('/msite')" class="navBtn"><i class="iconfont icon-icon-test"></i></div>
        <div class="navCenter"><span class="find actived">发现</span><span>甄选家</span></div>
        <div class="navBtn"><i class="iconfont icon-sousuo"></i><i @click="$router.replace('/shop')" class="iconfont icon-xiazai1"></i></div>
      </div>
      <div class="tabContainer wrapper">
        <ul class="tabContent content">
          <li class="tabItem actived">推荐</li>
            <li class="tabItem">居家生活</li>
            <li class="tabItem">服饰鞋包</li>
            <li class="tabItem">美食美食</li>
            <li class="tabItem">美食美食</li>       
            <li class="tabItem">美食5</li>
            <li class="tabItem">美食7</li>
            <li class="tabItem">美食8</li>
        </ul>
      </div>
    </div>
    <!-- <div class="findContainer"> -->
      <iframe class="detail" src="https://m.you.163.com/topic/v1/pub/lvJSGQ8VnI.html" frameborder="0"></iframe>
    <!-- </div> -->
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll' 
  export default {

    mounted() {
      
      new BScroll('.wrapper',{
      scrollX:true,
      click:true
    })
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .findThing
    height 800px
    width 100%
    background red
    .findNav
      position fixed
      height 80px
      width 100%
      background white
      .navContent
        height 40px
        border-bottom 2px solid gray
        // background red
        display flex
        justify-content space-between
        .navBtn
          width 60px
          text-align center
          margin 6px 18px 0 0
          .iconfont
            font-size 30px
            margin-right 5px                     
        .navCenter
          width 180px
          display flex
          justify-content center
          align-items center
          font-size 14px
          .find
            font-size 20px
            margin-right 5px
            &.actived
              color red

      .tabContainer
        height 40px
        width 100%
        // background pink
        .tabContent
          width 650px 
          height 40px
          display flex
          overflow hidden
          white-space nowrap
          align-items center
          justify-content space-around
          .tabItem
            height 38px
            line-height 38px  
            font-size 14px
            color gray
            &.actived
              border-bottom 2px solid red
              // padding-bottom 10px
    // .findContainer
    //   height 300px
    //   width 100%
    //   background orange
    //   padding-top 750px
    .detail
      margin-top 44px
      height 573px
      width 100%  


</style>
