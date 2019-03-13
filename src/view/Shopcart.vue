<template>
  <div class="shopcart">
    <Header></Header>
    <div class="content">
      <div class="wrapper">
        <Service></Service>
        <div v-if="this.shopcartData.length > 0" class="cart-wrap">
          <h3 class="title">购物车</h3>
          <ul>
            <li class="cart-item clearfix" v-for="(item,index) in shopcartData" :key="index">
              <div class="img item-list">
                <a href="javascript:;">
                  <img :src="item.goodsUrl" alt="">
                </a>
              </div>
              <div class="name item-list">
                  <span>{{item.goodsName}}</span>
                </div>
              <div class="price item-list">
                  ￥ <span>{{item.goodsPrice}}</span>
                </div>
              <div class="num item-list clearfix">
                  <div class="wrap">
                    <span class="fl" @click="reduce(item.id)">-</span>
                    <input type="text" v-model="item.count" class="fl">
                    <span class="fl" @click="increase(item.id)">+</span>
                  </div>
                </div>
              <div class="total-price item-list">{{item.count * item.goodsPrice}}</div>
              <div class="close item-list" @click="delGoods(item.id)">
                  <span class="iconfont">&#xe609;</span>
                </div>
            </li>
          </ul>
          <div class="order clearfix">
            <div class="left fl">
              已选择<span>{{this.shopcartTotal}}</span>件商品
            </div>
            <div class="right fl">
              <ul>
                <li class="clearfix">
                  <div class="fl">购物车商品小计</div>
                  <div class="fr">￥ <span>{{this.totalGoodsPrice}}</span></div>
                </li>
                <li class="clearfix">
                  <div class="fl">节省</div>
                  <div class="fr">￥ <span>3,827.00</span></div>
                </li>
                <li class="order-line"></li>
                <li class="clearfix">
                  <div class="fl">总价</div>
                  <div class="fr total-price">￥ <span>{{this.totalGoodsPrice}}</span></div>
                </li>
                <li>
                  <div v-if="this.totalGoodsPrice < 100">还差<span>{{100 - this.totalGoodsPrice}}</span>免邮</div>
                  <div v-if="this.totalGoodsPrice > 100">支持免邮</div>
                </li>
                <li>
                  <a href="javascript:;" class="btn goto-shop" @click="gotoIndex">继续购物</a>
                  <a href="javascript:;" class="btn goto-pay" @click="gotoPay">去付款</a>
                </li>
                <li>
                  <p>请在下一步使用优惠券</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div v-else class="shopcart-empty">
          <div class="icon">
            <span class="iconfont">&#xe63a;</span>
          </div>
          <p class="desc">登陆后将同步购物车中的商品</p>
          <a href="javascript:;" class="login">去登录</a>
          <a href="javascript:;" class="shop">去购物</a>
        </div>
        <LikeGoods :data="likeGoodslistDada" @clickItem="addShopcart"></LikeGoods>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import { mapState, mapMutations, mapGetters } from 'vuex';
  import Header from '../components/Header';
  import Footer from '../components/Footer';
  import Service from '../components/Service';
  import LikeGoods from '../components/LikeGoods';
  export default {
    name: 'Shopcart',
    data () {
      return {
        likeGoodslistDada: []
      };
    },
    components: {
      Header, Footer, Service, LikeGoods
    },
    computed: {
      ...mapState(['shopcartData']),
      ...mapGetters([
        'totalGoodsPrice',
        'shopcartTotal'
      ])
    },
    methods: {
      ...mapMutations([
        'increaseShopcart',
        'reduceShopcart',
        'delShopcart',
        'addShopcart'
      ]),
      increase (id) {
        this.increaseShopcart(id);
      },
      reduce (id) {
        this.reduceShopcart(id);
      },
      async getLikeGoodslistDada () {
        const { data } = await this.axios.get('/api/likeGoodslist');
        this.likeGoodslistDada = data;
      },
      delGoods (id) {
        this.delShopcart(id);
      },
      gotoIndex () {
        this.$router.push({
          name: 'Index'
        });
      },
      gotoPay () {
        this.$router.push({
          name: 'Order'
        });
      },
      addShopcart (data) {
        // console.log(data);
        let num = 1;
        // this.addShopcart({
        //   data: data,
        //   num: parseInt(num)
        // });
        this.$store.commit('addShopcart', {
          data: data,
          num: parseInt(num)
        });
      }
    },
    mounted () {
      this.getLikeGoodslistDada();
      // console.log(this.shopcartData);
    }
  };
