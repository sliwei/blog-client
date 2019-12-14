<template>
  <div class="user-cont" id="nav_box">
    <div class="user">

      <div class="heads">
        <nuxt-link to="/">
          <i class="iconfont a-blog-logo"></i>
        </nuxt-link>
      </div>
      <div class="info">
        <p class="name">Liwei</p>
        <p class="job">前端工程师</p>
        <p class="addr">
          <i class="iconfont a-blog-location"/>
          <span>Beijing</span>
        </p>
      </div>

      <div class="cont">
        <div class="item">
          <nuxt-link to="/">
            <p class="label">文章</p>
            <p class="value">{{num.blog}}</p>
          </nuxt-link>
        </div>
        <div class="item">
          <nuxt-link to="/">
            <p class="label">分类</p>
            <p class="value">{{num.category}}</p>
          </nuxt-link>
        </div>
        <div class="item">
          <nuxt-link to="/">
            <p class="label">标签</p>
            <p class="value">{{num.tags}}</p>
          </nuxt-link>
        </div>
      </div>

      <div class="get_me">
        <a target="_blank" href="https://github.com/sliwei">关注我</a>
      </div>

      <div class="icons">
        <div class="item">
          😄
        </div>
        <div class="item">
          😆
        </div>
        <div class="item">
          😊
        </div>
        <div class="item">
          😍
        </div>
        <div class="item">
          😘
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    computed: {
      num() {
        return this.$store.state.user.num
      },
    },
  }
</script>
<style lang="less" scoped>

  .user-cont {
    width: 100%;
    position: static;
    background-color: @black_color;
    border-radius: 4px;
    box-shadow: @box_shadow;
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
            color: @color;
            transition: all .3s;
            &:hover {
              color: @hover_color;
            }
          }
        }
      }

      .info {
        .name {
          color: @color;
          font-size: 14px;
          margin-bottom: 5px;
        }

        .job {
          color: @color;
          font-size: 14px;
          margin-bottom: 5px;
        }

        .addr {
          i {
            color: @base_color;
            vertical-align: middle;
          }

          span {
            color: @base_color;
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
              color: @color;
            }

            .value {
              font-size: 14px;
              color: @color;
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
            color: @block_title;
            cursor: pointer;
            transition: all .3s;

            &:hover {
              color: #35cc62;
            }
          }
        }
      }


    }
  }
</style>
