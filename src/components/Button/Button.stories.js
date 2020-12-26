import React from 'react';
import Button from './Button';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Form/Button', // title should be unqiue for the entire project, this property is mandatory
  component: Button, //component property is optional
};

export const Primary = () => <Button variant='primary'>Primary</Button>;
export const Secondary = () => <Button variant='secondary'>Primary</Button>;
export const Success = () => <Button variant='success'>Primary</Button>;
export const Danger = () => <Button variant='danger'>Primary</Button>;

const Template = (args) => <Button {...args} />;

export const PrimaryA = Template.bind({});
console.log(PrimaryA);
