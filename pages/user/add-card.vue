<script setup>
const { requestData, loading: addCardLoading } = useApi();

const input = ref({ cardType: 0, cardNumber: "", expiryDate: "", cvv: "" });

const response = ref();
const addCard = async () => {
	try {
		response.value = await requestData("post", "user/card", {
			data: input.value,
		});

		navigateTo("/user/scoring");
	} catch (error) {
		console.log(error);
	}
};

definePageMeta({
	layout: "logged-in",
});
</script>

<template>
	<div class="h-full">
		<form class="m-auto space-y-6 w-[335px]">
			<div class="space-y-2">
				<h2 class="text-2xl">Bind your card</h2>
				<div
					class="border flex flex-col items-center py-3 border-gray-300 bg-gray-100/80 h-[100px] rounded-xl"
				>
					<!-- TODO cardType image -->
					<p class="text-dust-200">We support</p>
					<img src="/static-images/payment-cards.png" alt="" />
				</div>
			</div>
			<div class="grid gap-y-2">
				<label for="" class="text-[15px] text-gray-900">Card number</label>
				<input
					class="border-gray-200 rounded-xl focus:ring-0 placeholder:text-gray-800"
					type="text"
					v-model="input.cardNumber"
					name="cardNumber"
					placeholder="5555 5555 5555 5555"
				/>
			</div>
			<div class="grid gap-y-2">
				<label for="" class="text-[15px] text-gray-900">Expiry date</label>
				<input
					class="border-gray-200 rounded-xl focus:ring-0 placeholder:text-gray-800"
					type="date"
					name="expiryDate"
					v-model="input.expiryDate"
					placeholder="06/24"
				/>
			</div>
			<div class="grid gap-y-2">
				<label for="" class="text-[15px] text-gray-900">CVV / CVC</label>
				<input
					v-model="input.cvv"
					class="border-gray-200 rounded-xl focus:ring-0 placeholder:text-gray-800"
					type="text"
					name="cvv"
					placeholder=""
				/>
			</div>
			<button
				@click.prevent="addCard"
				class="w-full py-2 text-sm text-center border rounded-xl"
			>
				{{ addCardLoading ? "Confirming..." : "Confirm" }}
			</button>
		</form>
	</div>
</template>
