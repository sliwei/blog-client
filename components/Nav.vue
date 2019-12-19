<template>
  <div class="nav-cont">
    <div class="nav">
      <p class="title">目录</p>
      <div style="margin-left: -10px;" v-html="menu.tocHtml" id="nav"></div>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      init() {
        if ($(document).width() >= 754) {
          setTimeout(() => {
            $($(".nav-cont")[0]).scrollfix({distanceTop: 20, endPos: '.footer-con'});
            $($(".nav-cont")[1]).scrollfix({distanceTop: 20, endPos: '.footer-con'});
            this.map();
          }, 100)
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
      $(window).unbind('scroll');
      this.$store.commit('nav/setMenu', {
        tocArray: [],
        tocHtml: '',
      });
    },
    watch: {
      menu: function (o, n) {
        this.init();
      }
    },
  }
</script>
<style lang="less" scoped>

  .nav-cont {
    width: 100%;
    position: static;
    background-color: var(--black_color);
    border-radius: 4px;
    box-shadow: var(--box_shadow);
    margin-bottom: 20px;


    .nav {
      top: 0px;
      position: relative;
      padding: 20px;
      border-radius: 4px;

      .title {
        color: var(--block_title);
        font-size: 12px;
        text-align: left;
        margin-bottom: 10px;
      }

      /deep/ ul {
        margin: 0;
        padding: 0;
        position: relative;

        li {
          list-style: none;
          margin-left: 10px;
          position: relative;

        }
      }

      /deep/ .markdownIt-TOC > li > a {
        font-weight: bold;
        color: var(--color);
      }

      /deep/ .markdownIt-TOC > li > ul li {
        &::before {
          position: absolute;
          content: '';
          width: 4px;
          height: 4px;
          background-color: var(--bg_color);
          font-size: 12px;
          left: -4px;
          top: 14px;
        }
      }

      /deep/ a {
        cursor: pointer;
        display: block;
        color: var(--color);
        text-decoration: none;
        font-size: 14px;
        margin: 0 0 4px 0;
        padding: 5px;

        &:hover, &.active {
          color: var(--hover_color);
          background-color: var(--bg_color);
        }
      }
    }
  }
</style>
