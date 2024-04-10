// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			title: "Splitbor",
		},
	},
	ssr: false,
	spaLoadingTemplate: false,
	devtools: { enabled: true },
	modules: [
		"@nuxtjs/tailwindcss",
		"@nuxtjs/color-mode",
		"@vee-validate/nuxt",
		"@vueuse/nuxt",
		"nuxt-icon",
		"nuxt-headlessui",
		"@nuxt/content",
		"@pinia/nuxt",
		"nuxt-lodash",
		"@pinia-plugin-persistedstate/nuxt",
	],
	veeValidate: {
		// disable or enable auto imports
		autoImports: true,
		// Use different names for components
		componentNames: {
			Form: "VeeForm",
			Field: "VeeField",
			FieldArray: "VeeFieldArray",
			ErrorMessage: "VeeErrorMessage",
		},
	},
	headlessui: {
		prefix: "Headless",
	},

	build: {
		transpile: ["@vuepic/vue-datepicker"],
	},
	colorMode: {
		preference: "system", // default value of $colorMode.preference
		fallback: "light", // fallback value if not system preference found
		hid: "nuxt-color-mode-script",
		globalName: "__NUXT_COLOR_MODE__",
		componentName: "ColorScheme",
		classPrefix: "",
		classSuffix: "",
		storageKey: "nuxt-color-mode",
	},
});
