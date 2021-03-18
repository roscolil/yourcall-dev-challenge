import * as React from 'react';
import Container from "../Container";
import StyledWeatherCard from './WeatherCard'

interface Props {

}

function WeatherCard(props: Props) {
  return (
    <StyledWeatherCard>
      <Container />
    </StyledWeatherCard>
  );
}

export default WeatherCard;