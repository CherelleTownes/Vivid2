import React from 'react';
import { storiesOf } from '@storybook/react';
import ButtonBoredReload from "./ButtonBored"


storiesOf('ButtonBored', module)
  .add('Button 1', () => <ButtonBoredReload button="boredPageButtonOne" label="Give Me A Different Task" />)
  .add('Button 1', () => <ButtonHumorMe button="boredPageButtonTwo" label="Humor Me" />)
  