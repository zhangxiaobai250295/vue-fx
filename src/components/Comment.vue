<template>
  <div class="comment">
    <div class="nav">
        <div class="wrapper clearfix">
          <div class="all-query fl" @click="showList">
            所有评价<span> ({{data.length}}) </span>
            <span class="iconfont down" :class="{'transform':this.showQuery}">&#xe63c;</span>
            <transition name="list">
              <ul class="list" v-if="this.showQuery">
                <li @click="recommendComment('recommend')"><a href="javascript:;" >推荐评价</a></li>
                <li @click="newComment('new')"><a href="javascript:;" >最新评价</a></li>
              </ul>
            </transition>
          </div>
          <div class="img-query fl">
            <input type="checkbox">
            有图<span> (12) </span>
          </div>
          <div class="icon fr">
            <span class="iconfont edit">&#xe667;</span><span>写评价</span>
          </div>
        </div>
      </div>
    <div class="content">
      <div class="wrapper">
        <div class="list-item clearfix" v-for="(item,index) in data" :key="index">
          <div class="user-img fl">
            <a href="javascript:;">
              <img :src="item.nameImg" alt="">
            </a>
          </div>
          <div class="info fl">
            <p class="name">{{item.name}}</p>
            <p class="date">{{item.date}}</p>
            <p class="text">{{item.comment}}</p>
            <div class="imgs" v-if="item.commentImgs">
              <a href="javascript:;" v-for="(imgs,list) in item.commentImgs" :key="list">
                <img :src="imgs" alt="">
              </a>
            </div>
            <p class="goods-info">{{item.goodsInfo}}</p>
            <div class="seller" v-if="item.seller">一加客服:<span class="texts">{{item.seller}}</span></div>
            <div class="xin">
              <span class="iconfont item">&#xe643;</span>
              <span class="iconfont item">&#xe643;</span>
              <span class="iconfont item">&#xe643;</span>
              <span class="iconfont item">&#xe643;</span>
              <span class="iconfont item">&#xe643;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import { mapState } from 'vuex';
  export default {
    name: 'Comment',
    props: {
      data: {
        type: Array,
        default () {
          return [];
        }
      }
    },
    computed: {
      // ...mapState(['commentsCopy'])
    },
    data () {
      return {
        showQuery: false,
        change: {}
      };
    },
    methods: {
      showList () {
        this.showQuery = !this.showQuery;
        // console.log(this.commentsCopy);
      },
      recommendComment (info) {
        // console.log(this.data);
        this.change = {};
        this.$set(this.change, info, info);
        // console.log(this.change);

        // this.data = [].concat(this.commentsCopy);

        // this.data = this.data.filter((item) => {
        //   return item.allComment.indexOf(info) >= 0;
        // });
        // Object.keys(this.Change).forEach((info) => {
        //   this.data = this.data.filter((item) => {
        //     return item.allComment.indexOf(info) >= 0;
        //   });
        // });
        this.$store.commit('filters', {
          data: this.data,
          info: info,
          change: this.change
        });
      },
      newComment (info) {
        this.change = {};
        this.$set(this.change, info, info);

        // Object.keys(this.Change).forEach((info) => {
        //   this.data = this.data.filter((item) => {
        //     return item.allComment.indexOf(info) >= 0;
        //   });
        // });
        this.$store.commit('filters', {
          data: this.data,
          info: info,
          change: this.change
        });
      }
    }
  };
</script>

<style lang="less" scoped>
.nav{
  height: 60px;
  line-height: 60px;
  border-top: 1px solid rgba(0,0,0,.1);
  border-bottom: 1px solid rgba(0,0,0,.1);

  .all-query{
    vertical-align: middle;
    position: relative;
    .down{
      display: inline-block;
      font-size: 20px;
      vertical-align: middle;
      font-weight: bold;
      transition: all .3s;

      &.transform{
        transform: rotate(180deg);
        /*color: red;*/
      }
    }
    .list{
      /*background-color: aqua;*/
      position: absolute;
      /*padding: 13px 15px;*/
      box-sizing: border-box;
      top: 60px;
      left: 0;
      border: 1px solid rgba(0,0,0,.15);
      box-shadow: 0 6px 12px rgba(0,0,0,.175);
      z-index: 100;
      background-color: #fff;

      .list-enter{
        opacity: 0;
        height: 0;
      }
      .list-enter-active{
        height: 100px;
        opacity: 1;
        transition: all .3s linear;
      }
      .list-leave{
        opacity: 1;
        height: 100px;
      }
      .list-leave-active{
        height: 0px;
        opacity: 0;
        transition: all .3s linear;
      }

      li{
        /*padding: 13px 15px;*/
        width: 248px;
        height: 49px;
        line-height: 49px;
        padding: 0 15px;
        box-sizing: border-box;
        overflow: hidden;
        text-overflow: ellipsis;
        border-bottom: 1px solid #ccc;

        &:last-child{
          border-bottom:none;
        }
        &:hover{
          background-color: #f6f6f6;
        }

        a{
          color: #222;
        }
      }
    }
  }
  .img-query{
    margin-left: 50px;
    vertical-align: middle;

    input{
      display: inline-block;
      height: 20px;
      width: 20px;
      border: 1px solid #000;
      vertical-align: middle;
    }
  }
  .icon{
    color: #eb0028;
    vertical-align: middle;
    .edit{
      font-size: 18px;
      vertical-align: middle;
    }
  }
}
.content{

  .list-item{
    padding: 60px 0;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(0,0,0,.1);

    &:last-child{
      border-bottom:none;
    }

    .user-img{
      width: 8%;

      a{
        display: inline-block;
        height: 60px;
        width: 60px;
        border-radius: 50%;
        /*background-color: red;*/

        img{
          height: 100%;
          width: 100%;
        }
      }
    }
    .info{
      width: 92%;
      font-size: 16px;
      position: relative;
      .name{
        font-size: 20px;
      }
      .date{
        color: rgba(51,51,51,.6);
        margin-bottom: 22px;
      }
      .text{
        font-size: 16px;
        color: #101920;
        margin-bottom: 22px;
      }
      .imgs{
        a{
          display: inline-block;
          height: 112px;
          width: 112px;
          margin-right: 15px;
          /*background-color: aqua;*/
          margin-bottom: 22px;

          img{
            height: 100%;
            width: 100%;
          }
        }
      }
      .goods-info{
        color: rgba(51,51,51,.6);
        margin-bottom: 22px;
      }
      .seller{
        padding: 30px;
        background-color: #f4f4f4;
        color: #eb0028;
        .texts{
          color: #828282;
        }
      }
      .xin{
        position: absolute;
        top: 11px;
        right: 0;

        .item{
          margin-left: 5px;
          font-size: 23px;
        }
      }
    }
  }
}
</style>
