import request from '@/common/request.js'

//用户登录
 export function signIn(data){
	 return request({
		 url: "/login.do",
		 method: "POST",
		 data: data
	 })
 }