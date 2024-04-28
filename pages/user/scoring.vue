<script setup>
const { requestData, loading: updateScoringLoading } = useApi();

import useNotify from "@/use/notify";

const { notify } = useNotify();

const value = ref(0);
const input = ref({});
const response = ref();
const updateScoring = async () => {
	try {
		response.value = await requestData("post", "user/scoring", {
			params: { ...input.value },
		});

		complete.value = true;
	} catch (error) {
		notify({
			title: error.response.data.title,
			description: error.response.data.errors[0],
			type: "error",
			borderClass: "border-l-[16px] border-red-300",
		});
		console.log(error);
	}
};

const genders = ref([
	{ id: "Male", name: "Male" },
	{ id: "Female", name: "Female" },
]);

const status = ref([
	{ id: "Yes", name: "Yes" },
	{ id: "No", name: "No" },
]);

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
				<label for="" class="text-[18px] font-bold text-gray-900">Salary</label>
				<input
					v-model="input.income"
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
					v-model="input.income"
					class="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
				/>
				<div class="flex text-[20px] font-bold justify-between">
					<span>0</span> <span>100 000 000</span>
				</div>
			</div>
			<div class="grid grid-cols-2 gap-x-12 gap-y-6">
				<div class="grid gap-y-2">
					<label for="" class="text-[18px] font-bold text-gray-900"
						>Enter your age</label
					>
					<input
						v-model="input.age"
						class="border-gray-200 disabled:cursor-not-allowed rounded-xl focus:ring-0 placeholder:text-gray-800"
						type="number"
					/>
				</div>
				<div class="grid gap-y-2">
					<label for="" class="text-[18px] font-bold text-gray-900"
						>Select Gender</label
					>
					<SingleSelect name="gender" v-model="input.gender" :items="genders" />
				</div>
				<div class="grid gap-y-2">
					<label for="" class="text-[18px] font-bold text-gray-900"
						>Martial Status</label
					>
					<SingleSelect
						name="martial"
						v-model="input.maritalStatus"
						:items="status"
					/>
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
				<span class="text-blue-600">{{ response.data.maxAmount }} </span>
				UZS and pay with Splitbor
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
