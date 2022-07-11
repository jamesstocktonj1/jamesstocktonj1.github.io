import { Container, VStack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import LargeBanner from '../shared/Banner/LargeBanner';
import Section from '../shared/Section/Section';
import Introduction from './content/Introduction';
import University from './content/University';
import NDC from './content/NDC';



const Home = () => {

    useEffect(() => {
        document.title = 'James Stockton';
    }, []);

    return (
        <VStack>
            <LargeBanner />
            <Introduction />
            <University />
            <NDC />
        </VStack>
    );
}


export default Home;