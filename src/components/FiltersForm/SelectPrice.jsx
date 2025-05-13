import { useDispatch, useSelector } from "react-redux";
import { setPrice } from "../../redux/filters/filtersSlice";
import { selectPrice } from "../../redux/filters/filtersSelector";
import css from "./FiltersForm.module.css";

const SelectPrice = () => {
  const dispatch = useDispatch();
  const selectedPrice = useSelector(selectPrice);
  const priceOptions = [30, 40, 50, 60, 70, 80];

  return (
    <div className={css.selectContainer}>
      <span className={css.titleSelect}>Price/ 1 hour</span>
      <select
        value={selectedPrice}
        onChange={(e) => dispatch(setPrice(e.target.value))}
        className={css.select}
      >
        <option value="">Choose a price</option>
        {priceOptions.map((price) => (
          <option key={price} value={price}>
            To ${price}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectPrice;
