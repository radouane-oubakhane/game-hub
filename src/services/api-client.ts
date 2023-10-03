import axios, {AxiosRequestConfig} from "axios"

const apiKey = import.meta.env.VITE_RAWG_API_KEY;

export interface FetchResponse<T> {
    count: number;
    next: string | null;
    results: T[];
}

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: apiKey
    }
})

export default class ApiClient<T> {
    endpoint: string

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }
    getAll = (config: AxiosRequestConfig) =>
        axiosInstance.get<FetchResponse<T>>(this.endpoint, config)
            .then(res => res.data);

    get = (id: number | string) =>
        axiosInstance.get<T>(this.endpoint + '/' + id)
            .then(res => res.data)

}