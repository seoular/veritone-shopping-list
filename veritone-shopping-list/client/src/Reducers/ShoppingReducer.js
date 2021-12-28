
const ShoppingReducer = (state, action) => {
  if (typeof state === 'undefined') {
    state = {
      shoppingList: []      

    }
  }
  const {type, payload} = action;
  switch (type){
    case 'ADD': 
      let newShoppingList = state.shoppingList.slice();
      newShoppingList.push(payload);
      return {...state, shoppingList: newShoppingList};
    case 'DELETE':
      let newShoppingList2 = state.shoppingList.slice();
      newShoppingList2.splice(payload, 1);      
      return {...state, shoppingList: newShoppingList2}
    case 'EDIT':
      let newShoppingList3 = state.shoppingList.slice();
      newShoppingList3.splice(payload.itemID, 1, payload.newItem);      
      return {...state, shoppingList: newShoppingList3}
    case 'SELECT':
    default: return state;   
  }
}

export default ShoppingReducer;