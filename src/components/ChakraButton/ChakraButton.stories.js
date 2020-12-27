import React from 'react';
import { Button } from '@chakra-ui/react';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Chakra/ButtonGreen',
  component: Button,
};

export const Success = () => (
  <Button colorScheme='blue' size='lg'>
    Success
  </Button>
);
