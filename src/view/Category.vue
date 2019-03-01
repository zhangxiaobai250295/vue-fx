<template>
  <div>
    <Header></Header>
    <CategoryNav v-if="id != 6"></CategoryNav>
    <div v-if="id != 6"  class="container">
      <img :src="infoData.bannerUrl" alt="" class="banner">
      <div class="wrapper">
        <GoodsList :data="infoData.children"></GoodsList>
      </div>
    </div>
    <div v-if="id == 6" class="life">
      <Life :data="infoData" :materialsCopy="materials"></Life>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import Header from '../components/Header';
  import CategoryNav from '../components/CategoryNav';
  import Footer from '../components/Footer';
  import GoodsList from '../components/GoodsList';
  import Life from '../components/Life';
  export default {
    name: 'Category',
    props: ['id'],
    components: {
      Header, CategoryNav, Footer, GoodsList, Life
    },
    computed: {
      ...mapState(['categoryList'])
    },
    data () {
      return {
        infoData: {},
        indexId: null,
        queryListData: [],
        activeChange: {},
        activeIndex: 0,
        infoDataCopy: [],
        materials: []
      };
    },
    methods: {
      async getCategoryData (id) {
        // console.log(id);
        const { data } = await this.axios.get(`/api/category/${id}`);
        this.infoData = data;
        this.materials = [].concat(data.materials);
        // console.log('====', this.materials);
      },
      async getQueryListData () {
        const { data } = await this.axios.get('/api/queryList');
        this.queryListData = data;
        // console.log(data);
      }
    },
    mounted () {
      this.getCategoryData(this.id);
      this.getQueryListData();
    },
    watch: {
      $route () {
        if (this.indexId !== this.id) {
          this.indexId = this.id;
          this.getCategoryData(this.id);
        }
      }
    }
  };
</script>

<style lang="less" scoped>
.container{
  background-color: #f1f1f1;
  padding: 20px 0 50px 0;
  box-sizing: border-box;
  /*height: 500px;*/

  .banner{
    height: 269px;
    margin-bottom: 60px;
  }
  img{
    height: 100%;
    width: 100%;
  }
}

.life{
}
</style>
