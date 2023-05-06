import { ADD_HEADPHONES_TO_CART } from "../actions/AddHeadphones";

const initialState = {
  headphones: [],
  headphonesCounter: 0,
  totalPrice: 0,
  headphonesById: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_HEADPHONES_TO_CART:
      if (
        !state.headphones.some((element) => element.id === action.headphones.id)
      ) {
        return {
          ...state,
          headphones: [...state.headphones, action.headphones],
          headphonesCounter: state.headphonesCounter + 1,
          totalPrice: state.totalPrice + action.headphones.price,
          headphonesById: {
            ...state.headphonesById,
            [action.headphones.id]: {
              counter: state.headphonesById[action.headphones.id]
                ? state.headphonesById[action.headphones.id].counter + 1
                : 1,
              totalPrice: state.headphonesById[action.headphones.id]
                ? state.headphonesById[action.headphones.id].totalPrice +
                  action.headphones.price
                : action.headphones.price,
            },
          },
        };
      } else {
        return {
          ...state,
          totalPrice: state.totalPrice + action.headphones.price,
          headphonesById: {
            ...state.headphonesById,
            [action.headphones.id]: {
              counter: state.headphonesById[action.headphones.id].counter + 1,
              totalPrice:
                state.headphonesById[action.headphones.id].totalPrice +
                action.headphones.price,
            },
          },
        };
      }
    case "INCREASE_TOTAL_PRICE":
      return {
        ...state,
        headphonesById: {
          ...state.headphonesById,
          [action.headphonesId]: {
            counter: state.headphonesById[action.headphonesId].counter + 1,
            totalPrice:
              state.headphonesById[action.headphonesId].totalPrice +
              action.price,
          },
        },
        totalPrice: state.totalPrice + action.headphonesPrice,
      };
    case "DECREASE_TOTAL_PRICE":
      return {
        ...state,
        headphonesById: {
          ...state.headphonesById,
          [action.headphonesId]: {
            counter: state.headphonesById[action.headphonesId].counter - 1,
            totalPrice:
              state.headphonesById[action.headphonesId].totalPrice -
              action.price,
          },
        },
        totalPrice: state.totalPrice - action.headphonesPrice,
      };
    default:
      return state;
  }
};

export default reducer;
