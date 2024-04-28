// stores/counter.js
import { defineStore } from "pinia";
const accessToken = useCookie("access-token");
export const useAuthStore = defineStore(
	"user",
	() => {
		const isLoggedIn = ref(false);

		function addUser() {
			isLoggedIn.value = true;
		}

		function logout() {
			isLoggedIn.value = false;
			accessToken.value = null;
		}
		return { addUser, logout, isLoggedIn };
	},
	{
		persist: true,
	}
);
