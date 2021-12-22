

export const addItem = (item) => ({type: 'ADD', payload: item});
export const deleteItem = (itemID) => ({type: 'DELETE', payload: itemID});
export const editItem = (itemID, newItem) => ({type: 'EDIT', payload: {itemID: itemID, newItem: newItem}});
export const selectItem = (itemID) => ({type: 'SELECT', payload: itemID});
