// stores/counter.js
import { defineStore } from "pinia";

export const usePurchaseStore = defineStore("purchase", () => {
	const purchase = ref();
	function addPurchase(newPurchase) {
		purchase.value = newPurchase;
	}

	return { purchase, addPurchase };
});
