import React, {ReactNode} from "react";
import {Box, Heading} from "@chakra-ui/react";

type Props = {
    term: string;
    children: ReactNode | ReactNode[];
};
export const DefinitionItem = ({term, children}: Props) => {
    return (
        <Box marginY={5}>
            <Heading as='dt' fontSize='md' color={'gray.600'}>
                {term}
            </Heading>
            <dd>
                {children}
            </dd>
        </Box>
    );
};