import logo from './logo.svg';
import './App.css';
import Api from './components/Api';
import CardDetail from './components/Card';

function App() {
  return (
    <div className="App">
      <CardDetail />
      <Api />
    </div>
  );
}

export default App;
