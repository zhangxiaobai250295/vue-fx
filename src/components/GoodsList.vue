<template>
  <ul class="clearfix">
    <li class="goods-item fl">
      <img src="" alt="" class="goods-img">
      <div class="goods-name">OnePlus 6T 悦耳套装</div>
      <div class="goods-price">
        <span>￥229.00</span><span class="oldPrice">248.00</span>
      </div>
      <div class="goods-color">
        <img src="" alt="" class="color-item">
        <img src="" alt="" class="color-item">
      </div>
      <div class="goods-new">9.3折</div>
    </li>
    <li class="goods-item fl">
      <img src="" alt="" class="goods-img">
      <div class="goods-name">OnePlus 6T 悦耳套装</div>
      <div class="goods-price">
        <span>￥229.00</span><span class="oldPrice">248.00</span>
      </div>
      <div class="goods-color">
        <img src="" alt="" class="color-item">
        <img src="" alt="" class="color-item">
      </div>
      <div class="goods-new">9.3折</div>
    </li>
    <li class="goods-item fl">
      <img src="" alt="" class="goods-img">
      <div class="goods-name">OnePlus 6T 悦耳套装</div>
      <div class="goods-price">
        <span>￥229.00</span><span class="oldPrice">248.00</span>
      </div>
      <div class="goods-color">
        <img src="" alt="" class="color-item">
        <img src="" alt="" class="color-item">
      </div>
      <div class="goods-new">9.3折</div>
    </li>
    <li class="goods-item fl">
      <img src="" alt="" class="goods-img">
      <div class="goods-name">OnePlus 6T 悦耳套装</div>
      <div class="goods-price">
        <span>￥229.00</span><span class="oldPrice">248.00</span>
      </div>
      <div class="goods-color">
        <img src="" alt="" class="color-item">
        <img src="" alt="" class="color-item">
      </div>
      <div class="goods-new">9.3折</div>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'GoodsList'
  };
</script>

<style lang="less" scoped>
  .goods-item{
    margin-top: 10px;
    width: 285px;
    height: 365px;
    background-color: #fff;
    padding: 50px 0 50px 0;
    box-sizing: border-box;
    text-align: center;
    position: relative;
    margin-left: 23px;
    transition: all .3s;

    &:hover{
      box-shadow: 0 15px 50px rgba(0,0,0,.3);
    }

    &:first-child{
      margin-left: 0;
    }

    img{
      height: 100%;
      width: 100%;
    }
    .goods-img{
      display: inline-block;
      height: 183px;
      width: 183px;
      background-color: deeppink;
    }
    .goods-name{
      font-size: 18px;
      margin-top: 20px;
      margin-bottom: 10px;
    }
    .goods-price{
      font-size: 16px;
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
