<script setup lang="ts">
import QRCodeVue3 from "qrcode-vue3";
import nasubi from "@/assets/nasubi.png";

const props = defineProps({
	value:{
		type: String,
		default:"",
	},
});
const text="Hello World";
</script>

<template>
	<div>
		<QRCodeVue3 :width="200" :height="200" :value="props.value" :image=nasubi
			:qrOptions="{ typeNumber: 0, mode: 'Byte', errorCorrectionLevel: 'H' }"
			:imageOptions="{ hideBackgroundDots: true, imageSize: 0.4, margin: 0 }" :dotsOptions="{
				type: 'rounded', color: '#26249a',
				gradient: {
					type: 'linear', rotation: 0,
					colorStops: [{ offset: 0, color: '#26249a' }, { offset: 1, color: '#26249a' },],
				},
			}" :backgroundOptions="{ color: '#ffffff' }" :cornersSquareOptions="{ type: 'dot', color: '#000000' }" />
	</div>
</template>