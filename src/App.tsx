import logo from './logo.svg';
import Img from './components/Img'
import GlobalStyle from './index'
import './App.ts';
import WidgetWrapper from './components/WidgetWrapper/WidgetWrapper';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      {/* <header className="App-header">
        <Img src={logo} className="App-logo" alt="logo" />
        <p>This is the test Widget</p>
        
      </header> */}
      <WidgetWrapper>
        <p>This is the weather widget app</p>
      </WidgetWrapper>
    </div>
  );
}

export default App;
