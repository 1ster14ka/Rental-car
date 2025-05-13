import css from "./CarItem.module.css";

const CarItem = ({
  car: {
    id,
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
  const city = address.split(",")[1];
  const country = address.split(",")[2];

  return (
    <div className={css.carCardContainer}>
      <img src={img} alt="" className={css.carImg} />
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
      <button className={css.btnCar}>Read more</button>
    </div>
  );
};

export default CarItem;
