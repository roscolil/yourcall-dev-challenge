import React, { useState } from 'react';
// import { GetCurrentWeatherQuery, GetCurrentWeatherQueryVariables } from '../../generated/graphql';
import { StyledNavBar, StyledButton, Line } from './NavBar'
// import { QUERY_CITY_NAME } from './query';

interface NavBarProps {

}

const NavBar: React.FC<NavBarProps> = ({ }) => {

  return (
    <StyledNavBar>
      <StyledButton value="melbourne">MELBOURNE</StyledButton>
      <Line />
      <StyledButton value="sydney">SYDNEY</StyledButton>
      <Line />
      <StyledButton value="brisbane">BRISBANE</StyledButton>
    </StyledNavBar>
  );
}

export default NavBar;