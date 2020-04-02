import React from 'react';
import { storiesOf } from '@storybook/react';
import ButtonApp from "./ButtonApp"

storiesOf('ButtonApp', module)
  .add('Button 1', () => <ButtonApp button="homePageButtonOne" label="I'm Bored"/>)
  .add('Button 2', () => <ButtonApp button="homePageButtonTwo" label="Humor Me"/>)
  





