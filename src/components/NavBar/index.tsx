import React from 'react';
import { StyledNavBar, Button, Line } from './NavBar'

interface NavBarProps {

}
const NavBar: React.FC<NavBarProps> = ({ }) =>
(
  <StyledNavBar>
    <Button>MELBOURNE</Button>
    <Line />
    <Button>SYDNEY</Button>
    <Line />
    <Button>BRISBANE</Button>
  </StyledNavBar>
);

export default NavBar;