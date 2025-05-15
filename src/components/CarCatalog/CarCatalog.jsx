import { useDispatch, useSelector } from "react-redux";
import { selectCars, selectTotalPage } from "../../redux/cars/carsSelectors";
import CarItem from "../CarItem/CarItem";
import css from "./CarCatalog.module.css";
import { useEffect, useRef } from "react";
import { getAllCars } from "../../redux/cars/carsOps";
import { useSearchParams } from "react-router-dom";
import { resetCars } from "../../redux/cars/carsSlice";

const CarCatalog = () => {
  const cars = useSelector(selectCars);
  const dispatch = useDispatch();
  const totalPages = useSelector(selectTotalPage);

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const limit = 12;
  const visibleCars = cars.slice(0, currentPage * limit);

  const filters = {};
  if (searchParams.get("brand")) {
    filters.brand = searchParams.get("brand");
  }
  if (searchParams.get("rentalPrice")) {
    filters.rentalPrice = searchParams.get("rentalPrice");
  }
  if (searchParams.get("minMileage")) {
    filters.minMileage = Number(searchParams.get("minMileage"));
  }
  if (searchParams.get("maxMileage")) {
    filters.maxMileage = Number(searchParams.get("maxMileage"));
  }
  const prevFilters = useRef("");

  useEffect(() => {
    const filtersString = new URLSearchParams({
      brand: filters.brand,
      rentalPrice: filters.rentalPrice,
      minMileage: filters.minMileage,
      maxMileage: filters.maxMileage,
    }).toString();

    if (filtersString !== prevFilters.current) {
      dispatch(resetCars());
      prevFilters.current = filtersString;
    }
    dispatch(getAllCars({ filters, page: currentPage }));
  }, [dispatch, currentPage, searchParams.toString()]);
  return (
    <div>
      <ul className={css.carList}>
        {visibleCars.map((car) => {
          return (
            <li key={car.id} className={css.carItem}>
              <CarItem car={car} />
            </li>
          );
        })}
      </ul>
      <div className={css.btnWrapp}>
        {currentPage >= 1 && currentPage < totalPages && (
          <button
            onClick={() =>
              setSearchParams((prev) => {
                const newParams = new URLSearchParams(prev);
                newParams.set("page", currentPage + 1);
                return newParams;
              })
            }
            className={css.btnLoadMore}
          >
            Load more
          </button>
        )}
      </div>
    </div>
  );
};

export default CarCatalog;
