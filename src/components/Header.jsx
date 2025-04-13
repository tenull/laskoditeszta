import React, { useState, useEffect } from 'react';
import { Box, Flex, HStack, Text, IconButton, Container, Button, Link, Image } from "@chakra-ui/react";
import NavLink from "./NavLink";
import { Link as ReactLink } from 'react-router-dom';
import { useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerFooter } from '@chakra-ui/react';
import {
    CloseIcon,
    HamburgerIcon,
} from '@chakra-ui/icons';
import { FaPhoneVolume } from "react-icons/fa6";
const Links = [
    { name: 'BEMUTATKOZÁS', route: '/bemutatkozas' },
    { name: 'TERMÉKEINK', route: '/termekeink' },
    // { name: 'GALÉRIA', route: '/galeria' },
    { name: 'KAPCSOLAT', route: '/kapcsolat' },
];

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleScroll = () => {
        if (window.scrollY > 10) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };
    const handleTopScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Box
            bg={scrolled ? 'red.600' : 'transparent'}
            px={{ base: '0', md: '0' }}
            position='fixed'
            boxShadow={scrolled ? 'dark-lg' : 'none'}
            // borderBottom='1px solid'
            w='100%'
            top='0'
            zIndex='sticky'
            transition='background-color 0.3s'
        >
            <Container maxW='container.xl' >
                <Flex h='65px' alignItems='center' justifyContent='space-between'>
                    <HStack spacing='8' alignItems='center'>
                        <div style={{
                            display: 'flex', minWidth: '90px',
                            // paddingLeft: '50px'
                        }}>
                            <Box as={ReactLink} top='20px' onClick={handleTopScroll} to='/' position='relative' mt={3} alignItems="flex-start" display="flex">
                                <Image
                                    src='../images/laskoditesztalogo.png'
                                    filter={scrolled ? 'drop-shadow(4px 4px 4px rgba(0, 0, 0, .45))' : 'none'}
                                    //    rounded='50%'
                                    //    border={0}
                                    //    boxShadow={scrolled ? 'dark-lg': 'none'}
                                    width={{ base: '80px', md: '80px' }}
                                />
                                <Box as={ReactLink} onClick={handleTopScroll} to='/' position='relative' mt={3} alignItems="center" justifyContent='flex-start' display="flex" flexDirection="column">
                                    <Text as="b" color='white' href="#wave">
                                        LASKODI
                                    </Text>
                                    <Text top={5} position='absolute' as="b" fontSize="10px" alignItems="center" color="white">
                                        TÉSZTA
                                    </Text>
                                </Box>
                            </Box>

                        </div>
                    </HStack>
                    <Flex h='16' alignItems='center' justifyContent='space-between'>
                        <HStack as='nav' spacing='4' display={{ base: 'none', md: 'flex' }}>
                            <div style={{
                                display: 'flex', minWidth: '90px',
                                // paddingRight: '150px'
                            }}>
                                {Links.map((link) => (
                                    <NavLink
                                        route={link.route}
                                        key={link.route}
                                    >
                                        <Text

                                            display='flex' alignItems='center' fontWeight='medium'>
                                            {link.name}
                                        </Text>
                                    </NavLink>
                                ))}

                                <Button
                                    left='12px'
                                    as={Link}
                                    href="tel:+3645709508"
                                    _focus={{
                                        textDecoration: 'none'
                                    }}
                                    bg="transparent"
                                    border='2px'
                                    sx={{
                                        '> svg': { transition: 'transform 0.3s ease-in-out' },
                                        '&:hover > svg': { transform: 'scale(1.3)' }
                                    }}
                                    _hover={{
                                        color: 'yellow.400',
                                        textDecoration: 'none'
                                    }}
                                    display="flex"
                                    px={3}
                                    py={1}
                                    alignItems="center"
                                    color="white"
                                    fontWeight="medium"
                                >
                                    <FaPhoneVolume style={{ marginRight: '4' }} />
                                    +36/45-709-508
                                </Button>

                            </div>

                        </HStack>
                        {isOpen ? null : (<Box border='2px solid white' padding={2} cursor='pointer' display={{ base: 'block', md: 'none' }}>
                            <HamburgerIcon color='white' fontSize={25} onClick={onOpen} />
                        </Box>)}
                    </Flex>
                </Flex>
                <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={{ base: 'full', md: 'md' }}>
                    <DrawerOverlay />
                    <DrawerContent bg="rgba(0, 0, 0, 0.7)">
                        <DrawerHeader display='flex' justifyContent='flex-end'>
                            <Box
                                border='2px solid white'
                                display="flex"
                                justifyContent="flex-end"
                                alignItems="center"
                                w="45px"
                                _hover={{
                                    color: 'yellow.400'
                                }}
                            >
                                <IconButton
                                    icon={<CloseIcon color='white' fontSize={20} />}
                                    onClick={onClose}
                                    bg='transparent'
                                    _hover={{
                                        color: 'yellow.400'
                                    }}
                                    _focus={{
                                        boxShadow: 'none',
                                        backgroundColor: 'transparent'
                                    }}
                                />
                            </Box>
                        </DrawerHeader>

                        {Links.map((link) => (
                            <NavLink
                                route={link.route}
                                key={link.route}
                            >
                                <Text display='flex' alignItems='center' fontWeight='medium' onClick={onClose}>
                                    {link.name}
                                </Text>
                            </NavLink>
                        ))}
                    </DrawerContent>
                </Drawer>
            </Container>
        </Box>
    );
}

export default Header;
