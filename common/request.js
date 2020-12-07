//同时发送异步请求的次数
let ajaxTimes = 0;
export const request = (params) => {
    ajaxTimes++;
    //显示加载中的图标
    uni.showLoading({
        title: "加载中",
        mask: true,//背景遮罩
    });
    //定义公共的接口访问路径
    const baseUrl = "http://39.102.61.61:8088/frt_now_chat/";
    return new Promise((resolve, reject) => {
        uni.request({
            ...params,//解构出来
            url: baseUrl + params.url,
            success: (result) => {
                resolve(result);
            },
            fail: (err) => {
                reject(err);
            },
            complete: () => {
                ajaxTimes--;
                if (ajaxTimes === 0) {
                    uni.hideLoading();//关闭正在加载的图标
                }
            }
        })
    })
}