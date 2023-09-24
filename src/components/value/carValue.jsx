import React, { useMemo } from 'react';
import '../../styles/value.css';
import { useSelector } from 'react-redux';

const CarValue = () => {
  const { carsList: data, searchTerm } = useSelector((state) => state.cars);

  const totalCost = useMemo(() => {
    return data.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase())).reduce((acc, car) => acc + car.cost, 0);
  }, [data, searchTerm]);

  return (
    <div className="carValue">
      <div>
        Total cost: $<p>{totalCost}</p>
      </div>
    </div>
  );
};

export default CarValue;
