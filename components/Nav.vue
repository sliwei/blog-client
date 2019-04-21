<template>
  <div class="nav-cont">
    <h4 style="padding: 10px;text-align: center">目录</h4>
    <div class="nav" id="nav" v-html="menu.tocHtml"></div>
  </div>
</template>
<script>
  export default {
    methods: {
      init() {
        if ($(document).width() >= 754) {
          setTimeout(() => {
            $(".nav-cont").scrollFix({distanceTop: 20, endPos: '.footer-con'});
            this.map();
          }, 400)
        }
      },
      map() {
        window.onscroll = null;
        let _this = this;
        let rootIndex = 0;
        $(window).scroll(() => {
          let t = document.documentElement.scrollTop || document.body.scrollTop;
          let index = 0;
          _this.menu.tocArray.map((item, i) => {
            if (document.querySelector(`#${item.anchor}`).offsetTop < t) {
              index = i + 1;
            }
          });
          if (rootIndex !== index) {
            rootIndex = index;
            $('.markdownIt-TOC').find('a').removeClass('active');
            $($($('.markdownIt-TOC')[0]).find('a')[index]).addClass('active');
            $($($('.markdownIt-TOC')[1]).find('a')[index]).addClass('active');
          }
        });
      }
    },
    created() {
    },
    mounted() {
      this.init();
    },
    computed: {
      menu() {
        return this.$store.state.nav.menu
      }
    },
    destroyed() {
      // window.onscroll = null;
      $(window).unbind('scroll');
      $('.scrollfixedBox').remove();
      this.$store.commit('nav/setMenu', {
        tocArray: [],
        tocHtml: '',
      });
    },
    watch: {
      menu: function (o, n) {
        // setTimeout(() => {
          this.map();
        // }, 400);
      }
    },
  }
</script>
<style lang="less" scoped>

  .nav-cont {
    width: 100%;
    position: static;
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, .05), 0 0 1px rgba(0, 0, 0, .1);
    margin-bottom: 20px;

    .nav {
      top: 0px;
      position: relative;
      padding: 20px;

      /deep/ ul {
        margin: 0;
        padding: 0;

        li {
          list-style: none;
          margin-left: 10px;

        }
      }

      /deep/ a {
        cursor: pointer;
        display: block;
        color: #666666;
        text-decoration: none;
        font-size: 14px;
        margin: 0 0 4px 0;
        padding: 5px;

        &:hover, &.active {
          color: #35CC62;
          background-color: #f8f8f8;
        }

        &.nva_H1 {
          margin-left: 0px;
          font-weight: bold;
        }

        &.nva_H2 {
          margin-left: 10px;
        }

        &.nva_H3 {
          margin-left: 20px;
          font-size: 12px;
        }

        &.nva_H4 {
          margin-left: 30px;
          font-size: 12px;
        }

        &.nva_H5 {
          margin-left: 40px;
          font-size: 12px;
        }

        &.nva_H6 {
          margin-left: 50px;
          font-size: 12px;
        }
      }
    }
  }
</style>
