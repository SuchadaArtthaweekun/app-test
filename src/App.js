import logo from "./logo.svg";
import "./App.css";
import BoxComponent from "./components/Box";
import Basketball from "./api/api";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BoxComponent/>
        <Basketball/>
        <Card />
      </header>
    </div>
  );
}

export default App;
