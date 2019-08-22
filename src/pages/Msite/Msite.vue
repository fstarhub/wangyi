<template>
  <div>
    <!-- 头部 -->
    <div class="header">
      <nav class="navigation">
        <i @click="$router.replace('/msite')" class="logo">网易严选</i>
        <div class="searchButton">
          <i class="iconfont icon-iconset0157"></i>
          <span @click="$router.push('/search')" class="placeholder">搜索商品,共21615款好物</span>
        </div>
        <div @click="$router.replace('/personal')" class="loginBtn">登录</div>
      </nav>
      <div class="tabContainer">
        <div class="tabContent wrapper">
          <ul class="tabList content">
            <li class="tabItem tuijian actived">推荐</li>
            <li class="tabItem">居家生活</li>
            <li class="tabItem">服饰鞋包</li>
            <li class="tabItem">美食美食</li>
            <li class="tabItem">美食美食</li>       
            <li class="tabItem">美食5</li>
            <li class="tabItem">美食7</li>
            <li class="tabItem">美食8</li>
            <li class="tabItem">美食9</li>
          </ul>
        </div>
        
        <div class="forDeatil" v-show="showDeatil">
          <div class="detailTitle">全部频道</div>
          <ul class="detailShow">
            <li class="detailItem actived">推荐</li>
            <li class="detailItem">家具生活</li>
            <li class="detailItem">服饰鞋包</li>
            <li class="detailItem">美食美食</li>
            <li class="detailItem">个护清洁</li>
            <li class="detailItem">家具生活</li>
            <li class="detailItem">家具生活</li>
            <li class="detailItem">家具生活</li>
            <li class="detailItem">家具生活</li>
          </ul>

        </div>
        
        <div @click="showDeatil=!showDeatil" class="clickBtn">
          <transition name="myRotate">
            <i class="iconfont more icon-fangxiang-xiangxia"></i>
          </transition>
        </div>
      </div>
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
  import BScroll from 'better-scroll'              
      
  export default {

    data() {
      return {
        showDeatil:false,
      }
    },

    mounted() {
      
      new Swiper ('.swiper-container', {
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

    new BScroll('.wrapper',{
      scrollX:true,
      click:true
    })
    },

    // methods: {
    //   toggle(){
    //     console.log('haha')
    //     this.showDeatil = !this.showDeatil
    //   }
    // },
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
        font-size 16px
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
      position relative 
      .tabContent
        width 300px
        // display flex
        // position relative
        .tabList
          width 650px        
          display flex
          // justify-content space-around
          flex-wrap nowrap
          align-items center
          font-size 16px
          overflow hidden
          // white-space nowrap
          // color red
          .tabItem
            flex-basis 40px 
            white-space nowrap
            height 35px      
            line-height 35px
            padding 0 10px
          .tuijian
            flex-basis 0
            &.actived
              border-bottom 3px solid red
      
      .forDeatil
        height 160px
        background white
        position absolute
        left 0
        top 10px
        .detailTitle
          height 40px
          // background red
          line-height 40px
          font-size 18px
          padding-left 10px
        .detailShow
          .detailItem
            font-size 16px
            float left 
            border 1px solid gray
            padding 5px
            margin-right 6px
            margin-left 8px
            width 65px
            margin-bottom 10px
            border-radius 5px
            text-align center
            background #FAFAFA
            &.actived
              color red
              border 1px solid red
      .clickBtn
        position absolute
        right -1px
        bottom 0
        height 100%
        width 64px
        background white
      
        .more
          height 40px
          width 40px
          display block
          text-align center
          margin-left 20px
          line-height 40px
          font-weight bold  
        .myRotate-enter, .myRotate-leave-to
          transform rotate(180deg)
        .myRotate-enter-active
          transition all 1s ease
        .myRotate-enter-active
          transition all .5s ease
      
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
