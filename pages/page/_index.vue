<template>
	<div class="index">
		<div class="cont">
			<!--<div class="lefts"></div>-->
			<div class="left">
				<div class="list">
					<div class="item" v-for="(item, i) in users.list" :key="i">
						<transition name="layout">
							<div>
								<div class="img">
									<nuxt-link :to="`/detail/${item.code}`">
										<img :src="item.img || 'https://source.unsplash.com/random/442x294'" alt="">
									</nuxt-link>
								</div>
								<div class="txt">
									<div class="info">
										<i class="iconfont a-blog-date"></i>
										<span>{{getTime(item.create_time)}}</span>
										<i class="iconfont a-blog-address"></i>
										<span>未知 {{item.user_name}}</span>
									</div>
									<div class="title">
										<nuxt-link :to="`/detail/${item.code}`">{{item.title}}</nuxt-link>
									</div>
									<div class="more">
										<nuxt-link :to="`/detail/${item.code}`">阅读更多</nuxt-link>
										<i class="iconfont a-blog-right"></i>
									</div>
								</div>
							</div>
						</transition>

					</div>

				</div>
				<awei-page url="/page/" :pageCount="users.pageCount" :pageIndex="users.pageIndex"/>
			</div>

			<!--<div class="rights"></div>-->
		</div>
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
		data() {
			return {
				searchVal: '',
			}
		},
		async asyncData({app, route}) {
			const {data} = await app.$axios.get(`/blog/client/blog/list?pageIndex=${route.params.index || 1}&pageSize=8`);
			return {users: data.data}
		},
		methods: {
			getTime(time) {
				return Tool.formatDate(time, 'YYYY-MM-DD hh:mm');
			},
			search() {
				this.$router.push({
					path: '/search',
					query: {
						keyword: this.searchVal
					},
				})
			},
		},
		head() {
			return {
				title: '先天之智，后天修为 | 布什兔 | bstu.cn',
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
		/*width: 1240px;*/
		/*width: 960px;*/
		margin: 0 auto;

		.cont {
			display: flex;

			.lefts {
				width: 118px;
			}

			.left {
				width: 100%;
				/*width: 680px;*/

				.list {
					/*&:after {*/
					/*content: '';*/
					/*display: block;*/
					/*clear: both;*/
					/*}*/

					.item {
						width: 100%;
						/*padding: 0 0 20px 0;*/
						/*float: left;*/
						/*margin-right: 20px;*/
						margin-bottom: 20px;
						/*background-color: #f9f9f9;*/
						/*padding: 20px 10px;*/

						background-color: var(--black_color);
						border-radius: 4px;
						box-shadow: var(--box_shadow);

						&:hover {
							/*box-shadow: 0 0 0 10px #f1f1f1;*/
						}

						&:nth-child(2n) {
							margin-right: 0;
						}

						.img {
							margin: 0 auto;
							overflow: hidden;
							text-align: center;

							img {
								width: 100%;
								/*height: 120px;*/
							}
						}

						.txt {
							padding: 0px 20px 20px;

							.info {
								margin-top: 20px;
								margin-left: -8px;

								span {
									font-size: 14px;
									font-weight: 500;
									color: var(--color);
									line-height: 23px;
									vertical-align: middle;
								}

								i {
									font-size: 30px;
									vertical-align: middle;
								}
							}

							.title {
								margin-top: 10px;

								a {
									font-size: 20px;
									font-weight: 400;
									color: var(--color);
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

								background-color: var(--bg_color);
								border-color: transparent;
								color: var(--color);
								padding: 5px 10px;

								&:hover {
									a, i {
										color: var(--hover_color);
									}
								}

								a {
									font-size: 12px;
									text-decoration: none;
									font-weight: 500;
									color: var(--base_color);
									vertical-align: middle;
								}

								i {
									color: #999999;
									font-size: 20px;
									vertical-align: middle;
								}
							}
						}
					}
				}
			}

			.right {
				width: 280px;
				padding: 0 20px;

				.search {
					position: relative;

					input {
						width: 240px;
						height: 48px;
						background: rgba(255, 255, 255, .1);
						border: 1px solid rgba(0, 0, 0, .1);
						border-radius: 4px;
						text-indent: 10px;
						font-size: 16px;
						color: #333333;
						transition: all .35s;

						&:focus {
							outline: none;
							border: 2px solid var(--hover_color);
							box-shadow: 0 0 2px #49fb7e;
						}
					}

					i {
						cursor: pointer;
						position: absolute;
						top: 1px;
						right: 8px;
						font-size: 42px;
						color: #999;

						&:hover {
							color: var(--hover_color) !important;
						}
					}
				}
			}

			.rights {
				width: 118px;
			}
		}
	}
</style>
