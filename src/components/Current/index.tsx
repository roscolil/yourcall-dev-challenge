import React, { Fragment, useEffect } from 'react'
// import { GetCurrentWeatherQuery } from '../../generated/graphql'
import { StyledCurrent, Grid, Row, Body, Col, Heading, H1 } from './Current'
import GlobalStyle from '../../globalStyles'
import { useQuery } from '@apollo/client'
import { GET_WEATHER } from '../../GraphQL/queries'
import Img from '../Img'

interface CurrentProps {
  // data: GetCurrentWeatherQuery
  // className: string
}

const Current: React.FC<CurrentProps> = ({ }) => {

  return (
    <Fragment>
      <GlobalStyle />
      <StyledCurrent>
        <Grid>
          <Heading>
            <h2>Weather for the day</h2>
            <h5>22 February</h5>
          </Heading>
          <Body>
            <Col>
              <Row><h2>21</h2><h5>High</h5></Row>
              <Row><h2>15</h2><h5>Low</h5></Row>
            </Col>
            <Col>
              <Row>
                <H1>19</H1>
              </Row>
            </Col>
            <Col>
              <Row>
                <Img src={"https://via.placeholder.com/65"} className="" alt="" />
              </Row>
              <Row>
                <h5>Cloudy and Windy</h5>
              </Row>
            </Col>
          </Body>
        </Grid>
      </StyledCurrent>
    </Fragment>
  );
}

export default Current;
