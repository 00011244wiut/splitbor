<script setup>
import useNotify from "@/use/notify";

const { notify } = useNotify();

import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";

import { format, parseISO } from "date-fns";

const authStore = useAuthStore();
const { isLoggedIn } = storeToRefs(authStore);

import { usePurchaseStore } from "@/stores/purchase";
const { purchase } = usePurchaseStore();

const { requestData, loading } = useApi();

const verifyOrder = async () => {
	const data = {
		PurchaseId: purchase.data.purchaseId,
		CardId: "7b18f4db-4e24-49bf-969a-7908832f847e",
	};
	try {
		await requestData("post", "order/confirm", {
			params: { ...data },
		}).then((res) => {
			navigateTo("/user/purchases");
		});
	} catch (error) {
		if (error.response.data.type == "BadRequestException") {
			notify({
				title: error.response.data.title,
				type: "error",
				borderClass: "border-l-[16px] border-red-300",
			});
		}
	}
};

onMounted(() => {
	if (isLoggedIn.value && purchase.success == false) {
		notify({
			title: "Finish account setup",
			description: "You must Finish Account setup in order to continue",
			type: "error",
			borderClass: "border-l-[16px] border-red-300",
		});
	}
});

definePageMeta({
	layout: "logged-in",
});
</script>

<template>
	<div class="w-full px-[200px] pt-8 grid grid-cols-2">
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
						v-for="(item, index) in purchase.data.schedule"
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
					v-if="purchase.success"
					@click="verifyOrder()"
					class="bg-[#428BF9] font-medium text-white w-full py-4 rounded-3xl"
				>
					{{ loading ? "Confirming..." : "Confirm" }}
				</button>
			</div>
		</div>
		<div
			v-if="!purchase.success && !isLoggedIn"
			class="flex gap-x-2 text-3xl items-center justify-center"
		>
			You need to
			<NuxtLink to="/user/sign-up" class="text-[#428BF9] underline"
				>sign in</NuxtLink
			>
			to complete order
		</div>
		<div
			v-else-if="!purchase.success"
			class="flex gap-x-2 text-3xl items-center justify-center"
		>
			You need to
			<NuxtLink to="/user/verification" class="text-[#428BF9] underline"
				>Finish your profile</NuxtLink
			>
			to complete order
		</div>
	</div>
</template>
