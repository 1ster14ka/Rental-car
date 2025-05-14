import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import css from "./CarDetails.module.css";
// import { IoLocationOutline } from "react-icons/io5";
// import { IoIosCheckmarkCircleOutline } from "react-icons/io";
// import { BsCalendar2Week } from "react-icons/bs";
import CarImage from "../../components/CarDetails/CarImage";
import CarMainInfo from "../../components/CarDetails/CarMainInfo";
import RentalConditions from "../../components/CarDetails/RentalConditions";
import CarSpecifications from "../../components/CarDetails/CarSpecifications";
import CarAccessories from "../../components/CarDetails/CarAccessories";

const CarDetailsPage = () => {
  const { id } = useParams();
  const [infoCar, setInfoCar] = useState({});

  // const {img} = infoCar;

  useEffect(() => {
    const inCar = async () => {
      try {
        const { data } = await axios.get(
          `https://car-rental-api.goit.global/cars/${id}`
        );

        setInfoCar(data);
        console.log(data);
      } catch (err) {
        return err.message;
      }
    };
    inCar();
  }, [id]);
  if (!infoCar.id) {
    return <p>Loading...</p>;
  }
  const {
    img,
    brand,
    model,
    year,
    address,
    mileage,
    rentalPrice,
    description,
    rentalConditions,
    type,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
  } = infoCar;

  const [, city, country] = address.split(",");
  return (
    <div className={css.carDetailsContainer}>
      {/* <div className={css.imgWrapp}>
        <img src={img} alt={description} className={css.imgCar} />
      </div> */}
      <CarImage img={img} description={description} />
      <div>
        {/* <div>
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
        </div> */}

        <CarMainInfo
          {...{
            brand,
            model,
            year,
            city,
            country,
            mileage,
            rentalPrice,
            description,
          }}
        />
        <div className={css.carParamsWrapp}>
          <RentalConditions rentalConditions={rentalConditions} />
          {/* <div>
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
          </div> */}

          <CarSpecifications {...{ year, type, fuelConsumption, engineSize }} />
          {/* <div>
            <h3 className={`${css.carTitle} ${css.carTitleParams}`}>
              Car Specifications:
            </h3>
            <div className={css.carParamsContent}>
              <div className={css.carConditionWrapp}>
                <BsCalendar2Week />
                <p>Year: {year}</p>
              </div>
              <div className={css.carConditionWrapp}>
                <p>Type: {type}</p>
              </div>
              <div className={css.carConditionWrapp}>
                <p>Fuel Consumption: {fuelConsumption}</p>
              </div>
              <div className={css.carConditionWrapp}>
                <p>Engine Size: {engineSize}</p>
              </div>
            </div>
          </div> */}
          <CarAccessories
            accessories={accessories}
            functionalities={functionalities}
          />
          {/* <div>
            <h3 className={`${css.carTitle} ${css.carTitleParams}`}>
              Accessories and functionalities:
            </h3>
            <div className={css.carParamsContent}>
              <p>{accessories[0]}</p>
              <p>{accessories[1]}</p>
              <p>{functionalities[1]}</p>
              <p>{functionalities[2]}</p>
              <p>{functionalities[0]}</p>
              <p>{accessories[2]}</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CarDetailsPage;
