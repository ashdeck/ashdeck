import axios from "axios";


const axiosInstance = axios.create({});
axios.defaults.withCredentials = true;


axiosInstance.interceptors.request.use(
	//@ts-ignore
	(config) => {
		config.timeout = 50000;
		config.withCredentials = true;
		config.headers['Access-Control-Allow-Credentials'] = true;
		//config.headers!["Authorization"] = "Bearer " + ACCESS_TOKEN;


		return config;
	},
	(error) => {
		// Handle request errors here
		return Promise.reject(error);
	},
);

// Response interceptor
axiosInstance.interceptors.response.use(
	(response) => {
		// Modify the response data here (e.g., parse, transform)

		//const { data } = response;

		return response;
	},
	(error) => {
		console.log(error);
		// return error if response exists
		if (error.response) return error?.response;

		return Promise.reject(error);
	},
);

export default axiosInstance;


const API_URL = import.meta.env.VITE_API_URL;

const makeRequest = async (method: "get" | "post" | "patch" | "delete", path: string, data: any, headers: any = {} ) => {

	const endpoint = path ? `${API_URL}${path}` : null;
	if (!endpoint) throw new Error("API request error: No endpoint provided")

	const config = {
		method: method,
		url: endpoint,
		data: data,
		withCredentials: true,
		headers: {
			"Content-Type": "application/json",
			"access-key": import.meta.env.VITE_ACCESS_KEY,
			...headers
		},
	}

	console.log(`\n\nrequesting api: %c${config.method.toUpperCase()} ===> %c${config.url}`, 'color: yellow', 'color: yellow')

	const { data: response, status } = await axiosInstance(config);
	return response;

}

export const api = {
	get : async (path: string, data: any = {}) => await makeRequest("get", path, data),
	post : async (path: string, data: any) => await makeRequest("post", path, data),
	patch : async (path: string, data: any) => await makeRequest("patch", path, data),
	delete : async (path: string, data: any) => await makeRequest("delete", path, data),
}
