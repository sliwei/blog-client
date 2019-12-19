<template>
  <div>
    <transition name="slideInDown">
      <awei-head v-show="sta"/>
    </transition>

    <awei-setting></awei-setting>

    <transition name="bounce">
      <div class="cont-con" v-show="sta">
        <div class="cont">
          <div :class="`cont-cen ${contMax && isDetailRoute ? 'cont-cen-max' : ''}`">
            <div class="content">
              <nuxt/>
            </div>
          </div>
          <div class="cont-left">
            <div class="content">
              <transition name="bounce">
                <awei-user v-show="sta"></awei-user>
              </transition>
              <transition name="bounce">
                <awei-links v-show="sta"></awei-links>
              </transition>
<!--              <transition name="bounce">-->
<!--                <awei-categories v-show="sta"></awei-categories>-->
<!--              </transition>-->
              <transition name="bounce">
                <awei-tag-cloud v-show="sta"></awei-tag-cloud>
              </transition>
            </div>
            <!--当窄屏模式现实-->
            <div class="right-content content">
              <transition name="bounce">
                <awei-search v-if="sta && searchSta"></awei-search>
              </transition>
              <transition name="bounce">
                <awei-recent v-show="sta"></awei-recent>
              </transition>
<!--              <transition name="bounce">-->
<!--                <awei-archives v-show="sta"></awei-archives>-->
<!--              </transition>-->
<!--              <transition name="bounce">-->
<!--                <awei-tags v-show="sta"></awei-tags>-->
<!--              </transition>-->
              <transition name="bounce">
                <awei-nav v-if="sta && navSta && menu.tocHtml"></awei-nav>
              </transition>
            </div>
          </div>
          <div :class="`cont-right ${contMax && isDetailRoute ? 'cont-right-min' : ''}`">
            <div class="content">
              <transition name="bounce">
                <awei-search v-if="sta && searchSta"></awei-search>
              </transition>
              <transition name="bounce">
                <awei-recent v-show="sta"></awei-recent>
              </transition>
<!--              <transition name="bounce">-->
<!--                <awei-archives v-show="sta"></awei-archives>-->
<!--              </transition>-->
<!--              <transition name="bounce">-->
<!--                <awei-tags v-show="sta"></awei-tags>-->
<!--              </transition>-->
              <transition name="bounce">
                <awei-nav v-if="sta && navSta && menu.tocHtml"></awei-nav>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="slideInUp">
      <awei-footer v-show="sta"/>
    </transition>
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
  import Links from '~/components/Links.vue'
  import Categories from '~/components/Categories.vue'
  import TagCloud from '~/components/TagCloud.vue'

  import Recent from '~/components/Recent.vue'
  import Archives from '~/components/Archives.vue'
  import Tags from '~/components/Tags.vue'
  import Setting from '~/components/Setting.vue'

  export default {
    // transition: 'bounce',
    components: {
      'awei-head': Head,
      'awei-footer': Footer,
      'awei-search': Search,
      'awei-nav': Nav,
      'awei-user': User,
      'awei-links': Links,
      'awei-categories': Categories,
      'awei-tag-cloud': TagCloud,
      'awei-recent': Recent,
      'awei-archives': Archives,
      'awei-tags': Tags,
      'awei-setting': Setting,
    },
    data() {
      return {
        sta: false,
        searchSta: true,
        navSta: false,
      }
    },
    computed: {
      menu() {
        return this.$store.state.nav.menu
      },
      contMax() {
        return this.$store.state.screen.contMax
      },
      isDetailRoute() {
        return this.$route.name === 'detail-code'
      },
    },
    methods: {
      init() {
        $('.to-top').toTop();
        this.sta = true;
        this.searchSta = this.$route.name !== 'search';
        this.navSta = this.$route.name === 'detail-code';
      },
    },
    created() {
    },
    mounted() {
      this.init();
    },
    watch: {
      '$route': function (newValue, oldValue) {
        this.searchSta = newValue.name !== 'search';
        this.navSta = this.$route.name === 'detail-code';
      }
    },
  }

</script>

