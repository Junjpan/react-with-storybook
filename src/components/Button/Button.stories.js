import React from 'react';
import Button from './Button';
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
};

export const Primary = () => <Button variant='primary'>Primary</Button>;
export const Secondary = () => <Button variant='secondary'>Primary</Button>;
export const Success = () => <Button variant='success'>Primary</Button>;
export const Danger = () => <Button variant='danger'>Primary</Button>;

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
