<template>
  <awei-tags></awei-tags>
</template>

<script>
  import Tags from '~/components/Tags.vue'

  export default {
    transition: '',
    components: {
      'awei-tags': Tags,
    },
    head() {
      return {
        title: `标签 | 布什兔 | bstu.cn`,
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
  .tags {
    background-color: #FFFFFF;
    border-radius: 4px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, .05), 0 0 1px rgba(0, 0, 0, .1);
    padding: 20px;

    .title {
      color: #7a7a7a;
      font-size: 12px;
      text-align: left;
      margin-bottom: 10px;
    }
  }
</style>
