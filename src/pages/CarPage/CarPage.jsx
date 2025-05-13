import FiltersForm from "../../components/FiltersForm/FiltersForm";
import CarCatalog from "../../components/CarCatalog/CarCatalog";
import css from "./CarPage.module.css";

const CarPage = () => {
  return (
    <div className={css.container}>
      <FiltersForm />
      <CarCatalog />
    </div>
  );
};

export default CarPage;
