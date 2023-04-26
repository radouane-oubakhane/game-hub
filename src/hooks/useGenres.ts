import useData from "./useData";

interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const UseGenres = () => useData<Genre>('/genres');

export default UseGenres;