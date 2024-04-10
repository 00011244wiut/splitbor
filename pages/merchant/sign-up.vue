<script setup>
import { useOtpStore } from "~/stores/otp.js";

const { addOtpAndPhone } = useOtpStore();

const phoneNumber = ref();
const response = ref();

const { requestData, loading: signUpLoading } = useApi();

const signUp = async () => {
	const data = {
		phoneNumber: phoneNumber.value,
	};
	try {
		response.value = await requestData("post", "merchant/otp/request", {
			params: { ...data },
		});
		addOtpAndPhone(response.value?.data?.sampleOtp, phoneNumber.value);
		navigateTo("/merchant/confirm-otp");
	} catch (error) {
		console.log("error");
	}
};

definePageMeta({
	layout: "merchant-signup",
});
</script>

<template>
	<div class="w-full h-full">
		<form
			class="h-[400px] gap-y-4 px-20 flex flex-col rounded-2xl justify-center border w-fit"
		>
			<h2 class="text-2xl">Business Sign up</h2>
			<div class="grid gap-y-2">
				<label for="" class="text-[15px] text-gray-900">Phone number</label>
				<input
					v-model="phoneNumber"
					class="border-gray-200 rounded-xl focus:ring-0 placeholder:text-gray-300"
					type="text"
					placeholder="+998"
				/>
			</div>
			<button
				type="submit"
				@click.prevent="signUp()"
				class="px-4 py-2 text-sm border rounded-xl w-fit"
			>
				{{ signUpLoading ? "Signing..." : "Sign up" }}
			</button>
		</form>
		<!-- <p>Customer Cabinet</p> -->
	</div>
</template>
