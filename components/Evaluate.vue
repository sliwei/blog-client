<template>
  <div class="evaluate">
    <awei-item :list="evaluate"/>
    <p class="one_evaluate" v-if="!evaluate.length">^_^成为第一个评论的人吧！</p>
    <div class="separ"></div>
  </div>
</template>
<script>
  import Item from './Item.vue'

  export default {
    props: ['evaluate', 'b_id'],
    components: {
      'awei-item': Item,
    },
    mounted() {
      console.log(this.evaluate)
    }
  }
</script>
<style lang="less" scoped>

  .evaluate {
    /*width: 1028px;*/
    width: 680px;
    margin: 40px auto;
    .one_evaluate {
      color: #666666;
      text-align: center;
      margin-bottom: 20px;
    }
    .separ {
      width: 680px;
      height: 1px;
      background: rgba(0, 0, 0, 1);
      opacity: 0.1;
    }
  }

</style>
