<template>
  <div class="evaluate" id="evaluate">
    <awei-item :list="list" v-if="list.length"/>
    <p class="one_evaluate" v-if="!list.length">^_^成为第一个评论的人吧！</p>
    <!--<div class="separ"></div>-->
  </div>
</template>
<script>
  import Item from './Item.vue'

  export default {
    props: ['b_id'],
    components: {
      'awei-item': Item,
    },
    computed: {
      list() {
        return this.$store.state.evaluate.list
      },
    },
  }
</script>
<style lang="less" scoped>

  .evaluate {
    /*width: 1028px;*/
    /*width: 680px;*/
    /*margin: 10px auto;*/
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, .05), 0 0 1px rgba(0, 0, 0, .1);
    padding: 20px;
    margin-bottom: 20px;


    .one_evaluate {
      color: #666666;
      text-align: center;
      /*margin-bottom: 20px;*/
    }

    .separ {
      /*width: 680px;*/
      height: 1px;
      background: rgba(0, 0, 0, 1);
      opacity: 0.1;
    }
  }

</style>
