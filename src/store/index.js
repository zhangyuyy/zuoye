import Vue from 'vue'
import Vuex from 'vuex'
import TodoHeader from './modules/TodoHeader'
import toduList from "./modules/toduList"

import createVuexPersisted from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  // 派生数据 根据某一个数据生成另一个数据
  // 根据state 里面的数据生成新数据
  getters: {


  },
  mutations: {

  },
  actions: {
    // 只能处理异步，不可以修改state的数据
    // actions内部所有的方法第一个形参context
    // 对象： commit的方法 dispatch 方法
  },

  modules: {
    // user,
    // setting,
    TodoHeader,
    toduList

  },
  // 插件名：数组用来自动存储
  plugins: [
    createVuexPersisted(
      {
        reducer(state) {
          // 返回新数组
          return {
            TodoHeader: state.TodoHeader,
            shuju: state.shuju


          }

        }
      },
    )
  ],
}
)
