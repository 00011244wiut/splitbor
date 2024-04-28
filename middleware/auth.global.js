import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";

export default defineNuxtRouteMiddleware((to, from) => {
	const authStore = useAuthStore();
	const { isLoggedIn } = storeToRefs(authStore);
	console.log(
		"dd",
		isLoggedIn === false &&
			to.path.includes("edit") &&
			to.path.includes("add-name") &&
			to.path.includes("bank-info")
	);
	if (isLoggedIn === false && to.path.includes("add-name")) {
		return navigateTo("/");
	} else if (isLoggedIn === false && to.path.includes("bank-info")) {
		return navigateTo("/");
	} else if (isLoggedIn === false && to.path.includes("edit")) {
		return navigateTo("/");
	} else if (isLoggedIn === false && to.path.includes("add-product")) {
		return navigateTo("/");
	} else if (isLoggedIn === false && to.path.includes("company-info")) {
		return navigateTo("/");
	} else if (isLoggedIn === false && to.path.includes("product")) {
		return navigateTo("/");
	} else if (isLoggedIn === false && to.path.includes("upload-document")) {
		return navigateTo("/");
	} else if (isLoggedIn === false && to.path.includes("verification")) {
		return navigateTo("/");
	} else if (isLoggedIn === false && to.path.includes("scoring")) {
		return navigateTo("/");
	} else if (isLoggedIn === false && to.path.includes("add-card")) {
		return navigateTo("/");
	} else if (isLoggedIn === false && to.path.includes("purchases")) {
		return navigateTo("/");
	}
});
