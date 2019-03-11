<template>
  <div class="like-goods">
    <h3 class="title">你可能喜欢</h3>
    <ul class="clearfix goods">
      <li class="fl goods-item" v-for="(item,index) in data" :key="index">
        <a href="javascript:;" class="img">
          <img :src="item.goodsUrl" alt="">
        </a>
        <p class="goods-name">{{item.goodsName}}</p>
        <p class="goods-price">￥<span>{{item.goodsPrice}}</span></p>
        <a href="javascript:;" class="goto-shopcart" @click="clickItem(item)">加入购物车</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'LikeGoods',
    props: {
      data: {
        type: Array,
        default () {
          return [];
        }
      }
    },
    methods: {
      clickItem (data) {
        this.$emit('clickItem', data);
      }
    }
  };
</script>

<style lang="less" scoped>
.like-goods{
  margin-top: 50px;

  .title{
    text-align: center;
    font-size: 24px;
    margin-bottom: 24px;
    font-weight: 300;
    color: #828282;
  }
  .goods{

    .goods-item{
      padding: 16px 0 0;
      text-align: center;
      border-radius: 2px;
      width: 23.83333%;
      max-width: 290px;
      margin-right: 1.16667%;
      background-color: #fff;

      .img{
        display: inline-block;
        width: 100%;
        height: 290px;

        img{
          width: 100%;
          height: 100%;
        }
      }
      .goods-name{
        font-size: 14px;
        color: #828282;
      }
      .goods-price{
        font-size: 14px;
        color: #828282;
        margin-top: 6px;
      }
      .goto-shopcart{
        display: inline-block;
        margin-top: 26px;
        margin-bottom: 26px;
        font-size: 14px;
        font-weight: bolder;
        width: 80%;
        height: 40px;
        line-height: 40px;
        border-radius: 2px;
        border: 1px solid #eb0028;
        color: #eb0028;
      }
      &:last-child{
        margin-right: 0;
      }
    }
  }
}
</style>
