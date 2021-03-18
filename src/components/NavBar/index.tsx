import * as React from 'react';
import StyledNavBar from './NavBar'

interface Props {

}
function NavBar(props: Props) {
  return (
    <StyledNavBar>
      <p>This is the widget navbar</p>
    </StyledNavBar>
  );
}

export default NavBar;