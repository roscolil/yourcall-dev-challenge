import React from 'react';
import StyledForecast from './Forecast'
interface Props {

}
function Forecast(props: Props) {
  return (
    <StyledForecast>
      <span>This is the forcast weather section</span>
    </StyledForecast>
  );
}

export default Forecast;