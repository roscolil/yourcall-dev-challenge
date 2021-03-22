import React, { Fragment } from 'react';
import GlobalStyle from '../../globalStyles';
import { StyledForecast, Grid, Row, Col, Span } from './Forecast'
import Icon from '../Icon'
interface ForecastProps {

}
const Forecast: React.FC<ForecastProps> = ({ }) =>
(
  <Fragment>
    <GlobalStyle />
    <StyledForecast>
      <Grid>
        <Col>
          <Row>
            <h4>Forecast For Tomorrow</h4>
          </Row>
          <Row>
            <h5>23 February</h5>
          </Row>
        </Col>
        <Col>
          <Row>
            <Span>13.9</Span>
          </Row>
        </Col>
        <Col>
          <Row>
            <h5>Cloudy and Windy</h5>
          </Row>
        </Col>
        <Col>
          <Row>
            <Icon src={"https://via.placeholder.com/65"} className="" alt="" />
          </Row>
        </Col>
      </Grid>
    </StyledForecast>
  </Fragment>
);

export default Forecast;