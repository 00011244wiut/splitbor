<template>
	<Notify />

	<div class="flex flex-col h-screen pt-2 mb-6 space-y-8">
		<div class="flex items-center justify-between px-16">
			<img
				@click="$router.push('/')"
				src="/static-images/logo.png"
				class="object-cover h-[54px]"
				alt="logo"
			/>

			<NuxtLink to="/user/sign-up" class="text-base text-gray-950"
				>Sign in</NuxtLink
			>
		</div>
		<div
			class="grid flex-grow grid-cols-2 gap-x-11 place-items-center place-content-center"
		>
			<div class="grid w-full h-full place-content-end">
				<div
					class="h-[400px] pl-16 flex flex-col gap-y-8 justify-center rounded-3xl w-[567px] bg-blue-600"
				>
					<div>
						<h2 class="text-2xl font-bold text-white">
							Seamless Remote Signup.
						</h2>
						<p class="text-2xl text-white">
							No Office Visits, No Extra Paperwork
						</p>
					</div>
					<div>
						<h2 class="text-2xl font-bold text-white">Required documents</h2>
						<p class="text-2xl text-white">
							Company TAX ID, Passport of Business owner
						</p>
					</div>
					<div>
						<h2 class="text-2xl font-bold text-white">
							Start earning from today
						</h2>
						<p class="text-2xl text-white">
							Merchant sign up takes no more that 5 minutes with remote
							verification
						</p>
					</div>
				</div>
			</div>
			<div class="w-full h-full">
				<slot />
			</div>
		</div>

		<Footer />
	</div>
</template>
