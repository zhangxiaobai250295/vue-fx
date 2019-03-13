<template>
  <div class="info">
    <div class="cart-empty" v-if="data.length <=0 ">
      <div class="empty-top"><p>您的购物车里面没有商品</p></div>
      <div class="empty-bottom">
        <a href="javascript:;" class="btn">去购物</a>
      </div>
    </div>
    <div class="cart-info" v-if="data.length >0 ">
      <div class="info-top"><span>已选择</span><span>{{this.shopcartTotal}}</span>件商品</div>
      <div class="info-content ">
        <div class="item clearfix" v-for="(item,index) in data" :key="index">
          <img :src="item.goodsUrl" alt="" class="img fl">
          <div class="fl">
            <!--<p >oneplus <span>亮黑8g+128g</span></p>-->
            <p >{{item.goodsName}}</p>
            <p>￥{{item.goodsPrice}} <span class="fr">x{{item.count}}</span></p>
          </div>
        </div>
      </div>
      <div class="info-bottom">
        <p class="total">总价 <span>￥{{this.totalGoodsPrice}}</span></p>
        <p class="mail">支持免邮</p>
        <a href="javascript:;" class="gocart" @click="goToCart">去购物车</a>
        <a href="javascript:;" class="gopay" @click="goToOrder">去付款</a>
      </div>
    </div>
  </div>

</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    name: 'CartInfo',
    props: {
      data: {
        type: Array,
        default () {
          return [];
        }
      }
    },
    computed: {
      ...mapGetters([
        'totalGoodsPrice',
        'shopcartTotal'
      ])
    },
    methods: {
      goToCart () {
        this.$router.push({
          name: 'Shopcart'
        });
      },
      goToOrder () {
        this.$router.push({
          name: 'Order'
        });
      }
    }
  };
</script>

<style lang="less" scoped>
  .cart-empty {
    background-color: white;
    position: absolute;
    text-align: center;
    top: 60px;
    right: -70px;
    width: 400px;
    height: 188px;
    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);

    .empty-top {
      height: 108px;
      line-height: 156px;
      border-bottom: 1px solid #ccc;

      p {
        font-size: 14px;
        color: #999;
        margin-bottom: 25px;
      }
    }

    .empty-bottom {
      height: 80px;
      line-height: 80px;

      .btn {
        color: #fff;
        display: inline-block;
        width: 360px;
        height: 40px;
        line-height: 40px;
        background-color: #eb0028;
        border-radius: 2px;
        transition: all .3s;

        &:hover {

        }
      }
    }
  }

  .cart-info{
    padding-bottom: 15px;
    background-color: white;
    position: absolute;
    text-align: center;
    top: 60px;
    right: -70px;
    width: 400px;
    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
    font-size: 14px;
    color: #999;
    line-height: 1;

    .info-top{
      padding: 15px 0;
      width: 380px;
      margin: 0 auto;
      text-align: left;
      border-bottom: 1px solid #ccc;
      span{
        font-size: 20px;
        color: #101920;
      }
    }
    .info-content{
      padding: 15px 5px 15px 20px;
      line-height: 30px;
      color: #101920;
      text-align: left;
      border-bottom: 1px solid #ccc;
      p{
        width: 280px
      }
      .img{
        display: inline-block;
        width: 65px;
        height: 65px;
        /*background-color: orange;*/
        margin-right: 20px;
        vertical-align: middle;
      }
    }
    .info-bottom{
      padding: 20px 15px 15px 15px;
      .total{
        text-align: right;
        span{
          color: #101920;
          font-size: 20px;
        }
      }
      .mail{
        text-align: right;
        margin-top: 10px;
        margin-bottom: 30px;
      }
      .gocart{
        display: inline-block;
        width: 180px;
        height: 40px;
        line-height: 40px;
        border: 1px solid #000;
        border-radius: 2px;
        background-color: white;
        color: red;
        z-index: 9;
        position: relative;

        &:before{
          display: inline-block;
          content: '';
          height: 40px;
          width: 0px;
          background-color: #000;
          vertical-align: middle;
          position: absolute;
          left: 0;
          transition: width .3s;
          z-index: -1;
        }
        &:hover{
          color: #fff;
        }
        &:hover:before{
          width: 182px;
        }
      }
      .gopay{
        display: inline-block;
        width: 180px;
        height: 40px;
        line-height: 40px;
        border: 1px solid #eb0028;
        border-radius: 2px;
        background-color: #eb0028;
        color: #fff;
        position: relative;
        z-index: 9;

        &:before{
          display: inline-block;
          content: '';
          height: 40px;
          width: 0px;
          background-color: #000;
          vertical-align: middle;
          position: absolute;
          left: 0;
          transition: width .3s;
          z-index: -1;
        }
        &:hover{
          color: #fff;
        }
        &:hover:before{
          width: 182px;
        }
      }
    }
  }
</style>
