<script setup>
definePageMeta({
	layout: "landing",
});
</script>
<template>
	<div class="px-40 pb-4 mt-20 space-y-24">
		<LandingHero />
		<LandingFeatures />
		<LandingFeatureMobiles />

		<div
			class="flex flex-col items-center py-24 bg-pink-200 gap-y-12 rounded-3xl"
		>
			<h1 class="px-20 font-bold text-center text-7xl">
				Want to allow your customers split payments in store or on website?
			</h1>
			<button
				@click="$router.push('/merchant/sign-up')"
				class="px-8 py-3 mx-auto text-lg text-white bg-black rounded-lg"
			>
				Become a merchant
			</button>
		</div>
		<div class="grid space-y-12 place-items-center">
			<h1 class="text-5xl font-bold text-center">
				Stores to pay with Splitbor
			</h1>

			<div class="w-full pl-36"><LandingPayWith /></div>
		</div>
	</div>
</template>
