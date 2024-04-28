<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

import { useAuthStore } from "@/stores/auth.js";

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

const { logout } = useAuthStore();

const logoutUser = () => {
	logout();
	navigateTo("/");
};

onMounted(() => {
	getUser();
});
</script>
<template>
	<Notify />

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
				<Menu>
					<MenuButton class="flex gap-x-2">
						<span class="text-lg"
							>{{ user?.firstName }} {{ user?.lastName }}</span
						>

						<Icon name="ri:arrow-down-s-line" class="text-2xl" />
					</MenuButton>
					<MenuItems
						class="absolute top-16 right-16 w-fit hover:bg-[#1573FF]/90 bg-[#1573FF] py-2 rounded-md text-white px-4"
					>
						<MenuItem v-slot="{ active }">
							<button class="whitespace-nowrap" @click="logoutUser">
								Log Out
							</button>
						</MenuItem>
					</MenuItems>
				</Menu>
			</div>
		</div>
		<div class="flex-grow">
			<slot />
		</div>
		<Footer />
	</div>
</template>
