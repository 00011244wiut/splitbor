<script setup>
const { requestData, loading: addInfoLoading } = useApi();

const data = ref({});

const response = ref();
const addInfo = async () => {
	try {
		await requestData("post", "merchant/info/submit", {
			params: { ...data.value },
		}).then(({ data }) => {
			response.value = data;
		});
	} catch (error) {
		console.log(error);
	}
};

const { requestData: confirmInfoReq, loading: confirmInfoLoading } = useApi();

const confirmInfo = async () => {
	try {
		await confirmInfoReq("post", "merchant/legalinfo/confirm", {
			data: { ...response.value },
		});

		navigateTo("/merchant/bank-info");
	} catch (error) {
		console.log(error);
	}
};

definePageMeta({
	layout: "merchant-logged-in",
});
</script>

<template>
	<div class="flex items-center justify-center">
		<div class="grid gap-x-8 grid-cols-2 px-20 py-10 border rounded-2xl w-fit">
			<form class="space-y-6 w-[400px]">
				<h2 class="text-2xl">Enter company information</h2>
				<div class="grid gap-y-2">
					<label for="" class="text-[15px] text-gray-900">Company name</label>
					<input
						v-model="data.companyName"
						class="border-gray-200 rounded-xl focus:ring-0 placeholder:text-gray-300"
						type="text"
						placeholder=""
					/>
				</div>
				<div class="grid gap-y-2">
					<label for="" class="text-[15px] text-gray-900">City</label>
					<input
						v-model="data.city"
						class="border-gray-200 rounded-xl focus:ring-0 placeholder:text-gray-300"
						type="text"
						placeholder=""
					/>
				</div>
				<div class="grid gap-y-2">
					<label for="" class="text-[15px] text-gray-900"
						>Business TAX ID (INN / PINFL)</label
					>
					<input
						v-model="data.taxPayerId"
						class="border-gray-200 rounded-xl focus:ring-0 placeholder:text-gray-300"
						type="text"
						placeholder=""
					/>
				</div>
				<button
					@click.prevent="addInfo()"
					class="!w-full py-3 text-sm text-center border rounded-lg"
				>
					{{ addInfoLoading ? "Adding.." : "Add" }}
				</button>
			</form>
			<div class="grid h-full w-full place-content-center gap-y-8">
				<div>
					<span class="font-medium">Form of Business:</span
					>{{ response?.businessType }}
				</div>
				<div>
					<span class="font-medium"> Legal Name: </span
					>{{ response?.legalName }}
				</div>

				<div>
					<span class="font-medium">Legal Address:</span
					>{{ response?.legalAddress }}
				</div>

				<div>
					<span class="font-medium">Director:</span>{{ response?.directorName }}
				</div>
				<div class="flex justify-end h-fit">
					<button
						@click.prevent="confirmInfo()"
						class="!w-fit px-6 py-3 text-sm text-center border rounded-lg"
					>
						{{ confirmInfoLoading ? "Verifying.." : "Verify" }}
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
