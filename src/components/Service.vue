<template>
  <div>
    <div class="service">
      <ul class="wrapper clearfix">
        <li class="service-item fl">
          <a href="">
            <span class="bag"></span>
            <p class="dsc">7天无理由退货</p>
          </a>
        </li>
        <li class="service-item fl">
          <a href="">
            <span class="bag"></span>
            <p class="dsc">15天退货保障</p>
          </a>
        </li>
        <li class="service-item fl">
          <a href="">
            <span class="bag"></span>
            <p class="dsc">30天换货保障</p>
          </a>
        </li>
        <li class="service-item fl">
          <a href="">
            <span class="bag"></span>
            <p class="dsc">99元全场包邮</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Service'
  };
</script>

<style lang="less" scoped>
  .service{
    background-color: #fff;
    .service-item:nth-of-type(1) .bag{
      background-position: 0 -400px;
    }
    .service-item:nth-of-type(2) .bag{
      background-position: 0 0px;
    }
    .service-item:nth-of-type(3) .bag{
      background-position: 0 -240px;
    }
    .service-item:nth-of-type(4) .bag{
      background-position: 0 -560px;
    }
    .service-item{
      padding: 35px 0;
      box-sizing: border-box;
      width: 25%;
      height: 195px;
      /*background-color: aqua;*/
      text-align: center;

      .bag{
        display: inline-block;
        width: 80px;
        height: 80px;
        /*background-color: deeppink;*/
        background-image: url("../assets/images/service.png");
        background-repeat: no-repeat;
      }
      .dsc{
        margin-top: 30px;
        font-size: 16px;
        color: #10181f;
      }
    }
  }
</style>
