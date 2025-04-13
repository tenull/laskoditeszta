import { Box, Container, Text, Flex, Image, Breadcrumb, BreadcrumbItem, } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Counter from "../components/Counter";
const Szamlalo = () => {
    return (
        <Box
            display='flex' justifyContent='center' alignItems='center'
            minH='400px'
            backgroundImage={`linear-gradient(rgb(51, 51, 51, 0.7), #c53030),url(../images/pastafactory4.jpg)`}
            backgroundPosition='center'
            backgroundSize="cover"
            pt={10} color='white' >
            <Flex wrap='wrap' justify="space-evenly" align="center" p={5}>
                <Box
                    width='300px'
                    borderRight={{ base: '0px', md: '1px solid' }}
                    borderRightColor={{ base: 'transparent', md: 'gray.200' }}
                    textAlign="center"
                >
                    <Text fontFamily='Montserrat, Sans-serif' fontWeight='bold' fontSize="lg">Jelenleg</Text>
                    <Counter endValue={38} duration={2} />
                    <Text fontFamily='Montserrat, Sans-serif' fontWeight='bold' fontSize="lg">féle tészta érhető el                    </Text>
                </Box>
                <Box
                    h='100%'
                    borderRight={{ base: '0px', md: '1px solid' }}
                    borderRightColor={{ base: 'transparent', md: 'gray.200' }}
                    width='300px' textAlign="center">
                    <Text fontFamily='Montserrat, Sans-serif' fontWeight='bold' fontSize="lg">Szakmai tapasztalat</Text>
                    <Counter endValue={25} duration={3} showPlus={true} />
                    <Text fontFamily='Montserrat, Sans-serif' fontWeight='bold' fontSize="lg">év</Text>
                </Box>
                <Box
                    borderRight={{ base: '0px', md: '1px solid' }}
                    borderRightColor={{ base: 'transparent', md: 'gray.200' }}
                    width='300px' textAlign="center" h='147px'>
                    <Text fontFamily='Montserrat, Sans-serif' fontWeight='bold' fontSize="lg">Ügyfeleink elégedettsége</Text>
                    <Counter endValue={100} duration={3} showPercent={true} />

                </Box>
                <Box width='300px' textAlign="center">
                    <Text fontFamily='Montserrat, Sans-serif' fontWeight='bold' fontSize="lg">Partnerkapcsolatok</Text>
                    <Counter endValue={10} duration={3} showPlus={true} />
                </Box>
            </Flex>
        </Box>
    );
}

export default Szamlalo;