import React from 'react';
import '../../styles/search.css';
import { useDispatch, useSelector } from 'react-redux';
import { searchTerm } from '../../slices/carsSlice';

const CarSearch = () => {
  const dispatch = useDispatch();
  const searchCar = useSelector((state) => state.cars.searchTerm);

  const handleSearch = (e) => {
    dispatch(searchTerm(e.target.value));
  };

  return (
    <div className="carSearch">
      <h3>My Cars</h3>
      <input type="text" placeholder="Search..." value={searchCar} onChange={handleSearch} />
    </div>
  );
};

export default CarSearch;
