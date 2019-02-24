<template>
  <div class="header">
    <div class="wrapper">
      <div class="header-top clearfix">
        <div class="fl logo">
          <span class="iconfont">&#xe830;</span>
        </div>
        <!--<div class="fr header-right">-->
          <!--<span class="iconfont">&#xe64d;</span>-->
          <!--<span class="iconfont cart">&#xe635;</span>-->
          <!--<span class="iconfont">&#xe617;</span>-->
        <!--</div>-->
        <div class="header-right clearfix fr">
          <div class="fr search">
            <span class="iconfont" @click="showSearch" v-show="hiddenSearch">&#xe617;</span>
            <Search @close="hiddenSearch = true" v-show="!hiddenSearch"></Search>
          </div>
          <div class="fr cart" v-show="hiddenSearch">
            <span class="iconfont">&#xe635;</span>
            <CartInfo></CartInfo>
          </div>
          <div class="fr user" v-show="hiddenSearch">
            <span class="iconfont">&#xe64d;</span>
          </div>
        </div>
        <ul class="nav fl" v-show="hiddenSearch">
          <li v-for="(item,index) in navData" :key="index"><a href="">{{item.name}}</a><span :class="{'new-title': item.newname}"></span></li>
        </ul>
      </div>
    </div>
    <div class="header-bottom" :class="{'hidden-bottom': !showHeader}">
      <ul class="nav-list">
        <li v-for="(item,index) in categoryData" :key="index" class="list-item" :class="{'hidden-list-item': !showHeader}">
          <a href="">
            <transition name="img">
              <div class="img" :class="{'hidden-img': !showHeader}" v-show="showHeader"></div>
            </transition>
            <p :class="{'hidden-p': !showHeader}">{{item.name}}</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import CartInfo from './CartInfo';
  import Search from './Search';
  export default {
    name: 'Header',
    components: {
      CartInfo, Search
    },
    data () {
      return {
        hiddenSearch: true,
        showHeader: true,
        navData: [],
        categoryData: []
      };
    },
    methods: {
      showSearch () {
        this.hiddenSearch = false;
        console.log(this.hiddenSearch);
      },
      handleScroll () {
        this.showHeader = false;
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop === 0) {
          this.showHeader = true;
        }
        // console.log(scrollTop);
      },
      async getNavData () {
        const { data } = await this.axios.get('/api/nav');
        this.navData = data;
        console.log(data);
      },
      async getCategoryData () {
        const { data } = await this.axios.get('/api/category');
        this.categoryData = data;
        console.log(data);
      }
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll);
      this.getNavData();
      this.getCategoryData();
    }
  };
</script>

<style lang="less" scoped>
.header{

  .header-top{
    height: 60px;
    line-height: 60px;

    .logo{
      height: 40px;
      width: 40px;
      margin-right: 160px;

      span{
        font-size: 40px;
        color: #eb0028;
        cursor: pointer;
      }
    }
    .header-right{
      .cart{
        position: relative;
      }
      .Search{
        position: relative;
      }
      span{
        font-size: 25px;
        margin-left: 40px;
        vertical-align: middle;
        color: #828282;
        cursor: pointer;

        &:hover{
          color: #000;
        }
      }
    }
    .nav{

      li{
        display: inline-block;
        position: relative;

        a{
          padding: 18px 35px;
          box-sizing: border-box;
          font-size: 14px;
          color: #828282;
          transition: all .2s;
          &:hover{
            color: #eb0028;
            border-bottom: 2px solid #eb0028;
          }
        }
        .new-title{
          position: absolute;
          top: -7px;
          right: 6px;
          /*right: -29px;*/
          font-size: 12px;
          color: red;
        }
        .new-title:after{
          content: 'New';
        }
      }
    }
  }
  .header-bottom{
    /*height: 160px;*/
    text-align: center;
    padding: 46px 0 25px 0;
    box-sizing: border-box;
    background-color: #f1f1f1;

    .nav-list{

      .list-item{
        width: 105px;
        height: 93px;
        display: inline-block;

        .img{
          display: inline-block;
          width: 41px;
          height: 41px;
          background-color: #CCCCCC;
          border-radius: 50%;
          background-image: url("../assets/images/nav.png");
          background-repeat: no-repeat;
          transition: all .3s;
        }
        p{
          margin-top: 32px;
          transition: color .3s;
          color: #999;
        }

        &:hover p{
          color: #eb0028;
        }
      }
      .list-item:nth-of-type(1) .img{
        background-position: 0px -451px;
      }
      .list-item:nth-of-type(2) .img{
        background-position: 0px -40px;
      }
      .list-item:nth-of-type(3) .img{
        background-position: 0px -287px;
      }
      .list-item:nth-of-type(4) .img{
        background-position: 0px -204px;
      }
      .list-item:nth-of-type(5) .img{
        background-position: 0px -123px;
      }
      .list-item:nth-of-type(6) .img{
        background-position: 0px -368px;
      }

      .list-item:nth-of-type(1):hover .img{
        background-position: 0px -410px;
      }
      .list-item:nth-of-type(2):hover .img{
        background-position: 0px 1px;
      }
      .list-item:nth-of-type(3):hover .img{
        background-position: 0px -163px;
      }
      .list-item:nth-of-type(4):hover .img{
        background-position: 0px -246px;
      }
      .list-item:nth-of-type(5):hover .img{
        background-position: 0px -82px;
      }
      .list-item:nth-of-type(6):hover .img{
        background-position: 0px -327px;
      }
    }
    .img-leave-active{
      transform: scale(0,0);
      transition: all .3s linear;
    }
    .img-leave{
      transform: scale(1,1);
    }
    .img-enter{
      opacity: 0;
      transform: scale(0,0);
    }
    .img-enter-active{
      transform: scale(1,1);
      opacity: 1;
      transition: all .3s linear;
    }
  }

  .hidden-bottom{
    position: fixed;
    z-index: 99;
    top: 0;
    width: 100%;
    padding: 0;
    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  }
  .hidden-list-item{
    height: 53px !important;
    line-height: 53px;
  }
  .hidden-img{
    height: 0;
    width: 0;
  }
  .hidden-p{
    margin-top: 0 !important;
  }
}
</style>
