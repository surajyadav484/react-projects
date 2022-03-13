import { Box, Button, Flex, Text, } from '@chakra-ui/react';
import {Link} from 'react-router-dom'

const Banner = ({purpose,title1,title2,buttonText,image}) =>(
    <>
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
        <img src={image} width={200} height={200} alt="banner" />
        <Box p="5">
            <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text> 
           <Flex>
               <Text  fontSize="3xl" fontWeight="bold">{title1}</Text> 
               <Text borderRadius="5" fontWeight="bold" marginLeft="2"padding="2" backgroundColor="gray.500" color="white">{title2}</Text>
           </Flex>  
           <Button marginTop="5" fontSize="xl" bg="blue.300" color="white">
               <Link to="/">{buttonText}</Link>
           </Button>

        </Box>
    </Flex>
    
    </>
)

export default Banner;