export const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_DECK':
      return {...state, deck: action.deck}
    case 'UPDATE_DECK':
      return {...state, deck: action.deck}
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
    default:
      break;
  }
}  


// export const reducer = (state, action) => {
//   switch(action.type) {
//     case 'ADD_DECK':
//       return {...state, deck: action.deck}
//     case 'UPDATE_DECK':
//       return {deck: action.deck}
//     default:
//       return state
//   }
// }
 
// export const getAction = (item) =>  {
//   switch (item.toString()) {
//     case 'cards':
//       return ({type: 'ADD_DECK', deck: item})
//     case 'deck':
//       return ({type: 'UPDATE_DECK', deck: item})
//     default:
//       break;
//   }
// }  

