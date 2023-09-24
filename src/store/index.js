import { configureStore } from '@reduxjs/toolkit';
import { formReducer } from '../slices/formSlice';
import { carsReducer } from '../slices/carsSlice';

const store = configureStore({
  reducer: {
    form: formReducer,
    cars: carsReducer,
  },
});

export { store };
