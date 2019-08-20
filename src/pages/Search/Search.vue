<template>
  <div class="searchContainer">
    <div class="searchTing">
      
      <form class="inputText" action="">
        <div class="searchBtn">
          <span class="searchImg"><i class="iconfont icon-sousuo"></i></span> 
          <input type="text" placeholder="夏季床品 季末特惠">
        </div>
      </form>
      <span @click="$router.back('/')">取消</span>
    </div>
    <div class="content">
      <header class="hotSearch">热门搜索</header>
      <div class="searchList">
        <ul class="contentList">
          <li class="contentItem">轻弹云朵拖鞋9.9元</li>
          <li class="contentItem">云朵拖鞋9.9元</li>
          <li class="contentItem">云朵拖鞋9.9元</li>
          <li class="contentItem">轻弹拖鞋9.9元</li>
          <li class="contentItem">轻弹拖鞋9.9元</li>
          <li class="contentItem">拖鞋9.9元</li>
          <li class="contentItem">拖鞋9.9元</li>
          <li class="contentItem">轻弹云朵</li>
          <li class="contentItem">轻弹云朵拖鞋</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .searchContainer
    width 100%
    height 600px
    // background red
    font-size 16px
    .searchTing
      height 40px
      width 100%
      background white
      display flex
      justify-content space-around
      align-items center
      .inputText
        width 240px
        height 22px
        text-align center
        line-height 22px
        background #F4F4F4
        input
          height 22px
          width 220px
          // border 0
          outline none
    .content
      height 200px
      width 100%
      // background pink
      .hotSearch
        height 35px
        line-height 35px
        color gray
        // background purple
        padding-left 5px
      .searchList
        overflow hidden
        .contentList
          width 100%
          height 170px
          .contentItem
            float left
            color red
            border 1px solid red 
            margin-right 20px
            margin-top 10px
            margin-left 15px
            border-radius 5px
            padding 4px

 
</style>
