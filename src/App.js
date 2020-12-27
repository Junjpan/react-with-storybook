import React from 'react';
import Button from './components/Button/Button.js';
import { Button as ChakraButton, ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <div>
      <Button>Open the file</Button>
      <ChakraProvider>
        <ChakraButton colorScheme='blue' size='lg'>
          Chakra Button
        </ChakraButton>
      </ChakraProvider>
    </div>
  );
}

export default App;
