import useTrailers from "../hooks/useTrailers";

type Props = {
    gameId: number;
};
export const GameTrailer = ({gameId}: Props) => {
    const {data: trailer, error, isLoading} = useTrailers(gameId);

    if (isLoading) return null;

    if (error) throw error;

    const first = trailer?.results[0];

    return first ? (
        <video
            src={trailer?.results[0]?.data[480]}
            poster={trailer?.results[0]?.preview}
            controls
        />
    ) : null;
};