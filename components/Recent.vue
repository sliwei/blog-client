<template>
  <div class="recent-cont">
    <div class="recent">
      <p class="title">最新文章</p>
      <div class="list">
        <ul>
          <li v-for="(item, i) in list" :key="i">
            <nuxt-link to="/detail/ncig">
              <div class="img">
                <img :src="item.img" alt="">
              </div>
            </nuxt-link>
            <div class="right">
              <p class="time">{{item.create_time}}</p>
              <p class="name">
                <nuxt-link :to="`/detail/${item.code}`">{{item.title}}</nuxt-link>
              </p>
            </div>
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
        return this.$store.state.recent.list
      },
    },
  }
</script>
<style lang="less" scoped>

  .recent-cont {
    width: 100%;
    position: static;
    background-color: var(--black_color);
    border-radius: 4px;
    box-shadow: var(--box_shadow);
    margin-bottom: 20px;

    .recent {
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
            display: flex;
            margin-bottom: 10px;
            margin-top: 20px;
            &:first-child {
              margin-top: 0;
            }
            &:last-child {
              margin-bottom: 0;
            }
            a {
              margin-right: 15px;
              flex-basis: auto;
              flex-grow: 0;
              flex-shrink: 0;
              .img {
                width: 64px;
                height: 64px;
                img {
                  object-fit: cover;
                  width: 100%;
                  height: 100%;
                }
              }
            }
            .right {
              flex-basis: auto;
              flex-grow: 1;
              flex-shrink: 1;
              text-align: left;
              .time {
                font-size: 12px;
                color: var(--block_title);
                margin-bottom: 5px;
                margin-top: 5px;
              }
              .name {
                font-size: 14px;
                a {
                  text-decoration: none;
                  color: var(--color);
                  transition: all .3s;
                  &:hover {
                    color: var(--hover_color);
                  }
                }
              }
            }
          }
        }

      }
    }
  }
</style>
