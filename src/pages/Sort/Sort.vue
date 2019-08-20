<template>
  <div id="sortContainer">
    <div class="topBtn">
      <button @click="$router.push('/search')" class="btn"><i class="iconfont icon-iconset0157"></i>搜索商品,共21577款好物</button>
    </div>
    <div class="sortContent">      
      <ul class="sortList">
        <li><a href="javascript:;">推荐专区</a></li>
        <li><a href="javascript:;">v12311</a></li>
        <li><a href="javascript:;">v12311</a></li>
        <li><a href="javascript:;">v12311</a></li>
        <li><a href="javascript:;">v12311</a></li>
        <li><a href="javascript:;">v12311</a></li>
        <li><a href="javascript:;">v12311</a></li>
        <li><a href="javascript:;">v12311</a></li>
        <li><a href="javascript:;">v12311</a></li>
        <li><a href="javascript:;">v12311</a></li>
        <li><a href="javascript:;">v12311</a></li>
        <li><a href="javascript:;">v12311</a></li>
        
      </ul>     
      <div class="listDetail">
        <div class="listContainer">
          <div class="ad">
            <img src="https://yanxuan.nosdn.127.net/5b4ca33a0205482398006405c1db15e8.jpg?imageView&thumbnail=0x196" alt="">
          </div>
          <ul class="listContent">
            <li class="life"><img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png?imageView&quality=85&thumbnail=144x144" alt=""></li>
            <li class="life"><img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png?imageView&quality=85&thumbnail=144x144" alt=""></li>
            <li class="life"><img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png?imageView&quality=85&thumbnail=144x144" alt=""></li>
            <li class="life"><img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png?imageView&quality=85&thumbnail=144x144" alt=""></li>
            <li class="life"><img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png?imageView&quality=85&thumbnail=144x144" alt=""></li>
            <li class="life"><img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png?imageView&quality=85&thumbnail=144x144" alt=""></li>
            <li class="life"><img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png?imageView&quality=85&thumbnail=144x144" alt=""></li>
            <li class="life"><img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png?imageView&quality=85&thumbnail=144x144" alt=""></li>
            <li class="life"><img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png?imageView&quality=85&thumbnail=144x144" alt=""></li>
            
            
          </ul>
        </div>
      
      </div>
    </div>
    
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #sortContainer
    height 900px
    width 100%
    .topBtn
      height 40px
      width 100%
      background white
      position fixed
      top 0 
      // background red
      .btn
        // line-height 30px
        display inline-block
        margin-top 5px
        margin-left 50px
        background #EDEDED
        border-radius 5px
        padding 4px 40px
        border none 
        .iconfont
          margin-right 15px

    .sortContent
      height 1000px
      width 100%
      // float left
      // background blue
      margin-top 40px
      .sortList
        float left
        display inline
        width 100px
        height 600px
        // background red
        display flex
        flex-direction column
        justify-content space-around
        align-items center
      .listDetail
        width 273px
        height 600px
        // background blue
        float left
        .listContainer
          height 500px
          width 100%
          // background red
          .ad
            height 100px
            width 100%
            img
              height 100px
              width 100%
          .listContent
            width 100%
            height 100%
            display flex
            flex-wrap wrap
            align-content flex-start
            .life
              height 90px            
            img
              width 90px


</style>
