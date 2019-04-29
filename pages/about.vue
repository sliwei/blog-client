<template>
  <div>
    <div class="about ">
      <div class="markdown-body" v-html="html"></div>
    </div>

    <!--评论-->
    <awei-evaluate class="animated faster pulse" :b_id="data.id" :evaluate="evaluate"/>
    <!--评论-->

    <!--留言-->
    <awei-comment class="animated faster pulse" :b_id="data.id" :type="1"/>
    <!--留言-->

  </div>
</template>

<script>
  import Evaluate from '~/components/Evaluate.vue'
  import Comment from '~/components/Comment.vue'
  import markdownIt from "markdown-it"
  import markdownTtHighlightjs from "markdown-it-highlightjs"
  import markdownItEmoji from "markdown-it-emoji"
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
      const {data} = await app.$axios.get(`/blog/client/blog/detail?code=about&type=1`)
      if (!data.data) {
        error({message: '你访问的页面不存在', statusCode: 404})
        return;
      }
      const evaluate = await app.$axios.get(`/blog/manage/comment/evaluate_list?code=`)
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

      let html = markdownIt({
        html: true,
        linkify: true,
        typographer: true,
        breaks: true,
      })
        .use(markdownTtHighlightjs)
        .use(markdownItEmoji)
        .use(markdownItMark)
        .use(markdownItKbd)
        .render(data.data.markdown);

      return {data: data.data, html: html, evaluate: news}
    },
    methods: {
      init() {
        this.$store.commit('evaluate/updateCode', '');

        setTimeout(() => {
          if ($('body').width() > 769) {
            $('.nicescroll-rails').remove();
            $('.hljs, .markdown-body table').niceScroll({
              cursorcolor: "#35CC62",//#CC0071 光标颜色
              cursoropacitymax: 1, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
              touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备
              cursorwidth: "5px", //像素光标的宽度
              cursorborder: "0", // 	游标边框css定义
              cursorborderradius: "5px",//以像素为光标边界半径
              // autohidemode: false //是否隐藏滚动条
            });
          }
        }, 500)
      },
    },
    mounted() {
      this.init();
    },
    head() {
      return {
        title: `关于 | 布什兔 | bstu.cn`,
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
  .about {
    background-color: #FFFFFF;
    border-radius: 4px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, .05), 0 0 1px rgba(0, 0, 0, .1);
    padding: 20px;
    margin-bottom: 20px;
    text-align: center;
  }
</style>
