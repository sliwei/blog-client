<template>
  <div class="user-cont" id="nav_box">
    <div class="user">

      <div class="heads">
        <nuxt-link to="/">
          <img src="~static/img/logo.png" alt="">
        </nuxt-link>
      </div>
      <div class="info">
        <p class="name">awei</p>
        <p class="job">前端工程师</p>
        <p class="addr">
          <i class="in iconfont a-blog-linkedin"/>
          <span>beijing</span>
        </p>
      </div>

      <div class="cont">
        <div class="item">
          <nuxt-link to="/">
            <p class="label">文章</p>
            <p class="value">34</p>
          </nuxt-link>
        </div>
        <div class="item">
          <nuxt-link to="/">
            <p class="label">分类</p>
            <p class="value">34</p>
          </nuxt-link>
        </div>
        <div class="item">
          <nuxt-link to="/">
            <p class="label">标签</p>
            <p class="value">34</p>
          </nuxt-link>
        </div>
      </div>

      <div class="get_me">
        <button>关注我</button>
      </div>

      <div class="icons">
        <div class="item"><i class="in iconfont a-blog-linkedin"/></div>
        <div class="item"><i class="in iconfont a-blog-linkedin"/></div>
        <div class="item"><i class="in iconfont a-blog-linkedin"/></div>
        <div class="item"><i class="in iconfont a-blog-linkedin"/></div>
        <div class="item"><i class="in iconfont a-blog-linkedin"/></div>
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        menu: [],
      }
    },
    methods: {},
    created() {
    },
  }
</script>
<style lang="less" scoped>

  .user-cont {
    width: 100%;
    position: static;
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, .05), 0 0 1px rgba(0, 0, 0, .1);
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
        border-radius: 30px;
        background-color: #35cc62;

        img {
          margin: 10px;
          width: 40px;
        }
      }

      .info {
        .name {
          color: #4a4a4a;
          font-size: 14px;
          margin-bottom: 5px;
        }

        .job {
          color: #5a5a5a;
          font-size: 14px;
          margin-bottom: 5px;
        }

        .addr {
          i {
            color: #e60012;
            vertical-align: middle;
          }

          span {
            color: #7a7a7a;
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
              color: #5a5a5a;
            }

            .value {
              font-size: 14px;
              color: #333333;
            }
          }
        }
      }

      .get_me {
        margin: 20px auto;

        button {
          width: 100%;
          height: 36px;
          line-height: 36px;
          border-radius: 18px;
          border: 0;
          background-color: #3273dc;
          color: #fff;
          font-size: 14px;
          cursor: pointer;
        }
      }

      .icons {
        margin: 20px auto 0;
        display: flex;

        .item {
          flex: 1;

          i {
            color: #7a7a7a;
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
