<template>
  <div class="detail">
    <Header></Header>
    <div class="content clearfix">
      <div class="img fl">
        <div class="big-img">
          <img :src="this.bigImg[imgIndex]" alt="" >
          <div class="arrow clearfix">
            <span class="iconfont left fl" @click="up">&#xe62a;</span>
            <span class="iconfont right fr" @click="next">&#xe628;</span>
          </div>
        </div>
        <ul>
          <li class="small-img" v-for="(item,index) in this.bigImg" :key="index" :class="{'active': index === imgIndex}">
            <img :src="item" alt="" @click="changeIndex(index)">
          </li>
        </ul>
      </div>
      <div class="info fl">
        <h3 class="name">{{detailData.goodsName}}</h3>
        <p class="price">￥{{detailData.goodsPrice}}</p>
        <div class="color" v-if="detailData.color">
          <p class="title">颜色</p>
          <ul>
            <li class="item" @click="clickImg(item.child)" v-for="(item,index) in detailData.color" :key="index">
              <img :src="item.imgUrl" alt="">
            </li>
          </ul>
        </div>
        <a href="javascript:;" class="btn" @click="addShopcart">加入购物车</a>
      </div>
    </div>
    <div class="about">
      <ul class="title">
        <li class="item"><a href="javascript:;"  @click="showInfo" :class="{'disabled': this.dis,'active':this.showInfoData}">详情</a></li>
        <li class="item"><a href="javascript:;" @click="showInfos" :class="{'disabled': !this.dis,'active':this.showInfoDatas}">评论</a></li>
      </ul>
      <div class="about-content" v-if="detailData.details[0] || detailData.comments">
        <DetailInfo :data="detailData.details[0]" v-if="this.showInfoData"></DetailInfo>
        <Comment :data="detailData.comments"  v-if="this.showInfoDatas"></Comment>
      </div>
    </div>
    <Service></Service>
    <Footer></Footer>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import Header from '../components/Header';
  import Footer from '../components/Footer';
  import DetailInfo from '../components/DetailInfo';
  import Comment from '../components/Comment';
  import Service from '../components/Service';
  export default {
    name: 'Detail',
    props: ['id'],
    data () {
      return {
        bigImg: [],
        imgIndex: 0,
        showInfoData: true,
        showInfoDatas: false,
        dis: true
      };
    },
    components: {
      Header, Footer, DetailInfo, Comment, Service
    },
    computed: {
      ...mapState(['detailData', 'commentsCopy'])
    },
    methods: {
      clickImg (data) {
        // console.log(data);
        this.bigImg = data;
      },
      defaultColorData () {
        this.bigImg = this.detailData.color[0].child;
        // console.log(this.detailData.color[0].child);
        // console.log(this.detailData);
      },
      changeIndex (index) {
        this.imgIndex = index;
        // console.log(index);
      },
      next () {
        this.imgIndex++;
        if (this.imgIndex >= this.detailData.color[0].child.length) {
          this.imgIndex = 0;
        }
      },
      up () {
        this.imgIndex--;
        if (this.imgIndex < 0) {
          this.imgIndex = this.detailData.color[0].child.length - 1;
        }
      },
      showInfo () {
        this.showInfoData = true;
        this.showInfoDatas = false;
        this.dis = true;
      },
      showInfos () {
        this.showInfoDatas = true;
        this.showInfoData = false;
        this.dis = false;
      },
      addShopcart () {
        let num = 1;
        this.$store.commit('addShopcart', {
          data: this.detailData,
          num: parseInt(num)
        });
        this.goToShopcart();
      },
      goToShopcart () {
        this.$router.push({
          name: 'Shopcart'
        });
      }
    },
    mounted () {
      this.defaultColorData();
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
    /*background-color: pink;*/
    vertical-align: middle;
    position: relative;

    .big-img{
      display: inline-block;
      width: 759px;
      height: 759px;
      /*background-color: orange;*/
      position: absolute;
      right: 0;
      top: 50px;

      img{
        width: 100%;
        height: 100%;
      }

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
      background: #f7f7f7;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      .small-img{
        width: 70px;
        height: 70px;
        /*background-color: red;*/
        box-shadow: 0 0px 1px rgba(0, 0, 0, 0.3);

        &.active{
          background: #fff;
        }

        img{
          height: 100%;
          width: 100%;
        }
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
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: deeppink;
        &:first-child{
          margin-left: 0;
        }
        img{
          display: inline-block;
          width: 100%;
          height: 100%;
          border-radius: 50%;
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

.about{
  .title{
    text-align: center;
    height: 60px;
    line-height: 60px;
    /*border-bottom: 1px solid #ccc;*/
    .item{
      display: inline-block;
      width: 80px;

      a{
        padding: 20px;
        font-size: 18px;
        font-weight: 400;
        color: #999;
        /*pointer-events: none;*/
        &.active{
          color: #10181f;
        }
        &.disabled{
          pointer-events: none;
        }
      }
    }
  }
  .about-content{

  }
}
</style>
