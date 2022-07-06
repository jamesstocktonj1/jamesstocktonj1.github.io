import { Button, Container, Stack } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';



const Banner = () => {

    const navigate = useNavigate();

    return (
        <Container>
            <Stack direction='row' spacing={4} align='center'>
                <Button variant='ghost' size='sm' onClick={() => {navigate('/home')}}>
                    Home
                </Button>
                <Button variant='ghost' size='sm' onClick={() => {navigate('/education')}}>
                    Education
                </Button>
                <Button variant='ghost' size='sm' onClick={() => {navigate('/work')}}>
                    Experience
                </Button>
                <Button variant='ghost' size='sm' onClick={() => {navigate('/project')}}>
                    Projects
                </Button>
                <Button variant='ghost' size='sm' onClick={() => {navigate('/music')}}>
                    Music
                </Button>
                <Button variant='ghost' size='sm' onClick={() => {navigate('/contact')}}>
                    Contact
                </Button>
            </Stack>
            
        </Container>
    );
}


export default Banner;