<script setup>
import { useOtpStore } from "@/stores/otp.js";
const { phoneNumber } = useOtpStore();
import useNotify from "@/use/notify";
const { notify } = useNotify();
const router = useRouter()
import { useAuthStore } from "@/stores/auth.js";
const otp = ref();

const token = useCookie("access-token");

const { requestData, loading: verifyLoading } = useApi();
const { addUser } = useAuthStore();


const response = ref();
const verify = async () => {
    const data = {
        phoneNumber: phoneNumber,
        sampleOtp: otp.value,
    };

    try {
        await requestData("post", "merchant/otp/verify", { params: { ...data } })
            .then((res) => {
				console.log(response)
				console.log(res)
                token.value = res.data?.accessToken;
                const status = res.data?.merchant.merchantStatus;

                // Add user to context/state management or perform other necessary operations
                addUser();
				// navigateTo("/merchant/add-name");

				console.log("M status" + status)
                switch (status) {
                    case "PhoneNumberConfirmed":
						router.push({ path: "/merchant/add-name" })
                        break;
					case "NotComplete":
						router.push({ path: "/merchant/add-name" })
                        break;
                    case "LegalDataObtained":
                        outer.push({ path: "/merchant/bank-info" })
                        break;
                    case "Complete":
                        navigateTo("/merchant/product");
                        break;
                    default:
                        console.log("Unhandled merchant status: ", status);
                        // Optionally navigate to a default route or show an error
                }
            });
    } catch (error) {
        if (error.response && error.response.data && error.response.data.title === "Invalid OTP") {
            notify({
                title: error.response.data.title,
                description: "The OTP is invalid",
                type: "error",
                borderClass: "border-l-[16px] border-red-300",
            });
        } else {
            // Handle other types of errors if necessary
            console.error("Error verifying OTP: ", error);
        }
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
