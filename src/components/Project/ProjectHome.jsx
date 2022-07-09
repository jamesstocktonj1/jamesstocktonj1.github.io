import { Container, VStack } from "@chakra-ui/react";
import React from "react";
import Banner from "../shared/Banner/Banner";


const ProjectHome = () => {
    return (
        <VStack>
            <Banner />
            <Container centerContent>
                Hello Project Home!
            </Container>
        </VStack>
    );
}


export default ProjectHome;