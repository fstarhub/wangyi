<template>
  <div id="shopCar">
    <div class="header">
      <div class="headerNav">
        <div class="shopLeft">购物车</div>
        <div class="shopRight"><a href="javascript:;">领劵</a></div>
      </div>
      <div class="headerList">
        <div class="listLeft list">30天无忧退货</div>
        <div class="listCenter list">30天无忧退货</div>
        <div class="listRight list">30天无忧退货</div>
      </div>
    </div>
    <div class="shopContainer">
      <div class="carImg"><img src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png" alt=""></div>
      <div class="toLogin">
        <div class="addThing">去添加点什么吧</div>
        <div @click="$router.replace('/personal')" class="login">登录</div>
      </div>
    </div>
    
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #shopCar
    width 100%
    height 620px
    background #F4F4F4
    .header
      width 100%
      height 80px
      // background red
      .headerNav
        height 45px
        background white
        display flex
        justify-content space-between
        align-items center
        .shopLeft
          margin-left 10px
          font-size 18px
        .shopRight
          margin-right 10px
      .headerList
        height 35px
        background #EEEEEE
        display flex
        justify-content space-around
        align-items center
        .list
          font-size 12px
    .shopContainer
      height 300px
      // background #F4F4F4
      text-align center 
      margin-top 180px
      .carImg
        width 100px
        height 100px
        margin 0 auto
        img
          display block
          width 100px 
    .toLogin
      height 80px
      // background blue
      .addThing
        font-size 12px
        color gray
      .login
        height 50px
        // border 2px solid red
        // color red
        background red
        line-height 50px
        font-size 20px
        margin 20px 80px  0


</style>
