import { Container, Flex } from '@chakra-ui/react';
import React from 'react';
import Banner from '../shared/Banner/Banner';
import LargeBanner from '../shared/Banner/LargeBanner';
import GithubCard from '../shared/GithubCard/GithubCard';
import ProjectCard from '../shared/ProjectCard/ProjectCard';
import Section from '../shared/Section/Section';



const Home = () => {

    return (
        <Flex w='100%'>
            <LargeBanner />
        </Flex>
    );
}


export default Home;