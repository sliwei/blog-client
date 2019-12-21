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
          path: '/search/1',
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
    background-color: var(--black_color);
    border-radius: 4px;
    box-shadow: var(--box_shadow);
    padding: 20px;
    margin-bottom: 20px;

    .search {
      position: relative;


      input {
        width: 100%;
        height: 36px;
        background: var(--bg_color);
        border: 2px solid rgba(0, 0, 0, 0.1);
        /*border-radius: 4px;*/
        text-indent: 10px;
        font-size: 14px;
        color: var(--color);
        transition: all 0.35s;

        &:focus {
          outline: none;
          border: 2px solid var(--hover_color);
          box-shadow: 0 0 2px var(--hover_color);
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
          color: var(--hover_color);
        }
      }
    }
  }
</style>
