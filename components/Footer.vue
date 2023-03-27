<template>
  <div class="footer-con">
    <div class="footer">
      <div class="info">
        <div class="logo">
          <span class="logo_icon"><i class="iconfont a-blog-logo"></i></span>
          <span class="name">Bstu</span>
          <div class="nav">
            <ul>
              <li>
                <a target="_blank" href="http://manage.bstu.cn">
                  <i class="iconfont a-blog-edit-square"></i>
                  {{ $t('components.footer.new-blog') }}</a
                >
              </li>
              <li>
                <a target="_blank" href="http://chat.bstu.cn">
                  <i class="iconfont a-blog-comment"></i>
                  {{ $t('components.footer.chat-room') }}</a
                >
              </li>
              <li>
                <a target="_blank" href="http://music.bstu.cn">
                  <i class="iconfont a-blog-app"></i>
                  {{ $t('components.footer.jim-nmusic') }}</a
                >
              </li>
              <li>
                <a target="_blank" href="https://yun.bstu.cn">
                  <i class="iconfont a-blog-cloud-server"></i>
                  {{ $t('components.footer.cloud-disk') }}</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="copyright">
          <p>© Bstu 2019 - 2023</p>
          |
          <p>
            {{ $t('components.footer.style') }}
            <a
              target="_blank"
              href="https://blog.zhangruipeng.me/hexo-theme-icarus/"
              >Icarus</a
            >
          </p>
          |
          <p>
            <a target="_blank" href="http://www.beian.miit.gov.cn"
              >渝ICP备15001052号-4</a
            >
          </p>
          |
          <p>
            <a href="javascript:;">
              <img
                style="vertical-align: top"
                height="14"
                src="~static/img/wb.png"
                alt=""
              />
              <span style="vertical-align: top">公安网备：50010902000222</span>
            </a>
          </p>
        </div>
      </div>

      <div class="oper">
        <a href="javascript:;">
          <i class="iconfont a-blog-linkedin" />
        </a>
        <a href="javascript:;">
          <i class="love iconfont a-blog-love1" />
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
  transition: all 0.3s;
}

.footer-con {
  background-color: var(--black_color);
  // box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.05);
  box-shadow: var(--box_shadow);

  .footer {
    padding: 50px 0 80px;

    .info {
      padding: 0 20px;

      .logo {
        /*padding: 0 0 20px 0;*/
        font-size: 14px;

        .logo_icon {
          display: inline-block;
          vertical-align: middle;
          margin-bottom: 10px;
        }

        .name {
          display: inline-block;
          vertical-align: middle;
          margin-bottom: 10px;
          font-weight: bold;
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
                color: var(--color);
                text-decoration: none;
                padding: 0px 10px;
                display: block;

                &:hover {
                  color: var(--hover_color);
                }
              }

              &:hover {
                /*background-color: #fafafa;*/
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
          color: var(--color);
          text-decoration: none;

          &:hover {
            color: var(--hover_color);
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
        color: var(--color);

        &:hover {
          color: var(--hover_color);
        }

        i {
          font-size: 16px;
          font-weight: bold;
        }

        .in {
          color: var(--color);
        }

        .love {
          color: #e91e63 !important;
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
        padding: 0;

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
/*color: var(--hover_color);*/
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
/*color: var(--hover_color);*/
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
/*color: var(--hover_color);*/
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
