import logo from './logo.svg';
import Img from './components/Img'
import GlobalStyle from './index'
import './App';
import WeatherCard from './components/WeatherCard';


function App() {
  return (
    <div className="App">
      <GlobalStyle />

      {/* <Img src={logo} className="App-logo" alt="logo" /> */}

      <WeatherCard />
    </div>
  );
}

export default App;
