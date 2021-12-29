import './App.css';
import ShoppingList from './Components/ShoppingList';
import {Sidebar, Segment} from 'semantic-ui-react'
// import LoadingScreen from './Components/LoadingScreen';

function App() {
  return (
    <div className="App">
      <Sidebar.Pushable as={Segment}>
        <Sidebar.Pusher>
          {/* <Segment > */}
            <div className="shopHeader">
              <div className="shopTitle">
                SHOPPING LIST
              </div>  
            </div>
            <div className="shopBody">
              <ShoppingList/>
              {/* <LoadingScreen/> */}
            </div>
          {/* </Segment> */}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
}

export default App;
