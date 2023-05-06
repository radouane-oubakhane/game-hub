import {useState} from "react";
import {Button, Text} from "@chakra-ui/react";


interface Props {
    children: string;
}
export const ExpandableText = ({children}: Props) => {
    const [expanded, setExpanded] = useState(false);
    const limit = 300;
    const summary = expanded ? children : children.substring(0, limit) + '...';

    if (!children) return null;

    if (children.length <= limit)
        return <Text>{children }</Text>;

    return (
        <Text>{summary}
            <Button
                size='xs'
                marginLeft={1}
                colorScheme='yellow'
                fontWeight='bold'
                onClick={() => setExpanded(!expanded)}
            >
                {expanded ? 'Show Less' : 'Show More'}
            </Button>
        </Text>
    );
};