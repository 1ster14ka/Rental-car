import css from "./CarDetails.module.css";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const CarAccessories = ({ accessories, functionalities }) => {
  return (
    <div>
      <h3 className={`${css.carTitle} ${css.carTitleParams}`}>
        Accessories and functionalities:
      </h3>
      <div className={css.carParamsContent}>
        <div className={css.carConditionWrapp}>
          <IoIosCheckmarkCircleOutline />

          <p className={css.carText}>{accessories[0]}</p>
        </div>
        <div className={css.carConditionWrapp}>
          <IoIosCheckmarkCircleOutline />

          <p className={css.carText}>{accessories[1]}</p>
        </div>
        <div className={css.carConditionWrapp}>
          <IoIosCheckmarkCircleOutline />

          <p className={css.carText}>{functionalities[1]}</p>
        </div>
        <div className={css.carConditionWrapp}>
          <IoIosCheckmarkCircleOutline />

          <p className={css.carText}>{functionalities[2]}</p>
        </div>
        <div className={css.carConditionWrapp}>
          <IoIosCheckmarkCircleOutline />

          <p className={css.carText}>{functionalities[0]}</p>
        </div>
        <div className={css.carConditionWrapp}>
          <IoIosCheckmarkCircleOutline />

          <p className={css.carText}>{accessories[2]}</p>
        </div>
      </div>
    </div>
  );
};

export default CarAccessories;
