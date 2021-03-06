import { HStack, Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import CardContainer from "../../shared/CardContainer/CardContainer";



const University = () => {

    return (
        <CardContainer link='/education'>
            <HStack spacing='auto' align='baseline'>
                <Box p={2}>
                    <Heading fontSize='xl'>
                        University - MEng Electrical and Electronic Engineering
                    </Heading>
                    <Text fontSize='md'>
                        2020 - Date
                    </Text>
                    <Text fontSize='lg' maxW='2xl' mt={2}>
                        Achieved a 2-1 (61.5%) in year 2. Projects include an Integrated Circuit Design project and a Smart Meter Design project.
                    </Text> 
                </Box>
                <Box p={2}>
                    <Text mt={3} fontSize='lg'>
                        Modules: <p />
                        - Digital Systems and Signal Processing <p />
                        - Computer Engineering <p />
                        - Advanced Programming <p />
                    </Text>
                </Box>
            </HStack>
        </CardContainer>
    );
}

export default University;