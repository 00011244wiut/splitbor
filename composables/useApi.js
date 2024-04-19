import axios from "axios";
const token = useCookie("access-token");

const API_URL = "https://bnpl-qmob.onrender.com";

export default function useApi() {
	const loading = ref(false); // Initialize a loading ref

	async function requestData(
		method,
		endpoint,
		{ data = null, params = null, isFile = false } = {}
	) {
		try {
			loading.value = true; // Set loading to true before making the request

			let response;
			switch (method.toUpperCase()) {
				case "GET":
					response = await axios.get(`${API_URL}/${endpoint}`, {
						params: params,
						headers: {
							Authorization: token.value ? `Bearer ${token.value}` : "",
						},
					});
					break;
				case "POST":
					response = await axios.post(
						`${API_URL}/${endpoint}`,
						data,

						{
							params: params,
							headers: {
								Authorization: token.value ? `Bearer ${token.value}` : "",
								"Content-Type": isFile
									? "multipart/form-data"
									: "application/json",
							},
						}
					);
					break;
				case "PUT":
					response = await axios.put(
						`${API_URL}/${endpoint}`,
						data,

						{
							params: params,
							headers: {
								Authorization: token.value ? `Bearer ${token.value}` : "",
								"Content-Type": isFile
									? "multipart/form-data"
									: "application/json",
							},
						}
					);
					break;
				case "DELETE":
					response = await axios.delete(
						`${API_URL}/${endpoint}`,

						{
							headers: {
								Authorization: token.value ? `Bearer ${token.value}` : "",
							},
						}
					);
					break;

				default:
					throw new Error(`Unsupported request method: ${method}`);
			}
			return response.data;
		} catch (error) {
			throw error;
		} finally {
			loading.value = false; // Set loading to false after request is completed
		}
	}

	return {
		requestData,
		loading, // Expose the loading ref
	};
}
