import useGenres, {Genre} from "../hooks/useGenres";
import {Button, Heading, HStack, Image, List, ListItem} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";
import React from "react";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}



function GenreList({onSelectGenre, selectedGenre}: Props) {
    const { data: genres, error, isLoading} = useGenres();
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
                                fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
                                variant="link"
                                fontSize="lg"
                                onClick={() => onSelectGenre(genre)}
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