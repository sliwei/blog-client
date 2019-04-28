<template>
  <div class="search-cont">
    <div class="search">
      <form action="javascript:return true;">
        <input @keyup.13="search" type="text" v-model="searchVal" placeholder="关键字">
      </form>
      <i class="iconfont a-blog-max_search" @click="search"></i>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        searchVal: ''
      }
    },
    methods: {
      search() {
        // window.location.href = `/search?keyword=${this.searchVal}`;
        this.$router.push({
          path: '/search',
          query: {
            keyword: this.searchVal
          },
        })
      },
    },
  }
</script>
<style lang="less" scoped>
  * {
    transition: all .3s;
  }

  .search-cont {
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, .05), 0 0 1px rgba(0, 0, 0, .1);
    padding: 20px;
    margin-bottom: 20px;

    .search {
      position: relative;


      input {
        width: 100%;
        height: 36px;
        background: rgba(255, 255, 255, 0.1);
        border: 2px solid rgba(0, 0, 0, 0.1);
        /*border-radius: 4px;*/
        text-indent: 10px;
        font-size: 14px;
        color: #333333;
        transition: all 0.35s;

        &:focus {
          outline: none;
          border: 2px solid #35CC62;
          box-shadow: 0 0 2px #49fb7e;
        }
      }

      i {
        cursor: pointer;
        position: absolute;
        top: 7px;
        right: 8px;
        font-size: 22px;
        color: #999;

        &:hover {
          color: #35CC62 !important;
        }
      }
    }
  }
</style>
