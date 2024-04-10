<script setup>
import { useOtpStore } from "@/stores/otp.js";
const { otp, phoneNumber } = useOtpStore();

const token = useCookie("access-token");

const { requestData, loading: verifyLoading } = useApi();

const response = ref();
const verify = async () => {
	const data = {
		phoneNumber: phoneNumber,
		sampleOtp: otp,
	};
	try {
		response.value = await requestData("post", "merchant/otp/verify", {
			params: { ...data },
		});

		token.value = response.value?.data?.accessToken;

		if (response.value?.data?.merchant.merchantStatus === "Complete") {
			navigateTo("/merchant/product");
			return;
		}

		navigateTo("/merchant/add-name");
	} catch (error) {
		console.log(error);
	}
};

definePageMeta({
	layout: "merchant-signup",
});
</script>

<template>
	<div class="w-full h-full">
		<form
			class="h-[400px] gap-y-4 w-[460px] px-20 flex flex-col rounded-2xl justify-center border"
		>
			<h2 class="text-2xl">Confirm OTP code</h2>
			<p>We’ve sent you SMS with one time code to confirm</p>
			<div class="grid gap-y-2">
				<label for="" class="text-[15px] text-gray-900">Code</label>
				<input
					v-model="otp"
					class="border-gray-200 rounded-xl focus:ring-0 placeholder:text-gray-300"
					type="text"
					placeholder=""
				/>
			</div>
			<button
				@click.prevent="verify()"
				class="w-full py-2 text-sm text-center text-white bg-blue-600 rounded-xl"
			>
				{{ verifyLoading ? "Confirming..." : "Confirm" }}
			</button>
		</form>
	</div>
</template>
