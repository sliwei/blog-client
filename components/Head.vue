<template>
  <!--<div class="head">-->
  <!--<div class="bg">-->
  <!--<div class="mask"></div>-->
  <!--</div>-->
  <!--<div class="cont">-->
  <!--<div class="bar">-->

  <!--<div class="logo">-->
  <!--<nuxt-link to="/">-->
  <!--<img src="~static/img/logo.png" alt="">-->
  <!--<h1 style="display: none">布什兔</h1>-->
  <!--</nuxt-link>-->
  <!--</div>-->

  <!--<div class="menu">- -->
  <!--<a target="_blank" href="http://manage.bstu.cn">写博客</a>-->
  <!--<a target="_blank" href="http://chat.bstu.cn">聊天室</a>-->
  <!--<a target="_blank" href="http://music.bstu.cn">吉姆音乐厅</a>-->
  <!--<a target="_blank" href="https://yun.bstu.cn">在线云盘</a>-->
  <!--<nuxt-link to="/">更多想法~</nuxt-link>-->
  <!--</div>-->
  <!--</div>-->

  <!--<div class="motto">-->
  <!--<h2>先天之智，后天修为</h2>-->
  <!--&lt;!&ndash;<h2>没有与生俱来的智慧，就要积极进取的学习</h2>&ndash;&gt;-->
  <!--</div>-->

  <!--<div class="nav">-->
  <!--<nuxt-link class="active" to="/">首页</nuxt-link>&ensp;/&ensp;-->
  <!--<nuxt-link to="/search?keyword=">时间轴</nuxt-link>&ensp;/&ensp;-->
  <!--<nuxt-link to="/log">日志</nuxt-link>-->
  <!--</div>-->

  <!--</div>-->
  <!--</div>-->

  <div class="head-con">
    <div class="head">
      <div class="logo"><a href="/">Bstu</a></div>
      <div class="menu">
        <div class="nav">
          <ul>
            <li>
              <a target="_blank" href="http://manage.bstu.cn">写博客</a>
            </li>
            <li>
              <a target="_blank" href="http://chat.bstu.cn">聊天室</a>
            </li>
            <li>
              <a target="_blank" href="http://music.bstu.cn">吉姆音乐厅</a>
            </li>
            <li>
              <a target="_blank" href="https://yun.bstu.cn">在线云盘</a>
            </li>
          </ul>
        </div>

        <div class="oper">
          <a target="_blank" href="https://github.com/sliwei"><i style="font-size: 20px"
                                                                 class="iconfont a-blog-github-fill"/></a>
        </div>

      </div>
    </div>
  </div>


</template>
<script>
  export default {}
