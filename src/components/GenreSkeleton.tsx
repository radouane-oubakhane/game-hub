import { HStack, Skeleton } from "@chakra-ui/react";

function GameCardSkeleton() {
    return (
        <HStack>
            <Skeleton boxSize="32px" borderRadius={8} />
            <Skeleton height='14px' borderRadius={6}>
                <div>Radouane</div>
            </Skeleton>
        </HStack>
    );
}

export default GameCardSkeleton;