import axios, { AxiosError } from "axios"
import { QUERY_KEYS } from "@utils/index"
import { tokens } from "../tokens"


let API_URL = import.meta.env.VITE_API_URL
// API_URL = "http://localhost:8000"
API_URL = "https://pow6lsqqba5qkfmlchfaagegpu0hsqxz.lambda-url.us-east-1.on.aws"



const axiosInstance = axios.create({
    baseURL: API_URL,
})

let token = null

export const updateAuthToken = async (new_token: string, save?: boolean) => {
    token = new_token

    if (save) {
        localStorage.setItem(QUERY_KEYS.access_token, new_token)
    }
    axiosInstance.defaults.headers.common.Authorization = "Bearer " + new_token
    axiosInstance.defaults.headers.Authorization = "Bearer " + new_token
}



axiosInstance.interceptors.request.use(
    async (config) => {

		const fetch_token = localStorage.getItem("access_token")
        if (fetch_token) {
            await updateAuthToken(fetch_token, true)
            config.headers.Authorization = `Bearer ${fetch_token}`
        }

        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// Response interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        return response
    },
    (error: AxiosError) => {
        console.error(error?.toString())

        return Promise.reject(error)
    }
)

export default axiosInstance

const makeRequest = async (
    method: "get" | "post" | "patch" | "put" | "delete",
    path: string,
    data: any,
    headers: any = {},
) => {
    const endpoint = path ? `${API_URL}${path.charAt(0) === "/" ? "" : "/"}${path}` : null
    if (!endpoint) throw new Error("API request error: No endpoint provided")


    let config: IAxiosRequestConfig = {
        method: method,
        url: endpoint,
        data: data,
        headers: {
            "Content-Type": "application/json",
            ...headers,
        },
    }

    console.debug(`🚀 Requesting Api: %c${config.method.toUpperCase()} ===> %c${config?.url}\n`, "color: yellow", "color: yellow")

    return await axiosInstance(config)
        .then((res) => {
            return res
        })
        .catch((err) => {
            return Promise.reject(err)
        })
}

export const api = {
    get: async (path: string, headers: any = {}) => await makeRequest("get", path, null, headers),
    post: async (path: string, data: any, headers: any = {}) => await makeRequest("post", path, data, headers),
    patch: async (path: string, data: any, headers: any = {}) => await makeRequest("patch", path, data, headers),
    put: async (path: string, data: any, headers: any = {}) => await makeRequest("put", path, data, headers),
    delete: async (path: string, headers: any = {}) => await makeRequest("delete", path, null, headers),
}


interface IAxiosRequestConfig {
    method: "get" | "post" | "patch" | "put" | "delete"
    url: string
    headers: any
    data?: any
}
