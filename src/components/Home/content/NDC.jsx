import { HStack, Box, Heading, Text, Image } from "@chakra-ui/react";
import React from "react";
import CardContainer from "../../shared/CardContainer/CardContainer";



const NDC = () => {

    return (
        <CardContainer>
            <HStack spacing='auto' align='center'>
                <Box p={2}>
                    <Heading fontSize='xl'>
                        Internship - NDC
                    </Heading>
                    <Text fontSize='md'>
                        July - September 2020
                    </Text>
                    <Text fontSize='lg' maxW='2xl' mt={2}>
                        - Reviewed Bill of Materials (BOM) checking for hazardous substances (RoHS compliance) and obsolescence management. <p />
                        - Performed testing and problem solving such as identifying a screen which didn't function at low temperatures.  <p />
                        - Designed and prototyped an input isolation circuit in Altium which was included in the final product design.
                    </Text>
                </Box>
                <Box p={2}>
                    <Image maxH='150px' objectFit='cover' src='/img/NDC-Nordson-logo.jpg'/>
                </Box>
            </HStack>
        </CardContainer>
    );
}

export default NDC;