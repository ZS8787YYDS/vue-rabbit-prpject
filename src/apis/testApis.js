// 引入axios的实例对象
import httpInstance from "@/utils/http";
// 定义一个函数，用于接口调用，同时将函数导出
export const getData = () => {
    return httpInstance({
        // 定义请求的url路径
        url: 'home/category/head'
    })
}