import React from 'react';
import {
    Box,
    Container,
    IconButton,
    useBreakpointValue,
    Image,
    Text,
    Button,
} from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { Link as ReactLink } from 'react-router-dom';
import Slider from 'react-slick';
import { tesztaData } from '../tesztaData.js';

export default function TermekekCarousel() {

    const handleTopScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    const [slider, setSlider] = React.useState(null);

    const slidesToShow = useBreakpointValue({ base: 1,sm:3, md:4,lg:4 });

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
    };

    const allProducts = tesztaData.flatMap((category) => category.tesztak);

    return (
        <Container position={'relative'} maxW='container.xl'>
            <Box height='100px' my={5} display='flex' flexDirection={{base:'column',md:'row'}} justifyContent='center' >
                <Text w={{base:'100%',md:'250px'}}textAlign={{base:'center',md:'end'}} data-aos="fade-right"  fontSize={{ base: 'xl', md: '3xl' }} fontFamily='Montserrat,sans-serif' fontWeight='600'>
                    Termékeink
                </Text>
                <Text
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
                <Text data-aos="fade-left" maxW={{base:'auto',md:'250px'}}  textIndent='10px' lineHeight={1} alignSelf={{base:'center',md:'flex-end'}}  textAlign={{base:'center',md:'start'}} fontSize={{ base: 'md', md: '2xl' }}  fontFamily='Montserrat,sans-serif' fontWeight={{base:'300',md:'600'}}>
                    4 és 8 tojásos tésztáink
                </Text>
            </Box>

            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            <IconButton
                aria-label="left-arrow"
                variant="ghost"
                position="absolute"
                border='1px'
                _focus={{
                    boxShadow: 'none',
                    backgroundColor: 'transparent'
                }}
                _hover={{
                    color: 'red.600',
                }}
                left={{ base: '10px', md: '40px' }}
                top={{ base: '60%', md: '50%' }}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickPrev()}>
                <BiLeftArrowAlt size="40px" />
            </IconButton>

            <IconButton
                aria-label="right-arrow"
                variant="ghost"
                position="absolute"
                border='1px'
                _focus={{
                    boxShadow: 'none',
                    backgroundColor: 'transparent'
                }}
                _hover={{
                    color: 'red.600',
                }}
                right={{ base: '10px', md: '40px' }}
                top={{ base: '60%', md: '50%' }}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickNext()}>
                <BiRightArrowAlt size="40px" />
            </IconButton>

            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {allProducts.map((item, index) => (
                    <Box
                        key={index}
                        as={ReactLink}
                        to={`/teszta/${item.name}`}
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent='center'
                        onClick={handleTopScroll}
                        px={0}

                    >
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            width="100%"
                        >
                            <Image
                                _hover={{
                                    transform: 'translateY(-5px)',
                                    transition: 'transform 0.3s ease-in-out',
                                }}
                                src={item.images}
                                width='350px'
                                filter='drop-shadow(4px 4px 4px rgba(0, 0, 0, .45));'
                            />
                        </Box>
                        <Text textAlign='center' lineHeight='1.2' fontSize='xl' fontFamily='Poppins' >
                            {item.name}
                        </Text>
                        <Text textAlign='center' fontSize='sm' mt={-1} fontFamily='Poppins'>
                            {item.kiszereles}
                        </Text>
                    </Box>
                ))}
            </Slider>


            <Container maxW='container.lg' display="flex" justifyContent="flex-end" mt={5} mb={10}>
                <Button
                    as={ReactLink}
                    onClick={handleTopScroll}
                    to="/termekeink"
                    bg="transparent"
                    border='2px'
                    display="flex"
                    alignItems="center"
                    fontFamily='Poppins'
                    _focus={{
                        textDecoration: 'none'
                    }}
                    _hover={{
                        color: 'red.600',
                        textDecoration: 'none'
                    }}
                    sx={{
                        '> svg': {
                            transition: 'transform 0.3s ease-in-out',
                        },
                        '&:hover > svg': {
                            transform: 'translateX(5px)',
                        }
                    }}
                >
                    Összes Termék
                    <BiRightArrowAlt fontSize='25px' />
                </Button>
            </Container>

        </Container>
    );
}
