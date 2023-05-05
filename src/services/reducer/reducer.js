import { ADD_HEADPHONES_TO_CART } from "../actions/AddHeadphones";

const initialState = {
  headphones: [],
  headphonesCounter: 0,
  totalPrice: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_HEADPHONES_TO_CART:
      return {
        ...state,
        headphones: [...state.headphones, action.headphones],
        headphonesCounter: state.headphonesCounter + 1,
        totalPrice: state.totalPrice + action.headphones.price,
      };
    case "INCREASE_TOTAL_PRICE":
      return {
        ...state,
        totalPrice: state.totalPrice + action.headphonesPrice,
      };
    case "DECREASE_TOTAL_PRICE":
      return {
        ...state,
        totalPrice: state.totalPrice - action.headphonesPrice,
      };
    default:
      return state;
  }
};

export default reducer;
