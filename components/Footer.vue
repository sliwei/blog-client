<template>
  <!--<div class="footer">-->
  <!--<div class="cont">-->
  <!--<div class="info">-->

  <!--<div class="title">-->
  <!--<span>Bstu.cn</span>-->
  <!--</div>-->

  <!--<div class="menu">-->
  <!--<nuxt-link to="/">首页</nuxt-link>-->
  <!--<nuxt-link to="/">博客</nuxt-link>-->
  <!--<nuxt-link to="/">联系</nuxt-link>-->
  <!--<nuxt-link to="/">关于</nuxt-link>-->
  <!--</div>-->

  <!--<div class="link">-->
  <!--<a href=""><i style="font-size: 20px" class="iconfont a-blog-linkedin"/></a>-->
  <!--<a target="_blank" href="https://github.com/sliwei"><i style="font-size: 20px" class="iconfont a-blog-github"/></a>-->
  <!--</div>-->

  <!--</div>-->

  <!--<div class="cen"></div>-->

  <!--<div class="but">-->

  <!--<div class="creation">-->
  <!--<span>Copyright © 2019 by </span>-->
  <!--<nuxt-link to="/">布什兔</nuxt-link>-->
  <!--<a target="_blank" href="http://www.miitbeian.gov.cn">渝ICP备15001052号-4</a>-->
  <!--<a href="javascript:;">公安网备：50010902000222</a>-->
  <!--</div>-->

  <!--<div class="love">-->
  <!--<i class="iconfont a-blog-love1"/>-->
  <!--</div>-->

  <!--<div class="policy">-->
  <!--<a href="">隐私政策</a>-->
  <!--<a href="">服务条款</a>-->
  <!--</div>-->

  <!--</div>-->

  <!--</div>-->
  <!--</div>-->

  <div class="footer-con">
    <div class="footer">

      <div class="info">
        <div class="logo">
          <span class="name">Bstu</span>
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
        </div>
        <div class="copyright">
          <p>© 2019 awei</p>
          <p>风格来源 <a target="_blank" href="https://blog.zhangruipeng.me/hexo-theme-icarus/">Icarus</a></p>
          <p><a target="_blank" href="http://www.miitbeian.gov.cn">渝ICP备15001052号-4</a></p>
          <p><a href="javascript:;">公安网备：50010902000222</a></p>
        </div>
      </div>

      <div class="oper">
        <a href="javascript:;">
          <i class="in iconfont a-blog-linkedin"/>
        </a>
        <a href="javascript:;">
          <i class="love iconfont a-blog-love1"/>
        </a>
      </div>

    </div>
  </div>

</template>
<script>
  export default {}
