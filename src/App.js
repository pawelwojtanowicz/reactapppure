import logo from './logo.svg';
import logo2 from './logo2.svg';
import './App.css';
import './components/AwesomeBox.css';
import './components/Toggle.css';
import { AwesomeComponent } from './components/AwesomeBox';
import { Toggle } from './components/Toggle';
import { Toggle2 } from './components/Toggle2';
import { Example } from './components/UseStatePractice';
import { Example2 } from './components/UseStatePractice';



const numbers = ["name1", "name2", "name3", "name4", "anme5", "name6", "name7"];

const listNames = numbers.map((number) =>
  <AwesomeComponent name={number+" "+"hurray"}></AwesomeComponent>
);






    const a=1;
    if (a) {
    console.log('prawda')
    } else {
    console.log('falsz')
    }

    const b=0;
    if (b) {
    console.log('prawda')
    } else {
    console.log('falsz')
    } 

    const c='pawel';
    if (c) {
    console.log('prawda')
    } else {
    console.log('falsz')
    }

    const d='';
    if (d) {
    console.log('prawda')
    } else {
    console.log('falsz')
    }
  
    const e=' ';
    if (e) {
    console.log('prawda')
    } else {
    console.log('falsz')
    }

    const f={};
    if (f) {
    console.log('prawda')
    } else {
    console.log('falsz')
    }

    const g=[];
    if (g) {
    console.log('prawda')
    } else {
    console.log('falsz')
    }

    const h=false;
    const i=false;
    if (h&&i) {
    console.log('prawda')
    } else {
    console.log('falsz')
    }

    const j=false;
    const k=false;
    if (j||k) {
    console.log('prawda')
    } else {
    console.log('falsz')
    }

function App() {
  return (
    <>
    
    <Toggle></Toggle>

    <Toggle2></Toggle2>

    <Example></Example>
    <Example2></Example2>
   
    {listNames}
    
    

    <AwesomeComponent name="I'm the first"></AwesomeComponent>
    <AwesomeComponent name="and I'm the second" color="#00FF00" textColor="#000000"></AwesomeComponent>
    
    
    
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
