<template>
  <ul>
    <li v-for="(item, i) in list" :key="i">
      <div class="item">
        <div class="head">
          <div class="head_img">
            <img
              :src="(item.c_user && item.c_user.head_img) || 'http://oss.bstu.cn/images/20190401/bfe66y04xh14bcnn.png'"
              alt="">
          </div>
        </div>
        <div class="main">
          <div class="info">
            <div class="data">
              <p class="name">{{item.c_user && item.c_user.name}}<span v-if="item.comment"> 回复 {{item.comment.c_user.name}}</span></p>
              <p class="time">{{getTime(item.create_time)}}</p>
            </div>
            <div class="reply">
              <a href="javascript:;" @click="reply(item)">回复</a>
            </div>
          </div>
          <div class="cont">
            <div class="markdown-body" v-html="getHtml(item.cont)"></div>
          </div>
        </div>
      </div>
      <div :class="{more: !item.f_id}" v-if="item.children">
        <item :list="item.children">
        </item>
      </div>
    </li>
  </ul>
</template>
<script>
  import Tool from '~/assets/Tool'
  import markdownIt from "markdown-it"
  import markdownTtHighlightjs from "markdown-it-highlightjs"
  import markdownItMark from "markdown-it-mark"
  import markdownItKbd from "markdown-it-kbd"
  import markdownItTocAndAnchor from "markdown-it-toc-and-anchor"
  import markdownItEmoji from "markdown-it-emoji"

  export default {
    name: 'item',
    props: ['list'],
    methods: {
      getTime(time) {
        return Tool.formatDate(time, 'YYYY-MM-DD hh:mm');
      },

      // 回复
      reply(dat) {
        this.$store.commit('reply/change', dat)
      },

      getHtml(dat) {
        return dat
        return markdownIt({
          html: true,
          linkify: true,
          typographer: true,
          breaks: true,
        })
          .use(markdownTtHighlightjs)
          .use(markdownItEmoji)
          .use(markdownItMark)
          .use(markdownItKbd)
          .render(dat);
      }
    },
  }
</script>
<style lang="less" scoped>
  ul {
    padding: 0 0 10px 0;
    margin: 0;

    li {
      /*margin-bottom: 60px;*/
      list-style: none;

      .item {
        margin-bottom: 20px;
        display: flex;

        .head {
          width: 40px;
          height: 40px;

          img {
            width: 40px;
            height: 40px;
            border-radius: 20px;
          }
        }

        .main {
          flex: 1;
          margin-left: 10px;
          overflow: auto;

          .info {
            &:after {
              content: '';
              display: block;
              clear: both;
            }

            .data {
              float: left;

              .name {
                font-size: 16px;
                font-family: Montserrat-Regular;
                font-weight: 400;
                color: rgba(51, 51, 51, 1);
              }

              .time {
                font-size: 12px;
                font-family: OpenSans;
                font-weight: 400;
                color: rgba(153, 153, 153, 1);
              }
            }

            .reply {
              float: right;

              a {
                text-decoration: none;
                font-size: 12px;
                font-family: Montserrat-Medium;
                font-weight: 500;
                color: #666666;
                transition: all .3s;

                &:hover {
                  color: rgba(53, 204, 98, 1);
                }
              }
            }
          }

          .cont {
            margin-top: 10px;
          }
        }
      }

      .more {
        margin-left: 50px;
      }
    }
  }
</style>
