import { Container, Box, Text, Button } from "@chakra-ui/react";

const Partner = () => {
    return (
        <Box
            display='flex' justifyContent='center' alignItems='center'
            minH='400px'
            backgroundImage={`linear-gradient(rgb(51, 51, 51, 0.7), #c53030),url(../images/pastafactory.jpg)`}
            backgroundPosition='center'
            backgroundAttachment="fixed"
            backgroundSize="cover"
            py={10} color='white' >
            <Container display='flex' flexDirection='column' alignItems='center' maxW='container.xl'>
                <Box >
                    <Text fontFamily='Montserrat, sans-serif' fontSize={{ base: '2xl', md: '6xl' }} fontWeight='bold' textAlign="center">
                        Csatlakozzon Partnerhálózatunkhoz!
                    </Text>
                    <Text  fontFamily='Montserrat, sans-serif' fontSize={{ base: 'lg', md: 'xl' }} textAlign="center" mt={4}>
                        Legyen részese egy sikeres és dinamikusan fejlődő vállalatnak, amely kiemelkedő minőségű termékeket kínál
                        és hosszú távú, megbízható partnerkapcsolatokra épít.
                    </Text>
                </Box>
                <Button size="lg" colorScheme="red" mt={6}>
                    Vegye fel velünk a kapcsolatot
                </Button>

            </Container>
        </Box>

    );
}

export default Partner;