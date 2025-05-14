import css from "./CarDetails.module.css";
import { IoLocationOutline } from "react-icons/io5";

const CarMainInfo = ({
  brand,
  model,
  year,
  city,
  country,
  mileage,
  rentalPrice,
  description,
}) => {
  return (
    <div>
      <div className={css.infoCar}>
        <h3 className={css.nameCar}>
          {brand} {model}, <span>{year}</span>
        </h3>
        <div className={css.carLocationWrapp}>
          <IoLocationOutline />
          <p className={css.carText}>
            {city}, {country}
            <span className={css.miliage}>Mileage: {mileage}km</span>
          </p>
        </div>

        <p className={css.carPrice}>${rentalPrice}</p>
        <p className={css.carText}>{description}</p>
      </div>
    </div>
  );
};

export default CarMainInfo;
