import React, { Fragment } from 'react'
import GlobalStyle from './globalStyles'
import './App';
import WeatherCard from './components/WeatherCard';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      {/* <Img src={logo} className="App-logo" alt="logo" /> */}

      <WeatherCard />
    </Fragment>
  );
}

export default App;
