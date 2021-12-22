import './App.css';
import ShoppingList from './Components/ShoppingList';

function App() {
  return (
    <div className="App">
      <div className="shopHeader">
        <div className="shopTitle">
          SHOPPING LIST
        </div>  
      </div>
      <div className="shopBody">
        <ShoppingList/>
      </div>
    </div>
  );
}

export default App;
