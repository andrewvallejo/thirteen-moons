export const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_DECK':
      return {...state, deck: action.deck}
    case 'UPDATE_DECK':
      return {...state, deck: action.deck}
    case 'UPDATE_HAND':
      return {...state, hand: action.deck}
    default:
      return state
  }
}
 
export const getAction = (type, item) =>  {
  switch (type) {
    case 'deck':
      return ({type: 'ADD_DECK', deck: item})
    case 'currentDeck':
      return ({type: 'UPDATE_DECK', deck: item})
      case 'hand':
      return ({type: 'UPDATE_HAND', deck: item})
    default:
      break;
  }
}  
