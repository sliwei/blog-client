<template>
  <div class="index">
    <div class="search">
      <div class="keyword animated faster pulse" v-if="parameter.keyword">
        关键字：<a href="javascript:;">{{parameter.keyword}}</a> 得出以下结果
      </div>

      <div class="item animated faster pulse" v-for="(item, i) in users.list" :key="i">
        <div class="time">
          <div class="day">{{getDay(item.create_time)}}</div>
          <div class="year">{{getYear(item.create_time)}}</div>
        </div>
        <div class="txt">
          <div class="title">
            <nuxt-link :to="`/detail/${item.code}`">{{item.title}}</nuxt-link>
          </div>
          <div class="info">
            <i class="iconfont a-blog-date"></i>
            <span>{{getTime(item.create_time)}}</span>
            <i class="iconfont a-blog-address"></i>
            <span>未知 {{item.user_name}}</span>
          </div>
        </div>
      </div>


    </div>
    <awei-page url="/search" :pageCount="users.pageCount" :pageIndex="users.pageIndex" :parameter="parameter" v-if="users.pageCount"/>
  </div>
</template>

<script>
  import Page from '~/components/Page.vue'
  import Tool from '~/assets/Tool'

  export default {
    transition: '',
    components: {
      'awei-page': Page,
    },
    async asyncData({app, route, error}) {
      let keyword = route.query.keyword || '';
      // keyword = keyword ? encodeURIComponent(keyword) : '';
      // console.log(keyword);
      const {data} = await app.$axios.get(`/blog/client/blog/search?keyword=${encodeURIComponent(keyword)}&pageIndex=${route.query.pageIndex || 1}&pageSize=8`);
      if (!data.data) {
        error({message: '你访问的页面不存在', statusCode: 404});
        return;
      }
      let parameter = {
        keyword: keyword
      };
      return {users: data.data, parameter: parameter}
    },
    methods: {
      getDay(time) {
        // let nTime = new Date(time);
        // let day = nTime.getDate();
        // day = day < 10 ? `0${day}` : day;
        // return day;
        return Tool.formatDate(time, 'DD');
      },
      getYear(time) {
        // let nTime = new Date(time);
        // let year = nTime.getFullYear();
        // let mon = nTime.getMonth() + 1;
        // mon = mon < 10 ? `0${mon}` : mon;
        // return `${year}/${mon}`;
        return Tool.formatDate(time, 'YYYY/MM');

      },
      getTime(time) {
        // let nTime = new Date(time);
        // let year = nTime.getFullYear();
        // let mon = nTime.getMonth() + 1;
        // mon = mon < 10 ? `0${mon}` : mon;
        // let day = nTime.getDate();
        // day = day < 10 ? `0${day}` : day;
        // return `${year}/${mon}/${day}`;
        return Tool.formatDate(time, 'hh:mm');
      }
    },
    head() {
      return {
        title: `${this.parameter.keyword} | 布什兔 | bstu.cn`,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: '李维(awei,sliwei)个人博客，是一个记录博主学习和成长的自媒体博客。关注于web前端技术和web全栈技术的学习研究。'
          },
          {
            hid: 'keywords',
            name: 'keywords',
            content: '李维,awei,sliwei,互联网,自媒体,李维博客,新鲜科技,科技博客,Bstu,独立博客,个人博客,原创博客,前端,前端开发,全栈,全栈开发,react,reactjs,next,nextjs,nuxt,nuxtjs,vue,vuejs'
          },
          {hid: 'author', content: 'awei'}
        ]
      }
    },
  }
</script>
<style lang="less" scoped>
  * {
    transition: all .3s;
  }

  .index {
    /*width: 1028px;*/
    margin: 0 auto;

    .keyword {
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 20px;
      color: #666666;
      background-color: #ffffff;
      border-radius: 4px;
      box-shadow: var(--box_shadow);
      padding: 20px;
    }

    .item {
      width: 100%;
      padding: 0;
      /*background: rgba(249, 250, 252, 1);*/
      margin-bottom: 20px;
      display: flex;

      background-color: #ffffff;
      border-radius: 4px;
      box-shadow: var(--box_shadow);

      &:hover {
        /*box-shadow: 0 0 0 10px #f1f1f1;*/
      }

      .time {
        border-radius: 4px 0 0 4px;
        width: 125px;
        min-height: 125px;
        background: rgba(53, 204, 98, 1);
        padding: 20px 0;
        text-align: center;
        color: #ffffff;

        .day {
          font-size: 50px;
          /*font-family: Montserrat-Regular;*/
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
        }

        .year {
          font-size: 14px;
          /*font-family: Montserrat-Medium;*/
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          opacity: 0.8;
        }
      }

      .txt {
        padding: 20px;
        flex: 1;

        .info {
          margin-top: 10px;
          margin-left: -8px;

          span {
            font-size: 14px;
            /*font-family: Montserrat-Medium;*/
            font-weight: 500;
            color: rgba(153, 153, 153, 1);
            line-height: 23px;
            vertical-align: middle;
          }

          i {
            font-size: 30px;
            vertical-align: middle;
          }
        }

        .title {
          a {
            font-size: 18px;
            /*font-family: Montserrat-Regular;*/
            font-weight: bold;
            color: #666666;
            line-height: 32px;
            text-decoration: none;

            &:hover {
              color: var(--hover_color);
            }
          }
        }

        .more {
          display: inline-block;
          margin-top: 20px;

          &:hover {
            a, i {
              color: var(--hover_color);
            }
          }

          a {
            font-size: 14px;
            /*font-family: Montserrat-Medium;*/
            font-weight: 500;
            line-height: 14px;
            color: var(--color);
            vertical-align: middle;
          }

          i {
            color: var(--color);
            font-size: 20px;
            vertical-align: middle;
          }
        }
      }
    }
  }


</style>
