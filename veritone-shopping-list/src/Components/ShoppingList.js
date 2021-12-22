import * as React from 'react';
import {connect} from 'react-redux';
import ShoppingItem from './ShoppingItem';
import AddEditModal from './AddEditModal';
import {addItem} from '../Actions/ShoppingActions'
import './ShoppingList.css';

class ShoppingList extends React.Component {


  constructor(props) {
    super(props);
    
    this.state = {
      showModal: false
    };
  }
  componentDidMount(){

  }
  componentDidUpdate(prevProps){
  }
  
  render() {
    // check this.props.shoppingList length to see if there are any items
    return this.props.shoppingList.length > 0 
      ?    
        <React.Fragment> 
          <div className="yourItemsLabel">
            Your Items
          </div>
          <div className="shoppingListAddButtonContainer">
            <AddEditModal addMessage={"Add Item"} isAddModal={true}/>
          </div>

          {/* here we map over our shopping list in the redux store and display them all */}
          <div className="shoppingListContainer">          
            {this.props.shoppingList.map((item, itemID) => {
              return <ShoppingItem itemID={itemID} itemQuantity={item.itemQuantity} itemName={item.itemName} itemDescription={item.itemDescription}/>
            }) }
          </div>
        </React.Fragment>            
      :
        <React.Fragment >
          <div className="emptyList"/>
          <div className="emptyListText">
            Your shopping list is empty :(
          </div>
          <div className="addButtonContainer">
            <AddEditModal isAddModal={true} addMessage={"Add your first item"}/>
          </div>
        </React.Fragment>
  }
}

const mapStateToProps = (state) => {
  return {...state,
    shoppingList: state.shoppingList
  }
}
const mapDispatchToProps = {
  addItem: addItem
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);