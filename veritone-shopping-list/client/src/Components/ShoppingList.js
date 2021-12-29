import * as React from 'react';
import {connect} from 'react-redux';
import ShoppingItem from './ShoppingItem';
import AddEditSidebar from './AddEditSidebar';
import {addItem, incrementAddKey} from '../Actions/ShoppingActions'
import {Button} from 'semantic-ui-react'
import './ShoppingList.css';

class ShoppingList extends React.Component {


  constructor(props) {
    super(props);
    
    this.state = {
      showModal: false, 
      sidebarVisible:false
    };
  }
  componentDidMount(){

  }
  componentDidUpdate(prevProps){
  }
  
  render() {
    // check this.props.shoppingList length to see if there are any items
    return (
      this.props.shoppingList.length > 0 
        ?              
          <React.Fragment> 
            <div className="yourItemsLabel">
              Your Items
            </div>
            <div className="shoppingListAddButtonContainer">
              {/* <AddEditModal addMessage={"Add Item"} isAddModal={true}/> */}
              <Button className="addButton" onClick={() => this.setState({sidebarVisible:!this.state.sidebarVisible})}
              >
                Add Item
              </Button>
            </div>

            {/* here we map over our shopping list in the redux store and display them all */}
            <div className="shoppingListContainer">          
              {this.props.shoppingList.map((item, itemID) => {
                return <ShoppingItem itemID={itemID} itemQuantity={item.itemQuantity} itemName={item.itemName} itemDescription={item.itemDescription}/>
              }) }
            </div>

            {/* we are incrementing the key here on all updates to the shopping list to rerender this component */}
            <AddEditSidebar toggleSidebar={() => this.setState({sidebarVisible:!this.state.sidebarVisible})} isAddModal={true} visible={this.state.sidebarVisible} />
          </React.Fragment>    
              
        :
          <React.Fragment >
            <div className="emptyList"/>
            <div className="emptyListText">
              Your shopping list is empty :(
            </div>
            <div className="addButtonContainer">
              {/* <AddEditModal isAddModal={true} addMessage={"Add your first item"}/> */}
              <Button className="addButton" onClick={() => this.setState({sidebarVisible:!this.state.sidebarVisible})}>
                Add your first item
              </Button>
            </div>
            
            {/* we are incrementing the key here on all updates to the shopping list to rerender this component */}
            <AddEditSidebar  toggleSidebar={() => this.setState({sidebarVisible:!this.state.sidebarVisible})} visible={this.state.sidebarVisible} isAddModal={true} />

          </React.Fragment> 
    )
  }
}

const mapStateToProps = (state) => {
  return {...state,
    shoppingList: state.shoppingList,
    addKey: state.addKey
  }
}
const mapDispatchToProps = {
  addItem: addItem,
  incrementAddKey: incrementAddKey
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);