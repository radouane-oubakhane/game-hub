import axios, {AxiosRequestConfig} from "axios"


export interface FetchResponse<T> {
    count: number;
    results: T[];
}

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '9a8cf794635b4d879f94cb7de4a1aef5'
    }
})

export default class ApiClient<T> {
    endpoint: string

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }
    getAll = (config: AxiosRequestConfig) =>
        axiosInstance.get<FetchResponse<T>>(this.endpoint, config)
            .then(res => res.data)
}