<template>
  <div class="tags-cont">
    <div class="tags">
      <p class="title">标签</p>

      <div class="list">
        <ul>
          <li v-for="(item, i) in list" :key="i">
            <a target="_blank" href="https://bstu.cn">
              <span class="name">{{item.name}}</span>
              <span class="url">{{item.id}}</span>
            </a>
          </li>

        </ul>
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
  }
</script>
<style lang="less" scoped>

  .tags-cont {
    width: 100%;
    position: static;
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, .05), 0 0 1px rgba(0, 0, 0, .1);
    margin-bottom: 20px;

    .tags {
      top: 0px;
      position: relative;
      padding: 20px;
      text-align: center;
      border-radius: 4px;

      .title {
        color: #7a7a7a;
        font-size: 12px;
        text-align: left;
        margin-bottom: 10px;
      }

      .list {
        ul {
          margin: 0;
          padding: 0;

          li {
            list-style: none;
            text-align: left;

            a {
              color: #4a4a4a;
              text-decoration: none;
              display: block;
              padding: 6px 10px;
              border-radius: 2px;

              &:hover {
                background-color: #f5f5f5;
                color: #363636;
              }

              .name {
                display: inline-block;
                height: 24px;
              }

              .url {
                font-size: 12px;
                background-color: #f5f5f5;
                border-radius: 4px;
                display: inline-block;
                height: 24px;
                line-height: 22px;
                padding: 0 5px;
                float: right;

              }

            }
          }
        }
      }

    }
  }
</style>
