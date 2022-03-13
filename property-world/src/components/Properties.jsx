import { Link } from "react-router-dom";
import { Box, Flex, Text, Image, Avatar } from "@chakra-ui/react";
import defaultImage from "../assets/images/defaultImage.jpg";
import { GoVerified } from "react-icons/go";
import { BsGridFill } from "react-icons/bs";
import { FaBed, FaBath } from "react-icons/fa";

import millify from "millify";

const Properties = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  },
}) => (
  <Link to={`/properties/${externalID}`}>
    <Flex
      flexWrap="wrap"
      w="420px"
      p="5"
      paddingTop="0"
      justifyContent="flex-start"
      cursor="pointer"
    >
      <Box>
        <Image
          src={coverPhoto ? coverPhoto.url : defaultImage}
          width="400px"
          height="260px"
          alt="property"
        />
      </Box>
      <Box w="full">
        <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            <Box paddingRight="3" color="green.400">
              {isVerified && <GoVerified />}
            </Box>
            <Text fontWeight="bold" fontSize="lg">
              AED {millify(price)}
              {rentFrequency && `/${rentFrequency}`}
            </Text>
          </Flex>
          <Box>
            <Avatar size="md" src={agency?.logo?.url} />
          </Box>
        </Flex>

        <Flex
          alignItems="center"
          p="1"
          justifyContent="space-between"
          w="250PX"
          color="blue.400"
        >
          {rooms}
          <FaBed /> | {baths}
          <FaBath />| {millify(area)} sqrt
          <BsGridFill />
        </Flex>
        <Text fontSize="lg">
          {title.length > 30 ? `${title.substring(0, 30)}...` : title}
        </Text>
      </Box>
    </Flex>
  </Link>
);

export default Properties;
