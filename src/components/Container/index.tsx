import React from 'react'
import Current from '../Current'
import Forecast from '../Forecast'
import NavBar from '../NavBar'
import StyledContainer from './Container'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  margin: 171px auto 85px auto;
  justify-content: center;
  width: 664px;
  height: 401px;
`

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