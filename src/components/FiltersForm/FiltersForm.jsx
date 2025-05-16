import { useDispatch, useSelector } from "react-redux";
import {
  selectBrand,
  selectMileageFrom,
  selectMileageTo,
  selectPrice,
} from "../../redux/filters/filtersSelector";
import { useEffect } from "react";
import { getBrands } from "../../redux/filters/filtersOps";
import SelectBrand from "./SelectBrand";
import SelectPrice from "./SelectPrice";
import MileageRange from "./MileageRange";
import css from "./FiltersForm.module.css";
import { useSearchParams } from "react-router-dom";
import {
  resetFilters,
  setBrand,
  setMileageFrom,
  setMileageTo,
  setPrice,
} from "../../redux/filters/filtersSlice";

const FiltersForm = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const brand = useSelector(selectBrand);
  const rentalPrice = useSelector(selectPrice);

  const minMileage = useSelector(selectMileageFrom);
  const maxMileage = useSelector(selectMileageTo);

  function handleSearch() {
    const newParams = new URLSearchParams();

    if (brand) newParams.set("brand", brand);
    if (rentalPrice) newParams.set("rentalPrice", rentalPrice);
    if (minMileage) newParams.set("minMileage", minMileage);
    if (maxMileage) newParams.set("maxMileage", maxMileage);

    newParams.set("page", "1");

    setSearchParams(newParams);
  }

  useEffect(() => {
    dispatch(getBrands());
    const brandParam = searchParams.get("brand");
    const priceParam = searchParams.get("rentalPrice");
    const minMileageParam = searchParams.get("minMileage");
    const maxMileageParam = searchParams.get("maxMileage");
    if (!brandParam && !priceParam && !minMileageParam && !maxMileageParam) {
      dispatch(resetFilters());
      return;
    }

    if (brandParam) dispatch(setBrand(brandParam));
    if (priceParam) dispatch(setPrice(priceParam));
    if (minMileageParam) dispatch(setMileageFrom(Number(minMileageParam)));
    if (maxMileageParam) dispatch(setMileageTo(Number(maxMileageParam)));
  }, [dispatch, searchParams]);

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
