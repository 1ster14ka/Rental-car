import FiltersForm from "../../components/FiltersForm/FiltersForm";
import CarCatalog from "../../components/CarCatalog/CarCatalog";
import css from "./CarPage.module.css";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/cars/carsSelectors";
import Loader from "../../components/Loader/Loader";

const CarPage = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <div className={css.container}>
      {isLoading && <Loader />}
      <FiltersForm />
      <CarCatalog />
    </div>
  );
};

export default CarPage;