</script>

<style lang="less" scoped>
.shopcart{

  .content{
    background-color: #efefef;
    padding: 50px 0;
    box-sizing: border-box;

    /deep/ .service{
      background-color: #f9f9f9;
    }

    .cart-wrap{
      background-color: #fff;
      .title{
        color: #101920;
        padding-left: 30px;
        font-size: 20px;
        font-weight: 300;
        line-height: 70px;
        border-bottom: 1px solid #dfdfdf;
      }
      ul{
        /*font-size: 0;*/
        .cart-item{
          display: block;
          padding-left: 1.66667%;
          padding-right: 1.66667%;
          margin: 20px 2.5% 30px;
          border-bottom: 1px solid #dfdfdf;
          .item-list{
            /*display: inline-block;*/
            float: left;
            line-height: 49px;
          }
          .img{
            width: 20%;
            margin-bottom: 30px;
            /*background-color: aqua;*/
            /*vertical-align: top;*/

            a{
              display: block;
              width: 84px;
              height: 84px;
              /*background-color: red;*/

              img{
                width: 100%;
                height: 100%;
              }
            }
          }
          .name{
            font-size: 18px;
            color: #101920;
            white-space: normal;
            padding-left: 10px;
            /*padding-top: 10px;*/
            padding-bottom: 10px;
            text-align: left;
            width: 30%;
            box-sizing: border-box;
          }
          .price{
            width: 15%;
            font-size: 14px;
            color: #101920;
            text-align: center;
          }
          .num{
            width: 15%;
            margin-top: 8px;
            .wrap{
              border: 1px solid #dfdfdf;
              border-radius: 2px;
              line-height: 2;
              height: 28px;
              width: 84px;
              margin: 0 auto;
              vertical-align: baseline;

              span{
                height: 24px;
                width: 24px;
                line-height: 24px;
                text-align: center;
                /*background: transparent;*/
                font-size: 20px;
                cursor: pointer;
              }
              input{
                display: inline-block;
                width: 32px;
                line-height: 24px;
                height: 24px;
                border: 1px solid transparent;
                text-align: center;
              }
            }
          }
          .total-price{
            width: 15%;
            font-size: 14px;
            color: #828282;
            text-align: center;
          }
          .close{
            width: 5%;
            span{
              font-size: 24px;
            }
          }
        }
      }
      .order{
        padding-left: 4.16667%;
        padding-right: 4.16667%;
        padding-bottom: 40px;
        box-sizing: border-box;

        .left{
          width: 62.72727%;
          font-size: 14px;
          color: #828282;

          span{
            color: #101920;
            margin: 0 5px;
          }
        }
        .right{
          width: 37.27273%;
          color: #828282;
          font-size: 14px;

          ul{
            li{
              margin-bottom: 20px;

              span{
                margin: 0 5px;
              }
              .total-price{
                font-size: 30px;
                color: #101920;
                margin-top: -12px;
                line-height: 36px;
              }
              .btn{
                display: inline-block;
                width: 200px;
                height: 54px;
                text-align: center;
                line-height: 54px;
                font-size: 18px;
                /*color: #101920;*/
              }
              .goto-shop{
                margin-right: 5px;
                border: 1px solid #101920;
                border-radius: 3px;
                color: #101920;
              }
              .goto-pay{
                /*margin-left: 5px;*/
                border-radius: 3px;
                border: 1px solid transparent;
                background-color: #eb0028;
                color: #fff;
              }
            }
            .order-line{
              height: 1px;
              background-color: #efefef;
            }
          }
        }
      }
    }

    .shopcart-empty{
      height: 460px;
      padding-top: 5%;
      padding-bottom: 6.66667%;
      box-sizing: border-box;
      background-color: #fff;
      text-align: center;
      .icon{

        span{
          display: inline-block;
          /*width: 120px;*/
          /*height: 120px;*/
          line-height: 1;
          font-size: 120px;
          color: #e6e6e6;
        }
      }
      .desc{
        margin-top: 30px;
        margin-bottom: 40px;
        font-size: 16px;
        color: #828282;
      }
      .login{
        display: block;
        width: 200px;
        border-radius: 3px;
        background-color: #eb0028;
        color: #fff;
        line-height: 40px;
        height: 40px;
        font-size: 14px;
        margin: 0 auto;
      }
      .shop{
        display: block;
        margin-top: 24px;
        color: #09c;
      }
    }
  }
}
</style>
