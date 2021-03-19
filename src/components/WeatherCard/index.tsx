import Container from "../Container"
import StyledWeatherCard from './WeatherCard'

interface WeatherCardProps {

}

const WeatherCard: React.FC<WeatherCardProps> = ({ }) =>
(
  <StyledWeatherCard>
    <Container />
  </StyledWeatherCard>
);

export default WeatherCard;