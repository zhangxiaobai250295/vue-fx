<template>
  <div>
    <Header></Header>
    <CategoryNav></CategoryNav>
    <Swiper :data="swiperData"></Swiper>
    <ul class="wrapper post clearfix">
      <li class="post-item fl" v-for="(item,index) in postData" :key="index">
        <a :href="item.href">
          <img :src="item.imgUrl" alt="">
        </a>
      </li>
    </ul>
    <div class="container">
      <div class="wrapper">
        <div class="sale">
          <h3 class="title">OnePlus 6T 热销配件</h3>
          <GoodsList :data="OnePlus6TData"></GoodsList>
        </div>
        <div class="sale">
          <h3 class="title">OnePlus 6 热销配件</h3>
          <GoodsList :data="OnePlus6Data"></GoodsList>
        </div>
        <div class="sale">
          <h3 class="title">一加生活周边</h3>
          <GoodsList :data="lifeData"></GoodsList>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '../components/Header';
  import CategoryNav from '../components/CategoryNav';
  import Swiper from '../components/Swiper';
  import GoodsList from '../components/GoodsList';
  import Footer from '../components/Footer';

  export default {
    name: 'index',
    components: {
      Header, Swiper, GoodsList, Footer, CategoryNav
    },
    data () {
      return {
        swiperData: [],
        postData: [],
        OnePlus6TData: [],
        OnePlus6Data: [],
        lifeData: []
      };
    },
    methods: {
      async getSwiperData () {
        const {data} = await this.axios.get('/api/advertise');
        this.swiperData = data;
      },
      async getPostData () {
        const {data} = await this.axios.get('/api/post');
        this.postData = data;
      },
      async getOnePlus6TData () {
        const {data} = await this.axios.get('/api/OnePlus6T');
        this.OnePlus6TData = data;
      },
      async getOnePlus6Data () {
        const {data} = await this.axios.get('/api/OnePlus6');
        this.OnePlus6Data = data;
      },
      async getLifeData () {
        const {data} = await this.axios.get('/api/life');
        this.lifeData = data;
      }
    },
    mounted () {
      this.getSwiperData();
      this.getPostData();
      this.getOnePlus6TData();
      this.getOnePlus6Data();
      this.getLifeData();
    }
  };
</script>

<style lang="less" scoped>
  .post {
    height: 357px;
    padding: 60px 0;
    box-sizing: border-box;

    .post-item {
      width: 385px;
      height: 237px;

      &:nth-of-type(2) {
        margin: 0 22px;
      }

      /*background-color: orange;*/

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .container {
    padding: 50px 0;
    box-sizing: border-box;
    background-color: #f1f1f1;

    .title{
      color: #333;
      font-size: 25px;
      font-weight: 400;
      margin-bottom: 10px;
    }

    .sale{
      margin-bottom: 50px;

      &:last-child{
        margin-bottom: 0;
      }
    }
  }
</style>
