import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  headphones: []
}

const headphonesSlice = createSlice({
  name: "headphones",
  initialState,
  reducers: {
    addHeadphonesToCart: (state, action) => {
      state.headphones.push(action.payload)
    },
    increaseHeadphonesCounter: (state, action) => {
      const index = state.headphones.findIndex(el => el.id === action.payload);
      state.headphones[index].counter++
    },
    decreaseHeadphonesCounter: (state, action) => {
      const index = state.headphones.findIndex(el => el.id === action.payload);
      if (state.headphones[index].counter === 1) {
        state.headphones = state.headphones.filter(({id}) => id !== action.payload)
      } else {
        state.headphones[index].counter--
      }
    },
    removeHeadphonesFromCart: (state, action) => {
      state.headphones = state.headphones.filter(({id}) => id !== action.payload)
    }
  }
})

const {reducer, actions} = headphonesSlice

export default reducer;

export const {
  addHeadphonesToCart,
  increaseHeadphonesCounter,
  decreaseHeadphonesCounter,
  removeHeadphonesFromCart
} = actions
