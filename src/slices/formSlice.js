import { createSlice } from '@reduxjs/toolkit';
import { addCar } from './carsSlice';

const initialState = {
  name: '',
  cost: 0,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    changeCar(state, action) {
      state.name = action.payload;
    },
    changeCost(state, action) {
      state.cost = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addCar, (state, action) => {
      state.name = '';
      state.cost = 0;
    });
  },
});

export const formReducer = formSlice.reducer;
export const { changeCar, changeCost } = formSlice.actions;
