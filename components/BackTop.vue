<template>
  <transition name="fade">
    <div class="back_top" @click="back" v-if="show">
      <img src="~static/img/6.png" alt="">
    </div>
  </transition>
</template>

<script>
  import Tool from '~/assets/Tool'

  export default {
    props: {
      height: {
        type: Number,
        default: 500
      }
    },
    data() {
      return {
        show: false,
      }
    },
    methods: {
      back() {
        Tool.scrollToptimer();
      },
      init() {
        console.log('init');
        let _this = this;
        window.onscroll = function () {
          let nowTops = document.body.scrollTop || document.documentElement.scrollTop;
          console.log(nowTops);
          _this.show = _this.height < nowTops;
        };
      }
    },
    mounted() {
      this.init()
    }
  }
</script>

<style lang="less" scoped>
  .back_top {
    position: fixed;
    bottom: 200px;
    right: 100px;
    width: 50px;
    cursor: pointer;

    img {
      width: 50px;
    }
  }

  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.2s ease;
  }

  .fade-enter, .fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    opacity: 0;
  }
</style>
