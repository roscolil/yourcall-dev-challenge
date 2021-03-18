import React from 'react';
import NavBar from '../NavBar'
import StyledContainer from './Container'

interface Props {

}

function Container(props: Props) {
  return (
    <StyledContainer>
      <NavBar />
    </StyledContainer>
  );
}

export default Container;