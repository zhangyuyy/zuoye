export default {
    namespaced: true,
    state: {
        list: [
            {
                name: "吃饭",
                done: false,
                id: 1,
            },
            {
                name: "睡觉",
                done: false,
                id: 2,
            },
            {
                name: "打豆豆",
                done: false,
                id: 3,
            },
        ],
    },
    mutations: {
        // 添加
        addList(state, payload) {

            state.list.unshift({
                id: state.list[state.list.length - 1].id + 1,
                name: payload,
                done: false,
            })

        },

        // 删除
        deleteList(state, payload) {
            let index = state.list.findIndex((obj) => obj.id == payload)
            state.list.splice(index, 1)
        }

    },
    actions: {
        // 添加
        addLists({ commit }, payload) {
            commit('addList', payload)

        },
        // 删除
        deleteLists({ commit }, id) {
            commit('deleteList', id)
        }

    },


}
