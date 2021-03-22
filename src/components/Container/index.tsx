import React from 'react'
import Current from '../Current'
import Forecast from '../Forecast'
import NavBar from '../NavBar'
import { StyledContainer, Wrapper } from './Container'


const Container = () =>
(
  <StyledContainer>
    <NavBar />
    <Wrapper>
      <Current />
      <Forecast />
    </Wrapper>
  </StyledContainer>
);

export default Container;