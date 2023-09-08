import logo from "./logo.svg";
import "./App.css";
import BoxComponent from "./components/Box";
import Basketball from "./api/api";
import Button from "./components/button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BoxComponent/>
        <Basketball/>
        <Button />
      </header>
    </div>
  );
}

export default App;
