import React from 'react';
import '../../styles/form.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeCar, changeCost } from '../../slices/formSlice';
import { addCar } from '../../slices/carsSlice';

const CarForm = () => {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => state.form);

  const changeCarName = (e) => {
    dispatch(changeCar(e.target.value));
  };

  const changeCarCost = (e) => {
    const carCost = parseInt(e.target.value) || 0;
    dispatch(changeCost(carCost));
  };

  const submitCarForm = (e) => {
    e.preventDefault();

    dispatch(addCar({ name, cost }));
    dispatch(changeCar(''), changeCost(0));
  };

  return (
    <div className="addCar">
      <h4>Add Car</h4>
      <form onSubmit={submitCarForm}>
        <div className="carName">
          <label htmlFor="carName">Cars:</label>
          <input type="text" id="carName" value={name} onChange={changeCarName} />
        </div>
        <div className="carCost">
          <label htmlFor="carCost">Cost:</label>
          <input type="number" id="carCost" value={cost || ''} onChange={changeCarCost} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CarForm;
