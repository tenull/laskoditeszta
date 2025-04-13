import { Box, Container, Text, Button, Image, filter,Breadcrumb,BreadcrumbItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { tesztaData } from '../tesztaData.js';
import { IoIosCheckmark } from "react-icons/io";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Tesztaink = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedType, setSelectedType] = useState(null); // Új állapotváltozó a típushoz

    const filteredTeszta = selectedCategory
        ? tesztaData.find((teszta) => teszta.name === selectedCategory)?.tesztak
        : [];

    const filteredByType = filteredTeszta.filter(item => {
        if (!selectedType) return true; // Ha nincs kiválasztva típus, mindent mutat
        return item.csomagolas === selectedType.toLowerCase(); // Lakossági vagy Gyűjtő szűrés
    });


    const handleTopScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <Box display="flex" flexDirection="column" minHeight="100vh">
            {/* Tartalom */}
            <Box flex="1" position="relative" color='red.600'>
                {/* Fejléc rész */}
                <Box
                    backgroundImage={`linear-gradient(rgb(51, 51, 51, 0.7), #c53030),url(../images/pastafactory13.jpg)`}
                    position='relative'
                    backgroundSize="cover"
                    backgroundPosition=''
                    display='flex' alignItems='center' justifyContent='center' width='full' height={{ base: '320px', md: '420px' }}>
                    <Container display='flex' flexDirection='column' alignItems='center' justifyContent='center' maxW='container.lg' color='white'  height='100%'>

                        <Text fontSize={{ base: '5xl', md: '6xl' }} fontFamily='Montserrat,sans-serif' fontWeight='bold'>Termékeink</Text>
                        <Breadcrumb zIndex={1} fontSize={{base:'xs',md:'sm'}} spacing={{base:'3px',md:'8px'}} separator={<ChevronRightIcon color='gray.400' />}>
                        <BreadcrumbItem>
                            <Link to='/'>Főoldal</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem isCurrentPage>
                            <Link to='#'>Termékeink</Link>
                        </BreadcrumbItem>
                    </Breadcrumb>
                        <Text fontSize='2xl' position='absolute' bottom={{ base: '80px', md: '124px' }} mt={-5} fontFamily='Caveat' fontWeight='bold'>{selectedCategory}</Text>
                    </Container >
                    <Box
                        position='absolute'
                        bottom={-1}
                        width='100%'
                        height='auto'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,224L60,224C120,224,240,224,360,240C480,256,600,288,720,277.3C840,267,960,213,1080,208C1200,203,1320,245,1380,266.7L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                    </Box>
                </Box>

                {/* Kategória és termékek */}
                <Container fontFamily='Poppins' display='flex' maxW='container.xl' py={10}>
                    <Container minW='280px' rounded='md' maxW='20%' display={{ base: 'none', md: 'block' }}>
                        <Text fontFamily='Poppins'  mb={2} color='black' fontWeight='bold' fontSize="4xl">KATEGÓRIA</Text>
                        {tesztaData.map((teszta, index) => (
                            <Button
                            
                                key={teszta.name}
                                as={Link}
                                to={teszta.link}
                                onClick={() => setSelectedCategory(teszta.name)}
                                minW='100%'
                                borderTop={index === 0 ? 'none' : '2px'}
                                borderColor='red.600'
                                borderRadius='0'
                                fontSize='md'
                                fontFamily='Poppins'
                                fontWeight='500'
                                position='relative'
                                bg={selectedCategory === teszta.name ? 'red.600' : 'transparent'} // Ha kiválasztott, háttér piros
                                color={selectedCategory === teszta.name ? 'white' : 'black'} // Szöveg színe is legyen fehér, ha kiválasztott
                                _hover={{ bg: 'red.600', color: 'white' }} // Hover effektus
                                display='flex'
                                justifyContent='space-between'
                            >
                                {teszta.name}
                                {selectedCategory === teszta.name && <IoIosCheckmark style={{ position: 'absolute', right: '1px' }} fontSize='30px' />}
                            </Button>

                        ))}
                    </Container>

                    <Container maxW='80%'>

                        <Box display={{ base: 'flex', md: 'none' }} justifyContent='center' flexWrap='wrap'>
                        <Text fontFamily='Poppins' mb={2} color='black' fontWeight='bold' fontSize="4xl">KATEGÓRIA</Text>
                            {tesztaData.map((teszta, index) => (
                                <Button
                                    bg={selectedCategory === teszta.name ? 'red.600' : 'transparent'}
                                    as={Link}
                                    to={teszta.link}
                                    onClick={() => setSelectedCategory(teszta.name)}
                                    rounded='0'
                                    borderTop={index === 0 ? 'none' : '2px'}
                                    borderColor={selectedCategory ? 'red.600' : 'red.600'}
                                    color={selectedCategory === teszta.name ? 'white' : 'black'}
                                    width='100%'
                                    height='50px'
                                    // whiteSpace='normal'  
                                    // wordWrap='break-word' 
                                    // textAlign='center' 
                                    _hover={{
                                        bg: 'red.600',
                                        color: 'white',
                                        border: '2px',
                                        borderColor: 'red.600'
                                    }}
                                >
                                    {teszta.name}
                                    {selectedCategory === teszta.name && <IoIosCheckmark style={{ position: 'absolute', right: '1px' }} fontSize='30px' />}
                                </Button>
                            ))}
                        </Box>
                        {selectedCategory && (
                            <Box display='flex' justifyContent='center' gap={0}>
                                <Button
                                    bg={selectedType === "lakossagi" ? 'red.600' : 'transparent'}
                                    color={selectedType === "lakossagi" ? 'white' : 'black'}
                                    rounded='0'
                                    mt={5}
                                    border='2px solid'
                                    borderColor={selectedType === "lakossagi" ? 'red.600' : 'red.600'}
                                    width={{ base: '140px', md: '180px' }}
                                    height={{ base: '40px', md: '50px' }}
                                    fontSize={{ base: 'md', md: 'lg' }}
                                    boxSizing="border-box" // Ezt hozzáadjuk a méret fixálásához
                                    onClick={() => setSelectedType(selectedType === "lakossagi" ? null : "lakossagi")}
                                    _hover={{
                                        bg: 'red.600',
                                        color: 'white',
                                        border: '2px solid',
                                        borderColor: 'red.600'
                                    }}
                                >
                                    Lakossági
                                    {selectedType === "lakossagi" && <IoIosCheckmark style={{ position: 'absolute', right: '1px' }} fontSize='30px' />}
                                </Button>

                                <Button
                                    bg={selectedType === "gyujto" ? 'red.600' : 'transparent'}
                                    color={selectedType === "gyujto" ? 'white' : 'black'}
                                    rounded='0'
                                    mt={5}
                                    border='2px solid'
                                    borderColor={selectedType === "gyujto" ? 'red.600' : 'red.600'}
                                    width={{ base: '140px', md: '180px' }}
                                    height={{ base: '40px', md: '50px' }}
                                    fontSize={{ base: 'md', md: 'lg' }}
                                    boxSizing="border-box" // Itt is használjuk a fix méret érdekében
                                    onClick={() => setSelectedType(selectedType === "gyujto" ? null : "gyujto")}
                                    _hover={{
                                        bg: 'red.600',
                                        color: 'white',
                                        border: '2px solid',
                                        borderColor: 'red.600'
                                    }}
                                >
                                    Gyűjtő
                                    {selectedType === "gyujto" && <IoIosCheckmark style={{ position: 'absolute', right: '1px' }} fontSize='30px' />}
                                </Button>

                            </Box>
                        )}

                        <Box py={8}>
                            {filteredByType.length > 0 ? (
                                <Box
                                    display='grid'
                                    gridTemplateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
                                    gap={6}
                                >
                                    {filteredByType.map((item) => (
                                        <Link
                                        //  data-aos="fade-up" 
                                         to={`/teszta/${item.name}`} key={item.name}>
                                            <Box color='black' onClick={handleTopScroll} display='flex' flexDirection='column' alignItems='center'>
                                                <Image
                                                    _hover={{ transform: 'translateY(-5px)', transition: 'transform 0.3s ease-in-out' }}
                                                    src={item.images}
                                                    width='100%'
                                                    filter='drop-shadow(4px 4px 4px rgba(0, 0, 0, .45))'
                                                />
                                                <Text fontSize={{ base: 'lg', md: '2xl' }} textAlign='center' fontFamily='Poppins'>{item.name}</Text>
                                                <Text fontSize='md' mt={-2} fontFamily='Poppins'>{item.kiszereles}</Text>
                                            </Box>
                                        </Link>
                                    ))}
                                </Box>
                            ) : (
                                <Box>
                                    <Box fontFamily='Poppins' color='black'>
                                        <Text textAlign='center' fontSize='xl'>Kizárólag hazai piacról beszerzett minőségi, friss tyúktojást és BFF 55 Réteslisztet használunk a gyártás folyamán.</Text>
                                        <Text mt={10} textAlign='center' fontSize='xl'>A gyűjtő csomagolás 10 kg-os polietilén zsákban történik.</Text>
                                    </Box>
                                </Box>
                            )}
                        </Box>
                    </Container>
                </Container>
            </Box>
        </Box>
    );
};

export default Tesztaink;
