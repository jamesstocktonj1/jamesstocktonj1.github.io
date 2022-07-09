import { Container, VStack } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import Banner from "../shared/Banner/Banner";


const Project = () => {

    const { article } = useParams();

    return (
        <VStack>
            <Banner />
            <Container centerContent>
                Hello Project {article}!
            </Container>
        </VStack>
    );
}


export default Project;