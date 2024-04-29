<script setup>
const { requestData, loading: addProductLoading } = useApi();

const data = ref({});

const response = ref();
const addProduct = async () => {
	try {
		await requestData("post", "product/create", {
			data: { ...data.value },
		}).then(({ data }) => {
			response.value = data;
			navigateTo("/merchant/product");
		});
	} catch (error) {
		console.log(error);
	}
};

definePageMeta({
	layout: "merchant-logged-in",
});
</script>
<template>
	<div class="h-full w-fit place-items-center grid gap-x-20 px-24 grid-cols-2">
		<form class="space-y-6 w-[400px]">
			<h2 class="text-4xl">Add Product</h2>
			<div class="grid gap-y-2">
				<label for="" class="text-[15px] text-gray-900">Product name</label>
				<input
					v-model="data.productName"
					class="border-gray-200 rounded-xl focus:ring-0 placeholder:text-gray-300"
					type="text"
					placeholder="Enter product name"
				/>
			</div>
			<div class="grid gap-y-2">
				<label for="" class="text-[15px] text-gray-900">Product Price</label>
				<input
					v-model="data.priceAmount"
					class="border-gray-200 rounded-xl focus:ring-0 placeholder:text-gray-300"
					type="number"
					placeholder="Enter price in UZS"
				/>
			</div>
			<div class="grid gap-y-2">
				<label for="" class="text-[15px] text-gray-900">Preview Link</label>
				<input
					v-model="data.previewPhotoLink"
					class="border-gray-200 rounded-xl focus:ring-0 placeholder:text-gray-300"
					type="text"
					placeholder="Image link for preview"
				/>
			</div>
			<button
				@click.prevent="addProduct()"
				class="!w-full py-3 text-sm text-center bg-blue-600 text-white rounded-lg"
			>
				{{ addProductLoading ? "Loading..." : "Add Product" }}
			</button>
		</form>
	</div>
</template>
