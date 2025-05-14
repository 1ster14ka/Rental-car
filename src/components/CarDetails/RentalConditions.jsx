import css from "./CarDetails.module.css";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const RentalConditions = ({ rentalConditions }) => {
  return (
    <div>
      <h3 className={`${css.carTitle} ${css.carTitleParams}`}>
        Rental Conditions
      </h3>
      <div className={css.carParamsContent}>
        <div className={css.carConditionWrapp}>
          <IoIosCheckmarkCircleOutline />
          <p className={css.carText}>{rentalConditions[0]}</p>
        </div>
        <div className={css.carConditionWrapp}>
          <IoIosCheckmarkCircleOutline />
          <p className={css.carText}>{rentalConditions[2]}</p>
        </div>
        <div className={css.carConditionWrapp}>
          <IoIosCheckmarkCircleOutline />
          <p className={css.carText}>{rentalConditions[1]}</p>
        </div>
      </div>
    </div>
  );
};

export default RentalConditions;
