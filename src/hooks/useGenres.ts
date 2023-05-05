import {useQuery} from "@tanstack/react-query";
import ApiClient, {FetchResponse} from "../services/api-client";
import genres from "../data/genres";

const apiClient = new ApiClient<Genre>('/genres')


export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const UseGenres = () => useQuery<FetchResponse<Genre>, Error>({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: genres
})

export default UseGenres;