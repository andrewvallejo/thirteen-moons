export const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_DECK':
      return {...state, deck: action.deck}
    default:
      return state
  }
}
 
export const getAction = (type, item) =>  {
  switch (type) {
    case 'deck':
      return ({type: 'ADD_DECK', deck: item})
    default:
      break;
  }
}  
