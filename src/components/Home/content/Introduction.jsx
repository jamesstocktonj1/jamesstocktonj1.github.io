import { Container, HStack, Box, Heading, Text, Image } from "@chakra-ui/react";
import React from "react";



const Introduction = () => {
    return (
        <Container maxW='container.lg' bg='gray.100'>
            <HStack spacing='auto' align='center'>
                <Box maxW='container.sm' p={2}>
                    <Heading fontSize='xl'>
                        About Me
                    </Heading>
                    <Text fontSize='lg' mt={2}>
                        A Third Year Electrical and Electronic Engineering  Student, currently studying at the University of Southampton.
                    </Text>
                </Box>
                <Box p={2}>
                    <Image borderRadius='full' boxSize='125px' objectFit='cover' src='/img/profilePic.jpg'/>
                </Box>
            </HStack>
        </Container>
    );
}

export default Introduction;