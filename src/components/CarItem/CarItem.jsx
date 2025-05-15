import css from "./CarItem.module.css";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { favouriteSelect } from "../../redux/favourite/favouriteSelectors";
import {
  addToFavourite,
  removeFromFavourite,
} from "../../redux/favourite/favouriteSlice";
import { NavLink } from "react-router-dom";

const CarItem = ({
  car: {
    id,
    description,
    img,
    brand,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
  },
}) => {
  const dispatch = useDispatch();
  const favouriteCar = useSelector(favouriteSelect);

  const isFavourite = favouriteCar.includes(id);
  const [, city, country] = address.split(",");

  function toggleFavourite(id) {
    if (isFavourite) {
      dispatch(removeFromFavourite(id));
    } else {
      dispatch(addToFavourite(id));
    }
  }

  return (
    <div className={css.carCardContainer}>
      <div className={css.imgWrapp}>
        <img src={img} alt={description} className={css.carImg} />
        <button onClick={() => toggleFavourite(id)}>
          {!isFavourite ? (
            <FaRegHeart className={`${css.icon} ${css.iconNotFavourite}`} />
          ) : (
            <FaHeart className={`${css.icon} ${css.iconFavourite}`} />
          )}
        </button>
      </div>
      <div className={css.carCardTitle}>
        <div className={css.cardBrand}>
          <span>{brand}</span> <span className={css.model}>{model}</span>,
          <span>{year}</span>
        </div>

        <span>${rentalPrice}</span>
      </div>
      <div className={css.carAdress}>
        <span>{city}</span>
        <span>{country}</span>
        <span>{rentalCompany}</span>
      </div>
      <div className={css.carAdress}>
        <span>{type}</span>
        <span>{mileage}</span>
      </div>
      <NavLink to={`/catalog/${id}`} className={css.btnCar}>
        <button className={css.btnReadMore}>Read more</button>
      </NavLink>
    </div>
  );
};

export default CarItem;
