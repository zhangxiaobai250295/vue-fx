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
            <p class="dsc">7天无理由退货</p>
          </a>
        </li>
        <li class="service-item fl">
          <a href="">
            <span class="bag"></span>
            <p class="dsc">7天无理由退货</p>
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

    .service-item{
      padding: 35px 0;
      box-sizing: border-box;
      width: 33.33333%;
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
