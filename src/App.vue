<template>
	<div>
		<zy-progress status="exception" :percentage="40" :minheight="25"
			>40%</zy-progress
		>
		<zy-progress status="warning" :percentage="80" :minheight="30"
			>80%</zy-progress
		>
		<zy-progress
			status="success"
			:percentage="100"
			@click="fnclick"
			:minheight="20"
			>100%</zy-progress
		>
		<zy-progress>0%</zy-progress>
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
		fnclick() {
			alert('进度已完成');
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
