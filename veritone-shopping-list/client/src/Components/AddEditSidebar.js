import * as React from 'react';
import {connect} from 'react-redux';
import { Checkbox, Button, Dropdown, TextArea, Sidebar, Segment} from 'semantic-ui-react'
import {addItem, editItem, deleteItem} from '../Actions/ShoppingActions'
import "./AddEditSidebar.css";

const quantityOptions = 
  [
    {
      key: '1',
      text: '1',
      value: '1'
    },
    {
      key: '2',
      text: '2',
      value: '2'
    },
    {
      key: '3',
      text: '3',
      value: '3'
    },
    {
      key: '4',
      text: '4',
      value: '4'
    },
    {
      key: '5',
      text: '5',
      value: '5'
    },
  ];

class AddEditSidebar extends React.Component {


  constructor(props) {
    super(props);
    
    this.state = {
      open: false,
      itemName: null,
      itemDescription: null,
      itemQuantity: null,
      characterCount: 0,
      fieldKey:0
    };
  }
  componentDidMount(){
  }
  setOpen(boolVal){
    this.setState({open: boolVal})
  }
  componentDidUpdate(prevProps){
    if(prevProps.visible !== this.props.visible){
      this.setOpen(this.props.visible);
    }
  }
  
  
  render() {
    const ShoppingListPanelHeader = () => 
      <div className="shoppingListPanelHeader">        
        <div className="shoppingListPanelHeaderText">
          Shopping List
        </div>
        <Button className="hideButtonContainer" onClick={() => {
          this.setOpen(false);
        }}>
          <div className="material-icons">last_page</div>
        </Button>
      </div>;

    const AddEditItemText1 = () => 
      this.props.isAddModal ? 
          <div className="addAnItem">
            Add an item
          </div>
        :
          <div className="addAnItem">
            Edit an item
          </div>

    const AddEditItemText2 = () =>   
      this.props.isAddModal ? 
          <div className="addYourNewItemBelow">
            Add your new item below
          </div>
        :
          <div className="addYourNewItemBelow">
            Edit your item below
          </div>

    const ItemDescriptionCharCount = () => 
      <div className="characterCount">
        {this.state.characterCount + "/100"}
      </div>

    const PurchasedCheckbox = () =>  
      !this.props.isAddModal && 
        <div className="checkBoxContainer">
          <Checkbox />
        </div>
    const PurchasedLabel = () => 
      !this.props.isAddModal && 
          <label className="purchasedLabel">Purchased</label>

    const CancelButton = () => 
      <Button className="cancelButton" onClick={() => this.setOpen(false)}>
        <div className="cancelButtonText">
          Cancel
        </div>
      </Button>

    const AddEditButton = () => 
      this.props.isAddModal 
        ? <Button className="addTaskButton"
            onClick={() => {
              this.props.addItem({
                itemName: this.state.itemName,
                itemDescription: this.state.itemDescription,
                itemQuantity: this.state.itemQuantity
              })      
              this.setOpen(false); 

              
              //We increment field key in order to reset the input fields as they are not resetting on 
              //  add item due to component not remounting. In order to not force an unnecessary remount, 
              //  I believe this is an appropriate workaround.
              this.setState({
                fieldKey:this.state.fieldKey+1
              });           
            }}
          >
            <div className="addTaskButtonText">
              Add Task
            </div>
          </Button>
        : 

        //Here we are only editing the item if user enters something
          <Button className="addTaskButton"
            onClick={() => {
              this.props.editItem(this.props.itemID, {
                itemName: this.state.itemName ? this.state.itemName : this.props.itemName,
                itemDescription: this.state.itemDescription ? this.state.itemDescription : this.props.itemDescription,
                itemQuantity: this.state.itemQuantity ? this.state.itemQuantity : this.props.itemQuantity
              })
              this.setOpen(false);


              //We increment field key in order to reset the input fields as they are not resetting on 
              //  add item due to component not remounting. In order to not force an unnecessary remount, 
              //  I believe this is an appropriate workaround.
              this.setState({
                fieldKey:this.state.fieldKey+1
              }); 
            }}
          >
            <div className="addTaskButtonText">
              Save Item
            </div>
          </Button>
      
    const ShoppingFooter = () => 
      <div className={"brandFooter"}>
        <div className="brandBar">
        </div>
      </div>
      
    

    return (
    


       // MODAL CONTENT
      <Sidebar
        as={Segment}
        animation={"overlay"}
        direction={"right"}
        visible={this.state.open}
        onHide={this.props.toggleSidebar}
        // onHide={() => this.setOpen(false)}
      >
        <ShoppingListPanelHeader/>          
        <AddEditItemText1/>
        <AddEditItemText2/>

        {/* Item Name Input */}
        {/* Moving input field into its own function component messes up input field functionality,  */}
        {/* I would spend more time figuring it out if this was a real product */}

        <div className="itemNameInputContainer">
          <input key={this.state.fieldKey} className="itemNameInput" placeholder={this.props.isAddModal ? 'Item Name' : this.props.itemName} 
            onChange={(event, data) => {
              this.setState({itemName: event.target.value})
            }}
          />
        </div>

        {/* Item Description Input */}

        <div className="descriptionInputContainer">
          <TextArea key={this.state.fieldKey} className="descriptionInput" placeholder={this.props.isAddModal ? 'Description' : this.props.itemDescription} maxLength="100"
            onChange={(event, data) => {
              this.setState({itemDescription: event.target.value, characterCount: event.target.value.length})
            }}>
            
          </TextArea>
        </div>

        <ItemDescriptionCharCount/>

        {/* Item Quantity Dropdown */}

        <div className="quantityInput">
          <Dropdown           
            key={this.state.fieldKey}
            placeholder={this.props.isAddModal ? 'How Many?' : this.props.itemQuantity}
            fluid
            selection
            options={quantityOptions}
            onChange={(event, data) => {
              this.setState({itemQuantity: event.target.innerText})
            }}
          />
        </div>

        <PurchasedCheckbox/>
        <PurchasedLabel/>
        <CancelButton/>
        <AddEditButton/>
        <ShoppingFooter/> 
      </Sidebar>
        
    )
  }
}
const mapStateToProps = (state) => {
  return {...state,
    addKey: state.addKey
  }
}
const mapDispatchToProps = {
  addItem: addItem,
  editItem: editItem,
  deleteItem: deleteItem,

}

export default connect(mapStateToProps, mapDispatchToProps)(AddEditSidebar);