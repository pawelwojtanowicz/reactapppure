import logo from './logo.svg';
import logo2 from './logo2.svg';
import './App.css';
import { AwesomeComponent } from './components/AwesomeBox';

function App() {
  return (
    <>
    <AwesomeComponent></AwesomeComponent>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Bro
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <img src={logo2} className="App-logo" alt="logo2" />
    </div>
    </>
  );
}

export default App;
