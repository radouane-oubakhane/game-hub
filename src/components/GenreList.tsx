import useGenres, {Genre} from "../hooks/useGenres";
import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";
import React from "react";

interface Props {
    onSelectGenre: (genre: Genre) => void;
}



function GenreList({onSelectGenre}: Props) {
    const { data: genres, error, isLoading} = useGenres();
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8,];

    if (error) return null;

    return (
        <List>
            {isLoading && skeletons.map(skeleton =>
                    <ListItem  paddingY="5px" key={skeleton}>
                        <GenreSkeleton />
                    </ListItem>)}
            {genres.map(genre =>
                <ListItem key={genre.id} paddingY="5px">
                    <HStack>
                        <Image src={getCroppedImageUrl(genre.image_background)} boxSize="32px" borderRadius={8}/>
                        <Button
                            variant="link"
                            fontSize="lg"
                            onClick={() => onSelectGenre(genre)}
                        >
                            {genre.name}
                        </Button>
                    </HStack>
                </ListItem>)}
        </List>
    );

}

export default GenreList;