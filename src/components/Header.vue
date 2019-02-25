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
        navData: []
      };
    },
    methods: {
      showSearch () {
        this.hiddenSearch = false;
        // console.log(this.hiddenSearch);
      },
      async getNavData () {
        const { data } = await this.axios.get('/api/nav');
        this.navData = data;
        // console.log(data);
      }
    },
    mounted () {
      this.getNavData();
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
          padding: 21px 35px;
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
}
</style>
