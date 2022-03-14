import {
  Box,
  Flex,
  ListItem,
  Menu,
  MenuItem,
  MenuList,
  Spacer,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";

const Navbar = () => (
  <Box
    bgColor="white"
    width="100%"
    position="fixed"
    boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
    zIndex="overlay"
  >
    <UnorderedList listStyleType="none" display="flex">
      <ListItem margin="2" fontSize="3xl" color="blue.400" fontWeight="bold">
        <Link to="/">Property World</Link>
      </ListItem>
      <ListItem margin="5">
        <Link to="/">Home</Link>
      </ListItem>
      <ListItem margin="5">
        <Link to="/">About Us</Link>
      </ListItem>
      <ListItem margin="5">
        <Link to="/">Contact Us</Link>
      </ListItem>
    </UnorderedList>
  </Box>
);
export default Navbar;
