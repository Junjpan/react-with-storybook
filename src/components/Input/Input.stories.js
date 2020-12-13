import React from 'react';
import Input from './Input';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Form/Input',
  component: Input,
};

export const Small = () => <Input size='small' type='date' />;
export const Medium = () => (
  <label htmlFor='password'>
    Password
    <Input size='medium' id='password' type='password' />
  </label>
);
export const Large = () => <Input size='large' placeholder='Large size' />;
