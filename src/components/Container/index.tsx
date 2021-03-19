import React from 'react'
import Current from '../Current'
import Forecast from '../Forecast'
import NavBar from '../NavBar'
import { StyledContainer, Wrapper } from './Container'

interface ContainerProps {

}

const Container: React.FC<ContainerProps> = ({ }) =>
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