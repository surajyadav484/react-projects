import React, { useEffect, useState } from "react";
import { Text, Flex, Avatar, Spacer, Box, Image } from "@chakra-ui/react";
import { GoVerified } from "react-icons/go";
import { BsGridFill } from "react-icons/bs";
import { FaBed, FaBath } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import millify from "millify";

const PropertyDetails = () => {
  const { externalID } = useParams();
  console.log(externalID);

  const [propertyDetail, setPropertyDetail] = useState();

  useEffect(() => {
    // fetchApi(`${baseUrl}/properties/detail?externalID=${externalID}`)
    //   .then((response) => setPropertyDetail(response && response))
    //   .catch((error) => {
    //     console.log(error);
    //   });

    const getpropertyDetails = async () => {
      const propertyDetail = await fetchApi(
        `${baseUrl}/properties/detail?externalID=${externalID}`
      );
      console.log(propertyDetail);
      setPropertyDetail(propertyDetail && propertyDetail);
    };

    getpropertyDetails();
  }, []);

  //console.log(propertyDetail);

  return (
    <>
      {/* <Box maxWidth="90%" position="absolute" top="20" p="4">
        <Image src={propertyDetail?.photos[0]?.url} width="100%" height={400} />
        <Box w="full" p="6">
          <Flex paddingTop="2" alignItems="center">
            <Box paddingRight="3" color="green.400">
              {propertyDetail?.isVerified && <GoVerified />}
            </Box>
            <Text fontWeight="bold" fontSize="lg">
              AED {propertyDetail?.price}{" "}
              {propertyDetail?.rentFrequency &&
                `/${propertyDetail?.rentFrequency}`}
            </Text>
            <Spacer />
            <Avatar size="sm" src={propertyDetail?.agency?.logo?.url}></Avatar>
          </Flex>
          <Flex
            alignItems="center"
            p="1"
            justifyContent="space-between"
            w="250px"
            color="blue.400"
          >
            {propertyDetail?.rooms}
            <FaBed /> | {propertyDetail?.baths} <FaBath /> |{" "}
            {millify(propertyDetail?.area)} sqft <BsGridFill />
          </Flex>
          <Box marginTop="2">
            <Text fontSize="lg" marginBottom="2" fontWeight="bold">
              {propertyDetail?.title}
            </Text>
            <Text lineHeight="2" color="gray.600">
              {propertyDetail?.description}
            </Text>
          </Box>

          <Flex
            flexWrap="wrap"
            textTransform="uppercase"
            justifyContent="space-between"
          >
            <Flex
              justifyContent="space-between"
              w="400px"
              borderBottom="1px"
              borderColor="gray.100"
              p="3"
            >
              <Text>Type</Text>
              <Text fontWeight="bold">{propertyDetail?.type}</Text>
            </Flex>
            <Flex
              justifyContent="space-between"
              w="400px"
              borderBottom="1px"
              borderColor="gray.100"
              p="3"
            >
              <Text>Purpose</Text>
              <Text fontWeight="bold">{propertyDetail?.purpose}</Text>
            </Flex>
            {propertyDetail?.furnishingStatus && (
              <Flex
                justifyContent="space-between"
                w="400px"
                borderBottom="1px"
                borderColor="gray.100"
                p="3"
              >
                <Text>Furnishing Status</Text>
                <Text fontWeight="bold">
                  {propertyDetail?.furnishingStatus}
                </Text>
              </Flex>
            )}
          </Flex>

          <Box>
            {propertyDetail?.amenities?.length && (
              <Text fontSize="2xl" fontWeight="black" marginTop="5">
                Facilites:
              </Text>
            )}
            <Flex flexWrap="wrap">
              {propertyDetail?.amenities?.map((item) =>
                item?.amenities?.map((amenity) => (
                  <Text
                    key={amenity.text}
                    fontWeight="bold"
                    color="blue.400"
                    fontSize="l"
                    p="2"
                    bg="gray.200"
                    m="1"
                    borderRadius="5"
                  >
                    {amenity.text}
                  </Text>
                ))
              )}
            </Flex>
          </Box>
        </Box>
      </Box> */}
    </>
  );
};

export default PropertyDetails;
