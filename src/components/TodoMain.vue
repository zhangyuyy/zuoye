<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li class="completed" v-for="(item, index) in list" :key="index">
      <div class="view">
        <input class="toggle" type="checkbox" />
        <label>{{ item.name }}</label>
        <button class="destroy" @click="delte(item.id)"></button>
      </div>
    </li>
  </ul>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
  const{mapActions}= createNamespacedHelpers('toduList')
export default {
  data() {
    return {};
  },
  computed: {
    list() {
      return this.$store.state.toduList.list;
    },
    // ...mapState(["list"]),
  },
  methods: {
    ...mapActions(['deleteLists']),
    delte(id) {
     this.deleteLists(id)

     
      // let index = this.list.findIndex((obj) => obj.id == id);
      // this.list.splice(index, 1);
    },
  },
};
</script>
