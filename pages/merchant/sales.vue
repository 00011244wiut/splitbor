<script setup>
import { format, parseISO } from "date-fns";

const sales = ref([]);
const { requestData, loading } = useApi();
const getSales = async () => {
	try {
		await requestData("get", "sales/bymerchant").then((res) => {
			sales.value = res.sales;
		});
	} catch (error) {
		console.log(error);
	}
};

onMounted(() => {
	getSales();
});
definePageMeta({
	layout: "merchant-logged-in",
});
</script>

<template>
	<div class="h-full px-28 space-y-20">
		<h1 class="text-4xl">Sales</h1>
		<di v-for="sale in sales" :key="sale" v class="flex items-center gap-x-6">
			<div
				class="bg-[#92D7A5] w-[57px] h-[57px] rounded-full flex justify-center items-center"
			>
				<Icon name="fa-solid:star-of-life" class="text-2xl" />
			</div>
			<div class="space-y-2">
				<p class="text-2xl">{{ sale.productName }}</p>
				<p>
					{{ sale.saleAmount }} UZS . <span>DateTime: </span
					>{{ format(parseISO(sale.createdTime), "MMMM dd") }}
				</p>
			</div>
		</di>
	</div>
</template>
