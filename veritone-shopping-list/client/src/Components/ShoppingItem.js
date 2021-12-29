import * as React from 'react';
import {connect} from 'react-redux';
import { Segment, Checkbox, Button} from 'semantic-ui-react'
// import AddEditModal from './AddEditModal';
import AddEditSidebar from './AddEditSidebar';
import DeleteModal from './DeleteModal';
import {deleteItem} from '../Actions/ShoppingActions';
import './ShoppingItem.css';

class ShoppingItem extends React.Component {


  constructor(props) {
    super(props);
    
    this.state = {
      checked: false,
      sidebarVisible: false,
    };
  }
  componentDidMount(){

  }
  componentDidUpdate(prevProps){
  }
  
  render() {

    return (
      <Segment style={this.state.checked ? {background:"rgba(213, 223, 233, 0.17)"} : {}}>

        <Checkbox  onChange={() => {this.setState({checked: !this.state.checked})}} />

        <div className="topHalf" style={this.state.checked ?{color: "#4D81B7", textDecoration:"line-through"} :  {display:"inline-block", marginRight: "10px"}}> 
          {this.props.itemName}
        </div>

        <div className="bottomHalf" style={this.state.checked ?{color: "#7D7A7A", textDecoration:"line-through"} :  {display:"inline-block", marginRight: "10px"}}>
          {this.props.itemDescription}
        </div>

        <div className="editModalContainer">
          <Button icon onClick={() => this.setState({sidebarVisible:!this.state.sidebarVisible})}>
            <div className="material-icons-outlined">edit</div>
          </Button>
          {/* <AddEditModal  isAddModal={false} {...this.props}/> */}
        </div>

        <div className="deleteButton">
          <DeleteModal/>
        </div>

        {/* we are incrementing the key here on all updates to the shopping list to rerender this component */}
        <AddEditSidebar  toggleSidebar={() => this.setState({sidebarVisible:!this.state.sidebarVisible})} visible={this.state.sidebarVisible} isAddModal={false} {...this.props} />

      </Segment>      
    )
  }
}
const mapStateToProps = (state) => {
  return {...state,
  }
}
const mapDispatchToProps = {
  deleteItem: deleteItem
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingItem);