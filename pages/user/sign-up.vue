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
		response.value = await requestData("post", "otp/request", {
			params: { ...data },
		});
		addOtpAndPhone(response.value?.data?.sampleOtp, phoneNumber.value);
		navigateTo("/user/confirm-otp");
	} catch (error) {
		console.log("error");
	}
};

definePageMeta({
	layout: "sign-up",
});
</script>
<template>
	<div class="w-full h-full">
		<form
			class="h-[400px] gap-y-4 px-20 flex flex-col rounded-2xl justify-center border w-fit"
		>
			<h2 class="text-2xl">Enter phone number</h2>
			<div class="grid gap-y-2">
				<label for="" class="text-[15px] text-gray-900">Phone number</label>
				<input
					v-model="phoneNumber"
					required="true"
					class="border-gray-200 rounded-xl focus:ring-0 placeholder:text-gray-300"
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
	</div>
</template>
