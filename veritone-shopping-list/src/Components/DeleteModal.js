import * as React from 'react';
import {connect} from 'react-redux';
import {  Button,  Modal,} from 'semantic-ui-react'
import {addItem, editItem, deleteItem} from '../Actions/ShoppingActions'
import './DeleteModal.css';
class DeleteModal extends React.Component {


  constructor(props) {
    super(props);
    
    this.state = {
      open: false,
      itemName: null,
      itemDescription: null,
      itemQuantity: null,
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
        className="deleteModal"
        onClose={() => this.setOpen(false)}
        onOpen={() => this.setOpen(true)}
        open={this.state.open}
        trigger={
          <Button icon>
            <div className="material-icons">delete</div>
          </Button>
        }
      >
        <div className="deleteModalTitle">
          Delete item?
        </div>
        <div className="deleteModalMessage">
          Are you sure you want to delete this item? This can not be undone.
        </div>  
        <div className="deleteModalButtonGroup">
          <Button className="deleteModalCancelButton" color='white' onClick={() => this.setOpen(false)}>
            Cancel
          </Button>
          <Button className="deleteModalDeleteButton"
            onClick={() => {
              this.props.deleteItem(this.props.itemID);
              this.setOpen(false);
            }}
          >
            Delete
          </Button>
        </div>  
          
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

export default connect(mapStateToProps, mapDispatchToProps)(DeleteModal);