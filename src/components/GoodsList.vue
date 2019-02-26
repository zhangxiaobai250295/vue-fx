<template>
  <ul class="clearfix">
    <li class="goods-item fl" v-for="(item,index) in data" :key="index" :class="{'last-child': (index+1) %4 === 0}">
      <a :href="item.href">
        <img :src="item.goodsUrl" alt="" class="goods-img">
        <div class="goods-name">{{item.goodsName}}</div>
        <div class="goods-price">
          <span>￥{{item.goodsPrice}}</span><span v-if="item.oldPrice" class="oldPrice">{{item.oldPrice}}</span>
        </div>
        <div v-if="item.color" class="goods-color">
          <img :src="img" alt="" class="color-item" v-for="(img,list) in item.color" :key="list">
        </div>
        <div v-if="item.discount" class="goods-new">{{item.discount}}折</div>
      </a>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'GoodsList',
    props: {
      data: {
        type: Array,
        default () {
          return [];
        }
      }
    }
  };
</script>

<style lang="less" scoped>
  .goods-item{
    margin-top: 20px;
    width: 285px;
    height: 365px;
    background-color: #fff;
    padding: 50px 0 50px 0;
    box-sizing: border-box;
    text-align: center;
    position: relative;
    margin-right: 23px;
    transition: all .3s;
    overflow: hidden;

    &:hover{
      box-shadow: 0 15px 50px rgba(0,0,0,.3);
    }

    &.last-child{
      margin-right: 0;
    }

    img{
      height: 100%;
      width: 100%;
    }
    .goods-img{
      display: inline-block;
      height: 183px;
      width: 183px;
      /*background-color: deeppink;*/
    }
    .goods-name{
      font-size: 18px;
      margin-top: 20px;
      margin-bottom: 10px;
      color: #10181f;
    }
    .goods-price{
      font-size: 16px;
      color: #10181f;
      /*line-height: 16px;*/

      .oldPrice{
        color: #999;
        text-decoration: line-through;

        &:before{
          display: inline-block;
          content: '|';
          width: 35px;
          font-size: 20px;
          color: #000;
          height: 22px;
          line-height: 16px;
          vertical-align: middle;
        }
      }
    }
    .goods-new{
      font-size: 15px;
      position: absolute;
      top: 10px;
      right: 10px;
      background-color: #ff0000;
      padding: 5px 15px;
      color: #fff;
    }
    .goods-color{
      margin-top: 5px;
      img{
        margin-left: 5px;
        width: 100%;
        height: 100%;
      }
      .color-item{
        display: inline-block;
        width: 10px;
        height: 10px;
        background-color: red;
        border-radius: 50%;
      }
    }
  }
</style>
