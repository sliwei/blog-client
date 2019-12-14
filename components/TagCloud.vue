<template>
  <div class="tag-cloud-cont">
    <div class="tag-cloud">
      <p class="title">标签云</p>

      <div class="tagcloud">
        <nuxt-link v-for="(item, i) in list" :class="sty(item)" :to="`/search?tag=${item.id}`" :key="i">{{item.name}}</nuxt-link>
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    computed: {
      list() {
        return this.$store.state.tags.list
      },
    },
    methods: {
      init() {
        /*3D标签云*/
        tagcloud({
          selector: ".tagcloud", // 元素选择器
          fontsize: 16, // 基本字体大小, 单位px
          radius: 140, // 滚动半径, 单位px 页面宽度和高度的五分之一
          mspeed: "slow", // 滚动最大速度, 取值: slow, normal(默认), fast
          ispeed: "slow", // 滚动初速度, 取值: slow, normal(默认), fast
          direction: 135, // 初始滚动方向, 取值角度(顺时针360): 0对应top, 90对应left, 135对应right-bottom(默认)...
          keep: false// 鼠标移出组件后是否继续随鼠标滚动, 取值: false, true(默认) 对应 减速至初速度滚动, 随鼠标滚动
        });
      },
      sty(dat) {
        let size = 1;
        if(dat.num > 5) {
          size = 4
        } else  if (dat.num > 4) {
          size = 3
        } else  if (dat.num > 3) {
          size = 2
        }
        return `b0${size} co0${Math.floor(Math.random()*(1 - 7) + 7)}`
      },
    },
    mounted() {
      this.$nextTick(() => {
        this.init();
      })
    },
  }
</script>
<style lang="less" scoped>

  .tag-cloud-cont {
    width: 100%;
    position: static;
    background-color: @black_color;
    border-radius: 4px;
    box-shadow: @box_shadow;
    margin-bottom: 20px;

    .tag-cloud {
      top: 0px;
      position: relative;
      padding: 20px;
      text-align: center;
      border-radius: 4px;

      .title {
        color: @block_title;
        font-size: 12px;
        text-align: left;
        margin-bottom: 10px;
      }

      .tagcloud {
        visibility: visible;
        position: relative;
        min-height: 150px!important;
        min-width: auto!important;
        margin: 30px 60px 0;
      }

    }
  }
</style>
