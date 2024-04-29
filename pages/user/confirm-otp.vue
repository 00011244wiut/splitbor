<script setup>
import { useOtpStore } from "@/stores/otp.js";
import { useAuthStore } from "@/stores/auth.js";

import useNotify from "@/use/notify";

const { notify } = useNotify();

const { phoneNumber } = useOtpStore();
const { addUser } = useAuthStore();

const token = useCookie("access-token");

const otp = ref();

const { requestData, loading: verifyLoading } = useApi();

const response = ref();
const verify = async () => {
	const data = {
		phoneNumber: phoneNumber,
		sampleOtp: otp.value,
	};
	try {
		response.value = await requestData("post", "otp/verify", {
			params: { ...data },
		});

		token.value = response.value?.data?.accessToken;
		if (response.value?.data?.user.userState === "CompleteProfile") {
			navigateTo("/user/purchases");
			addUser();

			return;
		}
		addUser();
		navigateTo("/user/add-name");
	} catch (error) {
		if (error.response.data.title == "Invalid OTP") {
			notify({
				title: error.response.data.title,
				description: "The otp is Invalid",
				type: "error",
				borderClass: "border-l-[16px] border-red-300",
			});
		}
	}
};

definePageMeta({
	layout: "sign-up",
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
					placeholder="Enter your OTP"
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
