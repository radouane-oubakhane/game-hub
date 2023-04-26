import useGenres from "../hooks/useGenres";
import {HStack, Image, List, ListItem, Text} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

function GenreList() {
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
                        <Text fontSize="lg">
                            {genre.name}
                        </Text>
                    </HStack>
                </ListItem>)}
        </List>
    );

}

export default GenreList;