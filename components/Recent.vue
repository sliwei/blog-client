<template>
  <div class="recent-cont">
    <div class="recent">
      <p class="title">最新文章</p>
      <div class="list">
        <ul>
          <li v-for="i in 5">
            <nuxt-link to="/detail/ncig">
              <div class="img">
                <img src="http://oss.bstu.cn/images/20190406/r7oaut9b20jxnzq0.png" alt="">
              </div>
            </nuxt-link>
            <div class="right">
              <p class="time">2019/02/12</p>
              <p class="name">
                <nuxt-link to="/detail/ncig">
                  初探JavaScript正则表达式
                </nuxt-link>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="less" scoped>

  .recent-cont {
    width: 100%;
    position: static;
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, .05), 0 0 1px rgba(0, 0, 0, .1);
    margin-bottom: 20px;

    .recent {
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
                color: #7a7a7a;
                margin-bottom: 5px;
                margin-top: 5px;
              }
              .name {
                font-size: 14px;
                a {
                  text-decoration: none;
                  color: #242424;
                  transition: all .3s;
                  &:hover {
                    color: #35cc62;
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
