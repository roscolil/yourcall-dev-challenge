import * as React from 'react';
import StyledNavBar from './NavBar'

interface Props {

}
function NavBar(props: Props) {
  return (
    <StyledNavBar>
      <span>This is the widget navbar</span>
    </StyledNavBar>
  );
}

export default NavBar;