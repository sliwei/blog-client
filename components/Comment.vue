<template>
  <div class="comment">
    <div class="title">
      <span>留下评论</span>
    </div>
    <div class="forms">
      <div class="item">
        <p>昵称</p>
        <div class="sub">
          <input v-model="name" v-validate="'required'" name="昵称" type="text" placeholder="请输入昵称">
          <span>{{ errors.first('昵称') }}</span>
        </div>
      </div>
      <div class="item">
        <p class="email">邮箱</p>
        <div class="sub">
          <input v-model="mail" v-validate="'email'" name="邮箱" type="text" placeholder="请输入邮箱地址">
          <span>{{ errors.first('邮箱') }}</span>
        </div>
      </div>
      <div class="item">
        <p>站点</p>
        <div class="sub">
          <input v-model="website" name="站点" type="text" placeholder="请输入站点">
        </div>
      </div>
    </div>
    <div class="forms">
      <div class="item">
        <p>内容</p>
        <div class="sub">
          <textarea v-model="cont" v-validate="'required'" name="内容" type="text" placeholder="请输入内容"></textarea>
          <div class="reply" v-if="reply.c_user">
            <span>@</span>
            <img :src="reply.c_user.head_img" alt="">
            <span>{{reply.c_user.name}}</span>
            <i @click="empty" class="iconfont a-blog-close"></i>
          </div>
          <span>{{ errors.first('内容') }}</span>
        </div>
      </div>
    </div>
    <div class="btn">
      <button @click="sub">提交</button>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['b_id'],
    data() {
      return {
        // f_id: '',
        name: '',
        website: '',
        mail: '',
        cont: '',
      }
    },
    computed: {
      reply() {
        return this.$store.state.reply.reply
      }
    },
    methods: {
      sub() {
        this.$validator.validateAll().then((result) => {
          // console.log(this.$validator.va);
          if (result) {
            let dat = {
              b_id: this.b_id,
              f_id: this.reply.id || '',
              name: this.name,
              website: this.website,
              mail: this.mail,
              cont: this.cont,
            };
            this.$axios.post('/blog/manage/comment/evaluate', dat).then(res => {
              // console.log(res);
              if (res.data.code === 200) {
                this.name = '';
                this.website = '';
                this.mail = '';
                this.cont = '';
                this.$validator.reset();
                this.$message('评论成功,审核通过后方可显示', 'success');
              } else {
                this.$message(res.data.message, 'danger');
              }
            })
          }
        })
      },

      // 清空
      empty() {
        this.$store.commit('reply/change', {})
      },
    }
  }
</script>
<style lang="less" scoped>

  @media only screen and (max-width: 580px) {
    .comment {
      .forms {
        display: initial !important;
        .item {
          margin-right: 0 !important;
          margin-bottom: 20px;
        }
      }
    }
  }

  .comment {
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, .05), 0 0 1px rgba(0, 0, 0, .1);
    padding: 20px;
    margin-bottom: 20px;

    .title {
      margin: 0 0 40px 0;

      span {
        font-size: 28px;
        font-family: Montserrat-Regular;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        line-height: 46px;
      }
    }

    .forms {
      display: flex;
      margin-bottom: 30px;

      .item {
        flex: 1;
        margin-right: 32px;

        &:last-child {
          margin-right: 0;
        }

        p {
          font-size: 14px;
          font-family: Montserrat-Medium;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
          margin: 0 0 20px 0;

          .txt {
            color: #999999;
          }

          &.email {
            position: relative;

            &:after {
              content: '您的邮箱将不会泄露';
              display: block;
              position: absolute;
              top: 18px;
              left: 0;
              font-size: 12px;
              color: #a1a1a1;
            }
          }
        }

        .sub {
          position: relative;

          .reply {
            display: inline-block;
            padding: 5px 30px 5px 10px;
            background: #f1f1f1;
            border-radius: 16px;
            color: #35cc62;
            position: relative;
            img {
              border-radius: 10px;
              width: 20px;
              vertical-align: middle;
            }
            span {
              vertical-align: middle;
            }
            i {
              position: absolute;
              right: 10px;
              top: 10px;
              font-size: 14px;
              color: #d1d1d1;
              vertical-align: middle;
              cursor: pointer;
              transition: all .3s;
              &:hover {
                color: #e60012;
              }
            }
          }

          input {
            color: #333333;
            width: 100%;
            height: 48px;
            border: 2px solid rgba(0, 0, 0, .1);
            border-radius: 4px;
            text-indent: 10px;
            font-size: 16px;
            transition: all .35s;

            &:focus {
              outline: none;
              border: 2px solid #35CC62;
              box-shadow: 0 0 2px #49fb7e;
            }
          }

          textarea {
            color: #333333;
            padding: 5px;
            width: 100%;
            min-height: 128px;
            border: 2px solid rgba(0, 0, 0, .1);
            border-radius: 4px;
            font-size: 16px;
            resize: vertical;
            transition: all .35s;
            font-family: Arial;

            &:focus {
              outline: none;
              border: 2px solid #35CC62;
              box-shadow: 0 0 2px #49fb7e;
            }
          }

          >span {
            position: absolute;
            display: block;
            margin-top: 4px;
            font-size: 14px;
            color: #e60012;
          }
        }
      }
    }

    .btn {
      text-align: center;

      button {
        cursor: pointer;
        width: 202px;
        height: 48px;
        line-height: 48px;
        background: rgba(53, 204, 98, 1);
        border-radius: 4px;
        text-align: center;
        font-size: 16px;
        font-family: Montserrat-Medium;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        border: 0;
        outline: none;
      }
    }
  }

</style>
