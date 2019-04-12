<template>
  <div>
    <awei-head/>
    <div class="cont-con">
      <div class="cont">
        <div class="cont-cen">
          <div class="content">
            <nuxt/>
          </div>
        </div>
        <div class="cont-left">
          <div class="content">
            <awei-user></awei-user>
          </div>
          <div class="right-content content">
            <awei-search></awei-search>
            <awei-nav v-if="$route.name === 'detail-code'"></awei-nav>
          </div>
        </div>
        <div class="cont-right">
          <div class="content">
            <awei-search></awei-search>
            <awei-nav v-if="$route.name === 'detail-code'"></awei-nav>
          </div>
        </div>
      </div>
    </div>
    <awei-footer/>

    <a class="to-top">
      <i class="iconfont a-blog-huidaodingbu"/>
    </a>
  </div>
</template>

<script>
  import Head from '~/components/Head.vue'
  import Footer from '~/components/Footer.vue'
  import Search from '~/components/Search.vue'
  import Nav from '~/components/Nav.vue'
  import User from '~/components/User.vue'

  export default {
    components: {
      'awei-head': Head,
      'awei-footer': Footer,
      'awei-search': Search,
      'awei-nav': Nav,
      'awei-user': User,
    },
    mounted() {
      console.log($('#__nuxt'));
      $('.to-top').toTop();
      console.log();
    }
  }

</script>

<style>
  html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    background-color: #f7f7f7;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }

  .button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
  }

  .button--green:hover {
    color: #fff;
    background-color: #3b8070;
  }

  .button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
  }

  .button--grey:hover {
    color: #fff;
    background-color: #35495e;
  }

  .to-top {
    cursor: pointer;
    position: fixed;
    display: block;
    width: 64px;
    height: 40px;
    line-height: 40px;
    border-radius: 4px;
    right: 15px;
    text-align: center;
    bottom: 30px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 10px, rgba(0, 0, 0, 0.1) 0px 0px 1px;
    background-color: #ffffff;
    transition: .4s ease width, .4s ease transform, .4s ease border-radius;
  }

  .but-top {
    width: 40px;
    border-radius: 20px;
    /*bottom: 167px;*/
  }

</style>

<style lang="less" scoped>
  .cont-con {

    .content {
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    .cont {
      flex: initial !important;
      margin: 0 auto;
      padding: 10px 0;
      min-height: calc(100vh - 296px);

      .cont-left {
        order: 1;
        padding: 10px 10px;

        .content {
          /*background-color: #ffffff;*/
          /*border-radius: 4px;*/
          /*box-shadow: 0 4px 10px rgba(0, 0, 0, .05), 0 0 1px rgba(0, 0, 0, .1);*/
          /*padding: 20px;*/
        }

        .right-content {
          display: block;
        }
      }

      .cont-cen {
        order: 2;
        padding: 10px 10px;

        .content {
          /*padding: 20px;*/
        }
      }

      .cont-right {
        order: 3;
        display: none;
        padding: 10px 10px;

        .content {
          /*background-color: #ffffff;*/
          /*border-radius: 4px;*/
          /*box-shadow: 0 4px 10px rgba(0, 0, 0, .05), 0 0 1px rgba(0, 0, 0, .1);*/
          /*padding: 20px;*/
        }
      }
    }
  }


  @media only screen and (min-width: 769px) {
    .cont {
      display: flex;
      width: 100%;
      margin: 0 auto !important;

      .cont-left {
        width: 33.33333%;
        padding: 10px 10px;

        .right-content {
          display: block;
        }
      }

      .cont-cen {
        width: 66.66667%;
        padding: 10px 10px;
      }

      .cont-right {
        display: none;
        padding: 10px 10px;
      }
    }
  }

  @media only screen and (min-width: 1088px) {
    .cont {
      display: flex;
      max-width: 960px;
      width: 960px;
      margin: 30px auto 0 !important;

      .cont-left {
        width: 33.33333%;
        padding: 20px 10px;

        .right-content {
          display: block;
        }
      }

      .cont-cen {
        width: 66.66667%;
        padding: 20px 10px;
      }

      .cont-right {
        display: none;
        padding: 20px 10px;
      }
    }
  }

  @media only screen and (min-width: 1280px) {
    .cont {
      display: flex;
      max-width: 1152px;
      width: 1152px;
      margin: 50px auto 0 !important;

      .cont-left {
        width: 25%;
        padding: 20px 10px;

        .right-content {
          display: none !important;
        }
      }

      .cont-cen {
        width: 50%;
        padding: 20px 10px;
      }

      .cont-right {
        width: 25%;
        padding: 20px 10px;
        display: block !important;
      }
    }
  }

  @media only screen and (min-width: 1472px) {
    .cont {
      display: flex;
      max-width: 1344px;
      width: 1344px;
      margin: 50px auto 0 !important;

      .cont-left {
        width: 25%;
        padding: 20px 10px;

        .right-content {
          display: none !important;
        }
      }

      .cont-cen {
        width: 50%;
        padding: 20px 10px;
      }

      .cont-right {
        width: 25%;
        padding: 20px 10px;
        display: block !important;
      }
    }
  }

</style>
