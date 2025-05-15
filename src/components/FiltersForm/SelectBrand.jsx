import { useDispatch, useSelector } from "react-redux";
import { selectBrand, selectBrands } from "../../redux/filters/filtersSelector";
import { setBrand } from "../../redux/filters/filtersSlice";
import css from "./FiltersForm.module.css";

const SelectBrand = () => {
  const dispatch = useDispatch();

  const brands = useSelector(selectBrands);
  const selectedBrand = useSelector(selectBrand);
  return (
    <div className={css.selectContainer}>
      <span className={css.titleSelect}>Car brand</span>
      <select
        name=""
        id=""
        className={css.select}
        value={selectedBrand}
        onChange={(e) => dispatch(setBrand(e.target.value))}
      >
        <option value="">Choose a brand</option>
        {brands.map((brand) => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBrand;
