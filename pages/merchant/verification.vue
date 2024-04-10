<script setup>
definePageMeta({
	layout: "merchant-logged-in",
});
</script>

<template>
	<div class="flex items-center justify-center h-full gap-x-11">
		<img src="/static-images/verification-image.png" alt="" />

		<form
			class="py-7 gap-y-4 w-[460px] px-4 flex flex-col rounded-2xl justify-center border"
		>
			<h2 class="text-2xl">Verify your identity</h2>
			<div class="grid gap-y-2">
				<label for="" class="text-[15px] text-gray-900"
					>Passport / ID Card</label
				>
				<div class="flex flex-col items-center py-4 border rounded-xl">
					<Icon class="text-6xl" name="uil:cloud-upload" />
					<p class="text-xs text-dust-300">Drag your file or select</p>
				</div>
			</div>
			<div class="grid gap-y-2">
				<label for="" class="text-[15px] text-gray-900"
					>Selfie with your document</label
				>
				<div class="flex flex-col items-center py-4 border rounded-xl">
					<Icon class="text-6xl" name="uil:cloud-upload" />
					<p class="text-xs text-dust-300">Drag your file or select</p>
				</div>
			</div>
			<NuxtLink
				to="/merchant/bank-info"
				class="w-full py-2 text-sm text-center text-white bg-blue-600 rounded-xl"
			>
				Confirm
			</NuxtLink>
		</form>
	</div>
</template>
