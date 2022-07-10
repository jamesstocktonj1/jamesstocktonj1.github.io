import { Container, VStack, Button, HStack } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../shared/Banner/Banner";
import projectContent from "../../constants/projectContent";


const ProjectHome = () => {

    const navigate = useNavigate();

    return (
        <VStack>
            <Banner />
            <Container centerContent>
                Hello Project Home!
            </Container>
            <HStack>
                {Object.keys(projectContent).map((key) => {
                    return (<Button variant='outline' size='md' onClick={() => {navigate(key)}}>
                        {projectContent[key].title}
                    </Button>)
                })}
            </HStack>
        </VStack>
    );
}


export default ProjectHome;