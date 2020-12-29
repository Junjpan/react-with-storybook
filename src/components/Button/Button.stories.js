import React from 'react';
import Button from './Button';
import { action, actions } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
//import Center from '../Center/Center';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Form/Button', // title should be unqiue for the entire project, this property is mandatory
  component: Button, //component property is optional
  //decorators: [(story) => <Center>{story()}</Center>], decorator component to style the components
  //if you want to all the stories has the same decorators, you should add docorator inside the preview.js
  args: {
    children: 'Button',
  },
  //This only work for the story using args method
  argTypes: {
    onClick: { action: 'click' },
    onMouseOver: { action: 'mouse over' },
  },
};

//for the non-args method, we import action from @storybook/addon-actions and directly use inside the component
//If you want to make sure multiple event are captured, we use {...actions()}
export const Primary = () => (
  <Button onClick={action('click handler')} variant='primary'>
    Primary
  </Button>
);

//showing multiple actions
export const Secondary = () => (
  <Button {...actions('onClick', 'onMouseOver')} variant='secondary'>
    Primary
  </Button>
);

const log = () => {
  console.log('button clicked');
};

//showing the console.log addon ability
export const Success = () => (
  <Button variant='success' onClick={log}>
    Primary
  </Button>
);

//show the knob function
//text("the props' name","the initial value of the props"),same to boolean()
export const Dangerknob = () => (
  <Button variant='danger' disabled={boolean('Disabled', false)}>
    {text('Label', 'Danger Knob')}
  </Button>
);

//another way to show the story by passing args
const Template = (args) => <Button {...args} />;

export const PrimaryA = Template.bind({});

PrimaryA.args = {
  variant: 'primary',
  children: 'Primary Args', //the story level of args will overwrite the component level of args
};

export const SecondaryA = Template.bind({});

SecondaryA.args = {
  ...PrimaryA.args,
  //children: 'Secondary Args',
};

export const SuccessA = Template.bind({});
SuccessA.args = {
  variant: 'success',
};

//the SuccessA button use default args which show children is button.
