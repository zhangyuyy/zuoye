<template>
	<div>
		<div class="btn" :class="[type, size]" @click="$emit('click')">
			<slot></slot>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {};
	},
	props: {
		type: {
			type: String,
			default: 'default',
		},
		size: {
			type: String,
			default: 'small',
		},
	},
	components: {},
	methods: {},
	created() {},
	updated() {},
	mounted() {},
	filters: {},
	computed: {},
	watch: {},
};
</script>
<style scoped>
.btn {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100px;
	height: 40px;
	margin-top: 5px;
	border-radius: 5px;
	cursor:pointer;
  /* 光标添加小手形状 */
}
.primary {
	background-color: #f56c6c;
	color: #fff;
}
.default {
	background-color: yellow;
	color: blueviolet;
}
.mini {
	width: 60px;
	height: 30px;
	font-size: 12px;
	background-color: blue;
	color: #fff;
}
.small {
	width: 100px;
	height: 40px;
}
</style>
