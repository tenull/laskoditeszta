import { Box, Container, Text, Flex, Stack, Grid, Image, Button, useBreakpointValue } from "@chakra-ui/react";
import Megtalalhato from "../components/Megtalalhato";
import TermekekCarousel from "../components/TermekekCarousel";
import { Link } from "react-router-dom";
import { BiRightArrowAlt } from "react-icons/bi";
import { useEffect } from "react";
import AOS from 'aos';
import Szolgaltatas from "../components/Szolgaltatas";
import Partner from "../components/Partner";

const LandingScreen = () => {

    const sideButton = useBreakpointValue({
        base: '5%',
        sm: '5%',
        md: 'calc(50% - 450px)', // Center alignment calculation based on container size
        lg: 'calc(50% - 630px)' // Adjust based on larger container
    });
    const sideButton2 = useBreakpointValue({
        base: '48%',
        sm: '28%',
        md: 'calc(50% - 250px)', // Center alignment calculation based on container size
        lg: 'calc(50% - 450px)' // Adjust based on larger container
    });
    const topButton = useBreakpointValue({ base: '70px', md: '160px' })

    useEffect(() => {
        AOS.init({
            duration: 700,
            once: false,
        });
        AOS.refresh();
    }, []);

    return (
        <Box position='relative'
        //  bg='red.600'
        //   color='white'
        // top='65px'
        >
            <Box
                //   boxShadow='dark-lg'
                backgroundImage={`linear-gradient(rgb(51, 51, 51, 0.7), #c53030), ,url(../images/pastafactory11.png)`}
                backgroundColor='red.600'
                backgroundPosition='top'
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                display='flex'
                alignItems='center'
                justifyContent='center'
                width='full'
                height={{ base: '420px', md: '620px' }}
                position='relative'
            >
                <Container

                    // display='flex'
                    // alignItems='center'
                    // justifyContent='center'
                    maxW='container.xl'
                    color='white'
                    // bg="rgba(0, 0, 0, 0.5)"
                    height='50%'
                >
                    <Box>

                        <Box display='flex' >
                            <Text data-aos="fade-right" data-aos-duration="2000" me={2} fontFamily='Montserrat, sans-serif' fontSize={{ base: '3xl', md: '7xl' }} fontWeight='bold'>
                                Laskodi
                            </Text>
                            <Text data-aos="fade-left" data-aos-duration="2000" fontFamily='Montserrat, sans-serif' fontSize={{ base: '3xl', md: '7xl' }} fontWeight='bold'>
                                Tészta
                            </Text>
                        </Box>
                        <Text maxW='450px' textAlign='justify' mt={5} fontSize={{ base: 'sm', md: 'lg' }} fontFamily='Open Sans, sans-serif'>A Nyír-Aranytojás Kft. több mint 25 éve gyártja Laskod községben a jól ismert Laskodi Száraztésztákat.Családi vállalkozásként indultunk, azóta is ebben a formában gyártjuk a házias jellegű tésztáinkat.</Text>
                    </Box>
                    <Box display='flex' mt={3} gap={4}>
                        <Button
                            zIndex={10}
                            as={Link}
                            to='/termekeink'
                            _focus={{
                                textDecoration: 'none',
                                boxShadow: 'none',
                                backgroundColor: 'transparent',
                            }}
                            bg="red.600"
                            width={{ base: '150px', md: '170px' }}
                            border='2px'
                            _hover={{
                                boxShadow: "0 0 0 1px white, 0 0 0 4px #822727",
                                transition: "all 0.3s ease",
                                bg: 'red.800'
                            }}
                            _active={{
                                backgroundColor: 'red.600',
                                boxShadow: 'none',
                            }}
                            display="flex"
                            px={3}
                            py={1}
                            alignItems="center"
                            color="white"
                            fontWeight="medium"
                            fontSize={{ base: '14px', md: '16px' }}
                        >
                            TERMÉKEINK
                        </Button>

                        <Button
                            zIndex={10}
                            as={Link}
                            to='/kapcsolat'
                            _focus={{
                                textDecoration: 'none',
                                boxShadow: 'none',
                                backgroundColor: 'transparent',
                            }}
                            bg="white"
                            width={{ base: '180px', md: '170px' }}
                            border='2px'
                            _hover={{
                                boxShadow: "0 0 0 1px #822727, 0 0 0 4px white",
                                transition: "all 0.3s ease",
                                bg: 'white',
                                color: 'red.800'
                            }}
                            _active={{
                                backgroundColor: 'transparent',
                                boxShadow: 'none',
                            }}
                            display="flex"
                            px={3}
                            py={1}
                            alignItems="center"
                            color="red.600"
                            fontWeight="medium"
                            fontSize={{ base: '14px', md: '16px' }}
                        >
                            KAPCSOLAT
                        </Button>
                    </Box>

                </Container>

                {/* SVG az alsó részhez */}
                <Box
                    position='absolute'
                    bottom={-1}
                    width='100%'
                    height={{ base: '50px', md: '150px' }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                        preserveAspectRatio="none"
                        style={{ display: 'block', width: '100%', height: '100%' }}
                    >
                        <path
                            fill="white"
                            fillOpacity="1"
                            d="M0,64L60,58.7C120,53,240,43,360,37.3C480,32,600,32,720,58.7C840,85,960,139,1080,165.3C1200,192,1320,192,1380,192L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                        />
                    </svg>
                </Box>

            </Box>

            <Container mb={0} maxW="container.xl">
            <Box height='100px' my={3} display='flex' flexDirection={{base:'column',md:'row'}} justifyContent='center' >
                <Text
                w={{base:'100%',md:'550px'}}
                textAlign={{base:'center',md:'end'}}
                    data-aos="fade-right"
                    // textAlign="center"
                    fontSize={{ base: 'xl', md: '3xl' }}
                    fontFamily="Montserrat,sans-serif"
                    fontWeight="600"
                    color="gray.800"
                >
                    SZOLGÁLTATÁSAINK
                </Text>
                <Text
                    // textAlign="center"
                    display={{base:'none',md:'block'}}
                    fontSize={{ base: 'md', md: 'md' }}
                    fontFamily="Montserrat,sans-serif"
                    fontWeight="800"
                    color="gray.800"
                    border='solid'
                    borderWidth='0px 3px 0px'
                    borderColor='red.800'
                    transform='rotate(20deg)'
                    me='5'
                />
                <Text
                textIndent='10px'
                maxW='550px'
                lineHeight={1}
                alignSelf='flex-end'
                    data-aos="fade-left"
                  textAlign={{base:'center',md:'start'}}
                    fontSize={{ base: 'md', md: '2xl' }}
                    fontFamily="Montserrat,sans-serif"
                    fontWeight={{base:'300',md:'600'}}
                    color="gray.800"
                >
                    FRISS, HAZAI, MINŐSÉGI TÉSZTÁK – KÖZVETLENÜL A GYÁRTÓTÓL
                </Text>
                </Box>
                <Grid
                    templateColumns={{ base: "1fr", sm: '1fr', md: "1fr 1fr" }}
                    gap={4}
                    maxH={{base:'100%',md:'720px'}}
                    pt={{ base: 5, md: 5 }}
                    backgroundRepeat="no-repeat" backgroundPosition='left' backgroundSize='750px' backgroundImage={`linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(../images/spagettipasta.png)`}
                >

                    <Box
                    
                    position="relative" minW={{ base: '100%', md: '520px' }}>
                        <Stack
                        
                        spacing={4} align="center">

                            <Image
                                src="/images/pastafactory.jpg"
                                alt="Image 1"
                                rounded="md"
                                boxShadow="dark-lg"
                                width={{ base: "100%", lg: "450px" }}
                                height={{ base: "300px", lg: "550px" }}
                                objectFit="cover"
                            />
                            <Image
                                position='relative'
                                top={{base:'0',sm:'0', md:'-0px',lg:'-150px'}}
                                right={{base:'-50px',sm:'0px',md:'0',lg:'-50px'}}
                                display={{ base: 'none', md: 'block' }}
                                data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="1500"
                                src="/images/pastafactory2.jpg"
                                alt="Image 1"
                                rounded="md"
                                boxShadow="dark-lg"
                                width={{ base: "100%", lg: "450px" }}
                                height={{ base: "300px", lg: "250px" }}
                                objectFit="cover"
                            />
                        </Stack>
                    </Box>

                    <Box display='flex' alignItems='center' justifyContent={{ base: 'center', md: 'flex-end' }} position="relative">
                        <Stack spacing={4} justifyContent='center' >

                            <Text
                                fontFamily=""
                                fontSize={{ base: "sm", md: "xl" }}
                                textAlign="justify"
                                maxW="550px"
                            >
                                Fő profilunk a kiváló minőségű, és a magyar piacon egyedülálló módon friss, pasztőrözött tojáslé felhasználásával készülő 4 és 8 tojásos, illetve tojás nélküli gépi száraztészták gyártása és forgalmazása.
                            </Text>

                            <Image
                                src="/images/pastafactory2.jpg"
                                display={{ base: 'block', md: 'none' }}
                                alt="Image 1"
                                rounded="md"
                                boxShadow="dark-lg"
                                width={{ base: "100%", lg: "450px" }}
                                height={{ base: "300px", lg: "550px" }}
                                objectFit="cover"
                            />
                            <Text
                                fontFamily=""
                                display={{ base: "none", md: "block" }}
                                fontSize={{ base: "sm", md: "xl" }}
                                textAlign="justify"
                                maxW="550px"
                            >
                                Termelő egységeink megfelelnek az Európai Unió elvárásainak. A legkorszerűbb magas hőmérsékletű szárítórendszer biztosítja termékeink biztonságát és az állandó minőséget. A fogyasztói igényeknek megfelelően fejlesztett termékek akkreditált laboratóriumi körülmények között, folyamatos minőség-ellenőrzés alatt állnak.
                            </Text>
                            <Text
                                fontSize={{ base: "sm", md: "xl" }}
                                textAlign="justify"
                                fontFamily=""
                                mt={2}
                                maxW="550px"
                            >
                                A tészták zárt rendszerben készülnek kiváló minőségű nyersanyagokból.
                            </Text>
                            <Text
                                fontSize={{ base: "sm", md: "xl" }}
                                textAlign="justify"
                                fontFamily=""
                                mt={-1}

                                maxW="500px"
                            >
                                Kiemelkedően fontosnak tartjuk a jó és korrekt kapcsolatrendszer kiépítését ügyfeleinkkel és szállítóinkkal.
                            </Text>

                        </Stack>
                    </Box>
                </Grid>


            </Container>


            <Szolgaltatas />
            <TermekekCarousel />
            <Megtalalhato />
            <Partner />

        </Box>
    );
}

export default LandingScreen;