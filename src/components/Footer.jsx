import { Box, Container, Text, Flex, Stack, Image, VStack, Link, Icon } from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom';
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { PhoneIcon, TimeIcon } from '@chakra-ui/icons';
import { MdMail } from "react-icons/md";
import { useLocation } from 'react-router-dom';
const Links = [
    { name: 'BEMUTATKOZÁS', route: '/bemutatkozas' },
    { name: 'TÉSZTÁINK', route: '/tesztaink' },
    { name: 'KAPCSOLAT', route: '/kapcsolat' },
];

const handleTopScroll = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

const Footer = () => {
    const location = useLocation();
    const isGradient = location.pathname === '/bemutatkozas' || location.pathname === '/';

    return (
        <Box position='relative' fontFamily='Poppins'  color='white' pt={10} bg='gray.900'>
           <Box
    position='absolute'
    top={{ base: '-30px', md: '-60px' }}
    width='100%'
    height='auto'
>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', height: '80px', }}
    >
        <defs>
            {/* Definiáljuk a linear gradientet, ha szükséges */}
            {isGradient && (
                <linearGradient id="myGradient" gradientTransform="rotate(90)">
                    <stop offset="30%" stopColor="#171923" />
                    <stop offset="0%" stopColor="#171923" />
                </linearGradient>
            )}
        </defs>
        <path
            fill={isGradient ? 'url(#myGradient)' : '#171923'}  
            fillOpacity="1"
            d="M0,64L60,58.7C120,53,240,43,360,37.3C480,32,600,32,720,58.7C840,85,960,139,1080,165.3C1200,192,1320,192,1380,192L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            style={{ transition: 'all 0.3s ease-in-out' }}
        />
    </svg>
</Box>




            <Container py={10} display='flex' flexDirection={{ base: 'column', md: 'row' }} flexWrap='wrap' justifyContent='space-between' alignItems='center' maxW='container.xl'>
                <Box display={{ base: 'flex', md: 'flex' }} justifyContent='space-between' width={{ base: '90%', md: '55%' }}>
                    <Box width='33%'>
                        <Text mt={3} fontSize='sm' mb={5}>Linkek</Text>
                        <VStack align="start" spacing={4} flex="1">

                            <Link display='flex' alignItems='center' _hover={{ color: 'red.600' }} textDecoration='none' as={RouterLink} to="/bemutatkozas" onClick={handleTopScroll}>
                                <MdKeyboardArrowRight />  Bemutatkozás
                            </Link>

                            <Link display='flex' alignItems='center' _hover={{ color: 'red.600' }} textDecoration='none' as={RouterLink} to="/termekeink" onClick={handleTopScroll}>
                                <MdKeyboardArrowRight />  Termékeink
                            </Link>
                            <Link display='flex' alignItems='center' _hover={{ color: 'red.600' }} textDecoration='none' as={RouterLink} to="/kapcsolat" onClick={handleTopScroll}>
                                <MdKeyboardArrowRight />  Kapcsolat
                            </Link>
                        </VStack>
                    </Box>
                    <Box display='flex' alignItems='center' justifyContent='center' width='33%'>
                        <Image
                           
                            src="../images/laskoditesztalogo.png"
                            width={{ base: '120px', md: '150px' }}
                            height={{ base: '120px', md: '160px' }}
                        />
                    </Box>
                </Box>
                <Box width={{ base: '100%', md: '33%' }} mt={{ base: '10', md: '0' }}>
                    <Text fontSize='sm' textAlign={{ base: 'center', md: 'end' }}>Elérhetőségek</Text>
                    <VStack pt={{ base: '0', md: '5' }} align={{ base: 'start', md: 'end' }} spacing={2} mb={5}>
                        <Text fontSize="lg" display='flex' alignItems='center'>
                            <Icon as={MdLocationPin} me={2} /> Laskod, 4543 Szabadság út 31.
                        </Text>
                        <Link href="tel:+36301628381" _hover={{ color: 'red.600' }} display='flex' alignItems='center'>
                            <Icon as={PhoneIcon} me={2} /> +36 30-162-8381
                        </Link>
                        <Link href="mailto:laskoditeszta@hu.inter.net" _hover={{ color: 'red.600' }} display='flex' alignItems='center'>
                            <Icon as={MdMail} me={2} /> laskoditeszta@hu.inter.net
                        </Link>
                    </VStack>
                </Box>
            </Container>
            <Container pt={2} pb={6} borderTop='1px solid white' maxW='container.xl'>
                <Flex mx="auto" maxW="1200px" justifyContent="center" alignItems="center">
                    <Text fontSize="sm">Laskodi Tészta © 2024 Minden jog fenntartva</Text>
                </Flex>
            </Container>
        </Box>
    );
}

export default Footer;