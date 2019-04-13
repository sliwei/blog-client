<template>
  <div class="nav-cont" id="nav_box">
    <h4 style="padding: 10px;text-align: center">目录</h4>
    <div class="nav" ref="nav"></div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        menu: [],
      }
    },
    methods: {
      init() {
        console.log('init')
        let _this = this;
        const removeClass = function removeClass(kls, dom) {
          let klsReg = new RegExp(kls, 'ig');
          for (let i = 0; i < dom.length; i++) {
            let node = dom[i];
            let klses = node.className;
            if (klsReg.test(klses)) {
              node.className = node.className.replace(kls, '')
            }
          }
        };
        window.onscroll = function () {
          let t = document.documentElement.scrollTop || document.body.scrollTop;
          let index = 0;
          _this.menu.map((item, i) => {
            if (document.querySelector(`#${item}`).offsetTop < t) {
              index = i;
            }
          });
          let activeList = document.querySelectorAll('.nva_item');
          if (activeList.length) {
            let activeDom = document.querySelectorAll('.nva_item')[index];
            let activeDom2 = document.querySelectorAll('.nva_item')[index + (activeList.length / 2)];
            removeClass(' active', activeList);
            activeDom.className = `${activeDom.className} active`;
            activeDom2.className = `${activeDom2.className} active`;
          }
        }
      }
    },
    created() {
    },
    mounted() {
      setTimeout(() => {
        let dom = document.querySelector('.markdown-body');
        if (dom) {
          let domList = dom.childNodes
          let menuName = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6']
          let html = '';
          let menu = [];
          for (let key in domList) {
            if (menuName.indexOf(domList[key].nodeName) >= 0) {
              console.log(parseInt(domList[key].nodeName.slice(1, 2)))
              let link = `<a class="nva_item nva_${domList[key].nodeName}" href="#${domList[key].childNodes[0].id}">${domList[key].innerText}</a>`
              link && (html += link);
              menu.push(domList[key].childNodes[0].id);
            }
          }
          this.$refs.nav.innerHTML = html;
          this.menu = menu;
          setTimeout(() => {
            this.init();
            $(".nav-cont").scrollFix({distanceTop: 20});
          }, 0)
        }
      }, 400)
    }
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
