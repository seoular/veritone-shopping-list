import './App.css';
import ShoppingList from './Components/ShoppingList';
// import LoadingScreen from './Components/LoadingScreen';

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
        {/* <LoadingScreen/> */}
      </div>
    </div>
  );
}

export default App;
