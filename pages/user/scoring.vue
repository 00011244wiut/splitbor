<script setup>
const { requestData, loading: updateScoringLoading } = useApi();

const value = ref(0);
const response = ref();
const updateScoring = async () => {
	try {
		response.value = await requestData("post", "user/scoring", {
			params: { income: value.value },
		});

		complete.value = true;
	} catch (error) {
		console.log(error);
	}
};

const complete = ref(false);
definePageMeta({
	layout: "logged-in",
});
</script>

<template>
	<div class="grid h-full place-items-center">
		<form v-if="!complete" class="m-auto space-y-6 w-[697px]">
			<h1 class="text-3xl font-bold mb-11">
				Get your credit limit. Fill up information
			</h1>
			<div class="grid gap-y-2">
				<label for="" class="text-[25px] font-bold text-gray-900">Salary</label>
				<input
					v-model="value"
					class="border-gray-200 disabled:cursor-not-allowed rounded-xl focus:ring-0 placeholder:text-gray-800"
					type="number"
				/>
			</div>
			<div>
				<input
					id="default-range"
					type="range"
					:min="0"
					:max="100000000"
					v-model="value"
					class="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
				/>
				<div class="flex text-[20px] font-bold justify-between">
					<span>0</span> <span>100 000 000</span>
				</div>
			</div>
			<button
				@click.prevent="updateScoring()"
				class="w-full py-2 text-sm text-center text-white bg-blue-700 rounded-xl"
			>
				{{ updateScoringLoading ? "Adding.." : "Add" }}
			</button>
		</form>
		<div v-else class="w-[540px] space-y-8">
			<h2 class="text-6xl text-center">Congratulations!</h2>
			<p class="px-8 text-center">
				Thank you for signing up! Now you can get your purchases up to
				{{ value.toLocaleString() }} UZS and pay with Splitbor
			</p>
			<button
				type="button"
				@click="$router.push('/user/purchases')"
				class="w-full px-8 py-4 text-lg text-white bg-black rounded-lg"
			>
				Go to Dashboard
			</button>
		</div>
	</div>
</template>
