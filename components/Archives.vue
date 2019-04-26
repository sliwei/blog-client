<template>
  <div class="archives-cont">
    <div class="archives">
      <p class="title">归档</p>

      <div class="list">
        <ul>
          <li v-for="i in 4">
            <a target="_blank" href="https://bstu.cn">
              <span class="name">2018年10月</span>
              <span class="url">12</span>
            </a>
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

  .archives-cont {
    width: 100%;
    position: static;
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, .05), 0 0 1px rgba(0, 0, 0, .1);
    margin-bottom: 20px;

    .archives {
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
