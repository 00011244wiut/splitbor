<script setup>
import { get } from "@vueuse/core";

const props = defineProps({
	label: String,
	name: String,
	modelValue: {
		type: File,
	},
});
const emits = defineEmits(["update:modelValue"]);
const imageDataUrl = ref("");

// Function to handle file selection
const handleFileChange = (event) => {
	const fileList = event.target.files;
	if (fileList.length > 0) {
		const selectedFile = fileList[0];
		console.log("first", selectedFile);
		emits("update:modelValue", selectedFile);
		readFile(selectedFile);
	}
};

// Function to read file as data URL
const readFile = (file) => {
	const reader = new FileReader();
	reader.onload = () => {
		const dataUrl = reader.result;
		imageDataUrl.value = dataUrl;
	};
	reader.readAsDataURL(file);
};
</script>

<template>
	<div class="grid gap-y-2">
		<label class="text-[15px] text-gray-900">{{ label }}</label>
		<div
			class="flex !h-[150px] flex-col justify-center items-center py-4 border rounded-xl"
		>
			<div v-if="!imageDataUrl">
				<label
					:for="name"
					class="flex flex-col justify-center items-center cursor-pointer"
				>
					<Icon class="text-6xl" name="uil:cloud-upload" />
					<p class="text-xs text-dust-300">
						Select File to <span class="underline text-dust-600">Upload</span>
					</p>
				</label>
				<input
					:id="name"
					:name="name"
					type="file"
					class="hidden"
					@change="handleFileChange"
				/>
			</div>
			<div v-if="imageDataUrl" class="relative h-full">
				<img
					:src="imageDataUrl"
					alt="uploaded file or image"
					class="w-full rounded-xl object-cover h-full"
				/>

				<Icon
					@click="(imageDataUrl = ''), emits('update:modelValue', null)"
					name="carbon:close-filled"
					class="absolute text-black cursor-pointer text-2xl -top-2 -right-2"
				/>
			</div>
		</div>
	</div>
</template>
