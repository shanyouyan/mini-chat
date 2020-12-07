<template>
	<view class="page-login">
		<view class="logo-wrap">
			<text class="title">乐心在线聊天</text>
		</view>
<!-- 		<form class="form">
			<view class="btns-type">
				<view class="grid col-12 padding-sm justify-around">
					<view class="margin-tb-sm text-center" v-for="(item,index) in typeList" :key="index" @click="selType(item)">
						<button class="cu-btn round" :class="['lines-ddd', 'shadow', item.value === type ? 'active' : '']">{{item.title}}</button>
					</view>
				</view>
			</view>
			<view class="form-item">
				<text class="i-icon cuIcon-people"></text>
				<input class="uni-input" name="username" v-model="userName" placeholder="Username" placeholder-class="placeholder" />
			</view>
			<view class="form-item">
				<text class="i-icon cuIcon-lock"></text>
				<input class="uni-input" name="input" v-model="password" :password="true" placeholder="Password" placeholder-class="placeholder" />
			</view>
			<button form-type="submit" class="btn-submit" @click="onSubmit">登录</button>
		</form> -->
		<view class="btn-wrap">
			<navigator url="/pages/register" class="btn">注册帐号</navigator>
			<navigator url="/pages/forgetPwd" class="btn">忘记密码</navigator>
		</view>
	</view>
</template>

<script>
	export default {

		data() {
			return {
				typeList: [{
					title: '供应商',
					value: 1
				}, {
					title: '业务员',
					value: 3
				}, {
					title: '商户',
					value: 2
				}],
				type: 2,
				
			};
		},
		computed: {

		},
		methods: {

		}
	}
</script>

<style lang="less" scoped>
	.page-login {
		width: 100%;
		height: 100%;
		color: #ffffff;
		// background-image: linear-gradient(to top, #d5dee7 0%, #ffafbd 0%, #c9ffbf 100%);
		background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
	}
	// .logo-wrap {display flex; flex-direction: column; align-items:center; min-height: 100%;}
	// .title {color #FFFDEF;}
	// .form {position relative ;display block ;padding 20px 20px 40px 20px }
	// .form-item {
	// 	display flex;
	// 	margin 30px 0px;
	// 	padding-bottom 10px;
	// 	border-bottom 0.5px solid #ccc;
	// 	}
</style>
