<template>
  <div class="personal">
    <div class="personalNav">
      <div class="personalContent">
        <div @click="$router.replace('/msite')" class="personalBtn"><i class="iconfont icon-icon-test"></i></div>
        <div class="personalBtn logo">网易严选</div>
        <div class="personalBtn"><i @click="$router.push('/search')" class="iconfont icon-sousuo"></i><i @click="$router.replace('/shop')" class="iconfont icon-xiazai1"></i></div>
      </div>
    </div>
    <div class="personalContainer">
      <div class="personalLogin"><img src="https://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""></div>
      <div class="loginWay">
        <div class="mobileLogin mobile"><i class="iconfont icon-phone"></i>手机号快捷登录</div>
        <div class="mobileLogin email"><i class="iconfont icon-youjian"></i>邮箱账号登录</div>
      </div>
    </div>
    <div class="threeWay">
      <div class="one way"><i class="iconfont icon-weixin"></i><span>微信</span></div>
      <div class="two way"><i class="iconfont icon-qq1"></i><span>QQ</span></div>
      <div class="thiree way"><i class="iconfont icon-weibo1"></i><span>微博</span></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .personal
    height 550px
    width 100%
    // background pink
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
    .personalContainer
      height 450px
      width 100%
      // background blue
      .personalLogin
        height 230px
        width 100%
        background #F2F5F4
        img
          width 150px
          margin 90px 110px

      .loginWay
        overflow hidden
        width 100%
        .mobileLogin
          height 45px
          font-size 20px
          text-align center
          line-height 45px
          margin 30px 20px
        .mobile
          background red 
          color white          
        .email
          background white
          color red
          border 1px solid red
          .iconfont
            font-size 20px

    .threeWay
      margin-top 77px
      display flex
      justify-content center
      .way
        font-size 16px
        width 70px



</style>
