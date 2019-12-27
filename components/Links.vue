<template>
  <div class="links-cont" v-if="list.length">
    <div class="links">
      <p class="title">{{$t('components.links.title')}}</p>
      <div class="list">
        <ul>
          <li v-for="(item, i) in list" :key="i">
            <a target="_blank" :href="item.website">
              <span class="name">{{item.title}}</span>
              <span class="url">{{item.website}}</span>
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
        return this.$store.state.links.list
      },
    },
  }
</script>
<style lang="less" scoped>

  .links-cont {
    width: 100%;
    position: static;
    background-color: var(--black_color);
    border-radius: 4px;
    box-shadow: var(--box_shadow);
    margin-bottom: 20px;

    .links {
      top: 0px;
      position: relative;
      padding: 20px;
      text-align: center;
      border-radius: 4px;

      .title {
        color: var(--block_title);
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
              color: var(--color);
              text-decoration: none;
              display: block;
              padding: 6px 10px;
              border-radius: 2px;

              &:hover {
                background-color: var(--bg_color);
                color: var(--hover_color);
              }

              .name {
                display: inline-block;
                height: 24px;
              }

              .url {
                font-size: 12px;
                background-color: var(--black_color);
                border-radius: 4px;
                display: inline-block;
                height: 24px;
                line-height: 22px;
                padding: 0 5px;
                float: right;
                color: var(--color);
              }

            }
          }
        }
      }
    }
  }
</style>
