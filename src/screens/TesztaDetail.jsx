import { Box, Container, Text, Button, Image, Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { tesztaData } from '../tesztaData.js';
import { IoIosCheckmark } from "react-icons/io";
import { ChevronRightIcon } from "@chakra-ui/icons";
import ScrollReveal from "scrollreveal";
import AOS from 'aos';

const TesztaDetail = () => {
    const [filteredByCategory, setFilteredByCategory] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedType, setSelectedType] = useState(null); // Új állapotváltozó a típushoz
    const { category } = useParams(); // Kategória nevének lekérése az URL-ből
    const gridRef = useRef(null);

    useEffect(() => {
        AOS.init({
            duration: 700,
            once: false,
        });
        AOS.refresh();
    }, []);

    useEffect(() => {
        if (category) {
            const filtered = tesztaData.find((item) => item.link === `/termekeink/${category}`);
            if (filtered) {
                setFilteredByCategory(filtered.tesztak); // A kiválasztott kategória termékeit állítjuk be
                setSelectedCategory(filtered.name); // Kiválasztott kategória nevének beállítása
            } else {
                setFilteredByCategory([]); // Ha nincs találat, üres tömböt állítunk be
            }
        } else {
            setFilteredByCategory([]); // Ha nincs kategória az URL-ben, üres tömböt állítunk be
        }
    }, [category]);

    useEffect(() => {
        if (gridRef.current) {
            const sr = ScrollReveal({
                distance: "50px",
                duration: 1000,
                easing: "ease-in-out",
                interval: 200,
                reset: false,  // Ezzel az animáció visszatér scrollnál
            });

            // Újraindítjuk a ScrollReveal-t minden változásnál
            sr.clean(gridRef.current.children);  // Törli a korábbi animációkat, ha voltak
            sr.reveal(gridRef.current.children); // Inicializálja újra a gyerek elemeket

            return () => sr.destroy(); // Megsemmisítjük az animációkat, ha a komponens eltávolításra kerül
        }
    }, [filteredByCategory]); // A kategória változását követjük

    useEffect(() => {
        // Szűrés a selectedType alapján
        if (category) {
            const filtered = tesztaData.find((item) => item.link === `/termekeink/${category}`);
            if (filtered) {
                const filteredByType = selectedType
                    ? filtered.tesztak.filter(item => item.csomagolas === selectedType)
                    : filtered.tesztak;
                setFilteredByCategory(filteredByType); // Frissítjük a termékeket a típus alapján
            }
        }
    }, [selectedType, category]);

    const handleTopScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <Box display="flex" flexDirection="column"  minHeight="100vh">
            {/* Tartalom */}
            <Box flex="1" position="relative" color='red.600'>
                {/* Fejléc rész */}
                <Box
                    backgroundImage={`linear-gradient(rgb(51, 51, 51, 0.7), #c53030),url(../images/pastafactory13.jpg)`}
                    position='relative'
                    backgroundSize="cover"
                    display='flex' alignItems='center' justifyContent='center' width='full' height={{ base: '320px', md: '420px' }}>
                    <Container display='flex' flexDirection='column' alignItems='center' justifyContent='center' maxW='container.lg' color='white'  height='100%'>
                        <Text fontSize={{ base: '6xl', md: '6xl' }} fontFamily='Montserrat,sans-serif' fontWeight='bold'>Termékeink</Text>
                        <Breadcrumb zIndex={1} fontSize={{ base: 'xs', md: 'sm' }} spacing={{ base: '3px', md: '8px' }} separator={<ChevronRightIcon color='gray.400' />}>
                            <BreadcrumbItem>
                                <Link to='/'>Főoldal</Link>
                            </BreadcrumbItem>

                            <BreadcrumbItem>
                                <Link to='/termekeink'>Termékeink</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem isCurrentPage fontSize={{ base: 'xs', md: 'sm' }}>
                                <Link to='#'>{selectedCategory}</Link>
                            </BreadcrumbItem>
                        </Breadcrumb>
                        {selectedCategory && (
                            <Text fontSize='md' position='absolute' bottom={{ base: '60px', md: '84px' }} mt={-5} fontFamily='Montserrat,sans-serif' fontWeight='bold'>{selectedCategory}</Text>
                        )}
                    </Container >
                    <Box position='absolute' bottom={-1} width='100%' height='auto'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path fill="#ffffff" fillOpacity="1" d="M0,224L60,224C120,224,240,224,360,240C480,256,600,288,720,277.3C840,267,960,213,1080,208C1200,203,1320,245,1380,266.7L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                        </svg>
                    </Box>
                </Box>

                {/* Kategóriák és termékek */}
                <Container   fontFamily='Poppins' display='flex' maxW='container.xl' py={10}>
                    {/* Oldalsó kategória lista */}
                    <Container   position='sticky' height='500px' top='250px'zIndex="10"  minW='280px' rounded='md' maxW='20%' display={{ base: 'none', md: 'block' }}>
                        <Text fontFamily='Poppins'    mb={2} color='black' fontWeight='bold' fontSize="4xl">KATEGÓRIA</Text>
                        {tesztaData.map((teszta, index) => (
                            <Button
                                
                                key={teszta.name}
                                as={Link}
                                to={teszta.link}
                                maxW='260px'
                                borderTop={index === 0 ? 'none' : '2px'}
                                borderColor='red.600'
                                borderRadius='0'
                                fontSize='md'
                                fontFamily='Poppins'
                                fontWeight='500'
                                bg={selectedCategory === teszta.name ? 'red.600' : 'transparent'}
                                color={selectedCategory === teszta.name ? 'white' : 'black'}
                                _hover={{ bg: 'red.600', color: 'white' }}
                                display='flex'
                                justifyContent='space-between'
                              
                            >
                                {teszta.name}
                                {selectedCategory === teszta.name && <IoIosCheckmark fontSize='30px' />}
                            </Button>
                        ))}
                    </Container>


                    <Container maxW='80%'>
                        <Container  rounded='md'  display={{ base: 'block', md: 'none' }}>
                            <Text  textAlign='center' fontFamily='Poppins' mb={2} color='black' fontWeight='bold' fontSize="4xl">KATEGÓRIA</Text>
                            {tesztaData.map((teszta, index) => (
                                <Button
                                    key={teszta.name}
                                    as={Link}
                                    to={teszta.link}
                                    onClick={() => setSelectedCategory(teszta.name)}
                                    w='100%'
                                    minW='215px'
                                     height='50px'
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
                                    justifyContent='center'
                                >
                                    {teszta.name}
                                    {selectedCategory === teszta.name && <IoIosCheckmark style={{ position: 'absolute', right: '-5px' }} fontSize='30px' />}
                                </Button>

                            ))}
                        </Container>

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
                                    boxSizing="border-box"
                                    onClick={() => setSelectedType(selectedType === "lakossagi" ? null : "lakossagi")}
                                    _hover={{
                                        bg: 'red.600',
                                        color: 'white',
                                        border: '2px solid',
                                        borderColor: 'red.600'
                                    }}
                                >
                                    Lakossági
                                    {selectedType === "lakossagi" && <IoIosCheckmark style={{ position: 'absolute', right: '-5px' }} fontSize='30px' />}
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
                                    boxSizing="border-box"
                                    onClick={() => setSelectedType(selectedType === "gyujto" ? null : "gyujto")}
                                    _hover={{
                                        bg: 'red.600',
                                        color: 'white',
                                        border: '2px solid',
                                        borderColor: 'red.600'
                                    }}
                                >
                                    Gyűjtő
                                    {selectedType === "gyujto" && <IoIosCheckmark style={{ position: 'absolute', right: '-5px' }} fontSize='30px' />}
                                </Button>
                            </Box>
                        )}

                        <Box py={8}>
                            {filteredByCategory && filteredByCategory.length > 0 ? (
                                <Box
                                    ref={gridRef} // Ref a grid Box-ra
                                    display='grid'
                                    gridTemplateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
                                    gap={6}
                                >
                                    {filteredByCategory.map((item) => (
                                        <Link to={`/teszta/${item.name}`} key={item.name}>
                                            <Box
                                                color='black'
                                                onClick={handleTopScroll}
                                                display='flex'
                                                flexDirection='column'
                                                alignItems='center'
                                            >
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
                                <Text pt={5} textAlign='center'>Nincs találat a kategóriában!</Text>
                            )}
                        </Box>
                    </Container>
                </Container>
            </Box>
        </Box>
    );
};

export default TesztaDetail;
