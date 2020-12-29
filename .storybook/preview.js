//this is the configuration file for the story you write
import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import Center from '../src/components/Center/Center';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { withConsole } from '@storybook/addon-console';
import { withKnobs } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  }, //sorting stories
};

//addDecorator((story) => <Center>{story()}</Center>); //to be able to center all the stories

/** method 1 to add global decorator. This example use Chakra theme to the story
addDecorator((story) => (
  <ChakraProvider>
    <Box m='4'>{story()}</Box>
  </ChakraProvider>
));
*/

/**Method 2 to add global decorator. This example add Chakra theme to the story */

export const decorators = [
  (Story) => (
    <ChakraProvider>
      <Box m='16'>
        <Story />
      </Box>
    </ChakraProvider>
  ),
];

addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator(withKnobs);
addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});
