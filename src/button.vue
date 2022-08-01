<template>
	<div>
		<zy-button type="primary">登陆按钮</zy-button>
		<zy-button size="mini" @click="btn">关闭按钮</zy-button>
		<zy-button>成功按钮</zy-button>
	</div>
</template>
<script>
export default {
	data() {
		return {};
	},
	props: {
		obj: {
			type: Object,
			default: () => {},
		},
	},
	components: {},
	methods: {
		btn() {
			console.log(111);
		},
	},
	created() {},
	updated() {},
	mounted() {},
	filters: {},
	computed: {},
	watch: {},
};
</script>
<style lang="less" scoped></style>
