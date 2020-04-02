import React from 'react';
import { storiesOf } from '@storybook/react';
import { ButtonJokes, ButtonJokesReload } from "./ButtonJokes"

storiesOf('ButtonJokes', module)
  .add('Button 1', () => <ButtonJokes button="jokePageButtonOne" label="I'm Bored, Give Me A Task Instead" />)
  .add('Button 2', () => <ButtonJokesReload button="jokesPageButtonTwo" label="Humor Me Again" />)