<script setup>
const passportBase64 = ref();
const selfieBase64 = ref();

const { requestData, loading: uploadImageLoading } = useApi();

const response = ref();
const uploadImage = async () => {
	const formData = new FormData();
	formData.append("IdPhoto", passportBase64.value);
	formData.append("Selfie", selfieBase64.value);

	try {
		response.value = await requestData("post", "user/kyc", {
			isFile: true,
			data: formData,
		});

		navigateTo("/user/add-card");
	} catch (error) {
		console.log(error);
	}
};

definePageMeta({
	layout: "logged-in",
});
</script>

<template>
	<div class="flex items-center justify-center h-full gap-x-11">
		<img src="/static-images/verification-image.png" alt="" />
		<form
			class="py-7 gap-y-4 w-[460px] px-4 flex flex-col rounded-2xl justify-center border"
		>
			<h2 class="text-2xl">Verify your identity</h2>

			<FileUpload
				name="passport"
				v-model="passportBase64"
				label="Passport / ID Card"
				key="passport"
			/>
			<FileUpload
				name="selfie"
				v-model="selfieBase64"
				label="Selfie with your document"
				key="selfie"
			/>
			<button
				@click.prevent="uploadImage"
				class="w-full py-2 text-sm text-center text-white bg-blue-600 rounded-xl"
			>
				{{ uploadImageLoading ? "Uploading..." : "Upload" }}
			</button>
		</form>
	</div>
</template>
