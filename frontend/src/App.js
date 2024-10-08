import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Hand from './components/Hand';

function App() {
  return (
    <div className="App">
      
      
      <Card rank="8" suit="spades" />
      <Card rank="K" suit="diamonds" />
      
    </div>
  );
}

export default App;
