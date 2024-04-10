<script setup>
const { requestData, loading: addInfoLoading } = useApi();

const data = ref({});

const response = ref();
const addInfo = async () => {
	try {
		await requestData("post", "merchant/bank/submit", {
			params: { ...data.value },
		}).then(({ data }) => {
			response.value = data;
			navigateTo("/merchant/upload-document");
		});
	} catch (error) {
		console.log(error);
	}
};

definePageMeta({
	layout: "merchant-logged-in",
});
</script>

<template>
	<div class="flex items-center justify-center h-full gap-x-10">
		<div class="grid grid-cols-2 px-20 py-10 border rounded-2xl w-fit">
			<form class="space-y-6 w-[400px]">
				<h2 class="text-2xl">Bank Information</h2>
				<div class="grid gap-y-2">
					<label for="" class="text-[15px] text-gray-900">MFO</label>
					<input
						v-model="data.mfo"
						class="border-gray-200 rounded-xl focus:ring-0 placeholder:text-gray-300"
						type="text"
						placeholder=""
					/>
				</div>
				<div class="grid gap-y-2">
					<label for="" class="text-[15px] text-gray-900">Account number</label>
					<input
						v-model="data.accountNumber"
						class="border-gray-200 rounded-xl focus:ring-0 placeholder:text-gray-300"
						type="text"
						placeholder=""
					/>
				</div>

				<button
					@click.prevent="addInfo()"
					class="!w-full bg-blue-600 text-white py-3 text-sm text-center rounded-lg"
				>
					{{ addInfoLoading ? "Loading..." : "Confirm" }}
				</button>
			</form>
			<div class="grid h-full w-fit place-content-center gap-y-8">
				<h2 class="text-2xl font-bold w-[500px]">
					Enter bank information so we can know how to send you money
				</h2>
			</div>
		</div>
	</div>
</template>
