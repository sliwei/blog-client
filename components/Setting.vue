<template>
  <div
    :class="`setting ${setSta ? '' : 'close_set'}`"
    @mousemove="moveSet"
    @mouseleave="leaveSet"
  >
    <div class="icon_box">
      <div class="icon_cont">
        <div :class="`icon ${setSta ? 'icon_animation' : ''}`">
          <i class="iconfont a-blog-setting-fill" />
        </div>
      </div>
      <div class="title">{{ $t('components.setting.title') }}</div>
    </div>
    <div class="panel">
      <div class="theme" @click="changeTheme">
        <i
          :class="`iconfont a-blog-qing ${theme === 'default' ? '' : 'left_a'}`"
        />
        <i
          :class="`iconfont a-blog-yewan ${theme === 'dark' ? '' : 'right_a'}`"
        />
      </div>
    </div>
    <div class="language">
      <div class="language_box" @click="changeLanguage">
        <nuxt-link
          :to="`/en` + $route.fullPath"
          class="Header__Link"
          active-class="none"
          exact
        >
          <img
            src="~static/img/zh.png"
            :class="`${language === 'zh' ? '' : 'left_a'}`"
          />
        </nuxt-link>
        <nuxt-link
          :to="$route.fullPath.replace(/^\/[^\/]+/, '')"
          class="Header__Link"
          active-class="none"
          exact
        >
          <img
            src="~static/img/en.png"
            :class="`${language === 'en' ? '' : 'right_a'}`"
          />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      setSta: false,
      theme: '', // dark
      language: '' // zh en
    }
  },
  methods: {
    leaveSet() {
      this.setSta = false
    },
    moveSet() {
      this.setSta = true
    },
    changeTheme() {
      umami.track((props) => ({
        ...props,
        name: 'changeTheme',
        data: {
          name: 'newsletter',
          id: 123
        }
      }))
      if (this.theme === 'default') {
        this.theme = 'dark'
        document.querySelector('body').className = 'dark'
        localStorage.setItem('theme', 'dark')
      } else {
        this.theme = 'default'
        document.querySelector('body').className = 'default'
        localStorage.setItem('theme', 'default')
      }
    },
    changeLanguage() {
      if (this.language === 'zh') {
        this.language = 'en'
      } else {
        this.language = 'zh'
      }
    },
    init() {
      let theme = localStorage.getItem('theme')
      if (theme === 'dark') {
        document.querySelector('body').className = 'dark'
        this.theme = 'dark'
      } else {
        document.querySelector('body').className = 'default'
        this.theme = 'default'
      }
      let language = this.$route.params.lang
      if (language === 'en') {
        // i18n
        this.language = 'en'
      } else {
        // i18n
        this.language = 'zh'
      }
    }
  },
  mounted() {
    this.init()
  }
}
</script>
<style lang="less" scoped>
@-webkit-keyframes rotation {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}

.setting {
  position: fixed;
  z-index: 9999;
  right: 0;
  top: 100px;
  width: 60px;
  height: 86px;
  transition: right 0.35s;
  .icon_box {
    width: 100%;
    height: 26px;
    background-color: var(--color);
    position: relative;
    .icon_cont {
      position: absolute;
      left: -26px;
      top: 0;
      background-color: var(--color);
      .icon {
        width: 20px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        margin: 3px;
        i {
          font-size: 20px;
          color: var(--bg_color);
          &:hover {
            color: var(--black_color);
          }
        }
      }
      .icon_animation {
        animation: rotation 8s linear infinite;
      }
    }
    .title {
      width: 60px;
      line-height: 26px;
      text-align: center;
      color: var(--bg_color);
    }
  }
  .panel {
    margin: 10px auto 0;
    width: 60px;
    height: 40px;
    position: relative;
    text-align: center;
    .theme {
      margin: 0 auto;
      border: 1px solid #000;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      line-height: 40px;
      box-shadow: inset 0 0 2px 2px var(--base_color);
      overflow: hidden;
      position: relative;
      i {
        user-select: none;
        cursor: pointer;
        display: block;
        position: absolute;
        left: 11px;
        transition: left 0.35s;
      }
      .left_a {
        left: -20px;
      }
      .right_a {
        left: 40px;
      }
    }
  }
  .language {
    margin: 10px auto 0;
    width: 60px;
    height: 40px;
    position: relative;
    text-align: center;
    .language_box {
      cursor: pointer;
      margin: 0 auto;
      border: 1px solid #000;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      line-height: 40px;
      box-shadow: inset 0 0 2px 2px var(--base_color);
      overflow: hidden;
      position: relative;
      img {
        width: 100%;
        position: absolute;
        left: 0;
        transition: left 0.35s;
      }
      .left_a {
        left: -40px;
      }
      .right_a {
        left: 40px;
      }
    }
  }
}
.close_set {
  right: -60px;
}
</style>