</script>
<style lang="less" scoped>


  .head-con {
    background-color: #ffffff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, .05);
  }

  .head {
    .logo {
      align-items: center;
      font-size: 14px;
      font-weight: bold;

      a {
        color: #4a4a4a;
        text-decoration: none;

        &:hover {
          color: #35CC62;
        }
      }
    }

    .menu {
      .nav {
        ul {
          margin: 0;
          padding: 0;

          li {
            list-style: none;
            float: left;
            font-size: 14px;
            font-weight: 400;
            padding: 20px 10px;
            cursor: pointer;
            align-items: center;

            a {
              color: #4a4a4a;
              text-decoration: none;

              &:hover {
                color: #35CC62;
              }
            }

            &:hover {
              background-color: #fafafa;
            }

          }
        }
      }

      .oper {
        align-items: stretch;
        display: flex;
        padding: 0;
        flex-shrink: 0;

        a {
          text-decoration: none;
          align-items: center;
          display: flex;
          padding: 20px 12px;
          color: #4a4a4a;

          &:hover {
            background-color: #fafafa;
            color: #35CC62;
          }

          i {
            font-size: 16px;
            font-weight: bold;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 580px) {
    .head {
      .logo {
      }

      .menu {
        display: initial !important;

        &:after {
          content: '';
          display: block;
          clear: both;
        }

        .nav {
          float: left;
          width: 100%;
          display: flex;
          justify-content: center !important;
        }

        .oper {
          float: left;
          width: 100%;
          display: flex;
          justify-content: center !important;
        }
      }
    }
  }

  @media screen and (min-width: 1088px) {
    .head {
      display: flex;
      width: 960px;
      margin: 0 auto;

      .logo {
        padding: 20px 20px;
      }

      .menu {
        flex: 1;
        display: flex;
        flex-grow: 1;

        .nav {
          flex: 1;
          justify-content: flex-start;
        }

        .oper {
          justify-content: flex-end;
        }
      }
    }
  }

  @media screen and (min-width: 1280px) {
    .head {
      width: 1152px;
    }
  }

  @media screen and (min-width: 1472px) {
    .head {
      width: 1344px;
    }
  }

  @media screen and (max-width: 1087px) {
    .head {
      width: 100%;

      .logo {
        padding: 20px 20px;
        text-align: center;
      }

      .menu {
        flex: 1;
        display: flex;
        flex-grow: 1;
        flex-shrink: 0;
        overflow-x: auto;
        justify-content: center;

        .nav {
          justify-content: flex-start;
        }

        .oper {
          justify-content: flex-end;
        }
      }
    }
  }


  /** {*/
  /*transition: all .3s;*/
  /*}*/

  /*.head {*/
  /*!*min-width: 1240px;*!*/
  /*width: 100%;*/
  /*height: 400px;*/
  /*.bg {*/
  /*width: 100%;*/
  /*height: 400px;*/
  /*!*background: url('~static/img/bg.jpg') no-repeat center;*!*/
  /*!*background-size: 1920px auto;*!*/
  /*.mask {*/
  /*width: 100%;*/
  /*height: 100%;*/
  /*background-color: rgba(0, 0, 0, .4);*/
  /*}*/
  /*}*/
  /*.cont {*/
  /*!*width: 1240px;*!*/
  /*height: 400px;*/
  /*margin: 0 auto;*/
  /*position: absolute;*/
  /*top: 0;*/
  /*left: calc(50% - 620px);*/
  /*.bar {*/
  /*display: flex;*/
  /*.logo {*/
  /*flex: 1;*/
  /*img {*/
  /*width: 40px;*/
  /*margin-top: 25px;*/
  /*}*/
  /*}*/
  /*.menu {*/
  /*margin-top: 35px;*/
  /*a {*/
  /*font-size: 14px;*/
  /*font-family: Montserrat-Medium;*/
  /*font-weight: 500;*/
  /*color: rgba(255, 255, 255, .5);*/
  /*margin: 0 10px;*/
  /*text-decoration: none;*/
  /*&:hover, &.active {*/
  /*position: relative;*/
  /*color: rgba(255, 255, 255, 1);*/
  /*&:after {*/
  /*position: absolute;*/
  /*left: calc(50% - 10px);*/
  /*bottom: -10px;*/
  /*content: '';*/
  /*display: block;*/
  /*width: 20px;*/
  /*height: 1px;*/
  /*background-color: #ffffff;*/
  /*}*/
  /*}*/
  /*}*/
  /*}*/
  /*}*/
  /*.motto {*/
  /*margin-top: 100px;*/
  /*text-align: center;*/
  /*h2 {*/
  /*margin: 0;*/
  /*font-size: 36px;*/
  /*font-family: Montserrat-Regular;*/
  /*font-weight: 600;*/
  /*color: rgba(255, 255, 255, 1);*/
  /*}*/
  /*}*/
  /*.nav {*/
  /*margin-top: 20px;*/
  /*text-align: center;*/
  /*color: rgba(255, 255, 255, .5);*/

  /*a {*/
  /*display: inline-block;*/
  /*color: rgba(255, 255, 255, .5);*/
  /*text-decoration: none;*/
  /*font-size: 14px;*/
  /*&:hover, &.active {*/
  /*position: relative;*/
  /*color: rgba(255, 255, 255, 1);*/
  /*}*/
  /*}*/
  /*}*/
  /*}*/
  /*}*/
</style>
