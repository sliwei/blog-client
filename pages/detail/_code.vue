<template>
  <div>
    <div class="cont">
      <div class="index animated faster pulse">
        <div class="first">
          <img :src="data.img" alt="">
        </div>
        <div class="content">
          <div class="title">
            <h1>{{data.title}}</h1>
          </div>
          <div class="time">
            <span>发表于 - <span class="txt">{{getTime(data.time)}}</span></span>
          </div>
          <!--<div v-html="data.content" class="markdown-body"></div>-->
          <div v-html="html" class="markdown-body"></div>
        </div>
      </div>

      <div class="neighbor animated faster pulse">
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

      <!--评论-->
      <awei-evaluate class="animated faster pulse" :b_id="data.id" :evaluate="evaluate"/>
      <!--评论-->

      <!--留言-->
      <awei-comment class="animated faster pulse" :b_id="data.id"/>
      <!--留言-->

    </div>
  </div>
</template>

<script>
  import Evaluate from '~/components/Evaluate.vue'
  import Comment from '~/components/Comment.vue'
  import Tool from '~/assets/Tool'
  import markdownIt from "markdown-it"
  import markdownTtHighlightjs from "markdown-it-highlightjs"
  import markdownItMark from "markdown-it-mark"
  import markdownItKbd from "markdown-it-kbd"
  import markdownItTocAndAnchor from "markdown-it-toc-and-anchor"

  export default {
    transition: 'bounce',
    components: {
      'awei-evaluate': Evaluate,
      'awei-comment': Comment,
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
      });

      const neighbor = await app.$axios.get(`/blog/client/blog/neighbor?id=${data.data.id}`)

      let tocArray = [];
      let tocHtml = '';

      let html = markdownIt({
        html: true,
        linkify: true,
        typographer: true,
        breaks: true,
      })
        .use(markdownTtHighlightjs)
        .use(markdownItMark)
        .use(markdownItKbd)
        .use(markdownItTocAndAnchor, {
          anchorLinkSymbol: '#',
          anchorLinkPrefix: 'nav-from',
          slugify : string => '',
          tocCallback: function (tocMarkdown, array, html) {
            tocArray = array;
            tocHtml = html;
          }
        })
        .render(data.data.markdown);

      return {data: data.data, html: html, tocArray: tocArray, tocHtml: tocHtml, evaluate: news, neighbor: neighbor.data.data}
    },
    methods: {
      init() {
        this.$store.commit('nav/setMenu', {
          tocArray: this.tocArray,
          tocHtml: this.tocHtml,
        });

        setTimeout(() => {
          $('.hljs').niceScroll({
            cursorcolor: "#35CC62",//#CC0071 光标颜色
            cursoropacitymax: 1, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
            // touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备
            cursorwidth: "5px", //像素光标的宽度
            cursorborder: "0", // 	游标边框css定义
            cursorborderradius: "5px",//以像素为光标边界半径
            // autohidemode: false //是否隐藏滚动条
          });
        }, 500)
      },
      getTime(time) {
        return Tool.formatDate(time, 'YY年MM月DD日hh时mm分')
      }
    },
    mounted() {
      this.init();
    },
    head() {
      return {
        title: `${this.data.title} | 布什兔 | bstu.cn`,
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

  .cont {

    .index {
      .first {
        &:after {
          content: '';
          display: block;
          clear: both;
        }

        img {
          float: left;
          max-width: 100%;
          width: 100%;
          max-height: 100%;
          height: 100%;
          border-radius: 4px 4px 0 0;
        }
      }

      background-color: #ffffff;
      border-radius: 4px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, .05), 0 0 1px rgba(0, 0, 0, .1);
      margin-bottom: 20px;

      .time {
        color: #666666;
        padding-bottom: 5px;
        border-bottom: 1px dashed #35CC62;
        margin-bottom: 20px;
        font-size: 12px;
        text-align: right;

        .txt {
          color: #35CC62;
        }
      }

      .content {
        padding: 20px;

        .title {
          h1 {
            color: #333333;
          }
        }

      }
    }

    .nav {
      display: none;
      width: 280px;
    }
  }


  .neighbor {
    display: flex;
    /*width: 1028px;*/
    /*width: 680px;*/
    position: relative;

    /*background-color: #ffffff;*/
    /*border-radius: 4px;*/
    /*box-shadow: 0 4px 10px rgba(0, 0, 0, .05), 0 0 1px rgba(0, 0, 0, .1);*/
    margin-bottom: 20px;

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
