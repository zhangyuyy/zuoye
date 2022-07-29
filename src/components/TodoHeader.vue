<template>
  <header class="header">
    <h1 :style="{ color }">todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model.trim="value"
      @keydown.enter="downFn"
    />
  </header>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  computed: {
    color() {
      // console.log(this.$store.state.TodoHeader.color);

      return this.$store.state.TodoHeader.color;
    },
  },
  methods: {
   
    downFn() {
         if (this.value.length == 0) {
                alert('不能为空')
                return
            }
     this.$store.dispatch('toduList/addLists',this.value)
    this.value = ''
    },
  },
};
</script>
