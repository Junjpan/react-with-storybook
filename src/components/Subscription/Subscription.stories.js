import React from 'react';
import { Primary } from '../Button/Button.stories';
import { Large } from '../Input/Input.stories';

const title = {
  title: 'form/Subscription',
};

export default title;

export const PrimarySubscription = () => (
  <>
    <Large />
    <br />
    <Primary />
  </>
);
