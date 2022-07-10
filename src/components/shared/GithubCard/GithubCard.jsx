import { Box, useColorModeValue } from '@chakra-ui/react';
import React from 'react';



const GithubCard = () => {

    return (
        <Box 
            w={'full'}
            h={'240px'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'md'}
            >
            Hello Card
        </Box>
    );
}


export default GithubCard;