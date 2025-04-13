// src/components/CategoryAccordionItem.jsx
import React from 'react';
import {
  Box,
  AccordionButton,
  AccordionPanel,
  AccordionItem,
  Text,
  Link
} from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

const CategoryAccordionItem = ({ teszta }) => {
  return (
    <AccordionItem borderBottom='0' borderTop="2px">
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton>
              <Box fontSize='20px' fontFamily='Roboto' as="span" flex="1" textAlign="left">
                {teszta.name}
              </Box>
              {isExpanded ? (
                <MinusIcon fontSize="20px" />
              ) : (
                <AddIcon fontSize="20px" />
              )}
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {teszta.tesztak.map((tojas) => (
              <Box py={5} borderTop='1px' width='100%'  key={tojas.name}>
                <Link   fontSize='20px' _hover={
                    {textDecoration:'none'}
                } fontFamily='Roboto' to={`/teszta/${tojas.name}`}>{tojas.name}</Link>
              </Box>
            ))}
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
};

export default CategoryAccordionItem;
