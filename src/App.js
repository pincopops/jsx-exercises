import logo from './logo.svg';
import './App.css';

//jsx-01
let hello = <h1>Hello, World!</h1>

//jsx-02
const greetings = (name) => <h1>Hello, {name}</h1>;

//jsx-05
const sum = (a,b) => <h2>{a+b}</h2>;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <span>{hello}</span>
        <span>{greetings("Elio")}</span>
        <span>{sum(20,5)}</span>
      </header>
    </div>
  );
}

export default App;
