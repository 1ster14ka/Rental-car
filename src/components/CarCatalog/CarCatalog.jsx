import { useDispatch, useSelector } from "react-redux";
import { selectCars, selectTotalPage } from "../../redux/cars/carsSelectors";
import CarItem from "../CarItem/CarItem";
import css from "./CarCatalog.module.css";
import { useEffect } from "react";
import { getAllCars } from "../../redux/cars/carsOps";
import { useSearchParams } from "react-router-dom";

const CarCatalog = () => {
  const cars = useSelector(selectCars);
  const dispatch = useDispatch();
  const totalPages = useSelector(selectTotalPage);

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  // const limit = 12;

  const filters = {
    brand: searchParams.get("brand") || "",
    rentalPrice: searchParams.get("rentalPrice") || "",
    minMileage: searchParams.get("minMileage") || "",
    maxMileage: searchParams.get("maxMileage") || "",
  };

  useEffect(() => {
    dispatch(getAllCars({ filters, page: currentPage }));
  }, [dispatch, currentPage, searchParams.toString()]);
  return (
    <div>
      <ul className={css.carList}>
        {cars.map((car) => {
          return (
            <li key={car.id} className={css.carItem}>
              <CarItem car={car} />
            </li>
          );
        })}
      </ul>
      <div className={css.btnWrapp}>
        {currentPage > 1 && (
          <button
            onClick={() =>
              setSearchParams((prev) => {
                const newParams = new URLSearchParams(prev);
                newParams.set("page", currentPage - 1);
                return newParams;
              })
            }
            className={css.btnNext}
          >
            Prev page
          </button>
        )}
        {currentPage >= 1 && currentPage < totalPages && (
          <button
            onClick={() =>
              setSearchParams((prev) => {
                const newParams = new URLSearchParams(prev);
                newParams.set("page", currentPage + 1);
                return newParams;
              })
            }
          >
            Load more
          </button>
        )}
      </div>
    </div>
  );
};

export default CarCatalog;
