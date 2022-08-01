// 自定义名称把按钮引进来
import Zyprogress from "./progress"
// 注册并引用
export default {
    // 把vue实力传进来
    install(Vue) {
        Vue.component('zy-progress', Zyprogress)
    }
}