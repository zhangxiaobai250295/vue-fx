<template>
  <div class="order">
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
        <div class="address-wrap">
          <h3 class="title">收货人信息</h3>
          <div class="info">
            <div class="info-item" :class="{'active': item.checked}" v-for="(item,index) in addressData" :key="index" @click="checkAddress(item)">
              <div class="name clearfix">
                <span>{{item.name}}</span>
                <span class="fr">{{item.phone}}</span>
              </div>
              <div class="address">
                <p>{{item.province}}{{item.city}}{{item.district}}{{item.street}}</p>
              </div>
              <div class="default-address clearfix">
                <p>默认地址 <span class="iconfont fr">&#xe61d;</span></p>
              </div>
            </div>
            <div class="add-address">
              <span class="iconfont">&#xe60d;</span>增加地址
            </div>
          </div>
        </div>
        <div class="delivery-time">
          <p class="title">配送时间</p>
          <p class="desc">感谢加油的支持，订单支付后预计在48小时内为您发货</p>
        </div>
        <div class="goods-list">
          <p class="title">商品清单</p>
          <ul class="goods-wrap">
            <li class="goods-item" v-for="(item,index) in shopcartData" :key="index">
              <div class="img">
                <img :src="item.goodsUrl" alt="">
              </div>
              <div class="name">
                <p>{{item.goodsName}}</p>
              </div>
              <div class="price">
                <p>{{item.goodsPrice}}</p>
              </div>
              <div class="num">
                x<span>{{item.count}}</span>
              </div>
              <div class="total-price">
                <span>{{item.goodsPrice * item.count}}</span>
              </div>
            </li>
          </ul>
          <p class="return">返回购物车修改</p>
          <div class="incoice">
            <p class="incoice-title">发票</p>
            <a href="javascript:;" class="btn">电子发票</a>
            <div class="incoice-info">
              <p>发票内容：<span>发票明细</span></p>
              <p>发票抬头：<label for="user">个人</label> <input type="radio" v-model="incoiceMode" id="user" value="user" name="incoice">
                          <label for="company">公司</label> <input type="radio" v-model="incoiceMode" id="company" value="company" name="incoice">
              </p>
            </div>
            <ul class="coupon">
              <li class="item clearfix">
                礼品卷（0）<span class="fr">无可用</span>
              </li>
              <li class="item clearfix">
                优惠券（0）<span class="fr">无可用</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="submission clearfix">
          <div class="info clearfix">
            <p>商品总金额：￥<span>{{totalGoodsPrice}}</span>.00</p>
            <p>优惠金额：-￥<span>19.00</span></p>
            <p>运费：+￥<span>0</span></p>
            <p>支付方式：<span>在线支付</span></p>
            <p class="fr">应付总额 <span>￥{{totalGoodsPrice}}</span>.00</p>
            <a href="javascript:;" class="btn fr" @click="goTopay">提交订单</a>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapMutations } from 'vuex';
  import Header from '../components/Header';
  import Footer from '../components/Footer';
  export default {
    name: 'order',
    components: {
      Header, Footer
    },
    data () {
      return {
        addressData: [],
        incoiceMode: ''
      };
    },
    computed: {
      ...mapState(['shopcartData']),
      ...mapGetters([
        'totalGoodsPrice',
        'shopGoodsList'
      ])
    },
    methods: {
      ...mapMutations([
        'REMOVE_GOODS'
      ]),
      goTopay () {
        const date = new Date();
        const address = this.addressData.filter(item => item.checked)[0];
        const data = {
          orderId: date.getTime(),
          address: address,
          orderData: this.shopcartData,
          price: this.totalGoodsPrice,
          time: date,
          incoiceMode: this.incoiceMode,
          goodsList: this.shopGoodsList
        };
        this.axios.post('/api/paymentInfo', data);
        // this.REMOVE_GOODS();
        this.$router.push({
          name: 'Payment'
        });
        // console.log(data);
      },
      async getAddressData () {
        const { data } = await this.axios.get('/api/addressData');
        this.addressData = data;
      },
      checkAddress (val) {
        this.addressData.forEach(item => {
          item.checked = false;
          if (item.id === val.id) {
            item.checked = true;
          }
        });
      }
    },
    mounted () {
      this.getAddressData();
    }
  };
</script>

