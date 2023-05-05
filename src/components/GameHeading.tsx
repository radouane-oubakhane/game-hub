import {GameQuery} from "../App";
import {Heading} from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";

interface Props {
    gameQuery: GameQuery;
}

function GameHeading({gameQuery}: Props) {
    const genre = usePlatform(gameQuery.genreId)
    const platform = usePlatform(gameQuery.platformId);

    const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

    return (
        <Heading as="h1" marginY={5} fontSize="5xl">{heading}</Heading>
    );
}

export default GameHeading;