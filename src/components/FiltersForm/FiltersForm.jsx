import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../../redux/filters/filtersSelector";
import { useEffect } from "react";
import { getBrands } from "../../redux/filters/filtersOps";
import { getAllCars } from "../../redux/cars/carsOps";
import SelectBrand from "./SelectBrand";
import SelectPrice from "./SelectPrice";
import MileageRange from "./MileageRange";
import css from "./FiltersForm.module.css";

const FiltersForm = () => {
  const dispatch = useDispatch();

  const filters = useSelector(selectFilters);

  //   console.log(brands);
  function handleSearch() {
    dispatch(getAllCars(filters));
    console.log(filters);
  }

  useEffect(() => {
    dispatch(getBrands());
  }, [dispatch]);

  return (
    <div className={css.filterFormContainer}>
      <SelectBrand />
      <SelectPrice />

      <MileageRange />
      <button onClick={handleSearch} className={css.btnSearch}>
        Search
      </button>
    </div>
  );
};

export default FiltersForm;
