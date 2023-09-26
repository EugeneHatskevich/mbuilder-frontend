import axios, {AxiosInstance} from "axios";
import {ApiConstants} from "../components/types/constants/api.constants";



export const instance: AxiosInstance = axios.create({
    withCredentials: true,
    baseURL: `${ApiConstants.BASE_URL}:${ApiConstants.PORT}/`,
})

export const authInstance: AxiosInstance = axios.create({
    baseURL: `${ApiConstants.BASE_URL}:${ApiConstants.PORT}/`,
})

authInstance.interceptors.response.use((result) => {
    return result.data;
    },

    async (error) => {
        return error.response.data;
})

instance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.token}`

    return config
})

instance.interceptors.response.use((result) => {
    return result.data;
})