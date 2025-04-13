import { Box, Container, Text, Image } from "@chakra-ui/react";
const Megtalalhato = () => {
    return (
        <Container
            backgroundRepeat="no-repeat" backgroundPosition='left' backgroundSize='350px' backgroundImage={`linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(../images/szarvacska.jpeg)`}
            my={10} maxW='container.xl'>
            <Box height='100px' display='flex' flexDirection={{base:'column',md:'row'}} justifyContent='center' mb={0} pb={0} >
                <Text w={{base:'100%',md:'400px'}} data-aos="fade-right" mb={0} pb={0} textAlign={{base:'center',md:'end'}}     fontSize={{ base: 'xl', md: '3xl' }} fontFamily='Montserrat,sans-serif' fontWeight='600'>Partnererink</Text>
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
                <Text alignSelf={{base:'center',md:'flex-end'}}  textAlign={{base:'center',md:'start'}} textIndent='10px' maxW={{base:'auto',md:'400px'}} lineHeight={1} data-aos="fade-left" fontSize={{ base: 'md', md: '2xl' }} fontFamily='Montserrat,sans-serif' fontWeight={{base:'300',md:'600'}}>
                    Ahol biztosan megtalálja tésztáinkat</Text>
            </Box>
            <Box height='80px' display='flex' justifyContent='space-evenly' alignItems='center'>
                <Image
                    width='170px'
                    height='80px'
                    src="../images/privatmaxlogo.png"
                    filter="grayscale(1)"
                    _hover={{ transition: "all 0.3s ease", filter: "grayscale(0)" }}
                />
                <Image
                    width='150px'
                    height='150px'
                    src="../images/privatlogo.png"
                    filter="grayscale(1)"
                    _hover={{ transition: "all 0.3s ease", filter: "grayscale(0)" }}
                />
            </Box>
        </Container>
    );
}

export default Megtalalhato;