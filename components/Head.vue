<template>
  <div class="head">
    <div class="bg">
      <div class="mask"></div>
    </div>
    <div class="cont">
      <div class="bar">

        <div class="logo">
          <nuxt-link to="/">
            <img src="~static/img/logo.png" alt="">
            <h1 style="display: none">布什兔</h1>
          </nuxt-link>
        </div>

        <div class="menu">-
          <a target="_blank" href="http://lws.bstu.cn">写博客</a>
          <a target="_blank" href="http://chat.bstu.cn">聊天室</a>
          <a target="_blank" href="http://music.bstu.cn">吉姆音乐厅</a>
          <a target="_blank" href="https://yun.bstu.cn">在线云盘</a>
          <nuxt-link to="/">更多想法~</nuxt-link>
        </div>
      </div>

      <div class="motto">
        <h2>先天之智，后天修为</h2>
        <!--<h2>没有与生俱来的智慧，就要积极进取的学习</h2>-->
      </div>

      <div class="nav">
        <nuxt-link class="active" to="/">首页</nuxt-link>&ensp;/&ensp;
        <nuxt-link to="/search?keyword=">时间轴</nuxt-link>&ensp;/&ensp;
        <nuxt-link to="/log">日志</nuxt-link>
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

  .head {
    min-width: 1240px;
    width: 100%;
    height: 400px;
    .bg {
      width: 100%;
      height: 400px;
      background: url('~static/img/bg.jpg') no-repeat center;
      background-size: 1920px auto;
      .mask {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .4);
      }
    }
    .cont {
      width: 1240px;
      height: 400px;
      margin: 0 auto;
      position: absolute;
      top: 0;
      left: calc(50% - 620px);
      .bar {
        display: flex;
        .logo {
          flex: 1;
          img {
            width: 40px;
            margin-top: 25px;
          }
        }
        .menu {
          margin-top: 35px;
          a {
            font-size: 14px;
            font-family: Montserrat-Medium;
            font-weight: 500;
            color: rgba(255, 255, 255, .5);
            margin: 0 10px;
            text-decoration: none;
            &:hover, &.active {
              position: relative;
              color: rgba(255, 255, 255, 1);
              &:after {
                position: absolute;
                left: calc(50% - 10px);
                bottom: -10px;
                content: '';
                display: block;
                width: 20px;
                height: 1px;
                background-color: #ffffff;
              }
            }
          }
        }
      }
      .motto {
        margin-top: 100px;
        text-align: center;
        h2 {
          margin: 0;
          font-size: 36px;
          font-family: Montserrat-Regular;
          font-weight: 600;
          color: rgba(255, 255, 255, 1);
        }
      }
      .nav {
        margin-top: 20px;
        text-align: center;
        color: rgba(255, 255, 255, .5);

        a {
          display: inline-block;
          color: rgba(255, 255, 255, .5);
          text-decoration: none;
          font-size: 14px;
          &:hover, &.active {
            position: relative;
            color: rgba(255, 255, 255, 1);
          }
        }
      }
    }
  }
</style>
