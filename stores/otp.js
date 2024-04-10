// stores/counter.js
import { defineStore } from "pinia";

export const useOtpStore = defineStore("otp", () => {
	const otp = ref();
	const phoneNumber = ref();
	function addOtpAndPhone(newOtp, newPhone) {
		otp.value = newOtp;
		phoneNumber.value = newPhone;
	}

	return { otp, phoneNumber, addOtpAndPhone };
});
