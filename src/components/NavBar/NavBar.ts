import styled from 'styled-components';

export const StyledNavBar = styled.div`
  display: flex;
  margin-top: 80px;
  margin-left: 65px;
  margin-right: 65px;
  width: 100%;
  justify-content: space-between;
`;

export const StyledButton = styled.button`
  border: 2px solid #000000;
  box-sizing: border-box;
  background: #FFFFFF;
  border-radius: 25px;
  height: 50px;
  width: 177px;
  font-weight: 500;
  font-style: normal;
  line-height: 21px;
  letter-spacing: 0.015em;
  text-transform: uppercase;
  font-size: 18px;
  z-index: 2;
`

export const SelectedButton = styled(StyledButton)`

`

export const Line = styled.span`
  position: relative;
  display: block;
  width: 67px;
  top: 4%;
  height: 2px;
  background: #000000;
  z-index: 1
`

