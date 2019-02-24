<template>
  <div class="swiper" :style="swiperSize">
    <ul class="clearfix" :style="listWrapper" @transitionend="setDuration">
      <li class="swiper-list" v-for="(item,index) in data" :key="index">
        <a :href="item.href">
          <img :style="swiperSize" :src="item.imgUrl" alt="">
        </a>
      </li>
      <li v-if="data.length > 1" class="swiper-list" :style="swiperSize" :key="data.length + 1">
        <a :href="data [0] .href">
          <img :src="data [0] .imgUrl" alt="" :style="swiperSize">
        </a>
      </li>
    </ul>
    <ul class="swiper-pagination">
      <li v-for="(item,index) in data" :class="{'active': activeIndex === index}" @click="changImg(index)" :key="index"></li>
    </ul>
    <div class="arrow">
      <span @click="up" class="iconfont left">&#xe62a;</span>
      <span @click="next" class="iconfont right">&#xe628;</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Swiper',
    props: {
      data: {
        type: Array,
        default () {
          return [];
        }
      },
      height: {
        type: Number,
        default: 480
      },
      width: {
        type: Number,
        default: 1519
      },
      delay: {
        type: Number,
        default: 5000
      }
    },
    data () {
      return {
        activeIndex: 0,
        timer: null,
        haveDuration: true
      };
    },
    computed: {
      swiperSize () {
        return {
          width: `${this.width}px`,
          height: `${this.height}px`
        };
      },
      listWrapper () {
        return {
          width: `${(this.data.length + 1) * this.width}px`,
          height: `${this.height}`,
          transform: `translateX(-${this.activeIndex * this.width}px)`,
          transitionDuration: this.haveDuration ? '.3s' : ''
        };
      }
    },
    methods: {
      move () {
        clearInterval(this.timer);
        this.timer = setInterval(() => {
          if (this.activeIndex === this.data.length) {
            this.activeIndex = 0;
            this.haveDuration = false;
          } else {
            this.activeIndex++;
            this.haveDuration = true;
          }
        }, this.delay);
      },
      changImg (index) {
        this.activeIndex = index;
        this.haveDuration = true;
      },
      setDuration () {
        if (this.activeIndex === this.data.length) {
          this.activeIndex = 0;
          this.haveDuration = false;
        }
      },
      up () {
        if (this.activeIndex !== 0) {
          this.activeIndex--;
          this.haveDuration = true;
        } else {
          this.activeIndex = this.data.length - 1;
        }
      },
      next () {
        if (this.activeIndex !== this.data.length) {
          this.activeIndex++;
          this.haveDuration = true;
        }
      }
    },
    mounted () {
      this.move();
    }
  };
</script>

<style lang="less" scoped>
.swiper{
  /*height: 480px;*/
  /*width: 1519px;*/
  position: relative;
  /*overflow: hidden;*/
  /*background: url("../assets/images/swiper.jpg") no-repeat center;*/
  /*background-size: cover;*/

  .swiper-list{
    /*display: inline-block;*/
    float: left;

    img{
      height: 100%;
      width: 1519px;
    }
  }
  .swiper-pagination{
    position: absolute;
    left: 45%;
    bottom: 3%;

    li{
      margin-left: 10px;
      display: inline-block;
      width: 10px;
      height: 2px;
      background-color: orange;
      cursor: pointer;

      &.active{
        background-color: #ccc;
      }
    }
  }
  .arrow{

    .left,.right{
      position: absolute;
      display: inline-block;
      height: 40px;
      width: 40px;
      line-height: 40px;
      border-radius: 50%;
      font-size: 20px;
      text-align: center;
      cursor: pointer;
      background-color: rgba(204,204,204,.5);
    }
    .left{
      top: 50%;
      transform: translateY(-50%);
      left: 10%;
    }
    .right{
      top: 50%;
      transform: translateY(-50%);
      right: 10%;
    }
  }
}
</style>
