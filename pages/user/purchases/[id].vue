<script setup>
import { format, parseISO } from "date-fns";

const route = useRoute();
const products = ref([]);
const { requestData, loading } = useApi();
const getProducts = async () => {
	try {
		await requestData("get", `purchase/payments/${route.params.id}`).then(
			(res) => {
				products.value = res.data;
			}
		);
	} catch (error) {
		console.log(error);
	}
};

onMounted(() => {
	getProducts();
});

definePageMeta({
	layout: "logged-in",
});
</script>

<template>
	<div class="flex flex-col pl-80 space-y-12 justify-center">
		<div>
			<h1 class="text-[54px] font-bold">{{ products.productName }}</h1>
			<p class="text-[34px]">#{{ products.id }}</p>
		</div>

		<div
			class="bg-[#F6F7F8] gap-x-4 rounded-md px-4 place-content-center w-[1072px] h-[99px] grid grid-cols-4"
		>
			<div
				class="space-y-2"
				v-for="(item, index) in products.schedule"
				:key="item"
			>
				<div>
					<p>{{ format(parseISO(item.paymentDate), "MMMM dd") }}</p>
					<p>{{ item.amount }} UZS</p>
				</div>
				<div
					:class="index === 0 ? 'bg-[#428BF9]' : 'bg-[#D8D9DA]'"
					class="h-[6px] rounded-md"
				></div>
			</div>
		</div>
		<h1 class="text-[32px]">Payment History</h1>
		<div class="flex items-center gap-x-6">
			<div
				class="bg-[#92D7A5] w-[57px] h-[57px] rounded-full flex justify-center items-center"
			>
				<Icon name="fa-solid:star-of-life" class="text-2xl" />
			</div>
			<div class="space-y-2">
				<p class="text-2xl">{{ products.productName }}</p>
				<p>
					{{ products.schedule[0].amount }} UZS . <span>DateTime: </span
					>{{ format(parseISO(products.schedule[0].paymentDate), "MMMM dd") }}
				</p>
			</div>
		</div>
	</div>
</template>
