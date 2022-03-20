<template>
  <transition name="bounce">
    <div class="__nuxt-error-page">
      <div class="error">
        <!--<svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="#DBE1EC" viewBox="0 0 48 48">-->
        <!--<path-->
        <!--d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"></path>-->
        <!--</svg>-->

        <img src="~static/img/404-5.png" alt="404" />

        <div class="info">
          <div class="title">{{ $t('layouts.error.not-found') }}</div>
          <p class="description">
            <nuxt-link
              :to="$i18n.path('/')"
              class="error-link nuxt-link-active"
              >{{ $t('layouts.error.back-home') }}</nuxt-link
            >
          </p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  mounted() {
    console.log('AAAA', this)
  }
}
</script>

<style lang="less" scoped>
.__nuxt-error-page {
  background: #ffffff;
  color: #47494e;
  text-align: center;
  display: flex;
  justify-content: center;
  border-radius: 4px;
  box-shadow: var(--box_shadow);
  /*padding-bottom: 20px;*/

  .error {
    /*max-width: 450px;*/
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 100px 0;

    img {
      width: 40%;
      float: left;
    }

    .info {
      //position: absolute;
      width: 100%;
      text-align: center;
      bottom: 0;

      .title {
        font-size: 18px;
        color: #47494e;
        margin-bottom: 8px;
      }

      .description {
        color: #7f828b;
        line-height: 21px;
        margin-bottom: 10px;

        a {
          color: #7f828b;
          text-decoration: none;
          font-size: 12px;
          transition: color 0.35s;

          &:hover {
            color: var(--hover_color);
          }
        }
      }
    }
  }
}
</style>
