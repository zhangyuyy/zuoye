import Vue from 'vue'
import Vuex from 'vuex'
import user from "./modules/user"
import setting from "./modules/setting"
import createVuexPersisted from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 999999,
    userName: '张羽'

  },
  // 派生数据 根据某一个数据生成另一个数据
  // 根据state 里面的数据生成新数据
  getters: {
    formatCount(state) {
      // 里面要加return返回数据
      return state.count / 10000 + '万'

    },
    token(state) {
      return state.user.token

    },
    title(state) {
      return state.setting.title
    }
  },
  mutations: {
    addState(state, payload) {
      state.count += payload

    }
  },
  actions: {
    // 只能处理异步，不可以修改state的数据
    // actions内部所有的方法第一个形参context
    // 对象： commit的方法 dispatch 方法
    asyncAddcount({ commit }) {
      setTimeout(() => {
        commit('addState', 10)

      }, 1000)
    }
  },

  modules: {
    user,
    setting,

  },
  // 插件名：数组用来自动存储
  plugins: [
    createVuexPersisted({
      reducer(state) {
        // 返回新数组
        return {
          setting: state.setting
        }

      }
    })
  ],
})
