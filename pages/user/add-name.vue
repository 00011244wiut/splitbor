<script setup>
import useNotify from "@/use/notify";

const { notify } = useNotify();

const { requestData, loading: updateProfileLoading } = useApi();

const data = ref({});

const response = ref();
const updateProfile = async () => {
	try {
		response.value = await requestData("post", "user/profile", {
			params: { ...data.value },
		});

		navigateTo("/user/verification");
	} catch (error) {
		if (error.response.data.type == "validation") {
			notify({
				title: error.response.data.title,
				description: error.response.data.errors[0],
				type: "error",
				borderClass: "border-l-[16px] border-red-300",
			});
		}
	}
};

definePageMeta({
	layout: "sign-up",
});
</script>
<template>
	<div class="w-full h-full">
		<form
			class="h-[400px] gap-y-4 w-[460px] px-20 flex flex-col rounded-2xl justify-center border"
		>
			<h2 class="text-2xl">Enter your information</h2>
			<div class="grid gap-y-2">
				<label for="" class="text-[15px] text-gray-900">First Name</label>
				<input
					class="border-gray-200 rounded-xl focus:ring-0 placeholder:text-gray-300"
					type="text"
					placeholder=""
					v-model="data.firstName"
				/>
			</div>
			<div class="grid gap-y-2">
				<label for="" class="text-[15px] text-gray-900">Last Name</label>
				<input
					class="border-gray-200 rounded-xl focus:ring-0 placeholder:text-gray-300"
					type="text"
					placeholder=""
					v-model="data.lastName"
				/>
			</div>
			<button
				@click.prevent="updateProfile()"
				class="w-full py-2 text-sm text-center text-white bg-blue-600 rounded-xl"
			>
				{{ updateProfileLoading ? "Adding.." : "Add" }}
			</button>
		</form>
	</div>
</template>
