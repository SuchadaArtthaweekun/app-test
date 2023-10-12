import logo from "./logo.svg";
import "./App.css";
import Api from "./components/Api";
import CardDetail from "./components/Card";
import { store } from "./store/store"; 
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CardDetail />
        <Api />
      </div>
    </Provider>
  );
}

export default App;
