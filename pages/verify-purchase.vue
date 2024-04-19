<script setup>
import { format, parseISO } from "date-fns";

import { usePurchaseStore } from "@/stores/purchase";
const { purchase } = usePurchaseStore();

const { requestData, loading } = useApi();

const verifyOrder = async () => {
	const data = {
		PurchaseId: purchase.purchaseId,
		CardId: "7b18f4db-4e24-49bf-969a-7908832f847e",
	};
	try {
		await requestData("post", "order/confirm", {
			params: { ...data },
		}).then((res) => {
			navigateTo("/user/purchases");
		});
	} catch (error) {
		error.value = error;
		console.log(error);
	}
};

definePageMeta({
	layout: "logged-in",
});
</script>

<template>
	<div class="w-full px-[400px] pt-8 grid">
		<div class="space-y-6">
			<div>
				<h1 class="font-bold text-[42px]">Nike Downshifter 13</h1>
				<p class="text-[22px]">OrderId: Men Running Shoes</p>
			</div>
			<h1 class="font-bold text-[22px]">Payment Schedule</h1>

			<div class="border rounded-xl p-4 space-y-2">
				<p class="text-lg">
					<span class="text-[#428BF9]">Without</span> interest fee for 4 month
				</p>
				<div
					class="gap-x-4 rounded-md place-content-center h-[99px] grid grid-cols-4"
				>
					<div
						class="space-y-2"
						v-for="(item, index) in purchase.schedule"
						:key="index"
					>
						<div
							:class="index === 0 ? 'bg-[#428BF9]' : 'bg-[#D8D9DA]'"
							class="h-[6px] rounded-md"
						></div>
						<div>
							<p>{{ format(parseISO(item.paymentDate), "MMMM dd") }}</p>
							<p>{{ item.amount.toLocaleString() }} UZS</p>
						</div>
					</div>
				</div>
				<div class="border-t pt-4 flex justify-between">
					<p class="text-lg">
						Use <span class="text-[#428BF9]">Splitbor</span> to split the
						payment
					</p>
					<Icon name="iconamoon:arrow-right-2-light" class="text-2xl" />
				</div>
			</div>
			<div class="space-y-2">
				<button
					@click="verifyOrder"
					class="bg-[#428BF9] font-medium text-white w-full py-4 rounded-3xl"
				>
					{{ loading ? "Confirming..." : "Confirm" }}
				</button>
			</div>
		</div>
	</div>
</template>
