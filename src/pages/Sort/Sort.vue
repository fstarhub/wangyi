<template>
  <div id="sortContainer">
    <div class="topBtn">
      <button class="btn"><i class="iconfont icon-iconset0157"></i>搜索商品,共21577款好物</button>
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
        123431432431214123432214
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
      float left
      // background blue
      margin-top 40px
      .sortList
        float left
        display inline
        width 100px
        height 600px
        background red
        display flex
        flex-direction column
        justify-content space-around
        align-items center
      .listDetail
        width 100px
        height 100px
        background blue
        float left
        
        

</style>
