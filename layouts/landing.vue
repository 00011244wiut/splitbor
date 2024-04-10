<template>
	<div class="pt-2 mb-6 space-y-8">
		<div class="flex items-center justify-between px-16">
			<img
				@click="$router.push('/')"
				src="/static-images/logo.png"
				class="object-cover h-[54px]"
				alt="logo"
			/>

			<NuxtLink to="/merchant" class="underline underline-offset-2"
				>Allow splitting in your store</NuxtLink
			>
			<NuxtLink to="/user/sign-up" class="text-base text-gray-950"
				>Sign in</NuxtLink
			>
		</div>
		<div>
			<slot />
		</div>

		<Footer />
	</div>
</template>
