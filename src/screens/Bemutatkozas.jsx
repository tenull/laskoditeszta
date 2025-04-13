import { Box, Container, Text, Flex, Image, Breadcrumb, BreadcrumbItem, } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Counter from "../components/Counter";
import Szamlalo from "../components/Szamlalo";
const Bemutatkozas = () => {
    return (
        <Box position='relative'
        //  top='65px'
        >
            <Box
                // boxShadow='dark-lg'
                backgroundImage={`linear-gradient(rgb(51, 51, 51, 0.7), #c53030),url(../images/pastafactory11.png)`}
                backgroundPosition='center'
                backgroundSize="cover"
                position='relative'
                display='flex' alignItems='center' justifyContent='center' width='full' height={{ base: '320px', md: '420px' }}>
                <Container px={0} display='flex' flexDirection='column' alignItems='center' justifyContent='center' maxW='container.lg' color='white' height='100%'>
                    <Text fontSize={{ base: '5xl', md: '6xl' }} fontFamily='Montserrat,sans-serif' fontWeight='bold'>Bemutatkozás</Text>
                    <Breadcrumb zIndex={1} fontSize={{ base: 'xs', md: 'sm' }} spacing={{ base: '3px', md: '8px' }} separator={<ChevronRightIcon color='gray.400' />}>
                        <BreadcrumbItem>
                            <ReactLink to='/'>Főoldal</ReactLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <ReactLink to='/bemutatkozas'>Bemutatkozás</ReactLink>
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
            <Container fontFamily='Poppins' maxW='container.xl' maxH={{md:'800px'}}  py={10} >
                <Box position='relative' display='flex'>


                    <Box width={{ base: "100%", md: "50%" }} minW={{base:'100%',md:'500px'}} display='flex' flexDirection='column' alignItems='center' px={4}>
                        <Text textAlign={{ base: 'justify', md: 'justify' }} fontSize={{ base: 'lg', md: 'xl' }} mb={{ base: '3', md: '10' }}>
                            A Nyír-Aranytojás Kft. több mint 25 éve gyártja Laskod községben a jól ismert Laskodi Száraztésztákat.Családi vállalkozásként indultunk, azóta is ebben a formában gyártjuk a házias jellegű tésztáinkat.
                        </Text>
                        <Box
                            mb={3}
                            display={{ base: 'flex', md: 'none' }}
                            justifyContent='center'
                            boxShadow='dark-lg'
                            backgroundImage={`url(../images/pastafactory6.jpg)`}
                            backgroundPosition='center'
                            backgroundSize='cover'
                            width='300px'
                            height='400px'
                            border='15px solid white'
                        />
                        <Text textAlign={{ base: 'justify', md: 'justify' }} fontSize={{ base: 'lg', md: 'xl' }} mb={{ base: '3', md: '10' }}>
                            Kezdettől azt tartottuk a legfontosabbnak, hogy megőrizzük azt a minőséget, amit hajdan szüleink házilag készítettek. Kizárólag hazai piacról beszerzett minőségi, friss tyúktojást és BFF 55 Réteslisztet használunk a gyártás folyamán.
                        </Text>
                        <Box
                            mb={3}
                            display={{ base: 'flex', md: 'none' }}
                            boxShadow='dark-lg'
                            backgroundImage={`url(../images/pastafactory3.jpg)`}
                            backgroundPosition='center'
                            backgroundSize='cover'
                            width='300px'
                            height='400px'
                            border='15px solid white'
                        />
                        <Text textAlign={{ base: 'justify', md: 'justify' }} fontSize={{ base: 'lg', md: 'xl' }} mb={3}>
                            Ezen alapanyagok felhasználásával készített száraztészták, kifőzés után, a háromszorosukat adják vissza. 1 kg száraztésztából 3kg főtt tésztát kapunk, amit készételként fogyaszthatunk. a BL 55 Búzalisztből készült száraztészták nem tudják visszaadni csak a kétszeres mennyiséget. Ezt azért tartom fontosnak megjegyezni a kedves vásárlóink felé, hogy van lehetőségük ár-érték alapján is dönteni!
                        </Text>
                        <Box
                            mb={3}
                            display={{ base: 'block', md: 'none' }}
                            boxShadow='dark-lg'
                            backgroundImage={`url(../images/pastafactory4.jpg)`}
                            backgroundPosition='center'
                            backgroundSize='cover'
                            width='300px'
                            height='400px'
                            border='15px solid white'
                        />
                    </Box>
                    <Box width={{ base: "100%", md: "50%" }} display={{ base: 'none', md: 'block' }} position='relative'>
                    <Box>
                        <Box
                            boxShadow='dark-lg'
                            backgroundImage={`url(../images/pastafactory6.jpg)`}
                            backgroundPosition='center'
                            backgroundSize='cover'
                            width='300px'
                            height='400px'
                            position='relative'
                            top='-50px'
                            right='-150px'
                            border='15px solid white'
                            transform='rotate(3deg)'
                        /></Box>
                        <Box>
                        <Box
                            
                            boxShadow='dark-lg'
                            backgroundImage={`url(../images/pastafactory3.jpg)`}
                            backgroundPosition='center'
                            backgroundSize='cover'
                            width='300px'
                            height='400px'
                            position='relative'
                            top='-200px'
                            right='-100px'
                            border='15px solid white'
                            transform='rotate(-10deg)'
                            
                        /></Box>
                        <Box>
                        <Box
                            boxShadow='dark-lg'
                            backgroundImage={`url(../images/pastafactory4.jpg)`}
                            backgroundPosition='center'
                            backgroundSize='cover'
                            width='300px'
                            height='400px'
                            position='relative'
                            top='-500px'
                            right='-250px'
                            border='15px solid white'
                            transform='rotate(3deg)'
                        /></Box>
                    </Box>
                </Box>
                
            </Container>
           <Szamlalo/>


        </Box>
    );
}

export default Bemutatkozas;