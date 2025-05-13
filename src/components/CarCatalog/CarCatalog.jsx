import { useDispatch, useSelector } from "react-redux";
import { selectCars } from "../../redux/cars/carsSelectors";
import CarItem from "../CarItem/CarItem";
import css from "./CarCatalog.module.css";
import { useEffect } from "react";
import { getAllCars } from "../../redux/cars/carsOps";

const CarCatalog = () => {
  const cars = useSelector(selectCars);
  const dispatch = useDispatch();

  // console.log(cars);
  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);
  return (
    <div>
      <ul className={css.carList}>
        {cars.map((car) => {
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
