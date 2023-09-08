import logo from "./logo.svg";
import "./App.css";
import BoxComponent from "./components/Box";
import Basketball from "./api/api";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BoxComponent/>
        <Basketball/>
      </header>
    </div>
  );
}

export default App;
