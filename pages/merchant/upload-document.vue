<script setup>
const document = ref();
const complete = ref(false);

const { requestData, loading: uploadFileLoading } = useApi();

const response = ref();
const uploadFile = async () => {
	const formData = new FormData();
	formData.append("Document", document.value);

	try {
		response.value = await requestData("post", "merchant/document/upload", {
			isFile: true,
			data: formData,
		});
		complete.value = true;
	} catch (error) {
		console.log(error);
	}
};

definePageMeta({
	layout: "merchant-logged-in",
});
</script>

<template>
	<div
		v-if="!complete"
		class="w-[1000px] px-6 py-4 space-y-6 h-[400px] mx-auto mt-2 border rounded-xl"
	>
		<h1 class="text-2xl">Upload Document</h1>
		<div class="grid w-full space-y-8 gap-x-4">
			<FileUpload
				v-model="document"
				name="passport"
				label="Passport / ID Card"
				key="passport"
			/>

			<button
				@click="uploadFile()"
				class="w-full py-2 text-sm text-center text-white bg-blue-600 rounded-xl"
			>
				{{ uploadFileLoading ? "Uploading..." : "Upload" }}
			</button>
		</div>
	</div>

	<div v-if="complete" class="w-[540px] m-auto mt-20 space-y-8">
		<h2 class="text-6xl text-center">Congratulations!</h2>
		<p class="px-8 text-center">
			Thank you for signing up! Now you can get your purchases up to 10 000 000
			UZS and pay with Splitbor
		</p>
		<button
			@click="$router.push('/merchant/product')"
			class="w-full px-8 py-4 text-lg text-white bg-black rounded-lg"
		>
			Go to Dashboard
		</button>
	</div>
</template>
