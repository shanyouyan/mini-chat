<template>
	<view class="content">
		    <view>
		        <view class="uni-common-mt">
		            <view class="uni-form-item uni-column">
		                <view class="title">用户名</view>
		                <input class="uni-input" confirm-type="next" focus v-model="userName" placeholder="请输入用户名" />
		            </view>
		            <view class="uni-form-item uni-column">
		                <view class="title">用户密码</view>
		                <input class="uni-input" password type="text" v-model="password" placeholder="请输入用户密码" />
		            </view>
					<button @click="login">登录</button>
					<button @click="register">注册</button>
		        </view>
		    </view>
	</view>
</template>

<script>
	// import { request } from "@/common/request.js";
	import { signIn } from '@/api/index.js'
	export default {
		data() {
			return {
				userName: '',
				password: ''
			}
		},
		methods: {
			//用户登录
			login(){
				let params = {
					app_user_name: this.userName,
					app_password: this.password
				};
				signIn(params).then((res) => {
					console.log(res)
				})
				// request({url: 'login.do', data: params, method: "POST"}).then((result) => {
				// 	console.log(result)
				// })
			},
			//用户注册
			register(){
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
