import logo from "./logo.svg";
import "./App.css";
import Home from "./home";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <a
        className="App-link"
        href="https://github.com/Mitchell8210"
        target="_blank"
        rel="noopener noreferrer"
      >
        Built With React & SWR by Mitchell Rhoads
      </a>
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
