<template>
  <transition name="bounce">
    <div class="__nuxt-error-page">
      <div class="error">
        <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="#DBE1EC" viewBox="0 0 48 48">
          <path
            d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"></path>
        </svg>
        <div class="title">你访问的页面不存在</div>
        <p class="description">
          <nuxt-link to="/" class="error-link nuxt-link-active">回到首页</nuxt-link>
        </p>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {}
</script>

<style lang="less" scoped>
  .__nuxt-error-page {
    background: #ffffff;
    color: #47494e;
    text-align: center;
    display: flex;
    justify-content: center;
    border-radius: 4px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, .05), 0 0 1px rgba(0, 0, 0, .1);
    padding: 20px;

    .error {
      max-width: 450px;

      .title {
        font-size: 1.5rem;
        margin-top: 15px;
        color: #47494e;
        margin-bottom: 8px;
      }

      .description {
        color: #7f828b;
        line-height: 21px;
        margin-bottom: 10px;

        a {
          color: #7f828b;
          text-decoration: none;

          &:hover {
            color: #35CC62;
          }
        }
      }
    }
  }
</style>
