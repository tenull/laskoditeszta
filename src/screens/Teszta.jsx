import { Box, Container, Text, Flex, Image, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useParams } from "react-router-dom";
import { tesztaData } from '../tesztaData.js';
import { Link as ReactLink } from 'react-router-dom';
import { IoTimerOutline } from "react-icons/io5";
import { MdOutlineBackpack } from "react-icons/md";
import { TbMapSearch } from "react-icons/tb";
const Teszta = () => {
    const { name } = useParams();

    const selectedTeszta = tesztaData
        .flatMap(teszta => teszta.tesztak)
        .find(teszta => teszta.name === name);

        const selectedCategory = tesztaData.find(teszta => teszta.tesztak.some(item => item.name === name));

    if (!selectedTeszta) {
        return <Text>Nincs ilyen tészta!</Text>;
    }

    return (
        <Box position='relative'
        fontFamily='Poppins'
        //  top='65px'
        >
            <Box
                // boxShadow='dark-lg'
                
                backgroundImage={`linear-gradient(rgb(51, 51, 51, 0.7), #c53030),url(../images/pastafacrtory14.jpg)`}
                backgroundPosition='center'
                backgroundSize="cover"
                position='relative'
                display='flex' alignItems='center' justifyContent='center' width='full' height={{ base: '320px', md: '420px' }}>
                <Container display='flex' flexDirection='column' alignItems='center' justifyContent='center' maxW='container.lg' color='white'  height='100%'>
                    <Text fontSize={{ base: '4xl', md: '5xl' }} fontFamily='Montserrat,sans-serif' fontWeight='bold'>{selectedTeszta.name}</Text>
                    <Breadcrumb zIndex={1} fontSize={{base:'xs',md:'sm'}} spacing={{base:'0px',md:'8px'}} separator={<ChevronRightIcon color='gray.400' />}>
                        <BreadcrumbItem>
                            <ReactLink to='/'>Főoldal</ReactLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <ReactLink to='/termekeink'>Termékeink</ReactLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem fontSize={{base:'3xs',md:'sm'}}>
                            <ReactLink  to={selectedCategory.link}>{selectedCategory.name}</ReactLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem fontSize={{base:'2xs',md:'sm'}} isCurrentPage>
                            <ReactLink to='#'>{selectedTeszta.name}</ReactLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Container >
                <Box
                    position='absolute' // Ez teszi lehetővé, hogy a tartalom fölé kerüljön
                    bottom={-1} // Az elem az alsó részhez igazodik
                    width='100%'
                    height='auto'
                // maxH='250px'
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,224L60,224C120,224,240,224,360,240C480,256,600,288,720,277.3C840,267,960,213,1080,208C1200,203,1320,245,1380,266.7L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                </Box>
            </Box>

            <Container maxW='container.xl' pt={5}>
                {/* <Box display='flex' flexDirection='column' alignItems='center'>
                    <Image
                    filter=' drop-shadow(4px 4px 4px rgba(0, 0, 0, .45));'
                        src={selectedTeszta.images} alt={selectedTeszta.name} width='320px' />
                    <Text fontSize='xl'>{selectedTeszta.kiszereles}</Text>
                    <Text fontSize='sm'>Főzési idő: {selectedTeszta.fozesiIdo}</Text>
                    <Text fontSize='sm'>Összetevők: {selectedTeszta.Összetevők}</Text>
                </Box> */}
                <Box display='flex' justifyContent='center' flexWrap='wrap'>
                    <Box      position='relative'
                                top={{base:'-30px',md:'-30px'}} 
                                flexBasis='50%' minWidth='330px'>
                        <Box>
                            {/* <Text fontWeight='bold' fontSize='6xl'>{selectedTeszta.name}</Text> */}
                        </Box>
                        <Box  display='flex' flexDirection='column' alignItems={{ base: 'center', md: 'start' }}>
                            <Image
                            data-aos="zoom-in"
                                filter=' drop-shadow(4px 4px 4px rgba(0, 0, 0, .45));'
                                src={selectedTeszta.images} alt={selectedTeszta.name} width='80%' />
                           
                        </Box>
                    </Box>

                    <Box flexBasis='50%' minWidth='300px' display='flex' flexDirection='column' justifyContent='flex-start' alignItems='center'>
                        <Box pb={4} width='100%' borderBottom='2px'>
                            <Text fontWeight='bold' >A TERMÉKRŐL</Text>
                        </Box>
                        <Flex py={3} borderBottom='2px' justify='space-between' alignItems='center' width='100%'>
                            <Box display='flex' alignItems='center'>
                                <MdOutlineBackpack fontSize='50px' />
                                <Text fontSize='xl' ms={3}>Kiszerelés</Text>
                            </Box>
                            <Text fontSize='2xl' fontWeight='bold'>{selectedTeszta.kiszereles}</Text>
                        </Flex>
                        <Flex py={3} borderBottom='2px' justify='space-between' alignItems='center' width='100%'>
                            <Box display='flex' alignItems='center'>
                                <IoTimerOutline fontSize='50px' />
                                <Text fontSize='xl' ms={3}>Főzési idő</Text>
                            </Box>
                            <Text fontSize={{ base: '2xl', md: '2xl' }} fontWeight='bold'>{selectedTeszta.fozesiIdo}</Text>
                        </Flex>
                        <Flex py={3} borderBottom='2px' justify='space-between' alignItems='center' width='100%'>
                            <Box display='flex' alignItems='center'>
                                <TbMapSearch fontSize='50px' />
                                <Text fontSize={{base:'md',md:'xl'}} ms={3}>Összetevők</Text>
                            </Box>
                            <Text fontSize={{ base: 'sm', md: '2xl' }} fontWeight='bold'>{selectedTeszta.Összetevők}</Text>
                        </Flex>
                    </Box>
                </Box>
                <Text fontFamily='Poppins' mt={5} textAlign={{base:'justify',md:'justify'}} fontSize={{base:'lg',md:'xl'}}>{selectedTeszta.description}</Text>     

                <Box my={10} display='flex' justifyContent={{ base: 'center', md: 'flex-start' }}>
                    <Tabs>
                        <TabList border={0}>
                            <Tab
                                _selected={{ color: 'red.600' }} 
                             
                                borderRadius='md' 
                            >
                                TÁPÉRTÉK
                            </Tab>
                            <Tab
                                _selected={{ color: 'red.600' }} 
                               
                                borderRadius='md' 
                            >
                                ÁLTALÁNOS INFORMÁCIÓ
                            </Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel width='350px'>
                                <Box color='white' fontWeight='bold' py={3} px={2} display='flex' justifyContent='space-between' bg='red.600'>
                                    <Text>Átlagos Tápérték</Text>
                                    <Text>100g/adag</Text>
                                </Box>
                                <Box display='flex' py={3} px={2} justifyContent='space-between' border='2px' borderColor='red.600'>
                                    <Text>Energiatartalom</Text>
                                    <Text>{selectedTeszta.tapertek[0].energia}
                                    </Text>
                                </Box>
                                <Box display='flex' py={3} px={2} justifyContent='space-between' border='2px' borderTop='0' borderColor='red.600'>
                                    <Text>Zsír</Text>
                                    <Text>{selectedTeszta.tapertek[0].zsir}
                                    </Text>
                                </Box>
                                <Box display='flex' py={3} px={2} justifyContent='space-between' border='2px' borderTop='0' borderColor='red.600'>
                                    <Text fontSize='sm'> -amelyből telített zsírsavak</Text>
                                    <Text>{selectedTeszta.tapertek[0].telitettzsir}
                                    </Text>
                                </Box>
                                <Box display='flex' py={3} px={2} justifyContent='space-between' border='2px' borderTop='0' borderColor='red.600'>
                                    <Text>Szénhidrát</Text>
                                    <Text>{selectedTeszta.tapertek[0].szenhidrat}
                                    </Text>
                                </Box>
                                <Box display='flex' py={3} px={2} justifyContent='space-between' border='2px' borderTop='0' borderColor='red.600'>
                                    <Text fontSize='sm'>-amelyből cukrok</Text>
                                    <Text>{selectedTeszta.tapertek[0].cukor}
                                    </Text>
                                </Box>
                                <Box display='flex' py={3} px={2} justifyContent='space-between' border='2px' borderTop='0' borderColor='red.600'>
                                    <Text>Fehérje</Text>
                                    <Text>{selectedTeszta.tapertek[0].feherje}
                                    </Text>
                                </Box>
                                <Box display='flex' py={3} px={2} justifyContent='space-between' border='2px' borderTop='0' borderColor='red.600'>
                                    <Text>Só</Text>
                                    <Text>{selectedTeszta.tapertek[0].so}
                                    </Text>
                                </Box>
                            </TabPanel>
                            <TabPanel>
                                <Text textAlign='justify'>
                                    Ezen alapanyagok felhasználásával készített száraztészták, kifőzés után, a háromszorosukat adják vissza. 1 kg száraztésztából 3kg főtt tésztát kapunk, amit készételként fogyaszthatunk.
                                </Text>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
            </Container>
        </Box>
    );
}

export default Teszta;
