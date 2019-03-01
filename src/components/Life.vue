<template>
    <div>
      <div class="banner">
        <img :src="data.bannerUrl" alt="">
      </div>
      <div class="hot-sale clearfix">
        <ul class="fl" v-for="(item,index) in data.hotSale" :key="index">
          <li class="sale-item">
            <div class="info">
              <h2 class="name">{{item.goodsName}}</h2>
              <p class="desc">{{item.describe}}</p>
              <p class="price">￥{{item.goodsPrice}}</p>
              <a class="btn" href="javascript:;">查看详情</a>
            </div>
          </li>
          <li class="sale-item">
            <div class="img">
              <a :href="item.href">
                <img :src="item.goodsUrl" alt="">
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div class="query-list">
        <ul class="nav ">
          <li class=" nav-item" :class="{'active': activeIndex === index}" @click="changeNav(item.key,index)" v-for="(item,index) in queryListData" :key="index">
            <a href="javascript:;">{{item.name}}</a>
          </li>
        </ul>
        <ul class="goods">
          <li class="goods-item" v-for="(item,index) in data.materials" :key="index">
            <a :href="item.href" class="img">
              <img :src="item.goodsUrl" alt="">
            </a>
            <p class="name">{{item.goodsName}}</p>
            <p class="price">￥{{item.goodsPrice}}</p>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'Life',
    props: {
      data: {
        type: Object,
        default () {
          return {};
        }
      },
      materialsCopy: {
        type: Array,
        default () {
          return [];
        }
      }
    },
    data () {
      return {
        queryListData: [],
        activeIndex: 0,
        activeChange: {}
      };
    },
    methods: {
      async getQueryListData () {
        const { data } = await this.axios.get('/api/queryList');
        this.queryListData = data;
        // console.log(data);
      },
      changeNav (key, index) {
        // console.log(key);
        this.activeChange = {};
        this.activeIndex = index;
        this.$set(this.activeChange, key, key);
        // this.$emit('filter', this.activeChange);
        // console.log(this.data.materials);
        this.data.materials = [].concat(this.materialsCopy);
        // console.log(this.data.materials);
        // this.data.materials = [].concat(this.materials);
        // 筛选代码的实现
        Object.keys(this.activeChange).forEach((key) => {
          this.data.materials = this.data.materials.filter((item) => {
            return item.material.indexOf(this.activeChange[key]) >= 0;
          });
        });
      }
    },
    mounted () {
      this.getQueryListData();
    }
  };
</script>

<style lang="less" scoped>
  .banner{
    height: 696px;

    img{
      width: 100%;
      height: 100%;
    }
  }
  .hot-sale{

    .sale-item{
      width: 506px;
      height: 427px;
      text-align: center;
      box-sizing: border-box;

      .info{
        padding: 98px 0;
        box-sizing: border-box;

        .name{
          color: #10181f;
          font-size: 24px;
          padding-bottom: 10px;
          font-weight: 400;
        }
        .desc{
          font-size: 18px;
          color: #a3a3a3;
          padding-bottom: 70px;
        }
        .price{
          font-size: 24px;
          padding-bottom: 8px;
        }
        .btn{
          display: inline-block;
          width: 150px;
          height: 46px;
          line-height: 46px;
          font-size: 14px;
          background: #fff;
          color: #000;
          border: 2px solid #000;
        }
      }
      .img{
        img{
          width: 100%;
          height: 100%;
        }
      }
      /*background-color: orange;*/
    }
  }
  .query-list{
    padding: 50px 0;
    -moz-box-sizing: border-box;
    background: #efefef;
    .nav{
      text-align: center;

      .nav-item{
        display: inline-block;
        padding: 15px 25px;
        margin: 0 5px;
        font-size: 16px;

        a{
          color: #000;
        }

        &.active{
          border-bottom: 5px solid #000;
        }
      }
    }
    .goods{
      font-size: 0;
      .goods-item{
        display: inline-block;
        height: 420px;
        width: 33.33333%;
        text-align: center;

        .img{
          height: 320px;

          img{
            width: 100%;
          }
        }
        .name{
          font-weight: 400;
          font-size: 16px;
          padding-bottom: 10px;
          box-sizing: border-box;
        }
        .price{
          font-size: 16px;
          line-height: 1.4;
        }
      }
    }
  }
</style>
