import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../../styles/list.css';
import { removeCar } from '../../slices/carsSlice';

const CarList = () => {
  const dispatch = useDispatch();
  const { carsList: cars, searchTerm } = useSelector((state) => state.cars);
  const name = useSelector((state) => state.form.name);

  const filteredCar = useMemo(() => {
    return cars.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [cars, searchTerm]);

  const removeHandler = (remove) => {
    dispatch(removeCar(remove));
  };

  const renderedCars = filteredCar.map((car) => {
    const isBold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <span key={car.id}>
        <div className={`data ${isBold ? 'bolder' : ''}`}>
          <h3>{car.name}</h3>
          <p>${car.cost}</p>
        </div>
        <div className="remove">
          <button onClick={() => removeHandler(car.id)}>X</button>
        </div>
      </span>
    );
  });

  return <div className="carList">{renderedCars}</div>;
};

export default CarList;
