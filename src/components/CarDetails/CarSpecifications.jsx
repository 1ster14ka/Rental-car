import css from "./CarDetails.module.css";
import { BsCalendar2Week } from "react-icons/bs";
import { IoCarSportOutline } from "react-icons/io5";
import { BsFuelPump } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";

const CarSpecifications = ({ year, type, fuelConsumption, engineSize }) => {
  return (
    <div>
      <h3 className={`${css.carTitle} ${css.carTitleParams}`}>
        Car Specifications:
      </h3>
      <div className={css.carParamsContent}>
        <div className={css.carConditionWrapp}>
          <BsCalendar2Week />
          <p>Year: {year}</p>
        </div>
        <div className={css.carConditionWrapp}>
          <IoCarSportOutline />
          <p>Type: {type}</p>
        </div>
        <div className={css.carConditionWrapp}>
          <BsFuelPump />
          <p>Fuel Consumption: {fuelConsumption}</p>
        </div>
        <div className={css.carConditionWrapp}>
          <CiSettings className={css.iconSetting} />
          <p>Engine Size: {engineSize}</p>
        </div>
      </div>
    </div>
  );
};

export default CarSpecifications;
