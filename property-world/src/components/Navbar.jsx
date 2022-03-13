import { Box, Flex, ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";

const Navbar = () => (
  <Box
    bgColor="white"
    width="100%"
    position="fixed"
    boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
    zIndex="overlay"
  >
    <UnorderedList listStyleType="none" display="flex">
      <ListItem margin="5">Home</ListItem>
      <ListItem margin="5">About Us</ListItem>
      <ListItem margin="5">Contact Us</ListItem>
    </UnorderedList>
  </Box>
);
export default Navbar;
