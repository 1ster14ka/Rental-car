import { useSelector } from "react-redux";
import { selectCars } from "../../redux/cars/carsSelectors";
import CarItem from "../CarItem/CarItem";
import css from "./CarCatalog.module.css";

const CarCatalog = () => {
  const cars = useSelector(selectCars);

  return (
    <div>
      <ul className={css.carList}>
        {cars.cars.map((car) => {
          return (
            <li key={car.id} className={css.carItem}>
              <CarItem car={car} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CarCatalog;
