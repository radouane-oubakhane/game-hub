import {HStack, Switch, Text, useColorMode} from "@chakra-ui/react";


function ColorModeSwitch() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <HStack>
            <Switch colorScheme="green" isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
            <Text whiteSpace="nowrap">Toggle {colorMode === 'light' ? 'Light' : 'Dark'}</Text>
        </HStack>
    )

}

export default ColorModeSwitch;