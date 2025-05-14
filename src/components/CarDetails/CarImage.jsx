import css from "./CarDetails.module.css";

const CarImage = ({ img, description }) => {
  return (
    <div className={css.imgWrapp}>
      <img src={img} alt={description} className={css.imgCar} />
    </div>
  );
};

export default CarImage;
