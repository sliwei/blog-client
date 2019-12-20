<template>
	<div class="page">

		<div class="prev">
			<nuxt-link :to="retUrl(pageIndex - 1)" v-if="pageIndex !== 1">
				<i class="iconfont a-blog-left"></i>
				<!--<span>前一页</span>-->
			</nuxt-link>
		</div>

		<nuxt-link :to="retUrl(1)" v-if="prev" :class="{active: 1 === pageIndex}">{{1}}</nuxt-link>

		<a class="ban" href="javascript:;" v-if="left">...</a>

		<nuxt-link :to="retUrl(index)" :class="{active: index === pageIndex}" v-for="(index, i) in showPage()"
		   :key="i">{{index}}</nuxt-link>

		<a class="ban" href="javascript:;" v-if="right">...</a>

		<nuxt-link :to="retUrl(pageCount)" v-if="next" :class="{active: this.pageCount === pageIndex}">{{this.pageCount}}</nuxt-link>

		<div class="next">
			<nuxt-link :to="retUrl(pageIndex + 1)" v-if="pageCount !== pageIndex">
				<!--<span>后一页</span>-->
				<i class="iconfont a-blog-right"></i>
			</nuxt-link>
		</div>

	</div>
</template>
<script>
	export default {
		props: {
			pageCount: Number, // 总条数
			pageIndex: Number, // 当前页码
			url: String, // 跳转地址
			parameter: Object, // 携带参数(对象)
			pageName: { // 页码参数名称
				type: String,
				default: 'pageIndex'
			}
		},
		data() {
			return {
				left: false,
				right: false,
				prev: false,
				next: false,
			}
		},
		methods: {
			retUrl(page) {
				let parameter = {
					[this.pageName]: page,
					...this.parameter,
				};
				return `${this.url}?${this.qs(parameter)}`
			},
			qs(obj) {
				let str = '';
				for (let key in obj) {
					str += `${key}=${obj[key]}&`;
				}
				str = str.slice(0, str.length - 1);
				return str;
			},
			showPage() {
				this.left = this.pageIndex - 3 > 1;
				this.right = this.pageIndex + 3 < this.pageCount;
				this.prev = this.pageIndex - 3 >= 1;
				this.next = this.pageIndex + 3 <= this.pageCount;
				let list = [];
				for (let i = 1; i <= this.pageCount; i++) {
					(i > this.pageIndex - 3 && i < this.pageIndex + 3) && list.push(i);
				}
				return list;
			}
		},
	}
</script>
<style lang="less" scoped>
	* {
		transition: all .3s;
	}

	.page {
		/*background-color: #ffffff;*/
		/*border-radius: 4px;*/
		/*box-shadow: var(--box_shadow);*/
		padding: 20px;
		text-align: center;

		a {
			text-align: center;
			width: 30px;
			/*font-family: Montserrat-Medium;*/
			font-weight: 500;
			color: var(--color);
			line-height: 14px;
			display: inline-block;
			margin: 10px 5px;
			position: relative;
			text-decoration: none;

			&.active {
				color: var(--hover_color);
				font-weight: bold;

				&:after {
					content: '';
					display: block;
					width: 30px;
					height: 2px;
					background-color: var(--hover_color);
					position: absolute;
					bottom: -10px;
					left: calc(50% - 15px);
				}
			}

			&:hover:not(.ban) {
				color: var(--hover_color);

				span {
					color: var(--hover_color);
				}

				i {
					color: var(--hover_color);
				}
			}

			span {
				font-size: 14px;
				/*font-family: Montserrat-Medium;*/
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
				line-height: 14px;
			}

			i {
				font-size: 30px;
				vertical-align: middle;
			}
		}

		.prev, .next {
			width: 100px;
			display: inline-block;
		}

		.ban {
			cursor: initial;
		}
	}

</style>
