import { Flex } from "@chakra-ui/react";
import Banner from "./components/Banner";

function App() {
  return (
    <>
      <h1>Navbar</h1>
      <Flex justifyContent="center" alignItems="center">
        <Banner title="Property for Sale" />
      </Flex>
      <Flex justifyContent="center" alignItems="center">
        Data
      </Flex>
      <Flex justifyContent="center" alignItems="center">
        <Banner title="Property for Rent" />
      </Flex>
      <Flex justifyContent="center" alignItems="center">
        Data
      </Flex>
    </>
  );
}

export default App;
