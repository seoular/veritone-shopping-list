import * as React from 'react';
import {connect} from 'react-redux';
import { Checkbox, Button,Modal, Dropdown, TextArea} from 'semantic-ui-react'
import {addItem, editItem, deleteItem} from '../Actions/ShoppingActions'
import "./AddEditModal.css";

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

class AddEditModal extends React.Component {


  constructor(props) {
    super(props);
    
    this.state = {
      open: false,
      itemName: null,
      itemDescription: null,
      itemQuantity: null,
      characterCount: 0,
    };
  }
  componentDidMount(){

  }
  componentDidUpdate(prevProps){
  }
  setOpen(boolVal){
    this.setState({open: boolVal})
  }
  
  render() {
    return (  
      <Modal
        onClose={() => this.setOpen(false)}
        onOpen={() => this.setOpen(true)}
        open={this.state.open}
        // this trigger is rendered when the modal is not open
        trigger={this.props.isAddModal 
          ? 
            <Button className="addButton">
              {this.props.addMessage}
            </Button>
          : <Button icon>
              <div className="material-icons-outlined">edit</div>
            </Button>
        }
      > 

      {/* MODAL CONTENT */}

        <div className="shoppingListPanelHeader">
          
          <div className="shoppingListPanelHeaderText">
            Shopping List
          </div>
          <Button className="hideButtonContainer" onClick={() => this.setOpen(false)}>
            <div className="material-icons">last_page</div>
          </Button>
          
        </div>
          

        {this.props.isAddModal ? 
            <div className="addAnItem">
              Add an item
            </div>
          :
            <div className="addAnItem">
              Edit an item
            </div>

        }
        {this.props.isAddModal ? 
            <div className="addYourNewItemBelow">
              Add your new item below
            </div>
          :
            <div className="addYourNewItemBelow">
              Edit your item below
            </div>
        }
        <div className="itemNameInputContainer">
          <input className="itemNameInput" placeholder={this.props.isAddModal ? 'Item Name' : this.props.itemName} 
            onChange={(event, data) => {
              this.setState({itemName: event.target.value})
            }}
          />
        </div>
        <div className="descriptionInputContainer">

          <TextArea className="descriptionInput" placeholder={this.props.isAddModal ? 'Description' : this.props.itemDescription} maxLength="100"
            onChange={(event, data) => {
              this.setState({itemDescription: event.target.value, characterCount: event.target.value.length})
            }}>
            
          </TextArea>
        </div>
        <div className="characterCount">
          {this.state.characterCount + "/100"}
        </div>
        <div className="quantityInput">
          <Dropdown
            placeholder={this.props.isAddModal ? 'How Many?' : this.props.itemQuantity}
            fluid
            selection
            options={quantityOptions}
            onChange={(event, data) => {
              this.setState({itemQuantity: event.target.innerText})
            }}
          />
        </div>
            
        {
          !this.props.isAddModal && 
            <div className="checkBoxContainer">
              <Checkbox />
            </div>
        }
        {
          !this.props.isAddModal && 
            <label className="purchasedLabel">Purchased</label>
        }
            
            
        <Button className="cancelButton" onClick={() => this.setOpen(false)}>
          <div className="cancelButtonText">
            Cancel
          </div>
        </Button>
          {this.props.isAddModal 
            ? <Button className="addTaskButton"
                onClick={() => {
                  this.props.addItem({
                    itemName: this.state.itemName,
                    itemDescription: this.state.itemDescription,
                    itemQuantity: this.state.itemQuantity
                  })
                  this.setOpen(false);
                }}
              >
                <div className="addTaskButtonText">
                  Add Task
                </div>
              </Button>
            : 
              <Button className="addTaskButton"
                onClick={() => {
                  this.props.editItem(this.props.itemID, {
                    itemName: this.state.itemName,
                    itemDescription: this.state.itemDescription,
                    itemQuantity: this.state.itemQuantity
                  })
                  this.setOpen(false)

                }}
              >
                <div className="addTaskButtonText">
                  Save Item
                </div>
              </Button>
          }
      </Modal> 
    )
  }
}
const mapStateToProps = (state) => {
  return {...state,
  }
}
const mapDispatchToProps = {
  addItem: addItem,
  editItem: editItem,
  deleteItem: deleteItem,

}

export default connect(mapStateToProps, mapDispatchToProps)(AddEditModal);