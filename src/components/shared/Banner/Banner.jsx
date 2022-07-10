import { Button, Container, Stack } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';



const Banner = () => {

    const navigate = useNavigate();

    return (
        <Container>
            <Stack direction='row' spacing={4} align='center'>
                <Button variant='ghost' size='sm' onClick={() => {navigate('/react-portfolio/home')}}>
                    Home
                </Button>
                <Button variant='ghost' size='sm' onClick={() => {navigate('/react-portfolio/education')}}>
                    Education
                </Button>
                <Button variant='ghost' size='sm' onClick={() => {navigate('/react-portfolio/experience')}}>
                    Experience
                </Button>
                <Button variant='ghost' size='sm' onClick={() => {navigate('/react-portfolio/project')}}>
                    Projects
                </Button>
                <Button variant='ghost' size='sm' onClick={() => {navigate('/react-portfolio/music')}}>
                    Music
                </Button>
                <Button variant='ghost' size='sm' onClick={() => {navigate('/react-portfolio/contact')}}>
                    Contact
                </Button>
            </Stack>
            
        </Container>
    );
}


export default Banner;