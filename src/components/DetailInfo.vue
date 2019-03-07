<template>
  <div class="detailInfo">
    <div class="desc-item" v-for="(item,index) in data.titles" :key="index">
      <div class="info">
        <h3 class="name">{{item.title}}</h3>
        <p class="text">
          {{item.desc}}
        </p>
      </div>
      <div class="img">
        <img :src="item.imgUrl" alt="">
      </div>
    </div>
    <div class="goods-info">
      <table>
        <tr v-for="(item,index) in data.sizes" :key="index">
          <td>{{item.title}}</td>
          <td>{{item.desc}}</td>
        </tr>
      </table>
    </div>
    <div class="service">
      <div class="service-item">
        <dl class="clearfix" v-for="(item,index) in data.service" :key="index">
          <dt class="fl">{{item.title}} <br><span v-if="item.info">(签收时请注意以下信息 )</span></dt>
          <dd class="fl">
            <p v-for="(infos,index) in item.desc" :key="index">{{infos}}</p>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailInfo',
    props: {
      data: {
        type: Object,
        default () {
          return {};
        }
      }
    }
  };
</script>

<style lang="less" scoped>
  .detailInfo{
    border-top: 1px solid #ccc;
    .desc-item{

      .info{
        width: 960px;
        text-align: center;
        padding: 120px 0;
        box-sizing: border-box;
        margin: 0 auto;

        .name{
          font-size: 32px;
          line-height: 38px;
          margin-bottom: 30px;
          color: #000000;
        }
        .text{
          font-size: 18px;
          line-height: 27px;
          color: #666666;
        }
      }
      .img{
        height: 659px;
        background-color: deeppink;

        img{
          width: 100%;
          height: 100%;
        }
      }
    }
    .goods-info{
      height: 362px;
      padding: 90px 0 40px;
      box-sizing: border-box;
      /*background-color: aqua;*/

      table{
        width: 60.41667%;
        margin: 0 auto 50px;
        color: #666;
        font-size: 14px;
        text-align: left;

        tr{
          td{
            text-indent: 10px;
            display: inline-block;
            line-height: 63px;
            border-bottom: 1px solid #ccc;
            overflow: hidden;
          }
          td:first-child{
            width: 220px;
            color: #000;
            /*border-bottom: 1px solid #ccc;*/
          }
          td:last-child{
            width: 629px;
            color: #999;
            margin-left: 60px;
          }
        }
      }
    }
    .service{
      font-size: 14px;
      color: #666;
      background: #efefef;
      padding: 5.20833% 0 3.64583%;

      .service-item{
        width: 60.41667%;
        margin: 0 auto;
        line-height: 1.8;
        text-align: left;

        dl{
          padding: 30px 0;
          dt{
            color: #000;
            width: 183px;
            margin-right: 40px;
            /*border-bottom: 1px solid #ccc;*/
          }
          dd{
            width: 694px;
            overflow: hidden;
            color: #999;
            /*border-bottom: 1px solid #ccc;*/

            p{
              padding-left: 15px;
              margin-bottom: 10px;

              &:before{
                display: inline-block;
                content: '';
                width: 5px;
                height: 5px;
                border-radius: 50%;
                background-color: #ccc;
                vertical-align: middle;
                margin-right: 15px;
              }
            }
          }
        }
      }
    }
  }

</style>
