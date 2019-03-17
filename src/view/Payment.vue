<template>
  <div class="payment">
    <Header></Header>
    <div class="content">
      <div class="wrapper">
        <div class="progress-bar">
          <div class="name">
            <span>购物车</span>
            <span>填写订单</span>
            <span>完成支付</span>
          </div>
          <div class="line">
            <span></span>
          </div>
          <div class="round">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div class="order-info">
          <p class="title"><span class="iconfont">&#xe600;</span>订单提交成功</p>
          <p class="desc">支付成功后，我们将尽快为你发货。请在 2 个小时内完成支付，超时订单将会取消。</p>
          <div class="order-detail">
            <p class="name"><span>订单信息</span></p>
            <ul class="detail-info clearfix" v-for="(item,index) in paymentData" :key="index">
              <li class="fl item">订单编号：<span>10190312746950001</span></li>
              <li class="fl item">联系电话：<span>{{item.address.phone}}</span></li>
              <li class="fl item">收货信息：<span>{{item.address.province}} {{item.address.city}} {{item.address.district}} {{item.address.street}}</span></li>
              <li class="fl item">联系人：<span>{{item.address.name}}</span></li>
              <li class="fl item">商品清单： <span>{{item.goodsList}}</span></li>
            </ul>
          </div>
          <div class="time">
            <span class="iconfont icon">&#xe650;</span>剩余支付时间：{{this.time}}
          </div>
        </div>
        <div class="payment-method">
          <p class="name">支付方式</p>
          <div class="platform">
            <div class="nav">
              <a href="javascripr:;" :class="{'active': item.click}"   @click="showList(item)" v-for="(item,index) in this.paymentNavData" :key="index">{{item.name}}</a>
              <!--<a href="javascripr:;" @click="showList">网银</a>-->
              <!--<a href="javascripr:;" @click="showList">支付宝</a>-->
            </div>
            <div class="nav-list" :class="{'active': item.click}" v-for="(item,index) in this.paymentNavData" :key="index">
              <div class="item" v-for="(info,list) in item.children" :key="list">
                <img :src="info.imgUrl" alt="">
              </div>
              <!--<div class="item">-->
                <!--<img src="../assets/images/wechat.png" alt="">-->
              <!--</div>-->
            </div>
          </div>
          <div class="payment-btn clearfix">
            <p><span class="iconfont icon">&#xe626;</span>安全支付</p>
            <p class="fr">应付总额 <span>￥{{totalGoodsPrice}}</span>.00</p>
            <div><a href="javascript:;" class="fr btn" @click="submits">提交订单</a></div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import Header from '../components/Header';
  import Footer from '../components/Footer';
  export default {
    name: 'Payment',
    data () {
      return {
        paymentData: [],
        paymentNavData: [],
        time: '00:00:00',
        times: null
      };
    },
    computed: {
      ...mapGetters([
        'totalGoodsPrice'
      ])
    },
    components: {
      Header, Footer
    },
    methods: {
      async getPaymentData () {
        const { data } = await this.axios.get('/api/paymentInfo');
        this.paymentData = data;
        // console.log(data[0].orderId);
        this.showTime();
        this.times = setInterval(this.showTime, 1000);
      },
      async getPaymentNavData () {
        const { data } = await this.axios.get('/api/paymentNav');
        this.paymentNavData = data;
      },
      submits () {
        this.axios.delete('/api/paymentInfo/' + this.paymentData[0].id);
        alert('下单成功');
        this.$router.push({
          name: 'Index'
        });
      },
      showTime () {
        let end = new Date(parseInt(this.paymentData[0].orderId) + parseInt(2 * 60 * 60 * 1000));
        let now = new Date();
        let result = parseInt((end - now.getTime()) / 1000);
        let h = parseInt(result / (60 * 60) % 24);
        let m = parseInt(result / 60 % 60);
        let s = parseInt(result % 60);
        this.time = `${h}:${m}:${s}`;
        if (result <= 0) {
          clearInterval(this.times);
        }
        // console.log(`${h}小时 ${m}分钟 ${s}秒`);
      },
      showList (data) {
        // console.log(this.paymentNavIndex);
        // console.log(index);
        // this.paymentNavIndex = index;
        // console.log(this.paymentNavIndex);
        // console.log(index);
        this.paymentNavData.forEach(item => {
          item.click = false;
          if (item.id === data.id) {
            item.click = true;
          }
        });
      }
    },
    mounted () {
      this.getPaymentData();
      this.getPaymentNavData();
    }
  };
</script>

