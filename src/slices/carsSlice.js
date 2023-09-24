import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  searchTerm: '',
  carsList: [],
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    searchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      state.carsList.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar(state, action) {
      const updated = state.carsList.filter((car) => car.id !== action.payload);

      state.carsList = updated;
    },
  },
});

export const carsReducer = carsSlice.reducer;
export const { searchTerm, addCar, removeCar } = carsSlice.actions;
