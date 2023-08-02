

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  restaurant : '',
  dishName : '',
  grade : '',
  category : '',
  notes : '',
  username : 'TEST'
}

export const updateDishSlice = createSlice({
  name: 'update',
  initialState,
  reducers: {
    updateRestaurant: (state, action) => {
      state.restaurant = action.payload
    },
    updateDishName: (state, action) => {
      state.dishName = action.payload
    },
    updateGrade: (state, action) => {
      state.grade = action.payload
    },
    updateCategory: (state, action) => {
      state.category = action.payload
    },

    updateNotes: (state, action) => {
      state.notes = action.payload
    },
    updateUsername: (state, action) => {
      state.username = action.payload
    },
  },
});

// This is for dispatch
export const { updateRestaurant, updateDishName, updateGrade,updateNotes, updateCategory, updateUsername} = updateDishSlice.actions;

// This is for configureStore
export default updateDishSlice.reducer;
