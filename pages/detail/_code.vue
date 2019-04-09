<template>
  <div>
    <div class="cont">
      <div>
        <div class="index">
          <div>
            <h1>{{data.title}}</h1>
          </div>
          <br>
          <div class="time">
            <span>{{getTime(data.time)}}</span>
          </div>

          <div class="first">
            <img :src="data.img" alt="">
          </div>

          <div v-html="data.content" class="markdown-body"></div>
        </div>
        <div class="neighbor">
          <div class="left" v-if="neighbor.front.code">
            <div class="txt">
              <i class="iconfont a-blog-left"></i>
              <span>上一篇</span>
            </div>
            <div>
              <nuxt-link :to="`/detail/${neighbor.front.code}`">{{neighbor.front.title}}</nuxt-link>
            </div>
          </div>
          <div class="right" v-if="neighbor.after.code">
            <div class="txt">
              <span>下一篇</span>
              <i class="iconfont a-blog-right"></i>
            </div>
            <div>
              <nuxt-link :to="`/detail/${neighbor.after.code}`">{{neighbor.after.title}}</nuxt-link>
            </div>
          </div>
          <i class="line" v-if="neighbor.after.code && neighbor.front.code"></i>
        </div>
        <awei-evaluate :b_id="data.id" :evaluate="evaluate"/>
        <awei-comment :b_id="data.id"/>
      </div>
      <div class="nav">
        <awei-nav/>
      </div>
    </div>
    <awei-back-top/>
  </div>
</template>

<script>
  import Evaluate from '~/components/Evaluate.vue'
  import Comment from '~/components/Comment.vue'
  import Nav from '~/components/Nav.vue'
  import BackTop from '~/components/BackTop.vue'
  import Tool from '~/assets/Tool'

  export default {
    components: {
      'awei-evaluate': Evaluate,
      'awei-comment': Comment,
      'awei-nav': Nav,
      'awei-back-top': BackTop
    },
    async asyncData({app, route, error}) {
      const {data} = await app.$axios.get(`/blog/client/blog/detail?code=${route.params.code}`)
      if (!data.data) {
        error({message: '你访问的页面不存在', statusCode: 404})
        return;
      }
      const evaluate = await app.$axios.get(`/blog/manage/comment/evaluate_list?code=${route.params.code}`)
      let evaluateList = []
      evaluateList = evaluate.data.data || []
      evaluateList.map(item => {
        if (item.f_id) {
          evaluateList.map(list => {
            if (list.id === item.f_id) {
              !list.children && (list.children = [])
              list.children.push(item)
            }
          })
        }
      })
      let news = []
      evaluateList.map(item => {
        if (!item.f_id) {
          news.push(item)
        }
      })
      const neighbor = await app.$axios.get(`/blog/client/blog/neighbor?id=${data.data.id}`)
      return {data: data.data, evaluate: news, neighbor: neighbor.data.data}
    },
    methods: {
      getTime(time) {
        return Tool.formatDate(time, 'YYYY-MM-DD hh:mm')
      }
    },
    head() {
      return {
        title: `${this.data.title} | 布什兔 | bstu.cn`,
        meta: [
          {hid: 'description', name: 'description', content: ``},
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

  .cont {
    /*width: 1240px;*/
    width: 960px;
    margin: 0 auto;
    display: flex;

    .index {
      /*width: 1028px;*/
      width: 680px;
      padding: 50px 0;

      .time {
        color: #666666;
        padding-bottom: 10px;
        border-bottom: 2px solid #eaecef;
        margin-bottom: 20px;
      }

      .first {
        margin-bottom: 20px;
        img {
          max-width: 100%;
          border: 10px solid #f1f1f1;
        }
      }
    }

    .nav {
      width: 280px;
    }
  }


  .neighbor {
    margin: 0 auto;
    display: flex;
    /*width: 1028px;*/
    width: 680px;
    background: #efefef;
    position: relative;

    .left {
      flex: 1;
      padding: 40px;
      text-align: left;
    }

    .right {
      flex: 1;
      padding: 40px;
      text-align: right;
    }

    .txt {
      span {
        font-size: 14px;
        vertical-align: middle;
        color: #666;
      }

      i {
        font-size: 26px;
        vertical-align: middle;
        color: #666;
      }
    }

    a {
      text-decoration: none;
      display: block;
      margin: 10px 0 0 0;
      font-weight: bold;
      font-size: 14px;
      font-family: Montserrat-Regular;
      color: rgba(51, 51, 51, 1);
      line-height: 18px;
      color: #333333;

      &:hover {
        color: #35CC62;
      }
    }

    .line {
      display: block;
      content: '';
      position: absolute;
      right: 50%;
      top: 40px;
      width: 1px;
      height: calc(100% - 80px);
      background: rgba(0, 0, 0, 1);
      opacity: 0.1;
    }
  }
</style>
