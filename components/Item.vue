<template>
  <ul>
    <li v-for="(item, i) in list" :key="i">
      <div class="item">
        <div class="head">
          <div class="head_img">
            <img
              :src="item.c_user.head_img  || 'http://bstu.oss-cn-shenzhen.aliyuncs.com/9.jpg?x-oss-process=style/bstu.cn'"
              alt="">
          </div>
        </div>
        <div class="main">
          <div class="info">
            <div class="data">
              <p class="name">{{item.c_user.name}}<span v-if="item.comment"> 回复 {{item.comment.c_user.name}}</span></p>
              <p class="time">{{getTime(item.create_time)}}</p>
            </div>
            <div class="reply">
              <a href="">回复</a>
            </div>
          </div>
          <div class="cont">
            <p>{{item.cont}}</p>
          </div>
        </div>
      </div>
      <div :class="{more: !item.f_id}" v-if="item.children">
        <item v-for="(item, index) in list"
              :key="index"
              :list="item.children">
        </item>
      </div>
    </li>
  </ul>
</template>
<script>
  import Tool from '~/assets/Tool'

  export default {
    name: 'item',
    props: ['list'],
    methods: {
      getTime(time) {
        return Tool.formatDate(time, 'YYYY-MM-DD hh:mm');
      },
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
                font-size: 14px;
                font-family: Montserrat-Medium;
                font-weight: 500;
                color: rgba(51, 51, 51, 1);

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
