<template>
  <div class="archives">
    <p class="title">归档</p>
    <div class="year_item" v-for="item in list">
      <p class="year">{{item.year}}</p>
      <ul>
        <li v-for="yearItem in item.list">
          <span class="date">{{yearItem.date}}</span>
          <nuxt-link :to="`/detail/${yearItem.code}`">{{yearItem.title}}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    transition: '',
    async asyncData({app, route}) {
      const {data} = await app.$axios.get('/blog/client/blog/archives');

      let list = data.data;
      let year = [];
      let yearList = {};
      list.map(item => {
        let create_time = new Date(item.create_time);
        let month = create_time.getMonth() + 1;
        let dates = create_time.getDate();
        // month = month < 10 ? `0${month}` : month;
        dates = dates < 10 ? `0${dates}` : dates;
        item.date = `${month}.${dates}`;
        let n = new Date(item.create_time).getFullYear();
        let index = year.indexOf(n);
        if (index === -1) {
          year.push(n);
          yearList[year.length-1] = {};
          yearList[year.length-1].year = n;
          yearList[year.length-1].list = [];
          yearList[year.length-1].list = [...yearList[year.length-1].list, item];
        } else {
          yearList[index].list = [...yearList[index].list, item];
        }
      });

      return {list: yearList}
    },
    head() {
      return {
        title: `归档 | 布什兔 | bstu.cn`,
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
  .archives {
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
    .year_item {
      .year {
        display: inline-block;
        padding: 2px 10px;
        border-radius: 4px;
        background-color: #35CC62;
        color: white;
        margin-left: 54px;
      }
      ul {
        margin: 0;
        padding: 0;
        position: relative;
        &::after {
          content: '';
          display: block;
          position: absolute;
          top: 0;
          left: 80px;
          height: 100%;
          width: 2px;
          background-color: #999;
        }
        li {
          list-style: none;
          /*padding-left: 20px;*/
          margin: 20px 0;
          display: flex;
          align-items: flex-start;
          .date {
            line-height: 22px;
            font-size: 14px;
            color: #4a4a4a;
            display: inline-block;
            width: 60px;
            text-align: right;
            position: relative;
            &::after {
              display: block;
              content: '';
              width: 6px;
              height: 6px;
              border-radius: 3px;
              background-color: white;
              position: absolute;
              right: -24px;
              top: 8px;
              z-index: 2;
            }
            &::before {
              display: block;
              content: '';
              width: 10px;
              height: 10px;
              border-radius: 5px;
              background-color: #999;
              position: absolute;
              right: -26px;
              top: 6px;
              z-index: 1;
            }
          }

          a {
            color: #4a4a4a;
            text-decoration: none;
            margin-left: 40px;
            display: inline-block;
            width: 80%;
            transition: color .35s;
            flex: 1;
            &:hover {
              color: #35CC62;
            }
          }
        }
      }
    }
  }
</style>
