export default {
    namespaced: true,
    state: {
        color: ''
    },
    mutations: {
        addTitle(state, payload) {
            state.color = payload


        }
    },
    actions: {
        ChangeColor(context) {
            context.commit("addTitle", 'pink')
        }
    }


}