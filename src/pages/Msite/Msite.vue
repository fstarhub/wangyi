<template>
  <div>
    <!-- 头部 -->
    <div class="header">
      <nav class="navigation">
        <a href="https://m.you.163.com/" class="logo">网易严选</a>
        <div class="searchButton">
          <i class="iconfont icon-iconset0157"></i>
          <span class="placeholder">搜索商品,共21615款好物</span>
        </div>
        <div class="loginBtn">登录</div>
      </nav>
      <ul class="tabContainer">
        <li class="tabList actived">推荐</li>
        <li class="tabList">居家生活</li>
        <li class="tabList">服饰鞋包</li>
        <li class="tabList">美食酒水</li>
        <li class="tabList iconfont icon-fangxiang-xiangxia"></li>
      </ul>
    </div>
    <!-- 中间部分 -->
    <div class="contentContainer">
      <div class="figures">
        <div class="swiper-container">
          <div class="swiper-wrapper">
              <div class="swiper-slide"><img src="./images/lunbo/1.jpg" alt="loading"></div>
              <div class="swiper-slide"><img src="./images/lunbo/2.jpg" alt=""></div>
              <div class="swiper-slide"><img src="./images/lunbo/3.jpg" alt=""></div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
                      
          
      </div>
      </div>
      <div class="contentDetail">
        <div class="titleContent">
          <ul class="titleDetail">
            <li class="title"><i class="iconfont icon-pinpai"></i>网易自营品牌</li>
            <li class="title"><i class="iconfont icon-tuikuan"></i>30天内无忧退货</li>
            <li class="title"><i class="iconfont icon-womenchengnuo"></i>48小时快速退款</li>
          </ul>
        </div>
        <ul class="detailList">
          <a class="contentList" href="javescript:;"><img src="./images/1.gif" alt=""><span>新品首发</span></a>
          <a class="contentList" href="javescript:;"><img src="./images/2.png" alt=""><span>家具生活</span></a>
          <a class="contentList" href="javescript:;"><img src="./images/3.png" alt=""><span>服饰鞋包</span></a>
          <a class="contentList" href="javescript:;"><img src="./images/4.png" alt=""><span>美食酒水</span></a>
          <a class="contentList" href="javescript:;"><img src="./images/5.png" alt=""><span>个护清洁</span></a>
          <a class="contentList" href="javescript:;"><img src="./images/6.png" alt=""><span>母婴亲自</span></a>
          <a class="contentList" href="javescript:;"><img src="./images/7.png" alt=""><span>运动旅行</span></a>
          <a class="contentList" href="javescript:;"><img src="./images/8.png" alt=""><span>数码加点</span></a>
          <a class="contentList" href="javescript:;"><img src="./images/9.png" alt=""><span>全球特色</span></a>
          <a class="contentList" href="javescript:;"><img src="./images/10.gif" alt=""><span>超级会员</span></a>
        </ul>
        <div class="newBoyTab">
          <div class="newBoy">-新人专享礼-</div>
          <div class="newGift">
            <div class="hongbaoTab">
                <a href="javascript:;" class="hongbao">新人专享礼包
                  <img src="./images/hongbao.png" alt="">
                </a>
            </div>
            <div class="fuli">
              <div class="fulishe">
                <a href="javascript:;">福利社
                  <img src="./images/fulishe.png" alt="">
                </a>
              </div>
              <div class="pingtuan">
                <a href="javascript:;">新人拼团
                  <img src="./images/pingtuan.png" alt="">
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="brand">
          <div class="brandMake">
            <span>品牌制作商直供</span>
            <a>更多></a>
          </div>
          <ul class="brandList">
            <li class="brandItem"><a href="javascript:;"><img src="./images/2.png" alt=""></a></li>
            <li class="brandItem"><a href="javascript:;"><img src="./images/2.png" alt=""></a></li>
            <li class="brandItem"><a href="javascript:;"><img src="./images/2.png" alt=""></a></li>
            <li class="brandItem"><a href="javascript:;"><img src="./images/2.png" alt=""></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'                
      
  export default {


    mounted() {
      
      var mySwiper = new Swiper ('.swiper-container', {
      direction: 'horizontal', // 垂直切换选项
      loop: true, // 循环模式选项
      
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
            
      // 如果需要滚动条
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

  // @import '../../common/swiper/swiper.min.css'
  //头部
  .header
    height 70px
    width 100%
    position fixed
    background white
    z-index 4
    .navigation
      display flex
      height 35px
      justify-content: space-around
      align-items center
      .logo
        display block
        color black
        font-weight bold
        width 65px       
      .searchButton
        background #EDEDED
        padding 6px 20px
        border-radius 4px
        font-size 14px
      .loginBtn
        font-size 14px
        color red
        border-radius 3px
        border 1px solid red
        padding 4px


    .tabContainer
      height 35px
      width 100%
      display flex
      justify-content space-around
      align-items center
      font-size 16px
      .tabList
        height 35px
        line-height 35px
        padding 0 10px
        &.actived
          border-bottom 3px solid red
        
      
  //中间部分
  .contentContainer
    // background blue
    width 100%
    height 100%
    padding-top 70px
    .figures
      height 180px
      width 100%  
      // background yellow
      .swiper-container
        // z-index 5
        width 100%
        height 180px
        // img
        //   width 375px
        //   height 180px
 
    .contentDetail
      height 900px
      width 100%
      // background pink
      .titleContent
        width 100%
        height 30px
        // background pink
        .titleDetail
          display flex
          justify-content space-around
          align-content center
          .title
            padding 6px
            font-size 14px
      .detailList
        // background purple
        height 180px
        display flex
        flex-wrap wrap
        .contentList
          display flex
          flex-direction column
          align-items center
        img
          width 75px
          height 70px
        span
          font-size 14px
      .newBoyTab
        height 200px
        width 100%
        // background red
        .newBoy
          height 40px
          // background blue
          text-align center
          line-height 40px
        .newGift
          height 160px
          // background pink
          display flex
          .hongbaoTab
            position relative
            width 50%
            background #F9E9CF
            margin 0 0 0 10px
            padding 15px 0 0 15px
            font-weight bold
            img
              position absolute
              top 35px
              left 38px
              width 100px
              height 120px
          .fuli
            width 50%
            // background blue
            margin 0 10px 0 5px
            .fulishe
              position relative
              height 80px
              background #FBE2D3
              margin 0 0 5px 0
              a
                
                display block
                padding 8px 0 0 8px
              img
                position absolute
                bottom 0
                right 0
                width 100px
                height 80px
            .pingtuan
              background #FFECC2
              height 75px
              position relative
              a
                display block
                padding 8px 0 0 8px
                img
                  width 100px
                  height 80px
                  position absolute
      .brand
        height 400px
        width 100%
        // background blue
        .brandMake
          height 15px
          display flex
          justify-content space-between
          // background red
          padding 10px
        .brandList
          height 280px
          // background yellow
          display flex
          justify-content space-around
          flex-wrap wrap
          .brandItem
            height 140px
            width 140px
            margin-left 20px
            
            a
              display block
              img
                width 135px
                height 126px
 
</style>
