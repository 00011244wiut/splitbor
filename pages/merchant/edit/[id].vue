<script setup>
const route = useRoute();

const data = ref({});
const response = ref();
const { requestData, loading } = useApi();

const getProducts = async () => {
	try {
		await requestData("get", `product/details/${route.params.id}`).then(
			(res) => {
				data.value = { ...res.product };
				delete data.value.id;
			}
		);
	} catch (error) {
		console.log(error);
	}
};

onMounted(() => {
	getProducts();
});

const { requestData: editProductReq, loading: editProductLoading } = useApi();

const editProduct = async () => {
	try {
		await editProductReq("put", `product/update/${route.params.id}`, {
			data: { ...data.value },
		}).then(({ data }) => {
			response.value = data;
			navigateTo("/merchant/product");
		});
	} catch (error) {
		console.log(error);
	}
};

const { requestData: deleteProductReq, loading: deleteProductLoading } =
	useApi();

const deleteProduct = async () => {
	try {
		await deleteProductReq("delete", `product/delete/${route.params.id}`).then(
			({ data }) => {
				response.value = data;
				navigateTo("/merchant/product");
			}
		);
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
		v-if="!loading"
		class="h-full w-fit place-items-center grid gap-x-20 px-24 grid-cols-2"
	>
		<form class="space-y-6 w-[400px]">
			<h2 class="text-4xl">Edit Product</h2>
			<div class="grid gap-y-2">
				<label for="" class="text-[15px] text-gray-900">Product name</label>
				<input
					v-model="data.productName"
					class="border-gray-200 rounded-xl focus:ring-0 placeholder:text-gray-300"
					type="text"
					placeholder=""
				/>
			</div>
			<div class="grid gap-y-2">
				<label for="" class="text-[15px] text-gray-900">Product Price</label>
				<input
					v-model="data.priceAmount"
					class="border-gray-200 rounded-xl focus:ring-0 placeholder:text-gray-300"
					type="number"
					placeholder=""
				/>
			</div>
			<div class="grid gap-y-2">
				<label for="" class="text-[15px] text-gray-900">Preview Link</label>
				<input
					v-model="data.previewPhotoLink"
					class="border-gray-200 rounded-xl focus:ring-0 placeholder:text-gray-300"
					type="text"
					placeholder=""
				/>
			</div>
			<button
				@click.prevent="editProduct()"
				class="!w-full py-3 text-sm text-center bg-blue-600 text-white rounded-lg"
			>
				{{ editProductLoading ? "Loading..." : "Edit" }}
			</button>
			<button
				@click.prevent="deleteProduct()"
				class="!w-full py-3 text-sm text-center bg-red-600 text-white rounded-lg"
			>
				{{ deleteProductLoading ? "Loading..." : "Delete" }}
			</button>
		</form>
	</div>
	<div v-else class="h-screen w-screen flex items-center justify-center">
		<Icon name="eos-icons:bubble-loading" class="text-6xl" />
	</div>
</template>
