import { Container } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";





const CardContainer = ({ children, link='' }) => {

    const navigate = useNavigate();

    const containerCallback = () => {
        if(link !== '') {
            navigate(link);
        }
    }

    return (
        <Container maxW='container.lg' bg='gray.100' onClick={containerCallback}>
            {children}
        </Container>
    );
}

export default CardContainer;