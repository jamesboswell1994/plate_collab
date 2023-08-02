import { configureStore } from '@reduxjs/toolkit';
import updateReducer from './dishUpdateSlice.js'
export const store = configureStore({
  reducer: {
    dishUpdate : updateReducer
  }
});

export default store