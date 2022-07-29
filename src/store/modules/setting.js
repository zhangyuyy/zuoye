export default {
    // 给当前局部起名，只能在局部使用
    namespaced: true,
    state: {
        title: '标题'
    },
    mutations: {
        updateTitle(state, paload) {
            state.title = paload;

        }
    }
}