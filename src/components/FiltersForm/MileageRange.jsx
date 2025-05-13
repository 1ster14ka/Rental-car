import { useDispatch, useSelector } from "react-redux";
import {
  selectMileageFrom,
  selectMileageTo,
} from "../../redux/filters/filtersSelector";
import { setMileageFrom, setMileageTo } from "../../redux/filters/filtersSlice";
import css from "./FiltersForm.module.css";

const MileageRange = () => {
  const dispatch = useDispatch();
  const mileageFrom = useSelector(selectMileageFrom);
  const mileageTo = useSelector(selectMileageTo);
  return (
    <div>
      <span className={css.titleSelect}>Сar mileage / km</span>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className={css.inputWrapper}>
          <span className={css.inputLabel}>From</span>
          <input
            className={`${css.input} ${css.withLabel}`}
            type="number"
            value={mileageFrom}
            onChange={(e) => dispatch(setMileageFrom(e.target.value))}
          />
        </div>

        <div className={css.inputWrapper}>
          <span className={css.inputLabel}>To</span>
          <input
            className={`${css.input} ${css.withLabel}`}
            type="number"
            value={mileageTo}
            onChange={(e) => dispatch(setMileageTo(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
};

export default MileageRange;
