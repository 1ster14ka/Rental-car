import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import css from "./CarDetails.module.css";
import CarImage from "../../components/CarDetails/CarImage";
import CarMainInfo from "../../components/CarDetails/CarMainInfo";
import RentalConditions from "../../components/CarDetails/RentalConditions";
import CarSpecifications from "../../components/CarDetails/CarSpecifications";
import CarAccessories from "../../components/CarDetails/CarAccessories";
import BookingForm from "../../components/BookingForm/BookingForm";
import Loader from "../../components/Loader/Loader";

const CarDetailsPage = () => {
  const { id } = useParams();
  const [infoCar, setInfoCar] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const inCar = async () => {
      try {
        const { data } = await axios.get(
          `https://car-rental-api.goit.global/cars/${id}`
        );

        setInfoCar(data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        return err.message;
      }
    };
    inCar();
  }, [id]);
  if (loading) {
    return <Loader />;
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
      <div>
        <CarImage img={img} description={description} />
        <BookingForm />
      </div>
      <div>
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
          <CarSpecifications {...{ year, type, fuelConsumption, engineSize }} />

          <CarAccessories
            accessories={accessories}
            functionalities={functionalities}
          />
        </div>
      </div>
    </div>
  );
};

export default CarDetailsPage;
