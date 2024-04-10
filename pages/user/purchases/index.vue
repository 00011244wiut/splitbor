<script setup>
definePageMeta({
	layout: "logged-in",
});

/*---------------------Fetch Limit Data -----------------------*/
const limit = ref(0);

const { requestData: getLimit, loading: getLimitLoading } = useApi();
const getPurchaseLimit = async () => {
	try {
		await getLimit("get", "user/limit").then(({ data }) => {
			limit.value = data;
		});
	} catch (error) {
		console.log(error);
	}
};

/*---------------------Fetch Limit Purchases -----------------------*/

const purchases = ref([]);

const { requestData: getPurchaseReq, loading: getPurchaseLoading } = useApi();
const getPurchase = async () => {
	try {
		await getPurchaseReq("get", "user/purchases").then(({ data }) => {
			purchases.value = data;
		});
	} catch (error) {
		console.log(error);
	}
};

onMounted(() => {
	/*---------------------Call the Fetch Functions-----------------------*/
	getPurchase();
	getPurchaseLimit();
});
</script>

<template>
	<div class="mb-40 space-y-36 px-36">
		<div class="space-y-8">
			<h2 class="text-[54px] font-bold">My purchases</h2>
			<div v-if="purchases.length">
				<div
					v-for="(purchase, index) in purchases"
					:key="index"
					class="max-w-[600px] space-y-6"
				>
					<div>
						<div class="text-[32.1px]">
							<p>{{ purchase.productName }}</p>
							<p>#{{ purchase.id }}</p>
						</div>
						<p class="text-xs">Date: {{ purchase.createdTime }}</p>
					</div>
					<button
						@click="$router.push(`/user/purchases/${purchase.id}`)"
						class="w-full px-8 py-3 text-lg text-white bg-black rounded-lg"
					>
						Details
					</button>
				</div>
			</div>
			<div
				v-else
				class="h-[300px] flex flex-col rounded-xl items-center justify-center"
			>
				<h2 class="text-[40px] font-bold">No purchases yet</h2>
			</div>
		</div>

		<div class="space-y-36">
			<div
				class="h-[300px] bg-gray-200/80 flex flex-col rounded-xl items-center justify-center"
			>
				<h2 class="text-[54px] font-bold">My Purchase Limit</h2>
				<div class="text-3xl">
					<span class="text-blue-600">Your purchase limit is:</span>
					{{ limit.maxAmount }} UZS
				</div>
			</div>
			<div class="space-y-12">
				<h1 class="text-5xl font-bold">Stores to pay with Splitbor</h1>

				<LandingPayWith />
			</div>
		</div>
	</div>
</template>
