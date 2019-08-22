<template>
  <div>
    <HeaderNav></HeaderNav>
    <div class="logo"><img src="https://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""></div>
    <div class="myLogin">
      <form class="myForm" action="">
        <input class="inleft" type="text" placeholder="请输入用户名" v-model="phone"/><br/>
        <input class="inright" type="password" placeholder="请输入密码" v-model="pwd"/>
        <span class="getMsg">获取验证码</span>     
      </form>
      <div class="help">
        <a href="javascript:;">遇到问题?</a>
        <button class="usePwd">使用密码验证登录</button>
      </div>
      <!-- <button class="goLogi">登录</button> -->
      <mt-button @click.prevent="sendCode" size="large" type="danger">登录</mt-button>
    </div>
    <div class="agreement">
      <input type="checkbox">
      <span>我同意《服务条款》和《网易隐私政策》</span>
    </div>
    <p :add="isRightPhone">其他登录方式></p>
  </div>
</template>

<script type="text/ecmascript-6">
  import HeaderNav from 'components/HeaderNav/HeaderNav.vue'

  import { Toast,MessageBox } from 'mint-ui'
  export default {

    data() {
      return {
        phone:'',//手机号
        pwd:'',//密码
        // isRightPhone:''
      }
    },

    // computed:{
    //   isRightPhone(){
    //     return /^1[34567890]{10}$/.test(this.phone)
    //   }
    // },

    methods: {
      sendCode(){
        
        if(/^1[34567890]{10}$/.test(this.phone)){
         
          Toast('手机号码正确,已发送请求')
        }else{
          Toast('手机号码错误,请重新输入')
        }
      }

    },

    components:{
      HeaderNav
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .logo
    height 170px
    img
      height 70px
      margin 40px 40px 40px 80px
  .myLogin
    height 200px
    width 100%
    // background blue
    .myForm
      input
        height 50px
        width 300px
        margin-left 36px
        font-size 20px
        border-bottom 1px solid gray
        outline none
      .inleft
        margin-bottom 30px
      .getMsg
        border 1px solid black
        margin-left -60px
        font-size 14px
        border-radius 3px
        padding 3px
    .help
      height 40px
      width 100%
      // background red
      display flex
      justify-content space-around
      align-items center
      font-size 16px
      .usePwd
        background white
        border none
        font-size 16px
        margin-left 45px
  .agreement
    height 30px
    width 100%
    // background pink
    margin-top 10px
    // text-align center
    line-height 30px 
    margin-left -40px 
    display flex
    justify-content center
    align-items center    
  p
    width 94px
    margin 20px 0px 0px 110px
    height 20px
</style>
