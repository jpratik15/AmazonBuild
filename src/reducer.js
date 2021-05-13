export const initialState = {
  basket: [],
  subTotal: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
        subTotal: state.subTotal + action.item.price,
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex((basketItem) => basketItem.id === action.item.id);
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Can't remove id: ${action.item.id} from the basket`);
      }
      return {
        ...state,
        basket: newBasket,
        subTotal: state.subTotal - action.item.price,
      };
    default:
      return state;
  }
};
export default reducer;
