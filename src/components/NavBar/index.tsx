import React from 'react';
import { StyledNavBar, StyledButton, Line } from './NavBar'

interface NavBarProps {

}
const NavBar: React.FC<NavBarProps> = ({ }) =>
(
  <StyledNavBar>
    <StyledButton>MELBOURNE</StyledButton>
    <Line />
    <StyledButton>SYDNEY</StyledButton>
    <Line />
    <StyledButton>BRISBANE</StyledButton>
  </StyledNavBar>
);

export default NavBar;