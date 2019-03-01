<template>
  <div class="detail">
    <Header></Header>
    <div class="content clearfix">
      <div class="img fl">
        <div class="big-img">
          <img src="" alt="" >
          <div class="arrow clearfix">
            <span class="iconfont left fl">&#xe62a;</span>
            <span class="iconfont right fr">&#xe628;</span>
          </div>
        </div>
        <ul>
          <li class="small-img">
            <img src="" alt="">
          </li>
          <li class="small-img">
            <img src="" alt="">
          </li>
          <li class="small-img">
            <img src="" alt="">
          </li>
        </ul>
      </div>
      <div class="info fl">
        <h3 class="name">OnePlus 6T 全包保护壳 尼龙</h3>
        <p class="price">￥144.00</p>
        <div class="color">
          <p class="title">颜色</p>
          <ul>
            <li class="item">
              <a href=""></a>
            </li>
            <li class="item">
              <a href=""></a>
            </li>
            <li class="item">
              <a href=""></a>
            </li>
          </ul>
        </div>
        <a href="" class="btn">加入购物车</a>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import Header from '../components/Header';
  import Footer from '../components/Footer';
  export default {
    name: 'Detail',
    components: {
      Header, Footer
    },
    computed: {
      ...mapState(['detailData'])
    }
  };
</script>

<style lang="less" scoped>
.content{
  padding: 50px 20px;
  background-color: #f1f1f1;
  position: relative;

  .img{
    width: 888px;
    height: 885px;
    background-color: pink;
    vertical-align: middle;
    position: relative;

    .big-img{
      display: inline-block;
      width: 759px;
      height: 759px;
      background-color: orange;
      position: absolute;
      right: 0;
      top: 50px;

      .arrow{
        padding: 0 50px;
        box-sizing: border-box;
        width: 100%;
        /*background-color: red;*/
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 30px;

        span{
          font-size: 40px;
        }
      }
    }
    ul{
      background-color: #fff;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      .small-img{
        width: 70px;
        height: 70px;
        background-color: red;
        box-shadow: 0 15px 50px rgba(0,0,0,.3);
      }
    }
  }
  .info{
    vertical-align: middle;
    color: #333;

    .name{
      font-size: 24px;
      margin-top: 225px;
      font-weight: 400;
      margin-bottom: 25px;
    }
    .price{
      font-size: 36px;
      color: #404040;
      font-weight: 300;
      line-height: .9;
      padding: 15px 0;
      margin-bottom: 20px;
      border-bottom: 1px solid #ccc;
    }
    .color{
      /*margin-top: 35px;*/
      margin: 35px 0 25px;
      .title{
        margin-bottom: 15px
      }
      .item{
        display: inline-block;
        margin-left: 15px;

        &:first-child{
          margin-left: 0;
        }

        a{
          display: inline-block;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: deeppink;
        }
      }
    }
    .btn{
      display: inline-block;
      width: 200px;
      height: 56px;
      line-height: 56px;
      text-align: center;
      cursor: pointer;
      font-size: 14px;
      background: #eb0028;
      color: #fff;
      border: 1px solid #d70226;
    }
  }
}
</style>
