import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import { BsChevronDown} from "react-icons/all";


function PlatformSelector() {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>Order by: Name </MenuButton>
            <MenuList>
                <MenuItem>Name</MenuItem>
                <MenuItem>Date added</MenuItem>
                <MenuItem>Name</MenuItem>
                <MenuItem>Date added</MenuItem>
            </MenuList>
        </Menu>
    );
}

export default PlatformSelector;