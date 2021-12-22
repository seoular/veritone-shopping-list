import * as React from 'react';
import {connect} from 'react-redux';
import { Segment, Checkbox} from 'semantic-ui-react'
import AddEditModal from './AddEditModal';
import DeleteModal from './DeleteModal';
import {deleteItem, selectItem} from '../Actions/ShoppingActions';
import './ShoppingItem.css';

class ShoppingItem extends React.Component {


  constructor(props) {
    super(props);
    
    this.state = {
      checked: false,
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
          <AddEditModal  isAddModal={false} {...this.props}/>
        </div>
        <div className="deleteButton">
          <DeleteModal/>
        </div>
      </Segment>      
    )
  }
}
const mapStateToProps = (state) => {
  return {...state,
  }
}
const mapDispatchToProps = {
  deleteItem: deleteItem, 
  selectItem: selectItem
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingItem);