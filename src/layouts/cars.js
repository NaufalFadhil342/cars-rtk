import '../App.css';
import CarForm from '../components/form/carForm';
import CarList from '../components/list/carList';
import CarSearch from '../components/search/carSearch';
import CarValue from '../components/value/carValue';

export const Cars = () => {
  return (
    <section>
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </section>
  );
};
