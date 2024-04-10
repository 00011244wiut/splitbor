<template>
	<div class="pt-2 mb-6 flex flex-col space-y-28 h-full">
		<div class="flex items-center justify-between px-16">
			<img
				src="/static-images/logo.png"
				class="object-cover h-[54px]"
				alt="logo"
			/>

			<NuxtLink to="/" class="underline underline-offset-2">
				Want to buy products, by splitting payments?
			</NuxtLink>
			<NuxtLink to="/merchant/sign-up" class="text-base text-gray-950"
				>Sign in</NuxtLink
			>
		</div>
		<div class="px-40 pb-4 space-y-24">
			<div class="space-y-5 pl-20">
				<h1 class="text-[64px] w-[1000px] leading-[60px] font-bold">
					Connect Splitbor and get more customers
				</h1>
				<p class="text-lg text-dust-500 w-[500px]">
					Make your customers able to divide the purchase into 4 shares on the
					website, store checkout or in the application
				</p>
			</div>
			<div class="grid grid-cols-3 gap-x-28">
				<div class="space-y-6">
					<img
						src="/static-images/pink-mobile.png"
						class="w-full"
						alt="pink-mobile"
					/>
					<p class="text-base font-bold">
						Build your shopping cart in one of our partner’s website or store
						and select 'Split Payment' as your payment method.
					</p>
				</div>

				<div class="space-y-6">
					<img
						src="/static-images/water-mobile.png"
						class="w-full"
						alt="pink-mobile"
					/>
					<p class="text-base font-bold">
						Build your shopping cart in one of our partner’s website or store
						and select 'Split Payment' as your payment method.
					</p>
				</div>

				<div class="space-y-6 flex flex-col justify-center">
					<h2 class="text-3xl font-bold">Commission 2% of the order amount</h2>
					<p class="text-lg">
						Customers tend to spend more if splitting the payment available. No
						extra fees for customers, zero interest. Works as a regular payment.
					</p>
				</div>
			</div>
			<div
				class="flex flex-col items-center py-24 bg-blue-400 text-white gap-y-12 rounded-3xl"
			>
				<h1 class="px-20 font-bold text-center text-7xl">
					Sign up in Splitbor, start splitting today with fully remote
					registration
				</h1>
				<button
					@click="$router.push('/merchant/sign-up')"
					class="px-8 py-3 mx-auto text-lg text-white bg-black rounded-lg"
				>
					Become a merchant
				</button>
			</div>
		</div>

		<Footer />
	</div>
</template>