<style lang="less" scoped>
.content{
  background-color: #efefef;
  padding-bottom: 20px;

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
  .address-wrap{
    padding-bottom: 20px;
    margin-bottom: 20px;
    background: #f6f6f6;

    .title{
      font-size: 14px;
      border-bottom: 1px solid #dfdfdf;
      padding: 0 4.16667%;
      height: 50px;
      line-height: 50px;
      color: #666;
      font-weight: normal;
    }
    .info{
      /*box-sizing: border-box;*/
      padding: 15px 4.16667%;

      .info-item{
        padding: 0 20px;
        box-sizing: border-box;
        margin-top: 14px;
        margin-bottom: 30px;
        font-size: 14px;
        height: 220px;
        width: 23.27273%;
        background-color: #fff;
        position: relative;
        margin-left: 1.36364%;
        border: 2px solid #fff;
        box-shadow: 0 1px 5px 0 rgba(211,211,211,.5);
        display: inline-block;

        &.active{
          border-color: #e8736a;
        }
        .name{
          /*padding-left: 20px;*/
          /*padding-right: 20px;*/
          box-sizing: border-box;
          padding: 20px 0px 10px;
        }
        .address{
          box-sizing: border-box;
          /*padding-left: 20px;*/
          /*padding-right: 20px;*/
          margin: 16px 0 0;
          line-height: 1.2;
          /*overflow: hidden;*/
          /*text-overflow: ellipsis;*/
        }
        .default-address{
          box-sizing: border-box;
          /*padding-left: 20px;*/
          /*padding-right: 20px;*/
          /*padding-bottom: 15px;*/
          padding: 10px 20px 0;
          margin-bottom: 10px;
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 32px;
          /*padding-top: 12px;*/
          border-top: 1px solid #dfdfdf;
        }
      }
      .add-address{
        margin-left: 15px;
        height: 36px;
        width: 296px;
        border: 2px solid #ccc;
        margin-bottom: 20px;
        text-align: center;
        cursor: pointer;
        color: #666;
        /*float: left;*/
        line-height: 36px;
        vertical-align: middle;

        &:hover{
          border-color: #666;
        }
        &:hover span{
          color: #333;
        }
      }
    }
  }
  .delivery-time{
    background: #f6f6f6;
    margin-bottom: 20px;
    .title{
      font-size: 16px;
      border-bottom: 1px solid #dfdfdf;
      padding: 0 4.16667%;
      height: 50px;
      line-height: 50px;
      color: #666;
    }
    .desc{
      padding: 15px 4.16667%;
    }
  }
  .goods-list{
    background: #f6f6f6;

    .title{
      font-size: 16px;
      border-bottom: 1px solid #dfdfdf;
      padding: 0 4.16667%;
      height: 50px;
      line-height: 50px;
      color: #666;
    }
    .goods-wrap{
      padding: 15px 4.16667%;
      .goods-item{
        height: 90px;
        line-height: 90px;
        border-bottom: 1px solid #ccc;
        div{
          display: inline-block;
        }
        .img{
          height: 70px;
          width: 70px;
          vertical-align: middle;
          margin-right: 40px;
          /*background-color: aqua;*/

          img{
            width: 100%;
            height: 100%;
          }
        }
        .name{
          width: 430px;
        }
        .price{
          width: 190px;
          text-align: center;
        }
        .num{
          width: 172px;
          text-align: center;
        }
        .total-price{
          width: 190px;
          text-align: center;
        }
      }
    }
    .return{
      padding: 0px 4.16667%;
      text-align: right;
      margin: 0px 0 20px 0;
      font-size: 16px;
      color: #1283af;
    }
    .incoice{
      padding: 0px 4.16667%;

      .incoice-title{
        color: #1e1e1e;
        font-size: 16px;
      }
      .btn{
        margin: 10px 0;
        display: inline-block;
        height: 56px;
        line-height: 56px;
        width: 237px;
        border: 2px solid #e8736a;
        text-align: center;
        background-color: #fff;
        box-sizing: border-box;
        cursor: pointer;
        color: #1e1e1e;
      }
      .incoice-info{
        margin: 10px 0 30px;

        p{
          display: inline-block;
          margin-right: 40px;
        }
      }
    }
    .coupon{
      /*padding: 0px 4.16667%;*/
      padding-bottom: 20px;
      .item{
        border-top: 1px solid #dfdfdf;
        line-height: 40px;
        font-size: 14px;
        padding: 10px 16px;
        color: #333;
        cursor: pointer;
      }
    }
  }
  .submission{
    margin-top: 20px;
    /*margin-bottom: 20px;*/
    background-color: #fff;
    /*padding-top: 25px;*/
    /*padding-bottom: 25px;*/
    padding: 25px 8% 25px;
    font-size: 14px;

    .info{
      padding-top: 40px;
      p{
        display: inline-block;
        margin-right: 20px;
        &:nth-of-type(5){
          margin-right: 0;
          span{
            display: inline-block;
            margin-left: 188px;
          }
        }
      }
      .btn{
        margin-top: 20px;
        margin-bottom: 70px;
        display: block;
        width: 300px;
        height: 50px;
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
