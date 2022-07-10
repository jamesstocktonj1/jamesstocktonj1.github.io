import { Container, VStack } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import Banner from "../shared/Banner/Banner";
import projectContent from "../../constants/projectContent";


const ProjectMissing = ({ route }) => {
    return (
        <Container centerContent>
            Project Missing.
        </Container>
    );
}


const ProjectWrapper = ({ content }) => {

    return (
        <Container centerContent>
            Project {content.title} Found.
        </Container> 
    );
}


const Project = () => {

    const { article } = useParams();

    let articleContent = <ProjectMissing route={article}/>;
    if(projectContent[article] !== undefined) {
        articleContent = <ProjectWrapper content={projectContent[article]} />;
        console.log("Project Found");
    }

    return (
        <VStack>
            <Banner />
            {articleContent}
        </VStack>
    );
}


export default Project;