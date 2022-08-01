<template>
	<div class="progress" :style="`height:${minheight}px`">
		<div
			:class="[status]"
			:style="`width:${percentage}%;height:${minheight}px`"
			@click="$emit('click')"
		>
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		status: {
			type: String,
			default: 'default',
		},
		percentage: {
			type: Number,
			default: 100,
		},
		strokewidth: {
			type: Number,
			default: 'default',
		},
		minheight: {
			type: String,
			default: 'default',
		},
	},
};
</script>

<style scoped>
.progress {
	position: relative;
	width: 400px;
	height: 25px;
	padding-left: 5px;
	text-align: center;
	line-height: 25px;
	background-color: #ebeef5;
	margin-top: 10px;
	border-radius: 13px;
	color: #fff;
	font-size: 13px;
}
.default {
	position: absolute;
	top: 0;
	left: 0;
	width: 200px;
	height: 25px;
	padding-left: 25px;
	border-radius: 13px;
}
.exception {
	position: absolute;
	top: 0;
	left: 0;

	height: 25px;
	border-radius: 13px;
	background-color: #f56c6c;
}
.warning {
	position: absolute;
	top: 0;
	left: 0;
	height: 25px;
	border-radius: 13px;
	background-color: yellow;
}
.success {
	position: absolute;
	top: 0;
	left: 0;
	height: 25px;
	border-radius: 13px;
	background-color: #67c23a;
}
</style>
