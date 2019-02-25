<template>
  <div class="footer">
    <div class="wrapper">
      <div class="footer-top clearfix">
        <ul class="footer-service fl">
          <li class="title">
            <a href="">一加产品</a>
          </li>
          <li>
            <a href="">OnePlus 6T</a>
          </li>
          <li>
            <a href="">OnePlus 6T</a>
          </li>
          <li>
            <a href="">OnePlus 6T</a>
          </li>
          <li>
            <a href="">OnePlus 6T</a>
          </li>
          <li>
            <a href="">OnePlus 6T</a>
          </li>
        </ul>
        <ul class="footer-service fl">
          <li class="title">
            <a href="">一加产品</a>
          </li>
          <li>
            <a href="">OnePlus 6T</a>
          </li>
          <li>
            <a href="">OnePlus 6T</a>
          </li>
          <li>
            <a href="">OnePlus 6T</a>
          </li>
          <li>
            <a href="">OnePlus 6T</a>
          </li>
          <li>
            <a href="">OnePlus 6T</a>
          </li>
        </ul>
        <ul class="footer-service fl">
          <li class="title">
            <a href="">一加产品</a>
          </li>
          <li>
            <a href="">OnePlus 6T</a>
          </li>
          <li>
            <a href="">OnePlus 6T</a>
          </li>
          <li>
            <a href="">OnePlus 6T</a>
          </li>
          <li>
            <a href="">OnePlus 6T</a>
          </li>
          <li>
            <a href="">OnePlus 6T</a>
          </li>
        </ul>
        <ul class="footer-service fl">
          <li class="title">
            <a href="">一加产品</a>
          </li>
          <li>
            <a href="">OnePlus 6T</a>
          </li>
          <li>
            <a href="">OnePlus 6T</a>
          </li>
          <li>
            <a href="">OnePlus 6T</a>
          </li>
          <li>
            <a href="">OnePlus 6T</a>
          </li>
          <li>
            <a href="">OnePlus 6T</a>
          </li>
        </ul>
        <div class="online-service fr">
          <p class="phone"><span class="iconfont">&#xe62e;</span><span>400-888-1111</span></p>
          <p class="btn">在线客服</p>
          <p class="time">周一至周日 9:00 - 22:00</p>
          <p class="icon">
            <span class="iconfont">&#xe637;</span>
            <span class="iconfont">&#xe614;</span>
          </p>
        </div>
      </div>
    </div>
    <div class="footer-info">
      <div class="wrapper">
        <div class="info-top clearfix">
          <div class="fl left">
            <span class="iconfont">&#xe616;</span>
            <span>中国( 简体中文/CNY )</span>
          </div>
          <div class="fr right">
            <ul>
              <li class="item">
                <a href="javascript:;">隐私政策</a>
              </li>
              <li>
                <a href="javascript:;">隐私政策</a>
              </li>
              <li>
                <a href="javascript:;">隐私政策</a>
              </li>
              <li>
                <a href="javascript:;">隐私政策</a>
              </li>
              <li>
                <a href="javascript:;">隐私政策</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="info-bottom clearfix">
          <div class="left fl">
            <p>© 2013-2018 OnePlus. All Rights Reserved. (粤ICP备13080605号-4)</p>
            <p>
              <img src="../assets/images/badge.png" alt="" class="img">
              <span>粤公网安备 44030402001407号</span>
            </p>
          </div>
          <div class="right fr">
            <img src="../assets/images/zhizhao.png" alt="" class="img">
            <img src="../assets/images/cnnic.png" alt="" class="img">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Footer'
  };
</script>

<style lang="less" scoped>
.footer{
  background-color: #fcfcfc;

  .footer-top{
    border-top: 1px solid #ccc;
    padding: 20px 0;
    box-sizing: border-box;

    .footer-service{
      width: 240px;
      padding: 0 15px;
      box-sizing: border-box;
      .title{
        font-size: 18px;
        a{
          color: #101920;
        }
      }
      li{
        font-size: 14px;
        line-height: 40px;
        a{
          color: #828282;
        }
      }
    }

    .online-service{
      text-align: center;
      width: 240px;

      .phone{
        font-size: 20px;
        color: #101920;
      }
      .btn{
        margin-top: 15px;
        margin-bottom: 15px;
        height: 50px;
        line-height: 50px;
        border: 1px solid #000;
        font-size: 17px;
      }
      .time{
        color: #828282;
        font-size: 16px;
        margin-bottom: 15px;
      }
      .icon{
        span{
          font-size: 24px;
          &:last-child{
            margin-left: 15px;
          }
        }
      }
    }
  }
  .footer-info{
    background-color: #f1f1f1;
    /*line-height: 120px;*/

    .info-top{
      height: 120px;
      padding: 30px 20px 20px;
      box-sizing: border-box;
      border-bottom: 1px solid #ccc;

      .left{
        line-height: 50px;
        span{
          &:first-child{
            color: red;
          }
        }
      }
      .right{
        line-height: 50px;
        li{
          display: inline-block;
          padding: 0 20px;
          box-sizing: border-box;
          border-right: 1px solid rgba(0,0,0,.1);
          line-height: 12px;

          &:last-child{
            border-right: none;
          }
          a{
            color: #10181f;
          }
        }
      }
    }
    .info-bottom{
      height: 110px;
      padding: 20px 0 30px 0;
      box-sizing: border-box;
      .left{
        p{
          margin-bottom: 10px;

          &:last-child{
            font-size: 18px;
          }
        }
        .img{
          height: 20px;
          width: 20px;
          vertical-align: middle;
        }
        img{
          height: 100%;
          width: 100%;
        }
      }
      .right{
        .img{
          width: 83px;
          height: 30px;

          &:last-child{
            margin-left: 20px;
          }
        }
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
