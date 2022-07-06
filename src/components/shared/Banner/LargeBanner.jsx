import { Container, Divider, Text } from '@chakra-ui/react';
import React from 'react';
import Banner from './Banner';



const LargeBanner = () => {

    return (
        <Container centerContent>
            <Text fontSize='3xl'>
                James Stockton
            </Text>
            <Text>
                Electrical and Electronic Engineering Student
            </Text>
            <Divider />
            <Banner />
        </Container>
    );
}


export default LargeBanner;