<style lang="less" scoped>
.content{
  background-color: #efefef;
  padding-bottom: 4rem;
  .progress-bar{
    width: 80%;
    position: relative;
    /*margin: 50px 0 0 100px;*/
    padding: 50px 0 0;
    /*box-sizing: border-box;*/
    margin: 0 auto;
    height: 130px;
    .name{
      /*margin-top: -20px;*/
      /*position: absolute;*/
      span{
        position: absolute;

        &:nth-child(1){
          left: 25%;
          transform: translateX(-40%);
        }
        &:nth-child(2){
          left: 50%;
          transform: translateX(-40%);
        }
        &:nth-child(3){
          left: 75%;
          transform: translateX(-40%);
        }
      }
    }
    .line{
      width: 100%;
      height: 2px;
      position: absolute;
      /*top:10%;*/
      /*left: 0;*/
      margin-top:40px;
      /*top: 0;*/
      border:1px solid #ddd;
      background: #ccc;

      span{
        position: absolute;
        display: inline-block;
        background: #eb0028;
        color: #eb0028;
        height: 2px;
        width: 62.5%;
      }
    }
    .round{
      margin-top:45px;
      /*position: absolute;*/
      span{
        position: absolute;
        margin-top: -10px;
        width: 10px;
        height: 10px;
        border:1px solid #eb0028;
        border-radius: 50%;
        background: #eb0028;

        &:nth-child(1){
          left: 25%;
        }
        &:nth-child(2){
          left: 50%;
        }
        &:nth-child(3){
          left: 75%;
        }
      }
    }
  }
  .order-info{
    position: relative;
    /*padding: 0 25px;*/
    padding: 3rem 4rem 0rem;
    background-color: #fff;
    border-top: 10px solid #7bba42;
    border-radius: 4px;
    margin-bottom: 2rem;

    .title{
      font-size: 2.5rem;
      color: #7bb942;
      padding-top: 1px;
      span{
        font-size: 2.5rem;
        margin-right: 10px;
      }
    }
    .desc{
      font-size: 16px;
      color: #666;
      line-height: 2rem;
      margin-bottom: 40px;
    }
    .order-detail{
      padding-top: 1rem;
      padding-bottom: 1rem;
      border-top: 2px solid #dfdfdf;

      .name{
        span{
          /*position: absolute;*/
          display: inline-block;
          /*margin-left: 10px;*/
          font-size: 16px;
          /*top:-11px;*/
          /*line-height: 16px;*/
          vertical-align: middle;
          /*margin-top: -5px;*/
        }
        span:before{
          display: inline-block;
          content: '+';
          font-size: 30px;
          vertical-align: middle;
          margin-top: -5px;
        }
      }
      .detail-info{
        .item{
          width: 50%;
          line-height: 30px;
          font-weight: 400;
          color: #333;
          font-size: 16px;

          span{
            font-weight:normal;
            font-size: 14px;
          }
          &:last-child{
            width: 100%;
          }
        }
      }
    }
    .time{
      position: absolute;
      top: 50px;
      right: 50px;
      width: 271px;
      height: 54px;
      /*line-height: 54px;*/
      background-color: #fffade;
      border: 2px solid #ffb900;
      color: #e3a600;
      border-radius: 5px;
      padding: 10px 5px;
      box-sizing: border-box;
      text-align: center;
      font-size: 18px;
      /*vertical-align: middle;*/

      .icon{
        font-size: 25px;
        vertical-align: middle;
        display: inline-block;
        margin-top: -3px;
      }
    }
  }
  .payment-method{
    /*padding: 0rem 4rem 0rem;*/
    background-color: #f6f6f6;

    .name{
      padding: 20px 4rem;
      border-bottom: 2px solid #dfdfdf;
      color: #666;
    }
    .platform{
      padding: 0px 4rem;
      .nav{
        padding: 0 15px;
        box-sizing: border-box;
        background-color: #fff;
        width: 1120px;
        box-shadow: 2px 4px 5px rgba(0,0,0,.2);

        a{
          margin-left: 15px;
          display: inline-block;
          padding: 20px 40px;
          color: #000;
          font-size: 16px;
          /*border-bottom: 2px solid #eb0028;*/
          &.active{
            border-bottom: 2px solid #eb0028;
          }
        }
      }
      .nav-list{
        padding: 2rem 0;
        box-sizing: border-box;
        display: none;

        &.active{
          display: block;
        }
        .item{
          display: inline-block;
          width: 25%;
          height: 78px;
          margin-right: 15px;
          /*background-color: red;*/
          box-shadow: 2px 3px 5px rgba(0,0,0,.5);
          text-align: center;
          line-height: 78px;
          background-color: #fff;

          img{
            margin-top: 22px;
          }
        }
      }
    }
    .payment-btn{
      border-top: 2px solid #dfdfdf;
      padding: 20px 4rem;
      background-color: #fff;
      font-size: 16px;
      .icon{
        font-size: 20px;
        vertical-align: middle;
      }
      p{
        display: inline-block;
        margin-right: 20px;
        &:nth-of-type(2){
          margin-right: 0;
          span{
            display: inline-block;
            margin-left: 173px;
          }
        }
      }
      .btn{
        margin-top: 20px;
        margin-bottom: 10px;
        display: block;
        width: 302px;
        height: 44px;
        line-height: 50px;
        text-align: center;
        cursor: pointer;
        font-size: 14px;
        background: #eb0028;
        color: #fff;
        border: 1px solid #d70226;
      }
    }
  }
}
</style>
