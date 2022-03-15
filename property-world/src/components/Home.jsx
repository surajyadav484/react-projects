import { Box, Flex, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Properties from "./Properties";
import PropertyForSaleImg from "../assets/images/PropertyForSaleImg.jpg";
import PropertyForRentImg from "../assets/images/PropertyForRentImg.jpg";

const Home = () => {
  const [propertyForSale, setPropertyForSale] = useState([]);
  const [propertyForRent, setPropertyForRent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getpropertyForRent = async () => {
      const propertyForRent = await fetchApi(
        `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
      );
      setPropertyForRent(propertyForRent?.hits);
      setIsLoading(false);
    };

    const getpropertyForSale = async () => {
      const propertyForSale = await fetchApi(
        `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
      );
      setPropertyForSale(propertyForSale?.hits);
    };

    getpropertyForRent();
    getpropertyForSale();
  }, []);

  console.log(propertyForSale);
  console.log(propertyForRent);

  return (
    <>
      {isLoading ? (
        <Box
          top="20"
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="absolute"
        >
          <Spinner size="xl" />
        </Box>
      ) : (
        <Box position="absolute" top="10">
          <Flex justifyContent="center" alignItems="center">
            <Banner
              purpose="RENT A HOME"
              title1="Rental Homes for"
              title2="Everyone"
              buttonText="Explore Renting"
              image={PropertyForRentImg}
            />
          </Flex>
          <Flex flexWrap="wrap" alignItems="center" justifyContent="center">
            {propertyForRent.map((property) => (
              <Properties property={property} key={property.id} />
            ))}
          </Flex>

          <Flex justifyContent="center" alignItems="center">
            <Banner
              purpose="BUY A HOME"
              title1="Find, Buy & Own Your"
              title2="Dream Home"
              buttonText="Explore Buying"
              image={PropertyForSaleImg}
            />
          </Flex>
          <Flex flexWrap="wrap" alignItems="center" justifyContent="center">
            {propertyForSale.map((property) => (
              <Properties property={property} key={property.id} />
            ))}
          </Flex>
        </Box>
      )}
    </>
  );
};

export default Home;
