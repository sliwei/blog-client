<template>
  <div class="user-cont" id="nav_box">
    <div class="user">
      <div class="heads">
        <nuxt-link :to="$i18n.path('/')">
          <i class="iconfont a-blog-logo"></i>
        </nuxt-link>
      </div>
      <div class="info">
        <p class="name">Liwei</p>
        <p class="job">{{ $t('components.user.job') }}</p>
        <p class="addr">
          <i class="iconfont a-blog-location" />
          <span>Beijing</span>
        </p>
      </div>

      <div class="cont">
        <div class="item">
          <nuxt-link :to="$i18n.path('/')">
            <p class="label">{{ $t('components.user.article') }}</p>
            <p class="value">{{ num.blog }}</p>
          </nuxt-link>
        </div>
        <div class="item">
          <nuxt-link :to="$i18n.path('/')">
            <p class="label">{{ $t('components.user.categories') }}</p>
            <p class="value">{{ num.category }}</p>
          </nuxt-link>
        </div>
        <div class="item">
          <nuxt-link :to="$i18n.path('/')">
            <p class="label">{{ $t('components.user.tags') }}</p>
            <p class="value">{{ num.tags }}</p>
          </nuxt-link>
        </div>
      </div>

      <div class="get_me">
        <a target="_blank" href="https://github.com/sliwei">{{
          $t('components.user.follow')
        }}</a>
      </div>

      <div class="icons">
        <div class="item">😄</div>
        <div class="item">😆</div>
        <div class="item">😊</div>
        <div class="item">😍</div>
        <div class="item">😘</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    num() {
      return this.$store.state.user.num
    }
  }
}
</script>
<style lang="less" scoped>
.user-cont {
  width: 100%;
  position: static;
  background-color: var(--black_color);
  border-radius: 4px;
  box-shadow: var(--box_shadow);
  margin-bottom: 20px;

  .user {
    top: 0px;
    position: relative;
    padding: 20px;
    text-align: center;
    border-radius: 4px;

    .heads {
      margin: 20px auto 10px;
      width: 60px;
      height: 60px;

      a {
        text-decoration: none;

        i {
          font-size: 60px;
          color: var(--color);
          transition: all 0.3s;
          &:hover {
            color: var(--hover_color);
          }
        }
      }
    }

    .info {
      .name {
        color: var(--color);
        font-size: 14px;
        margin-bottom: 5px;
      }

      .job {
        color: var(--color);
        font-size: 14px;
        margin-bottom: 5px;
      }

      .addr {
        i {
          color: var(--base_color);
          vertical-align: middle;
        }

        span {
          color: var(--base_color);
          font-size: 12px;
          vertical-align: middle;
        }
      }
    }

    .cont {
      display: flex;
      margin: 20px auto;

      .item {
        flex: 1;

        a {
          text-decoration: none;
          .label {
            font-size: 14px;
            color: var(--color);
          }

          .value {
            font-size: 14px;
            color: var(--color);
          }
        }
      }
    }

    .get_me {
      margin: 20px auto;

      a {
        text-decoration: none;
        display: block;
        width: 100%;
        height: 36px;
        line-height: 36px;
        border-radius: 18px;
        border: 0;
        background-color: #3273dc;
        color: #fff;
        font-size: 14px;
        cursor: pointer;
        outline: none;
      }
    }

    .icons {
      margin: 20px auto 0;
      display: flex;

      .item {
        flex: 1;

        i {
          color: var(--block_title);
          cursor: pointer;
          transition: all 0.3s;

          &:hover {
            color: #35cc62;
          }
        }
      }
    }
  }
}
</style>
