<template>
  <div>
    <div class="search clearfix">
      <span class="iconfont fl left">&#xe617;</span>
      <input type="text " class="content fl" placeholder="搜索商品名称">
      <span class="iconfont fr right" @click="$emit('close')">&#xe609;</span>
    </div>
    <ul class="hotsale">
      <li><a href="">一加银耳2T</a></li>
      <li><a href="">一加手机6T 3D钢化玻璃保护膜（黑色）</a></li>
      <li><a href="">一加手机6T 芳纶纤维全包保护壳</a></li>
      <li><a href="">OnePlus 6T 硅胶保护壳（红色）</a></li>
    </ul>
  </div>

</template>

<script>
  export default {
    name: 'Search'
  };
</script>

<style lang="less" scoped>
.search{
  padding: 0 10px;
  box-sizing: border-box;
  position: absolute;
  top: 1.2%;
  left: 24%;
  width: 653px;
  height: 50px;
  line-height: 50px;
  background-color: #fff;

  .left,.right{
    font-size: 30px;
    cursor: pointer;
    vertical-align: middle;
  }
  .content{
    width: 500px;
    height: 45px;
    line-height: 45px;
    border: none;
    margin-left: 15px;
    margin-top: 2px;
    text-indent: 15px;
    vertical-align: middle;
  }
}
.hotsale{
  position: absolute;
  z-index: 5;
  top: 9%;
  left: 25%;
  width: 653px;
  background-color: #fff;
  padding: 15px 0px;
  line-height: 50px;

  li{
    cursor: pointer;
    text-indent: 60px;
    a{
      color: #000;
    }
    &:hover{
      background-color: #f1f1f1;
    }
  }
}
</style>