<style lang="less">
  .default {
    --color: #333333;
    --hover_color: #35CC62;
    --base_color: #666666;
    --block_title: #7A7A7A;
    --bg_color: #f7f7f7;
    --black_color: #FFFFFF;
    --link: #0366d6;
    --hljs: #2d2d2d;
    --border: #eaecef;
    --box_shadow: 0 4px 10px rgba(0, 0, 0, 0.05), 0 0 1px rgba(0, 0, 0, 0.1);
  }

  .yellow {
    --color: #F1F1F1;
    --hover_color: #FF9800;
    --base_color: #C1C1C1;
    --block_title: #AAAAAA;
    --bg_color: #6b8d9c;
    --black_color: #5b7d8c;
    --link: #FF9800;
    --hljs: #38525d;
    --border: #3e3e3e;
    --box_shadow: 0 0 4px #465f6b, 0 0 1px #465f6b;
  }

  .dark {
    --color: #DDDDDD;
    --hover_color: #FFFFFF;
    --base_color: #C1C1C1;
    --block_title: #AAAAAA;
    --bg_color: #333333;
    --black_color: #222222;
    --link: #FF9800;
    --hljs: #2E2E2E;
    --border: #3e3e3e;
    --box_shadow: 0 0 4px #333333, 0 0 1px #333333;
  }
  
  html {
    /*font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;*/
    font-family: Serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    color: var(--color);
  }
  
  body {
    --color: #333333;
    --hover_color: #35CC62;
    --base_color: #666666;
    --block_title: #7A7A7A;
    --bg_color: #f7f7f7;
    --black_color: #FFFFFF;
    --link: #0366d6;
    --hljs: #2d2d2d;
    --border: #eaecef;
    --box_shadow: 0 4px 10px rgba(0, 0, 0, 0.05), 0 0 1px rgba(0, 0, 0, 0.1);
    
    color: var(--color);
    background-color: var(--bg_color);
  }
  
  a {
    color: var(--color);
  }

  input, textarea {
    font-family: Serif;
    color: var(--color);
    background-color: var(--bg_color);
    &::placeholder {
      /* placeholder颜色  */
      color: var(--base_color);
    }
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    -webkit-overflow-scrolling: touch;
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
    background-color: var(--black_color);
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
          /*box-shadow: var(--box_shadow);*/
          /*padding: 20px;*/
        }

        .right-content {
          display: block;
          margin-bottom: 20px;
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
          /*box-shadow: var(--box_shadow);*/
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

      .cont-cen-max {
        width: 66.66667%;
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

      .cont-cen-max {
        width: 66.66667%;
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

      .cont-cen-max {
        width: 75%;
      }

      .cont-right {
        width: 25%;
        padding: 20px 10px;
        display: block !important;
      }
      .cont-right-min {
        display: none!important;
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
      .cont-cen-max {
        width: 75%;
      }

      .cont-right {
        width: 25%;
        padding: 20px 10px;
        display: block !important;
      }
      .cont-right-min {
        display: none!important;
      }
    }
  }

  .bounce-enter-active {
    animation: bounce-in .5s;
    transform-origin: center top;
  }

  .bounce-leave-active {
    animation: bounce-in .5s reverse;
    transform-origin: center top;
  }

  @keyframes bounce-in {
    /*0% {*/
      /*-webkit-transform: scale3d(.8, .8, .8);*/
      /*opacity: 0;*/
      /*transform: scale3d(.8, .8, .8)*/
    /*}*/
    /*50% {*/
      /*opacity: 1*/
    /*}*/
    0% {
      -webkit-transform: translate3d(0, 20px, 0);
      transform: translate3d(0, 20px, 0);
      visibility: visible;
      opacity: 0;
    }
    to {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      opacity: 1;
    }
  }

  .slideInDown-enter-active {
    animation: slideInDown-in .5s;
    transform-origin: center top;
  }

  .slideInDown-leave-active {
    animation: slideInDown-in .5s reverse;
    transform-origin: center top;
  }

  @keyframes slideInDown-in {
    0% {
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
      visibility: visible
    }
    to {
      -webkit-transform: translateZ(0);
      transform: translateZ(0)
    }
  }

  .slideInUp-enter-active {
    animation: slideInUp-in .5s;
    transform-origin: center top;
  }

  .slideInUp-leave-active {
    animation: slideInUp-in .5s reverse;
    transform-origin: center top;
  }

  @keyframes slideInUp-in {
    0% {
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
      visibility: visible
    }
    to {
      -webkit-transform: translateZ(0);
      transform: translateZ(0)
    }
  }

</style>
