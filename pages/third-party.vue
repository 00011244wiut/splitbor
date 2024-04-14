<script setup>
const open = ref(false);
</script>
<template>
	<BaseModal autoclose bodyClass="max-w-[600px] w-full" v-model="open">
		<template #content>
			<div class="space-y-4">
				<div class="flex justify-between">
					<img
						src="/static-images/logo.png"
						class="object-cover h-[54px]"
						alt="logo"
					/>
					<Icon
						@click="open = false"
						name="material-symbols:close"
						class="text-2xl cursor-pointer"
					/>
				</div>
				<p class="text-2xl font-medium">Pay First 25% and Get Product Now</p>
				<p class="text-sm">Rest will be charged after 30 days</p>
				<div class="flex justify-between">
					<div class="flex gap-x-4">
						<img
							src="/static-images/lightning.svg"
							class="h-[25px]"
							alt="lightning"
						/>
						<p>Without any comission</p>
					</div>
					<di class="flex gap-x-4">
						<img
							src="/static-images/card.svg"
							class="h-[25px]"
							alt="lightning"
						/>
						<p>As a regular payment with card</p>
					</di>
				</div>
				<div
					class="gap-x-4 bg-[#F6F7F8] rounded-md place-content-center h-[99px] grid grid-cols-4"
				>
					<div class="space-y-2">
						<div class="h-[6px] rounded-md bg-[#428BF9]"></div>
						<div>
							<p>payment today</p>
							<p>424 500 UZS</p>
						</div>
					</div>
					<div class="space-y-2">
						<div class="h-[6px] rounded-md bg-[#D8D9DA]"></div>
						<div>
							<p>18 April</p>
							<p>424 500 UZS</p>
						</div>
					</div>

					<div class="space-y-2">
						<div class="h-[6px] rounded-md bg-[#D8D9DA]"></div>
						<div>
							<p>18 may</p>
							<p>424 500 UZS</p>
						</div>
					</div>

					<div class="space-y-2">
						<div class="h-[6px] rounded-md bg-[#D8D9DA]"></div>
						<div>
							<p>18 june</p>
							<p>424 500 UZS</p>
						</div>
					</div>
				</div>
				<button
					@click="open = false"
					class="w-full bg-black text-white py-4 rounded-3xl"
				>
					Pay Now
				</button>
			</div>
		</template>
	</BaseModal>

	<div class="px-28 pt-6 space-y-12">
		<div class="flex items-center justify-between">
			<Icon class="text-5xl" name="simple-icons:nike" />
			<ul class="flex gap-x-6 text-lg font-bold">
				<li>New & Featured</li>
				<li>Men</li>
				<li>Women</li>
				<li>Kids</li>
				<li>Accessories</li>
				<li>Sale</li>
			</ul>
			<div class="flex gap-x-4 items-center">
				<input
					class="border-gray-200 h-fit bg-gray-200 rounded-xl focus:ring-0 placeholder:text-gray-800"
					type="text"
					name="cardNumber"
					placeholder="Search"
				/>
				<img
					src="/static-images/profile-placeholder.png"
					class="w-8 h-8 rounded-full"
					alt=""
				/>
				<p>Aziz</p>
			</div>
		</div>
		<div class="grid place-items-center grid-cols-2 px-12">
			<img src="/static-images/nike-shoe.png" alt="" />
			<div class="space-y-12 w-[500px]">
				<div class="space-y-2">
					<h1 class="font-bold text-[42px]">Nike Downshifter 13</h1>
					<p class="text-[22px]">Men Running Shoes</p>
					<p class="text-[31px]">1 698 000 UZS</p>
				</div>

				<div class="border rounded-xl p-4 space-y-2">
					<p class="text-lg">
						<span class="text-[#428BF9]">Without</span> interest fee for 4 month
					</p>
					<div
						class="gap-x-4 rounded-md place-content-center h-[99px] grid grid-cols-4"
					>
						<div class="space-y-2">
							<div class="h-[6px] rounded-md bg-[#428BF9]"></div>
							<div>
								<p>today</p>
								<p>424 500 UZS</p>
							</div>
						</div>
						<div class="space-y-2">
							<div class="h-[6px] rounded-md bg-[#D8D9DA]"></div>
							<div>
								<p>18 April</p>
								<p>424 500 UZS</p>
							</div>
						</div>

						<div class="space-y-2">
							<div class="h-[6px] rounded-md bg-[#D8D9DA]"></div>
							<div>
								<p>18 may</p>
								<p>424 500 UZS</p>
							</div>
						</div>

						<div class="space-y-2">
							<div class="h-[6px] rounded-md bg-[#D8D9DA]"></div>
							<div>
								<p>18 june</p>
								<p>424 500 UZS</p>
							</div>
						</div>
					</div>
					<div @click="open = true" class="border-t pt-4 flex justify-between">
						<p class="text-lg">
							Use <span class="text-[#428BF9]">Splitbor</span> to split the
							payment
						</p>
						<Icon name="iconamoon:arrow-right-2-light" class="text-2xl" />
					</div>
				</div>
				<div class="space-y-2">
					<button
						@click="open = true"
						class="bg-[#428BF9] font-medium text-white w-full py-4 rounded-3xl"
					>
						Buy now with Splitbor
					</button>
					<p class="text-center text-gray-400">
						Pay with installments without any fees
					</p>
					<button class="w-full bg-black text-white py-4 rounded-3xl">
						Add to Bag
					</button>
				</div>
			</div>
		</div>
	</div>
	<div class="h-[300px] px-28 bg-black grid pt-8 grid-cols-2 mt-12 text-white">
		<div class="grid grid-cols-3 px-28">
			<ul>
				<li>Resources</li>
				<li>Gift Cards</li>
				<li>Find a Store</li>
				<li>Become a Member</li>
				<li>Nike x NBA</li>
				<li>Nike Journal</li>
				<li>Site Feedback</li>
			</ul>
			<ul>
				<li>Resources</li>
				<li>Gift Cards</li>
				<li>Find a Store</li>
				<li>Become a Member</li>
				<li>Nike x NBA</li>
				<li>Nike Journal</li>
				<li>Site Feedback</li>
			</ul>
			<ul>
				<li>Resources</li>
				<li>Gift Cards</li>
				<li>Find a Store</li>
				<li>Become a Member</li>
				<li>Nike x NBA</li>
				<li>Nike Journal</li>
				<li>Site Feedback</li>
			</ul>
		</div>
		<div class="flex flex-col items-end">
			<Icon class="text-5xl" name="simple-icons:nike" />
			<p>Nike Inc. All Rights Reserved</p>
		</div>
	</div>
</template>
