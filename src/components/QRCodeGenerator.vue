<script setup lang="ts">
import VueQrcode from "@chenfengyuan/vue-qrcode";

const props = defineProps({
	msg: String
})

const option = {
	errorCorrectionLevel: "M",
	maskPattern: 0,
	margin: 1,
	scale: 2,
	width: 500,
	color: {
		dark: "#000000FF",
		light: "#FFFFFFFF"
	}
};
</script>

<template>
	<div>
		<h1>{{ msg }}</h1>
		<div>
			<vue-qrcode v-if="props.msg" :value="props.msg" :options="option" tag="img"></vue-qrcode>
		</div>
	</div>
</template>