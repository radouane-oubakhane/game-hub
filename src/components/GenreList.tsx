import useGenres from "../hooks/useGenres";
import {Button, Heading, HStack, Image, List, ListItem} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";
import React from "react";
import useGameQueryStore from "../store";


function GenreList() {
    const { data: genres, error, isLoading} = useGenres();
    const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId)
    const setSelectedGanreId = useGameQueryStore(s => s.setGenreId)
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8,];

    if (error) return null;

    return (
        <>
            <Heading fontSize="2xl" marginY={3}>Genres</Heading>
            <List>
                {isLoading && skeletons.map(skeleton =>
                    <ListItem  paddingY="5px" key={skeleton}>
                        <GenreSkeleton />
                    </ListItem>)}
                {genres?.results.map(genre =>
                    <ListItem key={genre.id} paddingY="5px">
                        <HStack>
                            <Image
                                boxSize="32px"
                                borderRadius={8}
                                objectFit="cover"
                                src={getCroppedImageUrl(genre.image_background)}
                            />
                            <Button
                                whiteSpace="normal"
                                textAlign="left"
                                fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
                                variant="link"
                                fontSize="lg"
                                onClick={() => setSelectedGanreId(genre.id)}
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>)}
            </List>
        </>

    );

}

export default GenreList;