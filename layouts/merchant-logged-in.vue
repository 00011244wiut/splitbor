<script setup>
const user = ref();
const { requestData, loading } = useApi();
const getUser = async () => {
	try {
		await requestData("get", "merchant/info").then((res) => {
			user.value = res.data;
		});
	} catch (error) {
		console.log(error);
	}
};

onMounted(() => {
	getUser();
});
</script>
<template>
	<div class="flex flex-col h-screen pt-2 mb-6 space-y-8">
		<div class="flex items-center justify-between px-16">
			<img
				@click="$router.push('/')"
				src="/static-images/logo.png"
				class="object-cover cursor-pointer h-[54px]"
				alt="logo"
			/>

			<div class="text-2xl space-x-6">
				<NuxtLink to="/merchant/product">Products</NuxtLink>
				<NuxtLink to="/merchant/sales">Sales</NuxtLink>
			</div>
			<div class="flex items-center gap-x-4">
				<img src="/static-images/profile-placeholder.png" alt="" />
				<span class="text-lg">{{ user?.firstName }} {{ user?.lastName }}</span>
			</div>
		</div>
		<div class="flex-grow">
			<slot />
		</div>
		<Footer />
	</div>
</template>
