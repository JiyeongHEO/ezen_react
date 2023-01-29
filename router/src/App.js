import logo from './logo.svg';
import './App.css';
/**
 * 2023-01-29 시작 - Single Page App~
 * yarn add react-router-dom -> package.json확인(지금 6버전이다!버전따라 에러가능성있음!)
 * 
 * 
 */
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
      </header>
    </div>
  );
}

export default App;
