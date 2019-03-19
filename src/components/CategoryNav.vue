<template>
  <div class="header-bottom" :class="{'hidden-bottom': !showHeader}">
    <ul class="nav-list">
      <li v-for="(item,index) in categoryNavData" :key="index" class="list-item" :class="{'hidden-list-item': !showHeader}">
        <a href="javascript:;" @click="goToCategory(item.id, item)">
          <transition name="img">
            <div class="img" :class="{'hidden-img': !showHeader}" v-show="showHeader"></div>
          </transition>
          <p :class="{'hidden-p': !showHeader}">{{item.name}}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'CategoryNav',
    data () {
      return {
        showHeader: true,
        categoryNavData: []
      };
    },
    methods: {
      handleScroll () {
        this.showHeader = false;
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop === 0) {
          this.showHeader = true;
        }
        // console.log(scrollTop);
      },
      async getCategoryNavData () {
        const { data } = await this.axios.get('/api/category');
        this.categoryNavData = data;
        // console.log(data);
      },
      goToCategory (id, data) {
        // console.log(id);
        this.$router.push({
          path: '/Category/' + id
        });
        // this.$store.commit('addData', data);
      }
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll);
      this.getCategoryNavData();
    }
  };
</script>

<style lang="less" scoped>
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
    .img-enter-active{
      transform: scale(1,1);
      opacity: 1;
      transition: all .2s linear;
    }
    .img-enter{
      opacity: 0;
      transform: scale(0,0);
    }

  }
  .hidden-bottom{
    position: fixed;
    z-index: 99;
    top: 0;
    width: 100%;
    padding: 0;
    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
    transition: all .6s linear;
  }
  .hidden-list-item{
    height: 53px !important;
    line-height: 53px;
    /*transition: all .1s linear;*/
  }
  .hidden-img{
    /*height: 0;*/
    /*width: 0;*/
    display: none;
  }
  .hidden-p{
    margin-top: 0 !important;
  }
</style>