</script>
<style lang="less" scoped>
  * {
    transition: all .3s;
  }

  .footer-con {
    background-color: #ffffff;

    .footer {
      padding: 50px 0 80px;

      .info {
        padding: 0 20px;

        .logo {
          /*padding: 0 0 20px 0;*/
          font-size: 14px;
          font-weight: bold;

          .name {
            display: inline-block;
            vertical-align: middle;
            margin-bottom: 10px;
          }

          .nav {
            display: inline-block;
            vertical-align: middle;
            margin-bottom: 10px;
            ul {
              margin: 0;
              padding: 0;

              li {
                list-style: none;
                float: left;
                font-size: 14px;
                font-weight: 400;
                cursor: pointer;
                align-items: center;

                a {
                  color: #4a4a4a;
                  text-decoration: none;
                  padding: 0px 10px;
                  display: block;

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

        }

        .copyright {
          font-size: 12px;
          p {
            display: inline-block;
            margin-bottom: 10px;
          }

          a {
            color: #4a4a4a;
            text-decoration: none;

            &:hover {
              color: #35CC62;
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
            color: #35CC62;
          }

          i {
            font-size: 16px;
            font-weight: bold;
          }

          .in {
            color: #0077b5 !important;
          }

          .love {
            color: #e60012 !important;
          }

        }
      }
    }
  }

  @media screen and (min-width: 1088px) {
    .footer-con {
      .footer {
        width: 960px;
        margin: 0 auto;
        display: flex;

        .info {
          flex: 1;

          .logo {

          }

          .copyright {
            a {

            }
          }
        }

        .oper {

        }
      }
    }
  }

  @media screen and (min-width: 1280px) {
    .footer-con {
      .footer {
        width: 1152px;
      }
    }
  }

  @media screen and (min-width: 1472px) {
    .footer-con {
      .footer {
        width: 1344px;
      }
    }
  }

  @media screen and (max-width: 1087px) {
    .footer-con {
      .footer {
        width: 100%;

        .info {
          text-align: center;

          .logo {
            text-align: center;

          }

          .copyright {
            text-align: center;

            a {

            }
          }
        }

        .oper {
          display: flex;
          flex-grow: 1;
          flex-shrink: 0;
          overflow-x: auto;
          justify-content: center;
          text-align: center;

        }
      }
    }
  }

  /** {*/
  /*transition: all .3s;*/
  /*}*/

  /*.footer {*/
  /*width: 100%;*/
  /*!*min-width: 1240px;*!*/
  /*background: rgba(51, 51, 51, 1);*/
  /*.cont {*/
  /*!*width: 1240px;*!*/
  /*margin: 0 auto;*/
  /*padding-top: 60px;*/
  /*.info {*/
  /*width: 100%;*/
  /*height: 40px;*/
  /*line-height: 40px;*/
  /*display: flex;*/
  /*.title {*/
  /*width: 200px;*/
  /*span {*/
  /*font-size: 28px;*/
  /*font-family: Montserrat-Medium;*/
  /*font-weight: 500;*/
  /*color: rgba(255, 255, 255, 1);*/
  /*}*/
  /*}*/
  /*.menu {*/
  /*text-align: center;*/
  /*flex: 1;*/
  /*a {*/
  /*display: inline-block;*/
  /*font-size: 14px;*/
  /*font-family: Montserrat-Medium;*/
  /*font-weight: 500;*/
  /*color: rgba(255, 255, 255, 1);*/
  /*line-height: 23px;*/
  /*text-decoration: none;*/
  /*margin: 0 8px;*/
  /*&:hover {*/
  /*color: #35CC62;*/
  /*text-decoration: underline;*/
  /*}*/
  /*}*/
  /*}*/
  /*.link {*/
  /*width: 200px;*/
  /*text-align: right;*/
  /*a {*/
  /*margin-left: 10px;*/
  /*text-decoration: none;*/
  /*i {*/
  /*color: #ffffff;*/
  /*font-size: 18px;*/
  /*&:hover {*/
  /*color: #35CC62;*/
  /*}*/
  /*}*/
  /*}*/
  /*}*/
  /*}*/
  /*.cen {*/
  /*margin-top: 40px;*/
  /*!*width: 1240px;*!*/
  /*height: 1px;*/
  /*background: rgba(255, 255, 255, 1);*/
  /*opacity: 0.1;*/
  /*}*/
  /*.but {*/
  /*height: 80px;*/
  /*line-height: 80px;*/
  /*display: flex;*/
  /*.creation {*/
  /*!*width: 700px;*!*/
  /*span {*/
  /*font-size: 14px;*/
  /*font-family: Montserrat-Regular;*/
  /*font-weight: 400;*/
  /*color: rgba(255, 255, 255, 1);*/
  /*line-height: 23px;*/
  /*opacity: 0.6;*/
  /*}*/
  /*a {*/
  /*color: rgba(255, 255, 255, .5);*/
  /*font-size: 14px;*/
  /*text-decoration: none;*/
  /*&:hover {*/
  /*color: rgba(255, 255, 255, 1);*/
  /*}*/
  /*}*/
  /*}*/
  /*.love {*/
  /*flex: 1;*/
  /*text-align: center;*/
  /*i {*/
  /*color: #e60012;*/
  /*font-size: 36px;*/
  /*animation: shadow .5s linear infinite;*/
  /*}*/
  /*}*/
  /*.policy {*/
  /*width: 200px;*/
  /*text-align: right;*/
  /*a {*/
  /*display: inline-block;*/
  /*font-size: 14px;*/
  /*font-family: Montserrat-Medium;*/
  /*font-weight: 500;*/
  /*color: rgba(255, 255, 255, 1);*/
  /*line-height: 23px;*/
  /*text-decoration: none;*/
  /*margin: 0 8px;*/
  /*&:hover {*/
  /*color: #35CC62;*/
  /*text-decoration: underline;*/
  /*}*/
  /*}*/
  /*}*/
  /*}*/
  /*}*/
  /*}*/

  /*@keyframes shadow {*/
  /*0%, 100% {font-size: 15px;}*/
  /*50% {font-size: 20px;}*/
  /*}*/
</style>
