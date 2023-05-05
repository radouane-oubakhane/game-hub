import platforms from "../data/platforms";
import {useQuery} from "@tanstack/react-query";
import ms from 'ms'
import ApiClient, {FetchResponse} from "../services/api-client";

const apiClient = new ApiClient<Platform>('/platforms/lists/parents')


export interface Platform {
    id: number;
    name: string;
    slug: string;
}
const usePlatforms = () => useQuery<FetchResponse<Platform>, Error>({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'), // 24h
    initialData: platforms
})


export default usePlatforms;