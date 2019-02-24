<template>
  <div>
    <Header></Header>
    <Swiper :data="swiperData"></Swiper>
    <div>OnePlus 6T 热销配件</div>
    <div>OnePlus 6 热销配件</div>
    <div>一加生活周边</div>
    <div class="footer">底部</div>
  </div>
</template>

<script>
  import Header from '../components/Header';
  import Swiper from '../components/Swiper';
  export default {
    name: 'index',
    components: {
      Header, Swiper
    },
    data () {
      return {
        swiperData: []
      };
    },
    methods: {
      async getSwiperData () {
        const {data} = await this.axios.get('/api/advertise');
        this.swiperData = data;
      }
    },
    mounted () {
      this.getSwiperData();
    }
  };
</script>

<style lang="less" scoped>
.footer{
  height: 1000px;
}
</style>
