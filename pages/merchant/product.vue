<script setup>
const products = ref([]);
const { requestData, loading } = useApi();
const getProducts = async () => {
	try {
		await requestData("get", "products").then((res) => {
			products.value = res.products;
		});
	} catch (error) {
		console.log(error);
	}
};

onMounted(() => {
	getProducts();
});

definePageMeta({
	layout: "merchant-logged-in",
});
</script>
<template>
	<div
		v-if="!loading"
		class="h-full w-fit mx-auto grid gap-y-6 gap-x-20 px-24 grid-cols-4"
	>
		<div class="space-y-4">
			<button
				@click="$router.push('/merchant/add-product')"
				class="w-[250px] h-[220px] w bg-blue-600 flex items-center justify-center"
			>
				<Icon name="ic:baseline-plus" class="text-5xl text-white" />
			</button>
			<p>Add Product</p>
		</div>
		<div v-for="product in products" :key="product" class="space-y-4">
			<img
				:src="product.previewPhotoLink"
				class="object-cover w-[250px] h-[220px]"
				alt=""
			/>
			<!-- <div
				class="w-full h-[220px] bg-blue-600 flex items-center justify-center"
			>
			</div> -->
			<p>{{ product.productName }}</p>
		</div>
	</div>
	<div v-else class="h-screen w-screen flex items-center justify-center">
		<Icon name="eos-icons:bubble-loading" class="text-6xl" />
	</div>
</template>
