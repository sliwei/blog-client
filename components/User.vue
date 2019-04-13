<template>
  <div class="user-cont" id="nav_box">
    <div class="user">
      <img src="~static/img/logo.png" alt="">
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
      background-color: #35cc62;
      border-radius: 4px;

      img {
        width: 40px;
      }
    }
  }
</style>
