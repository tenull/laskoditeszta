import { IconButton } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';

const handleTopScroll = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const NavLink = ({ children, route }) => (
  <IconButton
    fontSize='sm'
    as={ReactLink}
    px="2"
    py="1"
    rounded="md"
    to={route}
    onClick={handleTopScroll} 
    color='white'
    bg="transparent"
    _hover={{
      color: 'yellow.400',
    }}
    _focus={{
      boxShadow: 'none',
      backgroundColor:'transparent' 
    }}
  >
    {children}
  </IconButton>
);

export default NavLink;
