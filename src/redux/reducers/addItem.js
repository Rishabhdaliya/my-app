const addItem = [];

const addItems = (state = addItem, action) => {
  switch (action.type) {
    case "ADDITEM":
      return [...state, action.payload];
      break;

    case "DELITEM":
      const indexVal = state.findIndex((x => x.id === action.payload.id));
      if (indexVal !== -1) {
        state.splice(indexVal, 1);
      }
      return [...state]

    case "INCREMENT":
      const index = state.findIndex((x => x.id === action.payload));
      if (index !== -1) {
        debugger
        state[index].quantity = state[index].quantity + 1;
      } 
      return [...state];

    case "DECREMENT":
      const indexValue = state.findIndex((x => x.id === action.payload));
      if (indexValue !== -1) {
        state[indexValue].quantity = state[indexValue].quantity !== 1 ? state[indexValue].quantity - 1 : state[indexValue].quantity;
      } 
      return [...state];
    default:
      return state;
  }
};

export default addItems;
