import logo from "./logo.svg";
import "./App.css";
import BoxComponent from "./components/Box";
import Basketball from "./api/api";
import CardAttract from "./components/CardAttract";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BoxComponent/>
        <Basketball/>
        <CardAttract />
      </header>
    </div>
  );
}

export default App;
