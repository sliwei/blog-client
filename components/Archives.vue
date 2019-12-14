<template>
  <div class="archives-cont">
    <div class="archives">
      <p class="title">归档</p>
      <div class="list">
        <ul>
          <li v-for="(item, i) in list" :key="i">
            <a target="_blank" href="https://bstu.cn">
              <span class="name">{{item.month}}</span>
              <span class="url">{{item.num}}</span>
            </a>
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
        let list = this.$store.state.archives.list;
        let month = [];
        let monthList = {};
        list.map(item => {
          let create_time = new Date(item.create_time);
          let months = create_time.getMonth() + 1;
          let dates = create_time.getDate();
          months = months < 10 ? `0${months}` : months;
          dates = dates < 10 ? `0${dates}` : dates;
          item.date = `${month}.${dates}`;
          let n = `${new Date(item.create_time).getFullYear()}年${months}`;
          let index = month.indexOf(n);
          if (index === -1) {
            month.push(n);
            monthList[month.length-1] = {};
            monthList[month.length-1].month = n;
            monthList[month.length-1].num = 0;
            monthList[month.length-1].num += 1;
          } else {
            monthList[month.length-1].num += 1;
          }
        });
        return monthList;
      },
    },
    // async asyncData({app, route}) {
    //   const {data} = await app.$axios.get('/blog/client/blog/archives');
    //   console.log(data);
    //   let list = data.data;
    //   let month = [];
    //   let monthList = {};
    //   list.map(item => {
    //     let create_time = new Date(item.create_time);
    //     let months = create_time.getMonth() + 1;
    //     let dates = create_time.getDate();
    //     months = months < 10 ? `0${months}` : months;
    //     dates = dates < 10 ? `0${dates}` : dates;
    //     item.date = `${month}.${dates}`;
    //     let n = `${new Date(item.create_time).getFullYear()}年${months}`;
    //     let index = month.indexOf(n);
    //     if (index === -1) {
    //       month.push(n);
    //       monthList[month.length-1] = {};
    //       monthList[month.length-1].month = n;
    //       monthList[month.length-1].list = [];
    //       monthList[month.length-1].list = [...monthList[month.length-1].list, item];
    //     } else {
    //       monthList[index].list = [...monthList[index].list, item];
    //     }
    //   });
    //   console.log(monthList);
    //   return {list: monthList}
    // },
  }
</script>
<style lang="less" scoped>

  .archives-cont {
    width: 100%;
    position: static;
    background-color: @black_color;
    border-radius: 4px;
    box-shadow: @box_shadow;
    margin-bottom: 20px;

    .archives {
      top: 0px;
      position: relative;
      padding: 20px;
      text-align: center;
      border-radius: 4px;

      .title {
        color: @block_title;
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
            text-align: left;

            a {
              color: #4a4a4a;
              text-decoration: none;
              display: block;
              padding: 6px 10px;
              border-radius: 2px;

              &:hover {
                background-color: #f5f5f5;
                color: #363636;
              }

              .name {
                display: inline-block;
                height: 24px;
              }

              .url {
                font-size: 12px;
                background-color: #f5f5f5;
                border-radius: 4px;
                display: inline-block;
                height: 24px;
                line-height: 22px;
                padding: 0 5px;
                float: right;

              }

            }
          }
        }
      }
    }
  }
</style>
