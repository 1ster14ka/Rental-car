import { useDispatch, useSelector } from "react-redux";
import { selectCars } from "../../redux/cars/carsSelectors";
import { useEffect } from "react";
import { getAllCars } from "../../redux/cars/carsOps";
import FiltersForm from "../../components/FiltersForm/FiltersForm";
import CarCatalog from "../../components/CarCatalog/CarCatalog";
import css from "./CarPage.module.css";

const CarPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);
  console.log(cars);

  return (
    <div className={css.container}>
      <FiltersForm />
      <CarCatalog />
    </div>
  );
};

export default CarPage;
