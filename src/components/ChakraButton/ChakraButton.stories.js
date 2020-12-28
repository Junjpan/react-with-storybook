import React from 'react';
import { Button } from '@chakra-ui/react';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Chakra/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'click' },
  },
};

//if you want to use control addons insdie the storybook, you have to use args method
//If you want to use action addons inside the storybook, you have to use args method and have to add  action event inside the argTypes
const Template = (args) => <Button {...args} />;

export const Danger = Template.bind({});
Danger.args = {
  colorScheme: 'red',
  children: 'Danger',
};

export const Success = () => (
  <Button colorScheme='blue' size='lg'>
    Success
  </Button>
);
