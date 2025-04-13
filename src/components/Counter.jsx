import { useState, useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Counter = ({ startValue = 0, endValue, duration = 2, showPlus = false, showPercent = false }) => {
  const [count, setCount] = useState(startValue);

  useEffect(() => {
    let currentValue = startValue;
    const increment = (endValue - startValue) / (duration * 1000 / 16); // 16ms = 60fps

    const counterInterval = setInterval(() => {
      currentValue += increment;

      if (
        (startValue < endValue && currentValue >= endValue) ||
        (startValue > endValue && currentValue <= endValue)
      ) {
        setCount(endValue);
        clearInterval(counterInterval);
      } else {
        setCount(Math.floor(currentValue));
      }
    }, 16);

    return () => clearInterval(counterInterval);
  }, [startValue, endValue, duration]);

  return (
    <Box>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Text fontSize="6xl" fontWeight="bold">
          {count === endValue
            ? `${count}${showPlus ? '+' : ''}${showPercent ? '%' : ''}`
            : count}
        </Text>
      </motion.div>
    </Box>
  );
};

export default Counter;
