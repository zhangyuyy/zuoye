<template>
  <div>
    {{ count }}
    {{ userName }}
    <button @click="$store.commit('addState', 3)">+1</button>
    <button @click="addState(6)">+1</button>
    <button @click="clickHandle">异步修改</button>
    {{ $store.getters.formatCount }}
    {{ $store.state.user.token }}
    {{ $store.state.setting.title }}
    {{ token }}
    {{ title }}
    <button @click="onTitle">切换标题</button>
  </div>
</template>
<script>
import {mapState,mapMutations,mapGetters,createNamespacedHelpers} from "vuex"
const {mapMutations:map}=createNamespacedHelpers('setting')
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    // 简写方式
     ...mapMutations(['addState']),
    // fnClick(){
     
    //   this.$store.commit('addState',5)
    // }
    clickHandle(){
      this.$store.dispatch('asyncAddcount')
    },
    onTitle(){
      // this.$store.commit('setting/updateTitle','新标题')
      // this['setting/updateTitle']('新标题')
      this.updateTitle('新标题')
    },
    // ...mapMutations(['setting/updateTitle'])
    ...map(['updateTitle'])
  },
  created() {},
  updated() {},
  mounted() {},
  filters: {},
  computed: {
    ...mapState(['count','userName']),
    ...mapGetters(['token','title']),


  },
  watch: {},
};
</script>
<style lang="less" scoped>
</style>
